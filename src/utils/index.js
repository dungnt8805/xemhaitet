function getQueryString(queryString) {
  const ret = {};
  if (!queryString && queryString.length < 4) {
    return ret;
  }
  const query = queryString.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=")
    ret[pair[0]] = pair[1]
  }
  return ret;
}

export { getQueryString }