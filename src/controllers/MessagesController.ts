import { Request, Response } from 'express';
import { MessagesService } from '../services/MessagesServices';


class MessagesController {

  async create(request: Request, response: Response) {
    const { admin_id, text, user_id } = request.body;
    const messageService = new MessagesService();

    const message = await messageService.create({
      admin_id,
      text,
      user_id,
    })

    return response.json(message);
  }
}

export { MessagesController }