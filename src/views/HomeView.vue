<script setup lang="ts">
import type { NestedSplitDescriptor } from '@/components/NestedSplit.vue';
import NestedSplit from '@/components/NestedSplit.vue';

//import { useSimpleStore } from '@/stores/simple'
//const simple = useSimpleStore()

const local = (name: string) => `https://dl.heeere.com/${name}`
const apps: Record<string, string> = {
  R: local('2025-04-renfollow/'),
  B: local('2025-bboxy/'),
  C: local('2025-07-schopper/'),
  O: local('2025-03-overtypst/#/viewonly'),
  Z: 'lseditor',
}

// | or -, possibly a digit (*10% for position) then 2 letters (or recurse)
// |5         -7 B Z          -5 C O
// |          -7 B Z          -  C O
// | -7BZ -CO
// |-7BZ-CO
function parseLayout(layoutString: string): NestedSplitDescriptor {
  function parseItem(l: string): [NestedSplitDescriptor|string, string] {
    if (l.match(/^[|-]/)) {
      const direction = l[0] === '|' ? 'horizontal' : 'vertical'
      l = l.substring(1)
      let position = 0.5
      if (l.match(/^[0-9]/)) {
        position = parseInt(l[0]) * 0.1
        l = l.substring(1)
      }
      const [first, firstRest] = parseItem(l)
      const [second, rest] = parseItem(firstRest)
      return [{ direction, position, first, second, }, rest]
    } else {
      return [apps[l[0]] ?? '/unkown-app', l.substring(1)]
    }
  }
  return parseItem(layoutString.replace(/ /g, ''))[0] as NestedSplitDescriptor
}

const h = window.location.hash
const descriptor = parseLayout(h ? decodeURIComponent(h.substring(1)) : '| -7BZ -CO')
</script>

<template>
  <div class="home">
    <div class="nesplit-container">
      <NestedSplit :descriptor="descriptor" />
    </div>
    <!--pre>{{ descriptor }}</pre-->
  </div>
</template>

<style>
.nesplit-container {
  width: 100%;
  height: 100vh;
  /*border: 10px solid gray;*/
}
</style>