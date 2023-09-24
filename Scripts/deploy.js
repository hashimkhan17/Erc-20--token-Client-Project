async function main() {
  const Token = await ethers.getContractFactory("Token"); // Replace with your contract name
  const token = await Token.deploy("MyToken", "MYT", 18, 1000); // Replace with your constructor arguments
  await token.deployed();
  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
