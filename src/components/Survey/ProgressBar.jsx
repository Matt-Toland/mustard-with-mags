export function ProgressBar({ currentStep, totalSteps }) {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-display font-semibold text-charcoal">
          Question {currentStep + 1} of {totalSteps}
        </span>
      </div>
      {/* Blob dots progress indicator */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`
              transition-all duration-300 ease-out
              ${i <= currentStep
                ? 'w-5 h-5 bg-mustard-bright border-2 border-charcoal scale-110'
                : 'w-4 h-4 bg-cream-dark border-2 border-brown-medium'
              }
            `}
            style={{
              borderRadius: i <= currentStep
                ? '45% 55% 40% 60%'  // blob shape for completed
                : '50%',             // circle for incomplete
            }}
          />
        ))}
      </div>
    </div>
  );
}
