'use strict';

const Opinion = () => {

  const sectionOpi   = $('<div class="tec"></div>');
  const educ         = $('<p class="tecno"><strong>OPINION</strong></p>');
  const hrM          = $('<hr class="hrm">');
  const divImgOp     = $('<div class="row container-img-tec"><div class="col-md-3 news-24"><div class= "container-color-m-8"> Titulo noticia laboratoria </div></div><div class="col-md-3 news-25"><div class= "container-color-m-8"> Titulo noticia laboratoria </div></div><div class="col-md-3 news-26"><div class= "container-color-m-8"> Titulo noticia laboratoria </div></div><div class="col-md-3 news-27"><div class= "container-color-m-8"> Titulo noticia laboratoria </div></div></div>')

   sectionOpi.append(educ);
   sectionOpi.append(hrM);
   sectionOpi.append(divImgOp);



  return sectionOpi;
}
