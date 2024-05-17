'use server';
import { NEXT_AUTH_API_URL, NEXT_PUBLIC_API_URL } from '../constants';
import { ICreateMemberProps } from '../types/form';
import { createMemeberPostRequestOptions } from './common/userOptions';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

export async function createUser(data: ICreateMemberProps): Promise<any> {
  try {
    console.log(data);
    const requestOptions = createMemeberPostRequestOptions(data);
    const response = await fetch(`${API_URL}/users/signup`, requestOptions);
    return response;
  } catch (error) {
    console.log(error);
  }
}
