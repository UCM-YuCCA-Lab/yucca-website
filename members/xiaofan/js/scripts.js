function showSelected() {
  document.getElementById("selected").style.display = "block";
  document.getElementById("allByDate").style.display = "none";
  document.getElementById("allByTopic").style.display = "none";
}

function showAllByDate() {
  document.getElementById("selected").style.display = "none";
  document.getElementById("allByDate").style.display = "block";
  document.getElementById("allByTopic").style.display = "none";
}

function showAllByTopic() {
  document.getElementById("selected").style.display = "none";
  document.getElementById("allByDate").style.display = "none";
  document.getElementById("allByTopic").style.display = "block";
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('selected')); // Remove selected class from all buttons
    button.classList.add('selected'); // Add selected class to the clicked button
  });
});

function scrollToTopic(topicId) {
  // Remove 'selected' class from all buttons
  const buttons = document.querySelectorAll('.topics-buttons button');
  buttons.forEach(button => button.classList.remove('selected'));

  // Add 'selected' class to clicked button
  event.target.classList.add('selected');

  // Scroll to the topic
  document.getElementById(topicId).scrollIntoView({ behavior: 'smooth' });
}