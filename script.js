let video = document.getElementById('media'); // The video element
let playPause = document.getElementById('play-pause'); // Play/Pause button
let progress = document.getElementById('progress'); // Progress bar
let mute = document.getElementById('mute'); // Mute button
let volume = document.getElementById('volume'); // Volume slider
let fullscreen = document.getElementById('fullscreen'); // Fullscreen button
let currentTime = document.getElementById('current-time'); // Current time display
let duration = document.getElementById('duration'); // Duration display
let seekF = document.getElementById('seekF'); // Seek forward button
let seekB = document.getElementById('seekB'); // Seek backward button
let player = document.getElementById('media-player'); // Video player container
let counter = document.getElementsByClassName('time-display'); // Time display elements
let controls = document.getElementById('controls'); // Controls container
let body = document.getElementById('body'); // Body element to detect mouse over
let pPIco = document.getElementById('play-pauseImg'); // Play/Pause icon
let mobPPIco = document.getElementById('mobPlay-pauseImg'); // Mobile Play/Pause icon
let fSImg = document.getElementById('fullscreenImg'); // Fullscreen icon
let muteImg = document.getElementById('muteImg'); // Mute icon
let progv = setInterval((progs()), 0); // Update progress bar every frame
let conD = setInterval((cont), 0); // Controls display
let preview = document.getElementById('preview'); // Preview image on progress bar hover
let mobileCont = document.getElementById('mobileCont'); // Mobile controls container
let videoSrc = document.getElementById('src'); // Video source element
let progHoverT; // Time for preview during hover on progress bar

progress.value = 0; // Set initial progress value

// Function to check and toggle fullscreen icon based on the window size
function fullCk() {
    if (window.innerWidth == screen.Width || window.innerHeight == screen.height) {
        fSImg.src = './svg/form-svgrepo-com.svg'; // Form icon when in fullscreen
    } else {
        fSImg.src = './svg/full-svgrepo-com.svg'; // Fullscreen icon when not in fullscreen
    }
    setTimeout(fullCk, 0); // Recheck fullscreen state continuously
}

// Function to make controls visible
function cont() {
    controls.style = 'display : flex;';
}

// Function to update progress bar based on video current time
function progs() {
    progress.value = (video.currentTime / video.duration) * 100; // Calculate progress as percentage
}

// Function to toggle play/pause when clicking the play button
function playV() {
    if (video.paused) {
        video.play();
        pPIco.src = './svg/stop-svgrepo-com.svg'; // Change to stop icon
        mobPPIco.src = './svg/stop-svgrepo-com.svg'; // Change to stop icon on mobile
        playPause.focus(); // Focus on play button for accessibility
    } else {
        if ((video.getBoundingClientRect().left - video.getBoundingClientRect().right) > -700) {
            mobileCont.style.display = 'flex'; // Show mobile controls when video is playing
        } else {
            mobileCont.style.display = 'none'; // Hide mobile controls when video is paused
            video.pause(); // Pause video
            pPIco.src = './svg/play-svgrepo-com.svg'; // Change to play icon
            mobPPIco.src = './svg/play-svgrepo-com.svg'; // Change to play icon on mobile
        }
    }
}

// Play/pause functionality when pressing spacebar
function play() {
    if (video.paused) {
        video.play();
        pPIco.src = './svg/stop-svgrepo-com.svg';
        mobPPIco.src = './svg/stop-svgrepo-com.svg';
        if ((video.getBoundingClientRect().left - video.getBoundingClientRect().right) > -700) {
            mobileCont.style.display = 'none'; // Hide mobile controls if not in fullscreen
        } else {
            mobileCont.style.display = 'none'; // Hide mobile controls
        }
    } else {
        video.pause();
        pPIco.src = './svg/play-svgrepo-com.svg';
        mobPPIco.src = './svg/play-svgrepo-com.svg';
    }
}

// Seek video to specific time based on progress bar hover
function prog() {
    try {
        video.currentTime = progHoverT; // Set video time based on hover preview
    } catch (error) {
        video.currentTime = video.duration * (progress.value / 100); // Fallback if error occurs
    }
}

