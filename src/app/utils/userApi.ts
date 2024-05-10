'use server';
import { NEXT_PUBLIC_API_URL, TEST_URL } from '../constants';
import {
  createGetRequestOptions,
  createPostRequestOptions,
} from './common/requestOptions';
import convertMemberFormData from './data/memberData';

// const API_URL: string = NEXT_PUBLIC_API_URL || '';\
const API_URL: string = NEXT_PUBLIC_API_URL || '';

//로그인 함수
export async function signIn(): Promise<any> {
  try {
    const requestOptions = createGetRequestOptions();
    const response = await fetch(`${API_URL}/users/signin`, requestOptions);
    console.log(response);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

//로그아웃
export async function signout() {
  try {
  } catch (error) {}
}

//(회원가입) 사용자 생성 함수
//Record<string, unknown>
export async function createUser(data: ICreateMemberProps): Promise<any> {
  try {
    console.log(data);
    const memberData = convertMemberFormData(data);
    console.log(memberData);
    const requestOptions = createPostRequestOptions(memberData);
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
