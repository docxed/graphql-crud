import { PostTC } from "../../models/post"
import { UserTC } from "../../models/user"

UserTC.addRelation("posts", {
  resolver: PostTC.getResolver("findMany"),
  projection: { _id: true },
  prepareArgs: {
    filter: (user) => ({
      authorId: user._id,
    }),
  },
})
UserTC.addFields({
  fullname: {
    type: "String",
    projection: { firstname: true, lastname: true },
    resolve: (user) => `${user.firstname} ${user.lastname}`,
  },
})
