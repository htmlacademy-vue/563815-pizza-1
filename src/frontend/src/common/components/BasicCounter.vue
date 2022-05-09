<script>
export default {
  name: "BasicCounter",
  props: {
    mix: {
      type: String,
      default: null,
    },
    itemId: {
      type: String,
      required: true,
    },
    onChange: {
      type: Function,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleCountIncrease() {
      this.onChange(this.itemId, this.count + 1);
    },
    handleCountDecrease() {
      this.onChange(this.itemId, this.count - 1);
    },
    handleCountInput(event) {
      this.onChange(this.itemId, event.target.value);
    },
  },
};
</script>

<template>
  <div :class="['basic-counter', mix]">
    <button
      :disabled="count === 0"
      @click="handleCountDecrease"
      type="button"
      class="basic-counter__button basic-counter__button--minus"
    >
      <span class="visually-hidden">Меньше</span>
    </button>

    <input
      :value="count"
      @change="handleCountInput"
      name="basic-counter"
      class="basic-counter__input"
      type="text"
    />

    <button
      :disabled="count === 3"
      @click="handleCountIncrease"
      type="button"
      class="basic-counter__button basic-counter__button--plus"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<style lang="scss">
.basic-counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.basic-counter__button {
  $size_icon: 50%;
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  border-radius: 50%;
  outline: none;

  &--minus {
    background-color: $purple-100;

    &::before {
      @include p_center-all;
      width: $size_icon;
      height: 2px;
      content: "";
      border-radius: 2px;
      background-color: $black;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: $purple-200;
    }

    &:active:not(:disabled) {
      background-color: $purple-300;
    }

    &:focus:not(:disabled) {
      box-shadow: $shadow-regular;
    }

    &:disabled {
      cursor: default;

      &::before {
        opacity: 0.1;
      }
    }
  }

  &--plus {
    background-color: $green-500;

    &::before {
      @include p_center-all;
      width: $size_icon;
      height: 2px;
      content: "";
      border-radius: 2px;
      background-color: $white;
    }

    &::after {
      @include p_center-all;
      width: $size_icon;
      height: 2px;
      content: "";
      transform: translate(-50%, -50%) rotate(90deg);
      border-radius: 2px;
      background-color: $white;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: $green-400;
    }

    &:active:not(:disabled) {
      background-color: $green-600;
    }

    &:focus:not(:disabled) {
      box-shadow: $shadow-regular;
    }

    &:disabled {
      cursor: default;
      opacity: 0.3;
    }
  }

  &--orange {
    background-color: $orange-200;

    &:hover:not(:active):not(:disabled) {
      background-color: $orange-100;
    }

    &:active:not(:disabled) {
      background-color: $orange-300;
    }
  }
}

.basic-counter__input {
  @include r-s14-h16;
  box-sizing: border-box;
  width: 22px;
  margin: 0;
  padding: 0 3px;
  text-align: center;
  color: $black;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: transparent;

  &:focus {
    box-shadow: inset $shadow-regular;
  }
}
</style>
