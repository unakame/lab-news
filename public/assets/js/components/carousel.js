'use strict';


const Carousel = () => {
const carousel = $('<div id="myCarousel" class="carousel slide hidden-xs" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li>  </ol>  <!-- Wrapper for slides --><div class="carousel-inner">  <div class="item active">  <img src="assets/img/news/news-0.png"></div><div class="item">  <img src="assets/img/news/news-0.png">  </div><div class="item"><img src="assets/img/news/news-0.png">  </div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev">  <span class="glyphicon glyphicon-chevron-left"></span>  <span class="sr-only">Previous</span></a><a class="right carousel-control" href="#myCarousel" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span>  <span class="sr-only">Next</span>  </a></div>');

return carousel;
}
