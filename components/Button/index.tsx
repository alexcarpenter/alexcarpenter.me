import clsx from 'clsx';
import {
  BUTTON_BASE,
  BUTTON_DISABLED,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from './Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof BUTTON_VARIANTS;
  size?: keyof typeof BUTTON_SIZES;
}

export default function Button({
  variant = 'primary',
  children,
  disabled = false,
  size = 'default',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        BUTTON_BASE,
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        disabled && BUTTON_DISABLED,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
