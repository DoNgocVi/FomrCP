<template>
  <div
    class="form-error"
    v-for="error of errors"
    :key="error.$uid"
  >
    <div class="text-danger">{{ error.$message }}</div>
  </div>
</template>
<script>
export default {
  props: {
    errors: {
      type: Array,
      required: true, 
      default: function () {
        return []
      }
    }
  }
};
</script>