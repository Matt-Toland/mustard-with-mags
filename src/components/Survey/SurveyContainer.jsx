import { useSurvey } from '../../hooks/useSurvey';
import { submitSurvey } from '../../services/api';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProgressBar } from './ProgressBar';
import { SingleSelect } from './SingleSelect';
import { MultiSelect } from './MultiSelect';
import { TextInput } from './TextInput';
import { ThankYou } from './ThankYou';

function WelcomeScreen({ onStart }) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <Card className="text-center">
        <div className="mb-6">
          <span className="text-6xl">💙</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
          Mustard by Mags
        </h1>
        <div className="w-24 h-1 bg-blue-bright mx-auto mb-6 rounded-full" />
        <p className="font-display text-xl md:text-2xl text-slate-medium mb-2">
          Help shape the condiment revolution of 2026!
        </p>
        <p className="font-body text-slate-medium mb-8">
          ~2 minutes • Your answers = better mustard
        </p>

        {/* Mobile-only: Show the hero image on welcome */}
        <div className="lg:hidden mb-8">
          <img
            src="/assets/mags_holding_mustard.png"
            alt="Mags holding jars of homemade mustard"
            className="w-full max-w-xs mx-auto rounded-2xl border-3 border-charcoal shadow-[4px_4px_0_0_#2B2B2B]"
          />
        </div>

        <Button onClick={onStart} variant="primary" className="text-xl px-10 py-5">
          Let's Go! 🚀
        </Button>
      </Card>
    </div>
  );
}

function QuestionRenderer({ question, value, onChange }) {
  switch (question.type) {
    case 'single-select':
      return <SingleSelect question={question} value={value} onChange={onChange} />;
    case 'multi-select':
      return <MultiSelect question={question} value={value} onChange={onChange} />;
    case 'text':
      return <TextInput question={question} value={value} onChange={onChange} />;
    default:
      return null;
  }
}

export function SurveyContainer() {
  const {
    answers,
    currentStep,
    isSubmitting,
    isComplete,
    showWelcome,
    visibleQuestions,
    currentQuestion,
    isFirstStep,
    isLastStep,
    setAnswer,
    nextStep,
    prevStep,
    submit,
    reset,
    dismissWelcome,
  } = useSurvey();

  if (showWelcome) {
    return <WelcomeScreen onStart={dismissWelcome} />;
  }

  if (isComplete) {
    return <ThankYou onReset={reset} />;
  }

  if (!currentQuestion) {
    return null;
  }

  const currentValue = answers[currentQuestion.id];
  const hasAnswer = currentQuestion.optional
    ? true
    : currentQuestion.type === 'multi-select'
      ? Array.isArray(currentValue) && currentValue.length > 0
      : Boolean(currentValue);

  const handleNext = async () => {
    if (isLastStep) {
      await submit(submitSurvey);
    } else {
      nextStep();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <ProgressBar
        currentStep={currentStep}
        totalSteps={visibleQuestions.length}
      />

      <Card>
        <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-2">
          {currentQuestion.question}
        </h2>

        {currentQuestion.subtitle && (
          <p className="font-body text-slate-medium mb-6">
            {currentQuestion.subtitle}
          </p>
        )}

        <div className="my-8">
          <QuestionRenderer
            question={currentQuestion}
            value={currentValue}
            onChange={(value) => setAnswer(currentQuestion.id, value)}
          />
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={isFirstStep}
            className={isFirstStep ? 'invisible' : ''}
          >
            ← Back
          </Button>

          <Button
            variant="primary"
            onClick={handleNext}
            disabled={!hasAnswer}
            loading={isSubmitting}
          >
            {isLastStep ? 'Submit! 🎉' : 'Next →'}
          </Button>
        </div>
      </Card>
    </div>
  );
}
