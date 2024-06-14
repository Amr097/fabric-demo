<template>
  <form @submit.prevent>
    <canvas ref="canvas"></canvas>
    <div class="flex gap-[1rem] items-center mt-9">
      <input
        type="text"
        v-model="text"
        placeholder="Enter text here"
        class="text-[2rem] rounded-md border-solid border-[1px] px-5"
        required
      />
      <button
        @click="addText"
        class="text-[1.6rem] bg-dark-400 text-light-900 px-5 py-2 rounded-md hover:bg-dark-300"
        type="submit"
      >
        Add Text
      </button>
      <button
        @click="downloadImage"
        :disabled="isDisabled"
        class="text-[1.6rem] bg-dark-400 text-light-900 px-5 py-2 rounded-md hover:bg-dark-300"
      >
        Download Image
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fabric } from 'fabric'

// Define reactive references
const canvas = ref(null)
const text = ref('')
const isDisabled = ref(true)

let fabricCanvas

// Dynamically import Fabric.js and the image
onMounted(async () => {
  const imgSrc = new URL('/image.png', import.meta.url).href // Adjust the path to your image file

  // Initialize Fabric.js canvas
  fabricCanvas = new fabric.Canvas(canvas.value)

  // Load the image onto the canvas
  const imgObj = new Image()
  imgObj.src = imgSrc
  imgObj.onload = () => {
    const image = new fabric.Image(imgObj)
    image.set({
      left: 0,
      top: 0,
      angle: 0,
      padding: 10,
      cornersize: 10
    })
    fabricCanvas.setWidth(imgObj.width)
    fabricCanvas.setHeight(imgObj.height)
    fabricCanvas.add(image)
    fabricCanvas.renderAll()
  }
})

// Method to add text to the canvas

const addText = () => {
  if (fabricCanvas) {
    const newText = new fabric.Textbox(text.value, {
      left: 50,
      top: 1180,
      fill: 'black',
      fontSize: 45,
      width: 200,
      splitByGrapheme: true // Ensure text wraps correctly
    })
    fabricCanvas.add(newText)
    isDisabled.value = false
  }
}

// Method to download the image
const downloadImage = () => {
  if (fabricCanvas) {
    const dataURL = fabricCanvas.toDataURL({
      format: 'png',
      quality: 1
    })
    const link = document.createElement('a')
    link.href = dataURL
    link.download = 'image.png'
    link.click()
  }
}
</script>

<style>
/* Optional: Add your styles here */
</style>
