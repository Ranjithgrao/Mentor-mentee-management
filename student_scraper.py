import tkinter as tk
from tkinter import ttk
from tkinter import messagebox
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
import pandas as pd
import openpyxl
import os
import time
from io import StringIO

# Dictionary mapping of data fields
d = {
    'reg_no': 'ctl00$ContentPlaceHolder1$txtApplicationNumber',
    'name': 'ctl00$ContentPlaceHolder1$txtNameAs12MarkCard',
    'branch': 'ctl00$ContentPlaceHolder1$txtProgramBranch',
    'mobile_num': 'ctl00$ContentPlaceHolder1$txtStudentMobileNumberPresent',
    'email_id': 'ctl00$ContentPlaceHolder1$txtStudentEmailID',
    'dob': 'ctl00$ContentPlaceHolder1$txtDOB',
    'blood_group': 'ctl00$ContentPlaceHolder1$txtBloodGroup',
    'address_1': 'ctl00$ContentPlaceHolder1$txtPermanentAddressLine1',
    'address_2': 'ctl00$ContentPlaceHolder1$txtPermanentAddressLine2',
    'address_3': 'ctl00$ContentPlaceHolder1$txtPermanentAddressLine3',
    'address_4': 'ctl00$ContentPlaceHolder1$txtPlace',
    'address_5': 'ctl00$ContentPlaceHolder1$txtState',
    'address_6': 'ctl00$ContentPlaceHolder1$txtCountry',
    'address_7': 'ctl00$ContentPlaceHolder1$txtPincode',
    'hostel_block': 'ctl00$ContentPlaceHolder1$txtHostelBlock',
    'hostel_room': 'ctl00$ContentPlaceHolder1$txtHostelRoomNumber',
    'father_name': 'ctl00$ContentPlaceHolder1$txtPFatherName',
    'father_occupation': 'ctl00$ContentPlaceHolder1$txtFatherOccupation',
    'father_email': 'ctl00$ContentPlaceHolder1$txtFatherEmailID',
    'father_mobile': 'ctl00$ContentPlaceHolder1$txtFatherContactNumber',
    'mother_name': 'ctl00$ContentPlaceHolder1$txtPMotherName',
    'mother_occupation': 'ctl00$ContentPlaceHolder1$txtMotherOccupation',
    'mother_email': 'ctl00$ContentPlaceHolder1$txtMotherEmailID',
    'mother_mobile': 'ctl00$ContentPlaceHolder1$txtMotherContactNumber',
    'roll_no': 'ContentPlaceHolder1_lblRollNo',
    'section': 'ContentPlaceHolder1_lblSection',
}

# Mapping cell locations to data fields (only required fields)
cellMapping = {
    'A1': 'reg_no',
    'A2': 'father_email',
    'A3': 'mother_email'
}

# Keys for scraping data from different sections/pages
page1_keys = ['reg_no']
page3_keys = ['father_email', 'mother_email']

