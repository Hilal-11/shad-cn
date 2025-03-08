import React from "react";
import HeroChart from "./HeroChart";
import { Button } from "@/components/ui/button"

function Hero() {
    return (
        <div className="flex lg:flex-nowrap flex-wrap gap-4 lg:gap-10">
            <div className="grow-4 px-5 lg:px-10 lg:py-10">
                <h1 className="text-6xl font-extrabold text-white text-center">Shad-CN, Vite, React, Meterial UI</h1>
                <p className="py-6 pb-6 px-4 lg:px-10 text-[16px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officiis est doloremque eius labore? Cumque, sit! Eos quo officiis ducimus? Quo odio itaque molestias fugiat, error obcaecati architecto ea asperiores quibusdam ipsum optio neque voluptatem deserunt adipisci vero id dolores.</p>
                <div className="flex flex-wrap lg:flex-nowrap gap-6 py-6 lg:py-10 justify-evenly lg:gap-20">
                    <Button className='w-full lg:w-auto bg-white text-black font-black px-14 py-7'>Documentation</Button>
                    <Button className='w-full lg:w-auto bg-white text-black font-black px-14 py-7'>Projects</Button>
                </div>
            </div> <br />
            <div className="size-[100%] lg:size-[80%] grow-8 px-4">
                <HeroChart />
            </div>
        </div>
    )
}

export default Hero