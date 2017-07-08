'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Mundo());
  wrapper.append(Tec());
  wrapper.append(Edu());
  wrapper.append(Carousel());
  wrapper.append(Opinion());



  root.append(wrapper);
}

$(_ => {

    const root = $('#root');
    render(root);
  });
