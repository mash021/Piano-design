function playSound(note) {
    const audio = document.getElementById(note);
    audio.currentTime = 0; // Reset to the start
    audio.play();
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'q':
            playSound('C');
            break;
        case 'w':
            playSound('D');
            break;
        case 'e':
            playSound('E');
            break;
        case 'r':
            playSound('F');
            break;
        case 't':
            playSound('G');
            break;
        case 'y':
            playSound('A');
            break;
        case 'u':
            playSound('B');
            break;
        case 'i':
            playSound('C#');
            break;
        case 'o':
            playSound('D#');
            break;
        case 'p':
            playSound('F#');
            break;
        case '3':
            playSound('C#');
            break;
        case '3':
            playSound('D#');
            break;
        case '5':
            playSound('F#');
            break;
        case '6':
            playSound('G#');
            break;
        case '7':
            playSound('A#');
            break;
     
        default:
            break;
    }
});