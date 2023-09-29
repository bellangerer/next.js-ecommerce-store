import Image from 'next/image';
import Link from 'next/link';
import { getTravelBundles } from '../../database/travel-bundles';

export const metadata = {
  title: 'Travel bundle',
  description: 'Generate by create next app',
};
export default function travelBundlesPage() {
  const travelBundles = getTravelBundles();

  return (
    <div>
      <h1>Travel bundles</h1>

      {travelBundles.map((travelBundle) => {
        return (
          <div key={`travelBundle-div-${travelBundle.id}`}>
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
