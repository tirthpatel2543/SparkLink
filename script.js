document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const project = document.getElementById('project').value;

  if (name && email && project) {
      alert('Thank you for contacting! We will get back to you soon.');
  } else {
      alert('Please fill in all the fields.');
  }
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        project: document.getElementById('project').value
    };

    fetch('http://localhost:3000/send-mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        alert('Error sending email');
        console.error('Error:', error);
    });
});
