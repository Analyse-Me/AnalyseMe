<template>
  <div class="custom-select" :key="key" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      <img :src="require('@/assets/icons/flags/' + selected + '.png')" />
      {{ selected.toUpperCase() }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        class="item"
        v-for="(option, i) of filterOptions"
        :key="i"
        @click="
          ;(selected = option),
            (open = false),
            $emit('input', option),
            changeLanguage(option)
        "
      >
        <img :src="require('@/assets/icons/flags/' + option + '.png')" />
        {{ option.toUpperCase() }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    options: { type: Array, required: true },
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      filterOptions: this.options,
      open: false,
      key: 0,
    }
  },
  mounted() {
    if (localStorage.getItem('language') == null) localStorage.language = 'en'
    const selectedlocale = localStorage.language
    const selected = this.options[
      this.options.findIndex((locale) => locale == selectedlocale.slice(0, 2))
    ] as string
    this.selected = selected

    this.changeLanguage(selected)
    this.$emit('input', this.selected)
  },
  methods: {
    changeLanguage(lang: string) {
      this.$i18n.locale = lang
      localStorage.setItem('language', lang)
      const filter = this.options.filter(
        (option) => option != this.$i18n.locale
      )
      if (filter) this.filterOptions = filter
      this.$forceUpdate
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.custom-select {
  position: relative;
  width: 105px;
  text-align: left;
  outline: none;
  height: 37px;
  line-height: 37px;
  font-weight: 500;
  margin: 0 10px;
  z-index: 1;
}

.selected {
  background-color: $main;
  border-radius: 6px;
  padding-left: 8px;
  color: #e3e3e3;
  cursor: pointer;
  user-select: none;
  display: flex;
}

.selected.open {
  border-bottom: none;
  border-radius: 6px 6px 0px 0px;
}

.selected:after {
  position: absolute;
  content: '';
  top: 22px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-color: #e3e3e3 transparent transparent transparent;
}

.items {
  color: #e3e3e3;
  border-radius: 0px 6px 6px 6px;
  overflow: hidden;
  border-right: 1px solid $main;
  border-left: 1px solid $main;
  border-bottom: 1px solid $main;
  position: absolute;
  background-color: #314147;
  left: 0;
  right: 0;
  width: 220px;
  max-height: 180px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.item {
  color: #e3e3e3;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all;
  display: flex;
  flex-grow: 1;
  min-width: 100px;
}

.item:hover {
  background-color: $main;
}

.selectHide {
  display: none;
}

img {
  height: 37px;
  padding: 3px;
  margin-right: 5px;
}
</style>
