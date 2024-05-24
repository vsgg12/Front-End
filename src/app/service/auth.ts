'use server';
import { NEXT_PUBLIC_API_URL } from '../constants';
import { ICreateMemberProps } from '../types/form';
import { cookies } from 'next/headers';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

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
  cookies().delete('token');
}

export async function checkToken(): Promise<boolean> {
  const token = cookies().get('token');
  const expiry = cookies().get('expiry');

  if (!token || !expiry) {
    return false;
  }

  const tokenExpiryDate = new Date(expiry.value);

  if (tokenExpiryDate <= new Date()) {
    return false;
  }

  if (token) {
    return true;
  } else {
    return false;
  }
}
