<template>
  <div style="width: 100vw; height: 100vh">
    <div
      style="
        position: sticky;
        top: 0;
        background: white;
        padding: 1rem;
        z-index: 1;
        display: flex;
        gap: 2rem;
        align-items: center;
      "
    >
      <label style="display: flex; align-items: center; gap: 0.5rem">
        Size:
        <input
          type="text"
          v-model.number="size"
          style="width: 50px; padding: 0.25rem; border: 1px solid #eee"
        />
        px
      </label>

      <label
        style="display: flex; align-items: center; gap: 0.5rem; flex: 1"
      >
        Search:
        <input
          type="text"
          v-model="search"
          placeholder="Search icons..."
          style="
            padding: 0.25rem;
            border: 1px solid #eee;
            width: 100%;
            max-width: 300px;
          "
        />
      </label>

      <div style="color: #666; font-size: 0.875rem">
        {{ filteredIcons.length }} icons
      </div>
    </div>

    <div
      style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 3rem;
        padding: 1rem;
      "
    >
      <div
        v-for="icon in filteredIcons"
        :key="icon.name"
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        "
        @click="copyToClipboard(icon.name)"
        title="Click to copy component name"
      >
        <component
          :is="icon.tagName"
          :style="{ width: size + 'px' }"
        />
        <span
          style="
            font-size: 0.75rem;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
            white-space: nowrap;
          "
        >
          {{ icon.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import * as Icons from '@tokens-studio/icons-webcomponents'

const size = ref(16)
const search = ref('')
const icons = ref([])

onMounted(() => {
  // Get all icon classes and register them
  icons.value = Object.entries(Icons)
    .filter(([name]) => name !== 'default')
    .map(([name, IconClass]) => {
      // Get the tag name from the custom element definition
      // The tag name is defined in the class as 'icon-{lowercase}'
      const tagName = `icon-${name.toLowerCase()}`
      return {
        name,
        tagName,
        class: IconClass,
      }
    })
})

const filteredIcons = computed(() => {
  return icons.value.filter((icon) =>
    icon.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
}
</script>
