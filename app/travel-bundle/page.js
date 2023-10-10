import Image from 'next/image';
import Link from 'next/link';
import { getTravelBundles } from '../../database/travel-bundles';
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
      <h2>Travel bundles</h2>

      {travelBundles.map((travelBundle) => {
        return (
          <div
            className={styles.card}
            key={`travelBundle-div-${travelBundle.id}`}
          >
            <Link href={`/travel-bundle/${travelBundle.id}`}>
              {travelBundle.travelDestination}
            </Link>

            <Image
              src={`/images/${travelBundle.travelDestination}.jpeg`}
              alt={travelBundle.travelDestination}
              width={300}
              height={200}
            />
          </div>
        );
      })}
    </div>
  );
}
