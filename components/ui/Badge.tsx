interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "success";
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "default",
  size = "md",
}: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-md font-medium";

  const variantStyles = {
    default: "bg-muted text-muted-foreground",
    outline: "border border-border text-muted-foreground",
    success: "bg-success/10 text-success",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs",
  };

  const classes = baseStyles + " " + variantStyles[variant] + " " + sizeStyles[size];

  return <span className={classes}>{children}</span>;
}