// Toggle mute functionality
function muted() {
    if (video.muted == true) {
        video.muted = false; // Unmute the video
        muteImg.src = './svg/sound-max-svgrepo-com.svg'; // Change to unmuted icon
        volume.value = '100'; // Set volume slider to 100
        video.volume = volume.value / 100; // Update video volume
    } else {
        video.muted = true; // Mute the video
        muteImg.src = './svg/sound-mute-svgrepo-com.svg'; // Change to muted icon
        volume.value = 0; // Set volume slider to 0
    }
}

// Set volume based on input slider value
function vol(x) {
    video.volume = x; // Update volume
    video.muted = false; // Ensure video is unmuted
}

// Fullscreen toggle function
function fS () {
    if (document.fullscreenElement) {
        document.exitFullscreen(); // Exit fullscreen
        fSImg.src = './svg/full-svgrepo-com.svg'; // Change to fullscreen icon
    } else {
        document.documentElement.requestFullscreen(); // Enter fullscreen
        fSImg.src = './svg/form-svgrepo-com.svg'; // Change to form icon
    }
}

// Seek backward by 10 seconds
function sB(x = 1) {
    video.currentTime = video.currentTime - (x * '10');
    progs(); // Update progress bar
}

// Seek forward by 10 seconds
function sF(x = 1) {
    video.currentTime = video.currentTime + (x * '10');
    progs(); // Update progress bar
}

// Change volume and icon based on slider value
function volCh() {
    if (volume.value == 0) {
        muteImg.src = './svg/sound-mute-svgrepo-com.svg'; // Mute icon when volume is 0
        muted(); // Mute the video
    } else if (volume.value > 10 && volume.value < 50) {
        muteImg.src = './svg/sound-min-svgrepo-com.svg'; // Low volume icon
        vol((volume.value / 100)); // Set volume
    } else if (volume.value > 50) {
        muteImg.src = './svg/sound-max-svgrepo-com.svg'; // High volume icon
        vol((volume.value / 100)); // Set volume
    }
}

// Toggle fullscreen on double-click
video.ondblclick = () => {
    fS();
}

// Focus playPause button when mouse is over body
body.onmouseover = () => {
    playPause.focus();
}

// Set focus to playPause button when focus is on any control
progress.onfocus = () => { playPause.focus(); };
seekF.onfocus = () => { playPause.focus(); };
seekB.onfocus = () => { playPause.focus(); };
fullscreen.onfocus = () => { playPause.focus(); };
volume.onfocus = () => { playPause.focus(); };
mute.onfocus = () => { playPause.focus(); };

// Stop progress bar updates when video is paused
video.onpause = () => {
    clearInterval(progv);
};

// Start progress bar updates when video starts playing
video.onplaying = () => {
    setInterval((progs()), 0);
}

// Spacebar control for play/pause functionality
playPause.onfocus = () => {
    playPause.style.outline = "none"; // Remove outline for accessibility
    x = 9; // Control for skip time
    onkeydown = (event) => {
        if (event.code == 'Space') {
            if (video.paused == false) {
                video.play();
                pPIco.src = './svg/stop-svgrepo-com.svg'; // Play icon
                mobPPIco.src = './svg/stop-svgrepo-com.svg'; // Mobile play icon
            } else {
                video.pause();
                pPIco.src = './svg/play-svgrepo-com.svg'; // Pause icon
                mobPPIco.src = './svg/play-svgrepo-com.svg'; // Mobile pause icon
            }
        }
        if (event.code == 'KeyM') {
            muted(); // Toggle mute with "M"
        }
        if (event.code == 'ArrowRight' && event.ctrlKey != true) {
            sF(); // Seek forward
        }
        if (event.code == 'ArrowLeft' && event.ctrlKey != true) {
            sB(); // Seek backward
        }
        if (event.ctrlKey == true && event.key == 'ArrowRight') {
            sF(x); // Seek forward with ctrl
        }
        if (event.ctrlKey == true && event.key == 'ArrowLeft') {
            sB(x); // Seek backward with ctrl
        }
    }
}

