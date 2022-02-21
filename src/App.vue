<template>
  <div class="app-container">
    <div class="actions-container">
      <SelectInput
        :array="getStores"
        :val="selectedStore"
        @selected="onSelectedStore"
      >
      </SelectInput>
      <SelectInput
        :array="getModels"
        :val="selectedModel"
        @selected="onSelectedModel"
      >
      </SelectInput>
      <button @click="clearFilters">Clear filters</button>
    </div>
    <div class="list-container" v-if="getData.length > 0">
      <h3>Total entries {{ getData.length }}</h3>

      <ListItem v-for="(item, index) in getData" :key="index" :item="item">
      </ListItem>
    </div>
    <p v-else>No results found with filters applied. Try another ones</p>
  </div>
</template>

<script>
import ListItem from "./components/ListItem";
import SelectInput from "./components/SelectInput";
export default {
  name: "App",
  components: {
    ListItem,
    SelectInput,
  },
  data() {
    return {
      data: [],
      selectedStore: "",
      selectedModel: "",
      orderByInventory: "",
    };
  },
  methods: {
    addItemToData(item) {
      this.data.push(item);
    },
    onSelectedStore(val) {
      this.selectedStore = val;
    },
    onSelectedModel(val) {
      this.selectedModel = val;
    },
    clearFilters() {
      this.selectedModel = "";
      this.selectedStore = "";
    },
  },
  computed: {
    getData() {
      let arr = [...this.data];
      if (this.selectedStore != "") {
        arr = arr.filter((x) => x.store == this.selectedStore);
      }
      if (this.selectedModel != "") {
        arr = arr.filter((x) => x.model == this.selectedModel);
      }
      return arr;
    },
    getStores() {
      return new Set(
        this.data.map((x) => {
          return x.store;
        })
      );
    },
    getModels() {
      return new Set(
        this.data.map((x) => {
          return x.model;
        })
      );
    },
  },
  mounted() {
    const ws = new WebSocket("ws://localhost:8080/");
    ws.onmessage = (event) => {
      if (event.data) {
        this.addItemToData(JSON.parse(event.data));
      }
    };
  },
};
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  .list-container {
    max-width: 1280px;
    margin: auto;
  }
  .actions-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 80px;
  }
  button {
    width: 300px;
    padding: 8px 32px;
    cursor: pointer;
  }
}
</style>
