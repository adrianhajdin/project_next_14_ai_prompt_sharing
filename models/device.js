import { Schema, model, models } from 'mongoose';

const DeviceSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Device name undefined']
    },
    manufacturer: {
        type: String,
        required: [true, 'Device manufacturer undefined']
    },
   
    
});

const device = models.DeviceSchema || model('device', DeviceSchema);

export default device;