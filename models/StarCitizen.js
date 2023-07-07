import { Schema, model, models } from 'mongoose';


const GameSchema = new Schema({
 //   _id: String,
    key: [String],
    name: [String],

});

const Games = models.Games || model("Games", GameSchema);

export default Games;