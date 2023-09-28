import Image from 'next/image';
import AddToCartButton from './AddToCartButton';

export default function HomePage() {
  return (
    <main>
      <AddToCartButton />
      <h1>Roam the Globe</h1>
    </main>
  );
}
