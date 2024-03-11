const { ethers } = require("ethers")

async function hashString(inputString) {
    try {
        const hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(inputString))
        return hash
    } catch (error) {
        console.error("Error hashing string:", error)
        return null
    }
}

module.exports = hashString
