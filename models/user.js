import { Schema, model, models } from 'mongoose'

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
  deviceProfiles: [
    {
      saved: [
        {
          deviceName: String,
          buttons: [
            {
              name: String,
              buttonNum: Number,
              mappings: [
                {
                  top: [
                    {
                      name: String,
                      layers: Array
                    }
                  ],
                  down: [
                    {
                      name: String,
                      layers: Array
                    }
                  ],
                  press: [
                    {
                      name: String,
                      layers: Array
                    }
                  ],
                  left: [
                    {
                      name: String,
                      layers: Array
                    }
                  ],
                  right: [
                    {
                      name: String,
                      layers: Array
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})

const User = models.User || model('User', UserSchema)

export default User
