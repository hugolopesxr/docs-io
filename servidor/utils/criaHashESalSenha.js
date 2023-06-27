import { randomBytes, scryptSync } from "crypto";

function criaHashESalSenha(senhaDigitda) {
    const salSenha = randomBytes(16).toString("hex");

    const hashSenha = scryptSync(senhaDigitda, salSenha, 64).toString("hex");

    return { salSenha, hashSenha };
}

export default criaHashESalSenha;