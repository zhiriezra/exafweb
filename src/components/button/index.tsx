import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { ArrowRight } from "lucide-react";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-green-600 text-white hover:bg-green-700",
        outline:
          "border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10",
        secondary: "bg-yellow-500 text-green-900 hover:bg-yellow-600",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-full",
        lg: "h-12 px-8 rounded-full text-base",
        xl: "h-14 px-8 py-6 rounded-full text-base",
        icon: "h-10 w-10",
      },
      withArrow: {
        true: "gap-2",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      withArrow: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withArrow, children, ...props }, ref) => {
    return (
      <button
        className={classNames(
          buttonVariants({ variant, size, withArrow, className })
        )}
        ref={ref}
        {...props}
      >
        {children}
        {withArrow && (
          <span className="bg-yellow-400 text-[#1F6306] rounded-full w-5 h-5 flex items-center justify-center text-xs">
            <ArrowRight className="h-3 w-3" />
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
