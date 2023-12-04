import { connectToDB } from "@utils/database";
import Games from "@models/games";
import { log } from "console";


export const GET = async (request) => {

    try {
        await connectToDB();
        //  const data = await Games.find({ _id: "StarCitizen1" }).select("versions -_id");
        // const data = await Games.find({ _id: "StarCitizen2" });
        const data = await Games.find({}).select("-_id versions");

        // const arrayed = raw[0].versions.map(x => {
        //     return ({"key": x.key, "name": x.name })
        // })

      

      //  const parsed = await data.map(function (d) { return d.toObject() })

        console.log((Array.isArray(data) + "   raw: " + data + "stringified: " + JSON.stringify(data)));

        // for await (const doc of data[0]) {
        //     console.log("FOR:" + doc);
        // }

        return new Response(JSON.stringify(data[0]), { status: 200 });

    } catch (error) {
        console.log(error);
        log(error);
        return new Response("Failed to fetch device profiles", { status: 500 });
    }
} 