'use server';
import { NEXT_PUBLIC_API_URL } from '../constants';
import { ICreateImageData } from '../types/form';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

import { cookies } from 'next/headers';

export async function getPostsSortedByDate() {
  try {
    const token = cookies().get('token')?.value; //지우기
    const response = await fetch(`${API_URL}/post?orderby=createdatetime`, {
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

export async function getPostsSortedByView() {
  try {
    const token = cookies().get('token')?.value; //지우기
    const response = await fetch(`${API_URL}/post?orderby=view`, {
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

export async function getPostsByKeyword(keyword: string) {
  try {
    const response = await fetch(
      `${API_URL}/post/search?keyword="${encodeURIComponent(keyword)}"`,
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

export async function getPost(postId: number) {
  try {
    console.log(`${API_URL}/post/"${encodeURIComponent(postId)}"`);
    const response = await fetch(
      `${API_URL}/post/"${encodeURIComponent(postId)}"`,
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

export async function getUserPosts() {
  try {
    const token = cookies().get('token')?.value;
    const response = await fetch(`${API_URL}/post/users`, {
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

export async function createPost(data: FormData): Promise<any> {
  try {
    const token = cookies().get('token')?.value;
    const response = await fetch(`${API_URL}/post`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const result = await response.json();
      console.log(result);
      return result;
    } else {
      const text = await response.text();
      throw new Error(`Expected JSON response, got: ${text}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function saveImageAndRequestUrlToS3(
  formdata: FormData, //파일 보냄
): Promise<any> {
  const data = { file: formdata };
  try {
    const token = cookies().get('token')?.value;

    const response = await fetch(`${API_URL}/image/upload`, {
      method: 'POST',
      body: formdata,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function sendDeleteRequestToS3(
  imgUrls: ICreateImageData, //imgUrls string[]
): Promise<any> {
  try {
    const token = cookies().get('token')?.value;
    const response = await fetch(`${API_URL}/image`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(imgUrls),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
