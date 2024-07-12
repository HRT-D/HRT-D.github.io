import request from "@/utils/request.js";

export function apply(application) {
    return request({
        url: "/apply/add",
        method: "post",
        data: application
    })
}

