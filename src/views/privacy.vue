<template>
  <div class="bg-[#faf8ff] min-h-screen">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#3D0075] via-[#5a1a9a] to-[#7B2CBF]"></div>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>
      <div class="relative max-w-6xl mx-auto px-6 pt-36 pb-20 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <svg class="w-4 h-4 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span class="text-purple-200 text-sm font-medium">{{ isEnglish ? 'Legal Document' : 'Documento Legal' }}</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          {{ isEnglish ? 'Privacy Policy' : 'Política de Privacidad' }}
        </h1>
        <p class="text-purple-200 text-lg max-w-2xl mx-auto mb-8">
          {{ isEnglish
            ? 'We are committed to protecting your personal data and being transparent about how we use it.'
            : 'Estamos comprometidos a proteger sus datos personales y ser transparentes sobre cómo los utilizamos.'
          }}
        </p>
        <div class="flex items-center justify-center gap-6 text-sm text-purple-200">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{{ isEnglish ? 'Last updated: July 2023' : 'Actualizado: Julio 2023' }}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ isEnglish ? '10 min read' : '10 min de lectura' }}</span>
          </div>
        </div>
      </div>
      <!-- Wave decoration -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#faf8ff"/>
        </svg>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="lg:grid lg:grid-cols-4 lg:gap-12">
        <!-- Sidebar Navigation (Desktop) -->
        <aside class="hidden lg:block">
          <div class="sticky top-28">
            <nav class="bg-white rounded-2xl shadow-sm border border-purple-100 p-6">
              <h3 class="text-xs font-bold text-[#3D0075] uppercase tracking-wider mb-4">
                {{ isEnglish ? 'Contents' : 'Contenido' }}
              </h3>
              <ul class="space-y-2">
                <li v-for="(section, index) in sections" :key="index">
                  <a
                    :href="`#section-${index + 1}`"
                    class="flex items-center gap-3 text-sm text-gray-600 hover:text-[#6E4098] py-2 px-3 rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <span class="w-6 h-6 rounded-full bg-purple-100 text-[#6E4098] text-xs flex items-center justify-center font-semibold">
                      {{ index + 1 }}
                    </span>
                    <span class="line-clamp-1">{{ section.title }}</span>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </aside>

        <!-- Content -->
        <div class="lg:col-span-3">
          <!-- Introduction Card -->
          <div class="bg-white rounded-2xl shadow-sm border border-purple-100 p-8 mb-8">
            <div class="flex items-start gap-4 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-[#3D0075] to-[#6E4098] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-bold text-[#3D0075] mb-2">{{ isEnglish ? 'About Impulse' : 'Acerca de Impulse' }}</h2>
                <p class="text-gray-600 leading-relaxed">
                  {{ isEnglish
                    ? 'Impulse Limited ("Impulse") is a global company with its headquarters in Grand Cayman that develops, implements, and supports proprietary customer care and solutions for service providers within telecommunications sectors in 40+ countries.'
                    : 'Impulse Limited ("Impulse") es una empresa global con sede en Grand Cayman que desarrolla, implementa y respalda soluciones de atención al cliente para proveedores de servicios en más de 40 países.'
                  }}
                </p>
              </div>
            </div>
            <div class="bg-purple-50 rounded-xl p-4 border-l-4 border-[#6E4098]">
              <p class="text-sm text-gray-700">
                {{ isEnglish
                  ? 'Impulse is fully committed to ensuring the proper management and use of all personal data it collects and handles it in compliance with applicable privacy laws, including GDPR, UK DPA, and the EU-U.S. Data Privacy Framework.'
                  : 'Impulse está plenamente comprometida a garantizar la correcta gestión de todos los datos personales que recopila, en conformidad con las leyes de privacidad aplicables, incluyendo GDPR, UK DPA y el Marco de Privacidad de Datos UE-EE.UU.'
                }}
              </p>
            </div>
          </div>

          <!-- Sections -->
          <div class="space-y-6">
            <div
              v-for="(section, index) in sections"
              :key="index"
              :id="`section-${index + 1}`"
              class="bg-white rounded-2xl shadow-sm border border-purple-100 p-8 scroll-mt-28"
            >
              <div class="flex items-start gap-4 mb-6">
                <div class="w-10 h-10 bg-gradient-to-br from-[#3D0075] to-[#6E4098] rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <h2 class="text-xl font-bold text-[#3D0075] mb-4">{{ section.title }}</h2>

                  <div v-for="(content, cIndex) in section.content" :key="cIndex" class="mb-4 last:mb-0">
                    <p v-if="content.type === 'text'" class="text-gray-600 leading-relaxed">
                      {{ content.value }}
                    </p>

                    <ul v-if="content.type === 'list'" class="space-y-2 ml-4">
                      <li v-for="(item, iIndex) in content.items" :key="iIndex" class="flex items-start gap-3 text-gray-600">
                        <svg class="w-5 h-5 text-[#6E4098] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{{ item }}</span>
                      </li>
                    </ul>

                    <div v-if="content.type === 'highlight'" class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100">
                      <h4 class="font-semibold text-[#3D0075] mb-2 flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ content.title }}
                      </h4>
                      <p class="text-sm text-gray-600">{{ content.value }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Links to related pages -->
          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <router-link
              to="/impulse-terms"
              class="flex-1 bg-white rounded-xl border border-purple-100 p-6 hover:border-[#6E4098] hover:shadow-md transition-all group"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs text-[#6E4098] font-medium uppercase tracking-wider mb-1">{{ isEnglish ? 'Also read' : 'También lee' }}</p>
                  <h4 class="font-semibold text-gray-900 group-hover:text-[#6E4098] transition-colors">
                    {{ isEnglish ? 'Terms & Conditions' : 'Términos y Condiciones' }}
                  </h4>
                </div>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-[#6E4098] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isEnglish = computed(() => t('en') === 'en')

const sections = computed(() => {
  if (isEnglish.value) {
    return [
      {
        title: 'Open and Transparent Management',
        content: [
          { type: 'text', value: 'Impulse is committed to ensuring that it is open and transparent about the way it manages personal data. This Privacy Policy provides important information regarding our management of your personal data:' },
          { type: 'list', items: [
            'The kinds of personal data that Impulse collects and holds',
            'How Impulse collects personal data and the purposes for which it is used',
            'Who Impulse discloses personal data to',
            'How you may access and correct your personal data',
            'How to complain about privacy issues'
          ]}
        ]
      },
      {
        title: 'Personal Data We Collect',
        content: [
          { type: 'text', value: 'Impulse will only collect personal data that is necessary for its business functions and activities. We collect data by lawful and fair means.' },
          { type: 'highlight', title: 'Partners & Customers', value: 'We may collect personal data about employees such as name, work location, employer, position, and business contact details when establishing business relationships.' },
          { type: 'highlight', title: 'Recruitment', value: 'Job applicants may provide information including name, address, contact information, resume, cover letter and references.' },
          { type: 'highlight', title: 'Contractors & Suppliers', value: 'We may collect name and business contact details of our contractors and suppliers.' }
        ]
      },
      {
        title: 'Quality of Personal Data',
        content: [
          { type: 'text', value: 'Impulse will ensure, to the extent reasonably possible, that personal data collected, used, or disclosed is accurate, up-to-date, complete, and relevant. If we become aware of any inaccuracies, we will take prompt steps to correct them.' }
        ]
      },
      {
        title: 'Data Security',
        content: [
          { type: 'text', value: 'Impulse takes reasonable steps to implement appropriate technical and organisational measures to protect personal data from misuse, interference, loss and unauthorised access.' },
          { type: 'highlight', title: 'Security Measures', value: 'All personal data is stored at secure premises using quality data management tools and IT security systems including encryption, passwords, and firewalls.' },
          { type: 'text', value: 'The Impulse US Entities comply with the EU-U.S. Data Privacy Framework (EU-U.S. DPF) and the UK Extension to the EU-U.S. DPF.' }
        ]
      },
      {
        title: 'Direct Marketing',
        content: [
          { type: 'text', value: 'Impulse will only engage in direct marketing practices in accordance with the law. At any time, you can request to no longer receive marketing material from Impulse via email or the unsubscribe link in our marketing emails.' }
        ]
      },
      {
        title: 'Disclosure and Retention',
        content: [
          { type: 'text', value: 'We may make your personal data available to suppliers, service providers, and other third parties to perform activities described in this Privacy Policy.' },
          { type: 'text', value: 'Personal data will only be retained for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, and protect legitimate interests.' }
        ]
      },
      {
        title: 'Website and Cookies',
        content: [
          { type: 'text', value: 'Our website uses cookies to track user sessions for statistical purposes. If you reject cookies, you can still use our website, but some features may be limited.' },
          { type: 'text', value: 'Our website may include links to external websites not controlled by Impulse. We do not verify the security of external content.' }
        ]
      },
      {
        title: 'Your Rights',
        content: [
          { type: 'text', value: 'Subject to applicable data privacy laws, you may have the following rights:' },
          { type: 'list', items: [
            'Access, update, or correct your personal data',
            'Request deletion of your personal data',
            'Object to processing of your personal data',
            'Withdraw consent at any time',
            'Lodge a complaint with supervisory authorities'
          ]},
          { type: 'text', value: 'We will respond to your requests within 1 month as required by EU and UK data privacy laws.' }
        ]
      }
    ]
  } else {
    return [
      {
        title: 'Gestión Abierta y Transparente',
        content: [
          { type: 'text', value: 'Impulse se compromete a ser abierto y transparente sobre la forma en que maneja los datos personales. Esta Política de Privacidad proporciona información importante sobre nuestra gestión de sus datos:' },
          { type: 'list', items: [
            'Los tipos de datos personales que Impulse recopila',
            'Cómo recopilamos datos personales y los fines para los que se utilizan',
            'A quién divulgamos datos personales',
            'Cómo puede acceder y corregir sus datos',
            'Cómo presentar quejas sobre privacidad'
          ]}
        ]
      },
      {
        title: 'Datos Personales que Recopilamos',
        content: [
          { type: 'text', value: 'Impulse solo recopilará datos personales necesarios para sus funciones comerciales. Recopilamos datos de manera legal y justa.' },
          { type: 'highlight', title: 'Socios y Clientes', value: 'Podemos recopilar datos sobre empleados como nombre, ubicación de trabajo, empleador, cargo y detalles de contacto comercial.' },
          { type: 'highlight', title: 'Reclutamiento', value: 'Los solicitantes de empleo pueden proporcionar nombre, dirección, información de contacto, currículum y referencias.' },
          { type: 'highlight', title: 'Contratistas y Proveedores', value: 'Podemos recopilar nombre y detalles de contacto comercial de nuestros contratistas y proveedores.' }
        ]
      },
      {
        title: 'Calidad de los Datos',
        content: [
          { type: 'text', value: 'Impulse garantizará que los datos personales recopilados sean precisos, estén actualizados, completos y relevantes. Si detectamos inexactitudes, tomaremos medidas para corregirlas.' }
        ]
      },
      {
        title: 'Seguridad de Datos',
        content: [
          { type: 'text', value: 'Impulse implementa medidas técnicas y organizativas apropiadas para proteger los datos personales contra uso indebido, pérdida y acceso no autorizado.' },
          { type: 'highlight', title: 'Medidas de Seguridad', value: 'Todos los datos se almacenan en instalaciones seguras usando sistemas de seguridad que incluyen cifrado, contraseñas y firewalls.' },
          { type: 'text', value: 'Las Entidades de Impulse en EE.UU. cumplen con el Marco de Privacidad de Datos UE-EE.UU. y su extensión del Reino Unido.' }
        ]
      },
      {
        title: 'Marketing Directo',
        content: [
          { type: 'text', value: 'Impulse solo participará en prácticas de marketing directo de acuerdo con la ley. Puede solicitar no recibir más material de marketing en cualquier momento.' }
        ]
      },
      {
        title: 'Divulgación y Retención',
        content: [
          { type: 'text', value: 'Podemos compartir sus datos con proveedores de servicios y terceros para realizar las actividades descritas en esta Política.' },
          { type: 'text', value: 'Los datos se conservarán solo durante el tiempo necesario para cumplir los fines de recopilación y obligaciones legales.' }
        ]
      },
      {
        title: 'Sitio Web y Cookies',
        content: [
          { type: 'text', value: 'Nuestro sitio web usa cookies para rastrear sesiones de usuario con fines estadísticos. Si rechaza las cookies, algunas funciones pueden estar limitadas.' },
          { type: 'text', value: 'Nuestro sitio puede incluir enlaces a sitios externos no controlados por Impulse.' }
        ]
      },
      {
        title: 'Sus Derechos',
        content: [
          { type: 'text', value: 'Según las leyes de privacidad aplicables, puede tener los siguientes derechos:' },
          { type: 'list', items: [
            'Acceder, actualizar o corregir sus datos personales',
            'Solicitar la eliminación de sus datos',
            'Oponerse al procesamiento de sus datos',
            'Retirar su consentimiento en cualquier momento',
            'Presentar una queja ante las autoridades'
          ]},
          { type: 'text', value: 'Responderemos a sus solicitudes dentro de 1 mes según lo requerido por las leyes de la UE y el Reino Unido.' }
        ]
      }
    ]
  }
})
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
