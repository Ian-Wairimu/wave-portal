const hre = require("hardhat")

const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account", deployer.address);
    console.log("Account Balance", accountBalance.toString());

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
    const waveContract = await waveContractFactory.deploy()
    await waveContract.deployed()

    console.log("wavePortal address:", waveContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0); // exit process code without error
    }catch(error) {
        console.log(error);
        process.exit(1); // exit process while indicating uncaught fatal error
    }
}

runMain();