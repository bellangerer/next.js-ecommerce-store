'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import style from './AddToCartButton.module.scss';

function AddToCartButton({ onClick }) {
  return (
    <button onClick={onClick} className="add-to-cart-button">
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
