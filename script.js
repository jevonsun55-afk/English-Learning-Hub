document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to show a specific section
    function showSection(sectionId) {
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    // Function to update active navigation link
    function updateNavLink(activeLink) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    // Event listener for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor jump
            const sectionId = e.target.dataset.section;
            showSection(sectionId);
            updateNavLink(e.target);
        });
    });

    // Handle initial load based on URL hash (optional)
    const initialSection = window.location.hash ? window.location.hash.substring(1) : 'vocabulary';
    showSection(initialSection);
    const initialNavLink = document.querySelector(`.nav-link[data-section="${initialSection}"]`);
    if (initialNavLink) {
        updateNavLink(initialNavLink);
    }
});

// --- Placeholder Functions for Section Functionality ---
// These functions would contain your actual learning logic.

function loadNewWord() {
    alert('Loading a new word... (Implement API call or data fetching here)');
    // In a real application, you'd fetch a new word and update the .word and .definition elements.
    // Example:
    // document.querySelector('.card .word').textContent = 'New Word';
    // document.querySelector('.card .definition').textContent = 'Definition of new word.';
}

function playAudio() {
    alert('Playing audio... (Implement audio playback logic here)');
    const audioPlayer = document.querySelector('#listening audio');
    // For actual playback, ensure the audioPlayer src is valid.
    // audioPlayer.play();
}

let mediaRecorder; // To hold the MediaRecorder object for speaking practice

function startRecording() {
    alert('Starting recording... (Requires browser MediaDevices API)');
    // In a real application, you would use MediaRecorder API:
    // navigator.mediaDevices.getUserMedia({ audio: true })
    //     .then(stream => {
    //         mediaRecorder = new MediaRecorder(stream);
    //         mediaRecorder.start();
    //         document.querySelector('#speaking button:nth-of-type(1)').disabled = true;
    //         document.querySelector('#speaking button:nth-of-type(2)').disabled = false;
    //         console.log('Recording started');
    //     })
    //     .catch(err => console.error('Error accessing microphone:', err));
}

function stopRecording() {
    alert('Stopping recording and processing speech... (Requires backend AI/STT)');
    // if (mediaRecorder && mediaRecorder.state === 'recording') {
    //     mediaRecorder.stop();
    //     document.querySelector('#speaking button:nth-of-type(1)').disabled = false;
    //     document.querySelector('#speaking button:nth-of-type(2)').disabled = true;
    //     mediaRecorder.ondataavailable = event => {
    //         // Send event.data (audio blob) to your backend for speech-to-text and AI feedback
    //         console.log('Audio recorded:', event.data);
    //         document.querySelector('.feedback-message').textContent = 'Processing your speech for feedback...';
    //     };
    // }
}