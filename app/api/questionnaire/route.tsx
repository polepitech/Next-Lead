import { NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';

export async function POST(req:Request){
 

    const body = await req.json();
    console.log(body);
    console.log(body);
    console.log(body);
    console.log(body);

  


  
    const {Question1,Question2,Question3,Question4,Question5,Question6, Question7, Question8} = body;
    if (!Question1 || !Question2 || !Question3 || !Question4 || !Question5 || !Question6 || !Question7 || !Question8) {
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
                Question7: Question7,
                Question8: Question8,
            }
        });
    
        return NextResponse.json({message: "Article créé", id: article.id}, {status: 200});
    }
 }

export async function GET(req:Request){
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: "ID manquant" }, { status: 400 });
    }

    const questionnaire = await prisma.questionnaire.findUnique({
        where: { id: parseInt(id) },
    });

    if (!questionnaire) {
        return NextResponse.json({ error: "Questionnaire non trouvé" }, { status: 404 });
    }
    return NextResponse.json({questionnaire}, {status: 200});
}
