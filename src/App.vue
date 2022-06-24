<template>
  <div id="app">
    <Nav></Nav>
    <div class="auth-wrapper">
      <div class="auth-inner">
          <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

  import Nav from './components/Nav.vue'
  export default {
  name: 'App',
  components:{
    Nav,
  }
}

</script>

<style>
* {
  box-sizing: border-box;
}
body{
  background: #ffffff !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}
h1,h2,h3,h4,h5,h6,label,span{
  font-weight: 500;
}
body, html, #app, #root, .auth-wrapper{
  width: 100%;
  height: 100%;
}
#app{
  text-align: center;
}
.navbar-light{
  background-color: #1c8ef9;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}
.auth-wrapper{
  margin-top: 50px;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}
.auth-inner{
  display:flex;
  margin: auto;
  width: 450px;
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
}
.auth-wrapper .form-control:focus{
  border-color: #167bff;
  box-shadow: none;
}
.auth-wrapper h3{
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

custom-control-label{
  font-weight: 400;
}
</style>
