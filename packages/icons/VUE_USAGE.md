# Using Icons in Vue Projects

These icons are web components that work seamlessly in Vue projects.

## Installation

```bash
npm install @tokens-studio/icons-v2
```

## Usage

### Method 1: Import and Use Directly in Templates

```vue
<template>
  <div>
    <!-- Import registers the custom element automatically -->
    <icon-user></icon-user>
    <icon-swatchbook></icon-swatchbook>
  </div>
</template>

<script setup>
// Import to register the custom element
import "@tokens-studio/icons-v2/User";
import "@tokens-studio/icons-v2/SwatchBook";
</script>
```

### Method 2: Import All Icons Globally

```vue
<!-- main.js or main.ts -->
import { createApp } from 'vue'; import App from './App.vue'; // Import all
icons import * as Icons from '@tokens-studio/icons-v2'; // Icons are
automatically registered as custom elements const app = createApp(App);
app.mount('#app');
```

Then use in any component:

```vue
<template>
  <icon-user></icon-user>
</template>
```

### Method 3: Dynamic Import

```vue
<template>
  <component :is="iconName"></component>
</template>

<script setup>
import { ref, onMounted } from "vue";

const iconName = ref("icon-user");

onMounted(async () => {
  // Dynamically import icon
  await import("@tokens-studio/icons-v2/User");
});
</script>
```

## Styling

Icons use `currentColor` for stroke/fill, so you can style them with CSS:

```vue
<template>
  <icon-user class="my-icon"></icon-user>
</template>

<style scoped>
.my-icon {
  color: #3b82f6; /* Blue */
  width: 32px;
  height: 32px;
}
</style>
```

## TypeScript Support

If using TypeScript, you may need to declare the custom elements:

```typescript
// types/icon-elements.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "icon-user": any;
    "icon-swatchbook": any;
    // ... add other icons as needed
  }
}
```

Or use a more generic approach:

```typescript
// types/icon-elements.d.ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: `icon-${string}`]: any;
    }
  }
}
```

## Vue 3 Composition API Example

```vue
<template>
  <div class="icon-grid">
    <icon-user v-for="i in 5" :key="i"></icon-user>
  </div>
</template>

<script setup lang="ts">
import "@tokens-studio/icons-v2/User";

// Icons are automatically available as custom elements
</script>

<style scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.icon-grid icon-user {
  color: #6366f1;
  width: 24px;
  height: 24px;
}
</style>
```

## Notes

- Icons are registered as custom elements (e.g., `<icon-user>`, `<icon-swatchbook>`)
- All icons are 24x24 by default
- Icons use `currentColor` so they inherit text color
- No React dependencies required
- Works with Vue 2 and Vue 3
