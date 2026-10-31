// FUNGSI POPUP GALERI IKMADA
function bukaGaleri(kartu) {
  const modal = document.getElementById("galleryModal");
  const areaVisual = document.getElementById("galleryModalVisual");
  const judul = document.getElementById("galleryModalTitle");
  const deskripsi = document.getElementById("galleryModalDescription");

  const visualKartu = kartu.children[0];
  const judulKartu = kartu.querySelector(".p-6 h3");
  const deskripsiKartu = kartu.querySelector(".p-6 p");

  if (!modal || !visualKartu || !judulKartu || !deskripsiKartu) {
    return;
  }

  // Salin tampilan kartu ke dalam popup
  const visualBesar = visualKartu.cloneNode(true);

  visualBesar.classList.remove("h-56");
  visualBesar.classList.add("h-80", "rounded-2xl");

  areaVisual.replaceChildren(visualBesar);

  // Tampilkan judul dan deskripsi kegiatan
  judul.textContent = judulKartu.textContent.trim();
  deskripsi.textContent = deskripsiKartu.textContent.trim();

  // Buka popup
  modal.showModal();
}
