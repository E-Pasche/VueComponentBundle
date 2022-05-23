<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="book_isbn"
        class="form-control-label">isbn</label>
        <input
          id="book_isbn"
          v-model="item.isbn"
          :class="['form-control', !isValid('isbn') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('isbn')"
        class="invalid-feedback">{{ violations.isbn }}</div>
    </div>
    <div class="form-group">
      <label
        for="book_title"
        class="form-control-label">title</label>
        <input
          id="book_title"
          v-model="item.title"
          :class="['form-control', !isValid('title') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('title')"
        class="invalid-feedback">{{ violations.title }}</div>
    </div>
    <div class="form-group">
      <label
        for="book_description"
        class="form-control-label">description</label>
        <input
          id="book_description"
          v-model="item.description"
          :class="['form-control', !isValid('description') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('description')"
        class="invalid-feedback">{{ violations.description }}</div>
    </div>
    <div class="form-group">
      <label
        for="book_author"
        class="form-control-label">author</label>
        <input
          id="book_author"
          v-model="item.author"
          :class="['form-control', !isValid('author') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('author')"
        class="invalid-feedback">{{ violations.author }}</div>
    </div>
    <div class="form-group">
      <label
        for="book_publicationDate"
        class="form-control-label">publicationDate</label>
        <input
          id="book_publicationDate"
          v-model="item.publicationDate"
          :class="['form-control', !isValid('publicationDate') ? 'is-invalid' : 'is-valid']"
          type="dateTime"
          placeholder="">
      <div
        v-if="!isValid('publicationDate')"
        class="invalid-feedback">{{ violations.publicationDate }}</div>
    </div>
    <div class="form-group">
      <label
        for="book_reviews"
        class="form-control-label">reviews</label>
        <select
          v-model="item.reviews"
          id="book_reviews"
          multiple
          class="form-control"
        >
          <option v-for="selectItem in reviewsSelectItems"
                  :key="selectItem['@id']"
                  :value="selectItem['@id']"
                  :selected="isSelected('reviews', selectItem['@id'])">{{ selectItem.name }}
          </option>
        </select>
      <div
        v-if="!isValid('reviews')"
        class="invalid-feedback">{{ violations.reviews }}</div>
    </div>

    <button
      type="submit"
      class="btn btn-success">Submit</button>
  </form>
</template>

<script>
  import { find, get, isUndefined } from 'lodash';
  import { mapFields } from 'vuex-map-fields';
  import { mapActions } from 'vuex';

  export default {
  props: {
    handleSubmit: {
      type: Function,
      required: true,
    },

    values: {
      type: Object,
      required: true,
    },

    errors: {
      type: Object,
      default: () => {},
    },

    initialValues: {
      type: Object,
      default: () => {},
    }
  },

  mounted() {
    this.reviewsGetSelectItems();
  },

  computed: {
    ...mapFields('reviews/list', {
      'reviewsSelectItems': 'selectItems',
    }),

    // eslint-disable-next-line
    item() {
      return this.initialValues || this.values;
    },

    violations() {
      return this.errors || {};
    },
  },

  methods: {
    ...mapActions({
        reviewsGetSelectItems: 'reviews/list/getSelectItems',
    }),

    isSelected(collection, id) {
      return find(this.item[collection], ['@id', id]) !== undefined;
    },

    isValid(key) {
      return isUndefined(get(this.violations, key));
    },
  },
};
</script>
