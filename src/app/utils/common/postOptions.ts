import {
  ICreateImageData,
  ICreatePostDataProps,
  ICreateVotingDataProps,
} from '@/app/types/form';

const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
};

interface RequestOptions {
  method: string;
  headers?: Record<string, string>;
  body?: string | FormData;
}

export function createPostRequestOptions(
  body: ICreatePostDataProps,
): RequestOptions {
  const sessionId = getCookie('JSESSIONID');
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionId}`,
    },
    body: JSON.stringify(body),
  };
}

export function createFilePostRequestOptions(
  formData: FormData,
): RequestOptions {
  const sessionId = getCookie('JSESSIONID');
  return {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${sessionId}`,
    },
  };
}

export function createImageDeleteRequestOptions(
  body: ICreateImageData,
): RequestOptions {
  const sessionId = getCookie('JSESSIONID');
  return {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionId}`,
    },
    body: JSON.stringify(body),
  };
}

export function createVotePostOptions(
  body: ICreateVotingDataProps,
): RequestOptions {
  const sessionId = getCookie('JSESSIONID');
  console.log(sessionId);
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionId}`,
    },
    body: JSON.stringify(body),
  };
}
