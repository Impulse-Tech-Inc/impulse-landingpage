<template>
  <div class="relative bg-[#0a0a12] min-h-screen overflow-hidden">
    <!-- Premium Background -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#1a1a2e_0%,#0a0a12_70%)]" />
      <div class="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px]">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,57,233,0.06)_0%,transparent_70%)]" />
        <div class="absolute inset-[5%] border border-white/[0.02] rounded-full contact-ring-1" />
        <div class="absolute inset-[20%] border border-white/[0.03] rounded-full border-dashed contact-ring-2" />
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-1/3 opacity-[0.02]" style="background-image: linear-gradient(to right, #7F39E9 1px, transparent 1px), linear-gradient(to bottom, #7F39E9 1px, transparent 1px); background-size: 120px 120px; transform: perspective(1000px) rotateX(75deg) scale(2.5); mask-image: linear-gradient(to top, black, transparent); -webkit-mask-image: linear-gradient(to top, black, transparent)" />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-10 pt-32 pb-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="text-[10px] font-black uppercase tracking-[0.4em] text-[#a446f4] mb-4">{{ $t('contactLabel') || 'Contact Us' }}</div>
        <h1 class="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
          Get in <span class="text-[#a446f4]">Touch</span>
        </h1>
        <p class="text-lg text-white/50 font-light max-w-2xl mx-auto">{{ $t('contactTitle') }}</p>
      </div>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Form Card -->
        <div class="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm">
          <form class="space-y-6" @submit.prevent="onSubmit" ref="form">
            <Textinput
              :label="$t('telemetricsForm-4')"
              name="from_name"
              type="text"
              classLabel="text-white/80 font-bold text-sm"
              classInput="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#7F39E9] focus:ring-[#7F39E9]"
              :placeholder="$t('telemetricsForm-4')"
              v-model="name"
              :error="nameError"
            />
            <Textinput
              :label="$t('telemetricsForm-5')"
              name="reply_to"
              type="email"
              classLabel="text-white/80 font-bold text-sm"
              classInput="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#7F39E9] focus:ring-[#7F39E9]"
              :placeholder="$t('telemetricsForm-5')"
              v-model="email"
              :error="emailError"
            />
            <div class="space-y-2">
              <label class="text-white/80 font-bold text-sm">{{ $t('telemetricsForm-6') }}</label>
              <div class="inputGroup-dark">
                <MazPhoneNumberInput
                  v-model="phone"
                  name="from_phone"
                  show-code-on-list
                  color="info"
                  :preferred-countries="countryList"
                  :default-country-code="countryList[0]"
                  :ignored-countries="['AC']"
                  @update="results = $event"
                  :success="results?.isValid"
                  :error="phoneError"
                />
              </div>
            </div>
            <Textarea
              :label="$t('telemetricsForm-7')"
              name="message"
              classLabel="text-white/80 font-bold text-sm"
              classInput="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#7F39E9] focus:ring-[#7F39E9]"
              :placeholder="$t('telemetricsForm-7')"
              v-model="text"
              :error="textError"
            />
            <Button
              :text="$t('telemetricsForm-8')"
              btnClass="block-btn rounded-full text-white text-sm font-bold uppercase tracking-widest w-full py-4"
              style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)"
            />
          </form>
        </div>

        <!-- Info + Map Card -->
        <div class="flex flex-col gap-6">
          <!-- Address Card -->
          <div class="bg-white/5 border border-white/10 rounded-[2rem] p-8 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white" style="background: linear-gradient(135deg, #a446f4, #4138f3)">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <div class="text-[10px] font-black uppercase tracking-widest text-white/40">HQ Address</div>
                <div class="text-sm font-bold text-white">1150 Nw 72nd Ave Tower | Miami, Florida 33126</div>
              </div>
            </div>
          </div>

          <!-- Map Card -->
          <div class="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden flex-grow min-h-[350px] relative">
            <iframe
              class="w-full h-full absolute inset-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.661216594637!2d-80.31563478839387!3d25.78175137724465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9a4624d7415%3A0x2b97adf5452981a2!2s1150%20NW%2072nd%20Ave%2C%20Miami%2C%20FL%2033126%2C%20EE.%20UU.!5e0!3m2!1ses!2shn!4v1720445516886!5m2!1ses!2shn"
              style="border: 0; filter: invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2);"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Textinput from "@/components/Textinput";
