import request from '@/utils/request'
import axios from 'axios'


// 获取字符加密密文
export function getEncryptStr(password) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ProxyService/com_getEncryptPwd?pwdStr=' + password,
    method: 'get'
  })
}

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
    url: '/QueryData?SqlCmdName=web\\org\\info\\delOrgName_1_0_1&DBC=w_m',
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
export function selectAddDirector(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\select\\user\\addDirector_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-经理新建引导专员账号信息
export function selectAddStaff(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\select\\user\\addStaff_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-删除引导主管账号信息
export function selectDelDirector(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/Exsql?SqlCmdName=web\\select\\user\\delDirector_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-删除引导专员账号信息
export function selectDeStaff(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/Exsql?SqlCmdName=web\\select\\user\\deStaff_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-经理修改引导主管/专员账号信息
export function selectUpdateInfoByUid(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\select\\user\\updateInfoByUid_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-经理/主管查询引导专员名单列表
export function introducerGetList(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\org\\introducer\\getList_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-删除引导专员名单
export function delIntroducer(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\select\\user\\delIntroducer_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询用户个人信息
export function getUserDetail(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\user\\info\\getDetail_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询引导专员权限管理列表
export function getValidStaffList(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\org\\getValidStaffList_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询引导专员机构合作详情--未合作
export function getValidStaffOrgSignRecords(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\org\\getValidStaffOrgSignRecords_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询引导专员机构合作详情--在合作
export function getValidStaffOrgNoSignRecords(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\org\\getValidStaffOrgNoSignRecords_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// // web-查询引导专员机构合作详情
// export function getValidStaffOrgSignRecords(data) {
//   axios.defaults.baseURL = '/api'
//   return request({
//     xf_url: '/api',
//     url: '/QueryData?SqlCmdName=web\\org\\getValidStaffOrgSignRecords_1_0_1&DBC=w_m',
//     method: 'post',
//     data: data
//   })
// }

// web-根据机构领取记录收回引导专员机构
export function tkByOrgCoGuid(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\org\\takeback\\tkByOrgCoGuid_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}
