import { NEXT_PUBLIC_API_URL } from '../constants';
import {
  ICreateImageData,
  ICreateMemberProps,
  ICreatePostDataProps,
} from '../types/form';
import {
  createGetRequestOptions,
  createPostRequestOptions,
  createFilePostRequestOptions,
  createDeleteRequestOptions,
} from './common/requestOptions';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

export async function createPost(data: ICreatePostDataProps): Promise<any> {
  const requestOptions = createPostRequestOptions(data);
  const response = await fetch(`${API_URL}/post`, requestOptions);
  return response.json();
}

export async function getImageUrl(data: FormData): Promise<any> {
  try {
    const requestOptions = createFilePostRequestOptions(data);
    const response = await fetch(`${API_URL}/image/upload`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteS3Image(imgUrls: ICreateImageData): Promise<any> {
  try {
    const requestOptions = createDeleteRequestOptions(imgUrls);
    const response = await fetch(`${API_URL}/image`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
