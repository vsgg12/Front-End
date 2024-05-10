interface RequestOptions {
  method: string;
  headers?: Record<string, string>; // headers는 선택적으로 설정
  body?: string | FormData; // body는 string 또는 FormData 타입을 받을 수 있도록
}

//1. GET 요청을 위한 옵션 생성
export function createGetRequestOptions(): RequestOptions {
  return {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
}

//2. POST 요청을 위한 옵션 생성
//body:Record<string, unknown>
export function createPostRequestOptions(
  body: ICreateMemberProps,
): RequestOptions {
  console.log(body);
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
}

//file post
// export function createFilePostRequestOptions(
//   formData: FormData,
// ): RequestOptions {
//   return {
//     method: 'POST',
//     headers: { 'Content-Type': 'multipart/form-data' },
//     body: JSON.stringify(formData),
//   };
// }

export function createFilePostRequestOptions(
  formData: FormData,
): RequestOptions {
  return {
    method: 'POST',
    body: formData,
  };
}

//3. PUT 요청을 위한 옵션 생성
export function createPutRequestOptions(
  body: Record<string, unknown>,
): RequestOptions {
  return {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}

//4. DELETE 요청을 위한 옵션 생성
export function createDeleteRequestOptions(): RequestOptions {
  return {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
}

//5. PATCH 요청을 위한 옵션 생성
export function createPatchRequestOptions(
  body: Record<string, unknown>,
): RequestOptions {
  return {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}
