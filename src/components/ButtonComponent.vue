<template>
  <router-link v-if="to" :to="to" :class="computedClasses">
    <slot></slot>
  </router-link>
  <button v-else :type="buttonType" :class="computedClasses">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'button' // default type is 'button'
    }
  },
  computed: {
    computedClasses() {
      return {
        'btns': true, // base button class
        'btn-primarys': this.primary,
        'btn-secondarys': this.secondary,
        'btn-block-wide': this.primary || this.secondary // Apply when primary or secondary is true
      };
    }
  }
}
</script>

<style scoped>
/*  button styles  */
.btns {
  /*  base button styles */
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  outline: none;
}

.btn-primarys {
  /* Add primary button styles */
  background-color: #F06520;
  color: #fff;
}

.btn-primarys:active {
  /* Add primary button styles */
  background-color: #0062cc;
  color: #fff;
  border: none;
}

.btn-secondarys {
  /* Add secondary button styles */
  background-color: #6c757d;
  color: #fff;
}

.btn-block-wide {
  /* Add block styles */
  display: block;
  width: 100%;
}
</style>
