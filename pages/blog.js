import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Blog() {
  const posts = [
    { id: 'thomas-carbon', title: 'Cómo Thomas optimizó su consumo de carbón', desc: 'Técnicas avanzadas de rendimiento en calderas.' },
    { id: 'percy-vias', title: 'Percy y el misterio de las vías muertas', desc: 'Evitando callejones sin salida en los enlaces de tu web.' },
    { id: 'gordon-velocidad', title: 'Gordon rompe récords de velocidad de carga', desc: 'Optimizando el renderizado en tiempo récord.' }
  ];

  return (
    <>
      <Head>
        <title>Bitácora de Viajes | Historias de Rendimiento en Sodor</title>
        <meta name="description" content="Lee las últimas aventuras de optimización de las locomotoras de Sodor. Consejos reales de mantenimiento web." />
        <meta property="og:title" content="Bitácora de Viajes de Sodor" />
        <meta property="og:image" content="/images/seo-image.png" />
      </Head>

      <Navbar />
      <main>
        <h1>Bitácora de Viajes de las Locomotoras</h1>
        <p>Aprende de los expertos de la industria ferroviaria digital:</p>
        
        {posts.map(post => (
          <div key={post.id} className="card">
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
          </div>
        ))}
      </main>
    </>
  );
}