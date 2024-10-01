export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/assets/img/header.png')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Somos EcoGreen</h1>
          <p className="mb-5">
            Trabajamos por un mundo mas sustentable.
          </p>
          <button className="btn btn-primary">Nosotros!</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;