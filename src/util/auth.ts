import Cookies from "js-cookie";
const TokenKey = "saber-access-token";
const RefreshTokenKey = "saber-refresh-token";
const UserName = "username";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function getUserName() {
  return Cookies.get(UserName);
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token);
}

export function getRefreshToken() {
  return Cookies.get(RefreshTokenKey);
}

export function setRefreshToken(token: string) {
  return Cookies.set(RefreshTokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function removeRefreshToken() {
  return Cookies.remove(RefreshTokenKey);
}
