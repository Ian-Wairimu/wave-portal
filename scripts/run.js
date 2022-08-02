const hre = require("hardhat")

const main = async() => {
    const [owner, randomPerson] = await hre.ethers.getSigners()
    const WaveContractFactory = await hre.ethers.getContractFactory("WavePortal")
    const WavePortal = await WaveContractFactory.deploy();
    await WavePortal.deployed();
    console.log("contract deployed to: ", WavePortal.address);
    console.log("contradt deployed by: ", owner.address);

    let WaveCount;
    WaveCount = await WavePortal.getTotalWaves();

    let WaveTxn = await WavePortal.wave();
    await WaveTxn.wait();

    WaveTxn = await WavePortal.connect(randomPerson).wave();
    await WaveTxn.wait()
    WaveCount = await WavePortal.getTotalWaves();
} 

const runMain = async() => {
    try {
        await main()
        process.exit(0); //exits node process without error
    }catch (error) {
        console.log(error)
        process.exit(1) //exit node process while indicating uncaught fatal error
    }
};

runMain();