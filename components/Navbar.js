import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">🚂 Estación Central</Link>
      <Link href="/locomotoras">🚄 Nuestro Equipo</Link>
      <Link href="/rutas">🗺️ Mapa de Rutas</Link>
      <Link href="/blog">📖 Bitácora</Link>
      <Link href="/contacto">🔧 Talleres Sodor</Link>
    </nav>
  );
}