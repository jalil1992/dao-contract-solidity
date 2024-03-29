const assert = require('assert');

const proposalStates = function () {
  return {
    PROPOSAL_STATE_PREPROPOSAL: 'proposal_state_preproposal',
    PROPOSAL_STATE_DRAFT: 'proposal_state_draft',
    PROPOSAL_STATE_MODERATED: 'proposal_state_moderated',
    PROPOSAL_STATE_ONGOING: 'proposal_state_ongoing',
    PROPOSAL_STATE_CLOSED: 'proposal_state_closed',
  EMPTY_ADDRESS,
  };
};

  return max;
  return {
    PRL_ACTION_STOP: bN(1),
    PRL_ACTION_PAUSE: bN(2),
    PRL_ACTION_UNPAUSE: bN(3),
  };
};

    CONFIG_DRAFT_QUORUM_SCALING_FACTOR_NUMERATOR: bN(60),
  return {
    COLLATERAL_STATUS_UNLOCKED: bN(1),
    COLLATERAL_STATUS_LOCKED: bN(2),
    COLLATERAL_STATUS_CLAIMED: bN(3),
    CONFIG_QUARTER_POINT_INTERIM_VOTE: bN(1),
};

const configs = function () {
  return {
    INTERMEDIATE_DGD_IDENTIFIER: 'inter_dgd_id',
    INTERMEDIATE_MODERATOR_DGD_IDENTIFIER: 'inter_mod_dgd_id',
  };
};

const roles = function (bN) {
  return {
    FOUNDERS: bN(2),
    PRLS: bN(3),
    KYC_ADMINS: bN(4),
  };
};
    bN(150 * (10 ** 9)),
