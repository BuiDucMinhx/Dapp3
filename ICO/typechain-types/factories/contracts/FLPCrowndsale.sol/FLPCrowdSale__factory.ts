/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FLPCrowdSale,
  FLPCrowdSaleInterface,
} from "../../../contracts/FLPCrowndsale.sol/FLPCrowdSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bnb_rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "usdt_rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "icotoken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByBNB",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByUSDT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetBNBRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetUSDTRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "SetUSDTToken",
    type: "event",
  },
  {
    inputs: [],
    name: "BNB_rate",
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
    inputs: [],
    name: "USDT_rate",
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
    inputs: [],
    name: "_wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyTokenByBNB",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "USDTAmount",
        type: "uint256",
      },
    ],
    name: "buyTokenByUSDT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "BNBAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountBNB",
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
        name: "USDTAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountUSDT",
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setBNBRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setUSDTRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_address",
        type: "address",
      },
    ],
    name: "setUSDTToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdtToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001b0838038062001b088339818101604052810190620000379190620002bb565b620000576200004b620000f160201b60201c565b620000f960201b60201c565b836002819055508260038190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506200032d565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b6000819050919050565b620001d781620001c2565b8114620001e357600080fd5b50565b600081519050620001f781620001cc565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200022a82620001fd565b9050919050565b6200023c816200021d565b81146200024857600080fd5b50565b6000815190506200025c8162000231565b92915050565b60006200026f82620001fd565b9050919050565b6000620002838262000262565b9050919050565b620002958162000276565b8114620002a157600080fd5b50565b600081519050620002b5816200028a565b92915050565b60008060008060808587031215620002d857620002d7620001bd565b5b6000620002e887828801620001e6565b9450506020620002fb87828801620001e6565b93505060406200030e878288016200024b565b92505060606200032187828801620002a4565b91505092959194509250565b6117cb806200033d6000396000f3fe6080604052600436106100f35760003560e01c806366e226bd1161008a578063acb03d4311610059578063acb03d43146102bf578063c5d15651146102fc578063f2fde38b14610325578063fc0c546a1461034e576100f3565b806366e226bd14610229578063715018a6146102525780638da5cb5b14610269578063a98ad46c14610294576100f3565b806331927737116100c657806331927737146101b25780633ccfd60b146101bc578063592a00e4146101d3578063610757e4146101fe576100f3565b8063157fc821146100f85780631832d8b6146101235780631b4622d6146101605780632be8629914610189575b600080fd5b34801561010457600080fd5b5061010d610379565b60405161011a9190610ecb565b60405180910390f35b34801561012f57600080fd5b5061014a60048036038101906101459190610f17565b61037f565b6040516101579190610ecb565b60405180910390f35b34801561016c57600080fd5b5061018760048036038101906101829190610f17565b610396565b005b34801561019557600080fd5b506101b060048036038101906101ab9190610f17565b6103df565b005b6101ba610428565b005b3480156101c857600080fd5b506101d1610697565b005b3480156101df57600080fd5b506101e86106e8565b6040516101f59190610ecb565b60405180910390f35b34801561020a57600080fd5b506102136106ee565b6040516102209190610f85565b60405180910390f35b34801561023557600080fd5b50610250600480360381019061024b9190610ff0565b610714565b005b34801561025e57600080fd5b50610267610797565b005b34801561027557600080fd5b5061027e6107ab565b60405161028b919061102c565b60405180910390f35b3480156102a057600080fd5b506102a96107d4565b6040516102b691906110a6565b60405180910390f35b3480156102cb57600080fd5b506102e660048036038101906102e19190610f17565b6107fa565b6040516102f39190610ecb565b60405180910390f35b34801561030857600080fd5b50610323600480360381019061031e9190610f17565b610811565b005b34801561033157600080fd5b5061034c600480360381019061034791906110ed565b610932565b005b34801561035a57600080fd5b506103636109b6565b60405161037091906110a6565b60405180910390f35b60025481565b60006003548261038f9190611149565b9050919050565b61039e6109dc565b806003819055507fbdaa37e3f6679857d8c3e80d172bd45af732a8658cf1d690c81ca96f5a443b5b816040516103d49190610ecb565b60405180910390a150565b6103e76109dc565b806002819055507fb0cc740bbbfcd5af22ee3956c6b44d2d6f499e2a86cb11d915fcce88dca2113a8160405161041d9190610ecb565b60405180910390a150565b60003490506000610438826107fa565b90506000811161047d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047490611200565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104d9919061102c565b60206040518083038186803b1580156104f157600080fd5b505afa158015610505573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105299190611235565b101561056a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610561906112ae565b60405180910390fd5b813373ffffffffffffffffffffffffffffffffffffffff163110156105c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bb906112ae565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561062c573d6000803e3d6000fd5b5061065a600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163383610a5a565b7ff695091b71a5c3ea41510251da89a66470bbcf1ee118f820a1bab8739e29ea50338260405161068b9291906112ce565b60405180910390a15050565b61069f6109dc565b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156106e5573d6000803e3d6000fd5b50565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61071c6109dc565b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f43036333e58a6f9255617b54ec9f5825590c8ee695a222dc35e5001927f071518160405161078c91906110a6565b60405180910390a150565b61079f6109dc565b6107a96000610ae0565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006002548261080a9190611149565b9050919050565b600061081c8261037f565b9050813373ffffffffffffffffffffffffffffffffffffffff16311015610878576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086f90611343565b60405180910390fd5b6108c8600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1633600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685610ba4565b6108f5600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163383610a5a565b7f5c0161fad3fa89cfebd4a74115d9f81661cdd1b9008d05a238ea9d65088e206433826040516109269291906112ce565b60405180910390a15050565b61093a6109dc565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a1906113d5565b60405180910390fd5b6109b381610ae0565b50565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6109e4610c2d565b73ffffffffffffffffffffffffffffffffffffffff16610a026107ab565b73ffffffffffffffffffffffffffffffffffffffff1614610a58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4f90611441565b60405180910390fd5b565b610adb8363a9059cbb60e01b8484604051602401610a799291906112ce565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610c35565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610c27846323b872dd60e01b858585604051602401610bc593929190611461565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610c35565b50505050565b600033905090565b6000610c97826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610cfc9092919063ffffffff16565b9050600081511115610cf75780806020019051810190610cb791906114d0565b610cf6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ced9061156f565b60405180910390fd5b5b505050565b6060610d0b8484600085610d14565b90509392505050565b606082471015610d59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5090611601565b60405180910390fd5b610d6285610e28565b610da1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d989061166d565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610dca9190611707565b60006040518083038185875af1925050503d8060008114610e07576040519150601f19603f3d011682016040523d82523d6000602084013e610e0c565b606091505b5091509150610e1c828286610e4b565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610e5b57829050610eab565b600083511115610e6e5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea29190611773565b60405180910390fd5b9392505050565b6000819050919050565b610ec581610eb2565b82525050565b6000602082019050610ee06000830184610ebc565b92915050565b600080fd5b610ef481610eb2565b8114610eff57600080fd5b50565b600081359050610f1181610eeb565b92915050565b600060208284031215610f2d57610f2c610ee6565b5b6000610f3b84828501610f02565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f6f82610f44565b9050919050565b610f7f81610f64565b82525050565b6000602082019050610f9a6000830184610f76565b92915050565b6000610fab82610f44565b9050919050565b6000610fbd82610fa0565b9050919050565b610fcd81610fb2565b8114610fd857600080fd5b50565b600081359050610fea81610fc4565b92915050565b60006020828403121561100657611005610ee6565b5b600061101484828501610fdb565b91505092915050565b61102681610fa0565b82525050565b6000602082019050611041600083018461101d565b92915050565b6000819050919050565b600061106c61106761106284610f44565b611047565b610f44565b9050919050565b600061107e82611051565b9050919050565b600061109082611073565b9050919050565b6110a081611085565b82525050565b60006020820190506110bb6000830184611097565b92915050565b6110ca81610fa0565b81146110d557600080fd5b50565b6000813590506110e7816110c1565b92915050565b60006020828403121561110357611102610ee6565b5b6000611111848285016110d8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061115482610eb2565b915061115f83610eb2565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156111985761119761111a565b5b828202905092915050565b600082825260208201905092915050565b7f616d6f756e74206973207a65726f000000000000000000000000000000000000600082015250565b60006111ea600e836111a3565b91506111f5826111b4565b602082019050919050565b60006020820190508181036000830152611219816111dd565b9050919050565b60008151905061122f81610eeb565b92915050565b60006020828403121561124b5761124a610ee6565b5b600061125984828501611220565b91505092915050565b7f496e73756666696369656e74206163636f756e742062616c616e636500000000600082015250565b6000611298601c836111a3565b91506112a382611262565b602082019050919050565b600060208201905081810360008301526112c78161128b565b9050919050565b60006040820190506112e3600083018561101d565b6112f06020830184610ebc565b9392505050565b7f496e737566696369656e74206163636f756e742062616c616e63650000000000600082015250565b600061132d601b836111a3565b9150611338826112f7565b602082019050919050565b6000602082019050818103600083015261135c81611320565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006113bf6026836111a3565b91506113ca82611363565b604082019050919050565b600060208201905081810360008301526113ee816113b2565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061142b6020836111a3565b9150611436826113f5565b602082019050919050565b6000602082019050818103600083015261145a8161141e565b9050919050565b6000606082019050611476600083018661101d565b611483602083018561101d565b6114906040830184610ebc565b949350505050565b60008115159050919050565b6114ad81611498565b81146114b857600080fd5b50565b6000815190506114ca816114a4565b92915050565b6000602082840312156114e6576114e5610ee6565b5b60006114f4848285016114bb565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611559602a836111a3565b9150611564826114fd565b604082019050919050565b600060208201905081810360008301526115888161154c565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006115eb6026836111a3565b91506115f68261158f565b604082019050919050565b6000602082019050818103600083015261161a816115de565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611657601d836111a3565b915061166282611621565b602082019050919050565b600060208201905081810360008301526116868161164a565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156116c15780820151818401526020810190506116a6565b838111156116d0576000848401525b50505050565b60006116e18261168d565b6116eb8185611698565b93506116fb8185602086016116a3565b80840191505092915050565b600061171382846116d6565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b60006117458261171e565b61174f81856111a3565b935061175f8185602086016116a3565b61176881611729565b840191505092915050565b6000602082019050818103600083015261178d818461173a565b90509291505056fea2646970667358221220df8ed3c769e076fbcfc8191155d4b41a134f52923ab02bda7b83a0dca3c53cf564736f6c63430008090033";

type FLPCrowdSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FLPCrowdSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FLPCrowdSale__factory extends ContractFactory {
  constructor(...args: FLPCrowdSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    bnb_rate: PromiseOrValue<BigNumberish>,
    usdt_rate: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    icotoken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FLPCrowdSale> {
    return super.deploy(
      bnb_rate,
      usdt_rate,
      wallet,
      icotoken,
      overrides || {}
    ) as Promise<FLPCrowdSale>;
  }
  override getDeployTransaction(
    bnb_rate: PromiseOrValue<BigNumberish>,
    usdt_rate: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    icotoken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      bnb_rate,
      usdt_rate,
      wallet,
      icotoken,
      overrides || {}
    );
  }
  override attach(address: string): FLPCrowdSale {
    return super.attach(address) as FLPCrowdSale;
  }
  override connect(signer: Signer): FLPCrowdSale__factory {
    return super.connect(signer) as FLPCrowdSale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FLPCrowdSaleInterface {
    return new utils.Interface(_abi) as FLPCrowdSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FLPCrowdSale {
    return new Contract(address, _abi, signerOrProvider) as FLPCrowdSale;
  }
}