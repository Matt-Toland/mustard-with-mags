import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text side */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-tight">
                Handcrafted
                <br />
                <span className="text-blue-dark">Mustard</span>
                <br />
                Made with Love
              </h1>
              <p className="font-body text-lg md:text-xl text-slate-medium mb-8 max-w-lg mx-auto lg:mx-0">
                Small-batch, artisan mustard crafted right here in our kitchen.
                Bold flavours, real ingredients, made by Mags.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="
                    inline-block px-8 py-4 rounded-full font-display font-bold text-lg
                    bg-blue-bright text-white
                    border-3 border-charcoal
                    shadow-[4px_4px_0_0_#2B2B2B]
                    hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#2B2B2B]
                    active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0_0_#2B2B2B]
                    transition-all duration-100 text-center
                  "
                >
                  See Our Mustards
                </Link>
                <Link
                  to="/survey"
                  className="
                    inline-block px-8 py-4 rounded-full font-display font-bold text-lg
                    bg-ice text-charcoal
                    border-3 border-charcoal
                    shadow-[4px_4px_0_0_#2B2B2B]
                    hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#2B2B2B]
                    active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0_0_#2B2B2B]
                    transition-all duration-100 text-center
                  "
                >
                  Take the Survey
                </Link>
              </div>
            </div>

            {/* Mobile-only: Show Mags image (desktop has the fixed right panel) */}
            <div className="lg:hidden flex justify-center">
              <img
                src="/assets/mags_holding_mustard.png"
                alt="Mags holding jars of homemade mustard"
                className="h-[50vh] max-h-[400px] w-auto object-contain drop-shadow-[0_4px_20px_rgba(45,24,16,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Friends' reviews — polaroid style */}
      <section className="px-4 sm:px-6 py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl text-charcoal text-center mb-4">
          What the People Say
        </h2>
        <p className="font-body text-slate-medium text-center mb-12 max-w-md mx-auto">
          Don't just take our word for it — hear from the taste testers.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto lg:mx-0 lg:ml-4">
          {[
            {
              name: 'John',
              img: '/assets/John.png',
              quote: "I put this on everything now. My fridge has never looked more sophisticated.",
              rotate: '-3deg',
              imgClass: 'scale-125 object-[center_30%]',
            },
            {
              name: 'Ellen',
              img: '/assets/Ellen.png',
              quote: "Genuinely the best mustard I've ever had. And I've had a LOT of mustard.",
              rotate: '2deg',
            },
            {
              name: 'Wolfe',
              img: '/assets/Wolfe.png',
              quote: "I wasn't even a mustard person before this. Now I'm a mustard FANATIC.",
              rotate: '-1.5deg',
            },
            {
              name: 'Lara',
              img: '/assets/Lara.png',
              quote: "Made a cheese board with this and people genuinely lost their minds.",
              rotate: '2.5deg',
            },
          ].map((review) => (
            <div
              key={review.name}
              className="bg-white p-2.5 pb-4 shadow-[2px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[4px_6px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-200 cursor-default"
              style={{ transform: `rotate(${review.rotate})` }}
            >
              {/* Photo */}
              <div className="aspect-[3/4] overflow-hidden mb-3">
                <img
                  src={review.img}
                  alt={review.name}
                  className={`w-full h-full object-cover ${review.imgClass || ''}`}
                />
              </div>
              {/* Name — handwritten style */}
              <p className="font-display text-base text-charcoal font-bold text-center mb-1.5">
                {review.name}
              </p>
              {/* Quote */}
              <p className="font-body text-xs text-slate-medium leading-relaxed text-center italic">
                "{review.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
