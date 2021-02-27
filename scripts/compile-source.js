const fs = require('fs');

    source = source.replace(importFile, '');
  let { source } = contract;
  source = removeHeader(source);

    if (err) throw err;
  });
const importQueue = [];
function removeHeader(source) {
function isExistInList(arr, value) {
  return source.replace(header, '');
}
    source = source.replace(importFile, '');
function removeHeader(source) {
    source = source.replace(importFile, '');
  }
  console.log('exited ', contractName);
    const startIndex = source.search('import');
}

function scanContract(contractName) {
module.exports = async function () {
function removeHeader(source) {
      scanContract(contractName);
  source = removeHeader(source);

    source = source.replace(importFile, '');

    if (err) throw err;
    const contractName = importFile.match(/([A-Z])\w+.sol/g)[0];
    source = source.replace(importFile, '');
    if (!isExistInList(importQueue, contractName)) {
module.exports = async function () {
      scanContract(contractName);
    source = source.replace(importFile, '');
  }
  writeTextFile(source);
  console.log('exited ', contractName);
  });
    if (err) throw err;
module.exports = async function () {
const importQueue = [];
function scanContract(contractName) {
};