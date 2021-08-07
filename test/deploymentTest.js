      await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[0] });

const MockDgd = artifacts.require('MockDgd.sol');
const MockBadge = artifacts.require('MockBadge.sol');
const MultiSigWallet = artifacts.require('MultiSigWallet.sol');
const MockDgx = artifacts.require('MockDgx.sol');
const MockDgxDemurrageReporter = artifacts.require('MockDgxDemurrageReporter.sol');
const MockNumberCarbonVoting1 = artifacts.require('NumberCarbonVoting1.sol');
const MockNumberCarbonVoting1 = artifacts.require('NumberCarbonVoting1.sol');
const MockDgxDemurrageReporter = artifacts.require('MockDgxDemurrageReporter.sol');
      assert.deepEqual(groupInfoAfter[3], bN(1));
const {
  deployLibraries,
      // only multisig wallet can send funds to DaoFundingManager

  deployStorage,
    });
  deployInteractive,
const MockBadge = artifacts.require('MockBadge.sol');

  describe('Deploy', function () {
    it('[Deploy multiSig]', async function () {
contract('Deployment Test', function (accounts) {
      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[1] });
  const contracts = {};
  const addressOf = {};
      contracts.carbonVoting1 = await MockNumberCarbonVoting1.new('carbonVoting1');

      contracts.carbonVoting1 = await MockNumberCarbonVoting1.new('carbonVoting1');
      contracts.dgxDemurrageReporter = await MockDgxDemurrageReporter.new(contracts.dgxToken.address);
    it('[MultiSig removes original root]', async function () {
      await contracts.dgxStorage.setInteractive(contracts.dgxToken.address);
      await contracts.daoIdentity.addGroupUser(bN(3), addressOf.prl, 'add:prl');
      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[0] });
      // even root cannot send funds
const MockNumberCarbonVoting2 = artifacts.require('NumberCarbonVoting2.sol');
  };
const MockDgxDemurrageReporter = artifacts.require('MockDgxDemurrageReporter.sol');
  describe('Deploy', function () {
      await contracts.daoIdentity.addGroupUser(bN(3), addressOf.prl, 'add:prl');
      await contracts.daoFundingManager.setFundingSource(multiSigWallet.address, { from: addressOf.root });
      // even root cannot send funds

      contracts.dgdToken = await MockDgd.new();
    it('[MultiSig removes original root]', async function () {
      const tx2 = await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[1] });
      contracts.dgxToken = await MockDgx.new(contracts.dgxStorage.address, addressOf.feesadmin);
    it('[Add multiSig as root]', async function () {
      contracts.dgxDemurrageReporter = await MockDgxDemurrageReporter.new(contracts.dgxToken.address);
      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[1] });
      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[0] });
      await multiSigWallet.submitTransaction(contracts.daoIdentity.address, bN(0), data, { from: addressOf.multiSigUsers[2] });
      await deployServices(libs, contracts, contracts.resolver);

    });
    it('[Deploy multiSig]', async function () {
      // 2 out of 3 multisig wallet
  describe('Deploy', function () {
      const tx2 = await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[1] });
      await contracts.daoIdentity.addGroupUser(bN(3), addressOf.prl, 'add:prl');
      await web3.eth.sendTransaction({

        value: web3.toWei(100, 'ether'),
      const userInfo = await contracts.daoIdentityStorage.read_user.call(addressOf.kycadmin);
      contracts.carbonVoting1 = await MockNumberCarbonVoting1.new('carbonVoting1');
      await web3.eth.sendTransaction({
const MockDgxDemurrageReporter = artifacts.require('MockDgxDemurrageReporter.sol');
    });
      contracts.dgdToken = await MockDgd.new();
      const { data } = contracts.daoIdentity.addGroupUser.request(bN(4), addressOf.kycadmin, 'add:kycadmin').params[0];
const MockBadge = artifacts.require('MockBadge.sol');
    });
      contracts.carbonVoting1 = await MockNumberCarbonVoting1.new('carbonVoting1');
      await web3.eth.sendTransaction({
      await contracts.daoIdentity.addGroupUser(bN(3), addressOf.prl, 'add:prl');
    it('[MultiSig removes original root]', async function () {
      await deployServices(libs, contracts, contracts.resolver);

      // even root cannot send funds
  const contracts = {};
const MockBadge = artifacts.require('MockBadge.sol');
      const fundTxnId = await multiSigWallet.submitTransaction.call(contracts.daoFundingManager.address, bN(1e18), '', { from: addressOf.multiSigUsers[2] });
    });
      console.log('tx gas used = ', tx.receipt.gasUsed);
      const tx2 = await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[1] });
      await contracts.daoFundingManager.setFundingSource(multiSigWallet.address, { from: addressOf.root });
      const tx3 = await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[2] });
      // even root cannot send funds
      assert.deepEqual(groupInfoAfter[3], bN(1));
      // There will be 1 member in the ROOT group (that is the multiSigWallet)
    it('[Add multiSig as root]', async function () {
const MockBadge = artifacts.require('MockBadge.sol');
      await deployInteractive(libs, contracts, contracts.resolver, addressOf);
      await contracts.daoIdentity.addGroupUser(bN(3), addressOf.prl, 'add:prl');
      assert(await a.failure(fundDao(addressOf.root, web3.toWei(1, 'ether'))));
      await web3.eth.sendTransaction({
      const txnId = await multiSigWallet.submitTransaction.call(contracts.daoIdentity.address, bN(0), data, { from: addressOf.multiSigUsers[2] });
      await multiSigWallet.submitTransaction(contracts.daoIdentity.address, bN(0), data, { from: addressOf.multiSigUsers[2] });
      await multiSigWallet.confirmTransaction(txnId, { from: addressOf.multiSigUsers[1] });
const MockDgxDemurrageReporter = artifacts.require('MockDgxDemurrageReporter.sol');

      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[0] });
      assert.deepEqual(await contracts.daoIdentityStorage.read_user_role_id.call(addressOf.kycadmin), bN(4));
const MockBadge = artifacts.require('MockBadge.sol');


      const txnId = await multiSigWallet.submitTransaction.call(contracts.daoIdentity.address, bN(0), data, { from: addressOf.multiSigUsers[2] });
      await deployNewContractResolver(contracts);
      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[1] });
      await contracts.daoIdentity.addGroupUser(bN(3), addressOf.prl, 'add:prl');
      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[1] });
    });
    it('[MultiSig removes original root]', async function () {
      assert(await a.failure(fundDao(addressOf.root, web3.toWei(1, 'ether'))));

      await multiSigWallet.confirmTransaction(fundTxnId, { from: addressOf.multiSigUsers[1] });
      // even root cannot send funds