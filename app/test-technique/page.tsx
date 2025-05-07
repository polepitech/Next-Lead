'use client'
import { Qcm } from "@/components/Questions/qcm";
import { Button } from "@/components/ui/button";
import { gsap } from "@/lib/gsap";
import { Fugaz_One } from 'next/font/google'
import { useEffect } from "react";


const fuzz = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
})

export default function TestTechnique() {

  useEffect(() => {
    gsap.set('#body',{
        background:'linear-gradient(to right, #06b6d4, #3b82f6)'
    })
}, [])

  return (
    <div id="body" className="h-screen">
        <h1 className={`text-[10vw] text-center text-white font-black p-4 ${fuzz.className}`}>Questionnaire</h1>
        <form method='POST' action='api/questionnaire'>
            <Qcm titre={'Quel est le nom de votre futur alternant?'} name={'Qcm'} Choix1={'Paul'} Choix2={'Williams'} Choix3={'Ion'} Choix4={'Aimée'} Oblige={'Paul'}/>
            <Button className='m10'>Sumbit</Button>
        </form>
    </div>
  );
}
