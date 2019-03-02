<template></template>

<script>
  export default {
    mounted () {
      let codepenScript = document.createElement('script')
      codepenScript.setAttribute('src', 'https://static.codepen.io/assets/embed/ei.js')
      document.body.appendChild(codepenScript)
    }
  }
</script>
