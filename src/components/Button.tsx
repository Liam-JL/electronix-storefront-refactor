type ButtonProps = {
  title: string;
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
  accessibilityLabel?: string;
  className?: string;
};

function Button({
  title,
  onPress,
  bgColor = "bg-accent",
  textColor = "text-electronix-white",
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
        px-4 py-2 rounded-xl font-medium transition cursor-pointer
        ${bgColor} ${textColor} 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {title}
    </button>
  );
}

export default Button;
