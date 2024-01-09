var currentPage = 1; // start on page 1
var itemsPerPage = 8; // change this to the number of items you want per page

function getUsers() {
    fetch('http://localhost:3000/api/all')
    .then(response => response.json())
    .then(data => {
        var usersTable = document.getElementById('users').getElementsByTagName('tbody')[0];
        usersTable.innerHTML = '';
 
        var start = (currentPage - 1) * itemsPerPage; // calculate the start index
        var end = start + itemsPerPage; // calculate the end index
 
        // slice the data array to get only the items for the current page
        var pageItems = data.slice(start, end);
 
        pageItems.forEach(function(user) {
            var row = usersTable.insertRow();
            row.insertCell().innerText = user.name;
            row.insertCell().innerText = user.email;
            row.insertCell().innerText = user.age;
        });
 
        // update the current page display
        document.getElementById('currentPage').innerText = 'Page ' + currentPage;

       // display the total number of items
       var totalItemsDiv = document.getElementById('totalItems');
       if (!totalItemsDiv) {
           totalItemsDiv = document.createElement('div');
           totalItemsDiv.id = 'totalItems';
           usersTable.parentNode.insertBefore(totalItemsDiv, usersTable.nextSibling);
       }
       totalItemsDiv.innerText = 'Total items: ' + data.length;

    })
}
 
getUsers();
