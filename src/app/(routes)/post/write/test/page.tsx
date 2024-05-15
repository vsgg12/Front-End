'use client';

import { getImageUrl } from '@/app/utils/postApi';
import { useRef, useState } from 'react';

export default function uploadImage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const getFile = () => {
    // inputRef.current와 inputRef.current.files가 모두 존재하는지 확인
    if (
      inputRef.current &&
      inputRef.current.files &&
      inputRef.current.files.length > 0
    ) {
      const file = inputRef.current.files[0];

      const formData = new FormData();
      formData.append('file', file);

      getImageUrl(formData)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });

      // let values = formData.values();
      // for (const pair of values) {
      //   console.log(pair);
      // }
    } else {
      // 파일이 선택되지 않았거나 참조할 수 없는 경우
      console.log('No file selected or input is not available.');
    }
  };

  return (
    <>
      <input ref={inputRef} onChange={getFile} type="file" />
    </>
  );
}
