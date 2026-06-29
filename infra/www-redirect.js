function handler(event) {
  var request = event.request;
  var host = request.headers.host && request.headers.host.value;
  if (host === 'www.nostuds.com') {
    var uri = request.uri;
    var qs = '';
    if (request.querystring && Object.keys(request.querystring).length > 0) {
      var parts = [];
      for (var key in request.querystring) {
        if (request.querystring[key].multiValue) {
          request.querystring[key].multiValue.forEach(function (mv) {
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(mv.value));
          });
        } else {
          parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(request.querystring[key].value));
        }
      }
      qs = '?' + parts.join('&');
    }
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        location: { value: 'https://nostuds.com' + uri + qs },
      },
    };
  }
  return request;
}
