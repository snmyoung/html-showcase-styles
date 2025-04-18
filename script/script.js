// Get elements from the page
const card = document.getElementById('mood-card');
const title = document.getElementById('mood-title');
const quote = document.getElementById('mood-quote');

// Mood content dictionary
const moods = {
  calm: {
    title: 'Today feels calm...',
    quote: '"Peace begins with a deep breath and a clear heart."'
  },
  bold: {
    title: 'Today feels bold!',
    quote: '"Speak loud. Show up. Be seen. Be heard."'
  },
  playful: {
    title: 'Today feels playful!',
    quote: '"Joy is the spark of creativity and magic."'
  }
};

// Function to switch mood theme
function setMood(mood) {
  document.body.className = mood; // Change background + font
  title.textContent = moods[mood].title;
  quote.textContent = moods[mood].quote;
}
