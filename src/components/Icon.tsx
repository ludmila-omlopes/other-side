import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  title?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = '', title }) => {
  return (
    <svg className={`w-6 h-6 ${className}`} aria-hidden="true" role="img">
      {title && <title>{title}</title>}
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;