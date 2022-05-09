<script>
import RadioField from "@/common/components/RadioField";
import BasicCounter from "@/common/components/BasicCounter";
import pizza from "@/static/pizza.json";

export default {
  name: "IngredientsSelector",
  components: { RadioField, BasicCounter },
  data: function () {
    return {
      pizza,
    };
  },
  props: {
    sauce: {
      type: String,
      required: true,
    },
    onSauceChange: {
      type: Function,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    onIngredientsChange: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleIngredientChange(id, value) {
      this.onIngredientsChange(id, value);
    },
    handlePizzaSauceChange(event) {
      const sauceData = pizza.sauces.find(
        (sauce) => sauce.id === event.target.value
      );

      if (sauceData) this.onSauceChange(sauceData);
    },
    handleDragStart(event, id, count) {
      event.dataTransfer.setData("ingredientId", id);
      event.dataTransfer.setData("ingredientCount", count);
    },
  },
};
</script>

<template>
  <div class="ingredients-selector">
    <div class="ingredients-selector__sauce">
      <p class="ingredients-selector__sauce-title">Основной соус:</p>

      <div
        v-for="item in pizza.sauces"
        :key="item.id"
        class="ingredients-selector__input"
      >
        <RadioField
          :label="item.name"
          :checked="item.id === sauce"
          :value="item.id"
          :onChange="handlePizzaSauceChange"
        />
      </div>
    </div>

    <div class="ingredients-selector__filling">
      <p class="ingredients-selector__filling-title">Начинка:</p>

      <ul class="ingredients-selector__list">
        <li
          v-for="ingredient in ingredients"
          class="ingredients-selector__item"
          :key="ingredient.id"
          :style="{
            '--ingredientIconURL': 'url(' + ingredient.image + ')',
          }"
        >
          <span
            :draggable="ingredient.count < 3"
            @dragstart="
              handleDragStart($event, ingredient.id, ingredient.count)
            "
            class="filling"
            >{{ ingredient.name }}</span
          >

          <BasicCounter
            :itemId="ingredient.id"
            :onChange="handleIngredientChange"
            :count="ingredient.count"
            mix="ingredients-selector__counter"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.ingredients-selector__sauce {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin-bottom: 14px;
}

.ingredients-selector__sauce-title {
  @include r-s16-h19;

  margin-top: 0;
  margin-right: 16px;
  margin-bottom: 10px;
}

.ingredients-selector__input {
  margin-right: 24px;
  margin-bottom: 10px;
}

.ingredients-selector__filling {
  width: 100%;
}

.ingredients-selector__filling-title {
  @include r-s16-h19;

  margin-top: 0;
  margin-bottom: 16px;
}

.ingredients-selector__list {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.ingredients-selector__item {
  width: 100px;
  min-height: 40px;
  margin-right: 17px;
  margin-bottom: 35px;
}

.ingredients-selector__counter {
  width: 54px;
  margin-top: 10px;
  margin-left: 36px;
}
</style>
