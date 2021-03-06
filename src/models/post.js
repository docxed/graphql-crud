import { composeWithMongoose } from "graphql-compose-mongoose"
import { model, Schema } from "mongoose"

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: "",
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      index: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const PostModel = model("Post", PostSchema)

export const PostTC = composeWithMongoose(PostModel)
