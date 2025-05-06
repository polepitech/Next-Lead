import React from 'react'
import { Fugaz_One } from 'next/font/google'
import { Input } from '@/components/ui/input';
import { QuestionQcm } from '@/components/ui/questionnaire/QuestionQcm';
const fuzz = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
})

export default function Page() {
    return (
    <div>
        <h1 className={`text-[10vw] text-center text-white font-black p-4 ${fuzz.className}`}>Questionnaire</h1>
        <form>

            <QuestionQcm titre={'Quel est le nom de votre futur alternant?'} name={'Qcm'} Choix1={'Paul'} Choix2={'Williams'} Choix3={'Ion'} Choix4={'Aimée'}/>
        </form>
    </div>
    );
  }
