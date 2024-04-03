<template>
  <div class="page-title">
    <div class="title-caption">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.page-title {
  border-radius: 5px;
  background-color: #f4f4f4; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

.title-caption {
  padding: 20px;
  text-align: left; 
}
h1 {
  margin: 0;
  font-size: 36px; 
  padding: 10px;
  color: #333; 
  border-bottom: 2px solid #e0e0e0; 
}
</style>