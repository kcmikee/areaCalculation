import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AreaCalculationModule = buildModule("AreaCalculationModule", (m) => {
  // Deploy the AreaCalculation contract
  const areaCalculation = m.contract("AreaCalculation");

  return { areaCalculation };
});

export default AreaCalculationModule;
