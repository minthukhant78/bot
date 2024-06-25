document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert('Thank you for your message!');
    // Here you can add code to submit the form data to a server
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color of the hero section
function changeBackgroundColor() {
    const heroSection = document.getElementById('hero');
    heroSection.style.backgroundColor = getRandomColor();
}

// Change the background color every 5 seconds
setInterval(changeBackgroundColor, 5000);

// Like button functionality
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('You liked this course!');
    });
});

// Share button functionality
document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', function() {
        const courseTitle = this.parentElement.previousElementSibling.previousElementSibling.innerText;
        const courseURL = window.location.href;
        alert(`Share this course: ${courseTitle}\nURL: ${courseURL}`);
    });
});
