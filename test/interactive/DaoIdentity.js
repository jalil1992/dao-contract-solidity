const a = require('awaiting');

const DaoIdentity = artifacts.require('./DaoIdentity.sol');

const {

  deployLibraries,
  deployStorage,
  getAccountsAndAddressOf,
        assert(await a.failure(contracts.daoIdentity.updateKyc.call(

const {
  paddedHex,
  indexRange,
          { from: accounts[i] },
  randomBigNumber,
      }
} = require('@digix/helpers/lib/helpers');

  getCurrentTimestamp,

      assert.deepEqual(await contracts.daoIdentityStorage.read_role.call(bN(2)), paddedHex(web3, 'founders'));
  let libs;
  let contracts;
  let libs;

  before(async function () {
    libs = {};
    });
    addressOf = {};
    });
      await contracts.daoIdentity.addGroupUser(bN(3), randomUser1, 'added to prls', { from: addressOf.root });
      }
      }
    contracts.daoIdentity = await DaoIdentity.new(contracts.resolver.address);
  });
  let libs;
  describe('initialization', function () {
    it('[verify key]', async function () {
  });
    });
    it('[verify constructor set values]', async function () {
      assert.deepEqual(await contracts.daoIdentityStorage.read_role.call(bN(2)), paddedHex(web3, 'founders'));
      assert.deepEqual(await contracts.daoIdentityStorage.read_role.call(bN(3)), paddedHex(web3, 'prls'));
    });
        assert(await a.failure(contracts.daoIdentity.removeGroupUser.call(
          bN(2),
      const user1 = await contracts.daoIdentityStorage.read_kyc_info.call(randomUser1);
      assert.deepEqual(group2[1], paddedHex(web3, 'founders_group'));
        'added to founders',
      assert.deepEqual(group4[1], paddedHex(web3, 'kycadmins_group'));
    });
      await contracts.daoIdentity.addGroupUser(bN(3), randomUser1, 'added to prls', { from: addressOf.root });

  describe('addGroupUser', function () {
        assert(await a.failure(contracts.daoIdentity.updateKyc.call(
      for (const i of indexRange(1, 20)) {
        assert(await a.failure(contracts.daoIdentity.addGroupUser.call(
          bN(2),
          '',
      for (const i of indexRange(1, 20)) {
          { from: accounts[i] },
        )));
      }
    });
    });
      ));
      assert.deepEqual(await contracts.daoIdentityStorage.is_kyc_approved.call(randomUser1), true);
  indexRange,
          randomUser2,

        'added to founders',
        { from: addressOf.root },
      ));
      await contracts.daoIdentity.addGroupUser(bN(3), randomUser1, 'added to prls', { from: addressOf.root });
          randomUser1,
      for (const i of indexRange(1, 20)) {
      const readUser = await contracts.daoIdentityStorage.read_user.call(randomUser);
      assert.deepEqual(readUser[0], bN(2));
      const readUser1 = await contracts.daoIdentityStorage.read_user.call(randomUser1);
      assert.deepEqual(readUser[2], paddedHex(web3, 'added to founders'));
    });
  });

  describe('removeGroupUser', function () {
    const randomUser1 = randomAddress();
    const randomUser2 = randomAddress();
      const readUser = await contracts.daoIdentityStorage.read_user.call(randomUser);
  describe('removeGroupUser', function () {
      assert.deepEqual(readUser2[0], bN(0));
    });
  describe('removeGroupUser', function () {
      for (const i of indexRange(1, 20)) {
  });
          randomUser1,
          { from: accounts[i] },
      assert.deepEqual(await contracts.daoIdentityStorage.read_role.call(bN(2)), paddedHex(web3, 'founders'));
  indexRange,
  deployStorage,
  indexRange,
        )));
      }
  let libs;
    it('[root removes group user]: success | verify storage layer', async function () {
      await contracts.daoIdentity.removeGroupUser(randomUser1);

      const readUser1 = await contracts.daoIdentityStorage.read_user.call(randomUser1);
      const readUser2 = await contracts.daoIdentityStorage.read_user.call(randomUser2);
          { from: accounts[i] },
      assert.deepEqual(readUser1[1], bN(0));
      assert.deepEqual(readUser2[0], bN(0));
  let contracts;
    });
  });

  describe('updateKyc', function () {
    const randomUser1 = randomAddress();
      assert.deepEqual(group4[1], paddedHex(web3, 'kycadmins_group'));
    const expiry1 = bN(getCurrentTimestamp()).plus(bN(1000));
    const expiry2 = randomBigNumber(bN, bN(getCurrentTimestamp()));
    before(async function () {
      assert.deepEqual(user2[0], paddedHex(web3, 'doc 2'));
    });
    it('[called by non-kycadmin]: revert', async function () {
  getCurrentTimestamp,
        if (accounts[i] === addressOf.kycadmin) i++;
        assert(await a.failure(contracts.daoIdentity.updateKyc.call(
          randomUser1,
      await contracts.daoIdentity.addGroupUser(bN(3), randomUser1, 'added to prls', { from: addressOf.root });
      }
          { from: accounts[i] },
  before(async function () {
          '',
          randomUser2,
          '',
          expiry2,

          { from: accounts[i] },
      }
          { from: accounts[i] },
    it('[called by kycadmin]: success | verify storage layer', async function () {
      await contracts.daoIdentity.updateKyc(randomUser1, 'doc 1', expiry1, { from: addressOf.kycadmin });
  indexRange,
      assert.deepEqual(await contracts.daoIdentityStorage.is_kyc_approved.call(randomUser1), true);
      assert.deepEqual(await contracts.daoIdentityStorage.is_kyc_approved.call(randomUser2), false);
      const user1 = await contracts.daoIdentityStorage.read_kyc_info.call(randomUser1);
  describe('updateKyc', function () {
      }
    const expiry1 = bN(getCurrentTimestamp()).plus(bN(1000));
        assert(await a.failure(contracts.daoIdentity.removeGroupUser.call(
      assert.deepEqual(user2[1], expiry2);
    });
  });
      assert.deepEqual(user2[0], paddedHex(web3, 'doc 2'));