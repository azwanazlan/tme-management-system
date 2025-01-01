import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {AdminEntity} from "@/model/admin";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;
  const user = await AdminEntity.findOne({ where: { username } });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
    res.status(200).json({ success: true, token:token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}