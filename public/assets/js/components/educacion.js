'use strict';

const Edu = () => {
   const sectionEdu   = $('<div class="tec"></div>');
   const educ         = $('<p class="tecno"><strong>EDUCACION</strong></p>');
   const hrM          = $('<hr class="hrm">');
   const divsImgsEdu  = $('<div class="row container-img-tec"><div class="col-md-3 news-19"><div class= "container-color-m-6"> Titulo noticia laboratoria </div></div><div class="col-md-3 news-20"><div class= "container-color-m-6"> Titulo noticia laboratoria </div></div><div class="col-md-3 news-21"><div class= "container-color-m-6"> Titulo noticia laboratoria </div></div><div class="col-md-3 news-22"><div class= "container-color-m-6"> Titulo noticia laboratoria </div></div><div class="col-md-6 news-23"><div class= "container-color-m-7"> Titulo noticia laboratoria </div></div><div class="col-md-6 news-21"><div class= "container-color-m-7"> Titulo noticia laboratoria </div></div></div>')

   sectionEdu.append(educ);
   sectionEdu.append(hrM);
   sectionEdu.append(divsImgsEdu);

   return sectionEdu;

}
