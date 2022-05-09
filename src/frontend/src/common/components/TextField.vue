<script>
export default {
  name: "TextField",
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<template>
  <div class="text-field">
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      class="text-field__input"
      @input="this.handleInput"
    />
  </div>
</template>

<style lang="scss">
.text-field__input {
  @include r-s16-h19;

  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 8px 16px;
  transition: 0.3s;
  color: $black;
  border: 1px solid $purple-400;
  border-radius: 8px;
  outline: none;
  background-color: $white;
  font-family: inherit;

  &:focus {
    border-color: $green-500;
  }
}
</style>
