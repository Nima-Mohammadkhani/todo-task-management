import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { ButtonProps } from "../../types/ui";

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  link,
  variant = "",
  size = "",
  className = "",
  textClassName = "",
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  type = "button",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-150 overflow-hidden gap-2";

  const variantClasses: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-green-600 text-white hover:bg-green-700",
    outline:
      "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeClasses: Record<string, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  const buttonClasses = cn(
    baseClasses,
    variant ? variantClasses[variant] : "",
    size ? sizeClasses[size] : "",
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const textClasses = cn(
    "whitespace-nowrap",
    textClassName,
    disabled && "text-gray-300"
  );

  const renderIconLeft = () => {
    if (!iconLeft) return null;
    return typeof iconLeft === "string" ? (
      <Icon name={iconLeft as any} />
    ) : (
      iconLeft
    );
  };

  const renderIconRight = () => {
    if (!iconRight) return null;
    return typeof iconRight === "string" ? (
      <Icon name={iconRight as any} />
    ) : (
      iconRight
    );
  };

  const content = (
    <>
      {loading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <>
          {renderIconLeft()}
          {title && <span className={textClasses}>{title}</span>}
          {renderIconRight()}
        </>
      )}
    </>
  );

  if (link && !disabled) {
    return (
      <Link to={link} onClick={onClick} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {content}
    </button>
  );
};

export default Button;
