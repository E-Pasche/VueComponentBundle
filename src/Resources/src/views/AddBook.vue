<script setup>
import { ref, provide } from 'vue';

import BrewMethodsAPI from '../ressources/BrewMethods.js';
import Books from '../components/Books.vue';

const brewMethods = ref({});
const loadBrewMethods = async() => {
    brewMethods.value = await BrewMethodsAPI.index();
};

const form = {
    title: '',
    author: '',
    description: '',
    isbn: '',
    publicationDate: '',
}

const saveBrewMethod = async() => {
    let formData = new FormData();
    console.log(form)
    await BrewMethodsAPI.store( JSON.stringify(form) )
};
</script>

<template>
    <div class="container">
        <h3 class="text-center">Ajouter un livre</h3>
        <hr>
        <div class="row">
            <form v-on:submit.prevent="saveBrewMethod" method="POST" id="form-test-api" class="col-8 offset-2">
            <div>
                <label class="form-label" for="title">Titre</label>
                <input class="form-control" v-model="form.title" required  id="title" type="text">
            </div>
            <div>
                <label class="form-label" for="author">Auteur</label>
                <input class="form-control" v-model="form.author" required id="author" type="text">
            </div>
            <div>                
                <label class="form-label" for="description">Description</label>
                <input class="form-control" v-model="form.description" required id="description" type="text">
            </div>
            <div>
                <label class="form-label" for="isbn">Isbn</label>
                <input class="form-control" v-model="form.isbn" required  id="isbn" type="text">
            </div>
            <div>
                <label class="form-label" for="publicationDate">Date de publication</label>
                <input class="form-control" v-model="form.publicationDate" required id="publicationDate" type="date">
            </div>
            <br>
            <div>
                <button type="submit" class="btn btn-primary">Sauvegarder</button>
            </div>
        </form>        
        </div>

    </div>
</template>