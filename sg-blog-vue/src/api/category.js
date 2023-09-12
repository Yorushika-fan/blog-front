import request from '@/utils/request'

// 查询分类列表
export function getCategoryList() {
    return request({
        url: '/article/cateGoryList',
        headers: {
          isToken: false
        },
        method: 'get'
    })
}
