export function Button({
  children,
  variant = 'primary',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
}) {
  const baseStyles = `
    px-8 py-4 rounded-full font-display font-bold text-lg
    transition-all duration-100 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
    focus:outline-none focus:ring-4 focus:ring-mustard-bright/40
  `;

  const variants = {
    primary: `
      bg-mustard-bright text-charcoal
      border-3 border-charcoal
      shadow-[4px_4px_0_0_#2B2B2B]
      hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#2B2B2B]
      active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0_0_#2B2B2B]
    `,
    secondary: `
      bg-cream text-charcoal
      border-3 border-charcoal
      shadow-[4px_4px_0_0_#2B2B2B]
      hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#2B2B2B]
      active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0_0_#2B2B2B]
    `,
    ghost: `
      bg-transparent text-brown-medium
      border-2 border-transparent
      hover:text-charcoal hover:bg-mustard-bright/20
      active:bg-mustard-bright/30
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="w-5 h-5 border-3 border-charcoal border-t-transparent rounded-full animate-spin" />
          Submitting...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
