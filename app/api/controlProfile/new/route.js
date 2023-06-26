import ControlProfile from "@models/controlProfile";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, controlProfile, tag, game, devices, deviceBindsList } = await request.json();

    try {
        await connectToDB();
        const newControlProfile = new ControlProfile({ 
            creator: userId, 
            controlProfile: controlProfile, 
            tag,
            game: game,
            devices: devices,
            deviceBindsList: deviceBindsList
        
        });

        await newControlProfile.save();
        return new Response(JSON.stringify(newControlProfile), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new control profile", { status: 500 });
    }
}
