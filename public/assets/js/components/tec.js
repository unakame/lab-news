'use strict';

const Tec = () => {

 const sectionTec   = $('<div class="tec"></div>');
 const tecno        = $('<p class="tecno"><strong>TECNOLOGIA</strong></p>');
 const hrM          = $('<hr class="hrm">');
 const divsImgsTec  = $('<div class="row container-img-tec"><div class="col-md-6 news-14"><div class= "container-color-m-3"> Titulo noticia laboratoria </div></div><div class="col-md-6 row"><div class="col-md-6 news-15"><div class= "container-color-m-4"> Titulo noticia laboratoria </div></div><div class="col-md-6 news-16"><div class= "container-color-m-4"> Titulo noticia laboratoria </div></div><div class="col-md-12 news-17"><div class= "container-color-m-5"> Titulo noticia laboratoria </div></div><div class="col-md-12 news-18"><div class= "container-color-m-5"> Titulo noticia laboratoria </div></div></div></div>')

  sectionTec.append(tecno);
  sectionTec.append(hrM);
  sectionTec.append(divsImgsTec);
  return sectionTec;
}
