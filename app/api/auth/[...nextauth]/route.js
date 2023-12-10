import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import User from '@models/user'
import { connectToDB } from '@utils/database'
const globalContext = {
  deviceProfiles: {
    saved: {
      VKB_GLADIATOR_EVO: {
        profileName: 'TEST PROFILE',
        name: 'circleSwitch',
        buttonNum: 2,
        buttons: {
          circleSwitch: {
            top: {
              name: 'CIRCLE SWITCH UP',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
              ]
            },
            bottom: {
              name: 'CIRCLE SWITCH DOWN',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            },
            press: {
              name: 'CIRCLE SWITCH PRESS',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            },
            left: {
              name: 'CIRCLE SWITCH LEFT',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
              ]
            },
            right: {
              name: 'CIRCLE SWITCH UP',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            }
          },
          hatSwitch: {
            top: {
              name: 'HAT SWITCH UP',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
              ]
            },
            bottom: {
              name: 'HAT SWITCH DOWN',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            },
            press: {
              name: 'HAT SWITCH PRESS',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            },
            left: {
              name: 'HAT SWITCH LEFT',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
              ]
            },
            right: {
              name: 'HAT SWITCH UP',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            }
          }
        }
      }
    }
  }
}
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session ({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email })
      session.user.id = sessionUser._id.toString()

      return session
    },
    async signIn ({ account, profile, user, credentials }) {
      try {
        await connectToDB()

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email })

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(' ', '').toLowerCase(),
            image: profile.picture,
            deviceProfiles: globalContext
          })
        }

        return true
      } catch (error) {
        console.log('Error checking if user exists: ', error.message)
        return false
      }
    }
  }
})

export { handler as GET, handler as POST }
