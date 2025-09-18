<template>
  <div class="container">
  <div class="counter-1" id="card-layout">
    <p>Saurav's Counter</p>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>

  <div class="counter-2" id="card-layout">
    <p>Vishu's Counter</p>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>

  <div class="counter-3" id="card-layout">
    <p>Sam's Counter</p>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>

  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getCount']),
    count() {
      return this.getCount
    }
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>

//Adding css styling
<style scoped>
  div {
    text-align: center;
    margin-top: 50px;
    font-family: Arial, sans-serif;
  }
  p {
    font-size: 24px;
    margin-bottom: 20px;
  }
  button {
    font-size: 18px;
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    border: none;
    background-color: #085633;
    transition: background-color 0.3s ease;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #555151;
    flex-wrap: wrap;
    border-radius: 20px;
    padding: 20px;
  }
  button:hover {
    background-color: #369870;
  }

  #card-layout {
    display: inline-block;
    background-color: #42b983;
    border-radius: 10px;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 250px;
    margin: 20px;
    vertical-align: top;
  }

  counter-1 {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }
  counter-2 {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }
  counter-3 {
    background-color: #e9e9e9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0,  0, 0.1);
    margin-bottom: 30px;}
</style>
