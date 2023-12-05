import { Schema, model, models } from 'mongoose'
import {toJson} from '@reis/mongoose-to-json'

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!']
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      'Username invalid, it should contain 8-20 alphanumeric letters and be unique!'
    ]
  },
  image: {
    type: String
  },
  deviceProfiles: {
    type: Object,
    saved: {
      profileName: {
        deviceName: String,
        profileName: String,
        buttons: {
          name: String,
          buttonNum: Number,

          top: {
            name: String,
            layers: []
          },
          bottom: {
            name: String,
            layers: []
          },
          press: {
            name: String,
            layers: []
          },
          left: {
            name: String,
            layers: []
          },
          right: {
            name: String,
            layers: []
          }
        }
      }
    }
  }
})


const User = models.User || model('User', UserSchema)

export default User
