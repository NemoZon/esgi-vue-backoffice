<template>
  <div class="add-button" @click="handleClick">
    <span class="plus-sign">+</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'AddButton',
  props: {
    onClick: {
      type: Function as PropType<() => void>,
      required: true
    }
  },
  setup(props) {
    const handleClick = () => {
      if (props.onClick) {
        props.onClick();
      }
    };

    return {
      handleClick
    };
  }
});
</script>

<style scoped>
.add-button {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #f0f0f0;
}

.plus-sign {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}
</style>