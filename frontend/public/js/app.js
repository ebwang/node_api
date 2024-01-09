document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    fetch('http://localhost:3000/api/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, age: age }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        getUsers();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

var currentPage = 1; // start on page 1
var itemsPerPage = 10; // change this to the number of items you want per page

function getUsers() {
   fetch('http://localhost:3000/api/all')
   .then(response => response.json())
   .then(data => {
       var usersDiv = document.getElementById('users');
       usersDiv.innerHTML = '';
       
       var start = (currentPage - 1) * itemsPerPage; // calculate the start index
       var end = start + itemsPerPage; // calculate the end index

       // slice the data array to get only the items for the current page
       var pageItems = data.slice(start, end);

       pageItems.forEach(function(user) {
           usersDiv.innerHTML += '<p>' + user.name + ' (' + user.email + '), age ' + user.age + '</p>';
       });
   })
}

document.getElementById('prevPage').addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        getUsers();
    }
});

document.getElementById('nextPage').addEventListener('click', function() {
    currentPage++;
    getUsers();
});

getUsers();