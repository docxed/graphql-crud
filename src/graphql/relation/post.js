import { PostTC } from "../../models/post"
import { UserTC } from "../../models/user"

PostTC.addRelation("author", {
  resolver: UserTC.getResolver("findById"),
  projection: { authorId: true },
  prepareArgs: {
    _id: (post) => post.authorId,
  },
})
