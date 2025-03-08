import React from "react";
import HeroChart from "./HeroChart";
import { Button } from "@/components/ui/button"

function Hero() {
    return (
        <div className="flex lg:flex-nowrap flex-wrap">
            <div className="w-full lg:w-[60%] px-5 lg:px-10 lg:py-10  ">
                <h1 className="text-4xl lg:text-7xl font-extrabold text-white text-center">Introduction to Shad-cn</h1>
                <p className="py-8 pb-6 px-2 lg:px-10 text-[16px] text-white">shadcn/ui is a set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks and AI models. Open Source. Open Code. Every component in shadcn/ui shares a common, composable interface. If a component does not exist, we bring it in, make it composable, and adjust its style to match and work with the rest of the design system.
                </p>
                <p className="py-6 pb-6 px-2 lg:px-10 text-[16px] text-white">The design of shadcn/ui makes it easy for AI tools to work with your code. Its open code and consistent API allow AI models to read, understand, and even generate new components.An AI model can learn how your components work and suggest improvements or even create new components that integrate with your existing design.</p>
                <div className="flex flex-wrap lg:flex-nowrap gap-6 py-6 lg:py-10 justify-evenly lg:gap-20">
                    <Button className='w-full lg:w-auto bg-white text-black font-black px-14 py-7'>Documentation</Button>
                    <Button className='w-full lg:w-auto bg-white text-black font-black px-14 py-7'>Projects</Button>
                </div>
            </div> <br />
            <div className="w-[100%] lg:w-[40%] px-4 py-4">
                <HeroChart />
            </div>
        </div>
    )
}

export default Hero