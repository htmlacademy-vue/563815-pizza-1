<script>
import BasicLayout from "@/layouts/BasicLayout";
import BasicTitle from "@/common/components/BasicTitle";

export default {
  name: "Cart",
  components: {
    BasicTitle,
    BasicLayout,
  },
};
</script>

<template>
  <BasicLayout>
    <BasicTitle :mods="{ size: 'big' }">Корзина</BasicTitle>
  </BasicLayout>
</template>
