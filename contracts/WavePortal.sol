// SPDX-License-Identifier: UNLINCESED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log("yo i am a contract and i am actually smart");
    }

    function wave() public{
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns(uint256) {
        console.log("we have %d total waves!", totalWaves);
        return totalWaves;
    }
}