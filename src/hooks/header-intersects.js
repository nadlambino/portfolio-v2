import { useIntersectionObserver } from "@vueuse/core";
import { ref, watch } from "vue";

export default function (key, target, options = {}) {
    const headerElement = document.getElementById('header');
    const isVisible = ref(false)
    
    useIntersectionObserver(
        target,
        ([{ isIntersecting }]) => {
            isVisible.value = isIntersecting
        },
        {
            ...options
        }
    );
    
    watch(isVisible, () => {
        if (isVisible.value === true) {
            const targetBgColor = getComputedStyle(target.value).backgroundColor
            headerElement.style.backgroundColor = targetBgColor
        }
    })

    return {
        isVisible
    }
}