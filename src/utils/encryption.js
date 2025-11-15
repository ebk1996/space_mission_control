// Simple encryption/decryption utilities
// These are basic implementations for demonstration purposes
// For production, use proper encryption libraries like crypto-js

/**
 * Simple Caesar cipher encryption
 * Shifts each character by a fixed number
 */
export function encryptMessage(message, shift = 3) {
	if (!message) return "";
	
	return message
		.split("")
		.map((char) => {
			const code = char.charCodeAt(0);
			
			// Encrypt uppercase letters
			if (code >= 65 && code <= 90) {
				return String.fromCharCode(((code - 65 + shift) % 26) + 65);
			}
			// Encrypt lowercase letters
			if (code >= 97 && code <= 122) {
				return String.fromCharCode(((code - 97 + shift) % 26) + 97);
			}
			// Keep other characters unchanged
			return char;
		})
		.join("");
}

/**
 * Simple Caesar cipher decryption
 * Shifts each character back by a fixed number
 */
export function decryptMessage(encryptedMessage, shift = 3) {
	if (!encryptedMessage) return "";
	
	return encryptMessage(encryptedMessage, 26 - shift);
}

/**
 * Base64 encoding for data
 */
export function encodeBase64(data) {
	try {
		return btoa(data);
	} catch (error) {
		console.error("Base64 encoding error:", error);
		return data;
	}
}

/**
 * Base64 decoding for data
 */
export function decodeBase64(encodedData) {
	try {
		return atob(encodedData);
	} catch (error) {
		console.error("Base64 decoding error:", error);
		return encodedData;
	}
}

/**
 * XOR cipher encryption/decryption
 * Uses a key to XOR each character
 */
export function xorCipher(text, key) {
	if (!text || !key) return text;
	
	let result = "";
	for (let i = 0; i < text.length; i++) {
		result += String.fromCharCode(
			text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
		);
	}
	return result;
}

/**
 * Generate a random encryption key
 */
export function generateKey(length = 16) {
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let key = "";
	for (let i = 0; i < length; i++) {
		key += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return key;
}
