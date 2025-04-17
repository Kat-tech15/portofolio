
document.getElementById('contactForm').addEventListener('submit', async function (e) {
   e.preventDefault();

   
   const fullName = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;

   try{
    const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, message })
    });

    const data = await res.json();

    alert(data.message || 'Message sent successfully!');
    this.reset();

   } catch (err) {
    alert('Failed to sent message. Please try again later.');
    console.error(err);
   }
});
    
