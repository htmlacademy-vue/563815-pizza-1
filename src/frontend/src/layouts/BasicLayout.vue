<script>
import PageHeader from "@/common/components/PageHeader";

export default {
  name: "BasicLayout",
  components: {
    PageHeader,
  },
};
</script>

<template>
  <div class="basic-layout">
    <PageHeader />

    <slot></slot>
  </div>
</template>
