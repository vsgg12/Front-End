import { NEXT_PUBLIC_API_URL } from '../constants';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

export async function getAlarms() {
  try {
    const token = '';
    const response = await fetch(`${API_URL}/post/alarm/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
