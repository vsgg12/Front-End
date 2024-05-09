import { NEXT_PUBLIC_API_URL } from '../constants';
import {
  createDeleteRequestOptions,
  createGetRequestOptions,
  createPatchRequestOptions,
  createPostRequestOptions,
  createPutRequestOptions,
} from './common/requestOptions';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

export async function getPosts() {
  console.log('post list');
}

export async function getPost(postId: string) {
  console.log(postId);
}

// /Record<string, unknown>
export async function createPost(data: ICreateMemberProps): Promise<any> {
  const requestOptions = createPostRequestOptions(data);
  const response = await fetch(`${API_URL}/users`, requestOptions);
  return response.json();
}
