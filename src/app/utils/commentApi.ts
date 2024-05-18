import { NEXT_PUBLIC_API_URL } from '../constants';
import { ICreateCommentPostDataProps } from '../types/form';
import { createCommentPostRequestOptions } from './common/commentOptions';

const API_URL: string = NEXT_PUBLIC_API_URL || '';

export async function createComment(
  postId: number,
  data: ICreateCommentPostDataProps,
): Promise<any> {
  const requestOptions = createCommentPostRequestOptions(data);
  const response = await fetch(
    `${API_URL}/post/[${postId}]/comment`,
    requestOptions,
  );
  return response.json();
}
