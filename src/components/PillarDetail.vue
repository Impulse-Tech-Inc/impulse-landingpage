<template>
  <section class="min-h-screen bg-[#0a0a12] pt-24 pb-32 px-6 md:px-8 overflow-hidden">
    <div class="max-w-[1400px] mx-auto">
      <!-- Back Button -->
      <button
        class="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-white transition-all mb-8"
        @click="$emit('back')"
      >
        <div class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:bg-[#7F39E9] group-hover:text-white group-hover:border-[#7F39E9]">
          <Icon icon="heroicons-outline:arrow-left" class="text-base" />
        </div>
        {{ $t('pillarBack') }}
      </button>

      <!-- NETWORK PILLAR -->
      <div v-if="pillarId === 'network'" class="space-y-24">

        <!-- SECTION 1: HERO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-px bg-blue-500" />
              <span class="text-[12px] font-black uppercase tracking-[0.5em] text-blue-500">Infrastructure & Automation</span>
            </div>
            <h1 class="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight md:leading-[0.85] tracking-tighter">
              Telemetrics<br />Intelligence.
            </h1>
            <h2 class="text-2xl md:text-3xl font-bold text-white/70 tracking-tight leading-tight max-w-md">{{ $t('pillarNetworkHeroSubtitle') }}</h2>
            <p class="text-xl text-white/50 font-light max-w-xl leading-relaxed">{{ $t('pillarNetworkHero') }}</p>
            <PillarBadges />
          </div>
          <!-- Orbital Visual -->
          <div class="relative aspect-square flex items-center justify-center">
            <OrbitalVisual />
          </div>
        </div>

        <!-- SECTION 2: MODULE DEEP-DIVE -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 bg-white/5 border border-white/10 rounded-[3rem] space-y-16 shadow-[0_20px_60px_rgba(59,130,246,0.08)]">

          <!-- Module Header -->
          <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg bg-blue-500">
              <Icon icon="heroicons-outline:chip" class="text-xl" />
            </div>
            <div class="flex items-center gap-3 flex-wrap">
              <span class="text-sm font-black text-white uppercase tracking-wider">TELEMETRICS</span>
              <span class="text-sm text-white/40">&middot;</span>
              <span class="text-sm text-white/50">{{ $t('pillarNetworkModuleLabel') }}</span>
              <span class="px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] font-black text-teal-600 uppercase tracking-widest shadow-[0_2px_10px_rgba(20,184,166,0.2)]">{{ $t('pillarActiveModule') }}</span>
            </div>
          </div>

          <!-- Quote -->
          <p class="text-xl md:text-2xl text-white/50 italic font-light leading-relaxed max-w-4xl border-l-4 border-blue-500/30 pl-6">
            {{ $t('pillarNetworkQuote') }}
          </p>

          <!-- Noise vs Signal -->
          <div class="p-4 md:p-10 lg:p-16 bg-white/5 border border-white/10 rounded-[2rem] relative overflow-hidden">
              <!-- Background Noise Dots -->
              <div class="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2 opacity-10 p-6 pointer-events-none">
                <div v-for="n in 72" :key="'noise-'+n" class="w-1 h-1 bg-rose-500 rounded-full noise-dot" :style="{ animationDelay: `${Math.random() * 5}s`, animationDuration: `${2 + Math.random() * 3}s` }" />
              </div>
            <div class="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left justify-center">
              <div class="space-y-2">
                <div class="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em]">{{ $t('pillarNetworkNoise') }}</div>
                <div class="text-4xl md:text-6xl font-black text-white tracking-tighter">561</div>
                <div class="text-[10px] font-bold text-white/40 uppercase tracking-widest">{{ $t('pillarNetworkAlarms') }}</div>
              </div>
              <div class="relative w-28 h-28 flex items-center justify-center">
                <div class="absolute inset-0 border border-blue-500/20 rounded-full border-dashed animate-spin-very-slow" />
                <div class="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500">
                  <Icon icon="heroicons-outline:filter" class="text-3xl" />
                </div>
              </div>
              <div class="space-y-2">
                <div class="text-[10px] font-black text-teal-500 uppercase tracking-[0.3em]">{{ $t('pillarNetworkSignal') }}</div>
                <div class="text-4xl md:text-6xl font-black text-white tracking-tighter">1</div>
                <div class="text-[10px] font-bold text-white/40 uppercase tracking-widest">{{ $t('pillarNetworkRoot') }}</div>
              </div>
            </div>
          </div>

          <!-- Strategic Value -->
          <div class="space-y-6">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{{ $t('pillarStrategicValue') }}</div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CapabilityCard v-for="(cap, i) in networkCaps" :key="i" :title="cap.title" :icon="cap.icon" />
            </div>
          </div>

          <!-- Process Flow -->
          <div class="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 p-8 md:p-10 bg-white/[0.03] rounded-[2.5rem] border border-white/5 overflow-hidden">
            <template v-for="(step, i) in networkProcessSteps" :key="i">
              <!-- Step Node -->
              <div class="relative z-10 flex flex-col items-center gap-4">
                <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 shadow-xl hover:border-blue-500 transition-all">
                  <Icon :icon="step.icon" class="text-2xl" />
                </div>
                <div class="text-[10px] font-black uppercase tracking-[0.3em] text-white">{{ step.label }}</div>
              </div>
              <!-- Connecting Line with Pulse -->
              <div v-if="i < networkProcessSteps.length - 1" class="hidden md:block flex-1 h-px bg-white/10 relative mx-2">
                <div class="process-pulse absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" :style="{ animationDelay: `${i * 0.5}s` }" />
              </div>
              <!-- Mobile Arrow -->
              <div v-if="i < networkProcessSteps.length - 1" class="md:hidden text-white/30">
                <Icon icon="heroicons-outline:chevron-down" class="text-lg" />
              </div>
            </template>
          </div>

          <!-- Impact Card -->
          <div class="p-6 md:p-12 rounded-[2rem] relative overflow-hidden bg-white/5 border border-white/10">
            <div class="relative z-10 flex flex-col lg:flex-row items-center gap-10">
              <div class="w-24 h-24 rounded-[2rem] bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-500 shrink-0">
                <Icon icon="heroicons-outline:exclamation" class="text-5xl" />
              </div>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="px-4 py-1.5 rounded-full bg-rose-500 text-white text-[10px] font-black uppercase tracking-[0.2em]">1 ALERT. NOT 561.</div>
                </div>
                <p class="text-xl text-white/80 leading-relaxed font-light max-w-4xl">{{ $t('pillarNetworkImpact') }}</p>
              </div>
            </div>
          </div>

          <!-- Killer Feature Callout -->
          <div class="p-6 md:p-12 lg:p-16 bg-white/5 border border-white/10 rounded-[2rem] relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <Icon icon="heroicons-outline:user-group" class="text-blue-500 text-[200px]" />
            </div>
            <div class="relative z-10 space-y-8">
              <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-500 text-xs font-black uppercase tracking-widest">
                <Icon icon="heroicons-outline:lightning-bolt" class="text-sm" />
                {{ $t('pillarNetworkAdvantageLabel') }}
              </div>
              <h3 class="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl">
                {{ $t('pillarNetworkAdvantageTitle') }}
              </h3>
              <p class="text-lg text-white/50 font-light max-w-2xl leading-relaxed">
                {{ $t('pillarNetworkAdvantageDesc') }}
              </p>
            </div>
          </div>

          <!-- BRIDGE TO ENGAGE -->
          <div class="rounded-[3rem] border border-white/10">
            <div class="rounded-[2.9rem] p-12 md:p-20 relative overflow-hidden bg-white/5">
              <div class="relative z-10 flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
                <h3 class="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
                  {{ $t('pillarNetworkBridge1') }}<br />
                  <span class="text-blue-400">{{ $t('pillarNetworkBridge2') }}</span>
                </h3>
                <p class="text-lg text-white/40 font-light leading-relaxed">{{ $t('pillarNetworkBridgeDesc') }}</p>
                <button class="px-10 py-5 bg-white rounded-xl text-slate-900 text-sm font-black uppercase tracking-widest hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all" @click="$emit('navigate', 'crm')">
                  {{ $t('pillarNetworkBridgeBtn') }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 3: SOVEREIGN INFRASTRUCTURE -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] space-y-12 bg-white/5 border border-white/10">
          <div class="text-center space-y-6 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">{{ $t('pillarNetworkSovereignLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarNetworkSovereignTitle') }}</h2>
            <p class="text-xl text-white/50 font-light leading-relaxed">{{ $t('pillarNetworkSovereignDesc') }}</p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div v-for="(feat, i) in networkSovereignFeats" :key="i" class="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm space-y-4">
                <div class="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Icon :icon="feat.icon" class="text-lg" />
                </div>
                <h4 class="text-sm font-black text-white uppercase tracking-wider">{{ $t(feat.titleKey) }}</h4>
                <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t(feat.descKey) }}</p>
              </div>
            </div>
            <!-- Sovereign Core Visual -->
            <div class="relative aspect-square flex items-center justify-center">
              <div class="relative w-full h-full flex items-center justify-center">
                <!-- Outer ring -->
                <div class="absolute w-[80%] h-[80%] border border-white/10 rounded-full border-dashed sov-ring-outer" />
                <!-- Inner ring with particles -->
                <div class="absolute w-[60%] h-[60%] border-2 border-blue-500/20 rounded-full sov-ring-inner">
                  <div v-for="n in 6" :key="'sov-'+n" class="absolute w-2 h-2 bg-blue-500 rounded-full sov-particle shadow-[0_0_15px_#3b82f6]" :style="{ top: '50%', left: '50%', transform: `rotate(${n * 60}deg) translateX(100px)`, animationDelay: `${n * 0.3}s` }" />
                </div>
                <!-- Central shield -->
                <div class="relative z-10 w-40 h-40 bg-white rounded-[2.5rem] flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.3)] sov-core-glow">
                  <Icon icon="heroicons-outline:shield-check" class="text-blue-500 text-7xl" />
                </div>
                <!-- Scanning blur -->
                <div class="absolute w-72 h-72 bg-blue-500/10 blur-[80px] rounded-full sov-scan" />
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 4: ECOSYSTEM -->
        <div v-reveal class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-10">
            <div class="space-y-6">
              <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest">
                <Icon icon="heroicons-outline:cube" class="text-sm" />
                {{ $t('pillarNetworkEcoLabel') }}
              </div>
              <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarNetworkEcoTitle1') }}<br />{{ $t('pillarNetworkEcoTitle2') }}</h2>
              <p class="text-xl text-white/50 font-light leading-relaxed max-w-xl">{{ $t('pillarNetworkEcoDesc') }}</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="vendor in networkVendors"
                :key="vendor"
                class="px-5 py-2.5 rounded-2xl border border-white/10 bg-white/[0.03] text-sm font-bold text-white/70"
              >{{ vendor }}</span>
              <span class="px-5 py-2.5 rounded-2xl text-sm font-black uppercase tracking-widest text-white cursor-pointer hover:bg-blue-600 transition-all bg-blue-500">{{ $t('pillarNetworkEcoMore') }}</span>
            </div>
          </div>
          <!-- Integration Visual -->
          <div class="relative aspect-video bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
            <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_70%)]" />
            <div class="absolute inset-0 flex items-center justify-center p-12">
              <div class="relative w-full h-full border border-white/5 rounded-2xl flex items-center justify-center">
                <div class="grid grid-cols-3 gap-10">
                  <div v-for="n in 6" :key="n" class="w-16 h-16 rounded-xl bg-white/[0.03] border border-white/10 eco-node-pulse" :style="{ animationDelay: `${n * 0.5}s` }" />
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-24 h-24 rounded-3xl flex items-center justify-center text-white bg-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.4)]">
                    <Icon icon="heroicons-outline:link" class="text-5xl" />
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute bottom-5 left-6 right-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              <span>Native Integration Layer</span>
              <span>v4.2.0_STABLE</span>
            </div>
          </div>
        </div>

        <!-- SECTION 5: CLOSING CTA -->
        <PillarCTA :sending="sending" @request="(e) => submitRequest(e)" @goback="$emit('back')" />
      </div>

      <!-- CRM PILLAR -->
      <div v-if="pillarId === 'crm'" class="space-y-24">

        <!-- SECTION 1: HERO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-px bg-blue-500" />
              <span class="text-[12px] font-black uppercase tracking-[0.5em] text-blue-500">Intelligence & Action</span>
            </div>
            <h1 class="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight md:leading-[0.85] tracking-tighter">Agentic<br />CRM.</h1>
            <h2 class="text-2xl md:text-3xl font-bold text-white/70 tracking-tight leading-tight max-w-md">{{ $t('pillarCrmHeroSubtitle') }}</h2>
            <p class="text-xl text-white/50 font-light max-w-md leading-relaxed">{{ $t('pillarCrmHeroDesc') }}</p>
            <PillarBadges />
          </div>
          <div class="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <StoryLaneEmbed />
          </div>
        </div>

        <!-- SECTION 2: ENGAGE - NETWORK-AWARE CRM -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 bg-white/5 border border-white/10 rounded-[3rem] space-y-10 shadow-[0_20px_60px_rgba(59,130,246,0.08)]">
          <!-- Header -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg">
                <Icon icon="heroicons-outline:user-group" class="text-xl" />
              </div>
              <span class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50">{{ $t('pillarCrmEngageLabel') }}</span>
            </div>
            <div class="px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_2px_10px_rgba(20,184,166,0.2)]">{{ $t('pillarActiveModule') }}</div>
          </div>

          <!-- Quote -->
          <p class="text-2xl md:text-3xl text-white font-serif italic leading-snug max-w-5xl">"{{ $t('pillarCrmQuote') }}"</p>

          <!-- 3 Capabilities -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(cap, i) in crmCaps" :key="i" class="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4 hover:bg-white/10 transition-all">
              <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Icon :icon="cap.icon" class="text-xl" />
              </div>
              <h4 class="text-xl font-black text-white tracking-tight">{{ $t(cap.titleKey) }}</h4>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t(cap.descKey) }}</p>
            </div>
          </div>

          <!-- Stats Row -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
            <div v-for="(stat, i) in crmStats" :key="i">
              <div class="text-4xl md:text-5xl font-black text-white tracking-tighter">{{ stat.val }}</div>
              <div class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mt-2">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- SECTION 3: AGENTIC - AI ORCHESTRATION -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 rounded-[3rem] relative overflow-hidden bg-white/5 border border-white/10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Left -->
            <div class="space-y-8">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Icon icon="heroicons-outline:lightning-bolt" class="text-xl" />
                </div>
                <span class="text-[11px] font-black uppercase tracking-[0.3em] text-white/60">{{ $t('pillarCrmAgenticLabel') }}</span>
              </div>
              <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">{{ $t('pillarCrmAgenticTitle') }}</h2>
              <p class="text-lg text-white/70 font-light leading-relaxed max-w-xl">{{ $t('pillarCrmAgenticDesc') }}</p>

              <!-- Agent Cards -->
              <div class="space-y-4">
                <div v-for="(agent, i) in crmAgents" :key="i" class="p-5 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-all">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                      <Icon :icon="agent.icon" class="text-lg" />
                    </div>
                    <div class="space-y-1">
                      <h4 class="text-base font-black text-white tracking-tight">{{ $t(agent.nameKey) }}</h4>
                      <p class="text-sm text-white/60 font-light leading-relaxed">{{ $t(agent.descKey) }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Channel Badges -->
              <div class="flex flex-wrap gap-3 pt-2">
                <div v-for="channel in ['Web Chat', 'WhatsApp', 'Voice']" :key="channel" class="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                  {{ channel }}
                </div>
              </div>
            </div>

            <!-- Right: Demo Visual -->
            <div class="relative flex items-center justify-center">
              <div class="w-full max-w-md mx-auto">
                <!-- Browser Chrome -->
                <div class="bg-white/10 border border-white/10 rounded-[1.5rem] overflow-hidden backdrop-blur-sm">
                  <!-- Title Bar -->
                  <div class="flex items-center gap-2 px-5 py-3 border-b border-white/10">
                    <div class="w-3 h-3 rounded-full bg-rose-400/80" />
                    <div class="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div class="w-3 h-3 rounded-full bg-teal-400/80" />
                    <div class="ml-4 text-[10px] font-black text-white/40 uppercase tracking-widest">Live Demo · Agentic Resolution</div>
                  </div>
                  <!-- Content Area -->
                  <div class="relative aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-blue-400/30">
                    <!-- Idle State: Play Button -->
                    <template v-if="!demoRunning">
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-32 h-32 rounded-full border border-white/10 crm-demo-pulse" />
                      </div>
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-48 h-48 rounded-full border border-white/5 crm-demo-pulse-delayed" />
                      </div>
                      <button class="relative z-10 w-20 h-20 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all group cursor-pointer" @click="startDemo">
                        <Icon icon="heroicons-outline:play" class="text-3xl ml-1 group-hover:scale-110 transition-transform" />
                      </button>
                    </template>
                    <!-- Running State: Step Animation -->
                    <template v-else>
                      <div class="flex flex-col items-center justify-center space-y-6 px-6">
                        <!-- Spinning Ring + Icon -->
                        <div class="relative w-28 h-28 flex items-center justify-center">
                          <div class="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin-very-slow" />
                          <div class="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                            <Icon :icon="demoSteps[demoStep].icon" class="text-2xl text-white" />
                          </div>
                        </div>
                        <!-- Label -->
                        <div class="text-center space-y-2">
                          <div class="text-xl font-black text-white tracking-tight">{{ demoSteps[demoStep].label }}</div>
                          <div class="text-[10px] font-black uppercase tracking-[0.3em] text-teal-300">Status: {{ demoSteps[demoStep].status }}</div>
                        </div>
                        <!-- Progress dots -->
                        <div class="flex gap-2">
                          <div
                            v-for="(s, si) in demoSteps"
                            :key="si"
                            class="rounded-full transition-all duration-500"
                            :class="si <= demoStep ? 'w-8 h-1 bg-teal-400' : 'w-4 h-1 bg-white/20'"
                          />
                        </div>
                      </div>
                    </template>
                  </div>
                  <!-- Status Bar -->
                  <div class="flex items-center justify-between px-5 py-3 border-t border-white/10">
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 rounded-full crm-demo-blink" :class="demoRunning ? 'bg-teal-400' : 'bg-white/30'" />
                      <span class="text-[10px] font-bold text-white/50 uppercase tracking-wider">{{ demoRunning ? demoSteps[demoStep].log : $t('pillarCrmDemoStatus') }}</span>
                    </div>
                    <span class="text-[10px] font-bold text-white/30 uppercase tracking-wider">{{ demoRunning ? 'Running...' : $t('pillarCrmDemoPlay') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 4: GROW - REVENUE INTELLIGENCE -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 bg-white/5 border border-white/10 rounded-[3rem] space-y-10 shadow-[0_20px_60px_rgba(59,130,246,0.08)]">
          <!-- Header -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg">
                <Icon icon="heroicons-outline:trending-up" class="text-xl" />
              </div>
              <span class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50">{{ $t('pillarCrmGrowLabel') }}</span>
            </div>
            <div class="px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_2px_10px_rgba(20,184,166,0.2)]">{{ $t('pillarActiveModule') }}</div>
          </div>

          <!-- Quote -->
          <p class="text-2xl md:text-3xl text-white font-serif italic leading-snug max-w-5xl">"{{ $t('pillarCrmGrowQuote') }}"</p>

          <!-- 3 Capabilities -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(cap, i) in crmGrowCaps" :key="i" class="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4 hover:bg-white/10 transition-all">
              <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Icon :icon="cap.icon" class="text-xl" />
              </div>
              <h4 class="text-xl font-black text-white tracking-tight">{{ $t(cap.titleKey) }}</h4>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t(cap.descKey) }}</p>
            </div>
          </div>

          <!-- Big Stat -->
          <div class="pt-8 border-t border-white/5 text-center">
            <div class="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">+$12.40</div>
            <div class="text-[11px] font-black uppercase tracking-[0.4em] text-blue-500 mt-3">{{ $t('pillarCrmGrowStat') }}</div>
          </div>
        </div>

        <!-- SECTION 5: CLOSING CARD -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden bg-white/5 border border-white/10">
          <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl mx-auto">{{ $t('pillarCrmCloseLine1') }}</h2>
          <h2 class="text-3xl md:text-5xl font-black text-blue-400 tracking-tighter leading-tight max-w-4xl mx-auto">{{ $t('pillarCrmCloseLine2') }}</h2>
          <p class="text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto">{{ $t('pillarCrmCloseDesc') }}</p>
          <div class="flex flex-col items-center gap-4 pt-4 max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row items-center gap-3 w-full">
              <input
                v-model="pillarEmail"
                type="email"
                :placeholder="$t('heroEmailPlaceholder')"
                class="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder:text-white/30"
              />
              <button
                class="w-full sm:w-auto min-w-[200px] px-10 py-4 bg-white text-slate-900 text-xs font-black uppercase tracking-[0.3em] rounded-xl transition-all shadow-2xl whitespace-nowrap flex items-center justify-center gap-2 relative"
                :class="!isValidPillarEmail || sending ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-90'"
                :disabled="!isValidPillarEmail || sending"
                @click="submitRequest(pillarEmail)"
              >
                <svg v-if="sending" class="w-4 h-4 animate-spin absolute" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                <span :class="sending ? 'invisible' : ''">{{ $t('pillarRequestAccess') }}</span>
              </button>
            </div>
            <button
              class="text-white/40 hover:text-white font-bold border-b border-white/20 hover:border-white pb-1 transition-all text-sm"
              @click="$emit('back')"
            >
              {{ $t('pillarBack') }}
            </button>
          </div>
        </div>
      </div>

      <!-- SUPPORT PILLAR -->
      <div v-if="pillarId === 'support'" class="space-y-24">

        <!-- SECTION 1: HERO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-px" style="background: linear-gradient(90deg, #a446f4, #4138f3)" />
              <span class="text-[12px] font-black uppercase tracking-[0.5em] text-[#7F39E9]">Intelligence & Action</span>
            </div>
            <h1 class="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight md:leading-[0.85] tracking-tighter">Support<br />AI.</h1>
            <h2 class="text-2xl md:text-3xl font-bold text-white/70 tracking-tight leading-tight max-w-md">{{ $t('pillarSupportHeroSubtitle') }}</h2>
            <p class="text-xl text-white/50 font-light max-w-xl leading-relaxed">{{ $t('pillarSupportHero') }}</p>
            <PillarBadges />
          </div>
          <div class="relative aspect-square flex items-center justify-center">
            <SupportVisual />
          </div>
        </div>

        <!-- SECTION 2: THE SUPPORT GAP -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 bg-white/[0.03] border border-white/10 rounded-[3rem] text-center space-y-12">
          <div class="space-y-4">
            <div class="text-[12px] font-black text-[#7F39E9] uppercase tracking-[0.5em]">{{ $t('pillarSupportGapLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none max-w-4xl mx-auto">
              {{ $t('pillarSupportProblem') }}
            </h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div class="p-8 bg-rose-500/5 border border-rose-500/10 rounded-[2rem] space-y-6 text-left">
              <h3 class="text-xl font-black text-rose-500 tracking-tight">{{ $t('pillarSupportOther') }}</h3>
              <ul class="space-y-3">
                <li v-for="(item, i) in supportOldKeys" :key="i" class="flex items-center gap-3 text-white/60 font-medium text-sm">
                  <div class="w-1.5 h-1.5 rounded-full bg-rose-500/40 shrink-0" />{{ $t(item) }}
                </li>
              </ul>
            </div>
            <div class="p-8 bg-[#7F39E9]/5 border border-[#7F39E9]/30 rounded-[2rem] space-y-6 text-left">
              <h3 class="text-xl font-black text-white tracking-tight">{{ $t('pillarSupportImpulse') }}</h3>
              <ul class="space-y-3">
                <li v-for="(item, i) in supportNewKeys" :key="i" class="flex items-center gap-3 text-white font-bold text-sm">
                  <Icon icon="heroicons-outline:check-circle" class="text-teal-500 text-lg shrink-0" />{{ $t(item) }}
                </li>
              </ul>
            </div>
          </div>

          <div class="pt-8">
            <div class="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-none">{{ $t('pillarSupportBigStat') }}</div>
            <div class="text-lg font-bold text-[#7F39E9] uppercase tracking-[0.3em] mt-4">{{ $t('pillarSupportBigStatLabel') }}</div>
          </div>
        </div>

        <!-- SECTION 3: OMNI-CHANNEL -->
        <div v-reveal class="space-y-12">
          <div class="text-center space-y-6 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-[#7F39E9]">{{ $t('pillarSupportOmniLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarSupportOmniTitle') }}</h2>
            <p class="text-xl text-white/50 font-light leading-relaxed">{{ $t('pillarSupportOmniDesc') }}</p>
          </div>

          <!-- Hub Diagram -->
          <div class="relative h-[450px] w-full flex items-center justify-center overflow-hidden">
            <!-- Ambient Glow -->
            <div class="absolute w-64 h-64 rounded-full blur-[100px] opacity-20" style="background: linear-gradient(135deg, #a446f4, #4138f3)" />

            <!-- Central Brain -->
            <div class="relative z-20 w-44 h-44 rounded-full flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(127,57,233,0.4)] omni-brain-glow" style="background: linear-gradient(135deg, #a446f4, #4138f3)">
              <!-- Inner ring shimmer -->
              <div class="absolute inset-1 rounded-full border border-white/20" />
              <Icon icon="heroicons-outline:lightning-bolt" class="text-white text-5xl mb-2 drop-shadow-lg" />
              <div class="text-[10px] font-black uppercase tracking-[0.3em] text-white">Impulse AI</div>
              <div class="flex items-center gap-1.5 mt-1.5">
                <div class="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_#14b8a6]" />
                <span class="text-[8px] font-black uppercase tracking-widest text-white/80">Intent Router</span>
              </div>
            </div>

            <!-- Orbiting Rings -->
            <div class="absolute w-[280px] h-[280px] border border-[#7F39E9]/15 rounded-full border-dashed omni-ring-1" />
            <div class="absolute w-[380px] h-[380px] border border-[#7F39E9]/10 rounded-full border-dashed omni-ring-2" />

            <!-- Signal Pulses (brain to nodes) -->
            <div v-for="(ch, i) in supportChannels" :key="'pulse-'+i" class="absolute w-full h-full pointer-events-none">
              <div class="absolute top-1/2 left-1/2 w-2 h-2 rounded-full shadow-[0_0_10px_#7F39E9] omni-signal-pulse" style="background: linear-gradient(135deg, #a446f4, #4138f3)" :style="{ animationDelay: `${i * 0.6}s`, '--angle': `${(i * (360 / supportChannels.length)) - 90}deg` }" />
            </div>

            <!-- Channel Nodes -->
            <div v-for="(ch, i) in supportChannels" :key="i"
              class="absolute w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl text-[#7F39E9] hover:scale-110 hover:border-[#7F39E9]/50 transition-all cursor-default"
              :style="getOmniNodePos(i, supportChannels.length, 150)"
            >
              <Icon :icon="ch.icon" class="text-xl" />
            </div>
          </div>

          <!-- Channel Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div v-for="(ch, i) in supportChannels" :key="'grid-'+i" class="p-6 bg-white/5 border border-white/10 rounded-[2rem] space-y-4 text-center hover:border-[#7F39E9]/30 hover:bg-[#7F39E9]/5 transition-all">
              <div class="w-12 h-12 mx-auto rounded-xl bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                <Icon :icon="ch.icon" class="text-xl" />
              </div>
              <h4 class="text-sm font-black text-white uppercase tracking-wider">{{ $t(ch.titleKey) }}</h4>
              <p class="text-xs text-white/50 font-light leading-relaxed">{{ $t(ch.descKey) }}</p>
            </div>
          </div>
        </div>

        <!-- SECTION 4: CONTEXT ENGINEERING -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 bg-white/5 border border-white/10 rounded-[3rem] space-y-12">
          <div class="text-center space-y-4 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{{ $t('pillarSupportContextLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarSupportContextTitle') }}</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(ctx, i) in supportContextCards" :key="i" class="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4 hover:bg-white/10 transition-all">
              <div class="w-12 h-12 rounded-xl bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                <Icon :icon="ctx.icon" class="text-xl" />
              </div>
              <h4 class="text-lg font-black text-white tracking-tight">{{ $t(ctx.titleKey) }}</h4>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t(ctx.descKey) }}</p>
            </div>
          </div>
        </div>

        <!-- SECTION 5: PROACTIVE OUTREACH -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 rounded-[3rem] space-y-12" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <div class="text-center space-y-4 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">{{ $t('pillarSupportProactiveLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarSupportProactiveTitle') }}</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(trigger, i) in supportTriggers" :key="i" class="flex flex-col bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-sm">
              <div class="p-8 space-y-6 flex-1">
                <div class="inline-flex px-3 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest" :class="trigger.badgeClass">
                  {{ $t(trigger.badgeKey) }}
                </div>
                <div class="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Icon :icon="trigger.icon" class="text-2xl" :class="trigger.iconColor" />
                </div>
                <h4 class="text-2xl font-black text-white tracking-tighter">{{ $t(trigger.titleKey) }}</h4>
                <p class="text-base text-white/60 font-light leading-relaxed">{{ $t(trigger.descKey) }}</p>
              </div>
              <div class="p-6 bg-white/5 border-t border-white/10 text-center">
                <div class="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{{ $t(trigger.statKey) }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 6: HUMAN CO-PILOT MODE -->
        <div v-reveal class="space-y-10">
          <div class="text-center space-y-4">
            <div class="text-[12px] font-black text-[#7F39E9] uppercase tracking-[0.5em]">{{ $t('pillarSupportCopilotLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarSupportCopilotTitle') }}</h2>
            <p class="text-xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed">{{ $t('pillarSupportCopilotDesc') }}</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/[0.03] p-8 lg:p-14 rounded-[3rem] border border-white/10 relative overflow-hidden">
            <!-- Left: Live Chat -->
            <div class="space-y-6 relative z-10">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-3 h-3 rounded-full bg-rose-500" />
                <div class="text-[10px] font-black uppercase tracking-widest text-white/40">Live Session · ID: 8821-X</div>
              </div>
              <!-- Customer Message -->
              <div class="flex justify-end animate-fade-up" style="opacity: 0; animation-delay: 0.5s; animation-fill-mode: forwards">
                <div class="max-w-[80%] p-5 bg-white/10 rounded-2xl rounded-tr-none text-white font-medium text-sm">
                  {{ $t('pillarSupportCopilotCustomer') }}
                </div>
              </div>
              <!-- AI Suggestion -->
              <div class="flex justify-start animate-fade-up" style="opacity: 0; animation-delay: 1.5s; animation-fill-mode: forwards">
                <div class="max-w-[85%] p-5 bg-[#7F39E9]/10 border border-[#7F39E9]/20 rounded-2xl rounded-tl-none space-y-3">
                  <div class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#7F39E9]">
                    <Icon icon="heroicons-outline:lightning-bolt" class="text-xs" /> AI Suggestion
                  </div>
                  <p class="text-white font-medium text-sm leading-relaxed">{{ $t('pillarSupportCopilotAI') }}</p>
                  <div class="flex gap-2">
                    <button class="px-4 py-2 bg-[#7F39E9] rounded-lg text-[10px] font-black uppercase tracking-widest text-white">Use Response</button>
                    <button class="px-4 py-2 bg-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-white">Edit</button>
                  </div>
                </div>
              </div>
              <div class="text-[10px] font-black uppercase tracking-widest text-rose-500 animate-fade-up" style="opacity: 0; animation-delay: 2.5s; animation-fill-mode: forwards">🛡️ {{ $t('pillarSupportCopilotRescue') }}</div>
            </div>

            <!-- Right: Network Context Panel -->
            <div class="bg-white/5 border border-white/10 rounded-[2rem] p-8 space-y-8 relative z-10">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-black text-white tracking-tight">Network Context</h3>
                <div class="px-3 py-1 bg-teal-500/10 text-teal-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-teal-500/20">Sovereign AI</div>
              </div>
              <div class="space-y-4">
                <div v-for="(row, i) in supportCopilotData" :key="i" class="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
                  <span class="text-xs font-bold text-white/40 uppercase tracking-widest">{{ row.label }}</span>
                  <span class="text-sm font-black" :class="row.color">{{ row.value }}</span>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-3">
                <button class="w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-2" style="background: linear-gradient(135deg, #a446f4, #4138f3)">
                  <Icon icon="heroicons-outline:lightning-bolt" class="text-sm" /> Reboot Router
                </button>
                <button class="w-full py-3.5 bg-teal-500 rounded-xl text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-2">
                  <Icon icon="heroicons-outline:credit-card" class="text-sm" /> Apply SLA Credit
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 7: CLOSING CARD -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl mx-auto">{{ $t('pillarSupportCloseLine1') }}</h2>
          <h2 class="text-3xl md:text-5xl font-black tracking-tighter leading-tight max-w-4xl mx-auto" style="color: #7dd3fc">{{ $t('pillarSupportCloseLine2') }}</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
            <div v-for="(stat, i) in supportCloseStats" :key="i" class="text-center">
              <div class="text-3xl md:text-4xl font-black text-white tracking-tighter">{{ stat.val }}</div>
              <div class="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mt-2">{{ $t(stat.labelKey) }}</div>
            </div>
          </div>
          <div class="flex flex-col items-center gap-4 pt-4 max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row items-center gap-3 w-full">
              <input
                v-model="pillarEmail"
                type="email"
                :placeholder="$t('heroEmailPlaceholder')"
                class="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#7F39E9] transition-all text-white placeholder:text-white/30"
              />
              <button
                class="w-full sm:w-auto min-w-[200px] px-10 py-4 bg-white text-slate-900 text-xs font-black uppercase tracking-[0.3em] rounded-xl transition-all shadow-2xl whitespace-nowrap flex items-center justify-center gap-2 relative"
                :class="!isValidPillarEmail || sending ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-90'"
                :disabled="!isValidPillarEmail || sending"
                @click="submitRequest(pillarEmail)"
              >
                <svg v-if="sending" class="w-4 h-4 animate-spin absolute" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                <span :class="sending ? 'invisible' : ''">{{ $t('pillarRequestAccess') }}</span>
              </button>
            </div>
            <button
              class="text-white/40 hover:text-white font-bold border-b border-white/20 hover:border-white pb-1 transition-all text-sm"
              @click="$emit('back')"
            >
              {{ $t('pillarBack') }}
            </button>
          </div>
        </div>

      </div>

      <!-- BILLING PILLAR -->
      <div v-if="pillarId === 'billing'" class="space-y-24">

        <!-- SECTION 1: HERO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-px" style="background: linear-gradient(90deg, #a446f4, #4138f3)" />
              <span class="text-[12px] font-black uppercase tracking-[0.5em] text-[#7F39E9]">Revenue & Growth</span>
            </div>
            <h1 class="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight md:leading-[0.85] tracking-tighter">Billing<br />AI.</h1>
            <h2 class="text-2xl md:text-3xl font-bold text-white/70 tracking-tight leading-tight max-w-md">{{ $t('pillarBillingHeroSubtitle') }}</h2>
            <p class="text-xl text-white/50 font-light max-w-xl leading-relaxed">{{ $t('pillarBillingHero') }}</p>
            <PillarBadges />
          </div>
          <div class="relative aspect-square flex items-center justify-center">
            <BillingVisual />
          </div>
        </div>

        <!-- SECTION 2: THE BILLING GAP -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 bg-white/[0.03] border border-white/10 rounded-[3rem] text-center space-y-12">
          <div class="space-y-6 max-w-4xl mx-auto">
            <div class="text-[12px] font-black text-[#7F39E9] uppercase tracking-[0.5em]">{{ $t('pillarBillingGapLabel') }}</div>
            <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
              {{ $t('pillarBillingGapTitle') }}
            </h2>
            <p class="text-xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto">{{ $t('pillarBillingGapDesc') }}</p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-6">
            <div v-for="(stat, i) in billingStatPills" :key="i" class="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-sm font-black uppercase tracking-widest shadow-sm">
              {{ stat }}
            </div>
          </div>
        </div>

        <!-- SECTION 3: CORE BILLING ENGINE -->
        <div v-reveal class="space-y-12 text-center">
          <div class="space-y-6 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{{ $t('pillarBillingCoreLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarBillingCoreTitle') }}</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(cap, i) in billingCaps" :key="i" class="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-5 hover:bg-white/10 transition-all text-left">
              <div class="w-14 h-14 rounded-2xl bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                <Icon :icon="cap.icon" class="text-2xl" />
              </div>
              <h3 class="text-xl font-black text-white tracking-tight">{{ $t(cap.titleKey) }}</h3>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t(cap.descKey) }}</p>
            </div>
          </div>
        </div>

        <!-- SECTION 4: PRICING INTELLIGENCE -->
        <div v-reveal class="space-y-12 text-center">
          <div class="space-y-6 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{{ $t('pillarBillingPricingLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarBillingPricingTitle') }}</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div v-for="(card, i) in billingPricingCards" :key="i" class="p-8 rounded-[2rem] space-y-4 text-left transition-all bg-white/5 border border-white/10 hover:bg-white/10" :class="card.accent ? 'border-[#7F39E9]/30' : ''">
              <div class="w-12 h-12 rounded-xl bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                <Icon :icon="card.icon" class="text-xl" />
              </div>
              <h4 class="text-xl font-black tracking-tight text-white">{{ $t(card.titleKey) }}</h4>
              <p class="text-sm font-light leading-relaxed text-white/50">{{ $t(card.descKey) }}</p>
            </div>
          </div>
        </div>

        <!-- SECTION 5: IN-HOUSE ACCOUNTING -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 rounded-[3rem] space-y-12" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Left -->
            <div class="space-y-8">
              <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">{{ $t('pillarBillingAcctLabel') }}</div>
              <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">{{ $t('pillarBillingAcctTitle') }}</h2>
              <p class="text-lg text-white/70 font-light leading-relaxed max-w-xl">{{ $t('pillarBillingAcctDesc') }}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div v-for="(feat, i) in billingAcctFeats" :key="i" class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                    <Icon :icon="feat.icon" class="text-sm" />
                  </div>
                  <span class="text-sm font-bold text-white">{{ $t(feat.titleKey) }}</span>
                </div>
              </div>
            </div>
            <!-- Right: Mock Income Statement -->
            <div class="bg-white/10 border border-white/10 rounded-[1.5rem] overflow-hidden backdrop-blur-sm">
              <div class="flex items-center gap-2 px-5 py-3 border-b border-white/10">
                <div class="w-3 h-3 rounded-full bg-rose-400/80" />
                <div class="w-3 h-3 rounded-full bg-amber-400/80" />
                <div class="w-3 h-3 rounded-full bg-teal-400/80" />
                <div class="ml-4 text-[10px] font-black text-white/40 uppercase tracking-widest">{{ $t('pillarBillingAcctMockTitle') }}</div>
              </div>
              <div class="p-6 space-y-4 text-sm font-mono">
                <div class="flex justify-between text-white/80">
                  <span>{{ $t('pillarBillingAcctRevenue') }}</span><span class="font-bold text-teal-300">$284,500</span>
                </div>
                <div class="flex justify-between text-white/60">
                  <span>{{ $t('pillarBillingAcctCOGS') }}</span><span>($112,300)</span>
                </div>
                <div class="border-t border-white/10 pt-3 flex justify-between text-white/80">
                  <span class="font-bold">{{ $t('pillarBillingAcctGross') }}</span><span class="font-bold text-teal-300">$172,200</span>
                </div>
                <div class="flex justify-between text-white/60">
                  <span>{{ $t('pillarBillingAcctOpex') }}</span><span>($68,400)</span>
                </div>
                <div class="border-t border-white/10 pt-3 flex justify-between text-white">
                  <span class="font-black">{{ $t('pillarBillingAcctNet') }}</span><span class="font-black text-teal-300">$103,800</span>
                </div>
                <div class="flex items-center gap-3 pt-4 mt-2 border-t border-white/10">
                  <button v-for="ext in ['CSV', 'Excel', 'PDF']" :key="ext" class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black text-white/40 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all flex items-center gap-2">
                    <Icon icon="heroicons-outline:download" class="text-xs" /> {{ ext }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 6: DIGITAL CONTRACTS & SELF-SERVICE -->
        <div v-reveal class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Left: Digital Contracts -->
          <div class="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-8">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                  <Icon icon="heroicons-outline:document-duplicate" class="text-xl" />
                </div>
                <span class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50">{{ $t('pillarBillingContractsLabel') }}</span>
              </div>
              <h3 class="text-2xl md:text-3xl font-black text-white tracking-tighter">{{ $t('pillarBillingContractsTitle') }}</h3>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t('pillarBillingContractsDesc') }}</p>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <div v-for="(step, i) in billingContractSteps" :key="i" class="flex items-center gap-3">
                <div class="px-5 py-2.5 rounded-full text-sm font-black uppercase tracking-wider" :class="step.active ? 'bg-[#7F39E9] text-white' : 'bg-white/5 border border-white/10 text-white/70'">
                  {{ $t(step.labelKey) }}
                </div>
                <Icon v-if="i < billingContractSteps.length - 1" icon="heroicons-outline:chevron-right" class="text-white/30 text-base" />
              </div>
            </div>
          </div>
          <!-- Right: Impulse Pay -->
          <div class="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-8">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                  <Icon icon="heroicons-outline:device-mobile" class="text-xl" />
                </div>
                <span class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50">{{ $t('pillarBillingPayLabel') }}</span>
              </div>
              <h3 class="text-2xl md:text-3xl font-black text-white tracking-tighter">{{ $t('pillarBillingPayTitle') }}</h3>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t('pillarBillingPayDesc') }}</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <span v-for="(feat, i) in billingPayFeats" :key="i" class="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs font-bold text-white/70">
                {{ $t(feat) }}
              </span>
            </div>
          </div>
        </div>

        <!-- SECTION 7: CLOSING CARD -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl mx-auto">{{ $t('pillarBillingCloseTitle') }}</h2>
          <div class="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto pt-4">
            <span v-for="(stat, i) in billingCloseStats" :key="i" class="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em]">
              {{ stat }}
            </span>
          </div>
          <div class="flex flex-col items-center gap-4 pt-4 max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row items-center gap-3 w-full">
              <input
                v-model="pillarEmail"
                type="email"
                :placeholder="$t('heroEmailPlaceholder')"
                class="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-white placeholder:text-white/40"
              />
              <button
                class="w-full sm:w-auto min-w-[200px] px-10 py-4 bg-white text-slate-900 text-xs font-black uppercase tracking-[0.3em] rounded-xl transition-all shadow-2xl whitespace-nowrap flex items-center justify-center gap-2 relative"
                :class="!isValidPillarEmail || sending ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-90'"
                :disabled="!isValidPillarEmail || sending"
                @click="submitRequest(pillarEmail)"
              >
                <svg v-if="sending" class="w-4 h-4 animate-spin absolute" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                <span :class="sending ? 'invisible' : ''">{{ $t('pillarRequestAccess') }}</span>
              </button>
            </div>
            <button
              class="text-white/40 hover:text-white font-bold border-b border-white/20 hover:border-white pb-1 transition-all text-sm"
              @click="$emit('back')"
            >
              {{ $t('pillarBack') }}
            </button>
          </div>
        </div>

      </div>

      <!-- ADVISORY PILLAR -->
      <div v-if="pillarId === 'advisory'" class="space-y-24">

        <!-- SECTION 1: HERO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-px" style="background: linear-gradient(90deg, #a446f4, #4138f3)" />
              <span class="text-[12px] font-black uppercase tracking-[0.5em] text-[#7F39E9]">{{ $t('pillarAdvisoryLabel') }}</span>
            </div>
            <h1 class="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight md:leading-[0.85] tracking-tighter">Impulse<br />Advisory.</h1>
            <h2 class="text-2xl md:text-3xl font-bold text-white/70 tracking-tight leading-tight max-w-md">{{ $t('pillarAdvisoryHeroSubtitle') }}</h2>
            <p class="text-xl text-white/50 font-light max-w-xl leading-relaxed">{{ $t('pillarAdvisoryHero') }}</p>
            <PillarBadges />
          </div>
          <div class="relative aspect-square flex items-center justify-center">
            <AdvisoryVisual />
          </div>
        </div>

        <!-- SECTION 2: THE PROBLEM -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] text-center space-y-10" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/70">{{ $t('pillarAdvisoryProblemLabel') }}</div>
          <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none max-w-4xl mx-auto">
            {{ $t('pillarAdvisoryProblem') }}
          </h2>
          <p class="text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">{{ $t('pillarAdvisoryProblemDesc') }}</p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <div v-for="(pill, i) in advisoryStatPills" :key="i" class="px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white text-sm font-black uppercase tracking-widest">
              {{ pill }}
            </div>
          </div>
        </div>

        <!-- SECTION 3: THE FLYWHEEL -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 bg-white/5 border border-white/10 rounded-[3rem] space-y-12">
          <div class="text-center space-y-6 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{{ $t('pillarAdvisoryFlywheelLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarAdvisoryFlywheelTitle') }}</h2>
            <p class="text-xl text-white/50 font-light leading-relaxed">{{ $t('pillarAdvisoryFlywheelDesc') }}</p>
          </div>
          <div class="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <!-- Connecting line (desktop only) -->
            <div class="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10 z-0" />
            <div v-for="(step, i) in advisorySteps" :key="i" class="relative z-10 text-center space-y-4">
              <div class="w-16 h-16 mx-auto rounded-2xl text-white flex items-center justify-center shadow-xl" style="background: linear-gradient(135deg, #a446f4, #4138f3)">
                <Icon :icon="step.icon" class="text-2xl" />
              </div>
              <div class="text-[10px] font-black text-[#7F39E9] uppercase tracking-widest">{{ $t('pillarAdvisoryStepLabel') }} 0{{ i + 1 }}</div>
              <h4 class="text-lg font-black text-white tracking-tight">{{ $t(step.titleKey) }}</h4>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t(step.descKey) }}</p>
            </div>
          </div>
        </div>

        <!-- SECTION 4: SERVICE OFFERINGS -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] space-y-12" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <div class="text-center space-y-4 max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">{{ $t('pillarAdvisoryServicesTitle') }}</h2>
          </div>
          <!-- First row: 3 cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              v-for="(svc, i) in advisoryServices.slice(0, 3)"
              :key="i"
              class="p-8 rounded-[2rem] space-y-5 transition-all"
              :class="svc.highlighted ? 'bg-white/10 border-2 border-amber-400/30' : 'bg-white/5 border border-white/10'"
            >
              <div v-if="svc.highlighted" class="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-[0.2em] inline-block">{{ $t('pillarAdvisoryMostPopular') }}</div>
              <div class="w-12 h-12 rounded-xl flex items-center justify-center" :class="svc.highlighted ? 'bg-[#7F39E9]/10 text-[#7F39E9]' : 'bg-white/10 border border-white/20 text-white'">
                <Icon :icon="svc.icon" class="text-xl" />
              </div>
              <h4 class="text-xl font-black tracking-tight" :class="svc.highlighted ? 'text-white' : 'text-white'">{{ $t(svc.titleKey) }}</h4>
              <p class="text-sm font-light leading-relaxed" :class="svc.highlighted ? 'text-white/50' : 'text-white/60'">{{ $t(svc.descKey) }}</p>
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest" :class="svc.highlighted ? 'bg-white/5 text-white/70' : 'bg-white/10 text-white/80'">{{ svc.price }}</span>
                <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest" :class="svc.highlighted ? 'bg-white/5 text-white/70' : 'bg-white/10 text-white/80'">{{ svc.timeline }}</span>
              </div>
            </div>
          </div>
          <!-- Second row: 2 cards centered -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div
              v-for="(svc, i) in advisoryServices.slice(3, 5)"
              :key="i + 3"
              class="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-5 transition-all"
            >
              <div class="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Icon :icon="svc.icon" class="text-xl" />
              </div>
              <h4 class="text-xl font-black text-white tracking-tight">{{ $t(svc.titleKey) }}</h4>
              <p class="text-sm text-white/60 font-light leading-relaxed">{{ $t(svc.descKey) }}</p>
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <span class="px-3 py-1 rounded-full bg-white/10 text-white/80 text-[10px] font-black uppercase tracking-widest">{{ svc.price }}</span>
                <span class="px-3 py-1 rounded-full bg-white/10 text-white/80 text-[10px] font-black uppercase tracking-widest">{{ svc.timeline }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 5: ENTRY POINT CTA -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] text-center space-y-8 border-2 border-amber-500/50" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); box-shadow: 0 0 50px rgba(245,158,11,0.1)">
          <div class="text-[10px] font-black uppercase tracking-[0.4em] text-amber-300">{{ $t('pillarAdvisoryCtaLabel') }}</div>
          <h2 class="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-3xl mx-auto">
            {{ $t('pillarAdvisoryCtaTitle') }}
          </h2>
          <p class="text-lg text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
            {{ $t('pillarAdvisoryCtaDesc') }}
          </p>
          <p class="text-xl text-amber-300 italic font-light max-w-xl mx-auto">"{{ $t('pillarAdvisoryCtaQuote') }}"</p>
          <div class="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto w-full">
            <input
              v-model="pillarEmail"
              type="email"
              :placeholder="$t('heroEmailPlaceholder')"
              class="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-white placeholder:text-white/40"
            />
            <button
              class="w-full sm:w-auto min-w-[200px] px-10 py-4 bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-[0.3em] rounded-xl transition-all shadow-2xl whitespace-nowrap flex items-center justify-center gap-2 relative"
              :class="!isValidPillarEmail || sending ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-90'"
              :disabled="!isValidPillarEmail || sending"
              @click="submitRequest(pillarEmail)"
            >
              <svg v-if="sending" class="w-4 h-4 animate-spin absolute" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              <span :class="sending ? 'invisible' : ''">{{ $t('pillarAdvisoryCtaButton') }}</span>
            </button>
          </div>
        </div>

        <!-- SECTION 6: CLOSING CARD -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl mx-auto">{{ $t('pillarAdvisoryCloseLine1') }}</h2>
          <h2 class="text-3xl md:text-5xl font-black text-white/70 tracking-tighter leading-tight max-w-4xl mx-auto">{{ $t('pillarAdvisoryCloseLine2') }}</h2>
          <p class="text-lg text-white/50 font-light leading-relaxed max-w-2xl mx-auto">{{ $t('pillarAdvisoryCloseDesc') }}</p>
          <div class="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto pt-4">
            <span v-for="(stat, i) in advisoryCloseStats" :key="i" class="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em]">
              {{ stat }}
            </span>
          </div>
          <div class="flex flex-col items-center gap-4 pt-4 max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row items-center gap-3 w-full">
              <input
                v-model="pillarEmail"
                type="email"
                :placeholder="$t('heroEmailPlaceholder')"
                class="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-white placeholder:text-white/40"
              />
              <button
                class="w-full sm:w-auto min-w-[200px] px-10 py-4 bg-white text-slate-900 text-xs font-black uppercase tracking-[0.3em] rounded-xl transition-all shadow-2xl whitespace-nowrap flex items-center justify-center gap-2 relative"
                :class="!isValidPillarEmail || sending ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-90'"
                :disabled="!isValidPillarEmail || sending"
                @click="submitRequest(pillarEmail)"
              >
                <svg v-if="sending" class="w-4 h-4 animate-spin absolute" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                <span :class="sending ? 'invisible' : ''">{{ $t('pillarAdvisorySchedule') }}</span>
              </button>
            </div>
            <button
              class="text-white/40 hover:text-white font-bold border-b border-white/20 hover:border-white pb-1 transition-all text-sm"
              @click="$emit('back')"
            >
              {{ $t('pillarBack') }}
            </button>
          </div>
        </div>

      </div>
    </div>

    <ToastNotification
      :visible="toast.visible"
      :type="toast.type"
      :title="toast.title"
      :message="toast.message"
      @close="toast.visible = false"
    />
  </section>
