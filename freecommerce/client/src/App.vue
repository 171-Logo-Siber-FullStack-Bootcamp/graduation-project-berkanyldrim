<template>
  <TopBar></TopBar>
  <NavbarSection></NavbarSection>
  <MainBody></MainBody>
  <BottomFooter></BottomFooter>

  
  
</template>

<script>
import TopBar from './components/TopBar.vue'
import NavbarSection from './components/Navbar.vue'
import MainBody from './components/MainBody.vue'
import BottomFooter from './components/BottomFooter.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    NavbarSection,
    MainBody,
    BottomFooter
    

  }
}
</script>

