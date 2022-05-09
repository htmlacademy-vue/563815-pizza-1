<script>
export default {
  name: "RadioField",
  props: {
    value: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleChange(event) {
      this.$emit("change", event);
    },
  },
};
</script>

<template>
  <label class="radio">
    <input
      :value="value"
      :checked="checked"
      @change="handleChange"
      type="radio"
      class="radio__input"
    />
    <span class="radio__label">{{ label }}</span>
  </label>
</template>

<style lang="scss">
.radio {
  cursor: pointer;

  &:hover {
    input:not(:checked):not(:disabled) + span {
      &:before {
        border-color: $purple-800;
      }
    }
  }
}

.radio__input {
  display: none;

  &:checked + .radio__label {
    &:before {
      border: 6px solid $green-500;
    }
  }

  &:disabled {
    & + .radio__label {
      &:before {
        border-color: $purple-400;
        background-color: $silver-200;
      }
    }

    &:checked + .radio__label {
      &:before {
        border: 6px solid $purple-400;
      }
    }
  }
}

.radio__label {
  @include r-s16-h19;
  position: relative;
  padding-left: 28px;

  &:before {
    @include p_center-v;

    display: block;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    content: "";
    transition: 0.3s;
    border: 1px solid $purple-400;
    border-radius: 50%;
    background-color: $white;
  }
}
</style>
