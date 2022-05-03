<script>
import pizza from "../static/pizza.json";
import BasicLayout from "@/layouts/BasicLayout";
import FormField from "@/common/components/FormField";
import TextField from "@/common/components/TextField";
import SheetPanel from "@/common/components/SheetPanel";
import BasicButton from "@/common/components/BasicButton";

export default {
  name: "Index",
  components: { BasicLayout, FormField, TextField, SheetPanel, BasicButton },
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

                  <label
                    v-for="item in pizza.sauces"
                    :key="item.id"
                    class="radio ingredients__input"
                  >
                    <input type="radio" name="sauce" :value="item.id" checked />
                    <span>{{ item.name }}</span>
                  </label>
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

                      <div class="counter counter--orange ingredients__counter">
                        <button
                          type="button"
                          class="counter__button counter__button--minus"
                          disabled
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
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
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
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
