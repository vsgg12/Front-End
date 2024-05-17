import { ICreateCommentPostDataProps } from '@/app/types/form';

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

export function createCommentPostRequestOptions(
  body: ICreateCommentPostDataProps,
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
