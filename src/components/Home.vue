<template>

    <div>
        <h3>Hi, {{user.username}}</h3>
        <router-link to="/productlist" class="nav-link">Sign Up</router-link>
        <!-- <div v-if="!user" >
        <h3>You are not logged in!</h3>
        </div> -->
    </div>
    
</template>

<script>
// import axios from 'axios'
// export default{
    
//     name: 'Home',
//     data(){
//         return{
//             user: null
//         }
//     },
//     async created(){
//         const response = await axios.get('user');
//         this.user = response.data;

//     }
// }
</script>
