function searchPublications() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let publications = document.querySelectorAll('h2, ul.publication-list');
    
    publications.forEach(section => {
        let year = section.getAttribute('data-year');
        if (year && year.includes(input)) {
            section.style.display = '';  // Show the section
        } else if (year) {
            section.style.display = 'none';  // Hide the section
        }
    });
}
