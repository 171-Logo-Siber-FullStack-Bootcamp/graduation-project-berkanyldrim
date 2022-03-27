<template>
    <!-- subscribe-area start -->
        <div class="newsletter">
            <div class="text">
                <h3>Newsletter</h3>
                <p>Subscribe to the Futurelife mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                <form action="#" method="get" accept-charset="utf-8">
                    <input type="text" onblur="if (this.value == '') {this.value = 'Enter Your Email';}" onfocus="if(this.value != '') {this.value = '';}" value="Enter Your Email" class="input-text required-entry validate-email" title="Sign up for our newsletter" id="newsletter" name="email">
                    <button class="button" title="Subscribe" type="submit">Subscribe</button>
                </form>
            </div>
        </div>

        <div class="shipping-container">
            <div class="container">
                <div class="col-md-4">
                    <div class="shipping-item">
                        <p class="images"></p>
                        <div class="text">
                            <h3>24/7 CUSTOMER SERVICE</h3>
                            <p>Service Support 24/7</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="shipping-item">
                        <p class="images"></p>
                        <div class="text">
                            <h3>MONEY BACK GUARANTEE !</h3>
                            <p>100% Money Back - 30 Days</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="shipping-item">
                        <p class="images"></p>
                        <div class="text">
                            <h3>FREE SHIPPING WORLDWIDE</h3>
                            <p>Free shipping worldwide</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- subscribe-area end -->
</template>

<script>
export default {
    name:"MainSubscribe"
}
</script>