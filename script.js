const ebooks = [
  {
    id: "ebook-01",
    alt: "Panduan Ringkas Jana Duit"
  },
  {
    id: "ebook-02",
    alt: "Asas Bina Aliran Duit"
  },
  {
    id: "ebook-03",
    alt: "Baca Sikit. Lepas Tu Buat"
  }
];

const grid = document.getElementById("ebookGrid");

ebooks.forEach(e => {
  grid.innerHTML += `
    <a class="ebook-card" href="ebooks/${e.id}/index.html">
      <img src="ebooks/${e.id}/cover.png" alt="${e.alt}">
    </a>
  `;
});
