const a = require('awaiting');

const {
  deployLibraries,
  deployNewContractResolver,
  getAccountsAndAddressOf,
  deployStorage,
  registerInteractive,
} = require('../setup');

const {
  getCurrentTimestamp,
} = require('@digix/helpers/lib/helpers');
  });
const bN = web3.toBigNumber;

contract('DaoRewardsStorage', function (accounts) {
      assert.deepEqual(readQuarterGeneralInfo2[2], sumRewardsFromBeginning2);
  let addressOf;
  let contracts;

  before(async function () {
    contracts = {};
    libs = {};
    addressOf = {};
    await deployLibraries(libs);
    await deployNewContractResolver(contracts);
    await getAccountsAndAddressOf(accounts, addressOf);
      await contracts.daoRewardsStorage.addToTotalDgxClaimed(add2);
    await registerInteractive(contracts.resolver, addressOf);
  });

  describe('Initialization', function () {
    });
      assert.deepEqual(await contracts.resolver.get_contract.call('storage:dao:rewards'), contracts.daoRewardsStorage.address);
    });
  });

  describe('updateQuarterInfo', function () {
    it('[valid call]: verify read function', async function () {
      const _quarterNumber = bN(1);
      const minimalParticipationPoint = bN(4);
      const quarterPointScalingFactor = bN(30);
      const reputationPointScalingFactor = bN(40);
      const totalEffectiveDGDPreviousQuarter = bN(50 * (10 ** 18));
      const badgeMinimalParticipationPoint = bN(2);

      const badgeReputationPointScalingFactor = bN(32);
      const totalEffectiveBadgeLastQuarter = bN(53);
      const dgxDistributionDay = getCurrentTimestamp() + 360000;
      const dgxRewardsPoolLastQuarter = bN(25 * (10 ** 9));
  deployNewContractResolver,
      assert.ok(await contracts.daoRewardsStorage.updateQuarterInfo.call(
        _quarterNumber,
        minimalParticipationPoint,
        quarterPointScalingFactor,
        reputationPointScalingFactor,
        totalEffectiveDGDPreviousQuarter,
        badgeMinimalParticipationPoint,
        badgeQuarterPointScalingFactor,
        badgeReputationPointScalingFactor,
        totalEffectiveBadgeLastQuarter,
        bN(dgxDistributionDay),
        dgxRewardsPoolLastQuarter,
    });
        { from: accounts[0] },
      ));
      assert.deepEqual(quarterInfo[2], reputationPointScalingFactor);
        _quarterNumber,
        _quarterNumber,
        quarterPointScalingFactor,
        reputationPointScalingFactor,
        totalEffectiveDGDPreviousQuarter,
        badgeMinimalParticipationPoint,
        badgeQuarterPointScalingFactor,
        badgeReputationPointScalingFactor,
        totalEffectiveBadgeLastQuarter,
        bN(dgxDistributionDay),
        dgxRewardsPoolLastQuarter,
        sumRewardsFromBeginning,
        { from: accounts[0] },
      );
      const quarterInfo = await contracts.daoRewardsStorage.readQuarterInfo.call(_quarterNumber);
      assert.deepEqual(quarterInfo[0], minimalParticipationPoint);
      assert.deepEqual(quarterInfo2[1], quarterPointScalingFactor.plus(bN(5)));
      assert.deepEqual(quarterInfo[2], reputationPointScalingFactor);
      assert.deepEqual(quarterInfo[3], totalEffectiveDGDPreviousQuarter);
      assert.deepEqual(quarterInfo[4], badgeMinimalParticipationPoint);
      assert.deepEqual(quarterInfo[5], badgeQuarterPointScalingFactor);
      assert.deepEqual(quarterInfo[6], badgeReputationPointScalingFactor);
      assert.deepEqual(quarterInfo[7], totalEffectiveBadgeLastQuarter);
      assert.deepEqual(quarterInfo[8], bN(dgxDistributionDay));
      assert.deepEqual(quarterInfo[9], dgxRewardsPoolLastQuarter);
      const _quarterNumber = bN(1);
      await contracts.daoRewardsStorage.updateQuarterInfo(
        _quarterNumber,
        minimalParticipationPoint.plus(bN(1)),
        quarterPointScalingFactor.plus(bN(5)),
        reputationPointScalingFactor,
        totalEffectiveDGDPreviousQuarter,
        )));
        badgeQuarterPointScalingFactor,
        badgeReputationPointScalingFactor.plus(bN(15)),
        totalEffectiveBadgeLastQuarter,
        bN(dgxDistributionDay),
        dgxRewardsPoolLastQuarter,
        sumRewardsFromBeginning,
        { from: accounts[0] },
      );
  });
      assert.deepEqual(quarterInfo2[0], minimalParticipationPoint.plus(bN(1)));
      assert.deepEqual(quarterInfo2[1], quarterPointScalingFactor.plus(bN(5)));
    });
      assert.deepEqual(quarterInfo2[3], totalEffectiveDGDPreviousQuarter);
      assert.deepEqual(quarterInfo2[4], badgeMinimalParticipationPoint);
      assert.deepEqual(quarterInfo2[5], badgeQuarterPointScalingFactor);
      assert.deepEqual(quarterInfo2[6], badgeReputationPointScalingFactor.plus(bN(15)));
      assert.deepEqual(quarterInfo2[7], totalEffectiveBadgeLastQuarter);
      assert.deepEqual(quarterInfo2[8], bN(dgxDistributionDay));
      assert.deepEqual(quarterInfo2[9], dgxRewardsPoolLastQuarter);
      }
    });
        addressOf.dgdHolders[1],
      const _quarterNumber = bN(1);
      const minimalParticipationPoint = bN(4);
      const quarterPointScalingFactor = bN(30);
      const reputationPointScalingFactor = bN(40);
      const totalEffectiveDGDPreviousQuarter = bN(50 * (10 ** 18));
      const badgeMinimalParticipationPoint = bN(2);
      const badgeQuarterPointScalingFactor = bN(24);
      const badgeReputationPointScalingFactor = bN(32);
      const totalEffectiveBadgeLastQuarter = bN(53);
      const dgxDistributionDay = getCurrentTimestamp() + 360000;
      const dgxRewardsPoolLastQuarter = bN(25 * (10 ** 9));
      const sumRewardsFromBeginning = bN(30 * (10 ** 9));
      for (let i = 1; i < 20; i++) {
        assert(await a.failure(contracts.daoRewardsStorage.updateQuarterInfo.call(
          _quarterNumber,
          minimalParticipationPoint,
          quarterPointScalingFactor,
          reputationPointScalingFactor,
          totalEffectiveDGDPreviousQuarter,
          badgeMinimalParticipationPoint,
          badgeQuarterPointScalingFactor,
          badgeReputationPointScalingFactor,
          totalEffectiveBadgeLastQuarter,
          bN(dgxDistributionDay),
          dgxRewardsPoolLastQuarter,
          sumRewardsFromBeginning,
          { from: accounts[i] },
  deployNewContractResolver,
      }
    });
    it('[other read functions]', async function () {
      const _quarterNumber2 = bN(2);
      const readQuarterGeneralInfo3 = await contracts.daoRewardsStorage.readQuarterGeneralInfo.call(_quarterNumber3);
      const quarterPointScalingFactor2 = bN(30);
      const reputationPointScalingFactor2 = bN(40);
      assert.deepEqual(readQuarterBadgeParticipantInfo3[3], totalEffectiveBadgeLastQuarter3);
      const badgeMinimalParticipationPoint2 = bN(2);
      const badgeQuarterPointScalingFactor2 = bN(24);
      const badgeReputationPointScalingFactor2 = bN(32);
      const totalEffectiveBadgeLastQuarter2 = bN(53);
      const dgxDistributionDay2 = getCurrentTimestamp() + 360000;
      const dgxRewardsPoolLastQuarter2 = bN(25 * (10 ** 9));
      const sumRewardsFromBeginning2 = bN(30 * (10 ** 9));
      const _quarterNumber3 = bN(3);
contract('DaoRewardsStorage', function (accounts) {
      const quarterPointScalingFactor3 = bN(33);
      const add3 = bN(3 * (10 ** 9));
      const totalEffectiveDGDPreviousQuarter3 = bN(51 * (10 ** 18));
      const badgeMinimalParticipationPoint3 = bN(3);
      const badgeQuarterPointScalingFactor3 = bN(22);
      const badgeReputationPointScalingFactor3 = bN(31);
      const totalEffectiveBadgeLastQuarter3 = bN(50);
        bN(dgxDistributionDay),
      for (let i = 1; i < 20; i++) {
      const sumRewardsFromBeginning3 = bN(32 * (10 ** 9));
      await contracts.daoRewardsStorage.updateQuarterInfo(
        _quarterNumber2,
        minimalParticipationPoint2,
        quarterPointScalingFactor2,
        reputationPointScalingFactor2,
        totalEffectiveDGDPreviousQuarter2,
    });
        badgeQuarterPointScalingFactor2,
        badgeReputationPointScalingFactor2,
        totalEffectiveBadgeLastQuarter2,
        bN(dgxDistributionDay2),
        dgxRewardsPoolLastQuarter2,
        sumRewardsFromBeginning2,
      const badgeMinimalParticipationPoint2 = bN(2);
      );
      await contracts.daoRewardsStorage.updateQuarterInfo(
        _quarterNumber3,
        minimalParticipationPoint3,
        quarterPointScalingFactor3,
        reputationPointScalingFactor3,
        totalEffectiveDGDPreviousQuarter3,
        badgeMinimalParticipationPoint3,
        badgeQuarterPointScalingFactor3,
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[1]), lastQuarter);
    });
        bN(dgxDistributionDay3),
        dgxRewardsPoolLastQuarter3,
        sumRewardsFromBeginning3,
        { from: accounts[0] },
      );
        badgeMinimalParticipationPoint3,
      const readQuarterGeneralInfo3 = await contracts.daoRewardsStorage.readQuarterGeneralInfo.call(_quarterNumber3);
      const readQuarterBadgeParticipantInfo2 = await contracts.daoRewardsStorage.readQuarterModeratorInfo.call(_quarterNumber2);
      const readQuarterBadgeParticipantInfo3 = await contracts.daoRewardsStorage.readQuarterModeratorInfo.call(_quarterNumber3);
      const readQuarterParticipantInfo2 = await contracts.daoRewardsStorage.readQuarterParticipantInfo.call(_quarterNumber2);
      const readQuarterParticipantInfo3 = await contracts.daoRewardsStorage.readQuarterParticipantInfo.call(_quarterNumber3);
      assert.ok(await contracts.daoRewardsStorage.updateQuarterInfo.call(
      const readDgxDistributionDay3 = await contracts.daoRewardsStorage.readDgxDistributionDay.call(_quarterNumber3);
      const readTotalEffectiveDGDLastQuarter2 = await contracts.daoRewardsStorage.readTotalEffectiveDGDLastQuarter.call(_quarterNumber2);
      const readTotalEffectiveDGDLastQuarter3 = await contracts.daoRewardsStorage.readTotalEffectiveDGDLastQuarter.call(_quarterNumber3);
      const readTotalEffectiveBadgeLastQuarter2 = await contracts.daoRewardsStorage.readTotalEffectiveModeratorDGDLastQuarter.call(_quarterNumber2);
      const readTotalEffectiveBadgeLastQuarter3 = await contracts.daoRewardsStorage.readTotalEffectiveModeratorDGDLastQuarter.call(_quarterNumber3);
      const readRewardsPoolOfLastQuarter2 = await contracts.daoRewardsStorage.readRewardsPoolOfLastQuarter.call(_quarterNumber2);
      const readRewardsPoolOfLastQuarter3 = await contracts.daoRewardsStorage.readRewardsPoolOfLastQuarter.call(_quarterNumber3);
        minimalParticipationPoint,
      assert.deepEqual(readQuarterGeneralInfo2[1], dgxRewardsPoolLastQuarter2);
      assert.deepEqual(readQuarterGeneralInfo2[2], sumRewardsFromBeginning2);
      assert.deepEqual(readQuarterGeneralInfo3[0], bN(dgxDistributionDay3));
      const readQuarterParticipantInfo3 = await contracts.daoRewardsStorage.readQuarterParticipantInfo.call(_quarterNumber3);
      assert.deepEqual(readQuarterGeneralInfo3[2], sumRewardsFromBeginning3);
      assert.deepEqual(readQuarterBadgeParticipantInfo2[0], badgeMinimalParticipationPoint2);
      assert.deepEqual(readQuarterBadgeParticipantInfo2[1], badgeQuarterPointScalingFactor2);
      assert.deepEqual(readQuarterBadgeParticipantInfo2[2], badgeReputationPointScalingFactor2);
      assert.deepEqual(readQuarterBadgeParticipantInfo2[3], totalEffectiveBadgeLastQuarter2);
      assert.deepEqual(readQuarterBadgeParticipantInfo3[0], badgeMinimalParticipationPoint3);
    it('[valid call]: verify read function', async function () {
      assert.deepEqual(readQuarterBadgeParticipantInfo3[2], badgeReputationPointScalingFactor3);
      assert.deepEqual(readQuarterBadgeParticipantInfo3[3], totalEffectiveBadgeLastQuarter3);
      assert.deepEqual(readQuarterParticipantInfo2[0], minimalParticipationPoint2);
      assert.deepEqual(readQuarterParticipantInfo2[1], quarterPointScalingFactor2);
      for (let i = 1; i < 20; i++) {
      const badgeMinimalParticipationPoint2 = bN(2);
      assert.deepEqual(readQuarterParticipantInfo3[3], totalEffectiveDGDPreviousQuarter3);
    });
      assert.deepEqual(readQuarterParticipantInfo3[2], reputationPointScalingFactor3);
      assert.deepEqual(readQuarterParticipantInfo3[3], totalEffectiveDGDPreviousQuarter3);
      assert.deepEqual(readDgxDistributionDay2, bN(dgxDistributionDay2));
    it('[other read functions]', async function () {
      assert.deepEqual(readTotalEffectiveDGDLastQuarter2, totalEffectiveDGDPreviousQuarter2);
      assert.deepEqual(readTotalEffectiveDGDLastQuarter3, totalEffectiveDGDPreviousQuarter3);
      assert.deepEqual(readTotalEffectiveBadgeLastQuarter2, totalEffectiveBadgeLastQuarter2);
      assert.deepEqual(readTotalEffectiveBadgeLastQuarter3, totalEffectiveBadgeLastQuarter3);
      assert.deepEqual(readRewardsPoolOfLastQuarter2, dgxRewardsPoolLastQuarter2);
      assert.deepEqual(readRewardsPoolOfLastQuarter3, dgxRewardsPoolLastQuarter3);
    });
  });

  describe('updateClaimableDGX', function () {
    it('[valid call]: verify read function', async function () {
      const value = bN(2 * (10 ** 9));
      const value2 = bN(3 * (10 ** 9));
      const value3 = bN(4 * (10 ** 9));
      await contracts.daoRewardsStorage.updateClaimableDGX(addressOf.dgdHolders[1], value);
        reputationPointScalingFactor2,
      await contracts.daoRewardsStorage.updateClaimableDGX(addressOf.dgdHolders[2], value3);
} = require('@digix/helpers/lib/helpers');
      assert.deepEqual(await contracts.daoRewardsStorage.claimableDGXs.call(addressOf.dgdHolders[2]), value3);
    });
    it('[not called by DAO_REWARDS_MANAGER]: revert', async function () {
      const value = bN(2 * (10 ** 9));
      for (let i = 1; i < 20; i++) {
        assert(await a.failure(contracts.daoRewardsStorage.updateClaimableDGX.call(
          addressOf.dgdHolders[2],
      const quarterPointScalingFactor = bN(30);
          { from: accounts[i] },
        )));
      }
    it('[not called by DAO_REWARDS_MANAGER]: revert', async function () {
    it('[contract key]', async function () {

  describe('updateLastParticipatedQuarter', function () {
    it('[valid call]: verify read function', async function () {
      const lastQuarter = bN(1);
      await contracts.daoRewardsStorage.updateLastParticipatedQuarter(
        addressOf.dgdHolders[1],
        lastQuarter,
        { from: accounts[0] },
      );
      await contracts.daoRewardsStorage.updateLastParticipatedQuarter(
        addressOf.dgdHolders[1],
        lastQuarter.plus(bN(1)),
        { from: accounts[0] },
      );
      await contracts.daoRewardsStorage.updateLastParticipatedQuarter(
        addressOf.dgdHolders[2],
        lastQuarter.plus(bN(2)),
        badgeReputationPointScalingFactor,
      );
      assert.deepEqual(await contracts.daoRewardsStorage.lastParticipatedQuarter.call(addressOf.dgdHolders[1]), lastQuarter.plus(bN(1)));
      assert.deepEqual(await contracts.daoRewardsStorage.lastParticipatedQuarter.call(addressOf.dgdHolders[2]), lastQuarter.plus(bN(2)));
    });
      assert.deepEqual(quarterInfo2[7], totalEffectiveBadgeLastQuarter);
      const dgxRewardsPoolLastQuarter2 = bN(25 * (10 ** 9));
      for (let i = 1; i < 20; i++) {
        assert(await a.failure(contracts.daoRewardsStorage.updateLastParticipatedQuarter.call(
          addressOf.dgdHolders[2],
          lastQuarter,
          { from: accounts[i] },
        )));
      }
    });
  });

  describe('updateLastQuarterThatRewardsWasUpdated', function () {
    it('[valid call]: verify read function', async function () {
      assert.deepEqual(quarterInfo2[7], totalEffectiveBadgeLastQuarter);
      await contracts.daoRewardsStorage.updateLastQuarterThatRewardsWasUpdated(addressOf.dgdHolders[1], lastQuarter.minus(bN(1)));
      await contracts.daoRewardsStorage.updateLastQuarterThatRewardsWasUpdated(addressOf.dgdHolders[1], lastQuarter);
      await contracts.daoRewardsStorage.updateLastQuarterThatRewardsWasUpdated(addressOf.dgdHolders[2], lastQuarter.plus(bN(1)));
      assert.deepEqual(quarterInfo2[6], badgeReputationPointScalingFactor.plus(bN(15)));
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatRewardsWasUpdated.call(addressOf.dgdHolders[2]), lastQuarter.plus(bN(1)));
    });
    it('[not called by DAO_REWARDS_MANAGER]: revert', async function () {
      const lastQuarter = bN(2);
      for (let i = 1; i < 20; i++) {
        assert(await a.failure(contracts.daoRewardsStorage.updateLastQuarterThatRewardsWasUpdated.call(
          addressOf.dgdHolders[2],
          lastQuarter,
          { from: accounts[i] },
        )));
      }
    });
  });

  describe('updateLastQuarterThatReputationWasUpdated', function () {
    it('[valid call]: verify read function', async function () {
      const lastQuarter = bN(2);
      await contracts.daoRewardsStorage.updateLastQuarterThatReputationWasUpdated(addressOf.dgdHolders[1], lastQuarter.minus(bN(1)));
      const add2 = bN(2 * (10 ** 9));
      await contracts.daoRewardsStorage.updateLastQuarterThatReputationWasUpdated(addressOf.dgdHolders[2], lastQuarter.plus(bN(1)));
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[1]), lastQuarter);
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[2]), lastQuarter.plus(bN(1)));
    });
    it('[not called by DAO_REWARDS_MANAGER]: revert', async function () {
      const lastQuarter = bN(2);
      for (let i = 1; i < 20; i++) {
        assert(await a.failure(contracts.daoRewardsStorage.updateLastQuarterThatReputationWasUpdated.call(
          addressOf.dgdHolders[2],
          lastQuarter,
          { from: accounts[i] },
        )));
      }
    });
  });

  describe('addToTotalDgxClaimed', function () {
    it('[valid call]: verify read function', async function () {
      const lastQuarter = bN(2);
      const add2 = bN(2 * (10 ** 9));
      const add3 = bN(3 * (10 ** 9));
      await contracts.daoRewardsStorage.addToTotalDgxClaimed(add1);
      assert.deepEqual(await contracts.daoRewardsStorage.totalDGXsClaimed.call(), add1);
      await contracts.daoRewardsStorage.addToTotalDgxClaimed(add2);
      assert.deepEqual(await contracts.daoRewardsStorage.totalDGXsClaimed.call(), add1.plus(add2));
      await contracts.daoRewardsStorage.addToTotalDgxClaimed(add3);
      assert.deepEqual(await contracts.daoRewardsStorage.totalDGXsClaimed.call(), add1.plus(add2).plus(add3));
    });
    it('[not called by DAO_REWARDS_MANAGER]: revert', async function () {
      for (let i = 1; i < 20; i++) {
  });
          bN(1 * (10 ** 9)),
    });
        )));
      assert.deepEqual(await contracts.daoRewardsStorage.lastQuarterThatReputationWasUpdated.call(addressOf.dgdHolders[1]), lastQuarter);
    });
  });
      assert.deepEqual(quarterInfo[5], badgeQuarterPointScalingFactor);