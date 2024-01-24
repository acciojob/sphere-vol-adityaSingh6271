function volume_sphere() {
    // Get the radius value from the input field
    var radius = parseFloat(document.getElementById('radius').value);

    // Check if the entered value is a valid number
    if (!isNaN(radius)) {
        // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
        var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Display the calculated volume in the volume input field
        document.getElementById('volume').value = volume.toFixed(2);
    } else {
        // If the entered value is not a valid number, display an error message
        alert('Please enter a valid number for the radius.');
    }

    // Prevent the form from submitting
    return false;
}

window.onload = function () {
    document.getElementById('MyForm').onsubmit = function () {
        volume_sphere();
        return false;
    };
};
