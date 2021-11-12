import { Request, Response } from "express"
import { CreateMessageService } from "../services/CreateMessageService"

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body

    //const { user_id } = request

    const service = new CreateMessageService()

    const result = await service.execute(message, "1adced18-d0cb-4f68-850c-ad5af20b71b4")

    return response.json(result)
  }
}

export { CreateMessageController }