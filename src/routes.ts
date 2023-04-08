import { Request, Response, Router } from 'express'

const router = Router()

router.get('/health', (request: Request, response: Response) => {
  return response.json({
    message: 'Server is running!',
  })
})

export { router }
