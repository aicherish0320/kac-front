export default [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/layout/Index.vue'),
    children: []
  }
]
