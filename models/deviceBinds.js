import { Schema, model, models } from 'mongoose';

const DeviceBindsSchema = new Schema({
    
    controlProfile: {
        type: Schema.Types.ObjectId,
        ref: 'controlProfile',
        required: [true, 'Device name undefined']
    },
    deviceName:{
        type: Schema.Types.ObjectId,
        ref: 'device',
        required: [true, 'Device for bindings undefined']
    },
    instance: { type: Number },
    bindings: {
        type: [{ action: String, key: String }]
    }
});

const deviceBinds = models.DeviceBindsSchema || model('deviceBinds', DeviceBindsSchema);

export default deviceBinds;