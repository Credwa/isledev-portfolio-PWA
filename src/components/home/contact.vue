<template>
    <div id="contact">
    <h1 style="margin-top: 8vh">Contact</h1>
    <q-btn color="secondary" @click="formOpen()" label="Open">Email Me</q-btn>
    <q-modal v-model="open" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
    <q-modal-layout>
    <div class="layout-padding ">
      <h1 style="display:flex; align-items: center; justify-content: center">Email</h1>
      <div id='form' class="modalForm" v-if="!mailLoading && !passed">

          <q-field icon="account_circle" label="Name" >
              <q-input placeholder="Name" :class="{errBorder: !$v.form.name.required && $v.form.name.$dirty}" v-model.trim="form.name" @input="$v.form.name.$touch"/>
          </q-field>
          <span class="errMessage" v-if="!$v.form.name.required && $v.form.name.$dirty">Name is required!</span>
          <span class="errMessage2" v-if="!$v.form.name.minLength">Name must be more than 1 character long</span>

          <q-field icon="email" label="Email" :error="emailHasError">
              <q-input placeholder="Example@example.com" v-model.trim="form.email" @input="$v.form.email.$touch" :class="{errBorder: !$v.form.email.required && $v.form.email.$dirty && $v.form.email.$invalid}"  />
          </q-field>
          <span class="errMessage" v-if="$v.form.email.$invalid && $v.form.email.$dirty && $v.form.email.required">Email is invalid</span>

          <q-field label="Subject" icon="subject">
            <q-input v-model="form.subject" class="full-width" :class="{errBorder: !$v.form.subject.required && $v.form.subject.$dirty}" @input="$v.form.subject.$touch"></q-input>
          </q-field>
          <span class="errMessage" v-if="!$v.form.subject.required && $v.form.subject.$dirty">Subject is required</span>
          <span class="errMessage2" v-if="!$v.form.subject.minLength">Subject must be more than 4 characters long</span>

          <q-field label="Message" icon="message">
            <textarea v-model="form.message" class="full-width" :class="{errBorder: !$v.form.message.required && $v.form.message.$dirty}" @input="$v.form.message.$touch"></textarea>
          </q-field>
          <span class="errMessage" v-if="!$v.form.message.required && $v.form.message.$dirty">Message is required</span>
          <span class="errMessage2" v-if="!$v.form.message.minLength">Message must be more than 4 characters long</span>

          <div class="formButtons">
            <q-btn color="negative" @click="formOpen();">Close</q-btn>
            <q-btn color="warning" @click="clearForm">Clear Form</q-btn>
            <q-btn color="primary" @click="submit" :disabled="isFormValid">Submit
            </q-btn>
          </div>
          <div v-if="failed" style="color: red; float: right">Oops something went wrong! Try again later.</div>
      </div>
      <div style=" display: flex; justify-content: center; align-items: center; flex-direction:column">
        <q-spinner color="primary" :size="150" v-if="mailLoading"/>
      </div>

      <div  v-if="passed" style=" display: flex; justify-content: center; align-items: center; flex-direction:column">
        <q-icon name="done" color="primary" style="font-size: 10em"/>
        <h3 style="color: #0277BD;">Email Successfully Sent</h3>
        <h5 style="color: #0277BD;">Will respond ASAP</h5>
      </div>

    </div>
  </q-modal-layout>
</q-modal>
    <div id="socialMedia">
        <a href="https://github.com/credwa"><i class="fa fa-github" aria-hidden="true" style="color: black" target="_blank"></i></a>
        <a href="https://www.linkedin.com/in/craig-edwards-bba7b2bb/"><i class="fa fa-linkedin" aria-hidden="true" style="color: #006097" target="_blank"></i></a>
        <a href="https://plus.google.com/104641623623891737074"><i class="fa fa-google-plus" aria-hidden="true" style="color:red" target="_blank"></i></a>
        <a href="https://www.facebook.com/craig.edwards.9809"><i class="fa fa-facebook-official" aria-hidden="true" style="color: #4267b2" target="_blank"></i></a>
    </div>
    </div>
</template>

<script>
import {
  QBtn,
  QModal,
  QModalLayout,
  QField,
  QInput,
  QSpinner,
  QIcon
} from "quasar";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  components: { QBtn, QModal, QModalLayout, QField, QInput, QSpinner, QIcon },
  data() {
    return {
      open: false,
      mailLoading: false,
      failed: false,
      passed: false,
      formValid: false,
      nameHasError: false,
      emailHasError: false,
      messageHasError: false,
      subjectHasErorr: false,
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  validations: {
    form: {
      name: { required, minLength: minLength(2) },
      email: { required, email },
      subject: { required, minLength: minLength(2) },
      message: { required, minLength: minLength(4) }
    }
  },
  methods: {
    submit() {
      let self = this;
      this.mailLoading = true;
      this.$http.post("sendmail", this.form).then(
        res => {
          setTimeout(function() {
            self.mailLoading = false;
            self.passed = true;
            setTimeout(function() {
              self.passed = false;
              self.formOpen();
            }, 1000);
          }, 3000);
          this.clearForm();
        },
        err => {
          setTimeout(function() {
            self.mailLoading = false;
            self.failed = true;
          }, 1000);
          console.log(err);
        }
      );
    },
    clearForm() {
      this.$v.form.$reset();
      this.form = {
        name: "",
        email: "",
        subject: "",
        message: ""
      };
    },
    formOpen() {
      this.open = !this.open;
      console.log(this.open);
    }
  },
  computed: {
    isFormValid() {
      return this.$v.form.$invalid;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~variables';

#contact {
  min-height: 40vh;
  background: $info;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}

.modalForm {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.formButtons {
  float: right;
}

.errMessage {
  color: $negative;
}

.errBorder {
  border: solid 1px;
  border-color: red;
}

.errMessage2 {
  color: $warning;
}

#socialMedia {
  margin-top: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

i {
  margin-left: 2vw;
  font-size: 2em;

  &:hover {
    font-size: 2.3em;
    transition: font-size 0.2s ease-in;
    animation: jiggle 1s ease-in infinite;
  }
}
</style>