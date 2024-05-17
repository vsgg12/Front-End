import { NEXT_PUBLIC_API_URL } from '../constants';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

export async function mobileCheck(mobile: string) {
  try {
    //요청 path 확인
    console.log(
      `${API_URL}/users/mobilecheck?mobile="${encodeURIComponent(mobile)}"`,
    );

    const response = await fetch(
      `${API_URL}/users/mobilecheck?mobile="${encodeURIComponent(mobile)}"`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
