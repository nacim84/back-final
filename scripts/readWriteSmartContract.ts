import { ethers } from "hardhat";
import { ResolutionsVoting } from "../typechain-types";

const main = async () => {

 // Deploy
 console.log("1 - DEPLOY CONTRACT");
 const ResolutionsVoting = await ethers.getContractFactory("ResolutionsVoting");
 const resolutionsVoting = await ResolutionsVoting.deploy();

 console.log(`Contract address : ${await resolutionsVoting.getAddress()}`);


 // Write into smart-contract
 console.log("2 - WRITE INTO CONTRACT");
 const hashDescription = "test_hash_description";
 // Current time
 const currentTimestampInSeconds = Math.round(Date.now() / 1000);
 // Vote StartDate
 const startDateTimestampInSeconds = currentTimestampInSeconds + 1;
 // Vote EndDate
 const endDateTimestampInSeconds = startDateTimestampInSeconds + 2;

 const savedVote = await resolutionsVoting.addVote(hashDescription, startDateTimestampInSeconds, endDateTimestampInSeconds); // address voter && Role : 0 : USER, 1 : ADMIN
 const trx = await savedVote.getTransaction()
 console.log("SavedVote transaction hash : ", trx?.hash);


 // Read from smart-contract
 console.log("2 - READ FROM CONTRACT");
 const foundVoteId = await resolutionsVoting.voteId();
 console.log("FoundVoteId : ", Number(foundVoteId));

 const foundVote: ResolutionsVoting.VoteStructOutput = await resolutionsVoting.getVote(foundVoteId);
 console.log("FoundVote : ", foundVote);
}

// Execute function
const runMain = async () => {
 try {
  await main();
  process.exit(0);
 } catch (error) {
  console.error(error);
  process.exit(1);
 }
};

runMain();