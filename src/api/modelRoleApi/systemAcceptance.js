import request from '@/utils/request'
import axios from 'axios'

// 查询验收期限品类未设置列表
export function getNoDeadlineList(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\getNoDeadlineList&DBC=w_m',
    method: 'post',
    data: data
  })
}

// 设置品类验收期限
export function insertDeadline(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\cat\\insertDeadline&DBC=w_m',
    method: 'post',
    data: data
  })
}

// 查询验收期限品类已设置列表
export function getDeadlineList(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\getDeadlineList&DBC=w_m',
    method: 'post',
    data: data
  })
}

// 查询变更记录
export function getDeadlineHistory(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\getDeadlineHistory&DBC=w_m',
    method: 'post',
    data: data
  })
}
