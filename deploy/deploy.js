const hre = require("hardhat");

async function main() {

    const WaifuWorld = await hre.ethers.getContractFactory("WaifuWorld");
    const deployedWaifuWorld = await WaifuWorld.deploy("WaifuWorld", "WaifuWorld");

    await deployedWaifuWorld.deployed();

    console.log("Deployed Waifu Address:", deployedWaifuWorld.address);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });