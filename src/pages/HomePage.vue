<template>
  <div>
    <StudentsList v-if="!isStudent" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StudentsList from '@/components/StudentsList.vue';
import { useSession } from '@/store/session';
import { useRouter } from 'vue-router';
import { useUsers, type StudentDTO } from '@/store/user';

export default defineComponent({
  name: 'HomePage',
  components: {
    StudentsList
  },
  setup() {
    const session = useSession();
    const router = useRouter();

    if (!session.user) {
      console.log('User is not logged in');
      router.push({ name: 'Login' });
    }
    const isStudent = session.user?.role === 'Student';

    if (isStudent && session.user) {
      console.log('User is not an admin');
      router.push({ name: 'Student', params: { id: session.user.id } });
    }

    return {
      session,
      isStudent,
    };
  },
});
</script>