import React, { ReactNode } from "react";

type InputProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type?: string;
  secureEntry?: boolean;
  placeholder: string;
  label?: string;
  change?(event: React.ChangeEvent<HTMLInputElement>): void;
  blur?(value: string): void;
  value?: string | number | readonly string[] | undefined;
  name?: string;
};

const InputComponent = ({
  leftIcon,
  rightIcon,
  type = "text",
  secureEntry = false,
  placeholder,
  label,
  change,
  blur,
  value,
  name
}: InputProps) => {
  return (
    <div className="space-y-2 p-2 w-full">
      {label && (
        <label
          htmlFor={label?.toLowerCase().replace(/\s/g, "-")}
          className="block font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="flex items-center border rounded-lg gap-2 p-2 w-full">
        {leftIcon && <div className="flex items-center">{leftIcon}</div>}
        <input
          id={label?.toLowerCase().replace(/\s/g, "-")}
          aria-label={placeholder}
          type={secureEntry ? "password" : type}
          className="flex-1 border-none outline-none bg-transparent w-full"
          placeholder={placeholder}
          onChange={(e) => change?.(e)}
          onBlur={(e) => blur?.(e.target.value)}
          value={value}
          name={name}
        />
        {rightIcon && <div className="flex items-center">{rightIcon}</div>}
      </div>
    </div>
  );
};

export default InputComponent;
