<script setup lang="ts">

import { NSplit } from 'naive-ui'

export type NestedSplitDescriptor = {
    direction: 'horizontal' | 'vertical'
    position: number
    first: NestedSplitDescriptor | string
    second: NestedSplitDescriptor | string
}

const props = defineProps<{
    descriptor: NestedSplitDescriptor
}>()

</script>

<template>
    <NSplit :direction="props.descriptor.direction" :default-size="props.descriptor.position">
        <template #1>
            <NestedSplit v-if="typeof props.descriptor.first === 'object'" :descriptor="props.descriptor.first" />
            <iframe v-else-if="props.descriptor.first.startsWith('https://')" :src="props.descriptor.first"></iframe>
            <div class="plaintext" v-else><span>{{ props.descriptor.first }}</span></div>
        </template>
        <template #2>
            <NestedSplit v-if="typeof props.descriptor.second === 'object'" :descriptor="props.descriptor.second" />
            <iframe v-else-if="props.descriptor.second.startsWith('https://')" :src="props.descriptor.second"></iframe>
            <div class="plaintext" v-else><span>{{ props.descriptor.second }}</span></div>
        </template>
    </NSplit>
</template>

<style>
iframe {
    border: 0;
    width: 100%;
    height: 100%;
}
.plaintext {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    span {
        background: black;
        color: white;
        padding: 1em;
        border-radius: 1em;;
    }
}
</style>