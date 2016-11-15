export default url => {
  const init = (method, data) => ({
    method,
    mode: 'cors',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  const request = (method, args) => {
    if (args.success && args.error) {
      fetch(url, init(method, args.data))
      .then((response) => response.json().then(args.success))
      .catch(args.error);
    } else if (args.success) {
      fetch(url, init(method, args.data))
      .then((response) => response.json().then(args.success));
    } else if (args.error) {
      fetch(url, init(method, args.data))
      .catch(args.error);
    } else {
      fetch(url, init(method, args.data));
    }
  };

  return {
    get: (args) => request('GET', args),
    post: (args) => request('POST', args),
    put: (args) => request('PUT', args),
    delete: (args) => request('DELETE', args)
  };
};