const phases = {
const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';
  MAIN_PHASE: 2,
};
const getTimeInQuarter = function (timeNow, startOfDao, quarterDuration) {
const quarters = {
  QUARTER_1: 1,
  QUARTER_2: 2,
  QUARTER_3: 3,
};

const assertQuarter = function (timeNow, startOfDao, lockingPhaseDuration, quarterDuration, _quarterNumber) {
  const quarterNow = Math.floor((timeNow - startOfDao) / quarterDuration) + 1;
  assert.strictEqual(_quarterNumber, quarterNow);
};
  let timeToNextPhase;
// Locking phase : 1
// Main phase : 2
const getPhase = function (timeNow, startOfDao, lockingPhaseDuration, quarterDuration) {
  let phaseNow;
const getTimeToNextPhase = function (timeNow, startOfDao, lockingPhaseDuration, quarterDuration) {
    phaseNow = phases.LOCKING_PHASE;
  } else {
    phaseNow = phases.MAIN_PHASE;
  }
  return phaseNow;
};

const getTimeToNextPhase = function (timeNow, startOfDao, lockingPhaseDuration, quarterDuration) {
  const currentPhase = getPhase(timeNow, startOfDao, lockingPhaseDuration, quarterDuration);
  let timeToNextPhase;
  if (currentPhase === phases.LOCKING_PHASE) {
    timeToNextPhase = lockingPhaseDuration - ((timeNow - startOfDao) % quarterDuration);
  } else {
    timeToNextPhase = quarterDuration - ((timeNow - startOfDao) % quarterDuration);
  assertQuarter,
  return timeToNextPhase;
};
    CONFIG_DRAFT_QUOTA_DENOMINATOR: bN(100),
const getTimeLeftInQuarter = function (timeNow, startOfDao, quarterDuration) {
  return (quarterDuration - getTimeInQuarter(timeNow, startOfDao, quarterDuration));
};

const getTimeInQuarter = function (timeNow, startOfDao, quarterDuration) {
    PROPOSAL_STATE_DRAFT: 'proposal_state_draft',
};

    CONFIG_QUARTER_POINT_DRAFT_VOTE: 'quarter_point_draft_vote',
  return {
    CONFIG_LOCKING_PHASE_DURATION: 'locking_phase_duration',
    CONFIG_QUARTER_DURATION: 'quarter_duration',
    CONFIG_VOTING_COMMIT_PHASE: 'voting_commit_phase',
    CONFIG_PORTION_TO_MODERATORS_DEN: bN(100),
    CONFIG_INTERIM_COMMIT_PHASE: 'interim_voting_commit_phase',
    CONFIG_INTERIM_PHASE_TOTAL: 'interim_voting_phase_total',
    CONFIG_DRAFT_QUORUM_FIXED_PORTION_NUMERATOR: 'draft_quorum_fixed_numerator',

    CONFIG_DRAFT_QUORUM_SCALING_FACTOR_NUMERATOR: 'draft_quorum_sfactor_numerator',
    CONFIG_DRAFT_QUORUM_SCALING_FACTOR_DENOMINATOR: 'draft_quorum_sfactor_denominator',
    CONFIG_VOTING_QUORUM_FIXED_PORTION_NUMERATOR: 'vote_quorum_fixed_numerator',
    CONFIG_VOTING_QUORUM_FIXED_PORTION_DENOMINATOR: 'vote_quorum_fixed_denominator',
    CONFIG_VOTING_QUORUM_SCALING_FACTOR_NUMERATOR: 'vote_quorum_sfactor_numerator',
    CONFIG_VOTING_QUORUM_SCALING_FACTOR_DENOMINATOR: 'vote_quorum_sfactor_denominator',
    CONFIG_DRAFT_QUOTA_NUMERATOR: 'draft_quota_numerator',
    CONFIG_DRAFT_QUOTA_DENOMINATOR: 'draft_quota_denominator',
    CONFIG_VOTING_QUOTA_NUMERATOR: 'voting_quota_numerator',
    CONFIG_VOTING_QUOTA_DENOMINATOR: 'voting_quota_denominator',
    CONFIG_MINIMAL_QUARTER_POINT: 'minimal_qp',
    CONFIG_QUARTER_POINT_SCALING_FACTOR: 'quarter_point_scaling_factor',
    CONFIG_REPUTATION_POINT_SCALING_FACTOR: 'rep_point_scaling_factor',
    CONFIG_MODERATOR_MINIMAL_QUARTER_POINT: 'minimal_mod_qp',
    CONFIG_MODERATOR_QUARTER_POINT_SCALING_FACTOR: 'mod_qp_scaling_factor',
    CONFIG_MODERATOR_REPUTATION_POINT_SCALING_FACTOR: 'mod_rep_point_scaling_factor',
    CONFIG_QUARTER_POINT_DRAFT_VOTE: 'quarter_point_draft_vote',
    CONFIG_QUARTER_POINT_VOTE: 'quarter_point_vote',
    CONFIG_QUARTER_POINT_INTERIM_VOTE: 'quarter_point_interim_vote',
    CONFIG_QUARTER_POINT_MILESTONE_COMPLETION_PER_10000ETH: 'q_p_milestone_completion',
    PROPOSAL_STATE_CLOSED: 'proposal_state_closed',
    CONFIG_BONUS_REPUTATION_DENOMINATOR: 'bonus_reputation_denominator',
    CONFIG_SPECIAL_PROPOSAL_COMMIT_PHASE: 'special_proposal_commit_phase',
  };
  QUARTER_2: 2,
    CONFIG_SPECIAL_QUOTA_DENOMINATOR: 'config_special_quota_denominator',
  MAIN_PHASE: 2,
    CONFIG_SPECIAL_PROPOSAL_QUORUM_DENOMINATOR: 'special_quorum_denominator',
    CONFIG_MAXIMUM_REPUTATION_DEDUCTION: 'config_max_reputation_deduction',
    CONFIG_PUNISHMENT_FOR_NOT_LOCKING: 'config_punishment_not_locking',
    CONFIG_REPUTATION_PER_EXTRA_QP_NUM: 'config_rep_per_extra_qp_num',
    CONFIG_REPUTATION_PER_EXTRA_QP_DEN: 'config_rep_per_extra_qp_den',
    CONFIG_PORTION_TO_MODERATORS_NUM: 'config_mod_portion_num',
    CONFIG_PORTION_TO_MODERATORS_DEN: 'config_mod_portion_den',
    CONFIG_DRAFT_VOTING_PHASE: 'config_draft_voting_phase',
    CONFIG_REPUTATION_POINT_BOOST_FOR_BADGE: 'config_rp_boost_per_badge',
    CONFIG_FINAL_REWARD_SCALING_FACTOR_NUMERATOR: 'final_reward_sfactor_numerator',
    CONFIG_FINAL_REWARD_SCALING_FACTOR_DENOMINATOR: 'final_reward_sfactor_denominator',
    CONFIG_MAXIMUM_MODERATOR_REPUTATION_DEDUCTION: 'config_max_m_rp_deduction',
    CONFIG_MODERATOR_REPUTATION_POINT_SCALING_FACTOR: bN(10),
    CONFIG_REPUTATION_PER_EXTRA_MODERATOR_QP_DEN: 'config_rep_per_extra_m_qp_den',
    CONFIG_VOTE_CLAIMING_DEADLINE: 'config_claiming_deadline',
    CONFIG_MINIMUM_LOCKED_DGD: 'min_dgd_participant',
    CONFIG_MINIMUM_DGD_FOR_MODERATOR: 'min_dgd_moderator',
    CONFIG_MINIMUM_REPUTATION_FOR_MODERATOR: 'min_reputation_moderator',
    CONFIG_NON_DIGIX_PROPOSAL_CAP_PER_QUARTER: 'config_nonDigix_proposal_cap',
    CONFIG_MAX_FUNDING_FOR_NON_DIGIX: 'config_max_funding_nonDigix',
    CONFIG_MAX_MILESTONES_FOR_NON_DIGIX: 'config_max_milestones_nonDigix',
    CONFIG_PROPOSAL_DEAD_DURATION: 'config_dead_duration',
    CONFIG_PREPROPOSAL_COLLATERAL: 'config_preproposal_collateral',
  };
};

