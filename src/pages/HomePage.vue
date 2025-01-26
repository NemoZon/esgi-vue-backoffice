<template>
  <div>
    <StudentsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StudentsList from '@/components/StudentsList.vue';
import { useSession } from '@/store/session';
import { useRouter } from 'vue-router';
import type { StudentDTO } from '@/store/user';

export default defineComponent({
  name: 'HomePage',
  components: {
    StudentsList
  },
  mounted() {
    const session = useSession();
    const router = useRouter();

    if (!session.user) {
      console.log('User is not logged in');
      router.push({ name: 'Login' });
    }
  }
});
</script>