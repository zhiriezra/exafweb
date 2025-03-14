/* eslint-disable @typescript-eslint/no-empty-object-type */
import classNames from "classnames";
import type React from "react";
import { forwardRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
}

const CardCustom = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          "rounded-lg",
          variant === "default" && "bg-white",
          variant === "bordered" && "bg-white border border-gray-200",
          variant === "elevated" && "bg-white shadow-md",
          className
        )}
        {...props}
      />
    );
  }
);
CardCustom.displayName = "CardCustom";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames("p-6 flex flex-col space-y-1.5", className)}
        {...props}
      />
    );
  }
);
CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={classNames("text-xl font-semibold text-gray-900", className)}
        {...props}
      />
    );
  }
);
CardTitle.displayName = "CardTitle";

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={classNames("text-sm text-gray-500", className)}
        {...props}
      />
    );
  }
);
CardDescription.displayName = "CardDescription";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={classNames("p-6 pt-0", className)} {...props} />
    );
  }
);
CardContent.displayName = "CardContent";

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames("p-6 pt-0 flex items-center", className)}
        {...props}
      />
    );
  }
);
CardFooter.displayName = "CardFooter";

export {
  CardContent,
  CardCustom,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
