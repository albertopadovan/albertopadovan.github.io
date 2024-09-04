function searchPublications() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let publications = document.querySelectorAll('.publication');
    
    publications.forEach(publication => {
        let year = publication.dataset.year;
        if (year.includes(input)) {
            publication.style.display = '';
        } else {
            publication.style.display = 'none';
        }
    });
}
