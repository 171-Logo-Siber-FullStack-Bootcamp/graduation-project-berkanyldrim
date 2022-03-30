<template>
<div class="main-content">
    <div class="container">
            <!-- Start title text -->
            <div class="title-text">
                <h3>Our new products</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <!-- End title text -->

            <!-- Start OurNewProduct -->
            <div class="slider-product our-new-product">
                <ul class="tabs">
                    <li class="item" rel="">Tables</li>
                    <li class="item" rel="chairs">Chairs</li>
                    <li class="item" rel="lights">Lights</li>
                    <li class="item" rel="sofas">Sofas</li>
                    <li class="item" rel="accessories">Accessories</li>
                </ul>
                <div class="tab-container space-30">
                    <div id="tables" class="tab-content">
                        <div class="product-tab-content products">
                            <div class="item-inner" v-for="product of products " :key="product.id">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" :src="'http://localhost:3000'+product.image" alt=""/>
                                        <img class="secondary_image" :src="'http://localhost:3000'+product.image" alt=""/>
                                    </a>
                                    <p class="product-title">{{ product.name }}</p>
                                    <p class="product-price">{{ product.price }}</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <!-- End product-tab-content products                                     -->
                    </div>
                    <!-- End Tables -->
                    <div id="chairs" class="tab-content">
                        <div class="product-tab-content products">
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End product-tab-content products-->
                    </div>
                    <!-- End Chairs -->
                    <div id="lights" class="tab-content">
                        <div class="product-tab-content products">
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/2.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End product-tab-content products-->
                    </div>
                    <!-- End Lights -->
                    <div id="sofas" class="tab-content">
                        <div class="product-tab-content products">
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End product-tab-content products-->
                    </div>
                    <!-- End Sofas -->
                    <div id="accessories" class="tab-content">
                        <div class="product-tab-content products">
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-inner">
                                <div class="product">
                                    <a class="product-images" href="#" title="">
                                        <img class="primary_image" src="assets/images/products/1.jpg" alt=""/>
                                        <img class="secondary_image" src="assets/images/products/1.jpg" alt=""/>
                                    </a>
                                    <p class="product-title">Smart TV Ultra HD 40 inch - 40JU6600</p>
                                    <p class="product-price">$ 650.99</p>
                                    <a class="add-to-cart" href="#">Add to Cart</a>
                                    <div class="action">
                                        <a href="#" title="Like"><i class="fa fa-heart-o"></i></a>
                                        <a href="#" title="View"><i class="fa fa-compress"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End product-tab-content products-->
                    </div>
                    <!-- End Accessories -->
                </div>
            </div>
            <!-- End OurNewProduct -->
    </div>             
</div>

</template>

<script>
  import axios from "axios";
  export default {
    name:"MainContent",
    created() {
      this.getProducts();
    },
    data() {
      return {
        products: [],
        errors: []
      };
    },
    methods: {
      getProducts() {
        axios
          .get("http://localhost:3000/api/getallproduct")
          .then(response => (this.products = response.data))
          .catch(error => {
            this.errors.push(error);
          });
      }
    }
  };
</script>