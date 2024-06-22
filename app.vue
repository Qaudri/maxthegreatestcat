<template>
  <main class="w-full md:w-2/3 lg:w-3/4 px-6 mx-auto text-white">
    <header>
      <NuxtLink to="/">
        <img src="/02.jpeg" class="w-36 mx-auto" alt="logo">
      </NuxtLink>
      <nav class="w-full flex justify-between items-center p-3 bg-white bg-opacity-10 my-5 rounded-xl">
        <NuxtLink class="text-white text-2xl hover:bg-amber-900 py-2 px-5 duration-300 ease-in-out cursor-pointer rounded-md">
          Home
        </NuxtLink>
        <NuxtLink class="text-white text-2xl hover:bg-amber-900 py-2 px-5 duration-300 ease-in-out cursor-pointer rounded-md">
          About
        </NuxtLink>
        <NuxtLink class="text-white text-2xl hover:bg-amber-900 py-2 px-5 duration-300 ease-in-out cursor-pointer rounded-md">
          Contract
        </NuxtLink>
      </nav>
    </header>
    <section>
      <UiTypographyH1>Max The Greatest Cat</UiTypographyH1>
      <UiTypographyP>Max the Greatest Cat is not just another meme token on Solana Blockchain, it's a celebration of feline greatness and meme culture</UiTypographyP>
      <img src="/01.jpeg" class="w-full my-10 aspect-square object-cover" alt="Max the cat">
      <ul class="grid md:grid-cols-2 mt-10 gap-8">
        <li class="bg-amber-900 p-5 rounded-xl">
          <div class="background w-full h-48 rounded-md bg-oramge-500"></div>
          <UiTypographyH2 class="mt-4 text-center">🔒 LP is burned</UiTypographyH2>
        </li>
        <li class="bg-amber-900 p-5 rounded-xl">
          <div class="background w-full h-48 rounded-md bg-oramge-500"></div>
          <UiTypographyH2 class="mt-4 text-center">⚙️ Mint Authority is revoked.          </UiTypographyH2>
        </li>
        <li class="bg-amber-900 p-5 rounded-xl">
          <div class="background w-full h-48 rounded-md bg-oramge-500"></div>
          <UiTypographyH2 class="mt-4 text-center">🥶 Freeze Authority is revoked.          </UiTypographyH2>
        </li>
        <li class="bg-amber-900 p-5 rounded-xl">
          <div class="background w-full h-48 rounded-md bg-oramge-500"></div>
          <UiTypographyH2 class="mt-4 text-center">💰 Zero buy or sell taxes.</UiTypographyH2>
        </li>
        <li class="bg-amber-900 p-5 rounded-xl">
          <div class="background w-full h-48 rounded-md bg-oramge-500"></div>
          <UiTypographyH2 class="mt-4 text-center">🔍 Fully community driven token</UiTypographyH2>
        </li>
        <li class="grid items-center">
          <NuxtLink class="bg-amber-900 p-5 rounded-xl flex items-center gap-5 w-fit mx-auto" to="https://x.com/MaxTheGr8estCat?t=zcQAoQMH6LKlUqWfy20HiQ&s=09" target="_blank">
            <IconsTwitter class="w-16" />
            <UiTypographyH2>Follow on Twitter</UiTypographyH2>
          </NuxtLink>
          <NuxtLink class="bg-amber-900 p-5 rounded-xl flex items-center gap-5 mt-5 w-fit mx-auto" to="https://t.me/MaxTheGreatestCat" target="_blank">
            <IconsTelegram class="w-16" />
            <UiTypographyH2>Join Telegram</UiTypographyH2>
          </NuxtLink>
        </li>
      </ul>
    </section>
    <img src="/03.jpeg" class="w-full my-10 aspect-square object-cover" alt="">
    <img src="/04.jpeg" class="w-full my-10 aspect-square object-cover" alt="">
    <UiTypogrpahyP><span class="supernova">Disclainer</span>an Max the Greatest Cat is a meme token on the Solana chain crested for fun it is not a financial advise take full responsibility of any loss you encounter</UiTypogrpahyP>
    <footer class="grid place-items-center">
      <div class="flex gap-5">
        <NuxtLink to="https://t.me/MaxTheGreatestCat" class="w-12 aspect-square bg-amber-900 hover:bg-purple-500 justify-center duration-300 ease-in-out rounded-full outline-none focus:outline-none flex items-center gap-4">
          <IconsTelegram class="w-7 h-7 text-white " />
        </NuxtLink>
        <NuxtLink to="https://x.com/MaxTheGr8estCat?t=zcQAoQMH6LKlUqWfy20HiQ&s=09" class="w-12 aspect-square bg-amber-900 hover:bg-purple-500 justify-center duration-300 ease-in-out rounded-full outline-none focus:outline-none flex items-center gap-4">
          <IconsTwitter class="w-7 h-7 text-white" />
        </NuxtLink>
      </div>
      <UiTypographyP class="mt-2">&copy;Beerus Token, {{new Date().getFullYear()}}</UiTypographyP>
  </footer>
  </main>
</template>
<style>
@import url('https://fonts.cdnfonts.com/css/supernova-2');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
  font-family: 'Roboto', sans-serif;
  background-size: cover;
  background-position: center;
  padding: 3rem 0;
}
* {
  box-sizing: border-box;
}
.supernova {
  font-family: 'Supernova', sans-serif;
                                                  
}

.background {
  background-image: url('/beerus-profile-pic.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-position: center;
}
</style>