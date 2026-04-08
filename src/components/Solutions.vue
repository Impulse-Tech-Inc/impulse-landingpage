<template>
  <section ref="containerRef" class="relative transition-colors duration-500 sol-container" style="background: #030305; background-image: radial-gradient(circle at 50% 0%, #1a1a2e 0%, #030305 100%)">

    <!-- Anchor IDs for navigation -->
    <div id="network" class="absolute top-0 w-full h-[20%] pointer-events-none" />
    <div id="crm" class="absolute top-[20%] w-full h-[20%] pointer-events-none" />
    <div id="support" class="absolute top-[40%] w-full h-[20%] pointer-events-none" />
    <div id="billing" class="absolute top-[60%] w-full h-[20%] pointer-events-none" />
    <div id="advisory" class="absolute top-[80%] w-full h-[20%] pointer-events-none" />

    <div class="sticky top-0 h-screen w-full flex items-center overflow-hidden">
      <!-- Premium Background (same as hero) -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a1a2e_0%,#030305_100%)]" />
        <div class="absolute top-[-15%] left-1/2 -translate-x-1/2 w-full max-w-[1600px] aspect-square">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(127,57,233,0.08)_0%,transparent_70%)] sol-glow" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="relative w-[90%] h-[90%]">
              <div class="absolute inset-0 border border-white/[0.03] rounded-full sol-ring-slow" />
              <div class="absolute inset-[15%] border border-white/[0.05] rounded-full border-dashed sol-ring-mid" />
              <div class="absolute inset-[30%] border-2 border-[#7F39E9]/20 rounded-full sol-ring-fast" style="box-shadow: 0 0 30px rgba(127,57,233,0.1)" />
              <div v-for="n in 6" :key="'sol-node-'+n" class="absolute inset-0 sol-orbit" :style="{ animationDuration: `${20 + n * 5}s` }">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#7F39E9] rounded-full sol-node-pulse" :style="{ transform: `translateY(${15 + n * 5}%)`, animationDelay: `${n * 0.5}s`, boxShadow: '0 0 15px #7F39E9' }" />
              </div>
            </div>
          </div>
        </div>
        <div v-for="n in 3" :key="'sol-beam-'+n" class="absolute h-px bg-gradient-to-r from-transparent via-[#7F39E9]/30 to-transparent blur-[1px] z-10 sol-beam" :style="{ left: `${20 + (n - 1) * 30}%`, width: '40%', animationDuration: `${3 + n}s`, animationDelay: `${n}s` }" />
        <div class="absolute bottom-0 left-0 right-0 h-1/2 opacity-[0.03]" style="background-image: linear-gradient(to right, #7F39E9 1px, transparent 1px), linear-gradient(to bottom, #7F39E9 1px, transparent 1px); background-size: 120px 120px; transform: perspective(1000px) rotateX(75deg) scale(2.5); mask-image: linear-gradient(to top, black, transparent); -webkit-mask-image: linear-gradient(to top, black, transparent)" />
      </div>

      <!-- Progress Sidebar (left edge) -->
      <div class="hidden lg:flex absolute left-0 top-0 bottom-0 w-2 z-40">
        <div class="w-full h-full bg-white/5 relative">
          <div
            class="absolute top-0 left-0 w-full transition-all duration-200"
            :style="{
              height: `${progress * 100}%`,
              background: 'linear-gradient(180deg, #a446f4, #4138f3)'
            }"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="max-w-[1600px] mx-auto w-full px-5 md:px-12 lg:px-24 relative">
        <transition name="pillar-fade" mode="out-in">
          <div
            :key="activeIndex"
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <!-- LEFT: NARRATIVE -->
            <div class="space-y-8 md:space-y-12">
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-px" style="background: linear-gradient(90deg, #a446f4, #4138f3)" />
                  <span class="text-[12px] font-black uppercase tracking-[0.5em] text-[#7F39E9]">
                    {{ $t('solutionsPillar') }} 0{{ activeIndex + 1 }}
                  </span>
                </div>
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter">
                  {{ currentPillar.name }}
                </h2>
                <p class="text-lg md:text-xl font-medium text-white/40 tracking-tight max-w-lg">
                  {{ $t(currentPillar.titleKey) }}
                </p>
              </div>

              <div class="max-w-xl space-y-10">
                <p class="text-base md:text-lg text-white/60 leading-relaxed font-medium">
                  {{ $t(currentPillar.descKey) }}
                </p>

                <div class="flex flex-col gap-6">
                  <button
                    class="group flex items-center gap-4 self-start px-6 py-3.5 rounded-full text-white text-xs font-bold uppercase tracking-[0.15em] transition-all hover:opacity-90 shadow-lg"
                    style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)"
                    @click="$emit('explore', currentPillar.id)"
                  >
                    {{ $t('solutionsExplore') }}
                    <svg class="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </button>
                </div>

                <div class="flex flex-wrap gap-x-10 gap-y-8 pt-4">
                  <div v-for="(s, si) in currentPillar.stats" :key="si" class="space-y-2 min-w-[100px]">
                    <div class="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">{{ $t(s.labelKey) }}</div>
                    <div class="text-base font-bold text-white tracking-tight">{{ s.value }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- RIGHT: VISUALS (hidden on mobile) -->
            <div class="relative aspect-square hidden lg:flex items-center justify-center">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,57,233,0.08)_0%,transparent_70%)]" />

              <div class="relative z-10 w-full h-full flex items-center justify-center">

                <!-- VISUAL 1: Network Intelligence -->
                <div v-if="activeIndex === 0" class="grid grid-cols-1 gap-4 w-full max-w-lg relative animate-scale-in">
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#7F39E9]/10 blur-[80px] animate-pulse rounded-full" />

                  <div class="bg-slate-950 border border-white/10 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between h-auto min-h-[200px]">
                    <div class="flex justify-between items-start">
                      <div class="text-[10px] font-black text-[#7F39E9] uppercase tracking-widest">Telemetrics Telemetry</div>
                      <Icon icon="heroicons-outline:chart-bar" class="text-[#7F39E9] opacity-50 text-lg" />
                    </div>
                    <div class="flex-1 flex items-end gap-1 px-2 pt-6">
                      <div
                        v-for="(bar, i) in 12"
                        :key="i"
                        class="flex-1 bg-[#7F39E9]/20 rounded-t-sm animate-bar"
                        :style="{ animationDelay: `${i * 0.1}s`, height: `${20 + Math.random() * 60}%` }"
                      />
                    </div>
                    <div class="mt-3 text-[10px] font-bold text-white/40 uppercase">CORE_UPTIME: 99.999%</div>
                  </div>

                  <div class="bg-slate-950 border border-white/10 rounded-[1.5rem] p-5 shadow-2xl relative overflow-hidden h-auto min-h-[200px] flex flex-col">
                    <div class="flex justify-between items-start mb-4">
                      <div class="text-[10px] font-black text-teal-500 uppercase tracking-widest">Multi-Vendor Ecosystem</div>
                      <Icon icon="heroicons-outline:view-grid" class="text-teal-500 opacity-50 text-lg" />
                    </div>
                    <div class="flex-1 grid grid-cols-3 gap-2">
                      <div
                        v-for="(vendor, vidx) in ['Cisco', 'TP-Link', 'Calix', 'Huawei', 'ZTE', 'VSOL', 'Nokia', 'Ubiquiti']"
                        :key="vendor"
                        class="flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-tighter text-white/90 animate-fade-up"
                        :style="{ animationDelay: `${0.3 + vidx * 0.05}s` }"
                      >
                        {{ vendor }}
                      </div>
                      <div class="flex items-center justify-center p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-[8px] font-black uppercase tracking-widest text-teal-500 animate-fade-up" style="animation-delay: 0.8s">
                        + More
                      </div>
                    </div>
                    <div class="mt-3 p-2 bg-white/[0.02] rounded-lg border border-white/5 flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="flex -space-x-1">
                          <div v-for="i in 4" :key="i" class="w-4 h-4 rounded-full border border-white bg-[#7F39E9]/10 flex items-center justify-center shadow-sm">
                            <div class="w-0.5 h-0.5 rounded-full bg-[#7F39E9]/40" />
                          </div>
                        </div>
                        <div class="text-[8px] font-black text-white uppercase tracking-wider">Unified Device Management</div>
                      </div>
                      <div class="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-teal-500/5 border border-teal-500/10">
                        <div class="w-1 h-1 rounded-full bg-teal-500 animate-pulse" />
                        <span class="text-[6px] font-black text-teal-500 uppercase tracking-widest">Live</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- VISUAL 2: Agentic CRM -->
                <div v-if="activeIndex === 1" class="grid grid-cols-1 gap-4 w-full max-w-lg relative animate-scale-in">
                  <div class="bg-slate-950 border-2 border-[#7F39E9]/50 rounded-[2rem] p-5 shadow-[0_20px_50px_rgba(127,57,233,0.2)] relative overflow-hidden flex flex-col h-auto min-h-[200px] z-20">
                    <div class="flex justify-between items-start mb-3">
                      <div class="text-[10px] font-black text-[#7F39E9] uppercase tracking-widest">Agentic CRM</div>
                      <Icon icon="heroicons-outline:user-circle" class="text-[#7F39E9] text-lg" />
                    </div>
                    <div class="flex-1 space-y-2">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                          <div class="w-7 h-7 rounded-full flex items-center justify-center text-[7px] text-white font-black" style="background: linear-gradient(135deg, #a446f4, #4138f3)">JD</div>
                          <div>
                            <div class="text-[9px] font-bold text-white">Jane Doe</div>
                            <div class="text-[7px] font-black text-white/30 uppercase tracking-tighter">Acc: #8804-X</div>
                          </div>
                        </div>
                        <div class="px-1.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-[6px] font-black text-teal-500 uppercase">Platinum 5G</div>
                      </div>
                      <div class="p-2.5 bg-white/5 rounded-xl border border-white/5 space-y-1.5">
                        <div class="flex justify-between text-[7px] font-black text-white/20 uppercase tracking-widest">Data Usage <span class="text-white">420GB / 1TB</span></div>
                        <div class="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div class="h-full bg-[#7F39E9] animate-width-42" />
                        </div>
                        <div class="flex justify-between text-[6px] font-bold text-white/40">Signal Strength <span class="text-teal-500">-62 dBm</span></div>
                      </div>
                      <div class="grid grid-cols-2 gap-2">
                        <button class="px-2 py-1.5 rounded-lg bg-white text-black text-[7px] font-black uppercase tracking-widest shadow-lg">New Ticket</button>
                        <button class="px-2 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white text-[7px] font-black uppercase tracking-widest">Upgrade</button>
                      </div>
                    </div>
                  </div>

                  <div class="bg-slate-950 border border-white/10 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden h-auto min-h-[160px]">
                    <div class="flex justify-between items-start mb-4">
                      <div class="text-[10px] font-black text-orange-500 uppercase tracking-widest">Growth Engine</div>
                      <Icon icon="heroicons-outline:trending-up" class="text-orange-500 opacity-50 text-lg" />
                    </div>
                    <div class="text-2xl font-black text-white tracking-tighter">+$1.4M</div>
                    <div class="text-[9px] font-bold text-orange-500 uppercase mb-3">ARPU_LIFT: +12.4%</div>
                    <div class="flex items-end gap-1.5 h-10">
                      <div
                        v-for="(h, i) in [30, 60, 45, 90, 100]"
                        :key="i"
                        class="flex-1 bg-orange-500/20 border-t-2 border-orange-500 animate-grow"
                        :style="{ height: `${h}%`, animationDelay: `${0.5 + i * 0.1}s` }"
                      />
                    </div>
                  </div>
                </div>

                <!-- VISUAL 3: Support AI -->
                <div v-if="activeIndex === 2" class="w-full max-w-md space-y-4 animate-scale-in">
                  <div class="flex gap-3 items-end animate-slide-left">
                    <div class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/20">
                      <Icon icon="heroicons-outline:user" class="text-sm" />
                    </div>
                    <div class="px-5 py-3 rounded-[1.5rem] rounded-bl-sm bg-white/5 border border-white/10 text-xs text-white max-w-[80%] shadow-xl">
                      "Help, my Fiber line seems unstable today."
                    </div>
                  </div>
                  <div class="flex flex-row-reverse gap-3 items-end animate-slide-right" style="animation-delay: 1s">
                    <div class="w-8 h-8 rounded-full shadow-lg flex items-center justify-center text-white" style="background: linear-gradient(135deg, #a446f4, #4138f3)">
                      <Icon icon="heroicons-outline:lightning-bolt" class="text-sm" />
                    </div>
                    <div class="space-y-3 max-w-[85%]">
                      <div class="px-5 py-3 rounded-[1.5rem] rounded-br-sm bg-[#7F39E9]/5 border border-[#7F39E9]/10 text-xs text-[#7F39E9] font-medium">
                        Accessing Network Layer... Detected dBm fluctuation. Initiating hardware reset.
                      </div>
                      <div class="bg-slate-950 border border-white/10 rounded-2xl p-5 shadow-2xl animate-fade-up" style="animation-delay: 2s">
                        <div class="flex items-center justify-between mb-3">
                          <div class="flex items-center gap-2">
                            <Icon icon="heroicons-outline:terminal" class="text-[#7F39E9] text-sm" />
                            <span class="text-[9px] font-mono text-slate-400 uppercase tracking-tighter">Remote_Action_Queue</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                          <Icon icon="heroicons-outline:refresh" class="text-[#7F39E9] text-lg animate-spin-slow" />
                          <div class="text-[10px] font-bold text-slate-900 tracking-tight">ONT_RESET_SIGNAL_BROADCAST</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-teal-500 p-1 border border-black/5 rounded-[2rem] shadow-2xl relative overflow-hidden animate-fade-up" style="animation-delay: 3.5s">
                    <div class="bg-white rounded-[1.9rem] p-8 flex flex-col items-center gap-4">
                      <Icon icon="heroicons-outline:check-circle" class="text-teal-500 text-5xl" />
                      <div class="text-center space-y-1">
                        <div class="text-3xl font-black text-slate-900 tracking-tighter">RESOLVED</div>
                        <div class="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">Signal Stable | Ticket #8042 Closed</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- VISUAL 4: Billing -->
                <div v-if="activeIndex === 3" class="relative w-full max-w-xl h-full flex flex-col justify-center gap-6 py-8 px-4 animate-scale-in">
                  <div class="flex justify-center gap-8">
                    <div
                      v-for="(s, idx) in billingServices"
                      :key="idx"
                      class="flex flex-col items-center gap-2 animate-fade-up"
                      :style="{ animationDelay: `${idx * 0.1}s` }"
                    >
                      <div
                        class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden shadow-xl"
                        :style="{ color: s.color }"
                      >
                        <Icon :icon="s.icon" class="text-lg" />
                      </div>
                      <div class="text-center">
                        <div class="text-[8px] font-black text-white/30 uppercase tracking-widest">{{ $t(s.labelKey) }}</div>
                        <div class="text-[10px] font-black text-white">{{ s.value }}</div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-slate-950/80 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-6 flex flex-col items-end">
                      <div class="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">Live Session Rating</div>
                      <div class="flex items-center gap-2 px-2.5 py-1 bg-teal-500/5 rounded-full border border-teal-500/10 shadow-sm">
                        <div class="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                        <span class="text-[9px] font-black text-teal-500 uppercase">OCS Active</span>
                      </div>
                    </div>
                    <div class="space-y-8">
                      <div>
                        <div class="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-3">Subscriber_Account: #TR-9004</div>
                        <div class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">$142.<span class="animate-blink">85</span></div>
                        <div class="text-[9px] font-bold text-white/40 uppercase mt-3 flex items-center gap-2">
                          <Icon icon="heroicons-outline:globe-alt" class="text-sm" /> Unified Gateway: ACH / VISA / Mobile
                        </div>
                      </div>
                      <div class="space-y-2">
                        <div class="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                          <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                              <Icon icon="heroicons-outline:lightning-bolt" class="text-base" />
                            </div>
                            <div>
                              <div class="text-[9px] font-black text-orange-500 uppercase">Auto SLA Credit</div>
                              <div class="text-[10px] font-bold text-white">Outage Detected: 2h 14m</div>
                            </div>
                          </div>
                          <div class="text-base font-black text-teal-500">+$12.40</div>
                        </div>
                        <div class="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                          <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-lg bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                              <Icon icon="heroicons-outline:chart-bar" class="text-base" />
                            </div>
                            <div>
                              <div class="text-[9px] font-black text-white/40 uppercase tracking-widest">Dunning Sequence</div>
                              <div class="text-[10px] font-bold text-white">Reminder Sent</div>
                            </div>
                          </div>
                          <div class="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div class="w-full h-full bg-orange-500 animate-slide-bar" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- VISUAL 5: Advisory -->
                <div v-if="activeIndex === 4" class="relative w-full h-full flex items-center justify-center px-4 py-8 animate-scale-in">
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,57,233,0.1),transparent_70%)]" />

                  <div class="relative z-10 w-full max-w-md bg-slate-900 border border-white/10 rounded-[3rem] p-8 shadow-2xl overflow-hidden">
                    <div class="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,rgba(127,57,233,0.5)_0%,transparent_70%)]" />
                    <div class="absolute inset-0 border border-[#7F39E9]/10 rounded-full border-dashed m-6 animate-spin-very-slow" />

                    <div class="relative z-10 space-y-8">
                      <div class="flex justify-between items-start">
                        <div class="space-y-1">
                          <div class="text-[8px] font-black text-[#a446f4] uppercase tracking-[0.4em]">Strategic Command</div>
                          <h3 class="text-xl md:text-2xl font-black text-white tracking-tighter">Operational KPI Ownership</h3>
                        </div>
                        <div class="p-3 rounded-xl bg-[#7F39E9]/10 border border-[#7F39E9]/20 text-[#a446f4] shadow-lg">
                          <Icon icon="heroicons-outline:map" class="text-2xl" />
                        </div>
                      </div>

                      <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-white/5 border border-white/5 rounded-2xl space-y-3">
                          <div class="flex justify-between items-center">
                            <span class="text-[7px] font-black text-white/40 uppercase tracking-widest">Strategic Outcome</span>
                            <Icon icon="heroicons-outline:trending-up" class="text-teal-400 text-sm" />
                          </div>
                          <div class="text-xl font-black text-white tracking-tighter uppercase">Proven ROI</div>
                          <div class="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div class="h-full bg-teal-400 animate-progress-85" />
                          </div>
                        </div>
                        <div class="p-4 bg-white/5 border border-white/5 rounded-2xl space-y-3">
                          <div class="flex justify-between items-center">
                            <span class="text-[7px] font-black text-white/40 uppercase tracking-widest">Churn Target</span>
                            <Icon icon="heroicons-outline:cursor-click" class="text-teal-400 text-sm" />
                          </div>
                          <div class="text-xl font-black text-white tracking-tighter">-24%</div>
                          <div class="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div class="h-full bg-teal-400 animate-progress-72" />
                          </div>
                        </div>
                      </div>

                      <div class="p-6 bg-black/40 border border-white/5 rounded-[2rem] space-y-4 relative overflow-hidden">
                        <div class="flex justify-between items-center">
                          <div class="flex items-center gap-2">
                            <div class="w-1.5 h-1.5 rounded-full bg-[#7F39E9] animate-pulse" />
                            <span class="text-[8px] font-black text-white/60 uppercase tracking-widest">Network Audit</span>
                          </div>
                          <span class="text-[8px] font-mono text-[#a446f4]">PHASE_04</span>
                        </div>
                        <div class="flex items-end gap-1 h-12">
                          <div
                            v-for="(h, i) in [60, 40, 85, 30, 95, 50, 70, 45, 80, 55, 90, 65]"
                            :key="i"
                            class="flex-1 bg-[#7F39E9]/20 border-t border-[#7F39E9]/50 rounded-t-sm animate-bar-reverse"
                            :style="{ height: `${h}%`, animationDelay: `${i * 0.05}s` }"
                          />
                        </div>
                        <div class="flex justify-between items-center text-[7px] font-black text-white/30 uppercase tracking-widest">
                          <span>Silo Detection: Active</span>
                          <span>Latency: 14ms</span>
                        </div>
                      </div>

                      <div class="flex justify-center">
                        <button class="px-8 py-4 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                          Request Strategic Audit
                          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                        </button>
                      </div>
                    </div>

                    <div class="absolute top-0 right-0 p-8 opacity-10">
                      <Icon icon="heroicons-outline:map" class="text-white text-7xl" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </transition>
      </div>

    </div>

    <!-- Bottom Navigation (fixed via Teleport, visible only when section is in view) -->
    <Teleport to="body">
      <Transition name="sol-nav">
        <div v-show="isInView" class="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-[998]">
          <div class="flex items-center gap-3 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-10 py-3 md:py-4 bg-black/70 rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-2xl">
            <button
              v-for="(p, idx) in pillars"
              :key="p.id"
              class="group flex flex-col items-center gap-3 transition-all duration-500"
              :class="activeIndex === idx ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70'"
              @click="scrollToPillar(idx)"
            >
              <div
                class="text-[7px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.3em] transition-colors duration-500 whitespace-nowrap"
                :class="activeIndex === idx ? 'text-[#7F39E9]' : 'text-white/40'"
              >
                {{ p.name }}
              </div>
              <div
                class="w-2.5 h-2.5 rounded-full transition-all duration-500"
                :class="activeIndex === idx ? 'scale-150' : 'bg-white/10'"
                :style="activeIndex === idx ? { background: 'linear-gradient(135deg, #a446f4, #4138f3)', boxShadow: '0 0 15px rgba(127,57,233,0.8)' } : {}"
              />
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: { Icon },
  emits: ['explore'],
  data() {
    return {
      activeIndex: 0,
      progress: 0,
      isInView: false,
      pillars: [
        {
          id: 'network',
          name: 'Network',
          titleKey: 'solNetworkTitle',
          descKey: 'solNetworkDesc',
          stats: [
            { labelKey: 'solStatSignals', value: '20M+ / sec' },
            { labelKey: 'solStatVendors', value: '35+' }
          ]
        },
        {
          id: 'crm',
          name: 'Agentic CRM',
          titleKey: 'solCrmTitle',
          descKey: 'solCrmDesc',
          stats: [
            { labelKey: 'solStatChurn', value: '40%' },
            { labelKey: 'solStatAI', value: '85%' },
            { labelKey: 'solStatARPU', value: '+$12.40' }
          ]
        },
        {
          id: 'support',
          name: 'Support',
          titleKey: 'solSupportTitle',
          descKey: 'solSupportDesc',
          stats: [
            { labelKey: 'solStatChannels', value: 'Voice / Web / App' },
            { labelKey: 'solStatAutonomous', value: '82%' },
            { labelKey: 'solStatSLA', value: '< 120s' }
          ]
        },
        {
          id: 'billing',
          name: 'Billing',
          titleKey: 'solBillingTitle',
          descKey: 'solBillingDesc',
          stats: [
            { labelKey: 'solStatMethods', value: 'ACH / Cards / Mobile' },
            { labelKey: 'solStatRating', value: 'Usage-Based CDR' },
            { labelKey: 'solStatCurrency', value: 'Multi-Region' }
          ]
        },
        {
          id: 'advisory',
          name: 'Advisory',
          titleKey: 'solAdvisoryTitle',
          descKey: 'solAdvisoryDesc',
          stats: [
            { labelKey: 'solStatEngagement', value: 'Standalone Revenue' },
            { labelKey: 'solStatAudit', value: '14-Day Sprint' },
            { labelKey: 'solStatRetainer', value: '$5k/mo' }
          ]
        }
      ],
      billingServices: [
        { icon: 'heroicons-outline:phone', label: 'Voice OCS', color: '#7c3aed', value: '12.4m' },
        { icon: 'heroicons-outline:wifi', label: 'Fiber Meter', color: '#4138f3', value: '420GB' },
        { icon: 'heroicons-outline:desktop-computer', label: 'IPTV Sub', color: '#14b8a6', value: 'Active' }
      ]
    };
  },
  computed: {
    currentPillar() {
      return this.pillars[this.activeIndex] || this.pillars[0];
    }
  },
  mounted() {
    this._ticking = false;
    this._onScroll = () => {
      if (!this._ticking) {
        this._ticking = true;
        requestAnimationFrame(() => {
          this.handleScroll();
          this._ticking = false;
        });
      }
    };
    window.addEventListener('scroll', this._onScroll, { passive: true });
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this._onScroll);
  },
  methods: {
    handleScroll() {
      const container = this.$refs.containerRef;
      if (!container) return;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPos = window.scrollY;
      const start = containerTop;
      const end = containerTop + containerHeight - windowHeight;
      const range = end - start;
      if (range <= 0) return;
      this.isInView = scrollPos >= containerTop && scrollPos <= end;
      let currentProgress = (scrollPos - start) / range;
      currentProgress = Math.max(0, Math.min(1, currentProgress));
      this.progress = currentProgress;
      const targetIndex = Math.min(Math.floor(currentProgress * this.pillars.length), this.pillars.length - 1);
      if (!isNaN(targetIndex) && targetIndex >= 0 && targetIndex !== this.activeIndex) {
        this.activeIndex += targetIndex > this.activeIndex ? 1 : -1;
      }
    },
    scrollToPillar(index) {
      const container = this.$refs.containerRef;
      if (container) {
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        const range = containerHeight - windowHeight;
        const sectionSize = range / this.pillars.length;
        const targetY = containerTop + (index * sectionSize) + (sectionSize * 0.3);
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    },
    scrollToPillarById(pillarId) {
      const index = this.pillars.findIndex(p => p.id === pillarId);
      if (index >= 0) {
        this.scrollToPillar(index);
      }
    }
  }
};
</script>

