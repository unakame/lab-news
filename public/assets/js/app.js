'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Mundo());
  wrapper.append(Tec());
  wrapper.append(Edu());
  wrapper.append(Carousel());



  root.append(wrapper);
}

$(_ => {

    const root = $('#root');
    render(root);
  });
