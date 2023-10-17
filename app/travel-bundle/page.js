import Image from 'next/image';
import Link from 'next/link';
import {
  getTravelBundleById,
  getTravelBundles,
} from '../../database/travel-bundles.ts';
import styles from '../travel-bundle/travelBundle.module.scss';

export const metadata = {
  title: 'Travel bundle',
  description: 'Generate by create next app',
};
export default async function travelBundlesPage() {
  const travelBundles = await getTravelBundles();
  console.log('travelBundles', travelBundles);
  return (
    <div className={styles.info}>
      <div className={styles.titleWrapper}>
        {' '}
        <h2>Travel bundles</h2>
      </div>
      <div className={styles.imageWrapper}>
        {travelBundles.map((travelBundle) => {
          return (
            <div
              className={styles.card}
              key={`travelBundle-div-${travelBundle.id}`}
            >
              <Image
                src={`/images/${travelBundle.travelDestination}.jpeg`}
                alt={travelBundle.travelDestination}
                width={300}
                height={200}
                className={styles.image}
              />
              <Link
                href={`/travel-bundle/${travelBundle.id}`}
                className={styles.name}
              >
                {travelBundle.travelDestination}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