<style scoped>
/* Background animations */
.sol-glow { animation: solGlow 10s ease-in-out infinite; }
@keyframes solGlow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.1); } }
.sol-ring-slow { animation: solSpin 80s linear infinite; }
.sol-ring-mid { animation: solSpin 60s linear infinite reverse; }
.sol-ring-fast { animation: solSpinFast 40s linear infinite; }
@keyframes solSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes solSpinFast { 0% { transform: rotate(0deg); opacity: 0.05; } 50% { transform: rotate(180deg); opacity: 0.15; } 100% { transform: rotate(360deg); opacity: 0.05; } }
.sol-orbit { animation: solSpin linear infinite; }
.sol-node-pulse { animation: solNodePulse 3s ease-in-out infinite; }
@keyframes solNodePulse { 0%, 100% { transform: scale(1); opacity: 0.2; } 50% { transform: scale(1.5); opacity: 0.5; } }
.sol-beam { animation: solBeam ease-in-out infinite; }
@keyframes solBeam { 0% { top: -10%; opacity: 0; } 30% { opacity: 0.4; } 70% { opacity: 0.4; } 100% { top: 110%; opacity: 0; } }

.sol-nav-enter-active,
.sol-nav-leave-active {
  transition: all 0.3s ease;
}
.sol-nav-enter-from,
.sol-nav-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}

