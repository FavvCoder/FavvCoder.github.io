document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for (const image of images) {
        fetch("https://api.unsplash.com/photos/random?query=flower&client_id=YOUR_ACCESS_KEY")
            .then(response => response.json())
            .then(data => {
                image.src = data.urls.regular;  // Correct property for the image URL
            })
            .catch(error => {
                console.error("Error fetching image:", error);
            });
    }
});