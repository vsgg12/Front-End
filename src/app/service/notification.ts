'use server';
import { NEXT_PUBLIC_API_URL } from '../constants';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

import { cookies } from 'next/headers';

export async function getAlarms() {
  const token = cookies().get('authToken')?.value;
  try {
    const response = await fetch(`${API_URL}/post/alarm/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
