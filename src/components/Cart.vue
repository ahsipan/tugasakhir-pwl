<template>
<div class="products">
    <div 
        class="card"
        style="width: 18rem;"
        v-for="(product, index) in cart" :key="index">
        <img :src="product.image" class="card-img-top" alt="product.image">
            <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">{{product.cost}}</p>
            <button v-on:click="removeItemFromCart(product)" class="btn btn-danger">REMOVE</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: ["cart"],
  methods: {
    removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    }
  }
};
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