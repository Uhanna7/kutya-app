import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  open: boolean = false;

  help: {question: string, response: string, open: boolean}[] =
    [
      {
        question: 'Mire jó az oldal?', 
        response: 'Az oldal a gazdiktól elszökött kutyusok hazatalálását és a kóbor kutyák menhelyre/ideiglenes befogadókhoz jutását segíti.',
        open: false
      },
      {
        question: 'Mire jó az oldal?', 
        response: 'Az oldal a gazdiktól elszökött kutyusok hazatalálását és a kóbor kutyák menhelyre/ideiglenes befogadókhoz jutását segíti.',
        open: false
      },
      {
        question: 'Mire jó az oldal?', 
        response: 'Az oldal a gazdiktól elszökött kutyusok hazatalálását és a kóbor kutyák menhelyre/ideiglenes befogadókhoz jutását segíti.',
        open: false
      },
      {
        question: 'Mire jó az oldal?', 
        response: 'Az oldal a gazdiktól elszökött kutyusok hazatalálását és a kóbor kutyák menhelyre/ideiglenes befogadókhoz jutását segíti.',
        open: false
      },
      {
        question: 'Mire jó az oldal?', 
        response: 'Az oldal a gazdiktól elszökött kutyusok hazatalálását és a kóbor kutyák menhelyre/ideiglenes befogadókhoz jutását segíti.',
        open: false
      },
    ];
  
  imgCollection: Array<object> = [
    {
      image: '../../assets/2022_11_09/01.jpg',
      thumbImage: '../../assets/2022_11_09/01.jpg',
      alt: 'Festés',
      title: 'Festés',
    },
    {
      image: '../../assets/2022_11_09/02.jpg',
      thumbImage: '../../assets/2022_11_09/02.jpg',
      title: 'Kőművesmunka',
      alt: 'Kőművesmunka',
    },
    {
      image: '../../assets/2022_11_09/03.jpg',
      thumbImage: '../../assets/2022_11_09/03.jpg',
      title: 'Szárazépítés',
      alt: 'Szárazépítés',
    },
    {
      image: '../../assets/2022_11_09/04.jpg',
      thumbImage: '../../assets/2022_11_09/04.jpg',
      title: 'Hőszigetelés',
      alt: 'Hőszigetelés',
    },
    {
      image: '../../assets/2022_11_09/05.jpg',
      thumbImage: '../../assets/2022_11_09/05.jpg',
      title: 'Mázolás',
      alt: 'Mázolás',
    },
    {
      image: '../../assets/2022_11_09/01.jpg',
      thumbImage: '../../assets/2022_11_09/01.jpg',
      alt: 'Festés',
      title: 'Festés',
    },
    {
      image: '../../assets/2022_11_09/02.jpg',
      thumbImage: '../../assets/2022_11_09/02.jpg',
      title: 'Kőművesmunka',
      alt: 'Kőművesmunka',
    },
    {
      image: '../../assets/2022_11_09/03.jpg',
      thumbImage: '../../assets/2022_11_09/03.jpg',
      title: 'Szárazépítés',
      alt: 'Szárazépítés',
    },
    {
      image: '../../assets/2022_11_09/04.jpg',
      thumbImage: '../../assets/2022_11_09/04.jpg',
      title: 'Hőszigetelés',
      alt: 'Hőszigetelés',
    },
    {
      image: '../../assets/2022_11_09/05.jpg',
      thumbImage: '../../assets/2022_11_09/05.jpg',
      title: 'Mázolás',
      alt: 'Mázolás',
    },
    {
      image: '../../assets/2022_11_09/01.jpg',
      thumbImage: '../../assets/2022_11_09/01.jpg',
      alt: 'Festés',
      title: 'Festés',
    },
    {
      image: '../../assets/2022_11_09/02.jpg',
      thumbImage: '../../assets/2022_11_09/02.jpg',
      title: 'Kőművesmunka',
      alt: 'Kőművesmunka',
    },
    {
      image: '../../assets/2022_11_09/03.jpg',
      thumbImage: '../../assets/2022_11_09/03.jpg',
      title: 'Szárazépítés',
      alt: 'Szárazépítés',
    },
    {
      image: '../../assets/2022_11_09/04.jpg',
      thumbImage: '../../assets/2022_11_09/04.jpg',
      title: 'Hőszigetelés',
      alt: 'Hőszigetelés',
    },
    {
      image: '../../assets/2022_11_09/05.jpg',
      thumbImage: '../../assets/2022_11_09/05.jpg',
      title: 'Mázolás',
      alt: 'Mázolás',
    },
    {
      image: '../../assets/2022_11_09/01.jpg',
      thumbImage: '../../assets/2022_11_09/01.jpg',
      alt: 'Festés',
      title: 'Festés',
    },
    {
      image: '../../assets/2022_11_09/02.jpg',
      thumbImage: '../../assets/2022_11_09/02.jpg',
      title: 'Kőművesmunka',
      alt: 'Kőművesmunka',
    },
    {
      image: '../../assets/2022_11_09/03.jpg',
      thumbImage: '../../assets/2022_11_09/03.jpg',
      title: 'Szárazépítés',
      alt: 'Szárazépítés',
    },
    {
      image: '../../assets/2022_11_09/04.jpg',
      thumbImage: '../../assets/2022_11_09/04.jpg',
      title: 'Hőszigetelés',
      alt: 'Hőszigetelés',
    },
    {
      image: '../../assets/2022_11_09/05.jpg',
      thumbImage: '../../assets/2022_11_09/05.jpg',
      title: 'Mázolás',
      alt: 'Mázolás',
    },
  ];

  openRes(index: number) {
    this.help[index].open = !this.help[index].open;
  }
}
