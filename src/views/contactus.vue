<template>
  <div>
    <section class="pt-20">
      <div
        class="my-10 bg-[#F6F6F6] px-5 md:px-10 xl:px-20 py-10 mx-2 xl:mx-10 rounded-md animate-fade-up animate-delay-300 border shadow">
        <span class="flex text-[#3D0075] font-bold text-xl md:text-2xl xl:text-3xl gap-x-1">Get in <span
            class="text-[#0079D8]">Touch</span></span>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 my-6">
          <form class="l-section space-y-4" @submit.prevent="onSubmit" ref="form">
            <span class="text-[#3D0075] text-base md:text-lg xl:text-xl font-medium">{{ $t('contactTitle') }}</span>
            <Textinput :label="$t('telemetricsForm-4')" name="from_name" type="text"
              :classLabel="'text-[#3D0075] font-bold text-base xl:text-lg'"
              :classInput="'border-[#8791A1] rounded-md placeholder:text-lg'" :placeholder="$t('telemetricsForm-4')"
              v-model="name" :error="nameError" />
            <Textinput :label="$t('telemetricsForm-5')" name="reply_to" type="email"
              :classLabel="'text-[#3D0075] font-bold text-base xl:text-lg'"
              :classInput="'border-[#8791A1] rounded-md placeholder:text-lg'" :placeholder="$t('telemetricsForm-5')"
              v-model="email" :error="emailError" />
            <div class="flex-row space-y-2">
              <label class="text-[#3D0075] font-bold text-base xl:text-lg">
                {{ $t('telemetricsForm-6') }}</label>
              <div class="flex-row items-stretch inputGroup">
                <MazPhoneNumberInput v-model="phone" name="from_phone" show-code-on-list color="info"
                  :preferred-countries="countryList" :default-country-code="countryList[0]" :ignored-countries="['AC']"
                  @update="results = $event" :success="results?.isValid" :error="phoneError" />
              </div>
            </div>
            <Textarea :label="$t('telemetricsForm-7')" name="message"
              :classLabel="'text-[#3D0075] font-bold text-base xl:text-lg'"
              :classInput="'border-[#8791A1] rounded-md placeholder:text-lg'" :placeholder="$t('telemetricsForm-7')"
              v-model="text" :error="textError" />
            <Button :text="$t('telemetricsForm-8')" btnClass=" block-btn rounded-full text-white text-base xl:text-xl"
              style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)" />
          </form>
          <div class="flex flex-col space-y-4 h-full">
            <div class="flex gap-6 xl:gap-10 flex-wrap">
              <div class="flex flex-col">
                <div class="flex items-center gap-x-1">
                  <img src="../assets/images/email-icon.svg" class="h-4 xl:h-6" alt="">
                  <span class="text-[#3D0075] font-bold text-base xl:text-lg">Email</span>
                </div>
                <span class="text-[#3D0075] text-base xl:text-lg">bmolina@impulse.ky</span>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center gap-x-1">
                  <img src="../assets/images/office1-icon.svg" class="h-4 xl:h-6" alt="">
                  <span class="text-[#3D0075] font-bold text-base xl:text-lg">HQ Address</span>
                </div>
                <span class="text-[#3D0075] text-base xl:text-lg">1150 Nw 72nd Ave Tower | Miami, Florida 33126</span>
              </div>
            </div>
            <div class="map-container relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex-grow min-h-[300px]">
              <div class="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <iframe class="w-full h-full absolute inset-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.661216594637!2d-80.31563478839387!3d25.78175137724465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9a4624d7415%3A0x2b97adf5452981a2!2s1150%20NW%2072nd%20Ave%2C%20Miami%2C%20FL%2033126%2C%20EE.%20UU.!5e0!3m2!1ses!2shn!4v1720445516886!5m2!1ses!2shn"
                style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import Textinput from "@/components/Textinput";
import Card from "@/components/Card/index.vue"
import Button from "@/components/Button";
import Textarea from "@/components/Textarea";
import contact from "@/assets/images/contact.webp"
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { ref, onMounted } from 'vue';
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import axios from "axios"
import { useToast } from "vue-toastification"

export default {
  components: {
    Card, Textinput, MazPhoneNumberInput,
    Button, Textarea
  },
  data() {
    return { contact }
  },
  mounted() {
    this.$store.themeSettingsStore.bringAllSections(document.querySelectorAll('.l-section'))
  },
  methods: {},
  setup() {
    const toast = useToast()
    const form = ref(null);

    const schema = yup.object({
      email: yup.string().required('Please fill the empty field').email("Please fill the field with a valid email address"),
      name: yup.string().required('Please fill the empty field'),
      phone: yup.string().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, "Please enter a valid phone number").required('Please fill the empty field'),
      text: yup.string().required('Please fill the empty field'),
    });

    const { handleSubmit, resetForm } = useForm({
      validationSchema: schema,
    });

    const { value: email, errorMessage: emailError } = useField("email");
    const { value: text, errorMessage: textError } = useField("text");
    const { value: name, errorMessage: nameError } = useField("name");
    const { value: phone, errorMessage: phoneError } = useField("phone");
    const results = ref()
    const countryList = ref([])

    const bringCurrent = async () => {
      var options = { method: 'GET', url: 'https://ipapi.co/json/' };


      const d = (await axios.request(options)).data


      countryList.value.push(d["country_code"])


    }

    onMounted(async () => {
      await bringCurrent()
    })




    const onSubmit = handleSubmit(async () => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.value,
            email: email.value,
            phone: phone.value,
            message: text.value,
          }),
        });

        if (response.ok) {
          toast.success('Your request has been sent!', {
            timeout: 3000,
          });
          resetForm();
        } else {
          throw new Error('Failed to send');
        }
      } catch (err) {
        console.log('FAILED...', err);
        toast.error('Failed to send your message. Please try again.', {
          timeout: 4000,
        });
      }
    })

    return {
      form,
      results,
      email,
      onSubmit,
      phone,
      phoneError,

      countryList,

      emailError,
      text,
      textError,
      name,
      nameError,
    };
  },
};
</script>
<style>
.changeColor {
  background-color: #3C007C !important;
}

.inputGroup .m-phone-number-input .m-input-wrapper {
  background-color: transparent !important;
  border: 1px solid #8791A1 !important;
}

.inputGroup .m-phone-number-input input {
  background-color: transparent !important;
}

.inputGroup .m-phone-number-input * {
  border-color: #8791A1 !important;
}
</style>