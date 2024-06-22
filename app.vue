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
      <div class="grid md:grid-cols-2 mt-10 gap-8 place-items-center">
        <ul>
          <li>🔒 LP is burned</li>
          <li>⚙️ Mint Authority is revoked.</li>
          <li>🥶 Freeze Authority is revoked.</li>
          <li>💰 Zero buy or sell taxes.</li>
          <li>🔍 Fully community driven token</li>
        </ul>
        <img src="/03.jpeg" class="w-full my-10 aspect-square object-cover" alt="">
      </div>
    </section>
    <UiTypogrpahyP class="p-5 border border-orange-500 rounded-md"><span class="supernova">Disclaimer:</span>an Max the Greatest Cat is a meme token on the Solana chain crested for fun it is not a financial advise take full responsibility of any loss you encounter</UiTypogrpahyP>
    <img src="/04.jpeg" class="w-full my-10" alt="">
    <footer class="grid place-items-center">
      <div class="flex gap-5">
        <NuxtLink to="https://t.me/MaxTheGreatestCat" class="w-12 aspect-square bg-amber-900 hover:bg-purple-500 justify-center duration-300 ease-in-out rounded-full outline-none focus:outline-none flex items-center gap-4">
          <IconsTelegram class="w-7 h-7 text-white " />
        </NuxtLink>
        <NuxtLink to="https://x.com/MaxTheGr8estCat?t=zcQAoQMH6LKlUqWfy20HiQ&s=09" class="w-12 aspect-square bg-amber-900 hover:bg-purple-500 justify-center duration-300 ease-in-out rounded-full outline-none focus:outline-none flex items-center gap-4">
          <IconsTwitter class="w-7 h-7 text-white" />
        </NuxtLink>
      </div>
      <UiTypographyP class="mt-2">&copy; Max the Cat, {{new Date().getFullYear()}}</UiTypographyP>
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