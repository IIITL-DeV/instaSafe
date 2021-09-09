import { access } from "fs";
import "hardhat";
import { ethers } from "hardhat";

// Bangalore
// const SUPERFLUID_HOST = "0x22ff293e14F1EC3A09B137e9e06084AFd63adDF9";
// const SUPERFLUID_CFA = "0xEd6BcbF6907D4feEEe8a8875543249bEa9D308E8";
// const ACCEPTED_TOKEN = "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00";

const SUPERFLUID_HOST = "";
const SUPERFLUID_CFA = ""
const ACCEPTED_TOKEN = "";

  // User registration info
  address[] public addressesRegistered;
  mapping(address => bool) public isAddressRegistered;
  event UserRegistered(address user);

  // To determine which users are sending premiums
  uint256 public addressesSendingPremiumsCount = 0;
  mapping(address => bool) public isAddressSendingPremiums;
  event UnderlyingTokenTransferred(address receiver, uint256 amount);

  // User location data
  uint256 public constant locationDecimals = 2;
  mapping(address => uint256[]) public userLocation;
  
async function main() {
  const contractFactory = await ethers.getContractFactory("SuperFluidTest");
  const contract = await contractFactory.deploy(
    SUPERFLUID_HOST,
    SUPERFLUID_CFA,
    ACCEPTED_TOKEN
  );

  await contract.deployed();

  console.log("contract deployed to:", contract.address);
}

//2nd part

const rawAbi = fs
    .readFileSync(
      path.resolve(
        __dirname,
        "../artifacts/contracts/SuperFluidTest.sol/SuperFluidTest.json"
      )
    )
    .toString();
  const abi = JSON.parse(rawAbi).abi;

  const contract = new ethers.Contract(contractAddress, abi, owner);

  await contract.registerUser(100, 100);

  const registeredAddresses = await contract.getAllRegisteredAddresses();

  console.log(`registered addresses: ${registeredAddresses}`);
// this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// Matic
// const SUPERFLUID_HOST = "0xEB796bdb90fFA0f28255275e16936D25d3418603";
// const SUPERFLUID_CFA = "0x49e565Ed1bdc17F3d220f72DF0857C26FA83F873"
// const ACCEPTED_TOKEN = "0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f";