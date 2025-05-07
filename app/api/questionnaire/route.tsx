import { NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';

export async function POST(req:Request){
 

    const body = await req.json();
    console.log(body);
  


  
    const {Question1,Question2,Question3,Question4,Question5,Question6} = body;
    if (!Question1 || !Question2 || !Question3 || !Question4 || !Question5 || !Question6) {
        return NextResponse.json({ error: "Tout les champs ne sont pas remplie " }, { status: 400 });
    }else{
        const article = await prisma.questionnaire.create({
            data:{
                Question1: Question1,
                Question2: Question2,
                Question3: Question3,
                Question4: Question4,
                Question5: Question5,
                Question6: Question6,
            }
        });
    
        return NextResponse.json({message: "Article créé"}, {status: 200});
    }
 }