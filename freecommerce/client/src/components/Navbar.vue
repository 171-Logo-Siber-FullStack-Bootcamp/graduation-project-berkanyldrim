<template>
<header id="header">
    <!-- Header Top Start -->
    <div class="header-top">
        <div class="container">
            <!-- Header Top Left And Middle Start -->
            <div class="col-md-10 col-sm-9 col-xs-12">
                <p class="icon-menu-mobile"><i class="fa fa-bars" ></i></p>
                <div class="logo"><a href="#" title="Futurelife"><img style="height: 50px;" src=".././assets/logo.png" alt="">Frecommerce</a>
                      
                </div>
                <nav class="menu-top">
                    <ul>
                        
                        <li class="level-1"><a href="#" title="Projects">Home</a></li>
                        <li class="level-1"><a href="#" title="collection">Product</a></li>
                        <li class="level-1"><a href="#" title="Blog">Categories</a></li>
                    </ul>
                </nav>                    
            </div>
            <!-- Header Top Left And Middle End -->

            <!-- Header Top Right Start -->
            <div class="col-md-2 col-sm-3 col-xs-12">
                <!-- Start cart -->
                <div class="cart dropdown">
                    <a class="icon-cart" href="#" title="Cart">
                        <i class="fa fa-shopping-cart"></i>
                        <span class="cart-count">02</span>
                    </a>
                    <div class="cart-list dropdown-menu">
                        <ul class="list">
                            <li>
                                <a href="#" title="" class="cart-product-image"><img src="assets/images/Futurelife-product-cart1.jpg" alt="Product"></a>
                                <div class="text">
                                    <p class="product-name">Smart TV Ultra HD 40 inch</p>
                                    <p class="product-price">$ 650.99</p>
                                </div>
                            </li> 
                            <li>
                                <a href="#" title="" class="cart-product-image"><img src="assets/images/Futurelife-product-cart1.jpg" alt="Product"></a>
                                <div class="text">
                                    <p class="product-name">Smart TV Ultra HD 40 inch</p>
                                    <p class="product-price">$ 650.99</p>
                                </div>
                            </li>                                   
                        </ul>
                        <p class="total"><span>Total:</span> $1121.98</p>
                        <a class="checkout" href="#" title="">Check out</a>
                    </div>
                </div>
                <!-- End cart -->

                <!-- Start search -->
                <div class="search dropdown">
                    <i class="fa fa-search dropdown-toggle" data-toggle="dropdown"></i>
                    <div class="search-form dropdown-menu">
                        <form action="#" method="get">
                            <input type="text" autocomplete="off" placeholder="Enter Keywords To Search..." value="" class="ajax_autosuggest_input ac_input" name="s">
                            <button type="submit" class="icon-search">
                                <i class="fa fa-angle-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <!-- End search -->
            </div> 
            <!-- Header Top Left And Middle Start -->

        </div>
        <!-- End container -->
    </div>
    <!-- Header Top End -->

    <!-- Nav Mobile Menu Start -->
    <nav class="mega-menu-mobile">
        <div class="container">
            
            <ul class="nav navbar-nav" id="navbar">
                
                <li class="level1"><a href="#">Home</a></li>
                <li class="level1"><a href="#">Product</a></li>
                <li class="level1"><a href="#">Categories</a></li>
            </ul>
        </div>
    </nav>
    <!-- Nav Mobile Menu End -->
</header>

</template>

<script>

export default {
    name: "NavbarSection",
    
}
</script>