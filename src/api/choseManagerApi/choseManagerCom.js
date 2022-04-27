import request from '@/utils/request'
import axios from 'axios'

// web-查询机构名称信息列表
export function orgGetList(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\org\\info\\getList_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-新增机构名称
export function orgInsertOrgName(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\org\\info\\insertOrgName_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-编辑机构名称
export function orgUpdateOrgName(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\org\\info\\updateOrgName_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-删除机构名称
export function orgDelOrgName(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QuerData?SqlCmdName=web\\org\\info\\delOrgName_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-经理查询引导账号信息列表
export function selectMGgetListByRK(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\select\\user\\info\\MGgetListByRK_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-经理新建引导主管账号信息
export function selectMGgetListByRK(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web/select/user/addDirector_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}
