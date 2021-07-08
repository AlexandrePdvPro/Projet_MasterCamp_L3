pragma solidity ^0.4.19;
pragma experimental ABIEncoderV2;


import "./Ownable.sol";


contract VoteSystem is Ownable{
    
    event NewSession(uint ID, string name , string ownerID);
    event NewVote(uint sessionID, string userID);
    
    struct Proposal {
        uint8 ID;
        uint voteCount;
        string description;
        
    }
    
    struct Session {
        uint proposals ;
        uint ID; //Useless but we use it to be safe 
        uint votersCount;
        uint8 winnerProposal;
        uint8 proposalCount;
        bool open;
        bool priv;// Check if we are in a Private or public vote , Useless now cause it's implemented in the Front
        string ownerID;
        string name;
        string[] voters;
        
        
    }
    
    mapping(uint => Proposal[]) proposalsIndex;
    uint proposalsCounter ;
    
    Session[] private sessions;
    
    
    function _setSessionID(uint _id ) internal{
        sessions[_id].ID = _id;
    }
    
    
    function createSession(string _ownerID,string _name , bool _priv ) public {
        
        
        string[] memory _voters;
        
        uint ID = sessions.push(Session(proposalsCounter,0,0,0,0,false,_priv,_ownerID,_name,_voters)) -1 ;
        _setSessionID(ID);
        proposalsCounter ++;
        emit NewSession(ID,_name,_ownerID);
        
        
    }
    
    function addProposal(string _description, uint _sessionID)  external isClosed(_sessionID ){
        
        uint8 _proposalID = sessions[_sessionID].proposalCount;
        
        proposalsIndex[sessions[_sessionID].proposals].push(Proposal(_proposalID,0,_description)) ;
        sessions[_sessionID].proposalCount ++;
    }
    
    function toggleSession(uint _sessionID) public{
        
        sessions[_sessionID].open = ! sessions[_sessionID].open ;
        
    }
    
    modifier isClosed(uint _sessionID){
        require(sessions[_sessionID].open == false);
        _;
    }
    
    modifier isOpen(uint _sessionID){
        require(sessions[_sessionID].open != false);
        _;
    }
   
   
    function _checkVoter(string _userID, uint _sessionID ) internal view returns (bool){
        for (uint i = 0 ; i < sessions[_sessionID].voters.length; i++){
            if (keccak256(bytes(_userID)) == keccak256(bytes(sessions[_sessionID].voters[i]))) return false;
        }
        
        return true;
    }
    
    function processVote(string _userID , uint _sessionID , uint8 _proposalID) external isOpen(_sessionID){
        require(_checkVoter(_userID,_sessionID) );
        
        proposalsIndex[sessions[_sessionID].proposals][_proposalID].voteCount ++;
        sessions[_sessionID].votersCount ++;
        sessions[_sessionID].voters.push(_userID);
        if (proposalsIndex[sessions[_sessionID].proposals][_proposalID].voteCount > proposalsIndex[sessions[_sessionID].proposals][sessions[_sessionID].winnerProposal].voteCount) 
            sessions[_sessionID].winnerProposal = _proposalID;
        
    }
    
    function numberOfVotePerProposal(uint _sessionID, uint8 _proposalID) public view returns (uint) {
        
        uint result = proposalsIndex[sessions[_sessionID].proposals][_proposalID].voteCount;
        return result;
        
    }
    
    function getSessions() view public  returns(Session[]){
        return sessions;
    }
    
    
    
    function getProposal(uint _sessionID) view public  returns (Proposal[]){
        return proposalsIndex[_sessionID];
    }
    
    
    function getWinner(uint _sessionID) external view  isClosed(_sessionID) returns (uint){
        return sessions[_sessionID].winnerProposal ;
    }
    
}