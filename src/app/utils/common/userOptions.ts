import { getSession } from 'next-auth/react';
import { ICreateMemberProps } from '@/app/types/form';

interface RequestOptions {
  method: string;
  headers?: Record<string, string>;
  body?: string | FormData;
}

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
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
}
