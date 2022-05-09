<script>
export default {
  name: "PizzaPreview",
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    sauce: {
      type: Object,
      required: true,
    },
    dough: {
      type: Object,
      required: true,
    },
    size: {
      type: Object,
      required: true,
    },
  },
  computed: {
    selectedIngredients() {
      return this.ingredients.filter((ingredient) => ingredient.count > 0);
    },
    isBigSize() {
      return this.dough.id === "2";
    },
    selectedSauceLabel() {
      return (
        (this.sauce.id === "1" && "tomato") ||
        (this.sauce.id === "2" && "creamy")
      );
    },
  },
  methods: {
    getIngredientLabel(id) {
      switch (id) {
        case "1":
          return "mushrooms";
        case "2":
          return "cheddar";
        case "3":
          return "salami";
        case "4":
          return "ham";
        case "5":
          return "ananas";
        case "6":
          return "bacon";
        case "7":
          return "onion";
        case "8":
          return "chile";
        case "9":
          return "jalapeno";
        case "10":
          return "olives";
        case "11":
          return "tomatoes";
        case "12":
          return "salmon";
        case "13":
          return "mozzarella";
        case "14":
          return "parmesan";
        case "15":
          return "blue_cheese";
      }
    },
  },
};
</script>

<template>
  <div
    :class="[
      'pizza',
      `pizza--foundation--${isBigSize ? 'big' : 'small'}-${selectedSauceLabel}`,
    ]"
  >
    <div class="pizza__wrapper">
      <div
        v-for="ingredient in selectedIngredients"
        :key="ingredient.id"
        :class="[
          'pizza__filling',
          `pizza__filling--${getIngredientLabel(ingredient.id)}`,
          ingredient.count === 2 ? 'pizza__filling--second' : '',
          ingredient.count === 3 ? 'pizza__filling--third' : '',
        ]"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
.pizza {
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &--foundation--big-creamy {
    background-image: url("~@/assets/img/foundation/big-creamy.svg");
  }

  &--foundation--big-tomato {
    background-image: url("~@/assets/img/foundation/big-tomato.svg");
  }

  &--foundation--small-creamy {
    background-image: url("~@/assets/img/foundation/small-creamy.svg");
  }

  &--foundation--small-tomato {
    background-image: url("~@/assets/img/foundation/small-tomato.svg");
  }
}

.pizza__wrapper {
  width: 100%;
  padding-bottom: 100%;
}

.pizza__filling {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &--second {
    transform: rotate(45deg);
  }

  &--third {
    transform: rotate(-45deg);
  }

  &--ananas {
    background-image: url("~@/assets/img/filling-big/ananas.svg");
  }

  &--bacon {
    background-image: url("~@/assets/img/filling-big/bacon.svg");
  }

  &--blue_cheese {
    background-image: url("~@/assets/img/filling-big/blue_cheese.svg");
  }

  &--cheddar {
    background-image: url("~@/assets/img/filling-big/cheddar.svg");
  }

  &--chile {
    background-image: url("~@/assets/img/filling-big/chile.svg");
  }

  &--ham {
    background-image: url("~@/assets/img/filling-big/ham.svg");
  }

  &--jalapeno {
    background-image: url("~@/assets/img/filling-big/jalapeno.svg");
  }

  &--mozzarella {
    background-image: url("~@/assets/img/filling-big/mozzarella.svg");
  }

  &--mushrooms {
    background-image: url("~@/assets/img/filling-big/mushrooms.svg");
  }

  &--olives {
    background-image: url("~@/assets/img/filling-big/olives.svg");
  }

  &--onion {
    background-image: url("~@/assets/img/filling-big/onion.svg");
  }

  &--parmesan {
    background-image: url("~@/assets/img/filling-big/parmesan.svg");
  }

  &--salami {
    background-image: url("~@/assets/img/filling-big/salami.svg");
  }

  &--salmon {
    background-image: url("~@/assets/img/filling-big/salmon.svg");
  }

  &--tomatoes {
    background-image: url("~@/assets/img/filling-big/tomatoes.svg");
  }
}
</style>
