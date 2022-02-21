<template>
  <div class="item-container">
    <span class="item-label">Store: </span>
    <span>{{ item.store }}</span>
    <span class="item-label">Model: </span>
    <span>{{ item.model }}</span>
    <span class="item-label">Inventory: </span>
    <span>{{ item.inventory }}</span>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
.item-container {
  display: grid;
  grid-template-columns: 80px 2fr 80px 1fr 80px 80px;
  padding: 8px 32px;
  &:hover {
    background: #f3f3f3;
    border-radius: 8px;
    box-shadow: #c2c2c2 2px 2px 12px;
  }
  .item-label {
    font-weight: 800;
  }
}
</style>
