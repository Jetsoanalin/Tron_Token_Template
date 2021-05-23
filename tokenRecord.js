async function connectWallet(){
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
        console.log(window.tronWeb.defaultAddress.base58);
        document.getElementById('address').value = window.tronWeb.defaultAddress.base58;
    }

    // Non-dapp browsers...
    else {
        alert('Non-Tron browser detected. You should consider trying Tronlink Extenstion!');
    }
} 


// function approveToken(){
  
//     const tronWeb = window.tronWeb;
//     const tokenAdd = "TE5oc4EmiQm5z8XgYHX19yAjXwprPHTh7i" //Token address
//     const contractAdd = "TKMNkgSVWWEUTMLaXuypdrvzeNST33NCLa" //contract address

//     // convert amounts to Sun
//     var amounts_str = tronWeb.toSun(document.getElementById('amount').value);
   

//     (async()=>{
//         // Modern dapp browsers...
//         if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
//             try {
//                 console.log(window.tronWeb.defaultAddress.base58);
//                 const contractInstance = await tronWeb.contract().at(tokenAdd);

//                 const hash = await contractInstance.approve(contractAdd,amounts_str).send();
//                 console.log(hash);
//                 document.getElementById('response').value = hash;
//             } catch (error) {
//                 console.log(error);
//                 document.getElementById('response').value = error;
//             }
//         }

//         // Non-dapp browsers...
//         else {
//             alert('Non-Tron browser detected. You should consider trying Tronlink Extenstion!');
//         }
//     })();
// }



async function deoployToken (){

    const tronWeb = window.tronWeb;
    let abi = [{"inputs":[{"internalType":"string","name":"_PropertyName","type":"string","value":"Jetsi"},{"internalType":"string","name":"_PropertySymbol","type":"string","value":"Jet"},{"internalType":"uint256","name":"_TotalSupply","type":"uint256","value":"89415"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
    let code = "60806040523480156200001157600080fd5b50d380156200001f57600080fd5b50d280156200002d57600080fd5b5060405162000c4838038062000c48833981810160405260608110156200005357600080fd5b81019080805160405193929190846401000000008211156200007457600080fd5b9083019060208201858111156200008a57600080fd5b8251640100000000811182820188101715620000a557600080fd5b82525081516020918201929091019080838360005b83811015620000d4578181015183820152602001620000ba565b50505050905090810190601f168015620001025780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200012657600080fd5b9083019060208201858111156200013c57600080fd5b82516401000000008111828201881017156200015757600080fd5b82525081516020918201929091019080838360005b83811015620001865781810151838201526020016200016c565b50505050905090810190601f168015620001b45780820380516001836020036101000a031916815260200191505b5060405260209081015185519093508592508491600691620001dd916000919086019062000345565b508151620001f390600190602085019062000345565b506002805460ff90921660ff199092169190911790555050600680546001600160a01b031916339081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36200026533620f424083026001600160e01b036200026e16565b505050620003ea565b6001600160a01b0382166200028257600080fd5b6200029e816005546200032b60201b620007db1790919060201c565b6005556001600160a01b038216600090815260036020908152604090912054620002d3918390620007db6200032b821b17901c565b6001600160a01b03831660008181526003602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000828201838110156200033e57600080fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200038857805160ff1916838001178555620003b8565b82800160010185558215620003b8579182015b82811115620003b85782518255916020019190600101906200039b565b50620003c6929150620003ca565b5090565b620003e791905b80821115620003c65760008155600101620003d1565b90565b61084e80620003fa6000396000f3fe608060405234801561001057600080fd5b50d3801561001d57600080fd5b50d2801561002a57600080fd5b50600436106100c95760003560e01c806306fdde03146100ce578063095ea7b31461014b57806318160ddd1461018b57806323b872dd146101a5578063313ce567146101db57806339509351146101f957806370a08231146102255780638da5cb5b1461024b57806395d89b411461026f578063a457c2d714610277578063a9059cbb146102a3578063dd62ed3e146102cf578063f2fde38b146102fd575b600080fd5b6100d6610325565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101105781810151838201526020016100f8565b50505050905090810190601f16801561013d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101776004803603604081101561016157600080fd5b506001600160a01b0381351690602001356103bb565b604080519115158252519081900360200190f35b6101936103d1565b60408051918252519081900360200190f35b610177600480360360608110156101bb57600080fd5b506001600160a01b038135811691602081013590911690604001356103d7565b6101e361042e565b6040805160ff9092168252519081900360200190f35b6101776004803603604081101561020f57600080fd5b506001600160a01b038135169060200135610437565b6101936004803603602081101561023b57600080fd5b50356001600160a01b0316610473565b61025361048e565b604080516001600160a01b039092168252519081900360200190f35b6100d661049d565b6101776004803603604081101561028d57600080fd5b506001600160a01b0381351690602001356104fd565b610177600480360360408110156102b957600080fd5b506001600160a01b038135169060200135610539565b610193600480360360408110156102e557600080fd5b506001600160a01b0381358116916020013516610546565b6103236004803603602081101561031357600080fd5b50356001600160a01b0316610571565b005b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103b15780601f10610386576101008083540402835291602001916103b1565b820191906000526020600020905b81548152906001019060200180831161039457829003601f168201915b5050505050905090565b60006103c8338484610671565b50600192915050565b60055490565b60006103e48484846106f9565b6001600160a01b03841660009081526004602090815260408083203380855292529091205461042491869161041f908663ffffffff6107c616565b610671565b5060019392505050565b60025460ff1690565b3360008181526004602090815260408083206001600160a01b038716845290915281205490916103c891859061041f908663ffffffff6107db16565b6001600160a01b031660009081526003602052604090205490565b6006546001600160a01b031690565b60018054604080516020601f600260001961010087891615020190951694909404938401819004810282018101909252828152606093909290918301828280156103b15780601f10610386576101008083540402835291602001916103b1565b3360008181526004602090815260408083206001600160a01b038716845290915281205490916103c891859061041f908663ffffffff6107c616565b60006103c83384846106f9565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b6006546001600160a01b031633146105d0576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166106155760405162461bcd60e51b81526004018080602001828103825260268152602001806107f56026913960400191505060405180910390fd5b6006546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03821661068457600080fd5b6001600160a01b03831661069757600080fd5b6001600160a01b03808416600081815260046020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03821661070c57600080fd5b6001600160a01b038316600090815260036020526040902054610735908263ffffffff6107c616565b6001600160a01b03808516600090815260036020526040808220939093559084168152205461076a908263ffffffff6107db16565b6001600160a01b0380841660008181526003602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000828211156107d557600080fd5b50900390565b6000828201838110156107ed57600080fd5b939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a26474726f6e582046f868f305a1b1382bdad87771c701c0601930f6e20d26a6c3780211c5e6946c64736f6c634300050f0031";
    
    const transaction = await tronWeb.transactionBuilder.createSmartContract({
        abi: abi,
        bytecode: code,
        parameters: [document.getElementById('name').value,document.getElementById('symbol').value,parseInt(document.getElementById('supply').value)]
      }, tronWeb.defaultAddress.hex);

    const signedTransaction = await tronWeb.trx.sign(transaction);
    const contract_instance = await tronWeb.trx.sendRawTransaction(signedTransaction); 

    
    console.log(tronWeb.address.fromHex(await contract_instance.transaction.contract_address));
    document.getElementById('response').value = tronWeb.address.fromHex(await contract_instance.transaction.contract_address);
    
}