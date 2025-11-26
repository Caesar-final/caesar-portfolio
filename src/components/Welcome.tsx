const Welcome = () => {
    return (
        <div className="grid grid-cols-4 p-11 relative"> {/* ← added relative here */}
            <div className="col-span-3 pl-40">
                <h1 className="text-8xl md:text-8xl font-bold text-white mb-8">
                    Experience
                </h1>
                <h1 className="text-5xl md:text-8xl font-bold text-white mb-8">
                    Outweighs
                </h1>
                <h1 className="text-5xl md:text-8xl font-bold text-white mb-8">
                    Content
                </h1>
                <p className="text-xl/15 text-gray-300 mt-4 max-w-2xl">
                    Great software isn’t measured by how many features it has,
                    but by how effortlessly people use the few things it does.
                    I focus on solving real problems with clarity, speed, and precision-building tools that feel
                    intuitive from the first click, because a product people love to use will always beat one
                    overloaded with options nobody needs.
                </p>
            </div>
            <div className="col-span-1 relative">
                    <div className="absolute right-0 top-0 h-full w-full">
                        <div className="absolute -right-0 top-1/2 -translate-y-1/2 w-96 h-96 md:w-[500px] md:h-[500px]
                                bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-purple-700/30
                                rounded-full blur-3xl animate-pulse" />
                        <div className="absolute right-10 top-1/4 w-64 h-64 md:w-80 md:h-80
                                bg-gradient-to-tr from-emerald-500/20 to-cyan-500/30
                                rounded-full blur-3xl" />
                    </div>
            </div>
        </div>)
}

export default Welcome