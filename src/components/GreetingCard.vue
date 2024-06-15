<script setup>
import { ref, onMounted } from 'vue'
import { fabric } from 'fabric'

// Define reactive references
const canvas = ref(null)
const text = ref('')
const isHidden = ref(true)
const canvasWidth = ref(null)

let fabricCanvas

// Dynamically import Fabric.js and the image
onMounted(async () => {
  const imgSrc = new URL('/image.png', import.meta.url).href // Adjust the path to your image file

  //get screen width
  const screenWidth = window.innerWidth

  canvasWidth.value = screenWidth < 550 ? 320 : 550

  // Initialize Fabric.js canvas
  fabricCanvas = new fabric.Canvas(canvas.value, {
    width: canvasWidth.value,
    height: canvasWidth.value,
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

    const left = screenWidth < 550 ? 135 : 230
    const top = screenWidth < 550 ? 284.5 : 490
    const width = screenWidth < 550 ? 120 : 210
    const fontSize = screenWidth < 550 ? 10 : 15.5

    const newText = new fabric.Textbox(text.value, {
      left: left,
      top: top,
      fill: 'white',
      fontSize: fontSize,
      width: width,
      splitByGrapheme: true, // Ensure text wraps correctly
      textAlign: 'center',
      selectable: false
    })
    fabricCanvas.add(newText)
  }
}

const createText = () => {
  isHidden.value = false
}

// Method to download the image
const downloadImage = () => {
  if (fabricCanvas) {
    const originalWidth = fabricCanvas.width
    const originalHeight = fabricCanvas.height

    // Set the canvas to a higher resolution
    fabricCanvas.setDimensions(
      {
        width: originalWidth * 2,
        height: originalHeight * 2
      },
      { backstoreOnly: true }
    )

    fabricCanvas.setZoom(2)

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

const redo = () => {
  isHidden.value = true
}

const shareImage = async () => {
  if (fabricCanvas) {
    const originalWidth = fabricCanvas.width
    const originalHeight = fabricCanvas.height

    // Set the canvas to a higher resolution
    fabricCanvas.setDimensions(
      {
        width: originalWidth * 2,
        height: originalHeight * 2
      },
      { backstoreOnly: true }
    )

    fabricCanvas.setZoom(2)

    fabricCanvas.renderAll()

    const dataURL = fabricCanvas.toDataURL({
      format: 'png',
      quality: 1
    })

    const blob = await (await fetch(dataURL)).blob()
    const filesArray = [
      new File([blob], 'image.png', {
        type: blob.type
      })
    ]

    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
      try {
        await navigator.share({
          files: filesArray,
          title: 'عبد مبارك',
          text: 'كل عام و انتم بخير'
        })
      } catch (err) {
        console.error('Error sharing', err)
      }
    } else {
      alert('Your browser does not support sharing files.')
    }
  }
}
</script>

<template>
  <form
    @submit.prevent
    class="flex flex-col items-center md:justify-center sm:justify-normal sm:flex-row h-auto sm:h-full"
  >
    <canvas ref="canvas" class="z-20 relative"></canvas>

    <div
      class="w-[320px] sm:w-[38rem] bg-[#fff] flex flex-col gap-[2.4rem] items-center justify-center py-[3rem] sm:py-[4.8rem] px-[2.4rem] rounded-r-md rounded-tr-md shadow-sm"
    >
      <img src="/logo.svg" alt="" class="w-[15rem] h-[8rem]" />
      <h2 class="title">بطاقة تهنئة بإسمك</h2>
      <div class="flex flex-col gap-3 w-full" dir="rtl" :class="{ hidden: !isHidden }">
        <input
          type="text"
          v-model="text"
          placeholder="الإسم"
          class="w-full text-[1.6rem] font-medium rounded-md border-solid border-[1px] border-[#6CBA81] px-[1.6rem] py-[1.2rem] outline-none"
          maxlength="21"
          required
          @input="addText"
        />
      </div>

      <div class="flex flex-col gap-[1rem] w-full mt-4" :class="{ hidden: !isHidden }">
        <button
          @click="createText"
          class="text-[1.6rem] bg-[#6cba81] text-light-900 px-[1.6rem] py-[0.8rem] rounded-md hover:bg-[#6cba81ea] w-full"
          type="submit"
        >
          إنشاء
        </button>
      </div>
      <div :class="{ hidden: isHidden }" class="flex flex-col gap-[1rem] w-full mt-4">
        <button
          @click="downloadImage"
          class="text-[1.6rem] bg-[#6cba81] hover:bg-[#6cba81ea] text-light-900 px-[1.6rem] py-[0.8rem] rounded-md w-full"
        >
          تحميل
        </button>

        <button
          @click="shareImage"
          class="text-[1.6rem] bg-[#006450] hover:bg-[#006450d0] text-light-900 px-[1.6rem] py-[0.8rem] rounded-md w-full"
        >
          مشاركة
        </button>

        <button
          @click="redo"
          class="text-[1.6rem] text-primary-400 bg-[#bee1c8] hover:bg-[#bee1c8e4] px-[1.6rem] py-[0.8rem] rounded-md w-full"
          type="submit"
        >
          إعادة إنشاء
        </button>
      </div>
    </div>
  </form>
</template>

<style lang="postcss">
.title {
  color: var(--dark-green, #006450);
  text-align: right;
  font-family: 'DIN Next LT Arabic';
  font-size: 2.5rem;
  font-weight: 400;
}
</style>
