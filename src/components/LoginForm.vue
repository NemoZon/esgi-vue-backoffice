<script lang="ts">
import { defineComponent } from 'vue';
import CustomInput from './CustomInput.vue';
import { login } from '@/http/authAPI';
import { useSession } from '@/store/session';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const session = useSession()
    const router = useRouter()
    return { session, router }
  },
  components: {
    CustomInput,
  },
  data(): {
    email: string;
    password: string;
    error: Error | null;
  } {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async onSubmit() {
      try {
        if (!this.email || !this.password) {
          throw new Error('Email and password are required');
        }
        const user = await login(this.email, this.password);
        this.session.login({ user: { id: user._id, email: user.email, role: user.role } })
        this.router.push({ name: 'Home' });
      } catch (error) {
        console.error(error);
        if (error instanceof Error) this.error = error;
      }
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
      <p v-if="error" class="text-red-500 text-xs italic mb-4">{{ error.message }}</p>
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