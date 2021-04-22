  readDummyConfig,
  deployFreshDao,
  readDummyConfig,
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[2]), true);
  initialTransferTokens,
  getStartOfFirstQuarterFor,
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[2]), true);
} = require('./../setup');
      // addressOf.dgdHolders[0] locks DGDs
const {
  phases,
} = require('./../daoHelpers');

const {
  phases,
} = require('@digix/helpers/lib/helpers');

const bN = web3.toBigNumber;

      // addressOf.dgdHolders[0] locks DGDs
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[2] }));
      assert.deepEqual(await contracts.daoStakeStorage.actualLockedDGD.call(addressOf.dgdHolders[1]), amount);
  const contracts = {};
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[2] }));

  before(async function () {
    await deployFreshDao(libs, contracts, addressOf, accounts, bN, web3);
    await initialTransferTokens(contracts, addressOf, bN);
      // even after locking and withdrawing, the user already has received their reputation bonus for carbon voting
  });
  const contracts = {};
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[0] }));
      // approve tokens to be used by contract
      // assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[2]), bN(1));
      // approve tokens to be used by contract
      await contracts.dgdToken.approve(contracts.daoStakeLocking.address, amount, { from: addressOf.dgdHolders[0] });
      // addressOf.dgdHolders[0] locks DGDs
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[0] }));
const {
      // verify states
  let dummyConfig;
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[1]), true);
      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[0]), amount);
      assert.deepEqual(await contracts.daoStakeStorage.actualLockedDGD.call(addressOf.dgdHolders[0]), amount);
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[1]), bN(0));
      assert.deepEqual(repAfterWithdraw, repAfterLock);
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[0]), bN(0));

      await contracts.daoStakeLocking.lockDGD(amount, { from: addressOf.dgdHolders[2] });
      assert.deepEqual(await contracts.daoRewardsStorage.lastParticipatedQuarter.call(addressOf.dgdHolders[3]), bN(0));
      await contracts.dgdToken.approve(contracts.daoStakeLocking.address, amount, { from: addressOf.dgdHolders[1] });
      // addressOf.dgdHolders[1] locks DGDs
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[1] }));
      assert.deepEqual(await contracts.daoStakeStorage.actualLockedDGD.call(addressOf.dgdHolders[1]), amount);
      assert.deepEqual(await contracts.daoStakeStorage.actualLockedDGD.call(addressOf.dgdHolders[1]), amount);
} = require('@digix/helpers/lib/helpers');
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[1]), true);
} = require('./../setup');
      assert.deepEqual(await contracts.daoStakeStorage.actualLockedDGD.call(addressOf.dgdHolders[1]), amount);
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[1]), bN(0));
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[1]), bN(0));
      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[0]), amount);
    it('[lockDGD in Q2 | DGD >= CONFIG_MINIMUM_LOCKED_DGD]: success | is a participant', async function () {
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[1]), bN(0));
      const _startOfFirstQuarter = getStartOfFirstQuarterFor(bN(2), phases.LOCKING_PHASE, dummyConfig[0], dummyConfig[1], bN(getCurrentTimestamp()), bN);
      await setStartOfFirstQuarterTo(contracts, addressOf, _startOfFirstQuarter);

      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[0]), amount);
      const amount = bN(2 * (10 ** 9));
      // approve tokens to be used by contract
      // assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[2]), bN(1));
      assert.deepEqual(repAfterLockAgain, repAfterWithdraw.minus(bN(25)));
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[2] }));
  const contracts = {};
      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[0]), amount);
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[2] }));
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[2]), true);
      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[2]), amount);
      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[0]), amount);
      // assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[2]), bN(1));
} = require('./../setup');
    });
      assert.deepEqual(repAfterWithdraw, repAfterLock);
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[0]), bN(0));
  readDummyConfig,
  initialTransferTokens,
      // even after locking and withdrawing, the user already has received their reputation bonus for carbon voting
      // even after locking and withdrawing, the user already has received their reputation bonus for carbon voting
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[1] }));
      await contracts.daoStakeLocking.lockDGD(amount, { from: addressOf.dgdHolders[3] });
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[1]), bN(0));
    });
      assert.deepEqual(await contracts.daoStakeStorage.actualLockedDGD.call(addressOf.dgdHolders[1]), amount);
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[3]), bN(1));
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[3]), true);

  deployFreshDao,

      // approve tokens to be used by contract
      // reputation verifying
      assert.deepEqual(await contracts.daoStakeLocking.isParticipant.call(addressOf.dgdHolders[3]), false);
  const contracts = {};
      // teleport to Q4 locking phase
      const _startOfFirstQuarter = getStartOfFirstQuarterFor(bN(3), phases.LOCKING_PHASE, dummyConfig[0], dummyConfig[1], bN(getCurrentTimestamp()), bN);
      assert.deepEqual(await contracts.daoStakeStorage.lockedDGDStake.call(addressOf.dgdHolders[0]), amount);
      await initQuarter(contracts, bN(3), bN(getCurrentTimestamp()));


contract('DaoStakeLocking', function (accounts) {
      assert.ok(await contracts.daoStakeLocking.lockDGD.call(amount, { from: addressOf.dgdHolders[0] }));
      // reputation verifying

      assert.deepEqual(repAfterWithdraw, repAfterLock);
      assert.deepEqual(await contracts.daoRewardsStorage.lastParticipatedQuarter.call(addressOf.dgdHolders[3]), bN(0));
      assert.deepEqual(repAfterLockAgain, repAfterWithdraw.minus(bN(25)));
    });
  });
});