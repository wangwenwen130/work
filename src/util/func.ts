/**
 * 不为空
 * @param val
 * @returns {boolean}
 */
export function notEmpty(val: string) {
  return !isEmpty(val);
}

/**
 * 为空
 * @param val
 * @returns {boolean}
 */
export function isEmpty(val: string | boolean) {
  if (
    val === null ||
    typeof val === "undefined" ||
    (typeof val === "string" && val === "" && (val as any) !== "undefined")
  ) {
    return true;
  }
  return false;
}

/**
 * 强转int型
 * @param val
 * @param defaultValue
 * @returns {number}
 */
export function toInt(val: string, defaultValue: any) {
  if (isEmpty(val)) {
    return defaultValue === undefined ? -1 : defaultValue;
  }
  const num = parseInt(val, 0);
  return Number.isNaN(num)
    ? defaultValue === undefined
      ? -1
      : defaultValue
    : num;
}

/**
 * Json强转为Form类型
 * @param obj
 * @returns {FormData}
 */
export function toFormData(obj: any) {
  const data = new FormData();
  Object.keys(obj).forEach(key => {
    data.append(key, Array.isArray(obj[key]) ? obj[key].join(",") : obj[key]);
  });
  return data;
}

/**
 * date类转为字符串格式
 * @param date
 * @param format
 * @returns {null}
 */
export function format(date: any, format = "YYYY-MM-DD HH:mm:ss"): any {
  return date ? date.format(format) : null;
}

/**
 * 根据逗号联合
 * @param arr
 * @returns {string}
 */
export function join(arr: any): any {
  return arr ? arr.join(",") : "";
}

/**
 * 根据逗号分隔
 * @param str
 * @returns {string}
 */
export function split(str: string) {
  return str ? String(str).split(",") : "";
}
