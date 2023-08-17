"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoService = void 0;
const crypto_1 = __importDefault(require("crypto"));
const helper_1 = require("../../helper");
const exports_1 = require("../../config/exports");
class CryptoService {
    constructor() {
        this.pbk = (0, helper_1.formatRSAKey)(exports_1.PUBLIC_KEY);
        this.pvk = (0, helper_1.formatRSAKey)(exports_1.PRIVATE_KEY);
        this.generatePairkey = (length = 4096) => {
            return crypto_1.default.generateKeyPairSync('rsa', {
                modulusLength: length,
                publicKeyEncoding: {
                    type: 'spki',
                    format: 'pem',
                },
                privateKeyEncoding: {
                    type: 'pkcs8',
                    format: 'pem',
                },
            });
        };
        this.encrypt = (data, publicKey = this.pbk) => {
            const encrypted = crypto_1.default.publicEncrypt(publicKey, Buffer.from(data, 'utf8'));
            return encrypted.toString('base64');
        };
        this.decrypt = (encryptedData, privateKey = this.pvk) => {
            const decrypted = crypto_1.default.privateDecrypt(privateKey, Buffer.from(encryptedData, 'base64'));
            return decrypted.toString('utf8');
        };
        this.getSignature = (data, privateKey = this.pvk) => {
            const signer = crypto_1.default.createSign("RSA-SHA256");
            signer.update(data);
            const signature = signer.sign(privateKey, 'base64');
            return signature;
        };
        this.verifySignature = (data, publicKey = this.pbk, signature) => {
            const verifier = crypto_1.default.createVerify("RSA-SHA256");
            verifier.update(data);
            const isSignatureValid = verifier.verify(publicKey, signature, 'base64');
            return isSignatureValid;
        };
    }
}
exports.CryptoService = CryptoService;
