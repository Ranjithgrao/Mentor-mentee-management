function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function showMarks() {
    var semester = document.getElementById('semester').value;
    document.getElementById('selected-semester').textContent = semester;
    
    var marksTableBody = document.getElementById('marks-table-body');
    marksTableBody.innerHTML = '';

    var marksData = {
        'I': [
            { subject: 'CSE101', marks: 85 },
            { subject: 'CSE102', marks: 78 },
            { subject: 'CSE103', marks: 92 },
            { subject: 'CSE104', marks: 88 },
            { subject: 'CSE105', marks: 90 }
        ],
        'II': [
            { subject: 'CSE201', marks: 81 },
            { subject: 'CSE202', marks: 74 },
            { subject: 'CSE203', marks: 89 },
            { subject: 'CSE204', marks: 87 },
            { subject: 'CSE205', marks: 85 }
        ],
        'III': [
            { subject: 'CSE301', marks: 85 },
            { subject: 'CSE302', marks: 90 },
            { subject: 'CSE303', marks: 78 },
            { subject: 'CSE304', marks: 88 },
            { subject: 'CSE305', marks: 92 }
        ],
        'IV': [
            { subject: 'CSE401', marks: 84 },
            { subject: 'CSE402', marks: 79 },
            { subject: 'CSE403', marks: 91 },
            { subject: 'CSE404', marks: 86 },
            { subject: 'CSE405', marks: 89 }
        ],
        'V': [
            { subject: 'CSE501', marks: 83 },
            { subject: 'CSE502', marks: 75 },
            { subject: 'CSE503', marks: 88 },
            { subject: 'CSE504', marks: 90 },
            { subject: 'CSE505', marks: 86 }
        ],
        'VI': [
            { subject: 'CSE601', marks: 82 },
            { subject: 'CSE602', marks: 76 },
            { subject: 'CSE603', marks: 89 },
            { subject: 'CSE604', marks: 87 },
            { subject: 'CSE605', marks: 84 }
        ]
    };

    var selectedMarks = marksData[semester] || [];
    selectedMarks.forEach(function(item) {
        var row = document.createElement('tr');
        var subjectCell = document.createElement('td');
        subjectCell.textContent = item.subject;
        var marksCell = document.createElement('td');
        marksCell.textContent = item.marks;
        row.appendChild(subjectCell);
        row.appendChild(marksCell);
        marksTableBody.appendChild(row);
    });
}

function printPage() {
    window.print();
}

// Show the profile section by default on page load
document.addEventListener('DOMContentLoaded', function() {
    showSection('profile');
});

document.getElementById('sidebarToggle').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('hidden');
});

function showStudents() {
    var semester = document.getElementById('semester').value;
    // document.getElementById('selected-semester').textContent = semester;

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
        { enrollment: '2020CSE012', name: 'Jack', semester: 'VI'},
        { enrollment: '2020CSE013', name: 'Kevin', semester: 'I' },
        { enrollment: '2020CSE014', name: 'Lily', semester: 'II' },
        { enrollment: '2020CSE015', name: 'Mike', semester: 'III' },
        { enrollment: '2020CSE016', name: 'Nancy', semester: 'IV' },
        { enrollment: '2020CSE017', name: 'Oliver', semester: 'V' },
        { enrollment: '2020CSE018', name: 'Peter', semester: 'VI' }
    ];

    var filteredStudentsData = studentsData.filter(function(item) {
        return item.semester === semester;
    });

    filteredStudentsData.forEach(function(item) {
        var row = document.createElement('tr');
        var enrollmentCell = document.createElement('td');
        enrollmentCell.textContent = item.enrollment;
        var nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        var semesterCell = document.createElement('td');
        semesterCell.textContent = item.semester;
        var detailsCell = document.createElement('td');
        var detailsButton = document.createElement('button');
        detailsButton.textContent = 'Show Details';
        detailsButton.addEventListener('click', function() {
            alert('Details for ' + item.name
                + '\nEnrollment: ' + item.enrollment
                + '\nSemester: ' + item.semester
                + '\nEmail: ' + item.enrollment.toLowerCase() + '@example.com'
                + '\nPhone: 1234567890'
                + '\nAddress: 123, Example Street, City, State, Country - 123456'
                + '\nParent Name: Parent Doe'
                + '\nParent Email: parentdoe@example.com'
                + '\nParent Phone: 0987654321'
            );
        });
        row.appendChild(enrollmentCell);
        row.appendChild(nameCell);
        row.appendChild(semesterCell);
        detailsCell.appendChild(detailsButton);
        row.appendChild(detailsCell);
        studentsTableBody.appendChild(row);
    });
}