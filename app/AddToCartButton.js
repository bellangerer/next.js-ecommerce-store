'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function AddToCartButton({ onClick }) {
  return (
    <button onClick={onClick} className="add-to-cart-button">
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
