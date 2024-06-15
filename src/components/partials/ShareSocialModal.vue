<script setup>
import { ref } from 'vue' //Best practice to be wrapped in a composeable function
const popup = ref({
  active: false,
  id: null,
  show: (e) => {
    popup.value.active = e.target.checked
    if (e.target.checked) popup.value.id = e.target.id
  },
  close: (id) => {
    const checkbox = document.querySelector(`#${id}`)
    checkbox.checked = false
    popup.value.active = checkbox.checked
  }
})
const closePopup = () => {
  popup.value.close(`popup`)
}
const fileInput = ref({ files: [{ name: null }] })
const fileName = ref(null)
const handleFiles = (e) => {
  fileName.value = e.target.files[0].name
}
const handleSubmit = async () => {
  const formData = new FormData()
  formData.append('ExcelFile', fileInput.value.files[0])
}
</script>
<template>
  <div>
    <div class="btn-container">
      <label for="popup" class="popup-btn-label"> Click Me</label>
      <input
        type="checkbox"
        id="popup"
        class="checkbox"
        @change="popup.show"
        aria-label="privacypolicypopupcheckbox"
      />
    </div>
    <div className="popup" v-if="popup.active">
      <a @click="closePopup" className="popup__exit"></a>
      <form className="popup__content" @submit.prevent="handleSubmit">
        <div class="popup__header">
          إضافة موظفين <span @click="closePopup" class="cursor-pointer">X</span>
        </div>
        <div class="popup__input">
          <div class="input-container">
            <div class="text-left flex flex-col gap-[1.2rem] relative mb-[3rem]">
              <h4 class="label">رفع ملف</h4>
              <label for="upload-file" class="custom-file-input"></label>
              <div class="input-wrapper">
                <input
                  class="input-read-only"
                  type="text"
                  placeholder="رفع ملف"
                  :value="fileName"
                  readonly
                />
                <svg
                  class="icon"
                  fill="#000000"
                  height="800px"
                  width="800px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 374.116 374.116"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M344.058,207.506c-16.568,0-30,13.432-30,30v76.609h-254v-76.609c0-16.568-13.432-30-30-30c-16.568,0-30,13.432-30,30 v106.609c0,16.568,13.432,30,30,30h314c16.568,0,30-13.432,30-30V237.506C374.058,220.938,360.626,207.506,344.058,207.506z"
                    />
                    <path
                      d="M123.57,135.915l33.488-33.488v111.775c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30V102.426l33.488,33.488 c5.857,5.858,13.535,8.787,21.213,8.787c7.678,0,15.355-2.929,21.213-8.787c11.716-11.716,11.716-30.71,0-42.426L208.271,8.788 c-11.715-11.717-30.711-11.717-42.426,0L81.144,93.489c-11.716,11.716-11.716,30.71,0,42.426 C92.859,147.631,111.855,147.631,123.57,135.915z"
                    />
                  </g>
                </svg>
              </div>
              <input
                id="upload-file"
                placeholder="رفع ملف"
                class=""
                type="file"
                @change="handleFiles"
                ref="fileInput"
              />
            </div>
          </div>
        </div>
        <div class="popup__btns">
          <button type="submit" class="btn">تأكيد</button>
          <button class="btn" @click="closePopup">إلغاء</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.btn-container {
  position: relative;
  width: max-content;
}
.checkbox {
  pointer-events: none;
  position: absolute;
  left: 50%;
  opacity: 0;
}
.popup-btn-label {
  background-color: white;
  width: max-content;
  padding: 1rem 2rem;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 3rem;
  font-size: 1.3rem;
}
.popup {
  width: 100%;
  height: 100vh;
  background-color: #172a1c1a;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9997;
  transition: all 0.15s linear;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup__content {
  color: white;
  font-size: 1.45rem;
  position: relative;
  padding: 0 2.4rem;
  z-index: 9998;
  overflow: auto;
  height: 80%;
  transition: all 0.4s 0.2s;
  border: solid 1px white;
  border-radius: 0.5rem;
  width: 90%;
  padding-left: 2rem;
  padding-right: 2rem;
  @media (min-width: 640px) {
    width: 50%;
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
.popup__header {
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 1.8rem;
  border-bottom: 1px dotted #dfdfdf;
}
.popup__exit {
  background-color: #00000076;
  backdrop-filter: blur(1.5px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9997;
  cursor: default;
}
.popup__input {
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
.popup__btns {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.6rem 0;
}
.btn {
  border-radius: 0.8rem;
  padding: 0.8rem 4.4rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 0.056rem;
  text-transform: uppercase;
  border: solid 1px #fff;
  border-radius: 4px;
}
.btn:hover {
  filter: brightness(97%);
}
.label {
  text-align: left;
  font-size: 1.4rem;
  line-height: 1.5;
}
.input-wrapper {
  position: absolute;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  height: 3.5rem;
  width: 25rem;
  z-index: -10;
  top: 2rem;
  border-radius: 4px;
  border: 1px solid rgba(47, 32, 66, 0.3);
  background: var(--white, #fff);
}
#upload-file {
  opacity: 0;
  position: absolute;
  font-size: 1.2rem;
  width: 100%;
}
#upload-file::placeholder {
  color: #999999;
}
.custom-file-input {
  position: absolute;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  height: 3.5rem;
  width: 25rem;
  z-index: 10;
  top: 2rem;
  cursor: pointer;
  background-color: transparent;
}
.icon {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  fill: black;
}
.input-read-only {
  outline: none;
  font-size: 1.2rem;
  height: 100%;
  width: 100%;
  color: black;
}
</style>
