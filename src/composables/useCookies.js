import { ref, watch, computed } from 'vue';
import { useCookie } from 'vue-cookie-next';

const allowCookies = ref();

export default function useCookies(gtag) {
  const cookie = useCookie();

  // Read existing consent from cookie
  const existing = cookie.getCookie('cookies_consent');
  if (existing === 'true') {
    allowCookies.value = true;
    gtag.optIn();
  } else if (existing === 'false') {
    allowCookies.value = false;
    gtag.optOut();
  } else {
    allowCookies.value = undefined;
  }

  watch(allowCookies, () => {
    if (allowCookies.value != undefined) {
      cookie.setCookie('cookies_consent', allowCookies.value.toString(), {
        expire: new Date(new Date().getFullYear() + 1, 0, 1),
      });

      if (allowCookies.value) {
        gtag.optIn();
      } else {
        gtag.optOut();
      }
    }
  });

  const showBanner = computed(() => {
    return allowCookies.value === undefined;
  });

  const okClicked = () => (allowCookies.value = true);
  const cancelClicked = () => (allowCookies.value = false);

  return {
    allowCookies,
    showBanner,
    okClicked,
    cancelClicked
  };
}
