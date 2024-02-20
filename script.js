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
let pPIco = document.getElementById('play-pauseImg')
let fSImg = document.getElementById('fullscreenImg')
let muteImg = document.getElementById('muteImg')


function playV() {
    if (video.paused) {
        video.play()
        pPIco.src = './svg/stop-svgrepo-com.svg'
        setInterval(() => {(progress.value = (video.currentTime / video.duration) * 100)}, 500)
        playPause.focus()
    }else {
        video.pause()
        pPIco.src = './svg/play-svgrepo-com.svg'
    }
}


function play() {
    if (video.paused) {
        video.play()
        pPIco.src = './svg/stop-svgrepo-com.svg'
        setInterval(() => {(progress.value = (video.currentTime / video.duration) * 100)}, 500)
    }else {
        video.pause()
        pPIco.src = './svg/play-svgrepo-com.svg'
    }
}

function prog() {
    video.currentTime = video.duration * (progress.value / 100)
}

function muted() {
    if (video.muted == true) {
        video.muted = false
        muteImg.src = './svg/sound-max-svgrepo-com.svg'
        volume.value = '100'
        video.volume = volume.value / 100
    } else {
        video.muted = true
        muteImg.src = './svg/sound-mute-svgrepo-com.svg'
        volume.value = 0
    }

}

function vol(x) {
    video.volume = x
    video.muted = false
}

function fS () {
    if (document.fullscreenElement) {
        document.exitFullscreen()
        fSImg.src = './svg/full-svgrepo-com.svg'
    } else {
        document.documentElement.requestFullscreen();
        body.style.height = '100vh'
        fSImg.src = './svg/form-svgrepo-com.svg'
    }
};

function sB(x = 1) {
    video.currentTime = video.currentTime - (x * '10')
}

function sF(x = 1) {
    video.currentTime = video.currentTime + (x * '10')
}

function volCh() {
    if (volume.value == 0) {
        muteImg.src = './svg/sound-mute-svgrepo-com.svg'
        muted()
    } if (volume.value > 10 && volume.value < 50) {
        muteImg.src = './svg/sound-min-svgrepo-com.svg'
        vol((volume.value / 100))
    } if (volume.value > 50) {
        muteImg.src = './svg/sound-max-svgrepo-com.svg'
        vol((volume.value / 100))
    }
}

video.ondblclick = () => {
    fS()
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
                pPIco.src = './svg/stop-svgrepo-com.svg'
                setInterval(() => {(progress.value = (video.currentTime / video.duration) * 100)}, 500)
            }else {
                video.pause()
                pPIco.src = './svg/play-svgrepo-com.svg'
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
    volCh()
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
            player.style = 'cursor: none; top: -0.1rem'
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
        player.style = 'cursor: none; top: -0.1rem'
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
        pPIco.src = './svg/play-svgrepo-com.svg'
        }else {
            video.play()
            pPIco.src = './svg/stop-svgrepo-com.svg'
            setInterval(() => {(progress.value = (video.currentTime / video.duration) * 100)}, 500)
        }
    }
    });
}