import Image from 'next/image';
import styles from '../app/globals.scss';
import Globe from '../public/images/globe.jpeg';

export default function HomePage() {
  return (
    <main>
      <div className={styles.logo}>
        <Image src={Globe} alt="globe" height={300} width={500} />
      </div>
    </main>
  );
}
