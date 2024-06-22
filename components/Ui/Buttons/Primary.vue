<template>
  <div>
    <button @click="emitclicked()" class="py-2 px-5 text-white bg-purple-700 hover:bg-purple-600 focus:outline-purple-800 font-medium text-base 2xl:text-lg justify-center duration-300 ease-in-out rounded-md outline-none focus:outline-none" :class="flexdisplay ? 'flex w-full gap-4 items-center' : 'block w-fit'">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    flexdisplay: Boolean
  },
  methods: {
    emitclicked(){
      this.$emit("clicked")
    }
  }
}
</script>

<style>

</style>