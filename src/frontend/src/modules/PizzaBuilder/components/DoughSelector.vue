<script>
import pizza from "@/static/pizza.json";

export default {
  name: "DoughSelector",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      pizza,
    };
  },
  methods: {
    handleChange(event) {
      const doughData = pizza.dough.find(
        (dough) => dough.id === event.target.value
      );

      if (doughData) this.$emit("change", doughData);
    },
  },
};
</script>

<template>
  <div class="dough-selector">
    <label
      v-for="item in pizza.dough"
      :key="item.id"
      class="dough-selector__input"
    >
      <input
        :value="item.id"
        :checked="item.id === value"
        type="radio"
        class="dough-selector__input-control visually-hidden"
        @change="handleChange"
      />
      <b
        :style="{ '--dough-image-url': `url(${item.image})` }"
        class="dough-selector__name"
      >
        {{ item.name }}
      </b>
      <span class="dough-selector__description">{{ item.description }}</span>
    </label>
  </div>
</template>

<style lang="scss">
.dough-selector {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.dough-selector__input {
  position: relative;
  margin-right: 8%;
  margin-bottom: 20px;
  padding-left: 50px;
  cursor: pointer;

  &:hover {
    .dough-selector__name::before {
      box-shadow: $shadow-regular;
    }
  }
}

.dough-selector__name {
  @include r-s16-h19;

  &::before {
    @include p_center-v;
    width: 36px;
    height: 36px;
    content: "";
    transition: 0.3s;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: var(--dough-image-url);
  }
}

.dough-selector__input-control:checked + .dough-selector__name::before {
  box-shadow: $shadow-large;
}

.dough-selector__description {
  @include l-s11-h13;

  display: block;
}
</style>
