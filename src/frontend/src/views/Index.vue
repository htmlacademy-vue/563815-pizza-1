<script>
import pizza from "../static/pizza.json";
import BasicLayout from "@/layouts/BasicLayout";
import FormField from "@/common/components/FormField";
import TextField from "@/common/components/TextField";
import SheetPanel from "@/common/components/SheetPanel";
import BasicButton from "@/common/components/BasicButton";
import RadioField from "@/common/components/RadioField";
import PizzaPreview from "@/common/components/PizzaPreview";
import BasicCounter from "@/common/components/BasicCounter";

export default {
  name: "Index",
  components: {
    BasicCounter,
    PizzaPreview,
    BasicLayout,
    FormField,
    TextField,
    SheetPanel,
    BasicButton,
    RadioField,
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
              <div class="dough">
                <label
                  v-for="item in pizza.dough"
                  class="dough__input dough__input--light"
                  :key="item.id"
                >
                  <input
                    type="radio"
                    name="dought"
                    :value="item.id"
                    class="visually-hidden"
                    checked
                  />
                  <b>{{ item.name }}</b>
                  <span>{{ item.description }}</span>
                </label>
              </div>
            </SheetPanel>
          </div>

          <div class="content__diameter">
            <SheetPanel title="Выберите размер">
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
                    type="radio"
                    name="diameter"
                    :value="item.multiplier"
                    class="visually-hidden"
                  />
                  <span>{{ item.name }}</span>
                </label>
              </div>
            </SheetPanel>
          </div>

          <div class="content__ingredients">
            <SheetPanel title="Выберите ингредиенты">
              <div class="ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>

                  <div
                    v-for="item in pizza.sauces"
                    :key="item.id"
                    class="ingredients__input"
                  >
                    <RadioField
                      :label="item.name"
                      :checked="true"
                      :value="item.id"
                    />
                  </div>
                </div>

                <div class="ingredients__filling">
                  <p>Начинка:</p>

                  <ul class="ingredients__list">
                    <li
                      v-for="ingredient in pizza.ingredients"
                      class="ingredients__item"
                      :key="ingredient.id"
                      :style="{
                        '--ingredientIconURL': 'url(' + ingredient.image + ')',
                      }"
                    >
                      <span class="filling">{{ ingredient.name }}</span>

                      <BasicCounter mix="ingredients__counter" />
                    </li>
                  </ul>
                </div>
              </div>
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
