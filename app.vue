<template>
  <main class="w-full md:w-2/3 lg:w-3/4 px-6 mx-auto text-white">
    <header>
      <NuxtLink to="/">
        <img src="/main.png" class="w-36 mx-auto" alt="logo">
      </NuxtLink>
      <nav class="w-full flex justify-between items-center p-3 bg-white bg-opacity-10 my-5 rounded-xl">
        <NuxtLink class="text-white text-2xl hover:bg-purple-800 py-2 px-5 duration-300 ease-in-out cursor-pointer rounded-md">
          Home
        </NuxtLink>
        <NuxtLink class="text-white text-2xl hover:bg-purple-800 py-2 px-5 duration-300 ease-in-out cursor-pointer rounded-md">
          About
        </NuxtLink>
        <NuxtLink class="text-white text-2xl hover:bg-purple-800 py-2 px-5 duration-300 ease-in-out cursor-pointer rounded-md">
          Contract
        </NuxtLink>
      </nav>
    </header>
    <section>
      <UiTypographyH1>Beerus super token</UiTypographyH1>
      <UiTypographyP>Beerus is the favorite cat of the CEO and author of Dragon Ball. He has super powers, and the CEO of Solana loves cats and their super powers. Tweet about Super Token</UiTypographyP>
      <img src="/01.jpeg" class="w-full my-10" alt="Beerus holding beerus token">
      <ul class="grid md:grid-cols-2 mt-10 gap-8">
        <li class="bg-purple-800 p-5 rounded-xl">
          <div class="background w-full h-48 rounded-md bg-blue-500"></div>
          <UiTypographyH2 class="mt-4 text-center">Total supply 100million</UiTypographyH2>
        </li>
        <li class="bg-purple-800 p-5 rounded-xl">
          <div class="background w-full h-48 rounded-md bg-blue-500"></div>
          <UiTypographyH2 class="mt-4 text-center">LP burned</UiTypographyH2>
        </li>
        <li class="bg-purple-800 p-5 rounded-xl">
          <div class="background w-full h-48 rounded-md bg-blue-500"></div>
          <UiTypographyH2 class="mt-4 text-center">Contract revoked</UiTypographyH2>
        </li>
        <li class="bg-purple-800 p-5 rounded-xl">
          <div class="background w-full h-48 rounded-md bg-blue-500"></div>
          <UiTypographyH2 class="mt-4 text-center">Sol trending</UiTypographyH2>
        </li>
        <li class="bg-purple-800 p-5 rounded-xl">
          <div class="background w-full h-48 rounded-md bg-blue-500"></div>
          <UiTypographyH2 class="mt-4 text-center">Massive marketing</UiTypographyH2>
        </li>
        <li class="grid items-center">
          <NuxtLink class="bg-purple-800 p-5 rounded-xl flex items-center gap-5 w-fit mx-auto" to="https://x.com/Beerussolana?t=D9eQTFM07GQ3eQIIziUtpQ&s=09" target="_blank">
            <IconsTwitter class="w-16" />
            <UiTypographyH2>Follow on Twitter</UiTypographyH2>
          </NuxtLink>
          <NuxtLink class="bg-purple-800 p-5 rounded-xl flex items-center gap-5 mt-5 w-fit mx-auto" to="https://t.me/beerussupertoken" target="_blank">
            <IconsTelegram class="w-16" />
            <UiTypographyH2>Join Telegram</UiTypographyH2>
          </NuxtLink>
        </li>
      </ul>
    </section>
    <img src="/02.jpeg" class="w-full my-10" alt="">
    <section>
      <UiTypographyH1 class="saiyan text-center">Roadmap</UiTypographyH1>
      <ul class="grid gap-10 lg:grid-cols-3 mt-10">
        <li class="border border-white p-5">
          <h2 class="saiyan text-6xl">Phase One</h2>
          <UiTypographyP class="mt-5">
            V1 website<br  />
            Launch on  Raydium<br  />
            Sol trending<br  />
            Massive marketing
          </UiTypographyP>
        </li>
        <li class="border border-white p-5">
          <h2 class="saiyan text-6xl">Phase Two</h2>
          <UiTypographyP class="mt-5">
            Descreener update<br  />
            CMC/CG FasTrack<br  />
            Partnership<br  />
            More marketing
          </UiTypographyP>
        </li>
        <li class="border border-white p-5">
          <h2 class="saiyan text-6xl">Phase Three</h2>
          <UiTypographyP class="mt-5">
            BeerussuperSwap<br />
            Beerus NFTs market place<br />
            Dexview update<br />
            Dextool update<br />
            Tweeter space
          </UiTypographyP>
        </li>
      </ul>
    </section>
    <img src="/03.jpeg" class="w-full my-10" alt="">
    <footer class="grid place-items-center">
      <div class="flex gap-5">
        <NuxtLink to="https://t.me/wakandandollarportal" class="w-12 aspect-square bg-purple-800 hover:bg-purple-500 justify-center duration-300 ease-in-out rounded-full outline-none focus:outline-none flex items-center gap-4">
          <IconsTelegram class="w-7 h-7 text-white " />
        </NuxtLink>
        <NuxtLink to="https://twitter.com/wakandandollar/" class="w-12 aspect-square bg-purple-800 hover:bg-purple-500 justify-center duration-300 ease-in-out rounded-full outline-none focus:outline-none flex items-center gap-4">
          <IconsTwitter class="w-7 h-7 text-white" />
        </NuxtLink>
      </div>
      <UiTypographyP class="mt-2">&copy;Beerus Token, {{new Date().getFullYear()}}</UiTypographyP>
  </footer>
  </main>
</template>
<style>
@import url('https://fonts.cdnfonts.com/css/saiyan-sans');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
  background: url('/bg.gif');
  font-family: 'Roboto', sans-serif;
  background-size: cover;
  background-position: center;
  padding: 3rem 0;
}
* {
  box-sizing: border-box;
}
.saiyan {
  font-family: 'Saiyan Sans', sans-serif;
}

.background {
  background-image: url('/beerus-profile-pic.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-position: center;
}
</style>