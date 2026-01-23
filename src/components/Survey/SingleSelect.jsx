import { useState } from 'react';

export function SingleSelect({ question, value, onChange }) {
  const [otherText, setOtherText] = useState('');
  const isOtherSelected = value === 'Other' || (value && !question.options.find(o => o.value === value));

  const handleSelect = (optionValue) => {
    if (optionValue === 'Other') {
      onChange(otherText || 'Other');
    } else {
      onChange(optionValue);
    }
  };

  const handleOtherChange = (e) => {
    setOtherText(e.target.value);
    if (isOtherSelected) {
      onChange(e.target.value || 'Other');
    }
  };

  const baseOptionStyles = `
    flex items-center gap-4 p-4 rounded-2xl cursor-pointer
    border-2 transition-all duration-150 ease-out
  `;

  const selectedStyles = `
    bg-mustard-bright border-charcoal
    translate-x-2 shadow-[-4px_0_0_0_#2B2B2B]
  `;

  const unselectedStyles = `
    bg-cream border-brown-medium
    hover:translate-x-1 hover:border-charcoal hover:bg-cream-dark
  `;

  return (
    <div className="space-y-3">
      {question.options.map((option) => (
        <label
          key={option.value}
          className={`
            ${baseOptionStyles}
            ${value === option.value ? selectedStyles : unselectedStyles}
          `}
        >
          <div
            className={`
              w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0
              transition-all duration-150
              ${value === option.value
                ? 'border-charcoal bg-charcoal'
                : 'border-brown-medium'
              }
            `}
          >
            {value === option.value && (
              <svg className="w-4 h-4 text-mustard-bright" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <span className="font-body text-charcoal font-medium">{option.label}</span>
          <input
            type="radio"
            name={question.id}
            value={option.value}
            checked={value === option.value}
            onChange={() => handleSelect(option.value)}
            className="sr-only"
          />
        </label>
      ))}

      {question.hasOther && (
        <label
          className={`
            ${baseOptionStyles}
            ${isOtherSelected ? selectedStyles : unselectedStyles}
          `}
        >
          <div
            className={`
              w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0
              transition-all duration-150
              ${isOtherSelected
                ? 'border-charcoal bg-charcoal'
                : 'border-brown-medium'
              }
            `}
          >
            {isOtherSelected && (
              <svg className="w-4 h-4 text-mustard-bright" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <input
            type="radio"
            name={question.id}
            value="Other"
            checked={isOtherSelected}
            onChange={() => handleSelect('Other')}
            className="sr-only"
          />
          <input
            type="text"
            placeholder="Other (please specify)"
            value={otherText}
            onChange={handleOtherChange}
            onFocus={() => handleSelect('Other')}
            className="
              flex-1 bg-transparent border-b-2 border-brown-medium
              focus:border-charcoal focus:outline-none
              font-body text-charcoal py-1
              placeholder:text-brown-medium
            "
          />
        </label>
      )}
    </div>
  );
}
