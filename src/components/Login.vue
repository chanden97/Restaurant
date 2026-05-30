<template>
  <div class="login-container">
    <div class="login-box">
      <h2>ចូលប្រើប្រាស់ (Login)</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label>អ៊ីមែល ឬ ឈ្មោះអ្នកប្រើប្រាស់</label>
          <input type="text" placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក" required />
        </div>
        <div class="input-group">
          <label>លេខសម្ងាត់</label>
          <input type="password" placeholder="បញ្ចូលលេខសម្ងាត់" required />
        </div>
        <button type="submit" class="btn-login">ចូលគណនី</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  methods: {
    handleLogin() {
      alert('កំពុងចូលប្រើប្រាស់...');
      // អ្នកអាចបន្ថែម Logic ភ្ជាប់ទៅ API នៅទីនេះ
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background-color: #fdfbf7; /* ពណ៌ background ស្រដៀងក្នុងរូបភាពរបស់អ្នក */
}
.login-box {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}
h2 {
  color: #701a3e; /* ពណ៌ឈាមជ្រូកដូចក្នុង Web របស់អ្នក */
  margin-bottom: 20px;
  text-align: center;
}
.input-group {
  margin-bottom: 15px;
  text-align: left;
}
.input-group label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}
.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn-login {
  width: 100%;
  padding: 12px;
  background-color: #701a3e; /* ពណ៌ប៊ូតុង Shop Now */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
.btn-login:hover {
  background-color: #55132e;
}
</style>