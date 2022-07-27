<template>
  <!-- <div class="form_completebar">
    <div class="circle">
      <img src="../assets/images/Group_tick_active.png" alt="" />
      <img src="../assets/images/Group_pencil.png" alt="" />
      <img src="../assets/images/Group_tick.png" alt="" />
      <img src="../assets/images/Group_pencil.png" alt="" />
      <img src="../assets/images/Group_tick.png" alt="" />
    </div>
    <Steps current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
    <div class="straight_line"></div>
    <div class="straight_line--complete"></div>
  </div> -->
  <div class="wrapper-stepper">
    <div class="stepper">
      <div class="stepper-progress">
        <div
          class="stepper-progress-bar"
          :style="'width:' + stepperProgress"
        ></div>
      </div>

      <div
        class="stepper-item"
        :class="{ current: step == item, success: step >= item }"
        v-for="item in 5"
        :key="item"
      >
        <div class="stepper-item-counter">
          <template v-if="item % 2 === 0">
            <img
              class="icon-success"
              src="../assets/images/Group_pencil_active.png"
              alt=""
            />
          </template>
          <template v-else>
            <img
              class="icon-success"
              src="../assets/images/Group_tick_active.png"
              alt=""
            />
          </template>
          <span v-if="item % 2 === 0" class="icon-noSuccess">
            <img src="../assets/images/Group_tick.png" alt="" />
          </span>
          <span v-else class="icon-noSuccess">
            <img src="../assets/images/Group_pencil.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    stepperProgress() {
      return (100 / 3) * (this.step - 1) + "%";
    },
    ...mapState({
      step: (state) => state.step,
    }),
  },
};
</script>

<style scoped lang='scss'>
$default: #c5c5c5;
$violet-1: #b2b1ff;
$transiton: all 500ms ease;

body {
  background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
  color: #ffffff;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}

.tx-green-1 {
  color: $violet-1;
  font-weight: 600;
}

.wrapper-stepper {
  background-color: #fff;
  padding-top: 24px;
  border-radius: 32px;
  box-shadow: rgba($color: #000000, $alpha: 0.09);
}

.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  margin-bottom: 24px;

  &-progress {
    position: absolute;
    background-color: $default;
    height: 2px;
    z-index: -1;
    left: 0;
    right: 0;
    margin: 0 auto;

    &-bar {
      position: absolute;
      left: 0;
      height: 100%;
      width: 0%;
      background-color: $violet-1;
      transition: $transiton;
    }
  }
}

.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $default;
  transition: $transiton;

  &-counter {
    height: 40px;
    width: 40px;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 100%;
    position: relative;

    .icon-success {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      opacity: 0;
      transform: scale(0);
      width: 40px;
      transition: $transiton;
    }

    .icon-noSuccess {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      opacity: 1;
      transform: scale(1);
      width: 40px;
      transition: $transiton;
    }
  }

  &-title {
    position: absolute;
    font-size: 14px;
    bottom: -24px;
  }
}

.stepper-item.success {
  .stepper-item-counter {
    border-color: $violet-1;
    background-color: $violet-1;
    color: #fff;
    font-weight: 600;

    .icon-success {
      opacity: 1;
      transform: scale(1);
    }

    .icon-noSuccess {
      opacity: 0;
      transform: scale(0);
    }
  }

  .stepper-item-title {
    color: $violet-1;
  }
}

.stepper-item.current {
  .stepper-item-counter {
    border-color: $violet-1;
    background-color: $violet-1;
    color: #fff;
    font-weight: 600;
  }

  .stepper-item-title {
    color: #818181;
  }
}

.stepper-pane {
  color: #333;
  text-align: center;
  padding: 120px 60px;
  box-shadow: 0 8px 12px rgba($color: #000000, $alpha: 0.09);
  margin: 40px 0;
}
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
  .straight_line--complete {
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