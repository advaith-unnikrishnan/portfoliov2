"use client";

import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const BlogPost = ({ title, date, children }) => {
  return (
    <article>
      <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>{title}</h1>
      <p style={{ color: 'gray', fontStyle: 'italic' }}>{date}</p>
      <MDXProvider>
        <div>{children}</div>
      </MDXProvider>
    </article>
  );
};

export default BlogPost;
