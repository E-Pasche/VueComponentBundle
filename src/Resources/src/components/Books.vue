<script setup>
import { inject } from 'vue';
const items = inject('brewMethods');
</script>

<template>
    <div>
        <div class="row">
            <div class="col-1"><b>Id</b></div>
            <div class="col-3"><b>Isbn</b></div>
            <div class="col-4"><b>Title</b></div>
            <div class="col-4"><b>Author</b></div>
        </div>
        <div class="row" v-for="item in items" :key="item.id">
            <div class="col-1">{{item.id}}</div>
            <div class="col-3">{{item.isbn}}</div> 
            <div class="col-4">{{item.title}} </div>
            <div class="col-4">{{item.author}}</div>
        </div>
    </div>
</template>