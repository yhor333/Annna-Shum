import { FC } from 'react';

interface IAside {
  categories: string[];
}

const Aside: FC<IAside> = ({ categories }) => {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Aside;
