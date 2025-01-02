# Custom Media Player

This is a custom media player built using HTML, CSS, and JavaScript. It allows users to play, pause, adjust volume, seek forward and backward, and toggle fullscreen mode for video playback. Additionally, it features a progress bar with hover preview functionality and responsive controls for mobile devices.

## Features

- **Play/Pause Button**: Toggle play and pause of the video.
- **Seek Controls**: Skip forward and backward by 10 seconds.
- **Volume Control**: Adjust video volume or mute/unmute.
- **Fullscreen Toggle**: Enter and exit fullscreen mode.
- **Progress Bar**: Display video progress and allow the user to jump to specific times.
- **Hover Preview**: Preview video thumbnail and time when hovering over the progress bar.
- **Mobile Controls**: Simplified controls for mobile devices.
- **Keyboard Shortcuts**:
  - Spacebar: Play/Pause
  - ArrowRight: Seek Forward
  - ArrowLeft: Seek Backward
  - M: Toggle Mute
  - ArrowRight: Seek Forward by 10 seconds
  - ArrowLeft: Seek Backward by 10 seconds
  - Ctrl + ArrowRight: Seek Forward by 1.5 minute
  - Ctrl + ArrowLeft: Seek Backward by 1.5 minute

## Files

- **HTML (`index.php`)**: Contains the structure of the video player and controls.
- **CSS (`style.css`)**: Styles for the video player and controls.
- **JavaScript (`script.js`)**: Logic for video control, progress bar updates, volume control, and fullscreen toggle.

## Installation

To run the custom media player locally, follow these steps:

1. Clone or download the repository:
   ```bash
   git clone <repository-url>
2. Open the project directory:
    ```bash
    cd <project-directory>
3. Open index.php in a browser to view the media player.
- Ensure that the video file (e.g., test.mp4) is available in the ./content/ folder.
- Alternatively, update the video source path in the HTML if your video file is located elsewhere.

## Usage

- Play/Pause: Click the play button or press the spacebar to toggle between play and pause.
- Seek: Use the forward and backward arrows or the seek buttons to move through the video.
- Volume: Adjust the volume slider to control the sound, or use the mute button to mute/unmute.
- Fullscreen: Click the fullscreen button or double-click the video to enter fullscreen mode.
- Progress Bar: Hover over the progress bar to preview video thumbnails and see the time indicator.

## Mobile Support

- The player has responsive mobile controls that show up when the video is playing or when the mouse leaves the video player area.
- The mobile controls include play/pause, seek forward/backward buttons, and a fullscreen toggle.

## Technologies Used

- HTML: Structure and content of the video player.
- CSS: Styles for the video player and controls.
- JavaScript: Logic for interactive video controls, including play/pause, volume control, fullscreen, and progress tracking.

## License

This project is licensed under the Creative Commons NonCommercial License (CC BY-NC) License - see the LICENSE file for details.

## Acknowledgements

- Icons used in the controls are sourced from SVGRepo.
- Video content for testing purposes: Noisestorm - Crab Rave [Monstercat Release].

### Notes:
- Replace `https://github.com/kerolos350/Media_player` with the actual URL to your repository.
- Replace the video source path if the `test.mp4` file is stored elsewhere.
- You can also add a license section if you're using a specific license for your project. For now, I have included the MIT License as an example.