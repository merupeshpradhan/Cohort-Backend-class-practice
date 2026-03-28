import crypto from "crypto";
import jwt from "jsonwebtoken";

const generateAccessToken = (payload) => {};

const generateResetToken = () => {
  const rawtoken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto
    .createHash("sha256")
    .update(rawtoken)
    .digest("hex");

  return { rawtoken, hashedToken };
};

export { generateAccessToken, generateResetToken };
