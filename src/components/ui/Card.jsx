export function Card({ children, className = '' }) {
  return (
    <div
      className={`
        bg-cream-card rounded-3xl
        border-3 border-charcoal
        p-8 md:p-10
        shadow-[6px_6px_0_0_#FFD000,10px_10px_0_0_#2B2B2B]
        transform rotate-[-0.5deg]
        hover:rotate-0 hover:translate-y-[-2px]
        transition-transform duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}
