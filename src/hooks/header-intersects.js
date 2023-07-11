import { useIntersectionObserver } from "@vueuse/core";
import { ref, watch } from "vue";

export default function (key, target, options = {}) {
    const isVisible = ref(false)
    
    useIntersectionObserver(
        target,
        ([{ isIntersecting }]) => {
            isVisible.value = isIntersecting
        },
        {
            rootMargin: '0px 0px 0px 0px',
            ...options,
        }
    );
    
    watch(isVisible, () => {
        const className = target.value.getAttribute('data-order');
        const headerElement = document.getElementById('header');
        if (isVisible.value === true) {
            headerElement.classList.toggle(className)
        } else {
            headerElement.classList.remove(className)
        }
    })

    return {
        isVisible
    }
}