import request from '@/utils/request'

// 查询所有审核通过的友链列表
export function getAllLink(query) {
    return request({
        url: '/link/list',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}

