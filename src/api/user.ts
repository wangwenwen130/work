import request from "@/router/axios";

export const loginByUsername = (
  tenantId: string,
  username: string,
  password: string,
  type: string
) =>
  request({
    url: "/api/blade-auth/oauth/token",
    method: "post",
    headers: {
      "Tenant-Id": tenantId
    },
    params: {
      tenantId,
      username,
      password,
      grant_type: "password",
      scope: "all",
      type
    }
  });

  export const getToken = (refToken: any) =>
  request({
    url: "/api/blade-auth/oauth/token",
    method: "post",
    headers: {
      "Tenant-Id": "000000"
    },
    params: {
      tenantID: "000000",
      refresh_token: refToken,
      grant_type: "refresh_token",
      scope: "all"
    }
  });

  export const getList = () =>{
    request({
      url: "/api/cim-welife/statistics/demoList",
      method: "get",
    });
  }