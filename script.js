const ebooks = [
  {
    id: "ebook-01",
    title: "Panduan Ringkas Jana Duit"
  },
  {
    id: "ebook-02",
    title: "Asas Bina Aliran Duit"
  },
  {
    id: "ebook-03",
    title: "Baca Sikit. Lepas Tu Buat"
  }
];

const grid = document.getElementById("ebookGrid");

ebooks.forEach(ebook => {
  const card = document.createElement("a");
  card.className = "ebook-card";
  card.href = `ebooks/${ebook.id}/index.html`;

  const img = document.createElement("img");
  img.src = `ebooks/${ebook.id}/cover.png`;
  img.alt = ebook.title;

  card.appendChild(img);
  grid.appendChild(card);
});
