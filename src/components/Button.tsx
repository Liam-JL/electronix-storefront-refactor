type ButtonProps = {
  title: string;
  onPress: () => void;
  bgColor?: string;
  bgHoverColor?: string;
  textColor?: string;
  textHoverColor?: string;
  disabled?: boolean;
  accessibilityLabel?: string;
  className?: string;
};

function Button({
  title,
  onPress,
  bgColor = "bg-accent",
  bgHoverColor = "hover:bg-accent-light",
  textColor = "text-electronix-white",
  textHoverColor = "text-electronix-white",
  disabled = false,
  accessibilityLabel,
  className = "",
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onPress}
      disabled={disabled}
      aria-label={accessibilityLabel}
      className={`
        px-4 py-2 rounded-xl font-medium cursor-pointer w-full transition-none md:transition-all duration-300 ease-in-out hover:scale-101
        ${bgColor} ${textColor} ${bgHoverColor} ${textHoverColor}
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {title}
    </button>
  );
}

export default Button;
