<template>
     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" :fill="svgFill" />
     </svg>
</template>

<script>
export default {
     name: "ResetButton",
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