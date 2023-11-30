const Dao = artifacts.require("DAO");

module.exports = function (deployer) {
  deployer.deploy(Dao,"2","3600","51");
};
