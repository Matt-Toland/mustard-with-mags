import { SurveyContainer } from '../components/Survey/SurveyContainer';

export function Survey() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Page heading */}
      <div className="text-center mb-10">
        <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
          Take the Survey
        </h1>
        <div className="w-24 h-1 bg-blue-bright mx-auto mb-6 rounded-full" />
        <p className="font-body text-lg text-slate-medium max-w-xl mx-auto">
          Help Mags figure out what to make next. Your answers shape the flavours,
          the recipes, and the future of Mustard by Mags.
        </p>
      </div>

      {/* Survey */}
      <div className="flex justify-center">
        <SurveyContainer />
      </div>
    </div>
  );
}
