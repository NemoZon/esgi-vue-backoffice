<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form class="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Login</h2>
      <CustomInput
        v-model="email"
        type="email"
        placeholder="Email"
        class="mb-4"
      />
      <CustomInput
        v-model="password"
        type="password"
        placeholder="Password"
        class="mb-6"
      />
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        @click.prevent="onSubmit"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue';

export default {
  components: {
    CustomInput,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>