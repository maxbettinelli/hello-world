const posts = [
  { id: 1, text: 'This is a bigger card from SilkHQ components.' },
  { id: 2, text: 'Cards fill most of the screen like a dating app.' },
  { id: 3, text: 'You can scroll vertically as you would on Twitter.' }
];

function renderFeed() {
  const feed = document.getElementById('feed');
  feed.innerHTML = '';
  posts.forEach(post => {
    const card = document.createElement('silk-card');
    card.className = 'feed-card';
    card.textContent = post.text;
    feed.appendChild(card);
  });
}

renderFeed();

const toggleBtn = document.getElementById('theme-toggle');

function setTheme(mode) {
  const styleTag = document.getElementById('theme-style');
  if (mode === 'dark') {
    styleTag.href = 'https://cdn.jsdelivr.net/npm/@silk-ui/theme@latest/dist/dark.css';
    toggleBtn.textContent = 'Light Mode';
  } else {
    styleTag.href = 'https://cdn.jsdelivr.net/npm/@silk-ui/theme@latest/dist/light.css';
    toggleBtn.textContent = 'Dark Mode';
  }
  toggleBtn.dataset.mode = mode;
}

setTheme('light');

toggleBtn.addEventListener('click', () => {
  const mode = toggleBtn.dataset.mode === 'light' ? 'dark' : 'light';
  setTheme(mode);
});
