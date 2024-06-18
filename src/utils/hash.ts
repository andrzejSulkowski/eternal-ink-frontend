import bcryptjs from "bcryptjs";

const SALT = 10;

const hashPassword = async (password: string) => {
  return await bcryptjs.hash(password, SALT);
};

export { hashPassword };
