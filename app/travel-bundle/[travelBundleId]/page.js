import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTravelBundleById } from '../../../database/travel-bundles';
import style from '../[travelBundleId]/page.module.scss';
import { AddProductToCart } from './AddToCart';

export async function generateMetadata({ params }) {
  const singleTravelBundle = await getTravelBundleById(
    Number(params.travelBundleId),
  );

  return {
    title: singleTravelBundle ? singleTravelBundle.travelDestination : '',
  };
}

export default async function TravelBundlePage(props) {
  const singleTravelBundle = await getTravelBundleById(
    Number(props.params.travelBundleId),
  );

  console.log(
    'singleTravelBundle.travelDestination',
    singleTravelBundle.travelDestination,
  );
  console.log(singleTravelBundle);
  if (!singleTravelBundle) {
    return notFound();
  }

  return (
    <div className={style.singleProduct}>
      <div className={style.productName}>
        <h1>{singleTravelBundle.travelDestination}</h1>
      </div>

      <div className={style.container}>
        <Image
          src={`/images/${singleTravelBundle.travelDestination}.jpeg`}
          width={400}
          height={300}
          alt={singleTravelBundle.travelDestination}
          className={style.image}
        />
        {singleTravelBundle.info} {singleTravelBundle.accessory} on a different
        perspective
      </div>
      <AddProductToCart productId={props.params.travelBundleId} />
    </div>
  );
}
// add to cart!!
