!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , r = Object.getPrototypeOf
      , o = n.slice
      , i = n.flat ? function(e) {
        return n.flat.call(e)
    }
    : function(e) {
        return n.concat.apply([], e)
    }
      , a = n.push
      , s = n.indexOf
      , l = {}
      , u = l.toString
      , c = l.hasOwnProperty
      , d = c.toString
      , f = d.call(Object)
      , p = {}
      , h = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , g = function(e) {
        return null != e && e === e.window
    }
      , m = e.document
      , y = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function v(e, t, n) {
        var r, o, i = (n = n || m).createElement("script");
        if (i.text = e,
        t)
            for (r in y)
                (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e
    }
    var b = "3.6.0"
      , w = function(e, t) {
        return new w.fn.init(e,t)
    };
    function T(e) {
        var t = !!e && "length"in e && e.length
          , n = x(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: b,
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(w.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(w.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    w.extend = w.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || h(a) || (a = {}),
        s === l && (a = this,
        s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (u && r && (w.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t],
                    i = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {},
                    o = !1,
                    a[t] = w.extend(u, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    w.extend({
        expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof (n = c.call(t, "constructor") && t.constructor) || d.call(n) !== f))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            v(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (T(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                e[o++] = t[r];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                !t(e[o], o) !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, a = 0, s = [];
            if (T(e))
                for (r = e.length; a < r; a++)
                    null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e)
                    null != (o = t(e[a], a, n)) && s.push(o);
            return i(s)
        },
        guid: 1,
        support: p
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var S = function(e) {
        var t, n, r, o, i, a, s, l, u, c, d, f, p, h, g, m, y, v, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, S = 0, C = le(), E = le(), k = le(), A = le(), j = function(e, t) {
            return e === t && (d = !0),
            0
        }, D = {}.hasOwnProperty, N = [], I = N.pop, M = N.push, L = N.push, q = N.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", B = "[\\x20\\t\\r\\n\\f]", O = "(?:\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", R = "\\[" + B + "*(" + O + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + B + "*\\]", F = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)", $ = new RegExp(B + "+","g"), W = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$","g"), _ = new RegExp("^" + B + "*," + B + "*"), U = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"), z = new RegExp(B + "|>"), X = new RegExp(F), V = new RegExp("^" + O + "$"), J = {
            ID: new RegExp("^#(" + O + ")"),
            CLASS: new RegExp("^\\.(" + O + ")"),
            TAG: new RegExp("^(" + O + "|[*])"),
            ATTR: new RegExp("^" + R),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)","i"),
            bool: new RegExp("^(?:" + H + ")$","i"),
            needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ie = function() {
            f()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(N = q.call(w.childNodes), w.childNodes),
            N[w.childNodes.length].nodeType
        } catch (t) {
            L = {
                apply: N.length ? function(e, t) {
                    M.apply(e, q.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(e, t, r, o) {
            var i, s, u, c, d, h, y, v = t && t.ownerDocument, w = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                return r;
            if (!o && (f(t),
            t = t || p,
            g)) {
                if (11 !== w && (d = Z.exec(e)))
                    if (i = d[1]) {
                        if (9 === w) {
                            if (!(u = t.getElementById(i)))
                                return r;
                            if (u.id === i)
                                return r.push(u),
                                r
                        } else if (v && (u = v.getElementById(i)) && x(t, u) && u.id === i)
                            return r.push(u),
                            r
                    } else {
                        if (d[2])
                            return L.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((i = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(r, t.getElementsByClassName(i)),
                            r
                    }
                if (n.qsa && !A[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (y = e,
                    v = t,
                    1 === w && (z.test(e) || U.test(e))) {
                        for ((v = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = b)),
                        s = (h = a(e)).length; s--; )
                            h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                        y = h.join(",")
                    }
                    try {
                        return L.apply(r, v.querySelectorAll(y)),
                        r
                    } catch (t) {
                        A(e, !0)
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(W, "$1"), t, r, o)
        }
        function le() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = o
            }
        }
        function ue(e) {
            return e[b] = !0,
            e
        }
        function ce(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function de(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
                r.attrHandle[n[o]] = t
        }
        function fe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function pe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ge(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function me(e) {
            return ue(function(t) {
                return t = +t,
                ue(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                        n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }
        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {},
        i = se.isXML = function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        f = se.setDocument = function(e) {
            var t, o, a = e ? e.ownerDocument || e : w;
            return a != p && 9 === a.nodeType && a.documentElement && (h = (p = a).documentElement,
            g = !i(p),
            w != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)),
            n.scope = ce(function(e) {
                return h.appendChild(e).appendChild(p.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            n.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ce(function(e) {
                return e.appendChild(p.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = K.test(p.getElementsByClassName),
            n.getById = ce(function(e) {
                return h.appendChild(e).id = b,
                !p.getElementsByName || !p.getElementsByName(b).length
            }),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, r, o, i = t.getElementById(e);
                    if (i) {
                        if ((n = i.getAttributeNode("id")) && n.value === e)
                            return [i];
                        for (o = t.getElementsByName(e),
                        r = 0; i = o[r++]; )
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                                return [i]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], o = 0, i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            y = [],
            m = [],
            (n.qsa = K.test(p.querySelectorAll)) && (ce(function(e) {
                var t;
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + B + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + B + "*(?:value|" + H + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                (t = p.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || m.push("\\[" + B + "*name" + B + "*=" + B + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                m.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + B + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (n.matchesSelector = K.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                n.disconnectedMatch = v.call(e, "*"),
                v.call(e, "[s!='']:x"),
                y.push("!=", F)
            }),
            m = m.length && new RegExp(m.join("|")),
            y = y.length && new RegExp(y.join("|")),
            t = K.test(h.compareDocumentPosition),
            x = t || K.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            j = t ? function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && x(w, e) ? -1 : t == p || t.ownerDocument == w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], s = [t];
                if (!o || !i)
                    return e == p ? -1 : t == p ? 1 : o ? -1 : i ? 1 : c ? P(c, e) - P(c, t) : 0;
                if (o === i)
                    return fe(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? fe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
            }
            ),
            p
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (f(e),
            n.matchesSelector && g && !A[t + " "] && (!y || !y.test(t)) && (!m || !m.test(t)))
                try {
                    var r = v.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {
                    A(t, !0)
                }
            return 0 < se(t, p, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != p && f(e),
            x(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != p && f(e);
            var o = r.attrHandle[t.toLowerCase()]
              , i = o && D.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
            return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, oe)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, r = [], o = 0, i = 0;
            if (d = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(j),
            d) {
                for (; t = e[i++]; )
                    t === e[i] && (o = r.push(i));
                for (; o--; )
                    e.splice(r[o], 1)
            }
            return c = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += o(t);
            return n
        }
        ,
        (r = se.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: J,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return J.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = C[e + " "];
                    return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && C(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var o = se.attr(r, e);
                        return null == o ? "!=" === t : !t || (o += "",
                        "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace($, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, d, f, p, h, g = i !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s, x = !1;
                        if (m) {
                            if (i) {
                                for (; g; ) {
                                    for (f = t; f = f[g]; )
                                        if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && v) {
                                for (x = (p = (u = (c = (d = (f = m)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && u[1]) && u[2],
                                f = p && m.childNodes[p]; f = ++p && f && f[g] || (x = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++x && f === t) {
                                        c[e] = [T, p, x];
                                        break
                                    }
                            } else if (v && (x = p = (u = (c = (d = (f = t)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && u[1]),
                            !1 === x)
                                for (; (f = ++p && f && f[g] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++x || (v && ((c = (d = f[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [T, x]),
                                f !== t)); )
                                    ;
                            return (x -= o) === r || x % r == 0 && 0 <= x / r
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return o[b] ? o(t) : 1 < o.length ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, n) {
                        for (var r, i = o(e, t), a = i.length; a--; )
                            e[r = P(e, i[a])] = !(n[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, n)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: ue(function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace(W, "$1"));
                    return r[b] ? ue(function(e, t, n, o) {
                        for (var i, a = r(e, null, o, []), s = e.length; s--; )
                            (i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, o, i) {
                        return t[0] = e,
                        r(t, null, i, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: ue(function(e) {
                    return function(t) {
                        return 0 < se(e, t).length
                    }
                }),
                contains: ue(function(e) {
                    return e = e.replace(te, ne),
                    function(t) {
                        return -1 < (t.textContent || o(t)).indexOf(e)
                    }
                }),
                lang: ue(function(e) {
                    return V.test(e || "") || se.error("unsupported lang: " + e),
                    e = e.replace(te, ne).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Q.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: me(function() {
                    return [0]
                }),
                last: me(function(e, t) {
                    return [t - 1]
                }),
                eq: me(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: me(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: me(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: me(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: me(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = pe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = he(t);
        function ve() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(e, t, n) {
            var r = t.dir
              , o = t.next
              , i = o || r
              , a = n && "parentNode" === i
              , s = S++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, o);
                return !1
            }
            : function(t, n, l) {
                var u, c, d, f = [T, s];
                if (l) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || a) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            if (c = (d = t[b] || (t[b] = {}))[t.uniqueID] || (d[t.uniqueID] = {}),
                            o && o === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((u = c[i]) && u[0] === T && u[1] === s)
                                    return f[2] = u[2];
                                if ((c[i] = f)[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function we(e) {
            return 1 < e.length ? function(t, n, r) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function Te(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
                (i = e[s]) && (n && !n(i, r, o) || (a.push(i),
                u && t.push(s)));
            return a
        }
        function Se(e, t, n, r, o, i) {
            return r && !r[b] && (r = Se(r)),
            o && !o[b] && (o = Se(o, i)),
            ue(function(i, a, s, l) {
                var u, c, d, f = [], p = [], h = a.length, g = i || function(e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++)
                        se(e, t[r], n);
                    return n
                }(t || "*", s.nodeType ? [s] : s, []), m = !e || !i && t ? g : Te(g, f, e, s, l), y = n ? o || (i ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l),
                r)
                    for (u = Te(y, p),
                    r(u, [], s, l),
                    c = u.length; c--; )
                        (d = u[c]) && (y[p[c]] = !(m[p[c]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [],
                            c = y.length; c--; )
                                (d = y[c]) && u.push(m[c] = d);
                            o(null, y = [], u, l)
                        }
                        for (c = y.length; c--; )
                            (d = y[c]) && -1 < (u = o ? P(i, d) : f[c]) && (i[u] = !(a[u] = d))
                    }
                } else
                    y = Te(y === a ? y.splice(h, y.length) : y),
                    o ? o(null, a, y, l) : L.apply(a, y)
            })
        }
        function Ce(e) {
            for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = be(function(e) {
                return e === t
            }, s, !0), d = be(function(e) {
                return -1 < P(t, e)
            }, s, !0), f = [function(e, n, r) {
                var o = !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                return t = null,
                o
            }
            ]; l < i; l++)
                if (n = r.relative[e[l].type])
                    f = [be(we(f), n)];
                else {
                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
                        for (o = ++l; o < i && !r.relative[e[o].type]; o++)
                            ;
                        return Se(1 < l && we(f), 1 < l && xe(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, l < o && Ce(e.slice(l, o)), o < i && Ce(e = e.slice(o)), o < i && xe(e))
                    }
                    f.push(n)
                }
            return we(f)
        }
        return ve.prototype = r.filters = r.pseudos,
        r.setFilters = new ve,
        a = se.tokenize = function(e, t) {
            var n, o, i, a, s, l, u, c = E[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            l = [],
            u = r.preFilter; s; ) {
                for (a in n && !(o = _.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                l.push(i = [])),
                n = !1,
                (o = U.exec(s)) && (n = o.shift(),
                i.push({
                    value: n,
                    type: o[0].replace(W, " ")
                }),
                s = s.slice(n.length)),
                r.filter)
                    !(o = J[a].exec(s)) || u[a] && !(o = u[a](o)) || (n = o.shift(),
                    i.push({
                        value: n,
                        type: a,
                        matches: o
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? se.error(e) : E(e, l).slice(0)
        }
        ,
        s = se.compile = function(e, t) {
            var n, o, i, s, l, c, d = [], h = [], m = k[e + " "];
            if (!m) {
                for (t || (t = a(e)),
                n = t.length; n--; )
                    (m = Ce(t[n]))[b] ? d.push(m) : h.push(m);
                (m = k(e, (o = h,
                s = 0 < (i = d).length,
                l = 0 < o.length,
                c = function(e, t, n, a, c) {
                    var d, h, m, y = 0, v = "0", x = e && [], b = [], w = u, S = e || l && r.find.TAG("*", c), C = T += null == w ? 1 : Math.random() || .1, E = S.length;
                    for (c && (u = t == p || t || c); v !== E && null != (d = S[v]); v++) {
                        if (l && d) {
                            for (h = 0,
                            t || d.ownerDocument == p || (f(d),
                            n = !g); m = o[h++]; )
                                if (m(d, t || p, n)) {
                                    a.push(d);
                                    break
                                }
                            c && (T = C)
                        }
                        s && ((d = !m && d) && y--,
                        e && x.push(d))
                    }
                    if (y += v,
                    s && v !== y) {
                        for (h = 0; m = i[h++]; )
                            m(x, b, t, n);
                        if (e) {
                            if (0 < y)
                                for (; v--; )
                                    x[v] || b[v] || (b[v] = I.call(a));
                            b = Te(b)
                        }
                        L.apply(a, b),
                        c && !e && 0 < b.length && 1 < y + i.length && se.uniqueSort(a)
                    }
                    return c && (T = C,
                    u = w),
                    x
                }
                ,
                s ? ue(c) : c))).selector = e
            }
            return m
        }
        ,
        l = se.select = function(e, t, n, o) {
            var i, l, u, c, d, f = "function" == typeof e && e, p = !o && a(e = f.selector || e);
            if (n = n || [],
            1 === p.length) {
                if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    f && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                for (i = J.needsContext.test(e) ? 0 : l.length; i-- && (u = l[i],
                !r.relative[c = u.type]); )
                    if ((d = r.find[c]) && (o = d(u.matches[0].replace(te, ne), ee.test(l[0].type) && ye(t.parentNode) || t))) {
                        if (l.splice(i, 1),
                        !(e = o.length && xe(l)))
                            return L.apply(n, o),
                            n;
                        break
                    }
            }
            return (f || s(e, p))(o, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(j).join("") === b,
        n.detectDuplicates = !!d,
        f(),
        n.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(H, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(e);
    w.find = S,
    w.expr = S.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = S.uniqueSort,
    w.text = S.getText,
    w.isXMLDoc = S.isXML,
    w.contains = S.contains,
    w.escapeSelector = S.escape;
    var C = function(e, t, n) {
        for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && w(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , E = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = w.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, t, n) {
        return h(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return -1 < s.call(t, e) !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    w.fn.extend({
        find: function(e) {
            var t, n, r = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(w(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (w.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                w.find(e, o[t], n);
            return 1 < r ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1).length
        }
    });
    var N, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var r, o;
        if (!e)
            return this;
        if (n = n || N,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof w ? t[0] : t,
                w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, !0)),
                j.test(r[1]) && w.isPlainObject(t))
                    for (r in t)
                        h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = m.getElementById(r[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }
    ).prototype = w.fn,
    N = w(m);
    var M = /^(?:parents|prev(?:Until|All))/
      , L = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function q(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, o = this.length, i = [], a = "string" != typeof e && w(e);
            if (!k.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
            return this.pushStack(1 < i.length ? w.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return C(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return C(e, "parentNode", n)
        },
        next: function(e) {
            return q(e, "nextSibling")
        },
        prev: function(e) {
            return q(e, "previousSibling")
        },
        nextAll: function(e) {
            return C(e, "nextSibling")
        },
        prevAll: function(e) {
            return C(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return C(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return C(e, "previousSibling", n)
        },
        siblings: function(e) {
            return E((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return E(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var o = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (o = w.filter(r, o)),
            1 < this.length && (L[e] || w.uniqueSort(o),
            M.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function H(e) {
        return e
    }
    function B(e) {
        throw e
    }
    function O(e, t, n, r) {
        var o;
        try {
            e && h(o = e.promise) ? o.call(e).done(t).fail(n) : e && h(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e,
        n = {},
        w.each(t.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : w.extend({}, e);
        var r, o, i, a, s = [], l = [], u = -1, c = function() {
            for (a = a || e.once,
            i = r = !0; l.length; u = -1)
                for (o = l.shift(); ++u < s.length; )
                    !1 === s[u].apply(o[0], o[1]) && e.stopOnFalse && (u = s.length,
                    o = !1);
            e.memory || (o = !1),
            r = !1,
            a && (s = o ? [] : "")
        }, d = {
            add: function() {
                return s && (o && !r && (u = s.length - 1,
                l.push(o)),
                function t(n) {
                    w.each(n, function(n, r) {
                        h(r) ? e.unique && d.has(r) || s.push(r) : r && r.length && "string" !== x(r) && t(r)
                    })
                }(arguments),
                o && !r && c()),
                this
            },
            remove: function() {
                return w.each(arguments, function(e, t) {
                    for (var n; -1 < (n = w.inArray(t, s, n)); )
                        s.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < w.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = l = [],
                s = o = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = l = [],
                o || r || (s = o = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                l.push(t),
                r || c()),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return d
    }
    ,
    w.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , o = {
                state: function() {
                    return r
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return o.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return w.Deferred(function(t) {
                        w.each(n, function(n, r) {
                            var o = h(e[r[4]]) && e[r[4]];
                            i[r[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, o) {
                    var i = 0;
                    function a(t, n, r, o) {
                        return function() {
                            var s = this
                              , l = arguments
                              , u = function() {
                                var e, u;
                                if (!(t < i)) {
                                    if ((e = r.apply(s, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    u = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    h(u) ? o ? u.call(e, a(i, n, H, o), a(i, n, B, o)) : (i++,
                                    u.call(e, a(i, n, H, o), a(i, n, B, o), a(i, n, H, n.notifyWith))) : (r !== H && (s = void 0,
                                    l = [e]),
                                    (o || n.resolveWith)(s, l))
                                }
                            }
                              , c = o ? u : function() {
                                try {
                                    u()
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace),
                                    i <= t + 1 && (r !== B && (s = void 0,
                                    l = [e]),
                                    n.rejectWith(s, l))
                                }
                            }
                            ;
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return w.Deferred(function(e) {
                        n[0][3].add(a(0, e, h(o) ? o : H, e.notifyWith)),
                        n[1][3].add(a(0, e, h(t) ? t : H)),
                        n[2][3].add(a(0, e, h(r) ? r : B))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? w.extend(e, o) : o
                }
            }
              , i = {};
            return w.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                o[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                i[t[0]] = function() {
                    return i[t[0] + "With"](this === i ? void 0 : this, arguments),
                    this
                }
                ,
                i[t[0] + "With"] = a.fireWith
            }),
            o.promise(i),
            t && t.call(i, i),
            i
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = o.call(arguments)
              , a = w.Deferred()
              , s = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = 1 < arguments.length ? o.call(arguments) : n,
                    --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && (O(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || h(i[n] && i[n].then)))
                return a.then();
            for (; n--; )
                O(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var F = w.Deferred();
    function $() {
        m.removeEventListener("DOMContentLoaded", $),
        e.removeEventListener("load", $),
        w.ready()
    }
    w.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            w.readyException(e)
        }),
        this
    }
    ,
    w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || F.resolveWith(m, [w])
        }
    }),
    w.ready.then = F.then,
    "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", $),
    e.addEventListener("load", $));
    var W = function(e, t, n, r, o, i, a) {
        var s = 0
          , l = e.length
          , u = null == n;
        if ("object" === x(n))
            for (s in o = !0,
            n)
                W(e, t, s, n[s], !0, i, a);
        else if (void 0 !== r && (o = !0,
        h(r) || (a = !0),
        u && (a ? (t.call(e, r),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(w(e), n)
        }
        )),
        t))
            for (; s < l; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : i
    }
      , _ = /^-ms-/
      , U = /-([a-z])/g;
    function z(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(U, z)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function J() {
        this.expando = w.expando + J.uid++
    }
    J.uid = 1,
    J.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t)
                o[X(t)] = n;
            else
                for (r in t)
                    o[X(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var Y = new J
      , G = new J
      , Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, o;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Q.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                G.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return G.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    w.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0], a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = G.get(i),
                1 === i.nodeType && !Y.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(i, r, o[r]));
                    Y.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                G.set(this, e)
            }) : W(this, function(t) {
                var n;
                if (i && void 0 === t)
                    return void 0 !== (n = G.get(i, e)) ? n : void 0 !== (n = Z(i, e)) ? n : void 0;
                this.each(function() {
                    G.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }),
    w.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, w.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t)
              , r = n.length
              , o = n.shift()
              , i = w._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            r--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete i.stop,
            o.call(e, function() {
                w.dequeue(e, t)
            }, i)),
            !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, o = w.Deferred(), i = this, a = this.length, s = function() {
                --r || o.resolveWith(i, [i])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = Y.get(i[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            o.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = m.documentElement
      , oe = function(e) {
        return w.contains(e.ownerDocument, e)
    }
      , ie = {
        composed: !0
    };
    re.getRootNode && (oe = function(e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(ie) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
    };
    function se(e, t, n, r) {
        var o, i, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return w.css(e, t, "")
        }
        , l = s(), u = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = e.nodeType && (w.cssNumber[t] || "px" !== u && +l) && te.exec(w.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2,
            u = u || c[3],
            c = +l || 1; a--; )
                w.style(e, t, c + u),
                (1 - i) * (1 - (i = s() / l || .5)) <= 0 && (a = 0),
                c /= i;
            c *= 2,
            w.style(e, t, c + u),
            n = n || []
        }
        return n && (c = +c || +l || 0,
        o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = u,
        r.start = c,
        r.end = o)),
        o
    }
    var le = {};
    function ue(e, t) {
        for (var n, r, o, i, a, s, l, u = [], c = 0, d = e.length; c < d; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (u[c] = Y.get(r, "display") || null,
            u[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (u[c] = (l = a = i = void 0,
            a = (o = r).ownerDocument,
            s = o.nodeName,
            (l = le[s]) || (i = a.body.appendChild(a.createElement(s)),
            l = w.css(i, "display"),
            i.parentNode.removeChild(i),
            "none" === l && (l = "block"),
            le[s] = l)))) : "none" !== n && (u[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < d; c++)
            null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    w.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var ce, de, fe = /^(?:checkbox|radio)$/i, pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = m.createDocumentFragment().appendChild(m.createElement("div")),
    (de = m.createElement("input")).setAttribute("type", "radio"),
    de.setAttribute("checked", "checked"),
    de.setAttribute("name", "t"),
    ce.appendChild(de),
    p.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    p.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    p.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? w.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    p.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ve = /<|&#?\w+;/;
    function xe(e, t, n, r, o) {
        for (var i, a, s, l, u, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((i = e[p]) || 0 === i)
                if ("object" === x(i))
                    w.merge(f, i.nodeType ? [i] : i);
                else if (ve.test(i)) {
                    for (a = a || d.appendChild(t.createElement("div")),
                    s = (pe.exec(i) || ["", ""])[1].toLowerCase(),
                    l = ge[s] || ge._default,
                    a.innerHTML = l[1] + w.htmlPrefilter(i) + l[2],
                    c = l[0]; c--; )
                        a = a.lastChild;
                    w.merge(f, a.childNodes),
                    (a = d.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(i));
        for (d.textContent = "",
        p = 0; i = f[p++]; )
            if (r && -1 < w.inArray(i, r))
                o && o.push(i);
            else if (u = oe(i),
            a = me(d.appendChild(i), "script"),
            u && ye(a),
            n)
                for (c = 0; i = a[c++]; )
                    he.test(i.type || "") && n.push(i);
        return d
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0
    }
    function Te() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return m.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ce(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ce(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n,
        r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
        r = void 0) : (o = r,
        r = n,
        n = void 0)),
        !1 === o)
            o = Te;
        else if (!o)
            return e;
        return 1 === i && (a = o,
        (o = function(e) {
            return w().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = w.guid++)),
        e.each(function() {
            w.event.add(this, t, o, r, n)
        })
    }
    function Ee(e, t, n) {
        n ? (Y.set(e, t, !1),
        w.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, i, a = Y.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)
                        (w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = o.call(arguments),
                    Y.set(this, t, a),
                    r = n(this, t),
                    this[t](),
                    a !== (i = Y.get(this, t)) || r ? Y.set(this, t, !1) : i = {},
                    a !== i)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        i && i.value
                } else
                    a.length && (Y.set(this, t, {
                        value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, t) && w.event.add(e, t, we)
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, l, u, c, d, f, p, h, g, m = Y.get(e);
            if (V(e))
                for (n.handler && (n = (i = n).handler,
                o = i.selector),
                o && w.find.matchesSelector(re, o),
                n.guid || (n.guid = w.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (a = m.handle) || (a = m.handle = function(t) {
                    return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                u = (t = (t || "").match(P) || [""]).length; u--; )
                    p = g = (s = be.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (d = w.event.special[p] || {},
                    p = (o ? d.delegateType : d.bindType) || p,
                    d = w.event.special[p] || {},
                    c = w.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && w.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i),
                    (f = l[p]) || ((f = l[p] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                    d.add && (d.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    o ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                    w.event.global[p] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, l, u, c, d, f, p, h, g, m = Y.hasData(e) && Y.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(P) || [""]).length; u--; )
                    if (p = g = (s = be.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = w.event.special[p] || {},
                        f = l[p = (r ? d.delegateType : d.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = i = f.length; i--; )
                            c = f[i],
                            !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(i, 1),
                            c.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, c));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || w.removeEvent(e, p, m.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            w.event.remove(e, p + t[u], n, r, !0);
                w.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a, s = new Array(arguments.length), l = w.event.fix(e), u = (Y.get(this, "events") || Object.create(null))[l.type] || [], c = w.event.special[l.type] || {};
            for (s[0] = l,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (l.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                for (a = w.event.handlers.call(this, l, u),
                t = 0; (o = a[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = o.elem,
                    n = 0; (i = o.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        l.rnamespace && !1 !== i.namespace && !l.rnamespace.test(i.namespace) || (l.handleObj = i,
                        l.data = i.data,
                        void 0 !== (r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (l.result = r) && (l.preventDefault(),
                        l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l),
                l.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (i = [],
                        a = {},
                        n = 0; n < l; n++)
                            void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < w(o, this).index(u) : w.find(o, this, null, [u]).length),
                            a[o] && i.push(r);
                        i.length && s.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return u = this,
            l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && A(t, "input") && Ee(t, "click", we),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && A(t, "input") && Ee(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    w.Event = function(e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && w.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[w.expando] = !0
    }
    ,
    w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, w.event.addProp),
    w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        w.event.special[e] = {
            setup: function() {
                return Ee(this, e, Se),
                !1
            },
            trigger: function() {
                return Ee(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }),
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget, o = e.handleObj;
                return r && (r === this || w.contains(this, r)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    w.fn.extend({
        on: function(e, t, n, r) {
            return Ce(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ce(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Te),
            this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i
      , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function De(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }
    function Ne(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Ie(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Me(e, t) {
        var n, r, o, i, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (o in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[o].length; n < r; n++)
                        w.event.add(t, o, s[o][n]);
            G.hasData(e) && (i = G.access(e),
            a = w.extend({}, i),
            G.set(t, a))
        }
    }
    function Le(e, t, n, r) {
        t = i(t);
        var o, a, s, l, u, c, d = 0, f = e.length, g = f - 1, m = t[0], y = h(m);
        if (y || 1 < f && "string" == typeof m && !p.checkClone && Ae.test(m))
            return e.each(function(o) {
                var i = e.eq(o);
                y && (t[0] = m.call(this, o, i.html())),
                Le(i, t, n, r)
            });
        if (f && (a = (o = xe(t, e[0].ownerDocument, !1, e, r)).firstChild,
        1 === o.childNodes.length && (o = a),
        a || r)) {
            for (l = (s = w.map(me(o, "script"), Ne)).length; d < f; d++)
                u = o,
                d !== g && (u = w.clone(u, !0, !0),
                l && w.merge(s, me(u, "script"))),
                n.call(e[d], u, d);
            if (l)
                for (c = s[s.length - 1].ownerDocument,
                w.map(s, Ie),
                d = 0; d < l; d++)
                    u = s[d],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, c) : v(u.textContent.replace(je, ""), u, c))
        }
        return e
    }
    function qe(e, t, n) {
        for (var r, o = t ? w.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
            n || 1 !== r.nodeType || w.cleanData(me(r)),
            r.parentNode && (n && oe(r) && ye(me(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, o, i, a, s, l, u, c = e.cloneNode(!0), d = oe(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = me(c),
                r = 0,
                o = (i = me(e)).length; r < o; r++)
                    s = i[r],
                    "input" === (u = (l = a[r]).nodeName.toLowerCase()) && fe.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (i = i || me(e),
                    a = a || me(c),
                    r = 0,
                    o = i.length; r < o; r++)
                        Me(i[r], a[r]);
                else
                    Me(e, c);
            return 0 < (a = me(c, "script")).length && ye(a, !d && me(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, o = w.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                o[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }),
    w.fn.extend({
        detach: function(e) {
            return qe(this, e, !0)
        },
        remove: function(e) {
            return qe(this, e)
        },
        text: function(e) {
            return W(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (w.cleanData(me(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return W(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Le(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(me(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], o = w(e), i = o.length - 1, s = 0; s <= i; s++)
                n = s === i ? this : this.clone(!0),
                w(o[s])[t](n),
                a.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , He = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Be = function(e, t, n) {
        var r, o, i = {};
        for (o in t)
            i[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = n.call(e),
        t)
            e.style[o] = i[o];
        return r
    }
      , Oe = new RegExp(ne.join("|"),"i");
    function Re(e, t, n) {
        var r, o, i, a, s = e.style;
        return (n = n || He(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = w.style(e, t)),
        !p.pixelBoxStyles() && Pe.test(a) && Oe.test(t) && (r = s.width,
        o = s.minWidth,
        i = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = o,
        s.maxWidth = i)),
        void 0 !== a ? a + "" : a
    }
    function Fe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top,
                l = 12 === n(t.marginLeft),
                c.style.right = "60%",
                a = 36 === n(t.right),
                o = 36 === n(t.width),
                c.style.position = "absolute",
                i = 12 === n(c.offsetWidth / 3),
                re.removeChild(u),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, i, a, s, l, u = m.createElement("div"), c = m.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        p.clearCloneStyle = "content-box" === c.style.backgroundClip,
        w.extend(p, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                l
            },
            scrollboxSize: function() {
                return t(),
                i
            },
            reliableTrDimensions: function() {
                var t, n, r, o;
                return null == s && (t = m.createElement("table"),
                n = m.createElement("tr"),
                r = m.createElement("div"),
                t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                n.style.cssText = "border:1px solid",
                n.style.height = "1px",
                r.style.height = "9px",
                r.style.display = "block",
                re.appendChild(t).appendChild(n).appendChild(r),
                o = e.getComputedStyle(n),
                s = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight,
                re.removeChild(t)),
                s
            }
        }))
    }();
    var $e = ["Webkit", "Moz", "ms"]
      , We = m.createElement("div").style
      , _e = {};
    function Ue(e) {
        return w.cssProps[e] || _e[e] || (e in We ? e : _e[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--; )
                if ((e = $e[n] + t)in We)
                    return e
        }(e) || e)
    }
    var ze = /^(none|table(?!-c[ea]).+)/
      , Xe = /^--/
      , Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Je = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ge(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , l = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += w.css(e, n + ne[a], !0, o)),
            r ? ("content" === n && (l -= w.css(e, "padding" + ne[a], !0, o)),
            "margin" !== n && (l -= w.css(e, "border" + ne[a] + "Width", !0, o))) : (l += w.css(e, "padding" + ne[a], !0, o),
            "padding" !== n ? l += w.css(e, "border" + ne[a] + "Width", !0, o) : s += w.css(e, "border" + ne[a] + "Width", !0, o));
        return !r && 0 <= i && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - .5)) || 0),
        l
    }
    function Qe(e, t, n) {
        var r = He(e)
          , o = (!p.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r)
          , i = o
          , a = Re(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!p.boxSizingReliable() && o || !p.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === w.css(e, "boxSizing", !1, r),
        (i = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ge(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
    }
    function Ke(e, t, n, r, o) {
        return new Ke.prototype.init(e,t,n,r,o)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Re(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = X(t), l = Xe.test(t), u = e.style;
                if (l || (t = Ue(s)),
                a = w.cssHooks[t] || w.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t];
                "string" == (i = typeof n) && (o = te.exec(n)) && o[1] && (n = se(e, t, o),
                i = "number"),
                null != n && n == n && ("number" !== i || l || (n += o && o[3] || (w.cssNumber[s] ? "" : "px")),
                p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = X(t);
            return Xe.test(t) || (t = Ue(s)),
            (a = w.cssHooks[t] || w.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = Re(e, t, r)),
            "normal" === o && t in Je && (o = Je[t]),
            "" === n || n ? (i = parseFloat(o),
            !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }),
    w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, t, r) : Be(e, Ve, function() {
                        return Qe(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var o, i = He(e), a = !p.scrollboxSize() && "absolute" === i.position, s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, i), l = r ? Ge(e, t, r, s, i) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - Ge(e, t, "border", !1, i) - .5)),
                l && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                n = w.css(e, t)),
                Ye(0, n, l)
            }
        }
    }),
    w.cssHooks.marginLeft = Fe(p.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    o[e + ne[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        },
        "margin" !== e && (w.cssHooks[e + t].set = Ye)
    }),
    w.fn.extend({
        css: function(e, t) {
            return W(this, function(e, t, n) {
                var r, o, i = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = He(e),
                    o = t.length; a < o; a++)
                        i[t[a]] = w.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((w.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, o, i) {
            this.elem = e,
            this.prop = n,
            this.easing = o || w.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = i || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
            this
        }
    }).init.prototype = Ke.prototype,
    (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    w.fx = Ke.prototype.init,
    w.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function it() {
        et && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, w.fx.interval),
        w.fx.tick())
    }
    function at() {
        return e.setTimeout(function() {
            Ze = void 0
        }),
        Ze = Date.now()
    }
    function st(e, t) {
        var n, r = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            o["margin" + (n = ne[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function lt(e, t, n) {
        for (var r, o = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e))
                return r
    }
    function ut(e, t, n) {
        var r, o, i = 0, a = ut.prefilters.length, s = w.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = Ze || at(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, a = u.tweens.length; i < a; i++)
                u.tweens[i].run(r);
            return s.notifyWith(e, [u, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]),
            s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {
                specialEasing: {},
                easing: w.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ze || at(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = w.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < r; n++)
                    u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (function(e, t) {
            var n, r, o, i, a;
            for (n in e)
                if (o = t[r = X(n)],
                i = e[n],
                Array.isArray(i) && (o = i[1],
                i = e[n] = i[0]),
                n !== r && (e[r] = i,
                delete e[n]),
                (a = w.cssHooks[r]) && "expand"in a)
                    for (n in i = a.expand(i),
                    delete e[r],
                    i)
                        n in e || (e[n] = i[n],
                        t[n] = o);
                else
                    t[r] = o
        }(c, u.opts.specialEasing); i < a; i++)
            if (r = ut.prefilters[i].call(u, e, c, u.opts))
                return h(r.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
                r;
        return w.map(c, lt, u),
        h(u.opts.start) && u.opts.start.call(e, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        w.fx.timer(w.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    w.Animation = w.extend(ut, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            h(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, o = e.length; r < o; r++)
                n = e[r],
                ut.tweeners[n] = ut.tweeners[n] || [],
                ut.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, o, i, a, s, l, u, c, d = "width"in t || "height"in t, f = this, p = {}, h = e.style, g = e.nodeType && ae(e), m = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            f.always(function() {
                f.always(function() {
                    a.unqueued--,
                    w.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (o = t[r],
                rt.test(o)) {
                    if (delete t[r],
                    i = i || "toggle" === o,
                    o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[r])
                            continue;
                        g = !0
                    }
                    p[r] = m && m[r] || w.style(e, r)
                }
            if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
                for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (u = m && m.display) && (u = Y.get(e, "display")),
                "none" === (c = w.css(e, "display")) && (u ? c = u : (ue([e], !0),
                u = e.style.display || u,
                c = w.css(e, "display"),
                ue([e]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(e, "float") && (l || (f.done(function() {
                    h.display = u
                }),
                null == u && (c = h.display,
                u = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                f.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                l = !1,
                p)
                    l || (m ? "hidden"in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
                        display: u
                    }),
                    i && (m.hidden = !g),
                    g && ue([e], !0),
                    f.done(function() {
                        for (r in g || ue([e]),
                        Y.remove(e, "fxshow"),
                        p)
                            w.style(e, r, p[r])
                    })),
                    l = lt(g ? m[r] : 0, r, f),
                    r in m || (m[r] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
        }
    }),
    w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            h(r.old) && r.old.call(this),
            r.queue && w.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var o = w.isEmptyObject(e)
              , i = w.speed(t, n, r)
              , a = function() {
                var t = ut(this, w.extend({}, e), i);
                (o || Y.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , i = w.timers
                  , a = Y.get(this);
                if (o)
                    a[o] && a[o].stop && r(a[o]);
                else
                    for (o in a)
                        a[o] && a[o].stop && ot.test(o) && r(a[o]);
                for (o = i.length; o--; )
                    i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n),
                    t = !1,
                    i.splice(o, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = Y.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = w.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                w.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = i.length; t--; )
                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                    i.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, r, o)
        }
    }),
    w.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    w.timers = [],
    w.fx.tick = function() {
        var e, t = 0, n = w.timers;
        for (Ze = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(),
        Ze = void 0
    }
    ,
    w.fx.timer = function(e) {
        w.timers.push(e),
        w.fx.start()
    }
    ,
    w.fx.interval = 13,
    w.fx.start = function() {
        et || (et = !0,
        it())
    }
    ,
    w.fx.stop = function() {
        et = null
    }
    ,
    w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    w.fn.delay = function(t, n) {
        return t = w.fx && w.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var o = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(o)
            }
        })
    }
    ,
    tt = m.createElement("input"),
    nt = m.createElement("select").appendChild(m.createElement("option")),
    tt.type = "checkbox",
    p.checkOn = "" !== tt.value,
    p.optSelected = nt.selected,
    (tt = m.createElement("input")).value = "t",
    tt.type = "radio",
    p.radioValue = "t" === tt.value;
    var ct, dt = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return W(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }),
    w.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === i && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (r = o.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, o = t && t.match(P);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = dt[t] || w.find.attr;
        dt[t] = function(e, t, r) {
            var o, i, a = t.toLowerCase();
            return r || (i = dt[a],
            dt[a] = o,
            o = null != n(e, t, r) ? a : null,
            dt[a] = i),
            o
        }
    });
    var ft = /^(?:input|select|textarea|button)$/i
      , pt = /^(?:a|area)$/i;
    function ht(e) {
        return (e.match(P) || []).join(" ")
    }
    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return W(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }),
    w.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return 1 === i && w.isXMLDoc(e) || (t = w.propFix[t] || t,
                o = w.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ft.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    p.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }),
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s, l = 0;
            if (h(e))
                return this.each(function(t) {
                    w(this).addClass(e.call(this, t, gt(this)))
                });
            if ((t = mt(e)).length)
                for (; n = this[l++]; )
                    if (o = gt(n),
                    r = 1 === n.nodeType && " " + ht(o) + " ") {
                        for (a = 0; i = t[a++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s, l = 0;
            if (h(e))
                return this.each(function(t) {
                    w(this).removeClass(e.call(this, t, gt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = mt(e)).length)
                for (; n = this[l++]; )
                    if (o = gt(n),
                    r = 1 === n.nodeType && " " + ht(o) + " ") {
                        for (a = 0; i = t[a++]; )
                            for (; -1 < r.indexOf(" " + i + " "); )
                                r = r.replace(" " + i + " ", " ");
                        o !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, gt(this), t), t)
            }) : this.each(function() {
                var t, o, i, a;
                if (r)
                    for (o = 0,
                    i = w(this),
                    a = mt(e); t = a[o++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = gt(this)) && Y.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var yt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = h(e),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = r ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
        }
    }),
    w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : ht(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options, i = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], l = a ? i + 1 : o.length;
                    for (r = i < 0 ? l : a ? i : 0; r < l; r++)
                        if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = w.makeArray(t), a = o.length; a--; )
                        ((r = o[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), i)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        },
        p.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    p.focusin = "onfocusin"in e;
    var vt = /^(?:focusinfocus|focusoutblur)$/
      , xt = function(e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function(t, n, r, o) {
            var i, a, s, l, u, d, f, p, y = [r || m], v = c.call(t, "type") ? t.type : t, x = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = s = r = r || m,
            3 !== r.nodeType && 8 !== r.nodeType && !vt.test(v + w.event.triggered) && (-1 < v.indexOf(".") && (v = (x = v.split(".")).shift(),
            x.sort()),
            u = v.indexOf(":") < 0 && "on" + v,
            (t = t[w.expando] ? t : new w.Event(v,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
            t.namespace = x.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : w.makeArray(n, [t]),
            f = w.event.special[v] || {},
            o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!o && !f.noBubble && !g(r)) {
                    for (l = f.delegateType || v,
                    vt.test(l + v) || (a = a.parentNode); a; a = a.parentNode)
                        y.push(a),
                        s = a;
                    s === (r.ownerDocument || m) && y.push(s.defaultView || s.parentWindow || e)
                }
                for (i = 0; (a = y[i++]) && !t.isPropagationStopped(); )
                    p = a,
                    t.type = 1 < i ? l : f.bindType || v,
                    (d = (Y.get(a, "events") || Object.create(null))[t.type] && Y.get(a, "handle")) && d.apply(a, n),
                    (d = u && a[u]) && d.apply && V(a) && (t.result = d.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = v,
                o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(y.pop(), n) || !V(r) || u && h(r[v]) && !g(r) && ((s = r[u]) && (r[u] = null),
                w.event.triggered = v,
                t.isPropagationStopped() && p.addEventListener(v, xt),
                r[v](),
                t.isPropagationStopped() && p.removeEventListener(v, xt),
                w.event.triggered = void 0,
                s && (r[u] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }),
    w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0)
        }
    }),
    p.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this
                  , o = Y.access(r, t);
                o || r.addEventListener(e, n, !0),
                Y.access(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this
                  , o = Y.access(r, t) - 1;
                o ? Y.access(r, t, o) : (r.removeEventListener(e, n, !0),
                Y.remove(r, t))
            }
        }
    });
    var bt = e.location
      , wt = {
        guid: Date.now()
    }
      , Tt = /\?/;
    w.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return r = n && n.getElementsByTagName("parsererror")[0],
        n && !r || w.error("Invalid XML: " + (r ? w.map(r.childNodes, function(e) {
            return e.textContent
        }).join("\n") : t)),
        n
    }
    ;
    var St = /\[\]$/
      , Ct = /\r?\n/g
      , Et = /^(?:submit|button|image|reset|file)$/i
      , kt = /^(?:input|select|textarea|keygen)/i;
    function At(e, t, n, r) {
        var o;
        if (Array.isArray(t))
            w.each(t, function(t, o) {
                n || St.test(e) ? r(e, o) : At(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
            });
        else if (n || "object" !== x(t))
            r(e, t);
        else
            for (o in t)
                At(e + "[" + o + "]", t[o], n, r)
    }
    w.param = function(e, t) {
        var n, r = [], o = function(e, t) {
            var n = h(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                At(n, e[n], t, o);
        return r.join("&")
    }
    ,
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && kt.test(this.nodeName) && !Et.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g
      , Dt = /#.*$/
      , Nt = /([?&])_=[^&]*/
      , It = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Mt = /^(?:GET|HEAD)$/
      , Lt = /^\/\//
      , qt = {}
      , Pt = {}
      , Ht = "*/".concat("*")
      , Bt = m.createElement("a");
    function Ot(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, o = 0, i = t.toLowerCase().match(P) || [];
            if (h(n))
                for (; r = i[o++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Rt(e, t, n, r) {
        var o = {}
          , i = e === Pt;
        function a(s) {
            var l;
            return o[s] = !0,
            w.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || i || o[u] ? i ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                a(u),
                !1)
            }),
            l
        }
        return a(t.dataTypes[0]) || !o["*"] && a("*")
    }
    function Ft(e, t) {
        var n, r, o = w.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r),
        e
    }
    Bt.href = bt.href,
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, w.ajaxSettings), t) : Ft(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ot(qt),
        ajaxTransport: Ot(Pt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, o, i, a, s, l, u, c, d, f, p = w.ajaxSetup({}, n), h = p.context || p, g = p.context && (h.nodeType || h.jquery) ? w(h) : w.event, y = w.Deferred(), v = w.Callbacks("once memory"), x = p.statusCode || {}, b = {}, T = {}, S = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (u) {
                        if (!a)
                            for (a = {}; t = It.exec(i); )
                                a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = a[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return u ? i : null
                },
                setRequestHeader: function(e, t) {
                    return null == u && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == u && (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (u)
                            C.always(e[C.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || S;
                    return r && r.abort(t),
                    E(0, t),
                    this
                }
            };
            if (y.promise(C),
            p.url = ((t || p.url || bt.href) + "").replace(Lt, bt.protocol + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [""],
            null == p.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = p.url,
                    l.href = l.href,
                    p.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)),
            Rt(qt, p, n, C),
            u)
                return C;
            for (d in (c = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Mt.test(p.type),
            o = p.url.replace(Dt, ""),
            p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(jt, "+")) : (f = p.url.slice(o.length),
            p.data && (p.processData || "string" == typeof p.data) && (o += (Tt.test(o) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (o = o.replace(Nt, "$1"),
            f = (Tt.test(o) ? "&" : "?") + "_=" + wt.guid++ + f),
            p.url = o + f),
            p.ifModified && (w.lastModified[o] && C.setRequestHeader("If-Modified-Since", w.lastModified[o]),
            w.etag[o] && C.setRequestHeader("If-None-Match", w.etag[o])),
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                C.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || u))
                return C.abort();
            if (S = "abort",
            v.add(p.complete),
            C.done(p.success),
            C.fail(p.error),
            r = Rt(Pt, p, n, C)) {
                if (C.readyState = 1,
                c && g.trigger("ajaxSend", [C, p]),
                u)
                    return C;
                p.async && 0 < p.timeout && (s = e.setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    u = !1,
                    r.send(b, E)
                } catch (t) {
                    if (u)
                        throw t;
                    E(-1, t)
                }
            } else
                E(-1, "No Transport");
            function E(t, n, a, l) {
                var d, f, m, b, T, S = n;
                u || (u = !0,
                s && e.clearTimeout(s),
                r = void 0,
                i = l || "",
                C.readyState = 0 < t ? 4 : 0,
                d = 200 <= t && t < 300 || 304 === t,
                a && (b = function(e, t, n) {
                    for (var r, o, i, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (o in s)
                            if (s[o] && s[o].test(r)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        i = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                i = o;
                                break
                            }
                            a || (a = o)
                        }
                        i = i || a
                    }
                    if (i)
                        return i !== l[0] && l.unshift(i),
                        n[i]
                }(p, C, a)),
                !d && -1 < w.inArray("script", p.dataTypes) && w.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}
                ),
                b = function(e, t, n, r) {
                    var o, i, a, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            u[a.toLowerCase()] = e.converters[a];
                    for (i = c.shift(); i; )
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = i,
                        i = c.shift())
                            if ("*" === i)
                                i = l;
                            else if ("*" !== l && l !== i) {
                                if (!(a = u[l + " " + i] || u["* " + i]))
                                    for (o in u)
                                        if ((s = o.split(" "))[1] === i && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                            !0 === a ? a = u[o] : !0 !== u[o] && (i = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + i
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, b, C, d),
                d ? (p.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T),
                (T = C.getResponseHeader("etag")) && (w.etag[o] = T)),
                204 === t || "HEAD" === p.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = b.state,
                f = b.data,
                d = !(m = b.error))) : (m = S,
                !t && S || (S = "error",
                t < 0 && (t = 0))),
                C.status = t,
                C.statusText = (n || S) + "",
                d ? y.resolveWith(h, [f, S, C]) : y.rejectWith(h, [C, S, m]),
                C.statusCode(x),
                x = void 0,
                c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [C, p, d ? f : m]),
                v.fireWith(h, [C, S]),
                c && (g.trigger("ajaxComplete", [C, p]),
                --w.active || w.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }),
    w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, r, o) {
            return h(n) && (o = o || r,
            r = n,
            n = void 0),
            w.ajax(w.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }),
    w.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    w._evalUrl = function(e, t, n) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                w.globalEval(e, t, n)
            }
        })
    }
    ,
    w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])),
            t = w(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return h(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = h(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }
    ,
    w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var $t = {
        0: 200,
        1223: 204
    }
      , Wt = w.ajaxSettings.xhr();
    p.cors = !!Wt && "withCredentials"in Wt,
    p.ajax = Wt = !!Wt,
    w.ajaxTransport(function(t) {
        var n, r;
        if (p.cors || Wt && !t.crossDomain)
            return {
                send: function(o, i) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                    o)
                        s.setRequestHeader(a, o[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (o) {
                        if (n)
                            throw o
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e),
                e
            }
        }
    }),
    w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    w.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(r, o) {
                    t = w("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    m.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var _t, Ut = [], zt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || w.expando + "_" + wt.guid++;
            return this[e] = !0,
            e
        }
    }),
    w.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, s = !1 !== t.jsonp && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(zt, "$1" + o) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return a || w.error(o + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            i = e[o],
            e[o] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                void 0 === i ? w(e).removeProp(o) : e[o] = i,
                t[o] && (t.jsonpCallback = n.jsonpCallback,
                Ut.push(o)),
                a && h(i) && i(a[0]),
                a = i = void 0
            }),
            "script"
    }),
    p.createHTMLDocument = ((_t = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === _t.childNodes.length),
    w.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (p.createHTMLDocument ? ((r = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href,
        t.head.appendChild(r)) : t = m),
        i = !n && [],
        (o = j.exec(e)) ? [t.createElement(o[1])] : (o = xe([e], t, i),
        i && i.length && w(i).remove(),
        w.merge([], o.childNodes)));
        var r, o, i
    }
    ,
    w.fn.load = function(e, t, n) {
        var r, o, i, a = this, s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)),
        e = e.slice(0, s)),
        h(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        0 < a.length && w.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    w.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, l, u = w.css(e, "position"), c = w(e), d = {};
            "static" === u && (e.style.position = "relative"),
            s = c.offset(),
            i = w.css(e, "top"),
            l = w.css(e, "left"),
            ("absolute" === u || "fixed" === u) && -1 < (i + l).indexOf("auto") ? (a = (r = c.position()).top,
            o = r.left) : (a = parseFloat(i) || 0,
            o = parseFloat(l) || 0),
            h(t) && (t = t.call(e, n, w.extend({}, s))),
            null != t.top && (d.top = t.top - s.top + a),
            null != t.left && (d.left = t.left - s.left + o),
            "using"in t ? t.using.call(e, d) : c.css(d)
        }
    },
    w.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    w.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0),
                    o.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - w.css(r, "marginTop", !0),
                    left: t.left - o.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position"); )
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return W(this, function(e, r, o) {
                var i;
                if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === o)
                    return i ? i[t] : e[r];
                i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
            }, e, r, arguments.length)
        }
    }),
    w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = Fe(p.pixelPosition, function(e, n) {
            if (n)
                return n = Re(e, t),
                Pe.test(n) ? w(e).position()[t] + "px" : n
        })
    }),
    w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(o, i) {
                var a = arguments.length && (n || "boolean" != typeof o)
                  , s = n || (!0 === o || !0 === i ? "margin" : "border");
                return W(this, function(t, n, o) {
                    var i;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? w.css(t, n, s) : w.style(t, n, o, s)
                }, t, a ? o : void 0, a)
            }
        })
    }),
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        h(e))
            return r = o.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(o.call(arguments)))
            }
            ).guid = e.guid = e.guid || w.guid++,
            i
    }
    ,
    w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }
    ,
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = A,
    w.isFunction = h,
    w.isWindow = g,
    w.camelCase = X,
    w.type = x,
    w.now = Date.now,
    w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    w.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Vt = e.jQuery
      , Jt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Jt),
        t && e.jQuery === w && (e.jQuery = Vt),
        w
    }
    ,
    void 0 === t && (e.jQuery = e.$ = w),
    w
}),
0 == esMovil && (points.innerHTML = "<a style='color:#4b5661;text-decoration:underline;' href='https://recursivearts.com/authentication/login.php'>Log in</a> to participate in our <a style='color:red;font-weight:bold;text-decoration:underline;' href='https://recursivearts.com/virtual-piano/rankings.html'>World Ranking</a> by collecting points everytime you play any of our songs!");
var songTitle, totalScore = 0;
if (navigator.requestMIDIAccess) {
    function onMIDISuccess(e) {
        for (var t of e.inputs.values())
            t.onmidimessage = getMIDIMessage
    }
    function getMIDIMessage(e) {
        var t = e.data[0]
          , n = e.data[1];
        switch (e.data.length > 2 && e.data[2],
        t) {
        case 144:
            n > 23 && n < 85 && gameInstance.SendMessage("CPU", "PlayMidiNote", n - 12),
            console.log("nota " + n);
            break;
        case 128:
            n > 23 && n < 85 && gameInstance.SendMessage("CPU", "ReleaseMidiNote", n - 12)
        }
    }
    function onMIDIFailure() {
        console.log("Could not access your MIDI devices.")
    }
    console.log("This browser supports WebMIDI!"),
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure)
} else
    console.log("WebMIDI is not supported in this browser.");
function postScoreFacebook() {
    return;
    FB.ui({
        method: "share",
        href: "https://recursivearts.com/virtual-piano/",
        quote: "I just scored " + totalScore + ' points playing "' + songTitle + '" at https://recursivearts.com/virtual-piano/',
        display: "popup"
    }, function(e) {})
}
function TotalPoints(e, t) {
    return;
    if (songTitle = t,
    e >= 0)
        document.getElementById("points").style.fontFamily = "Passion One, cursive",
        document.getElementById("points").style.fontSize = "200%",
        document.getElementById("points").style.color = "white",
        document.getElementById("points").style.textShadow = "2px 2px 2px #999",
        totalScore = e,
        points.textContent = 10 > e ? "Score: 00" + e : e >= 10 && 100 > e ? "Score: 0" + e : "Score: " + e;
    else if (-1 == e)
        document.getElementById("points").style.fontFamily = "Arial, Helvetica, sans-serif",
        document.getElementById("points").style.color = "lightslategray",
        document.getElementById("points").style.fontSize = "90%",
        points.textContent = "";
    else {
        document.getElementById("points").style.fontFamily = "Arial, Helvetica, sans-serif",
        document.getElementById("points").style.color = "lightslategray",
        document.getElementById("points").style.fontSize = "90%",
        points.textContent = "",
        document.getElementById("myModal").style.display = "block",
        finalPoints.textContent = totalScore
        // ,
        // ready2ShareFacebook(),
        // ready2ShareTwitter()
        ;
        var n;
        n = totalScore < 10 ? "Keep practicing, you can do better!" : totalScore >= 10 && totalScore < 30 ? "Well done, keep it up!" : "Congratulations!",
        document.getElementById("modal-heading").innerHTML = n,
        autor && SaveUserPoints(songTitle);
        var r = document.getElementById("myModal");
        document.getElementsByClassName("close")[0].onclick = function() {
            r.style.display = "none",
            document.getElementById("#canvas").focus()
        }
        ,
        window.onclick = function(e) {
            e.target == r && (r.style.display = "none",
            document.getElementById("#canvas").focus())
        }
    }
}
function SaveUserPoints(e) {
    return;
    console.log("Just played: " + e),
    $.ajax({
        type: "POST",
        url: "../../authentication/savePoints.php",
        data: {
            virtuoso: autor,
            song: e,
            points: totalScore
        },
        dataType: "JSON",
        success: function(e) {
            console.log(e)
        },
        error: function(e) {
            console.log(e)
        }
    })
}
function ready2ShareFacebook() {
    document.getElementById("share-score-facebook").onclick = function() {
        document.getElementById("myModal").style.display = "none",
        postScoreFacebook(),
        ga("send", "event", "VirtualPiano", "FacebookShare", "Summer Campaign")
    }
}
function ready2ShareTwitter() {
    document.getElementById("twitter-share-button").onclick = function() {
        return document.getElementById("twitter-share-button").href = "https://twitter.com/intent/tweet?text=I just scored " + totalScore + ' points playing "' + songTitle + '" at &via=RecursiveArts&hashtags=OnlinePiano&url=https://recursivearts.com/virtual-piano/ ',
        !1
    }
}
function Web2Piano(e) {
    document.getElementById("#canvas").focus(),
    points.textContent = "Score: 000",
    gameInstance.SendMessage("CPU", "ResetPoints"),
    gameInstance.SendMessage("CPU", "StartExtSong", e)
}
function Scale2Piano(e) {
    document.getElementById("#canvas").focus(),
    gameInstance.SendMessage("ScaleLoader", "loadScale", e.slice(12 - tonica) + e.slice(0, 12 - tonica)),
    gameInstance.SendMessage("CPU", "ExtEnableScales")
}
function topFunction() {
    document.body.scrollTop = 0,
    document.documentElement.scrollTop = 0
}
window.twttr = function(e, t, n) {
    var r, o = e.getElementsByTagName(t)[0], i = window.twttr || {};
    return i;
    return e.getElementById(n) ? i : ((r = e.createElement(t)).id = n,
    r.src = "https://platform.twitter.com/widgets.js",
    o.parentNode.insertBefore(r, o),
    i._e = [],
    i.ready = function(e) {
        i._e.push(e)
    }
    ,
    i)
}(document, "script", "twitter-wjs"),
setTimeout(function() {
    points.textContent = ""
}, 32e3);
var down = !1;
function ScrollPiano(e) {
    e > 0 ? $("html, body").animate({
        scrollTop: 0
    }, "50") : $("html, body").animate({
        scrollTop: 680
    }, "50")
}
document.addEventListener("keydown", function(e) {
    if ("Semicolon" == e.code) {
        if (down)
            return;
        down = !0,
        gameInstance.SendMessage("A#5", "EneExtPress", "")
    }
}, !1),
document.addEventListener("keyup", function(e) {
    "Semicolon" == e.code && (gameInstance.SendMessage("A#5", "EneExtRelease", ""),
    down = !1)
}),
document.getElementById("#canvas").focus(),
$(document).keydown(function(e) {
    var t = e.keyCode ? e.keyCode : e.which;
    0 != t && 9 != t || (e.preventDefault(),
    e.stopPropagation())
});
var listacanciones = document.getElementById("listModal");
function closeModal() {
    document.getElementById("recModal").style.display = "none",
    document.getElementById("alertModal").style.display = "none",
    document.getElementById("alertModal2").style.display = "none",
    document.getElementById("alertModal3").style.display = "none"
}
function closeModal2() {
    var e = document.createRange();
    e.selectNode(document.getElementById("mensaje4")),
    window.getSelection().removeAllRanges(),
    window.getSelection().addRange(e),
    document.execCommand("copy"),
    window.getSelection().removeAllRanges(),
    document.getElementById("alertModal4").style.display = "none",
    gameInstance.SendMessage("CPU", "desactivarPlay"),
    listacanciones.style.display = "none"
}
function openModalAlert() {
    document.getElementById("mensaje").innerHTML = "Please log in to start recording",
    document.getElementById("alertModal").style.display = "block"
}
function openModalAlert2() {
    document.getElementById("mensaje").innerHTML = "Please log in to access your recordings",
    document.getElementById("alertModal").style.display = "block"
}
function openModalAlert3() {
    document.getElementById("mensaje2").innerHTML = "You've reached the maximum number of recordings",
    document.getElementById("alertModal2").style.display = "block"
}
function openModalAlert4() {
    document.getElementById("mensaje2").innerHTML = "Please check your internet connection",
    document.getElementById("alertModal2").style.display = "block"
}
function openModalAlert5() {
    document.getElementById("mensaje3").innerHTML = "A friend sent you a song:",
    document.getElementById("alertModal3").style.display = "block"
}
function openModalList() {
    showMySongs(),
    document.getElementById("listModal").style.display = "block"
}
function PublishSong(e, t) {
    songdata = e,
    duration = t,
    document.getElementById("recModal").style.display = "block"
}
function insertData() {
    var e = $("#rec-title").val();
    $.ajax({
        type: "POST",
        url: "../../authentication/insert-data.php",
        data: {
            title: e,
            author: autor,
            songdata: songdata,
            duration: duration
        },
        dataType: "JSON",
        success: function(e) {
            alert("Recording Saved!")
        },
        error: function(e) {
            alert("Error saving recording.\nPlease check your internet connection.")
        }
    }),
    document.getElementById("recModal").style.display = "none"
}
function playSong(e) {
    listacanciones.style.display = "none",
    gameInstance.SendMessage("CPU", "PlayUserSong", JSON.stringify(e))
}
function playSharedSong(e) {
    listacanciones.style.display = "none",
    gameInstance.SendMessage("CPU", "PlayUserSong", e)
}
function secondsTimeSpanToMS(e) {
    e -= 3600 * Math.floor(e / 3600);
    var t = Math.floor(e / 60);
    return (t < 10 ? "0" + t : t) + ":" + ((e -= 60 * t) < 10 ? "0" + e : e)
}
function getHighScores(e) {
    $.ajax({
        type: "POST",
        url: "../../authentication/highscores.php",
        data: {
            filas: e
        },
        dataType: "JSON",
        success: function(e) {
            append_json(e)
        },
        error: function(e) {
            console.log("error cargando scores")
        }
    })
}
function append_json(e) {
    var t = document.getElementById("ranking")
      , n = 0;
    e.forEach(function(e) {
        n += 1;
        var r = document.createElement("tr");
        r.innerHTML = "<td>" + n + "</td><td>" + e.virtuoso + "</td><td>" + e.Total + "</td>",
        t.appendChild(r)
    })
}
function showMySongs() {
    $.ajax({
        type: "POST",
        url: "../../authentication/mysongs.php",
        data: {
            author: autor
        },
        dataType: "JSON",
        success: function(e) {
            $("#records_table tbody").empty();
            var t = "";
            $.each(e, function(e, n) {
                var r = n.songdata;
                r = r.replace(/"/g, "&quot;"),
                t += '<tr><td><span style="color:grey;">' + (e + 1) + '</span></td><td><a  class="usersong" title="' + n.title + '" onclick="playSong(' + r + ')" href="javascript:void(0);">' + n.title + "</a></td><td><span>" + secondsTimeSpanToMS(n.duration) + '</span></td><td><img src="../../imagenes/songbin.png" title="Delete" style="height:15px; width:13px; cursor:pointer" onclick="deleteSong(' + n.id + ')" /></td><td><img src="../../imagenes/songshare.png" title="Share Link" style="height:15px; width:13px; cursor:pointer" onclick="shareSong(' + n.id + "," + n.duration + ')" /></td></tr>'
            }),
            $("#records_table tbody").append(t)
        },
        error: function(e) {
            alert("err")
        }
    })
}
function deleteSong(e) {
    $.post("../../authentication/deletesong.php", {
        sid: e,
        author: autor
    }, function(e) {
        showMySongs()
    })
}
function shareSong(e, t) {
    listacanciones.style.display = "none",
    document.getElementById("mensaje4").innerHTML = "https://recursivearts.com/virtual-piano/?rec=" + e + "_" + t,
    document.getElementById("alertModal4").style.display = "block"
}
function playfriendrec() {
    grabacion && $.post("../../authentication/friendsong.php", {
        sid: recID,
        sduration: recDur
    }, function(e) {
        setTimeout(playSharedSong(e), 1e3)
    })
}
function MasCanciones() {
    document.getElementById("songs").scrollIntoView({
        behavior: "smooth"
    })
}
function MasEscalas() {
    document.getElementById("scalesList").scrollIntoView({
        behavior: "smooth"
    })
}
window.onclick = function(e) {
    e.target == listacanciones && (gameInstance.SendMessage("CPU", "desactivarPlay"),
    listacanciones.style.display = "none")
}
,
console.log("Cargando Scores"),
getHighScores(10);
