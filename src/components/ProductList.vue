<template>
<div>
        <header>
        <button v-on:click="navigateTo('products')" class="btn btn-primary" >View Products</button>
        {{cart.length}}in Cart
        <button v-on:click="navigateTo('cart')" class="btn btn-info" >View Cart</button>
        </header>
<div class="products" v-if="page === 'cart'">
    <Cart v-on:removeItemFromCart="removeItemFromCart" :cart="cart"/>
</div>

<div class="products" v-if="page === 'products'">
   <Products v-on:addItemToCart="addItemToCart"/>
</div>
</div>
</template>

<script>
import Products from '../components/Products.vue'
import Cart from '../components/Cart.vue'
export default {
    name: "ProductList",
    data:() => {
        return {
            page: "products",
            cart: []
        }
    },
    components:{
        Products,
        Cart
    },
    methods:{
        addItemToCart(product){
            this.cart.push(product)
        },
        navigateTo(page){
            this.page=page
        },
        removeItemFromCart(product){
            this.cart.splice(this.cart.indexOf(product),1)
        }
    }
}
</script>
<style>
.products{
    text-align: center;
    grid-template-columns: 1fr 1fr;
}
header{
    background-color: #eee;
    box-shadow: 2px 2px 5px #999;
    text-align: center;
    font-size: 30px;
    margin-top: 130px;
}

</style>