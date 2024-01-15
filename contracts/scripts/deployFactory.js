const hre = require("hardhat");

async function main() {
  
  const gasLimit = 100_000_00n;
  const factory = await hre.ethers.deployContract("OrganizationFactory", {
    gasLimit: gasLimit
  });

  await factory.waitForDeployment();

  console.log( `deployed to ${factory.target}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// deployed to 