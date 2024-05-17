import { NEXT_PUBLIC_API_URL } from '../constants';
import { ICreateVotingDataProps } from '../types/form';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

export async function createVote(data: ICreateVotingDataProps): Promise<any> {
  try {
    const token = ''; //cookie에 저장한 token으로 바꾸기
    const response = await fetch(`${API_URL}/voting/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

//내 판결 조회
export async function getVotingResults() {
  try {
    const response = await fetch(`${API_URL}/voting/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

//내 판결 전적
export async function getVotingHistorys() {
  try {
    const response = await fetch(`${API_URL}/voting/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
