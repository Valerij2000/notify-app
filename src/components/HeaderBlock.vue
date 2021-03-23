<template>
  <div>
    <!-- Loading spinners Header-Block-->
    <div class="block">
      <div v-if="loading" class="spinner-border mb-4" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <h1 v-else class="h3 mb-3 fw-normal text-center animate__animated animate__bounce animate__repeat-3	 animate__slow">Notify App</h1>
    
    </div>
      <h5 class="error text-center mb-4 animate__animated animate__bounce animate__infinite	 animate__slow">{{error}}</h5>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    error: {
      type: String,
      rquired: true,
    }
  },
};
</script>


<style lang="scss">
.block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.error {
  color: red;
}


h1 {
  font-family: 'Arizonia', cursive;
}
</style>