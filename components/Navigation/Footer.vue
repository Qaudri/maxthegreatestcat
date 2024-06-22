<template>
  <footer class="">
    <div class="max-w-7xl container mx-auto px-6 py-8 grid place-items-center">
      <div class="flex gap-5">
        <NuxtLink to="https://t.me/wakandandollarportal" class="group h-12 w-12 text-white bg-purple-700 hover:bg-purple-500 font-medium text-base 2xl:text-lg justify-center duration-300 ease-in-out rounded-full outline-none focus:outline-none flex items-center gap-4">
          <IconsTelegram class="w-7 h-7 text-white " />
        </NuxtLink>
        <NuxtLink to="https://twitter.com/wakandandollar/" class="group h-12 w-12 text-white bg-purple-700 hover:bg-purple-500  font-medium text-base 2xl:text-lg justify-center duration-300 ease-in-out rounded-full outline-none focus:outline-none flex items-center gap-4">
          <IconsTwitter class="w-7 h-7 text-white" />
        </NuxtLink>
      </div>
      <UiTypographyP class="mt-2">&copy; Wakanda Currency, {{new Date().getFullYear()}}</UiTypographyP>
    </div>
  </footer>
</template>