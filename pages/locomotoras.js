import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Locomotoras() {
  return (
    <>
      <Head>
        <title>Flota de Locomotoras | Conoce a Thomas y sus Amigos</title>
        <meta name="description" content="Descubre la flota más eficiente de la Isla de Sodor. Desde la pequeña y valiente Thomas hasta el veloz y orgulloso Gordon." />
        <meta name="keywords" content="flota sodor, locomotoras de vapor, trenes rápidos, Thomas, Gordon, Percy" />
        <meta property="og:title" content="El Equipo Ferroviario de Sodor" />
      </Head>

      <Navbar />
      <main>
        <h1>Nuestras Locomotoras Principales</h1>
        <p>Cada máquina en nuestra isla cumple una función vital para mantener el rendimiento al 100%.</p>
        
        <div className="card">
          <h2>🚂 Thomas (Nº 1)</h2>
          <p>Nuestra locomotora tanque azul. Especialista en rutas cortas y alta disponibilidad (uptime del 99.9%).</p>
        </div>

        <div className="card">
          <h2>🟢 Percy (Nº 6)</h2>
          <p>Locomotora pequeña verde. Ideal para la entrega de correos y paquetes de datos ligeros en la red.</p>
        </div>

        <div className="card">
          <h2>🔵 Gordon (Nº 4)</h2>
          <p>El tren expreso. Diseñado para cargas pesadas y tiempos de renderizado (TTFB) increíblemente rápidos.</p>
        </div>
      </main>
    </>
  );
}