'use strict';

const Opinion = () => {

  const sectionOpi   = $('<div class="tec"></div>');
  const educ         = $('<p class="tecno"><strong>OPINION</strong></p>');
  const hrM          = $('<hr class="hrm">');

   sectionOpi.append(educ);
   sectionOpi.append(hrM);


  return sectionOpi;
}
