import request from '@/utils/request'
import axios from 'axios'

// web-添加服务专员
export function introducerInsert(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\guidance\\introducer\\insert_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员列表
export function introducerGetListByDirId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\introducer\\getListByDirId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-删除服务专员
export function introducerDelete(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\guidance\\introducer\\delete_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员团队列表
export function introducerGetRegisteredListByDirId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\introducer\\getRegisteredListByDirId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员权限对象列表
export function introducerGetValidNMListByInUserId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\introducer\\getValidNMListByInUserId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员权限对象数量详情列表
export function introducerGetValidNMListByDirId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\introducer\\getValidNMListByDirId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员已注册权限对象数量详情列表
export function introducerGetValidRegisterdNMListByInUserId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\introducer\\getValidRegisterdNMListByInUserId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员未注册权限对象数量详情列表
export function introducerGetValidUnRegisterdNMListByInUserId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\introducer\\getValidUnRegisterdNMListByInUserId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员进度管理列表
export function statisticGetYearByDirId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\statistic\\getYearByDirId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员月新增注册对象数量详情列表
export function statisticGetMonthRegNumByDirId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\statistic\\getMonthRegNumByDirId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员日新增注册对象数量详情列表-统计每个服务专员每天的新增服务对象数量
export function statisticGetDayRegNumByDirId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\statistic\\getDayRegNumByDirId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询注册数量服务专员服务详情列表
export function statisticGetDayRegDetailListByIntroUserId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\statistic\\getDayRegDetailListByIntroUserId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员月采购验收通过订单数量详情列表
export function statisticGetMonthDeOrderOkNumByDirId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\statistic\\getMonthDeOrderOkNumByDirId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员日采购验收通过订单数量详情列表
export function statisticGetDayDeOrderOkNumByDirId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\statistic\\getDayDeOrderOkNumByDirId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询采购订单验收通过数量服务专员服务详情列表
export function statisticGetDayDeOrderOkDetailListByIntroUserId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\statistic\\getDayDeOrderOkDetailListByIntroUserId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员月供应验收通过订单数量详情列表
export function statisticGetMonthSuOrderOkNumByDirId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\statistic\\getMonthSuOrderOkNumByDirId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务专员日供应验收通过订单数量详情列表
export function statisticGetDaySuOrderOkNumByDirId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\statistic\\getDaySuOrderOkNumByDirId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询供应订单验收通过数量服务专员服务详情列表
export function statisticGetDaySuOrderOkDetailListByIntroUserId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\guidance\\statistic\\getDaySuOrderOkDetailListByIntroUserId_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-身份认证判断身份证号是否已被认证过
export function isIdNumberExists(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\tools\\ucertification\\isIdNumberExists_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-身份认证判断用户是否已经认证过
export function isUserExists(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\tools\\ucertification\\isUserExists_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-缴纳身份认证
export function ucertification_insert(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\tools\\ucertification\\insert_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}
