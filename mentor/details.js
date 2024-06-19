function showStudents() {
    var semester = document.getElementById('semester').value;

    var studentsTableBody = document.getElementById('students-table-body');
    studentsTableBody.innerHTML = '';

    var studentsData = [
        { enrollment: '2020CSE001', name: 'John Doe', semester: 'I' },
        { enrollment: '2020CSE002', name: 'Jane Doe', semester: 'II' },
        { enrollment: '2020CSE003', name: 'Alice', semester: 'III' },
        { enrollment: '2020CSE004', name: 'Bob', semester: 'IV' },
        { enrollment: '2020CSE005', name: 'Charlie', semester: 'V' },
        { enrollment: '2020CSE006', name: 'David', semester: 'VI' },
        { enrollment: '2020CSE007', name: 'Eve', semester: 'I' },
        { enrollment: '2020CSE008', name: 'Frank', semester: 'II' },
        { enrollment: '2020CSE009', name: 'Grace', semester: 'III' },
        { enrollment: '2020CSE010', name: 'Helen', semester: 'IV' },
        { enrollment: '2020CSE011', name: 'Ivy', semester: 'V' },
        { enrollment: '2020CSE012', name: 'Jack', semester: 'VI' },
        { enrollment: '2020CSE013', name: 'Kevin', semester: 'I' },
        { enrollment: '2020CSE014', name: 'Lily', semester: 'II' },
        { enrollment: '2020CSE015', name: 'Mike', semester: 'III' },
        { enrollment: '2020CSE016', name: 'Nancy', semester: 'IV' },
        { enrollment: '2020CSE017', name: 'Oliver', semester: 'V' },
        { enrollment: '2020CSE018', name: 'Peter', semester: 'VI' },
        { enrollment: '2020CSE019', name: 'Queen', semester: 'VII' },
        { enrollment: '2020CSE020', name: 'Rose', semester: 'VIII' },
        { enrollment: '2020CSE021', name: 'Sam', semester: 'VIII' },
        { enrollment: '2020CSE022', name: 'Tom', semester: 'VIII' },
        { enrollment: '2020CSE023', name: 'Uma', semester: 'VIII' },
        { enrollment: '2020CSE024', name: 'Vicky', semester: 'VII' },
        { enrollment: '2020CSE025', name: 'Will', semester: 'VII' },
        { enrollment: '2020CSE026', name: 'Xavier', semester: 'VII' },
        { enrollment: '2020CSE027', name: 'Yara', semester: 'VII' },
        { enrollment: '2020CSE028', name: 'Zara', semester: 'VIII' }
    ];

    var filteredStudentsData = studentsData.filter(function (item) {
        return item.semester === semester;
    });

    filteredStudentsData.forEach(function (item) {
        var row = document.createElement('tr');
        var enrollmentCell = document.createElement('td');
        enrollmentCell.textContent = item.enrollment;
        var nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        var semesterCell = document.createElement('td');
        semesterCell.textContent = item.semester;
        var detailsCell = document.createElement('td');
        var detailsLink = document.createElement('a');
        detailsLink.textContent = 'Show Details';
        detailsLink.href = 'details.html?enrollment=' + item.enrollment;
        detailsCell.appendChild(detailsLink);
        row.appendChild(enrollmentCell);
        row.appendChild(nameCell);
        row.appendChild(semesterCell);
        row.appendChild(detailsCell);
        studentsTableBody.appendChild(row);
    });
}

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var enrollment = urlParams.get('enrollment');

     var studentsData = [
        { 
            enrollment: '2020CSE001', 
            name: 'John Doe', 
            semester: 'I',
            email: 'john.doe@example.com',
            mobile: '123-456-7890',
            fatherName: 'Michael Doe',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE002', 
            name: 'Jane Doe', 
            semester: 'II',
            email: 'jane.doe@example.com',
            mobile: '234-567-8901',
            fatherName: 'David Doe',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE003', 
            name: 'Alice', 
            semester: 'III',
            email: 'alice@example.com',
            mobile: '345-678-9012',
            fatherName: 'George',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE004', 
            name: 'Bob', 
            semester: 'IV',
            email: 'bob@example.com',
            mobile: '456-789-0123',
            fatherName: 'Robert',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE005', 
            name: 'Charlie', 
            semester: 'V',
            email: 'charlie@example.com',
            mobile: '567-890-1234',
            fatherName: 'Charles',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE006', 
            name: 'David', 
            semester: 'VI',
            email: 'david@example.com',
            mobile: '678-901-2345',
            fatherName: 'Daniel',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE007', 
            name: 'Eve', 
            semester: 'I',
            email: 'eve@example.com',
            mobile: '789-012-3456',
            fatherName: 'Edward',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE008', 
            name: 'Frank', 
            semester: 'II',
            email: 'frank@example.com',
            mobile: '890-123-4567',
            fatherName: 'Fred',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE009', 
            name: 'Grace', 
            semester: 'III',
            email: 'grace@example.com',
            mobile: '901-234-5678',
            fatherName: 'Gavin',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE010', 
            name: 'Helen', 
            semester: 'IV',
            email: 'helen@example.com',
            mobile: '012-345-6789',
            fatherName: 'Henry',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE011', 
            name: 'Ivy', 
            semester: 'V',
            email: 'ivy@example.com',
            mobile: '123-456-7890',
            fatherName: 'Ian',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE012', 
            name: 'Jack', 
            semester: 'VI',
            email: 'jack@example.com',
            mobile: '234-567-8901',
            fatherName: 'John',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE013', 
            name: 'Kevin', 
            semester: 'I',
            email: 'kevin@example.com',
            mobile: '345-678-9012',
            fatherName: 'Keith',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE014', 
            name: 'Lily', 
            semester: 'II',
            email: 'lily@example.com',
            mobile: '456-789-0123',
            fatherName: 'Leo',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE015', 
            name: 'Mike', 
            semester: 'III',
            email: 'mike@example.com',
            mobile: '567-890-1234',
            fatherName: 'Matt',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE016', 
            name: 'Nancy', 
            semester: 'IV',
            email: 'nancy@example.com',
            mobile: '678-901-2345',
            fatherName: 'Neil',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE017', 
            name: 'Oliver', 
            semester: 'V',
            email: 'oliver@example.com',
            mobile: '789-012-3456',
            fatherName: 'Oscar',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE018', 
            name: 'Peter', 
            semester: 'VI',
            email: 'peter@example.com',
            mobile: '890-123-4567',
            fatherName: 'Patrick',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE019', 
            name: 'Queen', 
            semester: 'VII',
            email: 'queen@example.com',
            mobile: '901-234-5678',
            fatherName: 'Quincy',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE020', 
            name: 'Rose', 
            semester: 'VIII',
            email: 'rose@example.com',
            mobile: '012-345-6789',
            fatherName: 'Ronald',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE021', 
            name: 'Sam', 
            semester: 'VIII',
            email: 'sam@example.com',
            mobile: '123-456-7890',
            fatherName: 'Samuel',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE022', 
            name: 'Tom', 
            semester: 'VIII',
            email: 'tom@example.com',
            mobile: '234-567-8901',
            fatherName: 'Thomas',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE023', 
            name: 'Uma', 
            semester: 'VIII',
            email: 'uma@example.com',
            mobile: '345-678-9012',
            fatherName: 'Uday',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE024', 
            name: 'Vicky', 
            semester: 'VII',
            email: 'vicky@example.com',
            mobile: '456-789-0123',
            fatherName: 'Victor',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE025', 
            name: 'Will', 
            semester: 'VII',
            email: 'will@example.com',
            mobile: '567-890-1234',
            fatherName: 'William',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE026', 
            name: 'Xavier', 
            semester: 'VII',
            email: 'xavier@example.com',
            mobile: '678-901-2345',
            fatherName: 'Xander',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE027', 
            name: 'Yara', 
            semester: 'VII',
            email: 'yara@example.com',
            mobile: '789-012-3456',
            fatherName: 'Yusuf',
            course: 'Computer Science'
        },
        { 
            enrollment: '2020CSE028', 
            name: 'Zara', 
            semester: 'VIII',
            email: 'zara@example.com',
            mobile: '890-123-4567',
            fatherName: 'Zachary',
            course: 'Computer Science'
        }
    ];    

    var student = studentsData.find(function(item) {
        return item.enrollment === enrollment;
    });

    if (student) {
        document.getElementById('name').textContent = student.name;
        document.getElementById('enrollment').textContent = student.enrollment;
        document.getElementById('semester').textContent = student.semester;
        document.getElementById('email').textContent = student.email;
        document.getElementById('mobile').textContent = student.mobile;
        document.getElementById('father_name').textContent = student.fatherName;
        document.getElementById('course').textContent = student.course;
    }
    else {
        document.getElementById('not-found').style.display = 'block';
        document.getElementById('details').style.display = 'none';
        
    }
}