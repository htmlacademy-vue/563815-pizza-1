<script>
export default {
  name: "SheetPanel",
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div class="sheet-panel">
    <h2 v-if="title" class="title title--small sheet-panel__title">
      {{ title }}
    </h2>
    <div class="sheet-panel__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.sheet-panel {
  padding-top: 15px;
  border-radius: 8px;
  background-color: $white;
  box-shadow: $shadow-light;
}

.sheet-panel__title {
  padding-right: 18px;
  padding-left: 18px;
}

.sheet-panel__content {
  margin-top: 8px;
  padding-top: 18px;
  padding-right: 18px;
  padding-left: 18px;
  border-top: 1px solid rgba($green-500, 0.1);
}
</style>