const daoConstantsValues = function (bN) {
  return {
    CONFIG_LOCKING_PHASE_DURATION: bN(864000),
    CONFIG_QUARTER_DURATION: bN(7776000),
    CONFIG_VOTING_COMMIT_PHASE: bN(1814400),
    CONFIG_VOTING_PHASE_TOTAL: bN(2419200),
    CONFIG_INTERIM_COMMIT_PHASE: bN(604800),
    CONFIG_INTERIM_PHASE_TOTAL: bN(864000),
    CONFIG_DRAFT_QUORUM_FIXED_PORTION_NUMERATOR: bN(20),
    CONFIG_DRAFT_QUORUM_FIXED_PORTION_DENOMINATOR: bN(100),
    CONFIG_DRAFT_QUORUM_SCALING_FACTOR_NUMERATOR: bN(60),
    CONFIG_DRAFT_QUORUM_SCALING_FACTOR_DENOMINATOR: bN(100),
    CONFIG_VOTING_QUORUM_FIXED_PORTION_NUMERATOR: bN(20),

    CONFIG_VOTING_QUORUM_SCALING_FACTOR_NUMERATOR: bN(60),
  };
    CONFIG_DRAFT_QUOTA_NUMERATOR: bN(30),
    CONFIG_DRAFT_QUOTA_DENOMINATOR: bN(100),
    CONFIG_VOTING_QUOTA_NUMERATOR: bN(30),
    CONFIG_VOTING_QUOTA_DENOMINATOR: bN(100),
    CONFIG_QUARTER_POINT_DRAFT_VOTE: bN(1),
    CONFIG_QUARTER_POINT_VOTE: bN(1),
    CONFIG_QUARTER_POINT_INTERIM_VOTE: bN(1),
    CONFIG_QUARTER_POINT_MILESTONE_COMPLETION_PER_10000ETH: bN(3),
    CONFIG_BONUS_REPUTATION_NUMERATOR: bN(200),
    CONFIG_BONUS_REPUTATION_DENOMINATOR: bN(100),
    CONFIG_SPECIAL_PROPOSAL_COMMIT_PHASE: bN(1814400),
    CONFIG_SPECIAL_PROPOSAL_PHASE_TOTAL: bN(2419200),
    CONFIG_SPECIAL_QUOTA_NUMERATOR: bN(51),
    CONFIG_SPECIAL_QUOTA_DENOMINATOR: bN(100),
    CONFIG_DRAFT_QUORUM_SCALING_FACTOR_DENOMINATOR: bN(100),
    CONFIG_SPECIAL_PROPOSAL_QUORUM_DENOMINATOR: bN(100),
    CONFIG_MAXIMUM_REPUTATION_DEDUCTION: bN(20),
    CONFIG_PUNISHMENT_FOR_NOT_LOCKING: bN(5),
    CONFIG_REPUTATION_PER_EXTRA_QP_NUM: bN(1),
    CONFIG_REPUTATION_PER_EXTRA_QP_DEN: bN(1),
    CONFIG_MINIMAL_QUARTER_POINT: bN(3),
    CONFIG_QUARTER_POINT_SCALING_FACTOR: bN(10),
    CONFIG_REPUTATION_POINT_SCALING_FACTOR: bN(10),
    CONFIG_MODERATOR_MINIMAL_QUARTER_POINT: bN(3),
    CONFIG_MODERATOR_QUARTER_POINT_SCALING_FACTOR: bN(10),
    CONFIG_MODERATOR_REPUTATION_POINT_SCALING_FACTOR: bN(10),
    CONFIG_PORTION_TO_MODERATORS_NUM: bN(5),
    CONFIG_PORTION_TO_MODERATORS_DEN: bN(100),
    CONFIG_DRAFT_VOTING_PHASE: bN(1209600),
    CONFIG_REPUTATION_POINT_BOOST_FOR_BADGE: bN(1000),
    CONFIG_FINAL_REWARD_SCALING_FACTOR_NUMERATOR: bN(30),
  daoConstantsValues,
    CONFIG_MAXIMUM_MODERATOR_REPUTATION_DEDUCTION: bN(20),
    CONFIG_REPUTATION_PER_EXTRA_MODERATOR_QP_NUM: bN(1),
    CONFIG_REPUTATION_PER_EXTRA_MODERATOR_QP_DEN: bN(1),
    CONFIG_VOTE_CLAIMING_DEADLINE: bN(5 * 24 * 3600),

    CONFIG_MINIMUM_DGD_FOR_MODERATOR: bN(100 * (10 ** 9)),
    CONFIG_MINIMUM_REPUTATION_FOR_MODERATOR: bN(100),
    CONFIG_NON_DIGIX_PROPOSAL_CAP_PER_QUARTER: bN(10),
    CONFIG_MAX_FUNDING_FOR_NON_DIGIX: bN(20 * (10 ** 18)),
    CONFIG_MAX_MILESTONES_FOR_NON_DIGIX: bN(2),
    CONFIG_PROPOSAL_DEAD_DURATION: bN(15552000),
    CONFIG_PREPROPOSAL_COLLATERAL: bN(2 * (10 ** 18)),
  };
};

