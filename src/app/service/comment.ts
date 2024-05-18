'use server';
import { NEXT_PUBLIC_API_URL } from '../constants';
import { ICreateCommentPostDataProps } from '../types/form';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

import { cookies } from 'next/headers';

export async function getComments(postId: number, commentId: number) {
  try {
    const response = await fetch(
      `${API_URL}/post/${encodeURIComponent(postId)}/comment/${encodeURIComponent(commentId)}`,
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

export async function createComments(
  postId: number,
  comment: ICreateCommentPostDataProps,
): Promise<any> {
  try {
    const token = cookies().get('token')?.value;
    const response = await fetch(
      `${API_URL}/post/${encodeURIComponent(postId)}/comment/`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(comment),
      },
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteComment(postId: number, commentId: number) {
  try {
    const token = cookies().get('token')?.value;
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
