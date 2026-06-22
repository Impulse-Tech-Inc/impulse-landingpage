import auth from "@/middleware/auth";
const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/reset",
    name: "reset",
    component: () => import("@/views/reset.vue"),
  },
  {
    path: "/",
    name: "Layout",
    redirect: "/",
    component: () => import("@/Layout/index.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/index.vue"),
        meta: { titleKey: "seoHomeTitle", descKey: "seoHomeDesc" },
      },
      {
        path: "/aboutus",
        name: "aboutus",
        component: () => import("@/views/aboutus.vue"),
        meta: { titleKey: "seoAboutTitle", descKey: "seoAboutDesc" },
      },
      {
        path: "/whatwedoservices",
        name: "whatwedoservices",
        component: () => import("@/views/whatwedoserv.vue"),
        meta: { titleKey: "seoWhatWeDoTitle", descKey: "seoWhatWeDoDesc" },
      },
      {
        path: "/services",
        name: "whatwedotelco",
        component: () => import("@/views/whatwedotelco.vue"),
        meta: { titleKey: "seoServicesTitle", descKey: "seoServicesDesc" },
      },
      {
        path: "/impulsebot",
        name: "impulsebot",
        component: () => import("@/views/impulsebot.vue"),
        meta: { titleKey: "seoBotTitle", descKey: "seoBotDesc" },
      },
      {
        path: "/website-design",
        name: "websitedevelopment",
        component: () => import("@/views/websitedevelopment.vue"),
        meta: { titleKey: "seoWebsiteTitle", descKey: "seoWebsiteDesc" },
      },
      {
        path: "/casestudies",
        name: "casestudies",
        component: () => import("@/views/casestudies.vue"),
        meta: { titleKey: "seoCaseStudiesTitle", descKey: "seoCaseStudiesDesc" },
      },
      {
        path: "/impulse-privacy",
        name: "impulseprivady",
        component: () => import("@/views/privacy.vue"),
        meta: { titleKey: "seoPrivacyTitle", descKey: "seoPrivacyDesc" },
      },
      {
        path: "/impulse-terms",
        name: "impulseterms",
        component: () => import("@/views/terms.vue"),
        meta: { titleKey: "seoTermsTitle", descKey: "seoTermsDesc" },
      },
      {
        path: "/viewcases",
        name: "viewcases",
        component: () => import("@/views/viewcases.vue"),
        meta: { titleKey: "seoCaseStudiesTitle", descKey: "seoCaseStudiesDesc" },
      },

      {
        path: "/pillar/:id",
        name: "pillardetails",
        props: true,
        component: () => import("@/views/pillardetails.vue"),
        meta: { titleKey: "seoPillarTitle", descKey: "seoPillarDesc" },
      },
      {
        path: "/blog",
        name: "blog",
        component: () => import("@/views/newsandblog.vue"),
        meta: { titleKey: "seoBlogTitle", descKey: "seoBlogDesc" },
      },
      {
        path: "/blog/:name",
        name: "blogdetails",
        props: true,
        component: () => import("@/views/blogdetails.vue"),
        meta: { titleKey: "seoBlogTitle", descKey: "seoBlogDesc" },
      },
      {
        path: "/boostone",
        name: "boostone",
        component: () => import("@/views/boost1.vue"),
        meta: { titleKey: "seoBoostTitle", descKey: "seoBoostDesc" },
      },
      {
        path: "/boosttwo",
        name: "boosttwo",
        component: () => import("@/views/boost2.vue"),
        meta: { titleKey: "seoBoostTitle", descKey: "seoBoostDesc" },
      },
      {
        path: "/contactus",
        name: "contactus",
        component: () => import("@/views/contactus.vue"),
        meta: { titleKey: "seoContactTitle", descKey: "seoContactDesc" },
      },
      // {
      //   path: "/services",
      //   name: "services",
      //   component: () => import("@/views/Services.vue"),
      // },
      {
        path: "/bpo",
        name: "bpo",
        component: () => import("@/views/ImpulseBPO.vue"),
        meta: { titleKey: "seoBpoTitle", descKey: "seoBpoDesc" },
      },
      {
        path: "/impulse-pay",
        name: "impulse-pay",
        component: () => import("@/views/ImpulsePay.vue"),
        meta: { titleKey: "seoPayTitle", descKey: "seoPayDesc" },
      },
      {
        path: "/impulse-lead",
        name: "impulse-lead",
        component: () => import("@/views/ImpulseLead.vue"),
        meta: { titleKey: "seoLeadTitle", descKey: "seoLeadDesc" },
      },
      {
        path: "/telemetrics",
        name: "telemetrics",
        component: () => import("@/views/Telemetrics.vue"),
        meta: { titleKey: "seoTelemetricsTitle", descKey: "seoTelemetricsDesc" },
      },
      {
        path: "/product",
        name: "product",
        component: () => import("@/views/product.vue"),
        meta: { titleKey: "seoProductTitle", descKey: "seoProductDesc" },
      },
      {
        path: "/boost",
        name: "boost",
        component: () => import("@/views/ImpulseBoost.vue"),
        meta: { titleKey: "seoBoostTitle", descKey: "seoBoostDesc" },
      },
      {
        path: "/saveblog",
        name: "saveblog",
        meta: { middleware: [auth] },
        component: () => import("@/views/SaveBlog.vue"),
      },
    ],
  },
];

export default routes;
