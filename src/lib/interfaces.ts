export interface ButtonProps {
  text: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: Function;
  disabled?: boolean;
}

