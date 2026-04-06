const observers = new WeakMap()

export default {
  mounted(el, binding) {
    const animClass = binding.value || 'animate-fade-up'
    const delay = binding.arg ? `${binding.arg}ms` : null

    el.style.opacity = '0'
    if (delay) {
      el.style.animationDelay = delay
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animClass)
            entry.target.style.opacity = '1'
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '20px', threshold: 0.15 }
    )

    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    const observer = observers.get(el)
    if (observer) {
      observer.unobserve(el)
      observers.delete(el)
    }
  }
}
