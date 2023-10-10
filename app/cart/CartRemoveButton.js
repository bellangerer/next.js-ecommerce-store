'use client';
import { removeAllItemsFromCookies } from './CartRemoveAllAction';
import styles from './remove.button.scss';

export default function CartRemoveButton() {
  return (
    <button
      className={styles.removebutton}
      formAction={async () => await removeAllItemsFromCookies()}
    >
      Remove item
    </button>
  );
}
