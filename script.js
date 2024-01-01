function speak() {
    const textToSpeak = document.getElementById('textToSpeak').value;

    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        synth.speak(utterance);
    } else {
        alert('Text-to-speech is not supported in your browser. Please use a modern browser.');
    }
}
