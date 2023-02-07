import { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonVariant {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
}

export const Button = ({
  className,
  children,
  variant,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(cls.Button, { [cls[variant]]: true }, [className])}
      {...rest}
    >
      {children}
    </button>
  );
};
