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

function getUsers() {
    fetch('http://localhost:3000/api/all')
    .then(response => response.json())
    .then(data => {
        var usersDiv = document.getElementById('users');
        usersDiv.innerHTML = '';
        
        data.forEach(function(user) {
            usersDiv.innerHTML += '<p>' + user.name + ' (' + user.email + '), age ' + user.age + '</p>';
        });
    })
}

getUsers();