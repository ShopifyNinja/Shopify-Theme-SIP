(window.shopifySlateJsonp = window.shopifySlateJsonp || []).push([
    [0], {
        12: function(e, t, n) {
            var r;
            /*!
             * jQuery JavaScript Library v3.4.1
             * https://jquery.com/
             *
             * Includes Sizzle.js
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://jquery.org/license
             *
             * Date: 2019-05-01T21:04Z
             */
            /*!
             * jQuery JavaScript Library v3.4.1
             * https://jquery.com/
             *
             * Includes Sizzle.js
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://jquery.org/license
             *
             * Date: 2019-05-01T21:04Z
             */
            ! function(t, n) { "use strict"; "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return n(e) } : n(t) }("undefined" != typeof window ? window : this, function(n, i) {
                "use strict";
                var o = [],
                    a = n.document,
                    s = Object.getPrototypeOf,
                    u = o.slice,
                    l = o.concat,
                    c = o.push,
                    f = o.indexOf,
                    d = {},
                    p = d.toString,
                    h = d.hasOwnProperty,
                    g = h.toString,
                    v = g.call(Object),
                    y = {},
                    m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
                    b = function(e) { return null != e && e === e.window },
                    x = { type: !0, src: !0, nonce: !0, noModule: !0 };

                function w(e, t, n) { var r, i, o = (n = n || a).createElement("script"); if (o.text = e, t)
                        for (r in x)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                    n.head.appendChild(o).parentNode.removeChild(o) }

                function A(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e }
                var C = function(e, t) { return new C.fn.init(e, t) },
                    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

                function E(e) { var t = !!e && "length" in e && e.length,
                        n = A(e); return !m(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) }
                C.fn = C.prototype = { jquery: "3.4.1", constructor: C, length: 0, toArray: function() { return u.call(this) }, get: function(e) { return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = C.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return C.each(this, e) }, map: function(e) { return this.pushStack(C.map(this, function(t, n) { return e.call(t, n, t) })) }, slice: function() { return this.pushStack(u.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(e) { var t = this.length,
                            n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: c, sort: o.sort, splice: o.splice }, C.extend = C.fn.extend = function() { var e, t, n, r, i, o, a = arguments[0] || {},
                        s = 1,
                        u = arguments.length,
                        l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                        if (null != (e = arguments[s]))
                            for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {}, i = !1, a[t] = C.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                    return a }, C.extend({ expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== p.call(e) || (t = s(e)) && ("function" != typeof(n = h.call(t, "constructor") && t.constructor) || g.call(n) !== v)) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, globalEval: function(e, t) { w(e, { nonce: t && t.nonce }) }, each: function(e, t) { var n, r = 0; if (E(e))
                            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                        else
                            for (r in e)
                                if (!1 === t.call(e[r], r, e[r])) break; return e }, trim: function(e) { return null == e ? "" : (e + "").replace(T, "") }, makeArray: function(e, t) { var n = t || []; return null != e && (E(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : f.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e }, grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r }, map: function(e, t, n) { var r, i, o = 0,
                            a = []; if (E(e))
                            for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                        else
                            for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return l.apply([], a) }, guid: 1, support: y }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { d["[object " + t + "]"] = t.toLowerCase() });
                var z =
                    /*!
                     * Sizzle CSS Selector Engine v2.3.4
                     * https://sizzlejs.com/
                     *
                     * Copyright JS Foundation and other contributors
                     * Released under the MIT license
                     * https://js.foundation/
                     *
                     * Date: 2019-04-08
                     */
                    function(e) { var t, n, r, i, o, a, s, u, l, c, f, d, p, h, g, v, y, m, b, x = "sizzle" + 1 * new Date,
                            w = e.document,
                            A = 0,
                            C = 0,
                            T = ue(),
                            E = ue(),
                            z = ue(),
                            S = ue(),
                            N = function(e, t) { return e === t && (f = !0), 0 },
                            k = {}.hasOwnProperty,
                            L = [],
                            j = L.pop,
                            D = L.push,
                            P = L.push,
                            q = L.slice,
                            H = function(e, t) { for (var n = 0, r = e.length; n < r; n++)
                                    if (e[n] === t) return n;
                                return -1 },
                            _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            M = "[\\x20\\t\\r\\n\\f]",
                            O = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                            R = "\\[" + M + "*(" + O + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
                            F = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                            I = new RegExp(M + "+", "g"),
                            W = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                            B = new RegExp("^" + M + "*," + M + "*"),
                            $ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                            U = new RegExp(M + "|>"),
                            X = new RegExp(F),
                            V = new RegExp("^" + O + "$"),
                            G = { ID: new RegExp("^#(" + O + ")"), CLASS: new RegExp("^\\.(" + O + ")"), TAG: new RegExp("^(" + O + "|[*])"), ATTR: new RegExp("^" + R), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + _ + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
                            J = /HTML$/i,
                            Q = /^(?:input|select|textarea|button)$/i,
                            Y = /^h\d$/i,
                            K = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                            ne = function(e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
                            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            ie = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
                            oe = function() { d() },
                            ae = xe(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { P.apply(L = q.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType } catch (e) { P = { apply: L.length ? function(e, t) { D.apply(e, q.call(t)) } : function(e, t) { for (var n = e.length, r = 0; e[n++] = t[r++];);
                                    e.length = n - 1 } } }

                        function se(e, t, r, i) { var o, s, l, c, f, h, y, m = t && t.ownerDocument,
                                A = t ? t.nodeType : 9; if (r = r || [], "string" != typeof e || !e || 1 !== A && 9 !== A && 11 !== A) return r; if (!i && ((t ? t.ownerDocument || t : w) !== p && d(t), t = t || p, g)) { if (11 !== A && (f = Z.exec(e)))
                                    if (o = f[1]) { if (9 === A) { if (!(l = t.getElementById(o))) return r; if (l.id === o) return r.push(l), r } else if (m && (l = m.getElementById(o)) && b(t, l) && l.id === o) return r.push(l), r } else { if (f[2]) return P.apply(r, t.getElementsByTagName(e)), r; if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(o)), r }
                                if (n.qsa && !S[e + " "] && (!v || !v.test(e)) && (1 !== A || "object" !== t.nodeName.toLowerCase())) { if (y = e, m = t, 1 === A && U.test(e)) { for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = x), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + be(h[s]);
                                        y = h.join(","), m = ee.test(e) && ye(t.parentNode) || t } try { return P.apply(r, m.querySelectorAll(y)), r } catch (t) { S(e, !0) } finally { c === x && t.removeAttribute("id") } } } return u(e.replace(W, "$1"), t, r, i) }

                        function ue() { var e = []; return function t(n, i) { return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i } }

                        function le(e) { return e[x] = !0, e }

                        function ce(e) { var t = p.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

                        function fe(e, t) { for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t }

                        function de(e, t) { var n = t && e,
                                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n)
                                for (; n = n.nextSibling;)
                                    if (n === t) return -1;
                            return e ? 1 : -1 }

                        function pe(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

                        function he(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

                        function ge(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

                        function ve(e) { return le(function(t) { return t = +t, le(function(n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

                        function ye(e) { return e && void 0 !== e.getElementsByTagName && e } for (t in n = se.support = {}, o = se.isXML = function(e) { var t = e.namespaceURI,
                                    n = (e.ownerDocument || e).documentElement; return !J.test(t || n && n.nodeName || "HTML") }, d = se.setDocument = function(e) { var t, i, a = e ? e.ownerDocument || e : w; return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, g = !o(p), w !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), n.getElementsByTagName = ce(function(e) { return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length }), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = ce(function(e) { return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length }), n.getById ? (r.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, r.find.ID = function(e, t) { if (void 0 !== t.getElementById && g) { var n = t.getElementById(e); return n ? [n] : [] } }) : (r.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, r.find.ID = function(e, t) { if (void 0 !== t.getElementById && g) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), r.find.TAG = n.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, r = [],
                                        i = 0,
                                        o = t.getElementsByTagName(e); if ("*" === e) { for (; n = o[i++];) 1 === n.nodeType && r.push(n); return r } return o }, r.find.CLASS = n.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e) }, y = [], v = [], (n.qsa = K.test(p.querySelectorAll)) && (ce(function(e) { h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + _ + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]") }), ce(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = p.createElement("input");
                                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) { n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", F) }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                                        r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function(e, t) { if (t)
                                        for (; t = t.parentNode;)
                                            if (t === e) return !0;
                                    return !1 }, N = t ? function(e, t) { if (e === t) return f = !0, 0; var r = !e.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && b(w, e) ? -1 : t === p || t.ownerDocument === w && b(w, t) ? 1 : c ? H(c, e) - H(c, t) : 0 : 4 & r ? -1 : 1) } : function(e, t) { if (e === t) return f = !0, 0; var n, r = 0,
                                        i = e.parentNode,
                                        o = t.parentNode,
                                        a = [e],
                                        s = [t]; if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? H(c, e) - H(c, t) : 0; if (i === o) return de(e, t); for (n = e; n = n.parentNode;) a.unshift(n); for (n = t; n = n.parentNode;) s.unshift(n); for (; a[r] === s[r];) r++; return r ? de(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0 }, p) : p }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) { if ((e.ownerDocument || e) !== p && d(e), n.matchesSelector && g && !S[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try { var r = m.call(e, t); if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) { S(t, !0) }
                                return se(t, p, null, [e]).length > 0 }, se.contains = function(e, t) { return (e.ownerDocument || e) !== p && d(e), b(e, t) }, se.attr = function(e, t) {
                                (e.ownerDocument || e) !== p && d(e); var i = r.attrHandle[t.toLowerCase()],
                                    o = i && k.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0; return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) { var t, r = [],
                                    i = 0,
                                    o = 0; if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) { for (; t = e[o++];) t === e[o] && (i = r.push(o)); for (; i--;) e.splice(r[i], 1) } return c = null, e }, i = se.getText = function(e) { var t, n = "",
                                    r = 0,
                                    o = e.nodeType; if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += i(e) } else if (3 === o || 4 === o) return e.nodeValue } else
                                    for (; t = e[r++];) n += i(t); return n }, (r = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = T[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && T(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, t, n) { return function(r) { var i = se.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")) } }, CHILD: function(e, t, n, r, i) { var o = "nth" !== e.slice(0, 3),
                                            a = "last" !== e.slice(-4),
                                            s = "of-type" === t; return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, u) { var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                                                v = t.parentNode,
                                                y = s && t.nodeName.toLowerCase(),
                                                m = !u && !s,
                                                b = !1; if (v) { if (o) { for (; g;) { for (d = t; d = d[g];)
                                                            if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                                        h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? v.firstChild : v.lastChild], a && m) { for (b = (p = (l = (c = (f = (d = v)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === A && l[1]) && l[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                                                        if (1 === d.nodeType && ++b && d === t) { c[e] = [A, p, b]; break } } else if (m && (b = p = (l = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === A && l[1]), !1 === b)
                                                    for (;
                                                        (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++b || (m && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [A, b]), d !== t));); return (b -= i) === r || b % r == 0 && b / r >= 0 } } }, PSEUDO: function(e, t) { var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) { for (var r, o = i(e, t), a = o.length; a--;) e[r = H(e, o[a])] = !(n[r] = o[a]) }) : function(e) { return i(e, 0, n) }) : i } }, pseudos: { not: le(function(e) { var t = [],
                                            n = [],
                                            r = s(e.replace(W, "$1")); return r[x] ? le(function(e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() } }), has: le(function(e) { return function(t) { return se(e, t).length > 0 } }), contains: le(function(e) { return e = e.replace(te, ne),
                                            function(t) { return (t.textContent || i(t)).indexOf(e) > -1 } }), lang: le(function(e) { return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                            function(t) { var n;
                                                do { if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function(e) { return e === h }, focus: function(e) { return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6) return !1;
                                        return !0 }, parent: function(e) { return !r.pseudos.empty(e) }, header: function(e) { return Y.test(e.nodeName) }, input: function(e) { return Q.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ve(function() { return [0] }), last: ve(function(e, t) { return [t - 1] }), eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }), even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r); return e }), gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e }) } }).pseudos.nth = r.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = pe(t); for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);

                        function me() {}

                        function be(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

                        function xe(e, t, n) { var r = t.dir,
                                i = t.next,
                                o = i || r,
                                a = n && "parentNode" === o,
                                s = C++; return t.first ? function(t, n, i) { for (; t = t[r];)
                                    if (1 === t.nodeType || a) return e(t, n, i);
                                return !1 } : function(t, n, u) { var l, c, f, d = [A, s]; if (u) { for (; t = t[r];)
                                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0 } else
                                    for (; t = t[r];)
                                        if (1 === t.nodeType || a)
                                            if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                            else { if ((l = c[o]) && l[0] === A && l[1] === s) return d[2] = l[2]; if (c[o] = d, d[2] = e(t, n, u)) return !0 } return !1 } }

                        function we(e) { return e.length > 1 ? function(t, n, r) { for (var i = e.length; i--;)
                                    if (!e[i](t, n, r)) return !1;
                                return !0 } : e[0] }

                        function Ae(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

                        function Ce(e, t, n, r, i, o) { return r && !r[x] && (r = Ce(r)), i && !i[x] && (i = Ce(i, o)), le(function(o, a, s, u) { var l, c, f, d = [],
                                    p = [],
                                    h = a.length,
                                    g = o || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(t || "*", s.nodeType ? [s] : s, []),
                                    v = !e || !o && t ? g : Ae(g, d, e, s, u),
                                    y = n ? i || (o ? e : h || r) ? [] : a : v; if (n && n(v, y, s, u), r)
                                    for (l = Ae(y, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[p[c]] = !(v[p[c]] = f)); if (o) { if (i || e) { if (i) { for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                                            i(null, y = [], l, u) } for (c = y.length; c--;)(f = y[c]) && (l = i ? H(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f)) } } else y = Ae(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : P.apply(a, y) }) }

                        function Te(e) { for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = xe(function(e) { return e === t }, s, !0), f = xe(function(e) { return H(t, e) > -1 }, s, !0), d = [function(e, n, r) { var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r)); return t = null, i }]; u < o; u++)
                                if (n = r.relative[e[u].type]) d = [xe(we(d), n)];
                                else { if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) { for (i = ++u; i < o && !r.relative[e[i].type]; i++); return Ce(u > 1 && we(d), u > 1 && be(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(W, "$1"), n, u < i && Te(e.slice(u, i)), i < o && Te(e = e.slice(i)), i < o && be(e)) }
                                    d.push(n) }
                            return we(d) } return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function(e, t) { var n, i, o, a, s, u, l, c = E[e + " "]; if (c) return t ? 0 : c.slice(0); for (s = e, u = [], l = r.preFilter; s;) { for (a in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = $.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(W, " ") }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? se.error(e) : E(e, u).slice(0) }, s = se.compile = function(e, t) { var n, i = [],
                                o = [],
                                s = z[e + " "]; if (!s) { for (t || (t = a(e)), n = t.length; n--;)(s = Te(t[n]))[x] ? i.push(s) : o.push(s);
                                (s = z(e, function(e, t) { var n = t.length > 0,
                                        i = e.length > 0,
                                        o = function(o, a, s, u, c) { var f, h, v, y = 0,
                                                m = "0",
                                                b = o && [],
                                                x = [],
                                                w = l,
                                                C = o || i && r.find.TAG("*", c),
                                                T = A += null == w ? 1 : Math.random() || .1,
                                                E = C.length; for (c && (l = a === p || a || c); m !== E && null != (f = C[m]); m++) { if (i && f) { for (h = 0, a || f.ownerDocument === p || (d(f), s = !g); v = e[h++];)
                                                        if (v(f, a || p, s)) { u.push(f); break }
                                                    c && (A = T) }
                                                n && ((f = !v && f) && y--, o && b.push(f)) } if (y += m, n && m !== y) { for (h = 0; v = t[h++];) v(b, x, a, s); if (o) { if (y > 0)
                                                        for (; m--;) b[m] || x[m] || (x[m] = j.call(u));
                                                    x = Ae(x) }
                                                P.apply(u, x), c && !o && x.length > 0 && y + t.length > 1 && se.uniqueSort(u) } return c && (A = T, l = w), b }; return n ? le(o) : o }(o, i))).selector = e } return s }, u = se.select = function(e, t, n, i) { var o, u, l, c, f, d = "function" == typeof e && e,
                                p = !i && a(e = d.selector || e); if (n = n || [], 1 === p.length) { if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) { if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                                    d && (t = t.parentNode), e = e.slice(u.shift().value.length) } for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) { if (u.splice(o, 1), !(e = i.length && be(u))) return P.apply(n, i), n; break } } return (d || s(e, p))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n }, n.sortStable = x.split("").sort(N).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(p.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), n.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(_, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(n);
                C.find = z, C.expr = z.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = z.uniqueSort, C.text = z.getText, C.isXMLDoc = z.isXML, C.contains = z.contains, C.escapeSelector = z.escape;
                var S = function(e, t, n) { for (var r = [], i = void 0 !== n;
                            (e = e[t]) && 9 !== e.nodeType;)
                            if (1 === e.nodeType) { if (i && C(e).is(n)) break;
                                r.push(e) }
                        return r },
                    N = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
                    k = C.expr.match.needsContext;

                function L(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
                var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function D(e, t, n) { return m(t) ? C.grep(e, function(e, r) { return !!t.call(e, r, e) !== n }) : t.nodeType ? C.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? C.grep(e, function(e) { return f.call(t, e) > -1 !== n }) : C.filter(t, e, n) }
                C.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) { return 1 === e.nodeType })) }, C.fn.extend({ find: function(e) { var t, n, r = this.length,
                            i = this; if ("string" != typeof e) return this.pushStack(C(e).filter(function() { for (t = 0; t < r; t++)
                                if (C.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n); return r > 1 ? C.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(D(this, e || [], !1)) }, not: function(e) { return this.pushStack(D(this, e || [], !0)) }, is: function(e) { return !!D(this, "string" == typeof e && k.test(e) ? C(e) : e || [], !1).length } });
                var P, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (C.fn.init = function(e, t, n) { var r, i; if (!e) return this; if (n = n || P, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), j.test(r[1]) && C.isPlainObject(t))
                                for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = a.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this) }).prototype = C.fn, P = C(a);
                var H = /^(?:parents|prev(?:Until|All))/,
                    _ = { children: !0, contents: !0, next: !0, prev: !0 };

                function M(e, t) { for (;
                        (e = e[t]) && 1 !== e.nodeType;); return e }
                C.fn.extend({ has: function(e) { var t = C(e, this),
                            n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                                if (C.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, r = 0,
                            i = this.length,
                            o = [],
                            a = "string" != typeof e && C(e); if (!k.test(e))
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) { o.push(n); break }
                        return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? f.call(C(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), C.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return S(e, "parentNode") }, parentsUntil: function(e, t, n) { return S(e, "parentNode", n) }, next: function(e) { return M(e, "nextSibling") }, prev: function(e) { return M(e, "previousSibling") }, nextAll: function(e) { return S(e, "nextSibling") }, prevAll: function(e) { return S(e, "previousSibling") }, nextUntil: function(e, t, n) { return S(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return S(e, "previousSibling", n) }, siblings: function(e) { return N((e.parentNode || {}).firstChild, e) }, children: function(e) { return N(e.firstChild) }, contents: function(e) { return void 0 !== e.contentDocument ? e.contentDocument : (L(e, "template") && (e = e.content || e), C.merge([], e.childNodes)) } }, function(e, t) { C.fn[e] = function(n, r) { var i = C.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), this.length > 1 && (_[e] || C.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i) } });
                var O = /[^\x20\t\r\n\f]+/g;

                function R(e) { return e }

                function F(e) { throw e }

                function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
                C.Callbacks = function(e) { e = "string" == typeof e ? function(e) { var t = {}; return C.each(e.match(O) || [], function(e, n) { t[n] = !0 }), t }(e) : C.extend({}, e); var t, n, r, i, o = [],
                        a = [],
                        s = -1,
                        u = function() { for (i = i || e.once, r = t = !0; a.length; s = -1)
                                for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                            e.memory || (n = !1), t = !1, i && (o = n ? [] : "") },
                        l = { add: function() { return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) { C.each(n, function(n, r) { m(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== A(r) && t(r) }) }(arguments), n && !t && u()), this }, remove: function() { return C.each(arguments, function(e, t) { for (var n;
                                        (n = C.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s-- }), this }, has: function(e) { return e ? C.inArray(e, o) > -1 : o.length > 0 }, empty: function() { return o && (o = []), this }, disable: function() { return i = a = [], o = n = "", this }, disabled: function() { return !o }, lock: function() { return i = a = [], n || t || (o = n = ""), this }, locked: function() { return !!i }, fireWith: function(e, n) { return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this }, fire: function() { return l.fireWith(this, arguments), this }, fired: function() { return !!r } }; return l }, C.extend({ Deferred: function(e) { var t = [
                                ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                                ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                            ],
                            r = "pending",
                            i = { state: function() { return r }, always: function() { return o.done(arguments).fail(arguments), this }, catch: function(e) { return i.then(null, e) }, pipe: function() { var e = arguments; return C.Deferred(function(n) { C.each(t, function(t, r) { var i = m(e[r[4]]) && e[r[4]];
                                            o[r[1]](function() { var e = i && i.apply(this, arguments);
                                                e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments) }) }), e = null }).promise() }, then: function(e, r, i) { var o = 0;

                                    function a(e, t, r, i) { return function() { var s = this,
                                                u = arguments,
                                                l = function() { var n, l; if (!(e < o)) { if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                        l = n && ("object" == typeof n || "function" == typeof n) && n.then, m(l) ? i ? l.call(n, a(o, t, R, i), a(o, t, F, i)) : (o++, l.call(n, a(o, t, R, i), a(o, t, F, i), a(o, t, R, t.notifyWith))) : (r !== R && (s = void 0, u = [n]), (i || t.resolveWith)(s, u)) } },
                                                c = i ? l : function() { try { l() } catch (n) { C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== F && (s = void 0, u = [n]), t.rejectWith(s, u)) } };
                                            e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()), n.setTimeout(c)) } } return C.Deferred(function(n) { t[0][3].add(a(0, n, m(i) ? i : R, n.notifyWith)), t[1][3].add(a(0, n, m(e) ? e : R)), t[2][3].add(a(0, n, m(r) ? r : F)) }).promise() }, promise: function(e) { return null != e ? C.extend(e, i) : i } },
                            o = {}; return C.each(t, function(e, n) { var a = n[2],
                                s = n[5];
                            i[n[1]] = a.add, s && a.add(function() { r = s }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function() { return o[n[0] + "With"](this === o ? void 0 : this, arguments), this }, o[n[0] + "With"] = a.fireWith }), i.promise(o), e && e.call(o, o), o }, when: function(e) { var t = arguments.length,
                            n = t,
                            r = Array(n),
                            i = u.call(arguments),
                            o = C.Deferred(),
                            a = function(e) { return function(n) { r[e] = this, i[e] = arguments.length > 1 ? u.call(arguments) : n, --t || o.resolveWith(r, i) } }; if (t <= 1 && (I(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || m(i[n] && i[n].then))) return o.then(); for (; n--;) I(i[n], a(n), o.reject); return o.promise() } });
                var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                C.Deferred.exceptionHook = function(e, t) { n.console && n.console.warn && e && W.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, C.readyException = function(e) { n.setTimeout(function() { throw e }) };
                var B = C.Deferred();

                function $() { a.removeEventListener("DOMContentLoaded", $), n.removeEventListener("load", $), C.ready() }
                C.fn.ready = function(e) { return B.then(e).catch(function(e) { C.readyException(e) }), this }, C.extend({ isReady: !1, readyWait: 1, ready: function(e) {
                        (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || B.resolveWith(a, [C])) } }), C.ready.then = B.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(C.ready) : (a.addEventListener("DOMContentLoaded", $), n.addEventListener("load", $));
                var U = function(e, t, n, r, i, o, a) { var s = 0,
                            u = e.length,
                            l = null == n; if ("object" === A(n))
                            for (s in i = !0, n) U(e, t, s, n[s], !0, o, a);
                        else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(C(e), n) })), t))
                            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o },
                    X = /^-ms-/,
                    V = /-([a-z])/g;

                function G(e, t) { return t.toUpperCase() }

                function J(e) { return e.replace(X, "ms-").replace(V, G) }
                var Q = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

                function Y() { this.expando = C.expando + Y.uid++ }
                Y.uid = 1, Y.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[J(t)] = n;
                        else
                            for (r in t) i[J(r)] = t[r]; return i }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][J(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(J) : (t = J(t)) in r ? [t] : t.match(O) || []).length; for (; n--;) delete r[t[n]] }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !C.isEmptyObject(t) } };
                var K = new Y,
                    Z = new Y,
                    ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    te = /[A-Z]/g;

                function ne(e, t, n) { var r; if (void 0 === n && 1 === e.nodeType)
                        if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) { try { n = function(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e) }(n) } catch (e) {}
                            Z.set(e, t, n) } else n = void 0;
                    return n }
                C.extend({ hasData: function(e) { return Z.hasData(e) || K.hasData(e) }, data: function(e, t, n) { return Z.access(e, t, n) }, removeData: function(e, t) { Z.remove(e, t) }, _data: function(e, t, n) { return K.access(e, t, n) }, _removeData: function(e, t) { K.remove(e, t) } }), C.fn.extend({ data: function(e, t) { var n, r, i, o = this[0],
                            a = o && o.attributes; if (void 0 === e) { if (this.length && (i = Z.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) { for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = J(r.slice(5)), ne(o, r, i[r]));
                                K.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof e ? this.each(function() { Z.set(this, e) }) : U(this, function(t) { var n; if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;
                            this.each(function() { Z.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function(e) { return this.each(function() { Z.remove(this, e) }) } }), C.extend({ queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, C.makeArray(n)) : r.push(n)), r || [] }, dequeue: function(e, t) { t = t || "fx"; var n = C.queue(e, t),
                            r = n.length,
                            i = n.shift(),
                            o = C._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { C.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return K.get(e, n) || K.access(e, n, { empty: C.Callbacks("once memory").add(function() { K.remove(e, [t + "queue", n]) }) }) } }), C.fn.extend({ queue: function(e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function() { var n = C.queue(this, e, t);
                            C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e) }) }, dequeue: function(e) { return this.each(function() { C.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, r = 1,
                            i = C.Deferred(),
                            o = this,
                            a = this.length,
                            s = function() {--r || i.resolveWith(o, [o]) }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = K.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } });
                var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
                    oe = ["Top", "Right", "Bottom", "Left"],
                    ae = a.documentElement,
                    se = function(e) { return C.contains(e.ownerDocument, e) },
                    ue = { composed: !0 };
                ae.getRootNode && (se = function(e) { return C.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument });
                var le = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === C.css(e, "display") },
                    ce = function(e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i };

                function fe(e, t, n, r) { var i, o, a = 20,
                        s = r ? function() { return r.cur() } : function() { return C.css(e, t, "") },
                        u = s(),
                        l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                        c = e.nodeType && (C.cssNumber[t] || "px" !== l && +u) && ie.exec(C.css(e, t)); if (c && c[3] !== l) { for (u /= 2, l = l || c[3], c = +u || 1; a--;) C.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                        c *= 2, C.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i }
                var de = {};

                function pe(e) { var t, n = e.ownerDocument,
                        r = e.nodeName,
                        i = de[r]; return i || (t = n.body.appendChild(n.createElement(r)), i = C.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), de[r] = i, i) }

                function he(e, t) { for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = K.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && le(r) && (i[o] = pe(r))) : "none" !== n && (i[o] = "none", K.set(r, "display", n))); for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]); return e }
                C.fn.extend({ show: function() { return he(this, !0) }, hide: function() { return he(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { le(this) ? C(this).show() : C(this).hide() }) } });
                var ge = /^(?:checkbox|radio)$/i,
                    ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    ye = /^$|^module$|\/(?:java|ecma)script/i,
                    me = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

                function be(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && L(e, t) ? C.merge([e], n) : n }

                function xe(e, t) { for (var n = 0, r = e.length; n < r; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval")) }
                me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
                var we = /<|&#?\w+;/;

                function Ae(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
                        if ((o = e[p]) || 0 === o)
                            if ("object" === A(o)) C.merge(d, o.nodeType ? [o] : o);
                            else if (we.test(o)) { for (a = a || f.appendChild(t.createElement("div")), s = (ve.exec(o) || ["", ""])[1].toLowerCase(), u = me[s] || me._default, a.innerHTML = u[1] + C.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                        C.merge(d, a.childNodes), (a = f.firstChild).textContent = "" } else d.push(t.createTextNode(o)); for (f.textContent = "", p = 0; o = d[p++];)
                        if (r && C.inArray(o, r) > -1) i && i.push(o);
                        else if (l = se(o), a = be(f.appendChild(o), "script"), l && xe(a), n)
                        for (c = 0; o = a[c++];) ye.test(o.type || "") && n.push(o); return f }! function() { var e = a.createDocumentFragment().appendChild(a.createElement("div")),
                        t = a.createElement("input");
                    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue }();
                var Ce = /^key/,
                    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    Ee = /^([^.]*)(?:\.(.+)|)/;

                function ze() { return !0 }

                function Se() { return !1 }

                function Ne(e, t) { return e === function() { try { return a.activeElement } catch (e) {} }() == ("focus" === t) }

                function ke(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
                    else if (!i) return e; return 1 === o && (a = i, (i = function(e) { return C().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = C.guid++)), e.each(function() { C.event.add(this, t, i, r, n) }) }

                function Le(e, t, n) { n ? (K.set(e, t, !1), C.event.add(e, t, { namespace: !1, handler: function(e) { var r, i, o = K.get(this, t); if (1 & e.isTrigger && this[t]) { if (o.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (o = u.call(arguments), K.set(this, t, o), r = n(this, t), this[t](), o !== (i = K.get(this, t)) || r ? K.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value } else o.length && (K.set(this, t, { value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === K.get(e, t) && C.event.add(e, t, ze) }
                C.event = { global: {}, add: function(e, t, n, r, i) { var o, a, s, u, l, c, f, d, p, h, g, v = K.get(e); if (v)
                            for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(ae, i), n.guid || (n.guid = C.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) { return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(O) || [""]).length; l--;) p = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = C.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = C.event.special[p] || {}, c = C.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && C.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), C.event.global[p] = !0) }, remove: function(e, t, n, r, i) { var o, a, s, u, l, c, f, d, p, h, g, v = K.hasData(e) && K.get(e); if (v && (u = v.events)) { for (l = (t = (t || "").match(O) || [""]).length; l--;)
                                if (p = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) { for (f = C.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                                    a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || C.removeEvent(e, p, v.handle), delete u[p]) } else
                                    for (p in u) C.event.remove(e, p + t[l], n, r, !0);
                            C.isEmptyObject(u) && K.remove(e, "handle events") } }, dispatch: function(e) { var t, n, r, i, o, a, s = C.event.fix(e),
                            u = new Array(arguments.length),
                            l = (K.get(this, "events") || {})[s.type] || [],
                            c = C.event.special[s.type] || {}; for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t]; if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) { for (a = C.event.handlers.call(this, s, l), t = 0;
                                (i = a[t++]) && !s.isPropagationStopped();)
                                for (s.currentTarget = i.elem, n = 0;
                                    (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation())); return c.postDispatch && c.postDispatch.call(this, s), s.result } }, handlers: function(e, t) { var n, r, i, o, a, s = [],
                            u = t.delegateCount,
                            l = e.target; if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                            for (; l !== this; l = l.parentNode || this)
                                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? C(i, this).index(l) > -1 : C.find(i, this, null, [l]).length), a[i] && o.push(r);
                                    o.length && s.push({ elem: l, handlers: o }) }
                        return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function(e, t) { Object.defineProperty(C.Event.prototype, e, { enumerable: !0, configurable: !0, get: m(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function(e) { return e[C.expando] ? e : new C.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return ge.test(t.type) && t.click && L(t, "input") && Le(t, "click", ze), !1 }, trigger: function(e) { var t = this || e; return ge.test(t.type) && t.click && L(t, "input") && Le(t, "click"), !0 }, _default: function(e) { var t = e.target; return ge.test(t.type) && t.click && L(t, "input") && K.get(t, "click") || L(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, C.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, C.Event = function(e, t) { if (!(this instanceof C.Event)) return new C.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ze : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0 }, C.Event.prototype = { constructor: C.Event, isDefaultPrevented: Se, isPropagationStopped: Se, isImmediatePropagationStopped: Se, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
                        this.isDefaultPrevented = ze, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
                        this.isPropagationStopped = ze, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
                        this.isImmediatePropagationStopped = ze, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, C.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, C.event.addProp), C.each({ focus: "focusin", blur: "focusout" }, function(e, t) { C.event.special[e] = { setup: function() { return Le(this, e, Ne), !1 }, trigger: function() { return Le(this, e), !0 }, delegateType: t } }), C.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { C.event.special[e] = { delegateType: t, bindType: t, handle: function(e) { var n, r = e.relatedTarget,
                                i = e.handleObj; return r && (r === this || C.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n } } }), C.fn.extend({ on: function(e, t, n, r) { return ke(this, e, t, n, r) }, one: function(e, t, n, r) { return ke(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() { C.event.remove(this, e, n, t) }) } });
                var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                    De = /<script|<style|<link/i,
                    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                function He(e, t) { return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e }

                function _e(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

                function Me(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

                function Oe(e, t) { var n, r, i, o, a, s, u, l; if (1 === t.nodeType) { if (K.hasData(e) && (o = K.access(e), a = K.set(t, o), l = o.events))
                            for (i in delete a.handle, a.events = {}, l)
                                for (n = 0, r = l[i].length; n < r; n++) C.event.add(t, i, l[i][n]);
                        Z.hasData(e) && (s = Z.access(e), u = C.extend({}, s), Z.set(t, u)) } }

                function Re(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

                function Fe(e, t, n, r) { t = l.apply([], t); var i, o, a, s, u, c, f = 0,
                        d = e.length,
                        p = d - 1,
                        h = t[0],
                        g = m(h); if (g || d > 1 && "string" == typeof h && !y.checkClone && Pe.test(h)) return e.each(function(i) { var o = e.eq(i);
                        g && (t[0] = h.call(this, i, o.html())), Fe(o, t, n, r) }); if (d && (o = (i = Ae(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) { for (s = (a = C.map(be(i, "script"), _e)).length; f < d; f++) u = i, f !== p && (u = C.clone(u, !0, !0), s && C.merge(a, be(u, "script"))), n.call(e[f], u, f); if (s)
                            for (c = a[a.length - 1].ownerDocument, C.map(a, Me), f = 0; f < s; f++) u = a[f], ye.test(u.type || "") && !K.access(u, "globalEval") && C.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && !u.noModule && C._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }) : w(u.textContent.replace(qe, ""), u, c)) } return e }

                function Ie(e, t, n) { for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(be(r)), r.parentNode && (n && se(r) && xe(be(r, "script")), r.parentNode.removeChild(r)); return e }
                C.extend({ htmlPrefilter: function(e) { return e.replace(je, "<$1></$2>") }, clone: function(e, t, n) { var r, i, o, a, s = e.cloneNode(!0),
                            u = se(e); if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                            for (a = be(s), r = 0, i = (o = be(e)).length; r < i; r++) Re(o[r], a[r]); if (t)
                            if (n)
                                for (o = o || be(e), a = a || be(s), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                            else Oe(e, s);
                        return (a = be(s, "script")).length > 0 && xe(a, !u && be(e, "script")), s }, cleanData: function(e) { for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (Q(n)) { if (t = n[K.expando]) { if (t.events)
                                        for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                                    n[K.expando] = void 0 }
                                n[Z.expando] && (n[Z.expando] = void 0) } } }), C.fn.extend({ detach: function(e) { return Ie(this, e, !0) }, remove: function(e) { return Ie(this, e) }, text: function(e) { return U(this, function(e) { return void 0 === e ? C.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return Fe(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || He(this, e).appendChild(e) }) }, prepend: function() { return Fe(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = He(this, e);
                                t.insertBefore(e, t.firstChild) } }) }, before: function() { return Fe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return Fe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(be(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return C.clone(this, e, t) }) }, html: function(e) { return U(this, function(e) { var t = this[0] || {},
                                n = 0,
                                r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !De.test(e) && !me[(ve.exec(e) || ["", ""])[1].toLowerCase()]) { e = C.htmlPrefilter(e); try { for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(be(t, !1)), t.innerHTML = e);
                                    t = 0 } catch (e) {} }
                            t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var e = []; return Fe(this, arguments, function(t) { var n = this.parentNode;
                            C.inArray(this, e) < 0 && (C.cleanData(be(this)), n && n.replaceChild(t, this)) }, e) } }), C.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { C.fn[e] = function(e) { for (var n, r = [], i = C(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), C(i[a])[t](n), c.apply(r, n.get()); return this.pushStack(r) } });
                var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
                    Be = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = n), t.getComputedStyle(e) },
                    $e = new RegExp(oe.join("|"), "i");

                function Ue(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = C.style(e, t)), !y.pixelBoxStyles() && We.test(a) && $e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

                function Xe(e, t) { return { get: function() { if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get } } }! function() {
                    function e() { if (c) { l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ae.appendChild(l).appendChild(c); var e = n.getComputedStyle(c);
                            r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), ae.removeChild(l), c = null } }

                    function t(e) { return Math.round(parseFloat(e)) } var r, i, o, s, u, l = a.createElement("div"),
                        c = a.createElement("div");
                    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(y, { boxSizingReliable: function() { return e(), i }, pixelBoxStyles: function() { return e(), s }, pixelPosition: function() { return e(), r }, reliableMarginLeft: function() { return e(), u }, scrollboxSize: function() { return e(), o } })) }();
                var Ve = ["Webkit", "Moz", "ms"],
                    Ge = a.createElement("div").style,
                    Je = {};

                function Qe(e) { return C.cssProps[e] || Je[e] || (e in Ge ? e : Je[e] = function(e) { for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
                            if ((e = Ve[n] + t) in Ge) return e }(e) || e) }
                var Ye = /^(none|table(?!-c[ea]).+)/,
                    Ke = /^--/,
                    Ze = { position: "absolute", visibility: "hidden", display: "block" },
                    et = { letterSpacing: "0", fontWeight: "400" };

                function tt(e, t, n) { var r = ie.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

                function nt(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0,
                        s = 0,
                        u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2) "margin" === n && (u += C.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= C.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= C.css(e, "border" + oe[a] + "Width", !0, i))) : (u += C.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += C.css(e, "border" + oe[a] + "Width", !0, i) : s += C.css(e, "border" + oe[a] + "Width", !0, i)); return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u }

                function rt(e, t, n) { var r = Be(e),
                        i = (!y.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                        o = i,
                        a = Ue(e, t, r),
                        s = "offset" + t[0].toUpperCase() + t.slice(1); if (We.test(a)) { if (!n) return a;
                        a = "auto" } return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === C.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + nt(e, t, n || (i ? "border" : "content"), o, r, a) + "px" }

                function it(e, t, n, r, i) { return new it.prototype.init(e, t, n, r, i) }
                C.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Ue(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = J(t),
                                u = Ke.test(t),
                                l = e.style; if (u || (t = Qe(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = fe(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (C.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function(e, t, n, r) { var i, o, a, s = J(t); return Ke.test(t) || (t = Qe(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ue(e, t, r)), "normal" === i && t in et && (i = et[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), C.each(["height", "width"], function(e, t) { C.cssHooks[t] = { get: function(e, n, r) { if (n) return !Ye.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, r) : ce(e, Ze, function() { return rt(e, t, r) }) }, set: function(e, n, r) { var i, o = Be(e),
                                a = !y.scrollboxSize() && "absolute" === o.position,
                                s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, o),
                                u = r ? nt(e, t, r, s, o) : 0; return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - nt(e, t, "border", !1, o) - .5)), u && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = C.css(e, t)), tt(0, n, u) } } }), C.cssHooks.marginLeft = Xe(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - ce(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), C.each({ margin: "", padding: "", border: "Width" }, function(e, t) { C.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, "margin" !== e && (C.cssHooks[e + t].set = tt) }), C.fn.extend({ css: function(e, t) { return U(this, function(e, t, n) { var r, i, o = {},
                                a = 0; if (Array.isArray(t)) { for (r = Be(e), i = t.length; a < i; a++) o[t[a]] = C.css(e, t[a], !1, r); return o } return void 0 !== n ? C.style(e, t, n) : C.css(e, t) }, e, t, arguments.length > 1) } }), C.Tween = it, it.prototype = { constructor: it, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px") }, cur: function() { var e = it.propHooks[this.prop]; return e && e.get ? e.get(this) : it.propHooks._default.get(this) }, run: function(e) { var t, n = it.propHooks[this.prop]; return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : it.propHooks._default.set(this), this } }, it.prototype.init.prototype = it.prototype, it.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit) } } }, it.propHooks.scrollTop = it.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, C.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, C.fx = it.prototype.init, C.fx.step = {};
                var ot, at, st = /^(?:toggle|show|hide)$/,
                    ut = /queueHooks$/;

                function lt() { at && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(lt) : n.setTimeout(lt, C.fx.interval), C.fx.tick()) }

                function ct() { return n.setTimeout(function() { ot = void 0 }), ot = Date.now() }

                function ft(e, t) { var n, r = 0,
                        i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i }

                function dt(e, t, n) { for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                        if (r = i[o].call(n, t, e)) return r }

                function pt(e, t, n) { var r, i, o = 0,
                        a = pt.prefilters.length,
                        s = C.Deferred().always(function() { delete u.elem }),
                        u = function() { if (i) return !1; for (var t = ot || ct(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) },
                        l = s.promise({ elem: e, props: C.extend({}, t), opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, n), originalProperties: t, originalOptions: n, startTime: ot || ct(), duration: n.duration, tweens: [], createTween: function(t, n) { var r = C.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r }, stop: function(t) { var n = 0,
                                    r = t ? l.tweens.length : 0; if (i) return this; for (i = !0; n < r; n++) l.tweens[n].run(1); return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this } }),
                        c = l.props; for (function(e, t) { var n, r, i, o, a; for (n in e)
                                if (i = t[r = J(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = C.cssHooks[r]) && "expand" in a)
                                    for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                                else t[r] = i }(c, l.opts.specialEasing); o < a; o++)
                        if (r = pt.prefilters[o].call(l, e, c, l.opts)) return m(r.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                    return C.map(c, dt, l), m(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), C.fx.timer(C.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l }
                C.Animation = C.extend(pt, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return fe(n.elem, e, ie.exec(t), n), n }] }, tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(O); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t) }, prefilters: [function(e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                                d = this,
                                p = {},
                                h = e.style,
                                g = e.nodeType && le(e),
                                v = K.get(e, "fxshow"); for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, d.always(function() { d.always(function() { a.unqueued--, C.queue(e, "fx").length || a.empty.fire() }) })), t)
                                if (i = t[r], st.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue;
                                        g = !0 }
                                    p[r] = v && v[r] || C.style(e, r) }
                            if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = K.get(e, "display")), "none" === (c = C.css(e, "display")) && (l ? c = l : (he([e], !0), l = e.style.display || l, c = C.css(e, "display"), he([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === C.css(e, "float") && (u || (d.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, p) u || (v ? "hidden" in v && (g = v.hidden) : v = K.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && he([e], !0), d.done(function() { for (r in g || he([e]), K.remove(e, "fxshow"), p) C.style(e, r, p[r]) })), u = dt(g ? v[r] : 0, r, d), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function(e, t) { t ? pt.prefilters.unshift(e) : pt.prefilters.push(e) } }), C.speed = function(e, t, n) { var r = e && "object" == typeof e ? C.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue) }, r }, C.fn.extend({ fadeTo: function(e, t, n, r) { return this.filter(le).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(e, t, n, r) { var i = C.isEmptyObject(e),
                                o = C.speed(t, n, r),
                                a = function() { var t = pt(this, C.extend({}, e), o);
                                    (i || K.get(this, "finish")) && t.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function(e, t, n) { var r = function(e) { var t = e.stop;
                                delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() { var t = !0,
                                    i = null != e && e + "queueHooks",
                                    o = C.timers,
                                    a = K.get(this); if (i) a[i] && a[i].stop && r(a[i]);
                                else
                                    for (i in a) a[i] && a[i].stop && ut.test(i) && r(a[i]); for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));!t && n || C.dequeue(this, e) }) }, finish: function(e) { return !1 !== e && (e = e || "fx"), this.each(function() { var t, n = K.get(this),
                                    r = n[e + "queue"],
                                    i = n[e + "queueHooks"],
                                    o = C.timers,
                                    a = r ? r.length : 0; for (n.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                delete n.finish }) } }), C.each(["toggle", "show", "hide"], function(e, t) { var n = C.fn[t];
                        C.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, r, i) } }), C.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { C.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), C.timers = [], C.fx.tick = function() { var e, t = 0,
                            n = C.timers; for (ot = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                        n.length || C.fx.stop(), ot = void 0 }, C.fx.timer = function(e) { C.timers.push(e), C.fx.start() }, C.fx.interval = 13, C.fx.start = function() { at || (at = !0, lt()) }, C.fx.stop = function() { at = null }, C.fx.speeds = { slow: 600, fast: 200, _default: 400 }, C.fn.delay = function(e, t) { return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) { var i = n.setTimeout(t, e);
                            r.stop = function() { n.clearTimeout(i) } }) },
                    function() { var e = a.createElement("input"),
                            t = a.createElement("select").appendChild(a.createElement("option"));
                        e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", y.radioValue = "t" === e.value }();
                var ht, gt = C.expr.attrHandle;
                C.fn.extend({ attr: function(e, t) { return U(this, C.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { C.removeAttr(this, e) }) } }), C.extend({ attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && L(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, r = 0,
                            i = t && t.match(O); if (i && 1 === e.nodeType)
                            for (; n = i[r++];) e.removeAttribute(n) } }), ht = { set: function(e, t, n) { return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n } }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) { var n = gt[t] || C.find.attr;
                    gt[t] = function(e, t, r) { var i, o, a = t.toLowerCase(); return r || (o = gt[a], gt[a] = i, i = null != n(e, t, r) ? a : null, gt[a] = o), i } });
                var vt = /^(?:input|select|textarea|button)$/i,
                    yt = /^(?:a|area)$/i;

                function mt(e) { return (e.match(O) || []).join(" ") }

                function bt(e) { return e.getAttribute && e.getAttribute("class") || "" }

                function xt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || [] }
                C.fn.extend({ prop: function(e, t) { return U(this, C.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[C.propFix[e] || e] }) } }), C.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = C.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), y.optSelected || (C.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { C.propFix[this.toLowerCase()] = this }), C.fn.extend({ addClass: function(e) { var t, n, r, i, o, a, s, u = 0; if (m(e)) return this.each(function(t) { C(this).addClass(e.call(this, t, bt(this))) }); if ((t = xt(e)).length)
                            for (; n = this[u++];)
                                if (i = bt(n), r = 1 === n.nodeType && " " + mt(i) + " ") { for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                    i !== (s = mt(r)) && n.setAttribute("class", s) }
                        return this }, removeClass: function(e) { var t, n, r, i, o, a, s, u = 0; if (m(e)) return this.each(function(t) { C(this).removeClass(e.call(this, t, bt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((t = xt(e)).length)
                            for (; n = this[u++];)
                                if (i = bt(n), r = 1 === n.nodeType && " " + mt(i) + " ") { for (a = 0; o = t[a++];)
                                        for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                    i !== (s = mt(r)) && n.setAttribute("class", s) }
                        return this }, toggleClass: function(e, t) { var n = typeof e,
                            r = "string" === n || Array.isArray(e); return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function(n) { C(this).toggleClass(e.call(this, n, bt(this), t), t) }) : this.each(function() { var t, i, o, a; if (r)
                                for (i = 0, o = C(this), a = xt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                            else void 0 !== e && "boolean" !== n || ((t = bt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, r = 0; for (t = " " + e + " "; n = this[r++];)
                            if (1 === n.nodeType && (" " + mt(bt(n)) + " ").indexOf(t) > -1) return !0;
                        return !1 } });
                var wt = /\r/g;
                C.fn.extend({ val: function(e) { var t, n, r, i = this[0]; return arguments.length ? (r = m(e), this.each(function(n) { var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, function(e) { return null == e ? "" : e + "" })), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i)) })) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(wt, "") : null == n ? "" : n : void 0 } }), C.extend({ valHooks: { option: { get: function(e) { var t = C.find.attr(e, "value"); return null != t ? t : mt(C.text(e)) } }, select: { get: function(e) { var t, n, r, i = e.options,
                                    o = e.selectedIndex,
                                    a = "select-one" === e.type,
                                    s = a ? null : [],
                                    u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                    if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) { if (t = C(n).val(), a) return t;
                                        s.push(t) }
                                return s }, set: function(e, t) { for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--;)((r = i[a]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), C.each(["radio", "checkbox"], function() { C.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1 } }, y.checkOn || (C.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in n;
                var At = /^(?:focusinfocus|focusoutblur)$/,
                    Ct = function(e) { e.stopPropagation() };
                C.extend(C.event, { trigger: function(e, t, r, i) { var o, s, u, l, c, f, d, p, g = [r || a],
                            v = h.call(e, "type") ? e.type : e,
                            y = h.call(e, "namespace") ? e.namespace.split(".") : []; if (s = p = u = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !At.test(v + C.event.triggered) && (v.indexOf(".") > -1 && (v = (y = v.split(".")).shift(), y.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[C.expando] ? e : new C.Event(v, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), d = C.event.special[v] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, t))) { if (!i && !d.noBubble && !b(r)) { for (l = d.delegateType || v, At.test(l + v) || (s = s.parentNode); s; s = s.parentNode) g.push(s), u = s;
                                u === (r.ownerDocument || a) && g.push(u.defaultView || u.parentWindow || n) } for (o = 0;
                                (s = g[o++]) && !e.isPropagationStopped();) p = s, e.type = o > 1 ? l : d.bindType || v, (f = (K.get(s, "events") || {})[e.type] && K.get(s, "handle")) && f.apply(s, t), (f = c && s[c]) && f.apply && Q(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault()); return e.type = v, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), t) || !Q(r) || c && m(r[v]) && !b(r) && ((u = r[c]) && (r[c] = null), C.event.triggered = v, e.isPropagationStopped() && p.addEventListener(v, Ct), r[v](), e.isPropagationStopped() && p.removeEventListener(v, Ct), C.event.triggered = void 0, u && (r[c] = u)), e.result } }, simulate: function(e, t, n) { var r = C.extend(new C.Event, n, { type: e, isSimulated: !0 });
                        C.event.trigger(r, null, t) } }), C.fn.extend({ trigger: function(e, t) { return this.each(function() { C.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return C.event.trigger(e, t, n, !0) } }), y.focusin || C.each({ focus: "focusin", blur: "focusout" }, function(e, t) { var n = function(e) { C.event.simulate(t, e.target, C.event.fix(e)) };
                    C.event.special[t] = { setup: function() { var r = this.ownerDocument || this,
                                i = K.access(r, t);
                            i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1) }, teardown: function() { var r = this.ownerDocument || this,
                                i = K.access(r, t) - 1;
                            i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0), K.remove(r, t)) } } });
                var Tt = n.location,
                    Et = Date.now(),
                    zt = /\?/;
                C.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new n.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t };
                var St = /\[\]$/,
                    Nt = /\r?\n/g,
                    kt = /^(?:submit|button|image|reset|file)$/i,
                    Lt = /^(?:input|select|textarea|keygen)/i;

                function jt(e, t, n, r) { var i; if (Array.isArray(t)) C.each(t, function(t, i) { n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r) });
                    else if (n || "object" !== A(t)) r(e, t);
                    else
                        for (i in t) jt(e + "[" + i + "]", t[i], n, r) }
                C.param = function(e, t) { var n, r = [],
                        i = function(e, t) { var n = m(t) ? t() : t;
                            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() { i(this.name, this.value) });
                    else
                        for (n in e) jt(n, e[n], t, i); return r.join("&") }, C.fn.extend({ serialize: function() { return C.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = C.prop(this, "elements"); return e ? C.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !C(this).is(":disabled") && Lt.test(this.nodeName) && !kt.test(e) && (this.checked || !ge.test(e)) }).map(function(e, t) { var n = C(this).val(); return null == n ? null : Array.isArray(n) ? C.map(n, function(e) { return { name: t.name, value: e.replace(Nt, "\r\n") } }) : { name: t.name, value: n.replace(Nt, "\r\n") } }).get() } });
                var Dt = /%20/g,
                    Pt = /#.*$/,
                    qt = /([?&])_=[^&]*/,
                    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    _t = /^(?:GET|HEAD)$/,
                    Mt = /^\/\//,
                    Ot = {},
                    Rt = {},
                    Ft = "*/".concat("*"),
                    It = a.createElement("a");

                function Wt(e) { return function(t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0,
                            o = t.toLowerCase().match(O) || []; if (m(n))
                            for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } }

                function Bt(e, t, n, r) { var i = {},
                        o = e === Rt;

                    function a(s) { var u; return i[s] = !0, C.each(e[s] || [], function(e, s) { var l = s(t, n, r); return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1) }), u } return a(t.dataTypes[0]) || !i["*"] && a("*") }

                function $t(e, t) { var n, r, i = C.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && C.extend(!0, e, r), e }
                It.href = Tt.href, C.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ft, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? $t($t(e, C.ajaxSettings), t) : $t(C.ajaxSettings, e) }, ajaxPrefilter: Wt(Ot), ajaxTransport: Wt(Rt), ajax: function(e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var r, i, o, s, u, l, c, f, d, p, h = C.ajaxSetup({}, t),
                            g = h.context || h,
                            v = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                            y = C.Deferred(),
                            m = C.Callbacks("once memory"),
                            b = h.statusCode || {},
                            x = {},
                            w = {},
                            A = "canceled",
                            T = { readyState: 0, getResponseHeader: function(e) { var t; if (c) { if (!s)
                                            for (s = {}; t = Ht.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = s[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function() { return c ? o : null }, setRequestHeader: function(e, t) { return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this }, overrideMimeType: function(e) { return null == c && (h.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                                        if (c) T.always(e[T.status]);
                                        else
                                            for (t in e) b[t] = [b[t], e[t]];
                                    return this }, abort: function(e) { var t = e || A; return r && r.abort(t), E(0, t), this } }; if (y.promise(T), h.url = ((e || h.url || Tt.href) + "").replace(Mt, Tt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(O) || [""], null == h.crossDomain) { l = a.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = It.protocol + "//" + It.host != l.protocol + "//" + l.host } catch (e) { h.crossDomain = !0 } } if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), Bt(Ot, h, t, T), c) return T; for (d in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !_t.test(h.type), i = h.url.replace(Pt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Dt, "+")) : (p = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (zt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(qt, "$1"), p = (zt.test(i) ? "&" : "?") + "_=" + Et++ + p), h.url = i + p), h.ifModified && (C.lastModified[i] && T.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && T.setRequestHeader("If-None-Match", C.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]), h.headers) T.setRequestHeader(d, h.headers[d]); if (h.beforeSend && (!1 === h.beforeSend.call(g, T, h) || c)) return T.abort(); if (A = "abort", m.add(h.complete), T.done(h.success), T.fail(h.error), r = Bt(Rt, h, t, T)) { if (T.readyState = 1, f && v.trigger("ajaxSend", [T, h]), c) return T;
                            h.async && h.timeout > 0 && (u = n.setTimeout(function() { T.abort("timeout") }, h.timeout)); try { c = !1, r.send(x, E) } catch (e) { if (c) throw e;
                                E(-1, e) } } else E(-1, "No Transport");

                        function E(e, t, a, s) { var l, d, p, x, w, A = t;
                            c || (c = !0, u && n.clearTimeout(u), r = void 0, o = s || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, a && (x = function(e, t, n) { for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                    "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) { u.unshift(i); break }
                                if (u[0] in n) o = u[0];
                                else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                                        a || (a = i) }
                                    o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(h, T, a)), x = function(e, t, n, r) { var i, o, a, s, u, l = {},
                                    c = e.dataTypes.slice(); if (c[1])
                                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; for (o = c.shift(); o;)
                                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                        if ("*" === o) o = u;
                                        else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o]))
                                        for (i in l)
                                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                                    if (!0 !== a)
                                        if (a && e.throws) t = a(t);
                                        else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(h, x, T, l), l ? (h.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w), (w = T.getResponseHeader("etag")) && (C.etag[i] = w)), 204 === e || "HEAD" === h.type ? A = "nocontent" : 304 === e ? A = "notmodified" : (A = x.state, d = x.data, l = !(p = x.error))) : (p = A, !e && A || (A = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || A) + "", l ? y.resolveWith(g, [d, A, T]) : y.rejectWith(g, [T, A, p]), T.statusCode(b), b = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [T, h, l ? d : p]), m.fireWith(g, [T, A]), f && (v.trigger("ajaxComplete", [T, h]), --C.active || C.event.trigger("ajaxStop"))) } return T }, getJSON: function(e, t, n) { return C.get(e, t, n, "json") }, getScript: function(e, t) { return C.get(e, void 0, t, "script") } }), C.each(["get", "post"], function(e, t) { C[t] = function(e, n, r, i) { return m(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({ url: e, type: t, dataType: i, data: n, success: r }, C.isPlainObject(e) && e)) } }), C._evalUrl = function(e, t) { return C.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { C.globalEval(e, t) } }) }, C.fn.extend({ wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(e) { return m(e) ? this.each(function(t) { C(this).wrapInner(e.call(this, t)) }) : this.each(function() { var t = C(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) { var t = m(e); return this.each(function(n) { C(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { C(this).replaceWith(this.childNodes) }), this } }), C.expr.pseudos.hidden = function(e) { return !C.expr.pseudos.visible(e) }, C.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, C.ajaxSettings.xhr = function() { try { return new n.XMLHttpRequest } catch (e) {} };
                var Ut = { 0: 200, 1223: 204 },
                    Xt = C.ajaxSettings.xhr();
                y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, C.ajaxTransport(function(e) { var t, r; if (y.cors || Xt && !e.crossDomain) return { send: function(i, o) { var a, s = e.xhr(); if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (a in e.xhrFields) s[a] = e.xhrFields[a]; for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                            t = function(e) { return function() { t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() { 4 === s.readyState && n.setTimeout(function() { t && r() }) }, t = t("abort"); try { s.send(e.hasContent && e.data || null) } catch (e) { if (t) throw e } }, abort: function() { t && t() } } }), C.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), C.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return C.globalEval(e), e } } }), C.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), C.ajaxTransport("script", function(e) { var t, n; if (e.crossDomain || e.scriptAttrs) return { send: function(r, i) { t = C("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type) }), a.head.appendChild(t[0]) }, abort: function() { n && n() } } });
                var Vt = [],
                    Gt = /(=)\?(?=&|$)|\?\?/;
                C.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Vt.pop() || C.expando + "_" + Et++; return this[e] = !0, e } }), C.ajaxPrefilter("json jsonp", function(e, t, r) { var i, o, a, s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data"); if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (zt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() { return a || C.error(i + " was not called"), a[0] }, e.dataTypes[0] = "json", o = n[i], n[i] = function() { a = arguments }, r.always(function() { void 0 === o ? C(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Vt.push(i)), a && m(o) && o(a[0]), a = o = void 0 }), "script" }), y.createHTMLDocument = function() { var e = a.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), C.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), o = !n && [], (i = j.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes))); var r, i, o }, C.fn.load = function(e, t, n) { var r, i, o, a = this,
                        s = e.indexOf(" "); return s > -1 && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && C.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { C.fn[t] = function(e) { return this.on(t, e) } }), C.expr.pseudos.animated = function(e) { return C.grep(C.timers, function(t) { return e === t.elem }).length }, C.offset = { setOffset: function(e, t, n) { var r, i, o, a, s, u, l = C.css(e, "position"),
                            c = C(e),
                            f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = C.css(e, "top"), u = C.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, C.fn.extend({ offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { C.offset.setOffset(this, e, t) }); var t, n, r = this[0]; return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var e, t, n, r = this[0],
                                i = { top: 0, left: 0 }; if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                            else { for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - C.css(r, "marginTop", !0), left: t.left - i.left - C.css(r, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent; return e || ae }) } }), C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) { var n = "pageYOffset" === t;
                    C.fn[e] = function(r) { return U(this, function(e, r, i) { var o; if (b(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i }, e, r, arguments.length) } }), C.each(["top", "left"], function(e, t) { C.cssHooks[t] = Xe(y.pixelPosition, function(e, n) { if (n) return n = Ue(e, t), We.test(n) ? C(e).position()[t] + "px" : n }) }), C.each({ Height: "height", Width: "width" }, function(e, t) { C.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) { C.fn[r] = function(i, o) { var a = arguments.length && (n || "boolean" != typeof i),
                                s = n || (!0 === i || !0 === o ? "margin" : "border"); return U(this, function(t, n, i) { var o; return b(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, n, s) : C.style(t, n, i, s) }, t, a ? i : void 0, a) } }) }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { C.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), C.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), C.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), C.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = u.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(u.call(arguments))) }).guid = e.guid = e.guid || C.guid++, i }, C.holdReady = function(e) { e ? C.readyWait++ : C.ready(!0) }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = L, C.isFunction = m, C.isWindow = b, C.camelCase = J, C.type = A, C.now = Date.now, C.isNumeric = function(e) { var t = C.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, void 0 === (r = function() { return C }.apply(t, [])) || (e.exports = r);
                var Jt = n.jQuery,
                    Qt = n.$;
                return C.noConflict = function(e) { return n.$ === C && (n.$ = Qt), e && n.jQuery === C && (n.jQuery = Jt), C }, i || (n.jQuery = n.$ = C), C
            })
        },
        30: function(e, t, n) { "use strict";

            function r(e, t) { var n = (t = t || {}).className || "js-focus-hidden",
                    r = e.tabIndex;
                e.tabIndex = -1, e.dataset.tabIndex = r, e.focus(), e.classList.add(n), e.addEventListener("blur", function t(i) { i.target.removeEventListener(i.type, t), e.tabIndex = r, delete e.dataset.tabIndex, e.classList.remove(n) }) }

            function i() { var e = window.location.hash,
                    t = document.getElementById(e.slice(1));
                e && t && r(t) }

            function o() { return Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).filter(function(e) { if ("#" === e.hash || "" === e.hash) return !1; var t = document.querySelector(e.hash); return !!t && (e.addEventListener("click", function() { r(t) }), !0) }) }

            function a(e) { return Array.from(e.querySelectorAll("[tabindex],[draggable],a[href],area,button:enabled,input:not([type=hidden]):enabled,object,select:enabled,textarea:enabled")).filter(function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }) }
            n.r(t), n.d(t, "pageLinkFocus", function() { return r }), n.d(t, "focusHash", function() { return i }), n.d(t, "bindInPageLinks", function() { return o }), n.d(t, "focusable", function() { return a }), n.d(t, "trapFocus", function() { return u }), n.d(t, "removeTrapFocus", function() { return l }); var s = {};

            function u(e, t) { t = t || e; var n = a(e),
                    i = n[0],
                    o = n[n.length - 1];
                l(), s.focusin = function(t) { e === t.target || e.contains(t.target) || i.focus(), t.target !== e && t.target !== o && t.target !== i || document.addEventListener("keydown", s.keydown) }, s.focusout = function() { document.removeEventListener("keydown", s.keydown) }, s.keydown = function(t) { 9 === t.keyCode && (t.target !== o || t.shiftKey || (t.preventDefault(), i.focus()), t.target !== e && t.target !== i || !t.shiftKey || (t.preventDefault(), o.focus())) }, document.addEventListener("focusout", s.focusout), document.addEventListener("focusin", s.focusin), r(t) }

            function l() { document.removeEventListener("focusin", s.focusin), document.removeEventListener("focusout", s.focusout), document.removeEventListener("keydown", s.keydown) } },
        50: function(e, t, n) {! function(t, r) { var i = function(e) { r(t.lazySizes, e), t.removeEventListener("lazyunveilread", i, !0) };
                r = r.bind(null, t, t.document), e.exports ? r(n(6)) : t.lazySizes ? i() : t.addEventListener("lazyunveilread", i, !0) }(window, function(e, t, n, r) { "use strict"; var i = t.createElement("a").style,
                    o = "objectFit" in i,
                    a = /object-fit["']*\s*:\s*["']*(contain|cover)/,
                    s = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,
                    u = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    l = /\(|\)|'/,
                    c = { center: "center", "50% 50%": "center" }; if (!o || !(o && "objectPosition" in i)) { var f = function(e) { if (e.detail.instance == n) { var t = e.target,
                                r = function(e) { var t = (getComputedStyle(e, null) || {}).fontFamily || "",
                                        n = t.match(a) || "",
                                        r = n && t.match(s) || ""; return r && (r = r[1]), { fit: n && n[1] || "", position: c[r] || r || "center" } }(t);!r.fit || o && "center" == r.position || function(e, t) { var r, i, o = n.cfg,
                                    a = e.cloneNode(!1),
                                    s = a.style,
                                    c = function() { var t = e.currentSrc || e.src;
                                        t && i !== t && (i = t, s.backgroundImage = "url(" + (l.test(t) ? JSON.stringify(t) : t) + ")", r || (r = !0, n.rC(a, o.loadingClass), n.aC(a, o.loadedClass))) },
                                    f = function() { n.rAF(c) };
                                e._lazysizesParentFit = t.fit, e.addEventListener("lazyloaded", f, !0), e.addEventListener("load", f, !0), a.addEventListener("load", function() { var e = a.currentSrc || a.src;
                                    e && e != u && (a.src = u, a.srcset = "") }), n.rAF(function() { var r = e,
                                        i = e.parentNode; "PICTURE" == i.nodeName.toUpperCase() && (r = i, i = i.parentNode), n.rC(a, o.loadedClass), n.rC(a, o.lazyClass), n.aC(a, o.loadingClass), n.aC(a, o.objectFitClass || "lazysizes-display-clone"), a.getAttribute(o.srcsetAttr) && a.setAttribute(o.srcsetAttr, ""), a.getAttribute(o.srcAttr) && a.setAttribute(o.srcAttr, ""), a.src = u, a.srcset = "", s.backgroundRepeat = "no-repeat", s.backgroundPosition = t.position, s.backgroundSize = t.fit, r.style.display = "none", e.setAttribute("data-parent-fit", t.fit), e.setAttribute("data-parent-container", "prev"), i.insertBefore(a, r), e._lazysizesParentFit && delete e._lazysizesParentFit, e.complete && c() }) }(t, r) } };
                    e.addEventListener("lazyunveilread", f, !0), r && r.detail && f(r) } }) },
        51: function(e, t, n) {! function(t, r) { var i = function() { r(t.lazySizes), t.removeEventListener("lazyunveilread", i, !0) };
                r = r.bind(null, t, t.document), e.exports ? r(n(6)) : t.lazySizes ? i() : t.addEventListener("lazyunveilread", i, !0) }(window, function(e, t, n) { "use strict"; if (e.addEventListener) { var r = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                        i = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
                        o = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
                        a = /^picture$/i,
                        s = { getParent: function(t, n) { var r = t,
                                    i = t.parentNode; return n && "prev" != n || !i || !a.test(i.nodeName || "") || (i = i.parentNode), "self" != n && (r = "prev" == n ? t.previousElementSibling : n && (i.closest || e.jQuery) && (i.closest ? i.closest(n) : jQuery(i).closest(n)[0]) || i), r }, getFit: function(e) { var t, n, r = function(e) { return getComputedStyle(e, null) || {} }(e),
                                    a = r.content || r.fontFamily,
                                    u = { fit: e._lazysizesParentFit || e.getAttribute("data-parent-fit") }; return !u.fit && a && (t = a.match(i)) && (u.fit = t[1]), u.fit ? (!(n = e._lazysizesParentContainer || e.getAttribute("data-parent-container")) && a && (t = a.match(o)) && (n = t[1]), u.parent = s.getParent(e, n)) : u.fit = r.objectFit, u }, getImageRatio: function(t) { var n, i, o, s, u, l = t.parentNode,
                                    c = l && a.test(l.nodeName || "") ? l.querySelectorAll("source, img") : [t]; for (n = 0; n < c.length; n++)
                                    if (i = (t = c[n]).getAttribute(lazySizesConfig.srcsetAttr) || t.getAttribute("srcset") || t.getAttribute("data-pfsrcset") || t.getAttribute("data-risrcset") || "", o = t._lsMedia || t.getAttribute("media"), o = lazySizesConfig.customMedia[t.getAttribute("data-media") || o] || o, i && (!o || (e.matchMedia && matchMedia(o) || {}).matches)) {!(s = parseFloat(t.getAttribute("data-aspectratio"))) && (u = i.match(r)) && (s = "w" == u[2] ? u[1] / u[3] : u[3] / u[1]); break }
                                return s }, calculateSize: function(e, t) { var n, r, i, o, a = this.getFit(e),
                                    s = a.fit,
                                    u = a.parent; return "width" == s || ("contain" == s || "cover" == s) && (i = this.getImageRatio(e)) ? (u ? t = u.clientWidth : u = e, o = t, "width" == s ? o = t : (r = u.clientHeight) > 40 && (n = t / r) && ("cover" == s && n < i || "contain" == s && n > i) && (o = t * (i / n)), o) : t } };
                    n.parentFit = s, t.addEventListener("lazybeforesizes", function(e) { if (!e.defaultPrevented && e.detail.instance == n) { var t = e.target;
                            e.detail.width = s.calculateSize(t, e.detail.width) } }) } }) },
        52: function(e, t, n) {! function(t, r) { var i = function() { r(t.lazySizes), t.removeEventListener("lazyunveilread", i, !0) };
                r = r.bind(null, t, t.document), e.exports ? r(n(6)) : t.lazySizes ? i() : t.addEventListener("lazyunveilread", i, !0) }(window, function(e, t, n) { "use strict"; var r, i, o = { string: 1, number: 1 },
                    a = /^\-*\+*\d+\.*\d*$/,
                    s = /^picture$/i,
                    u = /\s*\{\s*width\s*\}\s*/i,
                    l = /\s*\{\s*height\s*\}\s*/i,
                    c = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,
                    f = /^\[.*\]|\{.*\}$/,
                    d = /^(?:auto|\d+(px)?)$/,
                    p = t.createElement("a"),
                    h = t.createElement("img"),
                    g = "srcset" in h && !("sizes" in h),
                    v = !!e.HTMLPictureElement && !g;

                function y(e, n, a) { var s = 0,
                        f = 0,
                        d = a; if (e) { if ("container" === n.ratio) { for (s = d.scrollWidth, f = d.scrollHeight; !(s && f || d === t);) s = (d = d.parentNode).scrollWidth, f = d.scrollHeight;
                            s && f && (n.ratio = f / s) }(e = function(e, t) { var n = []; return n.srcset = [], t.absUrl && (p.setAttribute("href", e), e = p.href), e = ((t.prefix || "") + e + (t.postfix || "")).replace(c, function(e, n) { return o[typeof t[n]] ? t[n] : e }), t.widths.forEach(function(r) { var o = t.widthmap[r] || r,
                                    a = t.aspectratio || t.ratio,
                                    s = !t.aspectratio && i.traditionalRatio,
                                    c = { u: e.replace(u, o).replace(l, a ? s ? Math.round(r * a) : Math.round(r / a) : ""), w: r };
                                n.push(c), n.srcset.push(c.c = c.u + " " + r + "w") }), n }(e, n)).isPicture = n.isPicture, g && "IMG" == a.nodeName.toUpperCase() ? a.removeAttribute(r.srcsetAttr) : a.setAttribute(r.srcsetAttr, e.srcset.join(", ")), Object.defineProperty(a, "_lazyrias", { value: e, writable: !0 }) } }

                function m(t, r) { var o = function(t, n) { var r, o, u, l, d = e.getComputedStyle(t); for (r in o = t.parentNode, l = { isPicture: !(!o || !s.test(o.nodeName || "")) }, u = function(e, n) { var r = t.getAttribute("data-" + e); if (!r) { var o = d.getPropertyValue("--ls-" + e);
                                    o && (r = o.trim()) } if (r) { if ("true" == r) r = !0;
                                    else if ("false" == r) r = !1;
                                    else if (a.test(r)) r = parseFloat(r);
                                    else if ("function" == typeof i[e]) r = i[e](t, r);
                                    else if (f.test(r)) try { r = JSON.parse(r) } catch (e) {}
                                    l[e] = r } else e in i && "function" != typeof i[e] ? l[e] = i[e] : n && "function" == typeof i[e] && (l[e] = i[e](t, r)) }, i) u(r); return n.replace(c, function(e, t) { t in l || u(t, !0) }), l }(t, r); return i.modifyOptions.call(t, { target: t, details: o, detail: o }), n.fire(t, "lazyriasmodifyoptions", o), o }

                function b(e) { return e.getAttribute(e.getAttribute("data-srcattr") || i.srcAttr) || e.getAttribute(r.srcsetAttr) || e.getAttribute(r.srcAttr) || e.getAttribute("data-pfsrcset") || "" }! function() { var t, o = { prefix: "", postfix: "", srcAttr: "data-src", absUrl: !1, modifyOptions: function() {}, widthmap: {}, ratio: !1, traditionalRatio: !1, aspectratio: !1 }; for (t in (r = n && n.cfg || e.lazySizesConfig) || (r = {}, e.lazySizesConfig = r), r.supportsType || (r.supportsType = function(e) { return !e }), r.rias || (r.rias = {}), "widths" in (i = r.rias) || (i.widths = [], function(e) { for (var t, n = 0; !t || t < 3e3;)(n += 5) > 30 && (n += 1), t = 36 * n, e.push(t) }(i.widths)), o) t in i || (i[t] = o[t]) }(), addEventListener("lazybeforesizes", function(e) { var t, o, a, s, l, c, f, p, h, g, w, A, C; if (e.detail.instance == n && (t = e.target, e.detail.dataAttr && !e.defaultPrevented && !i.disabled && (h = t.getAttribute(r.sizesAttr) || t.getAttribute("sizes")) && d.test(h))) { if (a = m(t, o = b(t)), w = u.test(a.prefix) || u.test(a.postfix), a.isPicture && (s = t.parentNode))
                            for (c = 0, f = (l = s.getElementsByTagName("source")).length; c < f; c++)(w || u.test(p = b(l[c]))) && (y(p, a, l[c]), A = !0);
                        w || u.test(o) ? (y(o, a, t), A = !0) : A && ((C = []).srcset = [], C.isPicture = !0, Object.defineProperty(t, "_lazyrias", { value: C, writable: !0 })), A && (v ? t.removeAttribute(r.srcAttr) : "auto" != h && (g = { width: parseInt(h, 10) }, x({ target: t, detail: g }))) } }, !0); var x = function() { var i = function(e, t) { return e.w - t.w },
                        o = function(e, t) { var i; return !e._lazyrias && n.pWS && (i = n.pWS(e.getAttribute(r.srcsetAttr || ""))).length && (Object.defineProperty(e, "_lazyrias", { value: i, writable: !0 }), t && e.parentNode && (i.isPicture = "PICTURE" == e.parentNode.nodeName.toUpperCase())), e._lazyrias },
                        a = function(t, r) { var a, s, u, l, c, f; if ((c = t._lazyrias).isPicture && e.matchMedia)
                                for (s = 0, u = (a = t.parentNode.getElementsByTagName("source")).length; s < u; s++)
                                    if (o(a[s]) && !a[s].getAttribute("type") && (!(l = a[s].getAttribute("media")) || (matchMedia(l) || {}).matches)) { c = a[s]._lazyrias; break }
                            return (!c.w || c.w < r) && (c.w = r, c.d = function(t) { var r = e.devicePixelRatio || 1,
                                    i = n.getX && n.getX(t); return Math.min(i || r, 2.4, r) }(t), f = function(e) { for (var t, n, r = e.length, i = e[r - 1], o = 0; o < r; o++)
                                    if ((i = e[o]).d = i.w / e.w, i.d >= e.d) {!i.cached && (t = e[o - 1]) && t.d > e.d - .13 * Math.pow(e.d, 2.2) && (n = Math.pow(t.d - .6, 1.6), t.cached && (t.d += .15 * n), t.d + (i.d - e.d) * n > e.d && (i = t)); break }
                                return i }(c.sort(i))), f },
                        s = function(i) { if (i.detail.instance == n) { var u, l = i.target;
                                g || !(e.respimage || e.picturefill || lazySizesConfig.pf) ? ("_lazyrias" in l || i.detail.dataAttr && o(l, !0)) && (u = a(l, i.detail.width)) && u.u && l._lazyrias.cur != u.u && (l._lazyrias.cur = u.u, u.cached = !0, n.rAF(function() { l.setAttribute(r.srcAttr, u.u), l.setAttribute("src", u.u) })) : t.removeEventListener("lazybeforesizes", s) } }; return v ? s = function() {} : addEventListener("lazybeforesizes", s), s }() }) },
        53: function(e, t, n) {! function(t, r) { var i = function() { r(t.lazySizes), t.removeEventListener("lazyunveilread", i, !0) };
                r = r.bind(null, t, t.document), e.exports ? r(n(6)) : t.lazySizes ? i() : t.addEventListener("lazyunveilread", i, !0) }(window, function(e, t, n) { "use strict"; if (e.addEventListener) { var r = /\s+/g,
                        i = /\s*\|\s+|\s+\|\s*/g,
                        o = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,
                        a = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,
                        s = /\(|\)|'/,
                        u = { contain: 1, cover: 1 },
                        l = function(e, t) { if (t) { var n = t.match(a);
                                n && n[1] ? e.setAttribute("type", n[1]) : e.setAttribute("media", lazySizesConfig.customMedia[t] || t) } },
                        c = function(e) { if (e.target._lazybgset) { var t = e.target,
                                    r = t._lazybgset,
                                    i = t.currentSrc || t.src; if (i) { var o = n.fire(r, "bgsetproxy", { src: i, useSrc: s.test(i) ? JSON.stringify(i) : i });
                                    o.defaultPrevented || (r.style.backgroundImage = "url(" + o.detail.useSrc + ")") }
                                t._lazybgsetLoading && (n.fire(r, "_lazyloaded", {}, !1, !0), delete t._lazybgsetLoading) } };
                    addEventListener("lazybeforeunveil", function(e) { var a, s, u;!e.defaultPrevented && (a = e.target.getAttribute("data-bgset")) && (u = e.target, (s = t.createElement("img")).alt = "", s._lazybgsetLoading = !0, e.detail.firesLoad = !0, function(e, n, a) { var s = t.createElement("picture"),
                                u = n.getAttribute(lazySizesConfig.sizesAttr),
                                c = n.getAttribute("data-ratio"),
                                f = n.getAttribute("data-optimumx");
                            n._lazybgset && n._lazybgset.parentNode == n && n.removeChild(n._lazybgset), Object.defineProperty(a, "_lazybgset", { value: n, writable: !0 }), Object.defineProperty(n, "_lazybgset", { value: s, writable: !0 }), e = e.replace(r, " ").split(i), s.style.display = "none", a.className = lazySizesConfig.lazyClass, 1 != e.length || u || (u = "auto"), e.forEach(function(e) { var n, r = t.createElement("source");
                                u && "auto" != u && r.setAttribute("sizes", u), (n = e.match(o)) ? (r.setAttribute(lazySizesConfig.srcsetAttr, n[1]), l(r, n[2]), l(r, n[3])) : r.setAttribute(lazySizesConfig.srcsetAttr, e), s.appendChild(r) }), u && (a.setAttribute(lazySizesConfig.sizesAttr, u), n.removeAttribute(lazySizesConfig.sizesAttr), n.removeAttribute("sizes")), f && a.setAttribute("data-optimumx", f), c && a.setAttribute("data-ratio", c), s.appendChild(a), n.appendChild(s) }(a, u, s), setTimeout(function() { n.loader.unveil(s), n.rAF(function() { n.fire(s, "_lazyloaded", {}, !0, !0), s.complete && c({ target: s }) }) })) }), t.addEventListener("load", c, !0), e.addEventListener("lazybeforesizes", function(e) { if (e.detail.instance == n && e.target._lazybgset && e.detail.dataAttr) { var t = function(e) { var t; return t = (getComputedStyle(e) || { getPropertyValue: function() {} }).getPropertyValue("background-size"), !u[t] && u[e.style.backgroundSize] && (t = e.style.backgroundSize), t }(e.target._lazybgset);
                            u[t] && (e.target._lazysizesParentFit = t, n.rAF(function() { e.target.setAttribute("data-parent-fit", t), e.target._lazysizesParentFit && delete e.target._lazysizesParentFit })) } }, !0), t.documentElement.addEventListener("lazybeforesizes", function(e) {!e.defaultPrevented && e.target._lazybgset && e.detail.instance == n && (e.detail.width = function(e) { var t = n.gW(e, e.parentNode); return (!e._lazysizesWidth || t > e._lazysizesWidth) && (e._lazysizesWidth = t), e._lazysizesWidth }(e.target._lazybgset)) }) } }) },
        54: function(e, t, n) {! function(t, r) { var i = function() { r(t.lazySizes), t.removeEventListener("lazyunveilread", i, !0) };
                r = r.bind(null, t, t.document), e.exports ? r(n(6)) : t.lazySizes ? i() : t.addEventListener("lazyunveilread", i, !0) }(window, function(e, t, n) { "use strict"; var r, i = n && n.cfg,
                    o = t.createElement("img"),
                    a = "sizes" in o && "srcset" in o,
                    s = /\s+\d+h/g,
                    u = function() { var e = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                            r = Array.prototype.forEach; return function() { var i = t.createElement("img"),
                                o = function(t) { var n, r, i = t.getAttribute(lazySizesConfig.srcsetAttr);
                                    i && (r = i.match(e)) && ((n = "w" == r[2] ? r[1] / r[3] : r[3] / r[1]) && t.setAttribute("data-aspectratio", n), t.setAttribute(lazySizesConfig.srcsetAttr, i.replace(s, ""))) },
                                a = function(e) { if (e.detail.instance == n) { var t = e.target.parentNode;
                                        t && "PICTURE" == t.nodeName && r.call(t.getElementsByTagName("source"), o), o(e.target) } },
                                u = function() { i.currentSrc && t.removeEventListener("lazybeforeunveil", a) };
                            t.addEventListener("lazybeforeunveil", a), i.onload = u, i.onerror = u, i.srcset = "data:,a 1w 1h", i.complete && u() } }();
                i.supportsType || (i.supportsType = function(e) { return !e }), e.HTMLPictureElement && a ? !n.hasHDescriptorFix && t.msElementsFromPoint && (n.hasHDescriptorFix = !0, u()) : e.picturefill || i.pf || (i.pf = function(t) { var n, i; if (!e.picturefill)
                        for (n = 0, i = t.elements.length; n < i; n++) r(t.elements[n]) }, r = function() { var o = function(e, t) { return e.w - t.w },
                        u = /^\s*\d+\.*\d*px\s*$/,
                        l = function() { var e, t = /(([^,\s].[^\s]+)\s+(\d+)w)/g,
                                n = /\s/,
                                r = function(t, n, r, i) { e.push({ c: n, u: r, w: 1 * i }) }; return function(i) { return e = [], (i = i.trim()).replace(s, "").replace(t, r), e.length || !i || n.test(i) || e.push({ c: i, u: i, w: 99 }), e } }(),
                        c = function() { c.init || (c.init = !0, addEventListener("resize", function() { var e, n = t.getElementsByClassName("lazymatchmedia"),
                                    i = function() { var e, t; for (e = 0, t = n.length; e < t; e++) r(n[e]) }; return function() { clearTimeout(e), e = setTimeout(i, 66) } }())) },
                        f = function(t, r) { var o, a = t.getAttribute("srcset") || t.getAttribute(i.srcsetAttr);!a && r && (a = t._lazypolyfill ? t._lazypolyfill._set : t.getAttribute(i.srcAttr) || t.getAttribute("src")), t._lazypolyfill && t._lazypolyfill._set == a || (o = l(a || ""), r && t.parentNode && (o.isPicture = "PICTURE" == t.parentNode.nodeName.toUpperCase(), o.isPicture && e.matchMedia && (n.aC(t, "lazymatchmedia"), c())), o._set = a, Object.defineProperty(t, "_lazypolyfill", { value: o, writable: !0 })) },
                        d = function(t) { return e.matchMedia ? (d = function(e) { return !e || (matchMedia(e) || {}).matches })(t) : !t },
                        p = function(t) { var r, a, s, l, c, p, h; if (f(l = t, !0), (c = l._lazypolyfill).isPicture)
                                for (a = 0, s = (r = t.parentNode.getElementsByTagName("source")).length; a < s; a++)
                                    if (i.supportsType(r[a].getAttribute("type"), t) && d(r[a].getAttribute("media"))) { l = r[a], f(l), c = l._lazypolyfill; break }
                            return c.length > 1 ? (h = l.getAttribute("sizes") || "", h = u.test(h) && parseInt(h, 10) || n.gW(t, t.parentNode), c.d = function(t) { var r = e.devicePixelRatio || 1,
                                    i = n.getX && n.getX(t); return Math.min(i || r, 2.5, r) }(t), !c.src || !c.w || c.w < h ? (c.w = h, p = function(e) { for (var t, n, r = e.length, i = e[r - 1], o = 0; o < r; o++)
                                    if ((i = e[o]).d = i.w / e.w, i.d >= e.d) {!i.cached && (t = e[o - 1]) && t.d > e.d - .13 * Math.pow(e.d, 2.2) && (n = Math.pow(t.d - .6, 1.6), t.cached && (t.d += .15 * n), t.d + (i.d - e.d) * n > e.d && (i = t)); break }
                                return i }(c.sort(o)), c.src = p) : p = c.src) : p = c[0], p },
                        h = function(e) { if (!a || !e.parentNode || "PICTURE" == e.parentNode.nodeName.toUpperCase()) { var t = p(e);
                                t && t.u && e._lazypolyfill.cur != t.u && (e._lazypolyfill.cur = t.u, t.cached = !0, e.setAttribute(i.srcAttr, t.u), e.setAttribute("src", t.u)) } }; return h.parse = l, h }(), i.loadedClass && i.loadingClass && function() { var e = [];
                    ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function(t) { e.push(t + i.loadedClass), e.push(t + i.loadingClass) }), i.pf({ elements: t.querySelectorAll(e.join(", ")) }) }()) }) },
        6: function(e, t, n) {! function(t, n) { var r = function(e, t) { "use strict"; if (t.getElementsByClassName) { var n, r, i = t.documentElement,
                            o = e.Date,
                            a = e.HTMLPictureElement,
                            s = e.addEventListener,
                            u = e.setTimeout,
                            l = e.requestAnimationFrame || u,
                            c = e.requestIdleCallback,
                            f = /^picture$/i,
                            d = ["load", "error", "lazyincluded", "_lazyloaded"],
                            p = {},
                            h = Array.prototype.forEach,
                            g = function(e, t) { return p[t] || (p[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), p[t].test(e.getAttribute("class") || "") && p[t] },
                            v = function(e, t) { g(e, t) || e.setAttribute("class", (e.getAttribute("class") || "").trim() + " " + t) },
                            y = function(e, t) { var n;
                                (n = g(e, t)) && e.setAttribute("class", (e.getAttribute("class") || "").replace(n, " ")) },
                            m = function(e, t, n) { var r = n ? "addEventListener" : "removeEventListener";
                                n && m(e, t), d.forEach(function(n) { e[r](n, t) }) },
                            b = function(e, r, i, o, a) { var s = t.createEvent("Event"); return i || (i = {}), i.instance = n, s.initEvent(r, !o, !a), s.detail = i, e.dispatchEvent(s), s },
                            x = function(t, n) { var i;!a && (i = e.picturefill || r.pf) ? (n && n.src && !t.getAttribute("srcset") && t.setAttribute("srcset", n.src), i({ reevaluate: !0, elements: [t] })) : n && n.src && (t.src = n.src) },
                            w = function(e, t) { return (getComputedStyle(e, null) || {})[t] },
                            A = function(e, t, n) { for (n = n || e.offsetWidth; n < r.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode; return n },
                            C = function() { var e, n, r = [],
                                    i = [],
                                    o = r,
                                    a = function() { var t = o; for (o = r.length ? i : r, e = !0, n = !1; t.length;) t.shift()();
                                        e = !1 },
                                    s = function(r, i) { e && !i ? r.apply(this, arguments) : (o.push(r), n || (n = !0, (t.hidden ? u : l)(a))) }; return s._lsFlush = a, s }(),
                            T = function(e, t) { return t ? function() { C(e) } : function() { var t = this,
                                        n = arguments;
                                    C(function() { e.apply(t, n) }) } },
                            E = function(e) { var t, n, r = function() { t = null, e() },
                                    i = function() { var e = o.now() - n;
                                        e < 99 ? u(i, 99 - e) : (c || r)(r) }; return function() { n = o.now(), t || (t = u(i, 99)) } };! function() { var t, n = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 }; for (t in r = e.lazySizesConfig || e.lazysizesConfig || {}, n) t in r || (r[t] = n[t]);
                            e.lazySizesConfig = r, u(function() { r.init && N() }) }(); var z = function() { var a, l, d, p, A, z, N, k, L, j, D, P, q = /^img$/i,
                                    H = /^iframe$/i,
                                    _ = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                                    M = 0,
                                    O = 0,
                                    R = -1,
                                    F = function(e) { O--, (!e || O < 0 || !e.target) && (O = 0) },
                                    I = function(e) { return null == P && (P = "hidden" == w(t.body, "visibility")), P || "hidden" != w(e.parentNode, "visibility") && "hidden" != w(e, "visibility") },
                                    W = function(e, n) { var r, o = e,
                                            a = I(e); for (k -= n, D += n, L -= n, j += n; a && (o = o.offsetParent) && o != t.body && o != i;)(a = (w(o, "opacity") || 1) > 0) && "visible" != w(o, "overflow") && (r = o.getBoundingClientRect(), a = j > r.left && L < r.right && D > r.top - 1 && k < r.bottom + 1); return a },
                                    B = function() { var e, o, s, u, c, f, d, h, g, v, y, m, b = n.elements; if ((p = r.loadMode) && O < 8 && (e = b.length)) { for (o = 0, R++, v = !r.expand || r.expand < 1 ? i.clientHeight > 500 && i.clientWidth > 500 ? 500 : 370 : r.expand, n._defEx = v, y = v * r.expFactor, m = r.hFac, P = null, M < y && O < 1 && R > 2 && p > 2 && !t.hidden ? (M = y, R = 0) : M = p > 1 && R > 1 && O < 6 ? v : 0; o < e; o++)
                                                if (b[o] && !b[o]._lazyRace)
                                                    if (_)
                                                        if ((h = b[o].getAttribute("data-expand")) && (f = 1 * h) || (f = M), g !== f && (z = innerWidth + f * m, N = innerHeight + f, d = -1 * f, g = f), s = b[o].getBoundingClientRect(), (D = s.bottom) >= d && (k = s.top) <= N && (j = s.right) >= d * m && (L = s.left) <= z && (D || j || L || k) && (r.loadHidden || I(b[o])) && (l && O < 3 && !h && (p < 3 || R < 4) || W(b[o], f))) { if (Q(b[o]), c = !0, O > 9) break } else !c && l && !u && O < 4 && R < 4 && p > 2 && (a[0] || r.preloadAfterLoad) && (a[0] || !h && (D || j || L || k || "auto" != b[o].getAttribute(r.sizesAttr))) && (u = a[0] || b[o]);
                                            else Q(b[o]);
                                            u && !c && Q(u) } },
                                    $ = function(e) { var t, n = 0,
                                            i = r.throttleDelay,
                                            a = r.ricTimeout,
                                            s = function() { t = !1, n = o.now(), e() },
                                            l = c && a > 49 ? function() { c(s, { timeout: a }), a !== r.ricTimeout && (a = r.ricTimeout) } : T(function() { u(s) }, !0); return function(e) { var r;
                                            (e = !0 === e) && (a = 33), t || (t = !0, (r = i - (o.now() - n)) < 0 && (r = 0), e || r < 9 ? l() : u(l, r)) } }(B),
                                    U = function(e) { var t = e.target;
                                        t._lazyCache ? delete t._lazyCache : (F(e), v(t, r.loadedClass), y(t, r.loadingClass), m(t, V), b(t, "lazyloaded")) },
                                    X = T(U),
                                    V = function(e) { X({ target: e.target }) },
                                    G = function(e) { var t, n = e.getAttribute(r.srcsetAttr);
                                        (t = r.customMedia[e.getAttribute("data-media") || e.getAttribute("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n) },
                                    J = T(function(e, t, n, i, o) { var a, s, l, c, p, g;
                                        (p = b(e, "lazybeforeunveil", t)).defaultPrevented || (i && (n ? v(e, r.autosizesClass) : e.setAttribute("sizes", i)), s = e.getAttribute(r.srcsetAttr), a = e.getAttribute(r.srcAttr), o && (c = (l = e.parentNode) && f.test(l.nodeName || "")), g = t.firesLoad || "src" in e && (s || a || c), p = { target: e }, v(e, r.loadingClass), g && (clearTimeout(d), d = u(F, 2500), m(e, V, !0)), c && h.call(l.getElementsByTagName("source"), G), s ? e.setAttribute("srcset", s) : a && !c && (H.test(e.nodeName) ? function(e, t) { try { e.contentWindow.location.replace(t) } catch (n) { e.src = t } }(e, a) : e.src = a), o && (s || c) && x(e, { src: a })), e._lazyRace && delete e._lazyRace, y(e, r.lazyClass), C(function() { var t = e.complete && e.naturalWidth > 1;
                                            g && !t || (t && v(e, "ls-is-cached"), U(p), e._lazyCache = !0, u(function() { "_lazyCache" in e && delete e._lazyCache }, 9)) }, !0) }),
                                    Q = function(e) { var t, n = q.test(e.nodeName),
                                            i = n && (e.getAttribute(r.sizesAttr) || e.getAttribute("sizes")),
                                            o = "auto" == i;
                                        (!o && l || !n || !e.getAttribute("src") && !e.srcset || e.complete || g(e, r.errorClass) || !g(e, r.lazyClass)) && (t = b(e, "lazyunveilread").detail, o && S.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, O++, J(e, t, o, i, n)) },
                                    Y = function() { if (!l)
                                            if (o.now() - A < 999) u(Y, 999);
                                            else { var e = E(function() { r.loadMode = 3, $() });
                                                l = !0, r.loadMode = 3, $(), s("scroll", function() { 3 == r.loadMode && (r.loadMode = 2), e() }, !0) } }; return { _: function() { A = o.now(), n.elements = t.getElementsByClassName(r.lazyClass), a = t.getElementsByClassName(r.lazyClass + " " + r.preloadClass), s("scroll", $, !0), s("resize", $, !0), e.MutationObserver ? new MutationObserver($).observe(i, { childList: !0, subtree: !0, attributes: !0 }) : (i.addEventListener("DOMNodeInserted", $, !0), i.addEventListener("DOMAttrModified", $, !0), setInterval($, 999)), s("hashchange", $, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) { t.addEventListener(e, $, !0) }), /d$|^c/.test(t.readyState) ? Y() : (s("load", Y), t.addEventListener("DOMContentLoaded", $), u(Y, 2e4)), n.elements.length ? (B(), C._lsFlush()) : $() }, checkElems: $, unveil: Q } }(),
                            S = function() { var e, n = T(function(e, t, n, r) { var i, o, a; if (e._lazysizesWidth = r, r += "px", e.setAttribute("sizes", r), f.test(t.nodeName || ""))
                                            for (o = 0, a = (i = t.getElementsByTagName("source")).length; o < a; o++) i[o].setAttribute("sizes", r);
                                        n.detail.dataAttr || x(e, n.detail) }),
                                    i = function(e, t, r) { var i, o = e.parentNode;
                                        o && (r = A(e, o, r), (i = b(e, "lazybeforesizes", { width: r, dataAttr: !!t })).defaultPrevented || (r = i.detail.width) && r !== e._lazysizesWidth && n(e, o, i, r)) },
                                    o = E(function() { var t, n = e.length; if (n)
                                            for (t = 0; t < n; t++) i(e[t]) }); return { _: function() { e = t.getElementsByClassName(r.autosizesClass), s("resize", o) }, checkElems: o, updateElem: i } }(),
                            N = function() { N.i || (N.i = !0, S._(), z._()) }; return n = { cfg: r, autoSizer: S, loader: z, init: N, uP: x, aC: v, rC: y, hC: g, fire: b, gW: A, rAF: C } } }(t, t.document);
                t.lazySizes = r, e.exports && (e.exports = r) }(window) }
    }
]);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function(factory) { "use strict"; if (typeof define === "function" && define.amd) { define(["jquery"], factory) } else if (typeof exports !== "undefined") { module.exports = factory(require("jquery")) } else { factory(jQuery) } })(function($) { "use strict"; var Slick = window.Slick || {};
    Slick = function() { var instanceUid = 0;

        function Slick(element, settings) { var _ = this,
                dataSettings;
            _.defaults = { accessibility: true, adaptiveHeight: false, appendArrows: $(element), appendDots: $(element), arrows: true, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: false, autoplaySpeed: 3e3, centerMode: false, centerPadding: "50px", cssEase: "ease", customPaging: function(slider, i) { return $('<button type="button" />').text(i + 1) }, dots: false, dotsClass: "slick-dots", draggable: true, easing: "linear", edgeFriction: .35, fade: false, focusOnSelect: false, focusOnChange: false, infinite: true, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: false, pauseOnHover: true, pauseOnFocus: true, pauseOnDotsHover: false, respondTo: "window", responsive: null, rows: 1, rtl: false, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: true, swipeToSlide: false, touchMove: true, touchThreshold: 5, useCSS: true, useTransform: true, variableWidth: false, vertical: false, verticalSwiping: false, waitForAnimate: true, zIndex: 1e3 };
            _.initials = { animating: false, dragging: false, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: false, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: false, slideOffset: 0, swipeLeft: null, swiping: false, $list: null, touchObject: {}, transformsEnabled: false, unslicked: false };
            $.extend(_, _.initials);
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = "hidden";
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = "visibilitychange";
            _.windowWidth = 0;
            _.windowTimer = null;
            dataSettings = $(element).data("slick") || {};
            _.options = $.extend({}, _.defaults, settings, dataSettings);
            _.currentSlide = _.options.initialSlide;
            _.originalSettings = _.options; if (typeof document.mozHidden !== "undefined") { _.hidden = "mozHidden";
                _.visibilityChange = "mozvisibilitychange" } else if (typeof document.webkitHidden !== "undefined") { _.hidden = "webkitHidden";
                _.visibilityChange = "webkitvisibilitychange" }
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.instanceUid = instanceUid++;
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            _.registerBreakpoints();
            _.init(true) } return Slick }();
    Slick.prototype.activateADA = function() { var _ = this;
        _.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) };
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) { var _ = this; if (typeof index === "boolean") { addBefore = index;
            index = null } else if (index < 0 || index >= _.slideCount) { return false }
        _.unload(); if (typeof index === "number") { if (index === 0 && _.$slides.length === 0) { $(markup).appendTo(_.$slideTrack) } else if (addBefore) { $(markup).insertBefore(_.$slides.eq(index)) } else { $(markup).insertAfter(_.$slides.eq(index)) } } else { if (addBefore === true) { $(markup).prependTo(_.$slideTrack) } else { $(markup).appendTo(_.$slideTrack) } }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slides.each(function(index, element) { $(element).attr("data-slick-index", index) });
        _.$slidesCache = _.$slides;
        _.reinit() };
    Slick.prototype.animateHeight = function() { var _ = this; if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) { var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({ height: targetHeight }, _.options.speed) } };
    Slick.prototype.animateSlide = function(targetLeft, callback) { var animProps = {},
            _ = this;
        _.animateHeight(); if (_.options.rtl === true && _.options.vertical === false) { targetLeft = -targetLeft } if (_.transformsEnabled === false) { if (_.options.vertical === false) { _.$slideTrack.animate({ left: targetLeft }, _.options.speed, _.options.easing, callback) } else { _.$slideTrack.animate({ top: targetLeft }, _.options.speed, _.options.easing, callback) } } else { if (_.cssTransitions === false) { if (_.options.rtl === true) { _.currentLeft = -_.currentLeft }
                $({ animStart: _.currentLeft }).animate({ animStart: targetLeft }, { duration: _.options.speed, easing: _.options.easing, step: function(now) { now = Math.ceil(now); if (_.options.vertical === false) { animProps[_.animType] = "translate(" + now + "px, 0px)";
                            _.$slideTrack.css(animProps) } else { animProps[_.animType] = "translate(0px," + now + "px)";
                            _.$slideTrack.css(animProps) } }, complete: function() { if (callback) { callback.call() } } }) } else { _.applyTransition();
                targetLeft = Math.ceil(targetLeft); if (_.options.vertical === false) { animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)" } else { animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)" }
                _.$slideTrack.css(animProps); if (callback) { setTimeout(function() { _.disableTransition();
                        callback.call() }, _.options.speed) } } } };
    Slick.prototype.getNavTarget = function() { var _ = this,
            asNavFor = _.options.asNavFor; if (asNavFor && asNavFor !== null) { asNavFor = $(asNavFor).not(_.$slider) } return asNavFor };
    Slick.prototype.asNavFor = function(index) { var _ = this,
            asNavFor = _.getNavTarget(); if (asNavFor !== null && typeof asNavFor === "object") { asNavFor.each(function() { var target = $(this).slick("getSlick"); if (!target.unslicked) { target.slideHandler(index, true) } }) } };
    Slick.prototype.applyTransition = function(slide) { var _ = this,
            transition = {}; if (_.options.fade === false) { transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase } else { transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase } if (_.options.fade === false) { _.$slideTrack.css(transition) } else { _.$slides.eq(slide).css(transition) } };
    Slick.prototype.autoPlay = function() { var _ = this;
        _.autoPlayClear(); if (_.slideCount > _.options.slidesToShow) { _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed) } };
    Slick.prototype.autoPlayClear = function() { var _ = this; if (_.autoPlayTimer) { clearInterval(_.autoPlayTimer) } };
    Slick.prototype.autoPlayIterator = function() { var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll; if (!_.paused && !_.interrupted && !_.focussed) { if (_.options.infinite === false) { if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) { _.direction = 0 } else if (_.direction === 0) { slideTo = _.currentSlide - _.options.slidesToScroll; if (_.currentSlide - 1 === 0) { _.direction = 1 } } }
            _.slideHandler(slideTo) } };
    Slick.prototype.buildArrows = function() { var _ = this; if (_.options.arrows === true) { _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
            _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow"); if (_.slideCount > _.options.slidesToShow) { _.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"); if (_.htmlExpr.test(_.options.prevArrow)) { _.$prevArrow.prependTo(_.options.appendArrows) } if (_.htmlExpr.test(_.options.nextArrow)) { _.$nextArrow.appendTo(_.options.appendArrows) } if (_.options.infinite !== true) { _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true") } } else { _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }) } } };
    Slick.prototype.buildDots = function() { var _ = this,
            i, dot; if (_.options.dots === true && _.slideCount > _.options.slidesToShow) { _.$slider.addClass("slick-dotted");
            dot = $("<ul />").addClass(_.options.dotsClass); for (i = 0; i <= _.getDotCount(); i += 1) { dot.append($("<li />").append(_.options.customPaging.call(this, _, i))) }
            _.$dots = dot.appendTo(_.options.appendDots);
            _.$dots.find("li").first().addClass("slick-active") } };
    Slick.prototype.buildOut = function() { var _ = this;
        _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        _.slideCount = _.$slides.length;
        _.$slides.each(function(index, element) { $(element).attr("data-slick-index", index).data("originalStyling", $(element).attr("style") || "") });
        _.$slider.addClass("slick-slider");
        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
        _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
        _.$slideTrack.css("opacity", 0); if (_.options.centerMode === true || _.options.swipeToSlide === true) { _.options.slidesToScroll = 1 }
        $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");
        _.setupInfinite();
        _.buildArrows();
        _.buildDots();
        _.updateDots();
        _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0); if (_.options.draggable === true) { _.$list.addClass("draggable") } };
    Slick.prototype.buildRows = function() { var _ = this,
            a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children(); if (_.options.rows > 0) { slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection); for (a = 0; a < numOfSlides; a++) { var slide = document.createElement("div"); for (b = 0; b < _.options.rows; b++) { var row = document.createElement("div"); for (c = 0; c < _.options.slidesPerRow; c++) { var target = a * slidesPerSection + (b * _.options.slidesPerRow + c); if (originalSlides.get(target)) { row.appendChild(originalSlides.get(target)) } }
                    slide.appendChild(row) }
                newSlides.appendChild(slide) }
            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({ width: 100 / _.options.slidesPerRow + "%", display: "inline-block" }) } };
    Slick.prototype.checkResponsive = function(initial, forceUpdate) { var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false; var sliderWidth = _.$slider.width(); var windowWidth = window.innerWidth || $(window).width(); if (_.respondTo === "window") { respondToWidth = windowWidth } else if (_.respondTo === "slider") { respondToWidth = sliderWidth } else if (_.respondTo === "min") { respondToWidth = Math.min(windowWidth, sliderWidth) } if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) { targetBreakpoint = null; for (breakpoint in _.breakpoints) { if (_.breakpoints.hasOwnProperty(breakpoint)) { if (_.originalSettings.mobileFirst === false) { if (respondToWidth < _.breakpoints[breakpoint]) { targetBreakpoint = _.breakpoints[breakpoint] } } else { if (respondToWidth > _.breakpoints[breakpoint]) { targetBreakpoint = _.breakpoints[breakpoint] } } } } if (targetBreakpoint !== null) { if (_.activeBreakpoint !== null) { if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) { _.activeBreakpoint = targetBreakpoint; if (_.breakpointSettings[targetBreakpoint] === "unslick") { _.unslick(targetBreakpoint) } else { _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]); if (initial === true) { _.currentSlide = _.options.initialSlide }
                            _.refresh(initial) }
                        triggerBreakpoint = targetBreakpoint } } else { _.activeBreakpoint = targetBreakpoint; if (_.breakpointSettings[targetBreakpoint] === "unslick") { _.unslick(targetBreakpoint) } else { _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]); if (initial === true) { _.currentSlide = _.options.initialSlide }
                        _.refresh(initial) }
                    triggerBreakpoint = targetBreakpoint } } else { if (_.activeBreakpoint !== null) { _.activeBreakpoint = null;
                    _.options = _.originalSettings; if (initial === true) { _.currentSlide = _.options.initialSlide }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint } } if (!initial && triggerBreakpoint !== false) { _.$slider.trigger("breakpoint", [_, triggerBreakpoint]) } } };
    Slick.prototype.changeSlide = function(event, dontAnimate) { var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset; if ($target.is("a")) { event.preventDefault() } if (!$target.is("li")) { $target = $target.closest("li") }
        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll; switch (event.data.message) {
            case "previous":
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset; if (_.slideCount > _.options.slidesToShow) { _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate) } break;
            case "next":
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset; if (_.slideCount > _.options.slidesToShow) { _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate) } break;
            case "index":
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger("focus"); break;
            default:
                return } };
    Slick.prototype.checkNavigable = function(index) { var _ = this,
            navigables, prevNavigable;
        navigables = _.getNavigableIndexes();
        prevNavigable = 0; if (index > navigables[navigables.length - 1]) { index = navigables[navigables.length - 1] } else { for (var n in navigables) { if (index < navigables[n]) { index = prevNavigable; break }
                prevNavigable = navigables[n] } } return index };
    Slick.prototype.cleanUpEvents = function() { var _ = this; if (_.options.dots && _.$dots !== null) { $("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $.proxy(_.interrupt, _, true)).off("mouseleave.slick", $.proxy(_.interrupt, _, false)); if (_.options.accessibility === true) { _.$dots.off("keydown.slick", _.keyHandler) } }
        _.$slider.off("focus.slick blur.slick"); if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) { _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
            _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide); if (_.options.accessibility === true) { _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler);
                _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler) } }
        _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);
        _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);
        _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);
        _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);
        _.$list.off("click.slick", _.clickHandler);
        $(document).off(_.visibilityChange, _.visibility);
        _.cleanUpSlideEvents(); if (_.options.accessibility === true) { _.$list.off("keydown.slick", _.keyHandler) } if (_.options.focusOnSelect === true) { $(_.$slideTrack).children().off("click.slick", _.selectHandler) }
        $(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange);
        $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);
        $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);
        $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition) };
    Slick.prototype.cleanUpSlideEvents = function() { var _ = this;
        _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true));
        _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false)) };
    Slick.prototype.cleanUpRows = function() { var _ = this,
            originalSlides; if (_.options.rows > 0) { originalSlides = _.$slides.children().children();
            originalSlides.removeAttr("style");
            _.$slider.empty().append(originalSlides) } };
    Slick.prototype.clickHandler = function(event) { var _ = this; if (_.shouldClick === false) { event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault() } };
    Slick.prototype.destroy = function(refresh) { var _ = this;
        _.autoPlayClear();
        _.touchObject = {};
        _.cleanUpEvents();
        $(".slick-cloned", _.$slider).detach(); if (_.$dots) { _.$dots.remove() } if (_.$prevArrow && _.$prevArrow.length) { _.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""); if (_.htmlExpr.test(_.options.prevArrow)) { _.$prevArrow.remove() } } if (_.$nextArrow && _.$nextArrow.length) { _.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""); if (_.htmlExpr.test(_.options.nextArrow)) { _.$nextArrow.remove() } } if (_.$slides) { _.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { $(this).attr("style", $(this).data("originalStyling")) });
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.detach();
            _.$list.detach();
            _.$slider.append(_.$slides) }
        _.cleanUpRows();
        _.$slider.removeClass("slick-slider");
        _.$slider.removeClass("slick-initialized");
        _.$slider.removeClass("slick-dotted");
        _.unslicked = true; if (!refresh) { _.$slider.trigger("destroy", [_]) } };
    Slick.prototype.disableTransition = function(slide) { var _ = this,
            transition = {};
        transition[_.transitionType] = ""; if (_.options.fade === false) { _.$slideTrack.css(transition) } else { _.$slides.eq(slide).css(transition) } };
    Slick.prototype.fadeSlide = function(slideIndex, callback) { var _ = this; if (_.cssTransitions === false) { _.$slides.eq(slideIndex).css({ zIndex: _.options.zIndex });
            _.$slides.eq(slideIndex).animate({ opacity: 1 }, _.options.speed, _.options.easing, callback) } else { _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({ opacity: 1, zIndex: _.options.zIndex }); if (callback) { setTimeout(function() { _.disableTransition(slideIndex);
                    callback.call() }, _.options.speed) } } };
    Slick.prototype.fadeSlideOut = function(slideIndex) { var _ = this; if (_.cssTransitions === false) { _.$slides.eq(slideIndex).animate({ opacity: 0, zIndex: _.options.zIndex - 2 }, _.options.speed, _.options.easing) } else { _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({ opacity: 0, zIndex: _.options.zIndex - 2 }) } };
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) { var _ = this; if (filter !== null) { _.$slidesCache = _.$slides;
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
            _.reinit() } };
    Slick.prototype.focusHandler = function() { var _ = this;
        _.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function(event) { var $sf = $(this);
            setTimeout(function() { if (_.options.pauseOnFocus) { if ($sf.is(":focus")) { _.focussed = true;
                        _.autoPlay() } } }, 0) }).on("blur.slick", "*", function(event) { var $sf = $(this); if (_.options.pauseOnFocus) { _.focussed = false;
                _.autoPlay() } }) };
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() { var _ = this; return _.currentSlide };
    Slick.prototype.getDotCount = function() { var _ = this; var breakPoint = 0; var counter = 0; var pagerQty = 0; if (_.options.infinite === true) { if (_.slideCount <= _.options.slidesToShow) {++pagerQty } else { while (breakPoint < _.slideCount) {++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow } } } else if (_.options.centerMode === true) { pagerQty = _.slideCount } else if (!_.options.asNavFor) { pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll) } else { while (breakPoint < _.slideCount) {++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow } } return pagerQty - 1 };
    Slick.prototype.getLeft = function(slideIndex) { var _ = this,
            targetLeft, verticalHeight, verticalOffset = 0,
            targetSlide, coef;
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true); if (_.options.infinite === true) { if (_.slideCount > _.options.slidesToShow) { _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                coef = -1; if (_.options.vertical === true && _.options.centerMode === true) { if (_.options.slidesToShow === 2) { coef = -1.5 } else if (_.options.slidesToShow === 1) { coef = -2 } }
                verticalOffset = verticalHeight * _.options.slidesToShow * coef } if (_.slideCount % _.options.slidesToScroll !== 0) { if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) { if (slideIndex > _.slideCount) { _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1 } else { _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1 } } } } else { if (slideIndex + _.options.slidesToShow > _.slideCount) { _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight } } if (_.slideCount <= _.options.slidesToShow) { _.slideOffset = 0;
            verticalOffset = 0 } if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) { _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2 } else if (_.options.centerMode === true && _.options.infinite === true) { _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth } else if (_.options.centerMode === true) { _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) } if (_.options.vertical === false) { targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset } else { targetLeft = slideIndex * verticalHeight * -1 + verticalOffset } if (_.options.variableWidth === true) { if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) { targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex) } else { targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow) } if (_.options.rtl === true) { if (targetSlide[0]) { targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1 } else { targetLeft = 0 } } else { targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0 } if (_.options.centerMode === true) { if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) { targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex) } else { targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1) } if (_.options.rtl === true) { if (targetSlide[0]) { targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1 } else { targetLeft = 0 } } else { targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0 }
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2 } } return targetLeft };
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) { var _ = this; return _.options[option] };
    Slick.prototype.getNavigableIndexes = function() { var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max; if (_.options.infinite === false) { max = _.slideCount } else { breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2 } while (breakPoint < max) { indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow } return indexes };
    Slick.prototype.getSlick = function() { return this };
    Slick.prototype.getSlideCount = function() { var _ = this,
            slidesTraversed, swipedSlide, swipeTarget, centerOffset;
        centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
        swipeTarget = _.swipeLeft * -1 + centerOffset; if (_.options.swipeToSlide === true) { _.$slideTrack.find(".slick-slide").each(function(index, slide) { var slideOuterWidth, slideOffset, slideRightBoundary;
                slideOuterWidth = $(slide).outerWidth();
                slideOffset = slide.offsetLeft; if (_.options.centerMode !== true) { slideOffset += slideOuterWidth / 2 }
                slideRightBoundary = slideOffset + slideOuterWidth; if (swipeTarget < slideRightBoundary) { swipedSlide = slide; return false } });
            slidesTraversed = Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1; return slidesTraversed } else { return _.options.slidesToScroll } };
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) { var _ = this;
        _.changeSlide({ data: { message: "index", index: parseInt(slide) } }, dontAnimate) };
    Slick.prototype.init = function(creation) { var _ = this; if (!$(_.$slider).hasClass("slick-initialized")) { $(_.$slider).addClass("slick-initialized");
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler() } if (creation) { _.$slider.trigger("init", [_]) } if (_.options.accessibility === true) { _.initADA() } if (_.options.autoplay) { _.paused = false;
            _.autoPlay() } };
    Slick.prototype.initADA = function() { var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function(val) { return val >= 0 && val < _.slideCount });
        _.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }); if (_.$dots !== null) { _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i) { var slideControlIndex = tabControlIndexes.indexOf(i);
                $(this).attr({ role: "tabpanel", id: "slick-slide" + _.instanceUid + i, tabindex: -1 }); if (slideControlIndex !== -1) { var ariaButtonControl = "slick-slide-control" + _.instanceUid + slideControlIndex; if ($("#" + ariaButtonControl).length) { $(this).attr({ "aria-describedby": ariaButtonControl }) } } });
            _.$dots.attr("role", "tablist").find("li").each(function(i) { var mappedSlideIndex = tabControlIndexes[i];
                $(this).attr({ role: "presentation" });
                $(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + _.instanceUid + i, "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex, "aria-label": i + 1 + " of " + numDotGroups, "aria-selected": null, tabindex: "-1" }) }).eq(_.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end() } for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) { if (_.options.focusOnChange) { _.$slides.eq(i).attr({ tabindex: "0" }) } else { _.$slides.eq(i).removeAttr("tabindex") } }
        _.activateADA() };
    Slick.prototype.initArrowEvents = function() { var _ = this; if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) { _.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, _.changeSlide);
            _.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, _.changeSlide); if (_.options.accessibility === true) { _.$prevArrow.on("keydown.slick", _.keyHandler);
                _.$nextArrow.on("keydown.slick", _.keyHandler) } } };
    Slick.prototype.initDotEvents = function() { var _ = this; if (_.options.dots === true && _.slideCount > _.options.slidesToShow) { $("li", _.$dots).on("click.slick", { message: "index" }, _.changeSlide); if (_.options.accessibility === true) { _.$dots.on("keydown.slick", _.keyHandler) } } if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) { $("li", _.$dots).on("mouseenter.slick", $.proxy(_.interrupt, _, true)).on("mouseleave.slick", $.proxy(_.interrupt, _, false)) } };
    Slick.prototype.initSlideEvents = function() { var _ = this; if (_.options.pauseOnHover) { _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true));
            _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false)) } };
    Slick.prototype.initializeEvents = function() { var _ = this;
        _.initArrowEvents();
        _.initDotEvents();
        _.initSlideEvents();
        _.$list.on("touchstart.slick mousedown.slick", { action: "start" }, _.swipeHandler);
        _.$list.on("touchmove.slick mousemove.slick", { action: "move" }, _.swipeHandler);
        _.$list.on("touchend.slick mouseup.slick", { action: "end" }, _.swipeHandler);
        _.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, _.swipeHandler);
        _.$list.on("click.slick", _.clickHandler);
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _)); if (_.options.accessibility === true) { _.$list.on("keydown.slick", _.keyHandler) } if (_.options.focusOnSelect === true) { $(_.$slideTrack).children().on("click.slick", _.selectHandler) }
        $(window).on("orientationchange.slick.slick-" + _.instanceUid, $.proxy(_.orientationChange, _));
        $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _));
        $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);
        $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
        $(_.setPosition) };
    Slick.prototype.initUI = function() { var _ = this; if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) { _.$prevArrow.show();
            _.$nextArrow.show() } if (_.options.dots === true && _.slideCount > _.options.slidesToShow) { _.$dots.show() } };
    Slick.prototype.keyHandler = function(event) { var _ = this; if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) { if (event.keyCode === 37 && _.options.accessibility === true) { _.changeSlide({ data: { message: _.options.rtl === true ? "next" : "previous" } }) } else if (event.keyCode === 39 && _.options.accessibility === true) { _.changeSlide({ data: { message: _.options.rtl === true ? "previous" : "next" } }) } } };
    Slick.prototype.lazyLoad = function() { var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) { $("img[data-lazy]", imagesScope).each(function() { var image = $(this),
                    imageSource = $(this).attr("data-lazy"),
                    imageSrcSet = $(this).attr("data-srcset"),
                    imageSizes = $(this).attr("data-sizes") || _.$slider.attr("data-sizes"),
                    imageToLoad = document.createElement("img");
                imageToLoad.onload = function() { image.animate({ opacity: 0 }, 100, function() { if (imageSrcSet) { image.attr("srcset", imageSrcSet); if (imageSizes) { image.attr("sizes", imageSizes) } }
                        image.attr("src", imageSource).animate({ opacity: 1 }, 200, function() { image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") });
                        _.$slider.trigger("lazyLoaded", [_, image, imageSource]) }) };
                imageToLoad.onerror = function() { image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                    _.$slider.trigger("lazyLoadError", [_, image, imageSource]) };
                imageToLoad.src = imageSource }) } if (_.options.centerMode === true) { if (_.options.infinite === true) { rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2 } else { rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide } } else { rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow); if (_.options.fade === true) { if (rangeStart > 0) rangeStart--; if (rangeEnd <= _.slideCount) rangeEnd++ } }
        loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd); if (_.options.lazyLoad === "anticipated") { var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find(".slick-slide"); for (var i = 0; i < _.options.slidesToScroll; i++) { if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++ } }
        loadImages(loadRange); if (_.slideCount <= _.options.slidesToShow) { cloneRange = _.$slider.find(".slick-slide");
            loadImages(cloneRange) } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) { cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow);
            loadImages(cloneRange) } else if (_.currentSlide === 0) { cloneRange = _.$slider.find(".slick-cloned").slice(_.options.slidesToShow * -1);
            loadImages(cloneRange) } };
    Slick.prototype.loadSlider = function() { var _ = this;
        _.setPosition();
        _.$slideTrack.css({ opacity: 1 });
        _.$slider.removeClass("slick-loading");
        _.initUI(); if (_.options.lazyLoad === "progressive") { _.progressiveLazyLoad() } };
    Slick.prototype.next = Slick.prototype.slickNext = function() { var _ = this;
        _.changeSlide({ data: { message: "next" } }) };
    Slick.prototype.orientationChange = function() { var _ = this;
        _.checkResponsive();
        _.setPosition() };
    Slick.prototype.pause = Slick.prototype.slickPause = function() { var _ = this;
        _.autoPlayClear();
        _.paused = true };
    Slick.prototype.play = Slick.prototype.slickPlay = function() { var _ = this;
        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false };
    Slick.prototype.postSlide = function(index) { var _ = this; if (!_.unslicked) { _.$slider.trigger("afterChange", [_, index]);
            _.animating = false; if (_.slideCount > _.options.slidesToShow) { _.setPosition() }
            _.swipeLeft = null; if (_.options.autoplay) { _.autoPlay() } if (_.options.accessibility === true) { _.initADA(); if (_.options.focusOnChange) { var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr("tabindex", 0).focus() } } } };
    Slick.prototype.prev = Slick.prototype.slickPrev = function() { var _ = this;
        _.changeSlide({ data: { message: "previous" } }) };
    Slick.prototype.preventDefault = function(event) { event.preventDefault() };
    Slick.prototype.progressiveLazyLoad = function(tryCount) { tryCount = tryCount || 1; var _ = this,
            $imgsToLoad = $("img[data-lazy]", _.$slider),
            image, imageSource, imageSrcSet, imageSizes, imageToLoad; if ($imgsToLoad.length) { image = $imgsToLoad.first();
            imageSource = image.attr("data-lazy");
            imageSrcSet = image.attr("data-srcset");
            imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes");
            imageToLoad = document.createElement("img");
            imageToLoad.onload = function() { if (imageSrcSet) { image.attr("srcset", imageSrcSet); if (imageSizes) { image.attr("sizes", imageSizes) } }
                image.attr("src", imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"); if (_.options.adaptiveHeight === true) { _.setPosition() }
                _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
                _.progressiveLazyLoad() };
            imageToLoad.onerror = function() { if (tryCount < 3) { setTimeout(function() { _.progressiveLazyLoad(tryCount + 1) }, 500) } else { image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                    _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
                    _.progressiveLazyLoad() } };
            imageToLoad.src = imageSource } else { _.$slider.trigger("allImagesLoaded", [_]) } };
    Slick.prototype.refresh = function(initializing) { var _ = this,
            currentSlide, lastVisibleIndex;
        lastVisibleIndex = _.slideCount - _.options.slidesToShow; if (!_.options.infinite && _.currentSlide > lastVisibleIndex) { _.currentSlide = lastVisibleIndex } if (_.slideCount <= _.options.slidesToShow) { _.currentSlide = 0 }
        currentSlide = _.currentSlide;
        _.destroy(true);
        $.extend(_, _.initials, { currentSlide: currentSlide });
        _.init(); if (!initializing) { _.changeSlide({ data: { message: "index", index: currentSlide } }, false) } };
    Slick.prototype.registerBreakpoints = function() { var _ = this,
            breakpoint, currentBreakpoint, l, responsiveSettings = _.options.responsive || null; if ($.type(responsiveSettings) === "array" && responsiveSettings.length) { _.respondTo = _.options.respondTo || "window"; for (breakpoint in responsiveSettings) { l = _.breakpoints.length - 1; if (responsiveSettings.hasOwnProperty(breakpoint)) { currentBreakpoint = responsiveSettings[breakpoint].breakpoint; while (l >= 0) { if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) { _.breakpoints.splice(l, 1) }
                        l-- }
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings } }
            _.breakpoints.sort(function(a, b) { return _.options.mobileFirst ? a - b : b - a }) } };
    Slick.prototype.reinit = function() { var _ = this;
        _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");
        _.slideCount = _.$slides.length; if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) { _.currentSlide = _.currentSlide - _.options.slidesToScroll } if (_.slideCount <= _.options.slidesToShow) { _.currentSlide = 0 }
        _.registerBreakpoints();
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();
        _.checkResponsive(false, true); if (_.options.focusOnSelect === true) { $(_.$slideTrack).children().on("click.slick", _.selectHandler) }
        _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
        _.setPosition();
        _.focusHandler();
        _.paused = !_.options.autoplay;
        _.autoPlay();
        _.$slider.trigger("reInit", [_]) };
    Slick.prototype.resize = function() { var _ = this; if ($(window).width() !== _.windowWidth) { clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() { _.windowWidth = $(window).width();
                _.checkResponsive(); if (!_.unslicked) { _.setPosition() } }, 50) } };
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) { var _ = this; if (typeof index === "boolean") { removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1 } else { index = removeBefore === true ? --index : index } if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) { return false }
        _.unload(); if (removeAll === true) { _.$slideTrack.children().remove() } else { _.$slideTrack.children(this.options.slide).eq(index).remove() }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slidesCache = _.$slides;
        _.reinit() };
    Slick.prototype.setCSS = function(position) { var _ = this,
            positionProps = {},
            x, y; if (_.options.rtl === true) { position = -position }
        x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
        y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";
        positionProps[_.positionProp] = position; if (_.transformsEnabled === false) { _.$slideTrack.css(positionProps) } else { positionProps = {}; if (_.cssTransitions === false) { positionProps[_.animType] = "translate(" + x + ", " + y + ")";
                _.$slideTrack.css(positionProps) } else { positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";
                _.$slideTrack.css(positionProps) } } };
    Slick.prototype.setDimensions = function() { var _ = this; if (_.options.vertical === false) { if (_.options.centerMode === true) { _.$list.css({ padding: "0px " + _.options.centerPadding }) } } else { _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow); if (_.options.centerMode === true) { _.$list.css({ padding: _.options.centerPadding + " 0px" }) } }
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height(); if (_.options.vertical === false && _.options.variableWidth === false) { _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length)) } else if (_.options.variableWidth === true) { _.$slideTrack.width(5e3 * _.slideCount) } else { _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children(".slick-slide").length)) } var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width(); if (_.options.variableWidth === false) _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset) };
    Slick.prototype.setFade = function() { var _ = this,
            targetLeft;
        _.$slides.each(function(index, element) { targetLeft = _.slideWidth * index * -1; if (_.options.rtl === true) { $(element).css({ position: "relative", right: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 }) } else { $(element).css({ position: "relative", left: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 }) } });
        _.$slides.eq(_.currentSlide).css({ zIndex: _.options.zIndex - 1, opacity: 1 }) };
    Slick.prototype.setHeight = function() { var _ = this; if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) { var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css("height", targetHeight) } };
    Slick.prototype.setOption = Slick.prototype.slickSetOption = function() { var _ = this,
            l, item, option, value, refresh = false,
            type; if ($.type(arguments[0]) === "object") { option = arguments[0];
            refresh = arguments[1];
            type = "multiple" } else if ($.type(arguments[0]) === "string") { option = arguments[0];
            value = arguments[1];
            refresh = arguments[2]; if (arguments[0] === "responsive" && $.type(arguments[1]) === "array") { type = "responsive" } else if (typeof arguments[1] !== "undefined") { type = "single" } } if (type === "single") { _.options[option] = value } else if (type === "multiple") { $.each(option, function(opt, val) { _.options[opt] = val }) } else if (type === "responsive") { for (item in value) { if ($.type(_.options.responsive) !== "array") { _.options.responsive = [value[item]] } else { l = _.options.responsive.length - 1; while (l >= 0) { if (_.options.responsive[l].breakpoint === value[item].breakpoint) { _.options.responsive.splice(l, 1) }
                        l-- }
                    _.options.responsive.push(value[item]) } } } if (refresh) { _.unload();
            _.reinit() } };
    Slick.prototype.setPosition = function() { var _ = this;
        _.setDimensions();
        _.setHeight(); if (_.options.fade === false) { _.setCSS(_.getLeft(_.currentSlide)) } else { _.setFade() }
        _.$slider.trigger("setPosition", [_]) };
    Slick.prototype.setProps = function() { var _ = this,
            bodyStyle = document.body.style;
        _.positionProp = _.options.vertical === true ? "top" : "left"; if (_.positionProp === "top") { _.$slider.addClass("slick-vertical") } else { _.$slider.removeClass("slick-vertical") } if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) { if (_.options.useCSS === true) { _.cssTransitions = true } } if (_.options.fade) { if (typeof _.options.zIndex === "number") { if (_.options.zIndex < 3) { _.options.zIndex = 3 } } else { _.options.zIndex = _.defaults.zIndex } } if (bodyStyle.OTransform !== undefined) { _.animType = "OTransform";
            _.transformType = "-o-transform";
            _.transitionType = "OTransition"; if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false } if (bodyStyle.MozTransform !== undefined) { _.animType = "MozTransform";
            _.transformType = "-moz-transform";
            _.transitionType = "MozTransition"; if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false } if (bodyStyle.webkitTransform !== undefined) { _.animType = "webkitTransform";
            _.transformType = "-webkit-transform";
            _.transitionType = "webkitTransition"; if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false } if (bodyStyle.msTransform !== undefined) { _.animType = "msTransform";
            _.transformType = "-ms-transform";
            _.transitionType = "msTransition"; if (bodyStyle.msTransform === undefined) _.animType = false } if (bodyStyle.transform !== undefined && _.animType !== false) { _.animType = "transform";
            _.transformType = "transform";
            _.transitionType = "transition" }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false) };
    Slick.prototype.setSlideClasses = function(index) { var _ = this,
            centerOffset, allSlides, indexOffset, remainder;
        allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        _.$slides.eq(index).addClass("slick-current"); if (_.options.centerMode === true) { var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
            centerOffset = Math.floor(_.options.slidesToShow / 2); if (_.options.infinite === true) { if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) { _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false") } else { indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false") } if (index === 0) { allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center") } else if (index === _.slideCount - 1) { allSlides.eq(_.options.slidesToShow).addClass("slick-center") } }
            _.$slides.eq(index).addClass("slick-center") } else { if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) { _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") } else if (allSlides.length <= _.options.slidesToShow) { allSlides.addClass("slick-active").attr("aria-hidden", "false") } else { remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index; if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) { allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false") } else { allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") } } } if (_.options.lazyLoad === "ondemand" || _.options.lazyLoad === "anticipated") { _.lazyLoad() } };
    Slick.prototype.setupInfinite = function() { var _ = this,
            i, slideIndex, infiniteCount; if (_.options.fade === true) { _.options.centerMode = false } if (_.options.infinite === true && _.options.fade === false) { slideIndex = null; if (_.slideCount > _.options.slidesToShow) { if (_.options.centerMode === true) { infiniteCount = _.options.slidesToShow + 1 } else { infiniteCount = _.options.slidesToShow } for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) { slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned") } for (i = 0; i < infiniteCount + _.slideCount; i += 1) { slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned") }
                _.$slideTrack.find(".slick-cloned").find("[id]").each(function() { $(this).attr("id", "") }) } } };
    Slick.prototype.interrupt = function(toggle) { var _ = this; if (!toggle) { _.autoPlay() }
        _.interrupted = toggle };
    Slick.prototype.selectHandler = function(event) { var _ = this; var targetElement = $(event.target).is(".slick-slide") ? $(event.target) : $(event.target).parents(".slick-slide"); var index = parseInt(targetElement.attr("data-slick-index")); if (!index) index = 0; if (_.slideCount <= _.options.slidesToShow) { _.slideHandler(index, false, true); return }
        _.slideHandler(index) };
    Slick.prototype.slideHandler = function(index, sync, dontAnimate) { var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this,
            navTarget;
        sync = sync || false; if (_.animating === true && _.options.waitForAnimate === true) { return } if (_.options.fade === true && _.currentSlide === index) { return } if (sync === false) { _.asNavFor(index) }
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft; if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) { if (_.options.fade === false) { targetSlide = _.currentSlide; if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) { _.animateSlide(slideLeft, function() { _.postSlide(targetSlide) }) } else { _.postSlide(targetSlide) } } return } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) { if (_.options.fade === false) { targetSlide = _.currentSlide; if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) { _.animateSlide(slideLeft, function() { _.postSlide(targetSlide) }) } else { _.postSlide(targetSlide) } } return } if (_.options.autoplay) { clearInterval(_.autoPlayTimer) } if (targetSlide < 0) { if (_.slideCount % _.options.slidesToScroll !== 0) { animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll } else { animSlide = _.slideCount + targetSlide } } else if (targetSlide >= _.slideCount) { if (_.slideCount % _.options.slidesToScroll !== 0) { animSlide = 0 } else { animSlide = targetSlide - _.slideCount } } else { animSlide = targetSlide }
        _.animating = true;
        _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
        _.setSlideClasses(_.currentSlide); if (_.options.asNavFor) { navTarget = _.getNavTarget();
            navTarget = navTarget.slick("getSlick"); if (navTarget.slideCount <= navTarget.options.slidesToShow) { navTarget.setSlideClasses(_.currentSlide) } }
        _.updateDots();
        _.updateArrows(); if (_.options.fade === true) { if (dontAnimate !== true) { _.fadeSlideOut(oldSlide);
                _.fadeSlide(animSlide, function() { _.postSlide(animSlide) }) } else { _.postSlide(animSlide) }
            _.animateHeight(); return } if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) { _.animateSlide(targetLeft, function() { _.postSlide(animSlide) }) } else { _.postSlide(animSlide) } };
    Slick.prototype.startLoad = function() { var _ = this; if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) { _.$prevArrow.hide();
            _.$nextArrow.hide() } if (_.options.dots === true && _.slideCount > _.options.slidesToShow) { _.$dots.hide() }
        _.$slider.addClass("slick-loading") };
    Slick.prototype.swipeDirection = function() { var xDist, yDist, r, swipeAngle, _ = this;
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
        swipeAngle = Math.round(r * 180 / Math.PI); if (swipeAngle < 0) { swipeAngle = 360 - Math.abs(swipeAngle) } if (swipeAngle <= 45 && swipeAngle >= 0) { return _.options.rtl === false ? "left" : "right" } if (swipeAngle <= 360 && swipeAngle >= 315) { return _.options.rtl === false ? "left" : "right" } if (swipeAngle >= 135 && swipeAngle <= 225) { return _.options.rtl === false ? "right" : "left" } if (_.options.verticalSwiping === true) { if (swipeAngle >= 35 && swipeAngle <= 135) { return "down" } else { return "up" } } return "vertical" };
    Slick.prototype.swipeEnd = function(event) { var _ = this,
            slideCount, direction;
        _.dragging = false;
        _.swiping = false; if (_.scrolling) { _.scrolling = false; return false }
        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true; if (_.touchObject.curX === undefined) { return false } if (_.touchObject.edgeHit === true) { _.$slider.trigger("edge", [_, _.swipeDirection()]) } if (_.touchObject.swipeLength >= _.touchObject.minSwipe) { direction = _.swipeDirection(); switch (direction) {
                case "left":
                case "down":
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.currentDirection = 0; break;
                case "right":
                case "up":
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.currentDirection = 1; break;
                default:
            } if (direction != "vertical") { _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger("swipe", [_, direction]) } } else { if (_.touchObject.startX !== _.touchObject.curX) { _.slideHandler(_.currentSlide);
                _.touchObject = {} } } };
    Slick.prototype.swipeHandler = function(event) { var _ = this; if (_.options.swipe === false || "ontouchend" in document && _.options.swipe === false) { return } else if (_.options.draggable === false && event.type.indexOf("mouse") !== -1) { return }
        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold; if (_.options.verticalSwiping === true) { _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold } switch (event.data.action) {
            case "start":
                _.swipeStart(event); break;
            case "move":
                _.swipeMove(event); break;
            case "end":
                _.swipeEnd(event); break } };
    Slick.prototype.swipeMove = function(event) { var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;
        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null; if (!_.dragging || _.scrolling || touches && touches.length !== 1) { return false }
        curLeft = _.getLeft(_.currentSlide);
        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
        verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2))); if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) { _.scrolling = true; return false } if (_.options.verticalSwiping === true) { _.touchObject.swipeLength = verticalSwipeLength }
        swipeDirection = _.swipeDirection(); if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) { _.swiping = true;
            event.preventDefault() }
        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1); if (_.options.verticalSwiping === true) { positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1 }
        swipeLength = _.touchObject.swipeLength;
        _.touchObject.edgeHit = false; if (_.options.infinite === false) { if (_.currentSlide === 0 && swipeDirection === "right" || _.currentSlide >= _.getDotCount() && swipeDirection === "left") { swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true } } if (_.options.vertical === false) { _.swipeLeft = curLeft + swipeLength * positionOffset } else { _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset } if (_.options.verticalSwiping === true) { _.swipeLeft = curLeft + swipeLength * positionOffset } if (_.options.fade === true || _.options.touchMove === false) { return false } if (_.animating === true) { _.swipeLeft = null; return false }
        _.setCSS(_.swipeLeft) };
    Slick.prototype.swipeStart = function(event) { var _ = this,
            touches;
        _.interrupted = true; if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) { _.touchObject = {}; return false } if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) { touches = event.originalEvent.touches[0] }
        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
        _.dragging = true };
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() { var _ = this; if (_.$slidesCache !== null) { _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.appendTo(_.$slideTrack);
            _.reinit() } };
    Slick.prototype.unload = function() { var _ = this;
        $(".slick-cloned", _.$slider).remove(); if (_.$dots) { _.$dots.remove() } if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) { _.$prevArrow.remove() } if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) { _.$nextArrow.remove() }
        _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") };
    Slick.prototype.unslick = function(fromBreakpoint) { var _ = this;
        _.$slider.trigger("unslick", [_, fromBreakpoint]);
        _.destroy() };
    Slick.prototype.updateArrows = function() { var _ = this,
            centerOffset;
        centerOffset = Math.floor(_.options.slidesToShow / 2); if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) { _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"); if (_.currentSlide === 0) { _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false") } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) { _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false") } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) { _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false") } } };
    Slick.prototype.updateDots = function() { var _ = this; if (_.$dots !== null) { _.$dots.find("li").removeClass("slick-active").end();
            _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active") } };
    Slick.prototype.visibility = function() { var _ = this; if (_.options.autoplay) { if (document[_.hidden]) { _.interrupted = true } else { _.interrupted = false } } };
    $.fn.slick = function() { var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i, ret; for (i = 0; i < l; i++) { if (typeof opt == "object" || typeof opt == "undefined") _[i].slick = new Slick(_[i], opt);
            else ret = _[i].slick[opt].apply(_[i].slick, args); if (typeof ret != "undefined") return ret } return _ } });

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery.cookie = function(b, j, m) { if (typeof j != "undefined") { m = m || {}; if (j === null) { j = "";
            m.expires = -1 } var e = ""; if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) { var f; if (typeof m.expires == "number") { f = new Date();
                f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000)) } else { f = m.expires }
            e = "; expires=" + f.toUTCString() } var l = m.path ? "; path=" + (m.path) : ""; var g = m.domain ? "; domain=" + (m.domain) : ""; var a = m.secure ? "; secure" : "";
        document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("") } else { var d = null; if (document.cookie && document.cookie != "") { var k = document.cookie.split(";"); for (var h = 0; h < k.length; h++) { var c = jQuery.trim(k[h]); if (c.substring(0, b.length + 1) == (b + "=")) { d = decodeURIComponent(c.substring(b.length + 1)); break } } } return d } };

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r, G, f, v) {
    var J = f("html"),
        n = f(r),
        p = f(G),
        b = f.fancybox = function() { b.open.apply(this, arguments) },
        I = navigator.userAgent.match(/msie/i),
        B = null,
        s = G.createTouch !== v,
        t = function(a) { return a && a.hasOwnProperty && a instanceof f },
        q = function(a) { return a && "string" === f.type(a) },
        E = function(a) { return q(a) && 0 < a.indexOf("%") },
        l = function(a, d) { var e = parseInt(a, 10) || 0;
            d && E(a) && (e *= b.getViewport()[d] / 100); return Math.ceil(e) },
        w = function(a, b) { return l(a, b) + "px" };
    f.extend(b, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !s,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
            iframe: { scrolling: "auto", preload: !0 },
            swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
            keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] },
            direction: { next: "left", prev: "right" },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (I ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close fa fa-times-circle" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next ss-icon" href="javascript:;"><span class="fa fa-chevron-right"></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev ss-icon" href="javascript:;"><span class="fa fa-chevron-left"></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: { overlay: !0, title: !0 },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: { timer: null, isActive: !1 },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
                var k = {},
                    g, h, j, m, l;
                "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = { href: c.data("fancybox-href") || c.attr("href"), title: c.data("fancybox-title") || c.attr("title"), isDom: !0, element: c }, f.metadata && f.extend(!0, k,
                    c.metadata())) : k = c);
                g = d.href || k.href || (q(c) ? c : null);
                h = d.title !== v ? d.title : k.title || "";
                m = (j = d.content || k.content) ? "html" : d.type || k.type;
                !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
                q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
                j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g &&
                    k.isDom) && (m = "inline", j = c));
                f.extend(k, { href: g, type: m, content: j, title: h, selector: l });
                a[e] = k
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        },
        cancel: function() {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current ||
                b._afterZoomOut(a))
        },
        close: function(a) { b.cancel();!1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()))) },
        play: function(a) {
            var d = function() { clearTimeout(b.player.timer) },
                e = function() {
                    d();
                    b.current && b.player.isActive && (b.player.timer =
                        setTimeout(b.next, b.current.playSpeed))
                },
                c = function() { d();
                    p.unbind(".player");
                    b.player.isActive = !1;
                    b.trigger("onPlayEnd") };
            if (!0 === a || !b.player.isActive && !1 !== a) { if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({ "onCancel.player beforeClose.player": c, "onUpdate.player": e, "beforeLoad.player": d }), e(), b.trigger("onPlayStart") } else c()
        },
        next: function(a) { var d = b.current;
            d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next")) },
        prev: function(a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function(a, d, e) { var c = b.current;
            c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a))) },
        reposition: function(a, d) { var e = b.current,
                c = e ? e.wrap : null,
                k;
            c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k))) },
        update: function(a) {
            var d =
                a && a.type,
                e = !d || "orientationchange" === d;
            e && (clearTimeout(B), B = null);
            b.isOpen && !B && (B = setTimeout(function() { var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null) }, e && !s ? 0 : 300))
        },
        toggle: function(a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")),
                b.update())
        },
        hideLoading: function() { p.unbind(".loading");
            f("#fancybox-loading").remove() },
        showLoading: function() { var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function(a) { if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel() });
            b.defaults.fixed || (d = b.getViewport(), a.css({ position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x })) },
        getViewport: function() {
            var a = b.current && b.current.locked || !1,
                d = {
                    x: n.scrollLeft(),
                    y: n.scrollTop()
                };
            a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
            return d
        },
        unbindEvents: function() { b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            n.unbind(".fb") },
        bindEvents: function() {
            var a = b.current,
                d;
            a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) {
                var c = e.which || e.keyCode,
                    k = e.target || e.srcElement;
                if (27 === c && b.coming) return !1;
                !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function(d, k) { if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1; if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1 })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) {
                for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) &&
                    (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                if (0 !== c && !j && 1 < b.group.length && !a.canShrink) { if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
                    else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
                    d.preventDefault() }
            }))
        },
        trigger: function(a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e) return !1;
                c.helpers && f.each(c.helpers, function(d, e) {
                    if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
                });
                p.trigger(a)
            }
        },
        isImage: function(a) { return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) },
        isSWF: function(a) { return q(a) && a.match(/\.(swf)((\?|#).*)?$/i) },
        _start: function(a) {
            var d = {},
                e, c;
            a = l(a);
            e = b.group[a] || null;
            if (!e) return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: { overlay: { closeClick: !1 } }
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad")) b.coming = null;
            else {
                c = d.type;
                e = d.href;
                if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, { skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap) });
                f.each(["Top", "Right", "Bottom", "Left"], function(a, b) { d.skin.css("padding" + b, w(d.padding[a])) });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) { if (!d.content || !d.content.length) return b._error("content") } else if (!e) return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function(a) { f.extend(b.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error });
            b._afterLoad() },
        _loadImage: function() {
            var a = b.imgPreload = new Image;
            a.onload = function() { this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad() };
            a.onerror = function() {
                this.onload =
                    this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function() { var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, { url: a.href, error: function(a, e) { b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading() }, success: function(d, e) { "success" === e && (a.content = d, b._afterLoad()) } })) },
        _loadIframe: function() {
            var a = b.coming,
                d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function() { try { f(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (a) {} });
            a.iframe.preload && (b.showLoading(), d.one("load", function() { f(this).data("ready", 1);
                s || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad() }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function() {
            var a = b.group,
                d = b.current,
                e = a.length,
                c = d.preload ? Math.min(d.preload,
                    e - 1) : 0,
                f, g;
            for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function() {
            var a = b.coming,
                d = b.current,
                e, c, k, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
                else {
                    d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    b.unbindEvents();
                    e = a.content;
                    c = a.type;
                    k = a.scrolling;
                    f.extend(b, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: d
                    });
                    g = a.href;
                    switch (c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() { f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1) }));
                            break;
                        case "image":
                            e = a.tpl.image.replace("{href}",
                                g);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) { e += '<param name="' + a + '" value="' + b + '"></param>';
                                h += " " + a + '="' + b + '"' }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                    }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === k ? "scroll" :
                        "no" === k ? "hidden" : k);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents();
                    if (b.isOpened) { if (d.prevMethod) b.transitions[d.prevMethod]() } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages()
                }
        },
        _setDimension: function() {
            var a = b.getViewport(),
                d = 0,
                e = !1,
                c = !1,
                e = b.wrap,
                k = b.skin,
                g = b.inner,
                h = b.current,
                c = h.width,
                j = h.height,
                m = h.minWidth,
                u = h.minHeight,
                n = h.maxWidth,
                p = h.maxHeight,
                s = h.scrolling,
                q = h.scrollOutside ?
                h.scrollbarWidth : 0,
                x = h.margin,
                y = l(x[1] + x[3]),
                r = l(x[0] + x[2]),
                v, z, t, C, A, F, B, D, H;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            x = l(k.outerWidth(!0) - k.width());
            v = l(k.outerHeight(!0) - k.height());
            z = y + x;
            t = r + v;
            C = E(c) ? (a.w - z) * l(c) / 100 : c;
            A = E(j) ? (a.h - t) * l(j) / 100 : j;
            if ("iframe" === h.type) { if (H = h.content, h.autoHeight && 1 === H.data("ready")) try { H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0)) } catch (G) {} } else if (h.autoWidth ||
                h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
            c = l(C);
            j = l(A);
            D = C / A;
            m = l(E(m) ? l(m, "w") - z : m);
            n = l(E(n) ? l(n, "w") - z : n);
            u = l(E(u) ? l(u, "h") - t : u);
            p = l(E(p) ? l(p, "h") - t : p);
            F = n;
            B = p;
            h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
            z = a.w - y;
            r = a.h - r;
            h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight &&
                "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
            if (h.fitToView)
                if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
                    for (;
                        (a > z || y > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
                else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
            q && ("auto" === s && j < A && c + x + q < z) && (c += q);
            g.width(c).height(j);
            e.width(c + x);
            a = e.width();
            y = e.height();
            e = (a > z || y > r) && c > m && j > u;
            c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
            f.extend(h, { dim: { width: w(a), height: w(y) }, origWidth: C, origHeight: A, canShrink: e, canExpand: c, wPadding: x, hPadding: v, wrapSpace: y - k.outerHeight(!0), skinSpace: k.height() - j });
            !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
        },
        _getPosition: function(a) {
            var d = b.current,
                e = b.getViewport(),
                c = d.margin,
                f = b.wrap.width() + c[1] + c[3],
                g = b.wrap.height() + c[0] + c[2],
                c = { position: "absolute", top: c[0], left: c[3] };
            d.autoCenter && d.fixed &&
                !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function() {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(),
                    b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) { a.preventDefault();
                b.close() }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
        },
        _afterZoomOut: function(a) {
            a =
                a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function() {
            var a = b.current,
                d = a.element,
                e = a.orig,
                c = {},
                f = 50,
                g = 50,
                h = a.hPadding,
                j = a.wPadding,
                m = b.getViewport();
            !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
            t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) :
                (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
            return c = { top: w(c.top - h * a.topRatio), left: w(c.left - j * a.leftRatio), width: w(f + j), height: w(g + h) }
        },
        step: function(a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace,
                h = c.skinSpace;
            if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" ===
                f ? c : c - g * e - h * e))
        },
        zoomIn: function() { var a = b.current,
                d = a.pos,
                e = a.openEffect,
                c = "elastic" === e,
                k = f.extend({ opacity: 1 }, d);
            delete k.position;
            c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(k, { duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn }) },
        zoomOut: function() {
            var a = b.current,
                d = a.closeEffect,
                e = "elastic" === d,
                c = { opacity: 0.1 };
            e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c, { duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut })
        },
        changeIn: function() { var a = b.current,
                d = a.nextEffect,
                e = a.pos,
                c = { opacity: 1 },
                f = b.direction,
                g;
            e.opacity = 0.1; "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px")); "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, { duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn }) },
        changeOut: function() {
            var a =
                b.previous,
                d = a.prevEffect,
                e = { opacity: 0.1 },
                c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, { duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function() { f(this).trigger("onReset").remove() } })
        }
    };
    b.helpers.overlay = {
        defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0 },
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function(a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay =
                f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function(a) {
                if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ?
                    b.close() : d.close(), !1
            });
            this.overlay.css(a.css).show()
        },
        close: function() { var a, b;
            n.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, { overlay: null, fixed: !1 }) },
        update: function() {
            var a = "100%",
                b;
            this.overlay.width(a).height("100%");
            I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth),
                p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
            this.overlay.width(a).height(p.height())
        },
        onReady: function(a, b) { var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            e || this.create(a);
            a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);!0 === a.showEarly && this.beforeShow.apply(this, arguments) },
        beforeShow: function(a, b) {
            var e, c;
            b.locked && (!1 !== this.margin && (f("*").filter(function() {
                return "fixed" ===
                    f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
            this.open(a)
        },
        onUpdate: function() { this.fixed || this.update() },
        afterClose: function(a) { this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this)) }
    };
    b.helpers.title = {
        defaults: { type: "float", position: "bottom" },
        beforeShow: function(a) {
            var d =
                b.current,
                e = d.title,
                c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (q(e) && "" !== f.trim(e)) { d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>"); switch (c) {
                    case "inside":
                        c = b.skin; break;
                    case "outside":
                        c = b.wrap; break;
                    case "over":
                        c = b.inner; break;
                    default:
                        c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom"))) }
                d["top" === a.position ? "prependTo" : "appendTo"](c) }
        }
    };
    f.fn.fancybox = function(a) {
        var d,
            e = f(this),
            c = this.selector || "",
            k = function(g) { var h = f(this).blur(),
                    j = d,
                    k, l;!g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault()) };
        a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c +
            ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    p.ready(function() {
        var a, d;
        f.scrollbarWidth === v && (f.scrollbarWidth = function() { var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                b = a.children(),
                b = b.innerWidth() - b.height(99).innerWidth();
            a.remove(); return b });
        if (f.support.fixedPosition === v) {
            a = f.support;
            d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var e = 20 ===
                d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, { scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body") });
        a = f(r).width();
        J.addClass("fancybox-lock-test");
        d = f(r).width();
        J.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);

/**
 * Module to show Recently Viewed Products
 *
 * Copyright (c) 2014 Caroline Schnapp (11heavens.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

Shopify.Products = (function() { var a = { howManyToShow: 3, howManyToStoreInMemory: 10, wrapperId: "recently-viewed-products", templateId: "recently-viewed-product-template", onComplete: null }; var c = []; var h = null; var d = null; var e = 0; var b = { configuration: { expires: 90, path: "/", domain: window.location.hostname }, name: "shopify_recently_viewed", write: function(i) { jQuery.cookie(this.name, i.join(" "), this.configuration) }, read: function() { var i = []; var j = jQuery.cookie(this.name); if (j !== null) { i = j.split(" ") } return i }, destroy: function() { jQuery.cookie(this.name, null, this.configuration) }, remove: function(k) { var j = this.read(); var i = jQuery.inArray(k, j); if (i !== -1) { j.splice(i, 1);
                this.write(j) } } }; var f = function() { h.show(); if (a.onComplete) { try { a.onComplete() } catch (i) {} } }; var g = function() { if (c.length && e < a.howManyToShow) { jQuery.ajax({ dataType: "json", url: "/products/" + c[0] + ".js", cache: false, success: function(i) { d.tmpl(i).appendTo(h);
                    c.shift();
                    e++;
                    g() }, error: function() { b.remove(c[0]);
                    c.shift();
                    g() } }) } else { f() } }; return { resizeImage: function(m, j) { if (j == null) { return m } if (j == "master") { return m.replace(/http(s)?:/, "") } var i = m.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?/i); if (i != null) { var k = m.split(i[0]); var l = i[0]; return (k[0] + "_" + j + l).replace(/http(s)?:/, "") } else { return null } }, showRecentlyViewed: function(i) { var i = i || {};
            jQuery.extend(a, i);
            c = b.read();
            d = jQuery("#" + a.templateId);
            h = jQuery("#" + a.wrapperId);
            a.howManyToShow = Math.min(c.length, a.howManyToShow); if (a.howManyToShow && d.length && h.length) { g() } }, getConfig: function() { return a }, clearList: function() { b.destroy() }, recordRecentlyViewed: function(l) { var l = l || {};
            jQuery.extend(a, l); var j = b.read(); if (window.location.pathname.indexOf("/products/") !== -1) { var k = window.location.pathname.match(/\/products\/([a-z0-9\-]+)/)[1]; var i = jQuery.inArray(k, j); if (i === -1) { j.unshift(k);
                    j = j.splice(0, a.howManyToStoreInMemory) } else { j.splice(i, 1);
                    j.unshift(k) }
                b.write(j) } } } })();

Shopify.Products.recordRecentlyViewed();

! function(t) {
    function e(e) { for (var n, l, i = e[0], s = e[1], c = e[2], d = 0, f = []; d < i.length; d++) l = i[d], a[l] && f.push(a[l][0]), a[l] = 0; for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]); for (u && u(e); f.length;) f.shift()(); return r.push.apply(r, c || []), o() }

    function o() { for (var t, e = 0; e < r.length; e++) { for (var o = r[e], n = !0, i = 1; i < o.length; i++) { var s = o[i];
                0 !== a[s] && (n = !1) }
            n && (r.splice(e--, 1), t = l(l.s = o[0])) } return t } var n = {},
        a = { 1: 0 },
        r = [];

    function l(e) { if (n[e]) return n[e].exports; var o = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(o.exports, o, o.exports, l), o.l = !0, o.exports }
    l.m = t, l.c = n, l.d = function(t, e, o) { l.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }) }, l.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, l.t = function(t, e) { if (1 & e && (t = l(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var o = Object.create(null); if (l.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var n in t) l.d(o, n, function(e) { return t[e] }.bind(null, n)); return o }, l.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return l.d(e, "a", e), e }, l.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, l.p = ""; var i = window.shopifySlateJsonp = window.shopifySlateJsonp || [],
        s = i.push.bind(i);
    i.push = e, i = i.slice(); for (var c = 0; c < i.length; c++) e(i[c]); var u = s;
    r.push([49, 0]), o() }({ 128: function(t, e) {}, 49: function(t, e, o) { "use strict";
        o(50), o(51), o(52), o(53), o(6), o(54), o(55), o(128); var n = o(30);
        o(56), (0, n.focusHash)(), (0, n.bindInPageLinks)() }, 55: function(t, e, o) {}, 56: function(t, e, o) { "use strict"; var n = function(t) { return t && t.__esModule ? t : { default: t } }(o(12));
        (0, n.default)(document).ready(function() {
            (0, n.default)("select[data-custom]").each(function() { var t = (0, n.default)(this),
                    e = (0, n.default)(this).children("option").length;
                t.addClass("custom-select-hidden"), t.wrap("<div class='custom-select' data-custom-select></div>"), t.after("<div class='custom-select-styled' data-custom-select-styled></div>"); var o = t.next("[data-custom-select-styled]"),
                    a = function() { var t = {}; return window.location.search.length > 0 && document.location.search.substr(1).split("&").forEach(function(e) { var o = e.split("=");
                            t[o[0]] = o[1] }), t }();
                a.sort_by && (0, n.default)("body").hasClass("template-collection") ? o.text((0, n.default)('option[value="' + a.sort_by + '"]').text()) : o.text(t.children("option").eq(0).text()); for (var r = (0, n.default)("<ul />", "[data-custom-select-options]").insertAfter(o), l = 0; l < e; l++)(0, n.default)("<li />", { text: t.children("option").eq(l).text(), rel: t.children("option").eq(l).val() }).appendTo(r); var i = r.children("li");
                o.click(function(t) { t.stopPropagation(), (0, n.default)("[data-custom-select-styled].active").not(this).each(function() {
                        (0, n.default)(this).removeClass("active").next("[data-custom-select-options]").hide() }), (0, n.default)(this).toggleClass("active").next("[data-custom-select-options]").toggle() }), i.click(function(e) { e.stopPropagation(), o.text((0, n.default)(this).text()).removeClass("active"), t.val((0, n.default)(this).attr("rel")), t.change(), r.hide() }), (0, n.default)(document).click(function() { o.removeClass("active"), r.hide() }) }), (0, n.default)("[data-custom-select-free]").click(function(t) { t.stopPropagation(), (0, n.default)(this).toggleClass("active").next("[data-custom-select-options]").toggle() }) }) } });