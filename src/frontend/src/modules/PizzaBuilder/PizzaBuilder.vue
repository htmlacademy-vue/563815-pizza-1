<script>
import pizza from "../../static/pizza.json";
import FormField from "@/common/components/FormField";
import TextField from "@/common/components/TextField";
import SheetPanel from "@/common/components/SheetPanel";
import BasicButton from "@/common/components/BasicButton";
import PizzaPreview from "@/modules/PizzaBuilder/components/PizzaPreview";
import DoughSelector from "@/modules/PizzaBuilder/components/DoughSelector";
import DiameterSelector from "@/modules/PizzaBuilder/components/DiameterSelector";
import IngredientsSelector from "@/modules/PizzaBuilder/components/IngredientsSelector";
import { maxIngredientCount } from "@/constants/pizza";

const initialIngredientsState = pizza.ingredients.map((item) => ({
  ...item,
  count: 0,
}));

export default {
  name: "PizzaBuilder",
  components: {
    IngredientsSelector,
    DiameterSelector,
    DoughSelector,
    PizzaPreview,
    FormField,
    TextField,
    SheetPanel,
    BasicButton,
  },
  data: function () {
    return {
      pizzaTitle: "",
      pizzaSize: pizza.sizes[0],
      pizzaDough: pizza.dough[0],
      pizzaSauce: pizza.sauces[0],
      pizzaIngredients: initialIngredientsState,
    };
  },
  computed: {
    isReadyToCooking() {
      const areThereIngredients = this.pizzaIngredients.some(
        (ingr) => ingr.count > 0
      );

      const isThereTitle = this.pizzaTitle.length > 0;

      return areThereIngredients && isThereTitle;
    },
    price() {
      const sizePrice = Number(this.pizzaSize.multiplier);
      const { price: doughPrice } = this.pizzaDough;
      const { price: saucePrice } = this.pizzaSauce;
      const ingredientsPrice = this.pizzaIngredients.reduce(
        (acc, ingredient) => {
          return ingredient.count > 0
            ? acc + ingredient.price * ingredient.count
            : acc;
        },
        0
      );

      return sizePrice * (doughPrice + saucePrice + ingredientsPrice);
    },
  },
  methods: {
    handlePizzaTitleInput(value) {
      this.pizzaTitle = value;
    },
    handlePizzaSizeChange(value) {
      this.pizzaSize = value;
    },
    handlePizzaDoughChange(value) {
      this.pizzaDough = value;
    },
    handlePizzaSauceChange(value) {
      this.pizzaSauce = value;
    },
    handleIngredientsChange({ id, count }) {
      const index = this.pizzaIngredients.findIndex((i) => i.id === id);

      if (index >= 0) {
        const newItems = [...this.pizzaIngredients];
        if (count > maxIngredientCount) {
          newItems[index].count = maxIngredientCount;
        } else if (count < 0) {
          newItems[index].count = 0;
        } else {
          newItems[index].count = Number(count);
        }

        this.pizzaIngredients = newItems;
      }
    },
    handleIngredientDrop(event) {
      const id = event.dataTransfer.getData("ingredientId");
      const count = Number(event.dataTransfer.getData("ingredientCount"));

      this.handleIngredientsChange({ id, count: count + 1 });
    },
  },
};
</script>

<template>
  <div class="pizza-builder">
    <div class="pizza-builder__dough">
      <SheetPanel title="Выберите тесто">
        <DoughSelector
          :value="pizzaDough.id"
          @change="handlePizzaDoughChange"
        />
      </SheetPanel>
    </div>

    <div class="pizza-builder__diameter">
      <SheetPanel title="Выберите размер">
        <DiameterSelector
          :value="pizzaSize.multiplier"
          @change="handlePizzaSizeChange"
        />
      </SheetPanel>
    </div>

    <div class="pizza-builder__ingredients">
      <SheetPanel title="Выберите ингредиенты">
        <IngredientsSelector
          :sauce="pizzaSauce.id"
          :ingredients="pizzaIngredients"
          @sauceChange="handlePizzaSauceChange"
          @ingredientsChange="handleIngredientsChange"
        />
      </SheetPanel>
    </div>

    <div class="pizza-builder__pizza">
      <FormField
        id="pizza-name"
        :mods="{ labelHidden: true }"
        label="Название пиццы"
      >
        <TextField
          id="pizza-name"
          :value="pizzaTitle"
          type="text"
          placeholder="Введите название пиццы"
          @input="handlePizzaTitleInput"
        />
      </FormField>

      <div
        class="pizza-builder__constructor"
        @dragenter.prevent
        @dragover.prevent
        @drop="handleIngredientDrop"
      >
        <PizzaPreview
          :ingredients="pizzaIngredients"
          :sauce="pizzaSauce"
          :dough="pizzaDough"
          :size="pizzaSize"
        />
      </div>

      <div class="pizza-builder__result">
        <p>Итого: {{ price }} ₽</p>
        <BasicButton :disabled="!isReadyToCooking">Готовьте!</BasicButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pizza-builder {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  padding-bottom: 30px;
}

.pizza-builder__dough {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}

.pizza-builder__diameter {
  width: 373px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.pizza-builder__ingredients {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}

.pizza-builder__pizza {
  width: 373px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.pizza-builder__constructor {
  width: 315px;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
}

.pizza-builder__result {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 25px;

  p {
    @include b-s24-h28;

    margin: 0;
  }

  button {
    margin-left: 12px;
    padding: 16px 45px;
  }
}
</style>
