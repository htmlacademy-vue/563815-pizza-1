<script>
import BasicLayout from "@/layouts/BasicLayout";
import BasicTitle from "@/common/components/BasicTitle";

export default {
  name: "Profile",
  components: {
    BasicTitle,
    BasicLayout,
  },
};
</script>

<template>
  <BasicLayout>
    <BasicTitle :mods="{ size: 'big' }">Профиль</BasicTitle>
  </BasicLayout>
</template>
