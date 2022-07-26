<template>
  <div class="content">
    <header class="header">
      <div class="logo">
        <a href="#">
          <img src="../assets/images/Group.png" alt="" />
        </a>
      </div>
      <a href="#" class="active">入社手続き</a>
      <a class="small_link" href="#">ヘルプ</a>
    </header>
    <form class="form">
      <div class="form_title">雇用契約について</div>
      <complete-bar/>
      <div class="form_calendar">
        <div class="icon">
          <a href="">
            <img src="../assets/images/calendar2.png" alt="" />
          </a>
        </div>
        <div class="time_text">2021/09/01までご登録ください</div>
      </div>
      <!-- display form -->
      <router-view />
    </form>
  </div>
</template>

<script>
// import FistForm from "./FistForm.vue";
// import SecondForm from "./SecondForm.vue";
import CompleteBar from './CompleteBar.vue'
export default {
  components: {
    CompleteBar
    // FistForm,
    // SecondForm,
  },
};
</script> 
<style scoped lang="scss">
.content {
  width: 100%;
}
.header {
  display: flex;
  gap: 24px;
  height: 64px;
  align-items: center;
  width: 100%;
  padding-left: 23px;
  box-shadow: 0px 0px 8px rgba(102, 102, 102, 0.24);
  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
    position: relative;
    height: 100%;
    line-height: 64px;
     color: #999999;
  }
  .active{
    color: #333333;
  }
  .active::after {
    position: absolute;
    content: " ";
    width: 98px;
    height: 4px;
    background: #007bc3;
    border-radius: 6px;
    bottom: 0;
    left: -8px;
  }
  .small_link {
   
    font-weight: 400;
  }
}
.form {
  width: 562px;
  margin: 0 auto;
  margin-top: 4.8rem;
  .form_title {
    width: 100%;
    font-size: 2.4rem;
  }

  .form_calendar {
    width: 100%;
    display: flex;
    margin-top: 29px;
  }
  .form_group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 19px;
    width: 100%;
    background-color: #f1f2f7;
    padding: 19px;
    .warning {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
      p {
        color: black;
        font-weight: 700;
      }
    }
    p {
      font-weight: 400;
      color: #666666;
    }
    .form_title {
      font-size: 1.8rem;
      p {
        color: #333333;
      }
    }
    .white_content {
      font-size: 1.4rem;
      background-color: #ffffff;
      line-height: 2.4rem;
      padding: 10px 8px;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      p {
        color: #333333;
      }
    }
  }
}
</style>

