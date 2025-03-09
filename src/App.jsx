import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Home/Projects"
function App() {
  return (
    <div className="bg-neutral-950 min-h-svh py-2 lg:py-4 px-2">
      <div className="flex justify-center bg-neutral-900 py-3 lg:py-5  rounded-full px-4 lg:px-10 w-full lg:w-[80%] mx-auto shadow-xl shadow-black">
        <Header />
      </div>

      <div className="py-10 lg:my-10 w-full lg:w-[80%] mx-auto "> 
        <Hero />
      </div>
      <div className="w-full lg:w-[80%] mx-auto">
        <Projects />
      </div>
    </div>
  )
}
 
export default App