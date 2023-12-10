import { Schema, model, models } from 'mongoose'
import {toJson} from '@reis/mongoose-to-json'


const DeviceProfileSchema = new Schema({
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


const DeviceProfile = models.DeviceProfile || model(DeviceProfileSchema)

export default DeviceProfile
