<script setup >
import BaseContainer from "~/components/BaseContainer.vue";
</script>

<template>
  <BaseContainer class="bg-light-gray">
    <!-- Header Section -->
    <div class=" bg-light-gray text-text-p py-4">
      <h1 class="text-4xl md:text-6xl font-light tracking-wider leading-tight">
        Шлях Капітана у Skipper School
      </h1>
    </div>

    <!-- Slider Section -->
    <div class="relative w-full mx-auto mb-24 overflow-hidden">
      <div class="flex transition-transform duration-500">
        <!-- Slide 1 -->
        <div class="relative flex items-center justify-center w-full">
          <img class="w-full h-auto" src="~/assets/images/slider/1.jpg" alt="Slide 1" />
          <div class="absolute bottom-24 left-10 text-white font-bold">
            <div class="text-3xl mb-5">Теоретичний курс з яхтингу</div>
            <div class="text-xl mb-3">2 місяці, 14 занять, 2 рази на тиждень.</div>
            <div class="text-xl">Київ, Одеса</div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="relative flex items-center justify-center w-full">
          <img class="w-full h-auto" src="~/assets/images/slider/2.jpg" alt="Slide 2" />
          <div class="absolute bottom-24 left-10 text-white font-bold">
            <div class="text-3xl mb-5">Морська практика</div>
            <div class="text-xl mb-3">2 практики по 7 днів у супроводі інструктора</div>
            <div class="text-xl">у Туреччині, Греції та Хорватії</div>
          </div>
        </div>

        <!-- Add more slides similarly -->
      </div>

      <!-- Navigation Arrows -->
      <button class="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-3xl md:text-4xl transition-transform duration-300 hover:text-button-hover hover:scale-110">
        &#10094;
      </button>
      <button class="absolute top-1/2 right-5 transform -translate-y-1/2 text-white text-3xl md:text-4xl transition-transform duration-300 hover:text-button-hover hover:scale-110">
        &#10095;
      </button>
    </div>
  </BaseContainer>
</template>
