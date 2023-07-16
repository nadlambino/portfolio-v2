import { ref, watch } from "vue";

export default function(element, initialState = false, selector = '', options = {}) {
    const isVisible = ref(initialState)

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            isVisible.value = entry.isIntersecting
        });
    }, options);

    const observe = (element) => {
        if (element instanceof Element) {
            observer.observe(element)
        }
    }

    watch(element, () => {
        if (element.value) {
            if (element.value instanceof Element) {
                observe(element.value)
            } else {
                const el = document.querySelector(selector)
                observe(el)
            }
        }
    })

    return {
        isVisible
    }
}