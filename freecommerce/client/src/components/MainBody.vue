<template>
    <MainSlider></MainSlider>
    <MainContent></MainContent>
    <MainSubscribe></MainSubscribe>
</template>
<script>
import MainSlider from './mainComponents/mainSlider.vue';
import MainContent from './mainComponents/mainContent.vue'
import MainSubscribe from './mainComponents/mainSubscribe.vue'

export default 
{  
    name: 'MainBody',
    components: {
    MainSlider,
    MainContent,
    MainSubscribe
}
}
</script>