<template>
  <div class="alert alert-danger alert-dismissible" v-if="error">
    {{error}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuth } from '@/auth/useAuthService';

export default defineComponent({
  setup() {
    const {error} = useAuth();
    return {error}
  },
})
</script>

