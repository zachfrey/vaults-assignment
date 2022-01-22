//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Vault1 {

    address public owner;

    mapping (address => uint) private _vault;

    // Constructor: save owner for later
    constructor() {
        owner = msg.sender;
    }
    
    function deposit(uint _amount) external {
        console.log("Sender %s balance is %s, adding %s", msg.sender, _vault[msg.sender], _amount);
        _vault[msg.sender] += _amount;
        console.log("Sender %s balance is now %s", msg.sender, _vault[msg.sender]);
        return;
    }

    function withdraw(uint _amount) external {
        console.log("Sender %s balance is %s, withdrawing %s", msg.sender, _vault[msg.sender], _amount);
        require(_vault[msg.sender] >= _amount, "Insufficient tokens");
        _vault[msg.sender] -= _amount;
        return;
    }

}
