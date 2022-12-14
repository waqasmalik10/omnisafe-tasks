import * as bcrypt from 'bcrypt';

export const generateHash = async (password: string, salt: string) => {
    const hash = await bcrypt.hash(password, salt);
    return hash;
};
