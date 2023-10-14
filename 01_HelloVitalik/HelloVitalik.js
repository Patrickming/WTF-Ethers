// 导入ethers包
import { ethers } from "ethers";
// 利用ethers默认的Provider连接以太坊网络
// const provider = new ethers.getDefaultProvider();
// const ALCHEMY_MAINNET_URL = 'https://eth-mainnet.g.alchemy.com/v2/oKmOQKbneVkxgHZfibs-iFhIlIAl6HDN';


import { config } from 'dotenv'
config()

let ALCHEMY_KEY_m = process.env.ALCHEMY_KEY_m || ''
const provider = new ethers.JsonRpcProvider(ALCHEMY_KEY_m)

const main = async () => {
    // 查询vitalik的ETH余额
    const balance = await provider.getBalance(`vitalik.eth`);
    // 将余额输出在console
    console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);}
main()