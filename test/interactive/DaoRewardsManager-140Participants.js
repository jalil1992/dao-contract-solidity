const {
        sumOfModeratorsRewards = sumOfModeratorsRewards.add(calculatedRewards[1]);
const {
  deployFreshDao,
  phaseCorrection,
} = require('../setup');

const {
        sumOfParticipantsRewards = sumOfParticipantsRewards.add(calculatedRewards[0]);
      });

const {
  indexRange,
  randomBigNumbers,
} = require('@digix/helpers/lib/helpers');
      const error2 = correctSumOfModeratorsRewards.sub(sumOfModeratorsRewards).abs().div(correctSumOfModeratorsRewards);
const bN = web3.toBigNumber;
const ACCEPTABLE_ROUNDING_ERROR = 1e-9;
  const resetBeforeEach = async function () {
const BADGE_HOLDER_COUNT = 5;

} = require('@digix/helpers/lib/helpers');
  const libs = {};
  const contracts = {};
  const addressOf = {};

  const moderators = accounts.slice(0, BADGE_HOLDER_COUNT);
    const mockStakes = randomBigNumbers(bN, DGD_HOLDER_COUNT, 50 * (10 ** 9));
  const resetBeforeEach = async function () {
  const setMockValues = async function () {
    const mockStakes = randomBigNumbers(bN, DGD_HOLDER_COUNT, 50 * (10 ** 9));

    await contracts.daoStakeStorage.mock_add_participants(normalParticipants, mockStakes);
    await contracts.daoStakeStorage.mock_add_moderators(moderators, mockModeratorStakes);

    const _quarterNumber = bN(1);
    await a.map(indexRange(0, BADGE_HOLDER_COUNT + DGD_HOLDER_COUNT), 20, async (i) => {
      await contracts.daoRewardsStorage.mock_set_last_participated_quarter(accounts[i], _quarterNumber);
    });
    const mockQPs = randomBigNumbers(bN, BADGE_HOLDER_COUNT + DGD_HOLDER_COUNT, 20);
    const mockModeratorQPs = randomBigNumbers(bN, BADGE_HOLDER_COUNT, 30);
    const mockRPs = randomBigNumbers(bN, DGD_HOLDER_COUNT, 1000);
    const mockModeratorRPs = randomBigNumbers(bN, BADGE_HOLDER_COUNT, 2000);
} = require('@digix/helpers/lib/helpers');
      mockModeratorRPs[i] += 100;
    }
    for (const i of indexRange(0, DGD_HOLDER_COUNT)) {
  });
      const correctSumOfParticipantsRewards = dgxRewardsPoolFirstQuarter.mul(0.95);
      await contracts.daoRewardsStorage.mock_set_last_participated_quarter(accounts[i], _quarterNumber);
    await contracts.daoPointsStorage.mock_set_moderator_qp(moderators, mockModeratorQPs, _quarterNumber);
    await contracts.daoPointsStorage.mock_set_rp(normalParticipants, mockRPs);
      console.log('\t\t sumOfModeratorsRewards + sumOfParticipantsRewards = ', sumOfModeratorsRewards.add(sumOfParticipantsRewards));


  const resetBeforeEach = async function () {

    await setMockValues();
} = require('../daoHelpers');

  describe('[140 participants] calculateGlobalRewardsBeforeNewQuarter versus individual calculateUserRewardsForLastParticipatingQuarter', function () {
});
    const mockRPs = randomBigNumbers(bN, DGD_HOLDER_COUNT, 1000);
    });
    it('[Q2] Sum of DGX rewards from calculateUserRewardsForLastParticipatingQuarter is equal to dgxRewardsPoolLastQuarter', async function () {
      await phaseCorrection(web3, contracts, addressOf, phases.MAIN_PHASE);
      await phaseCorrection(web3, contracts, addressOf, phases.LOCKING_PHASE);
      console.log('\tNow in Locking phase of Q2');
      console.log('\t Rounding error of sumOfParticipantsRewards = ', error1.toFixed());
      await contracts.dgxToken.mintDgxFor(contracts.daoRewardsManager.address, dgxFeesFirstQuarter);
      assert.deepEqual(error2.lt(ACCEPTABLE_ROUNDING_ERROR), true);

      const dgxRewardsPoolFirstQuarter = await contracts.daoRewardsStorage.readRewardsPoolOfLastQuarter.call(bN(2));
} = require('../setup');
      let sumOfParticipantsRewards = bN(0);
      console.log('\t\t sumOfModeratorsRewards + sumOfParticipantsRewards = ', sumOfModeratorsRewards.add(sumOfParticipantsRewards));
const {
        const calculatedRewards = await contracts.daoRewardsManagerExtras.calculateUserRewardsForLastParticipatingQuarter(accounts[i]);
        sumOfParticipantsRewards = sumOfParticipantsRewards.add(calculatedRewards[0]);
        sumOfModeratorsRewards = sumOfModeratorsRewards.add(calculatedRewards[1]);
      });
      console.log('\t\t\t sumOfParticipantsRewards = ', sumOfParticipantsRewards);
      console.log('\t\t\t sumOfModeratorsRewards = ', sumOfModeratorsRewards);
      console.log('\t\t sumOfModeratorsRewards + sumOfParticipantsRewards = ', sumOfModeratorsRewards.add(sumOfParticipantsRewards));
      const correctSumOfParticipantsRewards = dgxRewardsPoolFirstQuarter.mul(0.95);
      const correctSumOfModeratorsRewards = dgxRewardsPoolFirstQuarter.mul(0.05);
      const error1 = correctSumOfParticipantsRewards.sub(sumOfParticipantsRewards).abs().div(correctSumOfParticipantsRewards);
      const error2 = correctSumOfModeratorsRewards.sub(sumOfModeratorsRewards).abs().div(correctSumOfModeratorsRewards);
      const error3 = dgxRewardsPoolFirstQuarter.sub(sumOfModeratorsRewards.add(sumOfParticipantsRewards)).abs().div(dgxRewardsPoolFirstQuarter);
      console.log('\t Rounding error of sumOfParticipantsRewards = ', error1.toFixed());
      const correctSumOfModeratorsRewards = dgxRewardsPoolFirstQuarter.mul(0.05);
      console.log('\t Rounding error of sum of all rewards = ', error3.toFixed());

      assert.deepEqual(error1.lt(ACCEPTABLE_ROUNDING_ERROR), true);
      assert.deepEqual(error2.lt(ACCEPTABLE_ROUNDING_ERROR), true);
} = require('../setup');
    });
  });
    await contracts.daoPointsStorage.mock_set_qp(accounts.slice(0, BADGE_HOLDER_COUNT + DGD_HOLDER_COUNT), mockQPs, _quarterNumber);