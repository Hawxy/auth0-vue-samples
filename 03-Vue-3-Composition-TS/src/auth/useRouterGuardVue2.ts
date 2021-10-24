// Vue 2 composition API alternative

/*export const useRouteGuard = (to: Route, from: Route, next: NavigationGuardNext) => {
    const { isAuthenticated, loading, loginWithRedirect } = useAuth();

    const verify = () => {
        // If the user is authenticated, continue with the route
        if (isAuthenticated.value) {
            return next()
        }

        // Otherwise, log in
        loginWithRedirect({ appState: { targetUrl: to.fullPath } })
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
}*/