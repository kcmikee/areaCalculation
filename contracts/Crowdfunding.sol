// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract CrowdFunding {
    struct Campaign {
        string title;
        string description;
        address benefactor;
        address owner;
        uint256 goal;
        uint256 deadline;
        uint256 amountRaised;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignCount;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier accountExists(uint256 _campaignId) {
        require(campaigns[_campaignId].benefactor != address(0), "Campaign doesn't exist");
        _;
    }

    modifier isCampaignOngoing(uint256 deadline) {
        require(block.timestamp < deadline, "Campaign has ended.");
        _;
    }

    modifier isCampaignEnded(uint256 deadline) {
        require(block.timestamp >= deadline, "Campaign has not ended.");
        _;
    }

    event CampaignCreated(
        string _title,
        string _description,
        address _benefactor,
        uint256 _goal,
        uint256 _deadline,
        uint256 _amountRaised,
        address _owner
    );
    event DonationReceived(uint256 _campaignId, uint256 _amount, uint256 _date);
    event CampaignEnded();

    function createCampaign(
        string memory _title,
        string memory _description,
        address _benefactor,
        uint256 _goal,
        uint256 _duration
    ) public {
        campaignCount++;
        uint256 deadline = block.timestamp + _duration;
        campaigns[campaignCount] = Campaign({
            title: _title,
            description: _description,
            benefactor: _benefactor,
            owner: msg.sender,
            goal: _goal,
            deadline: deadline,
            amountRaised: 0
        });

        emit CampaignCreated(_title, _description, _benefactor, _goal, deadline, 0, msg.sender);
    }

    function donateToCampaign(uint256 _campaignId) public payable accountExists(_campaignId) isCampaignOngoing(campaigns[_campaignId].deadline) {
        campaigns[_campaignId].amountRaised += msg.value;

        emit DonationReceived(_campaignId,msg.value, block.timestamp);
    }

    function endCampaign(uint256 _campaignId) public payable accountExists(_campaignId) isCampaignEnded(campaigns[_campaignId].deadline) {
        Campaign storage campaign = campaigns[_campaignId];
        uint256 raisedAmount = campaign.amountRaised;
        uint256 lGoal = campaign.goal;
        uint256 remainingBalance = raisedAmount - lGoal;

        if (raisedAmount > lGoal ) {
            payable(campaign.benefactor).transfer(raisedAmount);
            campaign.amountRaised = 0;
        }else{
            payable(campaign.owner).transfer(remainingBalance);
            payable(campaign.benefactor).transfer(raisedAmount);
            campaign.amountRaised = 0;
        }
        emit CampaignEnded();
    }
}
