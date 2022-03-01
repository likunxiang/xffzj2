import request from '@/utils/request'
import axios from 'axios'

// web-查看裁决结果信息
export function getJudgeResult(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\order\\settle\\demandDisobey\\getJudgeResult&DBC=w_m',
    method: 'post',
    data: data
  })
}

// 上传图片
export function upLoadImgApi(data,FileName,FilePath) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/UpLoadFile?FileName=' + FileName +'&FilePath=' + FilePath,
    method: 'post',
    data: data
  })
}

// 获取仲裁账单编号
export function GetfeeNo(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/html?SqlCmdName=web\\GetfeeNo&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-编辑字段别名
export function updatePlateFieldAlias(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\model\\updatePlateFieldAlias&DBC=w_m',
    method: 'post',
    data: data
  })
}

// 新增id
export function getNewId(data) {
  axios.defaults.baseURL = '/api'
  return request({
    url: '/guid?OnlyTagReturn=true&DBC=w_m',
    method: 'post',
    params: data
  })
}

// 获取上传进度
export function getFileProgress(guid) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/Cache?Name=GuideFileProgress&Key=' + guid,
    method: 'get',
  })
}

// 获取上传结果
export function getUploadResult(guid) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/Cache?Name=GuideFileHandleNum&Key=' + guid,
    method: 'get',
  })
}
