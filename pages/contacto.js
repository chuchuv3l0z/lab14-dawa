import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Talleres de Reparación | Soporte Técnico de Sodor</title>
        <meta name="description" content="¿Tu web está perdiendo vapor? Contacta con los mecánicos principales de Sodor para una puesta a punto." />
        <meta property="og:title" content="Soporte y Reparaciones Sodor" />
      </Head>

      <Navbar />
      <main>
        <h1>Talleres de Reparación de Sodor</h1>
        <p>¿Tienes problemas con tus Core Web Vitals o tu indexación? Envíanos una señal de humo ferroviaria.</p>
        <div className="card">
          <p><strong>📍 Ubicación:</strong> Hangar Principal de Sir Topham Hatt, Sodor</p>
          <p><strong>📧 Correo de Vapor:</strong> info@talleres-sodor.com</p>
        </div>
      </main>
    </>
  );
}