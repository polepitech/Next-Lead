'use client'
import { Qcm } from "@/components/Questions/qcm";
import { Button } from "@/components/ui/button";
import { gsap } from "@/lib/gsap";
import { Fugaz_One } from 'next/font/google';
import { useEffect, useState } from "react";
import { z } from "zod";
import { Question } from '@/components/Questions/Question';

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
    <div id="body" className="h-fit flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">
      <h1 className={`text-[10vw] text-center text-white font-black p-4 ${fuzz.className}`}>Questionnaire</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
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
          titre={'Quel est votre domaine d\'étude?'}
          name={'Question'}
          type={'range'}
          Choix1={'Informatique'}
          Choix2={'Médecine'}
          Choix3={'Droit'}
          Choix4={'Arts'}
        />
        
        <Question
          titre={'Quel est votre niveau de satisfaction?'}
          name={'radio'}
          type={'radio'}
          Choix1={'1'}
          Choix2={'2'}
          Choix3={'3'}
          Choix4={'4'}
        />
        
        {error && <p className="text-red-500 text-center">{error}</p>}
        <Button type="submit" className="m-10">Submit</Button>
      </form>
    </div>
  );
}