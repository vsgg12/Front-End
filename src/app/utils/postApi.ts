import { NEXT_PUBLIC_API_URL } from '../constants';
import {
  createGetRequestOptions,
  createPostRequestOptions,
  createFilePostRequestOptions,
} from './common/requestOptions';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

// /Record<string, unknown>
export async function createPost(data: ICreateMemberProps): Promise<any> {
  const requestOptions = createPostRequestOptions(data);
  const response = await fetch(`${API_URL}/users`, requestOptions);
  return response.json();
}

export async function getImageUrl(data: FormData): Promise<any> {
  try {
    console.log(data);
    const requestOptions = createFilePostRequestOptions(data);
    const response = await fetch(`${API_URL}/image/upload`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
