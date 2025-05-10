'use client'
import { Qcm } from "@/components/Questions/qcm";
import { Button } from "@/components/ui/button";
import { gsap } from "@/lib/gsap";
import { Fugaz_One } from 'next/font/google';
import { useEffect, useState } from "react";
import { z } from "zod";
import { Question } from '@/components/Questions/Question';
import { useRouter } from 'next/navigation';




// Schéma Zod
const questionnaireSchema = z.object({
    Question1: z.string().min(1, { message: "Vous devez choisir un nom d'alternant" }).default(""),
    Question2: z.string().min(1, { message: "Vous devez sélectionner au moins une langue" }).default(""),
    Question3: z.string().min(1, { message: "Vous devez fournir un nom d'école" }).default(""),
    Question4: z.string().min(1, { message: "vous devez choisir une certification" }).default(""),
    Question5: z.string().min(1, { message: "Vous devez choisir un age valide" }).default(""),
    Question6: z.string().min(1, { message: "Vous devez écrire un commentaire" }).default(""),
    Question7: z.string().min(1, { message: "Vous devez choisir votre nom" }).default(""),
    Question8: z.string().min(1, { message: "vous devez choisir un niveau de satisfaction" }).default(""),
});

const fuzz = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
});

export default function TestTechnique() {
  const [error, setError] = useState<string | null>(null);
  const Router = useRouter();

  useEffect(() => {
    gsap.set('#body', {
      background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
    });
  }, []);



  /////// Fonction pour gérer la soumission du formulaire////
  /////// Fonction pour gérer la soumission du formulaire////

  const handleSubmit = async (e: React.FormEvent) => {
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
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        Router.push('/remerciment?id=' + data.id);
        alert("Formulaire envoyé avec succès !");
      } else {
        alert("Erreur lors de l'envoi du formulaire.");
      }
    });
  };



  return (
    <div className="h-fit flex flex-col items-center justify-center ">
      <h1 className={`text-[10vw] text-center text-white font-black p-4 ${fuzz.className}`}>Questionnaire</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full h-full">

        <Qcm
          titre={'Quel est le nom de votre futur alternant ?'}
          name={'Question1'}
          Choix1={'Paul'}
          Choix2={'Williams'}
          Choix3={'Ion'}
          Choix4={'Aimée'}
          Oblige={'Paul'}
        />

        <Question
          titre={'Selon vous, quelles langues parle votre futur alternant?'}
          name={'Question2'}
          description={'Plusieurs choix possibles'}
          type={'checkbox'}
          Choix1={'Français'}
          Choix2={'Anglais'}
          Choix3={'Espagnol'}
          Choix4={'Portugais'}
        />

        
        <Question
          titre={'Quel est le nom de l\'école de votre alternant ?'}
          name={'Question3'}
          type={'select'}
          Choix1={'Epitech'} 
          Choix2={'Web@cademie'}
          Choix3={'IIM'}
          Choix4={'Ecole 42'}
        />

        <Question
          titre={"Quelle certification a-t-il obtenu en tant qu'ingénieur du son?"}
          name={'Question4'}
          type={'radio'}
          Choix1={'📀'}
          Choix2={'💿'}
          Choix3={'💎'}
        />

        <Question
          titre={'Quel âge a votre futur alternant ?'}
          name={'Question5'}
          type={'number'}
        />

        <Question
          titre={'Comment avez-vous découvert votre futur alternant?'}
          name={'Question6'}
          type={'textarea'}
          description={'Exprimez-vous en quelques mots'}
        />

        <Question
          titre={'Comment vous appelez-vous ?'}
          description=""
          name={'Question7'}
          type={'text'}
        />

        <Question
          titre={'Comment avez-vous trouvé ce questionnaire ?'}
          name={'Question8'}
          type={'range'}
        />


       
        
        <div className="spacing m-20"></div>
        <p className="text-white text-center">Vérifiez bien vos réponses et envoyez le formulaire.</p>

        {error && <p className="text-red-500 text-center">{error}</p>}
        <Button type="submit" className="m-10">Envoyer </Button>
      </form>
    </div>
  );
}