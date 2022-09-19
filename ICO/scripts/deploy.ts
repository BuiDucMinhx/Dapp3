import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';


async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);

    // deploy USDT
    // const Floppy = await ethers.getContractFactory("USDT");
    // const floppy = await Floppy.deploy();
    // console.log('USDT address: ' , floppy.address);
    // Config.setConfig(network + '.USDT', floppy.address);

    // deploy ICO
    const Ico = await ethers.getContractFactory("FLPCrowdSale");
    const ico = await Ico.deploy(1000,100,'0x61bEBd7975629537B0F3704245c050c0ab09A9AA','0x5C47764DbA6E7AC41858eBf4370eb029893d0adF');
    console.log('ICO address: ' , ico.address);
    Config.setConfig(network + '.ico', ico.address);


    await Config.updateConfig();
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });