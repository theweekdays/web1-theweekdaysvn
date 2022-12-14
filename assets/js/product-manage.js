(()=>{
    var Pr = Object.create;
    var de = Object.defineProperty;
    var kr = Object.getOwnPropertyDescriptor;
    var Ar = Object.getOwnPropertyNames;
    var Ir = Object.getPrototypeOf
      , Hr = Object.prototype.hasOwnProperty;
    var Mr = (t,e,r)=>e in t ? de(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r;
    var Br = t=>de(t, "__esModule", {
        value: !0
    });
    var Rr = (t,e)=>()=>(e || t((e = {
        exports: {}
    }).exports, e),
    e.exports);
    var Dr = (t,e,r)=>{
        if (e && typeof e == "object" || typeof e == "function")
            for (let i of Ar(e))
                !Hr.call(t, i) && i !== "default" && de(t, i, {
                    get: ()=>e[i],
                    enumerable: !(r = kr(e, i)) || r.enumerable
                });
        return t
    }
      , Nr = t=>Dr(Br(de(t != null ? Pr(Ir(t)) : {}, "default", t && t.__esModule && "default"in t ? {
        get: ()=>t.default,
        enumerable: !0
    } : {
        value: t,
        enumerable: !0
    })), t);
    var S = (t,e,r)=>(Mr(t, typeof e != "symbol" ? e + "" : e, r),
    r);
    var Bt = Rr((en,pe)=>{
        var pt, ft, mt, yt, vt, gt, bt, xt, _t, he, Re, wt, Ct, St, K, Et, Lt, Tt, Pt, kt, At, It, Ht, Mt, ue;
        (function(t) {
            var e = typeof global == "object" ? global : typeof self == "object" ? self : typeof this == "object" ? this : {};
            typeof define == "function" && define.amd ? define("tslib", ["exports"], function(i) {
                t(r(e, r(i)))
            }) : typeof pe == "object" && typeof pe.exports == "object" ? t(r(e, r(pe.exports))) : t(r(e));
            function r(i, a) {
                return i !== e && (typeof Object.create == "function" ? Object.defineProperty(i, "__esModule", {
                    value: !0
                }) : i.__esModule = !0),
                function(s, n) {
                    return i[s] = a ? a(s, n) : n
                }
            }
        }
        )(function(t) {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(i, a) {
                i.__proto__ = a
            }
            || function(i, a) {
                for (var s in a)
                    Object.prototype.hasOwnProperty.call(a, s) && (i[s] = a[s])
            }
            ;
            pt = function(i, a) {
                if (typeof a != "function" && a !== null)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                e(i, a);
                function s() {
                    this.constructor = i
                }
                i.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype,
                new s)
            }
            ,
            ft = Object.assign || function(i) {
                for (var a, s = 1, n = arguments.length; s < n; s++) {
                    a = arguments[s];
                    for (var o in a)
                        Object.prototype.hasOwnProperty.call(a, o) && (i[o] = a[o])
                }
                return i
            }
            ,
            mt = function(i, a) {
                var s = {};
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && a.indexOf(n) < 0 && (s[n] = i[n]);
                if (i != null && typeof Object.getOwnPropertySymbols == "function")
                    for (var o = 0, n = Object.getOwnPropertySymbols(i); o < n.length; o++)
                        a.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(i, n[o]) && (s[n[o]] = i[n[o]]);
                return s
            }
            ,
            yt = function(i, a, s, n) {
                var o = arguments.length, l = o < 3 ? a : n === null ? n = Object.getOwnPropertyDescriptor(a, s) : n, c;
                if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                    l = Reflect.decorate(i, a, s, n);
                else
                    for (var h = i.length - 1; h >= 0; h--)
                        (c = i[h]) && (l = (o < 3 ? c(l) : o > 3 ? c(a, s, l) : c(a, s)) || l);
                return o > 3 && l && Object.defineProperty(a, s, l),
                l
            }
            ,
            vt = function(i, a) {
                return function(s, n) {
                    a(s, n, i)
                }
            }
            ,
            gt = function(i, a) {
                if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
                    return Reflect.metadata(i, a)
            }
            ,
            bt = function(i, a, s, n) {
                function o(l) {
                    return l instanceof s ? l : new s(function(c) {
                        c(l)
                    }
                    )
                }
                return new (s || (s = Promise))(function(l, c) {
                    function h(m) {
                        try {
                            p(n.next(m))
                        } catch (g) {
                            c(g)
                        }
                    }
                    function u(m) {
                        try {
                            p(n.throw(m))
                        } catch (g) {
                            c(g)
                        }
                    }
                    function p(m) {
                        m.done ? l(m.value) : o(m.value).then(h, u)
                    }
                    p((n = n.apply(i, a || [])).next())
                }
                )
            }
            ,
            xt = function(i, a) {
                var s = {
                    label: 0,
                    sent: function() {
                        if (l[0] & 1)
                            throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                }, n, o, l, c;
                return c = {
                    next: h(0),
                    throw: h(1),
                    return: h(2)
                },
                typeof Symbol == "function" && (c[Symbol.iterator] = function() {
                    return this
                }
                ),
                c;
                function h(p) {
                    return function(m) {
                        return u([p, m])
                    }
                }
                function u(p) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; s; )
                        try {
                            if (n = 1,
                            o && (l = p[0] & 2 ? o.return : p[0] ? o.throw || ((l = o.return) && l.call(o),
                            0) : o.next) && !(l = l.call(o, p[1])).done)
                                return l;
                            switch (o = 0,
                            l && (p = [p[0] & 2, l.value]),
                            p[0]) {
                            case 0:
                            case 1:
                                l = p;
                                break;
                            case 4:
                                return s.label++,
                                {
                                    value: p[1],
                                    done: !1
                                };
                            case 5:
                                s.label++,
                                o = p[1],
                                p = [0];
                                continue;
                            case 7:
                                p = s.ops.pop(),
                                s.trys.pop();
                                continue;
                            default:
                                if (l = s.trys,
                                !(l = l.length > 0 && l[l.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                                    s = 0;
                                    continue
                                }
                                if (p[0] === 3 && (!l || p[1] > l[0] && p[1] < l[3])) {
                                    s.label = p[1];
                                    break
                                }
                                if (p[0] === 6 && s.label < l[1]) {
                                    s.label = l[1],
                                    l = p;
                                    break
                                }
                                if (l && s.label < l[2]) {
                                    s.label = l[2],
                                    s.ops.push(p);
                                    break
                                }
                                l[2] && s.ops.pop(),
                                s.trys.pop();
                                continue
                            }
                            p = a.call(i, s)
                        } catch (m) {
                            p = [6, m],
                            o = 0
                        } finally {
                            n = l = 0
                        }
                    if (p[0] & 5)
                        throw p[1];
                    return {
                        value: p[0] ? p[1] : void 0,
                        done: !0
                    }
                }
            }
            ,
            _t = function(i, a) {
                for (var s in i)
                    s !== "default" && !Object.prototype.hasOwnProperty.call(a, s) && ue(a, i, s)
            }
            ,
            ue = Object.create ? function(i, a, s, n) {
                n === void 0 && (n = s);
                var o = Object.getOwnPropertyDescriptor(a, s);
                (!o || ("get"in o ? !a.__esModule : o.writable || o.configurable)) && (o = {
                    enumerable: !0,
                    get: function() {
                        return a[s]
                    }
                }),
                Object.defineProperty(i, n, o)
            }
            : function(i, a, s, n) {
                n === void 0 && (n = s),
                i[n] = a[s]
            }
            ,
            he = function(i) {
                var a = typeof Symbol == "function" && Symbol.iterator
                  , s = a && i[a]
                  , n = 0;
                if (s)
                    return s.call(i);
                if (i && typeof i.length == "number")
                    return {
                        next: function() {
                            return i && n >= i.length && (i = void 0),
                            {
                                value: i && i[n++],
                                done: !i
                            }
                        }
                    };
                throw new TypeError(a ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }
            ,
            Re = function(i, a) {
                var s = typeof Symbol == "function" && i[Symbol.iterator];
                if (!s)
                    return i;
                var n = s.call(i), o, l = [], c;
                try {
                    for (; (a === void 0 || a-- > 0) && !(o = n.next()).done; )
                        l.push(o.value)
                } catch (h) {
                    c = {
                        error: h
                    }
                } finally {
                    try {
                        o && !o.done && (s = n.return) && s.call(n)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                return l
            }
            ,
            wt = function() {
                for (var i = [], a = 0; a < arguments.length; a++)
                    i = i.concat(Re(arguments[a]));
                return i
            }
            ,
            Ct = function() {
                for (var i = 0, a = 0, s = arguments.length; a < s; a++)
                    i += arguments[a].length;
                for (var n = Array(i), o = 0, a = 0; a < s; a++)
                    for (var l = arguments[a], c = 0, h = l.length; c < h; c++,
                    o++)
                        n[o] = l[c];
                return n
            }
            ,
            St = function(i, a, s) {
                if (s || arguments.length === 2)
                    for (var n = 0, o = a.length, l; n < o; n++)
                        (l || !(n in a)) && (l || (l = Array.prototype.slice.call(a, 0, n)),
                        l[n] = a[n]);
                return i.concat(l || Array.prototype.slice.call(a))
            }
            ,
            K = function(i) {
                return this instanceof K ? (this.v = i,
                this) : new K(i)
            }
            ,
            Et = function(i, a, s) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var n = s.apply(i, a || []), o, l = [];
                return o = {},
                c("next"),
                c("throw"),
                c("return"),
                o[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                o;
                function c(b) {
                    n[b] && (o[b] = function(C) {
                        return new Promise(function(_, w) {
                            l.push([b, C, _, w]) > 1 || h(b, C)
                        }
                        )
                    }
                    )
                }
                function h(b, C) {
                    try {
                        u(n[b](C))
                    } catch (_) {
                        g(l[0][3], _)
                    }
                }
                function u(b) {
                    b.value instanceof K ? Promise.resolve(b.value.v).then(p, m) : g(l[0][2], b)
                }
                function p(b) {
                    h("next", b)
                }
                function m(b) {
                    h("throw", b)
                }
                function g(b, C) {
                    b(C),
                    l.shift(),
                    l.length && h(l[0][0], l[0][1])
                }
            }
            ,
            Lt = function(i) {
                var a, s;
                return a = {},
                n("next"),
                n("throw", function(o) {
                    throw o
                }),
                n("return"),
                a[Symbol.iterator] = function() {
                    return this
                }
                ,
                a;
                function n(o, l) {
                    a[o] = i[o] ? function(c) {
                        return (s = !s) ? {
                            value: K(i[o](c)),
                            done: o === "return"
                        } : l ? l(c) : c
                    }
                    : l
                }
            }
            ,
            Tt = function(i) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var a = i[Symbol.asyncIterator], s;
                return a ? a.call(i) : (i = typeof he == "function" ? he(i) : i[Symbol.iterator](),
                s = {},
                n("next"),
                n("throw"),
                n("return"),
                s[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                s);
                function n(l) {
                    s[l] = i[l] && function(c) {
                        return new Promise(function(h, u) {
                            c = i[l](c),
                            o(h, u, c.done, c.value)
                        }
                        )
                    }
                }
                function o(l, c, h, u) {
                    Promise.resolve(u).then(function(p) {
                        l({
                            value: p,
                            done: h
                        })
                    }, c)
                }
            }
            ,
            Pt = function(i, a) {
                return Object.defineProperty ? Object.defineProperty(i, "raw", {
                    value: a
                }) : i.raw = a,
                i
            }
            ;
            var r = Object.create ? function(i, a) {
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: a
                })
            }
            : function(i, a) {
                i.default = a
            }
            ;
            kt = function(i) {
                if (i && i.__esModule)
                    return i;
                var a = {};
                if (i != null)
                    for (var s in i)
                        s !== "default" && Object.prototype.hasOwnProperty.call(i, s) && ue(a, i, s);
                return r(a, i),
                a
            }
            ,
            At = function(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }
            ,
            It = function(i, a, s, n) {
                if (s === "a" && !n)
                    throw new TypeError("Private accessor was defined without a getter");
                if (typeof a == "function" ? i !== a || !n : !a.has(i))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return s === "m" ? n : s === "a" ? n.call(i) : n ? n.value : a.get(i)
            }
            ,
            Ht = function(i, a, s, n, o) {
                if (n === "m")
                    throw new TypeError("Private method is not writable");
                if (n === "a" && !o)
                    throw new TypeError("Private accessor was defined without a setter");
                if (typeof a == "function" ? i !== a || !o : !a.has(i))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return n === "a" ? o.call(i, s) : o ? o.value = s : a.set(i, s),
                s
            }
            ,
            Mt = function(i, a) {
                if (a === null || typeof a != "object" && typeof a != "function")
                    throw new TypeError("Cannot use 'in' operator on non-object");
                return typeof i == "function" ? a === i : i.has(a)
            }
            ,
            t("__extends", pt),
            t("__assign", ft),
            t("__rest", mt),
            t("__decorate", yt),
            t("__param", vt),
            t("__metadata", gt),
            t("__awaiter", bt),
            t("__generator", xt),
            t("__exportStar", _t),
            t("__createBinding", ue),
            t("__values", he),
            t("__read", Re),
            t("__spread", wt),
            t("__spreadArrays", Ct),
            t("__spreadArray", St),
            t("__await", K),
            t("__asyncGenerator", Et),
            t("__asyncDelegator", Lt),
            t("__asyncValues", Tt),
            t("__makeTemplateObject", Pt),
            t("__importStar", kt),
            t("__importDefault", At),
            t("__classPrivateFieldGet", It),
            t("__classPrivateFieldSet", Ht),
            t("__classPrivateFieldIn", Mt)
        })
    }
    );
    var Ie = new Map;
    function Or(t, e={}, r=!0) {
        if (typeof t != "string" || !t.trim().length)
            return Promise.reject("Reflow: Endpoint Required");
        if (t = t.replace(/\/+/, ""),
        Ie.has(t))
            return Ie.get(t);
        let i = fetch(Reflow.APIURL + "/stores/" + Reflow.storeID + "/" + t, e).then(async a=>{
            let s = await a.json();
            if (!a.ok) {
                let n = Error(s.error || "HTTP error");
                throw n.status = a.status,
                n.data = s,
                n
            }
            return s
        }
        );
        return r && e.method != "POST" && Ie.set(t, i),
        i
    }
    var k = Or;
    var He = class {
        constructor(e, r={}) {
            S(this, "mockData", null);
            this.node = e,
            this.demoMode = r.demoMode || !1,
            r.mockData && (this.mockData = r.mockData)
        }
        static scan() {
            let e = document.querySelectorAll(`[data-reflow-type=${this.type}]`);
            return Array.from(e).filter(r=>!r.parentNode.closest("[data-reflow-type]")).map(r=>new this(r))
        }
        init() {}
        getAPIEndpoint() {
            return ""
        }
        async fetchData() {
            if (this.mockData)
                return this.mockData;
            let e = this.getAPIEndpoint()
              , r = await k(e);
            return r.error ? (console.error("Reflow:", r.error),
            null) : r
        }
        parseConfigString(e) {
            let r = {};
            for (let i of e.split(","))
                r[i.trim().toLowerCase()] = !0;
            return r
        }
        parseShowString() {
            return this.node.dataset.reflowShow ? this.parseConfigString(this.node.dataset.reflowShow) : {
                full: !0
            }
        }
        isDemoMode() {
            return this.demoMode
        }
        async update() {}
    }
    ;
    S(He, "type", "");
    var R = He;
    function qr(t) {
        let e = document.createElement("div");
        return e.innerHTML = t.trim(),
        e.firstElementChild
    }
    var ht = qr;
    function Ur(t, e=null) {
        return e = e || document,
        t.trim()[0] == "<" ? ht(t) : e.querySelectorAll(t)
    }
    var d = Ur;
    var Be = class extends R {
        constructor(e, r={}) {
            super(e, r);
            r = Object.assign({
                type: "success",
                action: this.hide.bind(this),
                buttonAction: null,
                title: "",
                description: "",
                button: null,
                timeout: 5e3
            }, r),
            this.set(r),
            this.node.innerHTML = `
			<div class="ref-notification-content">
				<div class="ref-notification-title"></div>
				<div class="ref-notification-description"></div>
				<div class="ref-close-button">\xD7</div>
			</div>
		`,
            this.descriptionElement = this.node.querySelector(".ref-notification-description"),
            r.button && (this.button = d('<a class="ref-button"></a>'),
            this.button.textContent = r.button,
            this.node.querySelector(".ref-notification-content").append(this.button)),
            this.hideTimeout = null
        }
        init() {
            this.node.addEventListener("click", this.onClick.bind(this))
        }
        set(e={}) {
            Object.assign(this, e),
            e.timeout === 0 && clearTimeout(this.hideTimeout)
        }
        onClick(e) {
            if (e.target.closest(".ref-close-button")) {
                this.hide();
                return
            }
            if (e.target.closest(".ref-button") && this.buttonAction) {
                this.buttonAction();
                return
            }
            this.action && this.action(this)
        }
        hide() {
            this.node.remove()
        }
        show() {
            Be.scan().forEach(r=>r.node.remove()),
            document.body.append(this.node),
            this.update(),
            this.timeout && this.hideAfter(this.timeout)
        }
        hideAfter(e) {
            clearTimeout(this.hideTimeout),
            this.hideTimeout = setTimeout(()=>{
                this.hide()
            }
            , e)
        }
        update() {
            let e = this.node.querySelector(".ref-notification-title");
            e && (e.textContent = this.title);
            let r = this.node.querySelector(".ref-notification-description");
            return r && (r.textContent = this.description),
            this.node.classList.add("ref-notification", this.type),
            this.button && this.button.classList.add("ref-button-" + this.type),
            this.description || this.node.classList.add("no-description"),
            setTimeout(()=>{
                this.node.style.transform = "translateY(-20px)"
            }
            , 0),
            this.node
        }
    }
      , Me = Be;
    S(Me, "type", "toast");
    var G = Me;
    var ut = class extends R {
        constructor(e, r={}) {
            super(e, r);
            e.innerHTML = `
			<div class="ref-quantity-widget">
				<div class="ref-decrease"><span></span></div>
				<input type="text" value="1"/>
				<div class="ref-increase"><span></span></div>
			</div>
		`,
            this.input = e.querySelector("input"),
            this.inStock = r.inStock,
            this._onQuantityChange = r.onChange
        }
        init() {
            this.node.addEventListener("change", this.onChange.bind(this)),
            this.node.addEventListener("click", this.onClick.bind(this))
        }
        onChange(e) {
            if (e.target === this.input) {
                if (!this.inStock)
                    return;
                let r = Math.max(1, parseInt(e.target.value, 10) || 1);
                if (r = Math.min(r, 999),
                e.target.value = r,
                r == this.getQuantity(r))
                    return;
                this.setQuantity(r),
                this._onQuantityChange && this._onQuantityChange(this);
                return
            }
        }
        async onClick(e) {
            let r = !!e.target.closest(".ref-increase")
              , i = !!e.target.closest(".ref-decrease");
            if (r || i) {
                if (!this.inStock)
                    return;
                let a = this.input
                  , s = parseInt(a.value, 10)
                  , n = this.getMaxQuantity();
                if (r) {
                    if (s >= n)
                        return;
                    s++
                } else if (i) {
                    if (s <= 1)
                        return;
                    s--
                }
                a.value = s,
                this.setQuantity(s),
                this._onQuantityChange && this._onQuantityChange(this)
            }
        }
        getProduct() {
            return this.node.dataset.reflowProduct
        }
        setProduct(e) {
            this.node.dataset.reflowProduct = e
        }
        getQuantity() {
            return this.node.dataset.reflowQuantity || 1
        }
        setQuantity(e=1) {
            this.node.dataset.reflowQuantity = e,
            d(".ref-increase", this.node)[0].classList.remove("inactive"),
            e >= this.getMaxQuantity() && d(".ref-increase", this.node)[0].classList.add("inactive")
        }
        getMaxQuantity() {
            return parseInt(this.node.dataset.reflowMaxQty, 10) || 999
        }
        setMaxQuantity(e=999) {
            this.node.dataset.reflowMaxQty = e
        }
        getVariant() {
            return this.node.dataset.reflowVariant
        }
        setVariant(e) {
            this.node.dataset.reflowVariant = e
        }
        async update(e) {
            return this.input.value = this.getQuantity(),
            this.inStock || this.node.querySelector(".ref-quantity-widget").classList.add("inactive"),
            this.node
        }
    }
      , J = ut;
    function Fr(t, e=100, r=!1) {
        var i = 0
          , a = null;
        return (...s)=>{
            r && !i && t(...s),
            i++,
            clearTimeout(a),
            a = setTimeout(()=>{
                (!r || i > 1) && t(...s),
                i = 0
            }
            , e)
        }
    }
    var ce = Fr;
    function $r(t, e) {
        let r = 0;
        return e.hasDecimal && (t = t / 100,
        r = 2),
        new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: e.code,
            maximumFractionDigits: r
        }).format(t)
    }
    var Y = $r;
    var Rt = Nr(Bt())
      , {__extends: te, __assign: T, __rest: tn, __decorate: rn, __param: an, __metadata: sn, __awaiter: nn, __generator: on, __exportStar: ln, __createBinding: dn, __values: cn, __read: hn, __spread: un, __spreadArrays: pn, __spreadArray: fe, __await: fn, __asyncGenerator: mn, __asyncDelegator: yn, __asyncValues: vn, __makeTemplateObject: gn, __importStar: bn, __importDefault: xn, __classPrivateFieldGet: _n, __classPrivateFieldSet: wn, __classPrivateFieldIn: Cn} = Rt.default;
    var E;
    (function(t) {
        t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE",
        t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT",
        t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT",
        t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE",
        t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE",
        t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE",
        t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON",
        t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON",
        t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON",
        t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON",
        t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",
        t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS",
        t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",
        t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",
        t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR",
        t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR",
        t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",
        t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",
        t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR",
        t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR",
        t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR",
        t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE",
        t[t.INVALID_TAG = 23] = "INVALID_TAG",
        t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME",
        t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG",
        t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
    }
    )(E || (E = {}));
    var A;
    (function(t) {
        t[t.literal = 0] = "literal",
        t[t.argument = 1] = "argument",
        t[t.number = 2] = "number",
        t[t.date = 3] = "date",
        t[t.time = 4] = "time",
        t[t.select = 5] = "select",
        t[t.plural = 6] = "plural",
        t[t.pound = 7] = "pound",
        t[t.tag = 8] = "tag"
    }
    )(A || (A = {}));
    var X;
    (function(t) {
        t[t.number = 0] = "number",
        t[t.dateTime = 1] = "dateTime"
    }
    )(X || (X = {}));
    function De(t) {
        return t.type === A.literal
    }
    function Dt(t) {
        return t.type === A.argument
    }
    function me(t) {
        return t.type === A.number
    }
    function ye(t) {
        return t.type === A.date
    }
    function ve(t) {
        return t.type === A.time
    }
    function ge(t) {
        return t.type === A.select
    }
    function be(t) {
        return t.type === A.plural
    }
    function Nt(t) {
        return t.type === A.pound
    }
    function xe(t) {
        return t.type === A.tag
    }
    function _e(t) {
        return !!(t && typeof t == "object" && t.type === X.number)
    }
    function re(t) {
        return !!(t && typeof t == "object" && t.type === X.dateTime)
    }
    var Ne = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
    var Gr = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
    function Ot(t) {
        var e = {};
        return t.replace(Gr, function(r) {
            var i = r.length;
            switch (r[0]) {
            case "G":
                e.era = i === 4 ? "long" : i === 5 ? "narrow" : "short";
                break;
            case "y":
                e.year = i === 2 ? "2-digit" : "numeric";
                break;
            case "Y":
            case "u":
            case "U":
            case "r":
                throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
                throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
                e.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
                break;
            case "w":
            case "W":
                throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
                e.day = ["numeric", "2-digit"][i - 1];
                break;
            case "D":
            case "F":
            case "g":
                throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
                e.weekday = i === 4 ? "short" : i === 5 ? "narrow" : "short";
                break;
            case "e":
                if (i < 4)
                    throw new RangeError("`e..eee` (weekday) patterns are not supported");
                e.weekday = ["short", "long", "narrow", "short"][i - 4];
                break;
            case "c":
                if (i < 4)
                    throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                e.weekday = ["short", "long", "narrow", "short"][i - 4];
                break;
            case "a":
                e.hour12 = !0;
                break;
            case "b":
            case "B":
                throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
                e.hourCycle = "h12",
                e.hour = ["numeric", "2-digit"][i - 1];
                break;
            case "H":
                e.hourCycle = "h23",
                e.hour = ["numeric", "2-digit"][i - 1];
                break;
            case "K":
                e.hourCycle = "h11",
                e.hour = ["numeric", "2-digit"][i - 1];
                break;
            case "k":
                e.hourCycle = "h24",
                e.hour = ["numeric", "2-digit"][i - 1];
                break;
            case "j":
            case "J":
            case "C":
                throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
                e.minute = ["numeric", "2-digit"][i - 1];
                break;
            case "s":
                e.second = ["numeric", "2-digit"][i - 1];
                break;
            case "S":
            case "A":
                throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
                e.timeZoneName = i < 4 ? "short" : "long";
                break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
                throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
            }
            return ""
        }),
        e
    }
    var qt = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
    function Ut(t) {
        if (t.length === 0)
            throw new Error("Number skeleton cannot be empty");
        for (var e = t.split(qt).filter(function(p) {
            return p.length > 0
        }), r = [], i = 0, a = e; i < a.length; i++) {
            var s = a[i]
              , n = s.split("/");
            if (n.length === 0)
                throw new Error("Invalid number skeleton");
            for (var o = n[0], l = n.slice(1), c = 0, h = l; c < h.length; c++) {
                var u = h[c];
                if (u.length === 0)
                    throw new Error("Invalid number skeleton")
            }
            r.push({
                stem: o,
                options: l
            })
        }
        return r
    }
    function Vr(t) {
        return t.replace(/^(.*?)-/, "")
    }
    var Ft = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g
      , $t = /^(@+)?(\+|#+)?[rs]?$/g
      , zr = /(\*)(0+)|(#+)(0+)|(0+)/g
      , Gt = /^(0+)$/;
    function Vt(t) {
        var e = {};
        return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"),
        t.replace($t, function(r, i, a) {
            return typeof a != "string" ? (e.minimumSignificantDigits = i.length,
            e.maximumSignificantDigits = i.length) : a === "+" ? e.minimumSignificantDigits = i.length : i[0] === "#" ? e.maximumSignificantDigits = i.length : (e.minimumSignificantDigits = i.length,
            e.maximumSignificantDigits = i.length + (typeof a == "string" ? a.length : 0)),
            ""
        }),
        e
    }
    function zt(t) {
        switch (t) {
        case "sign-auto":
            return {
                signDisplay: "auto"
            };
        case "sign-accounting":
        case "()":
            return {
                currencySign: "accounting"
            };
        case "sign-always":
        case "+!":
            return {
                signDisplay: "always"
            };
        case "sign-accounting-always":
        case "()!":
            return {
                signDisplay: "always",
                currencySign: "accounting"
            };
        case "sign-except-zero":
        case "+?":
            return {
                signDisplay: "exceptZero"
            };
        case "sign-accounting-except-zero":
        case "()?":
            return {
                signDisplay: "exceptZero",
                currencySign: "accounting"
            };
        case "sign-never":
        case "+_":
            return {
                signDisplay: "never"
            }
        }
    }
    function jr(t) {
        var e;
        if (t[0] === "E" && t[1] === "E" ? (e = {
            notation: "engineering"
        },
        t = t.slice(2)) : t[0] === "E" && (e = {
            notation: "scientific"
        },
        t = t.slice(1)),
        e) {
            var r = t.slice(0, 2);
            if (r === "+!" ? (e.signDisplay = "always",
            t = t.slice(2)) : r === "+?" && (e.signDisplay = "exceptZero",
            t = t.slice(2)),
            !Gt.test(t))
                throw new Error("Malformed concise eng/scientific notation");
            e.minimumIntegerDigits = t.length
        }
        return e
    }
    function jt(t) {
        var e = {}
          , r = zt(t);
        return r || e
    }
    function Qt(t) {
        for (var e = {}, r = 0, i = t; r < i.length; r++) {
            var a = i[r];
            switch (a.stem) {
            case "percent":
            case "%":
                e.style = "percent";
                continue;
            case "%x100":
                e.style = "percent",
                e.scale = 100;
                continue;
            case "currency":
                e.style = "currency",
                e.currency = a.options[0];
                continue;
            case "group-off":
            case ",_":
                e.useGrouping = !1;
                continue;
            case "precision-integer":
            case ".":
                e.maximumFractionDigits = 0;
                continue;
            case "measure-unit":
            case "unit":
                e.style = "unit",
                e.unit = Vr(a.options[0]);
                continue;
            case "compact-short":
            case "K":
                e.notation = "compact",
                e.compactDisplay = "short";
                continue;
            case "compact-long":
            case "KK":
                e.notation = "compact",
                e.compactDisplay = "long";
                continue;
            case "scientific":
                e = T(T(T({}, e), {
                    notation: "scientific"
                }), a.options.reduce(function(l, c) {
                    return T(T({}, l), jt(c))
                }, {}));
                continue;
            case "engineering":
                e = T(T(T({}, e), {
                    notation: "engineering"
                }), a.options.reduce(function(l, c) {
                    return T(T({}, l), jt(c))
                }, {}));
                continue;
            case "notation-simple":
                e.notation = "standard";
                continue;
            case "unit-width-narrow":
                e.currencyDisplay = "narrowSymbol",
                e.unitDisplay = "narrow";
                continue;
            case "unit-width-short":
                e.currencyDisplay = "code",
                e.unitDisplay = "short";
                continue;
            case "unit-width-full-name":
                e.currencyDisplay = "name",
                e.unitDisplay = "long";
                continue;
            case "unit-width-iso-code":
                e.currencyDisplay = "symbol";
                continue;
            case "scale":
                e.scale = parseFloat(a.options[0]);
                continue;
            case "integer-width":
                if (a.options.length > 1)
                    throw new RangeError("integer-width stems only accept a single optional option");
                a.options[0].replace(zr, function(l, c, h, u, p, m) {
                    if (c)
                        e.minimumIntegerDigits = h.length;
                    else {
                        if (u && p)
                            throw new Error("We currently do not support maximum integer digits");
                        if (m)
                            throw new Error("We currently do not support exact integer digits")
                    }
                    return ""
                });
                continue
            }
            if (Gt.test(a.stem)) {
                e.minimumIntegerDigits = a.stem.length;
                continue
            }
            if (Ft.test(a.stem)) {
                if (a.options.length > 1)
                    throw new RangeError("Fraction-precision stems only accept a single optional option");
                a.stem.replace(Ft, function(l, c, h, u, p, m) {
                    return h === "*" ? e.minimumFractionDigits = c.length : u && u[0] === "#" ? e.maximumFractionDigits = u.length : p && m ? (e.minimumFractionDigits = p.length,
                    e.maximumFractionDigits = p.length + m.length) : (e.minimumFractionDigits = c.length,
                    e.maximumFractionDigits = c.length),
                    ""
                });
                var s = a.options[0];
                s === "w" ? e = T(T({}, e), {
                    trailingZeroDisplay: "stripIfInteger"
                }) : s && (e = T(T({}, e), Vt(s)));
                continue
            }
            if ($t.test(a.stem)) {
                e = T(T({}, e), Vt(a.stem));
                continue
            }
            var n = zt(a.stem);
            n && (e = T(T({}, e), n));
            var o = jr(a.stem);
            o && (e = T(T({}, e), o))
        }
        return e
    }
    var ie = {
        AX: ["H"],
        BQ: ["H"],
        CP: ["H"],
        CZ: ["H"],
        DK: ["H"],
        FI: ["H"],
        ID: ["H"],
        IS: ["H"],
        ML: ["H"],
        NE: ["H"],
        RU: ["H"],
        SE: ["H"],
        SJ: ["H"],
        SK: ["H"],
        AS: ["h", "H"],
        BT: ["h", "H"],
        DJ: ["h", "H"],
        ER: ["h", "H"],
        GH: ["h", "H"],
        IN: ["h", "H"],
        LS: ["h", "H"],
        PG: ["h", "H"],
        PW: ["h", "H"],
        SO: ["h", "H"],
        TO: ["h", "H"],
        VU: ["h", "H"],
        WS: ["h", "H"],
        "001": ["H", "h"],
        AL: ["h", "H", "hB"],
        TD: ["h", "H", "hB"],
        "ca-ES": ["H", "h", "hB"],
        CF: ["H", "h", "hB"],
        CM: ["H", "h", "hB"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        LU: ["H", "h", "hB"],
        NP: ["H", "h", "hB"],
        PF: ["H", "h", "hB"],
        SC: ["H", "h", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        TF: ["H", "h", "hB"],
        VA: ["H", "h", "hB"],
        CY: ["h", "H", "hb", "hB"],
        GR: ["h", "H", "hb", "hB"],
        CO: ["h", "H", "hB", "hb"],
        DO: ["h", "H", "hB", "hb"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        NA: ["h", "H", "hB", "hb"],
        PA: ["h", "H", "hB", "hb"],
        PR: ["h", "H", "hB", "hb"],
        VE: ["h", "H", "hB", "hb"],
        AC: ["H", "h", "hb", "hB"],
        AI: ["H", "h", "hb", "hB"],
        BW: ["H", "h", "hb", "hB"],
        BZ: ["H", "h", "hb", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CX: ["H", "h", "hb", "hB"],
        DG: ["H", "h", "hb", "hB"],
        FK: ["H", "h", "hb", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GI: ["H", "h", "hb", "hB"],
        IE: ["H", "h", "hb", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IO: ["H", "h", "hb", "hB"],
        JE: ["H", "h", "hb", "hB"],
        LT: ["H", "h", "hb", "hB"],
        MK: ["H", "h", "hb", "hB"],
        MN: ["H", "h", "hb", "hB"],
        MS: ["H", "h", "hb", "hB"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        PN: ["H", "h", "hb", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SX: ["H", "h", "hb", "hB"],
        TA: ["H", "h", "hb", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        "af-ZA": ["H", "h", "hB", "hb"],
        AR: ["H", "h", "hB", "hb"],
        CL: ["H", "h", "hB", "hb"],
        CR: ["H", "h", "hB", "hb"],
        CU: ["H", "h", "hB", "hb"],
        EA: ["H", "h", "hB", "hb"],
        "es-BO": ["H", "h", "hB", "hb"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-EC": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "es-PE": ["H", "h", "hB", "hb"],
        GT: ["H", "h", "hB", "hb"],
        HN: ["H", "h", "hB", "hb"],
        IC: ["H", "h", "hB", "hb"],
        KG: ["H", "h", "hB", "hb"],
        KM: ["H", "h", "hB", "hb"],
        LK: ["H", "h", "hB", "hb"],
        MA: ["H", "h", "hB", "hb"],
        MX: ["H", "h", "hB", "hb"],
        NI: ["H", "h", "hB", "hb"],
        PY: ["H", "h", "hB", "hb"],
        SV: ["H", "h", "hB", "hb"],
        UY: ["H", "h", "hB", "hb"],
        JP: ["H", "h", "K"],
        AD: ["H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AT: ["H", "hB"],
        AW: ["H", "hB"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BR: ["H", "hB"],
        CG: ["H", "hB"],
        CI: ["H", "hB"],
        CV: ["H", "hB"],
        DE: ["H", "hB"],
        EE: ["H", "hB"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GF: ["H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GW: ["H", "hB"],
        HR: ["H", "hB"],
        IL: ["H", "hB"],
        IT: ["H", "hB"],
        KZ: ["H", "hB"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        MF: ["H", "hB"],
        MQ: ["H", "hB"],
        MZ: ["H", "hB"],
        NC: ["H", "hB"],
        NL: ["H", "hB"],
        PM: ["H", "hB"],
        PT: ["H", "hB"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        SI: ["H", "hB"],
        SR: ["H", "hB"],
        ST: ["H", "hB"],
        TG: ["H", "hB"],
        TR: ["H", "hB"],
        WF: ["H", "hB"],
        YT: ["H", "hB"],
        BD: ["h", "hB", "H"],
        PK: ["h", "hB", "H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BG: ["H", "hB", "h"],
        CH: ["H", "hB", "h"],
        GE: ["H", "hB", "h"],
        LI: ["H", "hB", "h"],
        ME: ["H", "hB", "h"],
        RS: ["H", "hB", "h"],
        UA: ["H", "hB", "h"],
        UZ: ["H", "hB", "h"],
        XK: ["H", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        BB: ["h", "hb", "H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        CA: ["h", "hb", "H", "hB"],
        DM: ["h", "hb", "H", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        FJ: ["h", "hb", "H", "hB"],
        FM: ["h", "hb", "H", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GM: ["h", "hb", "H", "hB"],
        GU: ["h", "hb", "H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        JM: ["h", "hb", "H", "hB"],
        KI: ["h", "hb", "H", "hB"],
        KN: ["h", "hb", "H", "hB"],
        KY: ["h", "hb", "H", "hB"],
        LC: ["h", "hb", "H", "hB"],
        LR: ["h", "hb", "H", "hB"],
        MH: ["h", "hb", "H", "hB"],
        MP: ["h", "hb", "H", "hB"],
        MW: ["h", "hb", "H", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        SB: ["h", "hb", "H", "hB"],
        SG: ["h", "hb", "H", "hB"],
        SL: ["h", "hb", "H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        SZ: ["h", "hb", "H", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        BO: ["H", "hB", "h", "hb"],
        EC: ["H", "hB", "h", "hb"],
        ES: ["H", "hB", "h", "hb"],
        GQ: ["H", "hB", "h", "hb"],
        PE: ["H", "hB", "h", "hb"],
        AE: ["h", "hB", "hb", "H"],
        "ar-001": ["h", "hB", "hb", "H"],
        BH: ["h", "hB", "hb", "H"],
        DZ: ["h", "hB", "hb", "H"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        HK: ["h", "hB", "hb", "H"],
        IQ: ["h", "hB", "hb", "H"],
        JO: ["h", "hB", "hb", "H"],
        KW: ["h", "hB", "hb", "H"],
        LB: ["h", "hB", "hb", "H"],
        LY: ["h", "hB", "hb", "H"],
        MO: ["h", "hB", "hb", "H"],
        MR: ["h", "hB", "hb", "H"],
        OM: ["h", "hB", "hb", "H"],
        PH: ["h", "hB", "hb", "H"],
        PS: ["h", "hB", "hb", "H"],
        QA: ["h", "hB", "hb", "H"],
        SA: ["h", "hB", "hb", "H"],
        SD: ["h", "hB", "hb", "H"],
        SY: ["h", "hB", "hb", "H"],
        TN: ["h", "hB", "hb", "H"],
        YE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        LA: ["H", "hb", "hB", "h"],
        CN: ["H", "hB", "hb", "h"],
        LV: ["H", "hB", "hb", "h"],
        TL: ["H", "hB", "hb", "h"],
        "zu-ZA": ["H", "hB", "hb", "h"],
        CD: ["hB", "H"],
        IR: ["hB", "H"],
        "hi-IN": ["hB", "h", "H"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "te-IN": ["hB", "h", "H"],
        KH: ["hB", "h", "H", "hb"],
        "ta-IN": ["hB", "h", "hb", "H"],
        BN: ["hb", "hB", "h", "H"],
        MY: ["hb", "hB", "h", "H"],
        ET: ["hB", "hb", "h", "H"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        TW: ["hB", "hb", "h", "H"],
        KE: ["hB", "hb", "H", "h"],
        MM: ["hB", "hb", "H", "h"],
        TZ: ["hB", "hb", "H", "h"],
        UG: ["hB", "hb", "H", "h"]
    };
    function Xt(t, e) {
        for (var r = "", i = 0; i < t.length; i++) {
            var a = t.charAt(i);
            if (a === "j") {
                for (var s = 0; i + 1 < t.length && t.charAt(i + 1) === a; )
                    s++,
                    i++;
                var n = 1 + (s & 1)
                  , o = s < 2 ? 1 : 3 + (s >> 1)
                  , l = "a"
                  , c = Qr(e);
                for ((c == "H" || c == "k") && (o = 0); o-- > 0; )
                    r += l;
                for (; n-- > 0; )
                    r = c + r
            } else
                a === "J" ? r += "H" : r += a
        }
        return r
    }
    function Qr(t) {
        var e = t.hourCycle;
        if (e === void 0 && t.hourCycles && t.hourCycles.length && (e = t.hourCycles[0]),
        e)
            switch (e) {
            case "h24":
                return "k";
            case "h23":
                return "H";
            case "h12":
                return "h";
            case "h11":
                return "K";
            default:
                throw new Error("Invalid hourCycle")
            }
        var r = t.language, i;
        r !== "root" && (i = t.maximize().region);
        var a = ie[i || ""] || ie[r || ""] || ie["".concat(r, "-001")] || ie["001"];
        return a[0]
    }
    var Oe, Xr = new RegExp("^".concat(Ne.source, "*")), Zr = new RegExp("".concat(Ne.source, "*$"));
    function L(t, e) {
        return {
            start: t,
            end: e
        }
    }
    var Wr = !!String.prototype.startsWith
      , Jr = !!String.fromCodePoint
      , Yr = !!Object.fromEntries
      , Kr = !!String.prototype.codePointAt
      , ei = !!String.prototype.trimStart
      , ti = !!String.prototype.trimEnd
      , ri = !!Number.isSafeInteger
      , ii = ri ? Number.isSafeInteger : function(t) {
        return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991
    }
      , qe = !0;
    try {
        Zt = Kt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu"),
        qe = ((Oe = Zt.exec("a")) === null || Oe === void 0 ? void 0 : Oe[0]) === "a"
    } catch (t) {
        qe = !1
    }
    var Zt, Wt = Wr ? function(e, r, i) {
        return e.startsWith(r, i)
    }
    : function(e, r, i) {
        return e.slice(i, i + r.length) === r
    }
    , Ue = Jr ? String.fromCodePoint : function() {
        for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
        for (var i = "", a = e.length, s = 0, n; a > s; ) {
            if (n = e[s++],
            n > 1114111)
                throw RangeError(n + " is not a valid code point");
            i += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(((n -= 65536) >> 10) + 55296, n % 1024 + 56320)
        }
        return i
    }
    , Jt = Yr ? Object.fromEntries : function(e) {
        for (var r = {}, i = 0, a = e; i < a.length; i++) {
            var s = a[i]
              , n = s[0]
              , o = s[1];
            r[n] = o
        }
        return r
    }
    , Yt = Kr ? function(e, r) {
        return e.codePointAt(r)
    }
    : function(e, r) {
        var i = e.length;
        if (!(r < 0 || r >= i)) {
            var a = e.charCodeAt(r), s;
            return a < 55296 || a > 56319 || r + 1 === i || (s = e.charCodeAt(r + 1)) < 56320 || s > 57343 ? a : (a - 55296 << 10) + (s - 56320) + 65536
        }
    }
    , ai = ei ? function(e) {
        return e.trimStart()
    }
    : function(e) {
        return e.replace(Xr, "")
    }
    , si = ti ? function(e) {
        return e.trimEnd()
    }
    : function(e) {
        return e.replace(Zr, "")
    }
    ;
    function Kt(t, e) {
        return new RegExp(t,e)
    }
    var Fe;
    qe ? ($e = Kt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu"),
    Fe = function(e, r) {
        var i;
        $e.lastIndex = r;
        var a = $e.exec(e);
        return (i = a[1]) !== null && i !== void 0 ? i : ""
    }
    ) : Fe = function(e, r) {
        for (var i = []; ; ) {
            var a = Yt(e, r);
            if (a === void 0 || tr(a) || li(a))
                break;
            i.push(a),
            r += a >= 65536 ? 2 : 1
        }
        return Ue.apply(void 0, i)
    }
    ;
    var $e, er = function() {
        function t(e, r) {
            r === void 0 && (r = {}),
            this.message = e,
            this.position = {
                offset: 0,
                line: 1,
                column: 1
            },
            this.ignoreTag = !!r.ignoreTag,
            this.locale = r.locale,
            this.requiresOtherClause = !!r.requiresOtherClause,
            this.shouldParseSkeletons = !!r.shouldParseSkeletons
        }
        return t.prototype.parse = function() {
            if (this.offset() !== 0)
                throw Error("parser can only be used once");
            return this.parseMessage(0, "", !1)
        }
        ,
        t.prototype.parseMessage = function(e, r, i) {
            for (var a = []; !this.isEOF(); ) {
                var s = this.char();
                if (s === 123) {
                    var n = this.parseArgument(e, i);
                    if (n.err)
                        return n;
                    a.push(n.val)
                } else {
                    if (s === 125 && e > 0)
                        break;
                    if (s === 35 && (r === "plural" || r === "selectordinal")) {
                        var o = this.clonePosition();
                        this.bump(),
                        a.push({
                            type: A.pound,
                            location: L(o, this.clonePosition())
                        })
                    } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
                        if (i)
                            break;
                        return this.error(E.UNMATCHED_CLOSING_TAG, L(this.clonePosition(), this.clonePosition()))
                    } else if (s === 60 && !this.ignoreTag && Ge(this.peek() || 0)) {
                        var n = this.parseTag(e, r);
                        if (n.err)
                            return n;
                        a.push(n.val)
                    } else {
                        var n = this.parseLiteral(e, r);
                        if (n.err)
                            return n;
                        a.push(n.val)
                    }
                }
            }
            return {
                val: a,
                err: null
            }
        }
        ,
        t.prototype.parseTag = function(e, r) {
            var i = this.clonePosition();
            this.bump();
            var a = this.parseTagName();
            if (this.bumpSpace(),
            this.bumpIf("/>"))
                return {
                    val: {
                        type: A.literal,
                        value: "<".concat(a, "/>"),
                        location: L(i, this.clonePosition())
                    },
                    err: null
                };
            if (this.bumpIf(">")) {
                var s = this.parseMessage(e + 1, r, !0);
                if (s.err)
                    return s;
                var n = s.val
                  , o = this.clonePosition();
                if (this.bumpIf("</")) {
                    if (this.isEOF() || !Ge(this.char()))
                        return this.error(E.INVALID_TAG, L(o, this.clonePosition()));
                    var l = this.clonePosition()
                      , c = this.parseTagName();
                    return a !== c ? this.error(E.UNMATCHED_CLOSING_TAG, L(l, this.clonePosition())) : (this.bumpSpace(),
                    this.bumpIf(">") ? {
                        val: {
                            type: A.tag,
                            value: a,
                            children: n,
                            location: L(i, this.clonePosition())
                        },
                        err: null
                    } : this.error(E.INVALID_TAG, L(o, this.clonePosition())))
                } else
                    return this.error(E.UNCLOSED_TAG, L(i, this.clonePosition()))
            } else
                return this.error(E.INVALID_TAG, L(i, this.clonePosition()))
        }
        ,
        t.prototype.parseTagName = function() {
            var e = this.offset();
            for (this.bump(); !this.isEOF() && oi(this.char()); )
                this.bump();
            return this.message.slice(e, this.offset())
        }
        ,
        t.prototype.parseLiteral = function(e, r) {
            for (var i = this.clonePosition(), a = ""; ; ) {
                var s = this.tryParseQuote(r);
                if (s) {
                    a += s;
                    continue
                }
                var n = this.tryParseUnquoted(e, r);
                if (n) {
                    a += n;
                    continue
                }
                var o = this.tryParseLeftAngleBracket();
                if (o) {
                    a += o;
                    continue
                }
                break
            }
            var l = L(i, this.clonePosition());
            return {
                val: {
                    type: A.literal,
                    value: a,
                    location: l
                },
                err: null
            }
        }
        ,
        t.prototype.tryParseLeftAngleBracket = function() {
            return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !ni(this.peek() || 0)) ? (this.bump(),
            "<") : null
        }
        ,
        t.prototype.tryParseQuote = function(e) {
            if (this.isEOF() || this.char() !== 39)
                return null;
            switch (this.peek()) {
            case 39:
                return this.bump(),
                this.bump(),
                "'";
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35:
                if (e === "plural" || e === "selectordinal")
                    break;
                return null;
            default:
                return null
            }
            this.bump();
            var r = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
                var i = this.char();
                if (i === 39)
                    if (this.peek() === 39)
                        r.push(39),
                        this.bump();
                    else {
                        this.bump();
                        break
                    }
                else
                    r.push(i);
                this.bump()
            }
            return Ue.apply(void 0, r)
        }
        ,
        t.prototype.tryParseUnquoted = function(e, r) {
            if (this.isEOF())
                return null;
            var i = this.char();
            return i === 60 || i === 123 || i === 35 && (r === "plural" || r === "selectordinal") || i === 125 && e > 0 ? null : (this.bump(),
            Ue(i))
        }
        ,
        t.prototype.parseArgument = function(e, r) {
            var i = this.clonePosition();
            if (this.bump(),
            this.bumpSpace(),
            this.isEOF())
                return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, L(i, this.clonePosition()));
            if (this.char() === 125)
                return this.bump(),
                this.error(E.EMPTY_ARGUMENT, L(i, this.clonePosition()));
            var a = this.parseIdentifierIfPossible().value;
            if (!a)
                return this.error(E.MALFORMED_ARGUMENT, L(i, this.clonePosition()));
            if (this.bumpSpace(),
            this.isEOF())
                return this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, L(i, this.clonePosition()));
            switch (this.char()) {
            case 125:
                return this.bump(),
                {
                    val: {
                        type: A.argument,
                        value: a,
                        location: L(i, this.clonePosition())
                    },
                    err: null
                };
            case 44:
                return this.bump(),
                this.bumpSpace(),
                this.isEOF() ? this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, L(i, this.clonePosition())) : this.parseArgumentOptions(e, r, a, i);
            default:
                return this.error(E.MALFORMED_ARGUMENT, L(i, this.clonePosition()))
            }
        }
        ,
        t.prototype.parseIdentifierIfPossible = function() {
            var e = this.clonePosition()
              , r = this.offset()
              , i = Fe(this.message, r)
              , a = r + i.length;
            this.bumpTo(a);
            var s = this.clonePosition()
              , n = L(e, s);
            return {
                value: i,
                location: n
            }
        }
        ,
        t.prototype.parseArgumentOptions = function(e, r, i, a) {
            var s, n = this.clonePosition(), o = this.parseIdentifierIfPossible().value, l = this.clonePosition();
            switch (o) {
            case "":
                return this.error(E.EXPECT_ARGUMENT_TYPE, L(n, l));
            case "number":
            case "date":
            case "time":
                {
                    this.bumpSpace();
                    var c = null;
                    if (this.bumpIf(",")) {
                        this.bumpSpace();
                        var h = this.clonePosition()
                          , u = this.parseSimpleArgStyleIfPossible();
                        if (u.err)
                            return u;
                        var p = si(u.val);
                        if (p.length === 0)
                            return this.error(E.EXPECT_ARGUMENT_STYLE, L(this.clonePosition(), this.clonePosition()));
                        var m = L(h, this.clonePosition());
                        c = {
                            style: p,
                            styleLocation: m
                        }
                    }
                    var g = this.tryParseArgumentClose(a);
                    if (g.err)
                        return g;
                    var b = L(a, this.clonePosition());
                    if (c && Wt(c == null ? void 0 : c.style, "::", 0)) {
                        var C = ai(c.style.slice(2));
                        if (o === "number") {
                            var u = this.parseNumberSkeletonFromString(C, c.styleLocation);
                            return u.err ? u : {
                                val: {
                                    type: A.number,
                                    value: i,
                                    location: b,
                                    style: u.val
                                },
                                err: null
                            }
                        } else {
                            if (C.length === 0)
                                return this.error(E.EXPECT_DATE_TIME_SKELETON, b);
                            var _ = C;
                            this.locale && (_ = Xt(C, this.locale));
                            var p = {
                                type: X.dateTime,
                                pattern: _,
                                location: c.styleLocation,
                                parsedOptions: this.shouldParseSkeletons ? Ot(_) : {}
                            }
                              , w = o === "date" ? A.date : A.time;
                            return {
                                val: {
                                    type: w,
                                    value: i,
                                    location: b,
                                    style: p
                                },
                                err: null
                            }
                        }
                    }
                    return {
                        val: {
                            type: o === "number" ? A.number : o === "date" ? A.date : A.time,
                            value: i,
                            location: b,
                            style: (s = c == null ? void 0 : c.style) !== null && s !== void 0 ? s : null
                        },
                        err: null
                    }
                }
            case "plural":
            case "selectordinal":
            case "select":
                {
                    var I = this.clonePosition();
                    if (this.bumpSpace(),
                    !this.bumpIf(","))
                        return this.error(E.EXPECT_SELECT_ARGUMENT_OPTIONS, L(I, T({}, I)));
                    this.bumpSpace();
                    var U = this.parseIdentifierIfPossible()
                      , O = 0;
                    if (o !== "select" && U.value === "offset") {
                        if (!this.bumpIf(":"))
                            return this.error(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, L(this.clonePosition(), this.clonePosition()));
                        this.bumpSpace();
                        var u = this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, E.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                        if (u.err)
                            return u;
                        this.bumpSpace(),
                        U = this.parseIdentifierIfPossible(),
                        O = u.val
                    }
                    var M = this.tryParsePluralOrSelectOptions(e, o, r, U);
                    if (M.err)
                        return M;
                    var g = this.tryParseArgumentClose(a);
                    if (g.err)
                        return g;
                    var B = L(a, this.clonePosition());
                    return o === "select" ? {
                        val: {
                            type: A.select,
                            value: i,
                            options: Jt(M.val),
                            location: B
                        },
                        err: null
                    } : {
                        val: {
                            type: A.plural,
                            value: i,
                            options: Jt(M.val),
                            offset: O,
                            pluralType: o === "plural" ? "cardinal" : "ordinal",
                            location: B
                        },
                        err: null
                    }
                }
            default:
                return this.error(E.INVALID_ARGUMENT_TYPE, L(n, l))
            }
        }
        ,
        t.prototype.tryParseArgumentClose = function(e) {
            return this.isEOF() || this.char() !== 125 ? this.error(E.EXPECT_ARGUMENT_CLOSING_BRACE, L(e, this.clonePosition())) : (this.bump(),
            {
                val: !0,
                err: null
            })
        }
        ,
        t.prototype.parseSimpleArgStyleIfPossible = function() {
            for (var e = 0, r = this.clonePosition(); !this.isEOF(); ) {
                var i = this.char();
                switch (i) {
                case 39:
                    {
                        this.bump();
                        var a = this.clonePosition();
                        if (!this.bumpUntil("'"))
                            return this.error(E.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, L(a, this.clonePosition()));
                        this.bump();
                        break
                    }
                case 123:
                    {
                        e += 1,
                        this.bump();
                        break
                    }
                case 125:
                    {
                        if (e > 0)
                            e -= 1;
                        else
                            return {
                                val: this.message.slice(r.offset, this.offset()),
                                err: null
                            };
                        break
                    }
                default:
                    this.bump();
                    break
                }
            }
            return {
                val: this.message.slice(r.offset, this.offset()),
                err: null
            }
        }
        ,
        t.prototype.parseNumberSkeletonFromString = function(e, r) {
            var i = [];
            try {
                i = Ut(e)
            } catch (a) {
                return this.error(E.INVALID_NUMBER_SKELETON, r)
            }
            return {
                val: {
                    type: X.number,
                    tokens: i,
                    location: r,
                    parsedOptions: this.shouldParseSkeletons ? Qt(i) : {}
                },
                err: null
            }
        }
        ,
        t.prototype.tryParsePluralOrSelectOptions = function(e, r, i, a) {
            for (var s, n = !1, o = [], l = new Set, c = a.value, h = a.location; ; ) {
                if (c.length === 0) {
                    var u = this.clonePosition();
                    if (r !== "select" && this.bumpIf("=")) {
                        var p = this.tryParseDecimalInteger(E.EXPECT_PLURAL_ARGUMENT_SELECTOR, E.INVALID_PLURAL_ARGUMENT_SELECTOR);
                        if (p.err)
                            return p;
                        h = L(u, this.clonePosition()),
                        c = this.message.slice(u.offset, this.offset())
                    } else
                        break
                }
                if (l.has(c))
                    return this.error(r === "select" ? E.DUPLICATE_SELECT_ARGUMENT_SELECTOR : E.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, h);
                c === "other" && (n = !0),
                this.bumpSpace();
                var m = this.clonePosition();
                if (!this.bumpIf("{"))
                    return this.error(r === "select" ? E.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : E.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, L(this.clonePosition(), this.clonePosition()));
                var g = this.parseMessage(e + 1, r, i);
                if (g.err)
                    return g;
                var b = this.tryParseArgumentClose(m);
                if (b.err)
                    return b;
                o.push([c, {
                    value: g.val,
                    location: L(m, this.clonePosition())
                }]),
                l.add(c),
                this.bumpSpace(),
                s = this.parseIdentifierIfPossible(),
                c = s.value,
                h = s.location
            }
            return o.length === 0 ? this.error(r === "select" ? E.EXPECT_SELECT_ARGUMENT_SELECTOR : E.EXPECT_PLURAL_ARGUMENT_SELECTOR, L(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !n ? this.error(E.MISSING_OTHER_CLAUSE, L(this.clonePosition(), this.clonePosition())) : {
                val: o,
                err: null
            }
        }
        ,
        t.prototype.tryParseDecimalInteger = function(e, r) {
            var i = 1
              , a = this.clonePosition();
            this.bumpIf("+") || this.bumpIf("-") && (i = -1);
            for (var s = !1, n = 0; !this.isEOF(); ) {
                var o = this.char();
                if (o >= 48 && o <= 57)
                    s = !0,
                    n = n * 10 + (o - 48),
                    this.bump();
                else
                    break
            }
            var l = L(a, this.clonePosition());
            return s ? (n *= i,
            ii(n) ? {
                val: n,
                err: null
            } : this.error(r, l)) : this.error(e, l)
        }
        ,
        t.prototype.offset = function() {
            return this.position.offset
        }
        ,
        t.prototype.isEOF = function() {
            return this.offset() === this.message.length
        }
        ,
        t.prototype.clonePosition = function() {
            return {
                offset: this.position.offset,
                line: this.position.line,
                column: this.position.column
            }
        }
        ,
        t.prototype.char = function() {
            var e = this.position.offset;
            if (e >= this.message.length)
                throw Error("out of bound");
            var r = Yt(this.message, e);
            if (r === void 0)
                throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            return r
        }
        ,
        t.prototype.error = function(e, r) {
            return {
                val: null,
                err: {
                    kind: e,
                    message: this.message,
                    location: r
                }
            }
        }
        ,
        t.prototype.bump = function() {
            if (!this.isEOF()) {
                var e = this.char();
                e === 10 ? (this.position.line += 1,
                this.position.column = 1,
                this.position.offset += 1) : (this.position.column += 1,
                this.position.offset += e < 65536 ? 1 : 2)
            }
        }
        ,
        t.prototype.bumpIf = function(e) {
            if (Wt(this.message, e, this.offset())) {
                for (var r = 0; r < e.length; r++)
                    this.bump();
                return !0
            }
            return !1
        }
        ,
        t.prototype.bumpUntil = function(e) {
            var r = this.offset()
              , i = this.message.indexOf(e, r);
            return i >= 0 ? (this.bumpTo(i),
            !0) : (this.bumpTo(this.message.length),
            !1)
        }
        ,
        t.prototype.bumpTo = function(e) {
            if (this.offset() > e)
                throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
            for (e = Math.min(e, this.message.length); ; ) {
                var r = this.offset();
                if (r === e)
                    break;
                if (r > e)
                    throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                if (this.bump(),
                this.isEOF())
                    break
            }
        }
        ,
        t.prototype.bumpSpace = function() {
            for (; !this.isEOF() && tr(this.char()); )
                this.bump()
        }
        ,
        t.prototype.peek = function() {
            if (this.isEOF())
                return null;
            var e = this.char()
              , r = this.offset()
              , i = this.message.charCodeAt(r + (e >= 65536 ? 2 : 1));
            return i != null ? i : null
        }
        ,
        t
    }();
    function Ge(t) {
        return t >= 97 && t <= 122 || t >= 65 && t <= 90
    }
    function ni(t) {
        return Ge(t) || t === 47
    }
    function oi(t) {
        return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039
    }
    function tr(t) {
        return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233
    }
    function li(t) {
        return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094
    }
    function Ve(t) {
        t.forEach(function(e) {
            if (delete e.location,
            ge(e) || be(e))
                for (var r in e.options)
                    delete e.options[r].location,
                    Ve(e.options[r].value);
            else
                me(e) && _e(e.style) || (ye(e) || ve(e)) && re(e.style) ? delete e.style.location : xe(e) && Ve(e.children)
        })
    }
    function ae(t, e) {
        e === void 0 && (e = {}),
        e = T({
            shouldParseSkeletons: !0,
            requiresOtherClause: !0
        }, e);
        var r = new er(t,e).parse();
        if (r.err) {
            var i = SyntaxError(E[r.err.kind]);
            throw i.location = r.err.location,
            i.originalMessage = r.err.message,
            i
        }
        return (e == null ? void 0 : e.captureLocation) || Ve(r.val),
        r.val
    }
    function se(t, e) {
        var r = e && e.cache ? e.cache : fi
          , i = e && e.serializer ? e.serializer : pi
          , a = e && e.strategy ? e.strategy : ci;
        return a(t, {
            cache: r,
            serializer: i
        })
    }
    function di(t) {
        return t == null || typeof t == "number" || typeof t == "boolean"
    }
    function rr(t, e, r, i) {
        var a = di(i) ? i : r(i)
          , s = e.get(a);
        return typeof s == "undefined" && (s = t.call(this, i),
        e.set(a, s)),
        s
    }
    function ir(t, e, r) {
        var i = Array.prototype.slice.call(arguments, 3)
          , a = r(i)
          , s = e.get(a);
        return typeof s == "undefined" && (s = t.apply(this, i),
        e.set(a, s)),
        s
    }
    function ze(t, e, r, i, a) {
        return r.bind(e, t, i, a)
    }
    function ci(t, e) {
        var r = t.length === 1 ? rr : ir;
        return ze(t, this, r, e.cache.create(), e.serializer)
    }
    function hi(t, e) {
        return ze(t, this, ir, e.cache.create(), e.serializer)
    }
    function ui(t, e) {
        return ze(t, this, rr, e.cache.create(), e.serializer)
    }
    var pi = function() {
        return JSON.stringify(arguments)
    };
    function je() {
        this.cache = Object.create(null)
    }
    je.prototype.get = function(t) {
        return this.cache[t]
    }
    ;
    je.prototype.set = function(t, e) {
        this.cache[t] = e
    }
    ;
    var fi = {
        create: function() {
            return new je
        }
    }
      , we = {
        variadic: hi,
        monadic: ui
    };
    var Z;
    (function(t) {
        t.MISSING_VALUE = "MISSING_VALUE",
        t.INVALID_VALUE = "INVALID_VALUE",
        t.MISSING_INTL_API = "MISSING_INTL_API"
    }
    )(Z || (Z = {}));
    var ne = function(t) {
        te(e, t);
        function e(r, i, a) {
            var s = t.call(this, r) || this;
            return s.code = i,
            s.originalMessage = a,
            s
        }
        return e.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
        }
        ,
        e
    }(Error);
    var Qe = function(t) {
        te(e, t);
        function e(r, i, a, s) {
            return t.call(this, 'Invalid values for "'.concat(r, '": "').concat(i, '". Options are "').concat(Object.keys(a).join('", "'), '"'), Z.INVALID_VALUE, s) || this
        }
        return e
    }(ne);
    var ar = function(t) {
        te(e, t);
        function e(r, i, a) {
            return t.call(this, 'Value for "'.concat(r, '" must be of type ').concat(i), Z.INVALID_VALUE, a) || this
        }
        return e
    }(ne);
    var sr = function(t) {
        te(e, t);
        function e(r, i) {
            return t.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(i, '"'), Z.MISSING_VALUE, i) || this
        }
        return e
    }(ne);
    var N;
    (function(t) {
        t[t.literal = 0] = "literal",
        t[t.object = 1] = "object"
    }
    )(N || (N = {}));
    function mi(t) {
        return t.length < 2 ? t : t.reduce(function(e, r) {
            var i = e[e.length - 1];
            return !i || i.type !== N.literal || r.type !== N.literal ? e.push(r) : i.value += r.value,
            e
        }, [])
    }
    function yi(t) {
        return typeof t == "function"
    }
    function oe(t, e, r, i, a, s, n) {
        if (t.length === 1 && De(t[0]))
            return [{
                type: N.literal,
                value: t[0].value
            }];
        for (var o = [], l = 0, c = t; l < c.length; l++) {
            var h = c[l];
            if (De(h)) {
                o.push({
                    type: N.literal,
                    value: h.value
                });
                continue
            }
            if (Nt(h)) {
                typeof s == "number" && o.push({
                    type: N.literal,
                    value: r.getNumberFormat(e).format(s)
                });
                continue
            }
            var u = h.value;
            if (!(a && u in a))
                throw new sr(u,n);
            var p = a[u];
            if (Dt(h)) {
                (!p || typeof p == "string" || typeof p == "number") && (p = typeof p == "string" || typeof p == "number" ? String(p) : ""),
                o.push({
                    type: typeof p == "string" ? N.literal : N.object,
                    value: p
                });
                continue
            }
            if (ye(h)) {
                var m = typeof h.style == "string" ? i.date[h.style] : re(h.style) ? h.style.parsedOptions : void 0;
                o.push({
                    type: N.literal,
                    value: r.getDateTimeFormat(e, m).format(p)
                });
                continue
            }
            if (ve(h)) {
                var m = typeof h.style == "string" ? i.time[h.style] : re(h.style) ? h.style.parsedOptions : i.time.medium;
                o.push({
                    type: N.literal,
                    value: r.getDateTimeFormat(e, m).format(p)
                });
                continue
            }
            if (me(h)) {
                var m = typeof h.style == "string" ? i.number[h.style] : _e(h.style) ? h.style.parsedOptions : void 0;
                m && m.scale && (p = p * (m.scale || 1)),
                o.push({
                    type: N.literal,
                    value: r.getNumberFormat(e, m).format(p)
                });
                continue
            }
            if (xe(h)) {
                var g = h.children
                  , b = h.value
                  , C = a[b];
                if (!yi(C))
                    throw new ar(b,"function",n);
                var _ = oe(g, e, r, i, a, s)
                  , w = C(_.map(function(O) {
                    return O.value
                }));
                Array.isArray(w) || (w = [w]),
                o.push.apply(o, w.map(function(O) {
                    return {
                        type: typeof O == "string" ? N.literal : N.object,
                        value: O
                    }
                }))
            }
            if (ge(h)) {
                var I = h.options[p] || h.options.other;
                if (!I)
                    throw new Qe(h.value,p,Object.keys(h.options),n);
                o.push.apply(o, oe(I.value, e, r, i, a));
                continue
            }
            if (be(h)) {
                var I = h.options["=".concat(p)];
                if (!I) {
                    if (!Intl.PluralRules)
                        throw new ne(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Z.MISSING_INTL_API,n);
                    var U = r.getPluralRules(e, {
                        type: h.pluralType
                    }).select(p - (h.offset || 0));
                    I = h.options[U] || h.options.other
                }
                if (!I)
                    throw new Qe(h.value,p,Object.keys(h.options),n);
                o.push.apply(o, oe(I.value, e, r, i, a, p - (h.offset || 0)));
                continue
            }
        }
        return mi(o)
    }
    function vi(t, e) {
        return e ? T(T(T({}, t || {}), e || {}), Object.keys(t).reduce(function(r, i) {
            return r[i] = T(T({}, t[i]), e[i] || {}),
            r
        }, {})) : t
    }
    function gi(t, e) {
        return e ? Object.keys(t).reduce(function(r, i) {
            return r[i] = vi(t[i], e[i]),
            r
        }, T({}, t)) : t
    }
    function Xe(t) {
        return {
            create: function() {
                return {
                    get: function(e) {
                        return t[e]
                    },
                    set: function(e, r) {
                        t[e] = r
                    }
                }
            }
        }
    }
    function bi(t) {
        return t === void 0 && (t = {
            number: {},
            dateTime: {},
            pluralRules: {}
        }),
        {
            getNumberFormat: se(function() {
                for (var e, r = [], i = 0; i < arguments.length; i++)
                    r[i] = arguments[i];
                return new ((e = Intl.NumberFormat).bind.apply(e, fe([void 0], r, !1)))
            }, {
                cache: Xe(t.number),
                strategy: we.variadic
            }),
            getDateTimeFormat: se(function() {
                for (var e, r = [], i = 0; i < arguments.length; i++)
                    r[i] = arguments[i];
                return new ((e = Intl.DateTimeFormat).bind.apply(e, fe([void 0], r, !1)))
            }, {
                cache: Xe(t.dateTime),
                strategy: we.variadic
            }),
            getPluralRules: se(function() {
                for (var e, r = [], i = 0; i < arguments.length; i++)
                    r[i] = arguments[i];
                return new ((e = Intl.PluralRules).bind.apply(e, fe([void 0], r, !1)))
            }, {
                cache: Xe(t.pluralRules),
                strategy: we.variadic
            })
        }
    }
    var nr = function() {
        function t(e, r, i, a) {
            var s = this;
            if (r === void 0 && (r = t.defaultLocale),
            this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {}
            },
            this.format = function(n) {
                var o = s.formatToParts(n);
                if (o.length === 1)
                    return o[0].value;
                var l = o.reduce(function(c, h) {
                    return !c.length || h.type !== N.literal || typeof c[c.length - 1] != "string" ? c.push(h.value) : c[c.length - 1] += h.value,
                    c
                }, []);
                return l.length <= 1 ? l[0] || "" : l
            }
            ,
            this.formatToParts = function(n) {
                return oe(s.ast, s.locales, s.formatters, s.formats, n, void 0, s.message)
            }
            ,
            this.resolvedOptions = function() {
                var n;
                return {
                    locale: ((n = s.resolvedLocale) === null || n === void 0 ? void 0 : n.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
                }
            }
            ,
            this.getAst = function() {
                return s.ast
            }
            ,
            this.locales = r,
            this.resolvedLocale = t.resolveLocale(r),
            typeof e == "string") {
                if (this.message = e,
                !t.__parse)
                    throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                this.ast = t.__parse(e, {
                    ignoreTag: a == null ? void 0 : a.ignoreTag,
                    locale: this.resolvedLocale
                })
            } else
                this.ast = e;
            if (!Array.isArray(this.ast))
                throw new TypeError("A message must be provided as a String or AST.");
            this.formats = gi(t.formats, i),
            this.formatters = a && a.formatters || bi(this.formatterCache)
        }
        return Object.defineProperty(t, "defaultLocale", {
            get: function() {
                return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale),
                t.memoizedDefaultLocale
            },
            enumerable: !1,
            configurable: !0
        }),
        t.memoizedDefaultLocale = null,
        t.resolveLocale = function(e) {
            if (typeof Intl.Locale != "undefined") {
                var r = Intl.NumberFormat.supportedLocalesOf(e);
                return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof e == "string" ? e : e[0])
            }
        }
        ,
        t.__parse = ae,
        t.formats = {
            number: {
                integer: {
                    maximumFractionDigits: 0
                },
                currency: {
                    style: "currency"
                },
                percent: {
                    style: "percent"
                }
            },
            date: {
                short: {
                    month: "numeric",
                    day: "numeric",
                    year: "2-digit"
                },
                medium: {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                },
                long: {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                },
                full: {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            },
            time: {
                short: {
                    hour: "numeric",
                    minute: "numeric"
                },
                medium: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                },
                long: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                },
                full: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                }
            }
        },
        t
    }();
    var or = nr;
    var xi = ["add_to_cart.prompt_personalization_text"];
    function v(t, e={}) {
        let r = Reflow.locales;
        if (!r)
            throw new Error("Reflow: Missing locale JSON");
        t = t.toLowerCase();
        let i = r[t]
          , a = r.locale;
        if (!a || !i)
            return console.error("Reflow: Unable to resolve locale string with id '" + t + "'"),
            "";
        try {
            return new or(i,a).format(e)
        } catch (s) {
            return console.error("Reflow: Unable to resolve IntlMessageFormat with id '" + t + "'"),
            ""
        }
    }
    function y(t, e={}) {
        let r = document.createElement("div");
        return r.innerText = v(t, e),
        r.innerHTML
    }
    function lr(t) {
        let e = Reflow.locales
          , r = {}
          , i = "";
        if (!t.locale)
            return console.error("Reflow: Localization - Missing locale in localization JSON"),
            {};
        for (let a in e)
            t[a] || (i += a + ", ");
        i.length && (i = i.slice(0, -2),
        console.info("Reflow: Localization - The following keys are missing form the provided localization JSON. English language version will be used for the respective phrases instead. [" + i + "]"));
        for (let a in t) {
            if (!e[a] && !xi.includes(a)) {
                console.error('Reflow: Localization - Unsupported key "' + a + '" in localization JSON');
                continue
            }
            let s;
            try {
                s = ae(t[a])
            } catch (o) {
                console.error(`Reflow: Localization - Invalid ICU Message syntax for "${a}". English language version will be used instead.`);
                continue
            }
            let n = s.filter(o=>o.type == 1).map(o=>o.value);
            if (n.length) {
                let o = ae(e[a]).filter(c=>c.type == 1).map(c=>c.value)
                  , l = n.filter(c=>!o.includes(c));
                if (l.length) {
                    console.error(`Reflow: Localization - Unsupported property {${l[0]}} in "${a}". English language version will be used instead.`);
                    continue
                }
            }
            r[a] = t[a]
        }
        return r
    }
    function $(t, e=v("error")) {
        let r = new G(d('<div data-reflow-type="toast"></div>'),{
            type: "error",
            title: e,
            description: t
        });
        r.init(),
        r.show()
    }
    function j(t, e) {
        var a;
        let i = (((a = t == null ? void 0 : t.data) == null ? void 0 : a.errors) || {})[e] || "";
        return t.data.errorCode && (typeof t.data.errorCode == "string" ? i = v(t.data.errorCode) : i = v(t.data.errorCode.code, t.data.errorCode.formats)),
        i
    }
    var Ce = (t,e,r)=>{
        document.dispatchEvent(new Event(t), e),
        "BroadcastChannel"in window && new BroadcastChannel("reflow").postMessage({
            event: t,
            data: r
        })
    }
      , Q = (t,e)=>{
        if (document.addEventListener(t, e),
        "BroadcastChannel"in window) {
            let r = new BroadcastChannel("reflow");
            r.onmessage = i=>{
                i.data.event && i.data.event == t && e()
            }
        }
    }
    ;
    var q = class extends R {
        constructor(e, r) {
            super(e, r);
            S(this, "_state", null);
            S(this, "step", "cart");
            S(this, "activeDeliveryTab", "pickup");
            S(this, "shippingMethodIndex", -1);
            S(this, "chosenStoreLocation", -1);
            S(this, "shippingAddress", {});
            S(this, "billingAddress", {});
            S(this, "digitalAddress", {});
            S(this, "billingVisible", !1);
            S(this, "paypalButtonsInitialized", !1);
            S(this, "paypalErrorText", null);
            S(this, "backendUpdateTimeout", null);
            S(this, "pendingBackendUpdates", {});
            e.innerHTML = `
			<div class="reflow-shopping-cart" style="display:none">

				<div class="ref-loading-overlay"></div>
				<div class="ref-message"></div>

				<div class="ref-cart">
					<div class="ref-heading">${y("shopping_cart")}</div>
					<div class="ref-th">
						<div class="ref-product-col">${y("product")}</div>
						<div class="ref-price-col">${y("price")}</div>
						<div class="ref-quantity-col">${y("quantity")}</div>
						<div class="ref-total-col">${y("total")}</div>
					</div>
					<div class="ref-cart-table"></div>
					<div class="ref-footer">
						<div class="ref-links"></div>
						<div class="ref-totals">
							<div class="ref-subtotal"></div>
							<form class="ref-accept-terms">
								<label>
									<input type="checkbox" id="ref-terms-agreement" required data-state-src="accept-terms">
									<span class="ref-terms-agreement-text"></span>
								</label>
							</form>
							<div class="ref-row ref-checkout-buttons">
								<div class="ref-paypal-express-checkout-holder"></div>
								<div class="ref-button ref-standard-checkout-button">${y("cart.checkout")}</div>
							</div>
						</div>
					</div>
				</div>

				<div class="ref-checkout">
					<div class="ref-checkout-content">
						<form class="ref-details">
							<div class="ref-back">\u2190 ${y("cart.back_to_cart")}</div>
							<div class="ref-heading">${y("cart.customer_details")}</div>
							<label>
								<span>${y("email")}</span>
								<input type="email" name="email" id="ref-field-email" class="ref-form-control" value="" required data-state-src="email" />
								<div class="ref-validation-error"></div>
							</label>
							<label class="ref-phone-input">
								<span>${y("phone")}</span>
								<input type="tel" name="phone" id="ref-field-phone" class="ref-form-control" value="" pattern="[0-9\\+\\- ]{5,30}" placeholder="+1234567890" required  data-state-src="phone" />
								<div class="ref-validation-error"></div>
							</label>
							<label class="ref-customer-name-input">
								<span>${y("name")}</span>
								<input type="text" name="customer-name" class="ref-form-control" value="" data-state-src="customer-name" minlength="5" required />
								<div class="ref-validation-error"></div>
							</label>

							<fieldset class="ref-digital-delivery" disabled>
								<div class="ref-digital-address-holder"></div>
								<input type="hidden" name="delivery-method" value="digital" />
							</fieldset>


							<div class="ref-heading ref-heading-delivery">${y("delivery")}</div>
							<div class="ref-delivery-unavailable"></div>
							<div class="ref-delivery-card">

								<div class="ref-tab ref-local-pickup-tab" data-ref-delivery="pickup">
									<label class="ref-tab-toggle">
										<input type="radio" value="pickup" name="delivery-method" required />
										<div class="ref-heading-small">${y("pickup_at_store")}</div>
									</label>
									<fieldset class="ref-tab-content">
										<div class="ref-heading-small">${y("cart.select_store")}</div>
										<div class="ref-locations ref-error-parent"></div>

										<div class="ref-billing-container">
											<div class="ref-button ref-add-billing">${y("cart.add_billing")}</div>

											<fieldset class="ref-billing-address" disabled>
												<div class="ref-row">
													<div class="ref-heading-small">${y("billing_address")}</div>
													<div class="ref-button ref-remove-billing">${y("remove")}</div>
												</div>
												<div class="ref-billing-address-holder"></div>
											</fieldset>
										</div>
									</fieldset>
								</div>

								<div class="ref-tab ref-shipping-tab" data-ref-delivery="shipping">
									<label class="ref-tab-toggle">
										<input type="radio" value="shipping" name="delivery-method" required />
										<div class="ref-heading-small">${y("cart.deliver_to_address")}</div>
									</label>
									<fieldset class="ref-tab-content">
										<div class="ref-heading-small">${y("shipping_address")}</div>
										<div class="ref-shipping-address-holder"></div>

										<div class="ref-billing-container">
											<div class="ref-button ref-add-billing">${y("cart.add_billing")}</div>

											<fieldset class="ref-billing-address" disabled>
												<div class="ref-row">
													<div class="ref-heading-small">${y("billing_address")}</div>
													<div class="ref-button ref-remove-billing">${y("remove")}</div>
												</div>
												<div class="ref-billing-address-holder"></div>
											</fieldset>
										</div>
									
										<div class="ref-heading-shipping-methods ref-heading-small">${y("shipping_method")}</div>
										<div class="ref-shipping-methods ref-error-parent"></div>

									</fieldset>
								</div>
							
							</div>

							<div class="ref-tax-note">
								<hr>

								<div class="ref-field-collapsible open">
									<span class="ref-field-toggle">
										<span class="ref-field-toggle-title">${y("cart.tax_exemption_add")}</span>
									</span>
									<div class="ref-collapse">
										<div class="ref-tax-exemption-file">
											<div class="ref-old-tax-file">
												<a href="#" class="ref-tax-file-dl">${y("cart.tax_exemption_file")}</a>
												<span class="ref-remove-tax-file">${y("remove")}</span>
											</div>
											<label class="ref-new-tax-file">
												<span class="ref-tax-file-label">${y("cart.tax_exemption_file_prompt")}</span>
												<input type="file" name="tax-exemption-file" id="ref-field-exemption-file" class="ref-form-control" accept=".doc,.docx,.pdf,.jpg,.jpeg,.png" />
												<div class="ref-validation-error"></div>
											</label>
										</div>
										<label class="ref-tax-exemption-text">
											<span>${y("cart.tax_exemption_number_prompt")}</span>
											<input type="text" name="tax-exemption-text" id="ref-field-exemption-text" class="ref-form-control" maxlength="30" />
											<div class="ref-validation-error"></div>
										</label>
									</div>
								</div>
							</div>

							<hr />

							<div class="ref-field-collapsible ref-note-to-seller open">
								<span class="ref-field-toggle">
									<span class="ref-field-toggle-title">${y("cart.note_to_seller")}</span>
								</span>
								<label class="ref-collapse">
									<textarea id="ref-field-note-seller" class="ref-form-control" name="note-to-seller" row="4" maxlength="1000" placeholder="${y("cart.note_to_seller_placeholder")}" data-state-src="note"></textarea>
								</label>
								<div class="ref-validation-error"></div>
							</div>

							<hr />

							<div>
								<div class="ref-heading ref-heading-payment">${y("payment")}</div>
								<div class="ref-paypal-payment-holder"></div>
								<div class="ref-standard-payment-buttons"></div>
							</div>
						</form>

						<div class="ref-instructions">
							<div class="ref-heading ref-payment-method-name"></div>
							<div class="ref-payment-method-instructions"></div>
						</div>

						<div class="ref-links"></div>
					</div>

					<div class="ref-checkout-summary">
						<div class="ref-heading">${y("cart.order_summary")}</div>
						<div class="ref-products"></div>
						<hr>
						<div class="ref-coupon-code">
							<div class="ref-coupon-container">
								<div class="ref-coupon-input-holder">
									<input id="ref-coupon-input" class="ref-form-control" name="coupon-code" type="text" maxlength="32" autocomplete="off" placeholder="${y("cart.coupon_placeholder")}">
									<span class="ref-coupon-input-clear" title="${y("clear")}">\u2715</span>
								</div>
								<div class="ref-button ref-button-success ref-add-code inactive">${y("apply")}</div>
							</div>
							<div class="ref-validation-error"></div>
						</div>
						<hr>
						<div class="ref-totals">
							<div class="ref-subtotal">
								<div class="ref-row"><span>${y("subtotal")}</span><span></span></div>
							</div>
							<div class="ref-applied-coupon">
								<div class="ref-row">
									<div class="ref-row"><span></span><span class="ref-remove-coupon">${y("remove")}</span></div>
									<span></span>
								</div>
								<div class="ref-applied-coupon-error"></div>
							</div>
							<div class="ref-shipping">
								<div class="ref-row"><span>${y("shipping")}</span><span></span></div>
							</div>
							<div class="ref-taxes">
								<div class="ref-row"><span></span><span></span></div>
							</div>
						</div>
						<hr />
						<div class="ref-total">
							<div class="ref-row"><span>${y("total")}</span><span></span></div>
							<div class="ref-total-note"></div>
						</div>
					</div>
					<div class="ref-summary-toggle ref-field-collapsible">
						<span class="ref-field-toggle">
							<span class="ref-field-toggle-title">${y("cart.show_summary")}</span>
							<span class="ref-summary-total"></span>
						</span>
					</div>
				</div>
			</div>
		`,
            this.message = e.querySelector(".ref-message"),
            this.cart = e.querySelector(".ref-cart"),
            this.checkout = e.querySelector(".ref-checkout"),
            this.productTable = e.querySelector(".ref-cart-table"),
            this.loadingOverlay = e.querySelector(".ref-loading-overlay"),
            this.cartSubtotal = e.querySelector(".ref-cart .ref-subtotal"),
            this.noteToSeller = e.querySelector(".ref-note-to-seller"),
            this.acceptTerms = e.querySelector(".ref-accept-terms"),
            this.couponCode = e.querySelector(".ref-coupon-code"),
            this.couponInput = e.querySelector("#ref-coupon-input"),
            this.couponButton = e.querySelector(".ref-button.ref-add-code"),
            this.couponClear = e.querySelector(".ref-coupon-input-clear"),
            this.couponError = e.querySelector(".ref-coupon-code .ref-validation-error"),
            this.detailsForm = e.querySelector("form.ref-details"),
            this.taxNote = e.querySelector(".ref-tax-note"),
            this.fileExemptionInput = e.querySelector("#ref-field-exemption-file"),
            this.textExemptionInput = e.querySelector("#ref-field-exemption-text"),
            this.shippingMethodHeading = e.querySelector(".ref-heading-shipping-methods"),
            this.shippingMethodHolder = e.querySelector(".ref-shipping-methods"),
            this.locationsHolder = e.querySelector(".ref-locations"),
            this.standardPaymentButtonHolder = e.querySelector(".ref-standard-payment-buttons"),
            this.shippingAddressWidget = new Ee({
                model: this.shippingAddress,
                fieldPrefix: "shipping",
                getCountries: ()=>this.getShippableCountries(),
                onChange: ()=>this.updateAddress("shipping")
            }),
            this.billingAddressWidget = new Ee({
                model: this.billingAddress,
                fieldPrefix: "billing",
                getCountries: ()=>this.getShippableCountries()
            }),
            this.digitalAddressWidget = new Ee({
                model: this.digitalAddress,
                fieldPrefix: "digital",
                fields: ["country"],
                getCountries: ()=>this.getShippableCountries(),
                onChange: ()=>this.updateAddress("digital")
            })
        }
        init() {
            this.taxNote.addEventListener("change", this.onTaxExemptionChange.bind(this)),
            this.shippingMethodHolder.addEventListener("change", this.onShippingMethodHolderChange.bind(this)),
            this.locationsHolder.addEventListener("change", this.onPickupLocationChange.bind(this)),
            this.couponInput.addEventListener("input", this.onCouponCodeInput.bind(this)),
            this.node.addEventListener("click", this.onClick.bind(this)),
            this.node.addEventListener("keypress", this.onKeypress.bind(this)),
            this.node.addEventListener("change", this.saveToLocalStorage.bind(this)),
            this.scheduleRefresh = ce(this.refresh.bind(this), 250),
            Q("reflow-add-to-cart", this.scheduleRefresh),
            Q("reflow-update-cart-product", this.scheduleRefresh),
            Q("reflow-remove-cart-product", this.scheduleRefresh)
        }
        isDemoMode() {
            return this.demoMode || this.state && this.state.demoMode
        }
        getShippableCountries() {
            var e;
            return ((e = this.state) == null ? void 0 : e.shippableCountries) || []
        }
        offersShipping() {
            return this.getShippableCountries().length
        }
        offersLocalPickup() {
            var e, r;
            return (r = (e = this.state) == null ? void 0 : e.locations) == null ? void 0 : r.length
        }
        getCountryByCode(e) {
            return this.getShippableCountries().find(r=>r.country_code == e)
        }
        isBillingFilled() {
            return Object.entries(this.billingAddress).some(e=>["city", "country", "name", "address"].includes(e[0]) && e[1].length)
        }
        async getPaypalInstance() {
            return window.paypal ? window.paypal : (q._paypalPromise || (q._paypalPromise = new Promise((e,r)=>{
                let i = document.createElement("script");
                i.onload = ()=>e(window.paypal),
                i.onerror = a=>r(a),
                document.body.append(i),
                i.src = "https://www.paypal.com/sdk/js?client-id=" + this.state.paymentProviders.paypal.clientID + "&disable-funding=credit,bancontact,blik,eps,giropay,ideal,mercadopago,mybank,p24,sepa,sofort,venmo&merchant-id=" + this.state.paymentProviders.paypal.merchantID + "&currency=" + this.state.currency + "&integration-date=2021-09-01"
            }
            )),
            q._paypalPromise)
        }
        restoreUserInput() {
            if (!!this.state) {
                if (!this.isDemoMode()) {
                    let e = this.node.querySelectorAll("[data-state-src]")
                      , r = this.state
                      , i = Reflow.cart.localFormData.getAll();
                    for (let o of e) {
                        let l = o.getAttribute("data-state-src")
                          , c = o.getAttribute("type")
                          , h = i[l] !== void 0 ? i[l] : r[l];
                        h !== void 0 && (c == "checkbox" ? o.checked = !!h : o.value = h)
                    }
                    let a = this.state.shippingAddress || {}
                      , s = this.state.billingAddress || {}
                      , n = this.state.digitalAddress || {};
                    for (let[o,l] of Object.entries(i)) {
                        let c = o.split("-");
                        if (c.length > 1) {
                            let h = c[0]
                              , u = c[1];
                            h == "shipping" && (a[u] = l),
                            h == "billing" && (s[u] = l),
                            h == "digital" && (n[u] = l)
                        }
                    }
                    Object.assign(this.shippingAddress, a),
                    Object.assign(this.billingAddress, s),
                    Object.assign(this.digitalAddress, n)
                }
                this.billingVisible = this.isBillingFilled(),
                this.shippingAddressWidget.update(!0, !0),
                this.billingAddressWidget.update(!0, !0),
                this.digitalAddressWidget.update(!0, !0),
                this.offersLocalPickup() ? this.activeDeliveryTab = "pickup" : this.offersShipping() && (this.activeDeliveryTab = "shipping")
            }
        }
        get key() {
            return localStorage.reflowCartKey
        }
        async onClick(e) {
            var i, a;
            if (!e.target.getAttribute("data-disabled-click")) {
                if (e.target.closest(".ref-product-remove")) {
                    let s = e.target.closest(".ref-product")
                      , n = s.dataset.id
                      , o = s.dataset.variant_id
                      , l = new FormData
                      , c = s.dataset.personalization;
                    c && c.length && l.append("personalization", c),
                    Reflow.cart.scheduleAPICall(n + "-remove", ()=>Reflow.cart.removeProduct(n, o, l), 0)
                }
                if (e.target.closest(".ref-cart .ref-standard-checkout-button")) {
                    if (!this.acceptTerms.checkValidity()) {
                        this.acceptTerms.reportValidity();
                        return
                    }
                    for (let s of this.state.errors)
                        if (s.severity == "fatal" && ["unavailable-quantity", "product-min-qty-not-reached", "product-max-qty-exceeded"].includes(s.type)) {
                            $(void 0, this.getStateErrorMessage(s));
                            return
                        }
                    this.setStep("details"),
                    this.update()
                }
                if (e.target.closest(".ref-back, .ref-product-update-cart") && (this.setStep("cart"),
                this.update()),
                e.target.closest(".ref-field-collapsible .ref-field-toggle") && e.target.closest(".ref-field-collapsible").classList.toggle("open"),
                e.target.closest(".ref-summary-toggle") && d(".ref-checkout-summary", this.node)[0].classList.toggle("open"),
                e.target.closest(".button-demo-payment")) {
                    let s = new G(d('<div data-reflow-type="toast"></div>'),{
                        type: "info",
                        title: "Payments unavailable in demo",
                        description: "To prevent accidental checkouts, payments are disabled in this demo."
                    });
                    s.init(),
                    s.show();
                    return
                }
                if (e.target.closest(".ref-add-billing")) {
                    if (this.billingVisible = !0,
                    e.target.closest(".ref-shipping-tab")) {
                        Object.assign(this.billingAddress, this.shippingAddress);
                        for (let s of Object.entries(this.billingAddress))
                            Reflow.cart.localFormData.set("billing-" + s[0], s[1])
                    }
                    this.update()
                }
                if (e.target.closest(".ref-remove-billing")) {
                    this.billingVisible = !1;
                    for (var r in this.billingAddress)
                        Reflow.cart.localFormData.set("billing-" + r, ""),
                        delete this.billingAddress[r];
                    this.update()
                }
                if (e.target.closest(".ref-remove-tax-file") && (this.showLoading(),
                await k(`/remove-tax-exemption-file/${this.key}/`, {
                    method: "POST"
                }, !1),
                await this.refresh()),
                e.target.closest(".ref-payment-button")) {
                    let s = e.target.closest(".ref-payment-button");
                    if (this.isDemoMode())
                        return;
                    if ((i = this.state.vacationMode) == null ? void 0 : i.enabled) {
                        let l = this.state.vacationMode.message.length ? this.state.vacationMode.message : v("store_unavailable");
                        $(l);
                        return
                    }
                    if (this.clearFormErrors(),
                    !this.checkFormValidity(this.detailsForm))
                        return;
                    this.showLoading();
                    let n = new FormData(this.detailsForm);
                    n.append("success-url", this.getSuccessURL({
                        session_id: "{CHECKOUT_SESSION_ID}"
                    })),
                    n.append("cancel-url", this.getCancelURL());
                    let o = s.dataset.method;
                    n.append("payment-method", o),
                    n.append("payment-id", (a = s.dataset.paymentId) != null ? a : "");
                    try {
                        if (await this.refreshState(),
                        this.update(),
                        !this.canFinish()) {
                            $(this.getStateErrors()[0]);
                            return
                        }
                        let l = await k(`/complete-checkout/${this.key}/`, {
                            method: "POST",
                            body: n
                        }, !1);
                        if (!l.success)
                            return;
                        if (l.order && l.order.amount == 0) {
                            window.location = this.getSuccessURL({
                                order_id: l.order.id,
                                secure_hash: l.order.secure_hash
                            });
                            return
                        }
                        if (o == "zero-value-cart" && !l.order && (await this.refreshState(),
                        this.update()),
                        o == "stripe" && l.stripeCheckoutURL) {
                            window.location = l.stripeCheckoutURL;
                            return
                        }
                        if (o == "custom" && l.order) {
                            let c = Object.entries(this.state.paymentProviders).find(p=>p[0] == s.dataset.paymentId);
                            if (!c)
                                return;
                            if (c = c[1],
                            !c.instructions) {
                                window.location = this.getSuccessURL({
                                    order_id: l.order.id,
                                    secure_hash: l.order.secure_hash
                                });
                                return
                            }
                            let h = this.checkout.querySelector(".ref-instructions");
                            h.querySelector(".ref-payment-method-name").textContent = c.name;
                            let u = c.instructions.replaceAll("{orderid}", l.order.id);
                            u = u.replaceAll("{amount}", this.formatMoney(l.order.amount)),
                            h.querySelector(".ref-payment-method-instructions").innerHTML = u,
                            this.setStep("instructions"),
                            this.update()
                        }
                        if (o == "pay-in-store" && l.order) {
                            let c = this.state.locations.find(u=>u.chosen);
                            if (!c || !c.instructions) {
                                window.location = this.getSuccessURL({
                                    order_id: l.order.id,
                                    secure_hash: l.order.secure_hash
                                });
                                return
                            }
                            let h = this.checkout.querySelector(".ref-instructions");
                            h.querySelector(".ref-payment-method-name").textContent = v("pickup_at_store"),
                            h.querySelector(".ref-payment-method-instructions").innerHTML = c.instructions,
                            this.setStep("instructions"),
                            this.update()
                        }
                    } catch (l) {
                        l.data && l.data.errors && (this.showFormErrors(l.data.errors),
                        l.data.errors.system && $(j(l, "system"), v("cart.errors.cannot_complete")))
                    } finally {
                        this.hideLoading()
                    }
                }
                if (e.target.closest(".ref-add-code")) {
                    let s = this.couponInput.value.trim();
                    if (this.couponError.textContent = "",
                    !s.length)
                        return;
                    this.showLoading();
                    try {
                        let n = new FormData;
                        n.append("code", s),
                        await k(`/add-coupon/${this.key}/`, {
                            method: "POST",
                            body: n
                        }, !1),
                        this.couponInput.value = "";
                        let o = new G(d('<div data-reflow-type="toast"></div>'),{
                            type: "success",
                            title: v("cart.coupon_added")
                        });
                        o.init(),
                        o.show(),
                        await this.refresh()
                    } catch (n) {
                        this.couponError.textContent = j(n, "coupon-code")
                    } finally {
                        this.hideLoading()
                    }
                }
                if (e.target.closest(".ref-coupon-input-clear") && (this.couponInput.value = "",
                this.couponButton.classList.add("inactive"),
                this.couponError.textContent = ""),
                e.target.closest(".ref-remove-coupon")) {
                    if (!this.state.coupon)
                        return;
                    this.showLoading();
                    try {
                        await k(`/remove-coupon/${this.key}/`, {
                            method: "POST"
                        }, !1);
                        let s = new G(d('<div data-reflow-type="toast"></div>'),{
                            type: "success",
                            title: v("cart.coupon_removed")
                        });
                        s.init(),
                        s.show(),
                        await this.refresh()
                    } catch (s) {
                        $()
                    } finally {
                        this.hideLoading()
                    }
                }
                if (e.target.closest(".ref-delivery-card .ref-tab-toggle")) {
                    let s = e.target.closest(".ref-tab").dataset.refDelivery;
                    if (this.activeDeliveryTab == s)
                        return;
                    this.activeDeliveryTab = s,
                    this.chosenStoreLocation = -1,
                    this.shippingMethodIndex = -1,
                    s == "shipping" && this.isShippingFilled() && await this.invalidateTaxExemption(this.getShippingAddress()),
                    this.refresh()
                }
            }
        }
        onKeypress(e) {
            e.keyCode == 13 && e.target.matches(".ref-quantity-widget input") && e.target.blur()
        }
        saveToLocalStorage(e) {
            let r = e.target.getAttribute("data-state-src");
            if (r) {
                let i = e.target.value.trim();
                e.target.type == "checkbox" && (i = e.target.checked),
                Reflow.cart.localFormData.set(r, i)
            }
        }
        checkFormValidity(e) {
            for (let r of e.querySelectorAll("input, textarea, select"))
                if (!r.checkValidity())
                    return r.parentElement.scrollIntoView(),
                    setTimeout(()=>r.reportValidity(), 600),
                    !1;
            return !0
        }
        onShippingMethodHolderChange(e) {
            this.shippingMethodIndex = e.target.value,
            this.refresh()
        }
        async onPickupLocationChange(e) {
            let r = e.target.closest("label").dataset.refLocation
              , i = this.state.locations.find(a=>a.id == r);
            !i || (await this.invalidateTaxExemption(i.address),
            this.chosenStoreLocation = e.target.value,
            this.refresh())
        }
        onCouponCodeInput(e) {
            this.couponError.textContent = "",
            e.target.value.length ? (this.couponButton.classList.remove("inactive"),
            this.couponClear.style.display = "block") : (this.couponButton.classList.add("inactive"),
            this.couponClear.style.display = "none")
        }
        showFormErrors(e) {
            for (let r in e) {
                let i = this.detailsForm.querySelector(`[name=${r}]`);
                if (!i)
                    continue;
                let a = i.closest(".ref-error-parent") || i.closest("label")
                  , s = "";
                Array.isArray(e[r]) && (s = e[r][0]),
                s || (s = v(e[r])),
                s || (s = e[r]),
                a.querySelector(".ref-validation-error").textContent = s
            }
        }
        clearFormErrors() {
            for (let e of d(".ref-validation-error", this.node))
                e.textContent = ""
        }
        getStep() {
            return this.step
        }
        setStep(e) {
            q.steps.includes(e) && (this.step = e)
        }
        getShippingAddress() {
            let e = {};
            if (this.shippingAddress.name && (e.name = this.shippingAddress.name),
            this.shippingAddress.address && (e.address = this.shippingAddress.address),
            !this.shippingAddress.city)
                return;
            e.city = this.shippingAddress.city;
            let r = this.shippingAddress.country;
            if (!r)
                return;
            let i = this.getCountryByCode(r);
            if (!!i) {
                if (e.country = r,
                i.has_postcode) {
                    if (!this.shippingAddress.postcode)
                        return;
                    e.postcode = this.shippingAddress.postcode
                }
                if (i.has_regions) {
                    if (!this.shippingAddress.state)
                        return;
                    e.state = this.shippingAddress.state
                }
                return e
            }
        }
        getDigitalAddress() {
            let e = {}
              , r = this.digitalAddress.country;
            if (!(!r || !this.getCountryByCode(r))) {
                if (e.country = r,
                r == "US") {
                    if (!this.digitalAddress.postcode || (e.postcode = this.digitalAddress.postcode,
                    !this.digitalAddress.state))
                        return;
                    e.state = this.digitalAddress.state
                }
                return e
            }
        }
        isShippingFilled() {
            return !!this.getShippingAddress()
        }
        getSuccessURL(e={}) {
            try {
                if (!this.node.dataset.reflowSuccessUrl)
                    throw Error("invalid");
                let r = new URL(this.node.dataset.reflowSuccessUrl,window.location.href)
                  , i = r.search;
                for (let a in e)
                    i += i.length ? "&" : "?",
                    i += `${a}=${e[a]}`;
                return r.search = i,
                r.href
            } catch (r) {
                return window.location.href
            }
        }
        getCancelURL() {
            try {
                if (!this.node.dataset.reflowCancelUrl)
                    throw Error("invalid");
                return new URL(this.node.dataset.reflowCancelUrl,window.location.href).href
            } catch (e) {
                return window.location.href
            }
        }
        canDeliver() {
            return !this.state.errors.filter(e=>e.type == "delivery-unavailable").length
        }
        canShip() {
            return this.state.shipping.length && !this.state.errors.filter(e=>e.type == "cannot-ship").length
        }
        hasZeroValue() {
            return this.state.total == 0
        }
        canFinish() {
            return !this.state.errors.filter(e=>e.severity == "fatal").length
        }
        getStateErrorMessage(e={}) {
            try {
                let r = e.type.replaceAll("-", "_")
                  , i = e.formats || null;
                return i ? v("cart.errors." + r, i) : v("cart.errors." + r)
            } catch (r) {
                return e.message || ""
            }
        }
        getStateErrors() {
            return (this.state.errors || []).map(this.getStateErrorMessage.bind(this)).filter(r=>!!r)
        }
        async updateAddress(e) {
            let r;
            if (e == "shipping" && (r = this.getShippingAddress()),
            e == "digital" && (r = this.getDigitalAddress()),
            !r)
                return;
            let i = new FormData;
            if (i.append("address", JSON.stringify(r)),
            i.append("delivery_method", e),
            this.clearFormErrors(),
            this.showLoading(),
            (await k(`/update-address/${this.key}/`, {
                method: "POST",
                body: i
            }, !1)).taxExemptionRemoved) {
                let s = new G(d('<div data-reflow-type="toast"></div>'),{
                    type: "warning",
                    title: v("cart.tax_exemption_cleared"),
                    description: v("cart.tax_exemption_cleared_details")
                });
                s.init(),
                s.show()
            }
            await this.refresh()
        }
        async onTaxExemptionChange(e) {
            let r, i = this.hasPhysicalProducts() ? this.activeDeliveryTab : "digital";
            if (i == "shipping" && (r = this.getShippingAddress()),
            i == "pickup")
                for (let n of this.state.locations)
                    n.chosen && (r = n.address);
            if (i == "digital" && (r = this.getDigitalAddress()),
            !r) {
                this.checkFormValidity(this.detailsForm);
                return
            }
            let a = new FormData;
            a.append("address", JSON.stringify(r)),
            a.append("delivery-method", i);
            let s = e.target.name == "tax-exemption-file" ? e.target.files[0] : e.target.value;
            a.append(e.target.name, s),
            this.clearFormErrors(),
            this.showLoading();
            try {
                await k(`/update-tax-exemption/${this.key}/`, {
                    method: "POST",
                    body: a
                }, !1)
            } catch (n) {
                console.error("Reflow:", n)
            }
            await this.refresh()
        }
        getFooterLinks() {
            let e = [];
            if (this.state)
                for (let r of this.state.footerLinks) {
                    let i = document.createElement("a");
                    i.textContent = v("cart." + r.id),
                    i.href = r.url,
                    i.target = "_blank",
                    e.push(i)
                }
            return e
        }
        hasPhysicalProducts() {
            if (this.state) {
                for (let e of this.state.products)
                    if (e.type == "physical" && e.inStock)
                        return !0
            }
            return !1
        }
        showMessage(e) {
            this.message.style.display = "block",
            this.message.textContent = e
        }
        resetView() {
            this.message.style.display = "none",
            this.cart.style.display = "none",
            this.checkout.style.display = "none"
        }
        async refresh() {
            this.showLoading(),
            await this.refreshState(),
            this.hideLoading(),
            this.update()
        }
        renderProduct(e) {
            let r = d(`
			<div class="ref-product">
				<div class="ref-product-col">
					<div class="ref-product-wrapper">
						<img class="ref-product-photo">
						<div class="ref-product-data">

							<div class="ref-product-info">
								<div>
									<div class="ref-product-name"></div>
									<div class="ref-product-category"></div>
									<div class="ref-product-variants"></div>
									<div class="ref-product-personalization-holder"></div>
								</div>

								<div class="ref-product-price ref-mobile-product-price"></div>
							</div>

							<div class="ref-product-controls ref-mobile-product-controls">
								<div class="ref-product-quantity">
									<div class="ref-quantity-container"></div>
									<div class="ref-product-qty-message"></div>
								</div>

								<div class="ref-product-remove"><svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 48 48" ><path fill="currentColor" d="M13.05 42q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/></svg></div>
							</div>

						</div>
					</div>
				</div>
				<div class="ref-price-col">
					<div class="ref-product-price"></div>
				</div>
				<div class="ref-quantity-col">
					<div class="ref-product-quantity">
						<div class="ref-quantity-container"></div>
						<div class="ref-product-qty-message"></div>
						<div class="ref-product-remove">${y("remove")}</div>
					</div>
				</div>
				<div class="ref-total-col">
					<div class="ref-product-total">
						<div class="ref-product-total-sum"></div>
					</div>
				</div>
			</div>
		`)
              , i = e.name;
            if (r.dataset.id = e.id,
            r.dataset.quantity = e.quantity,
            e.variant) {
                r.dataset.variant_id = e.variant.id;
                let h = d(".ref-product-variants", r)[0]
                  , u = d('<div class="ref-product-variant"></div>');
                u.textContent = e.variant.option_name + ": " + e.variant.name,
                h.append(u)
            }
            if (e.personalization && e.personalization.length)
                try {
                    r.dataset.personalization = JSON.stringify(e.personalization.map(u=>{
                        let p = {
                            id: u.id
                        };
                        return u.inputText && (p.inputText = u.inputText),
                        p
                    }
                    ));
                    let h = d(".ref-product-personalization-holder", r)[0];
                    for (let u of e.personalization) {
                        let p = d('<div class="ref-product-personalization"></div>')
                          , m = `${u.name}${u.inputText ? ': "' + u.inputText + '" ' : ""} ${u.price ? "+" + this.formatMoney(u.price) : "- " + v("price_free")}`;
                        p.title = m,
                        m = m.length > 55 ? m.substring(0, 55) + "..." : m,
                        p.textContent = m,
                        h.append(p)
                    }
                } catch (h) {
                    console.error("Reflow:", h)
                }
            let a = d(".ref-product-photo", r)[0];
            a.src = e.image.sm,
            a.alt = i,
            d(".ref-product-name", r)[0].textContent = i;
            let s = d(".ref-product-price", r) || [];
            for (let h of s)
                h.textContent = this.formatMoney(e.unitPrice);
            if (e.inStock) {
                if (e.quantity > e.availableQuantity)
                    for (let h of d(".ref-product-qty-message", r))
                        h.textContent = v("cart.left_in_stock", {
                            in_stock: e.availableQuantity
                        });
                else if (e.quantity > e.maxQty)
                    for (let h of d(".ref-product-qty-message", r))
                        h.textContent = v("cart.max_product_qty", {
                            max_quantity: e.maxQty
                        })
            }
            let n = d(".ref-product-total-sum", r) || [];
            for (let h of n)
                e.inStock ? h.textContent = this.formatMoney(e.price) : (h.textContent = v("out_of_stock"),
                h.classList.add("out-of-stock"));
            let o = d(".ref-product-quantity input", r) || [];
            for (let h of o)
                h.value = e.quantity;
            let l = v("product");
            e.categories.length && (l = e.categories[0].name),
            d(".ref-product-category", r)[0].textContent = l;
            let c = d(".ref-quantity-container", r) || [];
            for (let h of c) {
                let u = new J(h,{
                    inStock: e.inStock,
                    onChange: p=>{
                        let m = p.getProduct()
                          , g = p.getQuantity()
                          , b = p.getVariant()
                          , C = r
                          , _ = new FormData
                          , w = C.dataset.personalization;
                        w && w.length && _.append("personalization", w),
                        Reflow.cart.scheduleAPICall(m + (b ? `-${b}` : "") + "-quantity", ()=>Reflow.cart.updateProduct(m, g, b, _))
                    }
                });
                u.init(),
                e.variant && u.setVariant(e.variant.id),
                u.setProduct(e.id),
                u.setMaxQuantity(Math.min(e.availableQuantity, e.maxQty)),
                u.setQuantity(e.quantity),
                u.update()
            }
            return r
        }
        renderProductCompact(e) {
            let r = d(`
			<div class="ref-product">
				<div class="ref-product-col">
					<img class="ref-product-photo">
					<div>
						<div class="ref-product-name"></div>
						<div class="ref-product-secondary"></div>
						<div class="ref-product-personalization-holder"></div>
						<div class="ref-product-qty-message"></div>
						<div class="ref-product-update-cart"></div>
					</div>
				</div>
				<div>
					<div class="ref-product-total"></div>
					<div class="ref-product-remove">${y("remove")}</div>
				</div>
			</div>
		`)
              , i = e.name;
            r.dataset.id = e.id,
            e.variant && (r.dataset.variant_id = e.variant.id,
            i += ` (${e.variant.name})`);
            let a = d(".ref-product-photo", r)[0];
            a.src = e.image.sm,
            a.alt = i,
            d(".ref-product-name", r)[0].textContent = i,
            d(".ref-product-secondary", r)[0].textContent = this.formatMoney(e.unitPrice) + " x " + e.quantity,
            e.inStock && e.quantity > e.availableQuantity ? (r.classList.add("ref-warning"),
            d(".ref-product-qty-message", r)[0].textContent = v("cart.left_in_stock", {
                in_stock: e.availableQuantity
            }),
            d(".ref-product-update-cart", r)[0].textContent = v("cart.update")) : e.inStock && e.quantity > e.maxQty ? (r.classList.add("ref-warning"),
            d(".ref-product-qty-message", r)[0].textContent = v("cart.max_product_qty", {
                max_quantity: e.maxQty
            }),
            d(".ref-product-update-cart", r)[0].textContent = v("cart.update")) : (d(".ref-product-qty-message", r)[0].remove(),
            d(".ref-product-update-cart", r)[0].remove());
            let s = d(".ref-product-total", r)[0];
            if (e.inStock ? (s.textContent = this.formatMoney(e.price),
            d(".ref-product-remove", r)[0].remove()) : (s.textContent = v("out_of_stock"),
            s.classList.add("out-of-stock")),
            e.personalization && e.personalization.length) {
                let n = d(".ref-product-personalization-holder", r)[0];
                for (let o of e.personalization) {
                    let l = d('<div class="ref-product-personalization"></div>')
                      , c = `${o.name}${o.inputText ? ': "' + o.inputText + '"' : ""}`;
                    l.title = c,
                    c = c.length > 25 ? c.substring(0, 25) + "..." : c,
                    l.textContent = c,
                    n.append(l)
                }
            }
            return r
        }
        renderShippingMethod(e, r) {
            let i = d(`<label class="ref-row">
			<div class="ref-method-radio"><input type="radio" value="" name="shipping-method" required /></div>
			<div class="ref-method-name"></div>
			<div class="ref-method-price">$19.00</div>
		</label>`)
              , a = d("input", i)[0];
            a.value = r,
            a.checked = e.chosen;
            let s = d(".ref-method-name", i)[0]
              , n = document.createElement("b");
            if (n.textContent = e.name,
            s.append(n),
            e.delivery_time) {
                let o = document.createElement("small");
                o.textContent = this.getDeliveryDate(e.delivery_time) + " - " + this.getDeliveryDate(e.delivery_time + 2),
                s.append(o)
            }
            if (e.note) {
                let o = document.createElement("small");
                o.textContent = e.note,
                s.append(o)
            }
            return d(".ref-method-price", i)[0].textContent = this.formatMoney(e.price),
            i
        }
        renderStoreLocation(e, r) {
            let i = d(`<label>
			<input type="radio" value="" name="store-location" required />
			<div class="ref-location-card">
				<b class="ref-location-name"></b>
				<div class="ref-location-address"></div>
				<div class="ref-location-contacts"></div>
			</div>
		</label>`);
            i.dataset.refLocation = e.id;
            let a = d("input", i)[0];
            a.value = r,
            a.checked = e.chosen;
            let s = d(".ref-location-name", i)[0];
            s.textContent = e.name;
            let n = d(".ref-location-address", i)[0]
              , o = e.address.address + ", " + e.address.city + ", ";
            e.address.country == "US" && e.address.state && (o += e.address.state + ", "),
            o += e.address.countryName,
            n.textContent = o;
            let l = document.createElement("b");
            l.textContent = `${v("address")}: `,
            n.prepend(l);
            let c = d(".ref-location-contacts", i)[0];
            if (e.email) {
                let h = document.createElement("span");
                h.textContent = e.email;
                let u = document.createElement("b");
                u.textContent = `${v("email")}: `,
                h.prepend(u),
                c.append(h)
            }
            if (e.phone) {
                let h = document.createElement("span");
                h.textContent = e.phone;
                let u = document.createElement("b");
                u.textContent = `${v("phone")}: `,
                h.prepend(u),
                c.append(h)
            }
            if (e.working_hours) {
                let h = document.createElement("span");
                h.textContent = e.working_hours;
                let u = document.createElement("b");
                u.textContent = `${v("working_hours")}: `,
                h.prepend(u),
                c.append(h)
            }
            if (e.delivery_time) {
                let h = document.createElement("span");
                h.textContent = this.getDeliveryDate(e.delivery_time);
                let u = document.createElement("b");
                u.textContent = `${v("cart.order_ready_for_pickup_label")}: `,
                h.prepend(u),
                c.append(h)
            }
            return i
        }
        formatMoney(e) {
            return Y(e, this.state.currencyConfig)
        }
        hasNextStep() {
            return q.steps.indexOf(this.step) == 0
        }
        hasPreviousStep() {
            return q.steps.indexOf(this.step) == 1
        }
        next() {
            let e = q.steps.indexOf(this.step);
            this.step = q.steps[e + 1]
        }
        previous() {
            let e = q.steps.indexOf(this.step);
            this.step = q.steps[e - 1]
        }
        get state() {
            return this.demoMode ? this._state || null : this._state || Reflow.cart.state || null
        }
        set state(e=null) {
            this._state = e
        }
        async refreshState() {
            if (this.mockData) {
                this.state = this.mockData;
                return
            }
            let e = {};
            this.activeDeliveryTab && (e.deliveryMethod = this.activeDeliveryTab),
            this.shippingMethodIndex >= 0 && (e.chosenShippingMethod = this.shippingMethodIndex),
            this.chosenStoreLocation >= 0 && (e.chosenStoreLocation = this.chosenStoreLocation),
            await Reflow.cart.refresh(e)
        }
        async invalidateTaxExemption(e) {
            this.showLoading();
            let r = new FormData;
            if (r.append("address", JSON.stringify(e)),
            (await k(`/invalidate-tax-exemption/${this.key}/`, {
                method: "POST",
                body: r
            }, !1)).taxExemptionRemoved) {
                let a = new G(d('<div data-reflow-type="toast"></div>'),{
                    type: "warning",
                    title: v("cart.tax_exemption_cleared"),
                    description: v("cart.tax_exemption_cleared_details")
                });
                a.init(),
                a.show()
            }
        }
        arePaymentProvidersAvailable() {
            return this.isStripeSupported() || this.isPaypalSupported() || this.hasCustomPayments() || this.hasPayInStorePayments()
        }
        onlyPaypalNoDelivery() {
            return !(!this.hasPhysicalProducts() || !this.isPaypalSupported() || this.offersShipping() || this.isStripeSupported() || this.hasCustomPayments() || this.hasPayInStorePayments())
        }
        isStripeSupported() {
            return this.state.paymentProviders.stripe.supported
        }
        isPaypalSupported() {
            return this.hasPhysicalProducts() && !this.offersShipping() ? !1 : this.state.paymentProviders.paypal.supported
        }
        hasCustomPayments() {
            return Object.entries(this.state.paymentProviders).some(e=>e[1].provider == "custom")
        }
        hasPayInStorePayments() {
            return this.state.locations.some(e=>!!e.pay_in_store)
        }
        updateCart() {
            var i, a;
            if (!this.state)
                return this.showMessage(v("cart.errors.unavailable"));
            if (!this.state.products.length)
                return this.showMessage(v("cart.errors.empty"));
            this.cart.style.display = "block",
            this.productTable.innerHTML = "";
            for (let s of this.state.products)
                this.productTable.append(this.renderProduct(s));
            let e = this.cart.querySelector(".ref-links");
            e.innerHTML = "";
            for (let s of this.getFooterLinks())
                e.append(s);
            if (this.cartSubtotal.textContent = `${v("subtotal")}: ` + this.formatMoney(this.state.subtotal),
            (i = this.state.vacationMode) == null ? void 0 : i.enabled) {
                let s = this.cart.querySelector(".ref-standard-checkout-button");
                if (s.classList.add("inactive"),
                this.state.vacationMode.message.length) {
                    let n = d('<div class="ref-store-message"></div>');
                    n.textContent = this.state.vacationMode.message,
                    this.cart.querySelector(".ref-totals").insertBefore(n, s)
                }
            }
            this.acceptTerms.style.display = "none",
            this.acceptTerms.querySelector("#ref-terms-agreement").required = !1;
            let r = this.acceptTerms.querySelector(".ref-terms-agreement-text");
            r.innerHTML = "";
            for (let s = 0; s < this.state.footerLinks.length; s++) {
                let n = this.state.footerLinks[s];
                if (n.required) {
                    this.acceptTerms.style.display = "block",
                    this.acceptTerms.querySelector("#ref-terms-agreement").required = !0,
                    r.childNodes.length ? r.append(d("<span>" + (s === this.state.footerLinks.length - 1 ? ` ${y("and")} ` : ", ") + "</span>")) : r.append(d(`<span>${y("cart.terms_agree", {
                        terms: ""
                    })} </span>`));
                    let o = d("<a>");
                    o.href = n.url,
                    o.textContent = v("cart." + n.id),
                    r.append(o)
                }
            }
            if (this.isDemoMode()) {
                this.node.querySelector(".ref-paypal-express-checkout-holder").innerHTML = `<div class="paypal-button paypal-button-gold button-demo-payment">
				<svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 101 32" preserveAspectRatio="xMinYMin meet"><path fill="#003087" d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"/><path fill="#003087" d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"/><path fill="#003087" d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"/><path fill="#009cde" d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"/><path fill="#009cde" d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"/><path fill="#009cde" d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"/></svg>
			</div>`;
                return
            }
            this.paypalButtonsInitialized || ((a = this.state.vacationMode) == null ? void 0 : a.enabled) || this.isPaypalSupported() && (this.getPaypalInstance().then(s=>{
                s.Buttons({
                    fundingSource: s.FUNDING.PAYPAL,
                    createOrder: this.paypalCreateOrder.bind(this),
                    onApprove: this.paypalOnApprove.bind(this),
                    onError: this.paypalError.bind(this),
                    onShippingChange: this.paypalShippingChange.bind(this),
                    onCancel: this.paypalCancel.bind(this),
                    style: {
                        height: 42
                    }
                }).render(this.node.querySelector(".ref-paypal-express-checkout-holder"));
                let n = [s.FUNDING.PAYPAL];
                this.isStripeSupported() || n.push(s.FUNDING.CARD);
                for (let o of n)
                    s.Buttons({
                        fundingSource: o,
                        createOrder: this.paypalCreateOrder.bind(this),
                        onApprove: this.paypalOnApprove.bind(this),
                        onError: this.paypalError.bind(this),
                        onShippingChange: this.paypalShippingChange.bind(this),
                        onCancel: this.paypalCancel.bind(this)
                    }).render(this.node.querySelector(".ref-paypal-payment-holder"))
            }
            ),
            this.paypalButtonsInitialized = !0)
        }
        updateCheckout() {
            var st;
            this.checkout.style.display = "flex";
            let e = this.checkout.querySelector(".ref-details")
              , r = this.checkout.querySelector(".ref-instructions");
            e.style.display = "none",
            r.style.display = "none",
            this.step == "details" ? e.style.display = "block" : this.step == "instructions" && (r.style.display = "block");
            let i = this.checkout.querySelector(".ref-products");
            i.innerHTML = "";
            for (let x of this.state.products)
                i.append(this.renderProductCompact(x));
            let a = this.checkout.querySelector(".ref-subtotal");
            a.firstElementChild.children[1].textContent = this.formatMoney(this.state.subtotal),
            this.couponCode.classList.remove("hidden"),
            this.couponCode.nextElementSibling.style.display = "block";
            let s = this.checkout.querySelector(".ref-applied-coupon");
            if (s.style.display = "none",
            this.state.coupon) {
                this.couponCode.classList.add("hidden"),
                this.couponCode.nextElementSibling.style.display = "none",
                this.couponError.textContent = "",
                s.style.display = "block";
                let x = this.state.coupon
                  , P = x.name || x.code.toUpperCase();
                P.length > 15 && (P = P.substring(0, 15) + "..."),
                s.firstElementChild.firstElementChild.children[0].textContent = P,
                s.firstElementChild.children[1].textContent = x.errorCode ? "" : "-" + this.formatMoney(this.state.discount),
                s.querySelector(".ref-applied-coupon-error").textContent = j({
                    data: {
                        errorCode: x.errorCode
                    }
                }) || ""
            }
            this.step == "instructions" && (this.couponCode.classList.add("hidden"),
            this.couponCode.nextElementSibling.style.display = "none",
            s.querySelector(".ref-remove-coupon").style.display = "none");
            let n = this.checkout.querySelector(".ref-shipping");
            if (n.style.display = "none",
            this.hasPhysicalProducts()) {
                n.style.display = "block";
                let x = v("shipping")
                  , P = v("cart.shipping_not_selected");
                if (this.activeDeliveryTab == "shipping")
                    for (let H of this.state.shipping)
                        H.chosen && (x = `${v("shipping")} (${H.name})`,
                        P = this.formatMoney(H.price));
                if (this.activeDeliveryTab == "pickup") {
                    x = v("pickup_at_store"),
                    P = this.formatMoney(0);
                    for (let H of this.state.locations)
                        H.chosen && (x = v("cart.pickup_at_store", {
                            store: H.name
                        }))
                }
                n.firstElementChild.children[0].textContent = x,
                n.firstElementChild.children[1].textContent = P
            }
            let o = this.checkout.querySelector(".ref-total");
            o.firstElementChild.children[1].textContent = this.formatMoney(this.state.total),
            this.checkout.querySelector(".ref-total-note").textContent = v("cart.prices_currency_description", {
                currency: this.state.currency
            });
            let l = this.checkout.querySelector(".ref-summary-total");
            l.textContent = this.formatMoney(this.state.total),
            this.taxNote.style.display = "none";
            let c = this.checkout.querySelector(".ref-taxes");
            if (c.style.display = "none",
            this.fileExemptionInput.disabled = !0,
            this.textExemptionInput.disabled = !0,
            this.state.taxes) {
                let x = this.state.taxes.details
                  , P = x.taxRate
                  , H = c.querySelectorAll("span");
                if (H[0].textContent = `${P.name} (${P.rate}%)` + (x.exemption ? " \u2013 " + x.exemption : ""),
                H[1].textContent = this.formatMoney(this.state.taxes.amount),
                c.style.display = "block",
                x.exemptionType) {
                    this.taxNote.style.display = "block";
                    let F = this.node.querySelector(".ref-tax-note .ref-field-collapsible")
                      , nt = this.taxNote.querySelector(".ref-tax-exemption-file")
                      , ot = this.taxNote.querySelector(".ref-tax-exemption-text");
                    nt.style.display = "none",
                    ot.style.display = "none";
                    let z = this.state.taxExemption;
                    if (x.exemptionType == "file") {
                        nt.style.display = "block",
                        this.fileExemptionInput.disabled = !1;
                        let lt = this.taxNote.querySelector(".ref-new-tax-file");
                        lt.style.display = "block";
                        let dt = this.taxNote.querySelector(".ref-old-tax-file");
                        dt.style.display = "none";
                        let ct = this.taxNote.querySelector(".ref-tax-file-dl");
                        ct.href = "#",
                        z && z.download && (lt.style.display = "none",
                        dt.style.display = "block",
                        ct.href = z.download)
                    }
                    x.exemptionType == "vat_number" && (ot.style.display = "block",
                    this.textExemptionInput.disabled = !1,
                    this.textExemptionInput.value = "",
                    z && z.vat_number && (this.textExemptionInput.value = z.vat_number.input || z.vat_number.number,
                    z.vat_number.status == "invalid" && this.showFormErrors({
                        "tax-exemption-text": "cart.errors.vat_number_invalid"
                    }),
                    z.status == "unvalidated" && this.showFormErrors({
                        "tax-exemption-text": "cart.errors.vat_number_validation_fail"
                    })))
                }
            }
            let h = this.checkout.querySelector(".ref-links");
            h.innerHTML = "";
            for (let x of this.getFooterLinks())
                h.append(x);
            let u = e.querySelector(".ref-phone-input");
            u && !this.state.collectPhone && u.remove();
            let p = this.hasPhysicalProducts()
              , m = !p
              , g = p && this.offersShipping()
              , b = p && this.offersLocalPickup()
              , C = g && b
              , _ = e.querySelector(".ref-heading-delivery")
              , w = e.querySelector(".ref-delivery-unavailable")
              , I = e.querySelector(".ref-delivery-card")
              , U = I.querySelectorAll('.ref-delivery-card input[name="delivery-method"]');
            _.style.display = "none",
            w.style.display = "none",
            I.style.display = "none";
            for (let x of U)
                x.disabled = !0;
            let O = e.querySelector(".ref-digital-delivery");
            O.style.display = "none",
            O.disabled = !0;
            let M = e.querySelector(".ref-customer-name-input");
            if (M.style.display = "none",
            M.querySelector("input").disabled = !0,
            (this.activeDeliveryTab == "pickup" || m) && (M.style.display = "block",
            M.querySelector("input").disabled = !1),
            p && !this.canDeliver() && (_.style.display = "block",
            w.style.display = "block",
            w.textContent = v("cart.errors.delivery_unavailable")),
            g || b) {
                _.style.display = "block",
                I.style.display = "block";
                for (let x of U)
                    x.disabled = !1;
                C && I.classList.add("tabbable")
            }
            let B = e.querySelector(".ref-local-pickup-tab");
            if (B.style.display = "none",
            b) {
                B.style.display = "block",
                B.classList.remove("open"),
                B.querySelector(".ref-tab-toggle input").checked = !1,
                B.querySelector("fieldset.ref-tab-content").disabled = !0,
                this.activeDeliveryTab == "pickup" && (B.classList.add("open"),
                B.querySelector(".ref-tab-toggle input").checked = !0,
                B.querySelector("fieldset.ref-tab-content").disabled = !1),
                this.locationsHolder.innerHTML = "";
                for (let x = 0, P = this.state.locations; x < P.length; x++)
                    this.locationsHolder.append(this.renderStoreLocation(P[x], x));
                this.locationsHolder.append(d('<div class="ref-validation-error"></div>')),
                C || (_.textContent = v("pickup_at_store"))
            }
            let D = e.querySelector(".ref-shipping-tab");
            if (D.style.display = "none",
            g && (e.querySelector(".ref-shipping-address-holder").append(this.shippingAddressWidget.update(!0, !0)),
            D.style.display = "block",
            D.classList.remove("open"),
            D.querySelector(".ref-tab-toggle input").checked = !1,
            D.querySelector("fieldset.ref-tab-content").disabled = !0,
            this.shippingMethodHeading.style.display = "none",
            this.shippingMethodHolder.innerHTML = "",
            this.activeDeliveryTab == "shipping" && (D.classList.add("open"),
            D.querySelector(".ref-tab-toggle input").checked = !0,
            D.querySelector("fieldset.ref-tab-content").disabled = !1,
            this.isShippingFilled())))
                if (this.canShip()) {
                    this.shippingMethodHeading.style.display = "block";
                    for (let x = 0, P = this.state.shipping; x < P.length; x++)
                        this.shippingMethodHolder.append(this.renderShippingMethod(P[x], x, !1));
                    this.shippingMethodHolder.append(d('<div class="ref-validation-error"></div>'))
                } else
                    this.showFormErrors({
                        "shipping-country": "cart.errors.address_not_supported"
                    });
            m && (O.style.display = "block",
            O.disabled = !1,
            e.querySelector(".ref-digital-address-holder").append(this.digitalAddressWidget.update(!0, !0)),
            this.billingVisible = !1),
            (this.activeDeliveryTab == "pickup" ? e.querySelector(".ref-local-pickup-tab .ref-billing-address-holder") : e.querySelector(".ref-shipping-tab .ref-billing-address-holder")).append(this.billingAddressWidget.update(!0, !0));
            for (let x of this.node.querySelectorAll(".ref-add-billing"))
                x.style.display = "inline-block",
                this.billingVisible && (x.style.display = "none");
            for (let x of this.node.querySelectorAll("fieldset.ref-billing-address"))
                x.style.display = "none",
                x.disabled = !0,
                this.billingVisible && (x.style.display = "block",
                x.disabled = !1);
            let V = Object.entries(this.state.paymentProviders).sort((x,P)=>P[1].order - x[1].order)
              , ee = this.node.querySelector(".ref-heading-payment");
            ee.style.display = "none",
            (V.some(x=>x[1].supported) || this.hasZeroValue()) && (ee.style.display = "block");
            let Ae = this.node.querySelector(".ref-paypal-payment-holder");
            if (Ae.style.display = "block",
            (!this.isPaypalSupported() || ((st = this.state.vacationMode) == null ? void 0 : st.enabled) || this.hasZeroValue()) && (Ae.style.display = "none"),
            this.activeDeliveryTab == "pickup" && this.chosenStoreLocation >= 0 && V.some(x=>x[1].supported && x[1].provider != "paypal") && (Ae.style.display = "none"),
            this.standardPaymentButtonHolder.innerHTML = "",
            this.hasZeroValue()) {
                let x = document.createElement("div");
                x.className = "ref-button ref-payment-button",
                x.dataset.method = "zero-value-cart",
                x.textContent = v("cart.complete_order"),
                this.standardPaymentButtonHolder.append(x)
            } else
                for (let[x,P] of V)
                    if (P.provider != "paypal") {
                        if (P.provider == "stripe" && P.supported && P.paymentOptions.length)
                            for (let H of P.paymentOptions) {
                                let F = document.createElement("div");
                                F.className = "ref-button ref-payment-button",
                                F.dataset.method = "stripe",
                                H.id == "card" ? (F.textContent = v("credit_card"),
                                this.standardPaymentButtonHolder.append(F),
                                F = F.cloneNode(),
                                F.textContent = "Apple Pay / Google Pay",
                                this.standardPaymentButtonHolder.append(F)) : (F.textContent = H.name,
                                this.standardPaymentButtonHolder.append(F))
                            }
                        if (P.provider == "custom") {
                            let H = document.createElement("div");
                            H.className = "ref-button ref-payment-button",
                            H.dataset.method = "custom",
                            H.dataset.paymentId = P.id,
                            H.textContent = P.name,
                            this.standardPaymentButtonHolder.append(H)
                        }
                        if (P.provider == "pay-in-store") {
                            let H = document.createElement("div");
                            H.className = "ref-button ref-payment-button",
                            H.dataset.method = "pay-in-store",
                            H.textContent = v("pay_on_pickup"),
                            this.standardPaymentButtonHolder.prepend(H)
                        }
                    }
            if (this.isDemoMode()) {
                this.node.querySelectorAll(".ref-payment-button").forEach(x=>x.classList.add("button-demo-payment")),
                this.node.querySelector(".ref-paypal-payment-holder").innerHTML = `<div class="paypal-button paypal-button-gold button-demo-payment">
				<svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 101 32" preserveAspectRatio="xMinYMin meet"><path fill="#003087" d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"/><path fill="#003087" d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"/><path fill="#003087" d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"/><path fill="#009cde" d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"/><path fill="#009cde" d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"/><path fill="#009cde" d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"/></svg>
			</div>`;
                return
            }
        }
        async paypalCreateOrder(e, r) {
            if (!this.acceptTerms.checkValidity()) {
                let s = "";
                for (let n = 0; n < this.state.footerLinks.length; n++) {
                    let o = this.state.footerLinks[n];
                    o.required && (s += s ? n === this.state.footerLinks.length - 1 ? " and " : ", " : "Please agree to the ",
                    s += o.name)
                }
                s += ".",
                this.paypalErrorText = s;
                return
            }
            if (await this.refreshState(),
            this.update(),
            !this.canFinish()) {
                this.paypalErrorText = this.getStateErrors()[0];
                return
            }
            let i = new FormData;
            this.step == "details" && (i = new FormData(this.detailsForm)),
            i.append("checkout-step", this.step);
            let a = await k(`/create-paypal-order/${this.key}/`, {
                method: "POST",
                body: i
            }, !1);
            if (a.error && a.error == "PAYEE_ACCOUNT_RESTRICTED") {
                this.paypalErrorText = "Transaction could not be processed. The PayPal account associated with this store is restricted.";
                return
            }
            if (a.error && a.error == "CUSTOMER_FORM_DATA") {
                this.paypalErrorText = "Missing or incorrect data. Please review the checkout form.",
                this.showFormErrors(a.fields);
                return
            }
            if (a.error && a.error == "VACATION_MODE") {
                this.paypalErrorText = "Transaction could not be processed. The store is currently unavailable.";
                return
            }
            return a.orderID
        }
        async paypalOnApprove(e, r) {
            let i = new FormData;
            i.append("orderID", e.orderID);
            try {
                let a = await k(`/capture-paypal-order/${this.key}/`, {
                    method: "POST",
                    body: i
                }, !1);
                window.location = this.getSuccessURL({
                    order_id: a.orderID,
                    secure_hash: a.secureHash
                })
            } catch (a) {
                if (!a.data)
                    throw a;
                let s = a.data
                  , n = Array.isArray(s.details) && s.details[0];
                if (n && n.issue === "INSTRUMENT_DECLINED")
                    return r.restart();
                throw a
            }
        }
        async paypalShippingChange(e, r) {
            try {
                let i = new FormData;
                i.append("orderID", e.orderID),
                i.append("address", JSON.stringify(e.shipping_address));
                let a = 0;
                e.selected_shipping_option && e.selected_shipping_option.id && (a = e.selected_shipping_option.id),
                i.append("selectedShippingOption", a);
                let s = await k(`/update-paypal-shipping/${this.key}/`, {
                    method: "POST",
                    body: i
                }, !1);
                return r.resolve()
            } catch (i) {
                return $(j(i), "Couldn't update PayPal shipping"),
                console.error("Reflow:", i),
                r.reject()
            }
        }
        paypalCancel(e) {
            this.refresh()
        }
        paypalError(e) {
            let r = "Sorry, your transaction could not be processed. Please try again.";
            this.paypalErrorText && (r = this.paypalErrorText,
            this.paypalErrorText = null),
            setTimeout(function() {
                window.alert(r)
            }, 1e3)
        }
        showLoading() {
            this.loadingOverlay.classList.add("visible"),
            this.node.querySelectorAll(".ref-payment-button").forEach(e=>e.setAttribute("data-disabled-click", !0)),
            this.couponButton.setAttribute("data-disabled-click", !0)
        }
        hideLoading() {
            this.loadingOverlay.classList.remove("visible"),
            this.node.querySelectorAll(".ref-payment-button").forEach(e=>e.removeAttribute("data-disabled-click")),
            this.couponButton.removeAttribute("data-disabled-click")
        }
        saveFocus() {
            this.savedFocusTarget = document.activeElement
        }
        restoreFocus() {
            this.savedFocusTarget && (this.savedFocusTarget.focus(),
            this.savedFocusTarget = null)
        }
        getDeliveryDate(e) {
            var r = new Date(new Date().getTime() + 1e3 * 60 * 60 * 24 * e)
              , i = {
                month: "long",
                day: "numeric"
            };
            return r.toLocaleDateString(Reflow.locales.locale, i)
        }
        async update() {
            if (this.saveFocus(),
            this.resetView(),
            !q.steps.includes(this.step))
                throw new Error("Invalid Step: " + this.step);
            if (!this.state && !this.node.offsetParent) {
                console.warn("Reflow: Ignoring invisible Cart");
                return
            }
            if (this.node.firstElementChild.style.display = "block",
            !this.state)
                try {
                    await this.refreshState(),
                    this.restoreUserInput()
                } catch (e) {
                    this.showMessage(v("cart.errors.unavailable"));
                    return
                }
            if (!this.arePaymentProvidersAvailable()) {
                this.showMessage("This store has no payment methods configured.");
                return
            }
            if (this.onlyPaypalNoDelivery()) {
                this.showMessage("This store offers only PayPal payments but does not support product delivery. Checkout unavailable.");
                return
            }
            (this.step == "details" || this.step == "instructions") && (this.state.products.length ? this.updateCheckout() : this.step = "cart"),
            this.step == "cart" && this.updateCart(),
            this.restoreFocus()
        }
    }
      , Se = q;
    S(Se, "type", "shopping-cart"),
    S(Se, "steps", ["cart", "details", "instructions"]);
    var Ee = class {
        constructor(e) {
            this.options = e,
            this.model = e.model,
            this.fields = e.fields || ["name", "city", "address", "country"];
            let r = e.fieldPrefix
              , i = '<div class="ref-address-widget">';
            this.fields.includes("name") && (i += `
			<label>
				<span>${y("name")}</span>
				<input type="text" class="ref-form-control ref-field-details-name" value="" name="${r}-name" data-state-src="${r}-name" required minlength="5" />
				<div class="ref-validation-error"></div>
			</label>`),
            this.fields.includes("address") && (i += `
			<label>
				<span>${y("address")}</span>
				<textarea row="2" class="ref-form-control ref-field-details-address-line" name="${r}-address" data-state-src="${r}-address" required minlength="5"></textarea>
				<div class="ref-validation-error"></div>
			</label>`),
            this.fields.includes("city") && (i += `
			<label>
				<span>${y("city")}</span>
				<input type="text" class="ref-form-control ref-field-details-city" value="" name="${r}-city" data-state-src="${r}-city" required minlength="2" />
				<div class="ref-validation-error"></div>
			</label>`),
            this.fields.includes("country") && (i += `
			<div class="ref-error-parent">
				<label>
					<span>${y("country")}</span>
					<select class="ref-form-control ref-field-details-country" name="${r}-country" data-state-src="${r}-country" required></select> 
				</label>
				<div class="ref-row ref-row-region">
					<label>
						<span>${y("state")}</span>
						<select class="ref-form-control ref-field-details-region" name="${r}-state" data-state-src="${r}-state" required></select>
					</label>
					<label>
						<span>${y("postcode")}</span>
						<input type="text" class="ref-form-control ref-field-details-postcode" name="${r}-postcode" data-state-src="${r}-postcode" value="" required />
					</label>
				</div>
				<div class="ref-validation-error"></div>
			</div>`),
            i += "</div>",
            this.node = d(i),
            this.fields.includes("name") && (this.nameInput = this.node.querySelector(".ref-field-details-name"),
            this.nameInput.addEventListener("change", this.onNameChange.bind(this))),
            this.fields.includes("address") && (this.addressLineInput = this.node.querySelector(".ref-field-details-address-line"),
            this.addressLineInput.addEventListener("change", this.onAddressLineChange.bind(this))),
            this.fields.includes("city") && (this.cityInput = this.node.querySelector(".ref-field-details-city"),
            this.cityInput.addEventListener("change", this.onCityChange.bind(this))),
            this.fields.includes("country") && (this.countrySelect = this.node.querySelector(".ref-field-details-country"),
            this.regionSelect = this.node.querySelector(".ref-field-details-region"),
            this.postcodeField = this.node.querySelector(".ref-field-details-postcode").parentNode,
            this.postcodeInput = this.postcodeField.querySelector("input"),
            this.stateField = this.regionSelect.parentNode,
            this.postcodeInput.addEventListener("change", this.onPostcodeInput.bind(this)),
            this.countrySelect.addEventListener("change", this.onCountryChange.bind(this)),
            this.regionSelect.addEventListener("change", this.onRegionChange.bind(this)))
        }
        onNameChange(e) {
            this.model.name = e.target.value.trim()
        }
        onAddressLineChange(e) {
            this.model.address = e.target.value.trim()
        }
        onCityChange(e) {
            this.model.city = e.target.value.trim(),
            this.onChange()
        }
        onCountryChange(e) {
            this.model.state = "",
            this.model.country = e.target.value,
            this.update(!1, !0),
            this.onChange()
        }
        onRegionChange(e) {
            this.model.state = e.target.value,
            this.onChange()
        }
        onPostcodeInput(e) {
            this.model.postcode = e.target.value.trim(),
            this.onChange()
        }
        onChange() {
            this.options.onChange && this.options.onChange()
        }
        getCountryByCode(e) {
            return e ? this.options.getCountries().find(r=>r.country_code == e) : null
        }
        getCountries() {
            return this.options.getCountries()
        }
        update(e=!1, r=!1) {
            if (this.fields.includes("name") && (this.nameInput.value = this.model.name || ""),
            this.fields.includes("address") && (this.addressLineInput.value = this.model.address || ""),
            this.fields.includes("city") && (this.cityInput.value = this.model.city || ""),
            this.fields.includes("country")) {
                if (e) {
                    this.countrySelect.innerHTML = `<option value="">${y("cart.select_country")}</option>`;
                    for (let a of this.getCountries()) {
                        let s = d(`<option value="${a.country_code}">${a.country_name}</option>`);
                        a.country_code == this.model.country && (s.selected = !0),
                        this.countrySelect.append(s)
                    }
                }
                this.postcodeField.style.display = "none",
                this.stateField.style.display = "none",
                this.postcodeInput.disabled = !0,
                this.regionSelect.disabled = !0;
                let i = this.getCountryByCode(this.model.country);
                if (this.model.country && i) {
                    let a = !0;
                    if (this.options.fieldPrefix == "digital" && i.country_code != "US" && (a = !1),
                    a && i.has_postcode && (this.postcodeField.style.display = "block",
                    this.postcodeInput.disabled = !1,
                    this.postcodeInput.value = this.model.postcode || "",
                    this.postcodeField.querySelector("label span").textContent = i.postcode_title || v("postcode")),
                    a && i.has_regions && (this.stateField.style.display = "block",
                    this.regionSelect.disabled = !1,
                    this.stateField.querySelector("label span").textContent = i.region_title,
                    e || r)) {
                        this.regionSelect.innerHTML = `<option value="">${i.region_title}</option>`;
                        for (let[s,n] of Object.entries(i.regions)) {
                            let o = d(`<option value="${s}">${n}</option>`);
                            s == this.model.state && (o.selected = !0),
                            this.regionSelect.append(o)
                        }
                    }
                }
            }
            return this.node
        }
    }
      , dr = Se;
    var Ze = class extends R {
        constructor(e, r) {
            super(e, r);
            e.innerHTML = '<div class="reflow-add-to-cart ref-product-controls"></div>',
            this.button = d('<a href="#" class="ref-button"></a>'),
            this.controls = e.querySelector(".ref-product-controls"),
            this.onVariantChange = r == null ? void 0 : r.onVariantChange,
            this.personalizationValues = {}
        }
        init() {
            this.node.addEventListener("change", this.onChange.bind(this)),
            this.node.addEventListener("click", async e=>{
                if (!e.target.closest(".ref-button"))
                    return;
                if (e.preventDefault(),
                !this.node.dataset.reflowProduct || !parseInt(this.node.dataset.reflowProduct, 10)) {
                    console.error("Reflow: Add To Cart button is missing a product");
                    return
                }
                let r = parseInt(this.node.dataset.reflowProduct, 10)
                  , i = this.node.dataset.reflowVariant || null
                  , a = this.node.dataset.reflowQuantity || 1
                  , s = this.node.querySelector(".ref-personalization-form");
                if (s && !s.checkValidity()) {
                    s.reportValidity();
                    return
                }
                let n = [];
                for (let l of this.node.querySelectorAll(".ref-personalization-checkbox:checked, .ref-personalization.ref-required")) {
                    let c = l.closest(".ref-personalization");
                    if (!c || !c.id)
                        continue;
                    let h = {
                        id: c.id
                    }
                      , u = c.querySelector("input[type=text]");
                    u && (h.inputText = u.value.trim()),
                    n.push(h)
                }
                let o = new FormData;
                n.length && o.append("personalization", JSON.stringify(n));
                try {
                    let l = await Reflow.cart.addProduct(r, a, i, o)
                      , c = this.getCartURL()
                      , h = {
                        type: "success",
                        title: v("add_to_cart.success")
                    };
                    c && (h.button = v("add_to_cart.see_cart"),
                    h.buttonAction = ()=>{
                        window.location.href = c
                    }
                    ),
                    this.notification = new G(d('<div data-reflow-type="toast"></div>'),h),
                    this.notification.init(),
                    this.notification.show(),
                    this.setQuantity(1);
                    let u = this.node.querySelector(".ref-quantity-widget input");
                    u && (u.value = 1),
                    this.personalizationValues = {},
                    this.update()
                } catch (l) {
                    $(j(l, "system"), v("add_to_cart.error")),
                    console.error("Reflow: Couldn't add product to cart", l)
                }
            }
            )
        }
        onChange(e) {
            if (e.target.matches(".ref-field-variants")) {
                this.setVariant(e.target.value),
                this.onVariantChange && this.onVariantChange();
                return
            }
            if (e.target.matches(".ref-quantity-widget input")) {
                this.setQuantity(e.target.value);
                return
            }
            if (e.target.matches(".ref-personalization-checkbox")) {
                let r = e.target.closest(".ref-personalization")
                  , i = r.querySelector(".ref-instructions");
                i && (i.style.display = e.target.checked ? "block" : "none");
                let a = r.querySelector("input[type=text]");
                a && (a.style.display = e.target.checked ? "block" : "none",
                e.target.checked ? a.required = !0 : a.removeAttribute("required")),
                this.setPersonalizationInput(r.id, "checkbox", e.target.checked);
                return
            }
            if (e.target.matches(".ref-personalization-text-input")) {
                let r = e.target.closest(".ref-personalization");
                this.setPersonalizationInput(r.id, "text", e.target.value)
            }
        }
        getAPIEndpoint() {
            if (!this.node.dataset.reflowProduct)
                throw new Error("ID for product missing");
            return "/products/" + parseInt(this.node.dataset.reflowProduct, 10)
        }
        getProduct() {
            return this.node.dataset.reflowProduct
        }
        setProduct(e) {
            this.node.dataset.reflowProduct = e
        }
        getQuantity() {
            return this.node.dataset.reflowQuantity || 1
        }
        setQuantity(e=1) {
            this.node.dataset.reflowQuantity = e
        }
        getVariant() {
            return this.node.dataset.reflowVariant
        }
        setVariant(e) {
            this.node.dataset.reflowVariant = e
        }
        setText(e) {
            this.button.textContent = e
        }
        getAddToCartText() {
            return this.node.dataset.reflowAddtocartText
        }
        setAddToCartText(e="") {
            this.node.dataset.reflowAddtocartText = e
        }
        getCartURL() {
            return this.node.dataset.reflowShoppingcartUrl
        }
        setCartURL(e="") {
            this.node.dataset.reflowShoppingcartUrl = e
        }
        activate() {
            this.button.classList.remove("inactive")
        }
        deactivate() {
            this.button.classList.add("inactive")
        }
        setPersonalizationInput(e, r, i) {
            this.personalizationValues[e] || (this.personalizationValues[e] = {}),
            this.personalizationValues[e][r] = i
        }
        getPersonalizationInput(e, r) {
            return !this.personalizationValues[e] || !this.personalizationValues[e][r] ? null : this.personalizationValues[e][r]
        }
        async update(e) {
            var a;
            if (!e)
                try {
                    e = await this.fetchData()
                } catch (s) {
                    throw s.status == 404 ? this.node.textContent = v("product.missing") : this.node.textContent = "Unable to load product.",
                    s
                }
            let r = this.getAddToCartText() || v("add_to_cart.button_text");
            e.inStock || (r = v("out_of_stock")),
            this.setText(r),
            this.setProduct(e.id),
            this.activate();
            let i = this.parseShowString();
            if (this.controls.innerHTML = "",
            !e.inStock)
                this.deactivate();
            else if ((a = e.vacationMode) == null ? void 0 : a.enabled) {
                if (this.deactivate(),
                e.vacationMode.message.length) {
                    let s = d('<div class="ref-store-message"></div>');
                    s.textContent = e.vacationMode.message,
                    this.node.prepend(s)
                }
            } else {
                if ((i.full || i.variants) && e.variants.variants && e.variants.variants.length) {
                    let s = d('<div class="ref-variant"></div>')
                      , n = d("<label></label>")
                      , o = d("<span></span>");
                    o.textContent = e.variants.option_name || "",
                    n.append(o);
                    let l = d('<select class="ref-form-control ref-field-variants" name="variant-state" required></select>');
                    for (let c of e.variants.variants) {
                        let h = d("<option></option>");
                        h.value = c.id,
                        h.textContent = c.name,
                        c.in_stock || (h.disabled = !0),
                        l.append(h)
                    }
                    this.getVariant() && (l.value = this.getVariant()),
                    l.value && this.setVariant(l.value),
                    n.append(l),
                    s.append(n),
                    this.controls.append(s)
                }
                if (i.full || i.quantity) {
                    let s = d("<span></span>")
                      , n = new J(s,{
                        inStock: !0,
                        onChange: l=>{
                            this.setQuantity(l.getQuantity())
                        }
                    });
                    n.init();
                    let o = Math.min(e.availableQuantity, e.maxQty);
                    if (this.getVariant() && e.variants.variants) {
                        let l = e.variants.variants.find(c=>c.id == this.getVariant());
                        l && (o = Math.min(l.availableQuantity, e.maxQty),
                        n.setVariant(this.getVariant()))
                    }
                    n.setProduct(this.getProduct()),
                    n.setMaxQuantity(o),
                    n.setQuantity(this.getQuantity()),
                    n.update(),
                    this.controls.append(s)
                }
                if (e.personalization && e.personalization.length && (i.full || i.personalization)) {
                    let s = d('<form class="ref-personalization-holder ref-personalization-form"></form>');
                    for (let n of e.personalization) {
                        let o = d('<div class="ref-personalization"></div>');
                        o.id = n.id;
                        let l = !!this.getPersonalizationInput(n.id, "checkbox")
                          , c = n.required
                          , h = d('<span class="ref-row"></span>')
                          , u = d("<div></div>")
                          , p = d('<label class="ref-personalization-label"></label>');
                        if (p.textContent = n.name,
                        u.append(p),
                        h.append(u),
                        !c) {
                            let m = d('<input type="checkbox" class="ref-form-control ref-personalization-checkbox"></input>');
                            m.checked = l,
                            p.append(m);
                            let g = d('<span class="ref-price"></span>');
                            g.textContent = n.price > 0 ? n.priceFormatted : v("price_free"),
                            h.append(g)
                        }
                        if (o.append(h),
                        n.instructions && n.instructions.length) {
                            let m = d('<p class="ref-instructions"></p>');
                            m.textContent = n.instructions,
                            m.style.display = l || c ? "block" : "none",
                            o.append(m)
                        }
                        if (n.type == "text") {
                            let m = d('<input type="text" class="ref-form-control ref-personalization-text-input"></input>');
                            m.style.display = l || c ? "block" : "none",
                            (l || c) && (m.required = !0),
                            n.min && m.setAttribute("minlength", n.min),
                            n.max && m.setAttribute("maxlength", n.max),
                            o.append(m);
                            let g = this.getPersonalizationInput(n.id, "text");
                            g && (m.value = g)
                        }
                        n.required && (o.classList.add("ref-required"),
                        n.type == "text" && p.append(d(`<span title=${v("required")} > *</span>`)),
                        n.type == "checkbox" && p.append(d('<span class="ref-check"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg></span>'))),
                        s.append(o)
                    }
                    this.controls.append(s)
                }
            }
            if ((i.full || i.button) && (this.controls.append(this.button),
            e.minQty > 0)) {
                let s = d('<p class="ref-min-qty-message"></p>');
                s.textContent = v("add_to_cart.min_quantity_per_order", {
                    quantity: e.minQty
                }),
                this.controls.append(s)
            }
        }
    }
    ;
    S(Ze, "type", "add-to-cart");
    var Le = Ze;
    var _i = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
      , cr = t=>t.match(_i)[1]
      , hr = t=>{
        let e = cr(t);
        return {
            sm: "https://img.youtube.com/vi/" + e + "/default.jpg",
            md: "https://img.youtube.com/vi/" + e + "/mddefault.jpg",
            lg: "https://img.youtube.com/vi/" + e + "/hqdefault.jpg"
        }
    }
      , We = t=>"https://www.youtube.com/embed/" + cr(t)
      , ur = (t,e,r=[])=>{
        var i = document.getElementById(t);
        i && i.tagName.toUpperCase() != "IFRAME" && (i = i.getElementsByTagName("iframe")[0]),
        i && i.contentWindow.postMessage(JSON.stringify({
            event: "command",
            func: e,
            args: r
        }), "*")
    }
    ;
    var le = class extends R {
        constructor(e, r) {
            super(e, r);
            let i = d('<span data-reflow-type="add-to-cart"></span>');
            this.addToCart = new Le(i,{
                onVariantChange: this.update.bind(this)
            })
        }
        init() {
            this.node.addEventListener("click", this.onClick.bind(this)),
            this.addToCart.init()
        }
        onClick(e) {
            if (e.target.matches(".ref-thumbnails .ref-image")) {
                let r = d(".ref-thumbnails .ref-image", this.node)
                  , i = Array.from(r).indexOf(e.target);
                this.previewItem(i)
            }
            e.target.closest(".ref-preview") && this.gallery && this.gallery.openAt(this.activeIndex)
        }
        previewItem(e=0) {
            let r = d(".ref-preview .ref-image", this.node)
              , i = r[this.activeIndex];
            i && i.dataset.reflowPreviewType === "video" && ur("preview-" + this.activeIndex, "pauseVideo"),
            this.activeIndex = e;
            let a = d(".ref-thumbnails .ref-image", this.node)
              , s = a[e];
            a.forEach(n=>n.classList.remove("active")),
            s.classList.add("active"),
            r.forEach(n=>n.classList.remove("active")),
            r[e] && r[e].classList.add("active")
        }
        getAPIEndpoint() {
            let e = this.node.dataset.reflowProduct || new URL(location.href).searchParams.get("product");
            if (e)
                return "/products/" + parseInt(e, 10);
            throw new Error("ID for product missing")
        }
        getCartURL() {
            return this.node.dataset.reflowShoppingcartUrl
        }
        setCartURL(e) {
            this.node.dataset.reflowShoppingcartUrl = e
        }
        getAddToCartText() {
            return this.node.dataset.reflowAddtocartText
        }
        renderLightboxGallery(e) {
            this.isDemoMode() || (this.gallery ? this.gallery.setElements(e) : this.getLightboxInstance().then(r=>{
                this.gallery = r({
                    loop: !0,
                    elements: e
                })
            }
            ))
        }
        async getLightboxInstance() {
            return window.GLightbox ? window.GLightbox : (le._glightboxPromise || (le._glightboxPromise = new Promise((e,r)=>{
                let i = [];
                i.push(new Promise((a,s)=>{
                    let n = document.createElement("script");
                    n.onload = ()=>a(),
                    n.onerror = o=>s(o),
                    document.body.append(n),
                    n.src = "https://cdn.jsdelivr.net/gh/mcstudios/glightbox@3.1.0/dist/js/glightbox.min.js"
                }
                )),
                i.push(new Promise((a,s)=>{
                    let n = document.createElement("link");
                    n.onload = ()=>a(),
                    n.onerror = o=>s(o),
                    document.head.append(n),
                    n.rel = "stylesheet",
                    n.href = "https://cdn.jsdelivr.net/gh/mcstudios/glightbox@3.1.0/dist/css/glightbox.min.css"
                }
                )),
                Promise.all(i).then(()=>e(window.GLightbox)).catch(r)
            }
            )),
            le._glightboxPromise)
        }
        async update() {
            var o;
            let e, r = null;
            try {
                e = await this.fetchData()
            } catch (l) {
                throw l.status == 404 ? this.node.textContent = v("product.missing") : this.node.textContent = "Unable to load product.",
                l
            }
            ((o = e.variants) == null ? void 0 : o.variants) && (r = e.variants.variants.find(l=>!!l.in_stock),
            this.addToCart.getVariant() && (r = e.variants.variants.find(l=>l.id == this.addToCart.getVariant())));
            let i = this.parseShowString()
              , a = d('<div class="reflow-product"></div>');
            if (i.full || i.media) {
                let l = d('<div class="ref-media"></div>')
                  , c = d('<div class="ref-preview"></div>');
                if (l.append(c),
                !e.media.length) {
                    var s = d('<img class="ref-image active">');
                    s.src = e.image.md,
                    c.append(s)
                }
                let h = []
                  , u = this.activeIndex || 0
                  , p = e.media.length > 1
                  , m = d('<div class="ref-thumbnails"></div>');
                if (p && l.append(m),
                r) {
                    let g = e.media.findIndex(b=>b.id == r.image);
                    u = g >= 0 ? g : u
                }
                for (let g = 0; g < e.media.length; g++) {
                    let b = e.media[g]
                      , C = d('<div class="ref-thumbnail"></div>')
                      , _ = d('<div class="ref-image"></div>');
                    _.dataset.reflowPreviewType = b.type;
                    let w;
                    if (b.type == "image")
                        _.style.backgroundImage = `url('${b.src.sm}')`,
                        _.dataset.reflowPreview = b.url,
                        w = d('<img class="ref-image">'),
                        w.src = b.src.md,
                        w.dataset.reflowPreviewType = b.type,
                        h.push({
                            href: b.src.lg,
                            type: "image"
                        });
                    else {
                        let I = hr(b.url);
                        _.classList.add("ref-video"),
                        _.style.backgroundImage = `url('${I.sm}')`,
                        _.dataset.reflowPreview = We(b.url),
                        w = d(`
						<iframe id="preview-${g}"
							class="ref-image ref-video"
							frameborder="0"
							allowfullscreen="true"
							src="${We(b.url)}?enablejsapi=1">
						</iframe>`),
                        w.dataset.reflowPreviewType = b.type,
                        h.push({
                            href: b.url,
                            type: "video",
                            source: "youtube",
                            width: 900
                        })
                    }
                    c.append(w),
                    C.append(_),
                    m.append(C),
                    u == g && (this.activeIndex = g,
                    _.classList.add("active"),
                    w.classList.add("active"))
                }
                if (this.renderLightboxGallery(h),
                e.onSale.enabled && e.onSale.badgeText) {
                    let g = d('<div class="ref-sale-badge"></div>');
                    g.textContent = e.onSale.badgeText,
                    l.append(g)
                }
                a.append(l)
            }
            let n = d('<div class="ref-product-data"></div>');
            if (a.append(n),
            i.full || i.name) {
                let l = d('<h2 class="ref-name"></h2>');
                l.textContent = e.name,
                n.append(l)
            }
            if (i.full || i.categories) {
                let l = d('<div class="ref-categories"></div>');
                for (let c of e.categories) {
                    let h = d('<span class="ref-category"></span>');
                    this.node.dataset.reflowCategoryLink && (h = d('<a class="ref-category"></a>'),
                    h.href = this.node.dataset.reflowCategoryLink.replace(/\{id\}/g, c.id)),
                    h.textContent = c.name,
                    l.append(h)
                }
                n.append(l)
            }
            if (i.full || i.price) {
                let l = d('<strong class="ref-price"></strong>');
                if (l.textContent = e.priceFormatted,
                e.priceRange.length > 1 && r && (l.textContent = r.priceFormatted),
                e.onSale.enabled) {
                    l.classList.add("ref-on-sale");
                    let c = d('<s class="ref-original-price"></s>');
                    c.textContent = e.onSale.originalPriceFormatted,
                    e.priceRange.length > 1 && r && r.original_price && (c.textContent = r.originalPriceFormatted),
                    l.prepend(c)
                }
                n.append(l)
            }
            if (e.inventoryType == "advanced" && e.showQuantity) {
                let l = d('<span class="ref-qty-available"></span>');
                r ? l.textContent = v("product.left_in_stock", {
                    numberItems: r.availableQuantity
                }) : l.textContent = v("product.left_in_stock", {
                    numberItems: e.availableQuantity
                }),
                n.append(l)
            }
            if ((i.full || i["add-to-cart"]) && (this.addToCart.setCartURL(this.getCartURL()),
            this.addToCart.setAddToCartText(this.getAddToCartText()),
            this.addToCart.update(e),
            n.append(this.addToCart.node)),
            i.full || i.description) {
                let l = d('<div class="ref-description"></div>');
                l.innerHTML = e.descriptionHTML,
                n.append(l)
            }
            this.node.innerHTML = "",
            this.node.append(a)
        }
    }
      , Je = le;
    S(Je, "type", "product");
    var Te = Je;
    var Ye = class extends R {
        constructor(e, r={}) {
            super(e, r);
            this.backdrop = d('<div class="ref-backdrop"></div>'),
            this.productPreview = d(`<div class="ref-product-preview">
			<div class="ref-product-preview-header">
				<div class="ref-title"></div>
				<div class="ref-close-button">\xD7</div>
			</div>
			<div class="ref-product-preview-content"></div>
		</div>`),
            this.buttonToProduct = new WeakMap
        }
        init() {
            this.node.addEventListener("click", this.onClick.bind(this)),
            window.addEventListener("popstate", e=>{
                this.update()
            }
            )
        }
        getAPIEndpoint() {
            let e = this.node.dataset
              , r = new URL(location.href)
              , i = this.getPage()
              , a = e.reflowPerpage || r.searchParams.get("per_page") || 20
              , s = e.reflowCategory || r.searchParams.get("category")
              , n = e.reflowOrder || r.searchParams.get("order")
              , o = e.reflowSearch || r.searchParams.get("search")
              , l = e.reflowSimilarTo
              , c = `?page=${i}&perpage=${a}`;
            return s && (c += "&category=" + parseInt(s, 10)),
            n && (c += "&order=" + encodeURIComponent(n)),
            o && (c += "&search=" + encodeURIComponent(o)),
            l && (c += "&similarToProd=" + parseInt(l, 10)),
            "/products/" + c
        }
        onClick(e) {
            e.target.closest(".ref-backdrop") && (e.preventDefault(),
            this.hidePreview());
            let i = e.target.closest(".preview-toggle");
            if (i) {
                e.preventDefault();
                let n = this.buttonToProduct.get(i);
                if (!n)
                    return;
                let o = this.getCartURL()
                  , l = d('<div data-reflow-type="product"></div>')
                  , c = new Te(l);
                l.dataset.reflowProduct = n.id,
                l.dataset.reflowShow = "media,price,add-to-cart",
                o && c.setCartURL(o),
                c.init(),
                c.update();
                let h = d(".ref-product-preview-header .ref-title", this.productPreview)[0]
                  , u = d(".ref-product-preview-content", this.productPreview)[0];
                h.textContent = n.name,
                u.innerHTML = "",
                u.append(l),
                this.showPreview()
            }
            e.target.closest(".ref-close-button") && (e.preventDefault(),
            this.hidePreview());
            let s = e.target.closest(".ref-page-item");
            if (s) {
                e.preventDefault();
                let n = s.dataset.reflowPage
                  , o = new URL(window.location);
                o.searchParams.set("page", n),
                history.pushState({
                    page: n
                }, document.title, o),
                this.update()
            }
        }
        hidePreview() {
            this.productPreview.classList.remove("open"),
            this.isDemoMode() || (this.backdrop.remove(),
            this.backdrop.classList.remove("active"))
        }
        showPreview() {
            this.productPreview.classList.add("open"),
            this.isDemoMode() || (this.node.append(this.backdrop),
            this.backdrop.classList.add("active"))
        }
        getCartURL() {
            return this.node.dataset.reflowShoppingcartUrl
        }
        setCartURL(e) {
            this.node.dataset.reflowShoppingcartUrl = e
        }
        shouldShowAddToCart() {
            return this.node.dataset.hasOwnProperty("reflowAddtocart")
        }
        getAddToCartText() {
            return this.node.dataset.reflowAddtocartText || v("add_to_cart.button_text")
        }
        getPage() {
            let e, r = 1;
            return this.hasDynamicPagination() && (e = new URL(location.href).searchParams.get("page")),
            e || this.node.dataset.reflowPage || r
        }
        hasDynamicPagination() {
            let e = this.parseShowString();
            return e.full || e.pagination
        }
        renderPaginationItem(e=1, r="1", i=!1, a=!1, s="") {
            let n = d('<li class="ref-page-item"></li>');
            n.dataset.reflowPage = e;
            let o = i ? d('<span class="ref-page-link"></span>') : d('<a class="ref-page-link"></a>');
            if (o.textContent = r,
            s && (s == "ref-prev-btn" && (o.innerHTML = "<?xml version='1.0' encoding='iso-8859-1'?><svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 34.075 34.075' style='enable-background:new 0 0 34.075 34.075;' xml:space='preserve'><g><g><path style='fill:currentColor;' d='M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79 L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792 C25.58,33.883,25.075,34.075,24.57,34.075z'/></g></g></svg>"),
            s == "ref-next-btn" && (o.innerHTML = "<?xml version='1.0' encoding='iso-8859-1'?><svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 185.343 185.343' style='enable-background:new 0 0 185.343 185.343;' xml:space='preserve'><g><g><path style='fill:currentColor;' d='M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z'/></g></g></svg>"),
            o.classList.add(s)),
            i)
                n.classList.add("active");
            else {
                let l = new URL(window.location);
                l.searchParams.set("page", e),
                o.href = l
            }
            return a && n.classList.add("disabled"),
            n.append(o),
            n
        }
        renderPagination(e={}) {
            let r = e.current_page
              , i = e.per_page
              , a = e.total
              , s = Math.ceil(a / i);
            if (s <= 1)
                return document.createDocumentFragment();
            let n = d('<ul class="ref-pagination"></ul>')
              , o = r - 1 <= 0
              , l = o ? 1 : r - 1
              , c = r + 1 > s
              , h = c ? s : r + 1;
            n.append(this.renderPaginationItem(l, "", !1, o, "ref-prev-btn"));
            for (var u = 0; u < s; u++)
                n.append(this.renderPaginationItem(u + 1, u + 1, r === u + 1));
            return n.append(this.renderPaginationItem(h, "", !1, c, "ref-next-btn")),
            n
        }
        async update() {
            let e;
            try {
                e = await this.fetchData()
            } catch (n) {
                console.error("Reflow:", n)
            }
            if (!e || !e.data.length) {
                this.node.textContent = v("product_list.empty");
                return
            }
            let r = d('<div class="reflow-product-list"></div>')
              , i = d('<div class="ref-products"></div>')
              , a = this.node.dataset.reflowLayout;
            a && Ye.possibleLayouts.includes(a) && r.classList.add("ref-" + a);
            let s = this.parseShowString();
            for (let n of e.data) {
                let o = d('<div class="ref-product"></div>');
                this.node.dataset.reflowProductLink && (o = d('<a class="ref-product"></a>'),
                o.href = this.node.dataset.reflowProductLink.replace(/\{id\}/g, n.id));
                let l = d('<div class="ref-product-data"></div>')
                  , c = !1
                  , h = d('<div class="ref-product-info"></div>')
                  , u = !1;
                if (s.full || s.image) {
                    let p = d('<div class="ref-media">')
                      , m = d('<img class="ref-image">');
                    if (m.src = n.image.md,
                    m.loading = "lazy",
                    p.append(m),
                    n.onSale.enabled && n.onSale.badgeText) {
                        let g = d('<div class="ref-sale-badge"></div>')
                          , b = n.onSale.badgeText;
                        g.textContent = b,
                        p.append(g)
                    }
                    o.append(p)
                }
                if (s.full || s.name) {
                    let p = d('<h5 class="ref-name"></h5>');
                    p.textContent = n.name,
                    h.append(p),
                    u = !0,
                    c = !0
                }
                if (s.full || s.excerpt) {
                    let p = d('<p class="ref-excerpt"></p>');
                    p.textContent = n.excerpt,
                    h.append(p),
                    u = !0,
                    c = !0
                }
                if (u && l.append(h),
                s.full || s.price) {
                    let p = d('<strong class="ref-price"></strong>')
                      , m = d('<s class="ref-original-price"></s>');
                    if (n.priceRange.length > 1 && n.variants) {
                        let g = n.variants.variants.filter(C=>!!C.in_stock);
                        g.length || (g = n.variants.variants);
                        let b = g.sort((C,_)=>C.price - _.price)[0];
                        p.textContent = b.priceFormatted,
                        n.onSale.enabled && !!b.originalPriceFormatted && (p.classList.add("ref-on-sale"),
                        m.textContent = b.originalPriceFormatted,
                        p.prepend(m))
                    } else
                        p.textContent = n.priceFormatted,
                        n.onSale.enabled && (p.classList.add("ref-on-sale"),
                        m.textContent = n.onSale.originalPriceFormatted,
                        p.prepend(m));
                    l.append(p),
                    c = !0
                }
                if (c && o.append(l),
                n.inStock) {
                    if (s.full || s["add-to-cart"]) {
                        let p = d('<div class="ref-addons"></div>')
                          , m = d('<a href="#" class="ref-button preview-toggle"></a>');
                        m.textContent = this.getAddToCartText(),
                        this.buttonToProduct.set(m, n),
                        p.append(m),
                        o.append(p)
                    }
                } else {
                    let p = d('<div class="ref-addons out-of-stock"></div>')
                      , m = d('<a href="#" class="ref-button inactive"></a>');
                    m.textContent = v("out_of_stock"),
                    p.append(m),
                    o.append(p)
                }
                i.append(o)
            }
            if (r.append(i),
            s.full || s.pagination) {
                let n = this.renderPagination(e.meta);
                r.append(n)
            }
            (s.full || s["add-to-cart"]) && r.append(this.productPreview),
            this.node.innerHTML = "",
            this.node.append(r)
        }
    }
      , Pe = Ye;
    S(Pe, "type", "product-list"),
    S(Pe, "possibleLayouts", ["list", "cards"]);
    var pr = Pe;
    var Ke = class extends R {
        constructor(e, r={}) {
            super(e, r);
            e.innerHTML = `
			<div class="reflow-product-search">
				<div class="ref-input-wrapper">
					<input type="text" class="ref-search" inputmode="search" />
					<span class="ref-cancel-search"></span>
				</div>
			<div class="ref-button" type="submit"></div>
		</div>`,
            this.input = e.querySelector("input.ref-search"),
            this.cancel = e.querySelector("span.ref-cancel-search"),
            this.searchBtn = e.querySelector(".ref-button")
        }
        init() {
            this.input.addEventListener("keydown", this.onKeyDown.bind(this)),
            this.input.addEventListener("input", this.onInput.bind(this)),
            this.cancel.addEventListener("click", this.cancelSearch.bind(this)),
            this.searchBtn.addEventListener("click", this.redirectToProdListing.bind(this)),
            this.input.value = new URL(location.href).searchParams.get("search")
        }
        onKeyDown(e) {
            if (e.key == "Enter") {
                if (!this.input.value.trim().length) {
                    this.cancelSearch();
                    return
                }
                this.redirectToProdListing()
            }
            e.key == "Escape" && this.cancelSearch()
        }
        onInput() {
            this.cancel.style.display = this.input.value.length ? "block" : "none"
        }
        cancelSearch() {
            this.input.value = "";
            let e = new URL(location.href);
            e.searchParams.get("search") && (e.searchParams.set("search", ""),
            window.location = e.href),
            this.cancel.style.display = "none"
        }
        redirectToProdListing() {
            let e = this.input.value.trim();
            if (!e) {
                this.input.value = "",
                this.input.blur();
                return
            }
            let r = new URL(this.node.dataset.reflowSearchUrl || window.location.href,window.location.href);
            r.searchParams.set("search", e),
            r.searchParams.set("page", 1),
            window.location = r.href
        }
        async update() {
            var e, r;
            this.cancel.style.display = this.input.value.length ? "block" : "none",
            this.input.placeholder = (e = this.node.dataset.reflowPlaceholder) != null ? e : v("product_search.placeholder"),
            this.searchBtn.style.display = this.node.dataset.reflowShowButton == "true" ? "block" : "none",
            this.searchBtn.textContent = (r = this.node.dataset.reflowButtonText) != null ? r : v("product_search.button")
        }
    }
    ;
    S(Ke, "type", "product-search");
    var fr = Ke;
    var et = class extends R {
        constructor(e, r={}) {
            super(e, r);
            this.reflowCategoryLink = e.dataset.reflowCategoryLink
        }
        getAPIEndpoint() {
            let r = this.node.dataset.reflowRootCategory;
            return "categories" + (r ? "?root-category=" + parseInt(r, 10) : "")
        }
        async update() {
            let e = await this.fetchData();
            if (!e)
                return;
            let r = this.node.dataset.reflowLayout
              , i = d('<div class="reflow-category-list"></div>');
            r && et.possibleLayouts.includes(r) && i.classList.add("ref-" + r);
            let a = d('<ul class="ref-categories"></ul>');
            i.append(a),
            this.buildListsRecursive(a, e),
            this.node.innerHTML = "",
            this.node.append(i)
        }
        isLinkHrefActive(e) {
            try {
                let r = new URL(e)
                  , i = new URL(window.location.href);
                if (r.origin !== i.origin || r.pathname !== i.pathname)
                    return !1;
                for (let a of r.searchParams)
                    if (!i.searchParams.has(a[0]) || i.searchParams.get(a[0]) !== a[1])
                        return !1;
                return !0
            } catch (r) {
                return !1
            }
        }
        buildListsRecursive(e, r) {
            for (let i of r) {
                let a = d('<li class="ref-category"></li>')
                  , s = i.subcategories;
                e.append(a);
                let n = d("<span></span>");
                if (this.node.dataset.reflowCategoryLink && (n = d("<a></a>"),
                n.href = this.node.dataset.reflowCategoryLink.replace(/\{id\}/g, i.id),
                this.isLinkHrefActive(n.href) && n.classList.add("active")),
                n.textContent = i.name,
                a.append(n),
                s && s.length) {
                    this.node.dataset.reflowLayout !== "unstyled" && a.classList.add("ref-dropdown-toggle");
                    let o = d("<ul></ul>");
                    a.append(o),
                    this.buildListsRecursive(o, s)
                }
            }
        }
    }
      , ke = et;
    S(ke, "type", "category-list"),
    S(ke, "possibleLayouts", ["unstyled", "horizontal-bar", "vertical-bar"]);
    var mr = ke;
    var tt = class extends R {
        constructor(e, r={}) {
            super(e, r);
            S(this, "_state", null);
            S(this, "possibleTypes", ["dropdown", "sidebar"]);
            S(this, "backendUpdateTimeout", null);
            S(this, "pendingBackendUpdates", {});
            this.backdrop = d('<div class="ref-backdrop"></div>'),
            this.summary = d(`
			<div class="ref-summary">
				<div class="ref-summary-header">
					<h5 class="ref-summary-title">${y("cart")}</h5>
					<div class="ref-close-button">\xD7</div>
				</div>
				<div class="ref-summary-body">
					<div class="ref-loading-overlay"></div>
					<div class="ref-message">${y("cart.errors.empty")}</div>
					<div class="ref-cart-summary">
						<div class="ref-products"></div>
						<hr>
						<div class="ref-totals">
							<div class="ref-subtotal">
								<div class="ref-row"><span>${y("subtotal")}</span><span></span></div>
							</div>
							<div class="ref-shipping-taxes">${y("cart.subtotal_only")}</div>
						</div>
					</div>
				</div>
				<div class="ref-summary-footer">
					<a href="#" class="ref-button"></a>
				</div>
			</div>
		`),
            this.summaryBody = this.summary.querySelector(".ref-summary-body"),
            this.loadingOverlay = this.summary.querySelector(".ref-loading-overlay"),
            this.productContainer = this.summary.querySelector(".ref-products"),
            this.button = this.summary.querySelector(".ref-summary-footer .ref-button"),
            this.productQuantityWidget = new WeakMap
        }
        init() {
            this.node.addEventListener("click", this.onButtonClick.bind(this)),
            this.summary.addEventListener("click", this.onSidebarClick.bind(this)),
            this.scheduleRefresh = ce(this.refresh.bind(this), 250),
            Q("reflow-add-to-cart", this.scheduleRefresh),
            Q("reflow-update-cart-product", this.scheduleRefresh),
            Q("reflow-remove-cart-product", this.scheduleRefresh)
        }
        onButtonClick(e) {
            if (!e.target.closest(".ref-summary")) {
                this.toggle();
                return
            }
        }
        async onSidebarClick(e) {
            if (e.target.closest(".ref-close-button")) {
                e.preventDefault(),
                e.stopPropagation(),
                this.hide();
                return
            }
            if (e.target.closest(".ref-product-remove")) {
                e.preventDefault(),
                e.stopPropagation();
                let r = e.target.closest(".ref-product")
                  , i = this.productQuantityWidget.get(r)
                  , a = i.getProduct()
                  , s = i.getVariant()
                  , n = new FormData
                  , o = r.dataset.personalization;
                o && o.length && n.append("personalization", o),
                Reflow.cart.scheduleAPICall(a + "-remove", ()=>Reflow.cart.removeProduct(a, s, n), 0)
            }
        }
        get state() {
            return this.demoMode ? this._state || null : this._state || Reflow.cart.state || null
        }
        set state(e=null) {
            this._state = e
        }
        toggle() {
            this.isSummaryOpen() ? this.hide() : this.show()
        }
        hide() {
            this.summary.classList.remove("open"),
            !this.isDemoMode() && this.hasSummary() && (this.backdrop.remove(),
            this.backdrop.classList.remove("active")),
            this.refresh()
        }
        show() {
            this.summary.classList.add("open"),
            !this.isDemoMode() && this.hasSummary() && (this.node.append(this.backdrop),
            this.backdrop.classList.add("active")),
            this.refresh()
        }
        get key() {
            return localStorage.reflowCartKey
        }
        hasSummary() {
            return this.possibleTypes.includes(this.getSummaryType())
        }
        getSummaryType() {
            return this.node.dataset.reflowSummaryType
        }
        getSummaryPosition() {
            return this.node.dataset.reflowSummaryPosition
        }
        isSummaryOpen() {
            return this.summary.classList.contains("open")
        }
        getCartURL() {
            return this.node.dataset.reflowShoppingcartUrl
        }
        setCartURL(e) {
            this.node.dataset.reflowShoppingcartUrl = e
        }
        formatMoney(e) {
            return Y(e, this.state.currencyConfig)
        }
        calculateTotalQuantity() {
            return this.demoMode ? this.state ? this.state.products.reduce((e,r)=>e + r.quantity, 0) : 0 : Reflow && Reflow.cart ? Reflow.cart.quantity : 0
        }
        renderProductCompact(e) {
            let r = d(`
			<div class="ref-product">
				<div class="ref-product-col">
					<img class="ref-product-photo">
					<div class="ref-product-controls">
						<div class="ref-row">
							<div>
								<div class="ref-product-name"></div>
								<div class="ref-product-personalization-holder"></div>
							</div>
							<div class="ref-product-total"></div>
						</div>
						<div class="ref-product-quantity"></div>
						<div class="ref-product-qty-message"></div>
					</div>
				</div>
			</div>
		`)
              , i = e.name;
            e.variant && (i += ` (${e.variant.name})`);
            let a = d(".ref-product-photo", r)[0];
            if (a.src = e.image.sm,
            a.alt = i,
            d(".ref-product-name", r)[0].textContent = i,
            e.inStock && e.quantity > e.availableQuantity ? d(".ref-product-qty-message", r)[0].textContent = v("cart.left_in_stock", {
                in_stock: e.availableQuantity
            }) : e.inStock && e.quantity > e.maxQty ? d(".ref-product-qty-message", r)[0].textContent = v("cart.max_product_qty", {
                max_quantity: e.maxQty
            }) : d(".ref-product-qty-message", r)[0].remove(),
            d(".ref-product-total", r)[0].textContent = e.inStock ? this.formatMoney(e.price) : v("out_of_stock"),
            e.personalization && e.personalization.length)
                try {
                    r.dataset.personalization = JSON.stringify(e.personalization.map(c=>{
                        let h = {
                            id: c.id
                        };
                        return c.inputText && (h.inputText = c.inputText),
                        h
                    }
                    ));
                    let l = d(".ref-product-personalization-holder", r)[0];
                    for (let c of e.personalization) {
                        let h = d('<div class="ref-product-personalization"></div>')
                          , u = `${c.name}${c.inputText ? ': "' + c.inputText + '"' : ""}`;
                        h.title = u,
                        u = u.length > 25 ? u.substring(0, 25) + "..." : u,
                        h.textContent = u,
                        l.append(h)
                    }
                } catch (l) {
                    console.error("Reflow:", l)
                }
            let s = d("<div></div>")
              , n = new J(s,{
                inStock: e.inStock,
                onChange: l=>{
                    let c = l.getProduct()
                      , h = l.getQuantity()
                      , u = l.getVariant()
                      , p = new FormData
                      , m = r.dataset.personalization;
                    m && m.length && p.append("personalization", m),
                    Reflow.cart.scheduleAPICall(c + (u ? `-${u}` : "") + "-quantity", ()=>Reflow.cart.updateProduct(c, h, u, p))
                }
            });
            n.init(),
            e.variant && n.setVariant(e.variant.id),
            n.setProduct(e.id),
            n.setMaxQuantity(Math.min(e.availableQuantity, e.maxQty)),
            n.setQuantity(e.quantity),
            n.update();
            let o = d(".ref-product-quantity", r)[0];
            return o.append(n.node),
            o.append(d(`<div class="ref-product-remove">${y("remove")}</div>`)),
            this.productQuantityWidget.set(r, n),
            r
        }
        async refreshState() {
            if (this.mockData) {
                this.state = this.mockData;
                return
            }
            this.isSummaryOpen() && await Reflow.cart.refresh()
        }
        async refresh() {
            this.showLoading(),
            await this.refreshState(),
            this.hideLoading(),
            this.update()
        }
        showLoading() {
            this.loadingOverlay.classList.add("visible")
        }
        hideLoading() {
            this.loadingOverlay.classList.remove("visible")
        }
        async update() {
            if (!this.state)
                try {
                    await this.refreshState()
                } catch (r) {
                    this.productContainer.textContent = v("cart.errors.unavailable");
                    return
                }
            let e = this.calculateTotalQuantity();
            if (this.node.dataset.reflowCount = e,
            e ? this.node.classList.add("has-quantity") : this.node.classList.remove("has-quantity"),
            this.node.classList.add("reflow-cart-toggler"),
            this.hasSummary()) {
                if (this.isSummaryOpen()) {
                    let r = this.summaryBody.querySelector(".ref-cart-summary")
                      , i = this.summaryBody.querySelector(".ref-message");
                    this.productContainer.innerHTML = "";
                    let a = "close"
                      , s = v("close")
                      , n = "#";
                    if (!this.state.products.length)
                        r.style.display = "none",
                        i.style.display = "block";
                    else {
                        for (let h of this.state.products)
                            this.productContainer.append(this.renderProductCompact(h));
                        let l = this.summaryBody.querySelector(".ref-subtotal");
                        l.firstElementChild.children[1].textContent = this.formatMoney(this.state.subtotal);
                        let c = this.getCartURL();
                        c && (a = "checkout",
                        s = v("cart.checkout"),
                        n = c),
                        r.style.display = "flex",
                        i.style.display = "none"
                    }
                    a === "close" ? this.button.classList.add("ref-close-button") : this.button.classList.remove("ref-close-button"),
                    this.button.style.display = "inline-block",
                    this.button.href = n,
                    this.button.textContent = s
                }
                this.summary.classList.remove("sidebar", "dropdown", "left", "right"),
                this.summary.classList.add(this.getSummaryType(), this.getSummaryPosition()),
                this.node.append(this.summary),
                this.node.classList.add("has-summary")
            } else
                this.summary.remove(),
                this.node.classList.remove("has-summary");
            return this.node
        }
    }
    ;
    S(tt, "type", "view-cart");
    var yr = tt;
    var vr = class {
        constructor() {
            S(this, "_state", null);
            S(this, "backendUpdateTimeout", null);
            S(this, "pendingBackendUpdates", {});
            this.localFormData = new gr
        }
        calculateTotalQuantity() {
            return this.state ? this.state.products.reduce((e,r)=>e + r.quantity, 0) : 0
        }
        get key() {
            return localStorage.reflowCartKey
        }
        set key(e) {
            localStorage.reflowCartKey = e
        }
        get state() {
            return this._state
        }
        set state(e) {
            this._state = e,
            this.quantity = this.calculateTotalQuantity()
        }
        get quantity() {
            return parseInt(localStorage.reflowCartQuantity, 10) || 0
        }
        set quantity(e) {
            localStorage.reflowCartQuantity = e
        }
        async create() {
            return (await k("/carts/", {
                method: "POST"
            }, !1)).cartKey
        }
        async fetch(e, r={}) {
            let i = ""
              , a = [];
            for (let s in r)
                a.push(`${s}=${r[s]}`);
            return a.length && (i = "?" + a.join("&")),
            await k("/carts/" + e + i, {}, !1)
        }
        async refreshState(e={}) {
            try {
                if (this.key)
                    this.state = await this.fetch(this.key, e);
                else
                    throw new Error("No Key")
            } catch (r) {
                !r.status || r.status == 404 ? (this.key = await this.create(),
                this.state = await this.fetch(this.key, e),
                this.localFormData.clear()) : console.error("Reflow:", r)
            }
        }
        async refresh(e={}) {
            await this.refreshState(e)
        }
        async addProduct(e, r=1, i, a) {
            let s = "";
            this.key && (s = "?cartKey=" + this.key);
            let n = "/add-to-cart/" + e;
            n += "/" + r,
            i && (n += "/" + i),
            n += s;
            let o = await k(n, {
                method: "POST",
                body: a
            });
            return o.cartKey && (this.key = o.cartKey),
            Ce("reflow-add-to-cart", document, {
                productID: e
            }),
            this.quantity = o.cartQuantity,
            o
        }
        async updateProduct(e, r=1, i, a) {
            try {
                let s = await k(`/update-cart-product/${this.key}/${e}/` + r + "/" + (i || ""), {
                    method: "POST",
                    body: a
                }, !1);
                return Ce("reflow-update-cart-product", document, {
                    productID: e
                }),
                this.quantity = s.cartQuantity,
                s
            } catch (s) {
                $(j(s, "system"))
            }
        }
        async removeProduct(e, r, i) {
            let a = await k(`/remove-cart-product/${this.key}/${e}/` + (r || ""), {
                method: "POST",
                body: i
            }, !1);
            return Ce("reflow-remove-cart-product", document, {
                productID: e
            }),
            this.quantity = a.cartQuantity,
            a
        }
        async createPaypalOrder(e, r) {
            return (await k(`/create-paypal-order/${this.key}/`, {
                method: "POST"
            }, !1)).orderID
        }
        async capturePaypalOrder(e, r) {
            let i = new FormData;
            i.append("orderID", e.orderID);
            try {
                return await k(`/capture-paypal-order/${this.key}/`, {
                    method: "POST",
                    body: i
                }, !1)
            } catch (a) {
                if (!a.data)
                    throw a;
                let s = a.data
                  , n = Array.isArray(s.details) && s.details[0];
                if (n && n.issue === "INSTRUMENT_DECLINED")
                    return r.restart();
                throw a
            }
        }
        async updatePaypalShipping(e, r) {
            try {
                let i = new FormData;
                i.append("orderID", e.orderID),
                i.append("address", JSON.stringify(e.shipping_address));
                let a = 0;
                e.selected_shipping_option && e.selected_shipping_option.id && (a = e.selected_shipping_option.id),
                i.append("selectedShippingOption", a);
                let s = await k(`/update-paypal-shipping/${this.key}/`, {
                    method: "POST",
                    body: i
                }, !1);
                return r.resolve()
            } catch (i) {
                let a = i.data && i.data.errors && i.data.errors.system || "";
                return console.error("Reflow:", i),
                r.reject()
            }
        }
        scheduleAPICall(e, r, i=1e3) {
            this.pendingBackendUpdates[e] = r,
            clearTimeout(this.backendUpdateTimeout),
            this.backendUpdateTimeout = setTimeout(async()=>{
                let a = [];
                for (let s in this.pendingBackendUpdates)
                    a.push(this.pendingBackendUpdates[s]()),
                    delete this.pendingBackendUpdates[s];
                await Promise.allSettled(a)
            }
            , i)
        }
    }
      , gr = class {
        getAll() {
            return JSON.parse(localStorage.getItem("reflowFormData") || "{}")
        }
        get(e) {
            return this.getAll()[e]
        }
        set(e, r) {
            let i = this.getAll();
            i[e] = r || "",
            localStorage.setItem("reflowFormData", JSON.stringify(i))
        }
        isSet(e) {
            return this.get(e) !== void 0
        }
        clear() {
            localStorage.setItem("reflowFormData", "{}")
        }
    }
      , br = vr;
    var rt = class extends R {
        constructor(e, r) {
            super(e, r);
            this.retries = 0,
            this.maxRetries = 6,
            this.retryTimeout = 5e3,
            this.currencyConfig = {}
        }
        init() {}
        async fetchData() {
            if (this.mockData)
                return this.currencyConfig = this.mockData.currencyConfig,
                this.mockData;
            let e = this.getAPIEndpoint()
              , r = await k(e, {}, !1);
            return r.error ? (console.error("Reflow:", r.error),
            null) : (this.currencyConfig = r.currencyConfig,
            r)
        }
        getAPIEndpoint() {
            let e = new URL(location.href)
              , r = this.node.dataset;
            if (r.reflowOrder && r.reflowSecurehash)
                return "/orders/" + r.reflowOrder + "?secure_hash=" + r.reflowSecurehash;
            let i = e.searchParams.get("session_id");
            if (i)
                return "/orders/stripe/" + i + "/";
            let a = e.searchParams.get("order_id")
              , s = e.searchParams.get("secure_hash");
            if (a && s)
                return "/orders/" + a + "?secure_hash=" + s;
            let n = new Error("Invalid API parameters");
            throw n.missingParams = !0,
            n
        }
        formatMoney(e) {
            return Y(e, this.currencyConfig)
        }
        getDeliveryDate(e) {
            var r = new Date(e)
              , i = {
                month: "long",
                day: "numeric"
            };
            return r.toLocaleDateString(Reflow.locales.locale, i)
        }
        async update() {
            var p;
            let e, r = d('<div class="reflow-order-status">Loading</div>');
            this.node.innerHTML = "",
            this.node.append(r);
            try {
                e = await this.fetchData()
            } catch (m) {
                throw m.missingParams ? (r.textContent = v("order_status.check_email"),
                m) : (this.retries++,
                this.retries >= this.maxRetries ? (r.textContent = v("order_status.check_email"),
                m) : (setTimeout(()=>{
                    this.update()
                }
                , this.retryTimeout),
                m))
            }
            r.innerHTML = "";
            let i = d('<div class="col"></div>')
              , a = this.parseShowString()
              , s = d('<div class="ref-order-info"></div>')
              , n = d("<h2></h2>");
            n.innerHTML = y("order_status.order", {
                orderId: e.id
            }),
            s.append(n);
            let o = d('<div class="ref-order-line ref-status"></div>');
            o.innerHTML = "<b>" + y("order_status.status") + "</b>" + y("order_status." + e.status),
            s.append(o);
            let l = d('<div class="ref-order-line ref-created"></div>')
              , c = new Date(e.created_at * 1e3);
            if (l.innerHTML = `<b>${y("order_status.created")}</b>${c.toLocaleString()}`,
            s.append(l),
            e.status == "pending" && e.payment_instructions) {
                let m = d('<div class="ref-order-payment-instructions"></div>');
                m.innerHTML = e.payment_instructions,
                m.prepend(d("<br>")),
                m.prepend(d(`<b>${y("payment")}</b>`)),
                s.append(m)
            }
            let h = i.cloneNode();
            if (h.append(s),
            r.append(h),
            a.full || a.customer) {
                let m = d(`<div class="ref-order-customer"><h2>${y("order_status.customer_details")}</h2></div>`);
                if (e.customer.name) {
                    let C = d('<div class="ref-order-line ref-customer-name"></div>');
                    C.textContent = e.customer.name,
                    C.prepend(d(`<b>${y("name")}</b>`)),
                    m.append(C)
                }
                let g = d('<div class="ref-order-line ref-customer-email"></div>');
                if (g.textContent = e.customer.email,
                g.prepend(d(`<b>${y("email")}</b>`)),
                m.append(g),
                e.customer.phone) {
                    let C = d('<div class="ref-order-line ref-customer-phone"></div>');
                    C.textContent = e.customer.phone,
                    C.prepend(d(`<b>${y("phone")}</b>`)),
                    m.append(C)
                }
                let b = i.cloneNode();
                b.append(m),
                r.append(b)
            }
            let u;
            if (a.full || a.shipping) {
                let m = e.delivery_method || "shipping";
                if (m == "shipping") {
                    if (u = d(`<div class="ref-order-shipping"><h2>${y("shipping")}</h2></div>`),
                    e.shipping_method) {
                        let g = d(`<div class="ref-order-line ref-shipping-method"><b>${y("shipping_method")}</b></div>`)
                          , b = d("<span></span>");
                        if (b.textContent = e.shipping_method.name + (e.shipping_method.price ? " (" + this.formatMoney(e.shipping_method.price) + ")" : ""),
                        g.append(b),
                        u.append(g),
                        e.delivery_period) {
                            let C = d(`<div class="ref-order-line"><b>${y("cart.estimated_delivery")}</b></div>`)
                              , _ = d("<span></span>");
                            _.textContent = this.getDeliveryDate(e.delivery_period.start_date) + " - " + this.getDeliveryDate(e.delivery_period.end_date),
                            C.append(_),
                            u.append(C)
                        }
                    }
                    if (e.shipping_address) {
                        let g = d('<div class="ref-order-line ref-shipping-address"></div>');
                        for (let b of e.shipping_address) {
                            let C = d("<span></span>");
                            C.textContent = v(b.name) + ": " + b.val,
                            g.append(C)
                        }
                        g.prepend(d(`<b>${y("shipping_address")}</b>`)),
                        u.append(g)
                    }
                }
                if (m == "pickup") {
                    u = d(`<div class="ref-order-local-pickup"><h2>${y("pickup_at_store")}</h2></div>`);
                    let g = d(`<div class="ref-order-line"><b>${y("store")}</b></div>`)
                      , b = d("<span></span>");
                    b.textContent = e.pickup_location.name,
                    g.append(b),
                    u.append(g);
                    let C = d('<div class="ref-order-line"></div>');
                    for (let _ of e.pickup_location.address) {
                        let w = d("<span></span>");
                        w.textContent = _.name + ": " + _.val,
                        w.textContent = v(_.name) + ": " + _.val,
                        C.append(w)
                    }
                    C.prepend(d(`<b>${y("address")}</b>`)),
                    u.append(C);
                    for (let _ of ["phone", "email", "working_hours"])
                        if (e.pickup_location[_]) {
                            let w = d(`<div class="ref-order-line"><b>${y(_)}</b></div>`)
                              , I = d("<span></span>");
                            I.textContent = e.pickup_location[_],
                            w.append(I),
                            u.append(w)
                        }
                    if (e.delivery_period) {
                        let _ = d(`<div class="ref-order-line"><b>${y("cart.order_ready_for_pickup_label")}</b></div>`)
                          , w = d("<span></span>");
                        w.textContent = this.getDeliveryDate(e.delivery_period.start_date) + " - " + this.getDeliveryDate(e.delivery_period.end_date),
                        _.append(w),
                        u.append(_)
                    }
                }
                if (u) {
                    let g = i.cloneNode();
                    g.append(u),
                    r.append(g)
                }
            }
            if (e.note) {
                let m = d('<div class="ref-order-line ref-note"></div>');
                m.textContent = e.note,
                m.prepend(d(`<b>${y("note_to_seller")}</b>`)),
                u ? u.append(m) : s.append(m)
            }
            if ((a.full || a.billing) && e.billing_address) {
                let m = d(`<div class="ref-order-billing"><h2>${y("billing")}</h2></div>`)
                  , g = e.billing_address.find(_=>_.name == "Name");
                if (g) {
                    let _ = d(`<div class="ref-order-line ref-billing-address"><b>${y("billing_name")}</b></div>`)
                      , w = d("<span></span>");
                    w.textContent = g.val,
                    _.append(w),
                    m.append(_)
                }
                let b = d(`<div class="ref-order-line ref-billing-address"><b>${y("billing_address")}</b></div>`);
                for (let _ of e.billing_address) {
                    if (_.name == "Name")
                        continue;
                    let w = d("<span></span>");
                    w.textContent = v(_.name) + ": " + _.val,
                    b.append(w)
                }
                m.append(b);
                let C = i.cloneNode();
                C.append(m),
                r.append(C)
            }
            if (a.full || a["line-items"]) {
                let m = e.discounts ? e.discounts.amount : 0
                  , g = e.shipping_method ? e.shipping_method.price : 0
                  , b = e.paid_gross
                  , C = e.taxes ? e.taxes.amount : 0
                  , _ = b + m - g - C
                  , w = d(`<div class="ref-line-items"><h2>${y("order_status.order_summary")}</h2></div>`);
                for (let[M,B] of e.products.entries()) {
                    let D = d('<div class="ref-order-line ref-line-item ref-product-line"><div class="ref-name"></div><div class="ref-price"><b></b><small></small></div></div>');
                    if (D.querySelector(".ref-name").textContent = B.nameLine,
                    D.querySelector(".ref-price b").textContent = B.priceFormatted,
                    D.querySelector(".ref-price small").textContent = B.unitPriceLine,
                    w.append(D),
                    B.personalization && B.personalization.length) {
                        w.append(d(`<b>${y("order_status.product_personalizations")}</b>`));
                        for (let W of B.personalization) {
                            let V = d('<div class="ref-order-line ref-line-item ref-personalization-line"><div class="ref-name"></div><div class="ref-price"><small></small></div></div>');
                            if (V.querySelector(".ref-name").textContent = W.name,
                            W.inputText) {
                                V.querySelector(".ref-name").textContent = W.name + ": ";
                                let ee = d("<small></small>");
                                ee.textContent = '"' + W.inputText + '"',
                                V.querySelector(".ref-name").append(ee)
                            }
                            V.querySelector(".ref-price small").textContent = W.priceLine,
                            w.append(V)
                        }
                    }
                    M < e.products.length - 1 && w.append(d('<div class="ref-tiny-separator">\u2219\u2219\u2219\u2219\u2219</div>'))
                }
                let I = d(`<div class="ref-order-line ref-line-item">${y("subtotal")} <span class="ref-price"></span></div>`);
                if (I.querySelector(".ref-price").textContent = this.formatMoney(_),
                w.append(d("<hr>")),
                w.append(I),
                g) {
                    let M = d(`<div class="ref-order-line ref-line-item">${y("shipping")} <span class="ref-price"></span></div>`);
                    M.querySelector(".ref-price").textContent = this.formatMoney(g),
                    w.append(M)
                }
                if (m) {
                    let M = d('<div class="ref-order-line ref-line-item"><div class="ref-name"></div><span class="ref-price"></span></div>');
                    M.querySelector(".ref-name").textContent = e.discounts.coupon.name || e.discounts.coupon.code.toUpperCase(),
                    M.querySelector(".ref-price").textContent = "-" + this.formatMoney(m),
                    w.append(M)
                }
                if ((p = e.taxes) == null ? void 0 : p.amount) {
                    let M = e.taxes.details
                      , B = M.taxRate
                      , D = d('<div class="ref-order-line ref-line-item"><div class="ref-name"></div><span class="ref-price"></span></div>');
                    D.querySelector(".ref-name").textContent = B.name + " (" + B.rate + "%)" + (M.exemption ? " \u2013 " + M.exemption : ""),
                    D.querySelector(".ref-price").textContent = this.formatMoney(C),
                    w.append(D)
                }
                let U = d(`<div class="ref-order-line ref-line-item">${y("total")} <b><span class="ref-price"></span></b></div>`);
                U.querySelector(".ref-price").textContent = this.formatMoney(b),
                w.append(d("<hr>")),
                w.append(U);
                let O = i.cloneNode();
                O.append(w),
                r.append(O)
            }
            this.node.innerHTML = "",
            this.node.append(r)
        }
    }
    ;
    S(rt, "type", "order-status");
    var xr = rt;
    var wi = "en-US"
      , Ci = "Giỏ hàng" //"Shopping Cart"
      , Si = "Giỏ hàng" //"Cart"
      , Ei = "Sản phẩm" //"Product"
      , Li = "Giá" //"Price"
      , Ti = "Số lượng" //"Quantity"
      , Pi = "Thanh toán" //"Payment"
      , ki = "Tên" //"Name"
      , Ai = "Email"
      , Ii = "SĐT" //"Phone"
      , Hi = "Delivery"
      , Mi = "Shipping"
      , Bi = "Địa chỉ" //"Address"
      , Ri = "Thành phố" //"City"
      , Di = "Quốc gia" //"Country"
      , Ni = "Quận/ Huyện" //"State"
      , Oi = "Mã bưu chính" //"Postal Code"
      , qi = "Phương thức vận chuyển" //"Shipping Method"
      , Ui = "Địa chỉ nhận hàng" //"Shipping Address"
      , Fi = "Mua tại cửa hàng" //"Pickup at Store"
      , $i = "Cửa hàng" //"Store"
      , Gi = "Giờ làm việc" //"Working Hours"
      , Vi = "Billing"
      , zi = "Billing Name"
      , ji = "Billing Address"
      , Qi = "Ghi chú" //"Note"
      , Xi = "Tổng tiền phải trả" //"Total"
      , Zi = "Tổng số tiền" //"Subtotal"
      , Wi = "Free"
      , Ji = "Credit Card"
      , Yi = "Thanh toán tại cửa hàng" //"Pay on Pickup"
      , Ki = "Hết hàng" //"Out of Stock"
      , ea = "và" //"and"
      , ta = "Áp dụng" //"Apply"
      , ra = "Xóa" //"Remove"
      , ia = "Xóa" //"Clear"
      , aa = "Đóng" //"Close"
      , sa = "Error"
      , na = "Bắt buộc" //"Required"
      , oa = "Thanh toán" //"Checkout"
      , la = "Quay lại giỏ hàng" //"Back to Cart"
      , da = "Cập nhật giỏ hàng" //"Update Cart"
      , ca = "Hoàn tất đơn hàng" //"Complete Order"
      , ha = "Tôi đồng ý với {terms}" //"I agree to the {terms}"
      , ua = "Điều khoản & Điều kiện" //"Terms & Conditions"
      , pa = "Chính sách bảo mật" //"Privacy Policy"
      , fa = "Chính sách hoàn tiền" //"Refund Policy"
      , ma = "Chi tiết khách hàng" //"Customer Details"
      , ya = "Phí vận chuyển và thuế được tính khi thanh toán." //"Shipping and taxes are calculated during checkout."
      , va = "Nhận hàng tại {store}" //"Pick up at {store}"
      , ga = "Đơn hàng đã sẵn sàng để nhận" //"Order Ready for Pickup"
      , ba = "Dự tính giao hàng" //"Estimated Delivery"
      , xa = "Chọn một cửa hàng" //"Select a Store"
      , _a = "Thêm thông tin thanh toán" //"Add Billing Info"
      , wa = "Giao hàng đến địa chỉ" //"Deliver to Address"
      , Ca = "Chưa được chọn" //"Not yet selected"
      , Sa = "Chọn quốc gia" //"Select Country"
      , Ea = "Lưu ý cho người bán" //"Note to Seller"
      , La = "Nếu bạn có bất kỳ yêu cầu cụ thể nào muốn cung cấp cho người bán, hãy viết chúng ở đây." //"If you have any specific instructions you want to give to the seller, write them here."
      , Ta = "Áp dụng miễn thuế" //"Apply a Tax Exemption"
      , Pa = "Hồ sơ miễn thuế" //"Tax Exemption File"
      , ka = "Đinh kèm tài liệu hoặc hình ảnh miễn thuế của bạn" //"Attach a document or photo of your tax exemption"
      , Aa = "Nhập mã số VAT" //"Enter your EU VAT number"
      , Ia = "Miễn thuế hết hiệu lực" //"Tax exemption invalidated"
      , Ha = "Không thể áp dụng thông tin miễn thuế đã cung cấp cho địa chỉ mới được chọn." //"The provided tax exemption info could not be applied to the newly selected address."
      , Ma = "Nhập mã giảm giá" //"Enter coupon or promo code"
      , Ba = "Đã thêm mã giảm giá" //"Coupon added"
      , Ra = "Đã gỡ bỏ mã giảm giá" //"Coupon removed"
      , Da = "Tổng quan đơn hàng" //"Order Summary"
      , Na = "Hiển thị tổng quan" //"Show Summary"
      , Oa = "Giá thành bằng {currency}" //"All prices are in {currency}"
      , qa = "{in_stock, plural, =0 {0 sản phẩm trong kho} other {Chỉ còn # sản phẩm.}}" //"{in_stock, plural, =0 {0 items left in stock} other {Only # left in stock.}}"
      , Ua = "Chỉ được mua tối đa {max_quantity} sản phẩm này."
      , Fa = "Không thể tải giỏ hàng." //"Unable to load shopping cart."
      , $a = "Giỏ hàng của bạn đang trống."
      , Ga = "Không thể hoàn tất thanh toán." //"Couldn't complete checkout."
      , Va = "Số VAT không hợp lệ hoặc không thể được sử dụng trong các giao dịch xuyên biên giới." //"VAT number is invalid or can't be used in cross-border transactions."
      , za = "Không thể xác thực VAT." //"VAT could't be validated."
      , ja = "Sản phẩm không có sẵn. Xin vui lòng liên hệ với chúng tôi." //"Product delivery is not available. Please contact us."
      , Qa = "Không thể gửi đến địa chỉ này." //"The store is unable to ship your order to this address."
      , Xa = "Coupon không hợp lệ."
      , Za = "Coupon không thể áp dụng cho bất kỳ sản phẩm nào trong giỏ hàng của bạn." //"Coupon cannot be applied to any of the products in the cart."
      , Wa = "Coupon chỉ áp dụng cho đơn hàng có giá trị tối thiểu {amount}." //Coupon requires a minimum order amount of {amount}.
      , Ja = "Coupon đã hết hạn sử dụng."
      , Ya = "Có sản phẩm hết hàng." //"One or more products are out of stock."
      , Ka = "Chỉ có {available} {product} có sẵn tại cửa hàng. Có {in_cart} sản phẩm trong giỏ hàng." //"Only {available} {product} available in the store. There {in_cart, plural, =1 {is} other {are}} {in_cart} in your cart."
      , es = "Coupon không hợp lệ trong giỏ hàng. Vui lòng xóa coupon để tiếp tục thanh toán." //"Invalid coupon in cart. Please remove the coupon to continue with checkout."
      , ts = "Sản phẩm không thể giao đến địa chỉ được cung cấp." //"The products cannot be shipped to the provided address."
      , rs = "Giá trị sản phẩm tối thiểu để đặt hàng là {min_val}." //"The minimum product value for placing an order is {min_val}."
      , is = "Giá trị giỏ hàng vượt quá giới hạn được hỗ trợ." //"Cart value exceeds supported limits."
      , as = "Số lượng mua tối thiểu cho {product} là {min_qty}. Có {in_cart} sản phẩm trong giỏ hàng." //"The minimum purchase amount for {product} is at least {min_qty}. There {in_cart, plural, =1 {is} other {are}} {in_cart} in your cart."
      , ss = "Số lượng mua tối đa cho {product} là {max_qty}. {in_cart, plural, =0 {} =1 {Có 1 sản phẩm trong giỏ hàng.} other {Có # sản phẩm trong giỏ hàng.}}" //"A maximum of {max_qty} {product} can be purchased per customer. {in_cart, plural, =0 {} =1 {There is 1 already in your cart.} other {There are # already in your cart.}}"
      , ns = "{numberItems} sản phẩm trong kho"
      , os = "Sản phẩm này không tồn tại."
      , ls = "Hết hàng" //"Product is out of stock."
      , ds = "Không đủ hàng" //"Not enough items in stock."
      , cs = "Không tìm thấy sản phẩm" //"No products found"
      , hs = "Tìm kiếm" //"Search"
      , us = "Tìm kiếm" //"Search Products"
      , ps = "Thêm vào giỏ hàng" //"Add to Cart"
      , fs = "Sản phẩm đã được thêm vào giỏ hàng" //"Product added to cart."
      , ms = "Không thể thêm sản phẩm vào giỏ hàng" //"Couldn't add product to cart"
      , ys = "Xem giỏ hàng" //"See Cart"
      , vs = "Số lượng tối thiểu cho đơn hàng là {quantity}" //"Minimum Per Order is {quantity}"
      , gs = "Đơn hàng #{orderId}" //"Order #{orderId}"
      , bs = "Trạng thái" //"Status"
      , xs = "Đã tạo" //"Created"
      , _s = "Tổng quan đơn hàng" //"Order Summary"
      , ws = "Personalizations"
      , Cs = "Thông tin khách hàng" //"Customer Details"
      , Ss = "Đã xử lý" //"processed"
      , Es = "Đang chờ xử lý" //"pending"
      , Ls = "Đã giao" //"shipped"
      , Ts = "Sẵn sàng lấy hàng" //"ready for pickup"
      , Ps = "Đã nhận" //"received"
      , ks = "Đã hoàn trả" //"refunded"
      , As = "Đã hủy" //"cancelled"
      , Is = "Thanh toán thất bại" //"payment failed"
      , Hs = "Vui lòng xác nhận đơn hàng qua email." //"Please check your email for order confirmation."
      , Ms = "Lỗi! Cửa hàng hiện không tồn tại." //"The store is temporarily unavailable."
      , _r = {
        locale: wi,
        shopping_cart: Ci,
        cart: Si,
        product: Ei,
        price: Li,
        quantity: Ti,
        payment: Pi,
        name: ki,
        email: Ai,
        phone: Ii,
        delivery: Hi,
        shipping: Mi,
        address: Bi,
        city: Ri,
        country: Di,
        state: Ni,
        postcode: Oi,
        shipping_method: qi,
        shipping_address: Ui,
        pickup_at_store: Fi,
        store: $i,
        working_hours: Gi,
        billing: Vi,
        billing_name: zi,
        billing_address: ji,
        note_to_seller: Qi,
        total: Xi,
        subtotal: Zi,
        price_free: Wi,
        credit_card: Ji,
        pay_on_pickup: Yi,
        out_of_stock: Ki,
        and: ea,
        apply: ta,
        remove: ra,
        clear: ia,
        close: aa,
        error: sa,
        required: na,
        "cart.checkout": oa,
        "cart.back_to_cart": la,
        "cart.update": da,
        "cart.complete_order": ca,
        "cart.terms_agree": ha,
        "cart.terms_of_service": ua,
        "cart.privacy_policy": pa,
        "cart.refund_policy": fa,
        "cart.customer_details": ma,
        "cart.subtotal_only": ya,
        "cart.pickup_at_store": va,
        "cart.order_ready_for_pickup_label": ga,
        "cart.estimated_delivery": ba,
        "cart.select_store": xa,
        "cart.add_billing": _a,
        "cart.deliver_to_address": wa,
        "cart.shipping_not_selected": Ca,
        "cart.select_country": Sa,
        "cart.note_to_seller": Ea,
        "cart.note_to_seller_placeholder": La,
        "cart.tax_exemption_add": Ta,
        "cart.tax_exemption_file": Pa,
        "cart.tax_exemption_file_prompt": ka,
        "cart.tax_exemption_number_prompt": Aa,
        "cart.tax_exemption_cleared": Ia,
        "cart.tax_exemption_cleared_details": Ha,
        "cart.coupon_placeholder": Ma,
        "cart.coupon_added": Ba,
        "cart.coupon_removed": Ra,
        "cart.order_summary": Da,
        "cart.show_summary": Na,
        "cart.prices_currency_description": Oa,
        "cart.left_in_stock": qa,
        "cart.max_product_qty": Ua,
        "cart.errors.unavailable": Fa,
        "cart.errors.empty": $a,
        "cart.errors.cannot_complete": Ga,
        "cart.errors.vat_number_invalid": Va,
        "cart.errors.vat_number_validation_fail": za,
        "cart.errors.delivery_unavailable": ja,
        "cart.errors.address_not_supported": Qa,
        "cart.errors.coupon_invalid_code": Xa,
        "cart.errors.coupon_no_matching_products": Za,
        "cart.errors.coupon_min_amount": Wa,
        "cart.errors.coupon_expired": Ja,
        "cart.errors.out_of_stock": Ya,
        "cart.errors.unavailable_quantity": Ka,
        "cart.errors.invalid_coupon": es,
        "cart.errors.cannot_ship": ts,
        "cart.errors.min_val_not_reached": rs,
        "cart.errors.max_val_exceeded": is,
        "cart.errors.product_min_qty_not_reached": as,
        "cart.errors.product_max_qty_exceeded": ss,
        "product.left_in_stock": ns,
        "product.missing": os,
        "product.out_of_stock": ls,
        "product.unavailable_quantity": ds,
        "product_list.empty": cs,
        "product_search.button": hs,
        "product_search.placeholder": us,
        "add_to_cart.button_text": ps,
        "add_to_cart.success": fs,
        "add_to_cart.error": ms,
        "add_to_cart.see_cart": ys,
        "add_to_cart.min_quantity_per_order": vs,
        "order_status.order": gs,
        "order_status.status": bs,
        "order_status.created": xs,
        "order_status.order_summary": _s,
        "order_status.product_personalizations": ws,
        "order_status.customer_details": Cs,
        "order_status.processed": Ss,
        "order_status.pending": Es,
        "order_status.shipped": Ls,
        "order_status.ready_for_pickup": Ts,
        "order_status.received": Ps,
        "order_status.refunded": ks,
        "order_status.cancelled": As,
        "order_status.payment_failed": Is,
        "order_status.check_email": Hs,
        store_unavailable: Ms
    };
    var wr = "2.0.0";
    var it = document.currentScript
      , at = parseInt(it.getAttribute("data-reflow-store"), 10)
      , Cr = !!it.getAttribute("data-reflow-dev")
      , Sr = it.getAttribute("data-reflow-locale");
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Er) : Er();
    async function Er() {
        if (!(!at && (console.error("Reflow: Invalid Store ID"),
        !Cr))) {
            if ("Reflow"in window) {
                console.error("Reflow: window.Reflow already exists");
                return
            }
            window.Reflow = {
                APIURL: "https://api.reflowhq.com/v1",
                storeID: at,
                version: wr,
                cart: new br,
                scan: Tr,
                api: k,
                locales: _r
            },
            Sr && await fetch(Sr).then(t=>t.json()).then(t=>lr(t)).then(t=>Object.assign(window.Reflow.locales, t)).catch(t=>console.error("Reflow: unable to load localization file")),
            setTimeout(()=>{
                document.dispatchEvent(new Event("reflow-ready",{
                    cancelable: !0
                })) && Tr(Cr)
            }
            , 0)
        }
    }
    var Lr = new WeakSet;
    function Tr(t=!1) {
        let e = [];
        e.push(...Te.scan()),
        e.push(...pr.scan()),
        e.push(...fr.scan()),
        e.push(...mr.scan()),
        e.push(...dr.scan()),
        e.push(...Le.scan()),
        e.push(...xr.scan()),
        e.push(...yr.scan()),
        e.length > 10 && console.warn("Reflow: Only the first 10 components on this page will be rendered, the rest will be ignored."),
        e = e.slice(0, 10);
        for (let r of e)
            if (!Lr.has(r.node)) {
                if (Lr.add(r.node),
                r.init(),
                t && !at) {
                    r.node.innerHTML = "No Reflow Store ID provided.";
                    continue
                }
                r.update().catch(i=>console.error("Reflow:", i))
            }
    }
}
)();
