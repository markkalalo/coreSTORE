<template>
  <div class="col-md-3 col-12 p-2">
    <div class="dashboard-box">
      <div class="total">{{ total }}</div>
      <div class="dashboard-box-caption">{{ title }}</div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0 // Default value if total is not provided
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>
  
<style scoped>
.dashboard-box {
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.23);
  padding: 30px;
  background-color: #fff;
  border-radius: 5px; /* Adding border radius for a rounded appearance */
}

.total {
  font-size: 24px; /* Increase font size for total */
  font-weight: bold; /* Make total text bold */
}

.dashboard-box-caption {
  margin-top: 10px; /* Add some spacing between total and caption */
  font-size: 16px; /* Adjust caption font size */
}
</style>
