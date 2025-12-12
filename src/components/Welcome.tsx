const Welcome = () => {
  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-center">
        <div className="col-span-1 lg:col-span-3">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Experience
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cyan-400 leading-tight">
            Outweighs
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Content
          </h1>

          <p className="mt-8 text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
            Great software isn’t measured by how many features it has, but by how effortlessly people use the few things it does. I focus on solving real problems with clarity, speed, and precision — building tools that feel intuitive from the first click.
          </p>
        </div>

        {/* Gradient Background Orbs */}
        <div className="relative h-96 lg:h-full hidden lg:block">
          <div className="absolute inset-0 -right-20">
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-purple-700/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;