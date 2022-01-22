//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Vault1 {

    address public owner;

    // Constructor: save owner for later
    constructor() {
        owner = msg.sender;
    }
    
    function deposit(uint _amount) external pure {
        return;
    }

    function withdraw(uint _amount) external pure {
        return;
    }

}
