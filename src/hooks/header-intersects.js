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
            rootMargin: '0px 0px 0px -300px',
            ...options,
        }
    );
    
    watch(isVisible, () => {
        console.log(key, isVisible.value)
        const className = target.value.getAttribute('data-order');
        const headerElement = document.getElementById('header');
        if (isVisible.value === true) {
            headerElement.classList.remove('even')
            headerElement.classList.remove('odd')
            headerElement.classList.toggle(className)
        }
    })

    return {
        isVisible
    }
}