<template>
  <div>
    <StudentsList :students="students" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StudentsList from '@/components/StudentsList.vue';
import { useSession } from '@/store/session';
import { useRouter } from 'vue-router';
import type { StudentDTO } from '@/store/user';
import { getUsers } from '@/http/userAPI'; // Ensure this import is correct
import { isStudent } from '@/data/entities/User';

export default defineComponent({
  name: 'HomePage',
  components: {
    StudentsList
  },
  data() {
    return {
      students: [] as StudentDTO[],
    };
  },
  methods: {
    async getUsers() {
      try {
        const usersFromAPI = await getUsers();
        console.log("usersFromAPI", usersFromAPI);
        
        this.students = usersFromAPI
          .filter(isStudent)
          .map((user) => ({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            evaluations: user.evaluations,
            absences: user.absences,
          }));
        
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    const session = useSession();
    const router = useRouter();

    if (!session.user) {
      console.log('User is not logged in');
      router.push({ name: 'Login' });
    } else {
      this.getUsers();
    }
  }
});
</script>