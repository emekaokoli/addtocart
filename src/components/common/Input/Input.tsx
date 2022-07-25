import React, {
  ComponentProps,
  ForwardRefRenderFunction,
} from 'react';

import { Input } from 'reactstrap';

type Props = {
  id: string;
  type: ComponentProps<typeof Input>['type'];
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  maxLength: number;
  disabled?: boolean;
  ariaLabel?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  invalid?: boolean;
  value?: number | string;
};

const InputField: ForwardRefRenderFunction<
  HTMLInputElement,
  Props
> = ({
  id,
  type,
  onInput,
  min,
  max,
  maxLength,
  disabled,
  ariaLabel,
  onBlur,
  invalid,
  onChange,
  value,
}: Props) => {
  return (
    <Input
      id={id}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      invalid={invalid}
      maxLength={maxLength}
      disabled={disabled}
      aria-label={ariaLabel}
      onInput={onInput}
      min={min}
      max={max}
      value={value}
    />
  );
};

export default InputField;
