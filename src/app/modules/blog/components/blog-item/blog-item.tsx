import { FC } from 'react';

import { blogItemModel } from './models/blog-item-model';

const BlogItem: FC<blogItemModel> = ({ title, category, url, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BlogItem;
