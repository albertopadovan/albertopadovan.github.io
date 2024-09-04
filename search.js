function searchPublications() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let sections = document.querySelectorAll('h2, ul.publication-list');
    
    sections.forEach(section => {
        let year = section.dataset.year;
        if (year && year.includes(input)) {
            section.style.display = '';  // Show the section
        } else if (year) {
            section.style.display = 'none';  // Hide the section
        }
    });
}
