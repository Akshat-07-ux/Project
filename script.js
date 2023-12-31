function submitForm() {
    // Perform form submission processing here (e.g., send data to a server)

    // Redirect to the main page (index.html) after submission
    window.location.href = 'index.html';
}
document.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to the close button
    document.querySelector('.close-button').addEventListener('click', function () {
        // Close the current tab (skills.html)
        window.close();
    });
});


var music = new Audio('music.mp3.mp3'); // Replace 'path/to/your/music.mp3' with your music file path
    var isMusicPlaying = false;

    document.getElementById('music-button').addEventListener('click', function () {
        if (isMusicPlaying) {
            music.pause();
        } else {
            music.play();
        }
        isMusicPlaying = !isMusicPlaying; // Toggle music state
    });

  
    function openImagePopup() {
        var popupContainer = document.getElementById('popupContainer');
        var popupImage = document.getElementById('popupImage');
        popupImage.src = 'MSD.png'; // Set the source of the image
        popupContainer.style.display = 'block';
    }
    
    function closeImagePopup() {
        var popupContainer = document.getElementById('popupContainer');
        popupContainer.style.display = 'none';
    }
    
    