import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';

export async function POST(req:Request){
 

    const body = await req.json();
    console.log(body);

  
    const {numero} = body;
    if (!numero) {
        return NextResponse.json({ error: "Le champ 'numero' est requis." }, { status: 400 });
    }
    // const article = await prisma.article.create({
    //     data:{
    //         numero:numero
    //     }
    // });

    return NextResponse.json({message: "Article crée",numero}, {status: 200});
 }