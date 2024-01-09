// Add User
function addUser(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    fetch('http://localhost:3000/api/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, age: age }),
    })
    .then(response => response.json())
    .then(data => {
        getUsers(); // refresh the users list
    });
}

// Update User
function updateUser(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    fetch('http://localhost:3000/api/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, age: age }),
    })
    .then(response => response.json())
    .then(data => {
        getUsers(); // refresh the users list
    });
}

// Delete User
function removeUser(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;

    fetch('http://localhost:3000/api/remove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }),
    })
    .then(response => response.json())
    .then(data => {
        getUsers(); // refresh the users list
    });
}

// Search User
function searchUser(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;

    fetch(`http://localhost:3000/api/search?name=${name}`)
    .then(response => response.json())
    .then(data => {
        var usersTable = document.getElementById('users').getElementsByTagName('tbody')[0];
        usersTable.innerHTML = '';

        data.forEach(function(user) {
            var row = usersTable.insertRow();
            row.insertCell().innerText = user.name;
            row.insertCell().innerText = user.email;
            row.insertCell().innerText = user.age;
        });
        
        // update the current page display
        document.getElementById('currentPage').innerText = 'Search Results';
        
        // hide the total items div
        var totalItemsDiv = document.getElementById('totalItems');
        if (totalItemsDiv) {
            totalItemsDiv.style.display = 'none';
        }
        
        // hide the pagination div
        var paginationDiv = document.getElementById('pagination');
        if (paginationDiv) {
            paginationDiv.style.display = 'none';
        }
        
        // switch to the list page to show the search results
        switchPage('list');
    });
}
