<template>
  <Popover class="flex items-center">
    <template #reference>
      <div
        class="relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100"
      >
        <img
          class="w-3 h-3 rounded-sm"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fa8%2F72%2Fbf%2Fa872bf8e093a8fe1e24d8594c4e0e28a.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658211330&t=aaa9f36281742d563106edf7f4eb2052"
          alt="avatar"
        />
        <SvgIcon
          name="down-arrow"
          class="w-1.5 h-1.5 ml-0.5"
          fillClass="fill-zinc-900"
        ></SvgIcon>
      </div>
      <!-- vip -->
      <SvgIcon
        name="vip"
        class="w-1.5 h-1.5 absolute right-[16px] bottom-0"
      ></SvgIcon>
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60"
        v-for="item in menuArr"
        :key="item.id"
      >
        <SvgIcon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900"
        ></SvgIcon>
        <span class="text-zinc-900 text-sm">{{ item.title }}</span>
      </div>
    </div>
  </Popover>
</template>

<script setup>
const menuArr = [
  {
    id: 0,
    title: '个人资料',
    icon: 'profile',
    path: '/profile'
  },
  {
    id: 1,
    title: '升级 VIP',
    icon: 'vip-profile',
    path: '/member'
  },
  {
    id: 2,
    title: '退出登录',
    icon: 'logout',
    path: ''
  }
]
</script>

<style lang="scss" scoped></style>
