/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const markRouter = {
  path: '/mark',
  component: Layout,
  redirect: 'noredirect',
  name: 'Mark',
  alwaysShow: true,
  meta: {
    title: 'marking',
    icon: 'form'
  },
  children: [
    {
      path: 'awaitingApprovalClass',
      component: () => import('@/views/batch/batchRoll'),
      name: 'KeyboardChart',
      meta: { title: 'awaitingApprovalClass', noCache: true, view_id: 'main-examinationPapers' }
    },
    {
      path: 'member',
      component: () => import('@/views/batch/member'),
      name: 'KeyboardChart',
      hidden: true,
      meta: { title: '', noCache: true, view_id: 'main-examPaperClassmate' }
    },
    {
      path: 'member-detail',
      component: () => import('@/views/batch/member-detail'),
      name: 'KeyboardChart',
      hidden: true,
      meta: { title: '', noCache: true, view_id: 'main-examDetail' }
    }
  ]
}

export default markRouter
