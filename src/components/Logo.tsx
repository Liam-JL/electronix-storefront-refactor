type LogoSize = "small" | "large";
type LogoVariant = "light" | "dark";

type LogoProps = {
  size: LogoSize;
  variant: LogoVariant;
};

function Logo({ size, variant }: LogoProps) {
  const textSizeClass =
    size === "large" ? "hidden md:block text-4xl" : "text-2xl";

  return (
    <div className="flex items-center gap-2">
      <img src={`logoipsum-${variant}.svg`} alt="Electronix Logo" />
      <span className={`audiowide-regular ${textSizeClass}`}>Electronix</span>
    </div>
  );
}

export default Logo;
