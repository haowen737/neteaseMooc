const http = {
  options: {
    contentType: 'application/json',
    data: null,
    headers: {
      'Content-Type': 'application/xml',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
    dataType : "jsonp",
    method: 'GET',
    onerror: function() {},
    onload: function() {},
    onreadystatechange: function() {},
    url: './'
  },
  get: function (url, option) {
    return this.request(url, option)
  },
  request: function (url, data) {
    let req
    let opt = this.mergeOption(url, data)
    console.log(opt)
    if (window.XMLHttpRequest) {
      req = new XMLHttpRequest()
      if (req.overrideMimeType) {
        req.overrideMimeType('text/xml')
      }
    }
    else if (window.ActiveXObject) { // IE
      try {
        req = new ActiveXObject("Msxml2.XMLHTTP")
      }
      catch (e) {
        try {
          req = new ActiveXObject("Microsoft.XMLHTTP")
        }
        catch (e) {}
      }
    }

    if (!req) {
      alert('请更换高版本浏览器')
      return false
    }

    req.open(opt.method, opt.url, true)
    req.withCredentials = true;
    for (var key in opt.headers) {
      if (opt.headers.hasOwnProperty(key))
        req.setRequestHeader(key, opt.headers[key])
    }

    console.log(opt.data)
    req.send(opt.data)
  },
  mergeOption (url, data) {
    let merged = {}
    let def = this.options
    for (key in def) {
      merged[key] = def[key]
    }
    merged.url = url
    merged.data = data
    return merged
  }
}