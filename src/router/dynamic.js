import Layout from '@/views/layout/index.vue'

export const video = {
  path: '/video',
  component: Layout,
  redirect: '/video/index',
  meta: { title: '视频管理', icon: 'Film' },
  children: [
    {
      path: 'file',
      component: () => import('@/views/video/file.vue'),
      name: 'videoFile',
      meta: { title: '视频文件', icon: 'Files' }
    },
    {
      path: 'transcode',
      component: () => import('@/views/video/transcode.vue'),
      name: 'videoTranscode',
      meta: { title: '编码配置', icon: 'Memo' }
    },
    {
      path: 'task',
      component: () => import('@/views/video/task.vue'),
      name: 'videoTask',
      meta: { title: '任务管理', icon: 'DocumentCopy' }
    }
  ]
}

export const archive = {
  path: '/archive',
  component: Layout,
  redirect: '/archive/index',
  meta: { title: '资料档案', icon: 'Postcard' },
  children: [
    {
      path: 'list',
      component: () => import('@/views/archive/list.vue'),
      name: 'archiveList',
      meta: { title: '资料列表', icon: 'Memo' }
    },
    {
      path: 'category',
      component: () => import('@/views/archive/category.vue'),
      name: 'archiveCategory',
      meta: { title: '分类列表', icon: 'Grid' }
    },
    {
      path: 'tag',
      component: () => import('@/views/archive/tag.vue'),
      name: 'archiveTag',
      meta: { title: '标签列表', icon: 'PriceTag' }
    }
  ]
}

export const wafcdn = {
  path: '/wafcdn',
  component: Layout,
  redirect: '/wafcdn/stat',
  meta: { title: 'WAFCDN', icon: 'Postcard' },
  children: [
    {
      path: 'stat',
      component: () => import('@/views/wafcdn/stat.vue'),
      name: 'WafCdnStat',
      meta: { title: '状态总览', icon: 'Odometer' }
    },
    {
      path: 'domain',
      component: () => import('@/views/wafcdn/domain.vue'),
      name: 'WafCdnDomain',
      meta: { title: '域名管理', icon: 'Grid' }
    },
    {
      path: 'cache',
      component: () => import('@/views/wafcdn/cache.vue'),
      name: 'WafCdnCache',
      meta: { title: '缓存文件', icon: 'Files' }
    }
  ]
}
