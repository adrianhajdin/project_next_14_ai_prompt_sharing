import { Schema, model, models } from 'mongoose';


const ControlProfileSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  controlProfile: {
    type: String,
    required: [true, 'Control profile name is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  game: {
    type: String,
    version: String,
    required: [true, 'game is required.'],
  },

  devices: [{name: String, manufacturer: String}],
  deviceBindsList: [{ action: String, key: String, deviceType: String, instance: Number }],


});

const ControlProfile = models.ControlProfile || model('ControlProfile', ControlProfileSchema);

export default ControlProfile;