'use strict';

const Header = () => {
  const header      = $('<header></header>',{class:'col-lg-12'});
  const ul          = $('<ul>',{class:'content-1'});
  const li1         = $('<li></li>');
  const img1        = $('<img>',{src:'assets/img/menu.png'});
  const p1          = $('<span>SECTIONS</span>');
  const li2         = $('<li></li>');
  const img2        = $('<img>',{src:'assets/img/search.png'});
  const p2          = $('<span>SEARCH</span>');
  const li3         = $('<li></li>',{class:'content-1__li3'});
  const imgFB       = $('<img>',{src:'assets/img/fb.png'});
  const imgT        = $('<img>',{src:'assets/img/tw.png'});
  const imgLI       = $('<img>',{src:'assets/img/in.png'});
  const hr          = $('<hr>');
  const divLab      = $('<div>');
  const imgLab      = $('<img>',{src:'assets/img/logoicon.png', style:'display: block; margin: 0 auto;'});
  const divTe       = $('<div>',{class:'div-te'});
  const date        = $('<span>Lunes Junio 12 de 2017  |  <img src="assets/img/cloud.png"> 22°</span>');
  const ul2         = $('<ul>',{class:'content-1 ul2'});
  const lists         =$('<li>Lo último</li><li>Opinión</li><li>Cultura</li><li>Perú</li><li>Tecnología</li><li>Mundo</li><li>Economía</li><li>Lifestyle</li><li>Deporte</li>')

 header.append(ul);
 header.append(divLab);
 header.append(ul2);

 ul.append(li1);
 ul.append(li2);
 ul.append(li3);
 ul.append(hr);
 li1.append(img1);
 li1.append(p1);
 li2.append(img2);
 li2.append(li2);
 li2.append(p2);
 li3.append(imgFB);
 li3.append(imgT);
 li3.append(imgLI);
 divLab.append(imgLab);
 divTe.append(date);
 divLab.append(divTe);
 ul2.append(lists);


 return header;
}
