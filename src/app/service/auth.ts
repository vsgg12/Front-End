import { NEXT_PUBLIC_API_URL } from '../constants';
import { ICreateMemberProps } from '../types/form';

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

export async function createMember(user: ICreateMemberProps) {
  try {
    const response = await fetch(`${API_URL}/users/signup"`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function checkSameNickname(nickname: string) {
  try {
    //요청 path 확인
    console.log(`${API_URL}/users?name="${encodeURIComponent(nickname)}"`);
    const response = await fetch(
      `${API_URL}/users?name="${encodeURIComponent(nickname)}"`,
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
