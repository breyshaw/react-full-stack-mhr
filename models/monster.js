import mongoose from 'mongoose'

//The idea here is for users to sign in and comment on monster to give good tips and advice for people looking for it's weaknesses
const commentSchema = new mongoose.Schema({
  content: String,
  //Referencing the profile model here so that each comment has an author
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" }
},
  {
    timestamps: true,
  }
)

const monsterSchema = new mongoose.Schema(
  {
    name: String,
    image_url: String,
    //Setting the default to flying wyvern in case it is not entered
    monsterType: { type: String, default: 'Flying Wyvern' },
    //May actually use img urls here
    topWeakness: String,
    //Embedding the comments in the monsterSchema using an array of commentSchema
    comments: [commentSchema]
  },
  {
    timestamps: true,
  }
)

const Monster = mongoose.model('Monster', monsterSchema)

export {
  Monster
}