'use client'
import { Qcm } from "@/components/Questions/qcm";
import { Button } from "@/components/ui/button";
import { gsap } from "@/lib/gsap";
import { Fugaz_One } from 'next/font/google';
import { useEffect, useState } from "react";
import { z } from "zod";
import { Question } from '@/components/Questions/Question';
import { ScreenLoader } from '@/components/ScreenLoader';


// Définir un schéma Zod pour valider les données du formulaire
const questionnaireSchema = z.object({
  Qcm: z.string().min(1, "Vous devez sélectionner une réponse."),
});

const fuzz = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
});

export default function TestTechnique() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    gsap.set('#body', {
      background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
    });
  }, []);



  /////// Fonction pour gérer la soumission du formulaire////
  /////// Fonction pour gérer la soumission du formulaire////

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // récuperer formulaire
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Validation de Zod
    const result = questionnaireSchema.safeParse(data);
    if (!result.success) {
      setError(result.error.errors[0].message); 
      return;
    }
    setError(null);

    // envoi des données
    fetch('api/questionnaire', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        alert("Formulaire envoyé avec succès !");
      } else {
        alert("Erreur lors de l'envoi du formulaire.");
      }
    });
  };



  return (
    <div className="h-fit flex flex-col items-center justify-center ">
      {/* <ScreenLoader /> */}
      <h1 className={`text-[10vw] text-center text-white font-black p-4 ${fuzz.className}`}>Questionnaire</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full h-full">

        <Qcm
          titre={'Quel est le nom de votre futur alternant?'}
          name={'Qcm'}
          Choix1={'Paul'}
          Choix2={'Williams'}
          Choix3={'Ion'}
          Choix4={'Aimée'}
          Oblige={'Paul'}
        />

        <Question
          titre={'Selon vous quelles langues parle votre futur alternant?'}
          name={'Question'}
          description={'Plusieurs choix possibles'}
          type={'checkbox'}
          Choix1={'Français'}
          Choix2={'Anglais'}
          Choix3={'Espagnol'}
          Choix4={'Portugais'}
        />
        
        <Question
          titre={"Quel certification à t'il obtenu en tant qu'ingénieur du son?"}
          name={'radio'}
          type={'radio'}
          Choix1={'📀'}
          Choix2={'💿'}
          Choix3={'💎'}
        />

        <Question
          titre={'Comment avez vous trouvé ce questionnaire?'}
          name={'range'}
          type={'range'}
        />
        
        <div className="spacing m-20"></div>
        <p className="text-white text-center">Vérifiez bien vos réponses et envoyez le formulaire</p>

        {error && <p className="text-red-500 text-center">{error}</p>}
        <Button type="submit" className="m-10">Submit</Button>
      </form>
    </div>
  );
}