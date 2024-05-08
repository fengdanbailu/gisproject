<script setup lang="ts">
const { query } = useRoute();
const { push } = useRouter();
const disabled = ref(false);
const form = reactive({ username: "admin", password: "123456" });
const onLogin = async () => {
  push({
    path: (query.fromPath || "/") as string,
  });
};
</script>

<template>
  <div class="login">
    <div class="login-panel">
      <div class="login-title">请登录</div>
      <div class="login-form">
        <div class="form-item">
          <input
            v-model="form.username"
            type="text"
            placeholder="请输入用户名"
          />
        </div>
        <div class="form-item">
          <input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          />
        </div>
      </div>
      <div class="login-button">
        <button :disabled="disabled" @click="onLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<style>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-panel {
    max-width: 500px;
    flex: 1;
    margin: 0 20px;
    padding: 30px 20px;
    background: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0 0 5px #ddd;

    .login-title {
      text-align: center;
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
      color: #464646;
    }

    .login-form {
      .form-item {
        input {
          display: block;
          width: 100%;
          height: 40px;
          outline: none;
          border: 1px solid #eee;
          padding: 0 10px;
          border-radius: 3px;
          box-sizing: border-box;
          color: #505050;
        }

        + .form-item {
          margin-top: 10px;
        }
      }
    }

    .login-button {
      margin-top: 10px;

      button {
        display: block;
        width: 100%;
        height: 35px;
        border: none;
        color: #fff;
        background: #1890ff;
        border-radius: 3px;
        cursor: pointer;

        &[disabled] {
          background: #ddd;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
