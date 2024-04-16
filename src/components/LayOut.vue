<template>
    <ul class="nav navbar-nav">
        <li class="active"><router-link to="/">Home</router-link></li>addstudent
        <li><router-link to="/hello">Hello World</router-link></li>
        <li><router-link to="/product">Product</router-link></li>
        <li><router-link to="/addstudent">add student</router-link></li>
        <li><router-link to="/productListData">productListData</router-link></li>

        
    </ul>
    <hr>
    <router-view></router-view>
</template>