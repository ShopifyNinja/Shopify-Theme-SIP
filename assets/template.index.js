! function(e) {
    function t(t) {
        for (var n, i, l = t[0], a = t[1], f = t[2], d = 0, c = []; d < l.length; d++) i = l[d], o[i] && c.push(o[i][0]), o[i] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        for (s && s(t); c.length;) c.shift()();
        return u.push.apply(u, f || []), r()
    }

    function r() {
        for (var e, t = 0; t < u.length; t++) {
            for (var r = u[t], n = !0, l = 1; l < r.length; l++) {
                var a = r[l];
                0 !== o[a] && (n = !1)
            }
            n && (u.splice(t--, 1), e = i(i.s = r[0]))
        }
        return e
    }
    var n = {},
        o = {
            4: 0
        },
        u = [];

    function i(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = n, i.d = function(e, t, r) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) i.d(r, n, function(t) {
                return e[t]
            }.bind(null, n));
        return r
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "";
    var l = window.shopifySlateJsonp = window.shopifySlateJsonp || [],
        a = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var f = 0; f < l.length; f++) t(l[f]);
    var s = a;
    u.push([79, 0, 8]), r()
}({
    79: function(e, t, r) {
        "use strict";
        var n = r(19);
        r(80), r(81), (0, n.load)("*")
    },
    80: function(e, t, r) {
        "use strict";
        var n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r(12));
        r(35), (0, n.default)(document).ready(function() {
            var e = (0, n.default)("[data-index-header]");
            e.length > 0 && e.slick({
                swipeToSlide: !0,
                arrows: !1,
                dots: !0,
              	fade: true,
                slidesToShow: 1,
              	autoplay: true,
              	autoplaySpeed: 7500,
                pauseOnHover: false,
                pauseOnFocus: false
            })
        })
    },
    81: function(e, t, r) {
        "use strict";
        var n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r(12));
        r(35), (0, n.default)(document).ready(function() {
            var e2 = (0, n.default)(".row.usp-banner__row").eq(0);
            var img_e = (0, n.default)(".slider_wrap");

            if($(window).width() <= 768){
//               e2.length > 0 && e2.slick({
//                 swipeToSlide: !0,
//                 arrows: !1,
//                 dots: 0,
//                 slidesToShow: 1
//               })

              img_e.length > 0 && e2.slick({
                swipeToSlide: !0,
                arrows: !1,
                dots: 0,
                slidesToShow: 1
              })

            }
        })
    }
});
