<script>
import BasicLayout from "@/layouts/BasicLayout";
import BasicTitle from "@/common/components/BasicTitle";

export default {
  name: "Login",
  components: {
    BasicTitle,
    BasicLayout,
  },
};
</script>

<template>
  <BasicLayout>
    <BasicTitle :mods="{ size: 'big' }">Логин</BasicTitle>
  </BasicLayout>
</template>
