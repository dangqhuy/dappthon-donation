pragma solidity ^0.4.24;
import "./Strings.sol";
import "./Integers.sol";


contract EventContract {
    using Strings for string;
    using Integers for uint;
    
    address public owner;
    uint public totalDonat;
    uint public amountAvailable;
    bool public end;
    uint public numberDonator;
    uint public numberEndComfirm;
    
    struct Activity {
        uint budget;
        uint advance;
        uint validNumber;
        uint numberPaid;
    }
    
    modifier isDonator() {
        require(donators[msg.sender] > 0);
        _;
    }
    
    modifier isEnd() {
        require(end == true);
        _;
    }
    
    modifier isNotEnd() {
        require(end == true);
        _;
    }
    
    mapping(address => uint) donators;
    mapping(address => bool) donatorsComfirmEnd;
    mapping(uint => address) donatorsIndex;

    mapping(uint => Activity) activities;
    
    constructor() public {
        owner = msg.sender;
        numberDonator = 0;
        totalDonat = 0;
        end = false;
    }
    
    function addActivites(string _activities_data) public{
        string[] memory activities_ = _activities_data.split("#");
        
        for(uint i = 0; i < activities_.length; i++) {
             string[] memory activityInfo = activities_[i].split("");
             
             for(uint j = 0; j < activityInfo.length ; i++){
                 Activity memory activity;
                 activity.budget = Integers.parseInt(activityInfo[1]);
                 activity.advance = Integers.parseInt(activityInfo[2]);
                 activities[Integers.parseInt(activityInfo[0])] = activity;
             }
        }
    }
    
    function donate(uint _amount) public payable{
        require(_amount > 0);
        require(msg.sender.balance > _amount );
        require(_amount == msg.value);
        numberDonator += 1;
        donators[msg.sender] += msg.value;
        donatorsIndex[numberDonator] = msg.sender;
        totalDonat += msg.value;
    }
    
    function validActivity(uint _activity) public isDonator{
        activities[_activity].validNumber += 1;
    }
    
    function confirmEndEvent() public isDonator isNotEnd{
        require(donatorsComfirmEnd[msg.sender]==false);
        donatorsComfirmEnd[msg.sender] = true;
        numberEndComfirm += 1;
        if(numberEndComfirm > (numberDonator/2)){
            end = true;
            refund();
        }
    }
    
    
    function refund() private isEnd{
        for (uint i=0;i<numberDonator;i++) {
             uint amount = (amountAvailable/totalDonat) * donators[donatorsIndex[i]];
             donatorsIndex[i].transfer(amount);
        }
    }
    
    function ownerDrawFundFirstTime(uint _activity) public{
        require(activities[_activity].validNumber > numberDonator/2);
        uint amount = activities[_activity].advance;
        require(amountAvailable >= amount );
        amountAvailable -= amount;
        owner.transfer(amount);
    }
    
      
    function ownerDrawFundSecondTime(uint _activity) public{
        require(activities[_activity].validNumber > numberDonator/2);
        uint amount = activities[_activity].budget - activities[_activity].advance;
        require(amountAvailable >= amount );
        amountAvailable -= amount;
        owner.transfer(amount);
    }
    
}