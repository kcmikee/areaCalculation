/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  AreaCalculation,
  AreaCalculationInterface,
} from "../AreaCalculation";

const _abi = [
  {
    inputs: [],
    name: "GetArea",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_length",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_width",
        type: "uint256",
      },
    ],
    name: "Rectangle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_side",
        type: "uint256",
      },
    ],
    name: "Square",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_base",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_height",
        type: "uint256",
      },
    ],
    name: "Triangle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610355806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806341b5039f146100515780639b70ac3f14610081578063a9309993146100b1578063e30abb58146100e1575b600080fd5b61006b600480360381019061006691906101b7565b6100ff565b60405161007891906101f3565b60405180910390f35b61009b6004803603810190610096919061020e565b61011d565b6040516100a891906101f3565b60405180910390f35b6100cb60048036038101906100c6919061020e565b61013c565b6040516100d891906101f3565b60405180910390f35b6100e9610173565b6040516100f691906101f3565b60405180910390f35b6000818261010d919061027d565b6000819055506000549050919050565b6000818361012b919061027d565b600081905550600054905092915050565b600060026001838561014e919061027d565b610158919061027d565b61016291906102ee565b600081905550600054905092915050565b60008054905090565b600080fd5b6000819050919050565b61019481610181565b811461019f57600080fd5b50565b6000813590506101b18161018b565b92915050565b6000602082840312156101cd576101cc61017c565b5b60006101db848285016101a2565b91505092915050565b6101ed81610181565b82525050565b600060208201905061020860008301846101e4565b92915050565b600080604083850312156102255761022461017c565b5b6000610233858286016101a2565b9250506020610244858286016101a2565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061028882610181565b915061029383610181565b92508282026102a181610181565b915082820484148315176102b8576102b761024e565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006102f982610181565b915061030483610181565b925082610314576103136102bf565b5b82820490509291505056fea264697066735822122095b531a4ef335e8bff7c030ab76b2a5e02d661d8d860adc48cd863898397584764736f6c63430008180033";

type AreaCalculationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AreaCalculationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AreaCalculation__factory extends ContractFactory {
  constructor(...args: AreaCalculationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      AreaCalculation & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AreaCalculation__factory {
    return super.connect(runner) as AreaCalculation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AreaCalculationInterface {
    return new Interface(_abi) as AreaCalculationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AreaCalculation {
    return new Contract(address, _abi, runner) as unknown as AreaCalculation;
  }
}
