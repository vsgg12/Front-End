'use server';

import { ICreateMemberProps } from '../types/form';
import { cookies } from 'next/headers';

const API_URL: string = process.env.NEXT_PUBLIC_API_URL || '';

export async function mobileCheck(mobile: string) {
  try {
    const response = await fetch(
      `${API_URL}/users/mobilecheck?mobile=` + mobile,
      {
        method: 'GET',
        credentials: 'include',
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

export async function emailCheck(email: string) {
  try {
    const response = await fetch(`${API_URL}/users/emailcheck?email=` + email, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
export async function createMember(user: ICreateMemberProps) {
  try {
    const response = await fetch(`${API_URL}/users/signup`, {
      method: 'POST',
      credentials: 'include',
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
    const response = await fetch(
      `${API_URL}/users/nicknamecheck?nickname=` + nickname,
      {
        method: 'GET',
        credentials: 'include',
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

export async function deleteToken() {
  cookies().delete('authToken');
}

export async function checkToken(): Promise<boolean> {
  const token = cookies().get('authToken');

  if (token) {
    return true;
  } else {
    return false;
  }
}
