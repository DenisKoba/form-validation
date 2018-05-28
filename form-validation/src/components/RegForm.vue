<template>
  <div class="form-wrapper">
    <form>
      <input id="name" class="form-wrapper__input-style js-reset-error" placeholder="Name" type="text" @click="resetError">
      <div class="error-wrapper">
        <div class="name-error form-wrapper__error-style js-error"></div>
      </div>
      <input id="email" name="email" class="form-wrapper__input-style js-reset-error" placeholder="Email" type="email" @click="resetError">
      <div class="error-wrapper">
      <div class="email-error form-wrapper__error-style js-error">Please, enter correct email.</div>
      </div>
      <input id="password" class="form-wrapper__input-style js-reset-error" placeholder="Password" type="password" @click="resetError">
      <div class="error-wrapper">
      <div class="password-error form-wrapper__error-style js-error">Your password should be 8 characters long</div>
      </div>
      <div class="form-wrapper__age-block">
        <select id="day" name="day" class="form-wrapper__age-block_day form-wrapper__age-block_select-style" @click="resetError">
          <option value=" ">Day</option>
          <option v-for="x in days" :value="x" :key="x">{{x}}</option>
        </select>
        <select id="month" name="month" class="form-wrapper__age-block_month form-wrapper__age-block_select-style js-reset-error" @click="resetError">
          <option value=" " selected="selected">Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select id="year" name="year" class="form-wrapper__age-block_year form-wrapper__age-block_select-style age-inputs js-reset-error" @click="resetError">
          <option v-for="y in years" :value="y" :key="y">{{y}}</option>
        </select>
      </div>

      <div class="error-wrapper">
        <div class="age-error form-wrapper__error-style js-error"></div>
      </div>
      <a @click="validate" class="form-wrapper__button">Register</a>
      <div class="form-wrapper__terms-wrapper">
        <label class="form-wrapper__terms-wrapper_checkbox-container" @click="resetError">
          <input class="form-wrapper__terms-wrapper_checkbox-container_privacy-ckeckmark" checked="checked" type="checkbox"
                 id="terms-agree">
          <span class="form-wrapper__terms-wrapper_checkbox-container_checkmark"></span>
        </label>
        <p class="form-wrapper__terms-wrapper_terms-font-style">
          I have read, understand and agree to
          <a target="_blank" href="#">Terms of Use</a>
          and
          <a target="_blank" href="#">Privacy
            Policy</a>.
        </p>
      </div>
      <div class="terms-error-wrapper">
        <div class="terms-error form-wrapper__error-style js-error"></div>
      </div>
    </form>
  </div>
</template>

<script src="../assets/js/validation.js"></script>
<style lang="scss">
  @import "../assets/styles/validation.scss";
</style>
