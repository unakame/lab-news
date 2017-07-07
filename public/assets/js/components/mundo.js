'use strict';

const Mundo = () => {

  const sectionMundo = $('<div class="mundo-"></div>');
  const mundo        = $('<p class="mundo"><strong>MUNDO</strong></p>');
  const hrM          = $('<hr class="hrm">');
  const divsImgsM    = $('<div class="row"><div class="col-md-3 news-4">  1 of 3  </div><div class="col-md-6">  2 of 3 (wider)  </div>  <div class="col-md-3 news-7">  3 of 3  </div></div>');
  sectionMundo.append(mundo);
  sectionMundo.append(hrM);
  sectionMundo.append(divsImgsM);


return sectionMundo;
}
