import  { buildUrl, defaultHost, dockerHostSwap } from 'embark-utils';
const Web3 = require('web3');
const constants = require('embark-core/constants');

class DevTxs {
  constructor(options) {
    this.blockchainConfig = options.blockchainConfig;
    this.networkId = null;
    if (options.provider) {
      this.provider = options.provider;
    } else if (this.blockchainConfig.wsRPC !== false) {
      this.provider = new Web3.providers.WebsocketProvider(
        buildUrl(
          'ws',
          dockerHostSwap(this.blockchainConfig.wsHost) || defaultHost,
          this.blockchainConfig.wsPort || constants.blockchain.defaults.wsPort
        ),
        {headers: {Origin: constants.embarkResourceOrigin}});
    } else {
      this.provider = new Web3.providers.HttpProvider(
        buildUrl(
          'http',
          dockerHostSwap(this.blockchainConfig.rpcHost) || defaultHost,
          this.blockchainConfig.rpcPort || constants.blockchain.defaults.rpcPort
        )
      );
    }
    this.web3 = new Web3(this.provider);
    this.logger = options.logger || console;
  }

  static async new(options) {
    const dt = new DevTxs(options);
    await dt._init();
    return dt;
  }

  async _init() {
    const accounts = await this.web3.eth.getAccounts();
    this.web3.eth.defaultAccount = accounts[0];
  }

  sendTx(cb) {
    // Send TXs only in dev networks
    if (this.networkId !== constants.blockchain.networkIds.development && this.networkId !== constants.blockchain.networkIds.development_parity) {
      return;
    }
    this.web3.eth.sendTransaction({value: "0", to: this.web3.eth.defaultAccount, from: this.web3.eth.defaultAccount}).then(cb);
  }

  startRegularTxs(cb) {
    const self = this;
    self.web3.eth.net.getId().then((networkId) => {
      self.networkId = networkId;
      if (self.networkId !== constants.blockchain.networkIds.development && this.networkId !== constants.blockchain.networkIds.development_parity) {
        return;
      }
      this.regularTxsInt = setInterval(function() { self.sendTx(() => {}); }, 1500);
      if (cb) {
        cb();
      }
    });
  }

  stopRegularTxs(cb) {
    if(!this.regularTxsInt) {
      return cb('Regular txs not enabled.');
    }
    clearInterval(this.regularTxsInt);
    cb();
  }
}

module.exports = DevTxs;
