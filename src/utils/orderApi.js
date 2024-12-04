'use client'
import axios from 'axios';

// Fetch order details by ID
export async function fetchOrderDetails(orderId) {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/orders/${orderId}`, {
      withCredentials: true, 
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data.data;
  } catch (error) {
    console.error('Order fetch error:', error);
    return null;
  }
}
