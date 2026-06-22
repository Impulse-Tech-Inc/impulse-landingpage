// Shared "request access" contact logic used by every pillar section.
// Each section sets `pillarName` (e.g. 'Network') so the email records which
// pillar it came from. Behavior is identical to the original PillarDetail.
export default {
  data() {
    return {
      pillarEmail: '',
      sending: false,
      toast: { visible: false, type: 'success', title: '', message: '' },
    }
  },
  computed: {
    isValidPillarEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.pillarEmail)
    }
  },
  methods: {
    showToast(type, title, message) {
      this.toast.visible = false
      setTimeout(() => {
        this.toast = { visible: true, type, title, message }
      }, 50)
      setTimeout(() => { this.toast.visible = false }, 4000)
    },
    async submitRequest(email) {
      if (!email || this.sending) return
      this.sending = true
      const pillar = this.pillarName || 'General'
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'Guest (Request Access)',
            email,
            phone: `Language: ${this.$i18n?.locale || 'en'}`,
            message: `New Request Access from ${pillar} pillar.\nEmail: ${email}`,
            pillar
          })
        })
        if (res.ok) {
          this.showToast('success', this.$t('heroRequestSentTitle') || 'Request Sent!', this.$t('heroRequestSentMsg') || 'We will contact you soon.')
          this.pillarEmail = ''
        } else {
          this.showToast('error', this.$t('heroRequestErrorTitle') || 'Error', this.$t('heroRequestErrorMsg') || 'Something went wrong. Please try again.')
        }
      } catch {
        this.showToast('error', this.$t('heroRequestErrorTitle') || 'Error', this.$t('heroRequestErrorMsg') || 'Something went wrong. Please try again.')
      }
      this.sending = false
    },
  }
}
