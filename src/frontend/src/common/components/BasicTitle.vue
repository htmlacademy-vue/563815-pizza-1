<script>
export default {
  name: "BasicTitle",
  props: {
    tag: {
      type: String,
      default: "h1",
    },
    mods: {
      size: {
        validator(value) {
          return ["small", "big"].includes(value);
        },
        default: null,
      },
    },
  },
};
</script>

<template>
  <h1 :class="['title', mods.size ? `title--size-${mods.size}` : '']">
    <slot />
  </h1>
</template>

<style lang="scss">
.title {
  box-sizing: border-box;
  width: 100%;
  margin: 0;

  color: $black;

  &--size-big {
    @include b-s36-h42;
  }

  &--size-small {
    @include b-s18-h21;
  }
}
</style>
