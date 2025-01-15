<template>
  <LoginForm />
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  },
  data() {
    return {
      msg: 'Welcome to Login Page'
    };
  }
};
</script>