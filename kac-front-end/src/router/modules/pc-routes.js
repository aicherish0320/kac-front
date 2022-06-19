export default [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/layout/Index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/main/index.vue')
      }
    ]
  }
]
