<script>
import pizza from "@/static/pizza.json";

export default {
  name: "DiameterSelector",
  data: function () {
    return {
      pizza,
    };
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleChange(event) {
      const sizeData = pizza.sizes.find(
        (size) => size.multiplier === event.target.value
      );

      if (sizeData) this.$emit("change", sizeData);
    },
  },
};
</script>

<template>
  <div class="diameter">
    <label
      v-for="item in pizza.sizes"
      :key="item.id"
      :class="[
        'diameter__input',
        `diameter__input--multiplier-${item.multiplier}`,
      ]"
    >
      <input
        :value="item.multiplier"
        :checked="item.multiplier === value"
        type="radio"
        class="diameter__input-control visually-hidden"
        @change="handleChange"
      />
      <span class="diameter__name">{{ item.name }}</span>
    </label>
  </div>
</template>

<style lang="scss">
.diameter {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.diameter__input {
  margin-right: 8.7%;
  margin-bottom: 20px;
  padding-top: 7px;
  padding-bottom: 6px;
  cursor: pointer;

  &:nth-child(3n) {
    margin-right: 0;
  }

  &--multiplier-1 {
    .diameter__name::before {
      background-size: 18px;
    }
  }

  &--multiplier-2 {
    .diameter__name::before {
      background-size: 29px;
    }
  }

  &--multiplier-3 {
    .diameter__name::before {
      background-size: 100%;
    }
  }

  &:hover {
    .diameter__name::before {
      box-shadow: $shadow-regular;
    }
  }
}

.diameter__input-control:checked + .diameter__name::before {
  box-shadow: $shadow-large;
}

.diameter__name {
  @include r-s16-h19;

  position: relative;
  padding-left: 46px;

  &::before {
    @include p_center_v;

    width: 36px;
    height: 36px;
    content: "";
    transition: 0.3s;
    border-radius: 50%;
    background-color: $green-100;
    background-image: url("~@/assets/img/diameter.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
