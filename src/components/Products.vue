<template>
<div class="products">
    <div 
        class="card"
        style="width: 18rem;"
        v-for="(product, index) in products" :key="index">
        <img :src="product.image" class="card-img-top" alt="product.image">
            <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">{{product.cost}}</p>
            <button v-on:click="addItemToCart(product)" class="btn btn-primary">Add to cart</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Products",
    data:() => {
        return {
            products: [
                {
                    name: "Roland RD 800",
                    cost: "Rp30.000.000",
                    image: "https://images.tokopedia.net/img/cache/700/product-1/2017/4/21/16575601/16575601_d8377b9a-d31d-42f8-b69d-59530b3d879a_300_300.jpg"
                },
                {
                    name: "Roland RD 700",
                    cost: "Rp27.000.000",
                    image: "https://i.pinimg.com/originals/61/91/71/61917188d999f55d909a30cbba7d282c.jpg"
                },
                {
                    name: "Roland RD 300",
                    cost: "Rp27.000.000",
                    image: "https://images.primanada.com/image/cache/products/roland-rd-300nx-800x800.jpg"
                },
                {
                    name: "Roland XPS 30",
                    cost: "Rp9.000.000",
                    image: "https://images.tokopedia.net/img/cache/700/product-1/2020/8/3/1248519/1248519_2663aab6-1d5f-45de-94d4-ca418a333b5c_1080_1080.jpg"
                }
            ]
        }
    },
    methods: {
        addItemToCart(product){
            this.$emit("addItemToCart", product)
        },
    }
}
</script>
<style>
.products{
    text-align: center;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
header{
    background-color: #eee;
    box-shadow: 2px 2px 5px #999;
    text-align: right;
    font-size: 30px;
    margin-top: 600px;
}
</style>