<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Media Player</title>
    <link rel="stylesheet" href="style.css"> <!-- Link to external CSS file -->
</head>
<body id='body'>
    <div id="media-player"> <!-- Media player container -->
        <?php
            // PHP to set video source
            $videoSrc = './content/test.mp4';
            echo '<video id="media" onclick="playV()">'; // <!-- Video element with play functionality on click -->
            echo '<source id="src" src="'.$videoSrc.'" type="video/mp4">'; // <!-- Video source -->
            echo '</video>';
            echo '<div id="controls" class="controls">'; //  <!-- Controls container -->
            echo '<input type="range" id="progress" onchange="prog()" value="0">'; //  <!-- Progress bar -->
            echo '<div class="btns">'; //  <!-- Buttons container -->
                echo '<div class="lfBtn">'; //  <!-- Left-side buttons container -->
                    echo '<button id="play-pause" class="play" onclick="play();"><img id="play-pauseImg" src="./svg/play-svgrepo-com.svg"></button>'; //  <!-- Play/pause button -->
                    echo '<div class="sound">'; //  <!-- Sound controls container -->
                        echo '<button id="mute" onclick="muted()" class="mute"><img id="muteImg" src="./svg/sound-max-svgrepo-com.svg"></button>'; //  <!-- Mute button -->
                        echo '<input type="range" id="volume" onchange="vol()" min="0" max="100" step="1" value="100">'; //  <!-- Volume control -->
                    echo '</div>';
                    echo '<div class="time-display">'; //  <!-- Time display container -->
                        echo '<span id="current-time">00:00:00</span> / <span id="duration" onload="len()">00:00:00</span>'; //  <!-- Current time and video duration -->
                    echo '</div>';
                    echo '<button id="seekB" class="seekB" onclick="sB()"><img src="./svg/expand-left-double-svgrepo-com.svg"></button>'; //  <!-- Seek backward button -->
                    echo '<button id="seekF" class="seekF" onclick="sF()"><img src="./svg/expand-right-double-svgrepo-com.svg"></button>'; //  <!-- Seek forward button -->
                echo '</div>';
                echo '<button id="fullscreen" class="fullscreen" onclick="fS()"><img id="fullscreenImg" src="./svg/full-svgrepo-com.svg"></button>'; //  <!-- Fullscreen button -->
            echo '</div>';
            echo '</div>';
            echo '<div>'; //  <!-- Preview video container -->
            echo '<video id="preview" src="'.$videoSrc.'"></video>'; //  <!-- Preview video element -->
            echo '<p id="prvTm"></p>'; //  <!-- Placeholder for preview time -->
            echo '</div>';
        ?>
        <!-- Mobile controls container -->
        <div id="mobileCont">
            <button id="MobSeekB" class="seekB" onclick="sB()"><img src="./svg/expand-left-double-svgrepo-com.svg"></button> <!-- Seek backward button for mobile -->
            <button id="mobPlay-pause" class="play" onclick="play();"><img id="mobPlay-pauseImg" src="./svg/play-svgrepo-com.svg"></button> <!-- Play/pause button for mobile -->
            <button id="mobSeekF" class="seekF" onclick="sF()"><img src="./svg/expand-right-double-svgrepo-com.svg"></button> <!-- Seek forward button for mobile -->
        </div>
    </div>

    <script src="script.js"></script> <!-- Link to external JavaScript file -->
</body>
</html>