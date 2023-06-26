import ControlProfile from "@models/controlProfile";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const controlProfile = await ControlProfile.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(controlProfile), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 