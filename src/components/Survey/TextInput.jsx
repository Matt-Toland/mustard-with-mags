export function TextInput({ question, value = '', onChange }) {
  const inputClasses = `
    w-full p-4 rounded-2xl
    border-2 border-slate-medium
    bg-ice
    font-body text-charcoal text-lg
    placeholder:text-slate-medium/60
    focus:outline-none focus:border-charcoal focus:bg-ice-dark
    focus:shadow-[inset_0_2px_4px_rgba(45,24,16,0.1)]
    transition-all duration-200
  `;

  // Use single-line input for short fields like name/email
  if (question.id === 'name' || question.id === 'email') {
    return (
      <div>
        <input
          type={question.id === 'email' ? 'email' : 'text'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder || 'Type your answer here...'}
          className={inputClasses}
        />
      </div>
    );
  }

  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={question.placeholder || 'Type your answer here...'}
        rows={4}
        className={`${inputClasses} resize-none`}
      />
    </div>
  );
}
