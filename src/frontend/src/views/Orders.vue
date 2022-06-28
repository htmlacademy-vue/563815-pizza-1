<script>
import BasicLayout from "@/layouts/BasicLayout";
import BasicTitle from "@/common/components/BasicTitle";

export default {
  name: "Orders",
  components: {
    BasicTitle,
    BasicLayout,
  },
};
</script>

<template>
  <BasicLayout>
    <BasicTitle :mods="{ size: 'big' }">Заказы</BasicTitle>
  </BasicLayout>
</template>
