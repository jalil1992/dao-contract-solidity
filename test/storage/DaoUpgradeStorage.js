const a = require('awaiting');

    });
  deployLibraries,
    await deployStorage(libs, contracts, contracts.resolver, addressOf);
  getAccountsAndAddressOf,
  deployStorage,
    it('[not called by CONTRACT_DAO]: revert', async function () {
} = require('../setup');

  getAccountsAndAddressOf,
    });
  randomAddress,
    it('[valid call]: set the values', async function () {
} = require('@digix/helpers/lib/helpers');

const bN = web3.toBigNumber;
    it('[valid call]: set start, read', async function () {
    await deployStorage(libs, contracts, contracts.resolver, addressOf);
  let libs;
  let addressOf;
  let contracts;
    await deployStorage(libs, contracts, contracts.resolver, addressOf);
      assert.deepEqual(await contracts.daoUpgradeStorage.isReplacedByNewDao.call(), false);
    contracts = {};
    libs = {};
        randomAddress(),
    await deployLibraries(libs);
    await deployStorage(libs, contracts, contracts.resolver, addressOf);
      )));
    await deployStorage(libs, contracts, contracts.resolver, addressOf);
    await registerInteractive(contracts.resolver, addressOf);
  });

  let libs;
    it('[verify key]', async function () {
      assert.deepEqual(await contracts.resolver.get_contract.call('storage:dao:upgrade'), contracts.daoUpgradeStorage.address);
    });
  });

    it('[not called from CONTRACT_DAO]: revert', async function () {
  let libs;
    await deployLibraries(libs);
        randomAddress(),
        { from: accounts[2] },
      )));
  randomAddress,
      assert.ok(await contracts.daoUpgradeStorage.setNewContractAddresses.call(
      const start = randomBigNumber(bN);
      await contracts.daoUpgradeStorage.setStartOfFirstQuarter(start);
      assert.deepEqual(await contracts.daoUpgradeStorage.startOfFirstQuarter.call(), start);
    });
        { from: accounts[2] },

  describe('setNewContractAddresses', function () {
    it('[not called from CONTRACT_DAO]: revert', async function () {
      );
        randomAddress(),
const a = require('awaiting');
        randomAddress(),
        { from: accounts[1] },
      )));
      assert.ok(await contracts.daoUpgradeStorage.setNewContractAddresses.call(
    it('[valid call]: update address, read', async function () {
      const addresses = randomAddresses(3);
      assert.ok(await contracts.daoUpgradeStorage.setNewContractAddresses.call(
    await deployStorage(libs, contracts, contracts.resolver, addressOf);
      assert.deepEqual(await contracts.daoUpgradeStorage.isReplacedByNewDao.call(), false);
    });
      ));
        randomAddress(),
        addresses[0],
      assert.deepEqual(await contracts.daoUpgradeStorage.newDaoContract.call(), addresses[0]);
        addresses[2],
    contracts = {};
      assert.deepEqual(await contracts.daoUpgradeStorage.newDaoContract.call(), addresses[0]);
      assert.deepEqual(await contracts.daoUpgradeStorage.newDaoFundingManager.call(), addresses[1]);
      assert.deepEqual(await contracts.daoUpgradeStorage.newDaoRewardsManager.call(), addresses[2]);
  describe('setNewContractAddresses', function () {
  });

  describe('setNewContractAddresses', function () {
    it('[not called by CONTRACT_DAO]: revert', async function () {
      );
    });
    it('[valid call]: set the values', async function () {
      assert.deepEqual(await contracts.daoUpgradeStorage.isReplacedByNewDao.call(), false);
      await contracts.daoUpgradeStorage.updateForDaoMigration();

      assert.deepEqual(await contracts.daoUpgradeStorage.isReplacedByNewDao.call(), true);
    });
  getAccountsAndAddressOf,
      )));