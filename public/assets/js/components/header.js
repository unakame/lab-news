'use strict';

const Header = () => {
  const header      = $('<header></header>',{class:'col-lg-12'});
  const ul          = $('<ul>',{class:'content-1  hidden-xs'});
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
  const hr          = $('<hr class="hr1">');
  const divLab      = $('<div>');
  const imgLab      = $('<img>',{src:'assets/img/logoicon.png', style:'display: block; margin: 0 auto;'});
  const divTe       = $('<div>',{class:'div-te'});
  const date        = $('<span>Lunes Junio 12 de 2017  |  <img src="assets/img/cloud.png"> 22°</span>');
  const ul2         = $('<ul>',{class:'content-1 ul2  hidden-xs'});
  const lists       = $('<li>Lo último</li><li>Opinión</li><li>Cultura</li><li>Perú</li><li>Tecnología</li><li>Mundo</li><li>Economía</li><li>Lifestyle</li><li>Deporte</li>');
  const divChair    = $('<div class="content-chair"><span>MIT BUSCA ESTUDIANTES DE TODO EL MUNDO QUE QUIERAN ESTUDIAR GRATIS</span><p>Ya no será necesario ir hasta el campus de MIT para estudiar allá, por medio de su curso gratuito en línea cualquiera podrá hacerlo</p></div>');

  const imgHead     = $('<div class="row container-img">  <div class="col-md-6 que">    </div><div class="col-md-3 build">  </div><div class="col-md-3 three">  </div></div>');

  const imgTe       = $('<div class="row container-color">  <div class="col-md-6"> El método de la  <p style="color:#F7B617;">Universidad de Stanford<p> para mejorar las calificaciones</div><div class="col-md-3">Estas son las mejores <p style="color:#F7B617;">tech startups<p> del mundo  </div><div class="col-md-3">Voluntarios por la educación, la combinación perfecta  </div></div>');






 header.append(ul);
 header.append(divLab);
 header.append(ul2);
 header.append(divChair);
 header.append(imgHead);
 header.append(imgTe);

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
