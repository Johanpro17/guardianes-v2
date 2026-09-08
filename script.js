/* =======================================================================
   CONTENIDO EDITABLE
   Para añadir tus propias fotos: copia el archivo a assets/imagenes/
   y agrega una línea al arreglo GALLERY. Igual para videos en VIDEOS.
   ======================================================================= */

const GALLERY = [
  { src: "assets/imagenes/Piedra Antigua 1.jpeg", caption: `La piedra grande (con forma de "hacha" o cuña) y la piedra más pequeña con muesca: son herramientas líticas pulidas, típicas de sociedades prehispánicas andinas. La grande, con su filo curvo, encaja con un hacha o "porra" de mano; la pequeña, con esa hendidura central, parece un fragmento de mano de moler o percutor. Se trabajaban por pulido de piedras de río, sin metal.` },
  { src: "assets/imagenes/Vasija 1.jpeg", caption: `La vasija de cerámica: es una pieza modelada a mano (no a torno, como todas las cerámicas prehispánicas americanas), de cuerpo globular y borde evertido "acampanado". Ese perfil —cuello corto que se abre hacia afuera— es común en cerámica utilitaria de la sierra centro-norte del Perú, de periodos intermedios prehispánicos.` },
  { src: "assets/imagenes/Fosil 1.jpeg", caption: `La pieza que llamas "fósil": en realidad es un cráneo humano, no un fósil. Tiene marcas de rotulado en azul, lo que sugiere que ya está catalogado como pieza de estudio (osteológica o arqueológica) en algún inventario, probablemente asociado a un contexto funerario del mismo sitio.` },
  { src: "assets/imagenes/Institucion.jpeg",   caption: "Nuestra institución educativa promotora" },
  { src: "assets/imagenes/Logo del Colegio que promociona ello.jpeg", caption: "Logotipo del colegio" },
  { src: "assets/imagenes/Lugar de museo ecologico 1.jpeg", caption: "Cconocc y su paisaje ancestral" },
  { src: "assets/imagenes/Lugar de museo ecoligico 2.jpeg", caption: "Vistas del entorno de la Ciudad Perdida" },
  { src: "assets/imagenes/Mapa Pólitico del Lugar turistico Tayacaja.jpeg", caption: "Mapa de la zona turística — Cconocc, Ahuaycha" },
];

const VIDEOS = [
  { src: "assets/videos/Video 1.mp4", title: "La Ciudad Perdida de Cconocc" },
  { src: "assets/videos/Video 2.mp4", title: "Muros ancestrales: viento y piedra" },
  { src: "assets/videos/Video 3.mp4", title: "Montañas majestuosas y atardeceres dorados" },
  { src: "assets/videos/Video 4.mp4", title: "La campana de oro y la leyenda" },
  { src: "assets/videos/video 5.mp4", title: "La Ciudad Perdida te espera" },
];

const TRAIL = [
  { alt: "01", name: "Punto de partida", desc: "El centro poblado de Cconocc, donde comienza el ascenso hacia la Ciudad Perdida.", gain: "Inicio" },
  { alt: "02", name: "Muros ancestrales", desc: "Las ruinas de piedra que la tradición atribuye a los incas.", gain: "+1 km" },
  { alt: "03", name: "Vista panorámica", desc: "Valles y montañas majestuosas que abrazan el sitio desde la altura.", gain: "+2 km" },
  { alt: "04", name: "La leyenda", desc: "El lugar donde, según se cuenta, resuena la campana de oro a la medianoche.", gain: "+3 km" },
];

const CALENDAR = [
  { m: "Ene", t: "16°C", n: "Lluvias suaves, campos verdes." },
  { m: "Feb", t: "15°C", n: "Carnaval andino en la plaza." },
  { m: "Mar", t: "15°C", n: "Tiempo de cosecha y ferias locales." },
  { m: "Abr", t: "14°C", n: "Cielos despejados, ideal para caminatas." },
  { m: "May", t: "12°C", n: "Empieza la temporada seca." },
  { m: "Jun", t: "9°C",  n: "Noches frías, festival del sol." },
  { m: "Jul",  t: "8°C",  n: "Mes más frío; cielos nítidos de noche." },
  { m: "Ago",  t: "10°C", n: "Vientos fuertes en la altura." },
  { m: "Sep",  t: "12°C", n: "Siembra; provincia tranquila." },
  { m: "Oct",  t: "14°C", n: "Primeras lluvias, buen momento para fotos." },
  { m: "Nov",  t: "15°C", n: "Fiestas patronales de la provincia." },
  { m: "Dic",  t: "16°C", n: "Cierre de año, ferias artesanales." },
];

/* ======================================================================= */

function renderGallery(){
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = GALLERY.map(item => `
    <figure>
      <img src="${item.src}" alt="${item.caption}" loading="lazy"
          onerror="this.closest('figure').style.background='linear-gradient(135deg,#1F5C56,#14213D)'; this.remove();">
      <figcaption>${item.caption}</figcaption>
    </figure>
  `).join("");
}

function renderVideos(){
  const grid = document.getElementById("videoGrid");
  grid.innerHTML = VIDEOS.map(v => `
    <div class="video-card">
      <video controls preload="metadata">
        <source src="${v.src}" type="video/mp4">
        Tu navegador no soporta video HTML5.
      </video>
      <div class="video-card__title">${v.title}</div>
    </div>
  `).join("");
}

function renderTrail(){
  const list = document.getElementById("trailList");
  list.innerHTML = TRAIL.map(p => `
    <div class="trail__point">
      <span class="trail__alt">${p.alt}</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <span class="trail__meters">${p.gain} del recorrido</span>
    </div>
  `).join("");
}

function renderCalendar(){
  const strip = document.getElementById("calendarStrip");
  strip.innerHTML = CALENDAR.map(c => `
    <div class="month">
      <div class="month__name">${c.m}</div>
      <div class="month__temp">${c.t}</div>
      <div class="month__note">${c.n}</div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  renderVideos();
  renderTrail();
  renderCalendar();
});

// Menú móvil simple
document.getElementById("menuBtn")?.addEventListener("click", () => {
  const nav = document.querySelector(".topbar__nav");
  const visible = nav.style.display === "flex";
  nav.style.cssText = visible
    ? "display:none;"
    : "display:flex; position:fixed; top:4.2rem; right:1rem; flex-direction:column; background:#14213D; padding:1rem 1.5rem; border-radius:6px; gap:1rem;";
});