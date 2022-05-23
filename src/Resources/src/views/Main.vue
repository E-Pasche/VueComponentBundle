<script setup>
import { ref, provide } from 'vue';

import BrewMethodsAPI from '../ressources/BrewMethods.js';
import Books from '../components/Books.vue';

const brewMethods = ref({});
const loadBrewMethods = async() => {
    brewMethods.value = await BrewMethodsAPI.index();
};

const form = {
    method: '',
    icon: ''
};

const saveBrewMethod = async() => {
    let formData = new FormData();
    
    formData.append('method', form.method);
    formData.append('icon', form.icon);

    await BrewMethodsAPI.store( formData )
};

provide('brewMethods', brewMethods);

</script>

<template>
    <div class="container">
        <h3 class="text-center">Un titre test :)</h3>
        <hr>
        <div class="row">
            <div class="col">
                <h3 class="text-center">Fetch API</h3>
                <div class="col-12" v-bind="loadBrewMethods()">
                    <Books/>
                </div>
            </div>
        </div>
    </div>
</template>