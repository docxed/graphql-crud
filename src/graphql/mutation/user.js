import { schemaComposer } from "graphql-compose"
import { UserModel, UserTC } from "../../models/user"
import { generateUserToken } from "../../lib/generateUserToken"

export const createUser = UserTC.getResolver("createOne")
const LoginPayloadOTC = schemaComposer.createObjectTC({
  name: "LoginPayloadOTC",
  fields: {
    status: "String!",
    message: "String",
    token: "String",
  },
})
export const login = schemaComposer.createResolver({
  name: "login",
  kind: "mutation",
  type: LoginPayloadOTC,
  args: {
    username: "String!",
    password: "String!",
  },
  resolve: async ({ args }) => {
    const { username, password } = args
    const user = await UserModel.findOne({ username: username.toLowerCase() })
    if (!user) {
      //   throw new UserInputError("Username not found")
      return {
        status: "failed",
        message: "Username not found",
        token: null,
      }
    }
    const validPassword = await user.verifyPassword(password)
    if (!validPassword) {
      //   throw new AuthenticationError("Invalid password")
      return {
        status: "failed",
        message: "Invalid password",
        token: null,
      }
    }
    const token = generateUserToken(user)
    return {
      status: "success",
      message: "Login success",
      token,
    }
  },
})