</template>

<script>
import Icon from "@/components/Icon"
import PillarBadges from "@/components/pillar/PillarBadges.vue"
import PillarCTA from "@/components/pillar/PillarCTA.vue"
import OrbitalVisual from "@/components/pillar/OrbitalVisual.vue"
import CrmVisual from "@/components/pillar/CrmVisual.vue"
import SupportVisual from "@/components/pillar/SupportVisual.vue"
import BillingVisual from "@/components/pillar/BillingVisual.vue"
import AdvisoryVisual from "@/components/pillar/AdvisoryVisual.vue"
import CapabilityCard from "@/components/pillar/CapabilityCard.vue"
import StoryLaneEmbed from "@/components/StoryLaneEmbed.vue"
import ToastNotification from "@/components/ToastNotification.vue"
import reveal from "@/directives/reveal"

const pillarNames = { network: 'Network', crm: 'CRM', support: 'Support', billing: 'Billing', advisory: 'Advisory' }

export default {
  directives: { reveal },
  components: { Icon, PillarBadges, PillarCTA, OrbitalVisual, CrmVisual, SupportVisual, BillingVisual, AdvisoryVisual, CapabilityCard, StoryLaneEmbed, ToastNotification },
  props: {
    pillarId: { type: String, required: true }
  },
  emits: ['back', 'navigate'],
  data() {
    return {
      pillarEmail: '',
      sending: false,
      toast: { visible: false, type: 'success', title: '', message: '' },
      networkCaps: [
        { title: 'pillarNetworkCap1', icon: 'heroicons-outline:shield-check' },
        { title: 'pillarNetworkCap2', icon: 'heroicons-outline:currency-dollar' },
        { title: 'pillarNetworkCap3', icon: 'heroicons-outline:lightning-bolt' }
      ],
      networkProcessSteps: [
        { label: 'EDGE', icon: 'heroicons-outline:server', descKey: 'pillarNetworkStepEdge' },
        { label: 'INGEST', icon: 'heroicons-outline:database', descKey: 'pillarNetworkStepIngest' },
        { label: 'ANALYZE', icon: 'heroicons-outline:chart-bar', descKey: 'pillarNetworkStepAnalyze' },
        { label: 'ACTION', icon: 'heroicons-outline:lightning-bolt', descKey: 'pillarNetworkStepAction' }
      ],
      networkSovereignFeats: [
        { icon: 'heroicons-outline:globe-alt', titleKey: 'pillarNetworkSovFeat1', descKey: 'pillarNetworkSovFeat1Desc' },
        { icon: 'heroicons-outline:lock-closed', titleKey: 'pillarNetworkSovFeat2', descKey: 'pillarNetworkSovFeat2Desc' },
        { icon: 'heroicons-outline:cube', titleKey: 'pillarNetworkSovFeat3', descKey: 'pillarNetworkSovFeat3Desc' },
        { icon: 'heroicons-outline:shield-check', titleKey: 'pillarNetworkSovFeat4', descKey: 'pillarNetworkSovFeat4Desc' }
      ],
      networkVendors: ['Cisco', 'Juniper', 'Nokia', 'Huawei', 'ZTE', 'Ubiquiti', 'MikroTik', 'Calix'],
      crmAgents: [
        { icon: 'heroicons-outline:chip', nameKey: 'pillarCrmAgentTech', descKey: 'pillarCrmAgentTechDesc' },
        { icon: 'heroicons-outline:currency-dollar', nameKey: 'pillarCrmAgentBilling', descKey: 'pillarCrmAgentBillingDesc' },
        { icon: 'heroicons-outline:shield-exclamation', nameKey: 'pillarCrmAgentChurn', descKey: 'pillarCrmAgentChurnDesc' }
      ],
      crmGrowCaps: [
        { icon: 'heroicons-outline:trending-up', titleKey: 'pillarCrmGrowCap1', descKey: 'pillarCrmGrowCap1Desc' },
        { icon: 'heroicons-outline:phone-outgoing', titleKey: 'pillarCrmGrowCap2', descKey: 'pillarCrmGrowCap2Desc' },
        { icon: 'heroicons-outline:chart-bar', titleKey: 'pillarCrmGrowCap3', descKey: 'pillarCrmGrowCap3Desc' }
      ],
      crmCaps: [
        { icon: 'heroicons-outline:search', titleKey: 'pillarCrmCap1', descKey: 'pillarCrmCap1Desc' },
        { icon: 'heroicons-outline:trending-down', titleKey: 'pillarCrmCap2', descKey: 'pillarCrmCap2Desc' },
        { icon: 'heroicons-outline:shield-exclamation', titleKey: 'pillarCrmCap3', descKey: 'pillarCrmCap3Desc' }
      ],
      crmStats: [
        { val: '15–40%', label: 'Churn Reduction' },
        { val: '50%+', label: 'First-Call Resolution' },
        { val: '2–4 Weeks', label: 'Early Warning Lead Time' }
      ],
      supportOldKeys: [
        'pillarSupportOld1', 'pillarSupportOld2', 'pillarSupportOld3', 'pillarSupportOld4', 'pillarSupportOld5'
      ],
      supportNewKeys: [
        'pillarSupportNew1', 'pillarSupportNew2', 'pillarSupportNew3', 'pillarSupportNew4', 'pillarSupportNew5'
      ],
      supportChannels: [
        { icon: 'heroicons-outline:chat-alt-2', titleKey: 'pillarSupportChWeb', descKey: 'pillarSupportChWebDesc' },
        { icon: 'heroicons-outline:device-mobile', titleKey: 'pillarSupportChWhatsApp', descKey: 'pillarSupportChWhatsAppDesc' },
        { icon: 'heroicons-outline:phone', titleKey: 'pillarSupportChVoice', descKey: 'pillarSupportChVoiceDesc' },
        { icon: 'heroicons-outline:mail', titleKey: 'pillarSupportChEmail', descKey: 'pillarSupportChEmailDesc' },
        { icon: 'heroicons-outline:chat', titleKey: 'pillarSupportChSms', descKey: 'pillarSupportChSmsDesc' }
      ],
      supportContextCards: [
        { icon: 'heroicons-outline:wifi', titleKey: 'pillarSupportCtxRouter', descKey: 'pillarSupportCtxRouterDesc' },
        { icon: 'heroicons-outline:trending-down', titleKey: 'pillarSupportCtxChurn', descKey: 'pillarSupportCtxChurnDesc' },
        { icon: 'heroicons-outline:document-text', titleKey: 'pillarSupportCtxPlan', descKey: 'pillarSupportCtxPlanDesc' },
        { icon: 'heroicons-outline:clock', titleKey: 'pillarSupportCtxHistory', descKey: 'pillarSupportCtxHistoryDesc' }
      ],
      supportTriggers: [
        { icon: 'heroicons-outline:exclamation', iconColor: 'text-amber-400', titleKey: 'pillarSupportTrigDeg', descKey: 'pillarSupportTrigDegDesc', badgeKey: 'pillarSupportTrigDegBadge', badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/30', statKey: 'pillarSupportTrigDegStat' },
        { icon: 'heroicons-outline:speakerphone', iconColor: 'text-rose-400', titleKey: 'pillarSupportTrigOutage', descKey: 'pillarSupportTrigOutageDesc', badgeKey: 'pillarSupportTrigOutageBadge', badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/30', statKey: 'pillarSupportTrigOutageStat' },
        { icon: 'heroicons-outline:shield-exclamation', iconColor: 'text-purple-300', titleKey: 'pillarSupportTrigChurn', descKey: 'pillarSupportTrigChurnDesc', badgeKey: 'pillarSupportTrigChurnBadge', badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/30', statKey: 'pillarSupportTrigChurnStat' }
      ],
      supportCopilotData: [
        { label: 'Device', value: 'ZTE F670L', color: 'text-white' },
        { label: 'Status', value: '● Online', color: 'text-teal-500' },
        { label: 'Outages (30d)', value: '3 incidents', color: 'text-rose-500' },
        { label: 'Churn Risk', value: '82 / 100', color: 'text-rose-500' },
        { label: 'Tenure', value: '14 months', color: 'text-white' },
        { label: 'CLV', value: '$756/yr', color: 'text-white' }
      ],
      supportCloseStats: [
        { val: '82%', labelKey: 'pillarSupportStatResolution' },
        { val: '5', labelKey: 'pillarSupportStatAgents' },
        { val: '5', labelKey: 'pillarSupportStatChannels' },
        { val: '<90s', labelKey: 'pillarSupportStatTime' }
      ],
      billingStatPills: ['150+ API Endpoints', '27 Billing Modules', 'Real-Time OCS Charging'],
      billingCaps: [
        { icon: 'heroicons-outline:refresh', titleKey: 'pillarBillingCap1', descKey: 'pillarBillingCap1Desc' },
        { icon: 'heroicons-outline:document-text', titleKey: 'pillarBillingCap2', descKey: 'pillarBillingCap2Desc' },
        { icon: 'heroicons-outline:credit-card', titleKey: 'pillarBillingCap3', descKey: 'pillarBillingCap3Desc' },
        { icon: 'heroicons-outline:shield-exclamation', titleKey: 'pillarBillingCap4', descKey: 'pillarBillingCap4Desc' }
      ],
      billingPricingCards: [
        { icon: 'heroicons-outline:view-grid', titleKey: 'pillarBillingPricing1', descKey: 'pillarBillingPricing1Desc', accent: false },
        { icon: 'heroicons-outline:lightning-bolt', titleKey: 'pillarBillingPricing2', descKey: 'pillarBillingPricing2Desc', accent: true },
        { icon: 'heroicons-outline:calculator', titleKey: 'pillarBillingPricing3', descKey: 'pillarBillingPricing3Desc', accent: false }
      ],
      billingAcctFeats: [
        { icon: 'heroicons-outline:collection', titleKey: 'pillarBillingAcctFeat1' },
        { icon: 'heroicons-outline:book-open', titleKey: 'pillarBillingAcctFeat2' },
        { icon: 'heroicons-outline:document-report', titleKey: 'pillarBillingAcctFeat3' },
        { icon: 'heroicons-outline:receipt-tax', titleKey: 'pillarBillingAcctFeat4' },
        { icon: 'heroicons-outline:cash', titleKey: 'pillarBillingAcctFeat5' },
        { icon: 'heroicons-outline:currency-dollar', titleKey: 'pillarBillingAcctFeat6' }
      ],
      billingContractSteps: [
        { labelKey: 'pillarBillingStepDraft', active: false },
        { labelKey: 'pillarBillingStepSent', active: false },
        { labelKey: 'pillarBillingStepSigned', active: true },
        { labelKey: 'pillarBillingStepActivated', active: false }
      ],
      billingPayFeats: [
        'pillarBillingPayFeat1', 'pillarBillingPayFeat2', 'pillarBillingPayFeat3',
        'pillarBillingPayFeat4', 'pillarBillingPayFeat5', 'pillarBillingPayFeat6'
      ],
      billingCloseStats: ['150+ API Endpoints', '39 UI Views', 'Real-Time OCS', 'Full Double-Entry Accounting', 'Digital Contracts'],
      advisorySteps: [
        { icon: 'heroicons-outline:search', titleKey: 'pillarAdvisoryStep1', descKey: 'pillarAdvisoryStep1Desc' },
        { icon: 'heroicons-outline:document-text', titleKey: 'pillarAdvisoryStep2', descKey: 'pillarAdvisoryStep2Desc' },
        { icon: 'heroicons-outline:cog', titleKey: 'pillarAdvisoryStep3', descKey: 'pillarAdvisoryStep3Desc' },
        { icon: 'heroicons-outline:trending-up', titleKey: 'pillarAdvisoryStep4', descKey: 'pillarAdvisoryStep4Desc' }
      ],
      advisoryStatPills: ['3-7% Monthly Revenue Recovery', '30-Day Audit', 'No Platform Commitment Required'],
      advisoryServices: [
        { icon: 'heroicons-outline:search-circle', titleKey: 'pillarAdvisorySvc1', descKey: 'pillarAdvisorySvc1Desc', price: '$5,000–$15,000', timeline: '30–60 Days', highlighted: true },
        { icon: 'heroicons-outline:clipboard-check', titleKey: 'pillarAdvisorySvc2', descKey: 'pillarAdvisorySvc2Desc', price: '$5,000–$10,000', timeline: '2–3 Weeks', highlighted: false },
        { icon: 'heroicons-outline:light-bulb', titleKey: 'pillarAdvisorySvc3', descKey: 'pillarAdvisorySvc3Desc', price: '$15,000–$35,000', timeline: '60–90 Days', highlighted: false },
        { icon: 'heroicons-outline:chart-bar', titleKey: 'pillarAdvisorySvc4', descKey: 'pillarAdvisorySvc4Desc', price: '$5,000–$20,000/mo', timeline: 'Ongoing', highlighted: false },
        { icon: 'heroicons-outline:support', titleKey: 'pillarAdvisorySvc5', descKey: 'pillarAdvisorySvc5Desc', price: '$10,000–$25,000', timeline: '30–45 Days', highlighted: false }
      ],
      advisoryCloseStats: ['5 Engagement Types', '30-Day Entry Point', 'Performance-Based Options Available'],
      demoRunning: false,
      demoStep: 0,
      demoTimer: null,
      demoSteps: [
        { label: 'Detecting Packet Loss', status: 'Analysis', icon: 'heroicons-outline:chart-bar', log: '> analyzing_optical_levels...' },
        { label: 'Remote TR-069 Handshake', status: 'Connecting', icon: 'heroicons-outline:refresh', log: '> tr069_diagnostics_running...' },
        { label: 'Router Reboot Initiated', status: 'Execution', icon: 'heroicons-outline:lightning-bolt', log: '> triggering_remote_reboot...' },
        { label: 'Signal Stabilized', status: 'Verified', icon: 'heroicons-outline:check-circle', log: '> signal_restored [82s]' },
        { label: 'Ticket Closed Autonomously', status: 'Complete', icon: 'heroicons-outline:shield-check', log: '> resolution_successful' }
      ]
    }
  },
  beforeUnmount() {
    if (this.demoTimer) clearInterval(this.demoTimer)
  },
  computed: {
    isValidPillarEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.pillarEmail)
    }
  },
  methods: {
    getOmniNodePos(i, total, radius) {
      const angle = (i * (360 / total)) - 90
      const x = Math.cos((angle * Math.PI) / 180) * radius
      const y = Math.sin((angle * Math.PI) / 180) * radius
      return { transform: `translate(${x}px, ${y}px)` }
    },
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
      const pillar = pillarNames[this.pillarId] || this.pillarId
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
    startDemo() {
      if (this.demoRunning) return
      this.demoRunning = true
      this.demoStep = 0
      this.demoTimer = setInterval(() => {
        if (this.demoStep < this.demoSteps.length - 1) {
          this.demoStep++
        } else {
          clearInterval(this.demoTimer)
          setTimeout(() => {
            this.demoRunning = false
            this.demoStep = 0
          }, 2500)
        }
      }, 2000)
    }
  }
}
</script>

<style scoped>
.animate-spin-very-slow {
  animation: spin 10s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.crm-demo-pulse {
  animation: crmPulse 3s ease-in-out infinite;
}
.crm-demo-pulse-delayed {
  animation: crmPulse 3s ease-in-out infinite 1.5s;
}
@keyframes crmPulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.15); opacity: 0.1; }
}
.crm-demo-blink {
  animation: crmBlink 2s ease-in-out infinite;
}
@keyframes crmBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.process-pulse {
  animation: processPulse 2s linear infinite;
}
@keyframes processPulse {
  0% { left: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { left: 100%; opacity: 0; }
}
.omni-brain-glow {
  animation: omniBrainGlow 4s ease-in-out infinite;
}
@keyframes omniBrainGlow {
  0%, 100% { box-shadow: 0 0 40px rgba(127,57,233,0.3); }
  50% { box-shadow: 0 0 80px rgba(127,57,233,0.6), 0 0 120px rgba(127,57,233,0.2); }
}
.omni-ring-1 { animation: spin 25s linear infinite; }
.omni-ring-2 { animation: spin 35s linear infinite reverse; }
.omni-signal-pulse {
  position: absolute;
  animation: omniSignal 3s ease-in-out infinite;
}
@keyframes omniSignal {
  0% { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(170px); opacity: 0; }
}
.eco-node-pulse {
  animation: ecoNodePulse 3s ease-in-out infinite;
}
@keyframes ecoNodePulse {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
}
@keyframes aboutSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.sov-ring-outer { animation: aboutSpin 40s linear infinite; }
.sov-ring-inner { animation: aboutSpin 25s linear infinite reverse; }
.sov-particle { animation: sovParticlePulse 2s ease-in-out infinite; }
@keyframes sovParticlePulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
.sov-core-glow { animation: sovGlow 4s ease-in-out infinite; }
@keyframes sovGlow { 0%, 100% { box-shadow: 0 0 40px rgba(127,57,233,0.2); } 50% { box-shadow: 0 0 80px rgba(127,57,233,0.4); } }
.sov-scan { animation: sovScan 5s ease-in-out infinite; }
@keyframes sovScan { 0%, 100% { opacity: 0; transform: scale(0.8); } 50% { opacity: 0.2; transform: scale(1.2); } }
.noise-dot { animation: noisePulse ease-in-out infinite; }
@keyframes noisePulse { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.2); } }
</style>
