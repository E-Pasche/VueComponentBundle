<script setup>

const date = new Date();
</script>

<template>
    <footer class="fixed-bottom text-center text-lg-start text-white-50 bg-dark">
        <div class="text-center p-3">
            © {{ date.getFullYear() }} Copyright: Test
        </div>
    </footer>
</template>