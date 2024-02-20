<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Media Player</title>
    <link rel="stylesheet" href="style.css">
</head>
<body id='body'>
    <div id="media-player">
        <video id="media" onclick="playV()">
            <source id="src" src="./content/video/Avengers Endgame/Avengers Endgame.mp4" type="video/mp4">
        </video>
        <div id="controls" class="controls">
            <input type="range" id="progress" onchange="prog()" value="0">
            <div class="btns">
                <div class="lfBtn">
                    <button id="play-pause" class="play" onclick="play();">▶️</button>
                    <div class="sound">
                        <button id="mute" onclick="muted()" class="mute">🔊</button>
                        <input type="range" id="volume" onchange="vol()" min="0" max="100" step="1" value="100">
                    </div>
                    <div class="time-display">
                        <span id="current-time">00:00:00</span> / <span id="duration" onload="len()">00:00:00</span>
                    </div>
                    <button id="seekB" class="seekB" onclick="sB()">↩️</button>
                    <button id="seekF" class="seekF" onclick="sF()">↪️</button>
                </div>
                <button id="fullscreen" class="fullscreen" onclick="fS()">↗️</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
