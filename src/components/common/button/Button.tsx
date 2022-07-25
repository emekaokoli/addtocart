import React from 'react';
import { Button } from 'reactstrap';

type Props = {
  className?: string;
  size?: string;
  ariaLabel?: string;
  role?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const ButtonComponent: React.FC<Props> = ({
  className,
  ariaLabel,
  size,
  role,
  onClick,
  disabled,
  children,
}) => {
  return (
    <Button
      className={className}
      size={size}
      aria-label={ariaLabel}
      role={role}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
