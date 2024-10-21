"use client"

import Footer from "@/components/main/Footer"
import Hero from "@/components/main/Hero"
import Navbar from "@/components/main/Navbar"
import ProgressBar from "@/components/main/ProgressBar"
import Projects from "@/components/main/Projects"
import Skills from "@/components/main/Skills"
import StarBackground from "@/components/main/StarBackground"

export default function Home() {
  return (
   <main className="h-full w-full">
    <div className="flex flex-col h-[850px] gap-20">
      <Hero />
      <StarBackground />
      <Navbar />
      <Skills />
      <Projects />
      <Footer />
      <ProgressBar />
    </div>
   </main>
  )
}
