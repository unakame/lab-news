'use strict';

const Tec = () => {

 const sectionTec   = $('<div class="tec"></div>');
 const tecno        = $('<p class="tecno"><strong>TECNOLOGIA</strong></p>');
 const hrM          = $('<hr class="hrm">');
 const divsImgsTec  = $('<div class="row container-img-tec"><div class="col-md-6 news-14">1</div><div class="col-md-6 row"><div class="col-md-6 news-15">1</div><div class="col-md-6 news-16">1</div><div class="col-md-12 news-17">1</div><div class="col-md-12 news-18">1</div></div></div>')

  sectionTec.append(tecno);
  sectionTec.append(hrM);
  sectionTec.append(divsImgsTec);
  return sectionTec;
}
