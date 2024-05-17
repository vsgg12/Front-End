import { NEXT_PUBLIC_API_URL } from '../constants';
import { ICreateImageData, ICreatePostDataProps } from '../types/form';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

export async function getPostsSortedByDate() {
  try {
    const response = await fetch(`${API_URL}/post?orderby=createdatetime`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsSortedByView() {
  try {
    const response = await fetch(`${API_URL}/post?orderby=view`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
    const token = ''; //cookie에 저장한 token으로 바꾸기
    const response = await fetch(`${API_URL}/post/users`, {
      method: 'GET',
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

export async function createPost(data: ICreatePostDataProps): Promise<any> {
  try {
    const token = ''; //cookie에 저장한 token으로 바꾸기
    const response = await fetch(`${API_URL}/post`, {
      method: 'POST',
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

export async function saveImageAndRequestUrlToS3(
  formdata: FormData, //파일 보냄
): Promise<any> {
  try {
    const token = ''; //cookie에 저장한 token으로 바꾸기
    const response = await fetch(`${API_URL}/image/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: formdata,
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
    const token = ''; //cookie에 저장한 token으로 바꾸기

    const response = await fetch(`${API_URL}/image`, {
      method: 'DELETE',
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