def getStudentData(driver):
   
    profile_url = 'https://slcm.manipal.edu/StudentProfile.aspx'
    driver.get(profile_url)
    time.sleep(4)
    result = {}

    # Fetch data from Page 1
    for key in page1_keys:
        input_element = driver.find_element(By.NAME, d[key])
        input_value = input_element.get_attribute("value")
        result[key] = input_value

    # Click on Parent Details and fetch data from Page 3
    a_element = driver.find_element(By.XPATH, "//a[span[text()='Parent Details']]")
    a_element.click()
    time.sleep(3)
    for key in page3_keys:
        input_element = driver.find_element(By.NAME, d[key])
        input_value = input_element.get_attribute("value")
        result[key] = input_value

    # Fetch Grades from Grades Section
    try:
        print("Going to grade sheet page: ")
        gradeUrl = 'https://slcm.manipal.edu/GradeSheet.aspx'
        driver.get(gradeUrl)

        select_element = driver.find_element(By.NAME, "ctl00$ContentPlaceHolder1$ddlSemester")
        options = select_element.find_elements(By.TAG_NAME, "option")

        values_to_select = [option.text for option in options]
        values_to_select = values_to_select[::]
        values_to_select = [item for item in values_to_select if "&" not in item]
        select_element = Select(select_element)
        time.sleep(2)

        course_data = {}
        gpaDict = {}
        for value in values_to_select:
            select_element = Select(driver.find_element(By.NAME, "ctl00$ContentPlaceHolder1$ddlSemester"))
            print("Going to semester: " + value)
            select_element.select_by_value(value)
            time.sleep(4)
            gpaElement = driver.find_element(By.ID, 'ContentPlaceHolder1_lblGPA')
            gpaDict[value] = gpaElement.text
            if value == 'I':
                cgpaElement = driver.find_element(By.ID, 'ContentPlaceHolder1_lblCGPA')
                result['cgpa'] = cgpaElement.text
            table = driver.find_element(By.XPATH, "//table[@id='ContentPlaceHolder1_grvGradeSheet']")
            table_html = table.get_attribute('outerHTML')

            table_html_io = StringIO(table_html)
            df = pd.read_html(table_html_io)[0]

            course_names = df['Subject Name'].tolist()
            grades = df['Grade'].tolist()
            course_data[value] = list(zip(course_names, grades))

            time.sleep(4)

        result['course_data'] = course_data
        result['gpaDict'] = gpaDict

    except Exception as e:
        print(f"Error fetching grades: {str(e)}")

    print("Student data fetched:", result)  # Debug statement
    return result


def saveStudentData(result, regNo):
    
    workbook = openpyxl.Workbook()
    sheet = workbook.active

    # Debug statement to check data before writing to Excel
    print(f"Saving data for {regNo}: {result}")

    # Fill data into Excel template
    sheet.append(['Registration Number', result['reg_no']])
    sheet.append(['Father Email', result['father_email']])
    sheet.append(['Mother Email', result['mother_email']])
    sheet.append([])  # Empty row for separation

    # Add course names, grades, and GPA sorted by semester
    for semester, courses in sorted(result['course_data'].items()):
        sheet.append([f"Semester {semester}"])
        for course_name, grade in courses:
            sheet.append([course_name, grade])
        sheet.append(['GPA', result['gpaDict'][semester]])
        sheet.append([])  # Empty row for separation

    # Add CGPA
    sheet.append(['CGPA', result.get('cgpa', 'N/A')])

    # Create directory if not exists
    if not os.path.exists(regNo):
        os.makedirs(regNo)

    # Save Excel file
    file_path = f"{regNo}/Page_1.xlsx"
    workbook.save(file_path)
    print(f"Data saved to {file_path}")  # Debug statement


def scrape_website():

    input_text = entry.get("1.0", "end-1c").strip()
    students = input_text.split('\n')

    # Selenium setup for Firefox
    driver = webdriver.Firefox()
    url = 'https://slcm.manipal.edu/'
    driver.get(url)

    try:
        # Waiting for login
        WebDriverWait(driver, 100).until(EC.url_to_be("https://slcm.manipal.edu/studenthomepage.aspx"))
        time.sleep(2)

        for reg_no in students:
            try:
                # Get student data
                result = getStudentData(driver)

                # Save student data to Excel
                saveStudentData(result, reg_no)

                # Inform user
                messagebox.showinfo("Success", f"Data saved for registration number {reg_no}")
            except Exception as e:
                messagebox.showerror("Error", f"Error occurred while processing {reg_no}: {str(e)}")
                continue

    finally:
        # Quit the driver
        driver.quit()


# GUI setup using tkinter
window = tk.Tk()
window.title("Web Scraping Example")
window.geometry("500x350")

# Label and Text entry for user input
label = ttk.Label(window, text="Enter registration numbers (one per line):")
label.pack(pady=10)
entry = tk.Text(window, height=10, width=50)
entry.pack()

# Button to submit
submit_button = ttk.Button(window, text="Submit", command=scrape_website)
submit_button.pack(pady=20)

# Run the tkinter main loop
window.mainloop()
