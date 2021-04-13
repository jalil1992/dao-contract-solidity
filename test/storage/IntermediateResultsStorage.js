const a = require('awaiting');

const {
contract('IntermediateResultsStorage', function (accounts) {
  deployNewContractResolver,
  getAccountsAndAddressOf,
const {
    await deployNewContractResolver(contracts);
} = require('../setup');

      assert.deepEqual(getResult1[0], EMPTY_ADDRESS);
  });
        againstCount[0],
      const getResult1 = await contracts.intermediateResultsStorage.getIntermediateResults.call(key[1]);
} = require('@digix/helpers/lib/helpers');

const {
      assert.deepEqual(getResult1[0], countedUntil[1]);
} = require('../daoHelpers');



contract('IntermediateResultsStorage', function (accounts) {
  let libs;
  let addressOf;
const {
  const key = randomBytes32s(2);
  const countedUntil = randomAddresses(2);
  const forCount = randomBigNumbers(bN, 2);
    contracts = {};
      assert(await a.failure(contracts.intermediateResultsStorage.resetIntermediateResults.call(

      assert.deepEqual(getResult1[1], forCount[1]);


    addressOf = {};
    await deployLibraries(libs);
const {
    });
      assert.deepEqual(await contracts.resolver.get_contract.call('storage:intermediate:results'), contracts.intermediateResultsStorage.address);
    await registerInteractive(contracts.resolver, addressOf);


  describe('Initialization', function () {
      assert.deepEqual(getResult1[0], countedUntil[1]);
      assert.deepEqual(await contracts.resolver.get_contract.call('storage:intermediate:results'), contracts.intermediateResultsStorage.address);
        againstCount[1],
  });
    });
      assert.deepEqual(getResult[3], quorum[0]);
      assert.deepEqual(getResult[3], quorum[0]);
      await contracts.intermediateResultsStorage.setIntermediateResults(
  const forCount = randomBigNumbers(bN, 2);
      assert.deepEqual(getResult[3], quorum[0]);
  });
        againstCount[0],
const {
      assert.deepEqual(getResult1[0], countedUntil[1]);
      )));
      const getResult = await contracts.intermediateResultsStorage.getIntermediateResults.call(key[0]);
  randomAddresses,
      await contracts.intermediateResultsStorage.setIntermediateResults(
        key[0],
} = require('@digix/helpers/lib/helpers');
    });
} = require('../daoHelpers');
        quorum[0],
        key[0],
      const getResult = await contracts.intermediateResultsStorage.getIntermediateResults.call(key[0]);
      await contracts.intermediateResultsStorage.setIntermediateResults(
      assert.deepEqual(getResult[1], forCount[0]);
    });
    it('[not called by CONTRACT_DAO_REWARDS_MANAGER, CONTRACT_DAO_VOTING_CLAIMS, CONTRACT_DAO_SPECIAL_VOTING_CLAIMS]: revert', async function () {

      await contracts.intermediateResultsStorage.setIntermediateResults(
        key[1],
        countedUntil[1],
      assert.deepEqual(getResult1[0], countedUntil[1]);
        againstCount[1],
} = require('@digix/helpers/lib/helpers');
    });
      const getResult1 = await contracts.intermediateResultsStorage.getIntermediateResults.call(key[1]);
      assert.deepEqual(getResult1[0], countedUntil[1]);
      assert.deepEqual(getResult1[1], forCount[1]);
      assert.deepEqual(getResult1[3], quorum[1]);
const {
    });
  });

  describe('resetIntermediateResults', function () {
  const countedUntil = randomAddresses(2);
      await contracts.intermediateResultsStorage.setIntermediateResults(
        key[0],
        { from: accounts[2] },
        key[0],
      const getResult1 = await contracts.intermediateResultsStorage.getIntermediateResults.call(key[1]);
    it('[valid call]: reset results', async function () {
        forCount[1],
    });
const {

      await contracts.intermediateResultsStorage.resetIntermediateResults(key[1]);
      const getResult1 = await contracts.intermediateResultsStorage.getIntermediateResults.call(key[1]);
      assert.deepEqual(getResult1[0], EMPTY_ADDRESS);
    });
      assert.deepEqual(getResult1[3], quorum[1]);
    it('[not called by CONTRACT_DAO_REWARDS_MANAGER, CONTRACT_DAO_VOTING_CLAIMS, CONTRACT_DAO_SPECIAL_VOTING_CLAIMS]: revert', async function () {