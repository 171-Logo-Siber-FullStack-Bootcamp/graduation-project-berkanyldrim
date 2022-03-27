<template>
    <!-- Start container -->
    <div id="topbar">
        <div class="container">
            <!-- Start topBar-left -->
            <div class="topbar-left">
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">USD
                        <i class="fa fa-angle-down"></i></button>
                        <ul class="dropdown-menu">                            
                        <li><a >Dolar(USD)</a></li>
                        <li><a >EURO(EUR)</a></li>
                        <li><a >TURKISH LIRA(TL)</a></li>
                        </ul>
                </div>
                <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">english
                        <i class="fa fa-angle-down"></i></button>
                        <ul class="dropdown-menu">                            
                        <li><a >turkish</a></li>
                        </ul>
                </div>
            </div>
            <!-- End topBar-left -->

            <!-- Start voucher -->
            <div class="voucher">
                <a  title="use voucher sale 25%">use voucher sale 25%</a>
                <p>Best discounts and vouchaer codes for online stores</p>
            </div>
            <!-- End voucher -->

            <!-- Start topbar-right -->
            <div class="topbar-right">
                <!-- Start SignIn -->
                <div class="sign-in">
                    <a href="#" title="register"> Register </a>
                    <span>or</span>
                    <a href="#" title="sign in"> Sign in </a>
                </div>
                <!-- End SignIn -->
            </div>
            <!-- End topbar-right -->
        </div>
        <!-- End container -->
    </div>
  
</template>

<script>



export default {
  name: 'TopBar',
  
}
</script>