<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { routesComponent } from '../router/index.js';
</script>

<template>
    <ul class="navbar-nav ms-auto">
        <li class="nav-item" v-for="route in routesComponent" :key="route.path">
            <router-link class="nav-link" :to="route.path">{{ route.displayName }}</router-link>
        </li>
    </ul>
</template>