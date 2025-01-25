<script lang="ts">
import { useSession } from '@/store/session';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const session = useSession();
        const router = useRouter();
        return { session, router };
    },
};
</script>

<template>
    <nav class="bg-gray-800 p-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <div class="text-white text-xl font-bold">
                <RouterLink to="/">MyApp</RouterLink>
            </div>
            <div class="flex space-x-4">
                <RouterLink
                    v-if="!session.isLogin"
                    class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    to="/"
                >
                    Login
                </RouterLink>
                <RouterLink
                    v-if="session.isLogin"
                    class="text-red-500 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    to="/logout"
                >
                    Logout
                </RouterLink>
                <RouterLink
                    v-if="session.isLogin"
                    class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    to="/"
                >
                    Home
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
</style>