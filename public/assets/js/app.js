'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Mundo());
  wrapper.append(Tec());




  root.append(wrapper);
}

$(_ => {

    const root = $('#root');
    render(root);
  });
