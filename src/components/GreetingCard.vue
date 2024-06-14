<template>
  <form @submit.prevent class="flex flex-col items-center justify-center sm:flex-row min-h-[100vh]">
    <canvas ref="canvas"></canvas>

    <div
      class="flex flex-col gap-[1rem] items-center h-max py-[7.5rem] px-[2.4rem] rounded-r-md rounded-tr-md shadow-sm"
    >
      <h2>بطاقة تهنئة بإسمك</h2>
      <div class="flex flex-col gap-3" dir="rtl">
        <label for="" class="text-[1.4rem]">أدخل إسمك</label>
        <input
          type="text"
          v-model="text"
          placeholder="الإسم"
          class="text-[2rem] rounded-md border-solid border-[1px] px-5"
          required
        />
      </div>

      <div class="flex flex-col gap-[1rem] w-full mt-4">
        <button
          @click="addText"
          class="text-[1.6rem] bg-dark-400 text-light-900 px-5 py-2 rounded-md hover:bg-dark-300 w-full"
          type="submit"
        >
          إدخال
        </button>
        <button
          @click="downloadImage"
          :disabled="isDisabled"
          class="text-[1.6rem] bg-dark-400 text-light-900 px-5 py-2 rounded-md hover:bg-dark-300 w-full"
        >
          تحميل
        </button>
      </div>
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
const canvasWidth = ref(null)

let fabricCanvas

// Dynamically import Fabric.js and the image
onMounted(async () => {
  const imgSrc = new URL('/image.png', import.meta.url).href // Adjust the path to your image file

  //get screen width
  const screenWidth = window.innerWidth

  canvasWidth.value = screenWidth < 550 ? screenWidth - 20 : 550

  // Initialize Fabric.js canvas
  fabricCanvas = new fabric.Canvas(canvas.value, {
    width: canvasWidth.value,
    height: 550,
    selection: false
  })

  // Load the image onto the canvas
  const imgObj = new Image()
  imgObj.src = imgSrc
  imgObj.onload = () => {
    const image = new fabric.Image(imgObj)

    // Calculate the scale factor to fit the image within the canvas
    const scaleX = fabricCanvas.width / imgObj.width
    const scaleY = fabricCanvas.height / imgObj.height
    const scale = Math.min(scaleX, scaleY)

    image.set({
      left: 0,
      top: 0,
      scaleX: scale,
      scaleY: scale,
      originX: 'left',
      originY: 'top',
      selectable: false
    })

    // Center the image on the canvas
    const centerOffsetX = (fabricCanvas.width - imgObj.width * scale) / 2
    const centerOffsetY = (fabricCanvas.height - imgObj.height * scale) / 2
    image.set({
      left: centerOffsetX,
      top: centerOffsetY
    })

    fabricCanvas.add(image)
    fabricCanvas.renderAll()
  }
})

// Method to add text to the canvas

const addText = () => {
  if (fabricCanvas) {
    fabricCanvas.getObjects('textbox').forEach((obj) => {
      fabricCanvas.remove(obj)
    })

    //get screen width
    const screenWidth = window.innerWidth

    const left = screenWidth < 550 ? canvasWidth.value / 100 : canvasWidth.value / 100 + 50
    const top = screenWidth < 550 ? 415 : 465
    const width = screenWidth < 550 ? 75 : 100
    const fontSize = screenWidth < 550 ? 17 : 35

    const newText = new fabric.Textbox(text.value, {
      left: left,
      top: top,
      fill: 'black',
      fontSize: fontSize,
      width: width,
      splitByGrapheme: true, // Ensure text wraps correctly
      textAlign: 'center',
      selectable: false
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
