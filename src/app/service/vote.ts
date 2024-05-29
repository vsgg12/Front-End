'use server';
import { NEXT_PUBLIC_API_URL } from '../constants';
import { ICreateVotingDataProps } from '../types/form';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

import { cookies } from 'next/headers';

export async function createVote(
  data: ICreateVotingDataProps,
  postId: any,
): Promise<any> {
  try {
    const token = cookies().get('token')?.value;

    // const response = await fetch(`${API_URL}/vote/save`

    const response = await fetch(`${API_URL}/post/${postId}/vote`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

//내 판결 조회
export async function getVotingResults(postId: any) {
  try {
    const token = cookies().get('token')?.value;
    const response = await fetch(`${API_URL}/post/${postId}/avg`, {
      method: 'GET',
      credentials: 'include',
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

//내 판결 전적
export async function getVotingHistorys() {
  try {
    const token = cookies().get('token')?.value;
    const response = await fetch(`${API_URL}/voting/users`, {
      method: 'GET',
      credentials: 'include',
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
