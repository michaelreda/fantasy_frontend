function read(e, t, s) {
  var n = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  (n.onreadystatechange = function() {
    n.readyState > 3 && 200 == n.status && s(JSON.parse(n.responseText));
  }),
    n.open("GET", sheetsuUrlGet(e, t), !0),
    n.send();
}
function readWithPromise(e, t) {
  return new Promise(function(s, n) {
    var r = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    r.open("GET", sheetsuUrlGet(e, t), !0),
      (r.onload = function() {
        this.status >= 200 && this.status < 300
          ? s(JSON.parse(r.responseText))
          : n({ status: this.status, statusText: r.statusText });
      }),
      r.setRequestHeader("Accept", "application/vnd.sheetsu.3+json"),
      r.setRequestHeader("Content-Type", "application/json"),
      r.setRequestHeader("X-User-Agent", "Sheetsu-JS"),
      (r.onerror = function(e) {
        n(e);
      }),
      r.send();
  });
}
function write(e, t, s, n, r) {
  var o = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  (o.onreadystatechange = function() {
    o.readyState > 3 && 201 == o.status
      ? n(JSON.parse(o.responseText))
      : void 0 != r && r(o.responseText);
  }),
    o.open("POST", sheetsuUrlPost(e, s), !0),
    o.setRequestHeader("Content-Type", "application/json; charset=UTF-8"),
    o.send(JSON.stringify(t));
}
function writeWithPromise(e, t, s) {
  return new Promise(function(n, r) {
    var o = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    o.open("POST", sheetsuUrlPost(e, s), !0),
      (o.onload = function() {
        this.status >= 200 && this.status < 300
          ? n(JSON.parse(o.responseText))
          : r({ status: this.status, statusText: o.statusText });
      }),
      o.setRequestHeader("Accept", "application/vnd.sheetsu.3+json"),
      o.setRequestHeader("Content-Type", "application/json; charset=UTF-8"),
      o.setRequestHeader("X-User-Agent", "Sheetsu-JS"),
      (o.onerror = function(e) {
        r(e);
      }),
      o.send(JSON.stringify(t));
  });
}
Sheetsu = {
  read: function() {
    return 2 == arguments.length
      ? readWithPromise.apply(null, arguments)
      : read.apply(null, arguments);
  },
  write: function() {
    return 3 == arguments.length
      ? writeWithPromise.apply(null, arguments)
      : write.apply(null, arguments);
  },
  version: "1.0"
};
var sheetsuUrlGet = function(e, t) {
    var s = sheetsuUrl(e),
      n = "",
      r = addLimitOffsetTransposed(t);
    return (
      t.sheet && (n += sheet(t)),
      t.search && (n += search(t)),
      "" != r && (t.search ? (n += "&" + r) : (n += "?" + r)),
      s + n
    );
  },
  sheetsuUrlPost = function(e, t) {
    var s = sheetsuUrl(e),
      n = "";
    return t.sheet && (n += sheet(t)), s + n;
  },
  sheetsuUrl = function(e) {
    return e.startsWith("https://sheetsu.com/apis/v1.0")
      ? e
      : "https://sheetsu.com/apis/v1.0ow/" + e;
  },
  search = function(e) {
    var t = [],
      s = e.search;
    for (key in s) t.push(key + "=" + s[key]);
    return "/search?" + t.join("&");
  },
  sheet = function(e) {
    return "/sheets/" + e.sheet;
  },
  addLimitOffsetTransposed = function(e) {
    var t = [];
    return (
      e.limit && t.push("limit=" + e.limit),
      e.offset && t.push("offset=" + e.offset),
      e.transposed && t.push("transposed=" + e.transposed),
      e.ignore_case && t.push("ignore_case=" + e.ignore_case),
      t.join("&")
    );
  };
String.prototype.startsWith ||
  (String.prototype.startsWith = function(e, t) {
    return (t = t || 0), this.indexOf(e, t) === t;
  });
