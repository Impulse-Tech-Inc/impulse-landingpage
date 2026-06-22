import { createRouter, createWebHistory } from "vue-router";
import middlewarePipeline from "@/middleware/middlewarePipeline";
import i18n from "@/i18n";

import routes from "./route";

const PILLAR_NAMES = { network: "Network", crm: "CRM", support: "Support", billing: "Billing", advisory: "Advisory" };

// Create or update a <meta> tag in <head> by attribute/value.
function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// Apply per-route title + description + Open Graph tags from route meta (i18n).
function applySeo(to) {
  const t = i18n.global.t;
  let title = to.meta && to.meta.titleKey ? t(to.meta.titleKey) : "Impulse";
  const desc = to.meta && to.meta.descKey ? t(to.meta.descKey) : t("seoHomeDesc");
  // Pillar detail pages get a distinct title per pillar.
  if (to.name === "pillardetails" && to.params.id) {
    const name = PILLAR_NAMES[to.params.id] || to.params.id;
    title = `${name} · Impulse`;
  }
  document.title = title;
  setMeta("name", "description", desc);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", desc);
  setMeta("property", "og:type", "website");
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", desc);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: import.meta.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.query.pillar) {
      return false;
    }
    return { top: 0 };
  },
});
router.beforeEach((to, from, next) => {
 

  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware;
  const context = { to, from, next }
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
});

router.afterEach((to) => {
  // Per-route SEO head (title, description, Open Graph/Twitter).
  applySeo(to);

  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
