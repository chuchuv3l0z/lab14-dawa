import { Inter } from "next/font/google";
import '../styles/globals.css'; // <-- Esta es la clave que faltaba

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}