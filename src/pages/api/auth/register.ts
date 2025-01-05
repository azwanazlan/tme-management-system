import {NextApiRequest, NextApiResponse} from "next";
import {AdminEntity} from "@/model/admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {authenticate} from "@/pages/api/utilities/tokenUtils";
import {testDatabaseConnection} from "@/services/database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  // await testDatabaseConnection();
  // await authenticate(req, res);
  // Check if username or email already exists
  const existingUser = await AdminEntity.findOne({ where: { username } });
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // const existingEmail = await AdminEntity.findOne({ where: { email } });
  // if (existingEmail) {
  //   return res.status(400).json({ message: 'Email already exists' });
  // }

  // Hash password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Create new user
  await AdminEntity.create({
    username: username,
    password: hashedPassword,
  });

  // Generate token
  // const token = jwt.sign({ userId: newUser.id }, 'your_secret_key');

  res.status(201).json({ success: true });
}