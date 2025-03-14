import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";
import type React from "react";
import { forwardRef } from "react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        info: "border-blue-200 bg-blue-50 text-blue-800 [&>svg]:text-blue-500",
        success:
          "border-green-200 bg-green-50 text-green-800 [&>svg]:text-green-500",
        warning:
          "border-yellow-200 bg-yellow-50 text-yellow-800 [&>svg]:text-yellow-500",
        error: "border-red-200 bg-red-50 text-red-800 [&>svg]:text-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
}

const AlertCustom = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, children, ...props }, ref) => {
    const Icon =
      variant === "info"
        ? Info
        : variant === "success"
        ? CheckCircle
        : variant === "warning"
        ? AlertCircle
        : variant === "error"
        ? XCircle
        : null;

    return (
      <div
        ref={ref}
        className={classNames(alertVariants({ variant }), className)}
        {...props}
      >
        {Icon && <Icon className="h-4 w-4" />}
        <div>
          {title && <h5 className="mb-1 font-medium">{title}</h5>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    );
  }
);
AlertCustom.displayName = "AlertCustom";

export { AlertCustom, alertVariants };
