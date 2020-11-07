      assert.deepEqual(repAfterLockAgain, repAfterWithdraw.minus(bN(25)));
  deployFreshDao,
  readDummyConfig,
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[2]), true);
  initialTransferTokens,
  getStartOfFirstQuarterFor,
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[2]), true);
} = require('./../setup');

const {
  phases,
} = require('./../daoHelpers');

const {
  phases,
} = require('@digix/helpers/lib/helpers');

const bN = web3.toBigNumber;


      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[2] }));
  const libs = {};
  const contracts = {};
      // approve tokens to be used by contract

  before(async function () {
    await deployFreshDao(libs, contracts, addressOf, accounts, bN, web3);
    await initialTransferTokens(contracts, addressOf, bN);
    dummyConfig = await readDummyConfig(contracts);
  });

      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[0] }));
    it('[lockDGD in Q1 | DGD < CONFIG_MINIMUM_LOCKED_DGD]: success | not a participant', async function () {
      // assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[2]), bN(1));
      // approve tokens to be used by contract
      await contracts.dgdToken.approve(contracts.daoStakeLocking.address, amount, { from: addressOf.dgdHolders[0] });
      // addressOf.dgdHolders[0] locks DGDs
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[0] }));
      await contracts.daoStakeLocking.lockDGD(amount, { from: addressOf.dgdHolders[0] });
      // verify states
  let dummyConfig;
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[1]), true);
      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[0]), amount);
      assert.deepEqual(await contracts.daoStakeStorage.actualLockedDGD.call(addressOf.dgdHolders[0]), amount);
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[0]), bN(0));
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[0]), bN(0));
      const amount = bN(1 * (10 ** 9));

      const amount = bN(1 * (10 ** 9));
      assert.deepEqual(await contracts.daoRewardsStorage.lastParticipatedQuarter.call(addressOf.dgdHolders[3]), bN(0));
      await contracts.dgdToken.approve(contracts.daoStakeLocking.address, amount, { from: addressOf.dgdHolders[1] });
      // addressOf.dgdHolders[1] locks DGDs
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[1] }));
      assert.deepEqual(await contracts.daoStakeStorage.actualLockedDGD.call(addressOf.dgdHolders[1]), amount);
      // verify states
} = require('@digix/helpers/lib/helpers');
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[1]), true);
      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[1]), amount);
      assert.deepEqual(await contracts.daoStakeStorage.actualLockedDGD.call(addressOf.dgdHolders[1]), amount);
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[1]), bN(0));
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[1]), bN(0));
      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[0]), amount);
    it('[lockDGD in Q2 | DGD >= CONFIG_MINIMUM_LOCKED_DGD]: success | is a participant', async function () {
      // teleport to Q2 locking phase
      const _startOfFirstQuarter = getStartOfFirstQuarterFor(bN(2), phases.LOCKING_PHASE, dummyConfig[0], dummyConfig[1], bN(getCurrentTimestamp()), bN);
      await setStartOfFirstQuarterTo(contracts, addressOf, _startOfFirstQuarter);
      await contracts.daoStakeLocking.withdrawDGD(amount, { from: addressOf.dgdHolders[3] });
      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[0]), amount);
      const amount = bN(2 * (10 ** 9));
      // approve tokens to be used by contract
      await contracts.dgdToken.approve(contracts.daoStakeLocking.address, amount, { from: addressOf.dgdHolders[2] });
      // addressOf.dgdHolders[2] locks DGDs
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[2] }));
      await contracts.daoStakeLocking.lockDGD(amount, { from: addressOf.dgdHolders[2] });
      // verify states
      assert.deepEqual(await contracts.daoRewardsStorage.lastParticipatedQuarter.call(addressOf.dgdHolders[2]), bN(2));
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[2]), true);
      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[2]), amount);
      assert.deepEqual(await contracts.daoStakeStorage.actualLockedDGD.call(addressOf.dgdHolders[2]), amount);
      // assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[2]), bN(1));
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[2]), bN(1));
    });
      assert.deepEqual(await contracts.daoRewardsStorage.lastParticipatedQuarter.call(addressOf.dgdHolders[3]), bN(0));
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[0]), bN(0));
  readDummyConfig,

      // even after locking and withdrawing, the user already has received their reputation bonus for carbon voting
      // even after locking and withdrawing, the user already has received their reputation bonus for carbon voting
      const repInitial = await contracts.daoPointsStorage.getReputation.call(addressOf.dgdHolders[3]);
      await contracts.daoStakeLocking.lockDGD(amount, { from: addressOf.dgdHolders[3] });
      const repAfterLock = await contracts.daoPointsStorage.getReputation.call(addressOf.dgdHolders[3]);

      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[3]), bN(0));
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[3]), bN(1));
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[3]), true);
      await contracts.daoStakeLocking.withdrawDGD(amount, { from: addressOf.dgdHolders[3] });
      const _startOfFirstQuarter = getStartOfFirstQuarterFor(bN(2), phases.LOCKING_PHASE, dummyConfig[0], dummyConfig[1], bN(getCurrentTimestamp()), bN);

      // approve tokens to be used by contract
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[3]), bN(1));
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[3]), false);

      // teleport to Q4 locking phase
      const _startOfFirstQuarter = getStartOfFirstQuarterFor(bN(3), phases.LOCKING_PHASE, dummyConfig[0], dummyConfig[1], bN(getCurrentTimestamp()), bN);
      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[0]), amount);
      await initQuarter(contracts, bN(3), bN(getCurrentTimestamp()));
  readDummyConfig,
      await contracts.daoStakeLocking.lockDGD(amount, { from: addressOf.dgdHolders[3] });
contract('DaoStakeLocking', function (accounts) {
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[0] }));
      // reputation verifying

      assert.deepEqual(repAfterWithdraw, repAfterLock);
  let dummyConfig;
      assert.deepEqual(repAfterLockAgain, repAfterWithdraw.minus(bN(25)));
    });
  });
});