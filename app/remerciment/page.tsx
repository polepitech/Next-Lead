'use client'
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { gsap } from '@/lib/gsap';

export default function Remerciment() {
  const [questionnaire, setQuestionnaire] = React.useState<Record<string, string> | null>(null);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  async function getReponse(id: string) {
    const response = await fetch(`/api/questionnaire?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }
    return response.json();
  }

  useEffect(() => {
    if (id) {
      getReponse(id)
        .then((data) => {
          setQuestionnaire(data.questionnaire); // Stockez l'objet directement
          console.log(data.questionnaire);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    gsap.set('#body', {
      background: 'white',
    });
  }, [id]);

  if (!questionnaire) {
    return <p>Loading...</p>;
  }

  return (
    <div className='flex flex-col items-center h-full'>
      <h1 className="text-4xl text-center font-bold">Merci pour votre participation !</h1>
      <p className="text-center text-lg mt-4">Nous avons bien reçu vos réponses.</p>
      <p className="text-center text-lg mt-2">Nous vous contacterons bientôt.</p>
      <div className="mt-20">
        <h2 className="text-2xl font-bold">Vos réponses :</h2>
        <ul className="list-disc list-inside">
          <li className={questionnaire.Question1 !== 'Paul' ? 'text-red-500' : "text-green-500"}><strong>Question 1 :</strong> {questionnaire.Question1}</li>
          <li className={questionnaire.Question2 !== 'Français' ? 'text-red-500' : "text-green-500"}><strong>Question 2 :</strong> {questionnaire.Question2}</li>
          <li className={questionnaire.Question3 !== 'Web@cademie' ? 'text-red-500' : "text-green-500"}><strong>Question 3 :</strong> {questionnaire.Question3}</li>
          <li className={questionnaire.Question4 !== '💎' ? 'text-red-500' : "text-green-500"}><strong>Question 4 :</strong> {questionnaire.Question4}</li>
          <li className={questionnaire.Question5 !== '26' ? 'text-red-500' : "text-green-500"}><strong>Question 5 :</strong> {questionnaire.Question5}</li>
          <li ><strong>Question 6 :</strong> {questionnaire.Question6}</li>
          <li ><strong>Question 7 :</strong> {questionnaire.Question7}</li>
          <li ><strong>Question 8 :</strong> {questionnaire.Question8}</li>
        </ul>
      </div>
    </div>
  );
}