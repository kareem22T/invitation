const form = document.getElementById('invitation-form');
const declineButton = document.querySelector('.decline');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  console.log(`Name: ${name}, Phone: ${phone}`);

  // You can implement your logic here to send the RSVP data
  // or perform other actions based on the user's choice.

  alert('Your response has been submitted!');
});

declineButton.addEventListener('click', () => {
  alert('Sorry to hear you can\'t make it!');
});
