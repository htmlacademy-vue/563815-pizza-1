<script>
import BasicLayout from "@/layouts/BasicLayout";
import BasicTitle from "@/common/components/BasicTitle";

export default {
  name: "PageNotFound",
  components: {
    BasicTitle,
    BasicLayout,
  },
};
</script>

<template>
  <BasicLayout>
    <BasicTitle :mods="{ size: 'big' }">Страница не найдена</BasicTitle>
  </BasicLayout>
</template>
