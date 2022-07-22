<template>
  <div class="form_group">
    <div class="warning">
      <img src="../assets/images/Group_warn.png" alt="" />
      <p>ご確認ください</p>
    </div>
    <p>
      表示されている内容を確認いただき、認識に相違が無ければ同意するにチェックをしてください。
    </p>
  </div>
  <div class="form_group">
    <div class="form_title">顔写真の登録</div>
    <p class="help-text">
      システムの本人アイコンに使用します。あなたの顔が分かる写真を登録してください。未登録の場合、姓名の頭文字が表示されます。顔写真見本のように撮影してください。また、背景は白、スーツ着用、身だしなみルールに沿って撮影をお願いいたします。
    </p>
    <!-- Select or drop image with Vuejs-->
    <div class="images_drop">
      <img src="../assets/images/upload.png" alt="" />
      <p>
        <span>ファイルをドラッグ&ドロップ</span> <br />
        ファイルをドロップするか、<br />
        ファイルを参照する
      </p>
    </div>
  </div>
  <div class="form_group">
    <div class="form_title">本人確認書類</div>
    <div class="text_require">
      <p class="require">必須</p>
      <p class="help-text">運転免許証両面もしくは住民票を添付してください。</p>
    </div>
    <!-- Select or drop image with Vuejs-->
    <div class="images_drop">
      <img src="../assets/images/upload.png" alt="" />
      <p>
        <span>ファイルをドラッグ&ドロップ</span> <br />
        ファイルをドロップするか、<br />
        ファイルを参照する
      </p>
    </div>
  </div>
  <div class="form_group">
    <div class="form_title">基本情報登録</div>

    <p class="help-text">
      外国式氏名が戸籍に記載されている場合、国際結婚により戸籍上の姓が外国式の姓となっている、もしくは重国籍で戸籍上の氏名が外国式の氏名となっている場合、戸籍上の綴りで入力してください。
    </p>
    <div>
      <div class="text_require">
        <p class="require">必須</p>
        <p class="help-text">姓</p>
      </div>
      <input
        class="form_input"
        type="text"
        placeholder="入力してください"
        name=""
      />
    </div>
    <div>
      <div class="text_require">
        <p class="require">必須</p>
        <p class="help-text">名</p>
      </div>
      <input
        class="form_input"
        type="text"
        placeholder="入力してください"
        name="fistName"
        v-model="fistName"
      />
    </div>
    <div>
      <div class="text_require">
        <p class="require">必須</p>
        <p class="help-text">セイ</p>
      </div>
      <input
        class="form_input"
        type="text"
        placeholder="入力してください"
        name="lastName"
        v-model="lastName"
      />
    </div>
    <div>
      <div class="text_require">
        <p class="require">必須</p>
        <p class="help-text">セイ</p>
      </div>
      <input
        class="form_input"
        type="text"
        placeholder="入力してください"
        name="lastName"
        v-model="lastName"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        fistName: "",
        lastName: "",
      },
    };
  },
};
</script>
<style scope lang="scss">
.form_group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 19px;
  width: 100%;
  background-color: #f1f2f7;
  padding: 8px 16px 16px 16px;
  &-info {
    padding: 16px;
  }
  .images_drop {
    margin-top: 20px;
    text-align: center;
    background-color: #ffffff;
    padding: 8px;
    span {
      color: #333333;
      font-weight: 700;
    }
  }
  .text_require {
    display: flex;
    align-items: center;
    gap: 8px;
    .help-text {
      flex: 1;
    }
  }
  .form_input {
    height: 48px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    padding: 8px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .warning {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    p {
      color: #333333;
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
    line-height: 1.7;
    padding: 10px 8px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    p {
      color: #333333;
    }
    .form-control {
      font-family: system-ui, sans-serif;
      font-size: 1.4rem;
      line-height: 1.1;
      display: grid;
      grid-template-columns: 1em auto;
      gap: 0.5em;
    }
    .white_content-line {
      display: flex;
      align-items: center;
      .number {
        width: 30px;
        align-self: flex-start;
      }
      .text {
        flex: 1;
      }
    }
  }
  .require {
    background-color: #ed5d5d;
    width: 45px;
    color: #fff;
    padding: 0px 10px;
    font-size: 1.2rem;
    border-radius: 2px;
  }
  .info {
    display: flex;
    align-items: center;
    gap: 8px;
    .info_text {
      color: #666666;
      font-size: 18px;
    }
  }
}
.button-agrre {
  margin-top: 16px;
  border-radius: 3px;
  overflow: hidden;
  a {
    display: block;
    width: 100%;
    text-align: center;
    color: white;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.3;
    padding: 8px;
    background: #b2b1ff;
  }
}
</style>
