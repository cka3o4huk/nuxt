<script setup >
import BaseContainer from "~/components/BaseContainer.vue";
</script>

<template>
  <section class="relative w-full h-[650px] overflow-hidden">
    <div class="relative w-full h-full">
      <video class="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2" autoplay loop muted playsinline>
        <source src="~/assets/video/video_bg.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      <BaseContainer class="h-full grid place-items-center">
        <div class="relative z-10 flex flex-col items-start justify-start text-white gap-y-4">
          <h1 class="text-5xl font-light leading-tight lg:text-7xl">Навчіться керувати <br> яхтою!</h1>
          <p class="text-lg font-light lg:text-2xl">Отримайте Міжнародні права на керування яхтами, <br> які визнаються у всьому світі.</p>
          <button class="w-64 h-12 bg-button hover:bg-button-lite text-white font-bold text-lg uppercase rounded">Розпочати навчання</button>
        </div>
      </BaseContainer>

    </div>
  </section>

  <!-- Info Bar -->
  <div class="w-full bg-akcent flex">
    <div class="w-1/3 h-[104px] bg-akcent"></div>
    <div class="w-2/3 flex items-center justify-center text-white text-lg">
      <div class="px-5 border-l border-r border-white">
        <p>Київ <br> Щомісяця новий набір</p>
      </div>
    </div>
  </div>
</template>
