const hre = require("hardhat");

async function main() {

    const Metadroids = await hre.ethers.getContractFactory("Metadroids");
    const deployedMetadroids = await Metadroids.deploy("Metadroids", "Metadroids");

    await deployedMetadroids.deployed();

    console.log("Deployed Metadroids Address:", deployedMetadroids.address);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });