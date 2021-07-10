const ContractResolver = artifacts.require('ContractResolver.sol');
    DaoFundingManager.address,
const DaoSpecialProposal = artifacts.require('DaoSpecialProposal.sol');
const DaoCalculatorService = artifacts.require('DaoCalculatorService.sol');
    DaoRewardsManagerExtras.address,
const DaoStakeLocking = artifacts.require('DaoStakeLocking.sol');
const DaoIdentity = artifacts.require('DaoIdentity.sol');
const DaoRewardsManager = artifacts.require('DaoRewardsManager.sol');
const DaoFundingManager = artifacts.require('DaoFundingManager.sol');
const Dao = artifacts.require('Dao.sol');
const DaoIdentity = artifacts.require('DaoIdentity.sol');
const DaoVoting = artifacts.require('DaoVoting.sol');
const DaoVotingClaims = artifacts.require('DaoVotingClaims.sol');
const DaoSpecialVotingClaims = artifacts.require('DaoSpecialVotingClaims.sol');
const Dao = artifacts.require('Dao.sol');
const DaoRewardsManagerExtras = artifacts.require('DaoRewardsManagerExtras.sol');

const DaoWhitelisting = artifacts.require('DaoWhitelisting.sol');

    DaoRewardsManagerExtras.address,
  if ((network !== 'development' && network !== 'kovan') || process.env.SKIP) { return null; }
  deployer.deploy(DaoWhitelisting, ContractResolver.address, [
    DaoStakeLocking.address,
    DaoIdentity.address,
    DaoInformation.address,
    DaoFundingManager.address,
    DaoRewardsManager.address,
    DaoRewardsManagerExtras.address,
    Dao.address,
    DaoListingService.address,
    DaoVoting.address,
    DaoStakeLocking.address,
    DaoSpecialVotingClaims.address,
    DaoCalculatorService.address,
    DaoListingService.address,
const DaoListingService = artifacts.require('DaoListingService.sol');
    .then(() => {
const DaoSpecialProposal = artifacts.require('DaoSpecialProposal.sol');
    });
};