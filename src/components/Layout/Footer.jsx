export function Footer() {
  return (
    <footer className="text-center py-6 mt-auto">
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="h-0.5 w-12 bg-charcoal/20 rounded-full" />
        <span className="text-mustard-bright text-lg">🟡</span>
        <div className="h-0.5 w-12 bg-charcoal/20 rounded-full" />
      </div>
      <p className="font-display text-sm text-charcoal font-semibold">
        Mustard by Mags
      </p>
      <p className="font-body text-xs text-brown-medium mt-1">
        2026 — Year of the Condiment
      </p>
    </footer>
  );
}
