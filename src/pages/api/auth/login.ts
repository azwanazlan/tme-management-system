import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AdminEntity } from "@/model/admin";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;
  const user = await AdminEntity.findOne({ where: { username } });

  if (user && bcrypt.compareSync(password, user.dataValues.password)) {
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600; Secure; SameSite=Strict`);
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}