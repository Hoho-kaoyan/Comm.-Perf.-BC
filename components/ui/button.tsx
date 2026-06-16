import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-amber-300 text-zinc-950 hover:bg-amber-200 shadow-[0_8px_30px_rgba(212,175,55,0.25)]",
        ghost:
          "border border-white/15 bg-white/5 text-zinc-100 hover:bg-white/10 hover:border-white/25",
        outline:
          "border border-amber-300/40 text-amber-200 hover:bg-amber-300/10",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants>;

export type ButtonProps =
  | ({ href: string; target?: string; rel?: string } & ButtonBaseProps &
      Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
  | ({ href?: undefined } & ButtonBaseProps &
      React.ButtonHTMLAttributes<HTMLButtonElement>);

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant, size, children, ...props }, ref) => {
  const classes = cn(buttonVariants({ variant, size, className }));
  if ("href" in props && props.href) {
    const { href, target, rel, ...anchorRest } =
      props as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
        target?: string;
        rel?: string;
      };
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }
  const btnRest = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...btnRest}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };