<template>
  <div class="form_completebar">
    <div class="circle">
      <img src="../assets/images/Group_tick_active.png" alt="" />
      <img src="../assets/images/Group_pencil.png" alt="" />
      <img src="../assets/images/Group_tick.png" alt="" />
      <img src="../assets/images/Group_pencil.png" alt="" />
      <img src="../assets/images/Group_tick.png" alt="" />
    </div>
    <div class="straight_line"></div>
    <div class="straight_line--complete"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.form_completebar {
  margin-top: 2.4rem;
  width: 100%;
  height: 40px;
  position: relative;
  .circle {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .straight_line {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 520px;
    height: 0px;
    border: 2px solid #dcdcdc;
  }
  .straight_line--complete{
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 520px;
    height: 0px;
    border: 2px solid violet;
  }
}
</style>