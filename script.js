let video = document.getElementById('media');
let playPause = document.getElementById('play-pause');
let progress = document.getElementById('progress');
let mute = document.getElementById('mute');
let volume = document.getElementById('volume');
let fullscreen = document.getElementById('fullscreen');
let currentTime = document.getElementById('current-time');
let duration = document.getElementById('duration');
let seekF = document.getElementById('seekF');
let seekB = document.getElementById('seekB');
let player = document.getElementById('media-player')
let counter = document.getElementsByClassName('time-display')
let controls = document.getElementById('controls')
let body = document.getElementById('body')


function playV() {
    if (video.paused) {
        video.play()
        playPause.innerHTML = "⏸️"
        setInterval(() => {(progress.value = (video.currentTime / video.duration) * 100)}, 0)
        playPause.focus()
    }else {
        video.pause()
        playPause.innerHTML = "▶️"
    }
}


function play() {
    if (video.paused) {
        video.play()
        playPause.innerHTML = "⏸️"
        setInterval(() => {(progress.value = (video.currentTime / video.duration) * 100)}, 0)
    }else {
        video.pause()
        playPause.innerHTML = "▶️"
    }
}

function prog() {
    video.currentTime = video.duration * (progress.value / 100)
}

function muted() {
    if (video.muted == true) {
        video.muted = false
        mute.innerHTML = "🔊"
        video.volume = 1
        volume.value = 1
    } else {
        video.muted = true
        mute.innerHTML = "🔇"
        volume.value = 0
    }

}

function vol() {
    video.volume = ((volume.value) / 100)
}

function fS () {
    if (document.fullscreenElement) {
        document.exitFullscreen()
    } else {
        document.documentElement.requestFullscreen();
        body.style.height = '100vh'
    }
};

function sB(x = 1) {
    video.currentTime = video.currentTime - (x * '10')
}

function sF(x = 1) {
    video.currentTime = video.currentTime + (x * '10')
}

progress.onfocus = () => {
    playPause.focus()
}

seekF.onfocus = () => {
    playPause.focus()
}

seekB.onfocus = () => {
    playPause.focus()
}

fullscreen.onfocus = () => {
    playPause.focus()
}

volume.onfocus = () => {
    playPause.focus()
}

mute.onfocus = () => {
    playPause.focus()
}

playPause.onfocus = () => {
    playPause.style.outline = "none"
    x = 6
    onkeydown = (event) => {
        if (event.code == 'Space') {
            if (video.paused == false) {
                video.play()
                playPause.innerHTML = "⏸️"
                setInterval(() => {(progress.value = (video.currentTime / video.duration) * 100)}, 0)
            }else {
                video.pause()
                playPause.innerHTML = "▶️"
            }
        } if (event.code == 'KeyM') {
            muted()
        } if (event.code == 'ArrowRight' && event.ctrlKey != true) {
            sF()
        } if (event.code == 'ArrowLeft' && event.ctrlKey != true) {
            sB()
        } if (event.ctrlKey == true && event.key == 'ArrowRight') {
            sF(x)
        } if (event.ctrlKey == true && event.key == 'ArrowLeft') {
            sB(x)
        }
    }
}

volume.onchange = () => {
    if (volume.value == 0) {
        mute.innerHTML = "🔇"
        muted()
    } else {
        mute.innerHTML = "🔊"
        vol()
    }
}

video.onmousemove = () => {
    playPause.focus()
    controls.style = 'display: flex;'
    player.style = 'cursor: default; top: 3rem'
    let timer
    video.addEventListener(`mousemove`, () => {
        clearTimeout(timer)
        timer = setTimeout(mouse_stopped, 5000)
    })
    function mouse_stopped() {
        if (video.paused == false) {
            controls.style = 'display: none;'
            playPause.focus()
            player.style = 'cursor: none; top: 0.5rem'
        } if (video.paused == true) {
            controls.style = 'display: flex;'
            playPause.focus()
            player.style = 'cursor: default; top: 3rem'
        }
    }
}

player.onmouseleave = () => {
    if (video.paused == false) {
        controls.style = 'display: none;'
        playPause.focus()
        player.style = 'cursor: none; top: 0.5rem'
    } if (video.paused == true) {
        controls.style = 'display: flex;'
        playPause.focus()
        player.style = 'cursor: default; top: 3rem'
    }
}

counter.onclick = () => {
    playPause.focus()
}


window.onload = () => {
    duration.innerHTML = String(new Date(video.duration * 1000).toISOString().slice(11, 19))
    window.setInterval(function(){currentTime.innerHTML = String(new Date(video.currentTime * 1000).toISOString().slice(11, 19))}, 0)
    media = window.location.href
    media = media.slice(54)
    document.addEventListener('keydown', (e) => {
    if(e.code === "Space" && controls.style.display === 'none') {
        if (video.paused == false) {
            video.pause()
            playPause.innerHTML = "▶️"
        }else {
            video.play()
            playPause.innerHTML = "⏸️"
            setInterval(() => {(progress.value = (video.currentTime / video.duration) * 100)}, 0)
        }
    }
    });
}