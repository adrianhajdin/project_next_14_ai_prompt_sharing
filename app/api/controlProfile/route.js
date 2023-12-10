
import ControlProfile from "@models/controlProfile";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const controlProfile = await ControlProfile.find({}).populate('creator')

        return new Response(JSON.stringify(controlProfile), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 