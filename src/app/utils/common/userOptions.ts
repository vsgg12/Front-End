import { ICreateMemberProps } from '@/app/types/form';

interface RequestOptions {
  method: string;
  headers?: Record<string, string>;
  body?: string | FormData;
}

const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
};

export function createSignInRequestOptions(): RequestOptions {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

export function createMemeberPostRequestOptions(
  body: ICreateMemberProps,
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
