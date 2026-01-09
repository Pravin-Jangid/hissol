type CommonHeroProps = {
  title: string;
  description: string;
};

export default function CommonHero({ title, description }: CommonHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 z-0"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/d6/9f/8b/d69f8b126d027711746f7d1991ae7154.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[rgba(15,40,84,0.9)] via-[rgba(28,77,141,0.85)] to-[rgba(10,11,11,0.75)]" />

      {/* Content */}
      <div className="relative z-10 py-32 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto reveal show">
          <h1 className="white-title">{title}</h1>

          <p className="text-[var(--font-md)] text-white/90 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-[100px]"
        >
          <path
            fill="var(--clr-bg)"
            d="M0,40 C240,90 480,10 720,30 960,50 1200,90 1440,30 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
}
