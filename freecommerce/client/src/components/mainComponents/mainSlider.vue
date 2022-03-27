<template>
    <!-- slider-area start -->
    <div class="slidershow-container">
        <div class="container">
            <div class="slidershow-content">
                <div id="myCarousel" class="carousel slide" data-interval="3000" data-ride="carousel">
                    <!-- Carousel indicators -->
            <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
            <div class="active item">
                <a href="#" title="banner1"><img class="lazy-image" data-original="" alt="banner1" src="assets/images/Futurelife-slideshow1.jpg" /></a> 
            </div>
            <div class="item">
                <a href="#" title="banner2"><img class="lazy-image" data-original="" alt="banner2" src="assets/images/Futurelife-slideshow1.jpg" /></a>
            </div>
            <div class="item">
                <a href="#" title="banner2"><img class="lazy-image" data-original="" alt="banner2" src="assets/images/Futurelife-slideshow1.jpg" /></a>
            </div>
            </div>
                <a class="carousel-control right" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
                <a class="carousel-control left" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-left"></span>
                </a>
                </div>
            </div>
            <!-- End slidershow-content -->
        </div>
    </div>
    <!-- slider-area end -->
</template>

<script>
export default {
    name:"MainSlider"
}
</script>