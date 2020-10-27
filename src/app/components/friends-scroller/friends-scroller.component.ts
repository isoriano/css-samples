import { Component } from '@angular/core';

@Component({
  selector: 'app-friends-scroller',
  templateUrl: 'friends-scroller.component.html',
  styleUrls: ['friends-scroller.component.scss']
})

export class FriendsScrollerComponent {

  friends = [
    { name: 'Name 10', imgUrl: 'assets/images/friends/face-1.png' },
    { name: 'Name 11', imgUrl: 'assets/images/friends/face-2.png' },
    { name: 'Name 12', imgUrl: 'assets/images/friends/face-3.png' },
    { name: 'Name 13', imgUrl: 'assets/images/friends/face-4.png' },
    { name: 'Name 14', imgUrl: 'assets/images/friends/face-5.png' },
    { name: 'Name 15', imgUrl: 'assets/images/friends/face-6.png' },
    { name: 'Name 16', imgUrl: 'assets/images/friends/face-7.png' },
    { name: 'Name 17', imgUrl: 'assets/images/friends/face-8.png' },
    { name: 'Name 18', imgUrl: 'assets/images/friends/face-9.png' }
  ];

}
