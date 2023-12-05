import { connectToDB } from '@utils/database'
import { log } from 'console'
import User from '@models/user.js'
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import {toJson} from '@reis/mongoose-to-json'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";



// export const GET = async (request, ) => {

//   try {
//     await connectToDB()

//     const data = await User.findOne({ _id:'656ec352bd375007c9585a2d'})
//     // const existingId = await user.id;

//     // const data = await User.find({});

//     return new Response(JSON.stringify(data), { status: 200 })
    
//   } catch (error) {
//     console.log(error)
//     log(error)
//     return new Response('Failed to fetch device profiles', { status: 500 })
//   }
// }

export const POST = async (request, { params }) => {
    const {userId} = await request.json();

  try {
    await connectToDB()

    // const data = await User.findOne({ _id:'656ec352bd375007c9585a2d'})
    const data = await User.findOne({_id: userId})
    // const existingId = await user.id;

    // const data = await User.find({});

    return new Response(JSON.stringify(data), { status: 200 })
    
  } catch (error) {
    console.log(error)
    log(error)
    return new Response('Failed to fetch device profiles', { status: 500 })
  }
}
// export const GET = async (request, { params }) => {
//     try {
//         await connectToDB()

//         const prompt = await ControlProfile.findById(params.id).populate("creator")
//         if (!prompt) return new Response("Prompt Not Found", { status: 404 });

//         return new Response(JSON.stringify(prompt), { status: 200 })

//     } catch (error) {
//         return new Response("Internal Server Error", { status: 500 });
//     }
// }
