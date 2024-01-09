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
