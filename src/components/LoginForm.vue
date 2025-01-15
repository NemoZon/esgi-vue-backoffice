<script lang="ts">
import { defineComponent } from 'vue';
import CustomInput from './CustomInput.vue';

export default defineComponent({
  components: {
    CustomInput,
  },
  data(): {
    email: string;
    password: string;
  } {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      console.log('Email:', this.email);
    },
  },
});
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form class="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Login</h2>
      <CustomInput
        v-model:value="email"
        type="email"
        placeholder="Email"
        class="mb-4"
        label="Email"
      />
      <CustomInput
        v-model:value="password"
        type="password"
        placeholder="Password"
        class="mb-6"
        label="Password"
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