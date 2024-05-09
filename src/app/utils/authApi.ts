import { getSession } from 'next-auth/react';
import { NEXT_PUBLIC_API_URL } from '../constants';
import {
  createGetRequestOptions,
  createPostRequestOptions,
} from './common/requestOptions';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

export async function signIn(): Promise<any> {
  const requestOptions = createGetRequestOptions();
  const response = await fetch(`${API_URL}/signin`, requestOptions);
  console.log(response);
  return response.json();
}

// export async function checkSession(): Promise<any> {
//   const session = await getSession();

//   if (!session) {
//     throw new Error('No session found, user is probably not logged in.');
//   }

//   try {
//     const response = await fetch(`${API_URL}/auth`, {
//       headers: {
//         Authorization: `Bearer ${session.accessToken}`,
//       },
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('Fetching error:', error);
//     throw error;
//   }
// }
