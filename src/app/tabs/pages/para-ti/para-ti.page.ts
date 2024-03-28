import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/interfaces/noticia';

@Component({
  selector: 'app-para-ti',
  templateUrl: './para-ti.page.html',
  styleUrls: ['./para-ti.page.scss'],
})
export class ParaTiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   noticias: Noticia[] = [
    {
      title: "Nikola Tesla desarrollo cun sistema",
      imageUrl: "tesla.jpg",
      description: "Tesla desarrolló el sistema de corriente alterna, que es ampliamente utilizado en la distribución de energía eléctrica en todo el mundo. Su trabajo en este campo fue fundamental para la creación de sistemas eléctricos más eficientes y prácticos.",
      completeInfo: "Nikola Tesla fue un inventor, ingeniero eléctrico, físico y futurista serbio-estadounidense, nacido el 10 de julio de 1856 en Smiljan, en lo que hoy es Croacia, y fallecido el 7 de enero de 1943 en Nueva York, Estados Unidos. Es conocido por sus numerosas contribuciones al campo de la electricidad y el electromagnetismo, así como por sus ideas visionarias sobre la energía y la tecnología. Tesla desarrolló el sistema de corriente alterna, que es ampliamente utilizado en la distribución de energía eléctrica en todo el mundo. Su trabajo en este campo fue fundamental para la creación de sistemas eléctricos más eficientes y prácticos."
    },
    {
      title: "La Gran Pirámide de Guiza",
      imageUrl: "piramide.jpg",
      description: "es, además de la mayor de las pirámides de Egipto, la más antigua de las siete maravillas del mundo antiguo y la única que todavía perdura. ",
      completeInfo: "Egipto tiene más de 100 pirámides y en países vecinos pueden llegar a 50 pirámides, sin embargo la más emblemática y principal que siempre está en nuestra mente al pensar en pirámides es La pirámide de Keops, por sus dimensiones y enigmas que circulan ante ellas y que todos tenemos en nuestra mente poder visitarlas por lo menos una vez en la vida y que es la única sobreviviente de las célebres Siete Maravillas del Mundo Antiguo, citada por Antípatro de Sidón en el año 125 AC"
    },
    {
      title: "eclesiastés vanidad de vanidades",
      imageUrl: "salomon.jpg",
      description: "Vanidad de vanidades, dijo el Predicador; vanidad de vanidades, todo es vanidad.Salomón en :-Eclesiastés 1:2-",
      completeInfo: "Vanidad de vanidades, dijo el Predicador; vanidad de vanidades, todo es vanidad.Salomón en :-Eclesiastés 1:2-"
    }
  ];
  
}
