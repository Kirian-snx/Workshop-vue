<template>
  <div>
    <p class="error">{{ error }}</p>
    <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
      <button @click="$router.back()" class="close-button">
        <img src="../assets/close.png"/>
      </button>
    </qrcode-stream>
  </div>
</template>

<script>

export default {

  data () {
    return {
      result: '',
      error: '',
      camera: 'auto',
      obj: '',
    }
  },

  methods: {
    onDecode (content) {
      this.result = content
      this.turnCameraOff()
      if(this.result != '') {
        console.log(this.result)
        this.setModal(this.result)
      }
    },

    setModal(result) {
      this.obj = {
        title: 'TITLE',
        message: result,
        type: 'info',
        disableOverlayClick: true,
        useConfirmBtn: true,
        customConfirmBtnText: 'GO',
        customCloseBtnText: 'Close',
        onConfirm: this.toStep,
        onClose: this.reload,
      }
      this.$Simplert.open(this.obj)
    },

    toStep() {
      this.$router.push({name: this.result})
    },

    reload() {
      this.turnCameraOn()
    },

    turnCameraOn () {
      this.camera = 'auto'
    },

    turnCameraOff () {
      this.camera = 'off'
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
      }
    }
  }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
.close-button {
  border: none;
  outline: none;
  background: none;
  position: absolute;
  border-radius: 2px;
  right: 0;
}
.close-button img {
  width: 50px;
}
</style>