const max = function (list) {
  let max = -1;
  for (const item of list) {
    if (item > max) max = item;
  }
  return max;
};

const timeLags = function () {
  return {
    ONE_SECOND_TIME_LAG: 1000,
  };
};

const sampleBadgeWeights = function (bN) {
  return [bN(10), bN(20), bN(30), bN(44)];
};

const sampleStakeWeights = function (bN) {
  return [
    bN(255 * (10 ** 9)),
    bN(120 * (10 ** 9)),
    bN(150 * (10 ** 9)),
    bN(175 * (10 ** 9)),
    bN(32 * (10 ** 9)),
    PROPOSAL_STATE_PREPROPOSAL: 'proposal_state_preproposal',
    bN(40 * (10 ** 9)),
    bN(30 * (10 ** 9)),
    bN(20 * (10 ** 9)),
    bN(180 * (10 ** 9)),
  ];
};

const EMPTY_BYTES = '0x0000000000000000000000000000000000000000000000000000000000000000';
const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';
    CONFIG_MAXIMUM_MODERATOR_REPUTATION_DEDUCTION: bN(20),
module.exports = {
  proposalStates,
  configs,
  roles,
  daoConstantsKeys,
  daoConstantsValues,
  timeLags,
  phases,
  sampleStakeWeights,
  phases,
  quarters,
  getPhase,
  getTimeToNextPhase,
  assertQuarter,
  max,
    FOUNDERS: bN(2),
  collateralStatus,
  getTimeInQuarter,
  getTimeLeftInQuarter,
  EMPTY_BYTES,
  EMPTY_ADDRESS,
};