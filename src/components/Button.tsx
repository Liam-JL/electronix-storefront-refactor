import type { IconType } from "react-icons";

type ButtonProps = {
  title: string | IconType;
  onPress: () => void;
  defaultStyle?: boolean; // make optional
  disabled?: boolean;
  accessibilityLabel?: string;
  className?: string;
};

function Button({
  title,
  onPress,
  defaultStyle = true,
  disabled = false,
  accessibilityLabel,
  className = "",
}: ButtonProps) {
  const content = typeof title === "string" ? title : title({});

  return (
    <button
      type="button"
      onClick={onPress}
      disabled={disabled}
      aria-label={accessibilityLabel}
      className={`
        px-4 py-2 rounded-xl font-medium cursor-pointer flex justify-center items-center
        transition-all duration-200 ease-in-out hover:scale-105
        disabled:opacity-50 disabled:cursor-not-allowed
        ${defaultStyle ? "bg-accent text-electronix-white hover:bg-accent-light" : ""}
        ${className}
      `}
    >
      <span>{content}</span>
    </button>
  );
}

export default Button;
