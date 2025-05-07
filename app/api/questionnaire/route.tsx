import { NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';

export async function POST(req:Request){
 

    const body = await req.json();
    console.log(body.Qcm);
  


  
    const {Qcm} = body;
    if (!Qcm) {
        return NextResponse.json({ error: "Tout les champs ne sont pas remplie " }, { status: 400 });
    }else{
        const article = await prisma.questionnaire.create({
            data:{
                Question1:Qcm
            }
        });
    
        return NextResponse.json({message: "Article créé"}, {status: 200});
    }
 }