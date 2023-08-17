import crypto from 'crypto';
import { formatRSAKey } from '../../helper';
import { PRIVATE_KEY, PUBLIC_KEY } from '../../config/exports';
export class CryptoService {

    private pbk = formatRSAKey(PUBLIC_KEY); 
    private pvk = formatRSAKey(PRIVATE_KEY);

    public generatePairkey = (length = 4096) => {
        return crypto.generateKeyPairSync('rsa', {
            modulusLength: length, // Key size in bits (larger key size for stronger security)
            publicKeyEncoding: {
              type: 'spki',
              format: 'pem',
            },
            privateKeyEncoding: {
              type: 'pkcs8',
              format: 'pem',
            },
          });
    }

    public encrypt = (data:string, publicKey = this.pbk) => {
        const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(data, 'utf8'));
        return encrypted.toString('base64');
    }

    public decrypt = (encryptedData:string, privateKey = this.pvk) => {
        const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encryptedData, 'base64'));
        return decrypted.toString('utf8');
    }
    
    public getSignature = (data:string, privateKey = this.pvk) => {
        const signer = crypto.createSign("RSA-SHA256");
        signer.update(data);
        const signature = signer.sign(privateKey, 'base64');
        return signature;    
    }

    public verifySignature = (data:any, publicKey = this.pbk, signature : string) => {
        const verifier = crypto.createVerify("RSA-SHA256");
        verifier.update(data);
        const isSignatureValid = verifier.verify(publicKey, signature, 'base64');
        return isSignatureValid
    }

}