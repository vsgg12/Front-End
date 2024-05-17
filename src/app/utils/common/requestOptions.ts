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

//1. GET 요청을 위한 옵션 생성
export function createGetRequestOptions(): RequestOptions {
  const sessionId = getCookie('JSESSIONID');

  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionId}`,
    },
  };
}

//2. POST 요청을 위한 옵션 생성
//body:Record<string, unknown>

export function createPutRequestOptions(
  body: Record<string, unknown>,
): RequestOptions {
  const sessionId = getCookie('JSESSIONID');
  return {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionId}`,
    },
    body: JSON.stringify(body),
  };
}

export function createPatchRequestOptions(
  body: Record<string, unknown>,
): RequestOptions {
  const sessionId = getCookie('JSESSIONID');
  return {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionId}`,
    },
    body: JSON.stringify(body),
  };
}
