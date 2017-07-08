(function (root, factory) {
    factory(root.Template = {})
})(this, function (exports) {
  exports.billboard = function (opts) {
    let { url, name, count } = opts
    return '<li><span class="billboard-img" style="background:url(' + 
      url +
      ')"></span><div class="billboard-content"><p class="billboard-title">' + 
      name + 
      '</p><p class="billboard-viewer">' + 
      count +
      '</p></div></li>'
  },
  exports.class = function (opts) {
    let { url, name, provider, count, price } = opts
    return '<li><div class="class-img" style="background:url(' +
        url +
        ')"></div>' +
        '<div class="class-content"><p class="class-name">' +
        name +
        '</p>' +
        '<p class="class-provider">' +
        provider +
        '</p>' +
        '<p class="class-learnerCount">' +
        count +
        '</p>' +
        '<p class="class-price">&#165;' +
        price +
        '</p></div></li>'
  }
})