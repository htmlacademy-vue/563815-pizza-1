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
      pizza,
      pizzaTitle: "",
    };
  },
  methods: {
    handlePizzaTitleInput(value) {
      this.pizzaTitle = value;
    },
  },
};
</script>

<template>
  <div class="pizza-builder">
    <div class="pizza-builder__dough">
      <SheetPanel title="Выберите тесто">
        <DoughSelector />
      </SheetPanel>
    </div>

    <div class="pizza-builder__diameter">
      <SheetPanel title="Выберите размер">
        <DiameterSelector />
      </SheetPanel>
    </div>

    <div class="pizza-builder__ingredients">
      <SheetPanel title="Выберите ингредиенты">
        <IngredientsSelector />
      </SheetPanel>
    </div>

    <div class="pizza-builder__pizza">
      <FormField
        :mods="{ labelHidden: true }"
        id="pizza-name"
        label="Название пиццы"
      >
        <TextField
          :value="pizzaTitle"
          :onInput="handlePizzaTitleInput"
          id="pizza-name"
          type="text"
          placeholder="Введите название пиццы"
        />
      </FormField>

      <div class="pizza-builder__constructor">
        <PizzaPreview />
      </div>

      <div class="pizza-builder__result">
        <p>Итого: 0 ₽</p>
        <BasicButton :disabled="true">Готовьте!</BasicButton>
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
