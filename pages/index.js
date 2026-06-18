import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Estación Central de Sodor | Thomas y sus Amigos SEO</title>
        <meta name="description" content="Bienvenidos a la Estación Central. Explora las rutas más rápidas y optimizadas de la isla de Sodor junto a Thomas." />
        <meta name="keywords" content="Thomas el tren, Sodor, optimización de vías, locomotoras eficientes" />

        <meta name="google-site-verification" content="xMBDVA2qRGctFPX-DC5GynMOVJUhq5L-lcjf3A7OdZs" />

        
        <meta property="og:title" content="Estación Central de Sodor - ¡En marcha!" />
        <meta property="og:description" content="Tu viaje hacia el alto rendimiento web empieza aquí en Sodor." />
        <meta property="og:image" content="/images/seo-image.png" />
      </Head>

      <Navbar />
      <main>
        <h1>Bienvenido a la Estación Central de Sodor</h1>
        <p>Aquí gestionamos las vías del rendimiento web y el posicionamiento SEO para que nuestras locomotoras vayan a toda máquina.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <Image src="/images/seo-image.png" width={600} height={300} alt="Thomas en acción" priority />
        </div>
        
        <button onClick={() => alert('¡Choo Choo! Turbos activados.')}>Activar Calderas</button>
      </main>
    </>
  );
}