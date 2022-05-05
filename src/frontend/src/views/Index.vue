<script>
import pizza from "../static/pizza.json";
import BasicLayout from "@/layouts/BasicLayout";
import FormField from "@/common/components/FormField";
import TextField from "@/common/components/TextField";
import SheetPanel from "@/common/components/SheetPanel";
import BasicButton from "@/common/components/BasicButton";
import PizzaPreview from "@/common/components/PizzaPreview";
import DoughSelector from "@/common/components/DoughSelector";
import DiameterSelector from "@/common/components/DiameterSelector";
import IngredientsSelector from "@/common/components/IngredientsSelector";

export default {
  name: "Index",
  components: {
    IngredientsSelector,
    DiameterSelector,
    DoughSelector,
    PizzaPreview,
    BasicLayout,
    FormField,
    TextField,
    SheetPanel,
    BasicButton,
  },
  data: function () {
    return {
      pizza,
    };
  },
};
</script>

<template>
  <BasicLayout>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <SheetPanel title="Выберите тесто">
              <DoughSelector />
            </SheetPanel>
          </div>

          <div class="content__diameter">
            <SheetPanel title="Выберите размер">
              <DiameterSelector />
            </SheetPanel>
          </div>

          <div class="content__ingredients">
            <SheetPanel title="Выберите ингредиенты">
              <IngredientsSelector />
            </SheetPanel>
          </div>

          <div class="content__pizza">
            <FormField
              :mods="{ labelHidden: true }"
              id="pizza-name"
              label="Название пиццы"
            >
              <TextField
                id="pizza-name"
                type="text"
                placeholder="Введите название пиццы"
              />
            </FormField>

            <div class="content__constructor">
              <PizzaPreview />
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <BasicButton :disabled="true">Готовьте!</BasicButton>
            </div>
          </div>
        </div>
      </form>
    </main>
  </BasicLayout>
</template>
