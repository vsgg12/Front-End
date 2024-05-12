'use server';
import { NEXT_AUTH_API_URL, NEXT_PUBLIC_API_URL } from '../constants';
import { ICreateMemberProps } from '../types/form';
import {
  createGetRequestOptions,
  createPostRequestOptions,
} from './common/requestOptions';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

export async function signIn(): Promise<any> {
  try {
    const requestOptions = createGetRequestOptions();
    const response = await fetch(
      `${NEXT_AUTH_API_URL}/oauth2/authorization/naver?redirect_uri=http://localhost:3000&mode=login`,
      requestOptions,
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function signout() {
  try {
  } catch (error) {}
}

export async function createUser(data: ICreateMemberProps): Promise<any> {
  try {
    console.log(data);
    const requestOptions = createPostRequestOptions(data);
    const response = await fetch(`${API_URL}/users/signup`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

//test
export async function test1(data: any) {
  try {
    const requestOptions = createPostRequestOptions(data);
    const response = await fetch(`${API_URL}/users/content`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

// // 사용자 업데이트 함수
// export async function updateUser(
//   id: string,
//   data: Record<string, unknown>,
// ): Promise<any> {
//   try {
//     const requestOptions = createPutRequestOptions(data);
//     const response = await fetch(`${API_URL}/users/${id}`, requestOptions);
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// // 사용자 삭제 함수
// export async function deleteUser(id: string): Promise<any> {
//   try {
//     const requestOptions = createDeleteRequestOptions();
//     const response = await fetch(`${API_URL}/users/${id}`, requestOptions);
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// // 사용자 부분 수정 함수
// export async function modifyUser(
//   id: string,
//   data: Record<string, unknown>,
// ): Promise<any> {
//   try {
//     const requestOptions = createPatchRequestOptions(data);
//     const response = await fetch(`${API_URL}/users/${id}`, requestOptions);
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// // 데이터 패치 함수
// export async function fetchData(): Promise<any> {
//   try {
//     const requestOptions = createGetRequestOptions();
//     const response = await fetch(`${API_URL}/data`, requestOptions);
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }
