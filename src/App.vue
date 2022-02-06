<script setup lang="ts">

import { useStore } from './store/useStore'

const store = useStore()

const languages = [
  { text: '简体', value: 'zh-CN' },
  { text: '英文', value: 'en-UK' },
]
</script>

<template>
  <el-header>
    <nav>
      <ol>
        <li>
          <router-link to="/">Index</router-link>
        </li>
        <li>
          <router-link to="/profile">ProFIle</router-link>
        </li>
      </ol>
    </nav>

    <aside>
      <el-select v-model="$i18n.locale">
        <el-option v-for="language in languages"
                   v-text="language.text"
                   :value="language.value"
                   :key="`${language.value}${language.text}`"
        />
      </el-select>
    </aside>
  </el-header>
  <router-view />

  <el-main>
    <h1>Global State Test:{{ store.msg }}</h1>
    <h2>International language Test:{{ $t('message.msg') }}</h2>
  </el-main>

  <el-footer>

  </el-footer>
</template>

<style>

</style>