import Image from 'next/image';
import Globe from '../public/images/globe.jpeg';

export default function HomePage() {
  return (
    <main>
      <h1>Roam the Globe</h1>
      <Image src={Globe} alt="globe" />
    </main>
  );
}
