const MasterSuperVault = artifacts.require("MasterSuperVault");

module.exports = function(deployer) {
  const name="MASTER SUPER VAULT";
  const capitalToken = "0xe9e7cea3dedca5984780bafc599bd69add087d56"; // BUSD (mainnet)
  const maxCap = "1000000000000000000000000000000000000";
  deployer.deploy(MasterSuperVault, name, capitalToken, maxCap);
};