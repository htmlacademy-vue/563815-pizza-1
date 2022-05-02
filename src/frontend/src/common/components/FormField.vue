<script>
export default {
  name: "FormField",
  props: {
    mods: {
      labelHidden: {
        type: Boolean,
        default: false,
      },
    },
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="form-field">
    <label
      :class="{
        'form-field__label': true,
        'visually-hidden': mods.labelHidden,
      }"
      :for="id"
    >
      {{ label }}
    </label>
    <div class="form-field__content">
      <slot :id="id" />
    </div>
  </div>
</template>

<style lang="scss">
.form-field__label {
  @include r-s14-h16;
  display: block;
  margin-bottom: 4px;
}
</style>
