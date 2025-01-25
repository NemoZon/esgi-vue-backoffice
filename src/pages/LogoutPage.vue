<script lang="ts">
import { useSession } from '@/store/session';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const session = useSession()
    const router = useRouter()
    session.logout()
    router.push({ name: 'Login' })
  },
};
</script>

<template>
  <p>Loading...</p>
</template>