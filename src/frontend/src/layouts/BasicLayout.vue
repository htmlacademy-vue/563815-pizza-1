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

    <main class="content">
      <div class="content__wrapper">
        <slot />
      </div>
    </main>
  </div>
</template>
