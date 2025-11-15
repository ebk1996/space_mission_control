import { useState } from "react";
import styles from "./EncryptionTool.module.css";
import {
	encryptMessage,
	decryptMessage,
	encodeBase64,
	decodeBase64,
	xorCipher,
	generateKey,
} from "../utils/encryption";

function EncryptionTool() {
	const [inputText, setInputText] = useState("");
	const [outputText, setOutputText] = useState("");
	const [method, setMethod] = useState("caesar");
	const [key, setKey] = useState("");

	const handleEncrypt = () => {
		if (!inputText) {
			setOutputText("");
			return;
		}

		let result = "";
		switch (method) {
			case "caesar":
				result = encryptMessage(inputText);
				break;
			case "base64":
				result = encodeBase64(inputText);
				break;
			case "xor":
				if (!key) {
					alert("Please enter a key for XOR encryption");
					return;
				}
				result = encodeBase64(xorCipher(inputText, key));
				break;
			default:
				result = inputText;
		}
		setOutputText(result);
	};

	const handleDecrypt = () => {
		if (!outputText) return;

		let result = "";
		switch (method) {
			case "caesar":
				result = decryptMessage(outputText);
				break;
			case "base64":
				result = decodeBase64(outputText);
				break;
			case "xor":
				if (!key) {
					alert("Please enter a key for XOR decryption");
					return;
				}
				result = xorCipher(decodeBase64(outputText), key);
				break;
			default:
				result = outputText;
		}
		setInputText(result);
	};

	const handleGenerateKey = () => {
		setKey(generateKey());
	};

	return (
		<div className={styles.encryptionContainer}>
			<h2>🔐 AI Encryption/Decryption Tool</h2>
			<p className={styles.description}>
				Secure your mission data with advanced encryption algorithms
			</p>

			<div className={styles.methodSelector}>
				<label>Encryption Method:</label>
				<select
					value={method}
					onChange={(e) => setMethod(e.target.value)}
					className={styles.select}
				>
					<option value="caesar">Caesar Cipher</option>
					<option value="base64">Base64 Encoding</option>
					<option value="xor">XOR Cipher</option>
				</select>
			</div>

			{method === "xor" && (
				<div className={styles.keySection}>
					<label>Encryption Key:</label>
					<div className={styles.keyInput}>
						<input
							type="text"
							value={key}
							onChange={(e) => setKey(e.target.value)}
							placeholder="Enter encryption key"
						/>
						<button
							onClick={handleGenerateKey}
							className={styles.generateButton}
						>
							Generate Key
						</button>
					</div>
				</div>
			)}

			<div className={styles.textAreas}>
				<div className={styles.textSection}>
					<label>Plain Text:</label>
					<textarea
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
						placeholder="Enter text to encrypt..."
						rows="6"
					/>
				</div>

				<div className={styles.textSection}>
					<label>Encrypted Text:</label>
					<textarea
						value={outputText}
						onChange={(e) => setOutputText(e.target.value)}
						placeholder="Encrypted text will appear here..."
						rows="6"
					/>
				</div>
			</div>

			<div className={styles.buttonGroup}>
				<button onClick={handleEncrypt} className={styles.encryptButton}>
					Encrypt →
				</button>
				<button onClick={handleDecrypt} className={styles.decryptButton}>
					← Decrypt
				</button>
			</div>
		</div>
	);
}

export default EncryptionTool;