// Handle volume change based on slider
volume.onchange = () => {
    volCh();
}

// Display controls when mouse is moving over video
video.onmousemove = () => {
    playPause.focus();
    controls.style = 'display: flex;';
    player.style = 'cursor: default; top: 3rem';
    let timer;
    video.addEventListener('mousemove', () => {
        clearTimeout(timer);
        timer = setTimeout(mouse_stopped, 5000); // Hide controls after 5 seconds of inactivity
    });
    
    // Hide controls when mouse stops moving
    function mouse_stopped() {
        if (video.paused == false) {
            controls.style = 'display: none;';
            playPause.focus();
            player.style = 'cursor: none; top: -0.1rem';
        } else {
            controls.style = 'display: flex;';
            playPause.focus();
            player.style = 'cursor: default; top: 3rem';
        }
    }
}

// Hide controls when mouse leaves video player area
player.onmouseleave = () => {
    if (video.paused == false) {
        controls.style = 'display: none;';
        playPause.focus();
        player.style = 'cursor: none; top: -0.1rem';
    } else {
        controls.style = 'display: flex;';
        playPause.focus();
        player.style = 'cursor: default; top: 3rem';
    }
}

// Update progress bar and hover preview on input
progress.oninput = () => {
    clearInterval(progv);
    setInterval((cont), 0);
}

// Handle hover preview on progress bar
progress.onmousemove = (e) => {
    let progLt = progress.getBoundingClientRect().left;
    let progRt = progress.getBoundingClientRect().right;
    let progLen = progRt - progLt;
    let mousPLt = e.clientX - progLt;
    let move = (mousPLt / progLen) * 100;
    let prvTm = document.getElementById('prvTm');
    preview.style = 'display: block; bottom: 6rem; left: ' + String(e.clientX - 120) + 'px';
    prvTm.style = 'display: flex; bottom: 6rem; left: ' + String(e.clientX - 120) + 'px';

    setInterval((prev()), 0);

    // Update preview and time on hover
    function prev() {
        let prvT = video.duration * (move / 100);
        prvTm.innerHTML = String(new Date(prvT * 1000).toISOString().slice(11, 19));
        let [hours, minutes, seconds] = prvTm.innerHTML.split(':').map(Number);
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;
        preview.src = videoSrc.src + '#t=' + prvT;
        progHoverT = totalSeconds;
    }
}

// Update video time and hide preview when progress input changes
progress.onchange = () => {
    clearInterval(conD);
    prog();
    preview.style = 'display: none;';
    prvTm.style = 'display: none;';
}

// Hide preview when mouse is out of progress bar
progress.onmouseout = () => {
    preview.style = 'display: none;';
    prvTm.style = 'display: none;';
}

// Initialize video duration and update current time when page loads
window.onload = () => {
    duration.innerHTML = String(new Date(video.duration * 1000).toISOString().slice(11, 19)); // Format duration
    window.setInterval(function () {
        currentTime.innerHTML = String(new Date(video.currentTime * 1000).toISOString().slice(11, 19)); // Update current time
    }, 0);
    media = window.location.href;
    media = media.slice(54);
    clearInterval(conD);
    setInterval((progs()), 0);
    progress.value = 0;

    // Add event listener for spacebar control when controls are hidden
    document.addEventListener('keydown', (e) => {
        if (e.code === "Space" && controls.style.display === 'none') {
            if (video.paused == false) {
                video.pause();
                pPIco.src = './svg/play-svgrepo-com.svg';
                mobPPIco.src = './svg/play-svgrepo-com.svg';
            } else {
                video.play();
                pPIco.src = './svg/stop-svgrepo-com.svg';
                mobPPIco.src = './svg/stop-svgrepo-com.svg';
            }
        }
    });
    fullCk(); // Check fullscreen status on page load
}