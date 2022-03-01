import request from '@/utils/request'
import axios from 'axios'

// web-查询交易服务定价列表
export function getList(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\servicefee\\getList&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务费设置详情-按品类
export function getDetailOfType1(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\servicefee\\getDetailOfType1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-设置定价-按品类
export function insertRatioOfType1(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\cat\\servicefee\\insertRatioOfType1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务费设置详情（已添加的供方列表）-按供方型号
export function getAddedSuppliersOfType2(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\servicefee\\getAddedSuppliersOfType2&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询可添加的供方列表
export function getSuppliers(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\servicefee\\getSuppliers&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-删除已经添加的供方
export function deleteSuppliers(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\cat\\servicefee\\deleteSuppliers&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-删除已经添加的型号
export function deleteModels(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\cat\\servicefee\\deleteModels&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询可添加的型号列表-按供方型号
export function getModelsByType2(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\servicefee\\getModelsByType2&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询可添加的型号列表-按我方型号
export function getModelsByType3(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\servicefee\\getModelsByType3&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询服务费设置详情(已添加的型号列表)
export function getAddedModels(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\servicefee\\getAddedModels&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-添加型号-按供方型号
export function addModelsByType2(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\cat\\servicefee\\addModelsByType2&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-设置定价-按供方型号
export function updateRatioOfType2(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\cat\\servicefee\\updateRatioOfType2&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-添加引用型号-按我方型号
export function addModelByType3(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\cat\\servicefee\\addModelByType3&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-设置定价-按我方型号
export function updateRatioOfType3(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\cat\\servicefee\\updateRatioOfType3&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-添加供方-按供方型号
export function addSupplier(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\cat\\servicefee\\addSupplier&DBC=w_m',
    method: 'post',
    data: data
  })
}
