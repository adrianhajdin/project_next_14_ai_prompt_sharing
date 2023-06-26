import { Schema, model, models } from 'mongoose';

const VKB_Gladiator_NXT_EVO_Omni_Throttle_Left_Hand_Schema = new Schema({
    name: "VKB Gladitor NXT Left-omni",
    manufacturer: "VKB",
    instance: { type: Number },
    bindings: {
        type: [{ action: String, key: String }]
    }
});

const VKB_Gladiator_NXT_EVO_Omni_Throttle_Left_Hand = models.VKB_Gladiator_NXT_EVO_Omni_Throttle_Left_Hand_Schema || model('VKB_Gladiator_NXT_EVO_Omni_Throttle_Left_Hand_Schema', VKB_Gladiator_NXT_EVO_Omni_Throttle_Left_Hand_Schema);

export default VKB_Gladiator_NXT_EVO_Omni_Throttle_Left_Hand;