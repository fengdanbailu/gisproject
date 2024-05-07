<script setup lang="ts"></script>

<template>
  <div class="root" h-full>
    <div class="default-layout" h-full>
      <div h-full flex flex-col>
        <div flex-1 h0 overflow-y-auto overflow-y-overlay>
          <div w-full h-full p-16px>
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
