import { NEXT_PUBLIC_API_URL } from '../constants';
import { ICreateCommentPostDataProps } from '../types/form';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

export async function getComments(postId: number, commentId: number) {
  try {
    const response = await fetch(
      `${API_URL}/post/${encodeURIComponent(postId)}/comment/${encodeURIComponent(commentId)}`,
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

export async function createComments(
  postId: number,
  comment: ICreateCommentPostDataProps,
): Promise<any> {
  try {
    const token = '';
    const response = await fetch(
      `${API_URL}/post/${encodeURIComponent(postId)}/comment/`,
      {
        method: 'POST',
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
    const token = '';
    const response = await fetch(
      `${API_URL}/post/${encodeURIComponent(postId)}/comment/${encodeURIComponent(commentId)}`,
      {
        method: 'DELETE',
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
