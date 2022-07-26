<script>
export default {
    props: ['mail'],
    setup(props) {
        console.log(props.title)
    }
}
</script>
<template>
    <footer>
        <div class="social">
            <div class="mail"><a :href="`mailto:${mail}`" clickable>Mail</a></div>
            <div class="linkedIn"><a href="https://www.linkedin.com/in/david-vidovic/">LinkedIn</a></div>
        </div>
    </footer>
</template>

<style scoped>

footer {
    z-index: 9;
}
.social {
    position: fixed;
    bottom: 10px;
    display: flex;
    gap: 10px;
    font-size: 1.2rem;
    background: var(--color-background);
    padding: 0px 10px;
    right: 5px;
}
</style>
