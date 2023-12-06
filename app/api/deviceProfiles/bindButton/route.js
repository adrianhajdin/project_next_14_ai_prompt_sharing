import { connectToDB } from '@utils/database'
import { log } from 'console'
import User from '@models/user.js'
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { toJson } from '@reis/mongoose-to-json'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

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

export const PATCH = async (request, { params }) => {
  const { userId, selectedAction, selectedInput } = await request.json()

  try {
    await connectToDB()
    var test = 'VKB_GLADIATOR_EVO'
    const layerNum = selectedInput.layer
    var selectQuery =
      'deviceProfiles.deviceProfiles.saved.' +
      test +
      '.buttons.' +
      selectedInput.button +
      '.top.layers.' +
      layerNum

    var query = {}
    query[selectQuery] = selectedAction

    // await User.findOneAndUpdate(
    //   { _id: userId },
    //   {
    //     'deviceProfiles.deviceProfiles.saved.VKB_GLADIATOR_EVO.buttons.circleSwitch.top.layers.0':'PATCHED'
    //   }
    // )
    await User.findOneAndUpdate({ _id: userId }, query)
    return new Response('JSON.stringify(data)', { status: 200 })
  } catch (error) {
    console.log(error)
    log(error)
    return new Response('Failed to fetch device profiles', { status: 500 })
  }
}
