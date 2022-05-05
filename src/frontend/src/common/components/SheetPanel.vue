<script>
import BasicTitle from "@/common/components/BasicTitle";
export default {
  name: "SheetPanel",
  components: { BasicTitle },
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
    <BasicTitle v-if="title" :mods="{ size: 'small' }" mix="sheet-panel__title">
      {{ title }}
    </BasicTitle>
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
