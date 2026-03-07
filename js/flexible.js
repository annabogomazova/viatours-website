const btn = document.getElementById("showVideoBtn");
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("myVideo");

btn.addEventListener("click", () => {
    if(videoContainer.style.display === "none" || videoContainer.style.display === "") {
        videoContainer.style.display = "block"; // показываем
        video.play();
    } else {
        videoContainer.style.display = "none"; // скрываем
        video.pause();
        video.currentTime = 0; // возвращаем в начало
    }
});