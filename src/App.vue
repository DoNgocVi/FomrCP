<template>
  <div class="containers">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style scope lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap");
* {
  box-sizing: border-box ;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
.containers {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  justify-content: center;
  color: #333333;
  margin-bottom: 300px;
}
</style>
 