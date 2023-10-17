import Image from 'next/image';
import styles from '../app/globals.scss';

export default function HomePage() {
  return (
    <main>
      <div className={styles.map}>
        <Image
          src={'/images/Globe.jpeg'}
          alt="globe"
          height={200}
          width={600}
        />
      </div>
    </main>
  );
}
