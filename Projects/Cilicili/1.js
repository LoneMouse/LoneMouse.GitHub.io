/**
 * @license
 * Video.js 7.2.2 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.videojs = e()
}(this, function () {
    var h = "7.2.2",
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var i, g = "undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : {},
        n = {},
        r = Object.freeze({
            default: n
        }),
        a = r && n || r,
        s = "undefined" != typeof t ? t : "undefined" != typeof window ? window : {};
    "undefined" != typeof document ? i = document : (i = s["__GLOBAL_DOCUMENT_CACHE@4"]) || (i = s["__GLOBAL_DOCUMENT_CACHE@4"] = a);
    var p = i,
        o = void 0,
        u = "info",
        l = [],
        c = function (t, e) {
            var i = o.levels[u],
                n = new RegExp("^(" + i + ")$");
            if ("log" !== t && e.unshift(t.toUpperCase() + ":"), l && l.push([].concat(e)), e.unshift("VIDEOJS:"), g.console) {
                var r = g.console[t];
                r || "debug" !== t || (r = g.console.info || g.console.log), r && i && n.test(t) && r[Array.isArray(e) ? "apply" : "call"](g.console, e)
            }
        };
    (o = function () {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        c("log", e)
    }).levels = {
        all: "debug|log|warn|error",
        off: "",
        debug: "debug|log|warn|error",
        info: "log|warn|error",
        warn: "warn|error",
        error: "error",
        DEFAULT: u
    }, o.level = function (t) {
        if ("string" == typeof t) {
            if (!o.levels.hasOwnProperty(t)) throw new Error('"' + t + '" in not a valid log level');
            u = t
        }
        return u
    }, o.history = function () {
        return l ? [].concat(l) : []
    }, o.history.clear = function () {
        l && (l.length = 0)
    }, o.history.disable = function () {
        null !== l && (l.length = 0, l = null)
    }, o.history.enable = function () {
        null === l && (l = [])
    }, o.error = function () {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return c("error", e)
    }, o.warn = function () {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return c("warn", e)
    }, o.debug = function () {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return c("debug", e)
    };
    var f = o;
    var m = function (t) {
            for (var e = "", i = 0; i < arguments.length; i++) e += t[i].replace(/\n\r?\s*/g, "") + (arguments[i + 1] || "");
            return e
        },
        Ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        y = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        v = function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        },
        _ = function (t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        },
        d = function (t, e) {
            return t.raw = e, t
        },
        b = Object.prototype.toString,
        T = function (t) {
            return C(t) ? Object.keys(t) : []
        };

    function S(e, i) {
        T(e).forEach(function (t) {
            return i(e[t], t)
        })
    }

    function k(i) {
        for (var t = arguments.length, e = Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) e[n - 1] = arguments[n];
        return Object.assign ? Object.assign.apply(Object, [i].concat(e)) : (e.forEach(function (t) {
            t && S(t, function (t, e) {
                i[e] = t
            })
        }), i)
    }

    function C(t) {
        return !!t && "object" === ("undefined" == typeof t ? "undefined" : Ee(t))
    }

    function w(t) {
        return C(t) && "[object Object]" === b.call(t) && t.constructor === Object
    }

    function E(t, e) {
        if (!t || !e) return "";
        if ("function" == typeof g.getComputedStyle) {
            var i = g.getComputedStyle(t);
            return i ? i[e] : ""
        }
        return ""
    }
    var A = d(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);

    function L(t) {
        return "string" == typeof t && /\S/.test(t)
    }

    function O(t) {
        if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
    }

    function P() {
        return p === g.document
    }

    function U(t) {
        return C(t) && 1 === t.nodeType
    }

    function x() {
        try {
            return g.parent !== g.self
        } catch (t) {
            return !0
        }
    }

    function I(n) {
        return function (t, e) {
            if (!L(t)) return p[n](null);
            L(e) && (e = p.querySelector(e));
            var i = U(e) ? e : p;
            return i[n] && i[n](t)
        }
    }

    function D() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "div",
            i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
            n = arguments[3],
            r = p.createElement(t);
        return Object.getOwnPropertyNames(i).forEach(function (t) {
            var e = i[t]; - 1 !== t.indexOf("aria-") || "role" === t || "type" === t ? (f.warn(m(A, t, e)), r.setAttribute(t, e)) : "textContent" === t ? R(r, e) : r[t] = e
        }), Object.getOwnPropertyNames(e).forEach(function (t) {
            r.setAttribute(t, e[t])
        }), n && tt(r, n), r
    }

    function R(t, e) {
        return "undefined" == typeof t.textContent ? t.innerText = e : t.textContent = e, t
    }

    function M(t, e) {
        e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    }

    function B(t, e) {
        return O(e), t.classList ? t.classList.contains(e) : (i = e, new RegExp("(^|\\s)" + i + "($|\\s)")).test(t.className);
        var i
    }

    function N(t, e) {
        return t.classList ? t.classList.add(e) : B(t, e) || (t.className = (t.className + " " + e).trim()), t
    }

    function j(t, e) {
        return t.classList ? t.classList.remove(e) : (O(e), t.className = t.className.split(/\s+/).filter(function (t) {
            return t !== e
        }).join(" ")), t
    }

    function F(t, e, i) {
        var n = B(t, e);
        if ("function" == typeof i && (i = i(t, e)), "boolean" != typeof i && (i = !n), i !== n) return i ? N(t, e) : j(t, e), t
    }

    function V(i, n) {
        Object.getOwnPropertyNames(n).forEach(function (t) {
            var e = n[t];
            null === e || "undefined" == typeof e || !1 === e ? i.removeAttribute(t) : i.setAttribute(t, !0 === e ? "" : e)
        })
    }

    function H(t) {
        var e = {},
            i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
        if (t && t.attributes && 0 < t.attributes.length)
            for (var n = t.attributes, r = n.length - 1; 0 <= r; r--) {
                var a = n[r].name,
                    s = n[r].value;
                "boolean" != typeof t[a] && -1 === i.indexOf("," + a + ",") || (s = null !== s), e[a] = s
            }
        return e
    }

    function z(t, e) {
        return t.getAttribute(e)
    }

    function q(t, e, i) {
        t.setAttribute(e, i)
    }

    function W(t, e) {
        t.removeAttribute(e)
    }

    function G() {
        p.body.focus(), p.onselectstart = function () {
            return !1
        }
    }

    function X() {
        p.onselectstart = function () {
            return !0
        }
    }

    function Y(t) {
        if (t && t.getBoundingClientRect && t.parentNode) {
            var e = t.getBoundingClientRect(),
                i = {};
            return ["bottom", "height", "left", "right", "top", "width"].forEach(function (t) {
                void 0 !== e[t] && (i[t] = e[t])
            }), i.height || (i.height = parseFloat(E(t, "height"))), i.width || (i.width = parseFloat(E(t, "width"))), i
        }
    }

    function $(t) {
        var e = void 0;
        if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {
            left: 0,
            top: 0
        };
        var i = p.documentElement,
            n = p.body,
            r = i.clientLeft || n.clientLeft || 0,
            a = g.pageXOffset || n.scrollLeft,
            s = e.left + a - r,
            o = i.clientTop || n.clientTop || 0,
            u = g.pageYOffset || n.scrollTop,
            l = e.top + u - o;
        return {
            left: Math.round(s),
            top: Math.round(l)
        }
    }

    function K(t, e) {
        var i = {},
            n = $(t),
            r = t.offsetWidth,
            a = t.offsetHeight,
            s = n.top,
            o = n.left,
            u = e.pageY,
            l = e.pageX;
        return e.changedTouches && (l = e.changedTouches[0].pageX, u = e.changedTouches[0].pageY), i.y = Math.max(0, Math.min(1, (s - u + a) / a)), i.x = Math.max(0, Math.min(1, (l - o) / r)), i
    }

    function J(t) {
        return C(t) && 3 === t.nodeType
    }

    function Q(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        return t
    }

    function Z(t) {
        return "function" == typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map(function (t) {
            return "function" == typeof t && (t = t()), U(t) || J(t) ? t : "string" == typeof t && /\S/.test(t) ? p.createTextNode(t) : void 0
        }).filter(function (t) {
            return t
        })
    }

    function tt(e, t) {
        return Z(t).forEach(function (t) {
            return e.appendChild(t)
        }), e
    }

    function et(t, e) {
        return tt(Q(t), e)
    }

    function it(t) {
        return void 0 === t.button && void 0 === t.buttons || (0 === t.button && void 0 === t.buttons || 0 === t.button && 1 === t.buttons)
    }
    var nt = I("querySelector"),
        rt = I("querySelectorAll"),
        at = Object.freeze({
            isReal: P,
            isEl: U,
            isInFrame: x,
            createEl: D,
            textContent: R,
            prependTo: M,
            hasClass: B,
            addClass: N,
            removeClass: j,
            toggleClass: F,
            setAttributes: V,
            getAttributes: H,
            getAttribute: z,
            setAttribute: q,
            removeAttribute: W,
            blockTextSelection: G,
            unblockTextSelection: X,
            getBoundingClientRect: Y,
            findPosition: $,
            getPointerPosition: K,
            isTextNode: J,
            emptyEl: Q,
            normalizeContent: Z,
            appendContent: tt,
            insertContent: et,
            isSingleLeftClick: it,
            $: nt,
            $$: rt
        }),
        st = 1;

    function ot() {
        return st++
    }
    var ut = {},
        lt = "vdata" + (new Date).getTime();

    function ct(t) {
        var e = t[lt];
        return e || (e = t[lt] = ot()), ut[e] || (ut[e] = {}), ut[e]
    }

    function dt(t) {
        var e = t[lt];
        return !!e && !!Object.getOwnPropertyNames(ut[e]).length
    }

    function ht(e) {
        var t = e[lt];
        if (t) {
            delete ut[t];
            try {
                delete e[lt]
            } catch (t) {
                e.removeAttribute ? e.removeAttribute(lt) : e[lt] = null
            }
        }
    }

    function pt(t, e) {
        var i = ct(t);
        0 === i.handlers[e].length && (delete i.handlers[e], t.removeEventListener ? t.removeEventListener(e, i.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && ht(t)
    }

    function ft(e, i, t, n) {
        t.forEach(function (t) {
            e(i, t, n)
        })
    }

    function mt(t) {
        function e() {
            return !0
        }

        function i() {
            return !1
        }
        if (!t || !t.isPropagationStopped) {
            var n = t || g.event;
            for (var r in t = {}, n) "layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && ("returnValue" === r && n.preventDefault || (t[r] = n[r]));
            if (t.target || (t.target = t.srcElement || p), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function () {
                    n.preventDefault && n.preventDefault(), t.returnValue = !1, n.returnValue = !1, t.defaultPrevented = !0
                }, t.defaultPrevented = !1, t.stopPropagation = function () {
                    n.stopPropagation && n.stopPropagation(), t.cancelBubble = !0, n.cancelBubble = !0, t.isPropagationStopped = e
                }, t.isPropagationStopped = i, t.stopImmediatePropagation = function () {
                    n.stopImmediatePropagation && n.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
                }, t.isImmediatePropagationStopped = i, null !== t.clientX && void 0 !== t.clientX) {
                var a = p.documentElement,
                    s = p.body;
                t.pageX = t.clientX + (a && a.scrollLeft || s && s.scrollLeft || 0) - (a && a.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (a && a.scrollTop || s && s.scrollTop || 0) - (a && a.clientTop || s && s.clientTop || 0)
            }
            t.which = t.charCode || t.keyCode, null !== t.button && void 0 !== t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
        }
        return t
    }
    var gt = !1;
    ! function () {
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function () {
                    gt = !0
                }
            });
            g.addEventListener("test", null, t), g.removeEventListener("test", null, t)
        } catch (t) {}
    }();
    var yt = ["touchstart", "touchmove"];

    function vt(s, t, e) {
        if (Array.isArray(t)) return ft(vt, s, t, e);
        var o = ct(s);
        if (o.handlers || (o.handlers = {}), o.handlers[t] || (o.handlers[t] = []), e.guid || (e.guid = ot()), o.handlers[t].push(e), o.dispatcher || (o.disabled = !1, o.dispatcher = function (t, e) {
                if (!o.disabled) {
                    t = mt(t);
                    var i = o.handlers[t.type];
                    if (i)
                        for (var n = i.slice(0), r = 0, a = n.length; r < a && !t.isImmediatePropagationStopped(); r++) try {
                            n[r].call(s, t, e)
                        } catch (t) {
                            f.error(t)
                        }
                }
            }), 1 === o.handlers[t].length)
            if (s.addEventListener) {
                var i = !1;
                gt && -1 < yt.indexOf(t) && (i = {
                    passive: !0
                }), s.addEventListener(t, o.dispatcher, i)
            } else s.attachEvent && s.attachEvent("on" + t, o.dispatcher)
    }

    function _t(t, e, i) {
        if (dt(t)) {
            var n = ct(t);
            if (n.handlers) {
                if (Array.isArray(e)) return ft(_t, t, e, i);
                var r = function (t, e) {
                    n.handlers[e] = [], pt(t, e)
                };
                if (void 0 !== e) {
                    var a = n.handlers[e];
                    if (a)
                        if (i) {
                            if (i.guid)
                                for (var s = 0; s < a.length; s++) a[s].guid === i.guid && a.splice(s--, 1);
                            pt(t, e)
                        } else r(t, e)
                } else
                    for (var o in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, o) && r(t, o)
            }
        }
    }

    function bt(t, e, i) {
        var n = dt(t) ? ct(t) : {},
            r = t.parentNode || t.ownerDocument;
        if ("string" == typeof e ? e = {
                type: e,
                target: t
            } : e.target || (e.target = t), e = mt(e), n.dispatcher && n.dispatcher.call(t, e, i), r && !e.isPropagationStopped() && !0 === e.bubbles) bt.call(null, r, e, i);
        else if (!r && !e.defaultPrevented) {
            var a = ct(e.target);
            e.target[e.type] && (a.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), a.disabled = !1)
        }
        return !e.defaultPrevented
    }

    function Tt(e, i, n) {
        if (Array.isArray(i)) return ft(Tt, e, i, n);
        var t = function t() {
            _t(e, i, t), n.apply(this, arguments)
        };
        t.guid = n.guid = n.guid || ot(), vt(e, i, t)
    }
    var St = Object.freeze({
            fixEvent: mt,
            on: vt,
            off: _t,
            trigger: bt,
            one: Tt
        }),
        kt = !1,
        Ct = void 0,
        wt = function () {
            if (P() && !1 !== Ct.options.autoSetup) {
                var t = Array.prototype.slice.call(p.getElementsByTagName("video")),
                    e = Array.prototype.slice.call(p.getElementsByTagName("audio")),
                    i = Array.prototype.slice.call(p.getElementsByTagName("video-js")),
                    n = t.concat(e, i);
                if (n && 0 < n.length)
                    for (var r = 0, a = n.length; r < a; r++) {
                        var s = n[r];
                        if (!s || !s.getAttribute) {
                            Et(1);
                            break
                        }
                        void 0 === s.player && null !== s.getAttribute("data-setup") && Ct(s)
                    } else kt || Et(1)
            }
        };

    function Et(t, e) {
        e && (Ct = e), g.setTimeout(wt, t)
    }
    P() && "complete" === p.readyState ? kt = !0 : Tt(g, "load", function () {
        kt = !0
    });
    var At = function (t) {
            var e = p.createElement("style");
            return e.className = t, e
        },
        Lt = function (t, e) {
            t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
        },
        Ot = function (t, e, i) {
            e.guid || (e.guid = ot());
            var n = function () {
                return e.apply(t, arguments)
            };
            return n.guid = i ? i + "_" + e.guid : e.guid, n
        },
        Pt = function (e, i) {
            var n = Date.now();
            return function () {
                var t = Date.now();
                i <= t - n && (e.apply(void 0, arguments), n = t)
            }
        },
        Ut = function (n, r, a) {
            var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : g,
                o = void 0,
                t = function () {
                    var t = this,
                        e = arguments,
                        i = function () {
                            i = o = null, a || n.apply(t, e)
                        };
                    !o && a && n.apply(t, e), s.clearTimeout(o), o = s.setTimeout(i, r)
                };
            return t.cancel = function () {
                s.clearTimeout(o), o = null
            }, t
        },
        xt = function () {};
    xt.prototype.allowedEvents_ = {}, xt.prototype.addEventListener = xt.prototype.on = function (t, e) {
        var i = this.addEventListener;
        this.addEventListener = function () {}, vt(this, t, e), this.addEventListener = i
    }, xt.prototype.removeEventListener = xt.prototype.off = function (t, e) {
        _t(this, t, e)
    }, xt.prototype.one = function (t, e) {
        var i = this.addEventListener;
        this.addEventListener = function () {}, Tt(this, t, e), this.addEventListener = i
    }, xt.prototype.dispatchEvent = xt.prototype.trigger = function (t) {
        var e = t.type || t;
        "string" == typeof t && (t = {
            type: e
        }), t = mt(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), bt(this, t)
    };
    var It = void 0;
    xt.prototype.queueTrigger = function (t) {
        var e = this;
        It || (It = new Map);
        var i = t.type || t,
            n = It.get(this);
        n || (n = new Map, It.set(this, n));
        var r = n.get(i);
        n.delete(i), g.clearTimeout(r);
        var a = g.setTimeout(function () {
            0 === n.size && (n = null, It.delete(e)), e.trigger(t)
        }, 0);
        n.set(i, a)
    };
    var Dt = function (e) {
            return e instanceof xt || !!e.eventBusEl_ && ["on", "one", "off", "trigger"].every(function (t) {
                return "function" == typeof e[t]
            })
        },
        Rt = function (t) {
            return "string" == typeof t && /\S/.test(t) || Array.isArray(t) && !!t.length
        },
        Mt = function (t) {
            if (!t.nodeName && !Dt(t)) throw new Error("Invalid target; must be a DOM node or evented object.")
        },
        Bt = function (t) {
            if (!Rt(t)) throw new Error("Invalid event type; must be a non-empty string or array.")
        },
        Nt = function (t) {
            if ("function" != typeof t) throw new Error("Invalid listener; must be a function.")
        },
        jt = function (t, e) {
            var i = e.length < 3 || e[0] === t || e[0] === t.eventBusEl_,
                n = void 0,
                r = void 0,
                a = void 0;
            return i ? (n = t.eventBusEl_, 3 <= e.length && e.shift(), r = e[0], a = e[1]) : (n = e[0], r = e[1], a = e[2]), Mt(n), Bt(r), Nt(a), {
                isTargetingSelf: i,
                target: n,
                type: r,
                listener: a = Ot(t, a)
            }
        },
        Ft = function (t, e, i, n) {
            Mt(t), t.nodeName ? St[e](t, i, n) : t[e](i, n)
        },
        Vt = {
            on: function () {
                for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                var r = jt(this, i),
                    a = r.isTargetingSelf,
                    s = r.target,
                    o = r.type,
                    u = r.listener;
                if (Ft(s, "on", o, u), !a) {
                    var l = function () {
                        return t.off(s, o, u)
                    };
                    l.guid = u.guid;
                    var c = function () {
                        return t.off("dispose", l)
                    };
                    c.guid = u.guid, Ft(this, "on", "dispose", l), Ft(s, "on", "dispose", c)
                }
            },
            one: function () {
                for (var r = this, t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                var n = jt(this, e),
                    a = n.isTargetingSelf,
                    s = n.target,
                    o = n.type,
                    u = n.listener;
                if (a) Ft(s, "one", o, u);
                else {
                    var l = function t() {
                        for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                        r.off(s, o, t), u.apply(null, i)
                    };
                    l.guid = u.guid, Ft(s, "one", o, l)
                }
            },
            off: function (t, e, i) {
                if (!t || Rt(t)) _t(this.eventBusEl_, t, e);
                else {
                    var n = t,
                        r = e;
                    Mt(n), Bt(r), Nt(i), i = Ot(this, i), this.off("dispose", i), n.nodeName ? (_t(n, r, i), _t(n, "dispose", i)) : Dt(n) && (n.off(r, i), n.off("dispose", i))
                }
            },
            trigger: function (t, e) {
                return bt(this.eventBusEl_, t, e)
            }
        };

    function Ht(t) {
        var e = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).eventBusKey;
        if (e) {
            if (!t[e].nodeName) throw new Error('The eventBusKey "' + e + '" does not refer to an element.');
            t.eventBusEl_ = t[e]
        } else t.eventBusEl_ = D("span", {
            className: "vjs-event-bus"
        });
        return k(t, Vt), t.on("dispose", function () {
            t.off(), g.setTimeout(function () {
                t.eventBusEl_ = null
            }, 0)
        }), t
    }
    var zt = {
        state: {},
        setState: function (t) {
            var i = this;
            "function" == typeof t && (t = t());
            var n = void 0;
            return S(t, function (t, e) {
                i.state[e] !== t && ((n = n || {})[e] = {
                    from: i.state[e],
                    to: t
                }), i.state[e] = t
            }), n && Dt(this) && this.trigger({
                changes: n,
                type: "statechanged"
            }), n
        }
    };

    function qt(t, e) {
        return k(t, zt), t.state = k({}, t.state, e), "function" == typeof t.handleStateChanged && Dt(t) && t.on("statechanged", t.handleStateChanged), t
    }

    function Wt(t) {
        return "string" != typeof t ? t : t.charAt(0).toUpperCase() + t.slice(1)
    }

    function Gt() {
        for (var i = {}, t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return e.forEach(function (t) {
            t && S(t, function (t, e) {
                w(t) ? (w(i[e]) || (i[e] = {}), i[e] = Gt(i[e], t)) : i[e] = t
            })
        }), i
    }
    var Xt = function () {
        function l(t, e, i) {
            if (y(this, l), !t && this.play ? this.player_ = t = this : this.player_ = t, this.options_ = Gt({}, this.options_), e = this.options_ = Gt(this.options_, e), this.id_ = e.id || e.el && e.el.id, !this.id_) {
                var n = t && t.id && t.id() || "no_player";
                this.id_ = n + "_component_" + ot()
            }
            this.name_ = e.name || null, e.el ? this.el_ = e.el : !1 !== e.createEl && (this.el_ = this.createEl()), !1 !== e.evented && Ht(this, {
                eventBusKey: this.el_ ? "el_" : null
            }), qt(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, !(this.childNameIndex_ = {}) !== e.initChildren && this.initChildren(), this.ready(i), !1 !== e.reportTouchActivity && this.enableTouchActivity()
        }
        return l.prototype.dispose = function () {
            if (this.trigger({
                    type: "dispose",
                    bubbles: !1
                }), this.children_)
                for (var t = this.children_.length - 1; 0 <= t; t--) this.children_[t].dispose && this.children_[t].dispose();
            this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), ht(this.el_), this.el_ = null), this.player_ = null
        }, l.prototype.player = function () {
            return this.player_
        }, l.prototype.options = function (t) {
            return f.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), t && (this.options_ = Gt(this.options_, t)), this.options_
        }, l.prototype.el = function () {
            return this.el_
        }, l.prototype.createEl = function (t, e, i) {
            return D(t, e, i)
        }, l.prototype.localize = function (t, r) {
            var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t,
                i = this.player_.language && this.player_.language(),
                n = this.player_.languages && this.player_.languages(),
                a = n && n[i],
                s = i && i.split("-")[0],
                o = n && n[s],
                u = e;
            return a && a[t] ? u = a[t] : o && o[t] && (u = o[t]), r && (u = u.replace(/\{(\d+)\}/g, function (t, e) {
                var i = r[e - 1],
                    n = i;
                return "undefined" == typeof i && (n = t), n
            })), u
        }, l.prototype.contentEl = function () {
            return this.contentEl_ || this.el_
        }, l.prototype.id = function () {
            return this.id_
        }, l.prototype.name = function () {
            return this.name_
        }, l.prototype.children = function () {
            return this.children_
        }, l.prototype.getChildById = function (t) {
            return this.childIndex_[t]
        }, l.prototype.getChild = function (t) {
            if (t) return t = Wt(t), this.childNameIndex_[t]
        }, l.prototype.addChild = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
                n = void 0,
                r = void 0;
            if ("string" == typeof t) {
                r = Wt(t);
                var a = e.componentClass || r;
                e.name = r;
                var s = l.getComponent(a);
                if (!s) throw new Error("Component " + a + " does not exist");
                if ("function" != typeof s) return null;
                n = new s(this.player_ || this, e)
            } else n = t;
            if (this.children_.splice(i, 0, n), "function" == typeof n.id && (this.childIndex_[n.id()] = n), (r = r || n.name && Wt(n.name())) && (this.childNameIndex_[r] = n), "function" == typeof n.el && n.el()) {
                var o = this.contentEl().children[i] || null;
                this.contentEl().insertBefore(n.el(), o)
            }
            return n
        }, l.prototype.removeChild = function (t) {
            if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
                for (var e = !1, i = this.children_.length - 1; 0 <= i; i--)
                    if (this.children_[i] === t) {
                        e = !0, this.children_.splice(i, 1);
                        break
                    } if (e) {
                    this.childIndex_[t.id()] = null, this.childNameIndex_[t.name()] = null;
                    var n = t.el();
                    n && n.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
                }
            }
        }, l.prototype.initChildren = function () {
            var r = this,
                n = this.options_.children;
            if (n) {
                var a = this.options_,
                    t = void 0,
                    i = l.getComponent("Tech");
                (t = Array.isArray(n) ? n : Object.keys(n)).concat(Object.keys(this.options_).filter(function (e) {
                    return !t.some(function (t) {
                        return "string" == typeof t ? e === t : e === t.name
                    })
                })).map(function (t) {
                    var e = void 0,
                        i = void 0;
                    return "string" == typeof t ? i = n[e = t] || r.options_[e] || {} : (e = t.name, i = t), {
                        name: e,
                        opts: i
                    }
                }).filter(function (t) {
                    var e = l.getComponent(t.opts.componentClass || Wt(t.name));
                    return e && !i.isTech(e)
                }).forEach(function (t) {
                    var e = t.name,
                        i = t.opts;
                    if (void 0 !== a[e] && (i = a[e]), !1 !== i) {
                        !0 === i && (i = {}), i.playerOptions = r.options_.playerOptions;
                        var n = r.addChild(e, i);
                        n && (r[e] = n)
                    }
                })
            }
        }, l.prototype.buildCSSClass = function () {
            return ""
        }, l.prototype.ready = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            if (t) return this.isReady_ ? void(e ? t.call(this) : this.setTimeout(t, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(t))
        }, l.prototype.triggerReady = function () {
            this.isReady_ = !0, this.setTimeout(function () {
                var t = this.readyQueue_;
                this.readyQueue_ = [], t && 0 < t.length && t.forEach(function (t) {
                    t.call(this)
                }, this), this.trigger("ready")
            }, 1)
        }, l.prototype.$ = function (t, e) {
            return nt(t, e || this.contentEl())
        }, l.prototype.$$ = function (t, e) {
            return rt(t, e || this.contentEl())
        }, l.prototype.hasClass = function (t) {
            return B(this.el_, t)
        }, l.prototype.addClass = function (t) {
            N(this.el_, t)
        }, l.prototype.removeClass = function (t) {
            j(this.el_, t)
        }, l.prototype.toggleClass = function (t, e) {
            F(this.el_, t, e)
        }, l.prototype.show = function () {
            this.removeClass("vjs-hidden")
        }, l.prototype.hide = function () {
            this.addClass("vjs-hidden")
        }, l.prototype.lockShowing = function () {
            this.addClass("vjs-lock-showing")
        }, l.prototype.unlockShowing = function () {
            this.removeClass("vjs-lock-showing")
        }, l.prototype.getAttribute = function (t) {
            return z(this.el_, t)
        }, l.prototype.setAttribute = function (t, e) {
            q(this.el_, t, e)
        }, l.prototype.removeAttribute = function (t) {
            W(this.el_, t)
        }, l.prototype.width = function (t, e) {
            return this.dimension("width", t, e)
        }, l.prototype.height = function (t, e) {
            return this.dimension("height", t, e)
        }, l.prototype.dimensions = function (t, e) {
            this.width(t, !0), this.height(e)
        }, l.prototype.dimension = function (t, e, i) {
            if (void 0 !== e) return null !== e && e == e || (e = 0), -1 !== ("" + e).indexOf("%") || -1 !== ("" + e).indexOf("px") ? this.el_.style[t] = e : this.el_.style[t] = "auto" === e ? "" : e + "px", void(i || this.trigger("componentresize"));
            if (!this.el_) return 0;
            var n = this.el_.style[t],
                r = n.indexOf("px");
            return -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + Wt(t)], 10)
        }, l.prototype.currentDimension = function (t) {
            var e = 0;
            if ("width" !== t && "height" !== t) throw new Error("currentDimension only accepts width or height value");
            if ("function" == typeof g.getComputedStyle) {
                var i = g.getComputedStyle(this.el_);
                e = i.getPropertyValue(t) || i[t]
            }
            if (0 === (e = parseFloat(e))) {
                var n = "offset" + Wt(t);
                e = this.el_[n]
            }
            return e
        }, l.prototype.currentDimensions = function () {
            return {
                width: this.currentDimension("width"),
                height: this.currentDimension("height")
            }
        }, l.prototype.currentWidth = function () {
            return this.currentDimension("width")
        }, l.prototype.currentHeight = function () {
            return this.currentDimension("height")
        }, l.prototype.focus = function () {
            this.el_.focus()
        }, l.prototype.blur = function () {
            this.el_.blur()
        }, l.prototype.emitTapEvents = function () {
            var e = 0,
                n = null,
                r = void 0;
            this.on("touchstart", function (t) {
                1 === t.touches.length && (n = {
                    pageX: t.touches[0].pageX,
                    pageY: t.touches[0].pageY
                }, e = (new Date).getTime(), r = !0)
            }), this.on("touchmove", function (t) {
                if (1 < t.touches.length) r = !1;
                else if (n) {
                    var e = t.touches[0].pageX - n.pageX,
                        i = t.touches[0].pageY - n.pageY;
                    10 < Math.sqrt(e * e + i * i) && (r = !1)
                }
            });
            var t = function () {
                r = !1
            };
            this.on("touchleave", t), this.on("touchcancel", t), this.on("touchend", function (t) {
                !(n = null) === r && ((new Date).getTime() - e < 200 && (t.preventDefault(), this.trigger("tap")))
            })
        }, l.prototype.enableTouchActivity = function () {
            if (this.player() && this.player().reportUserActivity) {
                var e = Ot(this.player(), this.player().reportUserActivity),
                    i = void 0;
                this.on("touchstart", function () {
                    e(), this.clearInterval(i), i = this.setInterval(e, 250)
                });
                var t = function (t) {
                    e(), this.clearInterval(i)
                };
                this.on("touchmove", e), this.on("touchend", t), this.on("touchcancel", t)
            }
        }, l.prototype.setTimeout = function (t, e) {
            var i, n, r = this;
            return t = Ot(this, t), i = g.setTimeout(function () {
                r.off("dispose", n), t()
            }, e), (n = function () {
                return r.clearTimeout(i)
            }).guid = "vjs-timeout-" + i, this.on("dispose", n), i
        }, l.prototype.clearTimeout = function (t) {
            g.clearTimeout(t);
            var e = function () {};
            return e.guid = "vjs-timeout-" + t, this.off("dispose", e), t
        }, l.prototype.setInterval = function (t, e) {
            var i = this;
            t = Ot(this, t);
            var n = g.setInterval(t, e),
                r = function () {
                    return i.clearInterval(n)
                };
            return r.guid = "vjs-interval-" + n, this.on("dispose", r), n
        }, l.prototype.clearInterval = function (t) {
            g.clearInterval(t);
            var e = function () {};
            return e.guid = "vjs-interval-" + t, this.off("dispose", e), t
        }, l.prototype.requestAnimationFrame = function (t) {
            var e, i, n = this;
            return this.supportsRaf_ ? (t = Ot(this, t), e = g.requestAnimationFrame(function () {
                n.off("dispose", i), t()
            }), (i = function () {
                return n.cancelAnimationFrame(e)
            }).guid = "vjs-raf-" + e, this.on("dispose", i), e) : this.setTimeout(t, 1e3 / 60)
        }, l.prototype.cancelAnimationFrame = function (t) {
            if (this.supportsRaf_) {
                g.cancelAnimationFrame(t);
                var e = function () {};
                return e.guid = "vjs-raf-" + t, this.off("dispose", e), t
            }
            return this.clearTimeout(t)
        }, l.registerComponent = function (t, e) {
            if ("string" != typeof t || !t) throw new Error('Illegal component name, "' + t + '"; must be a non-empty string.');
            var i = l.getComponent("Tech"),
                n = i && i.isTech(e),
                r = l === e || l.prototype.isPrototypeOf(e.prototype);
            if (n || !r) {
                var a = void 0;
                throw a = n ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + t + '"; ' + a + ".")
            }
            t = Wt(t), l.components_ || (l.components_ = {});
            var s = l.getComponent("Player");
            if ("Player" === t && s && s.players) {
                var o = s.players,
                    u = Object.keys(o);
                if (o && 0 < u.length && u.map(function (t) {
                        return o[t]
                    }).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
            }
            return l.components_[t] = e
        }, l.getComponent = function (t) {
            if (t) return t = Wt(t), l.components_ && l.components_[t] ? l.components_[t] : void 0
        }, l
    }();
    Xt.prototype.supportsRaf_ = "function" == typeof g.requestAnimationFrame && "function" == typeof g.cancelAnimationFrame, Xt.registerComponent("Component", Xt);
    var Yt, $t, Kt, Jt, Qt = g.navigator && g.navigator.userAgent || "",
        Zt = /AppleWebKit\/([\d.]+)/i.exec(Qt),
        te = Zt ? parseFloat(Zt.pop()) : null,
        ee = /iPad/i.test(Qt),
        ie = /iPhone/i.test(Qt) && !ee,
        ne = /iPod/i.test(Qt),
        re = ie || ee || ne,
        ae = (Yt = Qt.match(/OS (\d+)_/i)) && Yt[1] ? Yt[1] : null,
        se = /Android/i.test(Qt),
        oe = function () {
            var t = Qt.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
            if (!t) return null;
            var e = t[1] && parseFloat(t[1]),
                i = t[2] && parseFloat(t[2]);
            return e && i ? parseFloat(t[1] + "." + t[2]) : e || null
        }(),
        ue = se && oe < 5 && te < 537,
        le = /Firefox/i.test(Qt),
        ce = /Edge/i.test(Qt),
        de = !ce && (/Chrome/i.test(Qt) || /CriOS/i.test(Qt)),
        he = ($t = Qt.match(/(Chrome|CriOS)\/(\d+)/)) && $t[2] ? parseFloat($t[2]) : null,
        pe = (Kt = /MSIE\s(\d+)\.\d/.exec(Qt), !(Jt = Kt && parseFloat(Kt[1])) && /Trident\/7.0/i.test(Qt) && /rv:11.0/.test(Qt) && (Jt = 11), Jt),
        fe = /Safari/i.test(Qt) && !de && !se && !ce,
        me = (fe || re) && !de,
        ge = P() && ("ontouchstart" in g || g.navigator.maxTouchPoints || g.DocumentTouch && g.document instanceof g.DocumentTouch),
        ye = Object.freeze({
            IS_IPAD: ee,
            IS_IPHONE: ie,
            IS_IPOD: ne,
            IS_IOS: re,
            IOS_VERSION: ae,
            IS_ANDROID: se,
            ANDROID_VERSION: oe,
            IS_NATIVE_ANDROID: ue,
            IS_FIREFOX: le,
            IS_EDGE: ce,
            IS_CHROME: de,
            CHROME_VERSION: he,
            IE_VERSION: pe,
            IS_SAFARI: fe,
            IS_ANY_SAFARI: me,
            TOUCH_ENABLED: ge
        });

    function ve(t, e, i, n) {
        return function (t, e, i) {
            if ("number" != typeof e || e < 0 || i < e) throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is non-numeric or out of bounds (0-" + i + ").")
        }(t, n, i.length - 1), i[n][e]
    }

    function _e(t) {
        return void 0 === t || 0 === t.length ? {
            length: 0,
            start: function () {
                throw new Error("This TimeRanges object is empty")
            },
            end: function () {
                throw new Error("This TimeRanges object is empty")
            }
        } : {
            length: t.length,
            start: ve.bind(null, "start", 0, t),
            end: ve.bind(null, "end", 1, t)
        }
    }

    function be(t, e) {
        return Array.isArray(t) ? _e(t) : void 0 === t || void 0 === e ? _e() : _e([
            [t, e]
        ])
    }

    function Te(t, e) {
        var i = 0,
            n = void 0,
            r = void 0;
        if (!e) return 0;
        t && t.length || (t = be(0, 0));
        for (var a = 0; a < t.length; a++) n = t.start(a), e < (r = t.end(a)) && (r = e), i += r - n;
        return i / e
    }
    for (var Se = {}, ke = [
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
        ], Ce = ke[0], we = void 0, Ae = 0; Ae < ke.length; Ae++)
        if (ke[Ae][1] in p) {
            we = ke[Ae];
            break
        } if (we)
        for (var Le = 0; Le < we.length; Le++) Se[Ce[Le]] = we[Le];

    function Oe(t) {
        if (t instanceof Oe) return t;
        "number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : C(t) && ("number" == typeof t.code && (this.code = t.code), k(this, t)), this.message || (this.message = Oe.defaultMessages[this.code] || "")
    }
    Oe.prototype.code = 0, Oe.prototype.message = "", Oe.prototype.status = null, Oe.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], Oe.defaultMessages = {
        1: "You aborted the media playback",
        2: "A network error caused the media download to fail part-way.",
        3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
        4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
        5: "The media is encrypted and we do not have the keys to decrypt it."
    };
    for (var Pe = 0; Pe < Oe.errorTypes.length; Pe++) Oe[Oe.errorTypes[Pe]] = Pe, Oe.prototype[Oe.errorTypes[Pe]] = Pe;
    var Ue = function (t, e) {
        var i, n = null;
        try {
            i = JSON.parse(t, e)
        } catch (t) {
            n = t
        }
        return [n, i]
    };

    function xe(t) {
        return null != t && "function" == typeof t.then
    }

    function Ie(t) {
        xe(t) && t.then(null, function (t) {})
    }
    var De = function (n) {
            return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function (t, e, i) {
                return n[e] && (t[e] = n[e]), t
            }, {
                cues: n.cues && Array.prototype.map.call(n.cues, function (t) {
                    return {
                        startTime: t.startTime,
                        endTime: t.endTime,
                        text: t.text,
                        id: t.id
                    }
                })
            })
        },
        Re = function (t) {
            var e = t.$$("track"),
                i = Array.prototype.map.call(e, function (t) {
                    return t.track
                });
            return Array.prototype.map.call(e, function (t) {
                var e = De(t.track);
                return t.src && (e.src = t.src), e
            }).concat(Array.prototype.filter.call(t.textTracks(), function (t) {
                return -1 === i.indexOf(t)
            }).map(De))
        },
        Me = function (t, i) {
            return t.forEach(function (t) {
                var e = i.addRemoteTextTrack(t).track;
                !t.src && t.cues && t.cues.forEach(function (t) {
                    return e.addCue(t)
                })
            }), i.textTracks()
        },
        Be = "vjs-modal-dialog",
        Ne = function (n) {
            function r(t, e) {
                y(this, r);
                var i = _(this, n.call(this, t, e));
                return i.opened_ = i.hasBeenOpened_ = i.hasBeenFilled_ = !1, i.closeable(!i.options_.uncloseable), i.content(i.options_.content), i.contentEl_ = D("div", {
                    className: Be + "-content"
                }, {
                    role: "document"
                }), i.descEl_ = D("p", {
                    className: Be + "-description vjs-control-text",
                    id: i.el().getAttribute("aria-describedby")
                }), R(i.descEl_, i.description()), i.el_.appendChild(i.descEl_), i.el_.appendChild(i.contentEl_), i
            }
            return v(r, n), r.prototype.createEl = function () {
                return n.prototype.createEl.call(this, "div", {
                    className: this.buildCSSClass(),
                    tabIndex: -1
                }, {
                    "aria-describedby": this.id() + "_description",
                    "aria-hidden": "true",
                    "aria-label": this.label(),
                    role: "dialog"
                })
            }, r.prototype.dispose = function () {
                this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, n.prototype.dispose.call(this)
            }, r.prototype.buildCSSClass = function () {
                return Be + " vjs-hidden " + n.prototype.buildCSSClass.call(this)
            }, r.prototype.handleKeyPress = function (t) {
                27 === t.which && this.closeable() && this.close()
            }, r.prototype.label = function () {
                return this.localize(this.options_.label || "Modal Window")
            }, r.prototype.description = function () {
                var t = this.options_.description || this.localize("This is a modal window.");
                return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), t
            }, r.prototype.open = function () {
                if (!this.opened_) {
                    var t = this.player();
                    this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !t.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && t.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", Ot(this, this.handleKeyPress)), this.hadControls_ = t.controls(), t.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                }
            }, r.prototype.opened = function (t) {
                return "boolean" == typeof t && this[t ? "open" : "close"](), this.opened_
            }, r.prototype.close = function () {
                if (this.opened_) {
                    var t = this.player();
                    this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && t.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", Ot(this, this.handleKeyPress)), this.hadControls_ && t.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
                }
            }, r.prototype.closeable = function (t) {
                if ("boolean" == typeof t) {
                    var e = this.closeable_ = !!t,
                        i = this.getChild("closeButton");
                    if (e && !i) {
                        var n = this.contentEl_;
                        this.contentEl_ = this.el_, i = this.addChild("closeButton", {
                            controlText: "Close Modal Dialog"
                        }), this.contentEl_ = n, this.on(i, "close", this.close)
                    }!e && i && (this.off(i, "close", this.close), this.removeChild(i), i.dispose())
                }
                return this.closeable_
            }, r.prototype.fill = function () {
                this.fillWith(this.content())
            }, r.prototype.fillWith = function (t) {
                var e = this.contentEl(),
                    i = e.parentNode,
                    n = e.nextSibling;
                this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(e), this.empty(), et(e, t), this.trigger("modalfill"), n ? i.insertBefore(e, n) : i.appendChild(e);
                var r = this.getChild("closeButton");
                r && i.appendChild(r.el_)
            }, r.prototype.empty = function () {
                this.trigger("beforemodalempty"), Q(this.contentEl()), this.trigger("modalempty")
            }, r.prototype.content = function (t) {
                return "undefined" != typeof t && (this.content_ = t), this.content_
            }, r.prototype.conditionalFocus_ = function () {
                var t = p.activeElement,
                    e = this.player_.el_;
                this.previouslyActiveEl_ = null, (e.contains(t) || e === t) && (this.previouslyActiveEl_ = t, this.focus(), this.on(p, "keydown", this.handleKeyDown))
            }, r.prototype.conditionalBlur_ = function () {
                this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null), this.off(p, "keydown", this.handleKeyDown)
            }, r.prototype.handleKeyDown = function (t) {
                if (9 === t.which) {
                    for (var e = this.focusableEls_(), i = this.el_.querySelector(":focus"), n = void 0, r = 0; r < e.length; r++)
                        if (i === e[r]) {
                            n = r;
                            break
                        } p.activeElement === this.el_ && (n = 0), t.shiftKey && 0 === n ? (e[e.length - 1].focus(), t.preventDefault()) : t.shiftKey || n !== e.length - 1 || (e[0].focus(), t.preventDefault())
                }
            }, r.prototype.focusableEls_ = function () {
                var t = this.el_.querySelectorAll("*");
                return Array.prototype.filter.call(t, function (t) {
                    return (t instanceof g.HTMLAnchorElement || t instanceof g.HTMLAreaElement) && t.hasAttribute("href") || (t instanceof g.HTMLInputElement || t instanceof g.HTMLSelectElement || t instanceof g.HTMLTextAreaElement || t instanceof g.HTMLButtonElement) && !t.hasAttribute("disabled") || t instanceof g.HTMLIFrameElement || t instanceof g.HTMLObjectElement || t instanceof g.HTMLEmbedElement || t.hasAttribute("tabindex") && -1 !== t.getAttribute("tabindex") || t.hasAttribute("contenteditable")
                })
            }, r
        }(Xt);
    Ne.prototype.options_ = {
        pauseOnOpen: !0,
        temporary: !0
    }, Xt.registerComponent("ModalDialog", Ne);
    var je = function (n) {
        function r() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            y(this, r);
            var e = _(this, n.call(this));
            e.tracks_ = [], Object.defineProperty(e, "length", {
                get: function () {
                    return this.tracks_.length
                }
            });
            for (var i = 0; i < t.length; i++) e.addTrack(t[i]);
            return e
        }
        return v(r, n), r.prototype.addTrack = function (t) {
            var e = this.tracks_.length;
            "" + e in this || Object.defineProperty(this, e, {
                get: function () {
                    return this.tracks_[e]
                }
            }), -1 === this.tracks_.indexOf(t) && (this.tracks_.push(t), this.trigger({
                track: t,
                type: "addtrack"
            }))
        }, r.prototype.removeTrack = function (t) {
            for (var e = void 0, i = 0, n = this.length; i < n; i++)
                if (this[i] === t) {
                    (e = this[i]).off && e.off(), this.tracks_.splice(i, 1);
                    break
                } e && this.trigger({
                track: e,
                type: "removetrack"
            })
        }, r.prototype.getTrackById = function (t) {
            for (var e = null, i = 0, n = this.length; i < n; i++) {
                var r = this[i];
                if (r.id === t) {
                    e = r;
                    break
                }
            }
            return e
        }, r
    }(xt);
    for (var Fe in je.prototype.allowedEvents_ = {
            change: "change",
            addtrack: "addtrack",
            removetrack: "removetrack"
        }, je.prototype.allowedEvents_) je.prototype["on" + Fe] = null;
    var Ve = function (t, e) {
            for (var i = 0; i < t.length; i++) Object.keys(t[i]).length && e.id !== t[i].id && (t[i].enabled = !1)
        },
        He = function (n) {
            function r() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                y(this, r);
                for (var e = t.length - 1; 0 <= e; e--)
                    if (t[e].enabled) {
                        Ve(t, t[e]);
                        break
                    } var i = _(this, n.call(this, t));
                return i.changing_ = !1, i
            }
            return v(r, n), r.prototype.addTrack = function (t) {
                var e = this;
                t.enabled && Ve(this, t), n.prototype.addTrack.call(this, t), t.addEventListener && t.addEventListener("enabledchange", function () {
                    e.changing_ || (e.changing_ = !0, Ve(e, t), e.changing_ = !1, e.trigger("change"))
                })
            }, r
        }(je),
        ze = function (t, e) {
            for (var i = 0; i < t.length; i++) Object.keys(t[i]).length && e.id !== t[i].id && (t[i].selected = !1)
        },
        qe = function (n) {
            function r() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                y(this, r);
                for (var e = t.length - 1; 0 <= e; e--)
                    if (t[e].selected) {
                        ze(t, t[e]);
                        break
                    } var i = _(this, n.call(this, t));
                return i.changing_ = !1, Object.defineProperty(i, "selectedIndex", {
                    get: function () {
                        for (var t = 0; t < this.length; t++)
                            if (this[t].selected) return t;
                        return -1
                    },
                    set: function () {}
                }), i
            }
            return v(r, n), r.prototype.addTrack = function (t) {
                var e = this;
                t.selected && ze(this, t), n.prototype.addTrack.call(this, t), t.addEventListener && t.addEventListener("selectedchange", function () {
                    e.changing_ || (e.changing_ = !0, ze(e, t), e.changing_ = !1, e.trigger("change"))
                })
            }, r
        }(je),
        We = function (e) {
            function t() {
                return y(this, t), _(this, e.apply(this, arguments))
            }
            return v(t, e), t.prototype.addTrack = function (t) {
                e.prototype.addTrack.call(this, t), t.addEventListener("modechange", Ot(this, function () {
                    this.queueTrigger("change")
                })); - 1 === ["metadata", "chapters"].indexOf(t.kind) && t.addEventListener("modechange", Ot(this, function () {
                    this.trigger("selectedlanguagechange")
                }))
            }, t
        }(je),
        Ge = function () {
            function n() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                y(this, n), this.trackElements_ = [], Object.defineProperty(this, "length", {
                    get: function () {
                        return this.trackElements_.length
                    }
                });
                for (var e = 0, i = t.length; e < i; e++) this.addTrackElement_(t[e])
            }
            return n.prototype.addTrackElement_ = function (t) {
                var e = this.trackElements_.length;
                "" + e in this || Object.defineProperty(this, e, {
                    get: function () {
                        return this.trackElements_[e]
                    }
                }), -1 === this.trackElements_.indexOf(t) && this.trackElements_.push(t)
            }, n.prototype.getTrackElementByTrack_ = function (t) {
                for (var e = void 0, i = 0, n = this.trackElements_.length; i < n; i++)
                    if (t === this.trackElements_[i].track) {
                        e = this.trackElements_[i];
                        break
                    } return e
            }, n.prototype.removeTrackElement_ = function (t) {
                for (var e = 0, i = this.trackElements_.length; e < i; e++)
                    if (t === this.trackElements_[e]) {
                        this.trackElements_.splice(e, 1);
                        break
                    }
            }, n
        }(),
        Xe = function () {
            function e(t) {
                y(this, e), e.prototype.setCues_.call(this, t), Object.defineProperty(this, "length", {
                    get: function () {
                        return this.length_
                    }
                })
            }
            return e.prototype.setCues_ = function (t) {
                var e = this.length || 0,
                    i = 0,
                    n = t.length;
                this.cues_ = t, this.length_ = t.length;
                var r = function (t) {
                    "" + t in this || Object.defineProperty(this, "" + t, {
                        get: function () {
                            return this.cues_[t]
                        }
                    })
                };
                if (e < n)
                    for (i = e; i < n; i++) r.call(this, i)
            }, e.prototype.getCueById = function (t) {
                for (var e = null, i = 0, n = this.length; i < n; i++) {
                    var r = this[i];
                    if (r.id === t) {
                        e = r;
                        break
                    }
                }
                return e
            }, e
        }(),
        Ye = {
            alternative: "alternative",
            captions: "captions",
            main: "main",
            sign: "sign",
            subtitles: "subtitles",
            commentary: "commentary"
        },
        $e = {
            alternative: "alternative",
            descriptions: "descriptions",
            main: "main",
            "main-desc": "main-desc",
            translation: "translation",
            commentary: "commentary"
        },
        Ke = {
            subtitles: "subtitles",
            captions: "captions",
            descriptions: "descriptions",
            chapters: "chapters",
            metadata: "metadata"
        },
        Je = {
            disabled: "disabled",
            hidden: "hidden",
            showing: "showing"
        },
        Qe = function (a) {
            function s() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                y(this, s);
                var e = _(this, a.call(this)),
                    i = {
                        id: t.id || "vjs_track_" + ot(),
                        kind: t.kind || "",
                        label: t.label || "",
                        language: t.language || ""
                    },
                    n = function (t) {
                        Object.defineProperty(e, t, {
                            get: function () {
                                return i[t]
                            },
                            set: function () {}
                        })
                    };
                for (var r in i) n(r);
                return e
            }
            return v(s, a), s
        }(xt),
        Ze = function (t) {
            var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                i = p.createElement("a");
            i.href = t;
            var n = "" === i.host && "file:" !== i.protocol,
                r = void 0;
            n && ((r = p.createElement("div")).innerHTML = '<a href="' + t + '"></a>', i = r.firstChild, r.setAttribute("style", "display:none; position:absolute;"), p.body.appendChild(r));
            for (var a = {}, s = 0; s < e.length; s++) a[e[s]] = i[e[s]];
            return "http:" === a.protocol && (a.host = a.host.replace(/:80$/, "")), "https:" === a.protocol && (a.host = a.host.replace(/:443$/, "")), a.protocol || (a.protocol = g.location.protocol), n && p.body.removeChild(r), a
        },
        ti = function (t) {
            if (!t.match(/^https?:\/\//)) {
                var e = p.createElement("div");
                e.innerHTML = '<a href="' + t + '">x</a>', t = e.firstChild.href
            }
            return t
        },
        ei = function (t) {
            if ("string" == typeof t) {
                var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(t);
                if (e) return e.pop().toLowerCase()
            }
            return ""
        },
        ii = function (t) {
            var e = g.location,
                i = Ze(t);
            return (":" === i.protocol ? e.protocol : i.protocol) + i.host !== e.protocol + e.host
        },
        ni = Object.freeze({
            parseUrl: Ze,
            getAbsoluteURL: ti,
            getFileExtension: ei,
            isCrossOrigin: ii
        }),
        ri = function (t) {
            var e = ai.call(t);
            return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
        },
        ai = Object.prototype.toString;
    var si = Object.freeze({
            default: ri,
            __moduleExports: ri
        }),
        oi = e(function (t, e) {
            (e = t.exports = function (t) {
                return t.replace(/^\s*|\s*$/g, "")
            }).left = function (t) {
                return t.replace(/^\s*/, "")
            }, e.right = function (t) {
                return t.replace(/\s*$/, "")
            }
        }),
        ui = oi.left,
        li = oi.right,
        ci = Object.freeze({
            default: oi,
            __moduleExports: oi,
            left: ui,
            right: li
        }),
        di = si && ri || si,
        hi = function (t, e, i) {
            if (!di(e)) throw new TypeError("iterator must be a function");
            arguments.length < 3 && (i = this);
            "[object Array]" === pi.call(t) ? function (t, e, i) {
                for (var n = 0, r = t.length; n < r; n++) fi.call(t, n) && e.call(i, t[n], n, t)
            }(t, e, i) : "string" == typeof t ? function (t, e, i) {
                for (var n = 0, r = t.length; n < r; n++) e.call(i, t.charAt(n), n, t)
            }(t, e, i) : function (t, e, i) {
                for (var n in t) fi.call(t, n) && e.call(i, t[n], n, t)
            }(t, e, i)
        },
        pi = Object.prototype.toString,
        fi = Object.prototype.hasOwnProperty;
    var mi = Object.freeze({
            default: hi,
            __moduleExports: hi
        }),
        gi = ci && oi || ci,
        yi = mi && hi || mi,
        vi = function (t) {
            if (!t) return {};
            var a = {};
            return yi(gi(t).split("\n"), function (t) {
                var e, i = t.indexOf(":"),
                    n = gi(t.slice(0, i)).toLowerCase(),
                    r = gi(t.slice(i + 1));
                "undefined" == typeof a[n] ? a[n] = r : (e = a[n], "[object Array]" === Object.prototype.toString.call(e) ? a[n].push(r) : a[n] = [a[n], r])
            }), a
        },
        _i = Object.freeze({
            default: vi,
            __moduleExports: vi
        }),
        bi = function () {
            for (var t = {}, e = 0; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) Ti.call(i, n) && (t[n] = i[n])
            }
            return t
        },
        Ti = Object.prototype.hasOwnProperty;
    var Si = Object.freeze({
            default: bi,
            __moduleExports: bi
        }),
        ki = _i && vi || _i,
        Ci = Si && bi || Si,
        wi = Ai;

    function Ei(t, e, i) {
        var n = t;
        return di(e) ? (i = e, "string" == typeof t && (n = {
            uri: t
        })) : n = Ci(e, {
            uri: t
        }), n.callback = i, n
    }

    function Ai(t, e, i) {
        return Li(e = Ei(t, e, i))
    }

    function Li(n) {
        if ("undefined" == typeof n.callback) throw new Error("callback argument missing");
        var r = !1,
            a = function (t, e, i) {
                r || (r = !0, n.callback(t, e, i))
            };

        function e(t) {
            return clearTimeout(u), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, a(t, m)
        }

        function t() {
            if (!s) {
                var t;
                clearTimeout(u), t = n.useXDR && void 0 === o.status ? 200 : 1223 === o.status ? 204 : o.status;
                var e = m,
                    i = null;
                return 0 !== t ? (e = {
                    body: function () {
                        var t = void 0;
                        if (t = o.response ? o.response : o.responseText || function (t) {
                                if ("document" === t.responseType) return t.responseXML;
                                var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
                                return "" !== t.responseType || e ? null : t.responseXML
                            }(o), f) try {
                            t = JSON.parse(t)
                        } catch (t) {}
                        return t
                    }(),
                    statusCode: t,
                    method: c,
                    headers: {},
                    url: l,
                    rawRequest: o
                }, o.getAllResponseHeaders && (e.headers = ki(o.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), a(i, e, e.body)
            }
        }
        var i, s, o = n.xhr || null;
        o || (o = n.cors || n.useXDR ? new Ai.XDomainRequest : new Ai.XMLHttpRequest);
        var u, l = o.url = n.uri || n.url,
            c = o.method = n.method || "GET",
            d = n.body || n.data,
            h = o.headers = n.headers || {},
            p = !!n.sync,
            f = !1,
            m = {
                body: void 0,
                headers: {},
                statusCode: 0,
                method: c,
                url: l,
                rawRequest: o
            };
        if ("json" in n && !1 !== n.json && (f = !0, h.accept || h.Accept || (h.Accept = "application/json"), "GET" !== c && "HEAD" !== c && (h["content-type"] || h["Content-Type"] || (h["Content-Type"] = "application/json"), d = JSON.stringify(!0 === n.json ? d : n.json))), o.onreadystatechange = function () {
                4 === o.readyState && setTimeout(t, 0)
            }, o.onload = t, o.onerror = e, o.onprogress = function () {}, o.onabort = function () {
                s = !0
            }, o.ontimeout = e, o.open(c, l, !p, n.username, n.password), p || (o.withCredentials = !!n.withCredentials), !p && 0 < n.timeout && (u = setTimeout(function () {
                if (!s) {
                    s = !0, o.abort("timeout");
                    var t = new Error("XMLHttpRequest timeout");
                    t.code = "ETIMEDOUT", e(t)
                }
            }, n.timeout)), o.setRequestHeader)
            for (i in h) h.hasOwnProperty(i) && o.setRequestHeader(i, h[i]);
        else if (n.headers && ! function (t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }(n.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType" in n && (o.responseType = n.responseType), "beforeSend" in n && "function" == typeof n.beforeSend && n.beforeSend(o), o.send(d || null), o
    }
    Ai.XMLHttpRequest = g.XMLHttpRequest || function () {}, Ai.XDomainRequest = "withCredentials" in new Ai.XMLHttpRequest ? Ai.XMLHttpRequest : g.XDomainRequest,
        function (t, e) {
            for (var i = 0; i < t.length; i++) e(t[i])
        }(["get", "put", "post", "patch", "head", "delete"], function (n) {
            Ai["delete" === n ? "del" : n] = function (t, e, i) {
                return (e = Ei(t, e, i)).method = n.toUpperCase(), Li(e)
            }
        });
    var Oi = function (t, e) {
            var i = new g.WebVTT.Parser(g, g.vttjs, g.WebVTT.StringDecoder()),
                n = [];
            i.oncue = function (t) {
                e.addCue(t)
            }, i.onparsingerror = function (t) {
                n.push(t)
            }, i.onflush = function () {
                e.trigger({
                    type: "loadeddata",
                    target: e
                })
            }, i.parse(t), 0 < n.length && (g.console && g.console.groupCollapsed && g.console.groupCollapsed("Text Track parsing errors for " + e.src), n.forEach(function (t) {
                return f.error(t)
            }), g.console && g.console.groupEnd && g.console.groupEnd()), i.flush()
        },
        Pi = function (t, r) {
            var e = {
                    uri: t
                },
                i = ii(t);
            i && (e.cors = i), wi(e, Ot(this, function (t, e, i) {
                if (t) return f.error(t, e);
                if (r.loaded_ = !0, "function" != typeof g.WebVTT) {
                    if (r.tech_) {
                        var n = function () {
                            return Oi(i, r)
                        };
                        r.tech_.on("vttjsloaded", n), r.tech_.on("vttjserror", function () {
                            f.error("vttjs failed to load, stopping trying to process " + r.src), r.tech_.off("vttjsloaded", n)
                        })
                    }
                } else Oi(i, r)
            }))
        },
        Ui = function (l) {
            function c() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                if (y(this, c), !t.tech) throw new Error("A tech was not provided.");
                var e = Gt(t, {
                        kind: Ke[t.kind] || "subtitles",
                        language: t.language || t.srclang || ""
                    }),
                    i = Je[e.mode] || "disabled",
                    n = e.default;
                "metadata" !== e.kind && "chapters" !== e.kind || (i = "hidden");
                var r = _(this, l.call(this, e));
                r.tech_ = e.tech, r.cues_ = [], r.activeCues_ = [];
                var a = new Xe(r.cues_),
                    s = new Xe(r.activeCues_),
                    o = !1,
                    u = Ot(r, function () {
                        this.activeCues = this.activeCues, o && (this.trigger("cuechange"), o = !1)
                    });
                return "disabled" !== i && r.tech_.ready(function () {
                    r.tech_.on("timeupdate", u)
                }, !0), Object.defineProperties(r, {
                    default: {
                        get: function () {
                            return n
                        },
                        set: function () {}
                    },
                    mode: {
                        get: function () {
                            return i
                        },
                        set: function (t) {
                            var e = this;
                            Je[t] && ("showing" === (i = t) && this.tech_.ready(function () {
                                e.tech_.on("timeupdate", u)
                            }, !0), this.trigger("modechange"))
                        }
                    },
                    cues: {
                        get: function () {
                            return this.loaded_ ? a : null
                        },
                        set: function () {}
                    },
                    activeCues: {
                        get: function () {
                            if (!this.loaded_) return null;
                            if (0 === this.cues.length) return s;
                            for (var t = this.tech_.currentTime(), e = [], i = 0, n = this.cues.length; i < n; i++) {
                                var r = this.cues[i];
                                r.startTime <= t && r.endTime >= t ? e.push(r) : r.startTime === r.endTime && r.startTime <= t && r.startTime + .5 >= t && e.push(r)
                            }
                            if (o = !1, e.length !== this.activeCues_.length) o = !0;
                            else
                                for (var a = 0; a < e.length; a++) - 1 === this.activeCues_.indexOf(e[a]) && (o = !0);
                            return this.activeCues_ = e, s.setCues_(this.activeCues_), s
                        },
                        set: function () {}
                    }
                }), e.src ? (r.src = e.src, Pi(e.src, r)) : r.loaded_ = !0, r
            }
            return v(c, l), c.prototype.addCue = function (t) {
                var e = t;
                if (g.vttjs && !(t instanceof g.vttjs.VTTCue)) {
                    for (var i in e = new g.vttjs.VTTCue(t.startTime, t.endTime, t.text), t) i in e || (e[i] = t[i]);
                    e.id = t.id, e.originalCue_ = t
                }
                for (var n = this.tech_.textTracks(), r = 0; r < n.length; r++) n[r] !== this && n[r].removeCue(e);
                this.cues_.push(e), this.cues.setCues_(this.cues_)
            }, c.prototype.removeCue = function (t) {
                for (var e = this.cues_.length; e--;) {
                    var i = this.cues_[e];
                    if (i === t || i.originalCue_ && i.originalCue_ === t) {
                        this.cues_.splice(e, 1), this.cues.setCues_(this.cues_);
                        break
                    }
                }
            }, c
        }(Qe);
    Ui.prototype.allowedEvents_ = {
        cuechange: "cuechange"
    };
    var xi = function (r) {
            function a() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                y(this, a);
                var e = Gt(t, {
                        kind: $e[t.kind] || ""
                    }),
                    i = _(this, r.call(this, e)),
                    n = !1;
                return Object.defineProperty(i, "enabled", {
                    get: function () {
                        return n
                    },
                    set: function (t) {
                        "boolean" == typeof t && t !== n && (n = t, this.trigger("enabledchange"))
                    }
                }), e.enabled && (i.enabled = e.enabled), i.loaded_ = !0, i
            }
            return v(a, r), a
        }(Qe),
        Ii = function (r) {
            function a() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                y(this, a);
                var e = Gt(t, {
                        kind: Ye[t.kind] || ""
                    }),
                    i = _(this, r.call(this, e)),
                    n = !1;
                return Object.defineProperty(i, "selected", {
                    get: function () {
                        return n
                    },
                    set: function (t) {
                        "boolean" == typeof t && t !== n && (n = t, this.trigger("selectedchange"))
                    }
                }), e.selected && (i.selected = e.selected), i
            }
            return v(a, r), a
        }(Qe),
        Di = 0,
        Ri = 2,
        Mi = function (r) {
            function a() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                y(this, a);
                var e = _(this, r.call(this)),
                    i = void 0,
                    n = new Ui(t);
                return e.kind = n.kind, e.src = n.src, e.srclang = n.language, e.label = n.label, e.default = n.default, Object.defineProperties(e, {
                    readyState: {
                        get: function () {
                            return i
                        }
                    },
                    track: {
                        get: function () {
                            return n
                        }
                    }
                }), i = Di, n.addEventListener("loadeddata", function () {
                    i = Ri, e.trigger({
                        type: "load",
                        target: e
                    })
                }), e
            }
            return v(a, r), a
        }(xt);
    Mi.prototype.allowedEvents_ = {
        load: "load"
    }, Mi.NONE = Di, Mi.LOADING = 1, Mi.LOADED = Ri, Mi.ERROR = 3;
    var Bi = {
        audio: {
            ListClass: He,
            TrackClass: xi,
            capitalName: "Audio"
        },
        video: {
            ListClass: qe,
            TrackClass: Ii,
            capitalName: "Video"
        },
        text: {
            ListClass: We,
            TrackClass: Ui,
            capitalName: "Text"
        }
    };
    Object.keys(Bi).forEach(function (t) {
        Bi[t].getterName = t + "Tracks", Bi[t].privateName = t + "Tracks_"
    });
    var Ni = {
            remoteText: {
                ListClass: We,
                TrackClass: Ui,
                capitalName: "RemoteText",
                getterName: "remoteTextTracks",
                privateName: "remoteTextTracks_"
            },
            remoteTextEl: {
                ListClass: Ge,
                TrackClass: Mi,
                capitalName: "RemoteTextTrackEls",
                getterName: "remoteTextTrackEls",
                privateName: "remoteTextTrackEls_"
            }
        },
        ji = Gt(Bi, Ni);
    Ni.names = Object.keys(Ni), Bi.names = Object.keys(Bi), ji.names = [].concat(Ni.names).concat(Bi.names);
    var Fi = Object.create || function () {
        function e() {}
        return function (t) {
            if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
            return e.prototype = t, new e
        }
    }();

    function Vi(t, e) {
        this.name = "ParsingError", this.code = t.code, this.message = e || t.message
    }

    function Hi(t) {
        function e(t, e, i, n) {
            return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | n) / 1e3
        }
        var i = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : 59 < i[1] ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
    }

    function zi() {
        this.values = Fi(null)
    }

    function qi(t, e, i, n) {
        var r = n ? t.split(n) : [t];
        for (var a in r)
            if ("string" == typeof r[a]) {
                var s = r[a].split(i);
                if (2 === s.length) e(s[0], s[1])
            }
    }

    function Wi(e, t, a) {
        var i, n, s, r = e;

        function o() {
            var t = Hi(e);
            if (null === t) throw new Vi(Vi.Errors.BadTimeStamp, "Malformed timestamp: " + r);
            return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
        }

        function u() {
            e = e.replace(/^\s+/, "")
        }
        if (u(), t.startTime = o(), u(), "--\x3e" !== e.substr(0, 3)) throw new Vi(Vi.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + r);
        e = e.substr(3), u(), t.endTime = o(), u(), i = e, n = t, s = new zi, qi(i, function (t, e) {
            switch (t) {
                case "region":
                    for (var i = a.length - 1; 0 <= i; i--)
                        if (a[i].id === e) {
                            s.set(t, a[i].region);
                            break
                        } break;
                case "vertical":
                    s.alt(t, e, ["rl", "lr"]);
                    break;
                case "line":
                    var n = e.split(","),
                        r = n[0];
                    s.integer(t, r), s.percent(t, r) && s.set("snapToLines", !1), s.alt(t, r, ["auto"]), 2 === n.length && s.alt("lineAlign", n[1], ["start", "middle", "end"]);
                    break;
                case "position":
                    n = e.split(","), s.percent(t, n[0]), 2 === n.length && s.alt("positionAlign", n[1], ["start", "middle", "end"]);
                    break;
                case "size":
                    s.percent(t, e);
                    break;
                case "align":
                    s.alt(t, e, ["start", "middle", "end", "left", "right"])
            }
        }, /:/, /\s/), n.region = s.get("region", null), n.vertical = s.get("vertical", ""), n.line = s.get("line", "auto"), n.lineAlign = s.get("lineAlign", "start"), n.snapToLines = s.get("snapToLines", !0), n.size = s.get("size", 100), n.align = s.get("align", "middle"), n.position = s.get("position", {
            start: 0,
            left: 0,
            middle: 50,
            end: 100,
            right: 100
        }, n.align), n.positionAlign = s.get("positionAlign", {
            start: "start",
            left: "start",
            middle: "middle",
            end: "end",
            right: "end"
        }, n.align)
    }((Vi.prototype = Fi(Error.prototype)).constructor = Vi).Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    }, zi.prototype = {
        set: function (t, e) {
            this.get(t) || "" === e || (this.values[t] = e)
        },
        get: function (t, e, i) {
            return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
        },
        has: function (t) {
            return t in this.values
        },
        alt: function (t, e, i) {
            for (var n = 0; n < i.length; ++n)
                if (e === i[n]) {
                    this.set(t, e);
                    break
                }
        },
        integer: function (t, e) {
            /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
        },
        percent: function (t, e) {
            return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (e = parseFloat(e)) && e <= 100) && (this.set(t, e), !0)
        }
    };
    var Gi = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&lrm;": "‎",
            "&rlm;": "‏",
            "&nbsp;": " "
        },
        Xi = {
            c: "span",
            i: "i",
            b: "b",
            u: "u",
            ruby: "ruby",
            rt: "rt",
            v: "span",
            lang: "span"
        },
        Yi = {
            v: "title",
            lang: "lang"
        },
        $i = {
            rt: "ruby"
        };

    function Ki(a, i) {
        function t() {
            if (!i) return null;
            var t, e = i.match(/^([^<]*)(<[^>]*>?)?/);
            return t = e[1] ? e[1] : e[2], i = i.substr(t.length), t
        }

        function e(t) {
            return Gi[t]
        }

        function n(t) {
            for (; f = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(f[0], e);
            return t
        }

        function r(t, e) {
            var i = Xi[t];
            if (!i) return null;
            var n = a.document.createElement(i);
            n.localName = i;
            var r = Yi[t];
            return r && e && (n[r] = e.trim()), n
        }
        for (var s, o, u, l = a.document.createElement("div"), c = l, d = []; null !== (s = t());)
            if ("<" !== s[0]) c.appendChild(a.document.createTextNode(n(s)));
            else {
                if ("/" === s[1]) {
                    d.length && d[d.length - 1] === s.substr(2).replace(">", "") && (d.pop(), c = c.parentNode);
                    continue
                }
                var h, p = Hi(s.substr(1, s.length - 2));
                if (p) {
                    h = a.document.createProcessingInstruction("timestamp", p), c.appendChild(h);
                    continue
                }
                var f = s.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!f) continue;
                if (!(h = r(f[1], f[3]))) continue;
                if (o = c, $i[(u = h).localName] && $i[u.localName] !== o.localName) continue;
                f[2] && (h.className = f[2].substr(1).replace(".", " ")), d.push(f[1]), c.appendChild(h), c = h
            } return l
    }
    var Ji = [
        [1470, 1470],
        [1472, 1472],
        [1475, 1475],
        [1478, 1478],
        [1488, 1514],
        [1520, 1524],
        [1544, 1544],
        [1547, 1547],
        [1549, 1549],
        [1563, 1563],
        [1566, 1610],
        [1645, 1647],
        [1649, 1749],
        [1765, 1766],
        [1774, 1775],
        [1786, 1805],
        [1807, 1808],
        [1810, 1839],
        [1869, 1957],
        [1969, 1969],
        [1984, 2026],
        [2036, 2037],
        [2042, 2042],
        [2048, 2069],
        [2074, 2074],
        [2084, 2084],
        [2088, 2088],
        [2096, 2110],
        [2112, 2136],
        [2142, 2142],
        [2208, 2208],
        [2210, 2220],
        [8207, 8207],
        [64285, 64285],
        [64287, 64296],
        [64298, 64310],
        [64312, 64316],
        [64318, 64318],
        [64320, 64321],
        [64323, 64324],
        [64326, 64449],
        [64467, 64829],
        [64848, 64911],
        [64914, 64967],
        [65008, 65020],
        [65136, 65140],
        [65142, 65276],
        [67584, 67589],
        [67592, 67592],
        [67594, 67637],
        [67639, 67640],
        [67644, 67644],
        [67647, 67669],
        [67671, 67679],
        [67840, 67867],
        [67872, 67897],
        [67903, 67903],
        [67968, 68023],
        [68030, 68031],
        [68096, 68096],
        [68112, 68115],
        [68117, 68119],
        [68121, 68147],
        [68160, 68167],
        [68176, 68184],
        [68192, 68223],
        [68352, 68405],
        [68416, 68437],
        [68440, 68466],
        [68472, 68479],
        [68608, 68680],
        [126464, 126467],
        [126469, 126495],
        [126497, 126498],
        [126500, 126500],
        [126503, 126503],
        [126505, 126514],
        [126516, 126519],
        [126521, 126521],
        [126523, 126523],
        [126530, 126530],
        [126535, 126535],
        [126537, 126537],
        [126539, 126539],
        [126541, 126543],
        [126545, 126546],
        [126548, 126548],
        [126551, 126551],
        [126553, 126553],
        [126555, 126555],
        [126557, 126557],
        [126559, 126559],
        [126561, 126562],
        [126564, 126564],
        [126567, 126570],
        [126572, 126578],
        [126580, 126583],
        [126585, 126588],
        [126590, 126590],
        [126592, 126601],
        [126603, 126619],
        [126625, 126627],
        [126629, 126633],
        [126635, 126651],
        [1114109, 1114109]
    ];

    function Qi(t) {
        for (var e = 0; e < Ji.length; e++) {
            var i = Ji[e];
            if (t >= i[0] && t <= i[1]) return !0
        }
        return !1
    }

    function Zi() {}

    function tn(t, e, i) {
        Zi.call(this), this.cue = e, this.cueDiv = Ki(t, e.text);
        var n = {
            color: "rgba(255, 255, 255, 1)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline",
            writingMode: "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
            unicodeBidi: "plaintext"
        };
        this.applyStyles(n, this.cueDiv), this.div = t.document.createElement("div"), n = {
            direction: function (t) {
                var e = [],
                    i = "";
                if (!t || !t.childNodes) return "ltr";

                function r(t, e) {
                    for (var i = e.childNodes.length - 1; 0 <= i; i--) t.push(e.childNodes[i])
                }

                function a(t) {
                    if (!t || !t.length) return null;
                    var e = t.pop(),
                        i = e.textContent || e.innerText;
                    if (i) {
                        var n = i.match(/^.*(\n|\r)/);
                        return n ? n[t.length = 0] : i
                    }
                    return "ruby" === e.tagName ? a(t) : e.childNodes ? (r(t, e), a(t)) : void 0
                }
                for (r(e, t); i = a(e);)
                    for (var n = 0; n < i.length; n++)
                        if (Qi(i.charCodeAt(n))) return "rtl";
                return "ltr"
            }(this.cueDiv),
            writingMode: "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
            unicodeBidi: "plaintext",
            textAlign: "middle" === e.align ? "center" : e.align,
            font: i.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, this.applyStyles(n), this.div.appendChild(this.cueDiv);
        var r = 0;
        switch (e.positionAlign) {
            case "start":
                r = e.position;
                break;
            case "middle":
                r = e.position - e.size / 2;
                break;
            case "end":
                r = e.position - e.size
        }
        "" === e.vertical ? this.applyStyles({
            left: this.formatStyle(r, "%"),
            width: this.formatStyle(e.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(r, "%"),
            height: this.formatStyle(e.size, "%")
        }), this.move = function (t) {
            this.applyStyles({
                top: this.formatStyle(t.top, "px"),
                bottom: this.formatStyle(t.bottom, "px"),
                left: this.formatStyle(t.left, "px"),
                right: this.formatStyle(t.right, "px"),
                height: this.formatStyle(t.height, "px"),
                width: this.formatStyle(t.width, "px")
            })
        }
    }

    function en(t) {
        var e, i, n, r;
        if (t.div) {
            i = t.div.offsetHeight, n = t.div.offsetWidth, r = t.div.offsetTop;
            var a = (a = t.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
            t = t.div.getBoundingClientRect(), e = a ? Math.max(a[0] && a[0].height || 0, t.height / a.length) : 0
        }
        this.left = t.left, this.right = t.right, this.top = t.top || r, this.height = t.height || i, this.bottom = t.bottom || r + (t.height || i), this.width = t.width || n, this.lineHeight = void 0 !== e ? e : t.lineHeight
    }

    function nn(t, e, o, u) {
        var i = new en(e),
            n = e.cue,
            r = function (t) {
                if ("number" == typeof t.line && (t.snapToLines || 0 <= t.line && t.line <= 100)) return t.line;
                if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
                for (var e = t.track, i = e.textTrackList, n = 0, r = 0; r < i.length && i[r] !== e; r++) "showing" === i[r].mode && n++;
                return -1 * ++n
            }(n),
            a = [];
        if (n.snapToLines) {
            var s;
            switch (n.vertical) {
                case "":
                    a = ["+y", "-y"], s = "height";
                    break;
                case "rl":
                    a = ["+x", "-x"], s = "width";
                    break;
                case "lr":
                    a = ["-x", "+x"], s = "width"
            }
            var l = i.lineHeight,
                c = l * Math.round(r),
                d = o[s] + l,
                h = a[0];
            Math.abs(c) > d && (c = c < 0 ? -1 : 1, c *= Math.ceil(d / l) * l), r < 0 && (c += "" === n.vertical ? o.height : o.width, a = a.reverse()), i.move(h, c)
        } else {
            var p = i.lineHeight / o.height * 100;
            switch (n.lineAlign) {
                case "middle":
                    r -= p / 2;
                    break;
                case "end":
                    r -= p
            }
            switch (n.vertical) {
                case "":
                    e.applyStyles({
                        top: e.formatStyle(r, "%")
                    });
                    break;
                case "rl":
                    e.applyStyles({
                        left: e.formatStyle(r, "%")
                    });
                    break;
                case "lr":
                    e.applyStyles({
                        right: e.formatStyle(r, "%")
                    })
            }
            a = ["+y", "-x", "+x", "-y"], i = new en(e)
        }
        var f = function (t, e) {
            for (var i, n = new en(t), r = 1, a = 0; a < e.length; a++) {
                for (; t.overlapsOppositeAxis(o, e[a]) || t.within(o) && t.overlapsAny(u);) t.move(e[a]);
                if (t.within(o)) return t;
                var s = t.intersectPercentage(o);
                s < r && (i = new en(t), r = s), t = new en(n)
            }
            return i || n
        }(i, a);
        e.move(f.toCSSCompatValues(o))
    }

    function rn() {}
    Zi.prototype.applyStyles = function (t, e) {
        for (var i in e = e || this.div, t) t.hasOwnProperty(i) && (e.style[i] = t[i])
    }, Zi.prototype.formatStyle = function (t, e) {
        return 0 === t ? 0 : t + e
    }, (tn.prototype = Fi(Zi.prototype)).constructor = tn, en.prototype.move = function (t, e) {
        switch (e = void 0 !== e ? e : this.lineHeight, t) {
            case "+x":
                this.left += e, this.right += e;
                break;
            case "-x":
                this.left -= e, this.right -= e;
                break;
            case "+y":
                this.top += e, this.bottom += e;
                break;
            case "-y":
                this.top -= e, this.bottom -= e
        }
    }, en.prototype.overlaps = function (t) {
        return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
    }, en.prototype.overlapsAny = function (t) {
        for (var e = 0; e < t.length; e++)
            if (this.overlaps(t[e])) return !0;
        return !1
    }, en.prototype.within = function (t) {
        return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
    }, en.prototype.overlapsOppositeAxis = function (t, e) {
        switch (e) {
            case "+x":
                return this.left < t.left;
            case "-x":
                return this.right > t.right;
            case "+y":
                return this.top < t.top;
            case "-y":
                return this.bottom > t.bottom
        }
    }, en.prototype.intersectPercentage = function (t) {
        return Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)) * Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)) / (this.height * this.width)
    }, en.prototype.toCSSCompatValues = function (t) {
        return {
            top: this.top - t.top,
            bottom: t.bottom - this.bottom,
            left: this.left - t.left,
            right: t.right - this.right,
            height: this.height,
            width: this.width
        }
    }, en.getSimpleBoxPosition = function (t) {
        var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
            i = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
            n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
        return {
            left: (t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t).left,
            right: t.right,
            top: t.top || n,
            height: t.height || e,
            bottom: t.bottom || n + (t.height || e),
            width: t.width || i
        }
    }, rn.StringDecoder = function () {
        return {
            decode: function (t) {
                if (!t) return "";
                if ("string" != typeof t) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(t))
            }
        }
    }, rn.convertCueToDOMTree = function (t, e) {
        return t && e ? Ki(t, e) : null
    };
    rn.processCues = function (n, r, t) {
        if (!n || !r || !t) return null;
        for (; t.firstChild;) t.removeChild(t.firstChild);
        var a = n.document.createElement("div");
        if (a.style.position = "absolute", a.style.left = "0", a.style.right = "0", a.style.top = "0", a.style.bottom = "0", a.style.margin = "1.5%", t.appendChild(a), function (t) {
                for (var e = 0; e < t.length; e++)
                    if (t[e].hasBeenReset || !t[e].displayState) return !0;
                return !1
            }(r)) {
            var s = [],
                o = en.getSimpleBoxPosition(a),
                u = {
                    font: Math.round(.05 * o.height * 100) / 100 + "px sans-serif"
                };
            ! function () {
                for (var t, e, i = 0; i < r.length; i++) e = r[i], t = new tn(n, e, u), a.appendChild(t.div), nn(0, t, o, s), e.displayState = t.div, s.push(en.getSimpleBoxPosition(t))
            }()
        } else
            for (var e = 0; e < r.length; e++) a.appendChild(r[e].displayState)
    }, (rn.Parser = function (t, e, i) {
        i || (i = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
    }).prototype = {
        reportOrThrowError: function (t) {
            if (!(t instanceof Vi)) throw t;
            this.onparsingerror && this.onparsingerror(t)
        },
        parse: function (t) {
            var a = this;

            function e() {
                for (var t = a.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
                var i = t.substr(0, e);
                return "\r" === t[e] && ++e, "\n" === t[e] && ++e, a.buffer = t.substr(e), i
            }

            function i(t) {
                t.match(/X-TIMESTAMP-MAP/) ? qi(t, function (t, e) {
                    switch (t) {
                        case "X-TIMESTAMP-MAP":
                            i = e, n = new zi, qi(i, function (t, e) {
                                switch (t) {
                                    case "MPEGT":
                                        n.integer(t + "S", e);
                                        break;
                                    case "LOCA":
                                        n.set(t + "L", Hi(e))
                                }
                            }, /[^\d]:/, /,/), a.ontimestampmap && a.ontimestampmap({
                                MPEGTS: n.get("MPEGTS"),
                                LOCAL: n.get("LOCAL")
                            })
                    }
                    var i, n
                }, /=/) : qi(t, function (t, e) {
                    switch (t) {
                        case "Region":
                            ! function (t) {
                                var r = new zi;
                                if (qi(t, function (t, e) {
                                        switch (t) {
                                            case "id":
                                                r.set(t, e);
                                                break;
                                            case "width":
                                                r.percent(t, e);
                                                break;
                                            case "lines":
                                                r.integer(t, e);
                                                break;
                                            case "regionanchor":
                                            case "viewportanchor":
                                                var i = e.split(",");
                                                if (2 !== i.length) break;
                                                var n = new zi;
                                                if (n.percent("x", i[0]), n.percent("y", i[1]), !n.has("x") || !n.has("y")) break;
                                                r.set(t + "X", n.get("x")), r.set(t + "Y", n.get("y"));
                                                break;
                                            case "scroll":
                                                r.alt(t, e, ["up"])
                                        }
                                    }, /=/, /\s/), r.has("id")) {
                                    var e = new(a.vttjs.VTTRegion || a.window.VTTRegion);
                                    e.width = r.get("width", 100), e.lines = r.get("lines", 3), e.regionAnchorX = r.get("regionanchorX", 0), e.regionAnchorY = r.get("regionanchorY", 100), e.viewportAnchorX = r.get("viewportanchorX", 0), e.viewportAnchorY = r.get("viewportanchorY", 100), e.scroll = r.get("scroll", ""), a.onregion && a.onregion(e), a.regionList.push({
                                        id: r.get("id"),
                                        region: e
                                    })
                                }
                            }(e)
                    }
                }, /:/)
            }
            t && (a.buffer += a.decoder.decode(t, {
                stream: !0
            }));
            try {
                var n;
                if ("INITIAL" === a.state) {
                    if (!/\r\n|\n/.test(a.buffer)) return this;
                    var r = (n = e()).match(/^WEBVTT([ \t].*)?$/);
                    if (!r || !r[0]) throw new Vi(Vi.Errors.BadSignature);
                    a.state = "HEADER"
                }
                for (var s = !1; a.buffer;) {
                    if (!/\r\n|\n/.test(a.buffer)) return this;
                    switch (s ? s = !1 : n = e(), a.state) {
                        case "HEADER":
                            /:/.test(n) ? i(n) : n || (a.state = "ID");
                            continue;
                        case "NOTE":
                            n || (a.state = "ID");
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(n)) {
                                a.state = "NOTE";
                                break
                            }
                            if (!n) continue;
                            if (a.cue = new(a.vttjs.VTTCue || a.window.VTTCue)(0, 0, ""), a.state = "CUE", -1 === n.indexOf("--\x3e")) {
                                a.cue.id = n;
                                continue
                            }
                            case "CUE":
                                try {
                                    Wi(n, a.cue, a.regionList)
                                } catch (t) {
                                    a.reportOrThrowError(t), a.cue = null, a.state = "BADCUE";
                                    continue
                                }
                                a.state = "CUETEXT";
                                continue;
                            case "CUETEXT":
                                var o = -1 !== n.indexOf("--\x3e");
                                if (!n || o && (s = !0)) {
                                    a.oncue && a.oncue(a.cue), a.cue = null, a.state = "ID";
                                    continue
                                }
                                a.cue.text && (a.cue.text += "\n"), a.cue.text += n;
                                continue;
                            case "BADCUE":
                                n || (a.state = "ID");
                                continue
                    }
                }
            } catch (t) {
                a.reportOrThrowError(t), "CUETEXT" === a.state && a.cue && a.oncue && a.oncue(a.cue), a.cue = null, a.state = "INITIAL" === a.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        },
        flush: function () {
            var e = this;
            try {
                if (e.buffer += e.decoder.decode(), (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", e.parse()), "INITIAL" === e.state) throw new Vi(Vi.Errors.BadSignature)
            } catch (t) {
                e.reportOrThrowError(t)
            }
            return e.onflush && e.onflush(), this
        }
    };
    var an = rn,
        sn = Object.freeze({
            default: an,
            __moduleExports: an
        }),
        on = "auto",
        un = {
            "": 1,
            lr: 1,
            rl: 1
        },
        ln = {
            start: 1,
            middle: 1,
            end: 1,
            left: 1,
            right: 1
        };

    function cn(t) {
        return "string" == typeof t && (!!ln[t.toLowerCase()] && t.toLowerCase())
    }

    function dn(t, e, i) {
        this.hasBeenReset = !1;
        var n = "",
            r = !1,
            a = t,
            s = e,
            o = i,
            u = null,
            l = "",
            c = !0,
            d = "auto",
            h = "start",
            p = 50,
            f = "middle",
            m = 50,
            g = "middle";
        Object.defineProperties(this, {
            id: {
                enumerable: !0,
                get: function () {
                    return n
                },
                set: function (t) {
                    n = "" + t
                }
            },
            pauseOnExit: {
                enumerable: !0,
                get: function () {
                    return r
                },
                set: function (t) {
                    r = !!t
                }
            },
            startTime: {
                enumerable: !0,
                get: function () {
                    return a
                },
                set: function (t) {
                    if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                    a = t, this.hasBeenReset = !0
                }
            },
            endTime: {
                enumerable: !0,
                get: function () {
                    return s
                },
                set: function (t) {
                    if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                    s = t, this.hasBeenReset = !0
                }
            },
            text: {
                enumerable: !0,
                get: function () {
                    return o
                },
                set: function (t) {
                    o = "" + t, this.hasBeenReset = !0
                }
            },
            region: {
                enumerable: !0,
                get: function () {
                    return u
                },
                set: function (t) {
                    u = t, this.hasBeenReset = !0
                }
            },
            vertical: {
                enumerable: !0,
                get: function () {
                    return l
                },
                set: function (t) {
                    var e, i = "string" == typeof (e = t) && !!un[e.toLowerCase()] && e.toLowerCase();
                    if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
                    l = i, this.hasBeenReset = !0
                }
            },
            snapToLines: {
                enumerable: !0,
                get: function () {
                    return c
                },
                set: function (t) {
                    c = !!t, this.hasBeenReset = !0
                }
            },
            line: {
                enumerable: !0,
                get: function () {
                    return d
                },
                set: function (t) {
                    if ("number" != typeof t && t !== on) throw new SyntaxError("An invalid number or illegal string was specified.");
                    d = t, this.hasBeenReset = !0
                }
            },
            lineAlign: {
                enumerable: !0,
                get: function () {
                    return h
                },
                set: function (t) {
                    var e = cn(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    h = e, this.hasBeenReset = !0
                }
            },
            position: {
                enumerable: !0,
                get: function () {
                    return p
                },
                set: function (t) {
                    if (t < 0 || 100 < t) throw new Error("Position must be between 0 and 100.");
                    p = t, this.hasBeenReset = !0
                }
            },
            positionAlign: {
                enumerable: !0,
                get: function () {
                    return f
                },
                set: function (t) {
                    var e = cn(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    f = e, this.hasBeenReset = !0
                }
            },
            size: {
                enumerable: !0,
                get: function () {
                    return m
                },
                set: function (t) {
                    if (t < 0 || 100 < t) throw new Error("Size must be between 0 and 100.");
                    m = t, this.hasBeenReset = !0
                }
            },
            align: {
                enumerable: !0,
                get: function () {
                    return g
                },
                set: function (t) {
                    var e = cn(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    g = e, this.hasBeenReset = !0
                }
            }
        }), this.displayState = void 0
    }
    dn.prototype.getCueAsHTML = function () {
        return WebVTT.convertCueToDOMTree(window, this.text)
    };
    var hn = dn,
        pn = Object.freeze({
            default: hn,
            __moduleExports: hn
        }),
        fn = {
            "": !0,
            up: !0
        };

    function mn(t) {
        return "number" == typeof t && 0 <= t && t <= 100
    }
    var gn = function () {
            var e = 100,
                i = 3,
                n = 0,
                r = 100,
                a = 0,
                s = 100,
                o = "";
            Object.defineProperties(this, {
                width: {
                    enumerable: !0,
                    get: function () {
                        return e
                    },
                    set: function (t) {
                        if (!mn(t)) throw new Error("Width must be between 0 and 100.");
                        e = t
                    }
                },
                lines: {
                    enumerable: !0,
                    get: function () {
                        return i
                    },
                    set: function (t) {
                        if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
                        i = t
                    }
                },
                regionAnchorY: {
                    enumerable: !0,
                    get: function () {
                        return r
                    },
                    set: function (t) {
                        if (!mn(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                        r = t
                    }
                },
                regionAnchorX: {
                    enumerable: !0,
                    get: function () {
                        return n
                    },
                    set: function (t) {
                        if (!mn(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                        n = t
                    }
                },
                viewportAnchorY: {
                    enumerable: !0,
                    get: function () {
                        return s
                    },
                    set: function (t) {
                        if (!mn(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                        s = t
                    }
                },
                viewportAnchorX: {
                    enumerable: !0,
                    get: function () {
                        return a
                    },
                    set: function (t) {
                        if (!mn(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                        a = t
                    }
                },
                scroll: {
                    enumerable: !0,
                    get: function () {
                        return o
                    },
                    set: function (t) {
                        var e, i = "string" == typeof (e = t) && !!fn[e.toLowerCase()] && e.toLowerCase();
                        if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
                        o = i
                    }
                }
            })
        },
        yn = Object.freeze({
            default: gn,
            __moduleExports: gn
        }),
        vn = sn && an || sn,
        _n = pn && hn || pn,
        bn = yn && gn || yn,
        Tn = e(function (t) {
            var e = t.exports = {
                WebVTT: vn,
                VTTCue: _n,
                VTTRegion: bn
            };
            g.vttjs = e, g.WebVTT = e.WebVTT;
            var i = e.VTTCue,
                n = e.VTTRegion,
                r = g.VTTCue,
                a = g.VTTRegion;
            e.shim = function () {
                g.VTTCue = i, g.VTTRegion = n
            }, e.restore = function () {
                g.VTTCue = r, g.VTTRegion = a
            }, g.VTTCue || e.shim()
        });
    Tn.WebVTT, Tn.VTTCue, Tn.VTTRegion;
    var Sn = function (e) {
        function r() {
            var i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function () {};
            y(this, r), i.reportTouchActivity = !1;
            var n = _(this, e.call(this, null, i, t));
            return n.hasStarted_ = !1, n.on("playing", function () {
                this.hasStarted_ = !0
            }), n.on("loadstart", function () {
                this.hasStarted_ = !1
            }), ji.names.forEach(function (t) {
                var e = ji[t];
                i && i[e.getterName] && (n[e.privateName] = i[e.getterName])
            }), n.featuresProgressEvents || n.manualProgressOn(), n.featuresTimeupdateEvents || n.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function (t) {
                !1 === i["native" + t + "Tracks"] && (n["featuresNative" + t + "Tracks"] = !1)
            }), !1 === i.nativeCaptions || !1 === i.nativeTextTracks ? n.featuresNativeTextTracks = !1 : !0 !== i.nativeCaptions && !0 !== i.nativeTextTracks || (n.featuresNativeTextTracks = !0), n.featuresNativeTextTracks || n.emulateTextTracks(), n.autoRemoteTextTracks_ = new ji.text.ListClass, n.initTrackListeners(), i.nativeControlsForTouch || n.emitTapEvents(), n.constructor && (n.name_ = n.constructor.name || "Unknown Tech"), n
        }
        return v(r, e), r.prototype.triggerSourceset = function (t) {
            var e = this;
            this.isReady_ || this.one("ready", function () {
                return e.setTimeout(function () {
                    return e.triggerSourceset(t)
                }, 1)
            }), this.trigger({
                src: t,
                type: "sourceset"
            })
        }, r.prototype.manualProgressOn = function () {
            this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
        }, r.prototype.manualProgressOff = function () {
            this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
        }, r.prototype.trackProgress = function (t) {
            this.stopTrackingProgress(), this.progressInterval = this.setInterval(Ot(this, function () {
                var t = this.bufferedPercent();
                this.bufferedPercent_ !== t && this.trigger("progress"), 1 === (this.bufferedPercent_ = t) && this.stopTrackingProgress()
            }), 500)
        }, r.prototype.onDurationChange = function (t) {
            this.duration_ = this.duration()
        }, r.prototype.buffered = function () {
            return be(0, 0)
        }, r.prototype.bufferedPercent = function () {
            return Te(this.buffered(), this.duration_)
        }, r.prototype.stopTrackingProgress = function () {
            this.clearInterval(this.progressInterval)
        }, r.prototype.manualTimeUpdatesOn = function () {
            this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
        }, r.prototype.manualTimeUpdatesOff = function () {
            this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
        }, r.prototype.trackCurrentTime = function () {
            this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () {
                this.trigger({
                    type: "timeupdate",
                    target: this,
                    manuallyTriggered: !0
                })
            }, 250)
        }, r.prototype.stopTrackingCurrentTime = function () {
            this.clearInterval(this.currentTimeInterval), this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }, r.prototype.dispose = function () {
            this.clearTracks(Bi.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), e.prototype.dispose.call(this)
        }, r.prototype.clearTracks = function (t) {
            var r = this;
            (t = [].concat(t)).forEach(function (t) {
                for (var e = r[t + "Tracks"]() || [], i = e.length; i--;) {
                    var n = e[i];
                    "text" === t && r.removeRemoteTextTrack(n), e.removeTrack(n)
                }
            })
        }, r.prototype.cleanupAutoTextTracks = function () {
            for (var t = this.autoRemoteTextTracks_ || [], e = t.length; e--;) {
                var i = t[e];
                this.removeRemoteTextTrack(i)
            }
        }, r.prototype.reset = function () {}, r.prototype.error = function (t) {
            return void 0 !== t && (this.error_ = new Oe(t), this.trigger("error")), this.error_
        }, r.prototype.played = function () {
            return this.hasStarted_ ? be(0, 0) : be()
        }, r.prototype.setCurrentTime = function () {
            this.manualTimeUpdates && this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }, r.prototype.initTrackListeners = function () {
            var r = this;
            Bi.names.forEach(function (t) {
                var e = Bi[t],
                    i = function () {
                        r.trigger(t + "trackchange")
                    },
                    n = r[e.getterName]();
                n.addEventListener("removetrack", i), n.addEventListener("addtrack", i), r.on("dispose", function () {
                    n.removeEventListener("removetrack", i), n.removeEventListener("addtrack", i)
                })
            })
        }, r.prototype.addWebVttScript_ = function () {
            var t = this;
            if (!g.WebVTT)
                if (p.body.contains(this.el())) {
                    if (!this.options_["vtt.js"] && w(Tn) && 0 < Object.keys(Tn).length) return void this.trigger("vttjsloaded");
                    var e = p.createElement("script");
                    e.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", e.onload = function () {
                        t.trigger("vttjsloaded")
                    }, e.onerror = function () {
                        t.trigger("vttjserror")
                    }, this.on("dispose", function () {
                        e.onload = null, e.onerror = null
                    }), g.WebVTT = !0, this.el().parentNode.appendChild(e)
                } else this.ready(this.addWebVttScript_)
        }, r.prototype.emulateTextTracks = function () {
            var t = this,
                i = this.textTracks(),
                e = this.remoteTextTracks(),
                n = function (t) {
                    return i.addTrack(t.track)
                },
                r = function (t) {
                    return i.removeTrack(t.track)
                };
            e.on("addtrack", n), e.on("removetrack", r), this.addWebVttScript_();
            var a = function () {
                    return t.trigger("texttrackchange")
                },
                s = function () {
                    a();
                    for (var t = 0; t < i.length; t++) {
                        var e = i[t];
                        e.removeEventListener("cuechange", a), "showing" === e.mode && e.addEventListener("cuechange", a)
                    }
                };
            s(), i.addEventListener("change", s), i.addEventListener("addtrack", s), i.addEventListener("removetrack", s), this.on("dispose", function () {
                e.off("addtrack", n), e.off("removetrack", r), i.removeEventListener("change", s), i.removeEventListener("addtrack", s), i.removeEventListener("removetrack", s);
                for (var t = 0; t < i.length; t++) {
                    i[t].removeEventListener("cuechange", a)
                }
            })
        }, r.prototype.addTextTrack = function (t, e, i) {
            if (!t) throw new Error("TextTrack kind is required but was not provided");
            return function (t, e, i, n) {
                var r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},
                    a = t.textTracks();
                r.kind = e, i && (r.label = i), n && (r.language = n), r.tech = t;
                var s = new ji.text.TrackClass(r);
                return a.addTrack(s), s
            }(this, t, e, i)
        }, r.prototype.createRemoteTextTrack = function (t) {
            var e = Gt(t, {
                tech: this
            });
            return new Ni.remoteTextEl.TrackClass(e)
        }, r.prototype.addRemoteTextTrack = function () {
            var t = this,
                e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                i = arguments[1],
                n = this.createRemoteTextTrack(e);
            return !0 !== i && !1 !== i && (f.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), i = !0), this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack(n.track), !0 !== i && this.ready(function () {
                return t.autoRemoteTextTracks_.addTrack(n.track)
            }), n
        }, r.prototype.removeRemoteTextTrack = function (t) {
            var e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
            this.remoteTextTrackEls().removeTrackElement_(e), this.remoteTextTracks().removeTrack(t), this.autoRemoteTextTracks_.removeTrack(t)
        }, r.prototype.getVideoPlaybackQuality = function () {
            return {}
        }, r.prototype.setPoster = function () {}, r.prototype.playsinline = function () {}, r.prototype.setPlaysinline = function () {}, r.prototype.overrideNativeAudioTracks = function () {}, r.prototype.overrideNativeVideoTracks = function () {}, r.prototype.canPlayType = function () {
            return ""
        }, r.canPlayType = function () {
            return ""
        }, r.canPlaySource = function (t, e) {
            return r.canPlayType(t.type)
        }, r.isTech = function (t) {
            return t.prototype instanceof r || t instanceof r || t === r
        }, r.registerTech = function (t, e) {
            if (r.techs_ || (r.techs_ = {}), !r.isTech(e)) throw new Error("Tech " + t + " must be a Tech");
            if (!r.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
            if (!r.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
            return t = Wt(t), r.techs_[t] = e, "Tech" !== t && r.defaultTechOrder_.push(t), e
        }, r.getTech = function (t) {
            if (t) return t = Wt(t), r.techs_ && r.techs_[t] ? r.techs_[t] : g && g.videojs && g.videojs[t] ? (f.warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), g.videojs[t]) : void 0
        }, r
    }(Xt);
    ji.names.forEach(function (t) {
        var e = ji[t];
        Sn.prototype[e.getterName] = function () {
            return this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName]
        }
    }), Sn.prototype.featuresVolumeControl = !0, Sn.prototype.featuresMuteControl = !0, Sn.prototype.featuresFullscreenResize = !1, Sn.prototype.featuresPlaybackRate = !1, Sn.prototype.featuresProgressEvents = !1, Sn.prototype.featuresSourceset = !1, Sn.prototype.featuresTimeupdateEvents = !1, Sn.prototype.featuresNativeTextTracks = !1, Sn.withSourceHandlers = function (r) {
        r.registerSourceHandler = function (t, e) {
            var i = r.sourceHandlers;
            i || (i = r.sourceHandlers = []), void 0 === e && (e = i.length), i.splice(e, 0, t)
        }, r.canPlayType = function (t) {
            for (var e = r.sourceHandlers || [], i = void 0, n = 0; n < e.length; n++)
                if (i = e[n].canPlayType(t)) return i;
            return ""
        }, r.selectSourceHandler = function (t, e) {
            for (var i = r.sourceHandlers || [], n = 0; n < i.length; n++)
                if (i[n].canHandleSource(t, e)) return i[n];
            return null
        }, r.canPlaySource = function (t, e) {
            var i = r.selectSourceHandler(t, e);
            return i ? i.canHandleSource(t, e) : ""
        };
        ["seekable", "seeking", "duration"].forEach(function (t) {
            var e = this[t];
            "function" == typeof e && (this[t] = function () {
                return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments)
            })
        }, r.prototype), r.prototype.setSource = function (t) {
            var e = r.selectSourceHandler(t, this.options_);
            e || (r.nativeSourceHandler ? e = r.nativeSourceHandler : f.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), e !== r.nativeSourceHandler && (this.currentSource_ = t), this.sourceHandler_ = e.handleSource(t, this, this.options_), this.on("dispose", this.disposeSourceHandler)
        }, r.prototype.disposeSourceHandler = function () {
            this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
        }
    }, Xt.registerComponent("Tech", Sn), Sn.registerTech("Tech", Sn), Sn.defaultTechOrder_ = [];
    var kn = {},
        Cn = {},
        wn = {};

    function En(t, e, i) {
        t.setTimeout(function () {
            return function i() {
                var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                var r = arguments[2];
                var a = arguments[3];
                var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [];
                var o = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                var e = t[0],
                    u = t.slice(1);
                if ("string" == typeof e) i(n, kn[e], r, a, s, o);
                else if (e) {
                    var l = function (t, e) {
                        var i = Cn[t.id()],
                            n = null;
                        if (null == i) return n = e(t), Cn[t.id()] = [
                            [e, n]
                        ], n;
                        for (var r = 0; r < i.length; r++) {
                            var a = i[r],
                                s = a[0],
                                o = a[1];
                            s === e && (n = o)
                        }
                        null === n && (n = e(t), i.push([e, n]));
                        return n
                    }(a, e);
                    if (!l.setSource) return s.push(l), i(n, u, r, a, s, o);
                    l.setSource(k({}, n), function (t, e) {
                        if (t) return i(n, u, r, a, s, o);
                        s.push(l), i(e, n.type === e.type ? u : kn[e.type], r, a, s, o)
                    })
                } else u.length ? i(n, u, r, a, s, o) : o ? r(n, s) : i(n, kn["*"], r, a, s, !0)
            }(e, kn[e.type], i, t)
        }, 1)
    }

    function An(t, e, i) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            r = "call" + Wt(i),
            a = t.reduce(Un(r), n),
            s = a === wn,
            o = s ? null : e[i](a);
        return function (t, e, i, n) {
            for (var r = t.length - 1; 0 <= r; r--) {
                var a = t[r];
                a[e] && a[e](n, i)
            }
        }(t, i, o, s), o
    }
    var Ln = {
            buffered: 1,
            currentTime: 1,
            duration: 1,
            seekable: 1,
            played: 1,
            paused: 1
        },
        On = {
            setCurrentTime: 1
        },
        Pn = {
            play: 1,
            pause: 1
        };

    function Un(i) {
        return function (t, e) {
            return t === wn ? wn : e[i] ? e[i](t) : t
        }
    }
    var xn = {
            opus: "video/ogg",
            ogv: "video/ogg",
            mp4: "video/mp4",
            mov: "video/mp4",
            m4v: "video/mp4",
            mkv: "video/x-matroska",
            mp3: "audio/mpeg",
            aac: "audio/aac",
            oga: "audio/ogg",
            m3u8: "application/x-mpegURL"
        },
        In = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                e = ei(t);
            return xn[e.toLowerCase()] || ""
        };

    function Dn(t) {
        var e = In(t.src);
        return !t.type && e && (t.type = e), t
    }
    var Rn = function (l) {
        function c(t, e, i) {
            y(this, c);
            var n = Gt({
                    createEl: !1
                }, e),
                r = _(this, l.call(this, t, n, i));
            if (e.playerOptions.sources && 0 !== e.playerOptions.sources.length) t.src(e.playerOptions.sources);
            else
                for (var a = 0, s = e.playerOptions.techOrder; a < s.length; a++) {
                    var o = Wt(s[a]),
                        u = Sn.getTech(o);
                    if (o || (u = Xt.getComponent(o)), u && u.isSupported()) {
                        t.loadTech_(o);
                        break
                    }
                }
            return r
        }
        return v(c, l), c
    }(Xt);
    Xt.registerComponent("MediaLoader", Rn);
    var Mn = function (r) {
        function n(t, e) {
            y(this, n);
            var i = _(this, r.call(this, t, e));
            return i.emitTapEvents(), i.enable(), i
        }
        return v(n, r), n.prototype.createEl = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "div",
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            e = k({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass(),
                tabIndex: 0
            }, e), "button" === t && f.error("Creating a ClickableComponent with an HTML element of " + t + " is not supported; use a Button instead."), i = k({
                role: "button"
            }, i), this.tabIndex_ = e.tabIndex;
            var n = r.prototype.createEl.call(this, t, e, i);
            return this.createControlTextEl(n), n
        }, n.prototype.dispose = function () {
            this.controlTextEl_ = null, r.prototype.dispose.call(this)
        }, n.prototype.createControlTextEl = function (t) {
            return this.controlTextEl_ = D("span", {
                className: "vjs-control-text"
            }, {
                "aria-live": "polite"
            }), t && t.appendChild(this.controlTextEl_), this.controlText(this.controlText_, t), this.controlTextEl_
        }, n.prototype.controlText = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.el();
            if (void 0 === t) return this.controlText_ || "Need Text";
            var i = this.localize(t);
            this.controlText_ = t, R(this.controlTextEl_, i), this.nonIconControl || e.setAttribute("title", i)
        }, n.prototype.buildCSSClass = function () {
            return "vjs-control vjs-button " + r.prototype.buildCSSClass.call(this)
        }, n.prototype.enable = function () {
            this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), "undefined" != typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur))
        }, n.prototype.disable = function () {
            this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), "undefined" != typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur)
        }, n.prototype.handleClick = function (t) {}, n.prototype.handleFocus = function (t) {
            vt(p, "keydown", Ot(this, this.handleKeyPress))
        }, n.prototype.handleKeyPress = function (t) {
            32 === t.which || 13 === t.which ? (t.preventDefault(), this.trigger("click")) : r.prototype.handleKeyPress && r.prototype.handleKeyPress.call(this, t)
        }, n.prototype.handleBlur = function (t) {
            _t(p, "keydown", Ot(this, this.handleKeyPress))
        }, n
    }(Xt);
    Xt.registerComponent("ClickableComponent", Mn);
    var Bn = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.update(), t.on("posterchange", Ot(i, i.update)), i
        }
        return v(r, n), r.prototype.dispose = function () {
            this.player().off("posterchange", this.update), n.prototype.dispose.call(this)
        }, r.prototype.createEl = function () {
            return D("div", {
                className: "vjs-poster",
                tabIndex: -1
            })
        }, r.prototype.update = function (t) {
            var e = this.player().poster();
            this.setSrc(e), e ? this.show() : this.hide()
        }, r.prototype.setSrc = function (t) {
            var e = "";
            t && (e = 'url("' + t + '")'), this.el_.style.backgroundImage = e
        }, r.prototype.handleClick = function (t) {
            this.player_.controls() && (this.player_.paused() ? Ie(this.player_.play()) : this.player_.pause())
        }, r
    }(Mn);
    Xt.registerComponent("PosterImage", Bn);
    var Nn = "#222",
        jn = {
            monospace: "monospace",
            sansSerif: "sans-serif",
            serif: "serif",
            monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
            monospaceSerif: '"Courier New", monospace',
            proportionalSansSerif: "sans-serif",
            proportionalSerif: "serif",
            casual: '"Comic Sans MS", Impact, fantasy',
            script: '"Monotype Corsiva", cursive',
            smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
        };

    function Fn(t, e) {
        var i = void 0;
        if (4 === t.length) i = t[1] + t[1] + t[2] + t[2] + t[3] + t[3];
        else {
            if (7 !== t.length) throw new Error("Invalid color code provided, " + t + "; must be formatted as e.g. #f0e or #f604e2.");
            i = t.slice(1)
        }
        return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + e + ")"
    }

    function Vn(t, e, i) {
        try {
            t.style[e] = i
        } catch (t) {
            return
        }
    }
    var Hn = function (r) {
        function a(i, t, e) {
            y(this, a);
            var n = _(this, r.call(this, i, t, e));
            return i.on("loadstart", Ot(n, n.toggleDisplay)), i.on("texttrackchange", Ot(n, n.updateDisplay)), i.on("loadstart", Ot(n, n.preselectTrack)), i.ready(Ot(n, function () {
                if (i.tech_ && i.tech_.featuresNativeTextTracks) this.hide();
                else {
                    i.on("fullscreenchange", Ot(this, this.updateDisplay));
                    for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++) this.player_.addRemoteTextTrack(t[e], !0);
                    this.preselectTrack()
                }
            })), n
        }
        return v(a, r), a.prototype.preselectTrack = function () {
            for (var t = {
                    captions: 1,
                    subtitles: 1
                }, e = this.player_.textTracks(), i = this.player_.cache_.selectedLanguage, n = void 0, r = void 0, a = void 0, s = 0; s < e.length; s++) {
                var o = e[s];
                i && i.enabled && i.language === o.language ? o.kind === i.kind ? a = o : a || (a = o) : i && !i.enabled ? r = n = a = null : o.default && ("descriptions" !== o.kind || n ? o.kind in t && !r && (r = o) : n = o)
            }
            a ? a.mode = "showing" : r ? r.mode = "showing" : n && (n.mode = "showing")
        }, a.prototype.toggleDisplay = function () {
            this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
        }, a.prototype.createEl = function () {
            return r.prototype.createEl.call(this, "div", {
                className: "vjs-text-track-display"
            }, {
                "aria-live": "off",
                "aria-atomic": "true"
            })
        }, a.prototype.clearDisplay = function () {
            "function" == typeof g.WebVTT && g.WebVTT.processCues(g, [], this.el_)
        }, a.prototype.updateDisplay = function () {
            var t = this.player_.textTracks();
            this.clearDisplay();
            for (var e = null, i = null, n = t.length; n--;) {
                var r = t[n];
                "showing" === r.mode && ("descriptions" === r.kind ? e = r : i = r)
            }
            i ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(i)) : e && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(e))
        }, a.prototype.updateForTrack = function (t) {
            if ("function" == typeof g.WebVTT && t.activeCues) {
                for (var e = [], i = 0; i < t.activeCues.length; i++) e.push(t.activeCues[i]);
                if (g.WebVTT.processCues(g, e, this.el_), this.player_.textTrackSettings)
                    for (var n = this.player_.textTrackSettings.getValues(), r = e.length; r--;) {
                        var a = e[r];
                        if (a) {
                            var s = a.displayState;
                            if (n.color && (s.firstChild.style.color = n.color), n.textOpacity && Vn(s.firstChild, "color", Fn(n.color || "#fff", n.textOpacity)), n.backgroundColor && (s.firstChild.style.backgroundColor = n.backgroundColor), n.backgroundOpacity && Vn(s.firstChild, "backgroundColor", Fn(n.backgroundColor || "#000", n.backgroundOpacity)), n.windowColor && (n.windowOpacity ? Vn(s, "backgroundColor", Fn(n.windowColor, n.windowOpacity)) : s.style.backgroundColor = n.windowColor), n.edgeStyle && ("dropshadow" === n.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px " + Nn : "raised" === n.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px " + Nn : "depressed" === n.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px " + Nn : "uniform" === n.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px " + Nn)), n.fontPercent && 1 !== n.fontPercent) {
                                var o = g.parseFloat(s.style.fontSize);
                                s.style.fontSize = o * n.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px"
                            }
                            n.fontFamily && "default" !== n.fontFamily && ("small-caps" === n.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = jn[n.fontFamily])
                        }
                    }
            }
        }, a
    }(Xt);
    Xt.registerComponent("TextTrackDisplay", Hn);
    var zn = function (r) {
        function t() {
            return y(this, t), _(this, r.apply(this, arguments))
        }
        return v(t, r), t.prototype.createEl = function () {
            var t = this.player_.isAudio(),
                e = this.localize(t ? "Audio Player" : "Video Player"),
                i = D("span", {
                    className: "vjs-control-text",
                    innerHTML: this.localize("{1} is loading.", [e])
                }),
                n = r.prototype.createEl.call(this, "div", {
                    className: "vjs-loading-spinner",
                    dir: "ltr"
                });
            return n.appendChild(i), n
        }, t
    }(Xt);
    Xt.registerComponent("LoadingSpinner", zn);
    var qn = function (e) {
        function t() {
            return y(this, t), _(this, e.apply(this, arguments))
        }
        return v(t, e), t.prototype.createEl = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            e = k({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass()
            }, e), i = k({
                type: "button"
            }, i);
            var n = Xt.prototype.createEl.call(this, "button", e, i);
            return this.createControlTextEl(n), n
        }, t.prototype.addChild = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                i = this.constructor.name;
            return f.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), Xt.prototype.addChild.call(this, t, e)
        }, t.prototype.enable = function () {
            e.prototype.enable.call(this), this.el_.removeAttribute("disabled")
        }, t.prototype.disable = function () {
            e.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
        }, t.prototype.handleKeyPress = function (t) {
            32 !== t.which && 13 !== t.which && e.prototype.handleKeyPress.call(this, t)
        }, t
    }(Mn);
    Xt.registerComponent("Button", qn);
    var Wn = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.mouseused_ = !1, i.on("mousedown", i.handleMouseDown), i
        }
        return v(r, n), r.prototype.buildCSSClass = function () {
            return "vjs-big-play-button"
        }, r.prototype.handleClick = function (t) {
            var e = this.player_.play();
            if (this.mouseused_ && t.clientX && t.clientY) Ie(e);
            else {
                var i = this.player_.getChild("controlBar"),
                    n = i && i.getChild("playToggle");
                if (n) {
                    var r = function () {
                        return n.focus()
                    };
                    xe(e) ? e.then(r, function () {}) : this.setTimeout(r, 1)
                } else this.player_.focus()
            }
        }, r.prototype.handleKeyPress = function (t) {
            this.mouseused_ = !1, n.prototype.handleKeyPress.call(this, t)
        }, r.prototype.handleMouseDown = function (t) {
            this.mouseused_ = !0
        }, r
    }(qn);
    Wn.prototype.controlText_ = "Play Video", Xt.registerComponent("BigPlayButton", Wn);
    var Gn = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.controlText(e && e.controlText || i.localize("Close")), i
        }
        return v(r, n), r.prototype.buildCSSClass = function () {
            return "vjs-close-button " + n.prototype.buildCSSClass.call(this)
        }, r.prototype.handleClick = function (t) {
            this.trigger({
                type: "close",
                bubbles: !1
            })
        }, r
    }(qn);
    Xt.registerComponent("CloseButton", Gn);
    var Xn = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.on(t, "play", i.handlePlay), i.on(t, "pause", i.handlePause), i.on(t, "ended", i.handleEnded), i
        }
        return v(r, n), r.prototype.buildCSSClass = function () {
            return "vjs-play-control " + n.prototype.buildCSSClass.call(this)
        }, r.prototype.handleClick = function (t) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }, r.prototype.handleSeeked = function (t) {
            this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(t) : this.handlePlay(t)
        }, r.prototype.handlePlay = function (t) {
            this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
        }, r.prototype.handlePause = function (t) {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
        }, r.prototype.handleEnded = function (t) {
            this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
        }, r
    }(qn);
    Xn.prototype.controlText_ = "Play", Xt.registerComponent("PlayToggle", Xn);
    var Yn = function (t, e) {
            t = t < 0 ? 0 : t;
            var i = Math.floor(t % 60),
                n = Math.floor(t / 60 % 60),
                r = Math.floor(t / 3600),
                a = Math.floor(e / 60 % 60),
                s = Math.floor(e / 3600);
            return (isNaN(t) || t === 1 / 0) && (r = n = i = "-"), (r = 0 < r || 0 < s ? r + ":" : "") + (n = ((r || 10 <= a) && n < 10 ? "0" + n : n) + ":") + (i = i < 10 ? "0" + i : i)
        },
        $n = Yn;

    function Kn(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t;
        return $n(t, e)
    }
    var Jn = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.throttledUpdateContent = Pt(Ot(i, i.updateContent), 25), i.on(t, "timeupdate", i.throttledUpdateContent), i
        }
        return v(r, n), r.prototype.createEl = function (t) {
            var e = this.buildCSSClass(),
                i = n.prototype.createEl.call(this, "div", {
                    className: e + " vjs-time-control vjs-control",
                    innerHTML: '<span class="vjs-control-text">' + this.localize(this.labelText_) + " </span>"
                });
            return this.contentEl_ = D("span", {
                className: e + "-display"
            }, {
                "aria-live": "off"
            }), this.updateTextNode_(), i.appendChild(this.contentEl_), i
        }, r.prototype.dispose = function () {
            this.contentEl_ = null, this.textNode_ = null, n.prototype.dispose.call(this)
        }, r.prototype.updateTextNode_ = function () {
            if (this.contentEl_) {
                for (; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
                this.textNode_ = p.createTextNode(this.formattedTime_ || this.formatTime_(0)), this.contentEl_.appendChild(this.textNode_)
            }
        }, r.prototype.formatTime_ = function (t) {
            return Kn(t)
        }, r.prototype.updateFormattedTime_ = function (t) {
            var e = this.formatTime_(t);
            e !== this.formattedTime_ && (this.formattedTime_ = e, this.requestAnimationFrame(this.updateTextNode_))
        }, r.prototype.updateContent = function (t) {}, r
    }(Xt);
    Jn.prototype.labelText_ = "Time", Jn.prototype.controlText_ = "Time", Xt.registerComponent("TimeDisplay", Jn);
    var Qn = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.on(t, "ended", i.handleEnded), i
        }
        return v(r, n), r.prototype.buildCSSClass = function () {
            return "vjs-current-time"
        }, r.prototype.updateContent = function (t) {
            var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.updateFormattedTime_(e)
        }, r.prototype.handleEnded = function (t) {
            this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
        }, r
    }(Jn);
    Qn.prototype.labelText_ = "Current Time", Qn.prototype.controlText_ = "Current Time", Xt.registerComponent("CurrentTimeDisplay", Qn);
    var Zn = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.on(t, "durationchange", i.updateContent), i.on(t, "loadedmetadata", i.throttledUpdateContent), i
        }
        return v(r, n), r.prototype.buildCSSClass = function () {
            return "vjs-duration"
        }, r.prototype.updateContent = function (t) {
            var e = this.player_.duration();
            e && this.duration_ !== e && (this.duration_ = e, this.updateFormattedTime_(e))
        }, r
    }(Jn);
    Zn.prototype.labelText_ = "Duration", Zn.prototype.controlText_ = "Duration", Xt.registerComponent("DurationDisplay", Zn);
    var tr = function (t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-time-control vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            })
        }, e
    }(Xt);
    Xt.registerComponent("TimeDivider", tr);
    var er = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.on(t, "durationchange", i.throttledUpdateContent), i.on(t, "ended", i.handleEnded), i
        }
        return v(r, n), r.prototype.buildCSSClass = function () {
            return "vjs-remaining-time"
        }, r.prototype.formatTime_ = function (t) {
            return "-" + n.prototype.formatTime_.call(this, t)
        }, r.prototype.updateContent = function (t) {
            this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
        }, r.prototype.handleEnded = function (t) {
            this.player_.duration() && this.updateFormattedTime_(0)
        }, r
    }(Jn);
    er.prototype.labelText_ = "Remaining Time", er.prototype.controlText_ = "Remaining Time", Xt.registerComponent("RemainingTimeDisplay", er);
    var ir = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.updateShowing(), i.on(i.player(), "durationchange", i.updateShowing), i
        }
        return v(r, n), r.prototype.createEl = function () {
            var t = n.prototype.createEl.call(this, "div", {
                className: "vjs-live-control vjs-control"
            });
            return this.contentEl_ = D("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE")
            }, {
                "aria-live": "off"
            }), t.appendChild(this.contentEl_), t
        }, r.prototype.dispose = function () {
            this.contentEl_ = null, n.prototype.dispose.call(this)
        }, r.prototype.updateShowing = function (t) {
            this.player().duration() === 1 / 0 ? this.show() : this.hide()
        }, r
    }(Xt);
    Xt.registerComponent("LiveDisplay", ir);
    var nr = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.bar = i.getChild(i.options_.barName), i.vertical(!!i.options_.vertical), i.enable(), i
        }
        return v(r, n), r.prototype.enabled = function () {
            return this.enabled_
        }, r.prototype.enable = function () {
            this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
        }, r.prototype.disable = function () {
            if (this.enabled()) {
                var t = this.bar.el_.ownerDocument;
                this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
            }
        }, r.prototype.createEl = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            return e.className = e.className + " vjs-slider", e = k({
                tabIndex: 0
            }, e), i = k({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, i), n.prototype.createEl.call(this, t, e, i)
        }, r.prototype.handleMouseDown = function (t) {
            var e = this.bar.el_.ownerDocument;
            "mousedown" === t.type && t.preventDefault(), "touchstart" !== t.type || de || t.preventDefault(), G(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(e, "mousemove", this.handleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchmove", this.handleMouseMove), this.on(e, "touchend", this.handleMouseUp), this.handleMouseMove(t)
        }, r.prototype.handleMouseMove = function (t) {}, r.prototype.handleMouseUp = function () {
            var t = this.bar.el_.ownerDocument;
            X(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.update()
        }, r.prototype.update = function () {
            if (this.el_) {
                var t = this.getPercent(),
                    e = this.bar;
                if (e) {
                    ("number" != typeof t || t != t || t < 0 || t === 1 / 0) && (t = 0);
                    var i = (100 * t).toFixed(2) + "%",
                        n = e.el().style;
                    return this.vertical() ? n.height = i : n.width = i, t
                }
            }
        }, r.prototype.calculateDistance = function (t) {
            var e = K(this.el_, t);
            return this.vertical() ? e.y : e.x
        }, r.prototype.handleFocus = function () {
            this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
        }, r.prototype.handleKeyPress = function (t) {
            37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepBack()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepForward())
        }, r.prototype.handleBlur = function () {
            this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
        }, r.prototype.handleClick = function (t) {
            t.stopImmediatePropagation(), t.preventDefault()
        }, r.prototype.vertical = function (t) {
            if (void 0 === t) return this.vertical_ || !1;
            this.vertical_ = !!t, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
        }, r
    }(Xt);
    Xt.registerComponent("Slider", nr);
    var rr = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.partEls_ = [], i.on(t, "progress", i.update), i
        }
        return v(r, n), r.prototype.createEl = function () {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
            })
        }, r.prototype.dispose = function () {
            this.partEls_ = null, n.prototype.dispose.call(this)
        }, r.prototype.update = function (t) {
            var e = this.player_.buffered(),
                i = this.player_.duration(),
                n = this.player_.bufferedEnd(),
                r = this.partEls_,
                a = function (t, e) {
                    var i = t / e || 0;
                    return 100 * (1 <= i ? 1 : i) + "%"
                };
            this.el_.style.width = a(n, i);
            for (var s = 0; s < e.length; s++) {
                var o = e.start(s),
                    u = e.end(s),
                    l = r[s];
                l || (l = this.el_.appendChild(D()), r[s] = l), l.style.left = a(o, n), l.style.width = a(u - o, n)
            }
            for (var c = r.length; c > e.length; c--) this.el_.removeChild(r[c - 1]);
            r.length = e.length
        }, r
    }(Xt);
    Xt.registerComponent("LoadProgressBar", rr);
    var ar = function (t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-time-tooltip"
            })
        }, e.prototype.update = function (t, e, i) {
            var n = Y(this.el_),
                r = Y(this.player_.el()),
                a = t.width * e;
            if (r && n) {
                var s = t.left - r.left + a,
                    o = t.width - a + (r.right - t.right),
                    u = n.width / 2;
                s < u ? u += u - s : o < u && (u = o), u < 0 ? u = 0 : u > n.width && (u = n.width), this.el_.style.right = "-" + u + "px", R(this.el_, i)
            }
        }, e
    }(Xt);
    Xt.registerComponent("TimeTooltip", ar);
    var sr = function (t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-play-progress vjs-slider-bar",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
            })
        }, e.prototype.update = function (i, n) {
            var r = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
                var t = Kn(r.player_.scrubbing() ? r.player_.getCache().currentTime : r.player_.currentTime(), r.player_.duration()),
                    e = r.getChild("timeTooltip");
                e && e.update(i, n, t)
            })
        }, e
    }(Xt);
    sr.prototype.options_ = {
        children: []
    }, re || se || sr.prototype.options_.children.push("timeTooltip"), Xt.registerComponent("PlayProgressBar", sr);
    var or = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.update = Pt(Ot(i, i.update), 25), i
        }
        return v(r, n), r.prototype.createEl = function () {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-mouse-display"
            })
        }, r.prototype.update = function (i, n) {
            var r = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
                var t = r.player_.duration(),
                    e = Kn(n * t, t);
                r.el_.style.left = i.width * n + "px", r.getChild("timeTooltip").update(i, n, e)
            })
        }, r
    }(Xt);
    or.prototype.options_ = {
        children: ["timeTooltip"]
    }, Xt.registerComponent("MouseTimeDisplay", or);
    var ur = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.setEventHandlers_(), i
        }
        return v(r, n), r.prototype.setEventHandlers_ = function () {
            var t = this;
            this.update = Pt(Ot(this, this.update), 30), this.on(this.player_, "timeupdate", this.update), this.on(this.player_, "ended", this.handleEnded), this.updateInterval = null, this.on(this.player_, ["playing"], function () {
                t.clearInterval(t.updateInterval), t.updateInterval = t.setInterval(function () {
                    t.requestAnimationFrame(function () {
                        t.update()
                    })
                }, 30)
            }), this.on(this.player_, ["ended", "pause", "waiting"], function () {
                t.clearInterval(t.updateInterval)
            }), this.on(this.player_, ["timeupdate", "ended"], this.update)
        }, r.prototype.createEl = function () {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-progress-holder"
            }, {
                "aria-label": this.localize("Progress Bar")
            })
        }, r.prototype.update_ = function (t, e) {
            var i = this.player_.duration();
            this.el_.setAttribute("aria-valuenow", (100 * e).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [Kn(t, i), Kn(i, i)], "{1} of {2}")), this.bar.update(Y(this.el_), e)
        }, r.prototype.update = function (t) {
            var e = n.prototype.update.call(this);
            return this.update_(this.getCurrentTime_(), e), e
        }, r.prototype.getCurrentTime_ = function () {
            return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
        }, r.prototype.handleEnded = function (t) {
            this.update_(this.player_.duration(), 1)
        }, r.prototype.getPercent = function () {
            var t = this.getCurrentTime_() / this.player_.duration();
            return 1 <= t ? 1 : t || 0
        }, r.prototype.handleMouseDown = function (t) {
            it(t) && (t.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), n.prototype.handleMouseDown.call(this, t))
        }, r.prototype.handleMouseMove = function (t) {
            if (it(t)) {
                var e = this.calculateDistance(t) * this.player_.duration();
                e === this.player_.duration() && (e -= .1), this.player_.currentTime(e)
            }
        }, r.prototype.enable = function () {
            n.prototype.enable.call(this);
            var t = this.getChild("mouseTimeDisplay");
            t && t.show()
        }, r.prototype.disable = function () {
            n.prototype.disable.call(this);
            var t = this.getChild("mouseTimeDisplay");
            t && t.hide()
        }, r.prototype.handleMouseUp = function (t) {
            n.prototype.handleMouseUp.call(this, t), t && t.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            }), this.videoWasPlaying && Ie(this.player_.play())
        }, r.prototype.stepForward = function () {
            this.player_.currentTime(this.player_.currentTime() + 5)
        }, r.prototype.stepBack = function () {
            this.player_.currentTime(this.player_.currentTime() - 5)
        }, r.prototype.handleAction = function (t) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }, r.prototype.handleKeyPress = function (t) {
            32 === t.which || 13 === t.which ? (t.preventDefault(), this.handleAction(t)) : n.prototype.handleKeyPress && n.prototype.handleKeyPress.call(this, t)
        }, r
    }(nr);
    ur.prototype.options_ = {
        children: ["loadProgressBar", "playProgressBar"],
        barName: "playProgressBar"
    }, re || se || ur.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), ur.prototype.playerEvent = "timeupdate", Xt.registerComponent("SeekBar", ur);
    var lr = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.handleMouseMove = Pt(Ot(i, i.handleMouseMove), 25), i.throttledHandleMouseSeek = Pt(Ot(i, i.handleMouseSeek), 25), i.enable(), i
        }
        return v(r, n), r.prototype.createEl = function () {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-progress-control vjs-control"
            })
        }, r.prototype.handleMouseMove = function (t) {
            var e = this.getChild("seekBar");
            if (e) {
                var i = e.getChild("mouseTimeDisplay"),
                    n = e.el(),
                    r = Y(n),
                    a = K(n, t).x;
                1 < a ? a = 1 : a < 0 && (a = 0), i && i.update(r, a)
            }
        }, r.prototype.handleMouseSeek = function (t) {
            var e = this.getChild("seekBar");
            e && e.handleMouseMove(t)
        }, r.prototype.enabled = function () {
            return this.enabled_
        }, r.prototype.disable = function () {
            this.children().forEach(function (t) {
                return t.disable && t.disable()
            }), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
        }, r.prototype.enable = function () {
            this.children().forEach(function (t) {
                return t.enable && t.enable()
            }), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
        }, r.prototype.handleMouseDown = function (t) {
            var e = this.el_.ownerDocument,
                i = this.getChild("seekBar");
            i && i.handleMouseDown(t), this.on(e, "mousemove", this.throttledHandleMouseSeek), this.on(e, "touchmove", this.throttledHandleMouseSeek), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
        }, r.prototype.handleMouseUp = function (t) {
            var e = this.el_.ownerDocument,
                i = this.getChild("seekBar");
            i && i.handleMouseUp(t), this.off(e, "mousemove", this.throttledHandleMouseSeek), this.off(e, "touchmove", this.throttledHandleMouseSeek), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
        }, r
    }(Xt);
    lr.prototype.options_ = {
        children: ["seekBar"]
    }, Xt.registerComponent("ProgressControl", lr);
    var cr = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.on(t, "fullscreenchange", i.handleFullscreenChange), !1 === p[Se.fullscreenEnabled] && i.disable(), i
        }
        return v(r, n), r.prototype.buildCSSClass = function () {
            return "vjs-fullscreen-control " + n.prototype.buildCSSClass.call(this)
        }, r.prototype.handleFullscreenChange = function (t) {
            this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
        }, r.prototype.handleClick = function (t) {
            this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
        }, r
    }(qn);
    cr.prototype.controlText_ = "Fullscreen", Xt.registerComponent("FullscreenToggle", cr);
    var dr = function (t, e) {
            e.tech_ && !e.tech_.featuresVolumeControl && t.addClass("vjs-hidden"), t.on(e, "loadstart", function () {
                e.tech_.featuresVolumeControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
            })
        },
        hr = function (t) {
            function e() {
                return y(this, e), _(this, t.apply(this, arguments))
            }
            return v(e, t), e.prototype.createEl = function () {
                return t.prototype.createEl.call(this, "div", {
                    className: "vjs-volume-level",
                    innerHTML: '<span class="vjs-control-text"></span>'
                })
            }, e
        }(Xt);
    Xt.registerComponent("VolumeLevel", hr);
    var pr = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.on("slideractive", i.updateLastVolume_), i.on(t, "volumechange", i.updateARIAAttributes), t.ready(function () {
                return i.updateARIAAttributes()
            }), i
        }
        return v(r, n), r.prototype.createEl = function () {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-volume-bar vjs-slider-bar"
            }, {
                "aria-label": this.localize("Volume Level"),
                "aria-live": "polite"
            })
        }, r.prototype.handleMouseDown = function (t) {
            it(t) && n.prototype.handleMouseDown.call(this, t)
        }, r.prototype.handleMouseMove = function (t) {
            it(t) && (this.checkMuted(), this.player_.volume(this.calculateDistance(t)))
        }, r.prototype.checkMuted = function () {
            this.player_.muted() && this.player_.muted(!1)
        }, r.prototype.getPercent = function () {
            return this.player_.muted() ? 0 : this.player_.volume()
        }, r.prototype.stepForward = function () {
            this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
        }, r.prototype.stepBack = function () {
            this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
        }, r.prototype.updateARIAAttributes = function (t) {
            var e = this.player_.muted() ? 0 : this.volumeAsPercentage_();
            this.el_.setAttribute("aria-valuenow", e), this.el_.setAttribute("aria-valuetext", e + "%")
        }, r.prototype.volumeAsPercentage_ = function () {
            return Math.round(100 * this.player_.volume())
        }, r.prototype.updateLastVolume_ = function () {
            var t = this,
                e = this.player_.volume();
            this.one("sliderinactive", function () {
                0 === t.player_.volume() && t.player_.lastVolume_(e)
            })
        }, r
    }(nr);
    pr.prototype.options_ = {
        children: ["volumeLevel"],
        barName: "volumeLevel"
    }, pr.prototype.playerEvent = "volumechange", Xt.registerComponent("VolumeBar", pr);
    var fr = function (n) {
        function r(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            y(this, r), e.vertical = e.vertical || !1, ("undefined" == typeof e.volumeBar || w(e.volumeBar)) && (e.volumeBar = e.volumeBar || {}, e.volumeBar.vertical = e.vertical);
            var i = _(this, n.call(this, t, e));
            return dr(i, t), i.throttledHandleMouseMove = Pt(Ot(i, i.handleMouseMove), 25), i.on("mousedown", i.handleMouseDown), i.on("touchstart", i.handleMouseDown), i.on(i.volumeBar, ["focus", "slideractive"], function () {
                i.volumeBar.addClass("vjs-slider-active"), i.addClass("vjs-slider-active"), i.trigger("slideractive")
            }), i.on(i.volumeBar, ["blur", "sliderinactive"], function () {
                i.volumeBar.removeClass("vjs-slider-active"), i.removeClass("vjs-slider-active"), i.trigger("sliderinactive")
            }), i
        }
        return v(r, n), r.prototype.createEl = function () {
            var t = "vjs-volume-horizontal";
            return this.options_.vertical && (t = "vjs-volume-vertical"), n.prototype.createEl.call(this, "div", {
                className: "vjs-volume-control vjs-control " + t
            })
        }, r.prototype.handleMouseDown = function (t) {
            var e = this.el_.ownerDocument;
            this.on(e, "mousemove", this.throttledHandleMouseMove), this.on(e, "touchmove", this.throttledHandleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
        }, r.prototype.handleMouseUp = function (t) {
            var e = this.el_.ownerDocument;
            this.off(e, "mousemove", this.throttledHandleMouseMove), this.off(e, "touchmove", this.throttledHandleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
        }, r.prototype.handleMouseMove = function (t) {
            this.volumeBar.handleMouseMove(t)
        }, r
    }(Xt);
    fr.prototype.options_ = {
        children: ["volumeBar"]
    }, Xt.registerComponent("VolumeControl", fr);
    var mr = function (t, e) {
            e.tech_ && !e.tech_.featuresMuteControl && t.addClass("vjs-hidden"), t.on(e, "loadstart", function () {
                e.tech_.featuresMuteControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
            })
        },
        gr = function (n) {
            function r(t, e) {
                y(this, r);
                var i = _(this, n.call(this, t, e));
                return mr(i, t), i.on(t, ["loadstart", "volumechange"], i.update), i
            }
            return v(r, n), r.prototype.buildCSSClass = function () {
                return "vjs-mute-control " + n.prototype.buildCSSClass.call(this)
            }, r.prototype.handleClick = function (t) {
                var e = this.player_.volume(),
                    i = this.player_.lastVolume_();
                if (0 === e) {
                    var n = i < .1 ? .1 : i;
                    this.player_.volume(n), this.player_.muted(!1)
                } else this.player_.muted(!this.player_.muted())
            }, r.prototype.update = function (t) {
                this.updateIcon_(), this.updateControlText_()
            }, r.prototype.updateIcon_ = function () {
                var t = this.player_.volume(),
                    e = 3;
                re && this.player_.muted(this.player_.tech_.el_.muted), 0 === t || this.player_.muted() ? e = 0 : t < .33 ? e = 1 : t < .67 && (e = 2);
                for (var i = 0; i < 4; i++) j(this.el_, "vjs-vol-" + i);
                N(this.el_, "vjs-vol-" + e)
            }, r.prototype.updateControlText_ = function () {
                var t = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
                this.controlText() !== t && this.controlText(t)
            }, r
        }(qn);
    gr.prototype.controlText_ = "Mute", Xt.registerComponent("MuteToggle", gr);
    var yr = function (n) {
        function r(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            y(this, r), "undefined" != typeof e.inline ? e.inline = e.inline : e.inline = !0, ("undefined" == typeof e.volumeControl || w(e.volumeControl)) && (e.volumeControl = e.volumeControl || {}, e.volumeControl.vertical = !e.inline);
            var i = _(this, n.call(this, t, e));
            return i.on(t, ["loadstart"], i.volumePanelState_), i.on(i.volumeControl, ["slideractive"], i.sliderActive_), i.on(i.volumeControl, ["sliderinactive"], i.sliderInactive_), i
        }
        return v(r, n), r.prototype.sliderActive_ = function () {
            this.addClass("vjs-slider-active")
        }, r.prototype.sliderInactive_ = function () {
            this.removeClass("vjs-slider-active")
        }, r.prototype.volumePanelState_ = function () {
            this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
        }, r.prototype.createEl = function () {
            var t = "vjs-volume-panel-horizontal";
            return this.options_.inline || (t = "vjs-volume-panel-vertical"), n.prototype.createEl.call(this, "div", {
                className: "vjs-volume-panel vjs-control " + t
            })
        }, r
    }(Xt);
    yr.prototype.options_ = {
        children: ["muteToggle", "volumeControl"]
    }, Xt.registerComponent("VolumePanel", yr);
    var vr = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return e && (i.menuButton_ = e.menuButton), i.focusedChild_ = -1, i.on("keydown", i.handleKeyPress), i
        }
        return v(r, n), r.prototype.addItem = function (e) {
            this.addChild(e), e.on("click", Ot(this, function (t) {
                this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== e.name() && this.menuButton_.focus())
            }))
        }, r.prototype.createEl = function () {
            var t = this.options_.contentElType || "ul";
            this.contentEl_ = D(t, {
                className: "vjs-menu-content"
            }), this.contentEl_.setAttribute("role", "menu");
            var e = n.prototype.createEl.call(this, "div", {
                append: this.contentEl_,
                className: "vjs-menu"
            });
            return e.appendChild(this.contentEl_), vt(e, "click", function (t) {
                t.preventDefault(), t.stopImmediatePropagation()
            }), e
        }, r.prototype.dispose = function () {
            this.contentEl_ = null, n.prototype.dispose.call(this)
        }, r.prototype.handleKeyPress = function (t) {
            37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepForward()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepBack())
        }, r.prototype.stepForward = function () {
            var t = 0;
            void 0 !== this.focusedChild_ && (t = this.focusedChild_ + 1), this.focus(t)
        }, r.prototype.stepBack = function () {
            var t = 0;
            void 0 !== this.focusedChild_ && (t = this.focusedChild_ - 1), this.focus(t)
        }, r.prototype.focus = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                e = this.children().slice();
            e.length && e[0].className && /vjs-menu-title/.test(e[0].className) && e.shift(), 0 < e.length && (t < 0 ? t = 0 : t >= e.length && (t = e.length - 1), e[this.focusedChild_ = t].el_.focus())
        }, r
    }(Xt);
    Xt.registerComponent("Menu", vr);
    var _r = function (r) {
        function a(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            y(this, a);
            var i = _(this, r.call(this, t, e));
            i.menuButton_ = new qn(t, e), i.menuButton_.controlText(i.controlText_), i.menuButton_.el_.setAttribute("aria-haspopup", "true");
            var n = qn.prototype.buildCSSClass();
            return i.menuButton_.el_.className = i.buildCSSClass() + " " + n, i.menuButton_.removeClass("vjs-control"), i.addChild(i.menuButton_), i.update(), i.enabled_ = !0, i.on(i.menuButton_, "tap", i.handleClick), i.on(i.menuButton_, "click", i.handleClick), i.on(i.menuButton_, "focus", i.handleFocus), i.on(i.menuButton_, "blur", i.handleBlur), i.on("keydown", i.handleSubmenuKeyPress), i
        }
        return v(a, r), a.prototype.update = function () {
            var t = this.createMenu();
            this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
        }, a.prototype.createMenu = function () {
            var t = new vr(this.player_, {
                menuButton: this
            });
            if (this.hideThreshold_ = 0, this.options_.title) {
                var e = D("li", {
                    className: "vjs-menu-title",
                    innerHTML: Wt(this.options_.title),
                    tabIndex: -1
                });
                this.hideThreshold_ += 1, t.children_.unshift(e), M(e, t.contentEl())
            }
            if (this.items = this.createItems(), this.items)
                for (var i = 0; i < this.items.length; i++) t.addItem(this.items[i]);
            return t
        }, a.prototype.createItems = function () {}, a.prototype.createEl = function () {
            return r.prototype.createEl.call(this, "div", {
                className: this.buildWrapperCSSClass()
            }, {})
        }, a.prototype.buildWrapperCSSClass = function () {
            var t = "vjs-menu-button";
            return !0 === this.options_.inline ? t += "-inline" : t += "-popup", "vjs-menu-button " + t + " " + qn.prototype.buildCSSClass() + " " + r.prototype.buildCSSClass.call(this)
        }, a.prototype.buildCSSClass = function () {
            var t = "vjs-menu-button";
            return !0 === this.options_.inline ? t += "-inline" : t += "-popup", "vjs-menu-button " + t + " " + r.prototype.buildCSSClass.call(this)
        }, a.prototype.controlText = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
            return this.menuButton_.controlText(t, e)
        }, a.prototype.handleClick = function (t) {
            this.one(this.menu.contentEl(), "mouseleave", Ot(this, function (t) {
                this.unpressButton(), this.el_.blur()
            })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
        }, a.prototype.focus = function () {
            this.menuButton_.focus()
        }, a.prototype.blur = function () {
            this.menuButton_.blur()
        }, a.prototype.handleFocus = function () {
            vt(p, "keydown", Ot(this, this.handleKeyPress))
        }, a.prototype.handleBlur = function () {
            _t(p, "keydown", Ot(this, this.handleKeyPress))
        }, a.prototype.handleKeyPress = function (t) {
            27 === t.which || 9 === t.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus())) : 38 !== t.which && 40 !== t.which || this.buttonPressed_ || (this.pressButton(), t.preventDefault())
        }, a.prototype.handleSubmenuKeyPress = function (t) {
            27 !== t.which && 9 !== t.which || (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus()))
        }, a.prototype.pressButton = function () {
            if (this.enabled_) {
                if (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), re && x()) return;
                this.menu.focus()
            }
        }, a.prototype.unpressButton = function () {
            this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
        }, a.prototype.disable = function () {
            this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
        }, a.prototype.enable = function () {
            this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
        }, a
    }(Xt);
    Xt.registerComponent("MenuButton", _r);
    var br = function (a) {
        function s(t, e) {
            y(this, s);
            var i = e.tracks,
                n = _(this, a.call(this, t, e));
            if (n.items.length <= 1 && n.hide(), !i) return _(n);
            var r = Ot(n, n.update);
            return i.addEventListener("removetrack", r), i.addEventListener("addtrack", r), n.player_.on("ready", r), n.player_.on("dispose", function () {
                i.removeEventListener("removetrack", r), i.removeEventListener("addtrack", r)
            }), n
        }
        return v(s, a), s
    }(_r);
    Xt.registerComponent("TrackButton", br);
    var Tr = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.selectable = e.selectable, i.isSelected_ = e.selected || !1, i.multiSelectable = e.multiSelectable, i.selected(i.isSelected_), i.selectable ? i.multiSelectable ? i.el_.setAttribute("role", "menuitemcheckbox") : i.el_.setAttribute("role", "menuitemradio") : i.el_.setAttribute("role", "menuitem"), i
        }
        return v(r, n), r.prototype.createEl = function (t, e, i) {
            return this.nonIconControl = !0, n.prototype.createEl.call(this, "li", k({
                className: "vjs-menu-item",
                innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                tabIndex: -1
            }, e), i)
        }, r.prototype.handleClick = function (t) {
            this.selected(!0)
        }, r.prototype.selected = function (t) {
            this.selectable && (t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1))
        }, r
    }(Mn);
    Xt.registerComponent("MenuItem", Tr);
    var Sr = function (u) {
        function l(t, e) {
            y(this, l);
            var i = e.track,
                n = t.textTracks();
            e.label = i.label || i.language || "Unknown", e.selected = "showing" === i.mode;
            var r = _(this, u.call(this, t, e));
            r.track = i;
            var a = function () {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    r.handleTracksChange.apply(r, e)
                },
                s = function () {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    r.handleSelectedLanguageChange.apply(r, e)
                };
            if (t.on(["loadstart", "texttrackchange"], a), n.addEventListener("change", a), n.addEventListener("selectedlanguagechange", s), r.on("dispose", function () {
                    t.off(["loadstart", "texttrackchange"], a), n.removeEventListener("change", a), n.removeEventListener("selectedlanguagechange", s)
                }), void 0 === n.onchange) {
                var o = void 0;
                r.on(["tap", "click"], function () {
                    if ("object" !== Ee(g.Event)) try {
                        o = new g.Event("change")
                    } catch (t) {}
                    o || (o = p.createEvent("Event")).initEvent("change", !0, !0), n.dispatchEvent(o)
                })
            }
            return r.handleTracksChange(), r
        }
        return v(l, u), l.prototype.handleClick = function (t) {
            var e = this.track.kind,
                i = this.track.kinds,
                n = this.player_.textTracks();
            if (i || (i = [e]), u.prototype.handleClick.call(this, t), n)
                for (var r = 0; r < n.length; r++) {
                    var a = n[r];
                    a === this.track && -1 < i.indexOf(a.kind) ? "showing" !== a.mode && (a.mode = "showing") : "disabled" !== a.mode && (a.mode = "disabled")
                }
        }, l.prototype.handleTracksChange = function (t) {
            var e = "showing" === this.track.mode;
            e !== this.isSelected_ && this.selected(e)
        }, l.prototype.handleSelectedLanguageChange = function (t) {
            if ("showing" === this.track.mode) {
                var e = this.player_.cache_.selectedLanguage;
                if (e && e.enabled && e.language === this.track.language && e.kind !== this.track.kind) return;
                this.player_.cache_.selectedLanguage = {
                    enabled: !0,
                    language: this.track.language,
                    kind: this.track.kind
                }
            }
        }, l.prototype.dispose = function () {
            this.track = null, u.prototype.dispose.call(this)
        }, l
    }(Tr);
    Xt.registerComponent("TextTrackMenuItem", Sr);
    var kr = function (i) {
        function n(t, e) {
            return y(this, n), e.track = {
                player: t,
                kind: e.kind,
                kinds: e.kinds,
                default: !1,
                mode: "disabled"
            }, e.kinds || (e.kinds = [e.kind]), e.label ? e.track.label = e.label : e.track.label = e.kinds.join(" and ") + " off", e.selectable = !0, e.multiSelectable = !1, _(this, i.call(this, t, e))
        }
        return v(n, i), n.prototype.handleTracksChange = function (t) {
            for (var e = this.player().textTracks(), i = !0, n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                if (-1 < this.options_.kinds.indexOf(a.kind) && "showing" === a.mode) {
                    i = !1;
                    break
                }
            }
            i !== this.isSelected_ && this.selected(i)
        }, n.prototype.handleSelectedLanguageChange = function (t) {
            for (var e = this.player().textTracks(), i = !0, n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                if (-1 < ["captions", "descriptions", "subtitles"].indexOf(a.kind) && "showing" === a.mode) {
                    i = !1;
                    break
                }
            }
            i && (this.player_.cache_.selectedLanguage = {
                enabled: !1
            })
        }, n
    }(Sr);
    Xt.registerComponent("OffTextTrackMenuItem", kr);
    var Cr = function (i) {
        function n(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            return y(this, n), e.tracks = t.textTracks(), _(this, i.call(this, t, e))
        }
        return v(n, i), n.prototype.createItems = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Sr,
                i = void 0;
            this.label_ && (i = this.label_ + " off"), t.push(new kr(this.player_, {
                kinds: this.kinds_,
                kind: this.kind_,
                label: i
            })), this.hideThreshold_ += 1;
            var n = this.player_.textTracks();
            Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
            for (var r = 0; r < n.length; r++) {
                var a = n[r];
                if (-1 < this.kinds_.indexOf(a.kind)) {
                    var s = new e(this.player_, {
                        track: a,
                        selectable: !0,
                        multiSelectable: !1
                    });
                    s.addClass("vjs-" + a.kind + "-menu-item"), t.push(s)
                }
            }
            return t
        }, n
    }(br);
    Xt.registerComponent("TextTrackButton", Cr);
    var wr = function (s) {
        function o(t, e) {
            y(this, o);
            var i = e.track,
                n = e.cue,
                r = t.currentTime();
            e.selectable = !0, e.multiSelectable = !1, e.label = n.text, e.selected = n.startTime <= r && r < n.endTime;
            var a = _(this, s.call(this, t, e));
            return a.track = i, a.cue = n, i.addEventListener("cuechange", Ot(a, a.update)), a
        }
        return v(o, s), o.prototype.handleClick = function (t) {
            s.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
        }, o.prototype.update = function (t) {
            var e = this.cue,
                i = this.player_.currentTime();
            this.selected(e.startTime <= i && i < e.endTime)
        }, o
    }(Tr);
    Xt.registerComponent("ChaptersTrackMenuItem", wr);
    var Er = function (n) {
        function r(t, e, i) {
            return y(this, r), _(this, n.call(this, t, e, i))
        }
        return v(r, n), r.prototype.buildCSSClass = function () {
            return "vjs-chapters-button " + n.prototype.buildCSSClass.call(this)
        }, r.prototype.buildWrapperCSSClass = function () {
            return "vjs-chapters-button " + n.prototype.buildWrapperCSSClass.call(this)
        }, r.prototype.update = function (t) {
            this.track_ && (!t || "addtrack" !== t.type && "removetrack" !== t.type) || this.setTrack(this.findChaptersTrack()), n.prototype.update.call(this)
        }, r.prototype.setTrack = function (t) {
            if (this.track_ !== t) {
                if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                    var e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    e && e.removeEventListener("load", this.updateHandler_), this.track_ = null
                }
                if (this.track_ = t, this.track_) {
                    this.track_.mode = "hidden";
                    var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    i && i.addEventListener("load", this.updateHandler_)
                }
            }
        }, r.prototype.findChaptersTrack = function () {
            for (var t = this.player_.textTracks() || [], e = t.length - 1; 0 <= e; e--) {
                var i = t[e];
                if (i.kind === this.kind_) return i
            }
        }, r.prototype.getMenuCaption = function () {
            return this.track_ && this.track_.label ? this.track_.label : this.localize(Wt(this.kind_))
        }, r.prototype.createMenu = function () {
            return this.options_.title = this.getMenuCaption(), n.prototype.createMenu.call(this)
        }, r.prototype.createItems = function () {
            var t = [];
            if (!this.track_) return t;
            var e = this.track_.cues;
            if (!e) return t;
            for (var i = 0, n = e.length; i < n; i++) {
                var r = e[i],
                    a = new wr(this.player_, {
                        track: this.track_,
                        cue: r
                    });
                t.push(a)
            }
            return t
        }, r
    }(Cr);
    Er.prototype.kind_ = "chapters", Er.prototype.controlText_ = "Chapters", Xt.registerComponent("ChaptersButton", Er);
    var Ar = function (s) {
        function o(t, e, i) {
            y(this, o);
            var n = _(this, s.call(this, t, e, i)),
                r = t.textTracks(),
                a = Ot(n, n.handleTracksChange);
            return r.addEventListener("change", a), n.on("dispose", function () {
                r.removeEventListener("change", a)
            }), n
        }
        return v(o, s), o.prototype.handleTracksChange = function (t) {
            for (var e = this.player().textTracks(), i = !1, n = 0, r = e.length; n < r; n++) {
                var a = e[n];
                if (a.kind !== this.kind_ && "showing" === a.mode) {
                    i = !0;
                    break
                }
            }
            i ? this.disable() : this.enable()
        }, o.prototype.buildCSSClass = function () {
            return "vjs-descriptions-button " + s.prototype.buildCSSClass.call(this)
        }, o.prototype.buildWrapperCSSClass = function () {
            return "vjs-descriptions-button " + s.prototype.buildWrapperCSSClass.call(this)
        }, o
    }(Cr);
    Ar.prototype.kind_ = "descriptions", Ar.prototype.controlText_ = "Descriptions", Xt.registerComponent("DescriptionsButton", Ar);
    var Lr = function (n) {
        function r(t, e, i) {
            return y(this, r), _(this, n.call(this, t, e, i))
        }
        return v(r, n), r.prototype.buildCSSClass = function () {
            return "vjs-subtitles-button " + n.prototype.buildCSSClass.call(this)
        }, r.prototype.buildWrapperCSSClass = function () {
            return "vjs-subtitles-button " + n.prototype.buildWrapperCSSClass.call(this)
        }, r
    }(Cr);
    Lr.prototype.kind_ = "subtitles", Lr.prototype.controlText_ = "Subtitles", Xt.registerComponent("SubtitlesButton", Lr);
    var Or = function (n) {
        function r(t, e) {
            y(this, r), e.track = {
                player: t,
                kind: e.kind,
                label: e.kind + " settings",
                selectable: !1,
                default: !1,
                mode: "disabled"
            }, e.selectable = !1, e.name = "CaptionSettingsMenuItem";
            var i = _(this, n.call(this, t, e));
            return i.addClass("vjs-texttrack-settings"), i.controlText(", opens " + e.kind + " settings dialog"), i
        }
        return v(r, n), r.prototype.handleClick = function (t) {
            this.player().getChild("textTrackSettings").open()
        }, r
    }(Sr);
    Xt.registerComponent("CaptionSettingsMenuItem", Or);
    var Pr = function (n) {
        function r(t, e, i) {
            return y(this, r), _(this, n.call(this, t, e, i))
        }
        return v(r, n), r.prototype.buildCSSClass = function () {
            return "vjs-captions-button " + n.prototype.buildCSSClass.call(this)
        }, r.prototype.buildWrapperCSSClass = function () {
            return "vjs-captions-button " + n.prototype.buildWrapperCSSClass.call(this)
        }, r.prototype.createItems = function () {
            var t = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new Or(this.player_, {
                kind: this.kind_
            })), this.hideThreshold_ += 1), n.prototype.createItems.call(this, t)
        }, r
    }(Cr);
    Pr.prototype.kind_ = "captions", Pr.prototype.controlText_ = "Captions", Xt.registerComponent("CaptionsButton", Pr);
    var Ur = function (r) {
        function t() {
            return y(this, t), _(this, r.apply(this, arguments))
        }
        return v(t, r), t.prototype.createEl = function (t, e, i) {
            var n = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "captions" === this.options_.track.kind && (n += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), n += "</span>", r.prototype.createEl.call(this, t, k({
                innerHTML: n
            }, e), i)
        }, t
    }(Sr);
    Xt.registerComponent("SubsCapsMenuItem", Ur);
    var xr = function (n) {
        function r(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.label_ = "subtitles", -1 < ["en", "en-us", "en-ca", "fr-ca"].indexOf(i.player_.language_) && (i.label_ = "captions"), i.menuButton_.controlText(Wt(i.label_)), i
        }
        return v(r, n), r.prototype.buildCSSClass = function () {
            return "vjs-subs-caps-button " + n.prototype.buildCSSClass.call(this)
        }, r.prototype.buildWrapperCSSClass = function () {
            return "vjs-subs-caps-button " + n.prototype.buildWrapperCSSClass.call(this)
        }, r.prototype.createItems = function () {
            var t = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new Or(this.player_, {
                kind: this.label_
            })), this.hideThreshold_ += 1), t = n.prototype.createItems.call(this, t, Ur)
        }, r
    }(Cr);
    xr.prototype.kinds_ = ["captions", "subtitles"], xr.prototype.controlText_ = "Subtitles", Xt.registerComponent("SubsCapsButton", xr);
    var Ir = function (s) {
        function o(t, e) {
            y(this, o);
            var i = e.track,
                n = t.audioTracks();
            e.label = i.label || i.language || "Unknown", e.selected = i.enabled;
            var r = _(this, s.call(this, t, e));
            r.track = i, r.addClass("vjs-" + i.kind + "-menu-item");
            var a = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                r.handleTracksChange.apply(r, e)
            };
            return n.addEventListener("change", a), r.on("dispose", function () {
                n.removeEventListener("change", a)
            }), r
        }
        return v(o, s), o.prototype.createEl = function (t, e, i) {
            var n = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "main-desc" === this.options_.track.kind && (n += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "), n += "</span>", s.prototype.createEl.call(this, t, k({
                innerHTML: n
            }, e), i)
        }, o.prototype.handleClick = function (t) {
            var e = this.player_.audioTracks();
            s.prototype.handleClick.call(this, t);
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enabled = n === this.track
            }
        }, o.prototype.handleTracksChange = function (t) {
            this.selected(this.track.enabled)
        }, o
    }(Tr);
    Xt.registerComponent("AudioTrackMenuItem", Ir);
    var Dr = function (i) {
        function n(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            return y(this, n), e.tracks = t.audioTracks(), _(this, i.call(this, t, e))
        }
        return v(n, i), n.prototype.buildCSSClass = function () {
            return "vjs-audio-button " + i.prototype.buildCSSClass.call(this)
        }, n.prototype.buildWrapperCSSClass = function () {
            return "vjs-audio-button " + i.prototype.buildWrapperCSSClass.call(this)
        }, n.prototype.createItems = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            this.hideThreshold_ = 1;
            for (var e = this.player_.audioTracks(), i = 0; i < e.length; i++) {
                var n = e[i];
                t.push(new Ir(this.player_, {
                    track: n,
                    selectable: !0,
                    multiSelectable: !1
                }))
            }
            return t
        }, n
    }(br);
    Dr.prototype.controlText_ = "Audio Track", Xt.registerComponent("AudioTrackButton", Dr);
    var Rr = function (a) {
        function s(t, e) {
            y(this, s);
            var i = e.rate,
                n = parseFloat(i, 10);
            e.label = i, e.selected = 1 === n, e.selectable = !0, e.multiSelectable = !1;
            var r = _(this, a.call(this, t, e));
            return r.label = i, r.rate = n, r.on(t, "ratechange", r.update), r
        }
        return v(s, a), s.prototype.handleClick = function (t) {
            a.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
        }, s.prototype.update = function (t) {
            this.selected(this.player().playbackRate() === this.rate)
        }, s
    }(Tr);
    Rr.prototype.contentElType = "button", Xt.registerComponent("PlaybackRateMenuItem", Rr);
    var Mr = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.updateVisibility(), i.updateLabel(), i.on(t, "loadstart", i.updateVisibility), i.on(t, "ratechange", i.updateLabel), i
        }
        return v(r, n), r.prototype.createEl = function () {
            var t = n.prototype.createEl.call(this);
            return this.labelEl_ = D("div", {
                className: "vjs-playback-rate-value",
                innerHTML: "1x"
            }), t.appendChild(this.labelEl_), t
        }, r.prototype.dispose = function () {
            this.labelEl_ = null, n.prototype.dispose.call(this)
        }, r.prototype.buildCSSClass = function () {
            return "vjs-playback-rate " + n.prototype.buildCSSClass.call(this)
        }, r.prototype.buildWrapperCSSClass = function () {
            return "vjs-playback-rate " + n.prototype.buildWrapperCSSClass.call(this)
        }, r.prototype.createMenu = function () {
            var t = new vr(this.player()),
                e = this.playbackRates();
            if (e)
                for (var i = e.length - 1; 0 <= i; i--) t.addChild(new Rr(this.player(), {
                    rate: e[i] + "x"
                }));
            return t
        }, r.prototype.updateARIAAttributes = function () {
            this.el().setAttribute("aria-valuenow", this.player().playbackRate())
        }, r.prototype.handleClick = function (t) {
            for (var e = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++)
                if (i[r] > e) {
                    n = i[r];
                    break
                } this.player().playbackRate(n)
        }, r.prototype.playbackRates = function () {
            return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
        }, r.prototype.playbackRateSupported = function () {
            return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && 0 < this.playbackRates().length
        }, r.prototype.updateVisibility = function (t) {
            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
        }, r.prototype.updateLabel = function (t) {
            this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
        }, r
    }(_r);
    Mr.prototype.controlText_ = "Playback Rate", Xt.registerComponent("PlaybackRateMenuButton", Mr);
    var Br = function (t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.buildCSSClass = function () {
            return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass()
            })
        }, e
    }(Xt);
    Xt.registerComponent("Spacer", Br);
    var Nr = function (e) {
        function t() {
            return y(this, t), _(this, e.apply(this, arguments))
        }
        return v(t, e), t.prototype.buildCSSClass = function () {
            return "vjs-custom-control-spacer " + e.prototype.buildCSSClass.call(this)
        }, t.prototype.createEl = function () {
            var t = e.prototype.createEl.call(this, {
                className: this.buildCSSClass()
            });
            return t.innerHTML = " ", t
        }, t
    }(Br);
    Xt.registerComponent("CustomControlSpacer", Nr);
    var jr = function (t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.createEl = function () {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-control-bar",
                dir: "ltr"
            })
        }, e
    }(Xt);
    jr.prototype.options_ = {
        children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
    }, Xt.registerComponent("ControlBar", jr);
    var Fr = function (n) {
        function r(t, e) {
            y(this, r);
            var i = _(this, n.call(this, t, e));
            return i.on(t, "error", i.open), i
        }
        return v(r, n), r.prototype.buildCSSClass = function () {
            return "vjs-error-display " + n.prototype.buildCSSClass.call(this)
        }, r.prototype.content = function () {
            var t = this.player().error();
            return t ? this.localize(t.message) : ""
        }, r
    }(Ne);
    Fr.prototype.options_ = Gt(Ne.prototype.options_, {
        pauseOnOpen: !1,
        fillAlways: !0,
        temporary: !1,
        uncloseable: !0
    }), Xt.registerComponent("ErrorDisplay", Fr);
    var Vr = "vjs-text-track-settings",
        Hr = ["#000", "Black"],
        zr = ["#00F", "Blue"],
        qr = ["#0FF", "Cyan"],
        Wr = ["#0F0", "Green"],
        Gr = ["#F0F", "Magenta"],
        Xr = ["#F00", "Red"],
        Yr = ["#FFF", "White"],
        $r = ["#FF0", "Yellow"],
        Kr = ["1", "Opaque"],
        Jr = ["0.5", "Semi-Transparent"],
        Qr = ["0", "Transparent"],
        Zr = {
            backgroundColor: {
                selector: ".vjs-bg-color > select",
                id: "captions-background-color-%s",
                label: "Color",
                options: [Hr, Yr, Xr, Wr, zr, $r, Gr, qr]
            },
            backgroundOpacity: {
                selector: ".vjs-bg-opacity > select",
                id: "captions-background-opacity-%s",
                label: "Transparency",
                options: [Kr, Jr, Qr]
            },
            color: {
                selector: ".vjs-fg-color > select",
                id: "captions-foreground-color-%s",
                label: "Color",
                options: [Yr, Hr, Xr, Wr, zr, $r, Gr, qr]
            },
            edgeStyle: {
                selector: ".vjs-edge-style > select",
                id: "%s",
                label: "Text Edge Style",
                options: [
                    ["none", "None"],
                    ["raised", "Raised"],
                    ["depressed", "Depressed"],
                    ["uniform", "Uniform"],
                    ["dropshadow", "Dropshadow"]
                ]
            },
            fontFamily: {
                selector: ".vjs-font-family > select",
                id: "captions-font-family-%s",
                label: "Font Family",
                options: [
                    ["proportionalSansSerif", "Proportional Sans-Serif"],
                    ["monospaceSansSerif", "Monospace Sans-Serif"],
                    ["proportionalSerif", "Proportional Serif"],
                    ["monospaceSerif", "Monospace Serif"],
                    ["casual", "Casual"],
                    ["script", "Script"],
                    ["small-caps", "Small Caps"]
                ]
            },
            fontPercent: {
                selector: ".vjs-font-percent > select",
                id: "captions-font-size-%s",
                label: "Font Size",
                options: [
                    ["0.50", "50%"],
                    ["0.75", "75%"],
                    ["1.00", "100%"],
                    ["1.25", "125%"],
                    ["1.50", "150%"],
                    ["1.75", "175%"],
                    ["2.00", "200%"],
                    ["3.00", "300%"],
                    ["4.00", "400%"]
                ],
                default: 2,
                parser: function (t) {
                    return "1.00" === t ? null : Number(t)
                }
            },
            textOpacity: {
                selector: ".vjs-text-opacity > select",
                id: "captions-foreground-opacity-%s",
                label: "Transparency",
                options: [Kr, Jr]
            },
            windowColor: {
                selector: ".vjs-window-color > select",
                id: "captions-window-color-%s",
                label: "Color"
            },
            windowOpacity: {
                selector: ".vjs-window-opacity > select",
                id: "captions-window-opacity-%s",
                label: "Transparency",
                options: [Qr, Jr, Kr]
            }
        };

    function ta(t, e) {
        if (e && (t = e(t)), t && "none" !== t) return t
    }
    Zr.windowColor.options = Zr.backgroundColor.options;
    var ea = function (n) {
        function r(t, e) {
            y(this, r), e.temporary = !1;
            var i = _(this, n.call(this, t, e));
            return i.updateDisplay = Ot(i, i.updateDisplay), i.fill(), i.hasBeenOpened_ = i.hasBeenFilled_ = !0, i.endDialog = D("p", {
                className: "vjs-control-text",
                textContent: i.localize("End of dialog window.")
            }), i.el().appendChild(i.endDialog), i.setDefaults(), void 0 === e.persistTextTrackSettings && (i.options_.persistTextTrackSettings = i.options_.playerOptions.persistTextTrackSettings), i.on(i.$(".vjs-done-button"), "click", function () {
                i.saveSettings(), i.close()
            }), i.on(i.$(".vjs-default-button"), "click", function () {
                i.setDefaults(), i.updateDisplay()
            }), S(Zr, function (t) {
                i.on(i.$(t.selector), "change", i.updateDisplay)
            }), i.options_.persistTextTrackSettings && i.restoreSettings(), i
        }
        return v(r, n), r.prototype.dispose = function () {
            this.endDialog = null, n.prototype.dispose.call(this)
        }, r.prototype.createElSelect_ = function (t) {
            var i = this,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "label",
                r = Zr[t],
                a = r.id.replace("%s", this.id_),
                s = [e, a].join(" ").trim();
            return ["<" + n + ' id="' + a + '" class="' + ("label" === n ? "vjs-label" : "") + '">', this.localize(r.label), "</" + n + ">", '<select aria-labelledby="' + s + '">'].concat(r.options.map(function (t) {
                var e = a + "-" + t[1].replace(/\W+/g, "");
                return ['<option id="' + e + '" value="' + t[0] + '" ', 'aria-labelledby="' + s + " " + e + '">', i.localize(t[1]), "</option>"].join("")
            })).concat("</select>").join("")
        }, r.prototype.createElFgColor_ = function () {
            var t = "captions-text-legend-" + this.id_;
            return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", t), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", t), "</span>", "</fieldset>"].join("")
        }, r.prototype.createElBgColor_ = function () {
            var t = "captions-background-" + this.id_;
            return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", t), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", t), "</span>", "</fieldset>"].join("")
        }, r.prototype.createElWinColor_ = function () {
            var t = "captions-window-" + this.id_;
            return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", t), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", t), "</span>", "</fieldset>"].join("")
        }, r.prototype.createElColors_ = function () {
            return D("div", {
                className: "vjs-track-settings-colors",
                innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
            })
        }, r.prototype.createElFont_ = function () {
            return D("div", {
                className: "vjs-track-settings-font",
                innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
            })
        }, r.prototype.createElControls_ = function () {
            var t = this.localize("restore all settings to the default values");
            return D("div", {
                className: "vjs-track-settings-controls",
                innerHTML: ['<button class="vjs-default-button" title="' + t + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + t + "</span>", "</button>", '<button class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
            })
        }, r.prototype.content = function () {
            return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
        }, r.prototype.label = function () {
            return this.localize("Caption Settings Dialog")
        }, r.prototype.description = function () {
            return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
        }, r.prototype.buildCSSClass = function () {
            return n.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
        }, r.prototype.getValues = function () {
            var s = this;
            return function (i, n) {
                var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                return T(i).reduce(function (t, e) {
                    return n(t, i[e], e)
                }, t)
            }(Zr, function (t, e, i) {
                var n, r, a = (n = s.$(e.selector), r = e.parser, ta(n.options[n.options.selectedIndex].value, r));
                return void 0 !== a && (t[i] = a), t
            }, {})
        }, r.prototype.setValues = function (i) {
            var n = this;
            S(Zr, function (t, e) {
                ! function (t, e, i) {
                    if (e)
                        for (var n = 0; n < t.options.length; n++)
                            if (ta(t.options[n].value, i) === e) {
                                t.selectedIndex = n;
                                break
                            }
                }(n.$(t.selector), i[e], t.parser)
            })
        }, r.prototype.setDefaults = function () {
            var i = this;
            S(Zr, function (t) {
                var e = t.hasOwnProperty("default") ? t.default : 0;
                i.$(t.selector).selectedIndex = e
            })
        }, r.prototype.restoreSettings = function () {
            var t = void 0;
            try {
                t = JSON.parse(g.localStorage.getItem(Vr))
            } catch (t) {
                f.warn(t)
            }
            t && this.setValues(t)
        }, r.prototype.saveSettings = function () {
            if (this.options_.persistTextTrackSettings) {
                var t = this.getValues();
                try {
                    Object.keys(t).length ? g.localStorage.setItem(Vr, JSON.stringify(t)) : g.localStorage.removeItem(Vr)
                } catch (t) {
                    f.warn(t)
                }
            }
        }, r.prototype.updateDisplay = function () {
            var t = this.player_.getChild("textTrackDisplay");
            t && t.updateDisplay()
        }, r.prototype.conditionalBlur_ = function () {
            this.previouslyActiveEl_ = null, this.off(p, "keydown", this.handleKeyDown);
            var t = this.player_.controlBar,
                e = t && t.subsCapsButton,
                i = t && t.captionsButton;
            e ? e.focus() : i && i.focus()
        }, r
    }(Ne);
    Xt.registerComponent("TextTrackSettings", ea);
    var ia = function (a) {
        function s(t, e) {
            y(this, s);
            var i = e.ResizeObserver || g.ResizeObserver;
            null === e.ResizeObserver && (i = !1);
            var n = Gt({
                    createEl: !i,
                    reportTouchActivity: !1
                }, e),
                r = _(this, a.call(this, t, n));
            return r.ResizeObserver = e.ResizeObserver || g.ResizeObserver, r.loadListener_ = null, r.resizeObserver_ = null, r.debouncedHandler_ = Ut(function () {
                r.resizeHandler()
            }, 100, !1, t), i ? (r.resizeObserver_ = new r.ResizeObserver(r.debouncedHandler_), r.resizeObserver_.observe(t.el())) : (r.loadListener_ = function () {
                r.el_.contentWindow && vt(r.el_.contentWindow, "resize", r.debouncedHandler_), r.off("load", r.loadListener_)
            }, r.on("load", r.loadListener_)), r
        }
        return v(s, a), s.prototype.createEl = function () {
            return a.prototype.createEl.call(this, "iframe", {
                className: "vjs-resize-manager"
            })
        }, s.prototype.resizeHandler = function () {
            this.player_.trigger("playerresize")
        }, s.prototype.dispose = function () {
            this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.el_ && this.el_.contentWindow && _t(this.el_.contentWindow, "resize", this.debouncedHandler_), this.loadListener_ && this.off("load", this.loadListener_), this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null, a.prototype.dispose.call(this)
        }, s
    }(Xt);
    Xt.registerComponent("ResizeManager", ia);
    var na = function (t) {
            var e = t.el();
            if (e.hasAttribute("src")) return t.triggerSourceset(e.src), !0;
            var i = t.$$("source"),
                n = [],
                r = "";
            if (!i.length) return !1;
            for (var a = 0; a < i.length; a++) {
                var s = i[a].src;
                s && -1 === n.indexOf(s) && n.push(s)
            }
            return !!n.length && (1 === n.length && (r = n[0]), t.triggerSourceset(r), !0)
        },
        ra = Object.defineProperty({}, "innerHTML", {
            get: function () {
                return this.cloneNode(!0).innerHTML
            },
            set: function (t) {
                var e = p.createElement(this.nodeName.toLowerCase());
                e.innerHTML = t;
                for (var i = p.createDocumentFragment(); e.childNodes.length;) i.appendChild(e.childNodes[0]);
                return this.innerText = "", g.Element.prototype.appendChild.call(this, i), this.innerHTML
            }
        }),
        aa = function (t, e) {
            for (var i = {}, n = 0; n < t.length && !((i = Object.getOwnPropertyDescriptor(t[n], e)) && i.set && i.get); n++);
            return i.enumerable = !0, i.configurable = !0, i
        },
        sa = function (a) {
            var s = a.el();
            if (!s.resetSourceWatch_) {
                var e = {},
                    t = aa([a.el(), g.HTMLMediaElement.prototype, g.Element.prototype, ra], "innerHTML"),
                    i = function (r) {
                        return function () {
                            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            var n = r.apply(s, e);
                            return na(a), n
                        }
                    };
                ["append", "appendChild", "insertAdjacentHTML"].forEach(function (t) {
                    s[t] && (e[t] = s[t], s[t] = i(e[t]))
                }), Object.defineProperty(s, "innerHTML", Gt(t, {
                    set: i(t.set)
                })), s.resetSourceWatch_ = function () {
                    s.resetSourceWatch_ = null, Object.keys(e).forEach(function (t) {
                        s[t] = e[t]
                    }), Object.defineProperty(s, "innerHTML", t)
                }, a.one("sourceset", s.resetSourceWatch_)
            }
        },
        oa = Object.defineProperty({}, "src", {
            get: function () {
                return this.hasAttribute("src") ? ti(g.Element.prototype.getAttribute.call(this, "src")) : ""
            },
            set: function (t) {
                return g.Element.prototype.setAttribute.call(this, "src", t), t
            }
        }),
        ua = function (n) {
            if (n.featuresSourceset) {
                var r = n.el();
                if (!r.resetSourceset_) {
                    var i = aa([n.el(), g.HTMLMediaElement.prototype, oa], "src"),
                        a = r.setAttribute,
                        e = r.load;
                    Object.defineProperty(r, "src", Gt(i, {
                        set: function (t) {
                            var e = i.set.call(r, t);
                            return n.triggerSourceset(r.src), e
                        }
                    })), r.setAttribute = function (t, e) {
                        var i = a.call(r, t, e);
                        return /src/i.test(t) && n.triggerSourceset(r.src), i
                    }, r.load = function () {
                        var t = e.call(r);
                        return na(n) || (n.triggerSourceset(""), sa(n)), t
                    }, r.currentSrc ? n.triggerSourceset(r.currentSrc) : na(n) || sa(n), r.resetSourceset_ = function () {
                        r.resetSourceset_ = null, r.load = e, r.setAttribute = a, Object.defineProperty(r, "src", i), r.resetSourceWatch_ && r.resetSourceWatch_()
                    }
                }
            }
        },
        la = d(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
        ca = function (c) {
            function d(t, e) {
                y(this, d);
                var i = _(this, c.call(this, t, e)),
                    n = t.source,
                    r = !1;
                if (n && (i.el_.currentSrc !== n.src || t.tag && 3 === t.tag.initNetworkState_) ? i.setSource(n) : i.handleLateInit_(i.el_), t.enableSourceset && i.setupSourcesetHandling_(), i.el_.hasChildNodes()) {
                    for (var a = i.el_.childNodes, s = a.length, o = []; s--;) {
                        var u = a[s];
                        "track" === u.nodeName.toLowerCase() && (i.featuresNativeTextTracks ? (i.remoteTextTrackEls().addTrackElement_(u), i.remoteTextTracks().addTrack(u.track), i.textTracks().addTrack(u.track), r || i.el_.hasAttribute("crossorigin") || !ii(u.src) || (r = !0)) : o.push(u))
                    }
                    for (var l = 0; l < o.length; l++) i.el_.removeChild(o[l])
                }
                return i.proxyNativeTracks_(), i.featuresNativeTextTracks && r && f.warn(m(la)), i.restoreMetadataTracksInIOSNativePlayer_(), (ge || ie || ue) && !0 === t.nativeControlsForTouch && i.setControls(!0), i.proxyWebkitFullscreen_(), i.triggerReady(), i
            }
            return v(d, c), d.prototype.dispose = function () {
                this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), d.disposeMediaElement(this.el_), this.options_ = null, c.prototype.dispose.call(this)
            }, d.prototype.setupSourcesetHandling_ = function () {
                ua(this)
            }, d.prototype.restoreMetadataTracksInIOSNativePlayer_ = function () {
                var n = this.textTracks(),
                    r = void 0,
                    t = function () {
                        r = [];
                        for (var t = 0; t < n.length; t++) {
                            var e = n[t];
                            "metadata" === e.kind && r.push({
                                track: e,
                                storedMode: e.mode
                            })
                        }
                    };
                t(), n.addEventListener("change", t), this.on("dispose", function () {
                    return n.removeEventListener("change", t)
                });
                var e = function t() {
                    for (var e = 0; e < r.length; e++) {
                        var i = r[e];
                        "disabled" === i.track.mode && i.track.mode !== i.storedMode && (i.track.mode = i.storedMode)
                    }
                    n.removeEventListener("change", t)
                };
                this.on("webkitbeginfullscreen", function () {
                    n.removeEventListener("change", t), n.removeEventListener("change", e), n.addEventListener("change", e)
                }), this.on("webkitendfullscreen", function () {
                    n.removeEventListener("change", t), n.addEventListener("change", t), n.removeEventListener("change", e)
                })
            }, d.prototype.overrideNative_ = function (t, e) {
                var i = this;
                if (e === this["featuresNative" + t + "Tracks"]) {
                    var n = t.toLowerCase();
                    this[n + "TracksListeners_"] && Object.keys(this[n + "TracksListeners_"]).forEach(function (t) {
                        i.el()[n + "Tracks"].removeEventListener(t, i[n + "TracksListeners_"][t])
                    }), this["featuresNative" + t + "Tracks"] = !e, this[n + "TracksListeners_"] = null, this.proxyNativeTracksForType_(n)
                }
            }, d.prototype.overrideNativeAudioTracks = function (t) {
                this.overrideNative_("Audio", t)
            }, d.prototype.overrideNativeVideoTracks = function (t) {
                this.overrideNative_("Video", t)
            }, d.prototype.proxyNativeTracksForType_ = function (t) {
                var n = this,
                    e = Bi[t],
                    r = this.el()[e.getterName],
                    a = this[e.getterName]();
                if (this["featuresNative" + e.capitalName + "Tracks"] && r && r.addEventListener) {
                    var s = {
                            change: function (t) {
                                a.trigger({
                                    type: "change",
                                    target: a,
                                    currentTarget: a,
                                    srcElement: a
                                })
                            },
                            addtrack: function (t) {
                                a.addTrack(t.track)
                            },
                            removetrack: function (t) {
                                a.removeTrack(t.track)
                            }
                        },
                        i = function () {
                            for (var t = [], e = 0; e < a.length; e++) {
                                for (var i = !1, n = 0; n < r.length; n++)
                                    if (r[n] === a[e]) {
                                        i = !0;
                                        break
                                    } i || t.push(a[e])
                            }
                            for (; t.length;) a.removeTrack(t.shift())
                        };
                    this[e.getterName + "Listeners_"] = s, Object.keys(s).forEach(function (e) {
                        var i = s[e];
                        r.addEventListener(e, i), n.on("dispose", function (t) {
                            return r.removeEventListener(e, i)
                        })
                    }), this.on("loadstart", i), this.on("dispose", function (t) {
                        return n.off("loadstart", i)
                    })
                }
            }, d.prototype.proxyNativeTracks_ = function () {
                var e = this;
                Bi.names.forEach(function (t) {
                    e.proxyNativeTracksForType_(t)
                })
            }, d.prototype.createEl = function () {
                var t = this.options_.tag;
                if (!t || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                    if (t) {
                        var e = t.cloneNode(!0);
                        t.parentNode && t.parentNode.insertBefore(e, t), d.disposeMediaElement(t), t = e
                    } else {
                        t = p.createElement("video");
                        var i = Gt({}, this.options_.tag && H(this.options_.tag));
                        ge && !0 === this.options_.nativeControlsForTouch || delete i.controls, V(t, k(i, {
                            id: this.options_.techId,
                            class: "vjs-tech"
                        }))
                    }
                    t.playerId = this.options_.playerId
                }
                "undefined" != typeof this.options_.preload && q(t, "preload", this.options_.preload);
                for (var n = ["loop", "muted", "playsinline", "autoplay"], r = 0; r < n.length; r++) {
                    var a = n[r],
                        s = this.options_[a];
                    "undefined" != typeof s && (s ? q(t, a, a) : W(t, a), t[a] = s)
                }
                return t
            }, d.prototype.handleLateInit_ = function (t) {
                if (0 !== t.networkState && 3 !== t.networkState) {
                    if (0 === t.readyState) {
                        var e = !1,
                            i = function () {
                                e = !0
                            };
                        this.on("loadstart", i);
                        var n = function () {
                            e || this.trigger("loadstart")
                        };
                        return this.on("loadedmetadata", n), void this.ready(function () {
                            this.off("loadstart", i), this.off("loadedmetadata", n), e || this.trigger("loadstart")
                        })
                    }
                    var r = ["loadstart"];
                    r.push("loadedmetadata"), 2 <= t.readyState && r.push("loadeddata"), 3 <= t.readyState && r.push("canplay"), 4 <= t.readyState && r.push("canplaythrough"), this.ready(function () {
                        r.forEach(function (t) {
                            this.trigger(t)
                        }, this)
                    })
                }
            }, d.prototype.setCurrentTime = function (t) {
                try {
                    this.el_.currentTime = t
                } catch (t) {
                    f(t, "Video is not ready. (Video.js)")
                }
            }, d.prototype.duration = function () {
                var e = this;
                if (this.el_.duration === 1 / 0 && se && de && 0 === this.el_.currentTime) {
                    return this.on("timeupdate", function t() {
                        0 < e.el_.currentTime && (e.el_.duration === 1 / 0 && e.trigger("durationchange"), e.off("timeupdate", t))
                    }), NaN
                }
                return this.el_.duration || NaN
            }, d.prototype.width = function () {
                return this.el_.offsetWidth
            }, d.prototype.height = function () {
                return this.el_.offsetHeight
            }, d.prototype.proxyWebkitFullscreen_ = function () {
                var t = this;
                if ("webkitDisplayingFullscreen" in this.el_) {
                    var e = function () {
                            this.trigger("fullscreenchange", {
                                isFullscreen: !1
                            })
                        },
                        i = function () {
                            "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", e), this.trigger("fullscreenchange", {
                                isFullscreen: !0
                            }))
                        };
                    this.on("webkitbeginfullscreen", i), this.on("dispose", function () {
                        t.off("webkitbeginfullscreen", i), t.off("webkitendfullscreen", e)
                    })
                }
            }, d.prototype.supportsFullScreen = function () {
                if ("function" == typeof this.el_.webkitEnterFullScreen) {
                    var t = g.navigator && g.navigator.userAgent || "";
                    if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
                }
                return !1
            }, d.prototype.enterFullScreen = function () {
                var t = this.el_;
                t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
                    t.pause(), t.webkitEnterFullScreen()
                }, 0)) : t.webkitEnterFullScreen()
            }, d.prototype.exitFullScreen = function () {
                this.el_.webkitExitFullScreen()
            }, d.prototype.src = function (t) {
                if (void 0 === t) return this.el_.src;
                this.setSrc(t)
            }, d.prototype.reset = function () {
                d.resetMediaElement(this.el_)
            }, d.prototype.currentSrc = function () {
                return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
            }, d.prototype.setControls = function (t) {
                this.el_.controls = !!t
            }, d.prototype.addTextTrack = function (t, e, i) {
                return this.featuresNativeTextTracks ? this.el_.addTextTrack(t, e, i) : c.prototype.addTextTrack.call(this, t, e, i)
            }, d.prototype.createRemoteTextTrack = function (t) {
                if (!this.featuresNativeTextTracks) return c.prototype.createRemoteTextTrack.call(this, t);
                var e = p.createElement("track");
                return t.kind && (e.kind = t.kind), t.label && (e.label = t.label), (t.language || t.srclang) && (e.srclang = t.language || t.srclang), t.default && (e.default = t.default), t.id && (e.id = t.id), t.src && (e.src = t.src), e
            }, d.prototype.addRemoteTextTrack = function (t, e) {
                var i = c.prototype.addRemoteTextTrack.call(this, t, e);
                return this.featuresNativeTextTracks && this.el().appendChild(i), i
            }, d.prototype.removeRemoteTextTrack = function (t) {
                if (c.prototype.removeRemoteTextTrack.call(this, t), this.featuresNativeTextTracks)
                    for (var e = this.$$("track"), i = e.length; i--;) t !== e[i] && t !== e[i].track || this.el().removeChild(e[i])
            }, d.prototype.getVideoPlaybackQuality = function () {
                if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
                var t = {};
                return "undefined" != typeof this.el().webkitDroppedFrameCount && "undefined" != typeof this.el().webkitDecodedFrameCount && (t.droppedVideoFrames = this.el().webkitDroppedFrameCount, t.totalVideoFrames = this.el().webkitDecodedFrameCount), g.performance && "function" == typeof g.performance.now ? t.creationTime = g.performance.now() : g.performance && g.performance.timing && "number" == typeof g.performance.timing.navigationStart && (t.creationTime = g.Date.now() - g.performance.timing.navigationStart), t
            }, d
        }(Sn);
    if (P()) {
        ca.TEST_VID = p.createElement("video");
        var da = p.createElement("track");
        da.kind = "captions", da.srclang = "en", da.label = "English", ca.TEST_VID.appendChild(da)
    }
    ca.isSupported = function () {
        try {
            ca.TEST_VID.volume = .5
        } catch (t) {
            return !1
        }
        return !(!ca.TEST_VID || !ca.TEST_VID.canPlayType)
    }, ca.canPlayType = function (t) {
        return ca.TEST_VID.canPlayType(t)
    }, ca.canPlaySource = function (t, e) {
        return ca.canPlayType(t.type)
    }, ca.canControlVolume = function () {
        try {
            var t = ca.TEST_VID.volume;
            return ca.TEST_VID.volume = t / 2 + .1, t !== ca.TEST_VID.volume
        } catch (t) {
            return !1
        }
    }, ca.canMuteVolume = function () {
        try {
            var t = ca.TEST_VID.muted;
            return ca.TEST_VID.muted = !t, ca.TEST_VID.muted ? q(ca.TEST_VID, "muted", "muted") : W(ca.TEST_VID, "muted"), t !== ca.TEST_VID.muted
        } catch (t) {
            return !1
        }
    }, ca.canControlPlaybackRate = function () {
        if (se && de && he < 58) return !1;
        try {
            var t = ca.TEST_VID.playbackRate;
            return ca.TEST_VID.playbackRate = t / 2 + .1, t !== ca.TEST_VID.playbackRate
        } catch (t) {
            return !1
        }
    }, ca.canOverrideAttributes = function () {
        try {
            var t = function () {};
            Object.defineProperty(p.createElement("video"), "src", {
                get: t,
                set: t
            }), Object.defineProperty(p.createElement("audio"), "src", {
                get: t,
                set: t
            }), Object.defineProperty(p.createElement("video"), "innerHTML", {
                get: t,
                set: t
            }), Object.defineProperty(p.createElement("audio"), "innerHTML", {
                get: t,
                set: t
            })
        } catch (t) {
            return !1
        }
        return !0
    }, ca.supportsNativeTextTracks = function () {
        return me || re && de
    }, ca.supportsNativeVideoTracks = function () {
        return !(!ca.TEST_VID || !ca.TEST_VID.videoTracks)
    }, ca.supportsNativeAudioTracks = function () {
        return !(!ca.TEST_VID || !ca.TEST_VID.audioTracks)
    }, ca.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], ca.prototype.featuresVolumeControl = ca.canControlVolume(), ca.prototype.featuresMuteControl = ca.canMuteVolume(), ca.prototype.featuresPlaybackRate = ca.canControlPlaybackRate(), ca.prototype.featuresSourceset = ca.canOverrideAttributes(), ca.prototype.movingMediaElementInDOM = !re, ca.prototype.featuresFullscreenResize = !0, ca.prototype.featuresProgressEvents = !0, ca.prototype.featuresTimeupdateEvents = !0, ca.prototype.featuresNativeTextTracks = ca.supportsNativeTextTracks(), ca.prototype.featuresNativeVideoTracks = ca.supportsNativeVideoTracks(), ca.prototype.featuresNativeAudioTracks = ca.supportsNativeAudioTracks();
    var ha = ca.TEST_VID && ca.TEST_VID.constructor.prototype.canPlayType,
        pa = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
    ca.patchCanPlayType = function () {
        4 <= oe && !le && !de && (ca.TEST_VID.constructor.prototype.canPlayType = function (t) {
            return t && pa.test(t) ? "maybe" : ha.call(this, t)
        })
    }, ca.unpatchCanPlayType = function () {
        var t = ca.TEST_VID.constructor.prototype.canPlayType;
        return ca.TEST_VID.constructor.prototype.canPlayType = ha, t
    }, ca.patchCanPlayType(), ca.disposeMediaElement = function (t) {
        if (t) {
            for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
            t.removeAttribute("src"), "function" == typeof t.load && function () {
                try {
                    t.load()
                } catch (t) {}
            }()
        }
    }, ca.resetMediaElement = function (t) {
        if (t) {
            for (var e = t.querySelectorAll("source"), i = e.length; i--;) t.removeChild(e[i]);
            t.removeAttribute("src"), "function" == typeof t.load && function () {
                try {
                    t.load()
                } catch (t) {}
            }()
        }
    }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function (t) {
        ca.prototype[t] = function () {
            return this.el_[t] || this.el_.hasAttribute(t)
        }
    }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function (e) {
        ca.prototype["set" + Wt(e)] = function (t) {
            (this.el_[e] = t) ? this.el_.setAttribute(e, e): this.el_.removeAttribute(e)
        }
    }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function (t) {
        ca.prototype[t] = function () {
            return this.el_[t]
        }
    }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function (e) {
        ca.prototype["set" + Wt(e)] = function (t) {
            this.el_[e] = t
        }
    }), ["pause", "load", "play"].forEach(function (t) {
        ca.prototype[t] = function () {
            return this.el_[t]()
        }
    }), Sn.withSourceHandlers(ca), ca.nativeSourceHandler = {}, ca.nativeSourceHandler.canPlayType = function (t) {
        try {
            return ca.TEST_VID.canPlayType(t)
        } catch (t) {
            return ""
        }
    }, ca.nativeSourceHandler.canHandleSource = function (t, e) {
        if (t.type) return ca.nativeSourceHandler.canPlayType(t.type);
        if (t.src) {
            var i = ei(t.src);
            return ca.nativeSourceHandler.canPlayType("video/" + i)
        }
        return ""
    }, ca.nativeSourceHandler.handleSource = function (t, e, i) {
        e.setSrc(t.src)
    }, ca.nativeSourceHandler.dispose = function () {}, ca.registerSourceHandler(ca.nativeSourceHandler), Sn.registerTech("Html5", ca);
    var fa = d(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),
        ma = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
        ga = {
            canplay: "CanPlay",
            canplaythrough: "CanPlayThrough",
            playing: "Playing",
            seeked: "Seeked"
        },
        ya = function (c) {
            function d(t, e, i) {
                if (y(this, d), t.id = t.id || e.id || "vjs_video_" + ot(), (e = k(d.getTagSettings(t), e)).initChildren = !1, e.createEl = !1, e.evented = !1, e.reportTouchActivity = !1, !e.language)
                    if ("function" == typeof t.closest) {
                        var n = t.closest("[lang]");
                        n && n.getAttribute && (e.language = n.getAttribute("lang"))
                    } else
                        for (var r = t; r && 1 === r.nodeType;) {
                            if (H(r).hasOwnProperty("lang")) {
                                e.language = r.getAttribute("lang");
                                break
                            }
                            r = r.parentNode
                        }
                var a = _(this, c.call(this, null, e, i));
                if (a.isPosterFromTech_ = !1, a.queuedCallbacks_ = [], a.isReady_ = !1, a.hasStarted_ = !1, a.userActive_ = !1, !a.options_ || !a.options_.techOrder || !a.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                if (a.tag = t, a.tagAttributes = t && H(t), a.language(a.options_.language), e.languages) {
                    var s = {};
                    Object.getOwnPropertyNames(e.languages).forEach(function (t) {
                        s[t.toLowerCase()] = e.languages[t]
                    }), a.languages_ = s
                } else a.languages_ = d.prototype.options_.languages;
                a.cache_ = {}, a.poster_ = e.poster || "", a.controls_ = !!e.controls, a.cache_.lastVolume = 1, t.controls = !1, t.removeAttribute("controls"), t.hasAttribute("autoplay") ? a.options_.autoplay = !0 : a.autoplay(a.options_.autoplay), a.scrubbing_ = !1, a.el_ = a.createEl(), a.cache_.lastPlaybackRate = a.defaultPlaybackRate(), Ht(a, {
                    eventBusKey: "el_"
                });
                var o = Gt(a.options_);
                if (e.plugins) {
                    var u = e.plugins;
                    Object.keys(u).forEach(function (t) {
                        if ("function" != typeof this[t]) throw new Error('plugin "' + t + '" does not exist');
                        this[t](u[t])
                    }, a)
                }
                a.options_.playerOptions = o, a.middleware_ = [], a.initChildren(), a.isAudio("audio" === t.nodeName.toLowerCase()), a.controls() ? a.addClass("vjs-controls-enabled") : a.addClass("vjs-controls-disabled"), a.el_.setAttribute("role", "region"), a.isAudio() ? a.el_.setAttribute("aria-label", a.localize("Audio Player")) : a.el_.setAttribute("aria-label", a.localize("Video Player")), a.isAudio() && a.addClass("vjs-audio"), a.flexNotSupported_() && a.addClass("vjs-no-flex"), re || a.addClass("vjs-workinghover"), d.players[a.id_] = a;
                var l = h.split(".")[0];
                return a.addClass("vjs-v" + l), a.userActive(!0), a.reportUserActivity(), a.one("play", a.listenForUserActivity_), a.on("fullscreenchange", a.handleFullscreenChange_), a.on("stageclick", a.handleStageClick_), a.changingSrc_ = !1, a.playWaitingForReady_ = !1, a.playOnLoadstart_ = null, a
            }
            return v(d, c), d.prototype.dispose = function () {
                this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), d.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), Cn[this.id()] = null, c.prototype.dispose.call(this)
            }, d.prototype.createEl = function () {
                var e = this.tag,
                    i = void 0,
                    t = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player"),
                    n = "video-js" === this.tag.tagName.toLowerCase();
                t ? i = this.el_ = e.parentNode : n || (i = this.el_ = c.prototype.createEl.call(this, "div"));
                var r = H(e);
                if (n) {
                    for (i = this.el_ = e, e = this.tag = p.createElement("video"); i.children.length;) e.appendChild(i.firstChild);
                    B(i, "video-js") || N(i, "video-js"), i.appendChild(e), t = this.playerElIngest_ = i, Object.keys(i).forEach(function (t) {
                        e[t] = i[t]
                    })
                }
                if (e.setAttribute("tabindex", "-1"), pe && e.setAttribute("role", "application"), e.removeAttribute("width"), e.removeAttribute("height"), Object.getOwnPropertyNames(r).forEach(function (t) {
                        n && "class" === t || i.setAttribute(t, r[t]), n && e.setAttribute(t, r[t])
                    }), e.playerId = e.id, e.id += "_html5_api", e.className = "vjs-tech", e.player = i.player = this, this.addClass("vjs-paused"), !0 !== g.VIDEOJS_NO_DYNAMIC_STYLE) {
                    this.styleEl_ = At("vjs-styles-dimensions");
                    var a = nt(".vjs-styles-defaults"),
                        s = nt("head");
                    s.insertBefore(this.styleEl_, a ? a.nextSibling : s.firstChild)
                }
                this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                for (var o = e.getElementsByTagName("a"), u = 0; u < o.length; u++) {
                    var l = o.item(u);
                    N(l, "vjs-hidden"), l.setAttribute("hidden", "hidden")
                }
                return e.initNetworkState_ = e.networkState, e.parentNode && !t && e.parentNode.insertBefore(i, e), M(e, i), this.children_.unshift(e), this.el_.setAttribute("lang", this.language_), this.el_ = i
            }, d.prototype.width = function (t) {
                return this.dimension("width", t)
            }, d.prototype.height = function (t) {
                return this.dimension("height", t)
            }, d.prototype.dimension = function (t, e) {
                var i = t + "_";
                if (void 0 === e) return this[i] || 0;
                if ("" === e) return this[i] = void 0, void this.updateStyleEl_();
                var n = parseFloat(e);
                isNaN(n) ? f.error('Improper value "' + e + '" supplied for for ' + t) : (this[i] = n, this.updateStyleEl_())
            }, d.prototype.fluid = function (t) {
                if (void 0 === t) return !!this.fluid_;
                this.fluid_ = !!t, t ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), this.updateStyleEl_()
            }, d.prototype.aspectRatio = function (t) {
                if (void 0 === t) return this.aspectRatio_;
                if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_()
            }, d.prototype.updateStyleEl_ = function () {
                if (!0 !== g.VIDEOJS_NO_DYNAMIC_STYLE) {
                    var t = void 0,
                        e = void 0,
                        i = void 0,
                        n = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : 0 < this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
                        r = n[1] / n[0];
                    t = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / r : this.videoWidth() || 300, e = void 0 !== this.height_ ? this.height_ : t * r, i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(i), Lt(this.styleEl_, "\n      ." + i + " {\n        width: " + t + "px;\n        height: " + e + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * r + "%;\n      }\n    ")
                } else {
                    var a = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                        s = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                        o = this.tech_ && this.tech_.el();
                    o && (0 <= a && (o.width = a), 0 <= s && (o.height = s))
                }
            }, d.prototype.loadTech_ = function (t, e) {
                var i = this;
                this.tech_ && this.unloadTech_();
                var n = Wt(t),
                    r = t.charAt(0).toLowerCase() + t.slice(1);
                "Html5" !== n && this.tag && (Sn.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = n, this.isReady_ = !1;
                var a = {
                    source: e,
                    autoplay: "string" != typeof this.autoplay() && this.autoplay(),
                    nativeControlsForTouch: this.options_.nativeControlsForTouch,
                    playerId: this.id(),
                    techId: this.id() + "_" + n + "_api",
                    playsinline: this.options_.playsinline,
                    preload: this.options_.preload,
                    loop: this.options_.loop,
                    muted: this.options_.muted,
                    poster: this.poster(),
                    language: this.language(),
                    playerElIngest: this.playerElIngest_ || !1,
                    "vtt.js": this.options_["vtt.js"],
                    canOverridePoster: !!this.options_.techCanOverridePoster,
                    enableSourceset: this.options_.enableSourceset
                };
                ji.names.forEach(function (t) {
                    var e = ji[t];
                    a[e.getterName] = i[e.privateName]
                }), k(a, this.options_[n]), k(a, this.options_[r]), k(a, this.options_[t.toLowerCase()]), this.tag && (a.tag = this.tag), e && e.src === this.cache_.src && 0 < this.cache_.currentTime && (a.startTime = this.cache_.currentTime);
                var s = Sn.getTech(t);
                if (!s) throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'");
                this.tech_ = new s(a), this.tech_.ready(Ot(this, this.handleTechReady_), !0), Me(this.textTracksJson_ || [], this.tech_), ma.forEach(function (t) {
                    i.on(i.tech_, t, i["handleTech" + Wt(t) + "_"])
                }), Object.keys(ga).forEach(function (e) {
                    i.on(i.tech_, e, function (t) {
                        0 === i.tech_.playbackRate() && i.tech_.seeking() ? i.queuedCallbacks_.push({
                            callback: i["handleTech" + ga[e] + "_"].bind(i),
                            event: t
                        }) : i["handleTech" + ga[e] + "_"](t)
                    })
                }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === n && this.tag || M(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
            }, d.prototype.unloadTech_ = function () {
                var i = this;
                ji.names.forEach(function (t) {
                    var e = ji[t];
                    i[e.privateName] = i[e.getterName]()
                }), this.textTracksJson_ = Re(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
            }, d.prototype.tech = function (t) {
                return void 0 === t && f.warn(m(fa)), this.tech_
            }, d.prototype.addTechControlsListeners_ = function () {
                this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "dblclick", this.handleTechDoubleClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
            }, d.prototype.removeTechControlsListeners_ = function () {
                this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_), this.off(this.tech_, "dblclick", this.handleTechDoubleClick_)
            }, d.prototype.handleTechReady_ = function () {
                this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_()
            }, d.prototype.handleTechLoadStart_ = function () {
                this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay())
            }, d.prototype.manualAutoplay_ = function (e) {
                var i = this;
                if (this.tech_ && "string" == typeof e) {
                    var t = function () {
                            var e = i.muted();
                            i.muted(!0);
                            var t = i.play();
                            if (t && t.then && t.catch) return t.catch(function (t) {
                                i.muted(e)
                            })
                        },
                        n = void 0;
                    if ("any" === e ? (n = this.play()) && n.then && n.catch && n.catch(function () {
                            return t()
                        }) : n = "muted" === e ? t() : this.play(), n && n.then && n.catch) return n.then(function () {
                        i.trigger({
                            type: "autoplay-success",
                            autoplay: e
                        })
                    }).catch(function (t) {
                        i.trigger({
                            type: "autoplay-failure",
                            autoplay: e
                        })
                    })
                }
            }, d.prototype.updateSourceCaches_ = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                    e = t,
                    i = "";
                if ("string" != typeof e && (e = t.src, i = t.type), !/^blob:/.test(e)) {
                    this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], e && !i && (i = function (t, e) {
                        if (!e) return "";
                        if (t.cache_.source.src === e && t.cache_.source.type) return t.cache_.source.type;
                        var i = t.cache_.sources.filter(function (t) {
                            return t.src === e
                        });
                        if (i.length) return i[0].type;
                        for (var n = t.$$("source"), r = 0; r < n.length; r++) {
                            var a = n[r];
                            if (a.type && a.src && a.src === e) return a.type
                        }
                        return In(e)
                    }(this, e)), this.cache_.source = Gt({}, t, {
                        src: e,
                        type: i
                    });
                    for (var n = this.cache_.sources.filter(function (t) {
                            return t.src && t.src === e
                        }), r = [], a = this.$$("source"), s = [], o = 0; o < a.length; o++) {
                        var u = H(a[o]);
                        r.push(u), u.src && u.src === e && s.push(u.src)
                    }
                    s.length && !n.length ? this.cache_.sources = r : n.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = e
                }
            }, d.prototype.handleTechSourceset_ = function (t) {
                var i = this;
                if (!this.changingSrc_ && (this.updateSourceCaches_(t.src), !t.src)) {
                    this.tech_.one(["sourceset", "loadstart"], function t(e) {
                        "sourceset" !== e.type && i.updateSourceCaches_(i.techGet_("currentSrc")), i.tech_.off(["sourceset", "loadstart"], t)
                    })
                }
                this.trigger({
                    src: t.src,
                    type: "sourceset"
                })
            }, d.prototype.hasStarted = function (t) {
                if (void 0 === t) return this.hasStarted_;
                t !== this.hasStarted_ && (this.hasStarted_ = t, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
            }, d.prototype.handleTechPlay_ = function () {
                this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
            }, d.prototype.handleTechRateChange_ = function () {
                0 < this.tech_.playbackRate() && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function (t) {
                    return t.callback(t.event)
                }), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
            }, d.prototype.handleTechWaiting_ = function () {
                var t = this;
                this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function () {
                    return t.removeClass("vjs-waiting")
                })
            }, d.prototype.handleTechCanPlay_ = function () {
                this.removeClass("vjs-waiting"), this.trigger("canplay")
            }, d.prototype.handleTechCanPlayThrough_ = function () {
                this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
            }, d.prototype.handleTechPlaying_ = function () {
                this.removeClass("vjs-waiting"), this.trigger("playing")
            }, d.prototype.handleTechSeeking_ = function () {
                this.addClass("vjs-seeking"), this.trigger("seeking")
            }, d.prototype.handleTechSeeked_ = function () {
                this.removeClass("vjs-seeking"), this.trigger("seeked")
            }, d.prototype.handleTechFirstPlay_ = function () {
                this.options_.starttime && (f.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
            }, d.prototype.handleTechPause_ = function () {
                this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
            }, d.prototype.handleTechEnded_ = function () {
                this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
            }, d.prototype.handleTechDurationChange_ = function () {
                this.duration(this.techGet_("duration"))
            }, d.prototype.handleTechClick_ = function (t) {
                it(t) && this.controls_ && (this.paused() ? Ie(this.play()) : this.pause())
            }, d.prototype.handleTechDoubleClick_ = function (e) {
                this.controls_ && (Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), function (t) {
                    return t.contains(e.target)
                }) || (this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()))
            }, d.prototype.handleTechTap_ = function () {
                this.userActive(!this.userActive())
            }, d.prototype.handleTechTouchStart_ = function () {
                this.userWasActive = this.userActive()
            }, d.prototype.handleTechTouchMove_ = function () {
                this.userWasActive && this.reportUserActivity()
            }, d.prototype.handleTechTouchEnd_ = function (t) {
                t.preventDefault()
            }, d.prototype.handleFullscreenChange_ = function () {
                this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
            }, d.prototype.handleStageClick_ = function () {
                this.reportUserActivity()
            }, d.prototype.handleTechFullscreenChange_ = function (t, e) {
                e && this.isFullscreen(e.isFullscreen), this.trigger("fullscreenchange")
            }, d.prototype.handleTechError_ = function () {
                var t = this.tech_.error();
                this.error(t)
            }, d.prototype.handleTechTextData_ = function () {
                var t = null;
                1 < arguments.length && (t = arguments[1]), this.trigger("textdata", t)
            }, d.prototype.getCache = function () {
                return this.cache_
            }, d.prototype.techCall_ = function (r, a) {
                this.ready(function () {
                    if (r in On) return t = this.middleware_, e = this.tech_, n = a, e[i = r](t.reduce(Un(i), n));
                    if (r in Pn) return An(this.middleware_, this.tech_, r, a);
                    var t, e, i, n;
                    try {
                        this.tech_ && this.tech_[r](a)
                    } catch (t) {
                        throw f(t), t
                    }
                }, !0)
            }, d.prototype.techGet_ = function (e) {
                if (this.tech_ && this.tech_.isReady_) {
                    if (e in Ln) return t = this.middleware_, i = this.tech_, n = e, t.reduceRight(Un(n), i[n]());
                    if (e in Pn) return An(this.middleware_, this.tech_, e);
                    var t, i, n;
                    try {
                        return this.tech_[e]()
                    } catch (t) {
                        if (void 0 === this.tech_[e]) throw f("Video.js: " + e + " method not defined for " + this.techName_ + " playback technology.", t), t;
                        if ("TypeError" === t.name) throw f("Video.js: " + e + " unavailable on " + this.techName_ + " playback technology element.", t), this.tech_.isReady_ = !1, t;
                        throw f(t), t
                    }
                }
            }, d.prototype.play = function () {
                var e = this,
                    t = this.options_.Promise || g.Promise;
                return t ? new t(function (t) {
                    e.play_(t)
                }) : this.play_()
            }, d.prototype.play_ = function () {
                var t = this,
                    e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ie;
                if (this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_), this.isReady_) {
                    if (!this.changingSrc_ && (this.src() || this.currentSrc())) return void e(this.techGet_("play"));
                    this.playOnLoadstart_ = function () {
                        t.playOnLoadstart_ = null, e(t.play())
                    }, this.one("loadstart", this.playOnLoadstart_)
                } else {
                    if (this.playWaitingForReady_) return;
                    this.playWaitingForReady_ = !0, this.ready(function () {
                        t.playWaitingForReady_ = !1, e(t.play())
                    })
                }
            }, d.prototype.pause = function () {
                this.techCall_("pause")
            }, d.prototype.paused = function () {
                return !1 !== this.techGet_("paused")
            }, d.prototype.played = function () {
                return this.techGet_("played") || be(0, 0)
            }, d.prototype.scrubbing = function (t) {
                if ("undefined" == typeof t) return this.scrubbing_;
                this.scrubbing_ = !!t, t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
            }, d.prototype.currentTime = function (t) {
                return "undefined" != typeof t ? (t < 0 && (t = 0), void this.techCall_("setCurrentTime", t)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
            }, d.prototype.duration = function (t) {
                if (void 0 === t) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
                (t = parseFloat(t)) < 0 && (t = 1 / 0), t !== this.cache_.duration && ((this.cache_.duration = t) === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange"))
            }, d.prototype.remainingTime = function () {
                return this.duration() - this.currentTime()
            }, d.prototype.remainingTimeDisplay = function () {
                return Math.floor(this.duration()) - Math.floor(this.currentTime())
            }, d.prototype.buffered = function () {
                var t = this.techGet_("buffered");
                return t && t.length || (t = be(0, 0)), t
            }, d.prototype.bufferedPercent = function () {
                return Te(this.buffered(), this.duration())
            }, d.prototype.bufferedEnd = function () {
                var t = this.buffered(),
                    e = this.duration(),
                    i = t.end(t.length - 1);
                return e < i && (i = e), i
            }, d.prototype.volume = function (t) {
                var e = void 0;
                return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall_("setVolume", e), void(0 < e && this.lastVolume_(e))) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e)
            }, d.prototype.muted = function (t) {
                if (void 0 === t) return this.techGet_("muted") || !1;
                this.techCall_("setMuted", t)
            }, d.prototype.defaultMuted = function (t) {
                return void 0 !== t ? this.techCall_("setDefaultMuted", t) : this.techGet_("defaultMuted") || !1
            }, d.prototype.lastVolume_ = function (t) {
                if (void 0 === t || 0 === t) return this.cache_.lastVolume;
                this.cache_.lastVolume = t
            }, d.prototype.supportsFullScreen = function () {
                return this.techGet_("supportsFullScreen") || !1
            }, d.prototype.isFullscreen = function (t) {
                if (void 0 === t) return !!this.isFullscreen_;
                this.isFullscreen_ = !!t
            }, d.prototype.requestFullscreen = function () {
                var i = Se;
                this.isFullscreen(!0), i.requestFullscreen ? (vt(p, i.fullscreenchange, Ot(this, function t(e) {
                    this.isFullscreen(p[i.fullscreenElement]), !1 === this.isFullscreen() && _t(p, i.fullscreenchange, t), this.trigger("fullscreenchange")
                })), this.el_[i.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
            }, d.prototype.exitFullscreen = function () {
                var t = Se;
                this.isFullscreen(!1), t.requestFullscreen ? p[t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
            }, d.prototype.enterFullWindow = function () {
                this.isFullWindow = !0, this.docOrigOverflow = p.documentElement.style.overflow, vt(p, "keydown", Ot(this, this.fullWindowOnEscKey)), p.documentElement.style.overflow = "hidden", N(p.body, "vjs-full-window"), this.trigger("enterFullWindow")
            }, d.prototype.fullWindowOnEscKey = function (t) {
                27 === t.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
            }, d.prototype.exitFullWindow = function () {
                this.isFullWindow = !1, _t(p, "keydown", this.fullWindowOnEscKey), p.documentElement.style.overflow = this.docOrigOverflow, j(p.body, "vjs-full-window"), this.trigger("exitFullWindow")
            }, d.prototype.canPlayType = function (t) {
                for (var e = void 0, i = 0, n = this.options_.techOrder; i < n.length; i++) {
                    var r = n[i],
                        a = Sn.getTech(r);
                    if (a || (a = Xt.getComponent(r)), a) {
                        if (a.isSupported() && (e = a.canPlayType(t))) return e
                    } else f.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
                }
                return ""
            }, d.prototype.selectSource = function (t) {
                var i, n = this,
                    e = this.options_.techOrder.map(function (t) {
                        return [t, Sn.getTech(t)]
                    }).filter(function (t) {
                        var e = t[0],
                            i = t[1];
                        return i ? i.isSupported() : (f.error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                    }),
                    r = function (t, i, n) {
                        var r = void 0;
                        return t.some(function (e) {
                            return i.some(function (t) {
                                if (r = n(e, t)) return !0
                            })
                        }), r
                    },
                    a = function (t, e) {
                        var i = t[0];
                        if (t[1].canPlaySource(e, n.options_[i.toLowerCase()])) return {
                            source: e,
                            tech: i
                        }
                    };
                return (this.options_.sourceOrder ? r(t, e, (i = a, function (t, e) {
                    return i(e, t)
                })) : r(e, t, a)) || !1
            }, d.prototype.src = function (t) {
                var r = this;
                if ("undefined" == typeof t) return this.cache_.src || "";
                var a = function e(t) {
                    if (Array.isArray(t)) {
                        var i = [];
                        t.forEach(function (t) {
                            t = e(t), Array.isArray(t) ? i = i.concat(t) : C(t) && i.push(t)
                        }), t = i
                    } else t = "string" == typeof t && t.trim() ? [Dn({
                        src: t
                    })] : C(t) && "string" == typeof t.src && t.src && t.src.trim() ? [Dn(t)] : [];
                    return t
                }(t);
                a.length ? (this.changingSrc_ = !0, this.cache_.sources = a, this.updateSourceCaches_(a[0]), En(this, a[0], function (t, e) {
                    var i, n;
                    if (r.middleware_ = e, r.cache_.sources = a, r.updateSourceCaches_(t), r.src_(t)) return 1 < a.length ? r.src(a.slice(1)) : (r.changingSrc_ = !1, r.setTimeout(function () {
                        this.error({
                            code: 4,
                            message: this.localize(this.options_.notSupportedMessage)
                        })
                    }, 0), void r.triggerReady());
                    i = e, n = r.tech_, i.forEach(function (t) {
                        return t.setTech && t.setTech(n)
                    })
                })) : this.setTimeout(function () {
                    this.error({
                        code: 4,
                        message: this.localize(this.options_.notSupportedMessage)
                    })
                }, 0)
            }, d.prototype.src_ = function (t) {
                var e, i, n = this,
                    r = this.selectSource([t]);
                return !r || (e = r.tech, i = this.techName_, Wt(e) !== Wt(i) ? (this.changingSrc_ = !0, this.loadTech_(r.tech, r.source), this.tech_.ready(function () {
                    n.changingSrc_ = !1
                })) : this.ready(function () {
                    this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), this.changingSrc_ = !1
                }, !0), !1)
            }, d.prototype.load = function () {
                this.techCall_("load")
            }, d.prototype.reset = function () {
                this.tech_ && this.tech_.clearTracks("text"), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset")
            }, d.prototype.currentSources = function () {
                var t = this.currentSource(),
                    e = [];
                return 0 !== Object.keys(t).length && e.push(t), this.cache_.sources || e
            }, d.prototype.currentSource = function () {
                return this.cache_.source || {}
            }, d.prototype.currentSrc = function () {
                return this.currentSource() && this.currentSource().src || ""
            }, d.prototype.currentType = function () {
                return this.currentSource() && this.currentSource().type || ""
            }, d.prototype.preload = function (t) {
                return void 0 !== t ? (this.techCall_("setPreload", t), void(this.options_.preload = t)) : this.techGet_("preload")
            }, d.prototype.autoplay = function (t) {
                if (void 0 === t) return this.options_.autoplay || !1;
                var e = void 0;
                "string" == typeof t && /(any|play|muted)/.test(t) ? (this.options_.autoplay = t, this.manualAutoplay_(t), e = !1) : this.options_.autoplay = !!t, e = e || this.options_.autoplay, this.tech_ && this.techCall_("setAutoplay", e)
            }, d.prototype.playsinline = function (t) {
                return void 0 !== t ? (this.techCall_("setPlaysinline", t), this.options_.playsinline = t, this) : this.techGet_("playsinline")
            }, d.prototype.loop = function (t) {
                return void 0 !== t ? (this.techCall_("setLoop", t), void(this.options_.loop = t)) : this.techGet_("loop")
            }, d.prototype.poster = function (t) {
                if (void 0 === t) return this.poster_;
                t || (t = ""), t !== this.poster_ && (this.poster_ = t, this.techCall_("setPoster", t), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
            }, d.prototype.handleTechPosterChange_ = function () {
                if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                    var t = this.tech_.poster() || "";
                    t !== this.poster_ && (this.poster_ = t, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
                }
            }, d.prototype.controls = function (t) {
                if (void 0 === t) return !!this.controls_;
                t = !!t, this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
            }, d.prototype.usingNativeControls = function (t) {
                if (void 0 === t) return !!this.usingNativeControls_;
                t = !!t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
            }, d.prototype.error = function (t) {
                return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t, this.removeClass("vjs-error"), void(this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new Oe(t), this.addClass("vjs-error"), f.error("(CODE:" + this.error_.code + " " + Oe.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error"))
            }, d.prototype.reportUserActivity = function (t) {
                this.userActivity_ = !0
            }, d.prototype.userActive = function (t) {
                if (void 0 === t) return this.userActive_;
                if ((t = !!t) !== this.userActive_) {
                    if (this.userActive_ = t, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
                    this.tech_ && this.tech_.one("mousemove", function (t) {
                        t.stopPropagation(), t.preventDefault()
                    }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
                }
            }, d.prototype.listenForUserActivity_ = function () {
                var e = void 0,
                    i = void 0,
                    n = void 0,
                    r = Ot(this, this.reportUserActivity);
                this.on("mousedown", function () {
                    r(), this.clearInterval(e), e = this.setInterval(r, 250)
                }), this.on("mousemove", function (t) {
                    t.screenX === i && t.screenY === n || (i = t.screenX, n = t.screenY, r())
                }), this.on("mouseup", function (t) {
                    r(), this.clearInterval(e)
                }), this.on("keydown", r), this.on("keyup", r);
                var a = void 0;
                this.setInterval(function () {
                    if (this.userActivity_) {
                        this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(a);
                        var t = this.options_.inactivityTimeout;
                        t <= 0 || (a = this.setTimeout(function () {
                            this.userActivity_ || this.userActive(!1)
                        }, t))
                    }
                }, 250)
            }, d.prototype.playbackRate = function (t) {
                if (void 0 === t) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
                this.techCall_("setPlaybackRate", t)
            }, d.prototype.defaultPlaybackRate = function (t) {
                return void 0 !== t ? this.techCall_("setDefaultPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
            }, d.prototype.isAudio = function (t) {
                if (void 0 === t) return !!this.isAudio_;
                this.isAudio_ = !!t
            }, d.prototype.addTextTrack = function (t, e, i) {
                if (this.tech_) return this.tech_.addTextTrack(t, e, i)
            }, d.prototype.addRemoteTextTrack = function (t, e) {
                if (this.tech_) return this.tech_.addRemoteTextTrack(t, e)
            }, d.prototype.removeRemoteTextTrack = function () {
                var t = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).track,
                    e = void 0 === t ? arguments[0] : t;
                if (this.tech_) return this.tech_.removeRemoteTextTrack(e)
            }, d.prototype.getVideoPlaybackQuality = function () {
                return this.techGet_("getVideoPlaybackQuality")
            }, d.prototype.videoWidth = function () {
                return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
            }, d.prototype.videoHeight = function () {
                return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
            }, d.prototype.language = function (t) {
                if (void 0 === t) return this.language_;
                this.language_ = String(t).toLowerCase()
            }, d.prototype.languages = function () {
                return Gt(d.prototype.options_.languages, this.languages_)
            }, d.prototype.toJSON = function () {
                var t = Gt(this.options_),
                    e = t.tracks;
                t.tracks = [];
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n = Gt(n)).player = void 0, t.tracks[i] = n
                }
                return t
            }, d.prototype.createModal = function (t, e) {
                var i = this;
                (e = e || {}).content = t || "";
                var n = new Ne(this, e);
                return this.addChild(n), n.on("dispose", function () {
                    i.removeChild(n)
                }), n.open(), n
            }, d.getTagSettings = function (t) {
                var e = {
                        sources: [],
                        tracks: []
                    },
                    i = H(t),
                    n = i["data-setup"];
                if (B(t, "vjs-fluid") && (i.fluid = !0), null !== n) {
                    var r = Ue(n || "{}"),
                        a = r[0],
                        s = r[1];
                    a && f.error(a), k(i, s)
                }
                if (k(e, i), t.hasChildNodes())
                    for (var o = t.childNodes, u = 0, l = o.length; u < l; u++) {
                        var c = o[u],
                            d = c.nodeName.toLowerCase();
                        "source" === d ? e.sources.push(H(c)) : "track" === d && e.tracks.push(H(c))
                    }
                return e
            }, d.prototype.flexNotSupported_ = function () {
                var t = p.createElement("i");
                return !("flexBasis" in t.style || "webkitFlexBasis" in t.style || "mozFlexBasis" in t.style || "msFlexBasis" in t.style || "msFlexOrder" in t.style)
            }, d
        }(Xt);
    ji.names.forEach(function (t) {
        var e = ji[t];
        ya.prototype[e.getterName] = function () {
            return this.tech_ ? this.tech_[e.getterName]() : (this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName])
        }
    }), ya.players = {};
    var va = g.navigator;
    ya.prototype.options_ = {
        techOrder: Sn.defaultTechOrder_,
        html5: {},
        flash: {},
        inactivityTimeout: 2e3,
        playbackRates: [],
        children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
        language: va && (va.languages && va.languages[0] || va.userLanguage || va.language) || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this media."
    }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (t) {
        ya.prototype[t] = function () {
            return this.techGet_(t)
        }
    }), ma.forEach(function (t) {
        ya.prototype["handleTech" + Wt(t) + "_"] = function () {
            return this.trigger(t)
        }
    }), Xt.registerComponent("Player", ya);
    var _a = "plugin",
        ba = "activePlugins_",
        Ta = {},
        Sa = function (t) {
            return Ta.hasOwnProperty(t)
        },
        ka = function (t) {
            return Sa(t) ? Ta[t] : void 0
        },
        Ca = function (t, e) {
            t[ba] = t[ba] || {}, t[ba][e] = !0
        },
        wa = function (t, e, i) {
            var n = (i ? "before" : "") + "pluginsetup";
            t.trigger(n, e), t.trigger(n + ":" + e.name, e)
        },
        Ea = function (r, a) {
            return a.prototype.name = r,
                function () {
                    wa(this, {
                        name: r,
                        plugin: a,
                        instance: null
                    }, !0);
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    var n = new(Function.prototype.bind.apply(a, [null].concat([this].concat(e))));
                    return this[r] = function () {
                        return n
                    }, wa(this, n.getEventHash()), n
                }
        },
        Aa = function () {
            function a(t) {
                if (y(this, a), this.constructor === a) throw new Error("Plugin must be sub-classed; not directly instantiated.");
                this.player = t, Ht(this), delete this.trigger, qt(this, this.constructor.defaultState), Ca(t, this.name), this.dispose = Ot(this, this.dispose), t.on("dispose", this.dispose)
            }
            return a.prototype.version = function () {
                return this.constructor.VERSION
            }, a.prototype.getEventHash = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return t.name = this.name, t.plugin = this.constructor, t.instance = this, t
            }, a.prototype.trigger = function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return bt(this.eventBusEl_, t, this.getEventHash(e))
            }, a.prototype.handleStateChanged = function (t) {}, a.prototype.dispose = function () {
                var t = this.name,
                    e = this.player;
                this.trigger("dispose"), this.off(), e.off("dispose", this.dispose), e[ba][t] = !1, this.player = this.state = null, e[t] = Ea(t, Ta[t])
            }, a.isBasic = function (t) {
                var e = "string" == typeof t ? ka(t) : t;
                return "function" == typeof e && !a.prototype.isPrototypeOf(e.prototype)
            }, a.registerPlugin = function (t, e) {
                if ("string" != typeof t) throw new Error('Illegal plugin name, "' + t + '", must be a string, was ' + ("undefined" == typeof t ? "undefined" : Ee(t)) + ".");
                if (Sa(t)) f.warn('A plugin named "' + t + '" already exists. You may want to avoid re-registering plugins!');
                else if (ya.prototype.hasOwnProperty(t)) throw new Error('Illegal plugin name, "' + t + '", cannot share a name with an existing player method!');
                if ("function" != typeof e) throw new Error('Illegal plugin for "' + t + '", must be a function, was ' + ("undefined" == typeof e ? "undefined" : Ee(e)) + ".");
                var i, n, r;
                return Ta[t] = e, t !== _a && (a.isBasic(e) ? ya.prototype[t] = (i = t, n = e, r = function () {
                    wa(this, {
                        name: i,
                        plugin: n,
                        instance: null
                    }, !0);
                    var t = n.apply(this, arguments);
                    return Ca(this, i), wa(this, {
                        name: i,
                        plugin: n,
                        instance: t
                    }), t
                }, Object.keys(n).forEach(function (t) {
                    r[t] = n[t]
                }), r) : ya.prototype[t] = Ea(t, e)), e
            }, a.deregisterPlugin = function (t) {
                if (t === _a) throw new Error("Cannot de-register base plugin.");
                Sa(t) && (delete Ta[t], delete ya.prototype[t])
            }, a.getPlugins = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Object.keys(Ta),
                    i = void 0;
                return t.forEach(function (t) {
                    var e = ka(t);
                    e && ((i = i || {})[t] = e)
                }), i
            }, a.getPluginVersion = function (t) {
                var e = ka(t);
                return e && e.VERSION || ""
            }, a
        }();
    Aa.getPlugin = ka, Aa.BASE_PLUGIN_NAME = _a, Aa.registerPlugin(_a, Aa), ya.prototype.usingPlugin = function (t) {
        return !!this[ba] && !0 === this[ba][t]
    }, ya.prototype.hasPlugin = function (t) {
        return !!Sa(t)
    };
    var La = function (t) {
        return 0 === t.indexOf("#") ? t.slice(1) : t
    };

    function Oa(t, i, e) {
        var n = Oa.getPlayer(t);
        if (n) return i && f.warn('Player "' + t + '" is already initialised. Options will not be applied.'), e && n.ready(e), n;
        var r = "string" == typeof t ? nt("#" + La(t)) : t;
        if (!U(r)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        p.body.contains(r) || f.warn("The element supplied is not included in the DOM"), i = i || {}, Oa.hooks("beforesetup").forEach(function (t) {
            var e = t(r, Gt(i));
            C(e) && !Array.isArray(e) ? i = Gt(i, e) : f.error("please return an object in beforesetup hooks")
        });
        var a = Xt.getComponent("Player");
        return n = new a(r, i, e), Oa.hooks("setup").forEach(function (t) {
            return t(n)
        }), n
    }
    if (Oa.hooks_ = {}, Oa.hooks = function (t, e) {
            return Oa.hooks_[t] = Oa.hooks_[t] || [], e && (Oa.hooks_[t] = Oa.hooks_[t].concat(e)), Oa.hooks_[t]
        }, Oa.hook = function (t, e) {
            Oa.hooks(t, e)
        }, Oa.hookOnce = function (i, t) {
            Oa.hooks(i, [].concat(t).map(function (e) {
                return function t() {
                    return Oa.removeHook(i, t), e.apply(void 0, arguments)
                }
            }))
        }, Oa.removeHook = function (t, e) {
            var i = Oa.hooks(t).indexOf(e);
            return !(i <= -1) && (Oa.hooks_[t] = Oa.hooks_[t].slice(), Oa.hooks_[t].splice(i, 1), !0)
        }, !0 !== g.VIDEOJS_NO_DYNAMIC_STYLE && P()) {
        var Pa = nt(".vjs-styles-defaults");
        if (!Pa) {
            Pa = At("vjs-styles-defaults");
            var Ua = nt("head");
            Ua && Ua.insertBefore(Pa, Ua.firstChild), Lt(Pa, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
        }
    }
    Et(1, Oa), Oa.VERSION = h, Oa.options = ya.prototype.options_, Oa.getPlayers = function () {
        return ya.players
    }, Oa.getPlayer = function (t) {
        var e = ya.players,
            i = void 0;
        if ("string" == typeof t) {
            var n = La(t),
                r = e[n];
            if (r) return r;
            i = nt("#" + n)
        } else i = t;
        if (U(i)) {
            var a = i,
                s = a.player,
                o = a.playerId;
            if (s || e[o]) return s || e[o]
        }
    }, Oa.getAllPlayers = function () {
        return Object.keys(ya.players).map(function (t) {
            return ya.players[t]
        }).filter(Boolean)
    }, Oa.players = ya.players, Oa.getComponent = Xt.getComponent, Oa.registerComponent = function (t, e) {
        Sn.isTech(e) && f.warn("The " + t + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), Xt.registerComponent.call(Xt, t, e)
    }, Oa.getTech = Sn.getTech, Oa.registerTech = Sn.registerTech, Oa.use = function (t, e) {
        kn[t] = kn[t] || [], kn[t].push(e)
    }, Object.defineProperty(Oa, "middleware", {
        value: {},
        writeable: !1,
        enumerable: !0
    }), Object.defineProperty(Oa.middleware, "TERMINATOR", {
        value: wn,
        writeable: !1,
        enumerable: !0
    }), Oa.browser = ye, Oa.TOUCH_ENABLED = ge, Oa.extend = function (t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            i = function () {
                t.apply(this, arguments)
            },
            n = {};
        for (var r in "object" === ("undefined" == typeof e ? "undefined" : Ee(e)) ? (e.constructor !== Object.prototype.constructor && (i = e.constructor), n = e) : "function" == typeof e && (i = e),
                function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : Ee(e)));
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (t.super_ = e)
                }(i, t), n) n.hasOwnProperty(r) && (i.prototype[r] = n[r]);
        return i
    }, Oa.mergeOptions = Gt, Oa.bind = Ot, Oa.registerPlugin = Aa.registerPlugin, Oa.deregisterPlugin = Aa.deregisterPlugin, Oa.plugin = function (t, e) {
        return f.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), Aa.registerPlugin(t, e)
    }, Oa.getPlugins = Aa.getPlugins, Oa.getPlugin = Aa.getPlugin, Oa.getPluginVersion = Aa.getPluginVersion, Oa.addLanguage = function (t, e) {
        var i;
        return t = ("" + t).toLowerCase(), Oa.options.languages = Gt(Oa.options.languages, ((i = {})[t] = e, i)), Oa.options.languages[t]
    }, Oa.log = f, Oa.createTimeRange = Oa.createTimeRanges = be, Oa.formatTime = Kn, Oa.setFormatTime = function (t) {
        $n = t
    }, Oa.resetFormatTime = function () {
        $n = Yn
    }, Oa.parseUrl = Ze, Oa.isCrossOrigin = ii, Oa.EventTarget = xt, Oa.on = vt, Oa.one = Tt, Oa.off = _t, Oa.trigger = bt, Oa.xhr = wi, Oa.TextTrack = Ui, Oa.AudioTrack = xi, Oa.VideoTrack = Ii, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function (t) {
        Oa[t] = function () {
            return f.warn("videojs." + t + "() is deprecated; use videojs.dom." + t + "() instead"), at[t].apply(null, arguments)
        }
    }), Oa.computedStyle = E, Oa.dom = at, Oa.url = ni;
    var xa = e(function (t, e) {
            var i, c, n, r, d;
            i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, c = /^([^\/;?#]*)(.*)$/, n = /(?:\/|^)\.(?=\/)/g, r = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, d = {
                buildAbsoluteURL: function (t, e, i) {
                    if (i = i || {}, t = t.trim(), !(e = e.trim())) {
                        if (!i.alwaysNormalize) return t;
                        var n = d.parseURL(t);
                        if (!n) throw new Error("Error trying to parse base URL.");
                        return n.path = d.normalizePath(n.path), d.buildURLFromParts(n)
                    }
                    var r = d.parseURL(e);
                    if (!r) throw new Error("Error trying to parse relative URL.");
                    if (r.scheme) return i.alwaysNormalize ? (r.path = d.normalizePath(r.path), d.buildURLFromParts(r)) : e;
                    var a = d.parseURL(t);
                    if (!a) throw new Error("Error trying to parse base URL.");
                    if (!a.netLoc && a.path && "/" !== a.path[0]) {
                        var s = c.exec(a.path);
                        a.netLoc = s[1], a.path = s[2]
                    }
                    a.netLoc && !a.path && (a.path = "/");
                    var o = {
                        scheme: a.scheme,
                        netLoc: r.netLoc,
                        path: null,
                        params: r.params,
                        query: r.query,
                        fragment: r.fragment
                    };
                    if (!r.netLoc && (o.netLoc = a.netLoc, "/" !== r.path[0]))
                        if (r.path) {
                            var u = a.path,
                                l = u.substring(0, u.lastIndexOf("/") + 1) + r.path;
                            o.path = d.normalizePath(l)
                        } else o.path = a.path, r.params || (o.params = a.params, r.query || (o.query = a.query));
                    return null === o.path && (o.path = i.alwaysNormalize ? d.normalizePath(r.path) : r.path), d.buildURLFromParts(o)
                },
                parseURL: function (t) {
                    var e = i.exec(t);
                    return e ? {
                        scheme: e[1] || "",
                        netLoc: e[2] || "",
                        path: e[3] || "",
                        params: e[4] || "",
                        query: e[5] || "",
                        fragment: e[6] || ""
                    } : null
                },
                normalizePath: function (t) {
                    for (t = t.split("").reverse().join("").replace(n, ""); t.length !== (t = t.replace(r, "")).length;);
                    return t.split("").reverse().join("")
                },
                buildURLFromParts: function (t) {
                    return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                }
            }, t.exports = d
        }),
        Ia = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        Da = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        },
        Ra = function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : Ee(e)));
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        },
        Ma = function (t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== ("undefined" == typeof e ? "undefined" : Ee(e)) && "function" != typeof e ? t : e
        },
        Ba = function () {
            function t() {
                Ia(this, t), this.listeners = {}
            }
            return t.prototype.on = function (t, e) {
                this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
            }, t.prototype.off = function (t, e) {
                if (!this.listeners[t]) return !1;
                var i = this.listeners[t].indexOf(e);
                return this.listeners[t].splice(i, 1), -1 < i
            }, t.prototype.trigger = function (t) {
                var e = this.listeners[t],
                    i = void 0,
                    n = void 0,
                    r = void 0;
                if (e)
                    if (2 === arguments.length)
                        for (n = e.length, i = 0; i < n; ++i) e[i].call(this, arguments[1]);
                    else
                        for (r = Array.prototype.slice.call(arguments, 1), n = e.length, i = 0; i < n; ++i) e[i].apply(this, r)
            }, t.prototype.dispose = function () {
                this.listeners = {}
            }, t.prototype.pipe = function (e) {
                this.on("data", function (t) {
                    e.push(t)
                })
            }, t
        }(),
        Na = function (e) {
            function i() {
                Ia(this, i);
                var t = Ma(this, e.call(this));
                return t.buffer = "", t
            }
            return Ra(i, e), i.prototype.push = function (t) {
                var e = void 0;
                for (this.buffer += t, e = this.buffer.indexOf("\n"); - 1 < e; e = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, e)), this.buffer = this.buffer.substring(e + 1)
            }, i
        }(Ba),
        ja = function (t) {
            for (var e = t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), i = {}, n = e.length, r = void 0; n--;) "" !== e[n] && ((r = /([^=]*)=(.*)/.exec(e[n]).slice(1))[0] = r[0].replace(/^\s+|\s+$/g, ""), r[1] = r[1].replace(/^\s+|\s+$/g, ""), r[1] = r[1].replace(/^['"](.*)['"]$/g, "$1"), i[r[0]] = r[1]);
            return i
        },
        Fa = function (e) {
            function i() {
                Ia(this, i);
                var t = Ma(this, e.call(this));
                return t.customParsers = [], t
            }
            return Ra(i, e), i.prototype.push = function (t) {
                var e = void 0,
                    i = void 0;
                if (0 !== (t = t.replace(/^[\u0000\s]+|[\u0000\s]+$/g, "")).length)
                    if ("#" === t[0]) {
                        for (var n = 0; n < this.customParsers.length; n++)
                            if (this.customParsers[n].call(this, t)) return;
                        if (0 === t.indexOf("#EXT"))
                            if (t = t.replace("\r", ""), e = /^#EXTM3U/.exec(t)) this.trigger("data", {
                                type: "tag",
                                tagType: "m3u"
                            });
                            else {
                                if (e = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "inf"
                                }, e[1] && (i.duration = parseFloat(e[1])), e[2] && (i.title = e[2]), void this.trigger("data", i);
                                if (e = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "targetduration"
                                }, e[1] && (i.duration = parseInt(e[1], 10)), void this.trigger("data", i);
                                if (e = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "totalduration"
                                }, e[1] && (i.duration = parseInt(e[1], 10)), void this.trigger("data", i);
                                if (e = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "version"
                                }, e[1] && (i.version = parseInt(e[1], 10)), void this.trigger("data", i);
                                if (e = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "media-sequence"
                                }, e[1] && (i.number = parseInt(e[1], 10)), void this.trigger("data", i);
                                if (e = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "discontinuity-sequence"
                                }, e[1] && (i.number = parseInt(e[1], 10)), void this.trigger("data", i);
                                if (e = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "playlist-type"
                                }, e[1] && (i.playlistType = e[1]), void this.trigger("data", i);
                                if (e = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "byterange"
                                }, e[1] && (i.length = parseInt(e[1], 10)), e[2] && (i.offset = parseInt(e[2], 10)), void this.trigger("data", i);
                                if (e = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "allow-cache"
                                }, e[1] && (i.allowed = !/NO/.test(e[1])), void this.trigger("data", i);
                                if (e = /^#EXT-X-MAP:?(.*)$/.exec(t)) {
                                    if (i = {
                                            type: "tag",
                                            tagType: "map"
                                        }, e[1]) {
                                        var r = ja(e[1]);
                                        if (r.URI && (i.uri = r.URI), r.BYTERANGE) {
                                            var a = r.BYTERANGE.split("@"),
                                                s = a[0],
                                                o = a[1];
                                            i.byterange = {}, s && (i.byterange.length = parseInt(s, 10)), o && (i.byterange.offset = parseInt(o, 10))
                                        }
                                    }
                                    this.trigger("data", i)
                                } else if (e = /^#EXT-X-STREAM-INF:?(.*)$/.exec(t)) {
                                    if (i = {
                                            type: "tag",
                                            tagType: "stream-inf"
                                        }, e[1]) {
                                        if (i.attributes = ja(e[1]), i.attributes.RESOLUTION) {
                                            var u = i.attributes.RESOLUTION.split("x"),
                                                l = {};
                                            u[0] && (l.width = parseInt(u[0], 10)), u[1] && (l.height = parseInt(u[1], 10)), i.attributes.RESOLUTION = l
                                        }
                                        i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)), i.attributes["PROGRAM-ID"] && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10))
                                    }
                                    this.trigger("data", i)
                                } else {
                                    if (e = /^#EXT-X-MEDIA:?(.*)$/.exec(t)) return i = {
                                        type: "tag",
                                        tagType: "media"
                                    }, e[1] && (i.attributes = ja(e[1])), void this.trigger("data", i);
                                    if (e = /^#EXT-X-ENDLIST/.exec(t)) this.trigger("data", {
                                        type: "tag",
                                        tagType: "endlist"
                                    });
                                    else if (e = /^#EXT-X-DISCONTINUITY/.exec(t)) this.trigger("data", {
                                        type: "tag",
                                        tagType: "discontinuity"
                                    });
                                    else {
                                        if (e = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "program-date-time"
                                        }, e[1] && (i.dateTimeString = e[1], i.dateTimeObject = new Date(e[1])), void this.trigger("data", i);
                                        if (e = /^#EXT-X-KEY:?(.*)$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "key"
                                        }, e[1] && (i.attributes = ja(e[1]), i.attributes.IV && ("0x" === i.attributes.IV.substring(0, 2).toLowerCase() && (i.attributes.IV = i.attributes.IV.substring(2)), i.attributes.IV = i.attributes.IV.match(/.{8}/g), i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16), i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16), i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16), i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16), i.attributes.IV = new Uint32Array(i.attributes.IV))), void this.trigger("data", i);
                                        if (e = /^#EXT-X-START:?(.*)$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "start"
                                        }, e[1] && (i.attributes = ja(e[1]), i.attributes["TIME-OFFSET"] = parseFloat(i.attributes["TIME-OFFSET"]), i.attributes.PRECISE = /YES/.test(i.attributes.PRECISE)), void this.trigger("data", i);
                                        if (e = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "cue-out-cont"
                                        }, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
                                        if (e = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "cue-out"
                                        }, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
                                        if (e = /^#EXT-X-CUE-IN:?(.*)?$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "cue-in"
                                        }, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
                                        this.trigger("data", {
                                            type: "tag",
                                            data: t.slice(4)
                                        })
                                    }
                                }
                            }
                        else this.trigger("data", {
                            type: "comment",
                            text: t.slice(1)
                        })
                    } else this.trigger("data", {
                        type: "uri",
                        uri: t
                    })
            }, i.prototype.addParser = function (t) {
                var e = this,
                    i = t.expression,
                    n = t.customType,
                    r = t.dataParser,
                    a = t.segment;
                "function" != typeof r && (r = function (t) {
                    return t
                }), this.customParsers.push(function (t) {
                    if (i.exec(t)) return e.trigger("data", {
                        type: "custom",
                        data: r(t),
                        customType: n,
                        segment: a
                    }), !0
                })
            }, i
        }(Ba),
        Va = function (e) {
            function i() {
                Ia(this, i);
                var t = Ma(this, e.call(this));
                t.lineStream = new Na, t.parseStream = new Fa, t.lineStream.pipe(t.parseStream);
                var r = t,
                    a = [],
                    s = {},
                    o = void 0,
                    u = void 0,
                    l = {
                        AUDIO: {},
                        VIDEO: {},
                        "CLOSED-CAPTIONS": {},
                        SUBTITLES: {}
                    },
                    c = 0;
                return t.manifest = {
                    allowCache: !0,
                    discontinuityStarts: [],
                    segments: []
                }, t.parseStream.on("data", function (e) {
                    var i = void 0,
                        n = void 0;
                    ({
                        tag: function () {
                            ({
                                "allow-cache": function () {
                                    this.manifest.allowCache = e.allowed, "allowed" in e || (this.trigger("info", {
                                        message: "defaulting allowCache to YES"
                                    }), this.manifest.allowCache = !0)
                                },
                                byterange: function () {
                                    var t = {};
                                    "length" in e && ((s.byterange = t).length = e.length, "offset" in e || (this.trigger("info", {
                                        message: "defaulting offset to zero"
                                    }), e.offset = 0)), "offset" in e && ((s.byterange = t).offset = e.offset)
                                },
                                endlist: function () {
                                    this.manifest.endList = !0
                                },
                                inf: function () {
                                    "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
                                        message: "defaulting media sequence to zero"
                                    })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
                                        message: "defaulting discontinuity sequence to zero"
                                    })), 0 < e.duration && (s.duration = e.duration), 0 === e.duration && (s.duration = .01, this.trigger("info", {
                                        message: "updating zero segment duration to a small value"
                                    })), this.manifest.segments = a
                                },
                                key: function () {
                                    e.attributes ? "NONE" !== e.attributes.METHOD ? e.attributes.URI ? (e.attributes.METHOD || this.trigger("warn", {
                                        message: "defaulting key method to AES-128"
                                    }), u = {
                                        method: e.attributes.METHOD || "AES-128",
                                        uri: e.attributes.URI
                                    }, "undefined" != typeof e.attributes.IV && (u.iv = e.attributes.IV)) : this.trigger("warn", {
                                        message: "ignoring key declaration without URI"
                                    }) : u = null : this.trigger("warn", {
                                        message: "ignoring key declaration without attribute list"
                                    })
                                },
                                "media-sequence": function () {
                                    isFinite(e.number) ? this.manifest.mediaSequence = e.number : this.trigger("warn", {
                                        message: "ignoring invalid media sequence: " + e.number
                                    })
                                },
                                "discontinuity-sequence": function () {
                                    isFinite(e.number) ? (this.manifest.discontinuitySequence = e.number, c = e.number) : this.trigger("warn", {
                                        message: "ignoring invalid discontinuity sequence: " + e.number
                                    })
                                },
                                "playlist-type": function () {
                                    /VOD|EVENT/.test(e.playlistType) ? this.manifest.playlistType = e.playlistType : this.trigger("warn", {
                                        message: "ignoring unknown playlist type: " + e.playlist
                                    })
                                },
                                map: function () {
                                    o = {}, e.uri && (o.uri = e.uri), e.byterange && (o.byterange = e.byterange)
                                },
                                "stream-inf": function () {
                                    this.manifest.playlists = a, this.manifest.mediaGroups = this.manifest.mediaGroups || l, e.attributes ? (s.attributes || (s.attributes = {}), Da(s.attributes, e.attributes)) : this.trigger("warn", {
                                        message: "ignoring empty stream-inf attributes"
                                    })
                                },
                                media: function () {
                                    if (this.manifest.mediaGroups = this.manifest.mediaGroups || l, e.attributes && e.attributes.TYPE && e.attributes["GROUP-ID"] && e.attributes.NAME) {
                                        var t = this.manifest.mediaGroups[e.attributes.TYPE];
                                        t[e.attributes["GROUP-ID"]] = t[e.attributes["GROUP-ID"]] || {}, i = t[e.attributes["GROUP-ID"]], (n = {
                                            default: /yes/i.test(e.attributes.DEFAULT)
                                        }).default ? n.autoselect = !0 : n.autoselect = /yes/i.test(e.attributes.AUTOSELECT), e.attributes.LANGUAGE && (n.language = e.attributes.LANGUAGE), e.attributes.URI && (n.uri = e.attributes.URI), e.attributes["INSTREAM-ID"] && (n.instreamId = e.attributes["INSTREAM-ID"]), e.attributes.CHARACTERISTICS && (n.characteristics = e.attributes.CHARACTERISTICS), e.attributes.FORCED && (n.forced = /yes/i.test(e.attributes.FORCED)), i[e.attributes.NAME] = n
                                    } else this.trigger("warn", {
                                        message: "ignoring incomplete or missing media group"
                                    })
                                },
                                discontinuity: function () {
                                    c += 1, s.discontinuity = !0, this.manifest.discontinuityStarts.push(a.length)
                                },
                                "program-date-time": function () {
                                    "undefined" == typeof this.manifest.dateTimeString && (this.manifest.dateTimeString = e.dateTimeString, this.manifest.dateTimeObject = e.dateTimeObject), s.dateTimeString = e.dateTimeString, s.dateTimeObject = e.dateTimeObject
                                },
                                targetduration: function () {
                                    !isFinite(e.duration) || e.duration < 0 ? this.trigger("warn", {
                                        message: "ignoring invalid target duration: " + e.duration
                                    }) : this.manifest.targetDuration = e.duration
                                },
                                totalduration: function () {
                                    !isFinite(e.duration) || e.duration < 0 ? this.trigger("warn", {
                                        message: "ignoring invalid total duration: " + e.duration
                                    }) : this.manifest.totalDuration = e.duration
                                },
                                start: function () {
                                    e.attributes && !isNaN(e.attributes["TIME-OFFSET"]) ? this.manifest.start = {
                                        timeOffset: e.attributes["TIME-OFFSET"],
                                        precise: e.attributes.PRECISE
                                    } : this.trigger("warn", {
                                        message: "ignoring start declaration without appropriate attribute list"
                                    })
                                },
                                "cue-out": function () {
                                    s.cueOut = e.data
                                },
                                "cue-out-cont": function () {
                                    s.cueOutCont = e.data
                                },
                                "cue-in": function () {
                                    s.cueIn = e.data
                                }
                            } [e.tagType] || function () {}).call(r)
                        },
                        uri: function () {
                            s.uri = e.uri, a.push(s), !this.manifest.targetDuration || "duration" in s || (this.trigger("warn", {
                                message: "defaulting segment duration to the target duration"
                            }), s.duration = this.manifest.targetDuration), u && (s.key = u), s.timeline = c, o && (s.map = o), s = {}
                        },
                        comment: function () {},
                        custom: function () {
                            e.segment ? (s.custom = s.custom || {}, s.custom[e.customType] = e.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[e.customType] = e.data)
                        }
                    })[e.type].call(r)
                }), t
            }
            return Ra(i, e), i.prototype.push = function (t) {
                this.lineStream.push(t)
            }, i.prototype.end = function () {
                this.lineStream.push("\n")
            }, i.prototype.addParser = function (t) {
                this.parseStream.addParser(t)
            }, i
        }(Ba),
        Ha = function (t) {
            var e, i = t.attributes,
                n = t.segments,
                r = {
                    attributes: (e = {
                        NAME: i.id,
                        AUDIO: "audio",
                        SUBTITLES: "subs",
                        RESOLUTION: {
                            width: i.width,
                            height: i.height
                        },
                        CODECS: i.codecs,
                        BANDWIDTH: i.bandwidth
                    }, e["PROGRAM-ID"] = 1, e),
                    uri: "",
                    endList: "static" === (i.type || "static"),
                    timeline: i.periodIndex,
                    resolvedUri: "",
                    targetDuration: i.duration,
                    segments: n,
                    mediaSequence: n.length ? n[0].number : 1
                };
            return i.contentProtection && (r.contentProtection = i.contentProtection), r
        },
        za = "function" == typeof Symbol && "symbol" === Ee(Symbol.iterator) ? function (t) {
            return "undefined" == typeof t ? "undefined" : Ee(t)
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : Ee(t)
        },
        qa = function (t) {
            return !!t && "object" === ("undefined" == typeof t ? "undefined" : za(t))
        },
        Wa = function n() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            return e.reduce(function (e, i) {
                return Object.keys(i).forEach(function (t) {
                    Array.isArray(e[t]) && Array.isArray(i[t]) ? e[t] = e[t].concat(i[t]) : qa(e[t]) && qa(i[t]) ? e[t] = n(e[t], i[t]) : e[t] = i[t]
                }), e
            }, {})
        },
        Ga = function (t, e) {
            return /^[a-z]+:/i.test(e) ? e : (/\/\//i.test(t) || (t = xa.buildAbsoluteURL(g.location.href, t)), xa.buildAbsoluteURL(t, e))
        },
        Xa = function (t) {
            var e = t.baseUrl,
                i = void 0 === e ? "" : e,
                n = t.source,
                r = void 0 === n ? "" : n,
                a = t.range,
                s = void 0 === a ? "" : a,
                o = {
                    uri: r,
                    resolvedUri: Ga(i || "", r)
                };
            if (s) {
                var u = s.split("-"),
                    l = parseInt(u[0], 10),
                    c = parseInt(u[1], 10);
                o.byterange = {
                    length: c - l,
                    offset: l
                }
            }
            return o
        },
        Ya = function (t, e) {
            for (var i, n, r, a, s, o, u, l, c, d, h, p, f = t.type, m = void 0 === f ? "static" : f, g = t.minimumUpdatePeriod, y = void 0 === g ? 0 : g, v = t.media, _ = void 0 === v ? "" : v, b = t.sourceDuration, T = t.timescale, S = void 0 === T ? 1 : T, k = t.startNumber, C = void 0 === k ? 1 : k, w = t.periodIndex, E = [], A = -1, L = 0; L < e.length; L++) {
                var O = e[L],
                    P = O.d,
                    U = O.r || 0,
                    x = O.t || 0;
                A < 0 && (A = x), x && A < x && (A = x);
                var I = void 0;
                if (U < 0) {
                    var D = L + 1;
                    D === e.length ? "dynamic" === m && 0 < y && 0 < _.indexOf("$Number$") ? (n = A, r = P, void 0, a = (i = t).NOW, s = i.clientOffset, o = i.availabilityStartTime, u = i.timescale, l = void 0 === u ? 1 : u, c = i.start, d = void 0 === c ? 0 : c, h = i.minimumUpdatePeriod, p = (a + s) / 1e3 + (void 0 === h ? 0 : h) - (o + d), I = Math.ceil((p * l - n) / r)) : I = (b * S - A) / P : I = (e[D].t - A) / P
                } else I = U + 1;
                for (var R = C + E.length + I, M = C + E.length; M < R;) E.push({
                    number: M,
                    duration: P / S,
                    time: A,
                    timeline: w
                }), A += P, M++
            }
            return E
        },
        $a = function (t) {
            return t.reduce(function (t, e) {
                return t.concat(e)
            }, [])
        },
        Ka = function (t) {
            if (!t.length) return [];
            for (var e = [], i = 0; i < t.length; i++) e.push(t[i]);
            return e
        },
        Ja = {
            static: function (t) {
                var e = t.duration,
                    i = t.timescale,
                    n = void 0 === i ? 1 : i,
                    r = t.sourceDuration;
                return {
                    start: 0,
                    end: Math.ceil(r / (e / n))
                }
            },
            dynamic: function (t) {
                var e = t.NOW,
                    i = t.clientOffset,
                    n = t.availabilityStartTime,
                    r = t.timescale,
                    a = void 0 === r ? 1 : r,
                    s = t.duration,
                    o = t.start,
                    u = void 0 === o ? 0 : o,
                    l = t.minimumUpdatePeriod,
                    c = void 0 === l ? 0 : l,
                    d = t.timeShiftBufferDepth,
                    h = void 0 === d ? 1 / 0 : d,
                    p = (e + i) / 1e3,
                    f = n + u,
                    m = p + c - f,
                    g = Math.ceil(m * a / s),
                    y = Math.floor((p - f - h) * a / s),
                    v = Math.floor((p - f) * a / s);
                return {
                    start: Math.max(0, y),
                    end: Math.min(g, v)
                }
            }
        },
        Qa = function (t) {
            var o, e = t.type,
                i = void 0 === e ? "static" : e,
                n = t.duration,
                r = t.timescale,
                a = void 0 === r ? 1 : r,
                s = t.sourceDuration,
                u = Ja[i](t),
                l = function (t, e) {
                    for (var i = [], n = t; n < e; n++) i.push(n);
                    return i
                }(u.start, u.end).map((o = t, function (t, e) {
                    var i = o.duration,
                        n = o.timescale,
                        r = void 0 === n ? 1 : n,
                        a = o.periodIndex,
                        s = o.startNumber;
                    return {
                        number: (void 0 === s ? 1 : s) + t,
                        duration: i / r,
                        timeline: a,
                        time: e * i
                    }
                }));
            if ("static" === i) {
                var c = l.length - 1;
                l[c].duration = s - n / a * c
            }
            return l
        },
        Za = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
        ts = function (t, e) {
            return t.replace(Za, (a = e, function (t, e, i, n) {
                if ("$$" === t) return "$";
                if ("undefined" == typeof a[e]) return t;
                var r = "" + a[e];
                return "RepresentationID" === e ? r : (n = i ? parseInt(n, 10) : 1) <= r.length ? r : "" + new Array(n - r.length + 1).join("0") + r
            }));
            var a
        },
        es = function (i, t) {
            var e, n, r = {
                    RepresentationID: i.id,
                    Bandwidth: i.bandwidth || 0
                },
                a = i.initialization,
                s = void 0 === a ? {
                    sourceURL: "",
                    range: ""
                } : a,
                o = Xa({
                    baseUrl: i.baseUrl,
                    source: ts(s.sourceURL, r),
                    range: s.range
                });
            return (n = t, (e = i).duration || n ? e.duration ? Qa(e) : Ya(e, n) : [{
                number: e.startNumber || 1,
                duration: e.sourceDuration,
                time: 0,
                timeline: e.periodIndex
            }]).map(function (t) {
                r.Number = t.number, r.Time = t.time;
                var e = ts(i.media || "", r);
                return {
                    uri: e,
                    timeline: t.timeline,
                    duration: t.duration,
                    resolvedUri: Ga(i.baseUrl || "", e),
                    map: o,
                    number: t.number
                }
            })
        },
        is = "INVALID_NUMBER_OF_PERIOD",
        ns = "DASH_EMPTY_MANIFEST",
        rs = "DASH_INVALID_XML",
        as = "NO_BASE_URL",
        ss = "SEGMENT_TIME_UNSPECIFIED",
        os = "UNSUPPORTED_UTC_TIMING_SCHEME",
        us = function (u, t) {
            var e = u.duration,
                i = u.segmentUrls,
                n = void 0 === i ? [] : i;
            if (!e && !t || e && t) throw new Error(ss);
            var r = n.map(function (t) {
                    return i = t, n = (e = u).baseUrl, r = e.initialization, s = Xa({
                        baseUrl: n,
                        source: (a = void 0 === r ? {} : r).sourceURL,
                        range: a.range
                    }), (o = Xa({
                        baseUrl: n,
                        source: i.media,
                        range: i.mediaRange
                    })).map = s, o;
                    var e, i, n, r, a, s, o
                }),
                a = void 0;
            return e && (a = Qa(u)), t && (a = Ya(u, t)), a.map(function (t, e) {
                if (r[e]) {
                    var i = r[e];
                    return i.timeline = t.timeline, i.duration = t.duration, i.number = t.number, i
                }
            }).filter(function (t) {
                return t
            })
        },
        ls = function (t) {
            var e = t.baseUrl,
                i = t.initialization,
                n = void 0 === i ? {} : i,
                r = t.sourceDuration,
                a = t.timescale,
                s = void 0 === a ? 1 : a,
                o = t.indexRange,
                u = void 0 === o ? "" : o,
                l = t.duration;
            if (!e) throw new Error(as);
            var c = Xa({
                    baseUrl: e,
                    source: n.sourceURL,
                    range: n.range
                }),
                d = Xa({
                    baseUrl: e,
                    source: e,
                    range: u
                });
            if (d.map = c, l) {
                var h = Qa(t);
                h.length && (d.duration = h[0].duration, d.timeline = h[0].timeline)
            } else r && (d.duration = r / s, d.timeline = 0);
            return d.number = 0, [d]
        },
        cs = function (t) {
            var e = t.attributes,
                i = t.segmentInfo,
                n = void 0,
                r = void 0;
            if (i.template ? (r = es, n = Wa(e, i.template)) : i.base ? (r = ls, n = Wa(e, i.base)) : i.list && (r = us, n = Wa(e, i.list)), !r) return {
                attributes: e
            };
            var a = r(n, i.timeline);
            if (n.duration) {
                var s = n,
                    o = s.duration,
                    u = s.timescale,
                    l = void 0 === u ? 1 : u;
                n.duration = o / l
            } else a.length ? n.duration = a.reduce(function (t, e) {
                return Math.max(t, Math.ceil(e.duration))
            }, 0) : n.duration = 0;
            return {
                attributes: n,
                segments: a
            }
        },
        ds = function (t, e) {
            return Ka(t.childNodes).filter(function (t) {
                return t.tagName === e
            })
        },
        hs = function (t) {
            return t.textContent.trim()
        },
        ps = function (t) {
            var e = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(t);
            if (!e) return 0;
            var i = e.slice(1),
                n = i[0],
                r = i[1],
                a = i[2],
                s = i[3],
                o = i[4],
                u = i[5];
            return 31536e3 * parseFloat(n || 0) + 2592e3 * parseFloat(r || 0) + 86400 * parseFloat(a || 0) + 3600 * parseFloat(s || 0) + 60 * parseFloat(o || 0) + parseFloat(u || 0)
        },
        fs = {
            mediaPresentationDuration: function (t) {
                return ps(t)
            },
            availabilityStartTime: function (t) {
                return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e = t) && (e += "Z"), Date.parse(e) / 1e3;
                var e
            },
            minimumUpdatePeriod: function (t) {
                return ps(t)
            },
            timeShiftBufferDepth: function (t) {
                return ps(t)
            },
            start: function (t) {
                return ps(t)
            },
            width: function (t) {
                return parseInt(t, 10)
            },
            height: function (t) {
                return parseInt(t, 10)
            },
            bandwidth: function (t) {
                return parseInt(t, 10)
            },
            startNumber: function (t) {
                return parseInt(t, 10)
            },
            timescale: function (t) {
                return parseInt(t, 10)
            },
            duration: function (t) {
                var e = parseInt(t, 10);
                return isNaN(e) ? ps(t) : e
            },
            d: function (t) {
                return parseInt(t, 10)
            },
            t: function (t) {
                return parseInt(t, 10)
            },
            r: function (t) {
                return parseInt(t, 10)
            },
            DEFAULT: function (t) {
                return t
            }
        },
        ms = function (t) {
            return t && t.attributes ? Ka(t.attributes).reduce(function (t, e) {
                var i = fs[e.name] || fs.DEFAULT;
                return t[e.name] = i(e.value), t
            }, {}) : {}
        };
    var gs, ys, vs, _s, bs, Ts, Ss, ks, Cs, ws, Es, As, Ls, Os, Ps, Us, xs, Is, Ds, Rs, Ms, Bs, Ns, js, Fs, Vs, Hs, zs, qs, Ws, Gs, Xs, Ys, $s, Ks, Js, Qs, Zs, to, eo, io, no, ro = {
            "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
            "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
            "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
        },
        ao = function (t, i) {
            return i.length ? $a(t.map(function (e) {
                return i.map(function (t) {
                    return Ga(e, hs(t))
                })
            })) : t
        },
        so = function (t) {
            var e = ds(t, "SegmentTemplate")[0],
                i = ds(t, "SegmentList")[0],
                n = i && ds(i, "SegmentURL").map(function (t) {
                    return Wa({
                        tag: "SegmentURL"
                    }, ms(t))
                }),
                r = ds(t, "SegmentBase")[0],
                a = i || e,
                s = a && ds(a, "SegmentTimeline")[0],
                o = i || r || e,
                u = o && ds(o, "Initialization")[0],
                l = e && ms(e);
            l && u ? l.initialization = u && ms(u) : l && l.initialization && (l.initialization = {
                sourceURL: l.initialization
            });
            var c = {
                template: l,
                timeline: s && ds(s, "S").map(function (t) {
                    return ms(t)
                }),
                list: i && Wa(ms(i), {
                    segmentUrls: n,
                    initialization: ms(u)
                }),
                base: r && Wa(ms(r), {
                    initialization: ms(u)
                })
            };
            return Object.keys(c).forEach(function (t) {
                c[t] || delete c[t]
            }), c
        },
        oo = function (t) {
            return t.reduce(function (t, e) {
                var i = ms(e),
                    n = ro[i.schemeIdUri];
                if (n) {
                    t[n] = {
                        attributes: i
                    };
                    var r = ds(e, "cenc:pssh")[0];
                    if (r) {
                        var a = hs(r),
                            s = a && function (t) {
                                for (var e = g.atob(t), i = new Uint8Array(e.length), n = 0; n < e.length; n++) i[n] = e.charCodeAt(n);
                                return i
                            }(a);
                        t[n].pssh = s
                    }
                }
                return t
            }, {})
        },
        uo = function (p, f, m) {
            return function (t) {
                var e = ms(t),
                    i = ao(f, ds(t, "BaseURL")),
                    n = ds(t, "Role")[0],
                    r = {
                        role: ms(n)
                    },
                    a = Wa(p, e, r),
                    s = oo(ds(t, "ContentProtection"));
                Object.keys(s).length && (a = Wa(a, {
                    contentProtection: s
                }));
                var o, u, l, c = so(t),
                    d = ds(t, "Representation"),
                    h = Wa(m, c);
                return $a(d.map((o = a, u = i, l = h, function (t) {
                    var e = ds(t, "BaseURL"),
                        i = ao(u, e),
                        n = Wa(o, ms(t)),
                        r = so(t);
                    return i.map(function (t) {
                        return {
                            segmentInfo: Wa(l, r),
                            attributes: Wa(n, {
                                baseUrl: t
                            })
                        }
                    })
                })))
            }
        },
        lo = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                i = e.manifestUri,
                n = void 0 === i ? "" : i,
                r = e.NOW,
                a = void 0 === r ? Date.now() : r,
                s = e.clientOffset,
                o = void 0 === s ? 0 : s,
                u = ds(t, "Period");
            if (1 !== u.length) throw new Error(is);
            var l, c, d = ms(t),
                h = ao([n], ds(t, "BaseURL"));
            return d.sourceDuration = d.mediaPresentationDuration || 0, d.NOW = a, d.clientOffset = o, $a(u.map((l = d, c = h, function (t, e) {
                var i = ao(c, ds(t, "BaseURL")),
                    n = ms(t),
                    r = Wa(l, n, {
                        periodIndex: e
                    }),
                    a = ds(t, "AdaptationSet"),
                    s = so(t);
                return $a(a.map(uo(r, i, s)))
            })))
        },
        co = function (t) {
            if ("" === t) throw new Error(ns);
            var e = (new g.DOMParser).parseFromString(t, "application/xml"),
                i = e && "MPD" === e.documentElement.tagName ? e.documentElement : null;
            if (!i || i && 0 < i.getElementsByTagName("parsererror").length) throw new Error(rs);
            return i
        },
        ho = function (t, e) {
            return function (t) {
                var e;
                if (!t.length) return {};
                var i = t[0].attributes,
                    n = i.sourceDuration,
                    r = i.minimumUpdatePeriod,
                    a = void 0 === r ? 0 : r,
                    s = t.filter(function (t) {
                        var e = t.attributes;
                        return "video/mp4" === e.mimeType || "video" === e.contentType
                    }).map(Ha),
                    o = t.filter(function (t) {
                        var e = t.attributes;
                        return "audio/mp4" === e.mimeType || "audio" === e.contentType
                    }),
                    u = t.filter(function (t) {
                        var e = t.attributes;
                        return "text/vtt" === e.mimeType || "text" === e.contentType
                    }),
                    l = {
                        allowCache: !0,
                        discontinuityStarts: [],
                        segments: [],
                        endList: !0,
                        mediaGroups: (e = {
                            AUDIO: {},
                            VIDEO: {}
                        }, e["CLOSED-CAPTIONS"] = {}, e.SUBTITLES = {}, e),
                        uri: "",
                        duration: n,
                        playlists: s,
                        minimumUpdatePeriod: 1e3 * a
                    };
                return o.length && (l.mediaGroups.AUDIO.audio = o.reduce(function (t, e) {
                    var i, n, r, a, s, o = e.attributes.role && e.attributes.role.value || "main",
                        u = e.attributes.lang || "",
                        l = "main";
                    return u && (l = e.attributes.lang + " (" + o + ")"), t[l] && t[l].playlists[0].attributes.BANDWIDTH > e.attributes.bandwidth || (t[l] = {
                        language: u,
                        autoselect: !0,
                        default: "main" === o,
                        playlists: [(i = e, r = i.attributes, a = i.segments, s = {
                            attributes: (n = {
                                NAME: r.id,
                                BANDWIDTH: r.bandwidth,
                                CODECS: r.codecs
                            }, n["PROGRAM-ID"] = 1, n),
                            uri: "",
                            endList: "static" === (r.type || "static"),
                            timeline: r.periodIndex,
                            resolvedUri: "",
                            targetDuration: r.duration,
                            segments: a,
                            mediaSequence: a.length ? a[0].number : 1
                        }, r.contentProtection && (s.contentProtection = r.contentProtection), s)],
                        uri: ""
                    }), t
                }, {})), u.length && (l.mediaGroups.SUBTITLES.subs = u.reduce(function (t, e) {
                    var i, n, r, a, s = e.attributes.lang || "text";
                    return t[s] || (t[s] = {
                        language: s,
                        default: !1,
                        autoselect: !1,
                        playlists: [(i = e, r = i.attributes, a = i.segments, "undefined" == typeof a && (a = [{
                            uri: r.baseUrl,
                            timeline: r.periodIndex,
                            resolvedUri: r.baseUrl || "",
                            duration: r.sourceDuration,
                            number: 0
                        }], r.duration = r.sourceDuration), {
                            attributes: (n = {
                                NAME: r.id,
                                BANDWIDTH: r.bandwidth
                            }, n["PROGRAM-ID"] = 1, n),
                            uri: "",
                            endList: "static" === (r.type || "static"),
                            timeline: r.periodIndex,
                            resolvedUri: r.baseUrl || "",
                            targetDuration: r.duration,
                            segments: a,
                            mediaSequence: a.length ? a[0].number : 1
                        })],
                        uri: ""
                    }), t
                }, {})), l
            }(lo(co(t), e).map(cs))
        },
        po = function (t) {
            return function (t) {
                var e = ds(t, "UTCTiming")[0];
                if (!e) return null;
                var i = ms(e);
                switch (i.schemeIdUri) {
                    case "urn:mpeg:dash:utc:http-head:2014":
                    case "urn:mpeg:dash:utc:http-head:2012":
                        i.method = "HEAD";
                        break;
                    case "urn:mpeg:dash:utc:http-xsdate:2014":
                    case "urn:mpeg:dash:utc:http-iso:2014":
                    case "urn:mpeg:dash:utc:http-xsdate:2012":
                    case "urn:mpeg:dash:utc:http-iso:2012":
                        i.method = "GET";
                        break;
                    case "urn:mpeg:dash:utc:direct:2014":
                    case "urn:mpeg:dash:utc:direct:2012":
                        i.method = "DIRECT", i.value = Date.parse(i.value);
                        break;
                    case "urn:mpeg:dash:utc:http-ntp:2014":
                    case "urn:mpeg:dash:utc:ntp:2014":
                    case "urn:mpeg:dash:utc:sntp:2014":
                    default:
                        throw new Error(os)
                }
                return i
            }(co(t))
        },
        fo = {
            toUnsigned: function (t) {
                return t >>> 0
            }
        },
        mo = fo.toUnsigned,
        go = Object.freeze({
            default: fo,
            __moduleExports: fo,
            toUnsigned: mo
        }),
        yo = (go && fo || go).toUnsigned,
        vo = {
            findBox: gs = function (t, e) {
                var i, n, r, a, s, o = [];
                if (!e.length) return null;
                for (i = 0; i < t.byteLength;) n = yo(t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3]), r = ys(t.subarray(i + 4, i + 8)), a = 1 < n ? i + n : t.byteLength, r === e[0] && (1 === e.length ? o.push(t.subarray(i + 8, a)) : (s = gs(t.subarray(i + 8, a), e.slice(1))).length && (o = o.concat(s))), i = a;
                return o
            },
            parseType: ys = function (t) {
                var e = "";
                return e += String.fromCharCode(t[0]), e += String.fromCharCode(t[1]), e += String.fromCharCode(t[2]), e += String.fromCharCode(t[3])
            },
            timescale: function (t) {
                return gs(t, ["moov", "trak"]).reduce(function (t, e) {
                    var i, n, r, a, s;
                    return (i = gs(e, ["tkhd"])[0]) ? (n = i[0], a = yo(i[r = 0 === n ? 12 : 20] << 24 | i[r + 1] << 16 | i[r + 2] << 8 | i[r + 3]), (s = gs(e, ["mdia", "mdhd"])[0]) ? (r = 0 === (n = s[0]) ? 12 : 20, t[a] = yo(s[r] << 24 | s[r + 1] << 16 | s[r + 2] << 8 | s[r + 3]), t) : null) : null
                }, {})
            },
            startTime: function (r, t) {
                var e, i, n;
                return e = gs(t, ["moof", "traf"]), i = [].concat.apply([], e.map(function (n) {
                    return gs(n, ["tfhd"]).map(function (t) {
                        var e, i;
                        return e = yo(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7]), i = r[e] || 9e4, (gs(n, ["tfdt"]).map(function (t) {
                            var e, i;
                            return e = t[0], i = yo(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7]), 1 === e && (i *= Math.pow(2, 32), i += yo(t[8] << 24 | t[9] << 16 | t[10] << 8 | t[11])), i
                        })[0] || 1 / 0) / i
                    })
                })), n = Math.min.apply(null, i), isFinite(n) ? n : 0
            },
            videoTrackIds: function (t) {
                var e = gs(t, ["moov", "trak"]),
                    o = [];
                return e.forEach(function (t) {
                    var e = gs(t, ["mdia", "hdlr"]),
                        s = gs(t, ["tkhd"]);
                    e.forEach(function (t, e) {
                        var i, n, r = ys(t.subarray(8, 12)),
                            a = s[e];
                        "vide" === r && (n = 0 === (i = new DataView(a.buffer, a.byteOffset, a.byteLength)).getUint8(0) ? i.getUint32(12) : i.getUint32(20), o.push(n))
                    })
                }), o
            }
        },
        _o = Math.pow(2, 32) - 1;
    ! function () {
        var t;
        if (js = {
                avc1: [],
                avcC: [],
                btrt: [],
                dinf: [],
                dref: [],
                esds: [],
                ftyp: [],
                hdlr: [],
                mdat: [],
                mdhd: [],
                mdia: [],
                mfhd: [],
                minf: [],
                moof: [],
                moov: [],
                mp4a: [],
                mvex: [],
                mvhd: [],
                sdtp: [],
                smhd: [],
                stbl: [],
                stco: [],
                stsc: [],
                stsd: [],
                stsz: [],
                stts: [],
                styp: [],
                tfdt: [],
                tfhd: [],
                traf: [],
                trak: [],
                trun: [],
                trex: [],
                tkhd: [],
                vmhd: []
            }, "undefined" != typeof Uint8Array) {
            for (t in js) js.hasOwnProperty(t) && (js[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
            Fs = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), Hs = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), Vs = new Uint8Array([0, 0, 0, 1]), zs = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), qs = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), Ws = {
                video: zs,
                audio: qs
            }, Ys = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), Xs = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), $s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), Ks = $s, Js = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Qs = $s, Gs = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
        }
    }(), vs = function (t) {
        var e, i, n = [],
            r = 0;
        for (e = 1; e < arguments.length; e++) n.push(arguments[e]);
        for (e = n.length; e--;) r += n[e].byteLength;
        for (i = new Uint8Array(r + 8), new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength), i.set(t, 4), e = 0, r = 8; e < n.length; e++) i.set(n[e], r), r += n[e].byteLength;
        return i
    }, _s = function () {
        return vs(js.dinf, vs(js.dref, Ys))
    }, bs = function (t) {
        return vs(js.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, t.audioobjecttype << 3 | t.samplingfrequencyindex >>> 1, t.samplingfrequencyindex << 7 | t.channelcount << 3, 6, 1, 2]))
    }, xs = function (t) {
        return vs(js.hdlr, Ws[t])
    }, Us = function (t) {
        var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, t.duration >>> 24 & 255, t.duration >>> 16 & 255, t.duration >>> 8 & 255, 255 & t.duration, 85, 196, 0, 0]);
        return t.samplerate && (e[12] = t.samplerate >>> 24 & 255, e[13] = t.samplerate >>> 16 & 255, e[14] = t.samplerate >>> 8 & 255, e[15] = 255 & t.samplerate), vs(js.mdhd, e)
    }, Ps = function (t) {
        return vs(js.mdia, Us(t), xs(t.type), ks(t))
    }, Ss = function (t) {
        return vs(js.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t]))
    }, ks = function (t) {
        return vs(js.minf, "video" === t.type ? vs(js.vmhd, Gs) : vs(js.smhd, Xs), _s(), Ds(t))
    }, Cs = function (t, e) {
        for (var i = [], n = e.length; n--;) i[n] = Ms(e[n]);
        return vs.apply(null, [js.moof, Ss(t)].concat(i))
    }, ws = function (t) {
        for (var e = t.length, i = []; e--;) i[e] = Ls(t[e]);
        return vs.apply(null, [js.moov, As(4294967295)].concat(i).concat(Es(t)))
    }, Es = function (t) {
        for (var e = t.length, i = []; e--;) i[e] = Bs(t[e]);
        return vs.apply(null, [js.mvex].concat(i))
    }, As = function (t) {
        var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
        return vs(js.mvhd, e)
    }, Is = function (t) {
        var e, i, n = t.samples || [],
            r = new Uint8Array(4 + n.length);
        for (i = 0; i < n.length; i++) e = n[i].flags, r[i + 4] = e.dependsOn << 4 | e.isDependedOn << 2 | e.hasRedundancy;
        return vs(js.sdtp, r)
    }, Ds = function (t) {
        return vs(js.stbl, Rs(t), vs(js.stts, Qs), vs(js.stsc, Ks), vs(js.stsz, Js), vs(js.stco, $s))
    }, Rs = function (t) {
        return vs(js.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === t.type ? Zs(t) : to(t))
    }, Zs = function (t) {
        var e, i = t.sps || [],
            n = t.pps || [],
            r = [],
            a = [];
        for (e = 0; e < i.length; e++) r.push((65280 & i[e].byteLength) >>> 8), r.push(255 & i[e].byteLength), r = r.concat(Array.prototype.slice.call(i[e]));
        for (e = 0; e < n.length; e++) a.push((65280 & n[e].byteLength) >>> 8), a.push(255 & n[e].byteLength), a = a.concat(Array.prototype.slice.call(n[e]));
        return vs(js.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, (65280 & t.height) >> 8, 255 & t.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), vs(js.avcC, new Uint8Array([1, t.profileIdc, t.profileCompatibility, t.levelIdc, 255].concat([i.length]).concat(r).concat([n.length]).concat(a))), vs(js.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
    }, to = function (t) {
        return vs(js.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.channelcount) >> 8, 255 & t.channelcount, (65280 & t.samplesize) >> 8, 255 & t.samplesize, 0, 0, 0, 0, (65280 & t.samplerate) >> 8, 255 & t.samplerate, 0, 0]), bs(t))
    }, Os = function (t) {
        var e = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 0, (4278190080 & t.duration) >> 24, (16711680 & t.duration) >> 16, (65280 & t.duration) >> 8, 255 & t.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, 0, 0, (65280 & t.height) >> 8, 255 & t.height, 0, 0]);
        return vs(js.tkhd, e)
    }, Ms = function (t) {
        var e, i, n, r, a, s;
        return e = vs(js.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), a = Math.floor(t.baseMediaDecodeTime / (_o + 1)), s = Math.floor(t.baseMediaDecodeTime % (_o + 1)), i = vs(js.tfdt, new Uint8Array([1, 0, 0, 0, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s])), 92, "audio" === t.type ? (n = Ns(t, 92), vs(js.traf, e, i, n)) : (r = Is(t), n = Ns(t, r.length + 92), vs(js.traf, e, i, n, r))
    }, Ls = function (t) {
        return t.duration = t.duration || 4294967295, vs(js.trak, Os(t), Ps(t))
    }, Bs = function (t) {
        var e = new Uint8Array([0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
        return "video" !== t.type && (e[e.length - 1] = 0), vs(js.trex, e)
    }, no = function (t, e) {
        var i = 0,
            n = 0,
            r = 0,
            a = 0;
        return t.length && (void 0 !== t[0].duration && (i = 1), void 0 !== t[0].size && (n = 2), void 0 !== t[0].flags && (r = 4), void 0 !== t[0].compositionTimeOffset && (a = 8)), [0, 0, i | n | r | a, 1, (4278190080 & t.length) >>> 24, (16711680 & t.length) >>> 16, (65280 & t.length) >>> 8, 255 & t.length, (4278190080 & e) >>> 24, (16711680 & e) >>> 16, (65280 & e) >>> 8, 255 & e]
    }, io = function (t, e) {
        var i, n, r, a;
        for (e += 20 + 16 * (n = t.samples || []).length, i = no(n, e), a = 0; a < n.length; a++) r = n[a], i = i.concat([(4278190080 & r.duration) >>> 24, (16711680 & r.duration) >>> 16, (65280 & r.duration) >>> 8, 255 & r.duration, (4278190080 & r.size) >>> 24, (16711680 & r.size) >>> 16, (65280 & r.size) >>> 8, 255 & r.size, r.flags.isLeading << 2 | r.flags.dependsOn, r.flags.isDependedOn << 6 | r.flags.hasRedundancy << 4 | r.flags.paddingValue << 1 | r.flags.isNonSyncSample, 61440 & r.flags.degradationPriority, 15 & r.flags.degradationPriority, (4278190080 & r.compositionTimeOffset) >>> 24, (16711680 & r.compositionTimeOffset) >>> 16, (65280 & r.compositionTimeOffset) >>> 8, 255 & r.compositionTimeOffset]);
        return vs(js.trun, new Uint8Array(i))
    }, eo = function (t, e) {
        var i, n, r, a;
        for (e += 20 + 8 * (n = t.samples || []).length, i = no(n, e), a = 0; a < n.length; a++) r = n[a], i = i.concat([(4278190080 & r.duration) >>> 24, (16711680 & r.duration) >>> 16, (65280 & r.duration) >>> 8, 255 & r.duration, (4278190080 & r.size) >>> 24, (16711680 & r.size) >>> 16, (65280 & r.size) >>> 8, 255 & r.size]);
        return vs(js.trun, new Uint8Array(i))
    }, Ns = function (t, e) {
        return "audio" === t.type ? eo(t, e) : io(t, e)
    };
    var bo = {
            ftyp: Ts = function () {
                return vs(js.ftyp, Fs, Vs, Fs, Hs)
            },
            mdat: function (t) {
                return vs(js.mdat, t)
            },
            moof: Cs,
            moov: ws,
            initSegment: function (t) {
                var e, i = Ts(),
                    n = ws(t);
                return (e = new Uint8Array(i.byteLength + n.byteLength)).set(i), e.set(n, i.byteLength), e
            }
        },
        To = bo.ftyp,
        So = bo.mdat,
        ko = bo.moof,
        Co = bo.moov,
        wo = bo.initSegment,
        Eo = Object.freeze({
            default: bo,
            __moduleExports: bo,
            ftyp: To,
            mdat: So,
            moof: ko,
            moov: Co,
            initSegment: wo
        }),
        Ao = function () {
            this.init = function () {
                var a = {};
                this.on = function (t, e) {
                    a[t] || (a[t] = []), a[t] = a[t].concat(e)
                }, this.off = function (t, e) {
                    var i;
                    return !!a[t] && (i = a[t].indexOf(e), a[t] = a[t].slice(), a[t].splice(i, 1), -1 < i)
                }, this.trigger = function (t) {
                    var e, i, n, r;
                    if (e = a[t])
                        if (2 === arguments.length)
                            for (n = e.length, i = 0; i < n; ++i) e[i].call(this, arguments[1]);
                        else {
                            for (r = [], i = arguments.length, i = 1; i < arguments.length; ++i) r.push(arguments[i]);
                            for (n = e.length, i = 0; i < n; ++i) e[i].apply(this, r)
                        }
                }, this.dispose = function () {
                    a = {}
                }
            }
        };
    Ao.prototype.pipe = function (e) {
        return this.on("data", function (t) {
            e.push(t)
        }), this.on("done", function (t) {
            e.flush(t)
        }), e
    }, Ao.prototype.push = function (t) {
        this.trigger("data", t)
    }, Ao.prototype.flush = function (t) {
        this.trigger("done", t)
    };
    var Lo = Ao,
        Oo = Object.freeze({
            default: Lo,
            __moduleExports: Lo
        }),
        Po = {
            groupNalsIntoFrames: function (t) {
                var e, i, n = [],
                    r = [];
                for (e = n.byteLength = 0; e < t.length; e++) "access_unit_delimiter_rbsp" === (i = t[e]).nalUnitType ? (n.length && (n.duration = i.dts - n.dts, r.push(n)), (n = [i]).byteLength = i.data.byteLength, n.pts = i.pts, n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0), n.duration = i.dts - n.dts, n.byteLength += i.data.byteLength, n.push(i));
                return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration), r.push(n), r
            },
            groupFramesIntoGops: function (t) {
                var e, i, n = [],
                    r = [];
                for (n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = t[0].pts, n.dts = t[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = t[0].pts, r.dts = t[0].dts, e = 0; e < t.length; e++)(i = t[e]).keyFrame ? (n.length && (r.push(n), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration), (n = [i]).nalCount = i.length, n.byteLength = i.byteLength, n.pts = i.pts, n.dts = i.dts, n.duration = i.duration) : (n.duration += i.duration, n.nalCount += i.length, n.byteLength += i.byteLength, n.push(i));
                return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration, r.push(n), r
            },
            extendFirstKeyFrame: function (t) {
                var e;
                return !t[0][0].keyFrame && 1 < t.length && (e = t.shift(), t.byteLength -= e.byteLength, t.nalCount -= e.nalCount, t[0][0].dts = e.dts, t[0][0].pts = e.pts, t[0][0].duration += e.duration), t
            },
            generateSampleTable: function (t, e) {
                var i, n, r, a, s, o, u, l = e || 0,
                    c = [];
                for (i = 0; i < t.length; i++)
                    for (a = t[i], n = 0; n < a.length; n++) s = a[n], o = s, u = void 0, (u = {
                        size: 0,
                        flags: {
                            isLeading: 0,
                            dependsOn: 1,
                            isDependedOn: 0,
                            hasRedundancy: 0,
                            degradationPriority: 0,
                            isNonSyncSample: 1
                        }
                    }).dataOffset = l, u.compositionTimeOffset = o.pts - o.dts, u.duration = o.duration, u.size = 4 * o.length, u.size += o.byteLength, o.keyFrame && (u.flags.dependsOn = 2, u.flags.isNonSyncSample = 0), l += (r = u).size, c.push(r);
                return c
            },
            concatenateNalData: function (t) {
                var e, i, n, r, a, s, o = 0,
                    u = t.byteLength,
                    l = t.nalCount,
                    c = new Uint8Array(u + 4 * l),
                    d = new DataView(c.buffer);
                for (e = 0; e < t.length; e++)
                    for (r = t[e], i = 0; i < r.length; i++)
                        for (a = r[i], n = 0; n < a.length; n++) s = a[n], d.setUint32(o, s.data.byteLength), o += 4, c.set(s.data, o), o += s.data.byteLength;
                return c
            }
        },
        Uo = Po.groupNalsIntoFrames,
        xo = Po.groupFramesIntoGops,
        Io = Po.extendFirstKeyFrame,
        Do = Po.generateSampleTable,
        Ro = Po.concatenateNalData,
        Mo = Object.freeze({
            default: Po,
            __moduleExports: Po,
            groupNalsIntoFrames: Uo,
            groupFramesIntoGops: xo,
            extendFirstKeyFrame: Io,
            generateSampleTable: Do,
            concatenateNalData: Ro
        }),
        Bo = {
            clearDtsInfo: function (t) {
                delete t.minSegmentDts, delete t.maxSegmentDts, delete t.minSegmentPts, delete t.maxSegmentPts
            },
            calculateTrackBaseMediaDecodeTime: function (t, e) {
                var i, n = t.minSegmentDts;
                return e || (n -= t.timelineStartInfo.dts), i = t.timelineStartInfo.baseMediaDecodeTime, i += n, i = Math.max(0, i), "audio" === t.type && (i *= t.samplerate / 9e4, i = Math.floor(i)), i
            },
            collectDtsInfo: function (t, e) {
                "number" == typeof e.pts && (void 0 === t.timelineStartInfo.pts && (t.timelineStartInfo.pts = e.pts), void 0 === t.minSegmentPts ? t.minSegmentPts = e.pts : t.minSegmentPts = Math.min(t.minSegmentPts, e.pts), void 0 === t.maxSegmentPts ? t.maxSegmentPts = e.pts : t.maxSegmentPts = Math.max(t.maxSegmentPts, e.pts)), "number" == typeof e.dts && (void 0 === t.timelineStartInfo.dts && (t.timelineStartInfo.dts = e.dts), void 0 === t.minSegmentDts ? t.minSegmentDts = e.dts : t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), void 0 === t.maxSegmentDts ? t.maxSegmentDts = e.dts : t.maxSegmentDts = Math.max(t.maxSegmentDts, e.dts))
            }
        },
        No = Bo.clearDtsInfo,
        jo = Bo.calculateTrackBaseMediaDecodeTime,
        Fo = Bo.collectDtsInfo,
        Vo = Object.freeze({
            default: Bo,
            __moduleExports: Bo,
            clearDtsInfo: No,
            calculateTrackBaseMediaDecodeTime: jo,
            collectDtsInfo: Fo
        }),
        Ho = {
            parseSei: function (t) {
                for (var e = 0, i = {
                        payloadType: -1,
                        payloadSize: 0
                    }, n = 0, r = 0; e < t.byteLength && 128 !== t[e];) {
                    for (; 255 === t[e];) n += 255, e++;
                    for (n += t[e++]; 255 === t[e];) r += 255, e++;
                    if (r += t[e++], !i.payload && 4 === n) {
                        i.payloadType = n, i.payloadSize = r, i.payload = t.subarray(e, e + r);
                        break
                    }
                    e += r, r = n = 0
                }
                return i
            },
            parseUserData: function (t) {
                return 181 !== t.payload[0] ? null : 49 != (t.payload[1] << 8 | t.payload[2]) ? null : "GA94" !== String.fromCharCode(t.payload[3], t.payload[4], t.payload[5], t.payload[6]) ? null : 3 !== t.payload[7] ? null : t.payload.subarray(8, t.payload.length - 1)
            },
            parseCaptionPackets: function (t, e) {
                var i, n, r, a, s = [];
                if (!(64 & e[0])) return s;
                for (n = 31 & e[0], i = 0; i < n; i++) a = {
                    type: 3 & e[2 + (r = 3 * i)],
                    pts: t
                }, 4 & e[r + 2] && (a.ccData = e[r + 3] << 8 | e[r + 4], s.push(a));
                return s
            },
            discardEmulationPreventionBytes: function (t) {
                for (var e, i, n = t.byteLength, r = [], a = 1; a < n - 2;) 0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2] ? (r.push(a + 2), a += 2) : a++;
                if (0 === r.length) return t;
                e = n - r.length, i = new Uint8Array(e);
                var s = 0;
                for (a = 0; a < e; s++, a++) s === r[0] && (s++, r.shift()), i[a] = t[s];
                return i
            },
            USER_DATA_REGISTERED_ITU_T_T35: 4
        },
        zo = Ho.parseSei,
        qo = Ho.parseUserData,
        Wo = Ho.parseCaptionPackets,
        Go = Ho.discardEmulationPreventionBytes,
        Xo = Ho.USER_DATA_REGISTERED_ITU_T_T35,
        Yo = Object.freeze({
            default: Ho,
            __moduleExports: Ho,
            parseSei: zo,
            parseUserData: qo,
            parseCaptionPackets: Wo,
            discardEmulationPreventionBytes: Go,
            USER_DATA_REGISTERED_ITU_T_T35: Xo
        }),
        $o = Oo && Lo || Oo,
        Ko = Yo && Ho || Yo,
        Jo = function t() {
            t.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new iu(0, 0), new iu(0, 1), new iu(1, 0), new iu(1, 1)], this.reset(), this.ccStreams_.forEach(function (t) {
                t.on("data", this.trigger.bind(this, "data")), t.on("done", this.trigger.bind(this, "done"))
            }, this)
        };
    (Jo.prototype = new $o).push = function (t) {
        var e, i, n;
        if ("sei_rbsp" === t.nalUnitType && (e = Ko.parseSei(t.escapedRBSP)).payloadType === Ko.USER_DATA_REGISTERED_ITU_T_T35 && (i = Ko.parseUserData(e)))
            if (t.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0;
            else {
                if (t.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, void(this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
                n = Ko.parseCaptionPackets(t.pts, i), this.captionPackets_ = this.captionPackets_.concat(n), this.latestDts_ !== t.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = t.dts
            }
    }, Jo.prototype.flush = function () {
        this.captionPackets_.length ? (this.captionPackets_.forEach(function (t, e) {
            t.presortIndex = e
        }), this.captionPackets_.sort(function (t, e) {
            return t.pts === e.pts ? t.presortIndex - e.presortIndex : t.pts - e.pts
        }), this.captionPackets_.forEach(function (t) {
            t.type < 2 && this.dispatchCea608Packet(t)
        }, this), this.captionPackets_.length = 0, this.ccStreams_.forEach(function (t) {
            t.flush()
        }, this)) : this.ccStreams_.forEach(function (t) {
            t.flush()
        }, this)
    }, Jo.prototype.reset = function () {
        this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function (t) {
            t.reset()
        })
    }, Jo.prototype.dispatchCea608Packet = function (t) {
        this.setsChannel1Active(t) ? this.activeCea608Channel_[t.type] = 0 : this.setsChannel2Active(t) && (this.activeCea608Channel_[t.type] = 1), null !== this.activeCea608Channel_[t.type] && this.ccStreams_[(t.type << 1) + this.activeCea608Channel_[t.type]].push(t)
    }, Jo.prototype.setsChannel1Active = function (t) {
        return 4096 == (30720 & t.ccData)
    }, Jo.prototype.setsChannel2Active = function (t) {
        return 6144 == (30720 & t.ccData)
    };
    var Qo = {
            42: 225,
            92: 233,
            94: 237,
            95: 243,
            96: 250,
            123: 231,
            124: 247,
            125: 209,
            126: 241,
            127: 9608,
            304: 174,
            305: 176,
            306: 189,
            307: 191,
            308: 8482,
            309: 162,
            310: 163,
            311: 9834,
            312: 224,
            313: 160,
            314: 232,
            315: 226,
            316: 234,
            317: 238,
            318: 244,
            319: 251,
            544: 193,
            545: 201,
            546: 211,
            547: 218,
            548: 220,
            549: 252,
            550: 8216,
            551: 161,
            552: 42,
            553: 39,
            554: 8212,
            555: 169,
            556: 8480,
            557: 8226,
            558: 8220,
            559: 8221,
            560: 192,
            561: 194,
            562: 199,
            563: 200,
            564: 202,
            565: 203,
            566: 235,
            567: 206,
            568: 207,
            569: 239,
            570: 212,
            571: 217,
            572: 249,
            573: 219,
            574: 171,
            575: 187,
            800: 195,
            801: 227,
            802: 205,
            803: 204,
            804: 236,
            805: 210,
            806: 242,
            807: 213,
            808: 245,
            809: 123,
            810: 125,
            811: 92,
            812: 94,
            813: 95,
            814: 124,
            815: 126,
            816: 196,
            817: 228,
            818: 214,
            819: 246,
            820: 223,
            821: 165,
            822: 164,
            823: 9474,
            824: 197,
            825: 229,
            826: 216,
            827: 248,
            828: 9484,
            829: 9488,
            830: 9492,
            831: 9496
        },
        Zo = function (t) {
            return null === t ? "" : (t = Qo[t] || t, String.fromCharCode(t))
        },
        tu = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
        eu = function () {
            for (var t = [], e = 15; e--;) t.push("");
            return t
        },
        iu = function t(e, i) {
            t.prototype.init.call(this), this.field_ = e || 0, this.dataChannel_ = i || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function (t) {
                var e, i, n, r, a;
                if ((e = 32639 & t.ccData) !== this.lastControlCode_) {
                    if (4096 == (61440 & e) ? this.lastControlCode_ = e : e !== this.PADDING_ && (this.lastControlCode_ = null), n = e >>> 8, r = 255 & e, e !== this.PADDING_)
                        if (e === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
                        else if (e === this.END_OF_CAPTION_) this.mode_ = "popOn", this.clearFormatting(t.pts), this.flushDisplayed(t.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = t.pts;
                    else if (e === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(t.pts);
                    else if (e === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(t.pts);
                    else if (e === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, this.setRollUp(t.pts);
                    else if (e === this.CARRIAGE_RETURN_) this.clearFormatting(t.pts), this.flushDisplayed(t.pts), this.shiftRowsUp_(), this.startPts_ = t.pts;
                    else if (e === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
                    else if (e === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(t.pts), this.displayed_ = eu();
                    else if (e === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = eu();
                    else if (e === this.RESUME_DIRECT_CAPTIONING_) "paintOn" !== this.mode_ && (this.flushDisplayed(t.pts), this.displayed_ = eu()), this.mode_ = "paintOn", this.startPts_ = t.pts;
                    else if (this.isSpecialCharacter(n, r)) a = Zo((n = (3 & n) << 8) | r), this[this.mode_](t.pts, a), this.column_++;
                    else if (this.isExtCharacter(n, r)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1), a = Zo((n = (3 & n) << 8) | r), this[this.mode_](t.pts, a), this.column_++;
                    else if (this.isMidRowCode(n, r)) this.clearFormatting(t.pts), this[this.mode_](t.pts, " "), this.column_++, 14 == (14 & r) && this.addFormatting(t.pts, ["i"]), 1 == (1 & r) && this.addFormatting(t.pts, ["u"]);
                    else if (this.isOffsetControlCode(n, r)) this.column_ += 3 & r;
                    else if (this.isPAC(n, r)) {
                        var s = tu.indexOf(7968 & e);
                        "rollUp" === this.mode_ && this.setRollUp(t.pts, s), s !== this.row_ && (this.clearFormatting(t.pts), this.row_ = s), 1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(t.pts, ["u"]), 16 == (16 & e) && (this.column_ = 4 * ((14 & e) >> 1)), this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(t.pts, ["i"])
                    } else this.isNormalChar(n) && (0 === r && (r = null), a = Zo(n), a += Zo(r), this[this.mode_](t.pts, a), this.column_ += a.length)
                } else this.lastControlCode_ = null
            }
        };
    iu.prototype = new $o, iu.prototype.flushDisplayed = function (t) {
        var e = this.displayed_.map(function (t) {
            return t.trim()
        }).join("\n").replace(/^\n+|\n+$/g, "");
        e.length && this.trigger("data", {
            startPts: this.startPts_,
            endPts: t,
            text: e,
            stream: this.name_
        })
    }, iu.prototype.reset = function () {
        this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = eu(), this.nonDisplayed_ = eu(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.rollUpRows_ = 2, this.formatting_ = []
    }, iu.prototype.setConstants = function () {
        0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
    }, iu.prototype.isSpecialCharacter = function (t, e) {
        return t === this.EXT_ && 48 <= e && e <= 63
    }, iu.prototype.isExtCharacter = function (t, e) {
        return (t === this.EXT_ + 1 || t === this.EXT_ + 2) && 32 <= e && e <= 63
    }, iu.prototype.isMidRowCode = function (t, e) {
        return t === this.EXT_ && 32 <= e && e <= 47
    }, iu.prototype.isOffsetControlCode = function (t, e) {
        return t === this.OFFSET_ && 33 <= e && e <= 35
    }, iu.prototype.isPAC = function (t, e) {
        return t >= this.BASE_ && t < this.BASE_ + 8 && 64 <= e && e <= 127
    }, iu.prototype.isColorPAC = function (t) {
        return 64 <= t && t <= 79 || 96 <= t && t <= 127
    }, iu.prototype.isNormalChar = function (t) {
        return 32 <= t && t <= 127
    }, iu.prototype.setRollUp = function (t, e) {
        if ("rollUp" !== this.mode_ && (this.row_ = 14, this.mode_ = "rollUp", this.flushDisplayed(t), this.nonDisplayed_ = eu(), this.displayed_ = eu()), void 0 !== e && e !== this.row_)
            for (var i = 0; i < this.rollUpRows_; i++) this.displayed_[e - i] = this.displayed_[this.row_ - i], this.displayed_[this.row_ - i] = "";
        void 0 === e && (e = this.row_), this.topRow_ = e - this.rollUpRows_ + 1
    }, iu.prototype.addFormatting = function (t, e) {
        this.formatting_ = this.formatting_.concat(e);
        var i = e.reduce(function (t, e) {
            return t + "<" + e + ">"
        }, "");
        this[this.mode_](t, i)
    }, iu.prototype.clearFormatting = function (t) {
        if (this.formatting_.length) {
            var e = this.formatting_.reverse().reduce(function (t, e) {
                return t + "</" + e + ">"
            }, "");
            this.formatting_ = [], this[this.mode_](t, e)
        }
    }, iu.prototype.popOn = function (t, e) {
        var i = this.nonDisplayed_[this.row_];
        i += e, this.nonDisplayed_[this.row_] = i
    }, iu.prototype.rollUp = function (t, e) {
        var i = this.displayed_[this.row_];
        i += e, this.displayed_[this.row_] = i
    }, iu.prototype.shiftRowsUp_ = function () {
        var t;
        for (t = 0; t < this.topRow_; t++) this.displayed_[t] = "";
        for (t = this.row_ + 1; t < 15; t++) this.displayed_[t] = "";
        for (t = this.topRow_; t < this.row_; t++) this.displayed_[t] = this.displayed_[t + 1];
        this.displayed_[this.row_] = ""
    }, iu.prototype.paintOn = function (t, e) {
        var i = this.displayed_[this.row_];
        i += e, this.displayed_[this.row_] = i
    };
    var nu = {
            CaptionStream: Jo,
            Cea608Stream: iu
        },
        ru = nu.CaptionStream,
        au = nu.Cea608Stream,
        su = Object.freeze({
            default: nu,
            __moduleExports: nu,
            CaptionStream: ru,
            Cea608Stream: au
        }),
        ou = {
            H264_STREAM_TYPE: 27,
            ADTS_STREAM_TYPE: 15,
            METADATA_STREAM_TYPE: 21
        },
        uu = ou.H264_STREAM_TYPE,
        lu = ou.ADTS_STREAM_TYPE,
        cu = ou.METADATA_STREAM_TYPE,
        du = Object.freeze({
            default: ou,
            __moduleExports: ou,
            H264_STREAM_TYPE: uu,
            ADTS_STREAM_TYPE: lu,
            METADATA_STREAM_TYPE: cu
        }),
        hu = function (t, e) {
            var i = 1;
            for (e < t && (i = -1); 4294967296 < Math.abs(e - t);) t += 8589934592 * i;
            return t
        },
        pu = function t(e) {
            var i, n;
            t.prototype.init.call(this), this.type_ = e, this.push = function (t) {
                t.type === this.type_ && (void 0 === n && (n = t.dts), t.dts = hu(t.dts, n), t.pts = hu(t.pts, n), i = t.dts, this.trigger("data", t))
            }, this.flush = function () {
                n = i, this.trigger("done")
            }, this.discontinuity = function () {
                i = n = void 0
            }
        };
    pu.prototype = new $o;
    var fu, mu = {
            TimestampRolloverStream: pu,
            handleRollover: hu
        },
        gu = mu.TimestampRolloverStream,
        yu = mu.handleRollover,
        vu = Object.freeze({
            default: mu,
            __moduleExports: mu,
            TimestampRolloverStream: gu,
            handleRollover: yu
        }),
        _u = du && ou || du,
        bu = function (t, e, i) {
            var n, r = "";
            for (n = e; n < i; n++) r += "%" + ("00" + t[n].toString(16)).slice(-2);
            return r
        },
        Tu = function (t, e, i) {
            return decodeURIComponent(bu(t, e, i))
        },
        Su = function (t) {
            return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
        },
        ku = {
            TXXX: function (t) {
                var e;
                if (3 === t.data[0]) {
                    for (e = 1; e < t.data.length; e++)
                        if (0 === t.data[e]) {
                            t.description = Tu(t.data, 1, e), t.value = Tu(t.data, e + 1, t.data.length).replace(/\0*$/, "");
                            break
                        } t.data = t.value
                }
            },
            WXXX: function (t) {
                var e;
                if (3 === t.data[0])
                    for (e = 1; e < t.data.length; e++)
                        if (0 === t.data[e]) {
                            t.description = Tu(t.data, 1, e), t.url = Tu(t.data, e + 1, t.data.length);
                            break
                        }
            },
            PRIV: function (t) {
                var e, i;
                for (e = 0; e < t.data.length; e++)
                    if (0 === t.data[e]) {
                        t.owner = (i = t.data, unescape(bu(i, 0, e)));
                        break
                    } t.privateData = t.data.subarray(e + 1), t.data = t.privateData
            }
        };
    (fu = function (t) {
        var e, u = {
                debug: !(!t || !t.debug),
                descriptor: t && t.descriptor
            },
            l = 0,
            c = [],
            d = 0;
        if (fu.prototype.init.call(this), this.dispatchType = _u.METADATA_STREAM_TYPE.toString(16), u.descriptor)
            for (e = 0; e < u.descriptor.length; e++) this.dispatchType += ("00" + u.descriptor[e].toString(16)).slice(-2);
        this.push = function (t) {
            var e, i, n, r, a;
            if ("timed-metadata" === t.type)
                if (t.dataAlignmentIndicator && (d = 0, c.length = 0), 0 === c.length && (t.data.length < 10 || t.data[0] !== "I".charCodeAt(0) || t.data[1] !== "D".charCodeAt(0) || t.data[2] !== "3".charCodeAt(0))) u.debug;
                else if (c.push(t), d += t.data.byteLength, 1 === c.length && (l = Su(t.data.subarray(6, 10)), l += 10), !(d < l)) {
                for (e = {
                        data: new Uint8Array(l),
                        frames: [],
                        pts: c[0].pts,
                        dts: c[0].dts
                    }, a = 0; a < l;) e.data.set(c[0].data.subarray(0, l - a), a), a += c[0].data.byteLength, d -= c[0].data.byteLength, c.shift();
                i = 10, 64 & e.data[5] && (i += 4, i += Su(e.data.subarray(10, 14)), l -= Su(e.data.subarray(16, 20)));
                do {
                    if ((n = Su(e.data.subarray(i + 4, i + 8))) < 1) return;
                    if ((r = {
                            id: String.fromCharCode(e.data[i], e.data[i + 1], e.data[i + 2], e.data[i + 3]),
                            data: e.data.subarray(i + 10, i + n + 10)
                        }).key = r.id, ku[r.id] && (ku[r.id](r), "com.apple.streaming.transportStreamTimestamp" === r.owner)) {
                        var s = r.data,
                            o = (1 & s[3]) << 30 | s[4] << 22 | s[5] << 14 | s[6] << 6 | s[7] >>> 2;
                        o *= 4, o += 3 & s[7], r.timeStamp = o, void 0 === e.pts && void 0 === e.dts && (e.pts = r.timeStamp, e.dts = r.timeStamp), this.trigger("timestamp", r)
                    }
                    e.frames.push(r), i += 10, i += n
                } while (i < l);
                this.trigger("data", e)
            }
        }
    }).prototype = new $o;
    var Cu, wu, Eu, Au = fu,
        Lu = Object.freeze({
            default: Au,
            __moduleExports: Au
        }),
        Ou = su && nu || su,
        Pu = vu && mu || vu,
        Uu = Lu && Au || Lu,
        xu = Pu.TimestampRolloverStream;
    (Cu = function () {
        var r = new Uint8Array(188),
            a = 0;
        Cu.prototype.init.call(this), this.push = function (t) {
            var e, i = 0,
                n = 188;
            for (a ? ((e = new Uint8Array(t.byteLength + a)).set(r.subarray(0, a)), e.set(t, a), a = 0) : e = t; n < e.byteLength;) 71 !== e[i] || 71 !== e[n] ? (i++, n++) : (this.trigger("data", e.subarray(i, n)), i += 188, n += 188);
            i < e.byteLength && (r.set(e.subarray(i), 0), a = e.byteLength - i)
        }, this.flush = function () {
            188 === a && 71 === r[0] && (this.trigger("data", r), a = 0), this.trigger("done")
        }
    }).prototype = new $o, (wu = function () {
        var n, r, a, s;
        wu.prototype.init.call(this), (s = this).packetsWaitingForPmt = [], this.programMapTable = void 0, n = function (t, e) {
            var i = 0;
            e.payloadUnitStartIndicator && (i += t[i] + 1), "pat" === e.type ? r(t.subarray(i), e) : a(t.subarray(i), e)
        }, r = function (t, e) {
            e.section_number = t[7], e.last_section_number = t[8], s.pmtPid = (31 & t[10]) << 8 | t[11], e.pmtPid = s.pmtPid
        }, a = function (t, e) {
            var i, n;
            if (1 & t[5]) {
                for (s.programMapTable = {
                        video: null,
                        audio: null,
                        "timed-metadata": {}
                    }, i = 3 + ((15 & t[1]) << 8 | t[2]) - 4, n = 12 + ((15 & t[10]) << 8 | t[11]); n < i;) {
                    var r = t[n],
                        a = (31 & t[n + 1]) << 8 | t[n + 2];
                    r === _u.H264_STREAM_TYPE && null === s.programMapTable.video ? s.programMapTable.video = a : r === _u.ADTS_STREAM_TYPE && null === s.programMapTable.audio ? s.programMapTable.audio = a : r === _u.METADATA_STREAM_TYPE && (s.programMapTable["timed-metadata"][a] = r), n += 5 + ((15 & t[n + 3]) << 8 | t[n + 4])
                }
                e.programMapTable = s.programMapTable
            }
        }, this.push = function (t) {
            var e = {},
                i = 4;
            if (e.payloadUnitStartIndicator = !!(64 & t[1]), e.pid = 31 & t[1], e.pid <<= 8, e.pid |= t[2], 1 < (48 & t[3]) >>> 4 && (i += t[i] + 1), 0 === e.pid) e.type = "pat", n(t.subarray(i), e), this.trigger("data", e);
            else if (e.pid === this.pmtPid)
                for (e.type = "pmt", n(t.subarray(i), e), this.trigger("data", e); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
            else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([t, i, e]) : this.processPes_(t, i, e)
        }, this.processPes_ = function (t, e, i) {
            i.pid === this.programMapTable.video ? i.streamType = _u.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = _u.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = t.subarray(e), this.trigger("data", i)
        }
    }).prototype = new $o, wu.STREAM_TYPES = {
        h264: 27,
        adts: 15
    }, (Eu = function () {
        var h = this,
            n = {
                data: [],
                size: 0
            },
            r = {
                data: [],
                size: 0
            },
            a = {
                data: [],
                size: 0
            },
            s = function (t, e, i) {
                var n, r, a = new Uint8Array(t.size),
                    s = {
                        type: e
                    },
                    o = 0,
                    u = 0;
                if (t.data.length && !(t.size < 9)) {
                    for (s.trackId = t.data[0].pid, o = 0; o < t.data.length; o++) r = t.data[o], a.set(r.data, u), u += r.data.byteLength;
                    var l, c, d;
                    l = a, (c = s).packetLength = 6 + (l[4] << 8 | l[5]), c.dataAlignmentIndicator = 0 != (4 & l[6]), 192 & (d = l[7]) && (c.pts = (14 & l[9]) << 27 | (255 & l[10]) << 20 | (254 & l[11]) << 12 | (255 & l[12]) << 5 | (254 & l[13]) >>> 3, c.pts *= 4, c.pts += (6 & l[13]) >>> 1, c.dts = c.pts, 64 & d && (c.dts = (14 & l[14]) << 27 | (255 & l[15]) << 20 | (254 & l[16]) << 12 | (255 & l[17]) << 5 | (254 & l[18]) >>> 3, c.dts *= 4, c.dts += (6 & l[18]) >>> 1)), c.data = l.subarray(9 + l[8]), n = "video" === e || s.packetLength <= t.size, (i || n) && (t.size = 0, t.data.length = 0), n && h.trigger("data", s)
                }
            };
        Eu.prototype.init.call(this), this.push = function (i) {
            ({
                pat: function () {},
                pes: function () {
                    var t, e;
                    switch (i.streamType) {
                        case _u.H264_STREAM_TYPE:
                        case _u.H264_STREAM_TYPE:
                            t = n, e = "video";
                            break;
                        case _u.ADTS_STREAM_TYPE:
                            t = r, e = "audio";
                            break;
                        case _u.METADATA_STREAM_TYPE:
                            t = a, e = "timed-metadata";
                            break;
                        default:
                            return
                    }
                    i.payloadUnitStartIndicator && s(t, e, !0), t.data.push(i), t.size += i.data.byteLength
                },
                pmt: function () {
                    var t = {
                            type: "metadata",
                            tracks: []
                        },
                        e = i.programMapTable;
                    null !== e.video && t.tracks.push({
                        timelineStartInfo: {
                            baseMediaDecodeTime: 0
                        },
                        id: +e.video,
                        codec: "avc",
                        type: "video"
                    }), null !== e.audio && t.tracks.push({
                        timelineStartInfo: {
                            baseMediaDecodeTime: 0
                        },
                        id: +e.audio,
                        codec: "adts",
                        type: "audio"
                    }), h.trigger("data", t)
                }
            })[i.type]()
        }, this.flush = function () {
            s(n, "video"), s(r, "audio"), s(a, "timed-metadata"), this.trigger("done")
        }
    }).prototype = new $o;
    var Iu = {
        PAT_PID: 0,
        MP2T_PACKET_LENGTH: 188,
        TransportPacketStream: Cu,
        TransportParseStream: wu,
        ElementaryStream: Eu,
        TimestampRolloverStream: xu,
        CaptionStream: Ou.CaptionStream,
        Cea608Stream: Ou.Cea608Stream,
        MetadataStream: Uu
    };
    for (var Du in _u) _u.hasOwnProperty(Du) && (Iu[Du] = _u[Du]);
    var Ru, Mu = Iu,
        Bu = Object.freeze({
            default: Mu,
            __moduleExports: Mu
        }),
        Nu = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
    (Ru = function () {
        var l;
        Ru.prototype.init.call(this), this.push = function (t) {
            var e, i, n, r, a, s, o = 0,
                u = 0;
            if ("audio" === t.type)
                for (l ? (r = l, (l = new Uint8Array(r.byteLength + t.data.byteLength)).set(r), l.set(t.data, r.byteLength)) : l = t.data; o + 5 < l.length;)
                    if (255 === l[o] && 240 == (246 & l[o + 1])) {
                        if (i = 2 * (1 & ~l[o + 1]), e = (3 & l[o + 3]) << 11 | l[o + 4] << 3 | (224 & l[o + 5]) >> 5, s = 9e4 * (a = 1024 * (1 + (3 & l[o + 6]))) / Nu[(60 & l[o + 2]) >>> 2], n = o + e, l.byteLength < n) return;
                        if (this.trigger("data", {
                                pts: t.pts + u * s,
                                dts: t.dts + u * s,
                                sampleCount: a,
                                audioobjecttype: 1 + (l[o + 2] >>> 6 & 3),
                                channelcount: (1 & l[o + 2]) << 2 | (192 & l[o + 3]) >>> 6,
                                samplerate: Nu[(60 & l[o + 2]) >>> 2],
                                samplingfrequencyindex: (60 & l[o + 2]) >>> 2,
                                samplesize: 16,
                                data: l.subarray(o + 7 + i, n)
                            }), l.byteLength === n) return void(l = void 0);
                        u++, l = l.subarray(n)
                    } else o++
        }, this.flush = function () {
            this.trigger("done")
        }
    }).prototype = new $o;
    var ju, Fu, Vu, Hu = Ru,
        zu = Object.freeze({
            default: Hu,
            __moduleExports: Hu
        }),
        qu = function (n) {
            var r = n.byteLength,
                a = 0,
                s = 0;
            this.length = function () {
                return 8 * r
            }, this.bitsAvailable = function () {
                return 8 * r + s
            }, this.loadWord = function () {
                var t = n.byteLength - r,
                    e = new Uint8Array(4),
                    i = Math.min(4, r);
                if (0 === i) throw new Error("no bytes available");
                e.set(n.subarray(t, t + i)), a = new DataView(e.buffer).getUint32(0), s = 8 * i, r -= i
            }, this.skipBits = function (t) {
                var e;
                t < s || (t -= s, t -= 8 * (e = Math.floor(t / 8)), r -= e, this.loadWord()), a <<= t, s -= t
            }, this.readBits = function (t) {
                var e = Math.min(s, t),
                    i = a >>> 32 - e;
                return 0 < (s -= e) ? a <<= e : 0 < r && this.loadWord(), 0 < (e = t - e) ? i << e | this.readBits(e) : i
            }, this.skipLeadingZeros = function () {
                var t;
                for (t = 0; t < s; ++t)
                    if (0 != (a & 2147483648 >>> t)) return a <<= t, s -= t, t;
                return this.loadWord(), t + this.skipLeadingZeros()
            }, this.skipUnsignedExpGolomb = function () {
                this.skipBits(1 + this.skipLeadingZeros())
            }, this.skipExpGolomb = function () {
                this.skipBits(1 + this.skipLeadingZeros())
            }, this.readUnsignedExpGolomb = function () {
                var t = this.skipLeadingZeros();
                return this.readBits(t + 1) - 1
            }, this.readExpGolomb = function () {
                var t = this.readUnsignedExpGolomb();
                return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
            }, this.readBoolean = function () {
                return 1 === this.readBits(1)
            }, this.readUnsignedByte = function () {
                return this.readBits(8)
            }, this.loadWord()
        },
        Wu = Object.freeze({
            default: qu,
            __moduleExports: qu
        }),
        Gu = Wu && qu || Wu;
    (Fu = function () {
        var i, n, r = 0;
        Fu.prototype.init.call(this), this.push = function (t) {
            var e;
            for (n ? ((e = new Uint8Array(n.byteLength + t.data.byteLength)).set(n), e.set(t.data, n.byteLength), n = e) : n = t.data; r < n.byteLength - 3; r++)
                if (1 === n[r + 2]) {
                    i = r + 5;
                    break
                } for (; i < n.byteLength;) switch (n[i]) {
                case 0:
                    if (0 !== n[i - 1]) {
                        i += 2;
                        break
                    }
                    if (0 !== n[i - 2]) {
                        i++;
                        break
                    }
                    for (r + 3 !== i - 2 && this.trigger("data", n.subarray(r + 3, i - 2)); 1 !== n[++i] && i < n.length;);
                    r = i - 2, i += 3;
                    break;
                case 1:
                    if (0 !== n[i - 1] || 0 !== n[i - 2]) {
                        i += 3;
                        break
                    }
                    this.trigger("data", n.subarray(r + 3, i - 2)), r = i - 2, i += 3;
                    break;
                default:
                    i += 3
            }
            n = n.subarray(r), i -= r, r = 0
        }, this.flush = function () {
            n && 3 < n.byteLength && this.trigger("data", n.subarray(r + 3)), n = null, r = 0, this.trigger("done")
        }
    }).prototype = new $o, Vu = {
        100: !0,
        110: !0,
        122: !0,
        244: !0,
        44: !0,
        83: !0,
        86: !0,
        118: !0,
        128: !0,
        138: !0,
        139: !0,
        134: !0
    }, (ju = function () {
        var i, n, r, a, s, o, _, e = new Fu;
        ju.prototype.init.call(this), (i = this).push = function (t) {
            "video" === t.type && (n = t.trackId, r = t.pts, a = t.dts, e.push(t))
        }, e.on("data", function (t) {
            var e = {
                trackId: n,
                pts: r,
                dts: a,
                data: t
            };
            switch (31 & t[0]) {
                case 5:
                    e.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                    break;
                case 6:
                    e.nalUnitType = "sei_rbsp", e.escapedRBSP = s(t.subarray(1));
                    break;
                case 7:
                    e.nalUnitType = "seq_parameter_set_rbsp", e.escapedRBSP = s(t.subarray(1)), e.config = o(e.escapedRBSP);
                    break;
                case 8:
                    e.nalUnitType = "pic_parameter_set_rbsp";
                    break;
                case 9:
                    e.nalUnitType = "access_unit_delimiter_rbsp"
            }
            i.trigger("data", e)
        }), e.on("done", function () {
            i.trigger("done")
        }), this.flush = function () {
            e.flush()
        }, _ = function (t, e) {
            var i, n = 8,
                r = 8;
            for (i = 0; i < t; i++) 0 !== r && (r = (n + e.readExpGolomb() + 256) % 256), n = 0 === r ? n : r
        }, s = function (t) {
            for (var e, i, n = t.byteLength, r = [], a = 1; a < n - 2;) 0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2] ? (r.push(a + 2), a += 2) : a++;
            if (0 === r.length) return t;
            e = n - r.length, i = new Uint8Array(e);
            var s = 0;
            for (a = 0; a < e; s++, a++) s === r[0] && (s++, r.shift()), i[a] = t[s];
            return i
        }, o = function (t) {
            var e, i, n, r, a, s, o, u, l, c, d, h, p, f = 0,
                m = 0,
                g = 0,
                y = 0,
                v = 1;
            if (i = (e = new Gu(t)).readUnsignedByte(), r = e.readUnsignedByte(), n = e.readUnsignedByte(), e.skipUnsignedExpGolomb(), Vu[i] && (3 === (a = e.readUnsignedExpGolomb()) && e.skipBits(1), e.skipUnsignedExpGolomb(), e.skipUnsignedExpGolomb(), e.skipBits(1), e.readBoolean()))
                for (d = 3 !== a ? 8 : 12, p = 0; p < d; p++) e.readBoolean() && _(p < 6 ? 16 : 64, e);
            if (e.skipUnsignedExpGolomb(), 0 === (s = e.readUnsignedExpGolomb())) e.readUnsignedExpGolomb();
            else if (1 === s)
                for (e.skipBits(1), e.skipExpGolomb(), e.skipExpGolomb(), o = e.readUnsignedExpGolomb(), p = 0; p < o; p++) e.skipExpGolomb();
            if (e.skipUnsignedExpGolomb(), e.skipBits(1), u = e.readUnsignedExpGolomb(), l = e.readUnsignedExpGolomb(), 0 === (c = e.readBits(1)) && e.skipBits(1), e.skipBits(1), e.readBoolean() && (f = e.readUnsignedExpGolomb(), m = e.readUnsignedExpGolomb(), g = e.readUnsignedExpGolomb(), y = e.readUnsignedExpGolomb()), e.readBoolean() && e.readBoolean()) {
                switch (e.readUnsignedByte()) {
                    case 1:
                        h = [1, 1];
                        break;
                    case 2:
                        h = [12, 11];
                        break;
                    case 3:
                        h = [10, 11];
                        break;
                    case 4:
                        h = [16, 11];
                        break;
                    case 5:
                        h = [40, 33];
                        break;
                    case 6:
                        h = [24, 11];
                        break;
                    case 7:
                        h = [20, 11];
                        break;
                    case 8:
                        h = [32, 11];
                        break;
                    case 9:
                        h = [80, 33];
                        break;
                    case 10:
                        h = [18, 11];
                        break;
                    case 11:
                        h = [15, 11];
                        break;
                    case 12:
                        h = [64, 33];
                        break;
                    case 13:
                        h = [160, 99];
                        break;
                    case 14:
                        h = [4, 3];
                        break;
                    case 15:
                        h = [3, 2];
                        break;
                    case 16:
                        h = [2, 1];
                        break;
                    case 255:
                        h = [e.readUnsignedByte() << 8 | e.readUnsignedByte(), e.readUnsignedByte() << 8 | e.readUnsignedByte()]
                }
                h && (v = h[0] / h[1])
            }
            return {
                profileIdc: i,
                levelIdc: n,
                profileCompatibility: r,
                width: Math.ceil((16 * (u + 1) - 2 * f - 2 * m) * v),
                height: (2 - c) * (l + 1) * 16 - 2 * g - 2 * y
            }
        }
    }).prototype = new $o;
    var Xu, Yu = {
            H264Stream: ju,
            NalByteStream: Fu
        },
        $u = Yu.H264Stream,
        Ku = Yu.NalByteStream,
        Ju = Object.freeze({
            default: Yu,
            __moduleExports: Yu,
            H264Stream: $u,
            NalByteStream: Ku
        });
    (Xu = function () {
        var o = new Uint8Array,
            u = 0;
        Xu.prototype.init.call(this), this.setTimestamp = function (t) {
            u = t
        }, this.parseId3TagSize = function (t, e) {
            var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
            return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
        }, this.parseAdtsSize = function (t, e) {
            var i = (224 & t[e + 5]) >> 5,
                n = t[e + 4] << 3;
            return 6144 & t[e + 3] | n | i
        }, this.push = function (t) {
            var e, i, n, r, a = 0,
                s = 0;
            for (o.length ? (r = o.length, (o = new Uint8Array(t.byteLength + r)).set(o.subarray(0, r)), o.set(t, r)) : o = t; 3 <= o.length - s;)
                if (o[s] !== "I".charCodeAt(0) || o[s + 1] !== "D".charCodeAt(0) || o[s + 2] !== "3".charCodeAt(0))
                    if (!0 & o[s] && 240 == (240 & o[s + 1])) {
                        if (o.length - s < 7) break;
                        if ((a = this.parseAdtsSize(o, s)) > o.length) break;
                        n = {
                            type: "audio",
                            data: o.subarray(s, s + a),
                            pts: u,
                            dts: u
                        }, this.trigger("data", n), s += a
                    } else s++;
            else {
                if (o.length - s < 10) break;
                if ((a = this.parseId3TagSize(o, s)) > o.length) break;
                i = {
                    type: "timed-metadata",
                    data: o.subarray(s, s + a)
                }, this.trigger("data", i), s += a
            }
            e = o.length - s, o = 0 < e ? o.subarray(s) : new Uint8Array
        }
    }).prototype = new $o;
    var Qu, Zu, tl, el, il, nl, rl, al, sl, ol, ul, ll, cl = Xu,
        dl = Object.freeze({
            default: cl,
            __moduleExports: cl
        }),
        hl = [33, 16, 5, 32, 164, 27],
        pl = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
        fl = function (t) {
            for (var e = []; t--;) e.push(0);
            return e
        },
        ml = {
            96000: [hl, [227, 64], fl(154), [56]],
            88200: [hl, [231], fl(170), [56]],
            64000: [hl, [248, 192], fl(240), [56]],
            48000: [hl, [255, 192], fl(268), [55, 148, 128], fl(54), [112]],
            44100: [hl, [255, 192], fl(268), [55, 163, 128], fl(84), [112]],
            32000: [hl, [255, 192], fl(268), [55, 234], fl(226), [112]],
            24000: [hl, [255, 192], fl(268), [55, 255, 128], fl(268), [111, 112], fl(126), [224]],
            16000: [hl, [255, 192], fl(268), [55, 255, 128], fl(268), [111, 255], fl(269), [223, 108], fl(195), [1, 192]],
            12000: [pl, fl(268), [3, 127, 248], fl(268), [6, 255, 240], fl(268), [13, 255, 224], fl(268), [27, 253, 128], fl(259), [56]],
            11025: [pl, fl(268), [3, 127, 248], fl(268), [6, 255, 240], fl(268), [13, 255, 224], fl(268), [27, 255, 192], fl(268), [55, 175, 128], fl(108), [112]],
            8000: [pl, fl(268), [3, 121, 16], fl(47), [7]]
        },
        gl = (Qu = ml, Object.keys(Qu).reduce(function (t, e) {
            return t[e] = new Uint8Array(Qu[e].reduce(function (t, e) {
                return t.concat(e)
            }, [])), t
        }, {})),
        yl = Object.freeze({
            default: gl,
            __moduleExports: gl
        }),
        vl = {
            secondsToVideoTs: Zu = function (t) {
                return 9e4 * t
            },
            secondsToAudioTs: tl = function (t, e) {
                return t * e
            },
            videoTsToSeconds: el = function (t) {
                return t / 9e4
            },
            audioTsToSeconds: il = function (t, e) {
                return t / e
            },
            audioTsToVideoTs: function (t, e) {
                return Zu(il(t, e))
            },
            videoTsToAudioTs: function (t, e) {
                return tl(el(t), e)
            }
        },
        _l = vl.secondsToVideoTs,
        bl = vl.secondsToAudioTs,
        Tl = vl.videoTsToSeconds,
        Sl = vl.audioTsToSeconds,
        kl = vl.audioTsToVideoTs,
        Cl = vl.videoTsToAudioTs,
        wl = Object.freeze({
            default: vl,
            __moduleExports: vl,
            secondsToVideoTs: _l,
            secondsToAudioTs: bl,
            videoTsToSeconds: Tl,
            audioTsToSeconds: Sl,
            audioTsToVideoTs: kl,
            videoTsToAudioTs: Cl
        }),
        El = Eo && bo || Eo,
        Al = Mo && Po || Mo,
        Ll = Vo && Bo || Vo,
        Ol = Bu && Mu || Bu,
        Pl = zu && Hu || zu,
        Ul = dl && cl || dl,
        xl = yl && gl || yl,
        Il = wl && vl || wl,
        Dl = (Ju && Yu || Ju).H264Stream,
        Rl = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
        Ml = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility"];
    ol = function (t) {
        return t[0] === "I".charCodeAt(0) && t[1] === "D".charCodeAt(0) && t[2] === "3".charCodeAt(0)
    }, ul = function (t, e) {
        var i;
        if (t.length !== e.length) return !1;
        for (i = 0; i < t.length; i++)
            if (t[i] !== e[i]) return !1;
        return !0
    }, ll = function (t) {
        var e, i = 0;
        for (e = 0; e < t.length; e++) i += t[e].data.byteLength;
        return i
    }, (rl = function (r, a) {
        var s = [],
            o = 0,
            e = 0,
            l = 0,
            c = 1 / 0;
        a = a || {}, rl.prototype.init.call(this), this.push = function (e) {
            Ll.collectDtsInfo(r, e), r && Rl.forEach(function (t) {
                r[t] = e[t]
            }), s.push(e)
        }, this.setEarliestDts = function (t) {
            e = t - r.timelineStartInfo.baseMediaDecodeTime
        }, this.setVideoBaseMediaDecodeTime = function (t) {
            c = t
        }, this.setAudioAppendStart = function (t) {
            l = t
        }, this.flush = function () {
            var t, e, i, n;
            0 !== s.length && (t = this.trimAdtsFramesByEarliestDts_(s), r.baseMediaDecodeTime = Ll.calculateTrackBaseMediaDecodeTime(r, a.keepOriginalTimestamps), this.prefixWithSilence_(r, t), r.samples = this.generateSampleTable_(t), i = El.mdat(this.concatenateFrameData_(t)), s = [], e = El.moof(o, [r]), n = new Uint8Array(e.byteLength + i.byteLength), o++, n.set(e), n.set(i, e.byteLength), Ll.clearDtsInfo(r), this.trigger("data", {
                track: r,
                boxes: n
            })), this.trigger("done", "AudioSegmentStream")
        }, this.prefixWithSilence_ = function (t, e) {
            var i, n, r, a, s = 0,
                o = 0,
                u = 0;
            if (e.length && (i = Il.audioTsToVideoTs(t.baseMediaDecodeTime, t.samplerate), n = Math.ceil(9e4 / (t.samplerate / 1024)), l && c && (s = i - Math.max(l, c), u = (o = Math.floor(s / n)) * n), !(o < 1 || 45e3 < u))) {
                for ((r = xl[t.samplerate]) || (r = e[0].data), a = 0; a < o; a++) e.splice(a, 0, {
                    data: r
                });
                t.baseMediaDecodeTime -= Math.floor(Il.videoTsToAudioTs(u, t.samplerate))
            }
        }, this.trimAdtsFramesByEarliestDts_ = function (t) {
            return r.minSegmentDts >= e ? t : (r.minSegmentDts = 1 / 0, t.filter(function (t) {
                return t.dts >= e && (r.minSegmentDts = Math.min(r.minSegmentDts, t.dts), r.minSegmentPts = r.minSegmentDts, !0)
            }))
        }, this.generateSampleTable_ = function (t) {
            var e, i, n = [];
            for (e = 0; e < t.length; e++) i = t[e], n.push({
                size: i.data.byteLength,
                duration: 1024
            });
            return n
        }, this.concatenateFrameData_ = function (t) {
            var e, i, n = 0,
                r = new Uint8Array(ll(t));
            for (e = 0; e < t.length; e++) i = t[e], r.set(i.data, n), n += i.data.byteLength;
            return r
        }
    }).prototype = new $o, (nl = function (o, u) {
        var e, i, l = 0,
            c = [],
            d = [];
        u = u || {}, nl.prototype.init.call(this), delete o.minPTS, this.gopCache_ = [], this.push = function (t) {
            Ll.collectDtsInfo(o, t), "seq_parameter_set_rbsp" !== t.nalUnitType || e || (e = t.config, o.sps = [t.data], Ml.forEach(function (t) {
                o[t] = e[t]
            }, this)), "pic_parameter_set_rbsp" !== t.nalUnitType || i || (i = t.data, o.pps = [t.data]), c.push(t)
        }, this.flush = function () {
            for (var t, e, i, n, r, a; c.length && "access_unit_delimiter_rbsp" !== c[0].nalUnitType;) c.shift();
            if (0 === c.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
            if (t = Al.groupNalsIntoFrames(c), (i = Al.groupFramesIntoGops(t))[0][0].keyFrame || ((e = this.getGopForFusion_(c[0], o)) ? (i.unshift(e), i.byteLength += e.byteLength, i.nalCount += e.nalCount, i.pts = e.pts, i.dts = e.dts, i.duration += e.duration) : i = Al.extendFirstKeyFrame(i)), d.length) {
                var s;
                if (!(s = u.alignGopsAtEnd ? this.alignGopsAtEnd_(i) : this.alignGopsAtStart_(i))) return this.gopCache_.unshift({
                    gop: i.pop(),
                    pps: o.pps,
                    sps: o.sps
                }), this.gopCache_.length = Math.min(6, this.gopCache_.length), c = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                Ll.clearDtsInfo(o), i = s
            }
            Ll.collectDtsInfo(o, i), o.samples = Al.generateSampleTable(i), r = El.mdat(Al.concatenateNalData(i)), o.baseMediaDecodeTime = Ll.calculateTrackBaseMediaDecodeTime(o, u.keepOriginalTimestamps), this.trigger("processedGopsInfo", i.map(function (t) {
                return {
                    pts: t.pts,
                    dts: t.dts,
                    byteLength: t.byteLength
                }
            })), this.gopCache_.unshift({
                gop: i.pop(),
                pps: o.pps,
                sps: o.sps
            }), this.gopCache_.length = Math.min(6, this.gopCache_.length), c = [], this.trigger("baseMediaDecodeTime", o.baseMediaDecodeTime), this.trigger("timelineStartInfo", o.timelineStartInfo), n = El.moof(l, [o]), a = new Uint8Array(n.byteLength + r.byteLength), l++, a.set(n), a.set(r, n.byteLength), this.trigger("data", {
                track: o,
                boxes: a
            }), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
        }, this.resetStream_ = function () {
            Ll.clearDtsInfo(o), i = e = void 0
        }, this.getGopForFusion_ = function (t) {
            var e, i, n, r, a, s = 1 / 0;
            for (a = 0; a < this.gopCache_.length; a++) n = (r = this.gopCache_[a]).gop, o.pps && ul(o.pps[0], r.pps[0]) && o.sps && ul(o.sps[0], r.sps[0]) && (n.dts < o.timelineStartInfo.dts || -1e4 <= (e = t.dts - n.dts - n.duration) && e <= 45e3 && (!i || e < s) && (i = r, s = e));
            return i ? i.gop : null
        }, this.alignGopsAtStart_ = function (t) {
            var e, i, n, r, a, s, o, u;
            for (a = t.byteLength, s = t.nalCount, o = t.duration, e = i = 0; e < d.length && i < t.length && (n = d[e], r = t[i], n.pts !== r.pts);) r.pts > n.pts ? e++ : (i++, a -= r.byteLength, s -= r.nalCount, o -= r.duration);
            return 0 === i ? t : i === t.length ? null : ((u = t.slice(i)).byteLength = a, u.duration = o, u.nalCount = s, u.pts = u[0].pts, u.dts = u[0].dts, u)
        }, this.alignGopsAtEnd_ = function (t) {
            var e, i, n, r, a, s, o;
            for (e = d.length - 1, i = t.length - 1, a = null, s = !1; 0 <= e && 0 <= i;) {
                if (n = d[e], r = t[i], n.pts === r.pts) {
                    s = !0;
                    break
                }
                n.pts > r.pts ? e-- : (e === d.length - 1 && (a = i), i--)
            }
            if (!s && null === a) return null;
            if (0 === (o = s ? i : a)) return t;
            var u = t.slice(o),
                l = u.reduce(function (t, e) {
                    return t.byteLength += e.byteLength, t.duration += e.duration, t.nalCount += e.nalCount, t
                }, {
                    byteLength: 0,
                    duration: 0,
                    nalCount: 0
                });
            return u.byteLength = l.byteLength, u.duration = l.duration, u.nalCount = l.nalCount, u.pts = u[0].pts, u.dts = u[0].dts, u
        }, this.alignGopsWith = function (t) {
            d = t
        }
    }).prototype = new $o, (sl = function (t, e) {
        this.numberOfTracks = 0, this.metadataStream = e, "undefined" != typeof t.remux ? this.remuxTracks = !!t.remux : this.remuxTracks = !0, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, sl.prototype.init.call(this), this.push = function (t) {
            return t.text ? this.pendingCaptions.push(t) : t.frames ? this.pendingMetadata.push(t) : (this.pendingTracks.push(t.track), this.pendingBoxes.push(t.boxes), this.pendingBytes += t.boxes.byteLength, "video" === t.track.type && (this.videoTrack = t.track), void("audio" === t.track.type && (this.audioTrack = t.track)))
        }
    }).prototype = new $o, sl.prototype.flush = function (t) {
        var e, i, n, r, a = 0,
            s = {
                captions: [],
                captionStreams: {},
                metadata: [],
                info: {}
            },
            o = 0;
        if (this.pendingTracks.length < this.numberOfTracks) {
            if ("VideoSegmentStream" !== t && "AudioSegmentStream" !== t) return;
            if (this.remuxTracks) return;
            if (0 === this.pendingTracks.length) return this.emittedTracks++, void(this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
        }
        for (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, Ml.forEach(function (t) {
                s.info[t] = this.videoTrack[t]
            }, this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, Rl.forEach(function (t) {
                s.info[t] = this.audioTrack[t]
            }, this)), 1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type : s.type = "combined", this.emittedTracks += this.pendingTracks.length, n = El.initSegment(this.pendingTracks), s.initSegment = new Uint8Array(n.byteLength), s.initSegment.set(n), s.data = new Uint8Array(this.pendingBytes), r = 0; r < this.pendingBoxes.length; r++) s.data.set(this.pendingBoxes[r], a), a += this.pendingBoxes[r].byteLength;
        for (r = 0; r < this.pendingCaptions.length; r++)(e = this.pendingCaptions[r]).startTime = e.startPts - o, e.startTime /= 9e4, e.endTime = e.endPts - o, e.endTime /= 9e4, s.captionStreams[e.stream] = !0, s.captions.push(e);
        for (r = 0; r < this.pendingMetadata.length; r++)(i = this.pendingMetadata[r]).cueTime = i.pts - o, i.cueTime /= 9e4, s.metadata.push(i);
        s.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", s), this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
    }, (al = function (n) {
        var r, a, s = this,
            i = !0;
        al.prototype.init.call(this), n = n || {}, this.baseMediaDecodeTime = n.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function () {
            var e = {};
            (this.transmuxPipeline_ = e).type = "aac", e.metadataStream = new Ol.MetadataStream, e.aacStream = new Ul, e.audioTimestampRolloverStream = new Ol.TimestampRolloverStream("audio"), e.timedMetadataTimestampRolloverStream = new Ol.TimestampRolloverStream("timed-metadata"), e.adtsStream = new Pl, e.coalesceStream = new sl(n, e.metadataStream), e.headOfPipeline = e.aacStream, e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream), e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream), e.metadataStream.on("timestamp", function (t) {
                e.aacStream.setTimestamp(t.timeStamp)
            }), e.aacStream.on("data", function (t) {
                "timed-metadata" !== t.type || e.audioSegmentStream || (a = a || {
                    timelineStartInfo: {
                        baseMediaDecodeTime: s.baseMediaDecodeTime
                    },
                    codec: "adts",
                    type: "audio"
                }, e.coalesceStream.numberOfTracks++, e.audioSegmentStream = new rl(a, n), e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))
            }), e.coalesceStream.on("data", this.trigger.bind(this, "data")), e.coalesceStream.on("done", this.trigger.bind(this, "done"))
        }, this.setupTsPipeline = function () {
            var i = {};
            (this.transmuxPipeline_ = i).type = "ts", i.metadataStream = new Ol.MetadataStream, i.packetStream = new Ol.TransportPacketStream, i.parseStream = new Ol.TransportParseStream, i.elementaryStream = new Ol.ElementaryStream, i.videoTimestampRolloverStream = new Ol.TimestampRolloverStream("video"), i.audioTimestampRolloverStream = new Ol.TimestampRolloverStream("audio"), i.timedMetadataTimestampRolloverStream = new Ol.TimestampRolloverStream("timed-metadata"), i.adtsStream = new Pl, i.h264Stream = new Dl, i.captionStream = new Ol.CaptionStream, i.coalesceStream = new sl(n, i.metadataStream), i.headOfPipeline = i.packetStream, i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream), i.elementaryStream.pipe(i.videoTimestampRolloverStream).pipe(i.h264Stream), i.elementaryStream.pipe(i.audioTimestampRolloverStream).pipe(i.adtsStream), i.elementaryStream.pipe(i.timedMetadataTimestampRolloverStream).pipe(i.metadataStream).pipe(i.coalesceStream), i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream), i.elementaryStream.on("data", function (t) {
                var e;
                if ("metadata" === t.type) {
                    for (e = t.tracks.length; e--;) r || "video" !== t.tracks[e].type ? a || "audio" !== t.tracks[e].type || ((a = t.tracks[e]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime) : (r = t.tracks[e]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime;
                    r && !i.videoSegmentStream && (i.coalesceStream.numberOfTracks++, i.videoSegmentStream = new nl(r, n), i.videoSegmentStream.on("timelineStartInfo", function (t) {
                        a && (a.timelineStartInfo = t, i.audioSegmentStream.setEarliestDts(t.dts))
                    }), i.videoSegmentStream.on("processedGopsInfo", s.trigger.bind(s, "gopInfo")), i.videoSegmentStream.on("baseMediaDecodeTime", function (t) {
                        a && i.audioSegmentStream.setVideoBaseMediaDecodeTime(t)
                    }), i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)), a && !i.audioSegmentStream && (i.coalesceStream.numberOfTracks++, i.audioSegmentStream = new rl(a, n), i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream))
                }
            }), i.coalesceStream.on("data", this.trigger.bind(this, "data")), i.coalesceStream.on("done", this.trigger.bind(this, "done"))
        }, this.setBaseMediaDecodeTime = function (t) {
            var e = this.transmuxPipeline_;
            this.baseMediaDecodeTime = t, a && (a.timelineStartInfo.dts = void 0, a.timelineStartInfo.pts = void 0, Ll.clearDtsInfo(a), a.timelineStartInfo.baseMediaDecodeTime = t, e.audioTimestampRolloverStream && e.audioTimestampRolloverStream.discontinuity()), r && (e.videoSegmentStream && (e.videoSegmentStream.gopCache_ = [], e.videoTimestampRolloverStream.discontinuity()), r.timelineStartInfo.dts = void 0, r.timelineStartInfo.pts = void 0, Ll.clearDtsInfo(r), e.captionStream.reset(), r.timelineStartInfo.baseMediaDecodeTime = t), e.timedMetadataTimestampRolloverStream && e.timedMetadataTimestampRolloverStream.discontinuity()
        }, this.setAudioAppendStart = function (t) {
            a && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)
        }, this.alignGopsWith = function (t) {
            r && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)
        }, this.push = function (t) {
            if (i) {
                var e = ol(t);
                e && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : e || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), i = !1
            }
            this.transmuxPipeline_.headOfPipeline.push(t)
        }, this.flush = function () {
            i = !0, this.transmuxPipeline_.headOfPipeline.flush()
        }, this.resetCaptions = function () {
            this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
        }
    }).prototype = new $o;
    var Bl, Nl, jl = {
            Transmuxer: al,
            VideoSegmentStream: nl,
            AudioSegmentStream: rl,
            AUDIO_PROPERTIES: Rl,
            VIDEO_PROPERTIES: Ml
        },
        Fl = jl.Transmuxer,
        Vl = jl.VideoSegmentStream,
        Hl = jl.AudioSegmentStream,
        zl = jl.AUDIO_PROPERTIES,
        ql = jl.VIDEO_PROPERTIES,
        Wl = Object.freeze({
            default: jl,
            __moduleExports: jl,
            Transmuxer: Fl,
            VideoSegmentStream: Vl,
            AudioSegmentStream: Hl,
            AUDIO_PROPERTIES: zl,
            VIDEO_PROPERTIES: ql
        }),
        Gl = vo.parseType,
        Xl = function (t) {
            return new Date(1e3 * t - 20828448e5)
        },
        Yl = function (t) {
            return {
                isLeading: (12 & t[0]) >>> 2,
                dependsOn: 3 & t[0],
                isDependedOn: (192 & t[1]) >>> 6,
                hasRedundancy: (48 & t[1]) >>> 4,
                paddingValue: (14 & t[1]) >>> 1,
                isNonSyncSample: 1 & t[1],
                degradationPriority: t[2] << 8 | t[3]
            }
        },
        $l = {
            avc1: function (t) {
                var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
                return {
                    dataReferenceIndex: e.getUint16(6),
                    width: e.getUint16(24),
                    height: e.getUint16(26),
                    horizresolution: e.getUint16(28) + e.getUint16(30) / 16,
                    vertresolution: e.getUint16(32) + e.getUint16(34) / 16,
                    frameCount: e.getUint16(40),
                    depth: e.getUint16(74),
                    config: Bl(t.subarray(78, t.byteLength))
                }
            },
            avcC: function (t) {
                var e, i, n, r, a = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    s = {
                        configurationVersion: t[0],
                        avcProfileIndication: t[1],
                        profileCompatibility: t[2],
                        avcLevelIndication: t[3],
                        lengthSizeMinusOne: 3 & t[4],
                        sps: [],
                        pps: []
                    },
                    o = 31 & t[5];
                for (n = 6, r = 0; r < o; r++) i = a.getUint16(n), n += 2, s.sps.push(new Uint8Array(t.subarray(n, n + i))), n += i;
                for (e = t[n], n++, r = 0; r < e; r++) i = a.getUint16(n), n += 2, s.pps.push(new Uint8Array(t.subarray(n, n + i))), n += i;
                return s
            },
            btrt: function (t) {
                var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
                return {
                    bufferSizeDB: e.getUint32(0),
                    maxBitrate: e.getUint32(4),
                    avgBitrate: e.getUint32(8)
                }
            },
            esds: function (t) {
                return {
                    version: t[0],
                    flags: new Uint8Array(t.subarray(1, 4)),
                    esId: t[6] << 8 | t[7],
                    streamPriority: 31 & t[8],
                    decoderConfig: {
                        objectProfileIndication: t[11],
                        streamType: t[12] >>> 2 & 63,
                        bufferSize: t[13] << 16 | t[14] << 8 | t[15],
                        maxBitrate: t[16] << 24 | t[17] << 16 | t[18] << 8 | t[19],
                        avgBitrate: t[20] << 24 | t[21] << 16 | t[22] << 8 | t[23],
                        decoderConfigDescriptor: {
                            tag: t[24],
                            length: t[25],
                            audioObjectType: t[26] >>> 3 & 31,
                            samplingFrequencyIndex: (7 & t[26]) << 1 | t[27] >>> 7 & 1,
                            channelConfiguration: t[27] >>> 3 & 15
                        }
                    }
                }
            },
            ftyp: function (t) {
                for (var e = new DataView(t.buffer, t.byteOffset, t.byteLength), i = {
                        majorBrand: Gl(t.subarray(0, 4)),
                        minorVersion: e.getUint32(4),
                        compatibleBrands: []
                    }, n = 8; n < t.byteLength;) i.compatibleBrands.push(Gl(t.subarray(n, n + 4))), n += 4;
                return i
            },
            dinf: function (t) {
                return {
                    boxes: Bl(t)
                }
            },
            dref: function (t) {
                return {
                    version: t[0],
                    flags: new Uint8Array(t.subarray(1, 4)),
                    dataReferences: Bl(t.subarray(8))
                }
            },
            hdlr: function (t) {
                var e = {
                        version: new DataView(t.buffer, t.byteOffset, t.byteLength).getUint8(0),
                        flags: new Uint8Array(t.subarray(1, 4)),
                        handlerType: Gl(t.subarray(8, 12)),
                        name: ""
                    },
                    i = 8;
                for (i = 24; i < t.byteLength; i++) {
                    if (0 === t[i]) {
                        i++;
                        break
                    }
                    e.name += String.fromCharCode(t[i])
                }
                return e.name = decodeURIComponent(escape(e.name)), e
            },
            mdat: function (t) {
                return {
                    byteLength: t.byteLength,
                    nals: function (t) {
                        var e, i, n = new DataView(t.buffer, t.byteOffset, t.byteLength),
                            r = [];
                        for (e = 0; e + 4 < t.length; e += i)
                            if (i = n.getUint32(e), e += 4, i <= 0) r.push("<span style='color:red;'>MALFORMED DATA</span>");
                            else switch (31 & t[e]) {
                                case 1:
                                    r.push("slice_layer_without_partitioning_rbsp");
                                    break;
                                case 5:
                                    r.push("slice_layer_without_partitioning_rbsp_idr");
                                    break;
                                case 6:
                                    r.push("sei_rbsp");
                                    break;
                                case 7:
                                    r.push("seq_parameter_set_rbsp");
                                    break;
                                case 8:
                                    r.push("pic_parameter_set_rbsp");
                                    break;
                                case 9:
                                    r.push("access_unit_delimiter_rbsp");
                                    break;
                                default:
                                    r.push("UNKNOWN NAL - " + t[e] & 31)
                            }
                        return r
                    }(t)
                }
            },
            mdhd: function (t) {
                var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    n = 4,
                    r = {
                        version: i.getUint8(0),
                        flags: new Uint8Array(t.subarray(1, 4)),
                        language: ""
                    };
                return 1 === r.version ? (n += 4, r.creationTime = Xl(i.getUint32(n)), n += 8, r.modificationTime = Xl(i.getUint32(n)), n += 4, r.timescale = i.getUint32(n), n += 8) : (r.creationTime = Xl(i.getUint32(n)), n += 4, r.modificationTime = Xl(i.getUint32(n)), n += 4, r.timescale = i.getUint32(n), n += 4), r.duration = i.getUint32(n), n += 4, e = i.getUint16(n), r.language += String.fromCharCode(96 + (e >> 10)), r.language += String.fromCharCode(96 + ((992 & e) >> 5)), r.language += String.fromCharCode(96 + (31 & e)), r
            },
            mdia: function (t) {
                return {
                    boxes: Bl(t)
                }
            },
            mfhd: function (t) {
                return {
                    version: t[0],
                    flags: new Uint8Array(t.subarray(1, 4)),
                    sequenceNumber: t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7]
                }
            },
            minf: function (t) {
                return {
                    boxes: Bl(t)
                }
            },
            mp4a: function (t) {
                var e = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    i = {
                        dataReferenceIndex: e.getUint16(6),
                        channelcount: e.getUint16(16),
                        samplesize: e.getUint16(18),
                        samplerate: e.getUint16(24) + e.getUint16(26) / 65536
                    };
                return 28 < t.byteLength && (i.streamDescriptor = Bl(t.subarray(28))[0]), i
            },
            moof: function (t) {
                return {
                    boxes: Bl(t)
                }
            },
            moov: function (t) {
                return {
                    boxes: Bl(t)
                }
            },
            mvex: function (t) {
                return {
                    boxes: Bl(t)
                }
            },
            mvhd: function (t) {
                var e = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    i = 4,
                    n = {
                        version: e.getUint8(0),
                        flags: new Uint8Array(t.subarray(1, 4))
                    };
                return 1 === n.version ? (i += 4, n.creationTime = Xl(e.getUint32(i)), i += 8, n.modificationTime = Xl(e.getUint32(i)), i += 4, n.timescale = e.getUint32(i), i += 8) : (n.creationTime = Xl(e.getUint32(i)), i += 4, n.modificationTime = Xl(e.getUint32(i)), i += 4, n.timescale = e.getUint32(i), i += 4), n.duration = e.getUint32(i), i += 4, n.rate = e.getUint16(i) + e.getUint16(i + 2) / 16, i += 4, n.volume = e.getUint8(i) + e.getUint8(i + 1) / 8, i += 2, i += 2, i += 8, n.matrix = new Uint32Array(t.subarray(i, i + 36)), i += 36, i += 24, n.nextTrackId = e.getUint32(i), n
            },
            pdin: function (t) {
                var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
                return {
                    version: e.getUint8(0),
                    flags: new Uint8Array(t.subarray(1, 4)),
                    rate: e.getUint32(4),
                    initialDelay: e.getUint32(8)
                }
            },
            sdtp: function (t) {
                var e, i = {
                    version: t[0],
                    flags: new Uint8Array(t.subarray(1, 4)),
                    samples: []
                };
                for (e = 4; e < t.byteLength; e++) i.samples.push({
                    dependsOn: (48 & t[e]) >> 4,
                    isDependedOn: (12 & t[e]) >> 2,
                    hasRedundancy: 3 & t[e]
                });
                return i
            },
            sidx: function (t) {
                var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    n = {
                        version: t[0],
                        flags: new Uint8Array(t.subarray(1, 4)),
                        references: [],
                        referenceId: i.getUint32(4),
                        timescale: i.getUint32(8),
                        earliestPresentationTime: i.getUint32(12),
                        firstOffset: i.getUint32(16)
                    },
                    r = i.getUint16(22);
                for (e = 24; r; e += 12, r--) n.references.push({
                    referenceType: (128 & t[e]) >>> 7,
                    referencedSize: 2147483647 & i.getUint32(e),
                    subsegmentDuration: i.getUint32(e + 4),
                    startsWithSap: !!(128 & t[e + 8]),
                    sapType: (112 & t[e + 8]) >>> 4,
                    sapDeltaTime: 268435455 & i.getUint32(e + 8)
                });
                return n
            },
            smhd: function (t) {
                return {
                    version: t[0],
                    flags: new Uint8Array(t.subarray(1, 4)),
                    balance: t[4] + t[5] / 256
                }
            },
            stbl: function (t) {
                return {
                    boxes: Bl(t)
                }
            },
            stco: function (t) {
                var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    n = {
                        version: t[0],
                        flags: new Uint8Array(t.subarray(1, 4)),
                        chunkOffsets: []
                    },
                    r = i.getUint32(4);
                for (e = 8; r; e += 4, r--) n.chunkOffsets.push(i.getUint32(e));
                return n
            },
            stsc: function (t) {
                var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    n = i.getUint32(4),
                    r = {
                        version: t[0],
                        flags: new Uint8Array(t.subarray(1, 4)),
                        sampleToChunks: []
                    };
                for (e = 8; n; e += 12, n--) r.sampleToChunks.push({
                    firstChunk: i.getUint32(e),
                    samplesPerChunk: i.getUint32(e + 4),
                    sampleDescriptionIndex: i.getUint32(e + 8)
                });
                return r
            },
            stsd: function (t) {
                return {
                    version: t[0],
                    flags: new Uint8Array(t.subarray(1, 4)),
                    sampleDescriptions: Bl(t.subarray(8))
                }
            },
            stsz: function (t) {
                var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    n = {
                        version: t[0],
                        flags: new Uint8Array(t.subarray(1, 4)),
                        sampleSize: i.getUint32(4),
                        entries: []
                    };
                for (e = 12; e < t.byteLength; e += 4) n.entries.push(i.getUint32(e));
                return n
            },
            stts: function (t) {
                var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    n = {
                        version: t[0],
                        flags: new Uint8Array(t.subarray(1, 4)),
                        timeToSamples: []
                    },
                    r = i.getUint32(4);
                for (e = 8; r; e += 8, r--) n.timeToSamples.push({
                    sampleCount: i.getUint32(e),
                    sampleDelta: i.getUint32(e + 4)
                });
                return n
            },
            styp: function (t) {
                return $l.ftyp(t)
            },
            tfdt: function (t) {
                var e = {
                    version: t[0],
                    flags: new Uint8Array(t.subarray(1, 4)),
                    baseMediaDecodeTime: t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7]
                };
                return 1 === e.version && (e.baseMediaDecodeTime *= Math.pow(2, 32), e.baseMediaDecodeTime += t[8] << 24 | t[9] << 16 | t[10] << 8 | t[11]), e
            },
            tfhd: function (t) {
                var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    n = {
                        version: t[0],
                        flags: new Uint8Array(t.subarray(1, 4)),
                        trackId: i.getUint32(4)
                    },
                    r = 1 & n.flags[2],
                    a = 2 & n.flags[2],
                    s = 8 & n.flags[2],
                    o = 16 & n.flags[2],
                    u = 32 & n.flags[2],
                    l = 65536 & n.flags[0],
                    c = 131072 & n.flags[0];
                return e = 8, r && (e += 4, n.baseDataOffset = i.getUint32(12), e += 4), a && (n.sampleDescriptionIndex = i.getUint32(e), e += 4), s && (n.defaultSampleDuration = i.getUint32(e), e += 4), o && (n.defaultSampleSize = i.getUint32(e), e += 4), u && (n.defaultSampleFlags = i.getUint32(e)), l && (n.durationIsEmpty = !0), !r && c && (n.baseDataOffsetIsMoof = !0), n
            },
            tkhd: function (t) {
                var e = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    i = 4,
                    n = {
                        version: e.getUint8(0),
                        flags: new Uint8Array(t.subarray(1, 4))
                    };
                return 1 === n.version ? (i += 4, n.creationTime = Xl(e.getUint32(i)), i += 8, n.modificationTime = Xl(e.getUint32(i)), i += 4, n.trackId = e.getUint32(i), i += 4, i += 8) : (n.creationTime = Xl(e.getUint32(i)), i += 4, n.modificationTime = Xl(e.getUint32(i)), i += 4, n.trackId = e.getUint32(i), i += 4, i += 4), n.duration = e.getUint32(i), i += 4, i += 8, n.layer = e.getUint16(i), i += 2, n.alternateGroup = e.getUint16(i), i += 2, n.volume = e.getUint8(i) + e.getUint8(i + 1) / 8, i += 2, i += 2, n.matrix = new Uint32Array(t.subarray(i, i + 36)), i += 36, n.width = e.getUint16(i) + e.getUint16(i + 2) / 16, i += 4, n.height = e.getUint16(i) + e.getUint16(i + 2) / 16, n
            },
            traf: function (t) {
                return {
                    boxes: Bl(t)
                }
            },
            trak: function (t) {
                return {
                    boxes: Bl(t)
                }
            },
            trex: function (t) {
                var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
                return {
                    version: t[0],
                    flags: new Uint8Array(t.subarray(1, 4)),
                    trackId: e.getUint32(4),
                    defaultSampleDescriptionIndex: e.getUint32(8),
                    defaultSampleDuration: e.getUint32(12),
                    defaultSampleSize: e.getUint32(16),
                    sampleDependsOn: 3 & t[20],
                    sampleIsDependedOn: (192 & t[21]) >> 6,
                    sampleHasRedundancy: (48 & t[21]) >> 4,
                    samplePaddingValue: (14 & t[21]) >> 1,
                    sampleIsDifferenceSample: !!(1 & t[21]),
                    sampleDegradationPriority: e.getUint16(22)
                }
            },
            trun: function (t) {
                var e, i = {
                        version: t[0],
                        flags: new Uint8Array(t.subarray(1, 4)),
                        samples: []
                    },
                    n = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    r = 1 & i.flags[2],
                    a = 4 & i.flags[2],
                    s = 1 & i.flags[1],
                    o = 2 & i.flags[1],
                    u = 4 & i.flags[1],
                    l = 8 & i.flags[1],
                    c = n.getUint32(4),
                    d = 8;
                for (r && (i.dataOffset = n.getInt32(d), d += 4), a && c && (e = {
                        flags: Yl(t.subarray(d, d + 4))
                    }, d += 4, s && (e.duration = n.getUint32(d), d += 4), o && (e.size = n.getUint32(d), d += 4), l && (e.compositionTimeOffset = n.getUint32(d), d += 4), i.samples.push(e), c--); c--;) e = {}, s && (e.duration = n.getUint32(d), d += 4), o && (e.size = n.getUint32(d), d += 4), u && (e.flags = Yl(t.subarray(d, d + 4)), d += 4), l && (e.compositionTimeOffset = n.getUint32(d), d += 4), i.samples.push(e);
                return i
            },
            "url ": function (t) {
                return {
                    version: t[0],
                    flags: new Uint8Array(t.subarray(1, 4))
                }
            },
            vmhd: function (t) {
                var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
                return {
                    version: t[0],
                    flags: new Uint8Array(t.subarray(1, 4)),
                    graphicsmode: e.getUint16(4),
                    opcolor: new Uint16Array([e.getUint16(6), e.getUint16(8), e.getUint16(10)])
                }
            }
        },
        Kl = {
            inspect: Bl = function (t) {
                for (var e, i, n, r, a, s = 0, o = [], u = new ArrayBuffer(t.length), l = new Uint8Array(u), c = 0; c < t.length; ++c) l[c] = t[c];
                for (e = new DataView(u); s < t.byteLength;) i = e.getUint32(s), n = Gl(t.subarray(s + 4, s + 8)), r = 1 < i ? s + i : t.byteLength, (a = ($l[n] || function (t) {
                    return {
                        data: t
                    }
                })(t.subarray(s + 8, r))).size = i, a.type = n, o.push(a), s = r;
                return o
            },
            textify: Nl = function (t, e) {
                var a;
                return e = e || 0, a = new Array(2 * e + 1).join(" "), t.map(function (r, t) {
                    return a + r.type + "\n" + Object.keys(r).filter(function (t) {
                        return "type" !== t && "boxes" !== t
                    }).map(function (t) {
                        var e = a + "  " + t + ": ",
                            i = r[t];
                        if (i instanceof Uint8Array || i instanceof Uint32Array) {
                            var n = Array.prototype.slice.call(new Uint8Array(i.buffer, i.byteOffset, i.byteLength)).map(function (t) {
                                return " " + ("00" + t.toString(16)).slice(-2)
                            }).join("").match(/.{1,24}/g);
                            return n ? 1 === n.length ? e + "<" + n.join("").slice(1) + ">" : e + "<\n" + n.map(function (t) {
                                return a + "  " + t
                            }).join("\n") + "\n" + a + "  >" : e + "<>"
                        }
                        return e + JSON.stringify(i, null, 2).split("\n").map(function (t, e) {
                            return 0 === e ? t : a + "  " + t
                        }).join("\n")
                    }).join("\n") + (r.boxes ? "\n" + Nl(r.boxes, e + 1) : "")
                }).join("\n")
            },
            parseTfdt: $l.tfdt,
            parseHdlr: $l.hdlr,
            parseTfhd: $l.tfhd,
            parseTrun: $l.trun
        },
        Jl = Kl.inspect,
        Ql = Kl.textify,
        Zl = Kl.parseTfdt,
        tc = Kl.parseHdlr,
        ec = Kl.parseTfhd,
        ic = Kl.parseTrun,
        nc = Object.freeze({
            default: Kl,
            __moduleExports: Kl,
            inspect: Jl,
            textify: Ql,
            parseTfdt: Zl,
            parseHdlr: tc,
            parseTfhd: ec,
            parseTrun: ic
        }),
        rc = nc && Kl || nc,
        ac = Ko.discardEmulationPreventionBytes,
        sc = Ou.CaptionStream,
        oc = function (t, e) {
            for (var i = t, n = 0; n < e.length; n++) {
                var r = e[n];
                if (i < r.size) return r;
                i -= r.size
            }
            return null
        },
        uc = function (t, y) {
            var n = vo.findBox(t, ["moof", "traf"]),
                e = vo.findBox(t, ["mdat"]),
                v = {},
                r = [];
            return e.forEach(function (t, e) {
                var i = n[e];
                r.push({
                    mdat: t,
                    traf: i
                })
            }), r.forEach(function (t) {
                var e, i, n, r, a, s, o, u, l = t.mdat,
                    c = t.traf,
                    d = vo.findBox(c, ["tfhd"]),
                    h = rc.parseTfhd(d[0]),
                    p = h.trackId,
                    f = vo.findBox(c, ["tfdt"]),
                    m = 0 < f.length ? rc.parseTfdt(f[0]).baseMediaDecodeTime : 0,
                    g = vo.findBox(c, ["trun"]);
                y === p && 0 < g.length && (i = g, r = m, a = (n = h).defaultSampleDuration || 0, s = n.defaultSampleSize || 0, o = n.trackId, u = [], i.forEach(function (t) {
                    var e = rc.parseTrun(t).samples;
                    e.forEach(function (t) {
                        void 0 === t.duration && (t.duration = a), void 0 === t.size && (t.size = s), t.trackId = o, t.dts = r, void 0 === t.compositionTimeOffset && (t.compositionTimeOffset = 0), t.pts = r + t.compositionTimeOffset, r += t.duration
                    }), u = u.concat(e)
                }), e = function (t, e, i) {
                    var n, r, a, s, o = new DataView(t.buffer, t.byteOffset, t.byteLength),
                        u = [];
                    for (r = 0; r + 4 < t.length; r += a)
                        if (a = o.getUint32(r), r += 4, !(a <= 0)) switch (31 & t[r]) {
                            case 6:
                                var l = t.subarray(r + 1, r + 1 + a),
                                    c = oc(r, e);
                                n = {
                                    nalUnitType: "sei_rbsp",
                                    size: a,
                                    data: l,
                                    escapedRBSP: ac(l),
                                    trackId: i
                                }, c ? (n.pts = c.pts, n.dts = c.dts, s = c) : (n.pts = s.pts, n.dts = s.dts), u.push(n)
                        }
                    return u
                }(l, u, p), v[p] || (v[p] = []), v[p] = v[p].concat(e))
            }), v
        },
        lc = function () {
            var e, u, l, c, d, t = !1;
            this.isInitialized = function () {
                return t
            }, this.init = function () {
                e = new sc, t = !0, e.on("data", function (t) {
                    t.startTime = t.startPts / c, t.endTime = t.endPts / c, d.captions.push(t), d.captionStreams[t.stream] = !0
                })
            }, this.isNewInit = function (t, e) {
                return !(t && 0 === t.length || e && "object" === ("undefined" == typeof e ? "undefined" : Ee(e)) && 0 === Object.keys(e).length || l === t[0] && c === e[l])
            }, this.parse = function (t, e, i) {
                var n, r, a, s;
                if (!this.isInitialized()) return null;
                if (!e || !i) return null;
                if (this.isNewInit(e, i)) l = e[0], c = i[l];
                else if (!l || !c) return u.push(t), null;
                for (; 0 < u.length;) {
                    var o = u.shift();
                    this.parse(o, e, i)
                }
                return r = t, s = c, null !== (n = (a = l) ? {
                    seiNals: uc(r, a)[a],
                    timescale: s
                } : null) && n.seiNals ? (this.pushNals(n.seiNals), this.flushStream(), d) : null
            }, this.pushNals = function (t) {
                if (!this.isInitialized() || !t || 0 === t.length) return null;
                t.forEach(function (t) {
                    e.push(t)
                })
            }, this.flushStream = function () {
                if (!this.isInitialized()) return null;
                e.flush()
            }, this.clearParsedCaptions = function () {
                d.captions = [], d.captionStreams = {}
            }, this.resetCaptionStream = function () {
                if (!this.isInitialized()) return null;
                e.reset()
            }, this.clearAllCaptions = function () {
                this.clearParsedCaptions(), this.resetCaptionStream()
            }, this.reset = function () {
                u = [], c = l = null, d ? this.clearParsedCaptions() : d = {
                    captions: [],
                    captionStreams: {}
                }, this.resetCaptionStream()
            }, this.reset()
        },
        cc = Object.freeze({
            default: lc,
            __moduleExports: lc
        }),
        dc = Wl && jl || Wl,
        hc = cc && lc || cc,
        pc = {
            generator: El,
            probe: vo,
            Transmuxer: dc.Transmuxer,
            AudioSegmentStream: dc.AudioSegmentStream,
            VideoSegmentStream: dc.VideoSegmentStream,
            CaptionParser: hc
        }.CaptionParser,
        fc = function (t) {
            var e = 31 & t[1];
            return e <<= 8, e |= t[2]
        },
        mc = function (t) {
            return !!(64 & t[1])
        },
        gc = function (t) {
            var e = 0;
            return 1 < (48 & t[3]) >>> 4 && (e += t[4] + 1), e
        },
        yc = function (t) {
            switch (t) {
                case 5:
                    return "slice_layer_without_partitioning_rbsp_idr";
                case 6:
                    return "sei_rbsp";
                case 7:
                    return "seq_parameter_set_rbsp";
                case 8:
                    return "pic_parameter_set_rbsp";
                case 9:
                    return "access_unit_delimiter_rbsp";
                default:
                    return null
            }
        },
        vc = {
            parseType: function (t, e) {
                var i = fc(t);
                return 0 === i ? "pat" : i === e ? "pmt" : e ? "pes" : null
            },
            parsePat: function (t) {
                var e = mc(t),
                    i = 4 + gc(t);
                return e && (i += t[i] + 1), (31 & t[i + 10]) << 8 | t[i + 11]
            },
            parsePmt: function (t) {
                var e = {},
                    i = mc(t),
                    n = 4 + gc(t);
                if (i && (n += t[n] + 1), 1 & t[n + 5]) {
                    var r;
                    r = 3 + ((15 & t[n + 1]) << 8 | t[n + 2]) - 4;
                    for (var a = 12 + ((15 & t[n + 10]) << 8 | t[n + 11]); a < r;) {
                        var s = n + a;
                        e[(31 & t[s + 1]) << 8 | t[s + 2]] = t[s], a += 5 + ((15 & t[s + 3]) << 8 | t[s + 4])
                    }
                    return e
                }
            },
            parsePayloadUnitStartIndicator: mc,
            parsePesType: function (t, e) {
                switch (e[fc(t)]) {
                    case _u.H264_STREAM_TYPE:
                        return "video";
                    case _u.ADTS_STREAM_TYPE:
                        return "audio";
                    case _u.METADATA_STREAM_TYPE:
                        return "timed-metadata";
                    default:
                        return null
                }
            },
            parsePesTime: function (t) {
                if (!mc(t)) return null;
                var e = 4 + gc(t);
                if (e >= t.byteLength) return null;
                var i, n = null;
                return 192 & (i = t[e + 7]) && ((n = {}).pts = (14 & t[e + 9]) << 27 | (255 & t[e + 10]) << 20 | (254 & t[e + 11]) << 12 | (255 & t[e + 12]) << 5 | (254 & t[e + 13]) >>> 3, n.pts *= 4, n.pts += (6 & t[e + 13]) >>> 1, n.dts = n.pts, 64 & i && (n.dts = (14 & t[e + 14]) << 27 | (255 & t[e + 15]) << 20 | (254 & t[e + 16]) << 12 | (255 & t[e + 17]) << 5 | (254 & t[e + 18]) >>> 3, n.dts *= 4, n.dts += (6 & t[e + 18]) >>> 1)), n
            },
            videoPacketContainsKeyFrame: function (t) {
                for (var e = 4 + gc(t), i = t.subarray(e), n = 0, r = 0, a = !1; r < i.byteLength - 3; r++)
                    if (1 === i[r + 2]) {
                        n = r + 5;
                        break
                    } for (; n < i.byteLength;) switch (i[n]) {
                    case 0:
                        if (0 !== i[n - 1]) {
                            n += 2;
                            break
                        }
                        if (0 !== i[n - 2]) {
                            n++;
                            break
                        }
                        for (r + 3 !== n - 2 && "slice_layer_without_partitioning_rbsp_idr" === yc(31 & i[r + 3]) && (a = !0); 1 !== i[++n] && n < i.length;);
                        r = n - 2, n += 3;
                        break;
                    case 1:
                        if (0 !== i[n - 1] || 0 !== i[n - 2]) {
                            n += 3;
                            break
                        }
                        "slice_layer_without_partitioning_rbsp_idr" === yc(31 & i[r + 3]) && (a = !0), r = n - 2, n += 3;
                        break;
                    default:
                        n += 3
                }
                return i = i.subarray(r), n -= r, r = 0, i && 3 < i.byteLength && "slice_layer_without_partitioning_rbsp_idr" === yc(31 & i[r + 3]) && (a = !0), a
            }
        },
        _c = vc.parseType,
        bc = vc.parsePat,
        Tc = vc.parsePmt,
        Sc = vc.parsePayloadUnitStartIndicator,
        kc = vc.parsePesType,
        Cc = vc.parsePesTime,
        wc = vc.videoPacketContainsKeyFrame,
        Ec = Object.freeze({
            default: vc,
            __moduleExports: vc,
            parseType: _c,
            parsePat: bc,
            parsePmt: Tc,
            parsePayloadUnitStartIndicator: Sc,
            parsePesType: kc,
            parsePesTime: Cc,
            videoPacketContainsKeyFrame: wc
        }),
        Ac = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
        Lc = function (t) {
            return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
        },
        Oc = {
            parseId3TagSize: function (t, e) {
                var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
                return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
            },
            parseAdtsSize: function (t, e) {
                var i = (224 & t[e + 5]) >> 5,
                    n = t[e + 4] << 3;
                return 6144 & t[e + 3] | n | i
            },
            parseType: function (t, e) {
                return t[e] === "I".charCodeAt(0) && t[e + 1] === "D".charCodeAt(0) && t[e + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & t[e] && 240 == (240 & t[e + 1]) ? "audio" : null
            },
            parseSampleRate: function (t) {
                for (var e = 0; e + 5 < t.length;) {
                    if (255 === t[e] && 240 == (246 & t[e + 1])) return Ac[(60 & t[e + 2]) >>> 2];
                    e++
                }
                return null
            },
            parseAacTimestamp: function (t) {
                var e, i, n;
                e = 10, 64 & t[5] && (e += 4, e += Lc(t.subarray(10, 14)));
                do {
                    if ((i = Lc(t.subarray(e + 4, e + 8))) < 1) return null;
                    if ("PRIV" === String.fromCharCode(t[e], t[e + 1], t[e + 2], t[e + 3])) {
                        n = t.subarray(e + 10, e + i + 10);
                        for (var r = 0; r < n.byteLength; r++)
                            if (0 === n[r]) {
                                if ("com.apple.streaming.transportStreamTimestamp" === unescape(function (t, e, i) {
                                        var n, r = "";
                                        for (n = e; n < i; n++) r += "%" + ("00" + t[n].toString(16)).slice(-2);
                                        return r
                                    }(n, 0, r))) {
                                    var a = n.subarray(r + 1),
                                        s = (1 & a[3]) << 30 | a[4] << 22 | a[5] << 14 | a[6] << 6 | a[7] >>> 2;
                                    return s *= 4, s += 3 & a[7]
                                }
                                break
                            }
                    }
                    e += 10, e += i
                } while (e < t.byteLength);
                return null
            }
        },
        Pc = Oc.parseId3TagSize,
        Uc = Oc.parseAdtsSize,
        xc = Oc.parseType,
        Ic = Oc.parseSampleRate,
        Dc = Oc.parseAacTimestamp,
        Rc = Object.freeze({
            default: Oc,
            __moduleExports: Oc,
            parseId3TagSize: Pc,
            parseAdtsSize: Uc,
            parseType: xc,
            parseSampleRate: Ic,
            parseAacTimestamp: Dc
        }),
        Mc = Ec && vc || Ec,
        Bc = Rc && Oc || Rc,
        Nc = Pu.handleRollover,
        jc = {};
    jc.ts = Mc, jc.aac = Bc;
    var Fc = 188,
        Vc = function (t, e, i) {
            for (var n, r, a, s, o = 0, u = Fc, l = !1; u < t.byteLength;)
                if (71 !== t[o] || 71 !== t[u]) o++, u++;
                else {
                    switch (n = t.subarray(o, u), jc.ts.parseType(n, e.pid)) {
                        case "pes":
                            r = jc.ts.parsePesType(n, e.table), a = jc.ts.parsePayloadUnitStartIndicator(n), "audio" === r && a && (s = jc.ts.parsePesTime(n)) && (s.type = "audio", i.audio.push(s), l = !0)
                    }
                    if (l) break;
                    o += Fc, u += Fc
                } for (o = (u = t.byteLength) - Fc, l = !1; 0 <= o;)
                if (71 !== t[o] || 71 !== t[u]) o--, u--;
                else {
                    switch (n = t.subarray(o, u), jc.ts.parseType(n, e.pid)) {
                        case "pes":
                            r = jc.ts.parsePesType(n, e.table), a = jc.ts.parsePayloadUnitStartIndicator(n), "audio" === r && a && (s = jc.ts.parsePesTime(n)) && (s.type = "audio", i.audio.push(s), l = !0)
                    }
                    if (l) break;
                    o -= Fc, u -= Fc
                }
        },
        Hc = function (t, e, i) {
            for (var n, r, a, s, o, u, l, c = 0, d = Fc, h = !1, p = {
                    data: [],
                    size: 0
                }; d < t.byteLength;)
                if (71 !== t[c] || 71 !== t[d]) c++, d++;
                else {
                    switch (n = t.subarray(c, d), jc.ts.parseType(n, e.pid)) {
                        case "pes":
                            if (r = jc.ts.parsePesType(n, e.table), a = jc.ts.parsePayloadUnitStartIndicator(n), "video" === r && (a && !h && (s = jc.ts.parsePesTime(n)) && (s.type = "video", i.video.push(s), h = !0), !i.firstKeyFrame)) {
                                if (a && 0 !== p.size) {
                                    for (o = new Uint8Array(p.size), u = 0; p.data.length;) l = p.data.shift(), o.set(l, u), u += l.byteLength;
                                    jc.ts.videoPacketContainsKeyFrame(o) && (i.firstKeyFrame = jc.ts.parsePesTime(o), i.firstKeyFrame.type = "video"), p.size = 0
                                }
                                p.data.push(n), p.size += n.byteLength
                            }
                    }
                    if (h && i.firstKeyFrame) break;
                    c += Fc, d += Fc
                } for (c = (d = t.byteLength) - Fc, h = !1; 0 <= c;)
                if (71 !== t[c] || 71 !== t[d]) c--, d--;
                else {
                    switch (n = t.subarray(c, d), jc.ts.parseType(n, e.pid)) {
                        case "pes":
                            r = jc.ts.parsePesType(n, e.table), a = jc.ts.parsePayloadUnitStartIndicator(n), "video" === r && a && (s = jc.ts.parsePesTime(n)) && (s.type = "video", i.video.push(s), h = !0)
                    }
                    if (h) break;
                    c -= Fc, d -= Fc
                }
        },
        zc = function (t) {
            var e = {
                    pid: null,
                    table: null
                },
                i = {};
            for (var n in function (t, e) {
                    for (var i, n = 0, r = Fc; r < t.byteLength;)
                        if (71 !== t[n] || 71 !== t[r]) n++, r++;
                        else {
                            switch (i = t.subarray(n, r), jc.ts.parseType(i, e.pid)) {
                                case "pat":
                                    e.pid || (e.pid = jc.ts.parsePat(i));
                                    break;
                                case "pmt":
                                    e.table || (e.table = jc.ts.parsePmt(i))
                            }
                            if (e.pid && e.table) return;
                            n += Fc, r += Fc
                        }
                }(t, e), e.table) {
                if (e.table.hasOwnProperty(n)) switch (e.table[n]) {
                    case _u.H264_STREAM_TYPE:
                        i.video = [], Hc(t, e, i), 0 === i.video.length && delete i.video;
                        break;
                    case _u.ADTS_STREAM_TYPE:
                        i.audio = [], Vc(t, e, i), 0 === i.audio.length && delete i.audio
                }
            }
            return i
        },
        qc = function (t, e) {
            var i, n;
            return (n = (i = t)[0] === "I".charCodeAt(0) && i[1] === "D".charCodeAt(0) && i[2] === "3".charCodeAt(0) ? function (t) {
                for (var e, i = !1, n = 0, r = null, a = null, s = 0, o = 0; 3 <= t.length - o;) {
                    switch (jc.aac.parseType(t, o)) {
                        case "timed-metadata":
                            if (t.length - o < 10) {
                                i = !0;
                                break
                            }
                            if ((s = jc.aac.parseId3TagSize(t, o)) > t.length) {
                                i = !0;
                                break
                            }
                            null === a && (e = t.subarray(o, o + s), a = jc.aac.parseAacTimestamp(e)), o += s;
                            break;
                        case "audio":
                            if (t.length - o < 7) {
                                i = !0;
                                break
                            }
                            if ((s = jc.aac.parseAdtsSize(t, o)) > t.length) {
                                i = !0;
                                break
                            }
                            null === r && (e = t.subarray(o, o + s), r = jc.aac.parseSampleRate(e)), n++, o += s;
                            break;
                        default:
                            o++
                    }
                    if (i) return null
                }
                if (null === r || null === a) return null;
                var u = 9e4 / r;
                return {
                    audio: [{
                        type: "audio",
                        dts: a,
                        pts: a
                    }, {
                        type: "audio",
                        dts: a + 1024 * n * u,
                        pts: a + 1024 * n * u
                    }]
                }
            }(t) : zc(t)) && (n.audio || n.video) ? (function (t, e) {
                if (t.audio && t.audio.length) {
                    var i = e;
                    "undefined" == typeof i && (i = t.audio[0].dts), t.audio.forEach(function (t) {
                        t.dts = Nc(t.dts, i), t.pts = Nc(t.pts, i), t.dtsTime = t.dts / 9e4, t.ptsTime = t.pts / 9e4
                    })
                }
                if (t.video && t.video.length) {
                    var n = e;
                    if ("undefined" == typeof n && (n = t.video[0].dts), t.video.forEach(function (t) {
                            t.dts = Nc(t.dts, n), t.pts = Nc(t.pts, n), t.dtsTime = t.dts / 9e4, t.ptsTime = t.pts / 9e4
                        }), t.firstKeyFrame) {
                        var r = t.firstKeyFrame;
                        r.dts = Nc(r.dts, n), r.pts = Nc(r.pts, n), r.dtsTime = r.dts / 9e4, r.ptsTime = r.dts / 9e4
                    }
                }
            }(n, e), n) : null
        };
    var Wc = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        Gc = function () {
            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), t
            }
        }(),
        Xc = function (t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== ("undefined" == typeof e ? "undefined" : Ee(e)) && "function" != typeof e ? t : e
        },
        Yc = function () {
            var t = [
                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ]
                ],
                e = t[0],
                i = t[1],
                n = e[4],
                r = i[4],
                a = void 0,
                s = void 0,
                o = void 0,
                u = [],
                l = [],
                c = void 0,
                d = void 0,
                h = void 0,
                p = void 0,
                f = void 0;
            for (a = 0; a < 256; a++) l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
            for (s = o = 0; !n[s]; s ^= c || 1, o = l[o] || 1)
                for (h = (h = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & h ^ 99, f = 16843009 * u[d = u[c = u[r[n[s] = h] = s]]] ^ 65537 * d ^ 257 * c ^ 16843008 * s, p = 257 * u[h] ^ 16843008 * h, a = 0; a < 4; a++) e[a][s] = p = p << 24 ^ p >>> 8, i[a][h] = f = f << 24 ^ f >>> 8;
            for (a = 0; a < 5; a++) e[a] = e[a].slice(0), i[a] = i[a].slice(0);
            return t
        },
        $c = null,
        Kc = function () {
            function c(t) {
                Wc(this, c), $c || ($c = Yc()), this._tables = [
                    [$c[0][0].slice(), $c[0][1].slice(), $c[0][2].slice(), $c[0][3].slice(), $c[0][4].slice()],
                    [$c[1][0].slice(), $c[1][1].slice(), $c[1][2].slice(), $c[1][3].slice(), $c[1][4].slice()]
                ];
                var e = void 0,
                    i = void 0,
                    n = void 0,
                    r = void 0,
                    a = void 0,
                    s = this._tables[0][4],
                    o = this._tables[1],
                    u = t.length,
                    l = 1;
                if (4 !== u && 6 !== u && 8 !== u) throw new Error("Invalid aes key size");
                for (r = t.slice(0), a = [], this._key = [r, a], e = u; e < 4 * u + 28; e++) n = r[e - 1], (e % u == 0 || 8 === u && e % u == 4) && (n = s[n >>> 24] << 24 ^ s[n >> 16 & 255] << 16 ^ s[n >> 8 & 255] << 8 ^ s[255 & n], e % u == 0 && (n = n << 8 ^ n >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))), r[e] = r[e - u] ^ n;
                for (i = 0; e; i++, e--) n = r[3 & i ? e : e - 4], a[i] = e <= 4 || i < 4 ? n : o[0][s[n >>> 24]] ^ o[1][s[n >> 16 & 255]] ^ o[2][s[n >> 8 & 255]] ^ o[3][s[255 & n]]
            }
            return c.prototype.decrypt = function (t, e, i, n, r, a) {
                var s = this._key[1],
                    o = t ^ s[0],
                    u = n ^ s[1],
                    l = i ^ s[2],
                    c = e ^ s[3],
                    d = void 0,
                    h = void 0,
                    p = void 0,
                    f = s.length / 4 - 2,
                    m = void 0,
                    g = 4,
                    y = this._tables[1],
                    v = y[0],
                    _ = y[1],
                    b = y[2],
                    T = y[3],
                    S = y[4];
                for (m = 0; m < f; m++) d = v[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g], h = v[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1], p = v[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2], c = v[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3], g += 4, o = d, u = h, l = p;
                for (m = 0; m < 4; m++) r[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++], d = o, o = u, u = l, l = c, c = d
            }, c
        }(),
        Jc = function () {
            function t() {
                Wc(this, t), this.listeners = {}
            }
            return t.prototype.on = function (t, e) {
                this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
            }, t.prototype.off = function (t, e) {
                if (!this.listeners[t]) return !1;
                var i = this.listeners[t].indexOf(e);
                return this.listeners[t].splice(i, 1), -1 < i
            }, t.prototype.trigger = function (t) {
                var e = this.listeners[t];
                if (e)
                    if (2 === arguments.length)
                        for (var i = e.length, n = 0; n < i; ++n) e[n].call(this, arguments[1]);
                    else
                        for (var r = Array.prototype.slice.call(arguments, 1), a = e.length, s = 0; s < a; ++s) e[s].apply(this, r)
            }, t.prototype.dispose = function () {
                this.listeners = {}
            }, t.prototype.pipe = function (e) {
                this.on("data", function (t) {
                    e.push(t)
                })
            }, t
        }(),
        Qc = function (e) {
            function i() {
                Wc(this, i);
                var t = Xc(this, e.call(this, Jc));
                return t.jobs = [], t.delay = 1, t.timeout_ = null, t
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : Ee(e)));
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(i, e), i.prototype.processJob_ = function () {
                this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
            }, i.prototype.push = function (t) {
                this.jobs.push(t), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
            }, i
        }(Jc),
        Zc = function (t) {
            return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
        },
        td = function (t, e, i) {
            var n = new Int32Array(t.buffer, t.byteOffset, t.byteLength >> 2),
                r = new Kc(Array.prototype.slice.call(e)),
                a = new Uint8Array(t.byteLength),
                s = new Int32Array(a.buffer),
                o = void 0,
                u = void 0,
                l = void 0,
                c = void 0,
                d = void 0,
                h = void 0,
                p = void 0,
                f = void 0,
                m = void 0;
            for (o = i[0], u = i[1], l = i[2], c = i[3], m = 0; m < n.length; m += 4) d = Zc(n[m]), h = Zc(n[m + 1]), p = Zc(n[m + 2]), f = Zc(n[m + 3]), r.decrypt(d, h, p, f, s, m), s[m] = Zc(s[m] ^ o), s[m + 1] = Zc(s[m + 1] ^ u), s[m + 2] = Zc(s[m + 2] ^ l), s[m + 3] = Zc(s[m + 3] ^ c), o = d, u = h, l = p, c = f;
            return a
        },
        ed = function () {
            function u(t, e, i, n) {
                Wc(this, u);
                var r = u.STEP,
                    a = new Int32Array(t.buffer),
                    s = new Uint8Array(t.byteLength),
                    o = 0;
                for (this.asyncStream_ = new Qc, this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + r), e, i, s)), o = r; o < a.length; o += r) i = new Uint32Array([Zc(a[o - 4]), Zc(a[o - 3]), Zc(a[o - 2]), Zc(a[o - 1])]), this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + r), e, i, s));
                this.asyncStream_.push(function () {
                    var t;
                    n(null, (t = s).subarray(0, t.byteLength - t[t.byteLength - 1]))
                })
            }
            return u.prototype.decryptChunk_ = function (e, i, n, r) {
                return function () {
                    var t = td(e, i, n);
                    r.set(t, e.byteOffset)
                }
            }, Gc(u, null, [{
                key: "STEP",
                get: function () {
                    return 32e3
                }
            }]), u
        }(),
        id = function (t, e) {
            return /^[a-z]+:/i.test(e) ? e : (/\/\//i.test(t) || (t = xa.buildAbsoluteURL(g.location.href, t)), xa.buildAbsoluteURL(t, e))
        },
        nd = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        rd = function () {
            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), t
            }
        }(),
        ad = function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : Ee(e)));
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        },
        sd = function (t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== ("undefined" == typeof e ? "undefined" : Ee(e)) && "function" != typeof e ? t : e
        },
        od = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function (t, e) {
                var i = [],
                    n = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
                } catch (t) {
                    r = !0, a = t
                } finally {
                    try {
                        !n && o.return && o.return()
                    } finally {
                        if (r) throw a
                    }
                }
                return i
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        ud = Oa.mergeOptions,
        ld = Oa.EventTarget,
        cd = Oa.log,
        dd = function (r, a) {
            ["AUDIO", "SUBTITLES"].forEach(function (t) {
                for (var e in r.mediaGroups[t])
                    for (var i in r.mediaGroups[t][e]) {
                        var n = r.mediaGroups[t][e][i];
                        a(n, t, e, i)
                    }
            })
        },
        hd = function (t, e) {
            var i = ud(t, {}),
                n = i.playlists[e.uri];
            if (!n) return null;
            if (n.segments && e.segments && n.segments.length === e.segments.length && n.mediaSequence === e.mediaSequence) return null;
            var r = ud(n, e);
            n.segments && (r.segments = function (t, e, i) {
                var n = e.slice();
                i = i || 0;
                for (var r = Math.min(t.length, e.length + i), a = i; a < r; a++) n[a - i] = ud(t[a], n[a - i]);
                return n
            }(n.segments, e.segments, e.mediaSequence - n.mediaSequence)), r.segments.forEach(function (t) {
                var e, i;
                e = t, i = r.resolvedUri, e.resolvedUri || (e.resolvedUri = id(i, e.uri)), e.key && !e.key.resolvedUri && (e.key.resolvedUri = id(i, e.key.uri)), e.map && !e.map.resolvedUri && (e.map.resolvedUri = id(i, e.map.uri))
            });
            for (var a = 0; a < i.playlists.length; a++) i.playlists[a].uri === e.uri && (i.playlists[a] = r);
            return i.playlists[e.uri] = r, i
        },
        pd = function (t) {
            for (var e = t.playlists.length; e--;) {
                var i = t.playlists[e];
                (t.playlists[i.uri] = i).resolvedUri = id(t.uri, i.uri), i.id = e, i.attributes || (i.attributes = {}, cd.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))
            }
        },
        fd = function (e) {
            dd(e, function (t) {
                t.uri && (t.resolvedUri = id(e.uri, t.uri))
            })
        },
        md = function (t, e) {
            var i = t.segments[t.segments.length - 1];
            return e && i && i.duration ? 1e3 * i.duration : 500 * (t.targetDuration || 10)
        },
        gd = function (t) {
            function r(t, e, i) {
                nd(this, r);
                var n = sd(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
                if (n.srcUrl = t, n.hls_ = e, n.withCredentials = i, !n.srcUrl) throw new Error("A non-empty playlist URL is required");
                return n.state = "HAVE_NOTHING", n.on("mediaupdatetimeout", function () {
                    "HAVE_METADATA" === n.state && (n.state = "HAVE_CURRENT_METADATA", n.request = n.hls_.xhr({
                        uri: id(n.master.uri, n.media().uri),
                        withCredentials: n.withCredentials
                    }, function (t, e) {
                        if (n.request) return t ? n.playlistRequestError(n.request, n.media().uri, "HAVE_METADATA") : void n.haveMetadata(n.request, n.media().uri)
                    }))
                }), n
            }
            return ad(r, ld), rd(r, [{
                key: "playlistRequestError",
                value: function (t, e, i) {
                    this.request = null, i && (this.state = i), this.error = {
                        playlist: this.master.playlists[e],
                        status: t.status,
                        message: "HLS playlist request error at URL: " + e,
                        responseText: t.responseText,
                        code: 500 <= t.status ? 4 : 2
                    }, this.trigger("error")
                }
            }, {
                key: "haveMetadata",
                value: function (t, e) {
                    var i = this;
                    this.request = null, this.state = "HAVE_METADATA";
                    var n = new Va;
                    n.push(t.responseText), n.end(), n.manifest.uri = e, n.manifest.attributes = n.manifest.attributes || {};
                    var r = hd(this.master, n.manifest);
                    this.targetDuration = n.manifest.targetDuration, r ? (this.master = r, this.media_ = this.master.playlists[n.manifest.uri]) : this.trigger("playlistunchanged"), this.media().endList || (g.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = g.setTimeout(function () {
                        i.trigger("mediaupdatetimeout")
                    }, md(this.media(), !!r))), this.trigger("loadedplaylist")
                }
            }, {
                key: "dispose",
                value: function () {
                    this.stopRequest(), g.clearTimeout(this.mediaUpdateTimeout)
                }
            }, {
                key: "stopRequest",
                value: function () {
                    if (this.request) {
                        var t = this.request;
                        this.request = null, t.onreadystatechange = null, t.abort()
                    }
                }
            }, {
                key: "media",
                value: function (i) {
                    var n = this;
                    if (!i) return this.media_;
                    if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
                    var r = this.state;
                    if ("string" == typeof i) {
                        if (!this.master.playlists[i]) throw new Error("Unknown playlist URI: " + i);
                        i = this.master.playlists[i]
                    }
                    var t = !this.media_ || i.uri !== this.media_.uri;
                    if (this.master.playlists[i.uri].endList) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = i, void(t && (this.trigger("mediachanging"), this.trigger("mediachange")));
                    if (t) {
                        if (this.state = "SWITCHING_MEDIA", this.request) {
                            if (id(this.master.uri, i.uri) === this.request.url) return;
                            this.request.onreadystatechange = null, this.request.abort(), this.request = null
                        }
                        this.media_ && this.trigger("mediachanging"), this.request = this.hls_.xhr({
                            uri: id(this.master.uri, i.uri),
                            withCredentials: this.withCredentials
                        }, function (t, e) {
                            if (n.request) {
                                if (t) return n.playlistRequestError(n.request, i.uri, r);
                                n.haveMetadata(e, i.uri), "HAVE_MASTER" === r ? n.trigger("loadedmetadata") : n.trigger("mediachange")
                            }
                        })
                    }
                }
            }, {
                key: "pause",
                value: function () {
                    this.stopRequest(), g.clearTimeout(this.mediaUpdateTimeout), "HAVE_NOTHING" === this.state && (this.started = !1), "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
                }
            }, {
                key: "load",
                value: function (t) {
                    var e = this;
                    g.clearTimeout(this.mediaUpdateTimeout);
                    var i = this.media();
                    if (t) {
                        var n = i ? i.targetDuration / 2 * 1e3 : 5e3;
                        this.mediaUpdateTimeout = g.setTimeout(function () {
                            return e.load()
                        }, n)
                    } else this.started ? i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
                }
            }, {
                key: "start",
                value: function () {
                    var n = this;
                    this.started = !0, this.request = this.hls_.xhr({
                        uri: this.srcUrl,
                        withCredentials: this.withCredentials
                    }, function (t, e) {
                        if (n.request) {
                            if (n.request = null, t) return n.error = {
                                status: e.status,
                                message: "HLS playlist request error at URL: " + n.srcUrl,
                                responseText: e.responseText,
                                code: 2
                            }, "HAVE_NOTHING" === n.state && (n.started = !1), n.trigger("error");
                            var i = new Va;
                            return i.push(e.responseText), i.end(), n.state = "HAVE_MASTER", i.manifest.uri = n.srcUrl, i.manifest.playlists ? (n.master = i.manifest, pd(n.master), fd(n.master), n.trigger("loadedplaylist"), void(n.request || n.media(i.manifest.playlists[0]))) : (n.master = {
                                mediaGroups: {
                                    AUDIO: {},
                                    VIDEO: {},
                                    "CLOSED-CAPTIONS": {},
                                    SUBTITLES: {}
                                },
                                uri: g.location.href,
                                playlists: [{
                                    uri: n.srcUrl,
                                    id: 0
                                }]
                            }, n.master.playlists[n.srcUrl] = n.master.playlists[0], n.master.playlists[0].resolvedUri = n.srcUrl, n.master.playlists[0].attributes = n.master.playlists[0].attributes || {}, n.haveMetadata(e, n.srcUrl), n.trigger("loadedmetadata"))
                        }
                    })
                }
            }]), r
        }(),
        yd = Oa.createTimeRange,
        vd = function (t, e, i) {
            var n, r;
            return "undefined" == typeof e && (e = t.mediaSequence + t.segments.length), e < t.mediaSequence ? 0 : (n = function (t, e) {
                var i = 0,
                    n = e - t.mediaSequence,
                    r = t.segments[n];
                if (r) {
                    if ("undefined" != typeof r.start) return {
                        result: r.start,
                        precise: !0
                    };
                    if ("undefined" != typeof r.end) return {
                        result: r.end - r.duration,
                        precise: !0
                    }
                }
                for (; n--;) {
                    if ("undefined" != typeof (r = t.segments[n]).end) return {
                        result: i + r.end,
                        precise: !0
                    };
                    if (i += r.duration, "undefined" != typeof r.start) return {
                        result: i + r.start,
                        precise: !0
                    }
                }
                return {
                    result: i,
                    precise: !1
                }
            }(t, e)).precise ? n.result : (r = function (t, e) {
                for (var i = 0, n = void 0, r = e - t.mediaSequence; r < t.segments.length; r++) {
                    if ("undefined" != typeof (n = t.segments[r]).start) return {
                        result: n.start - i,
                        precise: !0
                    };
                    if (i += n.duration, "undefined" != typeof n.end) return {
                        result: n.end - i,
                        precise: !0
                    }
                }
                return {
                    result: -1,
                    precise: !1
                }
            }(t, e)).precise ? r.result : n.result + i
        },
        _d = function (t, e, i) {
            if (!t) return 0;
            if ("number" != typeof i && (i = 0), "undefined" == typeof e) {
                if (t.totalDuration) return t.totalDuration;
                if (!t.endList) return g.Infinity
            }
            return vd(t, e, i)
        },
        bd = function (t, e, i) {
            var n = 0;
            if (i < e) {
                var r = [i, e];
                e = r[0], i = r[1]
            }
            if (e < 0) {
                for (var a = e; a < Math.min(0, i); a++) n += t.targetDuration;
                e = 0
            }
            for (var s = e; s < i; s++) n += t.segments[s].duration;
            return n
        },
        Td = function (t) {
            if (!t.segments.length) return 0;
            for (var e = t.segments.length - 1, i = t.segments[e].duration || t.targetDuration, n = i + 2 * t.targetDuration; e-- && !(n <= (i += t.segments[e].duration)););
            return Math.max(0, e)
        },
        Sd = function (t, e, i) {
            if (!t || !t.segments) return null;
            if (t.endList) return _d(t);
            if (null === e) return null;
            e = e || 0;
            var n = i ? Td(t) : t.segments.length;
            return vd(t, t.mediaSequence + n, e)
        },
        kd = function (t) {
            return t - Math.floor(t) == 0
        },
        Cd = function (t, e) {
            if (kd(e)) return e + .1 * t;
            for (var i = e.toString().split(".")[1].length, n = 1; n <= i; n++) {
                var r = Math.pow(10, n),
                    a = e * r;
                if (kd(a) || n === i) return (a + t) / r
            }
        },
        wd = Cd.bind(null, 1),
        Ed = Cd.bind(null, -1),
        Ad = function (t) {
            return t.excludeUntil && t.excludeUntil > Date.now()
        },
        Ld = function (t) {
            return t.excludeUntil && t.excludeUntil === 1 / 0
        },
        Od = function (t) {
            var e = Ad(t);
            return !t.disabled && !e
        },
        Pd = function (t, e) {
            return e.attributes && e.attributes[t]
        },
        Ud = function (t, e) {
            if (1 === t.playlists.length) return !0;
            var i = e.attributes.BANDWIDTH || Number.MAX_VALUE;
            return 0 === t.playlists.filter(function (t) {
                return !!Od(t) && (t.attributes.BANDWIDTH || 0) < i
            }).length
        },
        xd = {
            duration: _d,
            seekable: function (t, e) {
                var i = e || 0,
                    n = Sd(t, e, !0);
                return null === n ? yd() : yd(i, n)
            },
            safeLiveIndex: Td,
            getMediaInfoForTime: function (t, e, i, n) {
                var r = void 0,
                    a = void 0,
                    s = t.segments.length,
                    o = e - n;
                if (o < 0) {
                    if (0 < i)
                        for (r = i - 1; 0 <= r; r--)
                            if (a = t.segments[r], 0 < (o += Ed(a.duration))) return {
                                mediaIndex: r,
                                startTime: n - bd(t, i, r)
                            };
                    return {
                        mediaIndex: 0,
                        startTime: e
                    }
                }
                if (i < 0) {
                    for (r = i; r < 0; r++)
                        if ((o -= t.targetDuration) < 0) return {
                            mediaIndex: 0,
                            startTime: e
                        };
                    i = 0
                }
                for (r = i; r < s; r++)
                    if (a = t.segments[r], (o -= wd(a.duration)) < 0) return {
                        mediaIndex: r,
                        startTime: n + bd(t, i, r)
                    };
                return {
                    mediaIndex: s - 1,
                    startTime: e
                }
            },
            isEnabled: Od,
            isDisabled: function (t) {
                return t.disabled
            },
            isBlacklisted: Ad,
            isIncompatible: Ld,
            playlistEnd: Sd,
            isAes: function (t) {
                for (var e = 0; e < t.segments.length; e++)
                    if (t.segments[e].key) return !0;
                return !1
            },
            isFmp4: function (t) {
                for (var e = 0; e < t.segments.length; e++)
                    if (t.segments[e].map) return !0;
                return !1
            },
            hasAttribute: Pd,
            estimateSegmentRequestTime: function (t, e, i) {
                var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                return Pd("BANDWIDTH", i) ? (t * i.attributes.BANDWIDTH - 8 * n) / e : NaN
            },
            isLowestEnabledRendition: Ud
        },
        Id = Oa.xhr,
        Dd = Oa.mergeOptions,
        Rd = function () {
            return function t(e, n) {
                e = Dd({
                    timeout: 45e3
                }, e);
                var i = t.beforeRequest || Oa.Hls.xhr.beforeRequest;
                if (i && "function" == typeof i) {
                    var r = i(e);
                    r && (e = r)
                }
                var a = Id(e, function (t, e) {
                        var i = a.response;
                        !t && i && (a.responseTime = Date.now(), a.roundTripTime = a.responseTime - a.requestTime, a.bytesReceived = i.byteLength || i.length, a.bandwidth || (a.bandwidth = Math.floor(a.bytesReceived / a.roundTripTime * 8 * 1e3))), e.headers && (a.responseHeaders = e.headers), t && "ETIMEDOUT" === t.code && (a.timedout = !0), t || a.aborted || 200 === e.statusCode || 206 === e.statusCode || 0 === e.statusCode || (t = new Error("XHR Failed with a response of: " + (a && (i || a.responseText)))), n(t, a)
                    }),
                    s = a.abort;
                return a.abort = function () {
                    return a.aborted = !0, s.apply(a, arguments)
                }, a.uri = e.uri, a.requestTime = Date.now(), a
            }
        },
        Md = function (t, e) {
            var i = t.toString(16);
            return "00".substring(0, 2 - i.length) + i + (e % 2 ? " " : "")
        },
        Bd = function (t) {
            return 32 <= t && t < 126 ? String.fromCharCode(t) : "."
        },
        Nd = function (i) {
            var n = {};
            return Object.keys(i).forEach(function (t) {
                var e = i[t];
                ArrayBuffer.isView(e) ? n[t] = {
                    bytes: e.buffer,
                    byteOffset: e.byteOffset,
                    byteLength: e.byteLength
                } : n[t] = e
            }), n
        },
        jd = function (t) {
            var e = t.byterange || {
                length: 1 / 0,
                offset: 0
            };
            return [e.length, e.offset, t.resolvedUri].join(",")
        },
        Fd = function (t) {
            for (var e = Array.prototype.slice.call(t), i = "", n = 0; n < e.length / 16; n++) i += e.slice(16 * n, 16 * n + 16).map(Md).join("") + " " + e.slice(16 * n, 16 * n + 16).map(Bd).join("") + "\n";
            return i
        },
        Vd = Object.freeze({
            createTransferableMessage: Nd,
            initSegmentId: jd,
            hexDump: Fd,
            tagDump: function (t) {
                var e = t.bytes;
                return Fd(e)
            },
            textRanges: function (t) {
                var e, i, n = "",
                    r = void 0;
                for (r = 0; r < t.length; r++) n += (i = r, (e = t).start(i) + "-" + e.end(i) + " ");
                return n
            }
        }),
        Hd = 1 / 30,
        zd = function (t, e) {
            var i = [],
                n = void 0;
            if (t && t.length)
                for (n = 0; n < t.length; n++) e(t.start(n), t.end(n)) && i.push([t.start(n), t.end(n)]);
            return Oa.createTimeRanges(i)
        },
        qd = function (t, i) {
            return zd(t, function (t, e) {
                return t - Hd <= i && i <= e + Hd
            })
        },
        Wd = function (t, e) {
            return zd(t, function (t) {
                return e <= t - Hd
            })
        },
        Gd = function (t) {
            var e = [];
            if (!t || !t.length) return "";
            for (var i = 0; i < t.length; i++) e.push(t.start(i) + " => " + t.end(i));
            return e.join(", ")
        },
        Xd = function (t) {
            for (var e = [], i = 0; i < t.length; i++) e.push({
                start: t.start(i),
                end: t.end(i)
            });
            return e
        },
        Yd = function (t, e, i) {
            var n = void 0,
                r = void 0;
            if (i && i.cues)
                for (n = i.cues.length; n--;)(r = i.cues[n]).startTime <= e && r.endTime >= t && i.removeCue(r)
        },
        $d = function (t) {
            return isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t
        },
        Kd = function (t, e, i) {
            var r = g.WebKitDataCue || g.VTTCue;
            if (e && e.forEach(function (t) {
                    var e = t.stream;
                    this.inbandTextTracks_[e].addCue(new r(t.startTime + this.timestampOffset, t.endTime + this.timestampOffset, t.text))
                }, t), i) {
                var a = $d(t.mediaSource_.duration);
                if (i.forEach(function (t) {
                        var n = t.cueTime + this.timestampOffset;
                        t.frames.forEach(function (t) {
                            var e, i = new r(n, n, t.value || t.url || t.data || "");
                            i.frame = t, i.value = t, e = i, Object.defineProperties(e.frame, {
                                id: {
                                    get: function () {
                                        return Oa.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), e.value.key
                                    }
                                },
                                value: {
                                    get: function () {
                                        return Oa.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), e.value.data
                                    }
                                },
                                privateData: {
                                    get: function () {
                                        return Oa.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), e.value.data
                                    }
                                }
                            }), this.metadataTrack_.addCue(i)
                        }, this)
                    }, t), t.metadataTrack_ && t.metadataTrack_.cues && t.metadataTrack_.cues.length) {
                    for (var n = t.metadataTrack_.cues, s = [], o = 0; o < n.length; o++) n[o] && s.push(n[o]);
                    var u = s.reduce(function (t, e) {
                            var i = t[e.startTime] || [];
                            return i.push(e), t[e.startTime] = i, t
                        }, {}),
                        l = Object.keys(u).sort(function (t, e) {
                            return Number(t) - Number(e)
                        });
                    l.forEach(function (t, e) {
                        var i = u[t],
                            n = Number(l[e + 1]) || a;
                        i.forEach(function (t) {
                            t.endTime = n
                        })
                    })
                }
            }
        },
        Jd = "undefined" != typeof window ? window : {},
        Qd = "undefined" == typeof Symbol ? "__target" : Symbol(),
        Zd = "application/javascript",
        th = Jd.BlobBuilder || Jd.WebKitBlobBuilder || Jd.MozBlobBuilder || Jd.MSBlobBuilder,
        eh = Jd.URL || Jd.webkitURL || eh && eh.msURL,
        ih = Jd.Worker;

    function nh(r, a) {
        return function (t) {
            var e = this;
            if (!a) return new ih(r);
            if (ih && !t) {
                var i = oh(a.toString().replace(/^function.+?{/, "").slice(0, -1));
                return this[Qd] = new ih(i),
                    function (t, e) {
                        if (!t || !e) return;
                        var i = t.terminate;
                        t.objURL = e, t.terminate = function () {
                            t.objURL && eh.revokeObjectURL(t.objURL), i.call(t)
                        }
                    }(this[Qd], i), this[Qd]
            }
            var n = {
                postMessage: function (t) {
                    e.onmessage && setTimeout(function () {
                        e.onmessage({
                            data: t,
                            target: n
                        })
                    })
                }
            };
            a.call(n), this.postMessage = function (t) {
                setTimeout(function () {
                    n.onmessage({
                        data: t,
                        target: e
                    })
                })
            }, this.isThisThread = !0
        }
    }
    if (ih) {
        var rh, ah = oh("self.onmessage = function () {}"),
            sh = new Uint8Array(1);
        try {
            (rh = new ih(ah)).postMessage(sh, [sh.buffer])
        } catch (t) {
            ih = null
        } finally {
            eh.revokeObjectURL(ah), rh && rh.terminate()
        }
    }

    function oh(e) {
        try {
            return eh.createObjectURL(new Blob([e], {
                type: Zd
            }))
        } catch (t) {
            var i = new th;
            return i.append(e), eh.createObjectURL(i.getBlob(type))
        }
    }
    var uh = new nh("./transmuxer-worker.worker.js", function (t, e) {
            var we = this;
            ! function () {
                var o, e, i, r, a, n, t, s, u, l, c, d, h, p, f, m, g, y, v, _, b, T, S, k, C, w, E, A, L, O, P, U, x, I, D, R, M, B, N, j, F = Math.pow(2, 32) - 1;
                ! function () {
                    var t;
                    if (T = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            mvex: [],
                            mvhd: [],
                            sdtp: [],
                            smhd: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            styp: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: []
                        }, "undefined" != typeof Uint8Array) {
                        for (t in T) T.hasOwnProperty(t) && (T[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                        S = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), C = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), k = new Uint8Array([0, 0, 0, 1]), w = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), E = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), A = {
                            video: w,
                            audio: E
                        }, P = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), U = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), x = U, I = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), D = U, L = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
                    }
                }(), o = function (t) {
                    var e, i, n = [],
                        r = 0;
                    for (e = 1; e < arguments.length; e++) n.push(arguments[e]);
                    for (e = n.length; e--;) r += n[e].byteLength;
                    for (i = new Uint8Array(r + 8), new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength), i.set(t, 4), e = 0, r = 8; e < n.length; e++) i.set(n[e], r), r += n[e].byteLength;
                    return i
                }, e = function () {
                    return o(T.dinf, o(T.dref, P))
                }, i = function (t) {
                    return o(T.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, t.audioobjecttype << 3 | t.samplingfrequencyindex >>> 1, t.samplingfrequencyindex << 7 | t.channelcount << 3, 6, 1, 2]))
                }, f = function (t) {
                    return o(T.hdlr, A[t])
                }, p = function (t) {
                    var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, t.duration >>> 24 & 255, t.duration >>> 16 & 255, t.duration >>> 8 & 255, 255 & t.duration, 85, 196, 0, 0]);
                    return t.samplerate && (e[12] = t.samplerate >>> 24 & 255, e[13] = t.samplerate >>> 16 & 255, e[14] = t.samplerate >>> 8 & 255, e[15] = 255 & t.samplerate), o(T.mdhd, e)
                }, h = function (t) {
                    return o(T.mdia, p(t), f(t.type), n(t))
                }, a = function (t) {
                    return o(T.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t]))
                }, n = function (t) {
                    return o(T.minf, "video" === t.type ? o(T.vmhd, L) : o(T.smhd, O), e(), g(t))
                }, t = function (t, e) {
                    for (var i = [], n = e.length; n--;) i[n] = v(e[n]);
                    return o.apply(null, [T.moof, a(t)].concat(i))
                }, s = function (t) {
                    for (var e = t.length, i = []; e--;) i[e] = c(t[e]);
                    return o.apply(null, [T.moov, l(4294967295)].concat(i).concat(u(t)))
                }, u = function (t) {
                    for (var e = t.length, i = []; e--;) i[e] = _(t[e]);
                    return o.apply(null, [T.mvex].concat(i))
                }, l = function (t) {
                    var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return o(T.mvhd, e)
                }, m = function (t) {
                    var e, i, n = t.samples || [],
                        r = new Uint8Array(4 + n.length);
                    for (i = 0; i < n.length; i++) e = n[i].flags, r[i + 4] = e.dependsOn << 4 | e.isDependedOn << 2 | e.hasRedundancy;
                    return o(T.sdtp, r)
                }, g = function (t) {
                    return o(T.stbl, y(t), o(T.stts, D), o(T.stsc, x), o(T.stsz, I), o(T.stco, U))
                }, y = function (t) {
                    return o(T.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === t.type ? R(t) : M(t))
                }, R = function (t) {
                    var e, i = t.sps || [],
                        n = t.pps || [],
                        r = [],
                        a = [];
                    for (e = 0; e < i.length; e++) r.push((65280 & i[e].byteLength) >>> 8), r.push(255 & i[e].byteLength), r = r.concat(Array.prototype.slice.call(i[e]));
                    for (e = 0; e < n.length; e++) a.push((65280 & n[e].byteLength) >>> 8), a.push(255 & n[e].byteLength), a = a.concat(Array.prototype.slice.call(n[e]));
                    return o(T.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, (65280 & t.height) >> 8, 255 & t.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o(T.avcC, new Uint8Array([1, t.profileIdc, t.profileCompatibility, t.levelIdc, 255].concat([i.length]).concat(r).concat([n.length]).concat(a))), o(T.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
                }, M = function (t) {
                    return o(T.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.channelcount) >> 8, 255 & t.channelcount, (65280 & t.samplesize) >> 8, 255 & t.samplesize, 0, 0, 0, 0, (65280 & t.samplerate) >> 8, 255 & t.samplerate, 0, 0]), i(t))
                }, d = function (t) {
                    var e = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 0, (4278190080 & t.duration) >> 24, (16711680 & t.duration) >> 16, (65280 & t.duration) >> 8, 255 & t.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, 0, 0, (65280 & t.height) >> 8, 255 & t.height, 0, 0]);
                    return o(T.tkhd, e)
                }, v = function (t) {
                    var e, i, n, r, a, s;
                    return e = o(T.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), a = Math.floor(t.baseMediaDecodeTime / (F + 1)), s = Math.floor(t.baseMediaDecodeTime % (F + 1)), i = o(T.tfdt, new Uint8Array([1, 0, 0, 0, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s])), 92, "audio" === t.type ? (n = b(t, 92), o(T.traf, e, i, n)) : (r = m(t), n = b(t, r.length + 92), o(T.traf, e, i, n, r))
                }, c = function (t) {
                    return t.duration = t.duration || 4294967295, o(T.trak, d(t), h(t))
                }, _ = function (t) {
                    var e = new Uint8Array([0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
                    return "video" !== t.type && (e[e.length - 1] = 0), o(T.trex, e)
                }, j = function (t, e) {
                    var i = 0,
                        n = 0,
                        r = 0,
                        a = 0;
                    return t.length && (void 0 !== t[0].duration && (i = 1), void 0 !== t[0].size && (n = 2), void 0 !== t[0].flags && (r = 4), void 0 !== t[0].compositionTimeOffset && (a = 8)), [0, 0, i | n | r | a, 1, (4278190080 & t.length) >>> 24, (16711680 & t.length) >>> 16, (65280 & t.length) >>> 8, 255 & t.length, (4278190080 & e) >>> 24, (16711680 & e) >>> 16, (65280 & e) >>> 8, 255 & e]
                }, N = function (t, e) {
                    var i, n, r, a;
                    for (e += 20 + 16 * (n = t.samples || []).length, i = j(n, e), a = 0; a < n.length; a++) r = n[a], i = i.concat([(4278190080 & r.duration) >>> 24, (16711680 & r.duration) >>> 16, (65280 & r.duration) >>> 8, 255 & r.duration, (4278190080 & r.size) >>> 24, (16711680 & r.size) >>> 16, (65280 & r.size) >>> 8, 255 & r.size, r.flags.isLeading << 2 | r.flags.dependsOn, r.flags.isDependedOn << 6 | r.flags.hasRedundancy << 4 | r.flags.paddingValue << 1 | r.flags.isNonSyncSample, 61440 & r.flags.degradationPriority, 15 & r.flags.degradationPriority, (4278190080 & r.compositionTimeOffset) >>> 24, (16711680 & r.compositionTimeOffset) >>> 16, (65280 & r.compositionTimeOffset) >>> 8, 255 & r.compositionTimeOffset]);
                    return o(T.trun, new Uint8Array(i))
                }, B = function (t, e) {
                    var i, n, r, a;
                    for (e += 20 + 8 * (n = t.samples || []).length, i = j(n, e), a = 0; a < n.length; a++) r = n[a], i = i.concat([(4278190080 & r.duration) >>> 24, (16711680 & r.duration) >>> 16, (65280 & r.duration) >>> 8, 255 & r.duration, (4278190080 & r.size) >>> 24, (16711680 & r.size) >>> 16, (65280 & r.size) >>> 8, 255 & r.size]);
                    return o(T.trun, new Uint8Array(i))
                }, b = function (t, e) {
                    return "audio" === t.type ? B(t, e) : N(t, e)
                };
                var V, H, z = {
                        ftyp: r = function () {
                            return o(T.ftyp, S, k, S, C)
                        },
                        mdat: function (t) {
                            return o(T.mdat, t)
                        },
                        moof: t,
                        moov: s,
                        initSegment: function (t) {
                            var e, i = r(),
                                n = s(t);
                            return (e = new Uint8Array(i.byteLength + n.byteLength)).set(i), e.set(n, i.byteLength), e
                        }
                    },
                    q = function (t) {
                        return t >>> 0
                    },
                    W = {
                        findBox: V = function (t, e) {
                            var i, n, r, a, s, o = [];
                            if (!e.length) return null;
                            for (i = 0; i < t.byteLength;) n = q(t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3]), r = H(t.subarray(i + 4, i + 8)), a = 1 < n ? i + n : t.byteLength, r === e[0] && (1 === e.length ? o.push(t.subarray(i + 8, a)) : (s = V(t.subarray(i + 8, a), e.slice(1))).length && (o = o.concat(s))), i = a;
                            return o
                        },
                        parseType: H = function (t) {
                            var e = "";
                            return e += String.fromCharCode(t[0]), e += String.fromCharCode(t[1]), e += String.fromCharCode(t[2]), e += String.fromCharCode(t[3])
                        },
                        timescale: function (t) {
                            return V(t, ["moov", "trak"]).reduce(function (t, e) {
                                var i, n, r, a, s;
                                return (i = V(e, ["tkhd"])[0]) ? (n = i[0], a = q(i[r = 0 === n ? 12 : 20] << 24 | i[r + 1] << 16 | i[r + 2] << 8 | i[r + 3]), (s = V(e, ["mdia", "mdhd"])[0]) ? (r = 0 === (n = s[0]) ? 12 : 20, t[a] = q(s[r] << 24 | s[r + 1] << 16 | s[r + 2] << 8 | s[r + 3]), t) : null) : null
                            }, {})
                        },
                        startTime: function (r, t) {
                            var e, i, n;
                            return e = V(t, ["moof", "traf"]), i = [].concat.apply([], e.map(function (n) {
                                return V(n, ["tfhd"]).map(function (t) {
                                    var e, i;
                                    return e = q(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7]), i = r[e] || 9e4, (V(n, ["tfdt"]).map(function (t) {
                                        var e, i;
                                        return e = t[0], i = q(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7]), 1 === e && (i *= Math.pow(2, 32), i += q(t[8] << 24 | t[9] << 16 | t[10] << 8 | t[11])), i
                                    })[0] || 1 / 0) / i
                                })
                            })), n = Math.min.apply(null, i), isFinite(n) ? n : 0
                        },
                        videoTrackIds: function (t) {
                            var e = V(t, ["moov", "trak"]),
                                o = [];
                            return e.forEach(function (t) {
                                var e = V(t, ["mdia", "hdlr"]),
                                    s = V(t, ["tkhd"]);
                                e.forEach(function (t, e) {
                                    var i, n, r = H(t.subarray(8, 12)),
                                        a = s[e];
                                    "vide" === r && (n = 0 === (i = new DataView(a.buffer, a.byteOffset, a.byteLength)).getUint8(0) ? i.getUint32(12) : i.getUint32(20), o.push(n))
                                })
                            }), o
                        }
                    },
                    G = function () {
                        this.init = function () {
                            var a = {};
                            this.on = function (t, e) {
                                a[t] || (a[t] = []), a[t] = a[t].concat(e)
                            }, this.off = function (t, e) {
                                var i;
                                return !!a[t] && (i = a[t].indexOf(e), a[t] = a[t].slice(), a[t].splice(i, 1), -1 < i)
                            }, this.trigger = function (t) {
                                var e, i, n, r;
                                if (e = a[t])
                                    if (2 === arguments.length)
                                        for (n = e.length, i = 0; i < n; ++i) e[i].call(this, arguments[1]);
                                    else {
                                        for (r = [], i = arguments.length, i = 1; i < arguments.length; ++i) r.push(arguments[i]);
                                        for (n = e.length, i = 0; i < n; ++i) e[i].apply(this, r)
                                    }
                            }, this.dispose = function () {
                                a = {}
                            }
                        }
                    };
                G.prototype.pipe = function (e) {
                    return this.on("data", function (t) {
                        e.push(t)
                    }), this.on("done", function (t) {
                        e.flush(t)
                    }), e
                }, G.prototype.push = function (t) {
                    this.trigger("data", t)
                }, G.prototype.flush = function (t) {
                    this.trigger("done", t)
                };
                var X = G,
                    Y = function (t) {
                        var e, i, n = [],
                            r = [];
                        for (e = n.byteLength = 0; e < t.length; e++) "access_unit_delimiter_rbsp" === (i = t[e]).nalUnitType ? (n.length && (n.duration = i.dts - n.dts, r.push(n)), (n = [i]).byteLength = i.data.byteLength, n.pts = i.pts, n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0), n.duration = i.dts - n.dts, n.byteLength += i.data.byteLength, n.push(i));
                        return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration), r.push(n), r
                    },
                    $ = function (t) {
                        var e, i, n = [],
                            r = [];
                        for (n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = t[0].pts, n.dts = t[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = t[0].pts, r.dts = t[0].dts, e = 0; e < t.length; e++)(i = t[e]).keyFrame ? (n.length && (r.push(n), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration), (n = [i]).nalCount = i.length, n.byteLength = i.byteLength, n.pts = i.pts, n.dts = i.dts, n.duration = i.duration) : (n.duration += i.duration, n.nalCount += i.length, n.byteLength += i.byteLength, n.push(i));
                        return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration, r.push(n), r
                    },
                    K = function (t) {
                        var e;
                        return !t[0][0].keyFrame && 1 < t.length && (e = t.shift(), t.byteLength -= e.byteLength, t.nalCount -= e.nalCount, t[0][0].dts = e.dts, t[0][0].pts = e.pts, t[0][0].duration += e.duration), t
                    },
                    J = function (t, e) {
                        var i, n, r, a, s, o, u, l = e || 0,
                            c = [];
                        for (i = 0; i < t.length; i++)
                            for (a = t[i], n = 0; n < a.length; n++) s = a[n], o = s, u = void 0, (u = {
                                size: 0,
                                flags: {
                                    isLeading: 0,
                                    dependsOn: 1,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradationPriority: 0,
                                    isNonSyncSample: 1
                                }
                            }).dataOffset = l, u.compositionTimeOffset = o.pts - o.dts, u.duration = o.duration, u.size = 4 * o.length, u.size += o.byteLength, o.keyFrame && (u.flags.dependsOn = 2, u.flags.isNonSyncSample = 0), l += (r = u).size, c.push(r);
                        return c
                    },
                    Q = function (t) {
                        var e, i, n, r, a, s, o = 0,
                            u = t.byteLength,
                            l = t.nalCount,
                            c = new Uint8Array(u + 4 * l),
                            d = new DataView(c.buffer);
                        for (e = 0; e < t.length; e++)
                            for (r = t[e], i = 0; i < r.length; i++)
                                for (a = r[i], n = 0; n < a.length; n++) s = a[n], d.setUint32(o, s.data.byteLength), o += 4, c.set(s.data, o), o += s.data.byteLength;
                        return c
                    },
                    Z = function (t) {
                        delete t.minSegmentDts, delete t.maxSegmentDts, delete t.minSegmentPts, delete t.maxSegmentPts
                    },
                    tt = function (t, e) {
                        var i, n = t.minSegmentDts;
                        return e || (n -= t.timelineStartInfo.dts), i = t.timelineStartInfo.baseMediaDecodeTime, i += n, i = Math.max(0, i), "audio" === t.type && (i *= t.samplerate / 9e4, i = Math.floor(i)), i
                    },
                    et = function (t, e) {
                        "number" == typeof e.pts && (void 0 === t.timelineStartInfo.pts && (t.timelineStartInfo.pts = e.pts), void 0 === t.minSegmentPts ? t.minSegmentPts = e.pts : t.minSegmentPts = Math.min(t.minSegmentPts, e.pts), void 0 === t.maxSegmentPts ? t.maxSegmentPts = e.pts : t.maxSegmentPts = Math.max(t.maxSegmentPts, e.pts)), "number" == typeof e.dts && (void 0 === t.timelineStartInfo.dts && (t.timelineStartInfo.dts = e.dts), void 0 === t.minSegmentDts ? t.minSegmentDts = e.dts : t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), void 0 === t.maxSegmentDts ? t.maxSegmentDts = e.dts : t.maxSegmentDts = Math.max(t.maxSegmentDts, e.dts))
                    },
                    it = function (t) {
                        for (var e = 0, i = {
                                payloadType: -1,
                                payloadSize: 0
                            }, n = 0, r = 0; e < t.byteLength && 128 !== t[e];) {
                            for (; 255 === t[e];) n += 255, e++;
                            for (n += t[e++]; 255 === t[e];) r += 255, e++;
                            if (r += t[e++], !i.payload && 4 === n) {
                                i.payloadType = n, i.payloadSize = r, i.payload = t.subarray(e, e + r);
                                break
                            }
                            e += r, r = n = 0
                        }
                        return i
                    },
                    nt = function (t) {
                        return 181 !== t.payload[0] ? null : 49 != (t.payload[1] << 8 | t.payload[2]) ? null : "GA94" !== String.fromCharCode(t.payload[3], t.payload[4], t.payload[5], t.payload[6]) ? null : 3 !== t.payload[7] ? null : t.payload.subarray(8, t.payload.length - 1)
                    },
                    rt = function (t, e) {
                        var i, n, r, a, s = [];
                        if (!(64 & e[0])) return s;
                        for (n = 31 & e[0], i = 0; i < n; i++) a = {
                            type: 3 & e[2 + (r = 3 * i)],
                            pts: t
                        }, 4 & e[r + 2] && (a.ccData = e[r + 3] << 8 | e[r + 4], s.push(a));
                        return s
                    },
                    at = function (t) {
                        for (var e, i, n = t.byteLength, r = [], a = 1; a < n - 2;) 0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2] ? (r.push(a + 2), a += 2) : a++;
                        if (0 === r.length) return t;
                        e = n - r.length, i = new Uint8Array(e);
                        var s = 0;
                        for (a = 0; a < e; s++, a++) s === r[0] && (s++, r.shift()), i[a] = t[s];
                        return i
                    },
                    st = 4,
                    ot = function t() {
                        t.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new ht(0, 0), new ht(0, 1), new ht(1, 0), new ht(1, 1)], this.reset(), this.ccStreams_.forEach(function (t) {
                            t.on("data", this.trigger.bind(this, "data")), t.on("done", this.trigger.bind(this, "done"))
                        }, this)
                    };
                (ot.prototype = new X).push = function (t) {
                    var e, i, n;
                    if ("sei_rbsp" === t.nalUnitType && (e = it(t.escapedRBSP)).payloadType === st && (i = nt(e)))
                        if (t.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0;
                        else {
                            if (t.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, void(this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
                            n = rt(t.pts, i), this.captionPackets_ = this.captionPackets_.concat(n), this.latestDts_ !== t.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = t.dts
                        }
                }, ot.prototype.flush = function () {
                    this.captionPackets_.length ? (this.captionPackets_.forEach(function (t, e) {
                        t.presortIndex = e
                    }), this.captionPackets_.sort(function (t, e) {
                        return t.pts === e.pts ? t.presortIndex - e.presortIndex : t.pts - e.pts
                    }), this.captionPackets_.forEach(function (t) {
                        t.type < 2 && this.dispatchCea608Packet(t)
                    }, this), this.captionPackets_.length = 0, this.ccStreams_.forEach(function (t) {
                        t.flush()
                    }, this)) : this.ccStreams_.forEach(function (t) {
                        t.flush()
                    }, this)
                }, ot.prototype.reset = function () {
                    this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function (t) {
                        t.reset()
                    })
                }, ot.prototype.dispatchCea608Packet = function (t) {
                    this.setsChannel1Active(t) ? this.activeCea608Channel_[t.type] = 0 : this.setsChannel2Active(t) && (this.activeCea608Channel_[t.type] = 1), null !== this.activeCea608Channel_[t.type] && this.ccStreams_[(t.type << 1) + this.activeCea608Channel_[t.type]].push(t)
                }, ot.prototype.setsChannel1Active = function (t) {
                    return 4096 == (30720 & t.ccData)
                }, ot.prototype.setsChannel2Active = function (t) {
                    return 6144 == (30720 & t.ccData)
                };
                var ut = {
                        42: 225,
                        92: 233,
                        94: 237,
                        95: 243,
                        96: 250,
                        123: 231,
                        124: 247,
                        125: 209,
                        126: 241,
                        127: 9608,
                        304: 174,
                        305: 176,
                        306: 189,
                        307: 191,
                        308: 8482,
                        309: 162,
                        310: 163,
                        311: 9834,
                        312: 224,
                        313: 160,
                        314: 232,
                        315: 226,
                        316: 234,
                        317: 238,
                        318: 244,
                        319: 251,
                        544: 193,
                        545: 201,
                        546: 211,
                        547: 218,
                        548: 220,
                        549: 252,
                        550: 8216,
                        551: 161,
                        552: 42,
                        553: 39,
                        554: 8212,
                        555: 169,
                        556: 8480,
                        557: 8226,
                        558: 8220,
                        559: 8221,
                        560: 192,
                        561: 194,
                        562: 199,
                        563: 200,
                        564: 202,
                        565: 203,
                        566: 235,
                        567: 206,
                        568: 207,
                        569: 239,
                        570: 212,
                        571: 217,
                        572: 249,
                        573: 219,
                        574: 171,
                        575: 187,
                        800: 195,
                        801: 227,
                        802: 205,
                        803: 204,
                        804: 236,
                        805: 210,
                        806: 242,
                        807: 213,
                        808: 245,
                        809: 123,
                        810: 125,
                        811: 92,
                        812: 94,
                        813: 95,
                        814: 124,
                        815: 126,
                        816: 196,
                        817: 228,
                        818: 214,
                        819: 246,
                        820: 223,
                        821: 165,
                        822: 164,
                        823: 9474,
                        824: 197,
                        825: 229,
                        826: 216,
                        827: 248,
                        828: 9484,
                        829: 9488,
                        830: 9492,
                        831: 9496
                    },
                    lt = function (t) {
                        return null === t ? "" : (t = ut[t] || t, String.fromCharCode(t))
                    },
                    ct = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
                    dt = function () {
                        for (var t = [], e = 15; e--;) t.push("");
                        return t
                    },
                    ht = function t(e, i) {
                        t.prototype.init.call(this), this.field_ = e || 0, this.dataChannel_ = i || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function (t) {
                            var e, i, n, r, a;
                            if ((e = 32639 & t.ccData) !== this.lastControlCode_) {
                                if (4096 == (61440 & e) ? this.lastControlCode_ = e : e !== this.PADDING_ && (this.lastControlCode_ = null), n = e >>> 8, r = 255 & e, e !== this.PADDING_)
                                    if (e === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
                                    else if (e === this.END_OF_CAPTION_) this.mode_ = "popOn", this.clearFormatting(t.pts), this.flushDisplayed(t.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = t.pts;
                                else if (e === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(t.pts);
                                else if (e === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(t.pts);
                                else if (e === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, this.setRollUp(t.pts);
                                else if (e === this.CARRIAGE_RETURN_) this.clearFormatting(t.pts), this.flushDisplayed(t.pts), this.shiftRowsUp_(), this.startPts_ = t.pts;
                                else if (e === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
                                else if (e === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(t.pts), this.displayed_ = dt();
                                else if (e === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = dt();
                                else if (e === this.RESUME_DIRECT_CAPTIONING_) "paintOn" !== this.mode_ && (this.flushDisplayed(t.pts), this.displayed_ = dt()), this.mode_ = "paintOn", this.startPts_ = t.pts;
                                else if (this.isSpecialCharacter(n, r)) a = lt((n = (3 & n) << 8) | r), this[this.mode_](t.pts, a), this.column_++;
                                else if (this.isExtCharacter(n, r)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1), a = lt((n = (3 & n) << 8) | r), this[this.mode_](t.pts, a), this.column_++;
                                else if (this.isMidRowCode(n, r)) this.clearFormatting(t.pts), this[this.mode_](t.pts, " "), this.column_++, 14 == (14 & r) && this.addFormatting(t.pts, ["i"]), 1 == (1 & r) && this.addFormatting(t.pts, ["u"]);
                                else if (this.isOffsetControlCode(n, r)) this.column_ += 3 & r;
                                else if (this.isPAC(n, r)) {
                                    var s = ct.indexOf(7968 & e);
                                    "rollUp" === this.mode_ && this.setRollUp(t.pts, s), s !== this.row_ && (this.clearFormatting(t.pts), this.row_ = s), 1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(t.pts, ["u"]), 16 == (16 & e) && (this.column_ = 4 * ((14 & e) >> 1)), this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(t.pts, ["i"])
                                } else this.isNormalChar(n) && (0 === r && (r = null), a = lt(n), a += lt(r), this[this.mode_](t.pts, a), this.column_ += a.length)
                            } else this.lastControlCode_ = null
                        }
                    };
                ht.prototype = new X, ht.prototype.flushDisplayed = function (t) {
                    var e = this.displayed_.map(function (t) {
                        return t.trim()
                    }).join("\n").replace(/^\n+|\n+$/g, "");
                    e.length && this.trigger("data", {
                        startPts: this.startPts_,
                        endPts: t,
                        text: e,
                        stream: this.name_
                    })
                }, ht.prototype.reset = function () {
                    this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = dt(), this.nonDisplayed_ = dt(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.rollUpRows_ = 2, this.formatting_ = []
                }, ht.prototype.setConstants = function () {
                    0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
                }, ht.prototype.isSpecialCharacter = function (t, e) {
                    return t === this.EXT_ && 48 <= e && e <= 63
                }, ht.prototype.isExtCharacter = function (t, e) {
                    return (t === this.EXT_ + 1 || t === this.EXT_ + 2) && 32 <= e && e <= 63
                }, ht.prototype.isMidRowCode = function (t, e) {
                    return t === this.EXT_ && 32 <= e && e <= 47
                }, ht.prototype.isOffsetControlCode = function (t, e) {
                    return t === this.OFFSET_ && 33 <= e && e <= 35
                }, ht.prototype.isPAC = function (t, e) {
                    return t >= this.BASE_ && t < this.BASE_ + 8 && 64 <= e && e <= 127
                }, ht.prototype.isColorPAC = function (t) {
                    return 64 <= t && t <= 79 || 96 <= t && t <= 127
                }, ht.prototype.isNormalChar = function (t) {
                    return 32 <= t && t <= 127
                }, ht.prototype.setRollUp = function (t, e) {
                    if ("rollUp" !== this.mode_ && (this.row_ = 14, this.mode_ = "rollUp", this.flushDisplayed(t), this.nonDisplayed_ = dt(), this.displayed_ = dt()), void 0 !== e && e !== this.row_)
                        for (var i = 0; i < this.rollUpRows_; i++) this.displayed_[e - i] = this.displayed_[this.row_ - i], this.displayed_[this.row_ - i] = "";
                    void 0 === e && (e = this.row_), this.topRow_ = e - this.rollUpRows_ + 1
                }, ht.prototype.addFormatting = function (t, e) {
                    this.formatting_ = this.formatting_.concat(e);
                    var i = e.reduce(function (t, e) {
                        return t + "<" + e + ">"
                    }, "");
                    this[this.mode_](t, i)
                }, ht.prototype.clearFormatting = function (t) {
                    if (this.formatting_.length) {
                        var e = this.formatting_.reverse().reduce(function (t, e) {
                            return t + "</" + e + ">"
                        }, "");
                        this.formatting_ = [], this[this.mode_](t, e)
                    }
                }, ht.prototype.popOn = function (t, e) {
                    var i = this.nonDisplayed_[this.row_];
                    i += e, this.nonDisplayed_[this.row_] = i
                }, ht.prototype.rollUp = function (t, e) {
                    var i = this.displayed_[this.row_];
                    i += e, this.displayed_[this.row_] = i
                }, ht.prototype.shiftRowsUp_ = function () {
                    var t;
                    for (t = 0; t < this.topRow_; t++) this.displayed_[t] = "";
                    for (t = this.row_ + 1; t < 15; t++) this.displayed_[t] = "";
                    for (t = this.topRow_; t < this.row_; t++) this.displayed_[t] = this.displayed_[t + 1];
                    this.displayed_[this.row_] = ""
                }, ht.prototype.paintOn = function (t, e) {
                    var i = this.displayed_[this.row_];
                    i += e, this.displayed_[this.row_] = i
                };
                var pt = {
                        CaptionStream: ot,
                        Cea608Stream: ht
                    },
                    ft = {
                        H264_STREAM_TYPE: 27,
                        ADTS_STREAM_TYPE: 15,
                        METADATA_STREAM_TYPE: 21
                    },
                    mt = function (t, e) {
                        var i = 1;
                        for (e < t && (i = -1); 4294967296 < Math.abs(e - t);) t += 8589934592 * i;
                        return t
                    },
                    gt = function t(e) {
                        var i, n;
                        t.prototype.init.call(this), this.type_ = e, this.push = function (t) {
                            t.type === this.type_ && (void 0 === n && (n = t.dts), t.dts = mt(t.dts, n), t.pts = mt(t.pts, n), i = t.dts, this.trigger("data", t))
                        }, this.flush = function () {
                            n = i, this.trigger("done")
                        }, this.discontinuity = function () {
                            i = n = void 0
                        }
                    };
                gt.prototype = new X;
                var yt, vt = gt,
                    _t = function (t, e, i) {
                        var n, r = "";
                        for (n = e; n < i; n++) r += "%" + ("00" + t[n].toString(16)).slice(-2);
                        return r
                    },
                    bt = function (t, e, i) {
                        return decodeURIComponent(_t(t, e, i))
                    },
                    Tt = function (t) {
                        return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
                    },
                    St = {
                        TXXX: function (t) {
                            var e;
                            if (3 === t.data[0]) {
                                for (e = 1; e < t.data.length; e++)
                                    if (0 === t.data[e]) {
                                        t.description = bt(t.data, 1, e), t.value = bt(t.data, e + 1, t.data.length).replace(/\0*$/, "");
                                        break
                                    } t.data = t.value
                            }
                        },
                        WXXX: function (t) {
                            var e;
                            if (3 === t.data[0])
                                for (e = 1; e < t.data.length; e++)
                                    if (0 === t.data[e]) {
                                        t.description = bt(t.data, 1, e), t.url = bt(t.data, e + 1, t.data.length);
                                        break
                                    }
                        },
                        PRIV: function (t) {
                            var e, i;
                            for (e = 0; e < t.data.length; e++)
                                if (0 === t.data[e]) {
                                    t.owner = (i = t.data, unescape(_t(i, 0, e)));
                                    break
                                } t.privateData = t.data.subarray(e + 1), t.data = t.privateData
                        }
                    };
                (yt = function (t) {
                    var e, u = {
                            debug: !(!t || !t.debug),
                            descriptor: t && t.descriptor
                        },
                        l = 0,
                        c = [],
                        d = 0;
                    if (yt.prototype.init.call(this), this.dispatchType = ft.METADATA_STREAM_TYPE.toString(16), u.descriptor)
                        for (e = 0; e < u.descriptor.length; e++) this.dispatchType += ("00" + u.descriptor[e].toString(16)).slice(-2);
                    this.push = function (t) {
                        var e, i, n, r, a;
                        if ("timed-metadata" === t.type)
                            if (t.dataAlignmentIndicator && (d = 0, c.length = 0), 0 === c.length && (t.data.length < 10 || t.data[0] !== "I".charCodeAt(0) || t.data[1] !== "D".charCodeAt(0) || t.data[2] !== "3".charCodeAt(0))) u.debug;
                            else if (c.push(t), d += t.data.byteLength, 1 === c.length && (l = Tt(t.data.subarray(6, 10)), l += 10), !(d < l)) {
                            for (e = {
                                    data: new Uint8Array(l),
                                    frames: [],
                                    pts: c[0].pts,
                                    dts: c[0].dts
                                }, a = 0; a < l;) e.data.set(c[0].data.subarray(0, l - a), a), a += c[0].data.byteLength, d -= c[0].data.byteLength, c.shift();
                            i = 10, 64 & e.data[5] && (i += 4, i += Tt(e.data.subarray(10, 14)), l -= Tt(e.data.subarray(16, 20)));
                            do {
                                if ((n = Tt(e.data.subarray(i + 4, i + 8))) < 1) return;
                                if ((r = {
                                        id: String.fromCharCode(e.data[i], e.data[i + 1], e.data[i + 2], e.data[i + 3]),
                                        data: e.data.subarray(i + 10, i + n + 10)
                                    }).key = r.id, St[r.id] && (St[r.id](r), "com.apple.streaming.transportStreamTimestamp" === r.owner)) {
                                    var s = r.data,
                                        o = (1 & s[3]) << 30 | s[4] << 22 | s[5] << 14 | s[6] << 6 | s[7] >>> 2;
                                    o *= 4, o += 3 & s[7], r.timeStamp = o, void 0 === e.pts && void 0 === e.dts && (e.pts = r.timeStamp, e.dts = r.timeStamp), this.trigger("timestamp", r)
                                }
                                e.frames.push(r), i += 10, i += n
                            } while (i < l);
                            this.trigger("data", e)
                        }
                    }
                }).prototype = new X;
                var kt, Ct, wt, Et = yt,
                    At = vt;
                (kt = function () {
                    var r = new Uint8Array(188),
                        a = 0;
                    kt.prototype.init.call(this), this.push = function (t) {
                        var e, i = 0,
                            n = 188;
                        for (a ? ((e = new Uint8Array(t.byteLength + a)).set(r.subarray(0, a)), e.set(t, a), a = 0) : e = t; n < e.byteLength;) 71 !== e[i] || 71 !== e[n] ? (i++, n++) : (this.trigger("data", e.subarray(i, n)), i += 188, n += 188);
                        i < e.byteLength && (r.set(e.subarray(i), 0), a = e.byteLength - i)
                    }, this.flush = function () {
                        188 === a && 71 === r[0] && (this.trigger("data", r), a = 0), this.trigger("done")
                    }
                }).prototype = new X, (Ct = function () {
                    var n, r, a, s;
                    Ct.prototype.init.call(this), (s = this).packetsWaitingForPmt = [], this.programMapTable = void 0, n = function (t, e) {
                        var i = 0;
                        e.payloadUnitStartIndicator && (i += t[i] + 1), "pat" === e.type ? r(t.subarray(i), e) : a(t.subarray(i), e)
                    }, r = function (t, e) {
                        e.section_number = t[7], e.last_section_number = t[8], s.pmtPid = (31 & t[10]) << 8 | t[11], e.pmtPid = s.pmtPid
                    }, a = function (t, e) {
                        var i, n;
                        if (1 & t[5]) {
                            for (s.programMapTable = {
                                    video: null,
                                    audio: null,
                                    "timed-metadata": {}
                                }, i = 3 + ((15 & t[1]) << 8 | t[2]) - 4, n = 12 + ((15 & t[10]) << 8 | t[11]); n < i;) {
                                var r = t[n],
                                    a = (31 & t[n + 1]) << 8 | t[n + 2];
                                r === ft.H264_STREAM_TYPE && null === s.programMapTable.video ? s.programMapTable.video = a : r === ft.ADTS_STREAM_TYPE && null === s.programMapTable.audio ? s.programMapTable.audio = a : r === ft.METADATA_STREAM_TYPE && (s.programMapTable["timed-metadata"][a] = r), n += 5 + ((15 & t[n + 3]) << 8 | t[n + 4])
                            }
                            e.programMapTable = s.programMapTable
                        }
                    }, this.push = function (t) {
                        var e = {},
                            i = 4;
                        if (e.payloadUnitStartIndicator = !!(64 & t[1]), e.pid = 31 & t[1], e.pid <<= 8, e.pid |= t[2], 1 < (48 & t[3]) >>> 4 && (i += t[i] + 1), 0 === e.pid) e.type = "pat", n(t.subarray(i), e), this.trigger("data", e);
                        else if (e.pid === this.pmtPid)
                            for (e.type = "pmt", n(t.subarray(i), e), this.trigger("data", e); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
                        else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([t, i, e]) : this.processPes_(t, i, e)
                    }, this.processPes_ = function (t, e, i) {
                        i.pid === this.programMapTable.video ? i.streamType = ft.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = ft.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = t.subarray(e), this.trigger("data", i)
                    }
                }).prototype = new X, Ct.STREAM_TYPES = {
                    h264: 27,
                    adts: 15
                }, (wt = function () {
                    var h = this,
                        n = {
                            data: [],
                            size: 0
                        },
                        r = {
                            data: [],
                            size: 0
                        },
                        a = {
                            data: [],
                            size: 0
                        },
                        s = function (t, e, i) {
                            var n, r, a = new Uint8Array(t.size),
                                s = {
                                    type: e
                                },
                                o = 0,
                                u = 0;
                            if (t.data.length && !(t.size < 9)) {
                                for (s.trackId = t.data[0].pid, o = 0; o < t.data.length; o++) r = t.data[o], a.set(r.data, u), u += r.data.byteLength;
                                var l, c, d;
                                l = a, (c = s).packetLength = 6 + (l[4] << 8 | l[5]), c.dataAlignmentIndicator = 0 != (4 & l[6]), 192 & (d = l[7]) && (c.pts = (14 & l[9]) << 27 | (255 & l[10]) << 20 | (254 & l[11]) << 12 | (255 & l[12]) << 5 | (254 & l[13]) >>> 3, c.pts *= 4, c.pts += (6 & l[13]) >>> 1, c.dts = c.pts, 64 & d && (c.dts = (14 & l[14]) << 27 | (255 & l[15]) << 20 | (254 & l[16]) << 12 | (255 & l[17]) << 5 | (254 & l[18]) >>> 3, c.dts *= 4, c.dts += (6 & l[18]) >>> 1)), c.data = l.subarray(9 + l[8]), n = "video" === e || s.packetLength <= t.size, (i || n) && (t.size = 0, t.data.length = 0), n && h.trigger("data", s)
                            }
                        };
                    wt.prototype.init.call(this), this.push = function (i) {
                        ({
                            pat: function () {},
                            pes: function () {
                                var t, e;
                                switch (i.streamType) {
                                    case ft.H264_STREAM_TYPE:
                                    case ft.H264_STREAM_TYPE:
                                        t = n, e = "video";
                                        break;
                                    case ft.ADTS_STREAM_TYPE:
                                        t = r, e = "audio";
                                        break;
                                    case ft.METADATA_STREAM_TYPE:
                                        t = a, e = "timed-metadata";
                                        break;
                                    default:
                                        return
                                }
                                i.payloadUnitStartIndicator && s(t, e, !0), t.data.push(i), t.size += i.data.byteLength
                            },
                            pmt: function () {
                                var t = {
                                        type: "metadata",
                                        tracks: []
                                    },
                                    e = i.programMapTable;
                                null !== e.video && t.tracks.push({
                                    timelineStartInfo: {
                                        baseMediaDecodeTime: 0
                                    },
                                    id: +e.video,
                                    codec: "avc",
                                    type: "video"
                                }), null !== e.audio && t.tracks.push({
                                    timelineStartInfo: {
                                        baseMediaDecodeTime: 0
                                    },
                                    id: +e.audio,
                                    codec: "adts",
                                    type: "audio"
                                }), h.trigger("data", t)
                            }
                        })[i.type]()
                    }, this.flush = function () {
                        s(n, "video"), s(r, "audio"), s(a, "timed-metadata"), this.trigger("done")
                    }
                }).prototype = new X;
                var Lt = {
                    PAT_PID: 0,
                    MP2T_PACKET_LENGTH: 188,
                    TransportPacketStream: kt,
                    TransportParseStream: Ct,
                    ElementaryStream: wt,
                    TimestampRolloverStream: At,
                    CaptionStream: pt.CaptionStream,
                    Cea608Stream: pt.Cea608Stream,
                    MetadataStream: Et
                };
                for (var Ot in ft) ft.hasOwnProperty(Ot) && (Lt[Ot] = ft[Ot]);
                var Pt, Ut = Lt,
                    xt = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                (Pt = function () {
                    var l;
                    Pt.prototype.init.call(this), this.push = function (t) {
                        var e, i, n, r, a, s, o = 0,
                            u = 0;
                        if ("audio" === t.type)
                            for (l ? (r = l, (l = new Uint8Array(r.byteLength + t.data.byteLength)).set(r), l.set(t.data, r.byteLength)) : l = t.data; o + 5 < l.length;)
                                if (255 === l[o] && 240 == (246 & l[o + 1])) {
                                    if (i = 2 * (1 & ~l[o + 1]), e = (3 & l[o + 3]) << 11 | l[o + 4] << 3 | (224 & l[o + 5]) >> 5, s = 9e4 * (a = 1024 * (1 + (3 & l[o + 6]))) / xt[(60 & l[o + 2]) >>> 2], n = o + e, l.byteLength < n) return;
                                    if (this.trigger("data", {
                                            pts: t.pts + u * s,
                                            dts: t.dts + u * s,
                                            sampleCount: a,
                                            audioobjecttype: 1 + (l[o + 2] >>> 6 & 3),
                                            channelcount: (1 & l[o + 2]) << 2 | (192 & l[o + 3]) >>> 6,
                                            samplerate: xt[(60 & l[o + 2]) >>> 2],
                                            samplingfrequencyindex: (60 & l[o + 2]) >>> 2,
                                            samplesize: 16,
                                            data: l.subarray(o + 7 + i, n)
                                        }), l.byteLength === n) return void(l = void 0);
                                    u++, l = l.subarray(n)
                                } else o++
                    }, this.flush = function () {
                        this.trigger("done")
                    }
                }).prototype = new X;
                var It, Dt, Rt, Mt = Pt,
                    Bt = function (n) {
                        var r = n.byteLength,
                            a = 0,
                            s = 0;
                        this.length = function () {
                            return 8 * r
                        }, this.bitsAvailable = function () {
                            return 8 * r + s
                        }, this.loadWord = function () {
                            var t = n.byteLength - r,
                                e = new Uint8Array(4),
                                i = Math.min(4, r);
                            if (0 === i) throw new Error("no bytes available");
                            e.set(n.subarray(t, t + i)), a = new DataView(e.buffer).getUint32(0), s = 8 * i, r -= i
                        }, this.skipBits = function (t) {
                            var e;
                            t < s || (t -= s, t -= 8 * (e = Math.floor(t / 8)), r -= e, this.loadWord()), a <<= t, s -= t
                        }, this.readBits = function (t) {
                            var e = Math.min(s, t),
                                i = a >>> 32 - e;
                            return 0 < (s -= e) ? a <<= e : 0 < r && this.loadWord(), 0 < (e = t - e) ? i << e | this.readBits(e) : i
                        }, this.skipLeadingZeros = function () {
                            var t;
                            for (t = 0; t < s; ++t)
                                if (0 != (a & 2147483648 >>> t)) return a <<= t, s -= t, t;
                            return this.loadWord(), t + this.skipLeadingZeros()
                        }, this.skipUnsignedExpGolomb = function () {
                            this.skipBits(1 + this.skipLeadingZeros())
                        }, this.skipExpGolomb = function () {
                            this.skipBits(1 + this.skipLeadingZeros())
                        }, this.readUnsignedExpGolomb = function () {
                            var t = this.skipLeadingZeros();
                            return this.readBits(t + 1) - 1
                        }, this.readExpGolomb = function () {
                            var t = this.readUnsignedExpGolomb();
                            return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
                        }, this.readBoolean = function () {
                            return 1 === this.readBits(1)
                        }, this.readUnsignedByte = function () {
                            return this.readBits(8)
                        }, this.loadWord()
                    };
                (Dt = function () {
                    var i, n, r = 0;
                    Dt.prototype.init.call(this), this.push = function (t) {
                        var e;
                        for (n ? ((e = new Uint8Array(n.byteLength + t.data.byteLength)).set(n), e.set(t.data, n.byteLength), n = e) : n = t.data; r < n.byteLength - 3; r++)
                            if (1 === n[r + 2]) {
                                i = r + 5;
                                break
                            } for (; i < n.byteLength;) switch (n[i]) {
                            case 0:
                                if (0 !== n[i - 1]) {
                                    i += 2;
                                    break
                                }
                                if (0 !== n[i - 2]) {
                                    i++;
                                    break
                                }
                                for (r + 3 !== i - 2 && this.trigger("data", n.subarray(r + 3, i - 2)); 1 !== n[++i] && i < n.length;);
                                r = i - 2, i += 3;
                                break;
                            case 1:
                                if (0 !== n[i - 1] || 0 !== n[i - 2]) {
                                    i += 3;
                                    break
                                }
                                this.trigger("data", n.subarray(r + 3, i - 2)), r = i - 2, i += 3;
                                break;
                            default:
                                i += 3
                        }
                        n = n.subarray(r), i -= r, r = 0
                    }, this.flush = function () {
                        n && 3 < n.byteLength && this.trigger("data", n.subarray(r + 3)), n = null, r = 0, this.trigger("done")
                    }
                }).prototype = new X, Rt = {
                    100: !0,
                    110: !0,
                    122: !0,
                    244: !0,
                    44: !0,
                    83: !0,
                    86: !0,
                    118: !0,
                    128: !0,
                    138: !0,
                    139: !0,
                    134: !0
                }, (It = function () {
                    var i, n, r, a, s, o, _, e = new Dt;
                    It.prototype.init.call(this), (i = this).push = function (t) {
                        "video" === t.type && (n = t.trackId, r = t.pts, a = t.dts, e.push(t))
                    }, e.on("data", function (t) {
                        var e = {
                            trackId: n,
                            pts: r,
                            dts: a,
                            data: t
                        };
                        switch (31 & t[0]) {
                            case 5:
                                e.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                                break;
                            case 6:
                                e.nalUnitType = "sei_rbsp", e.escapedRBSP = s(t.subarray(1));
                                break;
                            case 7:
                                e.nalUnitType = "seq_parameter_set_rbsp", e.escapedRBSP = s(t.subarray(1)), e.config = o(e.escapedRBSP);
                                break;
                            case 8:
                                e.nalUnitType = "pic_parameter_set_rbsp";
                                break;
                            case 9:
                                e.nalUnitType = "access_unit_delimiter_rbsp"
                        }
                        i.trigger("data", e)
                    }), e.on("done", function () {
                        i.trigger("done")
                    }), this.flush = function () {
                        e.flush()
                    }, _ = function (t, e) {
                        var i, n = 8,
                            r = 8;
                        for (i = 0; i < t; i++) 0 !== r && (r = (n + e.readExpGolomb() + 256) % 256), n = 0 === r ? n : r
                    }, s = function (t) {
                        for (var e, i, n = t.byteLength, r = [], a = 1; a < n - 2;) 0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2] ? (r.push(a + 2), a += 2) : a++;
                        if (0 === r.length) return t;
                        e = n - r.length, i = new Uint8Array(e);
                        var s = 0;
                        for (a = 0; a < e; s++, a++) s === r[0] && (s++, r.shift()), i[a] = t[s];
                        return i
                    }, o = function (t) {
                        var e, i, n, r, a, s, o, u, l, c, d, h, p, f = 0,
                            m = 0,
                            g = 0,
                            y = 0,
                            v = 1;
                        if (i = (e = new Bt(t)).readUnsignedByte(), r = e.readUnsignedByte(), n = e.readUnsignedByte(), e.skipUnsignedExpGolomb(), Rt[i] && (3 === (a = e.readUnsignedExpGolomb()) && e.skipBits(1), e.skipUnsignedExpGolomb(), e.skipUnsignedExpGolomb(), e.skipBits(1), e.readBoolean()))
                            for (d = 3 !== a ? 8 : 12, p = 0; p < d; p++) e.readBoolean() && _(p < 6 ? 16 : 64, e);
                        if (e.skipUnsignedExpGolomb(), 0 === (s = e.readUnsignedExpGolomb())) e.readUnsignedExpGolomb();
                        else if (1 === s)
                            for (e.skipBits(1), e.skipExpGolomb(), e.skipExpGolomb(), o = e.readUnsignedExpGolomb(), p = 0; p < o; p++) e.skipExpGolomb();
                        if (e.skipUnsignedExpGolomb(), e.skipBits(1), u = e.readUnsignedExpGolomb(), l = e.readUnsignedExpGolomb(), 0 === (c = e.readBits(1)) && e.skipBits(1), e.skipBits(1), e.readBoolean() && (f = e.readUnsignedExpGolomb(), m = e.readUnsignedExpGolomb(), g = e.readUnsignedExpGolomb(), y = e.readUnsignedExpGolomb()), e.readBoolean() && e.readBoolean()) {
                            switch (e.readUnsignedByte()) {
                                case 1:
                                    h = [1, 1];
                                    break;
                                case 2:
                                    h = [12, 11];
                                    break;
                                case 3:
                                    h = [10, 11];
                                    break;
                                case 4:
                                    h = [16, 11];
                                    break;
                                case 5:
                                    h = [40, 33];
                                    break;
                                case 6:
                                    h = [24, 11];
                                    break;
                                case 7:
                                    h = [20, 11];
                                    break;
                                case 8:
                                    h = [32, 11];
                                    break;
                                case 9:
                                    h = [80, 33];
                                    break;
                                case 10:
                                    h = [18, 11];
                                    break;
                                case 11:
                                    h = [15, 11];
                                    break;
                                case 12:
                                    h = [64, 33];
                                    break;
                                case 13:
                                    h = [160, 99];
                                    break;
                                case 14:
                                    h = [4, 3];
                                    break;
                                case 15:
                                    h = [3, 2];
                                    break;
                                case 16:
                                    h = [2, 1];
                                    break;
                                case 255:
                                    h = [e.readUnsignedByte() << 8 | e.readUnsignedByte(), e.readUnsignedByte() << 8 | e.readUnsignedByte()]
                            }
                            h && (v = h[0] / h[1])
                        }
                        return {
                            profileIdc: i,
                            levelIdc: n,
                            profileCompatibility: r,
                            width: Math.ceil((16 * (u + 1) - 2 * f - 2 * m) * v),
                            height: (2 - c) * (l + 1) * 16 - 2 * g - 2 * y
                        }
                    }
                }).prototype = new X;
                var Nt, jt = {
                    H264Stream: It,
                    NalByteStream: Dt
                };
                (Nt = function () {
                    var o = new Uint8Array,
                        u = 0;
                    Nt.prototype.init.call(this), this.setTimestamp = function (t) {
                        u = t
                    }, this.parseId3TagSize = function (t, e) {
                        var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
                        return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
                    }, this.parseAdtsSize = function (t, e) {
                        var i = (224 & t[e + 5]) >> 5,
                            n = t[e + 4] << 3;
                        return 6144 & t[e + 3] | n | i
                    }, this.push = function (t) {
                        var e, i, n, r, a = 0,
                            s = 0;
                        for (o.length ? (r = o.length, (o = new Uint8Array(t.byteLength + r)).set(o.subarray(0, r)), o.set(t, r)) : o = t; 3 <= o.length - s;)
                            if (o[s] !== "I".charCodeAt(0) || o[s + 1] !== "D".charCodeAt(0) || o[s + 2] !== "3".charCodeAt(0))
                                if (!0 & o[s] && 240 == (240 & o[s + 1])) {
                                    if (o.length - s < 7) break;
                                    if ((a = this.parseAdtsSize(o, s)) > o.length) break;
                                    n = {
                                        type: "audio",
                                        data: o.subarray(s, s + a),
                                        pts: u,
                                        dts: u
                                    }, this.trigger("data", n), s += a
                                } else s++;
                        else {
                            if (o.length - s < 10) break;
                            if ((a = this.parseId3TagSize(o, s)) > o.length) break;
                            i = {
                                type: "timed-metadata",
                                data: o.subarray(s, s + a)
                            }, this.trigger("data", i), s += a
                        }
                        e = o.length - s, o = 0 < e ? o.subarray(s) : new Uint8Array
                    }
                }).prototype = new X;
                var Ft, Vt, Ht, zt, qt, Wt, Gt, Xt, Yt, $t, Kt, Jt, Qt = Nt,
                    Zt = [33, 16, 5, 32, 164, 27],
                    te = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
                    ee = function (t) {
                        for (var e = []; t--;) e.push(0);
                        return e
                    },
                    ie = {
                        96000: [Zt, [227, 64], ee(154), [56]],
                        88200: [Zt, [231], ee(170), [56]],
                        64000: [Zt, [248, 192], ee(240), [56]],
                        48000: [Zt, [255, 192], ee(268), [55, 148, 128], ee(54), [112]],
                        44100: [Zt, [255, 192], ee(268), [55, 163, 128], ee(84), [112]],
                        32000: [Zt, [255, 192], ee(268), [55, 234], ee(226), [112]],
                        24000: [Zt, [255, 192], ee(268), [55, 255, 128], ee(268), [111, 112], ee(126), [224]],
                        16000: [Zt, [255, 192], ee(268), [55, 255, 128], ee(268), [111, 255], ee(269), [223, 108], ee(195), [1, 192]],
                        12000: [te, ee(268), [3, 127, 248], ee(268), [6, 255, 240], ee(268), [13, 255, 224], ee(268), [27, 253, 128], ee(259), [56]],
                        11025: [te, ee(268), [3, 127, 248], ee(268), [6, 255, 240], ee(268), [13, 255, 224], ee(268), [27, 255, 192], ee(268), [55, 175, 128], ee(108), [112]],
                        8000: [te, ee(268), [3, 121, 16], ee(47), [7]]
                    },
                    ne = (Ft = ie, Object.keys(Ft).reduce(function (t, e) {
                        return t[e] = new Uint8Array(Ft[e].reduce(function (t, e) {
                            return t.concat(e)
                        }, [])), t
                    }, {})),
                    re = (Vt = function (t) {
                        return 9e4 * t
                    }, Ht = function (t, e) {
                        return t * e
                    }, zt = function (t) {
                        return t / 9e4
                    }, qt = function (t, e) {
                        return t / e
                    }, function (t, e) {
                        return Vt(qt(t, e))
                    }),
                    ae = function (t, e) {
                        return Ht(zt(t), e)
                    },
                    se = jt.H264Stream,
                    oe = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
                    ue = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility"];
                $t = function (t) {
                    return t[0] === "I".charCodeAt(0) && t[1] === "D".charCodeAt(0) && t[2] === "3".charCodeAt(0)
                }, Kt = function (t, e) {
                    var i;
                    if (t.length !== e.length) return !1;
                    for (i = 0; i < t.length; i++)
                        if (t[i] !== e[i]) return !1;
                    return !0
                }, Jt = function (t) {
                    var e, i = 0;
                    for (e = 0; e < t.length; e++) i += t[e].data.byteLength;
                    return i
                }, (Gt = function (r, a) {
                    var s = [],
                        o = 0,
                        e = 0,
                        l = 0,
                        c = 1 / 0;
                    a = a || {}, Gt.prototype.init.call(this), this.push = function (e) {
                        et(r, e), r && oe.forEach(function (t) {
                            r[t] = e[t]
                        }), s.push(e)
                    }, this.setEarliestDts = function (t) {
                        e = t - r.timelineStartInfo.baseMediaDecodeTime
                    }, this.setVideoBaseMediaDecodeTime = function (t) {
                        c = t
                    }, this.setAudioAppendStart = function (t) {
                        l = t
                    }, this.flush = function () {
                        var t, e, i, n;
                        0 !== s.length && (t = this.trimAdtsFramesByEarliestDts_(s), r.baseMediaDecodeTime = tt(r, a.keepOriginalTimestamps), this.prefixWithSilence_(r, t), r.samples = this.generateSampleTable_(t), i = z.mdat(this.concatenateFrameData_(t)), s = [], e = z.moof(o, [r]), n = new Uint8Array(e.byteLength + i.byteLength), o++, n.set(e), n.set(i, e.byteLength), Z(r), this.trigger("data", {
                            track: r,
                            boxes: n
                        })), this.trigger("done", "AudioSegmentStream")
                    }, this.prefixWithSilence_ = function (t, e) {
                        var i, n, r, a, s = 0,
                            o = 0,
                            u = 0;
                        if (e.length && (i = re(t.baseMediaDecodeTime, t.samplerate), n = Math.ceil(9e4 / (t.samplerate / 1024)), l && c && (s = i - Math.max(l, c), u = (o = Math.floor(s / n)) * n), !(o < 1 || 45e3 < u))) {
                            for ((r = ne[t.samplerate]) || (r = e[0].data), a = 0; a < o; a++) e.splice(a, 0, {
                                data: r
                            });
                            t.baseMediaDecodeTime -= Math.floor(ae(u, t.samplerate))
                        }
                    }, this.trimAdtsFramesByEarliestDts_ = function (t) {
                        return r.minSegmentDts >= e ? t : (r.minSegmentDts = 1 / 0, t.filter(function (t) {
                            return t.dts >= e && (r.minSegmentDts = Math.min(r.minSegmentDts, t.dts), r.minSegmentPts = r.minSegmentDts, !0)
                        }))
                    }, this.generateSampleTable_ = function (t) {
                        var e, i, n = [];
                        for (e = 0; e < t.length; e++) i = t[e], n.push({
                            size: i.data.byteLength,
                            duration: 1024
                        });
                        return n
                    }, this.concatenateFrameData_ = function (t) {
                        var e, i, n = 0,
                            r = new Uint8Array(Jt(t));
                        for (e = 0; e < t.length; e++) i = t[e], r.set(i.data, n), n += i.data.byteLength;
                        return r
                    }
                }).prototype = new X, (Wt = function (o, u) {
                    var e, i, l = 0,
                        c = [],
                        d = [];
                    u = u || {}, Wt.prototype.init.call(this), delete o.minPTS, this.gopCache_ = [], this.push = function (t) {
                        et(o, t), "seq_parameter_set_rbsp" !== t.nalUnitType || e || (e = t.config, o.sps = [t.data], ue.forEach(function (t) {
                            o[t] = e[t]
                        }, this)), "pic_parameter_set_rbsp" !== t.nalUnitType || i || (i = t.data, o.pps = [t.data]), c.push(t)
                    }, this.flush = function () {
                        for (var t, e, i, n, r, a; c.length && "access_unit_delimiter_rbsp" !== c[0].nalUnitType;) c.shift();
                        if (0 === c.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                        if (t = Y(c), (i = $(t))[0][0].keyFrame || ((e = this.getGopForFusion_(c[0], o)) ? (i.unshift(e), i.byteLength += e.byteLength, i.nalCount += e.nalCount, i.pts = e.pts, i.dts = e.dts, i.duration += e.duration) : i = K(i)), d.length) {
                            var s;
                            if (!(s = u.alignGopsAtEnd ? this.alignGopsAtEnd_(i) : this.alignGopsAtStart_(i))) return this.gopCache_.unshift({
                                gop: i.pop(),
                                pps: o.pps,
                                sps: o.sps
                            }), this.gopCache_.length = Math.min(6, this.gopCache_.length), c = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                            Z(o), i = s
                        }
                        et(o, i), o.samples = J(i), r = z.mdat(Q(i)), o.baseMediaDecodeTime = tt(o, u.keepOriginalTimestamps), this.trigger("processedGopsInfo", i.map(function (t) {
                            return {
                                pts: t.pts,
                                dts: t.dts,
                                byteLength: t.byteLength
                            }
                        })), this.gopCache_.unshift({
                            gop: i.pop(),
                            pps: o.pps,
                            sps: o.sps
                        }), this.gopCache_.length = Math.min(6, this.gopCache_.length), c = [], this.trigger("baseMediaDecodeTime", o.baseMediaDecodeTime), this.trigger("timelineStartInfo", o.timelineStartInfo), n = z.moof(l, [o]), a = new Uint8Array(n.byteLength + r.byteLength), l++, a.set(n), a.set(r, n.byteLength), this.trigger("data", {
                            track: o,
                            boxes: a
                        }), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
                    }, this.resetStream_ = function () {
                        Z(o), i = e = void 0
                    }, this.getGopForFusion_ = function (t) {
                        var e, i, n, r, a, s = 1 / 0;
                        for (a = 0; a < this.gopCache_.length; a++) n = (r = this.gopCache_[a]).gop, o.pps && Kt(o.pps[0], r.pps[0]) && o.sps && Kt(o.sps[0], r.sps[0]) && (n.dts < o.timelineStartInfo.dts || -1e4 <= (e = t.dts - n.dts - n.duration) && e <= 45e3 && (!i || e < s) && (i = r, s = e));
                        return i ? i.gop : null
                    }, this.alignGopsAtStart_ = function (t) {
                        var e, i, n, r, a, s, o, u;
                        for (a = t.byteLength, s = t.nalCount, o = t.duration, e = i = 0; e < d.length && i < t.length && (n = d[e], r = t[i], n.pts !== r.pts);) r.pts > n.pts ? e++ : (i++, a -= r.byteLength, s -= r.nalCount, o -= r.duration);
                        return 0 === i ? t : i === t.length ? null : ((u = t.slice(i)).byteLength = a, u.duration = o, u.nalCount = s, u.pts = u[0].pts, u.dts = u[0].dts, u)
                    }, this.alignGopsAtEnd_ = function (t) {
                        var e, i, n, r, a, s, o;
                        for (e = d.length - 1, i = t.length - 1, a = null, s = !1; 0 <= e && 0 <= i;) {
                            if (n = d[e], r = t[i], n.pts === r.pts) {
                                s = !0;
                                break
                            }
                            n.pts > r.pts ? e-- : (e === d.length - 1 && (a = i), i--)
                        }
                        if (!s && null === a) return null;
                        if (0 === (o = s ? i : a)) return t;
                        var u = t.slice(o),
                            l = u.reduce(function (t, e) {
                                return t.byteLength += e.byteLength, t.duration += e.duration, t.nalCount += e.nalCount, t
                            }, {
                                byteLength: 0,
                                duration: 0,
                                nalCount: 0
                            });
                        return u.byteLength = l.byteLength, u.duration = l.duration, u.nalCount = l.nalCount, u.pts = u[0].pts, u.dts = u[0].dts, u
                    }, this.alignGopsWith = function (t) {
                        d = t
                    }
                }).prototype = new X, (Yt = function (t, e) {
                    this.numberOfTracks = 0, this.metadataStream = e, "undefined" != typeof t.remux ? this.remuxTracks = !!t.remux : this.remuxTracks = !0, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, Yt.prototype.init.call(this), this.push = function (t) {
                        return t.text ? this.pendingCaptions.push(t) : t.frames ? this.pendingMetadata.push(t) : (this.pendingTracks.push(t.track), this.pendingBoxes.push(t.boxes), this.pendingBytes += t.boxes.byteLength, "video" === t.track.type && (this.videoTrack = t.track), void("audio" === t.track.type && (this.audioTrack = t.track)))
                    }
                }).prototype = new X, Yt.prototype.flush = function (t) {
                    var e, i, n, r, a = 0,
                        s = {
                            captions: [],
                            captionStreams: {},
                            metadata: [],
                            info: {}
                        },
                        o = 0;
                    if (this.pendingTracks.length < this.numberOfTracks) {
                        if ("VideoSegmentStream" !== t && "AudioSegmentStream" !== t) return;
                        if (this.remuxTracks) return;
                        if (0 === this.pendingTracks.length) return this.emittedTracks++, void(this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
                    }
                    for (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, ue.forEach(function (t) {
                            s.info[t] = this.videoTrack[t]
                        }, this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, oe.forEach(function (t) {
                            s.info[t] = this.audioTrack[t]
                        }, this)), 1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type : s.type = "combined", this.emittedTracks += this.pendingTracks.length, n = z.initSegment(this.pendingTracks), s.initSegment = new Uint8Array(n.byteLength), s.initSegment.set(n), s.data = new Uint8Array(this.pendingBytes), r = 0; r < this.pendingBoxes.length; r++) s.data.set(this.pendingBoxes[r], a), a += this.pendingBoxes[r].byteLength;
                    for (r = 0; r < this.pendingCaptions.length; r++)(e = this.pendingCaptions[r]).startTime = e.startPts - o, e.startTime /= 9e4, e.endTime = e.endPts - o, e.endTime /= 9e4, s.captionStreams[e.stream] = !0, s.captions.push(e);
                    for (r = 0; r < this.pendingMetadata.length; r++)(i = this.pendingMetadata[r]).cueTime = i.pts - o, i.cueTime /= 9e4, s.metadata.push(i);
                    s.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", s), this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
                }, (Xt = function (n) {
                    var r, a, s = this,
                        i = !0;
                    Xt.prototype.init.call(this), n = n || {}, this.baseMediaDecodeTime = n.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function () {
                        var e = {};
                        (this.transmuxPipeline_ = e).type = "aac", e.metadataStream = new Ut.MetadataStream, e.aacStream = new Qt, e.audioTimestampRolloverStream = new Ut.TimestampRolloverStream("audio"), e.timedMetadataTimestampRolloverStream = new Ut.TimestampRolloverStream("timed-metadata"), e.adtsStream = new Mt, e.coalesceStream = new Yt(n, e.metadataStream), e.headOfPipeline = e.aacStream, e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream), e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream), e.metadataStream.on("timestamp", function (t) {
                            e.aacStream.setTimestamp(t.timeStamp)
                        }), e.aacStream.on("data", function (t) {
                            "timed-metadata" !== t.type || e.audioSegmentStream || (a = a || {
                                timelineStartInfo: {
                                    baseMediaDecodeTime: s.baseMediaDecodeTime
                                },
                                codec: "adts",
                                type: "audio"
                            }, e.coalesceStream.numberOfTracks++, e.audioSegmentStream = new Gt(a, n), e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))
                        }), e.coalesceStream.on("data", this.trigger.bind(this, "data")), e.coalesceStream.on("done", this.trigger.bind(this, "done"))
                    }, this.setupTsPipeline = function () {
                        var i = {};
                        (this.transmuxPipeline_ = i).type = "ts", i.metadataStream = new Ut.MetadataStream, i.packetStream = new Ut.TransportPacketStream, i.parseStream = new Ut.TransportParseStream, i.elementaryStream = new Ut.ElementaryStream, i.videoTimestampRolloverStream = new Ut.TimestampRolloverStream("video"), i.audioTimestampRolloverStream = new Ut.TimestampRolloverStream("audio"), i.timedMetadataTimestampRolloverStream = new Ut.TimestampRolloverStream("timed-metadata"), i.adtsStream = new Mt, i.h264Stream = new se, i.captionStream = new Ut.CaptionStream, i.coalesceStream = new Yt(n, i.metadataStream), i.headOfPipeline = i.packetStream, i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream), i.elementaryStream.pipe(i.videoTimestampRolloverStream).pipe(i.h264Stream), i.elementaryStream.pipe(i.audioTimestampRolloverStream).pipe(i.adtsStream), i.elementaryStream.pipe(i.timedMetadataTimestampRolloverStream).pipe(i.metadataStream).pipe(i.coalesceStream), i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream), i.elementaryStream.on("data", function (t) {
                            var e;
                            if ("metadata" === t.type) {
                                for (e = t.tracks.length; e--;) r || "video" !== t.tracks[e].type ? a || "audio" !== t.tracks[e].type || ((a = t.tracks[e]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime) : (r = t.tracks[e]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime;
                                r && !i.videoSegmentStream && (i.coalesceStream.numberOfTracks++, i.videoSegmentStream = new Wt(r, n), i.videoSegmentStream.on("timelineStartInfo", function (t) {
                                    a && (a.timelineStartInfo = t, i.audioSegmentStream.setEarliestDts(t.dts))
                                }), i.videoSegmentStream.on("processedGopsInfo", s.trigger.bind(s, "gopInfo")), i.videoSegmentStream.on("baseMediaDecodeTime", function (t) {
                                    a && i.audioSegmentStream.setVideoBaseMediaDecodeTime(t)
                                }), i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)), a && !i.audioSegmentStream && (i.coalesceStream.numberOfTracks++, i.audioSegmentStream = new Gt(a, n), i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream))
                            }
                        }), i.coalesceStream.on("data", this.trigger.bind(this, "data")), i.coalesceStream.on("done", this.trigger.bind(this, "done"))
                    }, this.setBaseMediaDecodeTime = function (t) {
                        var e = this.transmuxPipeline_;
                        this.baseMediaDecodeTime = t, a && (a.timelineStartInfo.dts = void 0, a.timelineStartInfo.pts = void 0, Z(a), a.timelineStartInfo.baseMediaDecodeTime = t, e.audioTimestampRolloverStream && e.audioTimestampRolloverStream.discontinuity()), r && (e.videoSegmentStream && (e.videoSegmentStream.gopCache_ = [], e.videoTimestampRolloverStream.discontinuity()), r.timelineStartInfo.dts = void 0, r.timelineStartInfo.pts = void 0, Z(r), e.captionStream.reset(), r.timelineStartInfo.baseMediaDecodeTime = t), e.timedMetadataTimestampRolloverStream && e.timedMetadataTimestampRolloverStream.discontinuity()
                    }, this.setAudioAppendStart = function (t) {
                        a && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)
                    }, this.alignGopsWith = function (t) {
                        r && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)
                    }, this.push = function (t) {
                        if (i) {
                            var e = $t(t);
                            e && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : e || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), i = !1
                        }
                        this.transmuxPipeline_.headOfPipeline.push(t)
                    }, this.flush = function () {
                        i = !0, this.transmuxPipeline_.headOfPipeline.flush()
                    }, this.resetCaptions = function () {
                        this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
                    }
                }).prototype = new X;
                var le, ce, de = {
                        Transmuxer: Xt,
                        VideoSegmentStream: Wt,
                        AudioSegmentStream: Gt,
                        AUDIO_PROPERTIES: oe,
                        VIDEO_PROPERTIES: ue
                    },
                    he = W.parseType,
                    pe = function (t) {
                        return new Date(1e3 * t - 20828448e5)
                    },
                    fe = function (t) {
                        return {
                            isLeading: (12 & t[0]) >>> 2,
                            dependsOn: 3 & t[0],
                            isDependedOn: (192 & t[1]) >>> 6,
                            hasRedundancy: (48 & t[1]) >>> 4,
                            paddingValue: (14 & t[1]) >>> 1,
                            isNonSyncSample: 1 & t[1],
                            degradationPriority: t[2] << 8 | t[3]
                        }
                    },
                    me = {
                        avc1: function (t) {
                            var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
                            return {
                                dataReferenceIndex: e.getUint16(6),
                                width: e.getUint16(24),
                                height: e.getUint16(26),
                                horizresolution: e.getUint16(28) + e.getUint16(30) / 16,
                                vertresolution: e.getUint16(32) + e.getUint16(34) / 16,
                                frameCount: e.getUint16(40),
                                depth: e.getUint16(74),
                                config: le(t.subarray(78, t.byteLength))
                            }
                        },
                        avcC: function (t) {
                            var e, i, n, r, a = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                s = {
                                    configurationVersion: t[0],
                                    avcProfileIndication: t[1],
                                    profileCompatibility: t[2],
                                    avcLevelIndication: t[3],
                                    lengthSizeMinusOne: 3 & t[4],
                                    sps: [],
                                    pps: []
                                },
                                o = 31 & t[5];
                            for (n = 6, r = 0; r < o; r++) i = a.getUint16(n), n += 2, s.sps.push(new Uint8Array(t.subarray(n, n + i))), n += i;
                            for (e = t[n], n++, r = 0; r < e; r++) i = a.getUint16(n), n += 2, s.pps.push(new Uint8Array(t.subarray(n, n + i))), n += i;
                            return s
                        },
                        btrt: function (t) {
                            var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
                            return {
                                bufferSizeDB: e.getUint32(0),
                                maxBitrate: e.getUint32(4),
                                avgBitrate: e.getUint32(8)
                            }
                        },
                        esds: function (t) {
                            return {
                                version: t[0],
                                flags: new Uint8Array(t.subarray(1, 4)),
                                esId: t[6] << 8 | t[7],
                                streamPriority: 31 & t[8],
                                decoderConfig: {
                                    objectProfileIndication: t[11],
                                    streamType: t[12] >>> 2 & 63,
                                    bufferSize: t[13] << 16 | t[14] << 8 | t[15],
                                    maxBitrate: t[16] << 24 | t[17] << 16 | t[18] << 8 | t[19],
                                    avgBitrate: t[20] << 24 | t[21] << 16 | t[22] << 8 | t[23],
                                    decoderConfigDescriptor: {
                                        tag: t[24],
                                        length: t[25],
                                        audioObjectType: t[26] >>> 3 & 31,
                                        samplingFrequencyIndex: (7 & t[26]) << 1 | t[27] >>> 7 & 1,
                                        channelConfiguration: t[27] >>> 3 & 15
                                    }
                                }
                            }
                        },
                        ftyp: function (t) {
                            for (var e = new DataView(t.buffer, t.byteOffset, t.byteLength), i = {
                                    majorBrand: he(t.subarray(0, 4)),
                                    minorVersion: e.getUint32(4),
                                    compatibleBrands: []
                                }, n = 8; n < t.byteLength;) i.compatibleBrands.push(he(t.subarray(n, n + 4))), n += 4;
                            return i
                        },
                        dinf: function (t) {
                            return {
                                boxes: le(t)
                            }
                        },
                        dref: function (t) {
                            return {
                                version: t[0],
                                flags: new Uint8Array(t.subarray(1, 4)),
                                dataReferences: le(t.subarray(8))
                            }
                        },
                        hdlr: function (t) {
                            var e = {
                                    version: new DataView(t.buffer, t.byteOffset, t.byteLength).getUint8(0),
                                    flags: new Uint8Array(t.subarray(1, 4)),
                                    handlerType: he(t.subarray(8, 12)),
                                    name: ""
                                },
                                i = 8;
                            for (i = 24; i < t.byteLength; i++) {
                                if (0 === t[i]) {
                                    i++;
                                    break
                                }
                                e.name += String.fromCharCode(t[i])
                            }
                            return e.name = decodeURIComponent(escape(e.name)), e
                        },
                        mdat: function (t) {
                            return {
                                byteLength: t.byteLength,
                                nals: function (t) {
                                    var e, i, n = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                        r = [];
                                    for (e = 0; e + 4 < t.length; e += i)
                                        if (i = n.getUint32(e), e += 4, i <= 0) r.push("<span style='color:red;'>MALFORMED DATA</span>");
                                        else switch (31 & t[e]) {
                                            case 1:
                                                r.push("slice_layer_without_partitioning_rbsp");
                                                break;
                                            case 5:
                                                r.push("slice_layer_without_partitioning_rbsp_idr");
                                                break;
                                            case 6:
                                                r.push("sei_rbsp");
                                                break;
                                            case 7:
                                                r.push("seq_parameter_set_rbsp");
                                                break;
                                            case 8:
                                                r.push("pic_parameter_set_rbsp");
                                                break;
                                            case 9:
                                                r.push("access_unit_delimiter_rbsp");
                                                break;
                                            default:
                                                r.push("UNKNOWN NAL - " + t[e] & 31)
                                        }
                                    return r
                                }(t)
                            }
                        },
                        mdhd: function (t) {
                            var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                n = 4,
                                r = {
                                    version: i.getUint8(0),
                                    flags: new Uint8Array(t.subarray(1, 4)),
                                    language: ""
                                };
                            return 1 === r.version ? (n += 4, r.creationTime = pe(i.getUint32(n)), n += 8, r.modificationTime = pe(i.getUint32(n)), n += 4, r.timescale = i.getUint32(n), n += 8) : (r.creationTime = pe(i.getUint32(n)), n += 4, r.modificationTime = pe(i.getUint32(n)), n += 4, r.timescale = i.getUint32(n), n += 4), r.duration = i.getUint32(n), n += 4, e = i.getUint16(n), r.language += String.fromCharCode(96 + (e >> 10)), r.language += String.fromCharCode(96 + ((992 & e) >> 5)), r.language += String.fromCharCode(96 + (31 & e)), r
                        },
                        mdia: function (t) {
                            return {
                                boxes: le(t)
                            }
                        },
                        mfhd: function (t) {
                            return {
                                version: t[0],
                                flags: new Uint8Array(t.subarray(1, 4)),
                                sequenceNumber: t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7]
                            }
                        },
                        minf: function (t) {
                            return {
                                boxes: le(t)
                            }
                        },
                        mp4a: function (t) {
                            var e = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                i = {
                                    dataReferenceIndex: e.getUint16(6),
                                    channelcount: e.getUint16(16),
                                    samplesize: e.getUint16(18),
                                    samplerate: e.getUint16(24) + e.getUint16(26) / 65536
                                };
                            return 28 < t.byteLength && (i.streamDescriptor = le(t.subarray(28))[0]), i
                        },
                        moof: function (t) {
                            return {
                                boxes: le(t)
                            }
                        },
                        moov: function (t) {
                            return {
                                boxes: le(t)
                            }
                        },
                        mvex: function (t) {
                            return {
                                boxes: le(t)
                            }
                        },
                        mvhd: function (t) {
                            var e = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                i = 4,
                                n = {
                                    version: e.getUint8(0),
                                    flags: new Uint8Array(t.subarray(1, 4))
                                };
                            return 1 === n.version ? (i += 4, n.creationTime = pe(e.getUint32(i)), i += 8, n.modificationTime = pe(e.getUint32(i)), i += 4, n.timescale = e.getUint32(i), i += 8) : (n.creationTime = pe(e.getUint32(i)), i += 4, n.modificationTime = pe(e.getUint32(i)), i += 4, n.timescale = e.getUint32(i), i += 4), n.duration = e.getUint32(i), i += 4, n.rate = e.getUint16(i) + e.getUint16(i + 2) / 16, i += 4, n.volume = e.getUint8(i) + e.getUint8(i + 1) / 8, i += 2, i += 2, i += 8, n.matrix = new Uint32Array(t.subarray(i, i + 36)), i += 36, i += 24, n.nextTrackId = e.getUint32(i), n
                        },
                        pdin: function (t) {
                            var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
                            return {
                                version: e.getUint8(0),
                                flags: new Uint8Array(t.subarray(1, 4)),
                                rate: e.getUint32(4),
                                initialDelay: e.getUint32(8)
                            }
                        },
                        sdtp: function (t) {
                            var e, i = {
                                version: t[0],
                                flags: new Uint8Array(t.subarray(1, 4)),
                                samples: []
                            };
                            for (e = 4; e < t.byteLength; e++) i.samples.push({
                                dependsOn: (48 & t[e]) >> 4,
                                isDependedOn: (12 & t[e]) >> 2,
                                hasRedundancy: 3 & t[e]
                            });
                            return i
                        },
                        sidx: function (t) {
                            var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                n = {
                                    version: t[0],
                                    flags: new Uint8Array(t.subarray(1, 4)),
                                    references: [],
                                    referenceId: i.getUint32(4),
                                    timescale: i.getUint32(8),
                                    earliestPresentationTime: i.getUint32(12),
                                    firstOffset: i.getUint32(16)
                                },
                                r = i.getUint16(22);
                            for (e = 24; r; e += 12, r--) n.references.push({
                                referenceType: (128 & t[e]) >>> 7,
                                referencedSize: 2147483647 & i.getUint32(e),
                                subsegmentDuration: i.getUint32(e + 4),
                                startsWithSap: !!(128 & t[e + 8]),
                                sapType: (112 & t[e + 8]) >>> 4,
                                sapDeltaTime: 268435455 & i.getUint32(e + 8)
                            });
                            return n
                        },
                        smhd: function (t) {
                            return {
                                version: t[0],
                                flags: new Uint8Array(t.subarray(1, 4)),
                                balance: t[4] + t[5] / 256
                            }
                        },
                        stbl: function (t) {
                            return {
                                boxes: le(t)
                            }
                        },
                        stco: function (t) {
                            var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                n = {
                                    version: t[0],
                                    flags: new Uint8Array(t.subarray(1, 4)),
                                    chunkOffsets: []
                                },
                                r = i.getUint32(4);
                            for (e = 8; r; e += 4, r--) n.chunkOffsets.push(i.getUint32(e));
                            return n
                        },
                        stsc: function (t) {
                            var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                n = i.getUint32(4),
                                r = {
                                    version: t[0],
                                    flags: new Uint8Array(t.subarray(1, 4)),
                                    sampleToChunks: []
                                };
                            for (e = 8; n; e += 12, n--) r.sampleToChunks.push({
                                firstChunk: i.getUint32(e),
                                samplesPerChunk: i.getUint32(e + 4),
                                sampleDescriptionIndex: i.getUint32(e + 8)
                            });
                            return r
                        },
                        stsd: function (t) {
                            return {
                                version: t[0],
                                flags: new Uint8Array(t.subarray(1, 4)),
                                sampleDescriptions: le(t.subarray(8))
                            }
                        },
                        stsz: function (t) {
                            var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                n = {
                                    version: t[0],
                                    flags: new Uint8Array(t.subarray(1, 4)),
                                    sampleSize: i.getUint32(4),
                                    entries: []
                                };
                            for (e = 12; e < t.byteLength; e += 4) n.entries.push(i.getUint32(e));
                            return n
                        },
                        stts: function (t) {
                            var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                n = {
                                    version: t[0],
                                    flags: new Uint8Array(t.subarray(1, 4)),
                                    timeToSamples: []
                                },
                                r = i.getUint32(4);
                            for (e = 8; r; e += 8, r--) n.timeToSamples.push({
                                sampleCount: i.getUint32(e),
                                sampleDelta: i.getUint32(e + 4)
                            });
                            return n
                        },
                        styp: function (t) {
                            return me.ftyp(t)
                        },
                        tfdt: function (t) {
                            var e = {
                                version: t[0],
                                flags: new Uint8Array(t.subarray(1, 4)),
                                baseMediaDecodeTime: t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7]
                            };
                            return 1 === e.version && (e.baseMediaDecodeTime *= Math.pow(2, 32), e.baseMediaDecodeTime += t[8] << 24 | t[9] << 16 | t[10] << 8 | t[11]), e
                        },
                        tfhd: function (t) {
                            var e, i = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                n = {
                                    version: t[0],
                                    flags: new Uint8Array(t.subarray(1, 4)),
                                    trackId: i.getUint32(4)
                                },
                                r = 1 & n.flags[2],
                                a = 2 & n.flags[2],
                                s = 8 & n.flags[2],
                                o = 16 & n.flags[2],
                                u = 32 & n.flags[2],
                                l = 65536 & n.flags[0],
                                c = 131072 & n.flags[0];
                            return e = 8, r && (e += 4, n.baseDataOffset = i.getUint32(12), e += 4), a && (n.sampleDescriptionIndex = i.getUint32(e), e += 4), s && (n.defaultSampleDuration = i.getUint32(e), e += 4), o && (n.defaultSampleSize = i.getUint32(e), e += 4), u && (n.defaultSampleFlags = i.getUint32(e)), l && (n.durationIsEmpty = !0), !r && c && (n.baseDataOffsetIsMoof = !0), n
                        },
                        tkhd: function (t) {
                            var e = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                i = 4,
                                n = {
                                    version: e.getUint8(0),
                                    flags: new Uint8Array(t.subarray(1, 4))
                                };
                            return 1 === n.version ? (i += 4, n.creationTime = pe(e.getUint32(i)), i += 8, n.modificationTime = pe(e.getUint32(i)), i += 4, n.trackId = e.getUint32(i), i += 4, i += 8) : (n.creationTime = pe(e.getUint32(i)), i += 4, n.modificationTime = pe(e.getUint32(i)), i += 4, n.trackId = e.getUint32(i), i += 4, i += 4), n.duration = e.getUint32(i), i += 4, i += 8, n.layer = e.getUint16(i), i += 2, n.alternateGroup = e.getUint16(i), i += 2, n.volume = e.getUint8(i) + e.getUint8(i + 1) / 8, i += 2, i += 2, n.matrix = new Uint32Array(t.subarray(i, i + 36)), i += 36, n.width = e.getUint16(i) + e.getUint16(i + 2) / 16, i += 4, n.height = e.getUint16(i) + e.getUint16(i + 2) / 16, n
                        },
                        traf: function (t) {
                            return {
                                boxes: le(t)
                            }
                        },
                        trak: function (t) {
                            return {
                                boxes: le(t)
                            }
                        },
                        trex: function (t) {
                            var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
                            return {
                                version: t[0],
                                flags: new Uint8Array(t.subarray(1, 4)),
                                trackId: e.getUint32(4),
                                defaultSampleDescriptionIndex: e.getUint32(8),
                                defaultSampleDuration: e.getUint32(12),
                                defaultSampleSize: e.getUint32(16),
                                sampleDependsOn: 3 & t[20],
                                sampleIsDependedOn: (192 & t[21]) >> 6,
                                sampleHasRedundancy: (48 & t[21]) >> 4,
                                samplePaddingValue: (14 & t[21]) >> 1,
                                sampleIsDifferenceSample: !!(1 & t[21]),
                                sampleDegradationPriority: e.getUint16(22)
                            }
                        },
                        trun: function (t) {
                            var e, i = {
                                    version: t[0],
                                    flags: new Uint8Array(t.subarray(1, 4)),
                                    samples: []
                                },
                                n = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                r = 1 & i.flags[2],
                                a = 4 & i.flags[2],
                                s = 1 & i.flags[1],
                                o = 2 & i.flags[1],
                                u = 4 & i.flags[1],
                                l = 8 & i.flags[1],
                                c = n.getUint32(4),
                                d = 8;
                            for (r && (i.dataOffset = n.getInt32(d), d += 4), a && c && (e = {
                                    flags: fe(t.subarray(d, d + 4))
                                }, d += 4, s && (e.duration = n.getUint32(d), d += 4), o && (e.size = n.getUint32(d), d += 4), l && (e.compositionTimeOffset = n.getUint32(d), d += 4), i.samples.push(e), c--); c--;) e = {}, s && (e.duration = n.getUint32(d), d += 4), o && (e.size = n.getUint32(d), d += 4), u && (e.flags = fe(t.subarray(d, d + 4)), d += 4), l && (e.compositionTimeOffset = n.getUint32(d), d += 4), i.samples.push(e);
                            return i
                        },
                        "url ": function (t) {
                            return {
                                version: t[0],
                                flags: new Uint8Array(t.subarray(1, 4))
                            }
                        },
                        vmhd: function (t) {
                            var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
                            return {
                                version: t[0],
                                flags: new Uint8Array(t.subarray(1, 4)),
                                graphicsmode: e.getUint16(4),
                                opcolor: new Uint16Array([e.getUint16(6), e.getUint16(8), e.getUint16(10)])
                            }
                        }
                    },
                    ge = {
                        inspect: le = function (t) {
                            for (var e, i, n, r, a, s = 0, o = [], u = new ArrayBuffer(t.length), l = new Uint8Array(u), c = 0; c < t.length; ++c) l[c] = t[c];
                            for (e = new DataView(u); s < t.byteLength;) i = e.getUint32(s), n = he(t.subarray(s + 4, s + 8)), r = 1 < i ? s + i : t.byteLength, (a = (me[n] || function (t) {
                                return {
                                    data: t
                                }
                            })(t.subarray(s + 8, r))).size = i, a.type = n, o.push(a), s = r;
                            return o
                        },
                        textify: ce = function (t, e) {
                            var a;
                            return e = e || 0, a = new Array(2 * e + 1).join(" "), t.map(function (r, t) {
                                return a + r.type + "\n" + Object.keys(r).filter(function (t) {
                                    return "type" !== t && "boxes" !== t
                                }).map(function (t) {
                                    var e = a + "  " + t + ": ",
                                        i = r[t];
                                    if (i instanceof Uint8Array || i instanceof Uint32Array) {
                                        var n = Array.prototype.slice.call(new Uint8Array(i.buffer, i.byteOffset, i.byteLength)).map(function (t) {
                                            return " " + ("00" + t.toString(16)).slice(-2)
                                        }).join("").match(/.{1,24}/g);
                                        return n ? 1 === n.length ? e + "<" + n.join("").slice(1) + ">" : e + "<\n" + n.map(function (t) {
                                            return a + "  " + t
                                        }).join("\n") + "\n" + a + "  >" : e + "<>"
                                    }
                                    return e + JSON.stringify(i, null, 2).split("\n").map(function (t, e) {
                                        return 0 === e ? t : a + "  " + t
                                    }).join("\n")
                                }).join("\n") + (r.boxes ? "\n" + ce(r.boxes, e + 1) : "")
                            }).join("\n")
                        },
                        parseTfdt: me.tfdt,
                        parseHdlr: me.hdlr,
                        parseTfhd: me.tfhd,
                        parseTrun: me.trun
                    },
                    ye = at,
                    ve = pt.CaptionStream,
                    _e = function (t, e) {
                        for (var i = t, n = 0; n < e.length; n++) {
                            var r = e[n];
                            if (i < r.size) return r;
                            i -= r.size
                        }
                        return null
                    },
                    be = function (t, y) {
                        var n = W.findBox(t, ["moof", "traf"]),
                            e = W.findBox(t, ["mdat"]),
                            v = {},
                            r = [];
                        return e.forEach(function (t, e) {
                            var i = n[e];
                            r.push({
                                mdat: t,
                                traf: i
                            })
                        }), r.forEach(function (t) {
                            var e, i, n, r, a, s, o, u, l = t.mdat,
                                c = t.traf,
                                d = W.findBox(c, ["tfhd"]),
                                h = ge.parseTfhd(d[0]),
                                p = h.trackId,
                                f = W.findBox(c, ["tfdt"]),
                                m = 0 < f.length ? ge.parseTfdt(f[0]).baseMediaDecodeTime : 0,
                                g = W.findBox(c, ["trun"]);
                            y === p && 0 < g.length && (i = g, r = m, a = (n = h).defaultSampleDuration || 0, s = n.defaultSampleSize || 0, o = n.trackId, u = [], i.forEach(function (t) {
                                var e = ge.parseTrun(t).samples;
                                e.forEach(function (t) {
                                    void 0 === t.duration && (t.duration = a), void 0 === t.size && (t.size = s), t.trackId = o, t.dts = r, void 0 === t.compositionTimeOffset && (t.compositionTimeOffset = 0), t.pts = r + t.compositionTimeOffset, r += t.duration
                                }), u = u.concat(e)
                            }), e = function (t, e, i) {
                                var n, r, a, s, o = new DataView(t.buffer, t.byteOffset, t.byteLength),
                                    u = [];
                                for (r = 0; r + 4 < t.length; r += a)
                                    if (a = o.getUint32(r), r += 4, !(a <= 0)) switch (31 & t[r]) {
                                        case 6:
                                            var l = t.subarray(r + 1, r + 1 + a),
                                                c = _e(r, e);
                                            n = {
                                                nalUnitType: "sei_rbsp",
                                                size: a,
                                                data: l,
                                                escapedRBSP: ye(l),
                                                trackId: i
                                            }, c ? (n.pts = c.pts, n.dts = c.dts, s = c) : (n.pts = s.pts, n.dts = s.dts), u.push(n)
                                    }
                                return u
                            }(l, u, p), v[p] || (v[p] = []), v[p] = v[p].concat(e))
                        }), v
                    },
                    Te = {
                        generator: z,
                        probe: W,
                        Transmuxer: de.Transmuxer,
                        AudioSegmentStream: de.AudioSegmentStream,
                        VideoSegmentStream: de.VideoSegmentStream,
                        CaptionParser: function () {
                            var e, u, l, c, d, t = !1;
                            this.isInitialized = function () {
                                return t
                            }, this.init = function () {
                                e = new ve, t = !0, e.on("data", function (t) {
                                    t.startTime = t.startPts / c, t.endTime = t.endPts / c, d.captions.push(t), d.captionStreams[t.stream] = !0
                                })
                            }, this.isNewInit = function (t, e) {
                                return !(t && 0 === t.length || e && "object" === ("undefined" == typeof e ? "undefined" : Ee(e)) && 0 === Object.keys(e).length || l === t[0] && c === e[l])
                            }, this.parse = function (t, e, i) {
                                var n, r, a, s;
                                if (!this.isInitialized()) return null;
                                if (!e || !i) return null;
                                if (this.isNewInit(e, i)) l = e[0], c = i[l];
                                else if (!l || !c) return u.push(t), null;
                                for (; 0 < u.length;) {
                                    var o = u.shift();
                                    this.parse(o, e, i)
                                }
                                return r = t, s = c, null !== (n = (a = l) ? {
                                    seiNals: be(r, a)[a],
                                    timescale: s
                                } : null) && n.seiNals ? (this.pushNals(n.seiNals), this.flushStream(), d) : null
                            }, this.pushNals = function (t) {
                                if (!this.isInitialized() || !t || 0 === t.length) return null;
                                t.forEach(function (t) {
                                    e.push(t)
                                })
                            }, this.flushStream = function () {
                                if (!this.isInitialized()) return null;
                                e.flush()
                            }, this.clearParsedCaptions = function () {
                                d.captions = [], d.captionStreams = {}
                            }, this.resetCaptionStream = function () {
                                if (!this.isInitialized()) return null;
                                e.reset()
                            }, this.clearAllCaptions = function () {
                                this.clearParsedCaptions(), this.resetCaptionStream()
                            }, this.reset = function () {
                                u = [], c = l = null, d ? this.clearParsedCaptions() : d = {
                                    captions: [],
                                    captionStreams: {}
                                }, this.resetCaptionStream()
                            }, this.reset()
                        }
                    },
                    Se = function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    },
                    ke = function () {
                        function n(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function (t, e, i) {
                            return e && n(t.prototype, e), i && n(t, i), t
                        }
                    }(),
                    Ce = function () {
                        function i(t, e) {
                            Se(this, i), this.options = e || {}, this.self = t, this.init()
                        }
                        return ke(i, [{
                            key: "init",
                            value: function () {
                                var n, t;
                                this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new Te.Transmuxer(this.options), n = this.self, (t = this.transmuxer).on("data", function (t) {
                                    var e = t.initSegment;
                                    t.initSegment = {
                                        data: e.buffer,
                                        byteOffset: e.byteOffset,
                                        byteLength: e.byteLength
                                    };
                                    var i = t.data;
                                    t.data = i.buffer, n.postMessage({
                                        action: "data",
                                        segment: t,
                                        byteOffset: i.byteOffset,
                                        byteLength: i.byteLength
                                    }, [t.data])
                                }), t.captionStream && t.captionStream.on("data", function (t) {
                                    n.postMessage({
                                        action: "caption",
                                        data: t
                                    })
                                }), t.on("done", function (t) {
                                    n.postMessage({
                                        action: "done"
                                    })
                                }), t.on("gopInfo", function (t) {
                                    n.postMessage({
                                        action: "gopInfo",
                                        gopInfo: t
                                    })
                                })
                            }
                        }, {
                            key: "push",
                            value: function (t) {
                                var e = new Uint8Array(t.data, t.byteOffset, t.byteLength);
                                this.transmuxer.push(e)
                            }
                        }, {
                            key: "reset",
                            value: function () {
                                this.init()
                            }
                        }, {
                            key: "setTimestampOffset",
                            value: function (t) {
                                var e = t.timestampOffset || 0;
                                this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4 * e))
                            }
                        }, {
                            key: "setAudioAppendStart",
                            value: function (t) {
                                this.transmuxer.setAudioAppendStart(Math.ceil(9e4 * t.appendStart))
                            }
                        }, {
                            key: "flush",
                            value: function (t) {
                                this.transmuxer.flush()
                            }
                        }, {
                            key: "resetCaptions",
                            value: function () {
                                this.transmuxer.resetCaptions()
                            }
                        }, {
                            key: "alignGopsWith",
                            value: function (t) {
                                this.transmuxer.alignGopsWith(t.gopsToAlignWith.slice())
                            }
                        }]), i
                    }();
                new function (e) {
                    e.onmessage = function (t) {
                        "init" === t.data.action && t.data.options ? this.messageHandlers = new Ce(e, t.data.options) : (this.messageHandlers || (this.messageHandlers = new Ce(e)), t.data && t.data.action && "init" !== t.data.action && this.messageHandlers[t.data.action] && this.messageHandlers[t.data.action](t.data))
                    }
                }(we)
            }()
        }),
        lh = {
            videoCodec: "avc1",
            videoObjectTypeIndicator: ".4d400d",
            audioProfile: "2"
        },
        ch = function (t) {
            return t.map(function (t) {
                return t.replace(/avc1\.(\d+)\.(\d+)/i, function (t, e, i) {
                    return "avc1." + ("00" + Number(e).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2)
                })
            })
        },
        dh = function () {
            var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                i = {
                    codecCount: 0
                };
            return i.codecCount = e.split(",").length, i.codecCount = i.codecCount || 2, (t = /(^|\s|,)+(avc[13])([^ ,]*)/i.exec(e)) && (i.videoCodec = t[2], i.videoObjectTypeIndicator = t[3]), i.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(e), i.audioProfile = i.audioProfile && i.audioProfile[2], i
        },
        hh = function (t, e, i) {
            return t + "/" + e + '; codecs="' + i.filter(function (t) {
                return !!t
            }).join(", ") + '"'
        },
        ph = function (t, e) {
            var i, n, r = (i = e).segments && i.segments.length && i.segments[0].map ? "mp4" : "mp2t",
                a = (n = e.attributes || {}).CODECS ? dh(n.CODECS) : lh,
                s = e.attributes || {},
                o = !0,
                u = !1;
            if (!e) return [];
            if (t.mediaGroups.AUDIO && s.AUDIO) {
                var l = t.mediaGroups.AUDIO[s.AUDIO];
                if (l)
                    for (var c in o = !(u = !0), l)
                        if (!l[c].uri && !l[c].playlists) {
                            o = !0;
                            break
                        }
            }
            u && !a.audioProfile && (o || (a.audioProfile = function (t, e) {
                if (!t.mediaGroups.AUDIO || !e) return null;
                var i = t.mediaGroups.AUDIO[e];
                if (!i) return null;
                for (var n in i) {
                    var r = i[n];
                    if (r.default && r.playlists) return dh(r.playlists[0].attributes.CODECS).audioProfile
                }
                return null
            }(t, s.AUDIO)), a.audioProfile || (Oa.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"), a.audioProfile = lh.audioProfile));
            var d = {};
            a.videoCodec && (d.video = "" + a.videoCodec + a.videoObjectTypeIndicator), a.audioProfile && (d.audio = "mp4a.40." + a.audioProfile);
            var h = hh("audio", r, [d.audio]),
                p = hh("video", r, [d.video]),
                f = hh("video", r, [d.video, d.audio]);
            return u ? !o && d.video ? [p, h] : o || d.video ? [f, h] : [h, h] : d.video ? [f] : [h]
        },
        fh = function (t) {
            return /mp4a\.\d+.\d+/i.test(t)
        },
        mh = function (t) {
            return /avc1\.[\da-f]+/i.test(t)
        },
        gh = function (t, e, i) {
            var n = null,
                r = null,
                a = 0,
                s = [],
                o = [];
            if (!t && !e) return Oa.createTimeRange();
            if (!t) return e.buffered;
            if (!e) return t.buffered;
            if (i) return t.buffered;
            if (0 === t.buffered.length && 0 === e.buffered.length) return Oa.createTimeRange();
            for (var u = t.buffered, l = e.buffered, c = u.length; c--;) s.push({
                time: u.start(c),
                type: "start"
            }), s.push({
                time: u.end(c),
                type: "end"
            });
            for (c = l.length; c--;) s.push({
                time: l.start(c),
                type: "start"
            }), s.push({
                time: l.end(c),
                type: "end"
            });
            for (s.sort(function (t, e) {
                    return t.time - e.time
                }), c = 0; c < s.length; c++) "start" === s[c].type ? 2 === ++a && (n = s[c].time) : "end" === s[c].type && 1 === --a && (r = s[c].time), null !== n && null !== r && (o.push([n, r]), r = n = null);
            return Oa.createTimeRanges(o)
        },
        yh = function (t) {
            function r(t, e) {
                nd(this, r);
                var i = sd(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, Oa.EventTarget));
                i.timestampOffset_ = 0, i.pendingBuffers_ = [], i.bufferUpdating_ = !1, i.mediaSource_ = t, i.codecs_ = e, i.audioCodec_ = null, i.videoCodec_ = null, i.audioDisabled_ = !1, i.appendAudioInitSegment_ = !0, i.gopBuffer_ = [], i.timeMapping_ = 0, i.safeAppend_ = 11 <= Oa.browser.IE_VERSION;
                var n = {
                    remux: !1,
                    alignGopsAtEnd: i.safeAppend_
                };
                return i.codecs_.forEach(function (t) {
                    fh(t) ? i.audioCodec_ = t : mh(t) && (i.videoCodec_ = t)
                }), i.transmuxer_ = new uh, i.transmuxer_.postMessage({
                    action: "init",
                    options: n
                }), i.transmuxer_.onmessage = function (t) {
                    return "data" === t.data.action ? i.data_(t) : "done" === t.data.action ? i.done_(t) : "gopInfo" === t.data.action ? i.appendGopInfo_(t) : void 0
                }, Object.defineProperty(i, "timestampOffset", {
                    get: function () {
                        return this.timestampOffset_
                    },
                    set: function (t) {
                        "number" == typeof t && 0 <= t && (this.timestampOffset_ = t, this.appendAudioInitSegment_ = !0, this.gopBuffer_.length = 0, this.timeMapping_ = 0, this.transmuxer_.postMessage({
                            action: "setTimestampOffset",
                            timestampOffset: t
                        }))
                    }
                }), Object.defineProperty(i, "appendWindowStart", {
                    get: function () {
                        return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart
                    },
                    set: function (t) {
                        this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = t), this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = t)
                    }
                }), Object.defineProperty(i, "updating", {
                    get: function () {
                        return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating)
                    }
                }), Object.defineProperty(i, "buffered", {
                    get: function () {
                        return gh(this.videoBuffer_, this.audioBuffer_, this.audioDisabled_)
                    }
                }), i
            }
            return ad(r, Oa.EventTarget), rd(r, [{
                key: "data_",
                value: function (t) {
                    var e = t.data.segment;
                    e.data = new Uint8Array(e.data, t.data.byteOffset, t.data.byteLength), e.initSegment = new Uint8Array(e.initSegment.data, e.initSegment.byteOffset, e.initSegment.byteLength),
                        function (t, e, i) {
                            var n = e.player_;
                            if (i.captions && i.captions.length)
                                for (var r in t.inbandTextTracks_ || (t.inbandTextTracks_ = {}), i.captionStreams)
                                    if (!t.inbandTextTracks_[r]) {
                                        n.tech_.trigger({
                                            type: "usage",
                                            name: "hls-608"
                                        });
                                        var a = n.textTracks().getTrackById(r);
                                        t.inbandTextTracks_[r] = a || n.addRemoteTextTrack({
                                            kind: "captions",
                                            id: r,
                                            label: r
                                        }, !1).track
                                    } i.metadata && i.metadata.length && !t.metadataTrack_ && (t.metadataTrack_ = n.addRemoteTextTrack({
                                kind: "metadata",
                                label: "Timed Metadata"
                            }, !1).track, t.metadataTrack_.inBandMetadataTrackDispatchType = i.metadata.dispatchType)
                        }(this, this.mediaSource_, e), this.pendingBuffers_.push(e)
                }
            }, {
                key: "done_",
                value: function (t) {
                    "closed" !== this.mediaSource_.readyState ? this.processPendingSegments_() : this.pendingBuffers_.length = 0
                }
            }, {
                key: "createRealSourceBuffers_",
                value: function () {
                    var n = this,
                        r = ["audio", "video"];
                    r.forEach(function (e) {
                        if (n[e + "Codec_"] && !n[e + "Buffer_"]) {
                            var i = null;
                            if (n.mediaSource_[e + "Buffer_"])(i = n.mediaSource_[e + "Buffer_"]).updating = !1;
                            else {
                                var t = e + '/mp4;codecs="' + n[e + "Codec_"] + '"';
                                i = function (t, e) {
                                    var i = t.addSourceBuffer(e),
                                        n = Object.create(null);
                                    n.updating = !1, n.realBuffer_ = i;
                                    var r = function (e) {
                                        "function" == typeof i[e] ? n[e] = function () {
                                            return i[e].apply(i, arguments)
                                        } : "undefined" == typeof n[e] && Object.defineProperty(n, e, {
                                            get: function () {
                                                return i[e]
                                            },
                                            set: function (t) {
                                                return i[e] = t
                                            }
                                        })
                                    };
                                    for (var a in i) r(a);
                                    return n
                                }(n.mediaSource_.nativeMediaSource_, t), n.mediaSource_[e + "Buffer_"] = i
                            }
                            n[e + "Buffer_"] = i, ["update", "updatestart", "updateend"].forEach(function (t) {
                                i.addEventListener(t, function () {
                                    if ("audio" !== e || !n.audioDisabled_) return "updateend" === t && (n[e + "Buffer_"].updating = !1), r.every(function (t) {
                                        return !("audio" !== t || !n.audioDisabled_) || (e === t || !n[t + "Buffer_"] || !n[t + "Buffer_"].updating)
                                    }) ? n.trigger(t) : void 0
                                })
                            })
                        }
                    })
                }
            }, {
                key: "appendBuffer",
                value: function (t) {
                    if (this.bufferUpdating_ = !0, this.audioBuffer_ && this.audioBuffer_.buffered.length) {
                        var e = this.audioBuffer_.buffered;
                        this.transmuxer_.postMessage({
                            action: "setAudioAppendStart",
                            appendStart: e.end(e.length - 1)
                        })
                    }
                    this.videoBuffer_ && this.transmuxer_.postMessage({
                        action: "alignGopsWith",
                        gopsToAlignWith: function (t, e, i) {
                            if ("undefined" == typeof e || null === e || !t.length) return [];
                            var n = Math.ceil(9e4 * (e - i + 3)),
                                r = void 0;
                            for (r = 0; r < t.length && !(t[r].pts > n); r++);
                            return t.slice(r)
                        }(this.gopBuffer_, this.mediaSource_.player_ ? this.mediaSource_.player_.currentTime() : null, this.timeMapping_)
                    }), this.transmuxer_.postMessage({
                        action: "push",
                        data: t.buffer,
                        byteOffset: t.byteOffset,
                        byteLength: t.byteLength
                    }, [t.buffer]), this.transmuxer_.postMessage({
                        action: "flush"
                    })
                }
            }, {
                key: "appendGopInfo_",
                value: function (t) {
                    this.gopBuffer_ = function (t, e, i) {
                        if (!e.length) return t;
                        if (i) return e.slice();
                        for (var n = e[0].pts, r = 0; r < t.length && !(t[r].pts >= n); r++);
                        return t.slice(0, r).concat(e)
                    }(this.gopBuffer_, t.data.gopInfo, this.safeAppend_)
                }
            }, {
                key: "remove",
                value: function (t, e) {
                    if (this.videoBuffer_ && (this.videoBuffer_.updating = !0, this.videoBuffer_.remove(t, e), this.gopBuffer_ = function (t, e, i, n) {
                            for (var r = Math.ceil(9e4 * (e - n)), a = Math.ceil(9e4 * (i - n)), s = t.slice(), o = t.length; o-- && !(t[o].pts <= a););
                            if (-1 === o) return s;
                            for (var u = o + 1; u-- && !(t[u].pts <= r););
                            return u = Math.max(u, 0), s.splice(u, o - u + 1), s
                        }(this.gopBuffer_, t, e, this.timeMapping_)), !this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0, this.audioBuffer_.remove(t, e)), Yd(t, e, this.metadataTrack_), this.inbandTextTracks_)
                        for (var i in this.inbandTextTracks_) Yd(t, e, this.inbandTextTracks_[i])
                }
            }, {
                key: "processPendingSegments_",
                value: function () {
                    var t = {
                        video: {
                            segments: [],
                            bytes: 0
                        },
                        audio: {
                            segments: [],
                            bytes: 0
                        },
                        captions: [],
                        metadata: []
                    };
                    t = this.pendingBuffers_.reduce(function (t, e) {
                        var i = e.type,
                            n = e.data,
                            r = e.initSegment;
                        return t[i].segments.push(n), t[i].bytes += n.byteLength, t[i].initSegment = r, e.captions && (t.captions = t.captions.concat(e.captions)), e.info && (t[i].info = e.info), e.metadata && (t.metadata = t.metadata.concat(e.metadata)), t
                    }, t), this.videoBuffer_ || this.audioBuffer_ || (0 === t.video.bytes && (this.videoCodec_ = null), 0 === t.audio.bytes && (this.audioCodec_ = null), this.createRealSourceBuffers_()), t.audio.info && this.mediaSource_.trigger({
                        type: "audioinfo",
                        info: t.audio.info
                    }), t.video.info && this.mediaSource_.trigger({
                        type: "videoinfo",
                        info: t.video.info
                    }), this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (t.audio.segments.unshift(t.audio.initSegment), t.audio.bytes += t.audio.initSegment.byteLength), this.appendAudioInitSegment_ = !1);
                    var e = !1;
                    this.videoBuffer_ && t.video.bytes ? (t.video.segments.unshift(t.video.initSegment), t.video.bytes += t.video.initSegment.byteLength, this.concatAndAppendSegments_(t.video, this.videoBuffer_), Kd(this, t.captions, t.metadata)) : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (e = !0), !this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(t.audio, this.audioBuffer_), this.pendingBuffers_.length = 0, e && this.trigger("updateend"), this.bufferUpdating_ = !1
                }
            }, {
                key: "concatAndAppendSegments_",
                value: function (t, e) {
                    var i = 0,
                        n = void 0;
                    if (t.bytes) {
                        n = new Uint8Array(t.bytes), t.segments.forEach(function (t) {
                            n.set(t, i), i += t.byteLength
                        });
                        try {
                            e.updating = !0, e.appendBuffer(n)
                        } catch (t) {
                            this.mediaSource_.player_ && this.mediaSource_.player_.error({
                                code: -3,
                                type: "APPEND_BUFFER_ERR",
                                message: t.message,
                                originalError: t
                            })
                        }
                    }
                }
            }, {
                key: "abort",
                value: function () {
                    this.videoBuffer_ && this.videoBuffer_.abort(), !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(), this.transmuxer_ && this.transmuxer_.postMessage({
                        action: "reset"
                    }), this.pendingBuffers_.length = 0, this.bufferUpdating_ = !1
                }
            }]), r
        }(),
        vh = function (t) {
            function e() {
                nd(this, e);
                var a = sd(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)),
                    t = void 0;
                for (t in a.nativeMediaSource_ = new g.MediaSource, a.nativeMediaSource_) t in e.prototype || "function" != typeof a.nativeMediaSource_[t] || (a[t] = a.nativeMediaSource_[t].bind(a.nativeMediaSource_));
                return a.duration_ = NaN, Object.defineProperty(a, "duration", {
                    get: function () {
                        return this.duration_ === 1 / 0 ? this.duration_ : this.nativeMediaSource_.duration
                    },
                    set: function (t) {
                        (this.duration_ = t) === 1 / 0 || (this.nativeMediaSource_.duration = t)
                    }
                }), Object.defineProperty(a, "seekable", {
                    get: function () {
                        return this.duration_ === 1 / 0 ? Oa.createTimeRanges([
                            [0, this.nativeMediaSource_.duration]
                        ]) : this.nativeMediaSource_.seekable
                    }
                }), Object.defineProperty(a, "readyState", {
                    get: function () {
                        return this.nativeMediaSource_.readyState
                    }
                }), Object.defineProperty(a, "activeSourceBuffers", {
                    get: function () {
                        return this.activeSourceBuffers_
                    }
                }), a.sourceBuffers = [], a.activeSourceBuffers_ = [], a.updateActiveSourceBuffers_ = function () {
                    if (a.activeSourceBuffers_.length = 0, 1 === a.sourceBuffers.length) {
                        var t = a.sourceBuffers[0];
                        return t.appendAudioInitSegment_ = !0, t.audioDisabled_ = !t.audioCodec_, void a.activeSourceBuffers_.push(t)
                    }
                    for (var i = !1, n = !0, e = 0; e < a.player_.audioTracks().length; e++) {
                        var r = a.player_.audioTracks()[e];
                        if (r.enabled && "main" !== r.kind) {
                            n = !(i = !0);
                            break
                        }
                    }
                    a.sourceBuffers.forEach(function (t, e) {
                        if (t.appendAudioInitSegment_ = !0, t.videoCodec_ && t.audioCodec_) t.audioDisabled_ = i;
                        else if (t.videoCodec_ && !t.audioCodec_) t.audioDisabled_ = !0, n = !1;
                        else if (!t.videoCodec_ && t.audioCodec_ && (t.audioDisabled_ = e ? n : !n, t.audioDisabled_)) return;
                        a.activeSourceBuffers_.push(t)
                    })
                }, a.onPlayerMediachange_ = function () {
                    a.sourceBuffers.forEach(function (t) {
                        t.appendAudioInitSegment_ = !0
                    })
                }, a.onHlsReset_ = function () {
                    a.sourceBuffers.forEach(function (t) {
                        t.transmuxer_ && t.transmuxer_.postMessage({
                            action: "resetCaptions"
                        })
                    })
                }, a.onHlsSegmentTimeMapping_ = function (e) {
                    a.sourceBuffers.forEach(function (t) {
                        return t.timeMapping_ = e.mapping
                    })
                }, ["sourceopen", "sourceclose", "sourceended"].forEach(function (t) {
                    this.nativeMediaSource_.addEventListener(t, this.trigger.bind(this))
                }, a), a.on("sourceopen", function (t) {
                    var e = p.querySelector('[src="' + a.url_ + '"]');
                    e && (a.player_ = Oa(e.parentNode), a.player_.tech_.on("hls-reset", a.onHlsReset_), a.player_.tech_.on("hls-segment-time-mapping", a.onHlsSegmentTimeMapping_), a.player_.audioTracks && a.player_.audioTracks() && (a.player_.audioTracks().on("change", a.updateActiveSourceBuffers_), a.player_.audioTracks().on("addtrack", a.updateActiveSourceBuffers_), a.player_.audioTracks().on("removetrack", a.updateActiveSourceBuffers_)), a.player_.on("mediachange", a.onPlayerMediachange_))
                }), a.on("sourceended", function (t) {
                    for (var e = $d(a.duration), i = 0; i < a.sourceBuffers.length; i++) {
                        var n = a.sourceBuffers[i],
                            r = n.metadataTrack_ && n.metadataTrack_.cues;
                        r && r.length && (r[r.length - 1].endTime = e)
                    }
                }), a.on("sourceclose", function (t) {
                    this.sourceBuffers.forEach(function (t) {
                        t.transmuxer_ && t.transmuxer_.terminate()
                    }), this.sourceBuffers.length = 0, this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off("change", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("addtrack", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("removetrack", this.updateActiveSourceBuffers_)), this.player_.el_ && (this.player_.off("mediachange", this.onPlayerMediachange_), this.player_.tech_.off("hls-reset", this.onHlsReset_), this.player_.tech_.off("hls-segment-time-mapping", this.onHlsSegmentTimeMapping_)))
                }), a
            }
            return ad(e, Oa.EventTarget), rd(e, [{
                key: "addSeekableRange_",
                value: function (t, e) {
                    var i = void 0;
                    if (this.duration !== 1 / 0) throw (i = new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name = "InvalidStateError", i.code = 11, i;
                    (e > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = e)
                }
            }, {
                key: "addSourceBuffer",
                value: function (t) {
                    var r, e, i = void 0,
                        n = (r = {
                            type: "",
                            parameters: {}
                        }, e = t.trim().split(";"), r.type = e.shift().trim(), e.forEach(function (t) {
                            var e = t.trim().split("=");
                            if (1 < e.length) {
                                var i = e[0].replace(/"/g, "").trim(),
                                    n = e[1].replace(/"/g, "").trim();
                                r.parameters[i] = n
                            }
                        }), r);
                    if (/^(video|audio)\/mp2t$/i.test(n.type)) {
                        var a = [];
                        n.parameters && n.parameters.codecs && (a = n.parameters.codecs.split(","), a = (a = ch(a)).filter(function (t) {
                            return fh(t) || mh(t)
                        })), 0 === a.length && (a = ["avc1.4d400d", "mp4a.40.2"]), i = new yh(this, a), 0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(), i.createRealSourceBuffers_(), this.sourceBuffers[0].audioDisabled_ = !0)
                    } else i = this.nativeMediaSource_.addSourceBuffer(t);
                    return this.sourceBuffers.push(i), i
                }
            }]), e
        }(),
        _h = 0;
    Oa.mediaSources = {};
    var bh = function (t, e) {
            var i = Oa.mediaSources[t];
            if (!i) throw new Error("Media Source not found (Video.js)");
            i.trigger({
                type: "sourceopen",
                swfId: e
            })
        },
        Th = function () {
            return !!g.MediaSource && !!g.MediaSource.isTypeSupported && g.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
        },
        Sh = function () {
            if (this.MediaSource = {
                    open: bh,
                    supportsNativeMediaSources: Th
                }, Th()) return new vh;
            throw new Error("Cannot use create a virtual MediaSource for this video")
        };
    Sh.open = bh, Sh.supportsNativeMediaSources = Th;
    var kh = {
        createObjectURL: function (t) {
            var e = void 0;
            return t instanceof vh ? (e = g.URL.createObjectURL(t.nativeMediaSource_), t.url_ = e) : t instanceof vh ? (e = "blob:vjs-media-source/" + _h, _h++, Oa.mediaSources[e] = t, e) : (e = g.URL.createObjectURL(t), t.url_ = e)
        }
    };
    Oa.MediaSource = Sh, Oa.URL = kh;
    var Ch = Oa.EventTarget,
        wh = Oa.mergeOptions,
        Eh = function (t, e) {
            for (var s = wh(t, {
                    duration: e.duration,
                    minimumUpdatePeriod: e.minimumUpdatePeriod
                }), i = 0; i < e.playlists.length; i++) {
                var n = hd(s, e.playlists[i]);
                n && (s = n)
            }
            return dd(e, function (t, e, i, n) {
                if (t.playlists && t.playlists.length) {
                    var r = t.playlists[0].uri,
                        a = hd(s, t.playlists[0]);
                    a && ((s = a).mediaGroups[e][i][n].playlists[0] = s.playlists[r])
                }
            }), s
        },
        Ah = function (t) {
            function a(t, e, i, n) {
                nd(this, a);
                var r = sd(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
                if (r.hls_ = e, r.withCredentials = i, !t) throw new Error("A non-empty playlist URL or playlist is required");
                return r.on("minimumUpdatePeriod", function () {
                    r.refreshXml_()
                }), r.on("mediaupdatetimeout", function () {
                    r.refreshMedia_()
                }), "string" == typeof t ? (r.srcUrl = t, r.state = "HAVE_NOTHING", sd(r)) : (r.masterPlaylistLoader_ = n, r.state = "HAVE_METADATA", r.started = !0, r.media(t), g.setTimeout(function () {
                    r.trigger("loadedmetadata")
                }, 0), r)
            }
            return ad(a, Ch), rd(a, [{
                key: "dispose",
                value: function () {
                    this.stopRequest(), g.clearTimeout(this.mediaUpdateTimeout)
                }
            }, {
                key: "stopRequest",
                value: function () {
                    if (this.request) {
                        var t = this.request;
                        this.request = null, t.onreadystatechange = null, t.abort()
                    }
                }
            }, {
                key: "media",
                value: function (t) {
                    if (!t) return this.media_;
                    if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
                    var e = this.state;
                    if ("string" == typeof t) {
                        if (!this.master.playlists[t]) throw new Error("Unknown playlist URI: " + t);
                        t = this.master.playlists[t]
                    }
                    var i = !this.media_ || t.uri !== this.media_.uri;
                    this.state = "HAVE_METADATA", i && (this.media_ && this.trigger("mediachanging"), this.media_ = t, this.refreshMedia_(), "HAVE_MASTER" !== e && this.trigger("mediachange"))
                }
            }, {
                key: "pause",
                value: function () {
                    this.stopRequest(), "HAVE_NOTHING" === this.state && (this.started = !1)
                }
            }, {
                key: "load",
                value: function () {
                    this.started ? this.trigger("loadedplaylist") : this.start()
                }
            }, {
                key: "parseMasterXml",
                value: function () {
                    var a = ho(this.masterXml_, {
                        manifestUri: this.srcUrl,
                        clientOffset: this.clientOffset_
                    });
                    a.uri = this.srcUrl;
                    for (var t = 0; t < a.playlists.length; t++) {
                        var e = "placeholder-uri-" + t;
                        a.playlists[t].uri = e, a.playlists[e] = a.playlists[t]
                    }
                    return dd(a, function (t, e, i, n) {
                        if (t.playlists && t.playlists.length) {
                            var r = "placeholder-uri-" + e + "-" + i + "-" + n;
                            t.playlists[0].uri = r, a.playlists[r] = t.playlists[0]
                        }
                    }), pd(a), fd(a), a
                }
            }, {
                key: "start",
                value: function () {
                    var i = this;
                    this.started = !0, this.request = this.hls_.xhr({
                        uri: this.srcUrl,
                        withCredentials: this.withCredentials
                    }, function (t, e) {
                        if (i.request) {
                            if (i.request = null, t) return i.error = {
                                status: e.status,
                                message: "DASH playlist request error at URL: " + i.srcUrl,
                                responseText: e.responseText,
                                code: 2
                            }, "HAVE_NOTHING" === i.state && (i.started = !1), i.trigger("error");
                            i.masterXml_ = e.responseText, e.responseHeaders && e.responseHeaders.date ? i.masterLoaded_ = Date.parse(e.responseHeaders.date) : i.masterLoaded_ = Date.now(), i.syncClientServerClock_(i.onClientServerClockSync_.bind(i))
                        }
                    })
                }
            }, {
                key: "syncClientServerClock_",
                value: function (n) {
                    var r = this,
                        a = po(this.masterXml_);
                    return null === a ? (this.clientOffset_ = this.masterLoaded_ - Date.now(), n()) : "DIRECT" === a.method ? (this.clientOffset_ = a.value - Date.now(), n()) : void(this.request = this.hls_.xhr({
                        uri: id(this.srcUrl, a.value),
                        method: a.method,
                        withCredentials: this.withCredentials
                    }, function (t, e) {
                        if (r.request) {
                            if (t) return r.clientOffset_ = r.masterLoaded_ - Date.now(), n();
                            var i = void 0;
                            i = "HEAD" === a.method ? e.responseHeaders && e.responseHeaders.date ? Date.parse(e.responseHeaders.date) : r.masterLoaded_ : Date.parse(e.responseText), r.clientOffset_ = i - Date.now(), n()
                        }
                    }))
                }
            }, {
                key: "onClientServerClockSync_",
                value: function () {
                    var t = this;
                    this.master = this.parseMasterXml(), this.state = "HAVE_MASTER", this.trigger("loadedplaylist"), this.media_ || this.media(this.master.playlists[0]), g.setTimeout(function () {
                        t.trigger("loadedmetadata")
                    }, 0), this.master.minimumUpdatePeriod && g.setTimeout(function () {
                        t.trigger("minimumUpdatePeriod")
                    }, this.master.minimumUpdatePeriod)
                }
            }, {
                key: "refreshXml_",
                value: function () {
                    var n = this;
                    this.request = this.hls_.xhr({
                        uri: this.srcUrl,
                        withCredentials: this.withCredentials
                    }, function (t, e) {
                        if (n.request) {
                            if (n.request = null, t) return n.error = {
                                status: e.status,
                                message: "DASH playlist request error at URL: " + n.srcUrl,
                                responseText: e.responseText,
                                code: 2
                            }, "HAVE_NOTHING" === n.state && (n.started = !1), n.trigger("error");
                            n.masterXml_ = e.responseText;
                            var i = n.parseMasterXml();
                            n.master = Eh(n.master, i), g.setTimeout(function () {
                                n.trigger("minimumUpdatePeriod")
                            }, n.master.minimumUpdatePeriod)
                        }
                    })
                }
            }, {
                key: "refreshMedia_",
                value: function () {
                    var t = this,
                        e = void 0,
                        i = void 0;
                    this.masterPlaylistLoader_ ? (e = this.masterPlaylistLoader_.master, i = this.masterPlaylistLoader_.parseMasterXml()) : (e = this.master, i = this.parseMasterXml());
                    var n = Eh(e, i);
                    n ? (this.masterPlaylistLoader_ ? this.masterPlaylistLoader_.master = n : this.master = n, this.media_ = n.playlists[this.media_.uri]) : this.trigger("playlistunchanged"), this.media().endList || (this.mediaUpdateTimeout = g.setTimeout(function () {
                        t.trigger("mediaupdatetimeout")
                    }, md(this.media(), !!n))), this.trigger("loadedplaylist")
                }
            }]), a
        }(),
        Lh = function (t) {
            return Oa.log.debug ? Oa.log.debug.bind(Oa, "VHS:", t + " >") : function () {}
        };

    function Oh() {}
    var Ph = function () {
            function r(t, e, i, n) {
                nd(this, r), this.callbacks_ = [], this.pendingCallback_ = null, this.timestampOffset_ = 0, this.mediaSource = t, this.processedAppend_ = !1, this.type_ = i, this.mimeType_ = e, this.logger_ = Lh("SourceUpdater[" + i + "][" + e + "]"), "closed" === t.readyState ? t.addEventListener("sourceopen", this.createSourceBuffer_.bind(this, e, n)) : this.createSourceBuffer_(e, n)
            }
            return rd(r, [{
                key: "createSourceBuffer_",
                value: function (t, e) {
                    var i = this;
                    this.sourceBuffer_ = this.mediaSource.addSourceBuffer(t), this.logger_("created SourceBuffer"), e && (e.trigger("sourcebufferadded"), this.mediaSource.sourceBuffers.length < 2) ? e.on("sourcebufferadded", function () {
                        i.start_()
                    }) : this.start_()
                }
            }, {
                key: "start_",
                value: function () {
                    var e = this;
                    this.started_ = !0, this.onUpdateendCallback_ = function () {
                        var t = e.pendingCallback_;
                        e.pendingCallback_ = null, e.logger_("buffered [" + Gd(e.buffered()) + "]"), t && t(), e.runCallback_()
                    }, this.sourceBuffer_.addEventListener("updateend", this.onUpdateendCallback_), this.runCallback_()
                }
            }, {
                key: "abort",
                value: function (t) {
                    var e = this;
                    this.processedAppend_ && this.queueCallback_(function () {
                        e.sourceBuffer_.abort()
                    }, t)
                }
            }, {
                key: "appendBuffer",
                value: function (t, e) {
                    var i = this;
                    this.processedAppend_ = !0, this.queueCallback_(function () {
                        i.sourceBuffer_.appendBuffer(t)
                    }, e)
                }
            }, {
                key: "buffered",
                value: function () {
                    return this.sourceBuffer_ ? this.sourceBuffer_.buffered : Oa.createTimeRanges()
                }
            }, {
                key: "remove",
                value: function (t, e) {
                    var i = this,
                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Oh;
                    this.processedAppend_ && this.queueCallback_(function () {
                        i.logger_("remove [" + t + " => " + e + "]"), i.sourceBuffer_.remove(t, e)
                    }, n)
                }
            }, {
                key: "updating",
                value: function () {
                    return !this.sourceBuffer_ || this.sourceBuffer_.updating || this.pendingCallback_
                }
            }, {
                key: "timestampOffset",
                value: function (t) {
                    var e = this;
                    return "undefined" != typeof t && (this.queueCallback_(function () {
                        e.sourceBuffer_.timestampOffset = t
                    }), this.timestampOffset_ = t), this.timestampOffset_
                }
            }, {
                key: "queueCallback_",
                value: function (t, e) {
                    this.callbacks_.push([t.bind(this), e]), this.runCallback_()
                }
            }, {
                key: "runCallback_",
                value: function () {
                    var t = void 0;
                    !this.updating() && this.callbacks_.length && this.started_ && (t = this.callbacks_.shift(), this.pendingCallback_ = t[1], t[0]())
                }
            }, {
                key: "dispose",
                value: function () {
                    this.sourceBuffer_.removeEventListener("updateend", this.onUpdateendCallback_), this.sourceBuffer_ && "open" === this.mediaSource.readyState && this.sourceBuffer_.abort()
                }
            }]), r
        }(),
        Uh = {
            GOAL_BUFFER_LENGTH: 30,
            MAX_GOAL_BUFFER_LENGTH: 60,
            GOAL_BUFFER_LENGTH_RATE: 1,
            BANDWIDTH_VARIANCE: 1.2,
            BUFFER_LOW_WATER_LINE: 0,
            MAX_BUFFER_LOW_WATER_LINE: 30,
            BUFFER_LOW_WATER_LINE_RATE: 1
        },
        xh = 2,
        Ih = -101,
        Dh = -102,
        Rh = function (t) {
            var e, i, n = {};
            return t.byterange && (n.Range = (e = t.byterange, i = e.offset + e.length - 1, "bytes=" + e.offset + "-" + i)), n
        },
        Mh = function (t) {
            t.forEach(function (t) {
                t.abort()
            })
        },
        Bh = function (t, e) {
            return e.timedout ? {
                status: e.status,
                message: "HLS request timed-out at URL: " + e.uri,
                code: Ih,
                xhr: e
            } : e.aborted ? {
                status: e.status,
                message: "HLS request aborted at URL: " + e.uri,
                code: Dh,
                xhr: e
            } : t ? {
                status: e.status,
                message: "HLS request errored at URL: " + e.uri,
                code: xh,
                xhr: e
            } : null
        },
        Nh = function (s, o, u) {
            var l = [],
                c = 0;
            return function (t, e) {
                if (t && (Mh(s), l.push(t)), (c += 1) === s.length) {
                    if (e.endOfAllRequests = Date.now(), 0 < l.length) {
                        var i = l.reduce(function (t, e) {
                            return e.code > t.code ? e : t
                        });
                        return u(i, e)
                    }
                    return e.encryptedBytes ? (r = e, a = u, (n = o).addEventListener("message", function t(e) {
                        if (e.data.source === r.requestId) {
                            n.removeEventListener("message", t);
                            var i = e.data.decrypted;
                            return r.bytes = new Uint8Array(i.bytes, i.byteOffset, i.byteLength), a(null, r)
                        }
                    }), void n.postMessage(Nd({
                        source: r.requestId,
                        encrypted: r.encryptedBytes,
                        key: r.key.bytes,
                        iv: r.key.iv
                    }), [r.encryptedBytes.buffer, r.key.bytes.buffer])) : u(null, e)
                }
                var n, r, a
            }
        },
        jh = function (r, a) {
            return function (t) {
                var e, i, n;
                return r.stats = Oa.mergeOptions(r.stats, (i = (e = t).target, (n = {
                    bandwidth: 1 / 0,
                    bytesReceived: 0,
                    roundTripTime: Date.now() - i.requestTime || 0
                }).bytesReceived = e.loaded, n.bandwidth = Math.floor(n.bytesReceived / n.roundTripTime * 8 * 1e3), n)), !r.stats.firstBytesReceivedAt && r.stats.bytesReceived && (r.stats.firstBytesReceivedAt = Date.now()), a(t, r)
            }
        },
        Fh = function (t, e, i, n, r, a, s) {
            var o, u, l, c, d, h = [],
                p = Nh(h, i, s);
            if (r.key) {
                var f = t(Oa.mergeOptions(e, {
                    uri: r.key.resolvedUri,
                    responseType: "arraybuffer"
                }), (o = r, u = p, function (t, e) {
                    var i = e.response,
                        n = Bh(t, e);
                    if (n) return u(n, o);
                    if (16 !== i.byteLength) return u({
                        status: e.status,
                        message: "Invalid HLS key at URL: " + e.uri,
                        code: xh,
                        xhr: e
                    }, o);
                    var r = new DataView(i);
                    return o.key.bytes = new Uint32Array([r.getUint32(0), r.getUint32(4), r.getUint32(8), r.getUint32(12)]), u(null, o)
                }));
                h.push(f)
            }
            if (r.map && !r.map.bytes) {
                var m = t(Oa.mergeOptions(e, {
                    uri: r.map.resolvedUri,
                    responseType: "arraybuffer",
                    headers: Rh(r.map)
                }), (l = r, c = n, d = p, function (t, e) {
                    var i = e.response,
                        n = Bh(t, e);
                    return n ? d(n, l) : 0 === i.byteLength ? d({
                        status: e.status,
                        message: "Empty HLS segment content at URL: " + e.uri,
                        code: xh,
                        xhr: e
                    }, l) : (l.map.bytes = new Uint8Array(e.response), c.isInitialized() || c.init(), l.map.timescales = vo.timescale(l.map.bytes), l.map.videoTrackIds = vo.videoTrackIds(l.map.bytes), d(null, l))
                }));
                h.push(m)
            }
            var g, y, v, _ = t(Oa.mergeOptions(e, {
                uri: r.resolvedUri,
                responseType: "arraybuffer",
                headers: Rh(r)
            }), (g = r, y = n, v = p, function (t, e) {
                var i, n = e.response,
                    r = Bh(t, e),
                    a = void 0;
                return r ? v(r, g) : 0 === n.byteLength ? v({
                    status: e.status,
                    message: "Empty HLS segment content at URL: " + e.uri,
                    code: xh,
                    xhr: e
                }, g) : (g.stats = {
                    bandwidth: (i = e).bandwidth,
                    bytesReceived: i.bytesReceived || 0,
                    roundTripTime: i.roundTripTime || 0
                }, g.key ? g.encryptedBytes = new Uint8Array(e.response) : g.bytes = new Uint8Array(e.response), g.map && g.map.bytes && (y.isInitialized() || y.init(), (a = y.parse(g.bytes, g.map.videoTrackIds, g.map.timescales)) && a.captions && (g.captionStreams = a.captionStreams, g.fmp4Captions = a.captions)), v(null, g))
            }));
            return _.addEventListener("progress", jh(r, a)), h.push(_),
                function () {
                    return Mh(h)
                }
        },
        Vh = function (t, e) {
            var i;
            return t && (i = g.getComputedStyle(t)) ? i[e] : ""
        },
        Hh = function (t, n) {
            var r = t.slice();
            t.sort(function (t, e) {
                var i = n(t, e);
                return 0 === i ? r.indexOf(t) - r.indexOf(e) : i
            })
        },
        zh = function (t, e) {
            var i = void 0,
                n = void 0;
            return t.attributes.BANDWIDTH && (i = t.attributes.BANDWIDTH), i = i || g.Number.MAX_VALUE, e.attributes.BANDWIDTH && (n = e.attributes.BANDWIDTH), i - (n = n || g.Number.MAX_VALUE)
        },
        qh = function (t, e, i) {
            if (!t || !e) return !1;
            var n = i === t.segments.length;
            return t.endList && "open" === e.readyState && n
        },
        Wh = function (t) {
            return "number" == typeof t && isFinite(t)
        },
        Gh = function (t) {
            function i(t) {
                nd(this, i);
                var e = sd(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                if (!t) throw new TypeError("Initialization settings are required");
                if ("function" != typeof t.currentTime) throw new TypeError("No currentTime getter specified");
                if (!t.mediaSource) throw new TypeError("No MediaSource specified");
                return e.bandwidth = t.bandwidth, e.throughput = {
                    rate: 0,
                    count: 0
                }, e.roundTrip = NaN, e.resetStats_(), e.mediaIndex = null, e.hasPlayed_ = t.hasPlayed, e.currentTime_ = t.currentTime, e.seekable_ = t.seekable, e.seeking_ = t.seeking, e.duration_ = t.duration, e.mediaSource_ = t.mediaSource, e.hls_ = t.hls, e.loaderType_ = t.loaderType, e.startingMedia_ = void 0, e.segmentMetadataTrack_ = t.segmentMetadataTrack, e.goalBufferLength_ = t.goalBufferLength, e.sourceType_ = t.sourceType, e.inbandTextTracks_ = t.inbandTextTracks, e.state_ = "INIT", e.checkBufferTimeout_ = null, e.error_ = void 0, e.currentTimeline_ = -1, e.pendingSegment_ = null, e.mimeType_ = null, e.sourceUpdater_ = null, e.xhrOptions_ = null, e.activeInitSegmentId_ = null, e.initSegments_ = {}, e.captionParser_ = new pc, e.decrypter_ = t.decrypter, e.syncController_ = t.syncController, e.syncPoint_ = {
                    segmentIndex: 0,
                    time: 0
                }, e.syncController_.on("syncinfoupdate", function () {
                    return e.trigger("syncinfoupdate")
                }), e.mediaSource_.addEventListener("sourceopen", function () {
                    return e.ended_ = !1
                }), e.fetchAtBuffer_ = !1, e.logger_ = Lh("SegmentLoader[" + e.loaderType_ + "]"), Object.defineProperty(e, "state", {
                    get: function () {
                        return this.state_
                    },
                    set: function (t) {
                        t !== this.state_ && (this.logger_(this.state_ + " -> " + t), this.state_ = t)
                    }
                }), e
            }
            return ad(i, Oa.EventTarget), rd(i, [{
                key: "resetStats_",
                value: function () {
                    this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0
                }
            }, {
                key: "dispose",
                value: function () {
                    this.state = "DISPOSED", this.pause(), this.abort_(), this.sourceUpdater_ && this.sourceUpdater_.dispose(), this.resetStats_(), this.captionParser_.reset()
                }
            }, {
                key: "abort",
                value: function () {
                    "WAITING" === this.state ? (this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_()) : this.pendingSegment_ && (this.pendingSegment_ = null)
                }
            }, {
                key: "abort_",
                value: function () {
                    this.pendingSegment_ && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null
                }
            }, {
                key: "error",
                value: function (t) {
                    return "undefined" != typeof t && (this.error_ = t), this.pendingSegment_ = null, this.error_
                }
            }, {
                key: "endOfStream",
                value: function () {
                    this.ended_ = !0, this.pause(), this.trigger("ended")
                }
            }, {
                key: "buffered_",
                value: function () {
                    return this.sourceUpdater_ ? this.sourceUpdater_.buffered() : Oa.createTimeRanges()
                }
            }, {
                key: "initSegment",
                value: function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    if (!t) return null;
                    var i = jd(t),
                        n = this.initSegments_[i];
                    return e && !n && t.bytes && (this.initSegments_[i] = n = {
                        resolvedUri: t.resolvedUri,
                        byterange: t.byterange,
                        bytes: t.bytes,
                        timescales: t.timescales,
                        videoTrackIds: t.videoTrackIds
                    }), n || t
                }
            }, {
                key: "couldBeginLoading_",
                value: function () {
                    return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && "INIT" === this.state) && !this.paused()
                }
            }, {
                key: "load",
                value: function () {
                    if (this.monitorBuffer_(), this.playlist_) {
                        if (this.syncController_.setDateTimeMapping(this.playlist_), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                        !this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY")
                    }
                }
            }, {
                key: "init_",
                value: function () {
                    return this.state = "READY", this.sourceUpdater_ = new Ph(this.mediaSource_, this.mimeType_, this.loaderType_, this.sourceBufferEmitter_), this.resetEverything(), this.monitorBuffer_()
                }
            }, {
                key: "playlist",
                value: function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    if (t) {
                        var i = this.playlist_,
                            n = this.pendingSegment_;
                        this.playlist_ = t, this.xhrOptions_ = e, this.hasPlayed_() || (t.syncInfo = {
                            mediaSequence: t.mediaSequence,
                            time: 0
                        });
                        var r = i ? i.id : null;
                        if (this.logger_("playlist update [" + r + " => " + t.id + "]"), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                        if (i && i.uri === t.uri) {
                            var a = t.mediaSequence - i.mediaSequence;
                            this.logger_("live window shift [" + a + "]"), null !== this.mediaIndex && (this.mediaIndex -= a), n && (n.mediaIndex -= a, 0 <= n.mediaIndex && (n.segment = t.segments[n.mediaIndex])), this.syncController_.saveExpiredSegmentInfo(i, t)
                        } else null !== this.mediaIndex && this.resyncLoader()
                    }
                }
            }, {
                key: "pause",
                value: function () {
                    this.checkBufferTimeout_ && (g.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null)
                }
            }, {
                key: "paused",
                value: function () {
                    return null === this.checkBufferTimeout_
                }
            }, {
                key: "mimeType",
                value: function (t, e) {
                    this.mimeType_ || (this.mimeType_ = t, this.sourceBufferEmitter_ = e, "INIT" === this.state && this.couldBeginLoading_() && this.init_())
                }
            }, {
                key: "resetEverything",
                value: function (t) {
                    this.ended_ = !1, this.resetLoader(), this.remove(0, this.duration_(), t), this.captionParser_.clearAllCaptions(), this.trigger("reseteverything")
                }
            }, {
                key: "resetLoader",
                value: function () {
                    this.fetchAtBuffer_ = !1, this.resyncLoader()
                }
            }, {
                key: "resyncLoader",
                value: function () {
                    this.mediaIndex = null, this.syncPoint_ = null, this.abort()
                }
            }, {
                key: "remove",
                value: function (t, e, i) {
                    if (this.sourceUpdater_ && this.sourceUpdater_.remove(t, e, i), Yd(t, e, this.segmentMetadataTrack_), this.inbandTextTracks_)
                        for (var n in this.inbandTextTracks_) Yd(t, e, this.inbandTextTracks_[n])
                }
            }, {
                key: "monitorBuffer_",
                value: function () {
                    this.checkBufferTimeout_ && g.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = g.setTimeout(this.monitorBufferTick_.bind(this), 1)
                }
            }, {
                key: "monitorBufferTick_",
                value: function () {
                    "READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && g.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = g.setTimeout(this.monitorBufferTick_.bind(this), 500)
                }
            }, {
                key: "fillBuffer_",
                value: function () {
                    if (!this.sourceUpdater_.updating()) {
                        this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                        var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                        if (t) qh(this.playlist_, this.mediaSource_, t.mediaIndex) ? this.endOfStream() : (t.mediaIndex !== this.playlist_.segments.length - 1 || "ended" !== this.mediaSource_.readyState || this.seeking_()) && ((t.timeline !== this.currentTimeline_ || null !== t.startOfSegment && t.startOfSegment < this.sourceUpdater_.timestampOffset()) && (this.syncController_.reset(), t.timestampOffset = t.startOfSegment, this.captionParser_.clearAllCaptions()), this.loadSegment_(t))
                    }
                }
            }, {
                key: "checkBuffer_",
                value: function (t, e, i, n, r, a) {
                    var s = 0,
                        o = void 0;
                    t.length && (s = t.end(t.length - 1));
                    var u = Math.max(0, s - r);
                    if (!e.segments.length) return null;
                    if (u >= this.goalBufferLength_()) return null;
                    if (!n && 1 <= u) return null;
                    if (null === a) return i = this.getSyncSegmentCandidate_(e), this.generateSegmentInfo_(e, i, null, !0);
                    if (null !== i) {
                        var l = e.segments[i];
                        return o = l && l.end ? l.end : s, this.generateSegmentInfo_(e, i + 1, o, !1)
                    }
                    if (this.fetchAtBuffer_) {
                        var c = xd.getMediaInfoForTime(e, s, a.segmentIndex, a.time);
                        i = c.mediaIndex, o = c.startTime
                    } else {
                        var d = xd.getMediaInfoForTime(e, r, a.segmentIndex, a.time);
                        i = d.mediaIndex, o = d.startTime
                    }
                    return this.generateSegmentInfo_(e, i, o, !1)
                }
            }, {
                key: "getSyncSegmentCandidate_",
                value: function (t) {
                    var e = this;
                    if (-1 === this.currentTimeline_) return 0;
                    var i = t.segments.map(function (t, e) {
                        return {
                            timeline: t.timeline,
                            segmentIndex: e
                        }
                    }).filter(function (t) {
                        return t.timeline === e.currentTimeline_
                    });
                    return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(t.segments.length - 1, 0)
                }
            }, {
                key: "generateSegmentInfo_",
                value: function (t, e, i, n) {
                    if (e < 0 || e >= t.segments.length) return null;
                    var r = t.segments[e];
                    return {
                        requestId: "segment-loader-" + Math.random(),
                        uri: r.resolvedUri,
                        mediaIndex: e,
                        isSyncRequest: n,
                        startOfSegment: i,
                        playlist: t,
                        bytes: null,
                        encryptedBytes: null,
                        timestampOffset: null,
                        timeline: r.timeline,
                        duration: r.duration,
                        segment: r
                    }
                }
            }, {
                key: "abortRequestEarly_",
                value: function (t) {
                    if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return !1;
                    if (Date.now() - (t.firstBytesReceivedAt || Date.now()) < 1e3) return !1;
                    var e = this.currentTime_(),
                        i = t.bandwidth,
                        n = this.pendingSegment_.duration,
                        r = xd.estimateSegmentRequestTime(n, i, this.playlist_, t.bytesReceived),
                        a = function (t, e) {
                            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
                            return ((t.length ? t.end(t.length - 1) : 0) - e) / i
                        }(this.buffered_(), e, this.hls_.tech_.playbackRate()) - 1;
                    if (r <= a) return !1;
                    var s = function (t) {
                        var e = t.master,
                            i = t.currentTime,
                            n = t.bandwidth,
                            r = t.duration,
                            a = t.segmentDuration,
                            s = t.timeUntilRebuffer,
                            o = t.currentTimeline,
                            u = t.syncController,
                            l = e.playlists.filter(function (t) {
                                return !xd.isIncompatible(t)
                            }),
                            c = l.filter(xd.isEnabled);
                        c.length || (c = l.filter(function (t) {
                            return !xd.isDisabled(t)
                        }));
                        var d = c.filter(xd.hasAttribute.bind(null, "BANDWIDTH")).map(function (t) {
                                var e = u.getSyncPoint(t, r, o, i) ? 1 : 2;
                                return {
                                    playlist: t,
                                    rebufferingImpact: xd.estimateSegmentRequestTime(a, n, t) * e - s
                                }
                            }),
                            h = d.filter(function (t) {
                                return t.rebufferingImpact <= 0
                            });
                        return Hh(h, function (t, e) {
                            return zh(e.playlist, t.playlist)
                        }), h.length ? h[0] : (Hh(d, function (t, e) {
                            return t.rebufferingImpact - e.rebufferingImpact
                        }), d[0] || null)
                    }({
                        master: this.hls_.playlists.master,
                        currentTime: e,
                        bandwidth: i,
                        duration: this.duration_(),
                        segmentDuration: n,
                        timeUntilRebuffer: a,
                        currentTimeline: this.currentTimeline_,
                        syncController: this.syncController_
                    });
                    if (s) {
                        var o = r - a - s.rebufferingImpact,
                            u = .5;
                        return a <= Hd && (u = 1), !s.playlist || s.playlist.uri === this.playlist_.uri || o < u ? !1 : (this.bandwidth = s.playlist.attributes.BANDWIDTH * Uh.BANDWIDTH_VARIANCE + 1, this.abort(), this.trigger("earlyabort"), !0)
                    }
                }
            }, {
                key: "handleProgress_",
                value: function (t, e) {
                    this.pendingSegment_ && e.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(e.stats) && this.trigger("progress")
                }
            }, {
                key: "loadSegment_",
                value: function (t) {
                    this.state = "WAITING", this.pendingSegment_ = t, this.trimBackBuffer_(t), t.abortRequests = Fh(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.captionParser_, this.createSimplifiedSegmentObj_(t), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this))
                }
            }, {
                key: "trimBackBuffer_",
                value: function (t) {
                    var e, i, n, r, a = (e = this.seekable_(), i = this.currentTime_(), n = this.playlist_.targetDuration || 10, r = void 0, r = e.length && 0 < e.start(0) && e.start(0) < i ? e.start(0) : i - 30, Math.min(r, i - n));
                    0 < a && this.remove(0, a)
                }
            }, {
                key: "createSimplifiedSegmentObj_",
                value: function (t) {
                    var e = t.segment,
                        i = {
                            resolvedUri: e.resolvedUri,
                            byterange: e.byterange,
                            requestId: t.requestId
                        };
                    if (e.key) {
                        var n = e.key.iv || new Uint32Array([0, 0, 0, t.mediaIndex + t.playlist.mediaSequence]);
                        i.key = {
                            resolvedUri: e.key.resolvedUri,
                            iv: n
                        }
                    }
                    return e.map && (i.map = this.initSegment(e.map)), i
                }
            }, {
                key: "segmentRequestFinished_",
                value: function (t, e) {
                    if (this.mediaRequests += 1, e.stats && (this.mediaBytesTransferred += e.stats.bytesReceived, this.mediaTransferDuration += e.stats.roundTripTime), this.pendingSegment_) {
                        if (e.requestId === this.pendingSegment_.requestId) {
                            if (t) return this.pendingSegment_ = null, this.state = "READY", t.code === Dh ? void(this.mediaRequestsAborted += 1) : (this.pause(), t.code === Ih ? (this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, void this.trigger("bandwidthupdate")) : (this.mediaRequestsErrored += 1, this.error(t), void this.trigger("error")));
                            this.bandwidth = e.stats.bandwidth, this.roundTrip = e.stats.roundTripTime, e.map && (e.map = this.initSegment(e.map, !0)), this.processSegmentResponse_(e)
                        }
                    } else this.mediaRequestsAborted += 1
                }
            }, {
                key: "processSegmentResponse_",
                value: function (t) {
                    var e = this.pendingSegment_;
                    e.bytes = t.bytes, t.map && (e.segment.map.bytes = t.map.bytes), e.endOfAllRequests = t.endOfAllRequests, t.fmp4Captions && (! function (t, e, i) {
                        for (var n in i)
                            if (!t[n]) {
                                e.trigger({
                                    type: "usage",
                                    name: "hls-608"
                                });
                                var r = e.textTracks().getTrackById(n);
                                t[n] = r || e.addRemoteTextTrack({
                                    kind: "captions",
                                    id: n,
                                    label: n
                                }, !1).track
                            }
                    }(this.inbandTextTracks_, this.hls_.tech_, t.captionStreams), function (t) {
                        var r = t.inbandTextTracks,
                            e = t.captionArray,
                            a = t.timestampOffset;
                        if (e) {
                            var s = window.WebKitDataCue || window.VTTCue;
                            e.forEach(function (t) {
                                var e = t.stream,
                                    i = t.startTime,
                                    n = t.endTime;
                                r[e] && (i += a, n += a, r[e].addCue(new s(i, n, t.text)))
                            })
                        }
                    }({
                        inbandTextTracks: this.inbandTextTracks_,
                        captionArray: t.fmp4Captions,
                        timestampOffset: 0
                    }), this.captionParser_.clearParsedCaptions()), this.handleSegment_()
                }
            }, {
                key: "handleSegment_",
                value: function () {
                    var t = this;
                    if (this.pendingSegment_) {
                        var e = this.pendingSegment_,
                            i = e.segment,
                            n = this.syncController_.probeSegmentInfo(e);
                        "undefined" == typeof this.startingMedia_ && n && (n.containsAudio || n.containsVideo) && (this.startingMedia_ = {
                            containsAudio: n.containsAudio,
                            containsVideo: n.containsVideo
                        });
                        var r, a, s, o = (r = this.loaderType_, a = this.startingMedia_, s = n, "main" === r && a && s ? s.containsAudio || s.containsVideo ? a.containsVideo && !s.containsVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !a.containsVideo && s.containsVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null);
                        if (o) return this.error({
                            message: o,
                            blacklistDuration: 1 / 0
                        }), void this.trigger("error");
                        if (e.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void(this.state = "READY");
                        null !== e.timestampOffset && e.timestampOffset !== this.sourceUpdater_.timestampOffset() && (this.sourceUpdater_.timestampOffset(e.timestampOffset), this.trigger("timestampoffset"));
                        var u, l, c, d, h, p, f, m, g, y, v, _ = this.syncController_.mappingForTimeline(e.timeline);
                        if (null !== _ && this.trigger({
                                type: "segmenttimemapping",
                                mapping: _
                            }), this.state = "APPENDING", i.map) {
                            var b = jd(i.map);
                            if (!this.activeInitSegmentId_ || this.activeInitSegmentId_ !== b) {
                                var T = this.initSegment(i.map);
                                this.sourceUpdater_.appendBuffer(T.bytes, function () {
                                    t.activeInitSegmentId_ = b
                                })
                            }
                        }
                        e.byteLength = e.bytes.byteLength, "number" == typeof i.start && "number" == typeof i.end ? this.mediaSecondsLoaded += i.end - i.start : this.mediaSecondsLoaded += i.duration, this.logger_((l = (u = e).segment, c = l.start, d = l.end, h = u.playlist, p = h.mediaSequence, f = h.id, m = h.segments, g = void 0 === m ? [] : m, y = u.mediaIndex, v = u.timeline, ["appending [" + y + "] of [" + p + ", " + (p + g.length) + "] from playlist [" + f + "]", "[" + c + " => " + d + "] in timeline [" + v + "]"].join(" "))), this.sourceUpdater_.appendBuffer(e.bytes, this.handleUpdateEnd_.bind(this))
                    } else this.state = "READY"
                }
            }, {
                key: "handleUpdateEnd_",
                value: function () {
                    if (!this.pendingSegment_) return this.state = "READY", void(this.paused() || this.monitorBuffer_());
                    var t = this.pendingSegment_,
                        e = t.segment,
                        i = null !== this.mediaIndex;
                    (this.pendingSegment_ = null, this.recordThroughput_(t), this.addSegmentMetadataCue_(t), this.state = "READY", this.mediaIndex = t.mediaIndex, this.fetchAtBuffer_ = !0, this.currentTimeline_ = t.timeline, this.trigger("syncinfoupdate"), e.end && this.currentTime_() - e.end > 3 * t.playlist.targetDuration) ? this.resetEverything(): (i && this.trigger("bandwidthupdate"), this.trigger("progress"), qh(t.playlist, this.mediaSource_, t.mediaIndex + 1) && this.endOfStream(), this.paused() || this.monitorBuffer_())
                }
            }, {
                key: "recordThroughput_",
                value: function (t) {
                    var e = this.throughput.rate,
                        i = Date.now() - t.endOfAllRequests + 1,
                        n = Math.floor(t.byteLength / i * 8 * 1e3);
                    this.throughput.rate += (n - e) / ++this.throughput.count
                }
            }, {
                key: "addSegmentMetadataCue_",
                value: function (t) {
                    if (this.segmentMetadataTrack_) {
                        var e = t.segment,
                            i = e.start,
                            n = e.end;
                        if (Wh(i) && Wh(n)) {
                            Yd(i, n, this.segmentMetadataTrack_);
                            var r = g.WebKitDataCue || g.VTTCue,
                                a = {
                                    bandwidth: t.playlist.attributes.BANDWIDTH,
                                    resolution: t.playlist.attributes.RESOLUTION,
                                    codecs: t.playlist.attributes.CODECS,
                                    byteLength: t.byteLength,
                                    uri: t.uri,
                                    timeline: t.timeline,
                                    playlist: t.playlist.uri,
                                    start: i,
                                    end: n
                                },
                                s = new r(i, n, JSON.stringify(a));
                            s.value = a, this.segmentMetadataTrack_.addCue(s)
                        }
                    }
                }
            }]), i
        }(),
        Xh = function (t) {
            return decodeURIComponent(escape(String.fromCharCode.apply(null, t)))
        },
        Yh = new Uint8Array("\n\n".split("").map(function (t) {
            return t.charCodeAt(0)
        })),
        $h = function (t) {
            function n(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                nd(this, n);
                var i = sd(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t, e));
                return i.mediaSource_ = null, i.subtitlesTrack_ = null, i
            }
            return ad(n, Gh), rd(n, [{
                key: "buffered_",
                value: function () {
                    if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return Oa.createTimeRanges();
                    var t = this.subtitlesTrack_.cues,
                        e = t[0].startTime,
                        i = t[t.length - 1].startTime;
                    return Oa.createTimeRanges([
                        [e, i]
                    ])
                }
            }, {
                key: "initSegment",
                value: function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    if (!t) return null;
                    var i = jd(t),
                        n = this.initSegments_[i];
                    if (e && !n && t.bytes) {
                        var r = Yh.byteLength + t.bytes.byteLength,
                            a = new Uint8Array(r);
                        a.set(t.bytes), a.set(Yh, t.bytes.byteLength), this.initSegments_[i] = n = {
                            resolvedUri: t.resolvedUri,
                            byterange: t.byterange,
                            bytes: a
                        }
                    }
                    return n || t
                }
            }, {
                key: "couldBeginLoading_",
                value: function () {
                    return this.playlist_ && this.subtitlesTrack_ && !this.paused()
                }
            }, {
                key: "init_",
                value: function () {
                    return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
                }
            }, {
                key: "track",
                value: function (t) {
                    return "undefined" == typeof t || (this.subtitlesTrack_ = t, "INIT" === this.state && this.couldBeginLoading_() && this.init_()), this.subtitlesTrack_
                }
            }, {
                key: "remove",
                value: function (t, e) {
                    Yd(t, e, this.subtitlesTrack_)
                }
            }, {
                key: "fillBuffer_",
                value: function () {
                    var t = this;
                    this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                    var e = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                    if (e = this.skipEmptySegments_(e)) {
                        if (null === this.syncController_.timestampOffsetForTimeline(e.timeline)) {
                            return this.syncController_.one("timestampoffset", function () {
                                t.state = "READY", t.paused() || t.monitorBuffer_()
                            }), void(this.state = "WAITING_ON_TIMELINE")
                        }
                        this.loadSegment_(e)
                    }
                }
            }, {
                key: "skipEmptySegments_",
                value: function (t) {
                    for (; t && t.segment.empty;) t = this.generateSegmentInfo_(t.playlist, t.mediaIndex + 1, t.startOfSegment + t.duration, t.isSyncRequest);
                    return t
                }
            }, {
                key: "handleSegment_",
                value: function () {
                    var e = this;
                    if (this.pendingSegment_ && this.subtitlesTrack_) {
                        this.state = "APPENDING";
                        var t = this.pendingSegment_,
                            i = t.segment;
                        if ("function" != typeof g.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
                            var n = function () {
                                e.handleSegment_()
                            };
                            return this.state = "WAITING_ON_VTTJS", this.subtitlesTrack_.tech_.one("vttjsloaded", n), void this.subtitlesTrack_.tech_.one("vttjserror", function () {
                                e.subtitlesTrack_.tech_.off("vttjsloaded", n), e.error({
                                    message: "Error loading vtt.js"
                                }), e.state = "READY", e.pause(), e.trigger("error")
                            })
                        }
                        i.requested = !0;
                        try {
                            this.parseVTTCues_(t)
                        } catch (t) {
                            return this.error({
                                message: t.message
                            }), this.state = "READY", this.pause(), this.trigger("error")
                        }
                        if (this.updateTimeMapping_(t, this.syncController_.timelines[t.timeline], this.playlist_), t.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void(this.state = "READY");
                        t.byteLength = t.bytes.byteLength, this.mediaSecondsLoaded += i.duration, t.cues.length && this.remove(t.cues[0].endTime, t.cues[t.cues.length - 1].endTime), t.cues.forEach(function (t) {
                            e.subtitlesTrack_.addCue(t)
                        }), this.handleUpdateEnd_()
                    } else this.state = "READY"
                }
            }, {
                key: "parseVTTCues_",
                value: function (e) {
                    var t = void 0,
                        i = !1;
                    "function" == typeof g.TextDecoder ? t = new g.TextDecoder("utf8") : (t = g.WebVTT.StringDecoder(), i = !0);
                    var n = new g.WebVTT.Parser(g, g.vttjs, t);
                    if (e.cues = [], e.timestampmap = {
                            MPEGTS: 0,
                            LOCAL: 0
                        }, n.oncue = e.cues.push.bind(e.cues), n.ontimestampmap = function (t) {
                            return e.timestampmap = t
                        }, n.onparsingerror = function (t) {
                            Oa.log.warn("Error encountered when parsing cues: " + t.message)
                        }, e.segment.map) {
                        var r = e.segment.map.bytes;
                        i && (r = Xh(r)), n.parse(r)
                    }
                    var a = e.bytes;
                    i && (a = Xh(a)), n.parse(a), n.flush()
                }
            }, {
                key: "updateTimeMapping_",
                value: function (t, e, i) {
                    var n = t.segment;
                    if (e)
                        if (t.cues.length) {
                            var r = t.timestampmap,
                                a = r.MPEGTS / 9e4 - r.LOCAL + e.mapping;
                            if (t.cues.forEach(function (t) {
                                    t.startTime += a, t.endTime += a
                                }), !i.syncInfo) {
                                var s = t.cues[0].startTime,
                                    o = t.cues[t.cues.length - 1].startTime;
                                i.syncInfo = {
                                    mediaSequence: i.mediaSequence + t.mediaIndex,
                                    time: Math.min(s, o - n.duration)
                                }
                            }
                        } else n.empty = !0
                }
            }]), n
        }(),
        Kh = function (t, e) {
            for (var i = t.cues, n = 0; n < i.length; n++) {
                var r = i[n];
                if (e >= r.adStartTime && e <= r.adEndTime) return r
            }
            return null
        },
        Jh = qc,
        Qh = [{
            name: "VOD",
            run: function (t, e, i, n, r) {
                if (i !== 1 / 0) {
                    return {
                        time: 0,
                        segmentIndex: 0
                    }
                }
                return null
            }
        }, {
            name: "ProgramDateTime",
            run: function (t, e, i, n, r) {
                if (!t.datetimeToDisplayTime) return null;
                var a = e.segments || [],
                    s = null,
                    o = null;
                r = r || 0;
                for (var u = 0; u < a.length; u++) {
                    var l = a[u];
                    if (l.dateTimeObject) {
                        var c = l.dateTimeObject.getTime() / 1e3 + t.datetimeToDisplayTime,
                            d = Math.abs(r - c);
                        if (null !== o && o < d) break;
                        o = d, s = {
                            time: c,
                            segmentIndex: u
                        }
                    }
                }
                return s
            }
        }, {
            name: "Segment",
            run: function (t, e, i, n, r) {
                var a = e.segments || [],
                    s = null,
                    o = null;
                r = r || 0;
                for (var u = 0; u < a.length; u++) {
                    var l = a[u];
                    if (l.timeline === n && "undefined" != typeof l.start) {
                        var c = Math.abs(r - l.start);
                        if (null !== o && o < c) break;
                        (!s || null === o || c <= o) && (o = c, s = {
                            time: l.start,
                            segmentIndex: u
                        })
                    }
                }
                return s
            }
        }, {
            name: "Discontinuity",
            run: function (t, e, i, n, r) {
                var a = null;
                if (r = r || 0, e.discontinuityStarts && e.discontinuityStarts.length)
                    for (var s = null, o = 0; o < e.discontinuityStarts.length; o++) {
                        var u = e.discontinuityStarts[o],
                            l = e.discontinuitySequence + o + 1,
                            c = t.discontinuities[l];
                        if (c) {
                            var d = Math.abs(r - c.time);
                            if (null !== s && s < d) break;
                            (!a || null === s || d <= s) && (s = d, a = {
                                time: c.time,
                                segmentIndex: u
                            })
                        }
                    }
                return a
            }
        }, {
            name: "Playlist",
            run: function (t, e, i, n, r) {
                return e.syncInfo ? {
                    time: e.syncInfo.time,
                    segmentIndex: e.syncInfo.mediaSequence - e.mediaSequence
                } : null
            }
        }],
        Zh = function (t) {
            function e() {
                nd(this, e);
                var t = sd(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.inspectCache_ = void 0, t.timelines = [], t.discontinuities = [], t.datetimeToDisplayTime = null, t.logger_ = Lh("SyncController"), t
            }
            return ad(e, Oa.EventTarget), rd(e, [{
                key: "getSyncPoint",
                value: function (t, e, i, n) {
                    var r = this.runStrategies_(t, e, i, n);
                    return r.length ? this.selectSyncPoint_(r, {
                        key: "time",
                        value: n
                    }) : null
                }
            }, {
                key: "getExpiredTime",
                value: function (t, e) {
                    if (!t || !t.segments) return null;
                    var i = this.runStrategies_(t, e, t.discontinuitySequence, 0);
                    if (!i.length) return null;
                    var n = this.selectSyncPoint_(i, {
                        key: "segmentIndex",
                        value: 0
                    });
                    return 0 < n.segmentIndex && (n.time *= -1), Math.abs(n.time + bd(t, n.segmentIndex, 0))
                }
            }, {
                key: "runStrategies_",
                value: function (t, e, i, n) {
                    for (var r = [], a = 0; a < Qh.length; a++) {
                        var s = Qh[a],
                            o = s.run(this, t, e, i, n);
                        o && (o.strategy = s.name, r.push({
                            strategy: s.name,
                            syncPoint: o
                        }))
                    }
                    return r
                }
            }, {
                key: "selectSyncPoint_",
                value: function (t, e) {
                    for (var i = t[0].syncPoint, n = Math.abs(t[0].syncPoint[e.key] - e.value), r = t[0].strategy, a = 1; a < t.length; a++) {
                        var s = Math.abs(t[a].syncPoint[e.key] - e.value);
                        s < n && (n = s, i = t[a].syncPoint, r = t[a].strategy)
                    }
                    return this.logger_("syncPoint for [" + e.key + ": " + e.value + "] chosen with strategy [" + r + "]: [time:" + i.time + ", segmentIndex:" + i.segmentIndex + "]"), i
                }
            }, {
                key: "saveExpiredSegmentInfo",
                value: function (t, e) {
                    for (var i = e.mediaSequence - t.mediaSequence - 1; 0 <= i; i--) {
                        var n = t.segments[i];
                        if (n && "undefined" != typeof n.start) {
                            e.syncInfo = {
                                mediaSequence: t.mediaSequence + i,
                                time: n.start
                            }, this.logger_("playlist refresh sync: [time:" + e.syncInfo.time + ", mediaSequence: " + e.syncInfo.mediaSequence + "]"), this.trigger("syncinfoupdate");
                            break
                        }
                    }
                }
            }, {
                key: "setDateTimeMapping",
                value: function (t) {
                    if (!this.datetimeToDisplayTime && t.segments && t.segments.length && t.segments[0].dateTimeObject) {
                        var e = t.segments[0].dateTimeObject.getTime() / 1e3;
                        this.datetimeToDisplayTime = -e
                    }
                }
            }, {
                key: "reset",
                value: function () {
                    this.inspectCache_ = void 0
                }
            }, {
                key: "probeSegmentInfo",
                value: function (t) {
                    var e = t.segment,
                        i = t.playlist,
                        n = void 0;
                    return (n = e.map ? this.probeMp4Segment_(t) : this.probeTsSegment_(t)) && this.calculateSegmentTimeMapping_(t, n) && (this.saveDiscontinuitySyncInfo_(t), i.syncInfo || (i.syncInfo = {
                        mediaSequence: i.mediaSequence + t.mediaIndex,
                        time: e.start
                    })), n
                }
            }, {
                key: "probeMp4Segment_",
                value: function (t) {
                    var e = t.segment,
                        i = vo.timescale(e.map.bytes),
                        n = vo.startTime(i, t.bytes);
                    return null !== t.timestampOffset && (t.timestampOffset -= n), {
                        start: n,
                        end: n + e.duration
                    }
                }
            }, {
                key: "probeTsSegment_",
                value: function (t) {
                    var e = Jh(t.bytes, this.inspectCache_),
                        i = void 0,
                        n = void 0;
                    return e ? (e.video && 2 === e.video.length ? (this.inspectCache_ = e.video[1].dts, i = e.video[0].dtsTime, n = e.video[1].dtsTime) : e.audio && 2 === e.audio.length && (this.inspectCache_ = e.audio[1].dts, i = e.audio[0].dtsTime, n = e.audio[1].dtsTime), {
                        start: i,
                        end: n,
                        containsVideo: e.video && 2 === e.video.length,
                        containsAudio: e.audio && 2 === e.audio.length
                    }) : null
                }
            }, {
                key: "timestampOffsetForTimeline",
                value: function (t) {
                    return "undefined" == typeof this.timelines[t] ? null : this.timelines[t].time
                }
            }, {
                key: "mappingForTimeline",
                value: function (t) {
                    return "undefined" == typeof this.timelines[t] ? null : this.timelines[t].mapping
                }
            }, {
                key: "calculateSegmentTimeMapping_",
                value: function (t, e) {
                    var i = t.segment,
                        n = this.timelines[t.timeline];
                    if (null !== t.timestampOffset) n = {
                        time: t.startOfSegment,
                        mapping: t.startOfSegment - e.start
                    }, this.timelines[t.timeline] = n, this.trigger("timestampoffset"), this.logger_("time mapping for timeline " + t.timeline + ": [time: " + n.time + "] [mapping: " + n.mapping + "]"), i.start = t.startOfSegment, i.end = e.end + n.mapping;
                    else {
                        if (!n) return !1;
                        i.start = e.start + n.mapping, i.end = e.end + n.mapping
                    }
                    return !0
                }
            }, {
                key: "saveDiscontinuitySyncInfo_",
                value: function (t) {
                    var e = t.playlist,
                        i = t.segment;
                    if (i.discontinuity) this.discontinuities[i.timeline] = {
                        time: i.start,
                        accuracy: 0
                    };
                    else if (e.discontinuityStarts && e.discontinuityStarts.length)
                        for (var n = 0; n < e.discontinuityStarts.length; n++) {
                            var r = e.discontinuityStarts[n],
                                a = e.discontinuitySequence + n + 1,
                                s = r - t.mediaIndex,
                                o = Math.abs(s);
                            if (!this.discontinuities[a] || this.discontinuities[a].accuracy > o) {
                                var u = void 0;
                                u = s < 0 ? i.start - bd(e, t.mediaIndex, r) : i.end + bd(e, t.mediaIndex + 1, r), this.discontinuities[a] = {
                                    time: u,
                                    accuracy: o
                                }
                            }
                        }
                }
            }]), e
        }(),
        tp = new nh("./decrypter-worker.worker.js", function (t, e) {
            var d, i, n, h, p, g, r, l, y, s, a = this;
            d = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }, i = function () {
                function n(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function (t, e, i) {
                    return e && n(t.prototype, e), i && n(t, i), t
                }
            }(), n = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== ("undefined" == typeof e ? "undefined" : Ee(e)) && "function" != typeof e ? t : e
            }, h = function () {
                var t = [
                        [
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [
                            [],
                            [],
                            [],
                            [],
                            []
                        ]
                    ],
                    e = t[0],
                    i = t[1],
                    n = e[4],
                    r = i[4],
                    a = void 0,
                    s = void 0,
                    o = void 0,
                    u = [],
                    l = [],
                    c = void 0,
                    d = void 0,
                    h = void 0,
                    p = void 0,
                    f = void 0;
                for (a = 0; a < 256; a++) l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
                for (s = o = 0; !n[s]; s ^= c || 1, o = l[o] || 1)
                    for (h = (h = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & h ^ 99, f = 16843009 * u[d = u[c = u[r[n[s] = h] = s]]] ^ 65537 * d ^ 257 * c ^ 16843008 * s, p = 257 * u[h] ^ 16843008 * h, a = 0; a < 4; a++) e[a][s] = p = p << 24 ^ p >>> 8, i[a][h] = f = f << 24 ^ f >>> 8;
                for (a = 0; a < 5; a++) e[a] = e[a].slice(0), i[a] = i[a].slice(0);
                return t
            }, p = null, g = function () {
                function c(t) {
                    d(this, c), p || (p = h()), this._tables = [
                        [p[0][0].slice(), p[0][1].slice(), p[0][2].slice(), p[0][3].slice(), p[0][4].slice()],
                        [p[1][0].slice(), p[1][1].slice(), p[1][2].slice(), p[1][3].slice(), p[1][4].slice()]
                    ];
                    var e = void 0,
                        i = void 0,
                        n = void 0,
                        r = void 0,
                        a = void 0,
                        s = this._tables[0][4],
                        o = this._tables[1],
                        u = t.length,
                        l = 1;
                    if (4 !== u && 6 !== u && 8 !== u) throw new Error("Invalid aes key size");
                    for (r = t.slice(0), a = [], this._key = [r, a], e = u; e < 4 * u + 28; e++) n = r[e - 1], (e % u == 0 || 8 === u && e % u == 4) && (n = s[n >>> 24] << 24 ^ s[n >> 16 & 255] << 16 ^ s[n >> 8 & 255] << 8 ^ s[255 & n], e % u == 0 && (n = n << 8 ^ n >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))), r[e] = r[e - u] ^ n;
                    for (i = 0; e; i++, e--) n = r[3 & i ? e : e - 4], a[i] = e <= 4 || i < 4 ? n : o[0][s[n >>> 24]] ^ o[1][s[n >> 16 & 255]] ^ o[2][s[n >> 8 & 255]] ^ o[3][s[255 & n]]
                }
                return c.prototype.decrypt = function (t, e, i, n, r, a) {
                    var s = this._key[1],
                        o = t ^ s[0],
                        u = n ^ s[1],
                        l = i ^ s[2],
                        c = e ^ s[3],
                        d = void 0,
                        h = void 0,
                        p = void 0,
                        f = s.length / 4 - 2,
                        m = void 0,
                        g = 4,
                        y = this._tables[1],
                        v = y[0],
                        _ = y[1],
                        b = y[2],
                        T = y[3],
                        S = y[4];
                    for (m = 0; m < f; m++) d = v[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g], h = v[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1], p = v[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2], c = v[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3], g += 4, o = d, u = h, l = p;
                    for (m = 0; m < 4; m++) r[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++], d = o, o = u, u = l, l = c, c = d
                }, c
            }(), r = function () {
                function t() {
                    d(this, t), this.listeners = {}
                }
                return t.prototype.on = function (t, e) {
                    this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
                }, t.prototype.off = function (t, e) {
                    if (!this.listeners[t]) return !1;
                    var i = this.listeners[t].indexOf(e);
                    return this.listeners[t].splice(i, 1), -1 < i
                }, t.prototype.trigger = function (t) {
                    var e = this.listeners[t];
                    if (e)
                        if (2 === arguments.length)
                            for (var i = e.length, n = 0; n < i; ++n) e[n].call(this, arguments[1]);
                        else
                            for (var r = Array.prototype.slice.call(arguments, 1), a = e.length, s = 0; s < a; ++s) e[s].apply(this, r)
                }, t.prototype.dispose = function () {
                    this.listeners = {}
                }, t.prototype.pipe = function (e) {
                    this.on("data", function (t) {
                        e.push(t)
                    })
                }, t
            }(), l = function (e) {
                function i() {
                    d(this, i);
                    var t = n(this, e.call(this, r));
                    return t.jobs = [], t.delay = 1, t.timeout_ = null, t
                }
                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : Ee(e)));
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(i, e), i.prototype.processJob_ = function () {
                    this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
                }, i.prototype.push = function (t) {
                    this.jobs.push(t), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
                }, i
            }(r), y = function (t) {
                return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
            }, s = function () {
                function u(t, e, i, n) {
                    d(this, u);
                    var r = u.STEP,
                        a = new Int32Array(t.buffer),
                        s = new Uint8Array(t.byteLength),
                        o = 0;
                    for (this.asyncStream_ = new l, this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + r), e, i, s)), o = r; o < a.length; o += r) i = new Uint32Array([y(a[o - 4]), y(a[o - 3]), y(a[o - 2]), y(a[o - 1])]), this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + r), e, i, s));
                    this.asyncStream_.push(function () {
                        var t;
                        n(null, (t = s).subarray(0, t.byteLength - t[t.byteLength - 1]))
                    })
                }
                return u.prototype.decryptChunk_ = function (e, i, n, r) {
                    return function () {
                        var t = function (t, e, i) {
                            var n = new Int32Array(t.buffer, t.byteOffset, t.byteLength >> 2),
                                r = new g(Array.prototype.slice.call(e)),
                                a = new Uint8Array(t.byteLength),
                                s = new Int32Array(a.buffer),
                                o = void 0,
                                u = void 0,
                                l = void 0,
                                c = void 0,
                                d = void 0,
                                h = void 0,
                                p = void 0,
                                f = void 0,
                                m = void 0;
                            for (o = i[0], u = i[1], l = i[2], c = i[3], m = 0; m < n.length; m += 4) d = y(n[m]), h = y(n[m + 1]), p = y(n[m + 2]), f = y(n[m + 3]), r.decrypt(d, h, p, f, s, m), s[m] = y(s[m] ^ o), s[m + 1] = y(s[m + 1] ^ u), s[m + 2] = y(s[m + 2] ^ l), s[m + 3] = y(s[m + 3] ^ c), o = d, u = h, l = p, c = f;
                            return a
                        }(e, i, n);
                        r.set(t, e.byteOffset)
                    }
                }, i(u, null, [{
                    key: "STEP",
                    get: function () {
                        return 32e3
                    }
                }]), u
            }(), new function (a) {
                a.onmessage = function (t) {
                    var r = t.data,
                        e = new Uint8Array(r.encrypted.bytes, r.encrypted.byteOffset, r.encrypted.byteLength),
                        i = new Uint32Array(r.key.bytes, r.key.byteOffset, r.key.byteLength / 4),
                        n = new Uint32Array(r.iv.bytes, r.iv.byteOffset, r.iv.byteLength / 4);
                    new s(e, i, n, function (t, e) {
                        var i, n;
                        a.postMessage((i = {
                            source: r.source,
                            decrypted: e
                        }, n = {}, Object.keys(i).forEach(function (t) {
                            var e = i[t];
                            ArrayBuffer.isView(e) ? n[t] = {
                                bytes: e.buffer,
                                byteOffset: e.byteOffset,
                                byteLength: e.byteLength
                            } : n[t] = e
                        }), n), [e.buffer])
                    })
                }
            }(a)
        }),
        ep = function (t, e) {
            t.abort(), t.pause(), e && e.activePlaylistLoader && (e.activePlaylistLoader.pause(), e.activePlaylistLoader = null)
        },
        ip = function (t, e) {
            (e.activePlaylistLoader = t).load()
        },
        np = {
            AUDIO: function (u, l) {
                return function () {
                    var t = l.segmentLoaders[u],
                        e = l.mediaTypes[u],
                        i = l.blacklistCurrentPlaylist;
                    ep(t, e);
                    var n = e.activeTrack(),
                        r = e.activeGroup(),
                        a = (r.filter(function (t) {
                            return t.default
                        })[0] || r[0]).id,
                        s = e.tracks[a];
                    if (n !== s) {
                        for (var o in Oa.log.warn("Problem encountered loading the alternate audio track.Switching back to default."), e.tracks) e.tracks[o].enabled = e.tracks[o] === s;
                        e.onTrackChanged()
                    } else i({
                        message: "Problem encountered loading the default audio track."
                    })
                }
            },
            SUBTITLES: function (n, r) {
                return function () {
                    var t = r.segmentLoaders[n],
                        e = r.mediaTypes[n];
                    Oa.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), ep(t, e);
                    var i = e.activeTrack();
                    i && (i.mode = "disabled"), e.onTrackChanged()
                }
            }
        },
        rp = {
            AUDIO: function (t, e, i) {
                if (e) {
                    var n = i.tech,
                        r = i.requestOptions,
                        a = i.segmentLoaders[t];
                    e.on("loadedmetadata", function () {
                        var t = e.media();
                        a.playlist(t, r), (!n.paused() || t.endList && "none" !== n.preload()) && a.load()
                    }), e.on("loadedplaylist", function () {
                        a.playlist(e.media(), r), n.paused() || a.load()
                    }), e.on("error", np[t](t, i))
                }
            },
            SUBTITLES: function (t, e, i) {
                var n = i.tech,
                    r = i.requestOptions,
                    a = i.segmentLoaders[t],
                    s = i.mediaTypes[t];
                e.on("loadedmetadata", function () {
                    var t = e.media();
                    a.playlist(t, r), a.track(s.activeTrack()), (!n.paused() || t.endList && "none" !== n.preload()) && a.load()
                }), e.on("loadedplaylist", function () {
                    a.playlist(e.media(), r), n.paused() || a.load()
                }), e.on("error", np[t](t, i))
            }
        },
        ap = function (e, i) {
            return function (t) {
                return t.attributes[e] === i
            }
        },
        sp = function (e) {
            return function (t) {
                return t.resolvedUri === e
            }
        },
        op = {
            AUDIO: function (t, e) {
                var i, n, r = e.hls,
                    a = e.sourceType,
                    s = e.segmentLoaders[t],
                    o = e.requestOptions.withCredentials,
                    u = e.master,
                    l = u.mediaGroups,
                    c = u.playlists,
                    d = e.mediaTypes[t],
                    h = d.groups,
                    p = d.tracks,
                    f = e.masterPlaylistLoader;
                for (var m in l[t] && 0 !== Object.keys(l[t]).length || (l[t] = {
                        main: {
                            default: {
                                default: !0
                            }
                        }
                    }), l[t]) {
                    h[m] || (h[m] = []);
                    var g = c.filter(ap(t, m));
                    for (var y in l[t][m]) {
                        var v = l[t][m][y];
                        g.filter(sp(v.resolvedUri)).length && delete v.resolvedUri;
                        var _ = void 0;
                        if (_ = v.resolvedUri ? new gd(v.resolvedUri, r, o) : v.playlists && "dash" === a ? new Ah(v.playlists[0], r, o, f) : null, v = Oa.mergeOptions({
                                id: y,
                                playlistLoader: _
                            }, v), rp[t](t, v.playlistLoader, e), h[m].push(v), "undefined" == typeof p[y]) {
                            var b = new Oa.AudioTrack({
                                id: y,
                                kind: (i = v, n = void 0, n = i.default ? "main" : "alternative", i.characteristics && 0 <= i.characteristics.indexOf("public.accessibility.describes-video") && (n = "main-desc"), n),
                                enabled: !1,
                                language: v.language,
                                default: v.default,
                                label: y
                            });
                            p[y] = b
                        }
                    }
                }
                s.on("error", np[t](t, e))
            },
            SUBTITLES: function (t, e) {
                var i = e.tech,
                    n = e.hls,
                    r = e.sourceType,
                    a = e.segmentLoaders[t],
                    s = e.requestOptions.withCredentials,
                    o = e.master.mediaGroups,
                    u = e.mediaTypes[t],
                    l = u.groups,
                    c = u.tracks,
                    d = e.masterPlaylistLoader;
                for (var h in o[t])
                    for (var p in l[h] || (l[h] = []), o[t][h])
                        if (!o[t][h][p].forced) {
                            var f = o[t][h][p],
                                m = void 0;
                            if ("hls" === r ? m = new gd(f.resolvedUri, n, s) : "dash" === r && (m = new Ah(f.playlists[0], n, s, d)), f = Oa.mergeOptions({
                                    id: p,
                                    playlistLoader: m
                                }, f), rp[t](t, f.playlistLoader, e), l[h].push(f), "undefined" == typeof c[p]) {
                                var g = i.addRemoteTextTrack({
                                    id: p,
                                    kind: "subtitles",
                                    enabled: !1,
                                    language: f.language,
                                    label: p
                                }, !1).track;
                                c[p] = g
                            }
                        } a.on("error", np[t](t, e))
            },
            "CLOSED-CAPTIONS": function (t, e) {
                var i = e.tech,
                    n = e.master.mediaGroups,
                    r = e.mediaTypes[t],
                    a = r.groups,
                    s = r.tracks;
                for (var o in n[t])
                    for (var u in a[o] || (a[o] = []), n[t][o]) {
                        var l = n[t][o][u];
                        if (l.instreamId.match(/CC\d/) && (a[o].push(Oa.mergeOptions({
                                id: u
                            }, l)), "undefined" == typeof s[u])) {
                            var c = i.addRemoteTextTrack({
                                id: l.instreamId,
                                kind: "captions",
                                enabled: !1,
                                language: l.language,
                                label: u
                            }, !1).track;
                            s[u] = c
                        }
                    }
            }
        },
        up = {
            AUDIO: function (i, n) {
                return function () {
                    var t = n.mediaTypes[i].tracks;
                    for (var e in t)
                        if (t[e].enabled) return t[e];
                    return null
                }
            },
            SUBTITLES: function (i, n) {
                return function () {
                    var t = n.mediaTypes[i].tracks;
                    for (var e in t)
                        if ("showing" === t[e].mode) return t[e];
                    return null
                }
            }
        },
        lp = function (e) {
            ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function (t) {
                op[t](t, e)
            });
            var i = e.mediaTypes,
                t = e.masterPlaylistLoader,
                n = e.tech,
                r = e.hls;
            ["AUDIO", "SUBTITLES"].forEach(function (t) {
                var a, s, o, u, l, c;
                i[t].activeGroup = (a = t, s = e, function (e) {
                    var t = s.masterPlaylistLoader,
                        i = s.mediaTypes[a].groups,
                        n = t.media();
                    if (!n) return null;
                    var r = null;
                    return n.attributes[a] && (r = i[n.attributes[a]]), r = r || i.main, "undefined" == typeof e ? r : null === e ? null : r.filter(function (t) {
                        return t.id === e.id
                    })[0] || null
                }), i[t].activeTrack = up[t](t, e), i[t].onGroupChanged = (o = t, u = e, function () {
                    var t = u.segmentLoaders,
                        e = t[o],
                        i = t.main,
                        n = u.mediaTypes[o],
                        r = n.activeTrack(),
                        a = n.activeGroup(r),
                        s = n.activePlaylistLoader;
                    ep(e, n), a && (a.playlistLoader ? (e.resyncLoader(), ip(a.playlistLoader, n)) : s && i.resetEverything())
                }), i[t].onTrackChanged = (l = t, c = e, function () {
                    var t = c.segmentLoaders,
                        e = t[l],
                        i = t.main,
                        n = c.mediaTypes[l],
                        r = n.activeTrack(),
                        a = n.activeGroup(r),
                        s = n.activePlaylistLoader;
                    ep(e, n), a && (a.playlistLoader ? (s !== a.playlistLoader && (e.track && e.track(r), e.resetEverything()), ip(a.playlistLoader, n)) : i.resetEverything())
                })
            });
            var a = i.AUDIO.activeGroup(),
                s = (a.filter(function (t) {
                    return t.default
                })[0] || a[0]).id;
            i.AUDIO.tracks[s].enabled = !0, i.AUDIO.onTrackChanged(), t.on("mediachange", function () {
                ["AUDIO", "SUBTITLES"].forEach(function (t) {
                    return i[t].onGroupChanged()
                })
            });
            var o = function () {
                i.AUDIO.onTrackChanged(), n.trigger({
                    type: "usage",
                    name: "hls-audio-change"
                })
            };
            for (var u in n.audioTracks().addEventListener("change", o), n.remoteTextTracks().addEventListener("change", i.SUBTITLES.onTrackChanged), r.on("dispose", function () {
                    n.audioTracks().removeEventListener("change", o), n.remoteTextTracks().removeEventListener("change", i.SUBTITLES.onTrackChanged)
                }), n.clearTracks("audio"), i.AUDIO.tracks) n.audioTracks().addTrack(i.AUDIO.tracks[u])
        },
        cp = function () {
            var e = {};
            return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function (t) {
                e[t] = {
                    groups: {},
                    tracks: {},
                    activePlaylistLoader: null,
                    activeGroup: Oh,
                    activeTrack: Oh,
                    onGroupChanged: Oh,
                    onTrackChanged: Oh
                }
            }), e
        },
        dp = void 0,
        hp = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"],
        pp = function (t) {
            return this.audioSegmentLoader_[t] + this.mainSegmentLoader_[t]
        },
        fp = function (t) {
            function p(t) {
                nd(this, p);
                var e = sd(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this)),
                    i = t.url,
                    n = t.withCredentials,
                    r = t.tech,
                    a = t.bandwidth,
                    s = t.externHls,
                    o = t.useCueTags,
                    u = t.blacklistDuration,
                    l = t.enableLowInitialPlaylist,
                    c = t.sourceType,
                    d = t.seekTo;
                if (!i) throw new Error("A non-empty playlist URL is required");
                dp = s, e.withCredentials = n, e.tech_ = r, e.hls_ = r.hls, e.seekTo_ = d, e.sourceType_ = c, e.useCueTags_ = o, e.blacklistDuration = u, e.enableLowInitialPlaylist = l, e.useCueTags_ && (e.cueTagsTrack_ = e.tech_.addTextTrack("metadata", "ad-cues"), e.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), e.requestOptions_ = {
                    withCredentials: e.withCredentials,
                    timeout: null
                }, e.mediaTypes_ = cp(), e.mediaSource = new Oa.MediaSource, e.mediaSource.addEventListener("sourceopen", e.handleSourceOpen_.bind(e)), e.seekable_ = Oa.createTimeRanges(), e.hasPlayed_ = function () {
                    return !1
                }, e.syncController_ = new Zh(t), e.segmentMetadataTrack_ = r.addRemoteTextTrack({
                    kind: "metadata",
                    label: "segment-metadata"
                }, !1).track, e.decrypter_ = new tp, e.inbandTextTracks_ = {};
                var h = {
                    hls: e.hls_,
                    mediaSource: e.mediaSource,
                    currentTime: e.tech_.currentTime.bind(e.tech_),
                    seekable: function () {
                        return e.seekable()
                    },
                    seeking: function () {
                        return e.tech_.seeking()
                    },
                    duration: function () {
                        return e.mediaSource.duration
                    },
                    hasPlayed: function () {
                        return e.hasPlayed_()
                    },
                    goalBufferLength: function () {
                        return e.goalBufferLength()
                    },
                    bandwidth: a,
                    syncController: e.syncController_,
                    decrypter: e.decrypter_,
                    sourceType: e.sourceType_,
                    inbandTextTracks: e.inbandTextTracks_
                };
                return e.masterPlaylistLoader_ = "dash" === e.sourceType_ ? new Ah(i, e.hls_, e.withCredentials) : new gd(i, e.hls_, e.withCredentials), e.setupMasterPlaylistLoaderListeners_(), e.mainSegmentLoader_ = new Gh(Oa.mergeOptions(h, {
                    segmentMetadataTrack: e.segmentMetadataTrack_,
                    loaderType: "main"
                }), t), e.audioSegmentLoader_ = new Gh(Oa.mergeOptions(h, {
                    loaderType: "audio"
                }), t), e.subtitleSegmentLoader_ = new $h(Oa.mergeOptions(h, {
                    loaderType: "vtt"
                }), t), e.setupSegmentLoaderListeners_(), hp.forEach(function (t) {
                    e[t + "_"] = pp.bind(e, t)
                }), e.logger_ = Lh("MPC"), e.masterPlaylistLoader_.load(), e
            }
            return ad(p, Oa.EventTarget), rd(p, [{
                key: "setupMasterPlaylistLoaderListeners_",
                value: function () {
                    var n = this;
                    this.masterPlaylistLoader_.on("loadedmetadata", function () {
                        var t = n.masterPlaylistLoader_.media(),
                            e = 1.5 * n.masterPlaylistLoader_.targetDuration * 1e3;
                        Ud(n.masterPlaylistLoader_.master, n.masterPlaylistLoader_.media()) ? n.requestOptions_.timeout = 0 : n.requestOptions_.timeout = e, t.endList && "none" !== n.tech_.preload() && (n.mainSegmentLoader_.playlist(t, n.requestOptions_), n.mainSegmentLoader_.load()), lp({
                            sourceType: n.sourceType_,
                            segmentLoaders: {
                                AUDIO: n.audioSegmentLoader_,
                                SUBTITLES: n.subtitleSegmentLoader_,
                                main: n.mainSegmentLoader_
                            },
                            tech: n.tech_,
                            requestOptions: n.requestOptions_,
                            masterPlaylistLoader: n.masterPlaylistLoader_,
                            hls: n.hls_,
                            master: n.master(),
                            mediaTypes: n.mediaTypes_,
                            blacklistCurrentPlaylist: n.blacklistCurrentPlaylist.bind(n)
                        }), n.triggerPresenceUsage_(n.master(), t);
                        try {
                            n.setupSourceBuffers_()
                        } catch (t) {
                            return Oa.log.warn("Failed to create SourceBuffers", t), n.mediaSource.endOfStream("decode")
                        }
                        n.setupFirstPlay(), n.trigger("selectedinitialmedia")
                    }), this.masterPlaylistLoader_.on("loadedplaylist", function () {
                        var t = n.masterPlaylistLoader_.media();
                        if (!t) {
                            n.excludeUnsupportedVariants_();
                            var e = void 0;
                            return n.enableLowInitialPlaylist && (e = n.selectInitialPlaylist()), e || (e = n.selectPlaylist()), n.initialMedia_ = e, void n.masterPlaylistLoader_.media(n.initialMedia_)
                        }
                        if (n.useCueTags_ && n.updateAdCues_(t), n.mainSegmentLoader_.playlist(t, n.requestOptions_), n.updateDuration(), n.tech_.paused() || (n.mainSegmentLoader_.load(), n.audioSegmentLoader_ && n.audioSegmentLoader_.load()), !t.endList) {
                            var i = function () {
                                var t = n.seekable();
                                0 !== t.length && n.mediaSource.addSeekableRange_(t.start(0), t.end(0))
                            };
                            if (n.duration() !== 1 / 0) {
                                n.tech_.one("durationchange", function t() {
                                    n.duration() === 1 / 0 ? i() : n.tech_.one("durationchange", t)
                                })
                            } else i()
                        }
                    }), this.masterPlaylistLoader_.on("error", function () {
                        n.blacklistCurrentPlaylist(n.masterPlaylistLoader_.error)
                    }), this.masterPlaylistLoader_.on("mediachanging", function () {
                        n.mainSegmentLoader_.abort(), n.mainSegmentLoader_.pause()
                    }), this.masterPlaylistLoader_.on("mediachange", function () {
                        var t = n.masterPlaylistLoader_.media(),
                            e = 1.5 * n.masterPlaylistLoader_.targetDuration * 1e3;
                        Ud(n.masterPlaylistLoader_.master, n.masterPlaylistLoader_.media()) ? n.requestOptions_.timeout = 0 : n.requestOptions_.timeout = e, n.mainSegmentLoader_.playlist(t, n.requestOptions_), n.mainSegmentLoader_.load(), n.tech_.trigger({
                            type: "mediachange",
                            bubbles: !0
                        })
                    }), this.masterPlaylistLoader_.on("playlistunchanged", function () {
                        var t = n.masterPlaylistLoader_.media();
                        n.stuckAtPlaylistEnd_(t) && (n.blacklistCurrentPlaylist({
                            message: "Playlist no longer updating."
                        }), n.tech_.trigger("playliststuck"))
                    }), this.masterPlaylistLoader_.on("renditiondisabled", function () {
                        n.tech_.trigger({
                            type: "usage",
                            name: "hls-rendition-disabled"
                        })
                    }), this.masterPlaylistLoader_.on("renditionenabled", function () {
                        n.tech_.trigger({
                            type: "usage",
                            name: "hls-rendition-enabled"
                        })
                    })
                }
            }, {
                key: "triggerPresenceUsage_",
                value: function (t, e) {
                    var i = t.mediaGroups || {},
                        n = !0,
                        r = Object.keys(i.AUDIO);
                    for (var a in i.AUDIO)
                        for (var s in i.AUDIO[a]) {
                            i.AUDIO[a][s].uri || (n = !1)
                        }
                    n && this.tech_.trigger({
                        type: "usage",
                        name: "hls-demuxed"
                    }), Object.keys(i.SUBTITLES).length && this.tech_.trigger({
                        type: "usage",
                        name: "hls-webvtt"
                    }), dp.Playlist.isAes(e) && this.tech_.trigger({
                        type: "usage",
                        name: "hls-aes"
                    }), dp.Playlist.isFmp4(e) && this.tech_.trigger({
                        type: "usage",
                        name: "hls-fmp4"
                    }), r.length && 1 < Object.keys(i.AUDIO[r[0]]).length && this.tech_.trigger({
                        type: "usage",
                        name: "hls-alternate-audio"
                    }), this.useCueTags_ && this.tech_.trigger({
                        type: "usage",
                        name: "hls-playlist-cue-tags"
                    })
                }
            }, {
                key: "setupSegmentLoaderListeners_",
                value: function () {
                    var a = this;
                    this.mainSegmentLoader_.on("bandwidthupdate", function () {
                        var t = a.selectPlaylist(),
                            e = a.masterPlaylistLoader_.media(),
                            i = a.tech_.buffered(),
                            n = i.length ? i.end(i.length - 1) - a.tech_.currentTime() : 0,
                            r = a.bufferLowWaterLine();
                        (!e.endList || a.duration() < Uh.MAX_BUFFER_LOW_WATER_LINE || t.attributes.BANDWIDTH < e.attributes.BANDWIDTH || r <= n) && a.masterPlaylistLoader_.media(t), a.tech_.trigger("bandwidthupdate")
                    }), this.mainSegmentLoader_.on("progress", function () {
                        a.trigger("progress")
                    }), this.mainSegmentLoader_.on("error", function () {
                        a.blacklistCurrentPlaylist(a.mainSegmentLoader_.error())
                    }), this.mainSegmentLoader_.on("syncinfoupdate", function () {
                        a.onSyncInfoUpdate_()
                    }), this.mainSegmentLoader_.on("timestampoffset", function () {
                        a.tech_.trigger({
                            type: "usage",
                            name: "hls-timestamp-offset"
                        })
                    }), this.audioSegmentLoader_.on("syncinfoupdate", function () {
                        a.onSyncInfoUpdate_()
                    }), this.mainSegmentLoader_.on("ended", function () {
                        a.onEndOfStream()
                    }), this.mainSegmentLoader_.on("earlyabort", function () {
                        a.blacklistCurrentPlaylist({
                            message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
                        }, 120)
                    }), this.mainSegmentLoader_.on("reseteverything", function () {
                        a.tech_.trigger("hls-reset")
                    }), this.mainSegmentLoader_.on("segmenttimemapping", function (t) {
                        a.tech_.trigger({
                            type: "hls-segment-time-mapping",
                            mapping: t.mapping
                        })
                    }), this.audioSegmentLoader_.on("ended", function () {
                        a.onEndOfStream()
                    })
                }
            }, {
                key: "mediaSecondsLoaded_",
                value: function () {
                    return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
                }
            }, {
                key: "load",
                value: function () {
                    this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
                }
            }, {
                key: "smoothQualityChange_",
                value: function () {
                    var t = this.selectPlaylist();
                    t !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(t), this.mainSegmentLoader_.resetLoader())
                }
            }, {
                key: "fastQualityChange_",
                value: function () {
                    var t = this,
                        e = this.selectPlaylist();
                    e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e), this.mainSegmentLoader_.resetEverything(function () {
                        t.tech_.setCurrentTime(t.tech_.currentTime())
                    }))
                }
            }, {
                key: "play",
                value: function () {
                    if (!this.setupFirstPlay()) {
                        this.tech_.ended() && this.seekTo_(0), this.hasPlayed_() && this.load();
                        var t = this.tech_.seekable();
                        return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < t.start(0) ? this.seekTo_(t.end(t.length - 1)) : void 0
                    }
                }
            }, {
                key: "setupFirstPlay",
                value: function () {
                    var t = this,
                        e = this.masterPlaylistLoader_.media();
                    if (!e || this.tech_.paused() || this.hasPlayed_()) return !1;
                    if (!e.endList) {
                        var i = this.seekable();
                        if (!i.length) return !1;
                        if (Oa.browser.IE_VERSION && 0 === this.tech_.readyState()) return this.tech_.one("loadedmetadata", function () {
                            t.trigger("firstplay"), t.seekTo_(i.end(0)), t.hasPlayed_ = function () {
                                return !0
                            }
                        }), !1;
                        this.trigger("firstplay"), this.seekTo_(i.end(0))
                    }
                    return this.hasPlayed_ = function () {
                        return !0
                    }, this.load(), !0
                }
            }, {
                key: "handleSourceOpen_",
                value: function () {
                    try {
                        this.setupSourceBuffers_()
                    } catch (t) {
                        return Oa.log.warn("Failed to create Source Buffers", t), this.mediaSource.endOfStream("decode")
                    }
                    if (this.tech_.autoplay()) {
                        var t = this.tech_.play();
                        "undefined" != typeof t && "function" == typeof t.then && t.then(null, function (t) {})
                    }
                    this.trigger("sourceopen")
                }
            }, {
                key: "onEndOfStream",
                value: function () {
                    var t = this.mainSegmentLoader_.ended_;
                    this.mediaTypes_.AUDIO.activePlaylistLoader && (t = !this.mainSegmentLoader_.startingMedia_ || this.mainSegmentLoader_.startingMedia_.containsVideo ? t && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_), t && this.mediaSource.endOfStream()
                }
            }, {
                key: "stuckAtPlaylistEnd_",
                value: function (t) {
                    if (!this.seekable().length) return !1;
                    var e = this.syncController_.getExpiredTime(t, this.mediaSource.duration);
                    if (null === e) return !1;
                    var i = dp.Playlist.playlistEnd(t, e),
                        n = this.tech_.currentTime(),
                        r = this.tech_.buffered();
                    if (!r.length) return i - n <= .1;
                    var a = r.end(r.length - 1);
                    return a - n <= .1 && i - a <= .1
                }
            }, {
                key: "blacklistCurrentPlaylist",
                value: function () {
                    var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        i = arguments[1],
                        n = void 0;
                    if (n = e.playlist || this.masterPlaylistLoader_.media(), i = i || e.blacklistDuration || this.blacklistDuration, !n) {
                        this.error = e;
                        try {
                            return this.mediaSource.endOfStream("network")
                        } catch (t) {
                            return this.trigger("error")
                        }
                    }
                    var r = 1 === this.masterPlaylistLoader_.master.playlists.filter(Od).length;
                    return r ? (Oa.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."), this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(r)) : (n.excludeUntil = Date.now() + 1e3 * i, this.tech_.trigger("blacklistplaylist"), this.tech_.trigger({
                        type: "usage",
                        name: "hls-rendition-blacklisted"
                    }), t = this.selectPlaylist(), Oa.log.warn("Problem encountered with the current HLS playlist." + (e.message ? " " + e.message : "") + " Switching to another playlist."), this.masterPlaylistLoader_.media(t))
                }
            }, {
                key: "pauseLoading",
                value: function () {
                    this.mainSegmentLoader_.pause(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause()
                }
            }, {
                key: "setCurrentTime",
                value: function (t) {
                    var e = qd(this.tech_.buffered(), t);
                    return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? e && e.length ? t : (this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()), void this.load()) : 0
                }
            }, {
                key: "duration",
                value: function () {
                    return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration : dp.Playlist.duration(this.masterPlaylistLoader_.media()) : 0
                }
            }, {
                key: "seekable",
                value: function () {
                    return this.seekable_
                }
            }, {
                key: "onSyncInfoUpdate_",
                value: function () {
                    var t = void 0,
                        e = void 0;
                    if (this.masterPlaylistLoader_) {
                        var i = this.masterPlaylistLoader_.media();
                        if (i) {
                            var n = this.syncController_.getExpiredTime(i, this.mediaSource.duration);
                            if (null !== n && 0 !== (t = dp.Playlist.seekable(i, n)).length) {
                                if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                                    if (i = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (n = this.syncController_.getExpiredTime(i, this.mediaSource.duration))) return;
                                    if (0 === (e = dp.Playlist.seekable(i, n)).length) return
                                }
                                e ? e.start(0) > t.end(0) || t.start(0) > e.end(0) ? this.seekable_ = t : this.seekable_ = Oa.createTimeRanges([
                                    [e.start(0) > t.start(0) ? e.start(0) : t.start(0), e.end(0) < t.end(0) ? e.end(0) : t.end(0)]
                                ]) : this.seekable_ = t, this.logger_("seekable updated [" + Gd(this.seekable_) + "]"), this.tech_.trigger("seekablechanged")
                            }
                        }
                    }
                }
            }, {
                key: "updateDuration",
                value: function () {
                    var e = this,
                        t = this.mediaSource.duration,
                        i = dp.Playlist.duration(this.masterPlaylistLoader_.media()),
                        n = this.tech_.buffered(),
                        r = function t() {
                            e.mediaSource.duration = i, e.tech_.trigger("durationchange"), e.mediaSource.removeEventListener("sourceopen", t)
                        };
                    0 < n.length && (i = Math.max(i, n.end(n.length - 1))), t !== i && ("open" !== this.mediaSource.readyState ? this.mediaSource.addEventListener("sourceopen", r) : r())
                }
            }, {
                key: "dispose",
                value: function () {
                    var n = this;
                    this.decrypter_.terminate(), this.masterPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), ["AUDIO", "SUBTITLES"].forEach(function (t) {
                        var e = n.mediaTypes_[t].groups;
                        for (var i in e) e[i].forEach(function (t) {
                            t.playlistLoader && t.playlistLoader.dispose()
                        })
                    }), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose()
                }
            }, {
                key: "master",
                value: function () {
                    return this.masterPlaylistLoader_.master
                }
            }, {
                key: "media",
                value: function () {
                    return this.masterPlaylistLoader_.media() || this.initialMedia_
                }
            }, {
                key: "setupSourceBuffers_",
                value: function () {
                    var t, e = this.masterPlaylistLoader_.media();
                    if (e && "open" === this.mediaSource.readyState) {
                        if ((t = ph(this.masterPlaylistLoader_.master, e)).length < 1) return this.error = "No compatible SourceBuffer configuration for the variant stream:" + e.resolvedUri, this.mediaSource.endOfStream("decode");
                        this.configureLoaderMimeTypes_(t), this.excludeIncompatibleVariants_(e)
                    }
                }
            }, {
                key: "configureLoaderMimeTypes_",
                value: function (t) {
                    var e = 1 < t.length && -1 === t[0].indexOf(",") && t[0] !== t[1] ? new Oa.EventTarget : null;
                    this.mainSegmentLoader_.mimeType(t[0], e), t[1] && this.audioSegmentLoader_.mimeType(t[1], e)
                }
            }, {
                key: "excludeUnsupportedVariants_",
                value: function () {
                    this.master().playlists.forEach(function (t) {
                        t.attributes.CODECS && g.MediaSource && g.MediaSource.isTypeSupported && !g.MediaSource.isTypeSupported('video/mp4; codecs="' + t.attributes.CODECS.replace(/avc1\.(\d+)\.(\d+)/i, function (t) {
                            return ch([t])[0]
                        }) + '"') && (t.excludeUntil = 1 / 0)
                    })
                }
            }, {
                key: "excludeIncompatibleVariants_",
                value: function (t) {
                    var i = 2,
                        n = null,
                        e = void 0;
                    t.attributes.CODECS && (e = dh(t.attributes.CODECS), n = e.videoCodec, i = e.codecCount), this.master().playlists.forEach(function (t) {
                        var e = {
                            codecCount: 2,
                            videoCodec: null
                        };
                        t.attributes.CODECS && (e = dh(t.attributes.CODECS)), e.codecCount !== i && (t.excludeUntil = 1 / 0), e.videoCodec !== n && (t.excludeUntil = 1 / 0)
                    })
                }
            }, {
                key: "updateAdCues_",
                value: function (t) {
                    var e = 0,
                        i = this.seekable();
                    i.length && (e = i.start(0)),
                        function (t, e) {
                            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                            if (t.segments)
                                for (var n = i, r = void 0, a = 0; a < t.segments.length; a++) {
                                    var s = t.segments[a];
                                    if (r || (r = Kh(e, n + s.duration / 2)), r) {
                                        if ("cueIn" in s) {
                                            r.endTime = n, r.adEndTime = n, n += s.duration, r = null;
                                            continue
                                        }
                                        if (n < r.endTime) {
                                            n += s.duration;
                                            continue
                                        }
                                        r.endTime += s.duration
                                    } else if ("cueOut" in s && ((r = new g.VTTCue(n, n + s.duration, s.cueOut)).adStartTime = n, r.adEndTime = n + parseFloat(s.cueOut), e.addCue(r)), "cueOutCont" in s) {
                                        var o, u, l = s.cueOutCont.split("/").map(parseFloat),
                                            c = od(l, 2);
                                        o = c[0], u = c[1], (r = new g.VTTCue(n, n + s.duration, "")).adStartTime = n - o, r.adEndTime = r.adStartTime + u, e.addCue(r)
                                    }
                                    n += s.duration
                                }
                        }(t, this.cueTagsTrack_, e)
                }
            }, {
                key: "goalBufferLength",
                value: function () {
                    var t = this.tech_.currentTime(),
                        e = Uh.GOAL_BUFFER_LENGTH,
                        i = Uh.GOAL_BUFFER_LENGTH_RATE,
                        n = Math.max(e, Uh.MAX_GOAL_BUFFER_LENGTH);
                    return Math.min(e + t * i, n)
                }
            }, {
                key: "bufferLowWaterLine",
                value: function () {
                    var t = this.tech_.currentTime(),
                        e = Uh.BUFFER_LOW_WATER_LINE,
                        i = Uh.BUFFER_LOW_WATER_LINE_RATE,
                        n = Math.max(e, Uh.MAX_BUFFER_LOW_WATER_LINE);
                    return Math.min(e + t * i, n)
                }
            }]), p
        }(),
        mp = function t(e, i, n) {
            nd(this, t);
            var r, a, s, o = e.masterPlaylistController_.fastQualityChange_.bind(e.masterPlaylistController_);
            if (i.attributes.RESOLUTION) {
                var u = i.attributes.RESOLUTION;
                this.width = u.width, this.height = u.height
            }
            this.bandwidth = i.attributes.BANDWIDTH, this.id = n, this.enabled = (r = e.playlists, a = i.uri, s = o, function (t) {
                var e = r.master.playlists[a],
                    i = Ld(e),
                    n = Od(e);
                return "undefined" == typeof t ? n : (t ? delete e.disabled : e.disabled = !0, t === n || i || (s(), t ? r.trigger("renditionenabled") : r.trigger("renditiondisabled")), t)
            })
        },
        gp = ["seeking", "seeked", "pause", "playing", "error"],
        yp = function () {
            function s(t) {
                var e = this;
                nd(this, s), this.tech_ = t.tech, this.seekable = t.seekable, this.seekTo = t.seekTo, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.timer_ = null, this.checkCurrentTimeTimeout_ = null, this.logger_ = Lh("PlaybackWatcher"), this.logger_("initialize");
                var i = function () {
                        return e.monitorCurrentTime_()
                    },
                    n = function () {
                        return e.techWaiting_()
                    },
                    r = function () {
                        return e.cancelTimer_()
                    },
                    a = function () {
                        return e.fixesBadSeeks_()
                    };
                this.tech_.on("seekablechanged", a), this.tech_.on("waiting", n), this.tech_.on(gp, r), this.tech_.on("canplay", i), this.dispose = function () {
                    e.logger_("dispose"), e.tech_.off("seekablechanged", a), e.tech_.off("waiting", n), e.tech_.off(gp, r), e.tech_.off("canplay", i), e.checkCurrentTimeTimeout_ && g.clearTimeout(e.checkCurrentTimeTimeout_), e.cancelTimer_()
                }
            }
            return rd(s, [{
                key: "monitorCurrentTime_",
                value: function () {
                    this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && g.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = g.setTimeout(this.monitorCurrentTime_.bind(this), 250)
                }
            }, {
                key: "checkCurrentTime_",
                value: function () {
                    if (this.tech_.seeking() && this.fixesBadSeeks_()) return this.consecutiveUpdates = 0, void(this.lastRecordedTime = this.tech_.currentTime());
                    if (!this.tech_.paused() && !this.tech_.seeking()) {
                        var t = this.tech_.currentTime(),
                            e = this.tech_.buffered();
                        if (this.lastRecordedTime === t && (!e.length || t + .1 >= e.end(e.length - 1))) return this.techWaiting_();
                        5 <= this.consecutiveUpdates && t === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : t === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = t)
                    }
                }
            }, {
                key: "cancelTimer_",
                value: function () {
                    this.consecutiveUpdates = 0, this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)), this.timer_ = null
                }
            }, {
                key: "fixesBadSeeks_",
                value: function () {
                    var t = this.tech_.seeking(),
                        e = this.seekable(),
                        i = this.tech_.currentTime(),
                        n = void 0;
                    t && this.afterSeekableWindow_(e, i) && (n = e.end(e.length - 1));
                    t && this.beforeSeekableWindow_(e, i) && (n = e.start(0) + .1);
                    return "undefined" != typeof n && (this.logger_("Trying to seek outside of seekable at time " + i + " with seekable range " + Gd(e) + ". Seeking to " + n + "."), this.seekTo(n), !0)
                }
            }, {
                key: "waiting_",
                value: function () {
                    if (!this.techWaiting_()) {
                        var t = this.tech_.currentTime(),
                            e = this.tech_.buffered(),
                            i = qd(e, t);
                        return i.length && t + 3 <= i.end(0) ? (this.cancelTimer_(), this.seekTo(t), this.logger_("Stopped at " + t + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."), void this.tech_.trigger({
                            type: "usage",
                            name: "hls-unknown-waiting"
                        })) : void 0
                    }
                }
            }, {
                key: "techWaiting_",
                value: function () {
                    var t = this.seekable(),
                        e = this.tech_.currentTime();
                    if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0;
                    if (this.tech_.seeking() || null !== this.timer_) return !0;
                    if (this.beforeSeekableWindow_(t, e)) {
                        var i = t.end(t.length - 1);
                        return this.logger_("Fell out of live window at time " + e + ". Seeking to live point (seekable end) " + i), this.cancelTimer_(), this.seekTo(i), this.tech_.trigger({
                            type: "usage",
                            name: "hls-live-resync"
                        }), !0
                    }
                    var n = this.tech_.buffered(),
                        r = Wd(n, e);
                    if (this.videoUnderflow_(r, n, e)) return this.cancelTimer_(), this.seekTo(e), this.tech_.trigger({
                        type: "usage",
                        name: "hls-video-underflow"
                    }), !0;
                    if (0 < r.length) {
                        var a = r.start(0) - e;
                        return this.logger_("Stopped at " + e + ", setting timer for " + a + ", seeking to " + r.start(0)), this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * a, e), !0
                    }
                    return !1
                }
            }, {
                key: "afterSeekableWindow_",
                value: function (t, e) {
                    return !!t.length && e > t.end(t.length - 1) + .1
                }
            }, {
                key: "beforeSeekableWindow_",
                value: function (t, e) {
                    return !!(t.length && 0 < t.start(0) && e < t.start(0) - .1)
                }
            }, {
                key: "videoUnderflow_",
                value: function (t, e, i) {
                    if (0 === t.length) {
                        var n = this.gapFromVideoUnderflow_(e, i);
                        if (n) return this.logger_("Encountered a gap in video from " + n.start + " to " + n.end + ". Seeking to current time " + i), !0
                    }
                    return !1
                }
            }, {
                key: "skipTheGap_",
                value: function (t) {
                    var e = this.tech_.buffered(),
                        i = this.tech_.currentTime(),
                        n = Wd(e, i);
                    this.cancelTimer_(), 0 !== n.length && i === t && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", t, "nextRange start:", n.start(0)), this.seekTo(n.start(0) + Hd), this.tech_.trigger({
                        type: "usage",
                        name: "hls-gap-skip"
                    }))
                }
            }, {
                key: "gapFromVideoUnderflow_",
                value: function (t, e) {
                    for (var i = function (t) {
                            if (t.length < 2) return Oa.createTimeRanges();
                            for (var e = [], i = 1; i < t.length; i++) {
                                var n = t.end(i - 1),
                                    r = t.start(i);
                                e.push([n, r])
                            }
                            return Oa.createTimeRanges(e)
                        }(t), n = 0; n < i.length; n++) {
                        var r = i.start(n),
                            a = i.end(n);
                        if (e - r < 4 && 2 < e - r) return {
                            start: r,
                            end: a
                        }
                    }
                    return null
                }
            }]), s
        }(),
        vp = {
            errorInterval: 30,
            getSource: function (t) {
                return t(this.tech({
                    IWillNotUseThisInPlugins: !0
                }).currentSource_)
            }
        },
        _p = function (t) {
            ! function e(i, t) {
                var n = 0,
                    r = 0,
                    a = Oa.mergeOptions(vp, t);
                i.ready(function () {
                    i.trigger({
                        type: "usage",
                        name: "hls-error-reload-initialized"
                    })
                });
                var s = function () {
                        r && i.currentTime(r)
                    },
                    o = function (t) {
                        null != t && (r = i.duration() !== 1 / 0 && i.currentTime() || 0, i.one("loadedmetadata", s), i.src(t), i.trigger({
                            type: "usage",
                            name: "hls-error-reload"
                        }), i.play())
                    },
                    u = function () {
                        if (Date.now() - n < 1e3 * a.errorInterval) i.trigger({
                            type: "usage",
                            name: "hls-error-reload-canceled"
                        });
                        else {
                            if (a.getSource && "function" == typeof a.getSource) return n = Date.now(), a.getSource.call(i, o);
                            Oa.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
                        }
                    },
                    l = function t() {
                        i.off("loadedmetadata", s), i.off("error", u), i.off("dispose", t)
                    };
                i.on("error", u), i.on("dispose", l), i.reloadSourceOnError = function (t) {
                    l(), e(i, t)
                }
            }(this, t)
        };
    Oa.use("*", function (e) {
        return {
            setSource: function (t, e) {
                e(null, t)
            },
            setCurrentTime: function (t) {
                return e.vhs && e.currentSource().src === e.vhs.source_.src && e.vhs.setCurrentTime(t), t
            }
        }
    });
    var bp = {
        PlaylistLoader: gd,
        Playlist: xd,
        Decrypter: ed,
        AsyncStream: Qc,
        decrypt: td,
        utils: Vd,
        STANDARD_PLAYLIST_SELECTOR: function () {
            return function (t, e, i, n) {
                var r = t.playlists.map(function (t) {
                    var e, i;
                    return e = t.attributes.RESOLUTION && t.attributes.RESOLUTION.width, i = t.attributes.RESOLUTION && t.attributes.RESOLUTION.height, {
                        bandwidth: t.attributes.BANDWIDTH || g.Number.MAX_VALUE,
                        width: e,
                        height: i,
                        playlist: t
                    }
                });
                Hh(r, function (t, e) {
                    return t.bandwidth - e.bandwidth
                });
                var a = (r = r.filter(function (t) {
                    return !xd.isIncompatible(t.playlist)
                })).filter(function (t) {
                    return xd.isEnabled(t.playlist)
                });
                a.length || (a = r.filter(function (t) {
                    return !xd.isDisabled(t.playlist)
                }));
                var s = a.filter(function (t) {
                        return t.bandwidth * Uh.BANDWIDTH_VARIANCE < e
                    }),
                    o = s[s.length - 1],
                    u = s.filter(function (t) {
                        return t.bandwidth === o.bandwidth
                    })[0],
                    l = s.filter(function (t) {
                        return t.width && t.height
                    });
                Hh(l, function (t, e) {
                    return t.width - e.width
                });
                var c = l.filter(function (t) {
                    return t.width === i && t.height === n
                });
                o = c[c.length - 1];
                var d = c.filter(function (t) {
                        return t.bandwidth === o.bandwidth
                    })[0],
                    h = void 0,
                    p = void 0,
                    f = void 0;
                d || (p = (h = l.filter(function (t) {
                    return t.width > i || t.height > n
                })).filter(function (t) {
                    return t.width === h[0].width && t.height === h[0].height
                }), o = p[p.length - 1], f = p.filter(function (t) {
                    return t.bandwidth === o.bandwidth
                })[0]);
                var m = f || d || u || a[0] || r[0];
                return m ? m.playlist : null
            }(this.playlists.master, this.systemBandwidth, parseInt(Vh(this.tech_.el(), "width"), 10), parseInt(Vh(this.tech_.el(), "height"), 10))
        },
        INITIAL_PLAYLIST_SELECTOR: function () {
            var t = this.playlists.master.playlists.filter(xd.isEnabled);
            return Hh(t, function (t, e) {
                return zh(t, e)
            }), t.filter(function (t) {
                return dh(t.attributes.CODECS).videoCodec
            })[0] || null
        },
        comparePlaylistBandwidth: zh,
        comparePlaylistResolution: function (t, e) {
            var i = void 0,
                n = void 0;
            return t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (i = t.attributes.RESOLUTION.width), i = i || g.Number.MAX_VALUE, e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (n = e.attributes.RESOLUTION.width), i === (n = n || g.Number.MAX_VALUE) && t.attributes.BANDWIDTH && e.attributes.BANDWIDTH ? t.attributes.BANDWIDTH - e.attributes.BANDWIDTH : i - n
        },
        xhr: Rd()
    };
    ["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach(function (e) {
        Object.defineProperty(bp, e, {
            get: function () {
                return Oa.log.warn("using Hls." + e + " is UNSAFE be sure you know what you are doing"), Uh[e]
            },
            set: function (t) {
                Oa.log.warn("using Hls." + e + " is UNSAFE be sure you know what you are doing"), "number" != typeof t || t < 0 ? Oa.log.warn("value of Hls." + e + " must be greater than or equal to 0") : Uh[e] = t
            }
        })
    });
    var Tp = function (t) {
            if (/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(t)) return "hls";
            return /^application\/dash\+xml/i.test(t) ? "dash" : null
        },
        Sp = function (t, e) {
            for (var i = e.media(), n = -1, r = 0; r < t.length; r++)
                if (t[r].id === i.uri) {
                    n = r;
                    break
                } t.selectedIndex_ = n, t.trigger({
                selectedIndex: n,
                type: "change"
            })
        };
    bp.canPlaySource = function () {
        return Oa.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
    };
    var kp = function (t) {
        if ("dash" === t.options_.sourceType) {
            var e = Oa.players[t.tech_.options_.playerId];
            if (e.eme) {
                var i = function (t, e, i) {
                    if (!t) return t;
                    var n = {};
                    for (var r in t) n[r] = {
                        audioContentType: 'audio/mp4; codecs="' + i.attributes.CODECS + '"',
                        videoContentType: 'video/mp4; codecs="' + e.attributes.CODECS + '"'
                    }, e.contentProtection && e.contentProtection[r] && e.contentProtection[r].pssh && (n[r].pssh = e.contentProtection[r].pssh), "string" == typeof t[r] && (n[r].url = t[r]);
                    return Oa.mergeOptions(t, n)
                }(t.source_.keySystems, t.playlists.media(), t.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());
                i && (e.currentSource().keySystems = i)
            }
        }
    };
    bp.supportsNativeHls = function () {
        var e = p.createElement("video");
        if (!Oa.getTech("Html5").isSupported()) return !1;
        return ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function (t) {
            return /maybe|probably/i.test(e.canPlayType(t))
        })
    }(), bp.supportsNativeDash = !!Oa.getTech("Html5").isSupported() && /maybe|probably/i.test(p.createElement("video").canPlayType("application/dash+xml")), bp.supportsTypeNatively = function (t) {
        return "hls" === t ? bp.supportsNativeHls : "dash" === t && bp.supportsNativeDash
    }, bp.isSupported = function () {
        return Oa.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
    };
    var Cp = Oa.getComponent("Component"),
        wp = function (t) {
            function a(t, e, i) {
                nd(this, a);
                var n = sd(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e, i.hls));
                if (e.options_ && e.options_.playerId) {
                    var r = Oa(e.options_.playerId);
                    r.hasOwnProperty("hls") || Object.defineProperty(r, "hls", {
                        get: function () {
                            return Oa.log.warn("player.hls is deprecated. Use player.tech().hls instead."), e.trigger({
                                type: "usage",
                                name: "hls-player-access"
                            }), n
                        }
                    }), r.vhs = n, r.dash = n
                }
                if (n.tech_ = e, n.source_ = t, n.stats = {}, n.setOptions_(), n.options_.overrideNative && e.overrideNativeAudioTracks && e.overrideNativeVideoTracks) e.overrideNativeAudioTracks(!0), e.overrideNativeVideoTracks(!0);
                else if (n.options_.overrideNative && (e.featuresNativeVideoTracks || e.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
                return n.on(p, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], function (t) {
                    var e = p.fullscreenElement || p.webkitFullscreenElement || p.mozFullScreenElement || p.msFullscreenElement;
                    e && e.contains(n.tech_.el()) && n.masterPlaylistController_.smoothQualityChange_()
                }), n.on(n.tech_, "error", function () {
                    this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
                }), n.on(n.tech_, "play", n.play), n
            }
            return ad(a, Cp), rd(a, [{
                key: "setOptions_",
                value: function () {
                    var e = this;
                    this.options_.withCredentials = this.options_.withCredentials || !1, "number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300), "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = 4194304), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && 4194304 === this.options_.bandwidth, ["withCredentials", "bandwidth"].forEach(function (t) {
                        "undefined" != typeof e.source_[t] && (e.options_[t] = e.source_[t])
                    }), this.bandwidth = this.options_.bandwidth
                }
            }, {
                key: "src",
                value: function (t, e) {
                    var n = this;
                    t && (this.setOptions_(), this.options_.url = this.source_.src, this.options_.tech = this.tech_, this.options_.externHls = bp, this.options_.sourceType = Tp(e), this.options_.seekTo = function (t) {
                        n.tech_.setCurrentTime(t), n.setCurrentTime(t)
                    }, this.masterPlaylistController_ = new fp(this.options_), this.playbackWatcher_ = new yp(Oa.mergeOptions(this.options_, {
                        seekable: function () {
                            return n.seekable()
                        }
                    })), this.masterPlaylistController_.on("error", function () {
                        Oa.players[n.tech_.options_.playerId].error(n.masterPlaylistController_.error)
                    }), this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : bp.STANDARD_PLAYLIST_SELECTOR.bind(this), this.masterPlaylistController_.selectInitialPlaylist = bp.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, Object.defineProperties(this, {
                        selectPlaylist: {
                            get: function () {
                                return this.masterPlaylistController_.selectPlaylist
                            },
                            set: function (t) {
                                this.masterPlaylistController_.selectPlaylist = t.bind(this)
                            }
                        },
                        throughput: {
                            get: function () {
                                return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
                            },
                            set: function (t) {
                                this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = t, this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
                            }
                        },
                        bandwidth: {
                            get: function () {
                                return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
                            },
                            set: function (t) {
                                this.masterPlaylistController_.mainSegmentLoader_.bandwidth = t, this.masterPlaylistController_.mainSegmentLoader_.throughput = {
                                    rate: 0,
                                    count: 0
                                }
                            }
                        },
                        systemBandwidth: {
                            get: function () {
                                var t = 1 / (this.bandwidth || 1),
                                    e = void 0;
                                return e = 0 < this.throughput ? 1 / this.throughput : 0, Math.floor(1 / (t + e))
                            },
                            set: function () {
                                Oa.log.error('The "systemBandwidth" property is read-only')
                            }
                        }
                    }), Object.defineProperties(this.stats, {
                        bandwidth: {
                            get: function () {
                                return n.bandwidth || 0
                            },
                            enumerable: !0
                        },
                        mediaRequests: {
                            get: function () {
                                return n.masterPlaylistController_.mediaRequests_() || 0
                            },
                            enumerable: !0
                        },
                        mediaRequestsAborted: {
                            get: function () {
                                return n.masterPlaylistController_.mediaRequestsAborted_() || 0
                            },
                            enumerable: !0
                        },
                        mediaRequestsTimedout: {
                            get: function () {
                                return n.masterPlaylistController_.mediaRequestsTimedout_() || 0
                            },
                            enumerable: !0
                        },
                        mediaRequestsErrored: {
                            get: function () {
                                return n.masterPlaylistController_.mediaRequestsErrored_() || 0
                            },
                            enumerable: !0
                        },
                        mediaTransferDuration: {
                            get: function () {
                                return n.masterPlaylistController_.mediaTransferDuration_() || 0
                            },
                            enumerable: !0
                        },
                        mediaBytesTransferred: {
                            get: function () {
                                return n.masterPlaylistController_.mediaBytesTransferred_() || 0
                            },
                            enumerable: !0
                        },
                        mediaSecondsLoaded: {
                            get: function () {
                                return n.masterPlaylistController_.mediaSecondsLoaded_() || 0
                            },
                            enumerable: !0
                        },
                        buffered: {
                            get: function () {
                                return Xd(n.tech_.buffered())
                            },
                            enumerable: !0
                        },
                        currentTime: {
                            get: function () {
                                return n.tech_.currentTime()
                            },
                            enumerable: !0
                        },
                        currentSource: {
                            get: function () {
                                return n.tech_.currentSource_
                            },
                            enumerable: !0
                        },
                        currentTech: {
                            get: function () {
                                return n.tech_.name_
                            },
                            enumerable: !0
                        },
                        duration: {
                            get: function () {
                                return n.tech_.duration()
                            },
                            enumerable: !0
                        },
                        master: {
                            get: function () {
                                return n.playlists.master
                            },
                            enumerable: !0
                        },
                        playerDimensions: {
                            get: function () {
                                return n.tech_.currentDimensions()
                            },
                            enumerable: !0
                        },
                        seekable: {
                            get: function () {
                                return Xd(n.tech_.seekable())
                            },
                            enumerable: !0
                        },
                        timestamp: {
                            get: function () {
                                return Date.now()
                            },
                            enumerable: !0
                        },
                        videoPlaybackQuality: {
                            get: function () {
                                return n.tech_.getVideoPlaybackQuality()
                            },
                            enumerable: !0
                        }
                    }), this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)), this.masterPlaylistController_.on("selectedinitialmedia", function () {
                        var i, t;
                        t = (i = n).playlists, i.representations = function () {
                            return t.master.playlists.filter(function (t) {
                                return !Ld(t)
                            }).map(function (t, e) {
                                return new mp(i, t, t.uri)
                            })
                        }, kp(n)
                    }), this.on(this.masterPlaylistController_, "progress", function () {
                        this.tech_.trigger("progress")
                    }), this.tech_.ready(function () {
                        return n.setupQualityLevels_()
                    }), this.tech_.el() && this.tech_.src(Oa.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
                }
            }, {
                key: "setupQualityLevels_",
                value: function () {
                    var i = this,
                        t = Oa.players[this.tech_.options_.playerId];
                    t && t.qualityLevels && (this.qualityLevels_ = t.qualityLevels(), this.masterPlaylistController_.on("selectedinitialmedia", function () {
                        var e, t;
                        e = i.qualityLevels_, (t = i).representations().forEach(function (t) {
                            e.addQualityLevel(t)
                        }), Sp(e, t.playlists)
                    }), this.playlists.on("mediachange", function () {
                        Sp(i.qualityLevels_, i.playlists)
                    }))
                }
            }, {
                key: "play",
                value: function () {
                    this.masterPlaylistController_.play()
                }
            }, {
                key: "setCurrentTime",
                value: function (t) {
                    this.masterPlaylistController_.setCurrentTime(t)
                }
            }, {
                key: "duration",
                value: function () {
                    return this.masterPlaylistController_.duration()
                }
            }, {
                key: "seekable",
                value: function () {
                    return this.masterPlaylistController_.seekable()
                }
            }, {
                key: "dispose",
                value: function () {
                    this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.masterPlaylistController_ && this.masterPlaylistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(),
                        function t(e, i, n) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, i);
                            if (void 0 === r) {
                                var a = Object.getPrototypeOf(e);
                                return null === a ? void 0 : t(a, i, n)
                            }
                            if ("value" in r) return r.value;
                            var s = r.get;
                            return void 0 !== s ? s.call(n) : void 0
                        }(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "dispose", this).call(this)
                }
            }]), a
        }(),
        Ep = {
            name: "videojs-http-streaming",
            VERSION: "1.2.4",
            canHandleSource: function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    i = Oa.mergeOptions(Oa.options, e);
                return Ep.canPlayType(t.type, i)
            },
            handleSource: function (t, e) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    n = Oa.mergeOptions(Oa.options, i);
                return e.hls = new wp(t, e, n), e.hls.xhr = Rd(), e.hls.src(t.src, t.type), e.hls
            },
            canPlayType: function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    i = Oa.mergeOptions(Oa.options, e).hls.overrideNative,
                    n = Tp(t);
                return n && (!bp.supportsTypeNatively(n) || i) ? "maybe" : ""
            }
        };
    return "undefined" != typeof Oa.MediaSource && "undefined" != typeof Oa.URL || (Oa.MediaSource = Sh, Oa.URL = kh), Sh.supportsNativeMediaSources() && Oa.getTech("Html5").registerSourceHandler(Ep, 0), Oa.HlsHandler = wp, Oa.HlsSourceHandler = Ep, Oa.Hls = bp, Oa.use || Oa.registerComponent("Hls", bp), Oa.options.hls = Oa.options.hls || {}, Oa.registerPlugin ? Oa.registerPlugin("reloadSourceOnError", _p) : Oa.plugin("reloadSourceOnError", _p), Oa
});