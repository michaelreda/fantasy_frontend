import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: "root"
})
export class PlayersService {
  //   private players = [
  //   {
  //     "_id":"1",
  //     "name":"Michael Reda",
  //     "position":"midfield",
  //     "price":30
  //   },{
  //     "_id":"2",
  //     "name":"Samuel Wasfei",
  //     "position":"goalkeeper",
  //     "price":8
  //   },{
  //     "_id":"3",
  //     "name":"John Botros",
  //     "position":"defense",
  //     "price":20
  //   },{
  //     "_id":"4",
  //     "name":"Youssef Sherif",
  //     "position":"attack",
  //     "price":35
  //   },{
  //     "_id":"5",
  //     "name":"Mina Maher",
  //     "position":"attack",
  //     "price":32
  //   },{
  //     "_id":"6",
  //     "name":"Abanob Wageh",
  //     "position":"midfield",
  //     "price":36
  //   },{
  //     "_id":"7",
  //     "name":"Tony George",
  //     "position":"defense",
  //     "price":25
  //   }
  // ]
  constructor(private http: HttpClient) {
    
  }

  getPlayers() {
    return this.http.get("/players");
  }

  // to be changed later to get data from database
  getPlayerByID(playerID) {
    return this.http.get("/player/"+playerID);
    // return this.playersObservable.pipe(
    //   map(players => {
    //     for (let i = 0; i < players.length; i++) {
    //       if (players[i]._id == playerID) return players[i];
    //     }
    //   })
    // );
  }
}
