import { useReducer, useCallback, useMemo } from 'react';
import { getVisibleQuestions } from '../data/questions';

const initialState = {
  answers: {},
  currentStep: 0,
  isSubmitting: false,
  isComplete: false,
  showWelcome: true,
};

function surveyReducer(state, action) {
  switch (action.type) {
    case 'SET_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.value,
        },
      };
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case 'PREV_STEP':
      return {
        ...state,
        currentStep: Math.max(0, state.currentStep - 1),
      };
    case 'SET_SUBMITTING':
      return {
        ...state,
        isSubmitting: action.value,
      };
    case 'SET_COMPLETE':
      return {
        ...state,
        isComplete: true,
        isSubmitting: false,
      };
    case 'DISMISS_WELCOME':
      return {
        ...state,
        showWelcome: false,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function useSurvey() {
  const [state, dispatch] = useReducer(surveyReducer, initialState);

  const visibleQuestions = useMemo(
    () => getVisibleQuestions(state.answers),
    [state.answers]
  );

  const currentQuestion = visibleQuestions[state.currentStep];
  const isFirstStep = state.currentStep === 0;
  const isLastStep = state.currentStep === visibleQuestions.length - 1;
  const progress = visibleQuestions.length > 0
    ? ((state.currentStep + 1) / visibleQuestions.length) * 100
    : 0;

  const setAnswer = useCallback((questionId, value) => {
    dispatch({ type: 'SET_ANSWER', questionId, value });
  }, []);

  const nextStep = useCallback(() => {
    dispatch({ type: 'NEXT_STEP' });
  }, []);

  const prevStep = useCallback(() => {
    dispatch({ type: 'PREV_STEP' });
  }, []);

  const submit = useCallback(async (submitFn) => {
    dispatch({ type: 'SET_SUBMITTING', value: true });
    try {
      await submitFn(state.answers);
      dispatch({ type: 'SET_COMPLETE' });
    } catch (error) {
      dispatch({ type: 'SET_SUBMITTING', value: false });
      throw error;
    }
  }, [state.answers]);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const dismissWelcome = useCallback(() => {
    dispatch({ type: 'DISMISS_WELCOME' });
  }, []);

  return {
    answers: state.answers,
    currentStep: state.currentStep,
    isSubmitting: state.isSubmitting,
    isComplete: state.isComplete,
    showWelcome: state.showWelcome,
    visibleQuestions,
    currentQuestion,
    isFirstStep,
    isLastStep,
    progress,
    setAnswer,
    nextStep,
    prevStep,
    submit,
    reset,
    dismissWelcome,
  };
}
