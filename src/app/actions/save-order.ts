'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

type OrderData = {
  customerEmail: string;
  customerPhone: string;
  product: string;
  price: string;
  paymentId: string;
  status: 'Purchased' | 'Cancelled';
};

export async function saveOrder(orderData: OrderData) {
  try {
    await addDoc(collection(db, 'orders'), {
      ...orderData,
      date: serverTimestamp(),
    });
    console.log('Order saved successfully');
    return { success: true };
  } catch (error) {
    console.error('Error writing document: ', error);
    return { success: false, error: 'Failed to save order.' };
  }
}
