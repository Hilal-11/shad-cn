import React from "react";
import HeroChart from "./HeroChart";
import { Button } from "@/components/ui/button"

function Hero() {
    return (
        <div className="flex">
            <div>
                <h1 className="text-6xl font-extrabold text-white">Shad-CN, Vite, React, Meterial UI</h1>
                <p className="px-10 text-[12px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officiis est doloremque eius labore? Cumque, sit! Eos quo officiis ducimus? Quo odio itaque molestias fugiat, error obcaecati architecto ea asperiores quibusdam ipsum optio neque voluptatem deserunt adipisci vero id dolores.</p>
                <div className="flex py-10 justify-evenly gap-20">
                    <Button className='bg-white text-black font-black px-10 py-2'>Documentation</Button>
                    <Button className='bg-white text-black font-black px-10 py-2'>Projects</Button>
                </div>
            </div>
            <div>
                <HeroChart />
            </div>
        </div>
    )
}

export default Hero