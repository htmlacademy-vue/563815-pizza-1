<script>
import BasicLayout from "@/layouts/BasicLayout";
import BasicTitle from "@/common/components/BasicTitle";
import PizzaBuilder from "@/modules/PizzaBuilder/PizzaBuilder";

export default {
  name: "Index",
  components: {
    PizzaBuilder,
    BasicTitle,
    BasicLayout,
  },
};
</script>

<template>
  <BasicLayout>
    <BasicTitle :mods="{ size: 'big' }">Конструктор пиццы</BasicTitle>
    <PizzaBuilder />
  </BasicLayout>
</template>
