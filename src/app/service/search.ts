// import { ICreateImageData } from '../types/form';

// const API_URL: string = process.env.NEXT_PUBLIC_API_URL || '';

// import { cookies } from 'next/headers';

// export async function getPostsSortedByDate() {
//   try {
//     const token = cookies().get('authToken')?.value; //지우기
//     const response = await fetch(`${API_URL}/post?orderby=createdatetime`, {
//       method: 'GET',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }