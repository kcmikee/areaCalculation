// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract AreaCalculation {
    uint256 area;


    function Square(uint _side) public returns(uint256){
        area= _side * _side;
        return area;
    }

    function Triangle(uint _base, uint _height) public returns(uint256){
        area = (_base * _height * 1)/2;
        return area;
    }

    function Rectangle(uint _length, uint _width)public returns(uint) {
        area= _length * _width;
        return area;
    }

    function GetArea()public view returns(uint){
        return area;
    }
}
