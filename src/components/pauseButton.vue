<template>
     <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" width="3" height="20" :fill="svgFill" />
          <rect width="3" height="20" :fill="svgFill" />
     </svg>
</template>
     
<script>
export default {
     name: "PauseButton",
     props: {
          svgFill: {
               type: String,
               required: false,
               default: function () {
                    return "9E9E9E"
               }
          }
     }
}
</script>