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

// web-主管新建引导专员
export function introducerAdd(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\org\\introducer\\add_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}
