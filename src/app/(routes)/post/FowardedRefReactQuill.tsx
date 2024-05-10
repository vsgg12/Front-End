import React, { forwardRef } from 'react';
import ReactQuill from 'react-quill';
import dynamic from 'next/dynamic';
import { Quill } from 'quill';

// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Assuming ReactQuill does not expose its type, you can use any or define a more specific one
type ReactQuillType = ReactQuill & {
  getEditor: () => Quill;
};

const ForwardedRefReactQuill = forwardRef<
  ReactQuillType,
  React.ComponentProps<typeof ReactQuill>
>((props, ref) => <ReactQuill {...props} ref={ref} />);

export default ForwardedRefReactQuill;
