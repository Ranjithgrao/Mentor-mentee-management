// document.getElementById('semester-select').addEventListener('change', function() {
//     // var semester = this.value;
//     // var tableBody = document.getElementById('marks-table-body');

//     var semester = document.getElementById('semester').value;
//     document.getElementById('selected-semester').textContent = semester;
    
//     // Clear the existing table
//     while (tableBody.firstChild) {
//         tableBody.removeChild(tableBody.firstChild);
//     }
    
//     // Create a new row for each subject
//     subjects[semester].forEach(function(subject) {
//         var row = document.createElement('tr');
        
//         // Create the subject code cell
//         var codeCell = document.createElement('td');
//         codeCell.textContent = subject;
//         row.appendChild(codeCell);
        
//         // Create the input field cell
//         var inputCell = document.createElement('td');
//         var input = document.createElement('input');
//         input.type = 'number';
//         input.min = 0;
//         input.max = 100;
//         inputCell.appendChild(input);
//         row.appendChild(inputCell);
        
//         // Add the row to the table
//         tableBody.appendChild(row);
//     });
// });

// write uploadMarks function here
function uploadMarks() {
    