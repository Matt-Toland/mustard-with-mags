import { Card } from '../components/ui/Card';

export function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Page heading */}
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
          About Mags
        </h1>
        <div className="w-24 h-1 bg-blue-bright mx-auto rounded-full" />
      </div>

      {/* Two-column story section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        <div className="flex-1">
          <img
            src="/assets/mags_photo2.jpg"
            alt="Mags in the kitchen"
            className="
              w-full max-w-md mx-auto rounded-3xl
              border-3 border-charcoal
              shadow-[6px_6px_0_0_#6BA3D6,10px_10px_0_0_#2B2B2B]
              transform rotate-[-1deg]
            "
          />
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="font-display text-2xl md:text-3xl text-charcoal">
            The Story Behind the Jar
          </h2>
          <p className="font-body text-slate-medium text-lg leading-relaxed">
            It all started with a family recipe and a kitchen experiment that went
            deliciously right. Mags has always believed that the best condiments are
            the ones made with care, real ingredients, and a little bit of audacity.
          </p>
          <p className="font-body text-slate-medium text-lg leading-relaxed">
            What began as jars gifted to friends and family quickly turned into
            something bigger. People kept coming back for more — and asking when
            they could buy it. So here we are.
          </p>
          <p className="font-body text-slate-medium text-lg leading-relaxed">
            Every batch is made by hand in small quantities, ensuring each jar gets
            the love and attention it deserves. No factories, no preservatives, no
            compromise.
          </p>
        </div>
      </div>

      {/* Pull quote */}
      <div className="max-w-2xl mx-auto mb-16">
        <Card className="text-center">
          <p className="font-display text-2xl md:text-3xl text-charcoal italic leading-relaxed">
            "Life's too short for boring condiments."
          </p>
          <p className="font-body text-slate-medium mt-4">— Mags</p>
        </Card>
      </div>

    </div>
  );
}
