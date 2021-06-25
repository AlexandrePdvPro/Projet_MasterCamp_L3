// SPDX-License-Identifier: MIT
pragma solidity >=0.7.4 <0.8.0;


contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes memory) {
        this; 
        return msg.data;
    }
}