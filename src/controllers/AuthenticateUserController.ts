import { Request, Response } from "express"
import { AuthenticateUserService } from "../services/AuthenticateUserService"

class AuthenticateUserController {
  async handle(request, response) {
    const service = new AuthenticateUserService()

    //service.execute("")
  }
}

export { AuthenticateUserController }