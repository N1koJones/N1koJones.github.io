document.getElementById('searchBar').addEventListener('input', function() {
    var searchQuery = this.value.toLowerCase();
    var tutorials = document.querySelectorAll('.tutorial');

    tutorials.forEach(function(tutorial) {
        var title = tutorial.querySelector('h2').innerText.toLowerCase();
        var description = tutorial.querySelector('p').innerText.toLowerCase();

        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            tutorial.style.display = 'block';
        } else {
            tutorial.style.display = 'none';
        }
    });
});