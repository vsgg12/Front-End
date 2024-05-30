'use server';
import { NEXT_PUBLIC_API_URL } from '../constants';
import { ICreateCommentPostDataProps } from '../types/form';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

import { cookies } from 'next/headers';

export async function getComments(postId: number) {
  try {
    const token = cookies().get('authToken')?.value;
    console.log(postId);
    const response = await fetch(`${API_URL}/post/${Number(postId)}/comment`, {
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

export async function createComments(
  postId: number,
  comment: ICreateCommentPostDataProps,
): Promise<any> {
  try {
    const token = cookies().get('authToken')?.value;
    const response = await fetch(`${API_URL}/post/${postId}/comment`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(comment),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteComment(postId: number, commentId: number) {
  try {
    const token = cookies().get('authToken')?.value;
    const response = await fetch(
      `${API_URL}/post/${encodeURIComponent(postId)}/comment/${encodeURIComponent(commentId)}`,
      {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
