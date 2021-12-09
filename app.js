const team = {
  _players: [
    {
      firstName: 'Kofi', 
      lastName: 'Takyi', 
      age: 34,
      },

    {
      firstName: 'Peter', 
      lastName: 'Wheel', 
      age: 40,
    },

    {
      firstName: 'Frank', 
      lastName: 'Appiah', 
      age: 54,
    }

  ],


  _games : [
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 34
    },

    {
  opponent: 'Broncos',
  teamPoints: 32,
  opponentPoints: 32
    },

    {
  opponent: 'Broncos',
  teamPoints: 52,
  opponentPoints: 21
    },
  ],

  get players(){
    return this._players;
  },

  get games(){
    return this._games;
  },

  addPlayer(firstName,lastName,age){
   let player= {
 firstName: firstName,
      lastName: lastName,
      age: age,
  };
 
this.players.push(player);
  },

  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
team.addGame('Chuckers', 59, 89);
team.addGame('Satins', 70, 99);



console.log(team.players);
console.log(team.games);

