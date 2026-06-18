export default function LargeComponent() {
  return (
    <div style={{ marginTop: '30px', padding: '20px', border: '2px dashed gray' }}>
      <h2>Soy un componente pesado</h2>
      <p>Me acabo de cargar con Lazy Loading (solo en el cliente).</p>
    </div>
  );
}