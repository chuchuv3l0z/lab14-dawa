import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Rutas() {
  return (
    <>
      <Head>
        <title>Mapa de Rutas y Estaciones | Ferrocarril de Sodor</title>
        <meta name="description" content="Consulta los horarios y conexiones de todas las estaciones en la Isla de Sodor. Rutas optimizadas sin cuellos de botella." />
        <meta property="og:title" content="Rutas Comerciales de Sodor" />
      </Head>

      <Navbar />
      <main>
        <h1>Red Ferroviaria Principal</h1>
        <p>Hemos trazado nuestras vías usando los mejores algoritmos de enrutamiento para asegurar que nunca haya demoras.</p>
        
        <div className="card" style={{ borderLeft: '5px solid #ffcc00' }}>
          <h3>Ruta Expresa: Knapford - Vicarstown</h3>
          <p>Conexión directa de extremo a extremo de la isla. Cero paradas, máximo rendimiento.</p>
        </div>

        <div className="card" style={{ borderLeft: '5px solid #0053a0' }}>
          <h3>Línea de la Costa: Brendam - Estación de Carga</h3>
          <p>Ruta logística pesada. Maneja el 80% de los archivos estáticos y recursos pesados del servidor.</p>
        </div>
      </main>
    </>
  );
}