import { useState } from 'react';

export function MultiSelect({ question, value = [], onChange }) {
  const [otherText, setOtherText] = useState('');

  const selectedValues = Array.isArray(value) ? value : [];
  const otherValue = selectedValues.find(
    (v) => !question.options.find((o) => o.value === v)
  );

  const handleToggle = (optionValue) => {
    const newValues = selectedValues.includes(optionValue)
      ? selectedValues.filter((v) => v !== optionValue)
      : [...selectedValues, optionValue];
    onChange(newValues);
  };

  const handleOtherChange = (e) => {
    const text = e.target.value;
    setOtherText(text);

    const standardValues = selectedValues.filter((v) =>
      question.options.find((o) => o.value === v)
    );

    if (text) {
      onChange([...standardValues, text]);
    } else if (otherValue) {
      onChange(standardValues);
    }
  };

  const handleOtherFocus = () => {
    if (!otherValue && otherText) {
      const standardValues = selectedValues.filter((v) =>
        question.options.find((o) => o.value === v)
      );
      onChange([...standardValues, otherText]);
    }
  };

  const baseOptionStyles = `
    flex items-center gap-4 p-4 rounded-2xl cursor-pointer
    border-2 transition-all duration-150 ease-out
  `;

  const selectedStyles = `
    bg-blue-bright border-charcoal
    translate-x-2 shadow-[-4px_0_0_0_#2B2B2B]
  `;

  const unselectedStyles = `
    bg-ice border-slate-medium
    hover:translate-x-1 hover:border-charcoal hover:bg-ice-dark
  `;

  return (
    <div className="space-y-3">
      {question.options.map((option) => {
        const isSelected = selectedValues.includes(option.value);
        return (
          <label
            key={option.value}
            className={`
              ${baseOptionStyles}
              ${isSelected ? selectedStyles : unselectedStyles}
            `}
          >
            <div
              className={`
                w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0
                transition-all duration-150
                ${isSelected
                  ? 'border-charcoal bg-charcoal'
                  : 'border-slate-medium'
                }
              `}
            >
              {isSelected && (
                <svg className="w-4 h-4 text-blue-bright" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className="font-body text-charcoal font-medium">{option.label}</span>
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => handleToggle(option.value)}
              className="sr-only"
            />
          </label>
        );
      })}

      {question.hasOther && (
        <label
          className={`
            ${baseOptionStyles}
            ${otherValue ? selectedStyles : unselectedStyles}
          `}
        >
          <div
            className={`
              w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0
              transition-all duration-150
              ${otherValue
                ? 'border-charcoal bg-charcoal'
                : 'border-slate-medium'
              }
            `}
          >
            {otherValue && (
              <svg className="w-4 h-4 text-blue-bright" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <input
            type="text"
            placeholder="Other (please specify)"
            value={otherText}
            onChange={handleOtherChange}
            onFocus={handleOtherFocus}
            className="
              flex-1 bg-transparent border-b-2 border-slate-medium
              focus:border-charcoal focus:outline-none
              font-body text-charcoal py-1
              placeholder:text-slate-medium
            "
          />
        </label>
      )}
    </div>
  );
}
