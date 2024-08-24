import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CrowdFundingModule = buildModule("CrowdFundingModule", (m) => {
  // Deploy the AreaCalculation contract
  const crowdFunding = m.contract("CrowdFunding");

  return { crowdFunding };
});

export default CrowdFundingModule;
