import { watchEffect } from 'vue';
import { RouteLocationNormalized } from 'vue-router';
import { useAuth } from './useAuthService';

export const useRouteGuard = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    const { isAuthenticated, loading, loginWithRedirect } = useAuth();

    const verify = () => {
        // If the user is authenticated, continue with the route
        if (isAuthenticated.value) {
            return true
        }

        // Otherwise, log in
        loginWithRedirect({ appState: { targetUrl: to.fullPath } })
        return false;
    }

    // If loading has already finished, check our auth state using `verify()`
    if (!loading.value) {
        return verify()
    }

    // Watch for the loading property to change before we check isAuthenticated
    watchEffect(() => {
        if (loading.value === false) {
            return verify()
        }
    })
}