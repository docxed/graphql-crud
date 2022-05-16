import { PostTC } from "../../models/post"

export const createPost = PostTC.getResolver("createOne")
export const updatePost = PostTC.getResolver("updateById")
export const deletePost = PostTC.getResolver("removeById")
