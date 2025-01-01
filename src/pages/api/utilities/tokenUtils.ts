import { NextApiRequest, NextApiResponse } from "next";
import { AdminEntity } from "@/model/admin";
import bcrypt from "bcryptjs";

// Decode Base64 credentials
const decodeCredentials = (authHeader: string): { username: string; password: string } => {
  const base64Credentials = authHeader.split(" ")[1]; // "Basic <base64>"
  const decoded = Buffer.from(base64Credentials, "base64").toString("utf-8");
  const [username, password] = decoded.split(":");
  return { username, password };
};

export const authenticate = async (req: NextApiRequest, res: NextApiResponse) => {
  const authHeader = req.headers.authorization;
  console.log("authHeader: ", authHeader);

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res.status(401).json({ message: "Unauthorized: Missing or invalid Authorization header" });
  }

  try {
    const { username, password } = decodeCredentials(authHeader);
    // Find user in the database
    const user = await AdminEntity.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: "Invalid user" });
    }
    // Validate the password
    const isValidPassword = bcrypt.compareSync(password, user.dataValues.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
};