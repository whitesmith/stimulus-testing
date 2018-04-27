<template>
  <div>
    <input v-model="hello" type="text">
    <button v-on:click="greet">Greet</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      hello: 'John'
    }
  },
  methods: {
    greet: function () {
      console.log("Hello, " + this.hello + "!");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
