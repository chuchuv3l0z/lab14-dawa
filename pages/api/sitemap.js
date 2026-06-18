const BASE_URL = "https://lab14-dawa-31wc.onrender.com"; // <-- Aquí ya puse tu dominio real

// Simulación de consulta a base de datos o CMS externo
async function obtenerPostsDesdeBD() {
  return [
    { id: 'thomas-carbon' },
    { id: 'percy-vias' },
    { id: 'gordon-velocidad' }
  ];
}

export default async function handler(req, res) {
  // 1. Rutas fijas de la app
  const rutasEstaticas = [
    "/", 
    "/locomotoras", 
    "/rutas", 
    "/blog", 
    "/contacto"
  ];

  // 2. Traemos las rutas dinámicas desde nuestra "Base de Datos"
  const posts = await obtenerPostsDesdeBD();
  const rutasDinamicas = posts.map(post => `/blog/${post.id}`);

  // 3. Juntamos todas las vías
  const todasLasUrls = [...rutasEstaticas, ...rutasDinamicas];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${todasLasUrls
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}