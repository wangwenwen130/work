/**
 * 工作流统一分类格式
 * @param category 分类字典号
 * @returns {string}
 */
export function flowCategory(category: any) {
  return `flow_${category}`;
}

/**
 * 根据key获取流程路由
 * @param routes
 * @param key
 */
export function flowRoute(routes: any, key: any) {
  const data = routes.filter((d: any) => {
    return d.routeKey === key;
  });
  return data.length === 0 ? [] : data[0].routeValue;
}
