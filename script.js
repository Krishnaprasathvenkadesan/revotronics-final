document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('background-video');

    // Ensure the video plays even if it's paused by the browser
    video.play();

    // Add an event listener to resume playback if the video is paused
    video.addEventListener('pause', function () {
        video.play();
    });

    // Add an event listener to resume playback when the page gains focus
    document.addEventListener('visibilitychange', function () {
        if (!document.hidden) {
            video.play();
        }
    });
});


const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Optional: Close the menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const answer = faqItem.querySelector('.faq-answer');
      const isActive = faqItem.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
          item.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isActive) {
          faqItem.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
      }
  });
});
  
