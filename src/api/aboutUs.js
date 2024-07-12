import request from "@/utils/request.js";

export function getMembers() {
    return request({
            url: '/member/list',
            method: 'get'
        }
    )
}

export function getImages() {
    return request({
        url: '/image/list'
    })
}
