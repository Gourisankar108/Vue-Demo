import { defineStore } from 'pinia';
import router from '@/router/index';
import { computed, ref } from 'vue';
import { useAlertStore } from '@/stores';
import { useUsersStore } from '@/stores';

export const useAuthStore = defineStore('authentication', () => {
    const userStore = useUsersStore();
    const loggedUser = ref(JSON.parse(localStorage.getItem('auth')) ?? {});
    const isAuthenticated = computed(()=>Object.keys(loggedUser.value).length!==0 ? true : false);

    function login(user) {
        try {
            const alertStore = useAlertStore();
            const allUsers = userStore.getAllUsers();
            const authUser = allUsers.find(u => u.email == user.email && u.password == user.password);
            if (!authUser) {
                alertStore.error('Invalid Credential');
                return;
            }
            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('auth', JSON.stringify(authUser));
            loggedUser.value = authUser ?? {}
            alertStore.success('Logged in Successfully');
            router.push({ name: "dashboard" });
        } catch (error) {
            const alertStore = useAlertStore();
            alertStore.error(error);
        }
    }

    function logout() {
        localStorage.removeItem('auth');
        loggedUser.value = {}
        router.push({ name: "login" });
    }

    return {
        isAuthenticated,
        loggedUser,
        login,
        logout
    };
});