document.getElementById('paletteForm').onsubmit = function(event) {
    var name = document.getElementById('paletteName').value;
    if (name.length < 3) {
        alert('Palette name must be at least 3 characters long.');
        event.preventDefault(); // Prevent form from submitting
    }
};
