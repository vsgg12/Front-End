interface RequestOptions {
  method: string;
  headers: Record<string, string>;
  body?: string;
}

// GET 요청을 위한 옵션 생성
export function createGetRequestOptions(): RequestOptions {
  return {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
}

// POST 요청을 위한 옵션 생성
//body:Record<string, unknown>
export function createPostRequestOptions(
  body: ICreateMemberProps,
): RequestOptions {
  console.log(body);
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}

// PUT 요청을 위한 옵션 생성
export function createPutRequestOptions(
  body: Record<string, unknown>,
): RequestOptions {
  return {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}

// DELETE 요청을 위한 옵션 생성
export function createDeleteRequestOptions(): RequestOptions {
  return {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
}

// PATCH 요청을 위한 옵션 생성
export function createPatchRequestOptions(
  body: Record<string, unknown>,
): RequestOptions {
  return {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}
