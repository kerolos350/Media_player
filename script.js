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
let progv = setInterval((progs()), 0)
let conD = setInterval((cont), 0)
let preview = document.getElementById('preview')



progress.value = 0

function fullCk() {
    if (window.innerWidth == screen.Width || window.innerHeight == screen.height) {
        fSImg.src = './svg/form-svgrepo-com.svg'
    } else {
        fSImg.src = './svg/full-svgrepo-com.svg'
    }
    setTimeout(fullCk, 0);
}

function cont() {
    controls.style = 'display : felx;'
}

function progs() {
    progress.value = (video.currentTime / video.duration) * 100
}

function playV() {
    if (video.paused) {
        video.play()
        pPIco.src = './svg/stop-svgrepo-com.svg'
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
        fSImg.src = './svg/form-svgrepo-com.svg'
    }
};

function sB(x = 1) {
    video.currentTime = video.currentTime - (x * '10')
    progs()

}

function sF(x = 1) {
    video.currentTime = video.currentTime + (x * '10')
    progs()
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

body.onmouseover = () => {
    playPause.focus()
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

video.onpause = () => {
    clearInterval(progv)
}

video.onplaying = () => {
    setInterval((progs()), 0)
}

playPause.onfocus = () => {
    playPause.style.outline = "none"
    x = 9
    onkeydown = (event) => {
        if (event.code == 'Space') {
            if (video.paused == false) {
                video.play()
                pPIco.src = './svg/stop-svgrepo-com.svg'
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

progress.oninput = () => {
    clearInterval(progv)
    setInterval((cont), 0)
}

window.onload = () => {
    duration.innerHTML = String(new Date(video.duration * 1000).toISOString().slice(11, 19))
    window.setInterval(function(){currentTime.innerHTML = String(new Date(video.currentTime * 1000).toISOString().slice(11, 19))}, 0)
    media = window.location.href
    media = media.slice(54)
    clearInterval(conD)
    setInterval((progs()), 0);
    progress.value = 0
    document.addEventListener('keydown', (e) => {
    if(e.code === "Space" && controls.style.display === 'none') {
        if (video.paused == false) {
            video.pause()
        pPIco.src = './svg/play-svgrepo-com.svg'
        }else {
            video.play()
            pPIco.src = './svg/stop-svgrepo-com.svg'
        }
    }
    });
    fullCk()
}

progress.oninput = () => {
    progress.onmousemove = (e) => {
        let progLt = progress.getBoundingClientRect().left
        let progRt = progress.getBoundingClientRect().right
        let progLen = progRt - progLt
        let mousPLt = e.clientX - progLt
        let move = (mousPLt / progLen) * 100
        let prvTm = document.getElementById('prvTm')
        preview.style = 'display: block; bottom: 6rem; left: ' + String(e.clientX - 120) +'px'
        prvTm.style = 'display: flex; bottom: 6rem; left: ' + String(e.clientX - 120) +'px'
        let prvT
        setInterval((prev()), 0);
        function prev() {
            prvT = video.duration * (move / 100)
            prvTm.innerHTML = String(new Date(prvT * 1000).toISOString().slice(11, 19))
            preview.src = './content/anime/Boku no Hero Academia 5th Season/Boku no Hero Academia 5th Season الحلقة  14.mp4' + '#t=' + prvT
        }
    }
    progress.onchange = () => {
    clearInterval(conD)
    prog()
    preview.style = 'display: none;'
    prvTm.style = 'display: none;'
    }

    progress.onmouseout = () => {
        preview.style = 'display: none;'
        prvTm.style = 'display: none;'
    }
}

