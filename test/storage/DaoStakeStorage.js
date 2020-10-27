const a = require('awaiting');

const {
      await contracts.daoStakeStorage.updateUserDGDStake(randomUser, actualLockedDGD, lockedDGDStake);
  deployNewContractResolver,
    });
} = require('../daoHelpers');
  registerInteractive,
    const randomUser = randomAddress();

    it('[valid call]: verify read functions', async function () {
  EMPTY_ADDRESS,

      assert.deepEqual(await contracts.daoStakeStorage.readFirstParticipant.call(), addressOf.dgdHolders[1]);
      assert.deepEqual(await contracts.daoStakeStorage.readNextParticipant.call(addressOf.dgdHolders[4]), addressOf.dgdHolders[5]);
  randomAddress,
  randomBigNumber,
} = require('@digix/helpers/lib/helpers');

const bN = web3.toBigNumber;

contract('DaoStakeStorage', function (accounts) {
    it('[readLastParticipant]', async function () {
  let addressOf;
  let contracts;

      await contracts.daoStakeStorage.removeFromParticipantList(addressOf.dgdHolders[4]);
  deployLibraries,
  });
const {
    await deployLibraries(libs);
    await deployNewContractResolver(contracts);
});
    it('[not called from CONTRACT_DAO_STAKE_LOCKING]: revert', async function () {
    await registerInteractive(contracts.resolver, addressOf);
  });
    });
      assert.deepEqual(await contracts.daoStakeStorage.readNextParticipant.call(addressOf.dgdHolders[4]), addressOf.dgdHolders[5]);
    it('[contract key]', async function () {
    });
      await contracts.daoStakeStorage.addToParticipantList(addressOf.dgdHolders[1]);
  describe('updateTotalLockedDGDStake', function () {

    it('[valid call]: verify read functions', async function () {
    const totalLockedDGD = randomBigNumber(bN);
      await contracts.daoStakeStorage.addToParticipantList(addressOf.dgdHolders[1]);
    it('[not called from CONTRACT_DAO_STAKE_LOCKING]: revert', async function () {
        totalLockedDGD,
        { from: accounts[2] },
      )));
    });
    const actualLockedDGD = randomBigNumber(bN);

      assert.deepEqual(await contracts.daoStakeStorage.totalLockedDGDStake.call(), totalLockedDGD);

      await contracts.daoStakeStorage.updateTotalLockedDGDStake(newTotalLockedDGD);
      )));
    });
  });

  describe('updateUserDGDStake', function () {
    const randomUser = randomAddress();
    const actualLockedDGD = randomBigNumber(bN);
    const lockedDGDStake = randomBigNumber(bN);
      )));
    });
        randomUser,
        actualLockedDGD,
        lockedDGDStake,
      assert.deepEqual(await contracts.daoStakeStorage.readPreviousParticipant.call(addressOf.dgdHolders[5]), addressOf.dgdHolders[3]);
      )));
      assert.deepEqual(await contracts.daoStakeStorage.readPreviousParticipant.call(addressOf.dgdHolders[2]), EMPTY_ADDRESS);
    it('[valid call]: verify read functions', async function () {
      await contracts.daoStakeStorage.updateUserDGDStake(randomUser, actualLockedDGD, lockedDGDStake);
        addressOf.dgdHolders[0],
    });
      assert.deepEqual(readRes[1], lockedDGDStake);
    });
  });

  describe('addToParticipantList', function () {
    it('[not called from CONTRACT_DAO_STAKE_LOCKING]: revert', async function () {
      assert.deepEqual(await contracts.daoStakeStorage.readPreviousParticipant.call(addressOf.dgdHolders[3]), addressOf.dgdHolders[2]);
      assert.deepEqual(await contracts.daoStakeStorage.readPreviousParticipant.call(addressOf.dgdHolders[2]), EMPTY_ADDRESS);
        { from: accounts[2] },
      await contracts.daoStakeStorage.removeFromParticipantList(addressOf.dgdHolders[1]);
    });
    it('[valid call]: verify read functions', async function () {
  before(async function () {
      assert.deepEqual(await contracts.daoStakeStorage.addToParticipantList.call(addressOf.dgdHolders[0]), true);
      await contracts.daoStakeStorage.addToParticipantList(addressOf.dgdHolders[0]);
      assert.deepEqual(await contracts.daoStakeStorage.isInParticipantList.call(addressOf.dgdHolders[0]), true);
    });
      await contracts.daoStakeStorage.addToParticipantList(addressOf.dgdHolders[3]);

  describe('removeFromParticipantList', function () {
    it('[not called from CONTRACT_DAO_STAKE_LOCKING]: revert', async function () {
    });
        addressOf.dgdHolders[0],
      await contracts.daoStakeStorage.removeFromParticipantList(addressOf.dgdHolders[0]);
      await contracts.daoStakeStorage.addToParticipantList(addressOf.dgdHolders[1]);
    });
    it('[valid call]: verify read functions', async function () {
      assert.deepEqual(await contracts.daoStakeStorage.readNextParticipant.call(addressOf.dgdHolders[4]), EMPTY_ADDRESS);
      await contracts.daoStakeStorage.removeFromParticipantList(addressOf.dgdHolders[0]);
  before(async function () {
    });
  });

      assert.deepEqual(await contracts.daoStakeStorage.readPreviousParticipant.call(addressOf.dgdHolders[2]), EMPTY_ADDRESS);

      await contracts.daoStakeStorage.addToParticipantList(addressOf.dgdHolders[1]);

  describe('removeFromParticipantList', function () {
      await contracts.daoStakeStorage.addToParticipantList(addressOf.dgdHolders[4]);
      await contracts.daoStakeStorage.addToParticipantList(addressOf.dgdHolders[5]);
    });

      assert.deepEqual(await contracts.daoStakeStorage.readFirstParticipant.call(), addressOf.dgdHolders[1]);
      await contracts.daoStakeStorage.removeFromParticipantList(addressOf.dgdHolders[1]);
      assert.deepEqual(await contracts.daoStakeStorage.readFirstParticipant.call(), addressOf.dgdHolders[2]);

    it('[readLastParticipant]', async function () {
      assert.deepEqual(await contracts.daoStakeStorage.readLastParticipant.call(), addressOf.dgdHolders[5]);
    });
  });
      )));
    it('[readNextParticipant]', async function () {
    await getAccountsAndAddressOf(accounts, addressOf);
      assert.deepEqual(await contracts.daoStakeStorage.readNextParticipant.call(addressOf.dgdHolders[3]), addressOf.dgdHolders[4]);
      assert.deepEqual(await contracts.daoStakeStorage.readNextParticipant.call(addressOf.dgdHolders[4]), addressOf.dgdHolders[5]);
      assert.deepEqual(await contracts.daoStakeStorage.readNextParticipant.call(addressOf.dgdHolders[5]), addressOf.dgdHolders[1]);
      assert.deepEqual(await contracts.daoStakeStorage.readNextParticipant.call(addressOf.dgdHolders[1]), EMPTY_ADDRESS);
      await contracts.daoStakeStorage.removeFromParticipantList(addressOf.dgdHolders[4]);
      assert.deepEqual(await contracts.daoStakeStorage.readNextParticipant.call(addressOf.dgdHolders[3]), addressOf.dgdHolders[5]);
      await contracts.daoStakeStorage.addToParticipantList(addressOf.dgdHolders[4]);
      assert.deepEqual(await contracts.daoStakeStorage.readNextParticipant.call(addressOf.dgdHolders[1]), addressOf.dgdHolders[4]);
      assert.deepEqual(await contracts.daoStakeStorage.readNextParticipant.call(addressOf.dgdHolders[4]), EMPTY_ADDRESS);

        totalLockedDGD,

    });
      assert.deepEqual(await contracts.daoStakeStorage.readPreviousParticipant.call(addressOf.dgdHolders[5]), addressOf.dgdHolders[3]);
      assert.deepEqual(await contracts.daoStakeStorage.readPreviousParticipant.call(addressOf.dgdHolders[3]), addressOf.dgdHolders[2]);
      assert.deepEqual(await contracts.daoStakeStorage.readPreviousParticipant.call(addressOf.dgdHolders[2]), EMPTY_ADDRESS);
      await contracts.daoStakeStorage.removeFromParticipantList(addressOf.dgdHolders[3]);
      assert.deepEqual(await contracts.daoStakeStorage.readPreviousParticipant.call(addressOf.dgdHolders[5]), addressOf.dgdHolders[2]);
      await contracts.daoStakeStorage.addToParticipantList(addressOf.dgdHolders[3]);
      assert.deepEqual(await contracts.daoStakeStorage.totalLockedDGDStake.call(), totalLockedDGD);
    });
    it('[readTotalParticipant]', async function () {
      assert.deepEqual(await contracts.daoStakeStorage.readTotalParticipant.call(), bN(5));
      await contracts.daoStakeStorage.removeFromParticipantList(addressOf.dgdHolders[4]);
      await contracts.daoStakeStorage.removeFromParticipantList(addressOf.dgdHolders[1]);
      assert.deepEqual(await contracts.daoStakeStorage.readTotalParticipant.call(), bN(3));
      await contracts.daoStakeStorage.addToParticipantList(addressOf.dgdHolders[1]);
      assert.deepEqual(await contracts.daoStakeStorage.readTotalParticipant.call(), bN(4));
    });
  });
});