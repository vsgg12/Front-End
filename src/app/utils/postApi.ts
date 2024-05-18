import { NEXT_PUBLIC_API_URL } from '../constants';
import {
  ICreateImageData,
  ICreatePostDataProps,
  ICreateVotingDataProps,
} from '../types/form';
import {
  createFilePostRequestOptions,
  createImageDeleteRequestOptions,
  createPostRequestOptions,
  createVotePostOptions,
} from './common/postOptions';

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
    const requestOptions = createImageDeleteRequestOptions(imgUrls);
    const response = await fetch(`${API_URL}/image`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function createVote(vote: ICreateVotingDataProps): Promise<any> {
  try {
    const requestOptions = createVotePostOptions(vote);
    const response = await fetch(`${API_URL}/vote/save`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
