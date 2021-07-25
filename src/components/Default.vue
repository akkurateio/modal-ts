<template>
    <div class="akk-modal-container">
        <div class="akk-modal-header">
            <h3>{{ title }}</h3>
        </div>

        <div class="akk-modal-body">
            {{ body }}
        </div>

        <div class="akk-modal-footer">
            <button class="akk-modal-default-button" @click="$emit('close')">
                OK
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ButtonModal extends Vue {
    @Prop(String) readonly title: string | undefined;
    @Prop(String) readonly body: string | undefined;
}
</script>
<style scoped >
.akk-modal-container {
    width: 75%;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.akk-modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.akk-modal-body {
    margin: 20px 0;
}
</style>