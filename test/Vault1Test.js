const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Vault 1", () => {
	let Vault1, vault1;
    let owner;

	before(async () => {
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

	describe("Initial State", function () {
		it("Should not allow initial withdrawals", async function () {
			await expect(
				vault1.withdraw(42)
			).to.be.revertedWith("Insufficient tokens");
		});
	});

	describe("Withdraws and deposits", function () {
		it("Should allow deposits", async function () {
			await vault1.deposit(42);
		});

		it("Should succeed withdrawing funds", async function () {
			await vault1.withdraw(21);
		});
		
	});
});
