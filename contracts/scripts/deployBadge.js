const hre = require("hardhat");

async function main() {

  const uri = "Wagmi Club";
  const gasLimit = 100_000_00n;

  const badges = await hre.ethers.deployContract("Badge", [uri], {
    gasLimit: gasLimit
  });

  await badges.waitForDeployment();

  console.log( `deployed to ${badges.target}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// deployed to 0x9Fc3168ee0Cf90aaBF485BF24c337da9922bB4a3