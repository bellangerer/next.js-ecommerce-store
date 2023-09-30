import Image from 'next/image';
import Globe from '../public/images/globe.jpeg';
import AddToCartButton from './AddToCartButton';

export default function HomePage() {
  return (
    <main>
      <AddToCartButton />
      <h1>Roam the Globe</h1>
      <Image src={Globe} alt="globe" />
    </main>
  );
}
