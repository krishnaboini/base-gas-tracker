// Base Gas Tracker - Step 1

const { ethers } = require("ethers");

// Create provider for Base network
const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");

// Function to get gas price
async function getGasPrice() {
  console.log("⛽ Fetching gas price from Base...");
  console.log("Timestamp:", new Date().toLocaleString());

  try {
    const feeData = await provider.getFeeData();

    console.log("\n======= GAS DATA =======");
    console.log("🌐 Network     : Base");
    console.log("⛽ Gas Price   :", feeData.gasPrice.toString());
    console.log("========================\n");
  } catch (error) {
    console.log("❌ Error fetching gas data:", error.message);
  }
}

// Run function
getGasPrice();
