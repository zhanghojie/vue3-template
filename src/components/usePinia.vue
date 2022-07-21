<template>
<van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
	<van-button type="success">主要按钮</van-button>
  <div class="top">{{userStore.name}}</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user';
import { Login } from '@/module/index';
const userStore = useUserStore();

const requestRes = async () => {
	let result = await Login('zhangsang', '1233455');
};

 const onClickLeft = () => history.back();
</script>
<style lang="scss" scoped>

.top {
  background-color:$background-color;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif,$fontFamily;
}
</style>
