<script setup>
import { addIcons } from 'oh-vue-icons';
import { PrArrowUpRight } from 'oh-vue-icons/icons';
import useHeaderIntersect from './../hooks/header-intersects'
import { onMounted, ref } from 'vue';

const sectionElement = ref(null)

onMounted(() => {
    useHeaderIntersect('about', sectionElement, { rootMargin: '0px 0px 0px -200px'})
})

addIcons(PrArrowUpRight)
</script>

<template>
    <div class="content-wrapper" ref="sectionElement">
        <div class="content">
            <div>

            </div>
            <h1 class="title">About Me</h1>
            <p v-motion-slide-visible-once-right>
                It all started way back in 2016 when I discovered how much fun and exciting programming is. 
                From creating my very first JavaScript decision-making app, and here I am now, providing the best quality products for the people I'm working for.
            </p>
            <p v-motion-slide-visible-once-left>
                Throughout my career, I have developed a reputation for <i>strategic thinking</i>, <i>attention to detail</i>, and a <i>commitment to excellence</i>. 
                By leveraging my expertise in web development, I have consistently exceeded expectations and achieved tangible outcomes. 
                I approach each endeavor with enthusiasm and a drive to innovate, ensuring that I am continuously pushing the boundaries of what is possible.
            </p>
            <p v-motion-slide-visible-once-right>
                I've worked with different types of projects like <span>Information System</span>, <span>E-Commerce Widgets</span>,
                <span>CMS Applications</span>, and <span>Customer-Facing Websites</span>.
            </p>
            <p v-motion-slide-visible-once-left>
                Aside from my passion with coding, I also do like writing poems. Take a visit at my 
                <a href="https://poetizer.com/author/45921" target="_blank">
                    Poetizer
                    <v-icon name="pr-arrow-up-right" />
                </a> profile.
            </p>
        </div>
    </div>
</template>
