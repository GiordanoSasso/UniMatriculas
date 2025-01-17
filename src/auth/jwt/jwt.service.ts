import { Injectable } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import { User } from '@prisma/client'

@Injectable()
export class JwtService {
  async generateToken(user: User) {
    if (user) {
      const payload = { userId: user.id, email: user.email, roles: user.role }
      const secretKey: string = process.env.JWT_SECRET_KEY || 'secret'
      const token = jwt.sign(payload, secretKey, { expiresIn: '6h' })

      return token
    }

    return null
  }
}
