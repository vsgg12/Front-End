import { NEXT_PUBLIC_API_URL } from '../constants';
import {
  createDeleteRequestOptions,
  createGetRequestOptions,
  createPatchRequestOptions,
  createPostRequestOptions,
  createPutRequestOptions,
} from './requestOptions';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

// 데이터 패치 함수
export async function fetchData(): Promise<any> {
  const requestOptions = createGetRequestOptions();
  const response = await fetch(`${API_URL}/data`, requestOptions);
  return response.json();
}

// 사용자 생성 함수
export async function createUser(data: Record<string, unknown>): Promise<any> {
  const requestOptions = createPostRequestOptions(data);
  const response = await fetch(`${API_URL}/users`, requestOptions);
  return response.json();
}

// 사용자 업데이트 함수
export async function updateUser(
  id: string,
  data: Record<string, unknown>,
): Promise<any> {
  const requestOptions = createPutRequestOptions(data);
  const response = await fetch(`${API_URL}/users/${id}`, requestOptions);
  return response.json();
}

// 사용자 삭제 함수
export async function deleteUser(id: string): Promise<any> {
  const requestOptions = createDeleteRequestOptions();
  const response = await fetch(`${API_URL}/users/${id}`, requestOptions);
  return response.json();
}

// 사용자 부분 수정 함수
export async function modifyUser(
  id: string,
  data: Record<string, unknown>,
): Promise<any> {
  const requestOptions = createPatchRequestOptions(data);
  const response = await fetch(`${API_URL}/users/${id}`, requestOptions);
  return response.json();
}