import Button from "@/components/Button";
import Textarea from "@/components/Textarea";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { ref, onMounted } from 'vue';
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import axios from "axios"
import { useToast } from "vue-toastification"

export default {
  components: {
    Textinput, MazPhoneNumberInput,
    Button, Textarea
  },
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
      try {
        const d = (await axios.get('https://ipapi.co/json/')).data
        countryList.value.push(d["country_code"])
      } catch (e) {
        countryList.value.push('US')
      }
    }

    onMounted(async () => {
      await bringCurrent()
    })

    const onSubmit = handleSubmit(async () => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name.value,
            email: email.value,
            phone: phone.value,
            message: text.value,
          }),
        });
        if (response.ok) {
          toast.success('Your request has been sent!', { timeout: 3000 });
          resetForm();
        } else {
          throw new Error('Failed to send');
        }
      } catch (err) {
        toast.error('Failed to send your message. Please try again.', { timeout: 4000 });
      }
    })

    return {
      form, results, email, onSubmit, phone, phoneError,
      countryList, emailError, text, textError, name, nameError,
    };
  },
};
</script>

<style>
/* MazPhoneNumberInput dark mode — full override */
.inputGroup-dark .m-phone-number-input {
  gap: 0 !important;
  width: 100% !important;
}
.inputGroup-dark .m-phone-number-input .m-phone-input {
  width: 100% !important;
}
/* Kill ALL backgrounds and borders, then re-apply */
.inputGroup-dark .m-phone-number-input .m-input,
.inputGroup-dark .m-phone-number-input .m-input-wrapper,
.inputGroup-dark .m-phone-number-input .m-phone-input,
.inputGroup-dark .m-phone-number-input .m-select-input {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
/* Single unified wrapper style on the root */
.inputGroup-dark .m-phone-number-input {
  background-color: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 0.75rem !important;
  overflow: hidden !important;
}
.inputGroup-dark .m-phone-number-input:focus-within {
  border-color: #7F39E9 !important;
}
/* Text & placeholders */
.inputGroup-dark .m-phone-number-input .m-input-input,
.inputGroup-dark .m-phone-number-input input {
  background: transparent !important;
  color: white !important;
}
.inputGroup-dark .m-phone-number-input .m-input-input::placeholder,
.inputGroup-dark .m-phone-number-input input::placeholder {
  color: rgba(255, 255, 255, 0.3) !important;
  font-weight: 400 !important;
}
.inputGroup-dark .m-phone-number-input .m-input-label,
.inputGroup-dark .m-phone-number-input .m-input-top-label,
.inputGroup-dark .m-phone-number-input label {
  color: rgba(255, 255, 255, 0.3) !important;
  font-weight: 400 !important;
}
/* Icons & buttons */
.inputGroup-dark .m-phone-number-input svg {
  color: rgba(255, 255, 255, 0.5) !important;
}
.inputGroup-dark .m-phone-number-input button {
  color: white !important;
}
/* Divider between country selector and phone input */
.inputGroup-dark .m-phone-number-input .m-input-wrapper-left,
.inputGroup-dark .m-phone-number-input .m-input-wrapper-right {
  border-color: rgba(255, 255, 255, 0.1) !important;
}
</style>

<style scoped>
.contact-ring-1 { animation: contactSpin 80s linear infinite; }
.contact-ring-2 { animation: contactSpin 60s linear infinite reverse; }
@keyframes contactSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>