.pillar-fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.pillar-fade-leave-active {
  transition: opacity 0.15s ease-in;
}
.pillar-fade-enter-from {
  opacity: 0;
}
.pillar-fade-leave-to {
  opacity: 0;
}

.animate-scale-in {
  animation: scaleIn 0.8s cubic-bezier(0.19, 1, 0.22, 1) both;
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fade-up {
  animation: fadeUp 0.6s ease-out both;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-left {
  animation: slideLeft 0.6s ease-out both;
}
@keyframes slideLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-slide-right {
  animation: slideRight 0.6s ease-out both;
}
@keyframes slideRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-bar {
  animation: barPulse 1.5s ease-in-out infinite alternate;
}
@keyframes barPulse {
  from { transform: scaleY(0.5); }
  to { transform: scaleY(1); }
}

.animate-bar-reverse {
  animation: barReverse 2s ease-in-out infinite alternate;
}
@keyframes barReverse {
  from { transform: scaleY(1); }
  to { transform: scaleY(0.4); }
}

.animate-width-42 {
  animation: width42 1s ease-out both;
}
@keyframes width42 {
  from { width: 0; }
  to { width: 42%; }
}

.animate-grow {
  animation: grow 0.6s ease-out both;
}
@keyframes grow {
  from { height: 0; }
}

.animate-blink {
  animation: blink 0.1s infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.animate-slide-bar {
  animation: slideBar 2s linear infinite;
}
@keyframes slideBar {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}

.animate-spin-slow {
  animation: spin 2s linear infinite;
}

.animate-spin-very-slow {
  animation: spin 10s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-progress-85 {
  animation: progress85 2s ease-out both infinite;
}
@keyframes progress85 {
  0% { width: 0; }
  50%, 100% { width: 85%; }
}

.animate-progress-72 {
  animation: progress72 2s ease-out both infinite;
  animation-delay: 0.5s;
}
@keyframes progress72 {
  0% { width: 0; }
  50%, 100% { width: 72%; }
}

/* Sticky scroll container */
.sol-container {
  height: 400vh;
}
@media (min-width: 1024px) {
  .sol-container {
    height: 450vh;
  }
}
</style>
