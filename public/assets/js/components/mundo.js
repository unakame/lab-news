'use strict';

const Mundo = () => {

  const sectionMundo = $('<div class="mundo-"></div>');
  const mundo        = $('<p class="mundo"><strong>MUNDO</strong></p>');
  const hrM          = $('<hr class="hrm">');
  const divsImgsM    = $('<div class="row divs-imgs-m"><div class="col-md-3 news-4"><div class="container-color-m">  Titulo noticia laboratoria  </div></div><div class="col-md-6 row">  <div class="col-md-6 news-5">  1  </div><div class="col-md-6 news-6">  1  </div><div class="column-md-12 news-8">  1  </div><div class="column-md-12 news-9">  1  </div>  </div><div class="col-md-3 news-7">  <div class= "container-color-m"> Titulo noticia laboratoria </div> </div></div>');
  const divsImgsM2    = $('<div class="row divs-imgs-m-2"><div class="col-md-3 news-10"><div class= "container-color-m-2"> Titulo noticia laboratoria </div></div><div class="col-md-3 news-11"><div class= "container-color-m-2"> Titulo noticia laboratoria </div></div><div class="col-md-3 news-12"><div class= "container-color-m-2"> Titulo noticia laboratoria </div></div><div class="col-md-3 news-13"><div class= "container-color-m-2"> Titulo noticia laboratoria </div></div></div>');
  sectionMundo.append(mundo);
  sectionMundo.append(hrM);
  sectionMundo.append(divsImgsM);
  sectionMundo.append(divsImgsM2);


return sectionMundo;
}
