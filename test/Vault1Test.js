const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Vault 1", () => {
	let Vault1, vault1;
    let owner;

	beforeEach(async () => {
		Vault1 = await ethers.getContractFactory("Vault1");
		[owner] = await ethers.getSigners();

		vault1 = await Vault1.deploy();

		await vault1.deployed();
	});

    describe("Deployment", function () {
		it("Should set the right owner", async function () {
			// This test expects the owner variable stored in the contract to be equal
			// to our Signer's owner.
			expect(await vault1.owner()).to.equal(owner.address);
		  });
	});
});
