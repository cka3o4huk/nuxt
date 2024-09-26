<script setup lang="ts">
import { ref } from 'vue'
import BaseContainer from "~/components/BaseContainer.vue";

const isMenuActive = ref(false)

const openMenu = () => {
  isMenuActive.value = true
  document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
  isMenuActive.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <header class="sticky top-0 left-0 w-full z-50 bg-[#f4f7fb] shadow-md">
    <BaseContainer class="flex justify-between py-4">
      <div class="flex-shrink-0">
        <img class="h-8 w-auto" src="~/assets/images/logo-new.png" alt="Logo">
      </div>
      <nav class="hidden items-center lg:flex">
        <ul class="flex space-x-8">
          <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Про школу</a></li>
          <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Команда</a></li>
          <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Часті питання</a></li>
          <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Контакти</a></li>
        </ul>
      </nav>
      <div class="hidden items-center space-x-4 lg:flex">
        <button type="button" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Зв'язатися</button>
        <button type="button" class="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-300">UA</button>
      </div>
      <button class="lg:hidden" aria-label="Відкрити меню" @click="openMenu">
        <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>
        <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>
        <span class="block w-6 h-0.5 bg-gray-600"></span>
      </button>

      <div :class="['fixed inset-0 z-50 lg:relative lg:inset-auto lg:flex lg:items-center', isMenuActive ? 'block' : 'hidden']">
        <div class="absolute inset-0 bg-white lg:hidden" :class="{'block': isMenuActive, 'hidden': !isMenuActive}">
          <!-- Mobile Menu Close Button -->
          <button type="button" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900" @click="closeMenu">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="flex justify-center mt-6 lg:hidden">
            <img class="h-8 w-auto" src="~/assets/images/logo-new.png" alt="Logo">
          </div>

          <!-- Navigation -->
          <nav class="mt-8">
            <ul class="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">
              <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Про школу</a></li>
              <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Команда</a></li>
              <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Часті питання</a></li>
              <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Контакти</a></li>
            </ul>
          </nav>

          <!-- Mobile Actions -->
          <div class="mt-8 flex flex-col items-center space-y-4 lg:hidden">
            <button type="button" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Зв'язатися</button>
            <button type="button" class="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-300">UA</button>
          </div>
        </div>
      </div>
<!--      <div class="flex justify-between items-center  py-5 ">-->
<!--        &lt;!&ndash; Logo &ndash;&gt;-->
<!--        <div class="flex-shrink-0">-->
<!--          <img class="h-8 w-auto" src="~/assets/images/logo-new.png" alt="Logo">-->
<!--        </div>-->

<!--        &lt;!&ndash; Mobile Menu Toggle Button &ndash;&gt;-->
<!--        <button class="lg:hidden" aria-label="Відкрити меню" @click="openMenu">-->
<!--          <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>-->
<!--          <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>-->
<!--          <span class="block w-6 h-0.5 bg-gray-600"></span>-->
<!--        </button>-->

<!--        &lt;!&ndash; Mobile Menu &ndash;&gt;-->
<!--        <div :class="['fixed inset-0 z-50 lg:relative lg:inset-auto lg:flex lg:items-center', isMenuActive ? 'block' : 'hidden']">-->
<!--          <div class="absolute inset-0 bg-white lg:hidden" :class="{'block': isMenuActive, 'hidden': !isMenuActive}">-->
<!--            &lt;!&ndash; Mobile Menu Close Button &ndash;&gt;-->
<!--            <button type="button" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900" @click="closeMenu">-->
<!--              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />-->
<!--              </svg>-->
<!--            </button>-->

<!--            <div class="flex justify-center mt-6 lg:hidden">-->
<!--              <img class="h-8 w-auto" src="~/assets/images/logo-new.png" alt="Logo">-->
<!--            </div>-->

<!--            &lt;!&ndash; Navigation &ndash;&gt;-->
<!--            <nav class="mt-8">-->
<!--              <ul class="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">-->
<!--                <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Про школу</a></li>-->
<!--                <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Команда</a></li>-->
<!--                <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Часті питання</a></li>-->
<!--                <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Контакти</a></li>-->
<!--              </ul>-->
<!--            </nav>-->

<!--            &lt;!&ndash; Mobile Actions &ndash;&gt;-->
<!--            <div class="mt-8 flex flex-col items-center space-y-4 lg:hidden">-->
<!--              <button type="button" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Зв'язатися</button>-->
<!--              <button type="button" class="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-300">UA</button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Desktop Navigation and Actions &ndash;&gt;-->
<!--        <div class="hidden lg:items-center lg:space-x-8 lg:flex lg:w-full">-->
<!--          <nav>-->
<!--            <ul class="flex space-x-8">-->
<!--              <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Про школу</a></li>-->
<!--              <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Команда</a></li>-->
<!--              <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Часті питання</a></li>-->
<!--              <li><a href="#" class="text-gray-900 hover:text-blue-600 transition duration-300">Контакти</a></li>-->
<!--            </ul>-->
<!--          </nav>-->
<!--          <div class="flex items-center space-x-4">-->
<!--            <button type="button" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Зв'язатися</button>-->
<!--            <button type="button" class="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-300">UA</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </BaseContainer>
  </header>
</template>