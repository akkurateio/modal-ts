<template>
    <div>
        <button @click="open">Open Modal</button>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ButtonModal extends Vue {
    tugudu: any;
    async mounted() {
        // @ts-ignore
        this.tugudu = await this.$modal.create(() => import('./Default'), {
            title: 'Salut les gens',
            body: 'Pas cool',
        });
    }
    open() {
        this.tugudu.open();
    }
}
</script>
