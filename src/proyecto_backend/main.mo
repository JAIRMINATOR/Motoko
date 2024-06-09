import Array "mo:base/Array";

actor GameList {
 type Game = {
   id :Nat;
   title: Text;
   description: Text; // Corregido el nombre del campo a "description"
   rating: Nat;
 };

 var games : [Game] = [
  {
    id =1 ;
    title = "GTA";
    description = "modo historia";
    rating = 4;
  }
 ];

public func addGame(rating : Nat, title : Text, description : Text) : async Bool {
  let newId = Array.size(games) + 1;
  let newGame = {
    id = newId;
    title = title;
    description = description;
    rating = rating;
  };
  games := Array.append<Game>(games, [newGame]);
  return true;
};

public func getAllGames() : async [Game] {
  return games;
};

public func getGame(id : Nat) : async ?Game {
  return Array.find<Game>(games, func(m) { m.id == id});
};

public func updateGame(id : Nat, title : Text, description : Text, rating : Nat) : async Bool {
 let gameToUpdate = Array.find<Game>(games, func(task) {task.id ==id});

 switch(gameToUpdate) {
   case(null) { return false };
   case(?gameToUpdate) {
     let updatedGame = {
       id = id;
       title = title;
       description =description;
       rating = rating;
     };
     games := Array.map<Game, Game>(games, func(m) {if (m.id == id) { updatedGame } else {m} });
     return true;
    };
 };
};

public func deleteGame(id : Nat) : async Bool{
  let game =Array.find<Game>(games, func(task) {task.id == id});
  if (game != null){
    games := Array.filter<Game>(games, func(task) {task.id != id});
    return true;
  } else {
    return false;
  };
  };
};