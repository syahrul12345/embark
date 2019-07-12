module.exports = {
  default: {
    dappConnection: [
      "ws://localhost:8546",
      "http://localhost:8550",
      "http://localhost:8545",
      "http://localhost:8550",
      "$WEB3"
    ],
    gas: "auto",
    deploy: {
      Ownable: {
        deploy: false
      },
      SimpleStorage: {
        fromIndex: 0,
        args: [100],
        onDeploy: ["SimpleStorage.methods.setRegistar(web3.eth.defaultAccount).send()"]
      },
      AnotherStorage: {
        args: ["$SimpleStorage"]
      },
      Token: {
        deploy: false,
        args: [1000]
      },
      Test: {
        onDeploy: ["Test.methods.changeAddress('$MyToken')", "Test.methods.changeENS('embark.eth')"]
      },
      MyToken: {
        instanceOf: "Token"
      },
      MyToken2: {
        instanceOf: "Token",
        args: [200]
      },
      AlreadyDeployedToken: {
        address: "0xece374063fe5cc7efbaca0a498477cada94e5ad6",
        instanceOf: "Token"
      },
      MyToken3: {
        instanceOf: "Tokn"
      },
      ContractArgs: {
        args: {
          initialValue: 123,
          "_addresses": ["$MyToken2", "$SimpleStorage"]
        }
      },
      SomeContract: {
        deployIf: 'await MyToken.methods.isAvailable().call()',
        deps: ['MyToken'],
        args: [
          ["$MyToken2", "$SimpleStorage"],
          100
        ]
      },
      ERC20: {
        file: "zeppelin-solidity/contracts/token/ERC20/ERC20.sol"
      },
      SimpleStorageTest: {
        file: "./some_folder/test_contract.sol",
        args: [1000]
      },
      StandardToken: {
        file: "https://github.com/status-im/contracts/blob/151-embark31/contracts/token/StandardToken.sol",
        deploy: false
      },
      SimpleStorageWithHttpImport: {
        fromIndex: 0,
        args: [100]
      }
    },
    afterDeploy: [
      "Test.methods.changeAddress('$MyToken')",
      "web3.eth.getAccounts((err, accounts) => Test.methods.changeAddress(accounts[0]))"
    ]
  },
  development: {
    deploy: {
      MyToken2: {
        instanceOf: "Token",
        args: [2000]
      }
    }
  }
};
