import { ButtonProps } from '../lib/interfaces.ts';
import { CSSProperties, useState } from 'react';
import { getRandomColor } from '../utils/getRandomColor.ts';

export function Button({
  text,
  className = 'my-button',
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) {
  const [colorStyles, setColorStyles] = useState<CSSProperties | undefined>(undefined);
  const handleClick = () => {
    setColorStyles({ backgroundColor: getRandomColor(), color: getRandomColor() });
    onClick && onClick();
  };

  return (
    <button
      style={colorStyles}
      className={className}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
