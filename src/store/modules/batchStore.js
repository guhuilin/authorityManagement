import { classList, StudentList, StudentDetail, bathchSucceed } from '@/api/batch.js'
const state = {
  classLists: [],
  StudentListDatas: [],
  StudentDetails: {},
  scores: 0,
  bathchSucceedCode: 0
}

const mutations = {
  updataclassList(state, payload) {
    state.classLists = payload.data
  },
  updataStudentListData(state, payload) {
    if (payload) {
      state.StudentListDatas = payload.exam
    } else {
      state.StudentListDatas = []
    }
  },
  updataStudentDetail(state, payload) {
    console.log('updataStudentDetail', payload)
    if (payload) {
      state.StudentDetails = payload.data
    } else {
      state.StudentDetails = []
    }
  },
  updatascore(state, payload) {
    state.scores = payload.score
  },
  updataSucceedyCode(state, payload) {
    state.bathchSucceedCode = payload.code
  }
}

const actions = {
  async getClassList({ commit }, payload) {
    const getClassListy = await classList()
    commit('updataclassList', getClassListy)
  },
  async getStudentListData({ commit }, payload) {
    const getStudentListDatay = await StudentList(payload)
    commit('updataStudentListData', getStudentListDatay)
  },
  async getStudentDetail({ commit }, payload) {
    const getStudentDetaily = await StudentDetail(payload)
    commit('updataStudentDetail', getStudentDetaily)
  },
  async getbathchSucceed({ commit }, payload) {
    console.log('getbathchSucceed...', payload)
    const getbathchSucceedy = await bathchSucceed(payload.exam_student_id, payload.score)
    commit('updataSucceedyCode', getbathchSucceedy)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

