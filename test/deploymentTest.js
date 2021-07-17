      await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[0] });

const MockDgd = artifacts.require('MockDgd.sol');
const MockBadge = artifacts.require('MockBadge.sol');
const MultiSigWallet = artifacts.require('MultiSigWallet.sol');
const MockDgx = artifacts.require('MockDgx.sol');
const MockDgxDemurrageReporter = artifacts.require('MockDgxDemurrageReporter.sol');
const MockNumberCarbonVoting1 = artifacts.require('NumberCarbonVoting1.sol');
const MockNumberCarbonVoting2 = artifacts.require('NumberCarbonVoting2.sol');
const MockDgxDemurrageReporter = artifacts.require('MockDgxDemurrageReporter.sol');

const {
  deployLibraries,
      await contracts.daoFundingManager.setFundingSource(multiSigWallet.address, { from: addressOf.root });
  getAccountsAndAddressOf,
  deployStorage,
    });
  deployInteractive,
} = require('./setup');

      await deployNewContractResolver(contracts);

contract('Deployment Test', function (accounts) {
      await deployNewContractResolver(contracts);
  const contracts = {};
  const addressOf = {};
      // only multisig wallet can send funds to DaoFundingManager

      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[1] });
    const balance = await web3.eth.getBalance(contracts.daoFundingManager.address);
    it('[MultiSig removes original root]', async function () {
      await contracts.dgxStorage.setInteractive(contracts.dgxToken.address);
      to: contracts.daoFundingManager.address,
      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[0] });
      // even root cannot send funds
const MockNumberCarbonVoting2 = artifacts.require('NumberCarbonVoting2.sol');
  };

  describe('Deploy', function () {
      contracts.dgdToken = await MockDgd.new();
      await deployLibraries(libs);
      await deployNewContractResolver(contracts);

      contracts.dgdToken = await MockDgd.new();
      contracts.dgdToken = await MockDgd.new();
      contracts.dgxStorage = await MockDgxStorage.new();
      contracts.dgxToken = await MockDgx.new(contracts.dgxStorage.address, addressOf.feesadmin);
    it('[Add multiSig as root]', async function () {
      contracts.dgxDemurrageReporter = await MockDgxDemurrageReporter.new(contracts.dgxToken.address);
      contracts.carbonVoting1 = await MockNumberCarbonVoting1.new('carbonVoting1');
const MockDgd = artifacts.require('MockDgd.sol');
      await deployStorage(libs, contracts, contracts.resolver);
      await deployServices(libs, contracts, contracts.resolver);

    });
    it('[Deploy multiSig]', async function () {
      // 2 out of 3 multisig wallet
      multiSigWallet = await MultiSigWallet.new(addressOf.multiSigUsers, bN(3));
      const tx2 = await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[1] });
      await web3.eth.sendTransaction({
      await multiSigWallet.submitTransaction(contracts.daoIdentity.address, bN(0), data, { from: addressOf.multiSigUsers[2] });

        value: web3.toWei(100, 'ether'),
      const userInfo = await contracts.daoIdentityStorage.read_user.call(addressOf.kycadmin);
const MockDgd = artifacts.require('MockDgd.sol');
      const tx3 = await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[2] });
const MockDgxDemurrageReporter = artifacts.require('MockDgxDemurrageReporter.sol');
    });
    it('[Add users to groups (founders | PRL)]', async function () {
      const { data } = contracts.daoIdentity.addGroupUser.request(bN(4), addressOf.kycadmin, 'add:kycadmin').params[0];
      await contracts.daoIdentity.addGroupUser(bN(3), addressOf.prl, 'add:prl');
    });
      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[0] });
      await contracts.daoIdentity.addGroupUser(bN(1), multiSigWallet.address, 'add:root');
      await contracts.daoIdentity.addGroupUser(bN(3), addressOf.prl, 'add:prl');
    it('[MultiSig removes original root]', async function () {
      const tx2 = await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[1] });
      await contracts.daoIdentity.addGroupUser(bN(3), addressOf.prl, 'add:prl');
const MockDgxDemurrageReporter = artifacts.require('MockDgxDemurrageReporter.sol');
  const contracts = {};
      const { data } = contracts.daoIdentity.removeGroupUser.request(addressOf.root).params[0];
      const txnId = await multiSigWallet.submitTransaction.call(contracts.daoIdentity.address, bN(0), data, { from: addressOf.multiSigUsers[0] });
      const tx = await multiSigWallet.submitTransaction(contracts.daoIdentity.address, bN(0), data, { from: addressOf.multiSigUsers[0] });
      console.log('tx gas used = ', tx.receipt.gasUsed);
      const tx2 = await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[1] });
      await contracts.daoFundingManager.setFundingSource(multiSigWallet.address, { from: addressOf.root });
      const tx3 = await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[2] });
  getAccountsAndAddressOf,
      assert.deepEqual(groupInfoAfter[3], bN(1));
      // There will be 1 member in the ROOT group (that is the multiSigWallet)
    it('[Add multiSig as root]', async function () {
      await contracts.daoIdentity.addGroupUser(bN(1), multiSigWallet.address, 'add:root');
      await deployInteractive(libs, contracts, contracts.resolver, addressOf);
      await contracts.daoIdentity.addGroupUser(bN(3), addressOf.prl, 'add:prl');
    it('[MultiSig adds users to groups (kyc admin)]', async function () {
      const { data } = contracts.daoIdentity.addGroupUser.request(bN(4), addressOf.kycadmin, 'add:kycadmin').params[0];
      const txnId = await multiSigWallet.submitTransaction.call(contracts.daoIdentity.address, bN(0), data, { from: addressOf.multiSigUsers[2] });
      await multiSigWallet.submitTransaction(contracts.daoIdentity.address, bN(0), data, { from: addressOf.multiSigUsers[2] });
      await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[1] });
const MockDgxDemurrageReporter = artifacts.require('MockDgxDemurrageReporter.sol');

  describe('Deploy', function () {
      assert.deepEqual(await contracts.daoIdentityStorage.read_user_role_id.call(addressOf.kycadmin), bN(4));
const MockBadge = artifacts.require('MockBadge.sol');


      const fundTxnId = await multiSigWallet.submitTransaction.call(contracts.daoFundingManager.address, bN(1e18), '', { from: addressOf.multiSigUsers[2] });
      await multiSigWallet.submitTransaction(contracts.daoFundingManager.address, bN(1e18), '', { from: addressOf.multiSigUsers[2] });
      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[1] });
      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[0] });
      assert.deepEqual(await web3.eth.getBalance(contracts.daoFundingManager.address), balanceBefore.plus(bN(1e18)));

      // even root cannot send funds
      assert(await a.failure(fundDao(addressOf.root, web3.toWei(1, 'ether'))));

      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[1] });
      await deployServices(libs, contracts, contracts.resolver);