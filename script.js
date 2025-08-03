const button = document.getElementById('toggleDarkMode');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPref = localStorage.getItem('theme');

if (userPref === 'dark' || (!userPref && prefersDark)) {
  document.body.classList.add('dark');
  button.textContent = 'Mode Terang';
}

button.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  const currentLang = languageSelector.value;
  const t = translations[currentLang];
  button.textContent = isDark ? t.lightMode : t.darkMode;
});

const languageSelector = document.getElementById('languageSelector');
const translations = {
  id: {
    darkMode: 'Mode Gelap',
    lightMode: 'Mode Terang',
    about: 'Tentang Saya',
    aboutText: 'Saya adalah desainer grafis yang fokus pada karya poster, ilustrasi, logo dan 3D. Saya suka membuat desain yang sederhana, menarik dan mudah dipahami.',
    portfolio: 'Portofolio',
    contact: 'Kontak',
    portfolioNote: 'Klik pada gambar untuk membuka halaman pembelian, jika tersedia.',
  },
  en: {
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    about: 'About Me',
    aboutText: 'I’m a graphic designer focused on posters, illustrations, logos and 3D. I enjoy creating designs that are simple, engaging and easy to understand.',
    portfolio: 'Portfolio',
    contact: 'Contact',
    portfolioNote: 'Click an image to open the purchase page, if available.',
  }
};

function applyLanguage(lang) {
  const t = translations[lang];
  document.getElementById('toggleDarkMode').textContent = document.body.classList.contains('dark') ? t.lightMode : t.darkMode;
  document.querySelector('#about h2').textContent = t.about;
  document.querySelector('#about p').textContent = t.aboutText;
  document.querySelector('#projects h2').textContent = t.portfolio;
  document.querySelector('#contact h2').textContent = t.contact;
  document.getElementById('portfolioNote').textContent = t.portfolioNote;
  localStorage.setItem('lang', lang);
}

languageSelector.addEventListener('change', (e) => {
  applyLanguage(e.target.value);
});

const savedLang = localStorage.getItem('lang') || 'id';
languageSelector.value = savedLang;
applyLanguage(savedLang);

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
