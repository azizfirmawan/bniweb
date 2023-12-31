! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).faceapi = t.faceapi || {}) }(this, function(c) {
        "use strict";
        var r = function(t, e) {
            return (r = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
        };

        function t(t, e) {
            function n() { this.constructor = t }
            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }

        function y(i, a, s, u) {
            return new(s = s || Promise)(function(t, e) {
                function n(t) { try { o(u.next(t)) } catch (t) { e(t) } }

                function r(t) { try { o(u.throw(t)) } catch (t) { e(t) } }

                function o(e) { e.done ? t(e.value) : new s(function(t) { t(e.value) }).then(n, r) }
                o((u = u.apply(i, a || [])).next())
            })
        }

        function R(n, r) {
            var o, i, a, t, s = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] };
            return t = { next: e(0), throw: e(1), return: e(2) }, "function" == typeof Symbol && (t[Symbol.iterator] = function() { return this }), t;

            function e(e) {
                return function(t) {
                    return function(e) {
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                            switch (i = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return s.label++, { value: e[1], done: !1 };
                                case 5:
                                    s.label++, i = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) { s = 0; continue }
                                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) { s.label = e[1]; break }
                                    if (6 === e[0] && s.label < a[1]) { s.label = a[1], a = e; break }
                                    if (a && s.label < a[2]) { s.label = a[2], s.ops.push(e); break }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            e = r.call(n, s)
                        } catch (t) { e = [6, t], i = 0 } finally { o = a = 0 }
                        if (5 & e[0]) throw e[1];
                        return { value: e[0] ? e[1] : void 0, done: !0 }
                    }([e, t])
                }
            }
        }
        var o = (e.prototype.setPlatform = function(t, e) { null != this.platform && console.warn("Platform " + this.platformName + " has already been set. Overwriting the platform with " + e + "."), this.platformName = t, this.platform = e }, e.prototype.registerFlag = function(t, e, n) {
            if (this.flagRegistry[t] = { evaluationFn: e, setHook: n }, null != this.urlFlags[t]) {
                var r = this.urlFlags[t];
                console.warn("Setting feature override from URL " + t + ": " + r + "."), this.set(t, r)
            }
        }, e.prototype.get = function(t) { return t in this.flags || (this.flags[t] = this.evaluateFlag(t)), this.flags[t] }, e.prototype.getNumber = function(t) { return this.get(t) }, e.prototype.getBool = function(t) { return this.get(t) }, e.prototype.getFlags = function() { return this.flags }, Object.defineProperty(e.prototype, "features", { get: function() { return this.flags }, enumerable: !0, configurable: !0 }), e.prototype.set = function(t, e) {
            if (null == this.flagRegistry[t]) throw new Error("Cannot set flag " + t + " as it has not been registered.");
            this.flags[t] = e, null != this.flagRegistry[t].setHook && this.flagRegistry[t].setHook(e)
        }, e.prototype.evaluateFlag = function(t) { if (null == this.flagRegistry[t]) throw new Error("Cannot evaluate flag '" + t + "': no evaluation function found."); return this.flagRegistry[t].evaluationFn() }, e.prototype.setFlags = function(t) { this.flags = Object.assign({}, t) }, e.prototype.reset = function() { this.flags = {}, this.urlFlags = {}, this.populateURLFlags() }, e.prototype.populateURLFlags = function() {
            var o = this;
            if (void 0 !== this.global && void 0 !== this.global.location && void 0 !== this.global.location.search) {
                var t, r, e = (t = this.global.location.search, r = {}, t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; return function(t, e, n) { t[decodeURIComponent(e)] = decodeURIComponent(n || "") }(r, e[0], e[1]), e.join("=") }), r);
                "tfjsflags" in e && e.tfjsflags.split(",").forEach(function(t) {
                    var e = t.split(":"),
                        n = e[0],
                        r = e[1];
                    o.urlFlags[n] = function(t, e) { if ("true" === (e = e.toLowerCase()) || "false" === e) return "true" === e; if ("" + +e === e) return +e; throw new Error("Could not parse value flag value " + e + " for flag " + t + ".") }(n, r)
                })
            }
        }, e);

        function e(t) { this.global = t, this.flags = {}, this.flagRegistry = {}, this.urlFlags = {}, this.populateURLFlags() }

        function _() { return i }
        var i = null,
            u = new Map,
            n = new Map;

        function g(t, e) { var n = f(t, e); return u.get(n) }

        function l(t) { return n.get(t) }

        function a(t) {
            for (var e = u.entries(), n = [];;) {
                var r = e.next(),
                    o = r.done,
                    i = r.value;
                if (o) break;
                var a = i[0],
                    s = i[1];
                a.split("_")[0] === t && n.push(s)
            }
            return n
        }

        function s(t) {
            var e = t.kernelName,
                n = t.backendName,
                r = f(e, n);
            if (u.has(r)) throw new Error("The kernel '" + e + "' for backend '" + n + "' is already registered");
            u.set(r, t)
        }

        function h(t) {
            var e = t.kernelName;
            n.has(e) && console.warn("Overriding the gradient for '" + e + "'"), n.set(e, t)
        }

        function f(t, e) { return e + "_" + t }

        function p(t) { for (var e = t.length, n = 0, r = 0; 0 < e;) r = Math.random() * e | 0, n = t[--e], t[e] = t[r], t[r] = n }

        function d(t, e, n) { return Math.max(t, Math.min(e, n)) }

        function E(t) { return t % 2 == 0 ? t : t + 1 }

        function v(t) { for (var e = 0, n = 0; n < t.length; n++) e += t[n]; return e }

        function P(t, e) { if (!t) throw new Error("string" == typeof e ? e : e()) }

        function x(t, e, n) { void 0 === n && (n = ""), P(A(t, e), function() { return n + " Shapes " + t + " and " + e + " must match" }) }

        function m(t) { P(null != t, function() { return "The input to the tensor constructor must be a non-null value." }) }

        function b(t, e, n) {
            if (void 0 === e && (e = []), void 0 === n && (n = !1), null == e && (e = []), Array.isArray(t) || z(t) && !n)
                for (var r = 0; r < t.length; ++r) b(t[r], e, n);
            else e.push(t);
            return e
        }

        function L(t) { if (0 === t.length) return 1; for (var e = t[0], n = 1; n < t.length; n++) e *= t[n]; return e }

        function A(t, e) {
            if (t === e) return !0;
            if (null == t || null == e) return !1;
            if (t.length !== e.length) return !1;
            for (var n = 0; n < t.length; n++)
                if (t[n] !== e[n]) return !1;
            return !0
        }

        function B(t) { return t % 1 == 0 }

        function w(t) { if (null != Math.tanh) return Math.tanh(t); if (t === 1 / 0) return 1; if (t === -1 / 0) return -1; var e = Math.exp(2 * t); return (e - 1) / (e + 1) }

        function C(t) { var e = Math.ceil(Math.sqrt(t)); return [e, Math.ceil(t / e)] }

        function I(t, e) { return e <= t.length ? t : t + " ".repeat(e - t.length) }

        function k(i, a, s) {
            return void 0 === a && (a = function(t) { return 0 }), new Promise(function(e, n) {
                var r = 0,
                    o = function() {
                        if (i()) e();
                        else {
                            var t = a(++r);
                            null != s && s <= r ? n() : setTimeout(o, t)
                        }
                    };
                o()
            })
        }

        function S(t, e) {
            for (var n = 1, r = -1, o = 0; o < t.length; ++o)
                if (0 <= t[o]) n *= t[o];
                else if (-1 === t[o]) {
                if (-1 !== r) throw Error("Shapes can only have 1 implicit size. Found -1 at dim " + r + " and dim " + o);
                r = o
            } else if (t[o] < 0) throw Error("Shapes can not be < 0. Found " + t[o] + " at dim " + o);
            if (-1 === r) { if (0 < e && e !== n) throw Error("Size(" + e + ") must match the product of shape " + t); return t }
            if (0 === n) throw Error("Cannot infer the missing size in [" + t + "] when there are 0 elements");
            if (e % n != 0) throw Error("The implicit shape can't be a fractional number. Got " + e + " / " + n);
            var i = t.slice();
            return i[r] = e / n, i
        }

        function D(t, e) { var n = e.length; return P((t = null == t ? e.map(function(t, e) { return e }) : [].concat(t)).every(function(t) { return -n <= t && t < n }), function() { return "All values in axis param must be in range [-" + n + ", " + n + ") but got axis " + t }), P(t.every(function(t) { return B(t) }), function() { return "All values in axis param must be integers but got axis " + t }), t.map(function(t) { return t < 0 ? n + t : t }) }

        function T(t, e) {
            for (var n = [], r = [], o = null != e && Array.isArray(e) && 0 === e.length, i = null == e || o ? null : D(e, t).sort(), a = 0, s = 0; s < t.length; ++s) {
                if (null != i) {
                    if (i[a] === s && 1 !== t[s]) throw new Error("Can't squeeze axis " + s + " since its dim '" + t[s] + "' is not 1");
                    (null == i[a] || i[a] > s) && 1 === t[s] && (n.push(t[s]), r.push(s)), i[a] <= s && a++
                }
                1 !== t[s] && (n.push(t[s]), r.push(s))
            }
            return { newShape: n, keptDims: r }
        }

        function N(t, e) {
            var n = null;
            if (null == t || "float32" === t) n = new Float32Array(e);
            else if ("int32" === t) n = new Int32Array(e);
            else {
                if ("bool" !== t) throw new Error("Unknown data type " + t);
                n = new Uint8Array(e)
            }
            return n
        }

        function F(t, e) {
            var n = null;
            if (null == t || "float32" === t) n = new Float32Array(e);
            else if ("int32" === t) n = new Int32Array(e);
            else if ("bool" === t) n = new Uint8Array(e);
            else {
                if ("string" !== t) throw new Error("Unknown data type " + t);
                n = new Array(e)
            }
            return n
        }

        function M(t, e) { for (var n = 0; n < t.length; n++) { var r = t[n]; if (isNaN(r) || !isFinite(r)) throw Error("A tensor of type " + e + " being uploaded contains " + r + ".") } }

        function O(t) { return "bool" === t || "complex64" === t || "float32" === t || "int32" === t || "string" === t }

        function W(t, e) { return !("complex64" === e || "float32" === e && "complex64" !== t || "int32" === e && "float32" !== t && "complex64" !== t || "bool" === e && "bool" === t) }

        function z(t) { return t instanceof Float32Array || t instanceof Int32Array || t instanceof Uint8Array }

        function U(t) { if ("float32" === t || "int32" === t) return 4; if ("complex64" === t) return 8; if ("bool" === t) return 1; throw new Error("Unknown dtype " + t) }

        function V(t) { if (null == t) return 0; var e = 0; return t.forEach(function(t) { return e += t.length }), e }

        function G(t) { return "string" == typeof t || t instanceof String }

        function H(t) { return "boolean" == typeof t }

        function q(t) { return "number" == typeof t }

        function j(t) { return Array.isArray(t) ? j(t[0]) : t instanceof Float32Array ? "float32" : t instanceof Int32Array || t instanceof Uint8Array ? "int32" : q(t) ? "float32" : G(t) ? "string" : H(t) ? "bool" : "float32" }

        function K(t) { return !!(t && t.constructor && t.call && t.apply) }

        function X(t, e) {
            for (var n = e; n < t; ++n)
                if (t % n == 0) return n;
            return t
        }

        function Y(t) {
            var e = t.length;
            if (e < 2) return [];
            var n = new Array(e - 1);
            n[e - 2] = t[e - 1];
            for (var r = e - 3; 0 <= r; --r) n[r] = n[r + 1] * t[r + 1];
            return n
        }

        function $(t, e, n) { if ("string" === e) throw new Error("Cannot convert a string[] to a TypedArray"); if (Array.isArray(t) && (t = b(t)), n && M(t, e), t instanceof Float32Array && "float32" === e || t instanceof Int32Array && "int32" === e || t instanceof Uint8Array && "bool" === e) return t; if (null == e || "float32" === e || "complex64" === e) return new Float32Array(t); if ("int32" === e) return new Int32Array(t); if ("bool" !== e) throw new Error("Unknown data type " + e); for (var r = new Uint8Array(t.length), o = 0; o < r.length; ++o) 0 !== Math.round(t[o]) && (r[o] = 1); return r }

        function J(t, e) {
            if (0 === t.length) return e[0];
            var n = t.reduce(function(t, e) { return t * e });
            if (0 === n) return [];
            if (n !== e.length) throw new Error("[" + t + "] does not match the input size.");
            return function t(e, n, r) {
                var o = new Array;
                if (1 === n.length)
                    for (var i = n[0], a = 0; a < i; a++) o[a] = r[e + a];
                else {
                    i = n[0];
                    var s = n.slice(1),
                        u = s.reduce(function(t, e) { return t * e });
                    for (a = 0; a < i; a++) o[a] = t(e + a * u, s, r)
                }
                return o
            }(0, t, e)
        }

        function Q(t, e) { for (var n = Z(t, e), r = 0; r < n.length; r++) n[r] = 1; return n }

        function Z(t, e) { if (null == e || "float32" === e || "complex64" === e) return new Float32Array(t); if ("int32" === e) return new Int32Array(t); if ("bool" === e) return new Uint8Array(t); throw new Error("Unknown data type " + e) }

        function tt() { return _().platform.now() }

        function et(e) { e.forEach(function(t) { P(Number.isInteger(t) && 0 <= t, function() { return "Tensor must have a shape comprised of positive integers but got shape [" + e + "]." }) }) }

        function nt(t, e) { return void 0 === e && (e = "utf-8"), e = e || "utf-8", _().platform.encode(t, e) }

        function rt(t, e) { return void 0 === e && (e = "utf-8"), e = e || "utf-8", _().platform.decode(t, e) }

        function ot(t, e, n) { if (0 === e) return 0; if (1 === e) return t[0]; for (var r = t[t.length - 1], o = 0; o < t.length - 1; ++o) r += n[o] * t[o]; return r }

        function it(t, e, n) { if (0 === e) return []; if (1 === e) return [t]; for (var r = new Array(e), o = 0; o < r.length - 1; ++o) r[o] = Math.floor(t / n[o]), t -= r[o] * n[o]; return r[r.length - 1] = t, r }
        var at = Object.freeze({
                shuffle: p,
                clamp: d,
                nearestLargerEven: E,
                sum: v,
                randUniform: function(t, e) { var n = Math.random(); return e * n + (1 - n) * t },
                distSquared: function(t, e) {
                    for (var n = 0, r = 0; r < t.length; r++) {
                        var o = Number(t[r]) - Number(e[r]);
                        n += o * o
                    }
                    return n
                },
                assert: P,
                assertShapesMatch: x,
                assertNonNull: m,
                flatten: b,
                sizeFromShape: L,
                isScalarShape: function(t) { return 0 === t.length },
                arraysEqual: A,
                isInt: B,
                tanh: w,
                sizeToSquarishShape: C,
                createShuffledIndices: function(t) { for (var e = new Uint32Array(t), n = 0; n < t; ++n) e[n] = n; return p(e), e },
                rightPad: I,
                repeatedTry: k,
                inferFromImplicitShape: S,
                parseAxisParam: D,
                squeezeShape: T,
                getTypedArrayFromDType: N,
                getArrayFromDType: F,
                checkConversionForErrors: M,
                isValidDtype: O,
                hasEncodingLoss: W,
                isTypedArray: z,
                bytesPerElement: U,
                bytesFromStringArray: V,
                isString: G,
                isBoolean: H,
                isNumber: q,
                inferDtype: j,
                isFunction: K,
                nearestDivisor: X,
                computeStrides: Y,
                toTypedArray: $,
                toNestedArray: J,
                makeOnesTypedArray: Q,
                makeZerosTypedArray: Z,
                now: tt,
                assertNonNegativeIntegerDimensions: et,
                fetch: function(t, e) { return _().platform.fetch(t, e) },
                encodeString: nt,
                decodeString: rt,
                locToIndex: ot,
                indexToLoc: it
            }),
            st = (ut.prototype.profileKernel = function(o, i, t) {
                var e, a = this,
                    s = this.backendTimer.time(function() { e = t() });
                return e.forEach(function(r) {
                    r.data().then(function(n) {
                        ! function(t, e, n) {
                            if ("float32" === e)
                                for (var r = 0; r < t.length; r++) { var o = t[r]; if (isNaN(o) || !isFinite(o)) return console.warn("Found " + o + " in the result of '" + n + "'") }
                        }(n, r.dtype, o), s.then(function(t) {
                            var e = "";
                            null != t.getExtraProfileInfo && (e = t.getExtraProfileInfo()), a.logger.logKernelProfile(o, r, n, t.kernelMs, i, e)
                        })
                    })
                }), e
            }, ut);

        function ut(t, e) { this.backendTimer = t, null == (this.logger = e) && (this.logger = new ct) }
        var ct = (lt.prototype.logKernelProfile = function(t, e, n, r, o, i) {
            var a = "number" == typeof r ? I(r + "ms", 9) : r.error,
                s = I(t, 25),
                u = e.rank,
                c = e.size,
                l = I(e.shape.toString(), 14),
                h = "";
            for (var f in o) {
                var p = o[f].shape || e.shape,
                    d = p.length;
                h += f + ": " + d + "D " + (0 < d ? p : "") + " "
            }
            console.log("%c" + s + "\t%c" + a + "\t%c" + u + "D " + l + "\t%c" + c + "\t%c" + h + "\t%c" + i, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green", "color: steelblue")
        }, lt);

        function lt() {}
        var ht = 7;

        function ft(t, e, n) { return I(Array.isArray(t) ? parseFloat(t[0].toFixed(ht)) + " + " + parseFloat(t[1].toFixed(ht)) + "j" : G(t) ? "'" + t + "'" : "bool" === n ? pt(t) : parseFloat(t.toFixed(ht)).toString(), e) }

        function pt(t) { return 0 === t ? "false" : "true" }

        function dt(t) { for (var e = [], n = 0; n < t.length; n += 2) e.push([t[n], t[n + 1]]); return e }
        var vt = (xt.prototype.set = function(t) {
                for (var e = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                0 === n.length && (n = [0]), P(n.length === this.rank, function() { return "The number of provided coordinates (" + n.length + ") must match the rank (" + e.rank + ")" });
                var o = this.locToIndex(n);
                this.values[o] = t
            }, xt.prototype.get = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                0 === t.length && (t = [0]);
                for (var n = 0, r = 0, o = t; r < o.length; r++) {
                    var i = o[r];
                    if (i < 0 || i >= this.shape[n]) { var a = "Requested out of range element at " + t + ". Buffer shape=" + this.shape; throw new Error(a) }
                    n++
                }
                for (var s = t[t.length - 1], u = 0; u < t.length - 1; ++u) s += this.strides[u] * t[u];
                return this.values[s]
            }, xt.prototype.locToIndex = function(t) { if (0 === this.rank) return 0; if (1 === this.rank) return t[0]; for (var e = t[t.length - 1], n = 0; n < t.length - 1; ++n) e += this.strides[n] * t[n]; return e }, xt.prototype.indexToLoc = function(t) { if (0 === this.rank) return []; if (1 === this.rank) return [t]; for (var e = new Array(this.shape.length), n = 0; n < e.length - 1; ++n) e[n] = Math.floor(t / this.strides[n]), t -= e[n] * this.strides[n]; return e[e.length - 1] = t, e }, Object.defineProperty(xt.prototype, "rank", { get: function() { return this.shape.length }, enumerable: !0, configurable: !0 }), xt.prototype.toTensor = function() { return mt().makeTensor(this.values, this.shape, this.dtype) }, xt),
            mt = null,
            gt = null,
            yt = null;

        function xt(t, e, n) {
            var r = this;
            if (this.dtype = e, this.shape = t.slice(), this.size = L(t), null != n) {
                var o = n.length;
                P(o === this.size, function() { return "Length of values '" + o + "' does not match the size inferred by the shape '" + r.size + "'." })
            }
            if ("complex64" === e) throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");
            this.values = n || F(e, this.size), this.strides = Y(t)
        }
        var bt = (wt.prototype.flatten = function() { return this.throwIfDisposed(), this.as1D() }, wt.prototype.asScalar = function() { return this.throwIfDisposed(), P(1 === this.size, function() { return "The array must have only 1 element." }), this.reshape([]) }, wt.prototype.as1D = function() { return this.throwIfDisposed(), this.reshape([this.size]) }, wt.prototype.as2D = function(t, e) { return this.throwIfDisposed(), this.reshape([t, e]) }, wt.prototype.as3D = function(t, e, n) { return this.throwIfDisposed(), this.reshape([t, e, n]) }, wt.prototype.as4D = function(t, e, n, r) { return this.throwIfDisposed(), this.reshape([t, e, n, r]) }, wt.prototype.as5D = function(t, e, n, r, o) { return this.throwIfDisposed(), this.reshape([t, e, n, r, o]) }, wt.prototype.asType = function(t) { return this.throwIfDisposed(), gt.cast(this, t) }, Object.defineProperty(wt.prototype, "rank", { get: function() { return this.shape.length }, enumerable: !0, configurable: !0 }), wt.prototype.buffer = function() {
            return y(this, void 0, void 0, function() {
                var e;
                return R(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.data()];
                        case 1:
                            return e = t.sent(), [2, gt.buffer(this.shape, this.dtype, e)]
                    }
                })
            })
        }, wt.prototype.bufferSync = function() { return gt.buffer(this.shape, this.dtype, this.dataSync()) }, wt.prototype.array = function() {
            return y(this, void 0, void 0, function() {
                var e;
                return R(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.data()];
                        case 1:
                            return e = t.sent(), [2, J(this.shape, e)]
                    }
                })
            })
        }, wt.prototype.arraySync = function() { return J(this.shape, this.dataSync()) }, wt.prototype.data = function() {
            return y(this, void 0, void 0, function() {
                var e, n;
                return R(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.throwIfDisposed(), e = mt().read(this.dataId), "string" !== this.dtype ? [3, 2] : [4, e];
                        case 1:
                            n = t.sent();
                            try { return [2, n.map(function(t) { return rt(t) })] } catch (t) { throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().") }
                            t.label = 2;
                        case 2:
                            return [2, e]
                    }
                })
            })
        }, wt.prototype.dataSync = function() {
            this.throwIfDisposed();
            var t = mt().readSync(this.dataId);
            if ("string" === this.dtype) try { return t.map(function(t) { return rt(t) }) } catch (t) { throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().") }
            return t
        }, wt.prototype.bytes = function() {
            return y(this, void 0, void 0, function() {
                var e;
                return R(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.throwIfDisposed(), [4, mt().read(this.dataId)];
                        case 1:
                            return e = t.sent(), "string" === this.dtype ? [2, e] : [2, new Uint8Array(e.buffer)]
                    }
                })
            })
        }, wt.prototype.dispose = function() { this.isDisposed || (mt().disposeTensor(this), this.isDisposedInternal = !0) }, Object.defineProperty(wt.prototype, "isDisposed", { get: function() { return this.isDisposedInternal }, enumerable: !0, configurable: !0 }), wt.prototype.throwIfDisposed = function() { if (this.isDisposed) throw new Error("Tensor is disposed.") }, wt.prototype.toFloat = function() { return this.asType("float32") }, wt.prototype.toInt = function() { return this.asType("int32") }, wt.prototype.toBool = function() { return this.asType("bool") }, wt.prototype.print = function(t) { return void 0 === t && (t = !1), gt.print(this, t) }, wt.prototype.reshape = function(t) { return this.throwIfDisposed(), gt.reshape(this, t) }, wt.prototype.reshapeAs = function(t) { return this.throwIfDisposed(), this.reshape(t.shape) }, wt.prototype.expandDims = function(t) { return void 0 === t && (t = 0), gt.expandDims(this, t) }, wt.prototype.cumsum = function(t, e, n) { return void 0 === t && (t = 0), void 0 === e && (e = !1), void 0 === n && (n = !1), gt.cumsum(this, t, e, n) }, wt.prototype.squeeze = function(t) { return this.throwIfDisposed(), gt.squeeze(this, t) }, wt.prototype.clone = function() { return this.throwIfDisposed(), gt.clone(this) }, wt.prototype.oneHot = function(t, e, n) { return this.throwIfDisposed(), gt.oneHot(this, t, e, n) }, wt.prototype.toString = function(t) {
            return void 0 === t && (t = !1),
                function(t, e, n, r) {
                    var o = Y(e),
                        i = function(t, e, n, r) {
                            var o = L(e),
                                i = r[r.length - 1],
                                a = new Array(i).fill(0),
                                s = e.length,
                                u = "complex64" === n ? dt(t) : t;
                            if (1 < s)
                                for (var c = 0; c < o / i; c++)
                                    for (var l = c * i, h = 0; h < i; h++) a[h] = Math.max(a[h], ft(u[l + h], 0, n).length);
                            return a
                        }(t, e, n, o),
                        a = e.length,
                        s = function t(e, n, r, o, i, a) {
                            void 0 === a && (a = !0);
                            var s = "complex64" === r ? 2 : 1,
                                u = n[0],
                                c = n.length;
                            if (0 === c) return "complex64" === r ? [ft(dt(e)[0], 0, r)] : "bool" === r ? [pt(e[0])] : [e[0].toString()];
                            if (1 === c) {
                                if (20 < u) {
                                    var l = 3 * s,
                                        h = Array.from(e.slice(0, l)),
                                        f = Array.from(e.slice((u - 3) * s, u * s));
                                    return "complex64" === r && (h = dt(h), f = dt(f)), ["[" + h.map(function(t, e) { return ft(t, i[e], r) }).join(", ") + ", ..., " + f.map(function(t, e) { return ft(t, i[u - 3 + e], r) }).join(", ") + "]"]
                                }
                                return ["[" + ("complex64" === r ? dt(e) : Array.from(e)).map(function(t, e) { return ft(t, i[e], r) }).join(", ") + "]"]
                            }
                            var p = n.slice(1),
                                d = o.slice(1),
                                v = o[0] * s,
                                m = [];
                            if (20 < u) {
                                for (var g = 0; g < 3; g++) {
                                    var y = (x = g * v) + v;
                                    m.push.apply(m, t(e.slice(x, y), p, r, d, i, !1))
                                }
                                for (m.push("..."), g = u - 3; g < u; g++) y = (x = g * v) + v, m.push.apply(m, t(e.slice(x, y), p, r, d, i, g === u - 1))
                            } else
                                for (g = 0; g < u; g++) {
                                    var x;
                                    y = (x = g * v) + v, m.push.apply(m, t(e.slice(x, y), p, r, d, i, g === u - 1))
                                }
                            var b = 2 === c ? "," : "";
                            for (m[0] = "[" + m[0] + b, g = 1; g < m.length - 1; g++) m[g] = " " + m[g] + b;
                            var w = ",\n";
                            for (g = 2; g < c; g++) w += "\n";
                            return m[m.length - 1] = " " + m[m.length - 1] + "]" + (a ? "" : w), m
                        }(t, e, n, o, i),
                        u = ["Tensor"];
                    return r && (u.push(" dtype: " + n), u.push(" rank: " + a), u.push(" shape: [" + e + "]"), u.push(" values:")), u.push(s.map(function(t) { return " " + t }).join("\n")), u.join("\n")
                }(this.dataSync(), this.shape, this.dtype, t)
        }, wt.prototype.tile = function(t) { return this.throwIfDisposed(), gt.tile(this, t) }, wt.prototype.gather = function(t, e) { return void 0 === e && (e = 0), this.throwIfDisposed(), gt.gather(this, t, e) }, wt.prototype.matMul = function(t, e, n) { return void 0 === e && (e = !1), void 0 === n && (n = !1), this.throwIfDisposed(), gt.matMul(this, t, e, n) }, wt.prototype.dot = function(t) { return this.throwIfDisposed(), gt.dot(this, t) }, wt.prototype.norm = function(t, e, n) { return void 0 === t && (t = "euclidean"), void 0 === e && (e = null), void 0 === n && (n = !1), this.throwIfDisposed(), gt.norm(this, t, e, n) }, wt.prototype.slice = function(t, e) { return this.throwIfDisposed(), gt.slice(this, t, e) }, wt.prototype.reverse = function(t) { return this.throwIfDisposed(), gt.reverse(this, t) }, wt.prototype.concat = function(t, e) { return void 0 === e && (e = 0), this.throwIfDisposed(), t instanceof wt && (t = [t]), gt.concat([this].concat(t), e) }, wt.prototype.split = function(t, e) { return void 0 === e && (e = 0), this.throwIfDisposed(), gt.split(this, t, e) }, wt.prototype.stack = function(t, e) { return void 0 === e && (e = 0), gt.stack([this, t], e) }, wt.prototype.unstack = function(t) { return void 0 === t && (t = 0), gt.unstack(this, t) }, wt.prototype.pad = function(t, e) { return void 0 === e && (e = 0), gt.pad(this, t, e) }, wt.prototype.batchNormalization = function(t, e, n, r, o) { return void 0 === n && (n = .001), yt("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"), this.batchNorm(t, e, o, r, n) }, wt.prototype.batchNorm = function(t, e, n, r, o) { return void 0 === o && (o = .001), this.throwIfDisposed(), gt.batchNorm(this, t, e, n, r, o) }, wt.prototype.all = function(t, e) { return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.all(this, t, e) }, wt.prototype.any = function(t, e) { return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.any(this, t, e) }, wt.prototype.logSumExp = function(t, e) { return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.logSumExp(this, t, e) }, wt.prototype.sum = function(t, e) { return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.sum(this, t, e) }, wt.prototype.prod = function(t, e) { return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.prod(this, t, e) }, wt.prototype.mean = function(t, e) { return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.mean(this, t, e) }, wt.prototype.min = function(t, e) { return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.min(this, t, e) }, wt.prototype.max = function(t, e) { return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.max(this, t, e) }, wt.prototype.argMin = function(t) { return void 0 === t && (t = null), this.throwIfDisposed(), gt.argMin(this, t) }, wt.prototype.argMax = function(t) { return void 0 === t && (t = null), this.throwIfDisposed(), gt.argMax(this, t) }, wt.prototype.cast = function(t) { return this.throwIfDisposed(), gt.cast(this, t) }, wt.prototype.add = function(t) { return this.throwIfDisposed(), gt.add(this, t) }, wt.prototype.addStrict = function(t) { return this.throwIfDisposed(), gt.addStrict(this, t) }, wt.prototype.atan2 = function(t) { return this.throwIfDisposed(), gt.atan2(this, t) }, wt.prototype.sub = function(t) { return this.throwIfDisposed(), gt.sub(this, t) }, wt.prototype.subStrict = function(t) { return this.throwIfDisposed(), gt.subStrict(this, t) }, wt.prototype.pow = function(t) { return this.throwIfDisposed(), gt.pow(this, t) }, wt.prototype.powStrict = function(t) { return this.throwIfDisposed(), gt.powStrict(this, t) }, wt.prototype.mul = function(t) { return this.throwIfDisposed(), gt.mul(this, t) }, wt.prototype.mulStrict = function(t) { return this.throwIfDisposed(), gt.mulStrict(this, t) }, wt.prototype.div = function(t) { return this.throwIfDisposed(), gt.div(this, t) }, wt.prototype.divNoNan = function(t) { return this.throwIfDisposed(), gt.divNoNan(this, t) }, wt.prototype.floorDiv = function(t) { return this.throwIfDisposed(), gt.floorDiv(this, t) }, wt.prototype.divStrict = function(t) { return this.throwIfDisposed(), gt.divStrict(this, t) }, wt.prototype.minimum = function(t) { return this.throwIfDisposed(), gt.minimum(this, t) }, wt.prototype.minimumStrict = function(t) { return this.throwIfDisposed(), gt.minimumStrict(this, t) }, wt.prototype.maximum = function(t) { return this.throwIfDisposed(), gt.maximum(this, t) }, wt.prototype.maximumStrict = function(t) { return this.throwIfDisposed(), gt.maximumStrict(this, t) }, wt.prototype.mod = function(t) { return this.throwIfDisposed(), gt.mod(this, t) }, wt.prototype.modStrict = function(t) { return this.throwIfDisposed(), gt.modStrict(this, t) }, wt.prototype.squaredDifferenceStrict = function(t) { return this.throwIfDisposed(), gt.squaredDifferenceStrict(this, t) }, wt.prototype.transpose = function(t) { return this.throwIfDisposed(), gt.transpose(this, t) }, wt.prototype.notEqual = function(t) { return this.throwIfDisposed(), gt.notEqual(this, t) }, wt.prototype.notEqualStrict = function(t) { return this.throwIfDisposed(), gt.notEqualStrict(this, t) }, wt.prototype.less = function(t) { return this.throwIfDisposed(), gt.less(this, t) }, wt.prototype.lessStrict = function(t) { return this.throwIfDisposed(), gt.lessStrict(this, t) }, wt.prototype.equal = function(t) { return this.throwIfDisposed(), gt.equal(this, t) }, wt.prototype.equalStrict = function(t) { return this.throwIfDisposed(), gt.equalStrict(this, t) }, wt.prototype.lessEqual = function(t) { return this.throwIfDisposed(), gt.lessEqual(this, t) }, wt.prototype.lessEqualStrict = function(t) { return this.throwIfDisposed(), gt.lessEqualStrict(this, t) }, wt.prototype.greater = function(t) { return this.throwIfDisposed(), gt.greater(this, t) }, wt.prototype.greaterStrict = function(t) { return this.throwIfDisposed(), gt.greaterStrict(this, t) }, wt.prototype.greaterEqual = function(t) { return this.throwIfDisposed(), gt.greaterEqual(this, t) }, wt.prototype.greaterEqualStrict = function(t) { return this.throwIfDisposed(), gt.greaterEqualStrict(this, t) }, wt.prototype.logicalAnd = function(t) { return this.throwIfDisposed(), gt.logicalAnd(this, t) }, wt.prototype.logicalOr = function(t) { return this.throwIfDisposed(), gt.logicalOr(this, t) }, wt.prototype.logicalNot = function() { return this.throwIfDisposed(), gt.logicalNot(this) }, wt.prototype.logicalXor = function(t) { return this.throwIfDisposed(), gt.logicalXor(this, t) }, wt.prototype.where = function(t, e) { return this.throwIfDisposed(), gt.where(t, this, e) }, wt.prototype.neg = function() { return this.throwIfDisposed(), gt.neg(this) }, wt.prototype.ceil = function() { return this.throwIfDisposed(), gt.ceil(this) }, wt.prototype.floor = function() { return this.throwIfDisposed(), gt.floor(this) }, wt.prototype.sign = function() { return this.throwIfDisposed(), gt.sign(this) }, wt.prototype.isNaN = function() { return this.throwIfDisposed(), gt.isNaN(this) }, wt.prototype.isInf = function() { return this.throwIfDisposed(), gt.isInf(this) }, wt.prototype.isFinite = function() { return this.throwIfDisposed(), gt.isFinite(this) }, wt.prototype.exp = function() { return this.throwIfDisposed(), gt.exp(this) }, wt.prototype.expm1 = function() { return this.throwIfDisposed(), gt.expm1(this) }, wt.prototype.log = function() { return this.throwIfDisposed(), gt.log(this) }, wt.prototype.log1p = function() { return this.throwIfDisposed(), gt.log1p(this) }, wt.prototype.sqrt = function() { return this.throwIfDisposed(), gt.sqrt(this) }, wt.prototype.rsqrt = function() { return this.throwIfDisposed(), gt.rsqrt(this) }, wt.prototype.square = function() { return this.throwIfDisposed(), gt.square(this) }, wt.prototype.reciprocal = function() { return this.throwIfDisposed(), gt.reciprocal(this) }, wt.prototype.abs = function() { return this.throwIfDisposed(), gt.abs(this) }, wt.prototype.clipByValue = function(t, e) { return this.throwIfDisposed(), gt.clipByValue(this, t, e) }, wt.prototype.relu = function() { return this.throwIfDisposed(), gt.relu(this) }, wt.prototype.relu6 = function() { return this.throwIfDisposed(), gt.relu6(this) }, wt.prototype.elu = function() { return this.throwIfDisposed(), gt.elu(this) }, wt.prototype.selu = function() { return this.throwIfDisposed(), gt.selu(this) }, wt.prototype.leakyRelu = function(t) { return void 0 === t && (t = .2), this.throwIfDisposed(), gt.leakyRelu(this, t) }, wt.prototype.prelu = function(t) { return this.throwIfDisposed(), gt.prelu(this, t) }, wt.prototype.sigmoid = function() { return this.throwIfDisposed(), gt.sigmoid(this) }, wt.prototype.logSigmoid = function() { return this.throwIfDisposed(), gt.logSigmoid(this) }, wt.prototype.softplus = function() { return this.throwIfDisposed(), gt.softplus(this) }, wt.prototype.zerosLike = function() { return this.throwIfDisposed(), gt.zerosLike(this) }, wt.prototype.onesLike = function() { return this.throwIfDisposed(), gt.onesLike(this) }, wt.prototype.sin = function() { return this.throwIfDisposed(), gt.sin(this) }, wt.prototype.cos = function() { return this.throwIfDisposed(), gt.cos(this) }, wt.prototype.tan = function() { return this.throwIfDisposed(), gt.tan(this) }, wt.prototype.asin = function() { return this.throwIfDisposed(), gt.asin(this) }, wt.prototype.acos = function() { return this.throwIfDisposed(), gt.acos(this) }, wt.prototype.atan = function() { return this.throwIfDisposed(), gt.atan(this) }, wt.prototype.sinh = function() { return this.throwIfDisposed(), gt.sinh(this) }, wt.prototype.cosh = function() { return this.throwIfDisposed(), gt.cosh(this) }, wt.prototype.tanh = function() { return this.throwIfDisposed(), gt.tanh(this) }, wt.prototype.asinh = function() { return this.throwIfDisposed(), gt.asinh(this) }, wt.prototype.acosh = function() { return this.throwIfDisposed(), gt.acosh(this) }, wt.prototype.atanh = function() { return this.throwIfDisposed(), gt.atanh(this) }, wt.prototype.erf = function() { return this.throwIfDisposed(), gt.erf(this) }, wt.prototype.round = function() { return this.throwIfDisposed(), gt.round(this) }, wt.prototype.step = function(t) { return void 0 === t && (t = 0), this.throwIfDisposed(), gt.step(this, t) }, wt.prototype.softmax = function(t) { return void 0 === t && (t = -1), this.throwIfDisposed(), gt.softmax(this, t) }, wt.prototype.logSoftmax = function(t) { return void 0 === t && (t = -1), this.throwIfDisposed(), gt.logSoftmax(this, t) }, wt.prototype.resizeBilinear = function(t, e) { return void 0 === e && (e = !1), this.throwIfDisposed(), gt.image.resizeBilinear(this, t, e) }, wt.prototype.resizeNearestNeighbor = function(t, e) { return void 0 === e && (e = !1), this.throwIfDisposed(), gt.image.resizeNearestNeighbor(this, t, e) }, wt.prototype.conv1d = function(t, e, n, r, o, i) { return void 0 === r && (r = "NWC"), void 0 === o && (o = 1), this.throwIfDisposed(), gt.conv1d(this, t, e, n, r, o, i) }, wt.prototype.conv2d = function(t, e, n, r, o, i) { return void 0 === r && (r = "NHWC"), void 0 === o && (o = [1, 1]), this.throwIfDisposed(), gt.conv2d(this, t, e, n, r, o, i) }, wt.prototype.conv2dTranspose = function(t, e, n, r, o) { return this.throwIfDisposed(), gt.conv2dTranspose(this, t, e, n, r, o) }, wt.prototype.depthwiseConv2D = function(t, e, n, r, o, i) { return void 0 === r && (r = "NHWC"), void 0 === o && (o = [1, 1]), this.throwIfDisposed(), gt.depthwiseConv2d(this, t, e, n, r, o, i) }, wt.prototype.separableConv2d = function(t, e, n, r, o, i) { return void 0 === o && (o = [1, 1]), void 0 === i && (i = "NHWC"), this.throwIfDisposed(), gt.separableConv2d(this, t, e, n, r, o, i) }, wt.prototype.avgPool = function(t, e, n, r) { return this.throwIfDisposed(), gt.avgPool(this, t, e, n, r) }, wt.prototype.maxPool = function(t, e, n, r) { return this.throwIfDisposed(), gt.maxPool(this, t, e, n, r) }, wt.prototype.localResponseNormalization = function(t, e, n, r) { return void 0 === t && (t = 5), void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === r && (r = .5), gt.localResponseNormalization(this, t, e, n, r) }, wt.prototype.pool = function(t, e, n, r, o) { return this.throwIfDisposed(), gt.pool(this, t, e, n, r, o) }, wt.prototype.variable = function(t, e, n) { return void 0 === t && (t = !0), this.throwIfDisposed(), mt().makeVariable(this, t, e, n) }, wt.prototype.unsortedSegmentSum = function(t, e) { return this.throwIfDisposed(), gt.unsortedSegmentSum(this, t, e) }, wt.prototype.batchToSpaceND = function(t, e) { return this.throwIfDisposed(), gt.batchToSpaceND(this, t, e) }, wt.prototype.spaceToBatchND = function(t, e) { return this.throwIfDisposed(), gt.spaceToBatchND(this, t, e) }, wt.prototype.topk = function(t, e) { return void 0 === t && (t = 1), void 0 === e && (e = !0), this.throwIfDisposed(), gt.topk(this, t, e) }, wt.prototype.stridedSlice = function(t, e, n, r, o, i, a, s) { return void 0 === r && (r = 0), void 0 === o && (o = 0), void 0 === i && (i = 0), void 0 === a && (a = 0), void 0 === s && (s = 0), this.throwIfDisposed(), gt.stridedSlice(this, t, e, n, r, o, i, a, s) }, wt.prototype.depthToSpace = function(t, e) { return this.throwIfDisposed(), gt.depthToSpace(this, t, e) }, wt.prototype.fft = function() { return this.throwIfDisposed(), gt.spectral.fft(this) }, wt.prototype.ifft = function() { return this.throwIfDisposed(), gt.spectral.ifft(this) }, wt.prototype.rfft = function() { return this.throwIfDisposed(), gt.spectral.rfft(this) }, wt.prototype.irfft = function() { return this.throwIfDisposed(), gt.spectral.irfft(this) }, wt);

        function wt(t, e, n, r) { this.kept = !1, this.isDisposedInternal = !1, this.shape = t.slice(), this.dtype = e || "float32", this.size = L(t), this.strides = Y(t), this.dataId = n, this.id = r, this.rankType = this.rank < 5 ? this.rank.toString() : "higher" }
        Object.defineProperty(bt, Symbol.hasInstance, { value: function(t) { return !!t && null != t.dataId && null != t.shape && null != t.dtype } });
        var Ct, Et, _t, It, Rt, kt, St, Dt, At, Tt, Nt, Ft = (t(Mt, kt = bt), Mt.prototype.assign = function(t) {
            if (t.dtype !== this.dtype) throw new Error("dtype of the new value (" + t.dtype + ") and previous value (" + this.dtype + ") must match");
            if (!A(t.shape, this.shape)) throw new Error("shape of the new value (" + t.shape + ") and previous value (" + this.shape + ") must match");
            mt().disposeTensor(this), this.dataId = t.dataId, mt().incRef(this, null)
        }, Mt.prototype.dispose = function() { mt().disposeVariable(this), this.isDisposedInternal = !0 }, Mt);

        function Mt(t, e, n, r) { var o = kt.call(this, t.shape, t.dtype, t.dataId, r) || this; return o.trainable = e, o.name = n, o }
        Object.defineProperty(Ft, Symbol.hasInstance, { value: function(t) { return t instanceof bt && null != t.assign && t.assign instanceof Function } }), (Nt = Ct = Ct || {}).R0 = "R0", Nt.R1 = "R1", Nt.R2 = "R2", Nt.R3 = "R3", Nt.R4 = "R4", Nt.R5 = "R5", Nt.R6 = "R6", (Tt = Et = Et || {}).float32 = "float32", Tt.int32 = "int32", Tt.bool = "int32", Tt.complex64 = "complex64", (At = _t = _t || {}).float32 = "float32", At.int32 = "int32", At.bool = "bool", At.complex64 = "complex64", (Dt = It = It || {}).float32 = "float32", Dt.int32 = "float32", Dt.bool = "float32", Dt.complex64 = "complex64", (St = Rt = Rt || {}).float32 = "complex64", St.int32 = "complex64", St.bool = "complex64", St.complex64 = "complex64";
        var Ot = { float32: It, int32: Et, bool: _t, complex64: Rt };

        function Pt(t, e) { if ("string" !== t && "string" !== e) return Ot[t][e]; if ("string" === t && "string" === e) return "string"; throw new Error("Can not upcast " + t + " with " + e) }

        function Bt(t) { return Pt(t, "int32") }

        function Lt(t, e) { if (t.dtype === e.dtype) return [t, e]; var n = Pt(t.dtype, e.dtype); return [t.cast(n), e.cast(n)] }

        function Wt(t, e) { P(t.dtype === e.dtype, function() { return "The dtypes of the first(" + t.dtype + ") and second(" + e.dtype + ") input must match" }) }

        function zt(t) {
            var e = [];
            return function t(e, n, r) {
                if (null != e)
                    if (e instanceof bt) n.push(e);
                    else if (o = e, Array.isArray(o) || "object" == typeof o) {
                    var o, i = e;
                    for (var a in i) {
                        var s = i[a];
                        r.has(s) || (r.add(s), t(s, n, r))
                    }
                }
            }(t, e, new Set), e
        }
        var Ut, Vt = Object.freeze({ makeTypesMatch: Lt, assertTypesMatch: Wt, isTensorInList: function(e, t) { return t.some(function(t) { return t.id === e.id }) }, getTensorsInContainer: zt }),
            Gt = (jt.prototype.dispose = function() { for (var t in this.registeredVariables) this.registeredVariables[t].dispose() }, jt),
            Ht = (qt.prototype.ready = function() {
                return y(this, void 0, void 0, function() {
                    var e, n, r;
                    return R(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (null != this.pendingBackendInit) return [2, this.pendingBackendInit.then(function() {})];
                                if (null != this.backendInstance) return [2];
                                e = this.getSortedBackends(), n = 0, t.label = 1;
                            case 1:
                                return n < e.length ? (r = e[n], [4, this.initializeBackend(r).success]) : [3, 5];
                            case 2:
                                return t.sent() ? [4, this.setBackend(r)] : [3, 4];
                            case 3:
                                return t.sent(), [2];
                            case 4:
                                return n++, [3, 1];
                            case 5:
                                throw new Error("Could not initialize any backends, all backend initializations failed.")
                        }
                    })
                })
            }, Object.defineProperty(qt.prototype, "backend", {
                get: function() {
                    if (null != this.pendingBackendInit) throw new Error("Backend '" + this.backendName + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
                    if (null == this.backendInstance) {
                        var t = this.initializeBackendsAndReturnBest(),
                            e = t.name;
                        if (t.asyncInit) throw new Error("The highest priority backend '" + e + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
                        this.setBackend(e)
                    }
                    return this.backendInstance
                },
                enumerable: !0,
                configurable: !0
            }), qt.prototype.backendNames = function() { return Object.keys(this.registryFactory) }, qt.prototype.findBackend = function(t) { if (!(t in this.registry)) { if (!(t in this.registryFactory)) return null; if (this.initializeBackend(t).asyncInit) return null } return this.registry[t] }, qt.prototype.findBackendFactory = function(t) { return t in this.registryFactory ? this.registryFactory[t].factory : null }, qt.prototype.registerBackend = function(t, e, n) { return void 0 === n && (n = 1), t in this.registryFactory ? (console.warn(t + " backend was already registered. Reusing existing backend factory."), !1) : (this.registryFactory[t] = { factory: e, priority: n }, !0) }, qt.prototype.setBackend = function(o) {
                return y(this, void 0, void 0, function() {
                    var e, n, r;
                    return R(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (null == this.registryFactory[o]) throw new Error("Backend name '" + o + "' not found in registry");
                                return this.backendName = o, null != this.registry[o] ? [3, 4] : (this.backendInstance = null, e = this.initializeBackend(o), n = e.success, e.asyncInit ? [4, n] : [3, 2]);
                            case 1:
                                return r = t.sent(), [3, 3];
                            case 2:
                                r = n, t.label = 3;
                            case 3:
                                if (!r) return [2, !1];
                                t.label = 4;
                            case 4:
                                return this.backendInstance = this.registry[o], this.setupRegisteredKernels(), this.profiler = new st(this.backendInstance), [2, !0]
                        }
                    })
                })
            }, qt.prototype.setupRegisteredKernels = function() {
                var e = this;
                a(this.backendName).forEach(function(t) { null != t.setupFunc && t.setupFunc(e.backendInstance) })
            }, qt.prototype.disposeRegisteredKernels = function(e) {
                var n = this;
                a(e).forEach(function(t) { null != t.disposeFunc && t.disposeFunc(n.registry[e]) })
            }, qt.prototype.initializeBackend = function(e) {
                var n = this,
                    t = this.registryFactory[e];
                if (null == t) throw new Error("Cannot initialize backend " + e + ", no registration found.");
                try {
                    var r = t.factory();
                    if (Promise.resolve(r) !== r) return this.registry[e] = r, { success: !0, asyncInit: !1 };
                    var o = ++this.pendingBackendInitId,
                        i = r.then(function(t) { return !(o < n.pendingBackendInitId || (n.registry[e] = t, n.pendingBackendInit = null)) }).catch(function(t) { return !(o < n.pendingBackendInitId || (n.pendingBackendInit = null, console.warn("Initialization of backend " + e + " failed"), console.warn(t.stack || t.message), 1)) });
                    return { success: this.pendingBackendInit = i, asyncInit: !0 }
                } catch (n) { return console.warn("Initialization of backend " + e + " failed"), console.warn(n.stack || n.message), { success: !1, asyncInit: !1 } }
            }, qt.prototype.removeBackend = function(t) {
                if (!(t in this.registryFactory)) throw new Error(t + " backend not found in registry");
                this.backendName === t && null != this.pendingBackendInit && this.pendingBackendInitId++, t in this.registry && (this.disposeRegisteredKernels(t), this.registry[t].dispose(), delete this.registry[t]), delete this.registryFactory[t], this.backendName === t && (this.pendingBackendInit = null, this.backendName = null, this.backendInstance = null)
            }, qt.prototype.getSortedBackends = function() { var n = this; if (0 === Object.keys(this.registryFactory).length) throw new Error("No backend found in registry."); return Object.keys(this.registryFactory).sort(function(t, e) { return n.registryFactory[e].priority - n.registryFactory[t].priority }) }, qt.prototype.initializeBackendsAndReturnBest = function() {
                for (var t = this.getSortedBackends(), e = 0; e < t.length; e++) {
                    var n = t[e],
                        r = this.initializeBackend(n),
                        o = r.success,
                        i = r.asyncInit;
                    if (i || o) return { name: n, asyncInit: i }
                }
                throw new Error("Could not initialize any backends, all backend initializations failed.")
            }, qt.prototype.moveData = function(t, e) {
                var n = this.state.tensorInfo.get(e),
                    r = n.backend,
                    o = this.readSync(e);
                r.disposeData(e), (n.backend = t).move(e, o, n.shape, n.dtype), this.shouldCheckForMemLeaks() && this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]++
            }, qt.prototype.tidy = function(t, e) {
                var n, r = this,
                    o = null;
                if (null == e) {
                    if ("function" != typeof t) throw new Error("Please provide a function to tidy()");
                    e = t
                } else {
                    if ("string" != typeof t && !(t instanceof String)) throw new Error("When calling with two arguments, the first argument to tidy() must be a string");
                    if ("function" != typeof e) throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
                    o = t
                }
                return this.scopedRun(function() { return r.startScope(o) }, function() { return r.endScope(n) }, function() { return (n = e()) instanceof Promise && console.error("Cannot return a Promise inside of tidy."), n })
            }, qt.prototype.scopedRun = function(t, e, n) { t(); try { var r = n(); return e(), r } catch (t) { throw e(), t } }, qt.prototype.nextTensorId = function() { return qt.nextTensorId++ }, qt.prototype.nextVariableId = function() { return qt.nextVariableId++ }, qt.prototype.clone = function(t) {
                var e = this.makeTensorFromDataId(t.dataId, t.shape, t.dtype),
                    n = { x: t };
                return this.addTapeNode(this.state.activeScope.name, n, [e], function(t) { return { x: function() { return t.toFloat() } } }, []), e
            }, qt.prototype.runKernel = function(t, e, n, r, o) { return this.runKernelFunc(null, e, null, t, n, r, o) }, qt.prototype.shouldCheckForMemLeaks = function() { return this.ENV.getBool("IS_TEST") }, qt.prototype.checkKernelForMemLeak = function(t, e, n) {
                var r = this.backend.numDataIds(),
                    o = 0;
                n.forEach(function(t) { o += "complex64" === t.dtype ? 3 : 1 });
                var i = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1],
                    a = r - e - o - i;
                if (0 < a) throw new Error("Backend '" + this.backendName + "' has an internal memory leak (" + a + " data ids) after running '" + t + "'")
            }, qt.prototype.runKernelFunc = function(n, o, t, i, a, s, u) {
                var e, c = this;
                void 0 === s && (s = []), void 0 === u && (u = []);
                var r = [],
                    l = this.isTapeOn();

                function h(t) { l && (r = t.map(function(t) { return c.keep(c.clone(t)) })) }
                null == i && (i = null != this.state.activeScope ? this.state.activeScope.name : "");
                var f, p = this.state.numBytes,
                    d = this.state.numTensors;
                this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0);
                var v, m = g(i, this.backendName);
                return f = null != m ? function() {
                    var t = c.backend.numDataIds();
                    v = m.kernelFunc({ inputs: o, attrs: a, backend: c.backend });
                    var e = Array.isArray(v) ? v : [v];
                    c.shouldCheckForMemLeaks() && c.checkKernelForMemLeak(i, t, e);
                    var n = e.map(function(t) {
                            var e = t.dataId,
                                n = t.shape,
                                r = t.dtype;
                            return c.makeTensorFromDataId(e, n, r)
                        }),
                        r = n.filter(function(t, e) { return u[e] });
                    return h((s || []).slice().concat(r)), n
                } : function() {
                    var t = c.backend.numDataIds();
                    v = c.tidy(function() { return n(c.backend, h) });
                    var e = Array.isArray(v) ? v : [v];
                    return c.shouldCheckForMemLeaks() && c.checkKernelForMemLeak(i, t, e), e
                }, this.scopedRun(function() { return c.state.kernelDepth++ }, function() { return c.state.kernelDepth-- }, function() { e = c.ENV.getBool("DEBUG") ? c.profiler.profileKernel(i, o, function() { return f() }) : f() }), l && this.addTapeNode(i, o, e, t, r), this.state.profiling && this.state.activeProfile.kernels.push({ name: i, bytesAdded: this.state.numBytes - p, totalBytesSnapshot: this.state.numBytes, tensorsAdded: this.state.numTensors - d, totalTensorsSnapshot: this.state.numTensors, inputShapes: Object.keys(o).map(function(t) { return o[t].shape }), outputShapes: e.map(function(t) { return t.shape }) }), Array.isArray(v) ? e : e[0]
            }, qt.prototype.makeTensor = function(t, e, n, r) {
                if (null == t) throw new Error("Values passed to engine.makeTensor() are null");
                n = n || "float32", r = r || this.backend;
                var o = t;
                "string" === n && G(t[0]) && (o = t.map(function(t) { return nt(t) }));
                var i = r.write(o, e, n),
                    a = new bt(e, n, i, this.nextTensorId());
                if (this.incRef(a, r), "string" === n) {
                    var s = this.state.tensorInfo.get(i),
                        u = V(o);
                    this.state.numBytes += u - s.bytes, s.bytes = u
                }
                return a
            }, qt.prototype.makeTensorFromDataId = function(t, e, n, r) { var o = new bt(e, n = n || "float32", t, this.nextTensorId()); return this.incRef(o, r), o }, qt.prototype.makeVariable = function(t, e, n, r) { void 0 === e && (e = !0), n = n || this.nextVariableId().toString(), null != r && r !== t.dtype && (t = t.asType(r)); var o = new Ft(t, e, n, this.nextTensorId()); if (null != this.state.registeredVariables[o.name]) throw new Error("Variable with name " + o.name + " was already registered"); return this.state.registeredVariables[o.name] = o, this.incRef(o, this.backend), o }, qt.prototype.incRef = function(t, e) {
                var n = this.state.tensorInfo.has(t.dataId) ? this.state.tensorInfo.get(t.dataId).refCount : 0;
                if (this.state.numTensors++, "string" === t.dtype && this.state.numStringTensors++, 0 === n) { this.state.numDataBuffers++; var r = 0; "complex64" !== t.dtype && "string" !== t.dtype && (r = t.size * U(t.dtype)), this.state.tensorInfo.set(t.dataId, { backend: e || this.backend, dtype: t.dtype, shape: t.shape, bytes: r, refCount: 0 }), this.state.numBytes += r }
                this.state.tensorInfo.get(t.dataId).refCount++, t instanceof Ft || this.track(t)
            }, qt.prototype.disposeTensor = function(t) {
                if (this.state.tensorInfo.has(t.dataId)) {
                    this.state.numTensors--, "string" === t.dtype && this.state.numStringTensors--;
                    var e = this.state.tensorInfo.get(t.dataId);
                    e.refCount <= 1 ? ("complex64" !== t.dtype && (this.state.numBytes -= e.bytes), this.state.numDataBuffers--, e.backend.disposeData(t.dataId), this.state.tensorInfo.delete(t.dataId)) : this.state.tensorInfo.get(t.dataId).refCount--
                }
            }, qt.prototype.disposeVariables = function() {
                for (var t in this.state.registeredVariables) {
                    var e = this.state.registeredVariables[t];
                    this.disposeVariable(e)
                }
            }, qt.prototype.disposeVariable = function(t) { this.disposeTensor(t), null != this.state.registeredVariables[t.name] && delete this.state.registeredVariables[t.name] }, qt.prototype.memory = function() { var t = this.backend.memory(); return t.numTensors = this.state.numTensors, t.numDataBuffers = this.state.numDataBuffers, t.numBytes = this.state.numBytes, 0 < this.state.numStringTensors && (t.unreliable = !0, null == t.reasons && (t.reasons = []), t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")), t }, qt.prototype.profile = function(r) { return y(this, void 0, void 0, function() { var e, n; return R(this, function(t) { return this.state.profiling = !0, e = this.state.numBytes, n = this.state.numTensors, this.state.activeProfile.kernels = [], this.state.activeProfile.result = r(), this.state.profiling = !1, this.state.activeProfile.peakBytes = Math.max.apply(Math, this.state.activeProfile.kernels.map(function(t) { return t.totalBytesSnapshot })), this.state.activeProfile.newBytes = this.state.numBytes - e, this.state.activeProfile.newTensors = this.state.numTensors - n, [2, this.state.activeProfile] }) }) }, qt.prototype.isTapeOn = function() { return 0 < this.state.gradientDepth && 0 === this.state.kernelDepth }, qt.prototype.addTapeNode = function(t, e, o, n, r) {
                var i = this,
                    a = { id: this.state.nextTapeNodeId++, kernelName: t, inputs: e, outputs: o, saved: r },
                    s = l(t);
                null != s && (n = s.gradFunc), null != n && (a.gradient = function(t) {
                    return t = t.map(function(t, e) {
                        if (null != t) return t;
                        var n = o[e],
                            r = Z(n.size, n.dtype);
                        return i.makeTensor(r, n.shape, n.dtype)
                    }), n(1 < t.length ? t : t[0], r)
                }), this.state.activeTape.push(a)
            }, qt.prototype.keep = function(t) { return t.kept = !0, t }, qt.prototype.startTape = function() { 0 === this.state.gradientDepth && (this.state.activeTape = []), this.state.gradientDepth++ }, qt.prototype.endTape = function() { this.state.gradientDepth-- }, qt.prototype.startScope = function(t) {
                var e = { track: [], name: "unnamed scope", id: this.state.nextScopeId++ };
                t && (e.name = t), this.state.scopeStack.push(e), this.state.activeScope = e
            }, qt.prototype.endScope = function(t) {
                for (var e = this, n = zt(t), r = new Set(n.map(function(t) { return t.id })), o = 0; o < this.state.activeScope.track.length; o++) {
                    var i = this.state.activeScope.track[o];
                    i.kept || r.has(i.id) || i.dispose()
                }
                var a = this.state.scopeStack.pop();
                this.state.activeScope = 0 === this.state.scopeStack.length ? null : this.state.scopeStack[this.state.scopeStack.length - 1], n.forEach(function(t) { t.kept || t.scopeId !== a.id || e.track(t) })
            }, qt.prototype.gradients = function(t, o, i, e) {
                var u = this;
                if (void 0 === e && (e = !1), P(0 < o.length, function() { return "gradients() received an empty list of xs." }), null != i && "float32" !== i.dtype) throw new Error("dy must have 'float32' dtype, but has '" + i.dtype + "'");
                var a = this.scopedRun(function() { return u.startTape() }, function() { return u.endTape() }, function() { return u.tidy("forward", t) });
                P(a instanceof bt, function() { return "The result y returned by f() must be a tensor." });
                var s = function(t, e, n) {
                    for (var r = {}, o = {}, i = 0; i < e.length; i++) r[e[i].id] = !0;
                    for (i = 0; i < t.length; i++) {
                        var a = (d = t[i]).inputs;
                        for (var s in a) {
                            for (var u = a[s], c = !1, l = 0; l < e.length; l++)
                                if (r[u.id]) { d.outputs.forEach(function(t) { return r[t.id] = !0 }), c = !0, o[d.id] = !0; break }
                            if (c) break
                        }
                    }
                    var h = {};
                    h[n.id] = !0;
                    var f = {};
                    for (i = t.length - 1; 0 <= i; i--)
                        for (a = (d = t[i]).inputs, l = 0; l < d.outputs.length; l++)
                            if (h[d.outputs[l].id]) { for (var s in a) h[a[s].id] = !0, f[d.id] = !0; break }
                    var p = [];
                    for (i = 0; i < t.length; i++) {
                        var d;
                        if (o[(d = t[i]).id] && f[d.id]) {
                            var v = {};
                            for (var s in d.inputs) {
                                var m = d.inputs[s];
                                r[m.id] && (v[s] = m)
                            }
                            var g = Object.assign({}, d);
                            g.inputs = v, g.outputs = d.outputs, p.push(g)
                        }
                    }
                    return p
                }(this.state.activeTape, o, a);
                if (!e && 0 === s.length && 0 < o.length) throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
                return this.tidy("backward", function() {
                    var t, e, n = {};
                    n[a.id] = null == i ? (e = Q(L(t = a.shape), "float32"), Kt.makeTensor(e, t, "float32")) : i,
                        function(a, s) {
                            for (var t = function(t) {
                                    var o = s[t],
                                        n = [];
                                    if (o.outputs.forEach(function(t) {
                                            var e = a[t.id];
                                            null != e ? n.push(e) : n.push(null)
                                        }), null == o.gradient) throw new Error("Cannot compute gradient: gradient function not found for " + o.kernelName + ".");

                                    function e(t) {
                                        if (!(t in i)) throw new Error("Cannot backprop through input " + t + ". Available gradients found: " + Object.keys(i) + ".");
                                        var e = function(t) { return u.tidy(t) }(function() { return i[t]() });
                                        if ("float32" !== e.dtype) throw new Error("Error in gradient for op " + o.kernelName + ". The gradient of input " + t + " must have 'float32' dtype, but has '" + e.dtype + "'");
                                        var n = o.inputs[t];
                                        if (!A(e.shape, n.shape)) throw new Error("Error in gradient for op " + o.kernelName + ". The gradient of input '" + t + "' has shape '" + e.shape + "', which does not match the shape of the input '" + n.shape + "'");
                                        if (null == a[n.id]) a[n.id] = e;
                                        else {
                                            var r = a[n.id];
                                            a[n.id] = r.add(e), r.dispose()
                                        }
                                    }
                                    var i = o.gradient(n);
                                    for (var r in o.inputs) e(r)
                                }, e = s.length - 1; 0 <= e; e--) t(e)
                        }(n, s);
                    var r = o.map(function(t) { return n[t.id] });
                    return 0 === u.state.gradientDepth && (u.state.activeTape.forEach(function(t) { for (var e = 0, n = t.saved; e < n.length; e++) n[e].dispose() }), u.state.activeTape = null), { value: a, grads: r }
                })
            }, qt.prototype.customGrad = function(r) {
                var e = this;
                return P(K(r), function() { return "The f passed in customGrad(f) must be a function." }),
                    function() {
                        for (var i, a = [], t = 0; t < arguments.length; t++) a[t] = arguments[t];
                        P(a.every(function(t) { return t instanceof bt }), function() { return "The args passed in customGrad(f)(x1, x2,...) must all be tensors" });
                        var n = {};
                        return a.forEach(function(t, e) { n[e] = t }), e.runKernelFunc(function(t, e) { return P((i = r.apply(void 0, a.concat([e]))).value instanceof bt, function() { return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor" }), P(K(i.gradFunc), function() { return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function." }), i.value }, n, function(t, e) {
                            var n = i.gradFunc(t, e),
                                r = Array.isArray(n) ? n : [n];
                            P(r.length === a.length, function() { return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)." }), P(r.every(function(t) { return t instanceof bt }), function() { return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors." });
                            var o = {};
                            return r.forEach(function(t, e) { o[e] = function() { return t } }), o
                        })
                    }
            }, qt.prototype.readSync = function(t) { return this.state.tensorInfo.get(t).backend.readSync(t) }, qt.prototype.read = function(t) { return this.state.tensorInfo.get(t).backend.read(t) }, qt.prototype.time = function(r) {
                return y(this, void 0, void 0, function() {
                    var e, n;
                    return R(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = tt(), [4, this.backend.time(r)];
                            case 1:
                                return (n = t.sent()).wallMs = tt() - e, [2, n]
                        }
                    })
                })
            }, qt.prototype.track = function(t) { return null != this.state.activeScope && (t.scopeId = this.state.activeScope.id, this.state.activeScope.track.push(t)), t }, Object.defineProperty(qt.prototype, "registeredVariables", { get: function() { return this.state.registeredVariables }, enumerable: !0, configurable: !0 }), qt.prototype.reset = function() {
                for (var t in this.pendingBackendInitId++, this.state.dispose(), this.ENV.reset(), this.state = new Gt, this.registry) this.disposeRegisteredKernels(t), this.registry[t].dispose(), delete this.registry[t];
                this.backendName = null, this.backendInstance = null, this.pendingBackendInit = null
            }, qt.nextTensorId = 0, qt.nextVariableId = 0, qt);

        function qt(t) { this.ENV = t, this.registry = {}, this.registryFactory = {}, this.pendingBackendInitId = 0, this.state = new Gt }

        function jt() { this.registeredVariables = {}, this.nextTapeNodeId = 0, this.numBytes = 0, this.numTensors = 0, this.numStringTensors = 0, this.numDataBuffers = 0, this.gradientDepth = 0, this.kernelDepth = 0, this.scopeStack = [], this.numDataMovesStack = [], this.nextScopeId = 0, this.tensorInfo = new WeakMap, this.profiling = !1, this.activeProfile = { newBytes: 0, newTensors: 0, peakBytes: 0, kernels: [], result: null } }
        var Kt = function() {
            var t, e = function() {
                if (null == Ut) {
                    var t = void 0;
                    if ("undefined" != typeof window) t = window;
                    else if ("undefined" != typeof global) t = global;
                    else if ("undefined" != typeof process) t = process;
                    else {
                        if ("undefined" == typeof self) throw new Error("Could not find a global object");
                        t = self
                    }
                    Ut = t
                }
                return Ut
            }();
            if (null == e._tfengine) {
                var n = new o(e);
                e._tfengine = new Ht(n)
            }
            return t = e._tfengine.ENV, i = t, mt = function() { return e._tfengine }, e._tfengine
        }();

        function Xt() { return "undefined" != typeof window && null != window.document || "undefined" != typeof WorkerGlobalScope }
        var Yt = _();
        Yt.registerFlag("DEBUG", function() { return !1 }, function(t) { t && console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.") }), Yt.registerFlag("IS_BROWSER", function() { return Xt() }), Yt.registerFlag("IS_NODE", function() { return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node }), Yt.registerFlag("IS_CHROME", function() { return "undefined" != typeof navigator && null != navigator && null != navigator.userAgent && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) }), Yt.registerFlag("PROD", function() { return !1 }), Yt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY", function() { return Yt.getBool("DEBUG") }), Yt.registerFlag("DEPRECATION_WARNINGS_ENABLED", function() { return !0 }), Yt.registerFlag("IS_TEST", function() { return !1 });
        var $t, Jt, Qt, Zt, te, ee, ne = {},
            re = { alpha: !1, antialias: !1, premultipliedAlpha: !1, preserveDrawingBuffer: !1, depth: !1, stencil: !1, failIfMajorPerformanceCaveat: !0 };

        function oe(t, e) { ne[t] = e }

        function ie(t) { t in ne || (ne[t] = function(e) { if (1 !== e && 2 !== e) throw new Error("Cannot get WebGL rendering context, WebGL is disabled."); var t = function() { if ("undefined" != typeof OffscreenCanvas && 2 === e) return new OffscreenCanvas(300, 150); if ("undefined" != typeof document) return document.createElement("canvas"); throw new Error("Cannot create a canvas in this context") }(); return t.addEventListener("webglcontextlost", function(t) { t.preventDefault(), delete ne[e] }, !1), 1 === e ? t.getContext("webgl", re) || t.getContext("experimental-webgl", re) : t.getContext("webgl2", re) }(t)); var e = ne[t]; return e.isContextLost() ? (delete ne[t], ie(t)) : (e.disable(e.DEPTH_TEST), e.disable(e.STENCIL_TEST), e.disable(e.BLEND), e.disable(e.DITHER), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SAMPLE_COVERAGE), e.enable(e.SCISSOR_TEST), e.enable(e.CULL_FACE), e.cullFace(e.BACK), ne[t]) }

        function ae(t, e) { return [e, t] }

        function se(t) { var e = L(t); return C(Math.ceil(e / 4)) }

        function ue(t, e) { return [Math.max(1, Math.ceil(e / 2)), Math.max(1, Math.ceil(t / 2))] }

        function ce(t, e) { var n, r, o, i, a, s, u, c, l, h = t; return l = 2 === _().getNumber("WEBGL_VERSION") ? (n = h.R32F, r = h.R16F, o = h.RGBA16F, i = h.RGBA32F, a = h.RED, s = 4, u = 1, c = h.HALF_FLOAT, h.FLOAT) : (n = t.RGBA, r = t.RGBA, o = t.RGBA, i = h.RGBA, a = t.RGBA, u = s = 4, c = null != e ? e.HALF_FLOAT_OES : null, t.FLOAT), { internalFormatFloat: n, internalFormatHalfFloat: r, internalFormatPackedHalfFloat: o, internalFormatPackedFloat: i, textureFormatFloat: a, downloadTextureFormat: t.RGBA, downloadUnpackNumChannels: s, defaultNumChannels: u, textureTypeHalfFloat: c, textureTypeFloat: l } }

        function le(t, e, n) { var r = n(); return e && function(t) { var e = t.getError(); if (e !== t.NO_ERROR) throw new Error("WebGL Error: " + fe(t, e)) }(t), r }(ee = $t = $t || {})[ee.DENSE = 0] = "DENSE", ee[ee.SHARED_BATCH = 1] = "SHARED_BATCH", (te = Jt = Jt || {})[te.RENDER = 0] = "RENDER", te[te.UPLOAD = 1] = "UPLOAD", te[te.PIXELS = 2] = "PIXELS", te[te.DOWNLOAD = 3] = "DOWNLOAD", (Zt = Qt = Qt || {})[Zt.UNPACKED_FLOAT16 = 0] = "UNPACKED_FLOAT16", Zt[Zt.UNPACKED_FLOAT32 = 1] = "UNPACKED_FLOAT32", Zt[Zt.PACKED_4X1_UNSIGNED_BYTE = 2] = "PACKED_4X1_UNSIGNED_BYTE", Zt[Zt.PACKED_2X2_FLOAT32 = 3] = "PACKED_2X2_FLOAT32", Zt[Zt.PACKED_2X2_FLOAT16 = 4] = "PACKED_2X2_FLOAT16";

        function he(t) { return !!(_().getBool("WEBGL_RENDER_FLOAT32_ENABLED") || 0 === t || 5.96e-8 < Math.abs(t) && Math.abs(t) < 65504) }

        function fe(t, e) {
            switch (e) {
                case t.NO_ERROR:
                    return "NO_ERROR";
                case t.INVALID_ENUM:
                    return "INVALID_ENUM";
                case t.INVALID_VALUE:
                    return "INVALID_VALUE";
                case t.INVALID_OPERATION:
                    return "INVALID_OPERATION";
                case t.INVALID_FRAMEBUFFER_OPERATION:
                    return "INVALID_FRAMEBUFFER_OPERATION";
                case t.OUT_OF_MEMORY:
                    return "OUT_OF_MEMORY";
                case t.CONTEXT_LOST_WEBGL:
                    return "CONTEXT_LOST_WEBGL";
                default:
                    return "Unknown error code " + e
            }
        }

        function pe(t, e, n) { return Pe(t, e, function() { return t.getExtension(n) }, 'Extension "' + n + '" not supported on this browser.') }

        function de(t, e, n) { var r = Pe(t, e, function() { return t.createShader(t.VERTEX_SHADER) }, "Unable to create vertex WebGLShader."); if (le(t, e, function() { return t.shaderSource(r, n) }), le(t, e, function() { return t.compileShader(r) }), !1 === t.getShaderParameter(r, t.COMPILE_STATUS)) throw console.log(t.getShaderInfoLog(r)), new Error("Failed to compile vertex shader."); return r }

        function ve(t, e, n) {
            var r = Pe(t, e, function() { return t.createShader(t.FRAGMENT_SHADER) }, "Unable to create fragment WebGLShader.");
            if (le(t, e, function() { return t.shaderSource(r, n) }), le(t, e, function() { return t.compileShader(r) }), !1 === t.getShaderParameter(r, t.COMPILE_STATUS)) throw

            function(t, e) {
                var n = ye.exec(e);
                if (null == n) return console.log("Couldn't parse line number in error: " + e), console.log(t);
                for (var r = +n[1], o = t.split("\n"), i = o.length.toString().length + 2, a = o.map(function(t, e) { return I((e + 1).toString(), i) + t }), s = 0, u = 0; u < a.length; u++) s = Math.max(a[u].length, s);
                var c = a.slice(0, r - 1),
                    l = a.slice(r - 1, r),
                    h = a.slice(r);
                console.log(c.join("\n")), console.log(e.split("\n")[0]), console.log("%c " + I(l[0], s), "border:1px solid red; background-color:#e3d2d2; color:#a61717"), console.log(h.join("\n"))
            }(n, t.getShaderInfoLog(r)), new Error("Failed to compile fragment shader.");
            return r
        }
        var me, ge, ye = /ERROR: [0-9]+:([0-9]+):/g;

        function xe(t, e) { return Pe(t, e, function() { return t.createProgram() }, "Unable to create WebGLProgram.") }

        function be(t, e, n) { if (le(t, e, function() { return t.linkProgram(n) }), !1 === t.getProgramParameter(n, t.LINK_STATUS)) throw console.log(t.getProgramInfoLog(n)), new Error("Failed to link vertex and fragment shaders.") }

        function we(t, e, n) { if (le(t, e, function() { return t.validateProgram(n) }), !1 === t.getProgramParameter(n, t.VALIDATE_STATUS)) throw console.log(t.getProgramInfoLog(n)), new Error("Shader program validation failed.") }

        function Ce(t, e, n) { var r = Pe(t, e, function() { return t.createBuffer() }, "Unable to create WebGLBuffer"); return le(t, e, function() { return t.bindBuffer(t.ARRAY_BUFFER, r) }), le(t, e, function() { return t.bufferData(t.ARRAY_BUFFER, n, t.STATIC_DRAW) }), r }

        function Ee(t, e, n) { var r = Pe(t, e, function() { return t.createBuffer() }, "Unable to create WebGLBuffer"); return le(t, e, function() { return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r) }), le(t, e, function() { return t.bufferData(t.ELEMENT_ARRAY_BUFFER, n, t.STATIC_DRAW) }), r }

        function _e(t, e) { return Pe(t, e, function() { return t.createTexture() }, "Unable to create WebGLTexture.") }

        function Ie(t, e) { var n = _().getNumber("WEBGL_MAX_TEXTURE_SIZE"); if (t <= 0 || e <= 0) { var r = "[" + t + "x" + e + "]"; throw new Error("Requested texture size " + r + " is invalid.") } if (n < t || n < e) throw r = "[" + t + "x" + e + "]", new Error("Requested texture size " + r + " greater than WebGL maximum on this browser / GPU [" + n + "x" + n + "].") }

        function Re(t, e) { return Pe(t, e, function() { return t.createFramebuffer() }, "Unable to create WebGLFramebuffer.") }

        function ke(t, e, n, r, o, i, a, s) { var u = t.getAttribLocation(n, r); return -1 !== u && (le(t, e, function() { return t.bindBuffer(t.ARRAY_BUFFER, o) }), le(t, e, function() { return t.vertexAttribPointer(u, i, t.FLOAT, !1, a, s) }), le(t, e, function() { return t.enableVertexAttribArray(u) }), !0) }

        function Se(t, e, n, r) { Be(t, r), le(t, e, function() { return t.activeTexture(t.TEXTURE0 + r) }), le(t, e, function() { return t.bindTexture(t.TEXTURE_2D, n) }) }

        function De(t, e, n, r) { return Pe(t, e, function() { return t.getUniformLocation(n, r) }, 'uniform "' + r + '" not present in program.') }

        function Ae(t, e, n) { return t.getUniformLocation(e, n) }

        function Te(t, e, n, r, o, i) { le(t, e, function() { return Se(t, e, r, i) }), le(t, e, function() { return t.uniform1i(o, i) }) }

        function Ne(t, e, n, r) { le(t, e, function() { return t.bindFramebuffer(t.FRAMEBUFFER, r) }), le(t, e, function() { return t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0) }) }

        function Fe(t, e, n) { le(t, e, function() { return t.bindFramebuffer(t.FRAMEBUFFER, n) }), le(t, e, function() { return t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0) }) }

        function Me(t) { var e = t.checkFramebufferStatus(t.FRAMEBUFFER); if (e !== t.FRAMEBUFFER_COMPLETE) throw new Error("Error binding framebuffer: " + Oe(t, e)) }

        function Oe(t, e) {
            switch (e) {
                case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                    return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
                case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                    return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
                case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                    return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
                case t.FRAMEBUFFER_UNSUPPORTED:
                    return "FRAMEBUFFER_UNSUPPORTED";
                default:
                    return "unknown error " + e
            }
        }

        function Pe(t, e, n, r) { var o = le(t, e, function() { return n() }); if (null == o) throw new Error(r); return o }

        function Be(t, e) {
            var n = t.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1,
                r = e + t.TEXTURE0;
            if (r < t.TEXTURE0 || n < r) throw new Error("textureUnit must be in [gl.TEXTURE0, gl.TEXTURE" + n + "].")
        }

        function Le(t, e) { return void 0 === e && (e = 2), L(t.slice(0, t.length - e)) }

        function We(t) { if (0 === t.length) throw Error("Cannot get rows and columns of an empty shape array."); return [1 < t.length ? t[t.length - 2] : 1, t[t.length - 1]] }

        function ze(t) { var e = [1, 1, 1]; return 0 === t.length || 1 === t.length && 1 === t[0] || (e = [Le(t)].concat(We(t))), e }

        function Ue(n, t) {
            var e;
            void 0 === t && (t = !1);
            var r = _().getNumber("WEBGL_MAX_TEXTURE_SIZE");
            if (t && (r *= 2, 1 === (n = n.map(function(t, e) { return e >= n.length - 2 ? E(n[e]) : n[e] })).length && (n = [2, n[0]])), 2 !== n.length) {
                var o = T(n);
                n = o.newShape
            }
            var i = L(n);
            if (n.length <= 1 && i <= r) return [1, i];
            if (2 === n.length && n[0] <= r && n[1] <= r) return n;
            if (3 === n.length && n[0] * n[1] <= r && n[2] <= r) return [n[0] * n[1], n[2]];
            if (3 === n.length && n[0] <= r && n[1] * n[2] <= r) return [n[0], n[1] * n[2]];
            if (4 === n.length && n[0] * n[1] * n[2] <= r && n[3] <= r) return [n[0] * n[1] * n[2], n[3]];
            if (4 === n.length && n[0] <= r && n[1] * n[2] * n[3] <= r) return [n[0], n[1] * n[2] * n[3]];
            if (t) {
                var a = Le(n),
                    s = 2,
                    u = 2;
                return n.length && (s = (e = We(n))[0], u = e[1]), C(i = a * (s / 2) * (u / 2)).map(function(t) { return 2 * t })
            }
            return C(i)
        }

        function Ve(t) { return t % 2 == 0 }

        function Ge(t, e) {
            if (A(t = t.slice(-2), e = e.slice(-2))) return !0;
            if (!t.length || !e.length) return !0;
            if (0 === t[0] || 0 === t[1] || 0 === e[0] || 0 === e[1]) return !0;
            if (t.length !== e.length) {
                var n = t.slice(-1)[0],
                    r = e.slice(-1)[0];
                if (n === r) return !0;
                if (Ve(n) && Ve(r) && (1 === t[0] || 1 === e[0])) return !0
            }
            return t[1] === e[1] && Ve(t[0]) && Ve(e[0])
        }

        function He(t) {
            if (null == me) {
                var e = ie(t);
                me = e.getParameter(e.MAX_TEXTURE_SIZE)
            }
            return me
        }

        function qe(t) {
            if (null == ge) {
                var e = ie(t);
                ge = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
            }
            return Math.min(16, ge)
        }

        function je(t) { if (0 === t) return 0; var e = ie(t); return Ke(e, "EXT_disjoint_timer_query_webgl2") && 2 === t ? 2 : Ke(e, "EXT_disjoint_timer_query") ? 1 : 0 }

        function Ke(t, e) { return null != t.getExtension(e) }

        function Xe(t) { try { if (null != ie(t)) return !0 } catch (t) { return !1 } return !1 }

        function Ye(t) { if (0 === t) return !1; var e = ie(t); if (1 === t) { if (!Ke(e, "OES_texture_float")) return !1 } else if (!Ke(e, "EXT_color_buffer_float")) return !1; return Je(e) }

        function $e(t) {
            if (0 === t) return !1;
            var e = ie(t);
            if (1 === t) return !!Ke(e, "OES_texture_float") && !!Ke(e, "WEBGL_color_buffer_float") && Je(e);
            if (Ke(e, "EXT_color_buffer_float")) return Je(e);
            if (Ke(e, "EXT_color_buffer_half_float")) {
                var i = e.getExtension("EXT_color_buffer_half_float");
                return function(t) {
                    var e = ce(t, i),
                        n = t.createTexture();
                    t.bindTexture(t.TEXTURE_2D, n), t.texImage2D(t.TEXTURE_2D, 0, e.internalFormatHalfFloat, 1, 1, 0, e.textureFormatFloat, e.textureTypeHalfFloat, null);
                    var r = t.createFramebuffer();
                    t.bindFramebuffer(t.FRAMEBUFFER, r), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0);
                    var o = t.checkFramebufferStatus(t.FRAMEBUFFER) === t.FRAMEBUFFER_COMPLETE;
                    return t.bindTexture(t.TEXTURE_2D, null), t.bindFramebuffer(t.FRAMEBUFFER, null), t.deleteTexture(n), t.deleteFramebuffer(r), o
                }(e)
            }
            return !1
        }

        function Je(t) {
            var e = ce(t),
                n = t.createTexture();
            t.bindTexture(t.TEXTURE_2D, n), t.texImage2D(t.TEXTURE_2D, 0, e.internalFormatFloat, 1, 1, 0, e.textureFormatFloat, e.textureTypeFloat, null);
            var r = t.createFramebuffer();
            t.bindFramebuffer(t.FRAMEBUFFER, r), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0);
            var o = t.checkFramebufferStatus(t.FRAMEBUFFER) === t.FRAMEBUFFER_COMPLETE;
            return t.bindTexture(t.TEXTURE_2D, null), t.bindFramebuffer(t.FRAMEBUFFER, null), t.deleteTexture(n), t.deleteFramebuffer(r), o
        }

        function Qe(t) { return 2 === t && null != ie(t).fenceSync }
        var Ze = Object.freeze({ callAndCheck: le, canBeRepresented: he, getWebGLErrorMessage: fe, getExtensionOrThrow: pe, createVertexShader: de, createFragmentShader: ve, createProgram: xe, linkProgram: be, validateProgram: we, createStaticVertexBuffer: Ce, createStaticIndexBuffer: Ee, getNumChannels: function() { return 2 === _().getNumber("WEBGL_VERSION") ? 1 : 4 }, createTexture: _e, validateTextureSize: Ie, createFramebuffer: Re, bindVertexBufferToProgramAttribute: ke, bindTextureUnit: Se, unbindTextureUnit: function(t, e, n) { Be(t, n), le(t, e, function() { return t.activeTexture(t.TEXTURE0 + n) }), le(t, e, function() { return t.bindTexture(t.TEXTURE_2D, null) }) }, getProgramUniformLocationOrThrow: De, getProgramUniformLocation: Ae, bindTextureToProgramUniformSampler: Te, bindCanvasToFramebuffer: function(t, e) { le(t, e, function() { return t.bindFramebuffer(t.FRAMEBUFFER, null) }), le(t, e, function() { return t.viewport(0, 0, t.canvas.width, t.canvas.height) }), le(t, e, function() { return t.scissor(0, 0, t.canvas.width, t.canvas.height) }) }, bindColorTextureToFramebuffer: Ne, unbindColorTextureFromFramebuffer: Fe, validateFramebuffer: Me, getFramebufferErrorMessage: Oe, getBatchDim: Le, getRowsCols: We, getShapeAs3D: ze, getTextureShapeFromLogicalShape: Ue, isReshapeFree: Ge, getWebGLMaxTextureSize: He, resetMaxTextureSize: function() { me = null }, resetMaxTexturesInShader: function() { ge = null }, getMaxTexturesInShader: qe, getWebGLDisjointQueryTimerVersion: je, hasExtension: Ke, isWebGLVersionEnabled: Xe, isCapableOfRenderingToFloatTexture: Ye, isDownloadFloatTextureEnabled: $e, isWebGLFenceEnabled: Qe }),
            tn = _();

        function en(t) { _().getBool("DEPRECATION_WARNINGS_ENABLED") && console.warn(t + " You can disable deprecation warnings with tf.disableDeprecationWarnings().") }

        function nn(t, e) { return Kt.tidy(t, e) }

        function rn(t) { zt(t).forEach(function(t) { return t.dispose() }) }

        function on(t) { return Kt.keep(t) }

        function an() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            _().getBool("IS_TEST") || console.warn.apply(console, t)
        }

        function sn(t, e) { var n = t; if (z(t)) return "string" === e ? [] : [t.length]; if (!Array.isArray(t)) return []; for (var r = []; Array.isArray(n) || z(n) && "string" !== e;) r.push(n.length), n = n[0]; return Array.isArray(t) && _().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") && function t(e, n, r) { if (r = r || [], Array.isArray(e) || z(e)) { P(0 < n.length, function() { return "Element arr[" + r.join("][") + "] should be a primitive, but is an array of " + e.length + " elements" }), P(e.length === n[0], function() { return "Element arr[" + r.join("][") + "] should have " + n[0] + " elements, but has " + e.length + " elements" }); for (var o = n.slice(1), i = 0; i < e.length; ++i) t(e[i], o, r.concat(i)) } else P(0 === n.length, function() { return "Element arr[" + r.join("][") + "] is a primitive, but should be an array/TypedArray of " + n[0] + " elements" }) }(t, r, []), r }

        function un(t, e, n, r) { if (null != t && ("numeric" !== t && t !== e || "numeric" === t && "string" === e)) throw new Error("Argument '" + n + "' passed to '" + r + "' must be " + t + " tensor, but got " + e + " tensor") }

        function cn(t, e, n, r) {
            if (void 0 === r && (r = "numeric"), t instanceof bt) return un(r, t.dtype, e, n), t;
            var o = j(t);
            if ("string" !== o && 0 <= ["bool", "int32", "float32"].indexOf(r) && (o = r), un(r, o, e, n), null == t || !z(t) && !Array.isArray(t) && "number" != typeof t && "boolean" != typeof t && "string" != typeof t) { var i = null == t ? "null" : t.constructor.name; throw new Error("Argument '" + e + "' passed to '" + n + "' must be a Tensor or TensorLike, but got '" + i + "'") }
            var a = sn(t, o);
            z(t) || Array.isArray(t) || (t = [t]);
            var s = "string" !== o ? $(t, o, _().getBool("DEBUG")) : b(t, [], !0);
            return Kt.makeTensor(s, a, o)
        }

        function ln(t, n, r, e) { if (void 0 === e && (e = "numeric"), !Array.isArray(t)) throw new Error("Argument " + n + " passed to " + r + " must be a `Tensor[]` or `TensorLike[]`"); return t.map(function(t, e) { return cn(t, n + "[" + e + "]", r) }, e) }

        function hn(t, e) {
            for (var n = 0; n < t.length; ++n)
                if (t[t.length - n - 1] !== e - 1 - n) return !1;
            return !0
        }

        function fn(t, e, n) { for (var r = t.length + e.length, o = [], i = 0, a = 0, s = 0; s < r; s++) - 1 === n.indexOf(s) ? o.push(t[i++]) : o.push(e[a++]); return o }

        function pn(e, t) { for (var n = [], r = e.length, o = 0; o < r; o++) - 1 === t.indexOf(o) && n.push(e[o]); return [n, t.map(function(t) { return e[t] })] }

        function dn(t, e) { return fn(t, e.map(function(t) { return 1 }), e) }

        function vn(t, e, n) { P(hn(e, n), function() { return t + " supports only inner-most axes for now. Got axes " + e + " and rank-" + n + " input." }) }

        function mn(t, e) { if (hn(t, e)) return null; for (var n = [], r = 0; r < e; ++r) - 1 === t.indexOf(r) && n.push(r); return t.forEach(function(t) { return n.push(t) }), n }

        function gn(t) { return t.map(function(t, e) { return [e, t] }).sort(function(t, e) { return t[1] - e[1] }).map(function(t) { return t[0] }) }

        function yn(t, e) { for (var n = [], r = e - t; r < e; ++r) n.push(r); return n }

        function xn(t, r) {
            var o = t[0].length;
            t.forEach(function(t, e) { P(t.length === o, function() { return "Error in concat" + o + "D: rank of tensors[" + e + "] must be the same as the rank of the rest (" + o + ")" }) }), P(0 <= r && r < o, function() { return "Error in concat" + o + "D: axis must be between 0 and " + (o - 1) + "." });
            var i = t[0];
            t.forEach(function(t, e) { for (var n = 0; n < o; n++) P(n === r || t[n] === i[n], function() { return "Error in concat" + o + "D: Shape of tensors[" + e + "] (" + t + ") does not match the shape of the rest (" + i + ") along the non-concatenated axis " + e + "." }) })
        }

        function bn(t, e) { for (var n = t[0].slice(), r = 1; r < t.length; r++) n[e] += t[r][e]; return n }

        function wn(t) {
            var e = Object.keys(t);
            if (1 !== e.length) throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with " + e.length + " keys.");
            var r = e[0],
                o = t[r];
            r.endsWith("_") && (r = r.substring(0, r.length - 1));

            function n() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                Kt.startScope(r);
                try { var n = o.apply(void 0, t); return n instanceof Promise && console.error("Cannot return a Promise inside of tidy."), Kt.endScope(n), n } catch (t) { throw Kt.endScope(null), t }
            }
            return Object.defineProperty(n, "name", { value: r, configurable: !0 }), n
        }
        tn.registerFlag("HAS_WEBGL", function() { return 0 < tn.getNumber("WEBGL_VERSION") }), tn.registerFlag("WEBGL_VERSION", function() { return Xe(2) ? 2 : Xe(1) ? 1 : 0 }), tn.registerFlag("WEBGL_BUFFER_SUPPORTED", function() { return 2 === tn.get("WEBGL_VERSION") }), tn.registerFlag("WEBGL_CPU_FORWARD", function() { return !0 }), tn.registerFlag("WEBGL_FORCE_F16_TEXTURES", function() { return !1 }), tn.registerFlag("WEBGL_PACK", function() { return tn.getBool("HAS_WEBGL") }), tn.registerFlag("WEBGL_PACK_NORMALIZATION", function() { return tn.getBool("WEBGL_PACK") }), tn.registerFlag("WEBGL_PACK_CLIP", function() { return tn.getBool("WEBGL_PACK") }), tn.registerFlag("WEBGL_PACK_DEPTHWISECONV", function() { return !1 }), tn.registerFlag("WEBGL_PACK_BINARY_OPERATIONS", function() { return tn.getBool("WEBGL_PACK") }), tn.registerFlag("WEBGL_PACK_UNARY_OPERATIONS", function() { return tn.getBool("WEBGL_PACK") }), tn.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS", function() { return tn.getBool("WEBGL_PACK") }), tn.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS", function() { return tn.getBool("WEBGL_PACK") }), tn.registerFlag("WEBGL_PACK_REDUCE", function() { return tn.getBool("WEBGL_PACK") }), tn.registerFlag("WEBGL_LAZILY_UNPACK", function() { return tn.getBool("WEBGL_PACK") }), tn.registerFlag("WEBGL_CONV_IM2COL", function() { return tn.getBool("WEBGL_PACK") }), tn.registerFlag("WEBGL_MAX_TEXTURE_SIZE", function() { return He(tn.getNumber("WEBGL_VERSION")) }), tn.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER", function() { return qe(tn.getNumber("WEBGL_VERSION")) }), tn.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION", function() { var t = tn.getNumber("WEBGL_VERSION"); return 0 === t ? 0 : je(t) }), tn.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE", function() { return 0 < tn.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") && (t = navigator.userAgent || navigator.vendor || window.opera, !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)))); var t }), tn.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE", function() { return Ye(tn.getNumber("WEBGL_VERSION")) }), tn.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED", function() { return !tn.getBool("WEBGL_FORCE_F16_TEXTURES") && tn.getBool("WEBGL_RENDER_FLOAT32_CAPABLE") }), tn.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED", function() { return $e(tn.getNumber("WEBGL_VERSION")) }), tn.registerFlag("WEBGL_FENCE_API_ENABLED", function() { return Qe(tn.getNumber("WEBGL_VERSION")) }), tn.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM", function() { return tn.getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? 4 : 0 }), yt = en;
        var Cn = wn({
                complex_: function(t, e) {
                    var n = cn(t, "real", "complex"),
                        r = cn(e, "imag", "complex");
                    return x(n.shape, r.shape, "real and imag shapes, " + n.shape + " and " + r.shape + ", must match in call to tf.complex()."), Kt.runKernelFunc(function(t) { return t.complex(n, r) }, { $real: n, $imag: r })
                }
            }),
            En = wn({ real_: function(t) { var e = cn(t, "input", "real"); return Kt.runKernelFunc(function(t) { return t.real(e) }, { $input: e }) } }),
            _n = wn({ imag_: function(t) { var e = cn(t, "input", "imag"); return Kt.runKernelFunc(function(t) { return t.imag(e) }, { $input: e }) } });

        function In(t, e, n) { return Rn(t, e, sn(t, n), n) }

        function Rn(t, e, n, r) {
            if (null == r && (r = j(t)), "complex64" === r) throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");
            if (!z(t) && !Array.isArray(t) && "number" != typeof t && "boolean" != typeof t && "string" != typeof t) throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
            if (null != e) {
                et(e);
                var o = L(e),
                    i = L(n);
                P(o === i, function() { return "Based on the provided shape, [" + e + "], the tensor should have " + o + " values but has " + i });
                for (var a = 0; a < n.length; ++a) {
                    var s = n[a],
                        u = a !== n.length - 1 || s !== L(e.slice(a));
                    P(n[a] === e[a] || !u, function() { return "Error creating a new Tensor. Inferred shape (" + n + ") does not match the provided shape (" + e + "). " })
                }
            }
            return z(t) || Array.isArray(t) || (t = [t]), e = e || n, t = "string" !== r ? $(t, r, _().getBool("DEBUG")) : b(t, [], !0), Kt.makeTensor(t, e, r)
        }

        function kn(t, e) { if ((z(t) && "string" !== e || Array.isArray(t)) && "complex64" !== e) throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)"); if ("string" === e && z(t) && !(t instanceof Uint8Array)) throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`."); return Rn(t, [], [], e) }

        function Sn(t, e) { m(t); var n = sn(t, e); if (1 !== n.length) throw new Error("tensor1d() requires values to be a flat/TypedArray"); return Rn(t, null, n, e) }

        function Dn(t, e, n) { if (m(t), null != e && 2 !== e.length) throw new Error("tensor2d() requires shape to have two numbers"); var r = sn(t, n); if (2 !== r.length && 1 !== r.length) throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray"); if (1 === r.length && null == e) throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray"); return Rn(t, e, r, n) }

        function An(t, e, n) { if (m(t), null != e && 3 !== e.length) throw new Error("tensor3d() requires shape to have three numbers"); var r = sn(t, n); if (3 !== r.length && 1 !== r.length) throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray"); if (1 === r.length && null == e) throw new Error("tensor3d() requires shape to be provided when `values` are a flat array"); return Rn(t, e, r, n) }

        function Tn(t, e, n) { if (m(t), null != e && 4 !== e.length) throw new Error("tensor4d() requires shape to have four numbers"); var r = sn(t, n); if (4 !== r.length && 1 !== r.length) throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray"); if (1 === r.length && null == e) throw new Error("tensor4d() requires shape to be provided when `values` are a flat array"); return Rn(t, e, r, n) }

        function Nn(t, e, n) { if (m(t), null != e && 5 !== e.length) throw new Error("tensor5d() requires shape to have five numbers"); var r = sn(t, n); if (5 !== r.length && 1 !== r.length) throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray"); if (1 === r.length && null == e) throw new Error("tensor5d() requires shape to be provided when `values` are a flat array"); return Rn(t, e, r, n) }

        function Fn(t, e, n) { if (m(t), null != e && 6 !== e.length) throw new Error("tensor6d() requires shape to have six numbers"); var r = sn(t, n); if (6 !== r.length && 1 !== r.length) throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray"); if (1 === r.length && null == e) throw new Error("tensor6d() requires shape to be provided when `values` are a flat array"); return Rn(t, e = e || r, r, n) }

        function Mn(t, e, n, r) { return void 0 === e && (e = !0), Kt.makeVariable(t, e, n, r) }

        function On(t, e) {
            if (void 0 === e && (e = "float32"), "complex64" === e) {
                var n = On(t, "float32"),
                    r = Pn(t, "float32");
                return Cn(n, r)
            }
            var o = Q(L(t), e);
            return Kt.makeTensor(o, t, e)
        }

        function Pn(t, e) {
            if (void 0 === e && (e = "float32"), "complex64" === e) {
                var n = Pn(t, "float32"),
                    r = Pn(t, "float32");
                return Cn(n, r)
            }
            var o = Z(L(t), e);
            return Kt.makeTensor(o, t, e)
        }

        function Bn(e, n, r) { return Kt.runKernelFunc(function(t) { return t.fill(e, n, r) }, {}) }

        function Ln(e, n, r) { if (r <= 0) throw new Error("The number of values should be positive."); return Kt.runKernelFunc(function(t) { return t.linspace(e, n, r) }, {}) }

        function Wn(t, e, n, r) {
            if (void 0 === n && (n = 1), void 0 === r && (r = "float32"), 0 === n) throw new Error("Cannot have a step of zero");
            if (t === e || t < e && n < 0 || e < t && 1 < n) return Pn([0], r);
            var o = Z(Math.abs(Math.ceil((e - t) / n)), r);
            e < t && 1 === n && (n = -1), o[0] = t;
            for (var i = 1; i < o.length; i++) o[i] = o[i - 1] + n;
            return Sn(o, r)
        }
        var zn = wn({
                onesLike_: function(t) {
                    var e = cn(t, "x", "onesLike");
                    if ("complex64" !== e.dtype) return Kt.runKernelFunc(function(t) { return t.onesLike(e) }, { $x: e }, function(t, e) { return { $x: function() { return Un(t) } } });
                    var n = zn(En(e)),
                        r = Un(_n(e));
                    return Cn(n, r)
                }
            }),
            Un = wn({ zerosLike_: function(t) { var e = cn(t, "x", "zerosLike"); return Kt.runKernelFunc(function(t) { return t.zerosLike(e) }, { $x: e }, function(t, e) { return { $x: function() { return Un(t) } } }) } }),
            Vn = wn({
                concat_: function(t, n) {
                    void 0 === n && (n = 0), P(1 <= t.length, function() { return "Pass at least one tensor to concat" });
                    var e = ln(t, "tensors", "concat");
                    "complex64" === e[0].dtype && e.forEach(function(t) { if ("complex64" !== t.dtype) throw new Error("Cannot concatenate complex64 tensors with a tensor\n with dtype " + t.dtype + ". ") }), n = D(n, e[0].shape)[0];
                    var r = bn(e.map(function(t) { return t.shape }), n);
                    if (0 === L(r)) return In([], r);
                    if (1 === (e = e.filter(function(t) { return 0 < t.size })).length) return e[0];
                    var o = e.map(function(t) { return t.shape });
                    xn(o, n);
                    var i = e,
                        a = { axis: n };
                    return Kt.runKernelFunc(function(t) { return t.concat(e, n) }, i, function(t) { var e = o.map(function(t) { return t[n] }); return Kn(t, e, n).map(function(t) { return function() { return t } }) }, "Concat", a)
                }
            }),
            Gn = wn({ concat1d_: function(t) { return Vn(t, 0) } }),
            Hn = wn({ concat2d_: function(t, e) { return Vn(t, e) } }),
            qn = wn({ concat3d_: function(t, e) { return Vn(t, e) } }),
            jn = wn({ concat4d_: function(t, e) { return Vn(t, e) } }),
            Kn = wn({ split_: function(t, e, n) { void 0 === n && (n = 0); var r, o = cn(t, "x", "split"); return n = D(n, o.shape)[0], r = "number" == typeof e ? (P(o.shape[n] % e == 0, function() { return "Number of splits must evenly divide the axis." }), new Array(e).fill(o.shape[n] / e)) : (P(o.shape[n] === e.reduce(function(t, e) { return t + e }), function() { return "The sum of sizes must match the size of the axis dimension." }), e), Kt.runKernelFunc(function(t) { return t.split(o, r, n) }, { $x: o }, function(t) { return { $x: function() { return Vn(t, n) } } }) } });

        function Xn(t, e) { return t(e = { exports: {} }, e.exports), e.exports }
        var Yn = Xn(function(t) {
                ! function(t, e) {
                    function i(t) {
                        var r, e = this,
                            n = (r = 4022871197, function(t) {
                                t = t.toString();
                                for (var e = 0; e < t.length; e++) {
                                    var n = .02519603282416938 * (r += t.charCodeAt(e));
                                    n -= r = n >>> 0, r = (n *= r) >>> 0, r += 4294967296 * (n -= r)
                                }
                                return 2.3283064365386963e-10 * (r >>> 0)
                            });
                        e.next = function() { var t = 2091639 * e.s0 + 2.3283064365386963e-10 * e.c; return e.s0 = e.s1, e.s1 = e.s2, e.s2 = t - (e.c = 0 | t) }, e.c = 1, e.s0 = n(" "), e.s1 = n(" "), e.s2 = n(" "), e.s0 -= n(t), e.s0 < 0 && (e.s0 += 1), e.s1 -= n(t), e.s1 < 0 && (e.s1 += 1), e.s2 -= n(t), e.s2 < 0 && (e.s2 += 1), n = null
                    }

                    function a(t, e) { return e.c = t.c, e.s0 = t.s0, e.s1 = t.s1, e.s2 = t.s2, e }

                    function n(t, e) {
                        var n = new i(t),
                            r = e && e.state,
                            o = n.next;
                        return o.int32 = function() { return 4294967296 * n.next() | 0 }, o.double = function() { return o() + 11102230246251565e-32 * (2097152 * o() | 0) }, o.quick = o, r && ("object" == typeof r && a(r, n), o.state = function() { return a(n, {}) }), o
                    }
                    e && e.exports ? e.exports = n : this.alea = n
                }(0, t)
            }),
            $n = Xn(function(t) {
                ! function(t, e) {
                    function i(t) {
                        var e = this,
                            n = "";
                        e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.next = function() { var t = e.x ^ e.x << 11; return e.x = e.y, e.y = e.z, e.z = e.w, e.w ^= e.w >>> 19 ^ t ^ t >>> 8 }, t === (0 | t) ? e.x = t : n += t;
                        for (var r = 0; r < n.length + 64; r++) e.x ^= 0 | n.charCodeAt(r), e.next()
                    }

                    function a(t, e) { return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e }

                    function n(t, e) {
                        function n() { return (r.next() >>> 0) / 4294967296 }
                        var r = new i(t),
                            o = e && e.state;
                        return n.double = function() { do { var t = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21) } while (0 === t); return t }, n.int32 = r.next, n.quick = n, o && ("object" == typeof o && a(o, r), n.state = function() { return a(r, {}) }), n
                    }
                    e && e.exports ? e.exports = n : this.xor128 = n
                }(0, t)
            }),
            Jn = Xn(function(t) {
                ! function(t, e) {
                    function i(t) {
                        var e = this,
                            n = "";
                        e.next = function() { var t = e.x ^ e.x >>> 2; return e.x = e.y, e.y = e.z, e.z = e.w, e.w = e.v, (e.d = e.d + 362437 | 0) + (e.v = e.v ^ e.v << 4 ^ t ^ t << 1) | 0 }, e.x = 0, e.y = 0, e.z = 0, e.w = 0, t === ((e.v = 0) | t) ? e.x = t : n += t;
                        for (var r = 0; r < n.length + 64; r++) e.x ^= 0 | n.charCodeAt(r), r == n.length && (e.d = e.x << 10 ^ e.x >>> 4), e.next()
                    }

                    function a(t, e) { return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e.v = t.v, e.d = t.d, e }

                    function n(t, e) {
                        function n() { return (r.next() >>> 0) / 4294967296 }
                        var r = new i(t),
                            o = e && e.state;
                        return n.double = function() { do { var t = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21) } while (0 === t); return t }, n.int32 = r.next, n.quick = n, o && ("object" == typeof o && a(o, r), n.state = function() { return a(r, {}) }), n
                    }
                    e && e.exports ? e.exports = n : this.xorwow = n
                }(0, t)
            }),
            Qn = Xn(function(t) {
                ! function(t, e) {
                    function i(t) {
                        var o = this;
                        o.next = function() {
                                var t, e, n = o.x,
                                    r = o.i;
                                return t = n[r], e = (t ^= t >>> 7) ^ t << 24, e ^= (t = n[r + 1 & 7]) ^ t >>> 10, e ^= (t = n[r + 3 & 7]) ^ t >>> 3, e ^= (t = n[r + 4 & 7]) ^ t << 7, t = n[r + 7 & 7], e ^= (t ^= t << 13) ^ t << 9, n[r] = e, o.i = r + 1 & 7, e
                            },
                            function(t, e) {
                                var n, r = [];
                                if (e === (0 | e)) r[0] = e;
                                else
                                    for (e = "" + e, n = 0; n < e.length; ++n) r[7 & n] = r[7 & n] << 15 ^ e.charCodeAt(n) + r[n + 1 & 7] << 13;
                                for (; r.length < 8;) r.push(0);
                                for (n = 0; n < 8 && 0 === r[n]; ++n);
                                for (8 == n ? r[7] = -1 : r[n], t.x = r, t.i = 0, n = 256; 0 < n; --n) t.next()
                            }(o, t)
                    }

                    function a(t, e) { return e.x = t.x.slice(), e.i = t.i, e }

                    function n(t, e) {
                        null == t && (t = +new Date);

                        function n() { return (r.next() >>> 0) / 4294967296 }
                        var r = new i(t),
                            o = e && e.state;
                        return n.double = function() { do { var t = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21) } while (0 === t); return t }, n.int32 = r.next, n.quick = n, o && (o.x && a(o, r), n.state = function() { return a(r, {}) }), n
                    }
                    e && e.exports ? e.exports = n : this.xorshift7 = n
                }(0, t)
            }),
            Zn = Xn(function(t) {
                ! function(t, e) {
                    function i(t) {
                        var i = this;
                        i.next = function() {
                                var t, e, n = i.w,
                                    r = i.X,
                                    o = i.i;
                                return i.w = n = n + 1640531527 | 0, e = r[o + 34 & 127], t = r[o = o + 1 & 127], e ^= e << 13, t ^= t << 17, e ^= e >>> 15, t ^= t >>> 12, e = r[o] = e ^ t, i.i = o, e + (n ^ n >>> 16) | 0
                            },
                            function(t, e) {
                                var n, r, o, i, a, s = [],
                                    u = 128;
                                for (e === (0 | e) ? (r = e, e = null) : (e += "\0", r = 0, u = Math.max(u, e.length)), o = 0, i = -32; i < u; ++i) e && (r ^= e.charCodeAt((i + 32) % e.length)), 0 === i && (a = r), r ^= r << 10, r ^= r >>> 15, r ^= r << 4, r ^= r >>> 13, 0 <= i && (a = a + 1640531527 | 0, o = 0 == (n = s[127 & i] ^= r + a) ? o + 1 : 0);
                                for (128 <= o && (s[127 & (e && e.length || 0)] = -1), o = 127, i = 512; 0 < i; --i) r = s[o + 34 & 127], n = s[o = o + 1 & 127], r ^= r << 13, n ^= n << 17, r ^= r >>> 15, n ^= n >>> 12, s[o] = r ^ n;
                                t.w = a, t.X = s, t.i = o
                            }(i, t)
                    }

                    function a(t, e) { return e.i = t.i, e.w = t.w, e.X = t.X.slice(), e }

                    function n(t, e) {
                        null == t && (t = +new Date);

                        function n() { return (r.next() >>> 0) / 4294967296 }
                        var r = new i(t),
                            o = e && e.state;
                        return n.double = function() { do { var t = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21) } while (0 === t); return t }, n.int32 = r.next, n.quick = n, o && (o.X && a(o, r), n.state = function() { return a(r, {}) }), n
                    }
                    e && e.exports ? e.exports = n : this.xor4096 = n
                }(0, t)
            }),
            tr = Xn(function(t) {
                ! function(t, e) {
                    function i(t) {
                        var o = this,
                            e = "";
                        o.next = function() {
                            var t = o.b,
                                e = o.c,
                                n = o.d,
                                r = o.a;
                            return t = t << 25 ^ t >>> 7 ^ e, e = e - n | 0, n = n << 24 ^ n >>> 8 ^ r, r = r - t | 0, o.b = t = t << 20 ^ t >>> 12 ^ e, o.c = e = e - n | 0, o.d = n << 16 ^ e >>> 16 ^ r, o.a = r - t | 0
                        }, o.a = 0, o.b = 0, o.c = -1640531527, o.d = 1367130551, t === Math.floor(t) ? (o.a = t / 4294967296 | 0, o.b = 0 | t) : e += t;
                        for (var n = 0; n < e.length + 20; n++) o.b ^= 0 | e.charCodeAt(n), o.next()
                    }

                    function a(t, e) { return e.a = t.a, e.b = t.b, e.c = t.c, e.d = t.d, e }

                    function n(t, e) {
                        function n() { return (r.next() >>> 0) / 4294967296 }
                        var r = new i(t),
                            o = e && e.state;
                        return n.double = function() { do { var t = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21) } while (0 === t); return t }, n.int32 = r.next, n.quick = n, o && ("object" == typeof o && a(o, r), n.state = function() { return a(r, {}) }), n
                    }
                    e && e.exports ? e.exports = n : this.tychei = n
                }(0, t)
            }),
            er = Xn(function(e) {
                ! function(s, u) {
                    var c, l = this,
                        h = 256,
                        f = 6,
                        p = "random",
                        d = u.pow(h, f),
                        v = u.pow(2, 52),
                        m = 2 * v,
                        g = h - 1;

                    function t(t, e, n) {
                        function r() { for (var t = a.g(f), e = d, n = 0; t < v;) t = (t + n) * h, e *= h, n = a.g(1); for (; m <= t;) t /= 2, e /= 2, n >>>= 1; return (t + n) / e }
                        var o = [],
                            i = b(function t(e, n) {
                                var r, o = [],
                                    i = typeof e;
                                if (n && "object" == i)
                                    for (r in e) try { o.push(t(e[r], n - 1)) } catch (t) {}
                                return o.length ? o : "string" == i ? e : e + "\0"
                            }((e = 1 == e ? { entropy: !0 } : e || {}).entropy ? [t, w(s)] : null == t ? function() {
                                try { var t; return c && (t = c.randomBytes) ? t = t(h) : (t = new Uint8Array(h), (l.crypto || l.msCrypto).getRandomValues(t)), w(t) } catch (t) {
                                    var e = l.navigator,
                                        n = e && e.plugins;
                                    return [+new Date, l, n, l.screen, w(s)]
                                }
                            }() : t, 3), o),
                            a = new y(o);
                        return r.int32 = function() { return 0 | a.g(4) }, r.quick = function() { return a.g(4) / 4294967296 }, r.double = r, b(w(a.S), s), (e.pass || n || function(t, e, n, r) { return r && (r.S && x(r, a), t.state = function() { return x(a, {}) }), n ? (u[p] = t, e) : t })(r, i, "global" in e ? e.global : this == u, e.state)
                    }

                    function y(t) {
                        var e, n = t.length,
                            a = this,
                            r = 0,
                            o = a.i = a.j = 0,
                            i = a.S = [];
                        for (n || (t = [n++]); r < h;) i[r] = r++;
                        for (r = 0; r < h; r++) i[r] = i[o = g & o + t[r % n] + (e = i[r])], i[o] = e;
                        (a.g = function(t) { for (var e, n = 0, r = a.i, o = a.j, i = a.S; t--;) e = i[r = g & r + 1], n = n * h + i[g & (i[r] = i[o = g & o + e]) + (i[o] = e)]; return a.i = r, a.j = o, n })(h)
                    }

                    function x(t, e) { return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e }

                    function b(t, e) { for (var n, r = t + "", o = 0; o < r.length;) e[g & o] = g & (n ^= 19 * e[g & o]) + r.charCodeAt(o++); return w(e) }

                    function w(t) { return String.fromCharCode.apply(0, t) }
                    if (u["seed" + p] = t, b(u.random(), s), e.exports) { e.exports = t; try { c = require("crypto") } catch (t) {} }
                }([], Math)
            });
        er.alea = Yn, er.xor128 = $n, er.xorwow = Jn, er.xorshift7 = Qn, er.xor4096 = Zn, er.tychei = tr;
        var nr = er.alea,
            rr = (ur.prototype.nextValue = function() {
                if (!isNaN(this.nextVal)) { var t = this.nextVal; return this.nextVal = NaN, t }
                for (var e, n, r = !1; !r;) {
                    for (var o = void 0, i = void 0, a = void 0; 1 <= (a = (o = 2 * this.random() - 1) * o + (i = 2 * this.random() - 1) * i) || 0 === a;);
                    var s = Math.sqrt(-2 * Math.log(a) / a);
                    e = this.mean + this.stdDev * o * s, n = this.mean + this.stdDev * i * s, this.truncated && !this.isValidTruncated(e) || (r = !0)
                }
                return this.truncated && !this.isValidTruncated(n) || (this.nextVal = this.convertValue(n)), this.convertValue(e)
            }, ur.prototype.convertValue = function(t) { return null == this.dtype || "float32" === this.dtype ? t : Math.round(t) }, ur.prototype.isValidTruncated = function(t) { return t <= this.upper && t >= this.lower }, ur),
            or = (sr.prototype.nextValue = function() { for (var t, e, n, r, o, i;;) { for (; r = this.randn.nextValue(), (i = 1 + this.c * r) <= 0;); if (i *= i * i, e = 1 - .331 * (t = r * r) * t, n = .5 * t + this.d * (1 - i + Math.log(i)), (o = this.randu()) < e || Math.log(o) < n) break } return i = 1 / this.beta * this.d * i, this.alpha < 1 && (i *= Math.pow(this.randu(), 1 / this.alpha)), this.convertValue(i) }, sr.prototype.convertValue = function(t) { return "float32" === this.dtype ? t : Math.round(t) }, sr),
            ir = (ar.prototype.convertValue = function(t) { return this.canReturnFloat() ? t : Math.round(t) }, ar.prototype.nextValue = function() { return this.convertValue(this.min + this.range * this.random()) }, ar);

        function ar(t, e, n, r) {
            var o = this;
            if (void 0 === t && (t = 0), void 0 === e && (e = 1), this.canReturnFloat = function() { return null == o.dtype || "float32" === o.dtype }, this.min = t, this.range = e - t, this.dtype = n, null == r && (r = Math.random()), "number" == typeof r && (r = r.toString()), !this.canReturnFloat() && this.range <= 1) throw new Error("The difference between " + t + " - " + e + " <= 1 and dtype is not float");
            this.random = nr(r)
        }

        function sr(t, e, n, r) {
            this.alpha = t, this.beta = 1 / e, this.dtype = n;
            var o = r || Math.random();
            this.randu = nr(o.toString()), this.randn = new rr(0, 1, n, !1, this.randu()), this.d = t < 1 ? t + 2 / 3 : t - 1 / 3, this.c = 1 / Math.sqrt(9 * this.d)
        }

        function ur(t, e, n, r, o) {
            this.mean = t, this.stdDev = e, this.dtype = n, this.nextVal = NaN, this.truncated = r, this.truncated && (this.upper = this.mean + 2 * this.stdDev, this.lower = this.mean - 2 * this.stdDev);
            var i = o || Math.random();
            this.random = nr(i.toString())
        }

        function cr(t, e, n) { return void 0 === e && (e = "float32"), e = e || "float32", et(t), new vt(t, e, n) }

        function lr(t, e) { void 0 === e && (e = !1), console.log(t.toString(e)) }

        function hr(h, f) {
            return y(this, void 0, void 0, function() {
                var e, n, r, o, i, a, s, u, c, l;
                return R(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = cn(h, "x", "setdiff1d"), n = cn(f, "y", "setdiff1d"), P(e.dtype === n.dtype, function() { return "x and y should have the same dtype, but got x (" + e.dtype + ") and y (" + n.dtype + ")." }), P(1 === e.rank, function() { return "x should be 1D tensor, but got x (" + e.shape + ")." }), P(1 === n.rank, function() { return "y should be 1D tensor, but got y (" + n.shape + ")." }), [4, e.data()];
                        case 1:
                            return r = t.sent(), [4, n.data()];
                        case 2:
                            for (o = t.sent(), i = new Set(o), c = a = 0; c < r.length; c++) i.has(r[c]) || a++;
                            for (s = new vt([a], e.dtype), u = new vt([a], "int32"), l = c = 0; c < r.length; c++) i.has(r[c]) || (s.values[l] = r[c], u.values[l] = c, l++);
                            return [2, [s.toTensor(), u.toTensor()]]
                    }
                })
            })
        }
        var fr = wn({
                batchToSpaceND_: function(t, e, n) {
                    var r = cn(t, "x", "batchToSpaceND"),
                        o = e.reduce(function(t, e) { return t * e });
                    return P(r.rank >= 1 + e.length, function() { return "input rank is " + r.rank + " but should be > than blockShape.length " + e.length }), P(n.length === e.length, function() { return "crops.length is " + n.length + " but should be equal to blockShape.length " + e.length }), P(r.shape[0] % o == 0, function() { return "input tensor batch is " + r.shape[0] + " but is not divisible by the product of the elements of blockShape " + e.join(" * ") + " === " + o }), Kt.runKernelFunc(function(t) { return t.batchToSpaceND(r, e, n) }, { $x: r }, function(t) { return { $x: function() { return t.spaceToBatchND(e, n) } } })
                }
            }),
            pr = wn({
                broadcastTo_: function(t, e) {
                    var n = cn(t, "broadcastTo", "x"),
                        r = n.shape;
                    if (e.some(function(t) { return !(0 < t) || t % 1 != 0 })) throw new Error("broadcastTo(): Invalid broadcast shape [" + e + "].");
                    if (e.length < n.rank) throw new Error("broadcastTo(): shape.length=" + e.length + " < input.rank=" + n.rank + ".");
                    if (e.length > n.rank) {
                        for (var o = n.shape.slice(); o.length < e.length;) o.unshift(1);
                        n = n.reshape(o)
                    }
                    for (var i = Array.from(e), a = e.length - 1; 0 <= a; a--)
                        if (n.shape[a] === e[a]) i[a] = 1;
                        else if (1 !== n.shape[a]) throw new Error("broadcastTo(): [" + r + "] cannot be broadcast to [" + e + "].");
                    var s = i.map(function(t, e) { return 1 < t ? e : -1 }).filter(function(t) { return 0 <= t });
                    return 0 === s.length ? n.clone() : Kt.runKernelFunc(function(t) { return t.tile(n, i) }, { input: n }, function(t) { return { input: function() { return t.sum(s, !0) } } })
                }
            }),
            dr = wn({ cast_: function(t, e) { var n = cn(t, "x", "cast"); if (!O(e)) throw new Error("Failed to cast to unknown dtype " + e); if ("string" === e && "string" !== n.dtype || "string" !== e && "string" === n.dtype) throw new Error("Only strings can be casted to strings"); var r = { dtype: e }; return Kt.runKernelFunc(function(t) { return t.cast(n, e) }, { x: n }, function(t) { return { x: function() { return t.clone() } } }, "Cast", r) } }),
            vr = wn({ clone_: function(t) { var e = cn(t, "x", "clone", null); return Kt.runKernelFunc(function() { return Kt.makeTensorFromDataId(e.dataId, e.shape, e.dtype) }, { $x: e }, function(t) { return { $x: function() { return t.toFloat() } } }) } }),
            mr = wn({
                cumsum_: function(t, e, n, r) {
                    void 0 === e && (e = 0), void 0 === n && (n = !1), void 0 === r && (r = !1);
                    var o = cn(t, "x", "cumsum"),
                        i = mn([e |= 0], o.rank),
                        a = o;
                    null != i && (a = o.transpose(i));
                    var s = yn(1, o.rank)[0],
                        u = Kt.runKernelFunc(function(t) { return t.cumsum(a, s, n, r) }, { permutedX: a }, function(t) { return { permutedX: function() { return t.cumsum(e, n, !r) } } });
                    return null != i && (u = u.transpose(i)), u
                }
            }),
            gr = wn({
                depthToSpace_: function(t, e, n) {
                    void 0 === n && (n = "NHWC");
                    var r = cn(t, "x", "depthToSpace"),
                        o = "NHWC" === n ? r.shape[1] : r.shape[2],
                        i = "NHWC" === n ? r.shape[2] : r.shape[3],
                        a = "NHWC" === n ? r.shape[3] : r.shape[1];
                    return P(0 <= o * e, function() { return "Negative dimension size caused by overflow when multiplying\n " + o + " and " + e + " for depthToSpace with input shape\n " + r.shape }), P(0 <= i * e, function() { return "Negative dimension size caused by overflow when multiplying\n " + i + " and " + e + " for depthToSpace with input shape\n " + r.shape }), P(a % (e * e) == 0, function() { return "Dimension size must be evenly divisible by " + e * e + " but is " + a + " for depthToSpace with input shape " + r.shape }), Kt.runKernelFunc(function(t) { return t.depthToSpace(r, e, n) }, { $x: r })
                }
            }),
            yr = wn({
                expandDims_: function(t, e) {
                    void 0 === e && (e = 0);
                    var n = cn(t, "x", "expandDims", null);
                    P(e <= n.rank, function() { return "Axis must be <= rank of the tensor" });
                    var r = n.shape.slice();
                    return e < 0 && (P(-(n.rank + 1) <= e, function() { return "Axis must be in the interval [" + -(n.rank + 1) + ", " + n.rank + "]" }), e = n.rank + e + 1), r.splice(e, 0, 1), Tr(n, r)
                }
            }),
            xr = wn({ eye_: function(t, e, n, r) { void 0 === r && (r = "float32"), null == e && (e = t); for (var o = cr([t, e], r), i = t <= e ? t : e, a = 0; a < i; ++a) o.set(1, a, a); var s = o.toTensor().as2D(t, e); if (null == n) return s; if (1 === n.length) return Or(yr(s, 0), [n[0], 1, 1]); if (2 === n.length) return Or(yr(yr(s, 0), 0), [n[0], n[1], 1, 1]); if (3 === n.length) return Or(yr(yr(yr(s, 0), 0), 0), [n[0], n[1], n[2], 1, 1]); throw new Error("eye() currently supports only 1D and 2D batchShapes, but received " + n.length + "D.") } }),
            br = wn({
                multinomial_: function(t, e, n, r) {
                    void 0 === r && (r = !1);
                    var o = cn(t, "logits", "multinomial"),
                        i = o.size,
                        a = o.rank;
                    if (i < 2) throw new Error("Error in multinomial: you need at least 2 outcomes, but got " + i + ".");
                    if (2 < a) throw new Error("Rank of probabilities must be 1 or 2, but is " + a);
                    n = n || Math.random();
                    var s = 1 === a ? o.as2D(1, -1) : o,
                        u = Kt.runKernelFunc(function(t) { return t.multinomial(s, r, e, n) }, { logits2D: s });
                    return 1 === a ? u.as1D() : u
                }
            }),
            wr = wn({
                oneHot_: function(t, e, n, r) {
                    if (void 0 === n && (n = 1), void 0 === r && (r = 0), e < 2) throw new Error("Error in oneHot: depth must be >=2, but it is " + e);
                    var o = cn(t, "indices", "oneHot", "int32"),
                        i = o.shape.concat([e]);
                    return o = o.flatten(), Kt.runKernelFunc(function(t) { return t.oneHot(o, e, n, r) }, { $indices: o }, function(t) { return { $indices: function() { return Pn(o.shape, "float32") } } }).reshape(i)
                }
            }),
            Cr = wn({ pad_: function(t, n, e) { void 0 === e && (e = 0); var r = cn(t, "x", "pad"); if (0 === r.rank) throw new Error("pad(scalar) is not defined. Pass non-scalar to pad"); var o = { paddings: n, constantValue: e }; return Kt.runKernelFunc(function(t) { return t.pad(r, n, e) }, { x: r }, function(t) { var e = n.map(function(t) { return t[0] }); return { x: function() { return t.slice(e, r.shape) } } }, "PadV2", o) } }),
            Er = wn({ pad1d_: function(t, e, n) { return void 0 === n && (n = 0), P(2 === e.length, function() { return "Invalid number of paddings. Must be length of 2." }), Cr(t, [e], n) } }),
            _r = wn({ pad2d_: function(t, e, n) { return void 0 === n && (n = 0), P(2 === e.length && 2 === e[0].length && 2 === e[1].length, function() { return "Invalid number of paddings. Must be length of 2 each." }), Cr(t, e, n) } }),
            Ir = wn({ pad3d_: function(t, e, n) { return void 0 === n && (n = 0), P(3 === e.length && 2 === e[0].length && 2 === e[1].length && 2 === e[2].length, function() { return "Invalid number of paddings. Must be length of 2 each." }), Cr(t, e, n) } }),
            Rr = wn({ pad4d_: function(t, e, n) { return void 0 === n && (n = 0), P(4 === e.length && 2 === e[0].length && 2 === e[1].length && 2 === e[2].length && 2 === e[3].length, function() { return "Invalid number of paddings. Must be length of 2 each." }), Cr(t, e, n) } }),
            kr = wn({
                rand_: function(t, e, n) {
                    var r = L(t),
                        o = null;
                    if (null == n || "float32" === n) o = new Float32Array(r);
                    else if ("int32" === n) o = new Int32Array(r);
                    else {
                        if ("bool" !== n) throw new Error("Unknown data type " + n);
                        o = new Uint8Array(r)
                    }
                    for (var i = 0; i < r; i++) o[i] = e();
                    return Kt.makeTensor(o, t, n)
                }
            }),
            Sr = wn({ randomNormal_: function(t, e, n, r, o) { if (void 0 === e && (e = 0), void 0 === n && (n = 1), null != r && "bool" === r) throw new Error("Unsupported data type " + r); for (var i = new rr(e, n, r, !1, o), a = cr(t, r), s = 0; s < a.values.length; s++) a.values[s] = i.nextValue(); return a.toTensor() } }),
            Dr = wn({ randomGamma_: function(t, e, n, r, o) { if (void 0 === n && (n = 1), void 0 === r && (r = "float32"), null == n && (n = 1), null == r && (r = "float32"), "float32" !== r && "int32" !== r) throw new Error("Unsupported data type " + r); for (var i = new or(e, n, r, o), a = cr(t, r), s = 0; s < a.values.length; s++) a.values[s] = i.nextValue(); return a.toTensor() } }),
            Ar = wn({ randomUniform_: function(t, e, n, r, o) { void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = "float32"); for (var i = cr(t, r), a = new ir(e, n, null, o), s = 0; s < i.values.length; s++) i.values[s] = a.nextValue(); return i.toTensor() } }),
            Tr = wn({
                reshape_: function(t, e) {
                    var n = cn(t, "x", "reshape", null);
                    e = S(e, n.size), P(n.size === L(e), function() { return "new shape and old shape must have the same number of elements." });
                    var r = { shape: e };
                    return Kt.runKernelFunc(function(t) { return t.reshape(n, e) }, { x: n }, function(t) { return { x: function() { return t.reshape(n.shape) } } }, "Reshape", r)
                }
            }),
            Nr = wn({ spaceToBatchND_: function(t, r, o) { var e = cn(t, "x", "spaceToBatchND"); return P(e.rank >= 1 + r.length, function() { return "input rank " + e.rank + " should be > than [blockShape] " + r.length }), P(o.length === r.length, function() { return "paddings.shape[0] " + o.length + " must be equal to [blockShape] " + r.length }), P(e.shape.reduce(function(t, e, n) { return 0 < n && n <= r.length ? t && (e + o[n - 1][0] + o[n - 1][1]) % r[n - 1] == 0 : t }, !0), function() { return "input spatial dimensions " + e.shape.slice(1) + " with paddings " + o.toString() + " must be divisible by blockShapes " + r.toString() }), Kt.runKernelFunc(function(t) { return t.spaceToBatchND(e, r, o) }, { $x: e }, function(t) { return { $x: function() { return t.batchToSpaceND(r, o) } } }) } }),
            Fr = wn({ squeeze_: function(t, e) { var n = cn(t, "x", "squeeze"); return Tr(n, T(n.shape, e).newShape) } }),
            Mr = wn({
                stack_: function(t, e) {
                    void 0 === e && (e = 0);
                    var n = ln(t, "tensors", "stack");
                    if (P(1 <= n.length, function() { return "Pass at least one tensor to tf.stack" }), 1 === n.length) return n[0].expandDims(e);
                    var r = n[0].rank,
                        o = n[0].shape,
                        i = n[0].dtype;
                    P(e <= r, function() { return "Axis must be <= rank of the tensor" }), n.forEach(function(t) { x(o, t.shape, "All tensors passed to stack must have matching shapes") }), n.forEach(function(t) { P(i === t.dtype, function() { return "All tensors passed to stack must have matching dtypes" }) });
                    var a = n.map(function(t) { return t.expandDims(e) });
                    return Vn(a, e)
                }
            }),
            Or = wn({
                tile_: function(t, s) {
                    var r = cn(t, "x", "tile", null);
                    P(r.rank === s.length, function() { return "Error in transpose: rank of input " + r.rank + " must match length of reps " + s + "." });
                    var e = [r],
                        n = { reps: s };
                    return Kt.runKernelFunc(function(t, e) { var n = t.tile(r, s); return e([r]), n }, { x: r }, function(i, t) {
                        var a = t[0];
                        return {
                            x: function() {
                                var t = Un(a);
                                if (1 === a.rank)
                                    for (var e = 0; e < s[0]; ++e) t = t.add(i.slice([e * a.shape[0]], [a.shape[0]]));
                                else if (2 === a.rank)
                                    for (e = 0; e < s[0]; ++e)
                                        for (var n = 0; n < s[1]; ++n) t = t.add(i.slice([e * a.shape[0], n * a.shape[1]], [a.shape[0], a.shape[1]]));
                                else if (3 === a.rank)
                                    for (e = 0; e < s[0]; ++e)
                                        for (n = 0; n < s[1]; ++n)
                                            for (var r = 0; r < s[2]; ++r) t = t.add(i.slice([e * a.shape[0], n * a.shape[1], r * a.shape[2]], [a.shape[0], a.shape[1], a.shape[2]]));
                                else {
                                    if (4 !== a.rank) throw new Error("Gradient for tile operation is not implemented for rank-" + a.rank + " tensors yet.");
                                    for (e = 0; e < s[0]; ++e)
                                        for (n = 0; n < s[1]; ++n)
                                            for (r = 0; r < s[2]; ++r)
                                                for (var o = 0; o < s[3]; ++o) t = t.add(i.slice([e * a.shape[0], n * a.shape[1], r * a.shape[2], o * a.shape[3]], [a.shape[0], a.shape[1], a.shape[2], a.shape[3]]))
                                }
                                return t
                            }
                        }
                    }, "Tile", n, e)
                }
            }),
            Pr = wn({ truncatedNormal_: function(t, e, n, r, o) { if (void 0 === e && (e = 0), void 0 === n && (n = 1), null != r && "bool" === r) throw new Error("Unsupported data type " + r); for (var i = new rr(e, n, r, !0, o), a = cr(t, r), s = 0; s < a.values.length; s++) a.values[s] = i.nextValue(); return a.toTensor() } }),
            Br = wn({
                unstack_: function(t, e) {
                    void 0 === e && (e = 0), e = e || 0;
                    var n = cn(t, "x", "unstack");
                    P(e >= -n.shape.length && e < n.shape.length, function() { return "Axis = " + e + " is not in [-" + n.shape.length + ", " + n.shape.length + ")" }), e < 0 && (e += n.shape.length);
                    var r = { axis: e };
                    return Kt.runKernelFunc(function(t) { return t.unstack(n, e) }, { x: n }, function(t) { return { x: function() { return Mr(t, e) } } }, "Unpack", r)
                }
            });

        function Lr(t, e, n, r) {
            void 0 === r && (r = !0);
            var o = [];
            if (r)(o = o.concat(e.slice(0))).push(t[0] / n), o = o.concat(t.slice(1));
            else {
                o = o.concat(t[0]);
                for (var i = e.length, a = 0; a < i; ++a) o = o.concat([t[a + 1] / e[a], e[a]]);
                o = o.concat(t.slice(i + 1))
            }
            return o
        }

        function Wr(t, e, n) {
            void 0 === n && (n = !0);
            var r = [];
            if (n) { r.push(e); for (var o = e + 1; o < t; ++o) o <= 2 * e ? (r.push(o), r.push(o - (e + 1))) : r.push(o) } else {
                var i = [],
                    a = [];
                for (o = 1; o < t; ++o) 2 * e + 1 <= o || o % 2 == 1 ? a.push(o) : i.push(o);
                r.push.apply(r, i), r.push(0), r.push.apply(r, a)
            }
            return r
        }

        function zr(t, e, n, r) {
            void 0 === r && (r = !0);
            var o = [];
            r ? o.push(t[0] / n) : o.push(t[0] * n);
            for (var i = 1; i < t.length; ++i) i <= e.length ? r ? o.push(e[i - 1] * t[i]) : o.push(t[i] / e[i - 1]) : o.push(t[i]);
            return o
        }

        function Ur(t, e) { for (var n = [0], r = 0; r < e; ++r) n.push(t[r][0]); return n }

        function Vr(t, e, n) { for (var r = t.slice(0, 1), o = 0; o < n; ++o) r.push(t[o + 1] - e[o][0] - e[o][1]); return r }

        function Gr(t, e) {
            if (t.rank < 1) throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was " + t.rank + ".");
            if (e.rank < 1) throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was " + e.rank + ".");
            if ("int32" !== e.dtype) throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was " + e.dtype + ".");
            if (e.shape[e.rank - 1] > t.rank) throw new Error("index innermost dimension length must be <= tensor rank; saw: " + e.shape[e.rank - 1] + " vs. " + t.rank);
            if (0 === t.size) throw new Error("Requested more than 0 entries, but input is empty. Input shape: " + t.shape + ".");
            for (var n = e.shape, r = n[n.length - 1], o = 1, i = 0; i < n.length - 1; ++i) o *= n[i];
            var a = t.shape,
                s = n.slice();
            s.pop();
            var u = 1;
            for (i = r; i < t.rank; ++i) u *= a[i], s.push(a[i]);
            var c = Y(t.shape).map(function(t) { return t / u }).concat([1]).slice(0, r);
            return [s, o, u, c]
        }
        var Hr = Object.freeze({ prepareAndValidate: Gr });

        function qr(t) { return t <= 30 ? t : X(t, Math.floor(Math.sqrt(t))) }

        function jr(t, e, n) {
            var r = 1 < e.rank ? e.shape[e.rank - 1] : 1,
                o = 1 < e.rank ? e.rank - 1 : 1,
                i = "Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: " + n.shape + ", indices.shape: " + e.shape + ", shape: " + t + ", sliceDim: " + r + ", and batchDim: " + o + ".";
            if (n.rank < o) throw new Error(i + " update.rank < " + o + ". ");
            if (t.length < r + (n.rank - o)) throw new Error(i + " Output shape length < " + (r + (n.rank - o)));
            if (n.rank !== o + t.length - r) throw new Error(i + " update.rank != " + (o + t.length - r));
            for (var a = 0; a < o; ++a)
                if (n.shape[a] !== e.shape[a]) throw new Error(i + " updates.shape[" + a + "] (" + n.shape[a] + ") != indices.shape[" + a + "] (" + e.shape[a] + ").");
            for (a = 0; a < n.rank - o; ++a)
                if (n.shape[a + o] !== t[a + r]) throw new Error(i + " updates.shape[" + (a + o) + "] (" + n.shape[a + o] + ") != shape[" + (a + o) + "] (" + t[a + o] + ")")
        }

        function Kr(t, e, n) {
            if (e.rank < 1) throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was " + e.rank + ".");
            if (t.rank < 1) throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was " + t.rank + ".");
            if ("int32" !== e.dtype) throw new Error("The dtype of 'indices' should be int32, but got dtype: " + e.dtype);
            if (n.length < 1) throw new Error("Output rank must be greater or equal to 1, but got shape: " + n);
            if (0 === n.length) { if (0 === e.size) throw new Error("Indices specified for empty output. indices shape: " + e.shape); if (0 === t.size) throw new Error("Updates specified for empty output. updates shape: " + t.shape) }
            jr(n, e, t)
        }

        function Xr(t, e, n) { for (var r = e.shape.length, o = 1 < r ? e.shape[r - 1] : 1, i = n.length, a = 1, s = o; s < i; ++s) a *= n[s]; var u = o < 1 ? 1 : o; return { sliceRank: o, numUpdates: L(e.shape) / u, sliceSize: a, strides: Y(n.slice(0, o)).concat([1]), outputSize: L(n) } }
        var Yr = Object.freeze({ validateUpdateShape: jr, validateInput: Kr, calculateShapes: Xr });

        function $r(e, n, r) { P(e.rank === n.length, function() { return "Error in slice" + e.rank + "D: Length of begin " + n + " must match the rank of the array (" + e.rank + ")." }), P(e.rank === r.length, function() { return "Error in slice" + e.rank + "D: Length of size " + r + " must match the rank of the array (" + e.rank + ")." }); for (var t = function(t) { P(n[t] + r[t] <= e.shape[t], function() { return "Error in slice" + e.rank + "D: begin[" + t + "] + size[" + t + "] (" + (n[t] + r[t]) + ") would overflow input.shape[" + t + "] (" + e.shape[t] + ")" }) }, o = 0; o < e.rank; ++o) t(o) }

        function Jr(t) { for (var e = [], n = 0; 0 < t;) 1 & t && e.push(n), t /= 2, n++; return e }

        function Qr(t, e, n) { for (var r = [], o = 0; o < t.length; o++) r[o] = Math.ceil((e[o] - t[o]) / n[o]); return r }

        function Zr(t, e, n, r, o) {
            var i = e[o],
                a = n[o] || 1;
            (t & 1 << o || null == i) && (i = 0 < a ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
            var s = r[o];
            return i < 0 && (i += s), d(0, i, s - 1)
        }

        function to(t, e, n, r, o) {
            var i = e[o],
                a = n[o] || 1;
            (t & 1 << o || null == i) && (i = 0 < a ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
            var s = r[o];
            return i < 0 && (i += s), 0 < a ? d(0, i, s) : d(-1, i, s - 1)
        }

        function eo(t, e, n) {
            for (var r = n.length, o = 0; o < n.length; o++)
                if (1 < n[o]) { r = o; break }
            for (o = r + 1; o < n.length; o++)
                if (0 < e[o] || n[o] !== t[o]) return !1;
            return !0
        }

        function no(t, e) { for (var n = 0 < t.length ? t[t.length - 1] : 1, r = 0; r < t.length - 1; r++) n += t[r] * e[r]; return n }
        var ro = Object.freeze({ assertParamsValid: $r, maskToAxes: Jr, computeOutShape: Qr, startForAxis: Zr, stopForAxis: to, isSliceContinous: eo, computeFlatOffset: no });

        function oo(t, e) {
            P(K(t), function() { return "The f passed in variableGrads(f) must be a function" }), P(null == e || Array.isArray(e) && e.every(function(t) { return t instanceof Ft }), function() { return "The varList passed in variableGrads(f, varList) must be an array of variables" });
            var n = null != e;
            if (!n)
                for (var r in e = [], Kt.registeredVariables) e.push(Kt.registeredVariables[r]);
            var o = n ? e.filter(function(t) { return !t.trainable }) : null,
                i = e.length;
            P(0 < (e = e.filter(function(t) { return t.trainable })).length, function() { return "variableGrads() expects at least one of the input variables to be trainable, but none of the " + i + " variables is trainable." });
            var a = Kt.gradients(t, e, null, !0),
                s = a.value,
                u = a.grads;
            P(u.some(function(t) { return null != t }), function() { return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()." }), P(0 === s.rank, function() { return "The f passed in variableGrads(f) must return a scalar, but it returned a rank-" + s.rank + " tensor" });
            var c = {};
            return e.forEach(function(t, e) { null != u[e] && (c[t.name] = u[e]) }), null != o && o.forEach(function(t) { return c[t.name] = null }), { value: s, grads: c }
        }

        function io(t) { return Kt.customGrad(t) }

        function ao(t) { if (0 < t.filter(function(t) { return null == t }).length) throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n the f you passed encloses all operations that lead from x to y.") }
        var so = wn({
                softmax_: function(t, o) {
                    void 0 === o && (o = -1);
                    var r = cn(t, "logits", "softmax", "float32");
                    if (-1 === o && (o = r.rank - 1), o !== r.rank - 1) throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + r.rank + " and dim was " + o);
                    return Kt.runKernelFunc(function(t, e) { var n = t.softmax(r, o); return e([n]), n }, { logits: r }, function(t, e) {
                        var n = e[0],
                            r = t.mul(n);
                        return { logits: function() { return r.sub(r.sum([o], !0).mul(n)) } }
                    }, "Softmax", { dim: o }, [], [!0])
                }
            }),
            uo = wn({
                logSoftmax_: function(t, i) {
                    void 0 === i && (i = -1);
                    var e = cn(t, "logits", "logSoftmax");
                    if (-1 === i && (i = e.rank - 1), i !== e.rank - 1) throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank " + e.rank + " and axis was " + i);
                    return io(function(t, e) {
                        var n = t.max(i, !0),
                            r = t.sub(n),
                            o = r.toFloat().sub(r.exp().sum(i, !0).log());
                        return e([o]), { value: o, gradFunc: function(t, e) { var n = e[0].exp(); return t.sub(t.sum(i, !0).mul(n)) } }
                    })(e)
                }
            }),
            co = (fo.prototype.get = function(t) { return this.data.has(t) || this.dataMover.moveData(this.backend, t), this.data.get(t) }, fo.prototype.set = function(t, e) { this.dataIdsCount++, this.data.set(t, e) }, fo.prototype.has = function(t) { return this.data.has(t) }, fo.prototype.delete = function(t) { return this.dataIdsCount--, this.data.delete(t) }, fo.prototype.numDataIds = function() { return this.dataIdsCount }, fo),
            lo = (ho.prototype.time = function(t) { return po("time") }, ho.prototype.read = function(t) { return po("read") }, ho.prototype.readSync = function(t) { return po("readSync") }, ho.prototype.numDataIds = function() { return po("numDataIds") }, ho.prototype.disposeData = function(t) { return po("disposeData") }, ho.prototype.write = function(t, e, n) { return po("write") }, ho.prototype.move = function(t, e, n, r) { return po("move") }, ho.prototype.memory = function() { return po("memory") }, ho.prototype.floatPrecision = function() { return po("floatPrecision") }, ho.prototype.epsilon = function() { return 32 === this.floatPrecision() ? 1e-7 : 1e-4 }, ho.prototype.batchMatMul = function(t, e, n, r) { return po("batchMatMul") }, ho.prototype.fusedBatchMatMul = function(t) { return t.a, t.b, t.transposeA, t.transposeB, t.bias, t.activation, t.preluActivationWeights, po("fusedBatchMatMul") }, ho.prototype.slice = function(t, e, n) { return po("slice") }, ho.prototype.stridedSlice = function(t, e, n, r) { return po("stridedSlice") }, ho.prototype.unstack = function(t, e) { return po("unstack") }, ho.prototype.reverse = function(t, e) { return po("reverse") }, ho.prototype.concat = function(t, e) { return po("concat") }, ho.prototype.neg = function(t) { return po("neg") }, ho.prototype.add = function(t, e) { return po("add") }, ho.prototype.addN = function(t) { return po("addN") }, ho.prototype.subtract = function(t, e) { return po("subtract") }, ho.prototype.multiply = function(t, e) { return po("multiply") }, ho.prototype.realDivide = function(t, e) { return po("realDivide") }, ho.prototype.floorDiv = function(t, e) { return po("floorDiv") }, ho.prototype.sum = function(t, e) { return po("sum") }, ho.prototype.prod = function(t, e) { return po("prod") }, ho.prototype.unsortedSegmentSum = function(t, e, n) { return po("unsortedSegmentSum") }, ho.prototype.argMin = function(t, e) { return po("argMin") }, ho.prototype.argMax = function(t, e) { return po("argMax") }, ho.prototype.equal = function(t, e) { return po("equal") }, ho.prototype.notEqual = function(t, e) { return po("notEqual") }, ho.prototype.less = function(t, e) { return po("less") }, ho.prototype.lessEqual = function(t, e) { return po("lessEqual") }, ho.prototype.greater = function(t, e) { return po("greater") }, ho.prototype.greaterEqual = function(t, e) { return po("greaterEqual") }, ho.prototype.logicalNot = function(t) { return po("logicalNot") }, ho.prototype.logicalAnd = function(t, e) { return po("logicalAnd") }, ho.prototype.logicalOr = function(t, e) { return po("logicalOr") }, ho.prototype.where = function(t) { return po("where") }, ho.prototype.select = function(t, e, n) { return po("select") }, ho.prototype.topk = function(t, e, n) { return po("topk") }, ho.prototype.min = function(t, e) { return po("min") }, ho.prototype.minimum = function(t, e) { return po("minimum") }, ho.prototype.mod = function(t, e) { return po("mod") }, ho.prototype.max = function(t, e) { return po("max") }, ho.prototype.maximum = function(t, e) { return po("maximum") }, ho.prototype.all = function(t, e) { return po("all") }, ho.prototype.any = function(t, e) { return po("any") }, ho.prototype.squaredDifference = function(t, e) { return po("squaredDifference") }, ho.prototype.ceil = function(t) { return po("ceil") }, ho.prototype.floor = function(t) { return po("floor") }, ho.prototype.round = function(t) { return po("round") }, ho.prototype.sign = function(t) { return po("sign") }, ho.prototype.isNaN = function(t) { return po("isNaN") }, ho.prototype.isInf = function(t) { return po("isInf") }, ho.prototype.isFinite = function(t) { return po("isFinite") }, ho.prototype.pow = function(t, e) { return po("pow") }, ho.prototype.exp = function(t) { return po("exp") }, ho.prototype.expm1 = function(t) { return po("expm1") }, ho.prototype.softmax = function(t, e) { return po("softmax") }, ho.prototype.log = function(t) { return po("log") }, ho.prototype.log1p = function(t) { return po("log1p") }, ho.prototype.sqrt = function(t) { return po("sqrt") }, ho.prototype.rsqrt = function(t) { return po("rsqrt") }, ho.prototype.square = function(t) { return po("square") }, ho.prototype.reciprocal = function(t) { return po("reciprocal") }, ho.prototype.relu = function(t) { return po("relu") }, ho.prototype.relu6 = function(t) { return po("relu6") }, ho.prototype.prelu = function(t, e) { return po("prelu") }, ho.prototype.elu = function(t) { return po("elu") }, ho.prototype.eluDer = function(t, e) { return po("eluDer") }, ho.prototype.selu = function(t) { return po("selu") }, ho.prototype.int = function(t) { return po("int") }, ho.prototype.clip = function(t, e, n) { return po("clip") }, ho.prototype.abs = function(t) { return po("abs") }, ho.prototype.complexAbs = function(t) { return po("complexAbs") }, ho.prototype.sigmoid = function(t) { return po("sigmoid") }, ho.prototype.softplus = function(t) { return po("softplus") }, ho.prototype.sin = function(t) { return po("sin") }, ho.prototype.cos = function(t) { return po("cos") }, ho.prototype.tan = function(t) { return po("tan") }, ho.prototype.asin = function(t) { return po("asin") }, ho.prototype.acos = function(t) { return po("acos") }, ho.prototype.atan = function(t) { return po("atan") }, ho.prototype.atan2 = function(t, e) { return po("atan2") }, ho.prototype.sinh = function(t) { return po("sinh") }, ho.prototype.cosh = function(t) { return po("cosh") }, ho.prototype.tanh = function(t) { return po("tanh") }, ho.prototype.asinh = function(t) { return po("asinh") }, ho.prototype.acosh = function(t) { return po("acosh") }, ho.prototype.atanh = function(t) { return po("atanh") }, ho.prototype.erf = function(t) { return po("erf") }, ho.prototype.step = function(t, e) { return po("step") }, ho.prototype.fusedConv2d = function(t) { return t.input, t.filter, t.convInfo, t.bias, t.activation, t.preluActivationWeights, po("fusedConv2d") }, ho.prototype.conv2d = function(t, e, n) { return po("conv2d") }, ho.prototype.conv2dDerInput = function(t, e, n) { return po("conv2dDerInput") }, ho.prototype.conv2dDerFilter = function(t, e, n) { return po("conv2dDerFilter") }, ho.prototype.fusedDepthwiseConv2D = function(t) { return t.input, t.filter, t.convInfo, t.bias, t.activation, t.preluActivationWeights, po("fusedDepthwiseConv2D") }, ho.prototype.depthwiseConv2D = function(t, e, n) { return po("depthwiseConv2D") }, ho.prototype.depthwiseConv2DDerInput = function(t, e, n) { return po("depthwiseConv2DDerInput") }, ho.prototype.depthwiseConv2DDerFilter = function(t, e, n) { return po("depthwiseConv2DDerFilter") }, ho.prototype.conv3d = function(t, e, n) { return po("conv3d") }, ho.prototype.conv3dDerInput = function(t, e, n) { return po("conv3dDerInput") }, ho.prototype.conv3dDerFilter = function(t, e, n) { return po("conv3dDerFilter") }, ho.prototype.maxPool = function(t, e) { return po("maxPool") }, ho.prototype.maxPoolBackprop = function(t, e, n, r) { return po("maxPoolBackprop") }, ho.prototype.avgPool = function(t, e) { return po("avgPool") }, ho.prototype.avgPoolBackprop = function(t, e, n) { return po("avgPoolBackprop") }, ho.prototype.avgPool3d = function(t, e) { return po("avgPool3d") }, ho.prototype.avgPool3dBackprop = function(t, e, n) { return po("avgPool3dBackprop") }, ho.prototype.maxPool3d = function(t, e) { return po("maxPool3d") }, ho.prototype.maxPool3dBackprop = function(t, e, n, r) { return po("maxPool3dBackprop") }, ho.prototype.reshape = function(t, e) { return po("reshape") }, ho.prototype.cast = function(t, e) { return po("cast") }, ho.prototype.tile = function(t, e) { return po("tile") }, ho.prototype.pad = function(t, e, n) { return po("pad") }, ho.prototype.transpose = function(t, e) { return po("transpose") }, ho.prototype.gather = function(t, e, n) { return po("gather") }, ho.prototype.gatherND = function(t, e) { return po("gatherND") }, ho.prototype.scatterND = function(t, e, n) { return po("scatterND") }, ho.prototype.batchToSpaceND = function(t, e, n) { return po("batchToSpaceND") }, ho.prototype.spaceToBatchND = function(t, e, n) { return po("spaceToBatchND") }, ho.prototype.resizeBilinear = function(t, e, n, r) { return po("resizeBilinear") }, ho.prototype.resizeBilinearBackprop = function(t, e, n) { return po("resizeBilinearBackprop") }, ho.prototype.resizeNearestNeighbor = function(t, e, n, r) { return po("resizeNearestNeighbor") }, ho.prototype.resizeNearestNeighborBackprop = function(t, e, n) { return po("resizeNearestNeighborBackprop") }, ho.prototype.batchNormalization = function(t, e, n, r, o, i) { return po("batchNormalization") }, ho.prototype.localResponseNormalization4D = function(t, e, n, r, o) { return po("localResponseNormalization4D") }, ho.prototype.LRNGrad = function(t, e, n, r, o, i, a) { return po("LRNGrad") }, ho.prototype.multinomial = function(t, e, n, r) { return po("multinomial") }, ho.prototype.oneHot = function(t, e, n, r) { return po("oneHot") }, ho.prototype.cumsum = function(t, e, n, r) { return po("cumsum") }, ho.prototype.nonMaxSuppression = function(t, e, n, r, o) { return po("nonMaxSuppression") }, ho.prototype.fft = function(t) { return po("fft") }, ho.prototype.ifft = function(t) { return po("ifft") }, ho.prototype.complex = function(t, e) { return po("complex") }, ho.prototype.real = function(t) { return po("real") }, ho.prototype.imag = function(t) { return po("imag") }, ho.prototype.cropAndResize = function(t, e, n, r, o, i) { return po("cropAndResize") }, ho.prototype.depthToSpace = function(t, e, n) { return po("depthToSpace") }, ho.prototype.split = function(t, e, n) { return po("split") }, ho.prototype.sparseToDense = function(t, e, n, r) { return po("sparseToDense") }, ho.prototype.diag = function(t) { return po("diag") }, ho.prototype.fill = function(t, e, n) { return po("fill") }, ho.prototype.onesLike = function(t) { return po("onesLike") }, ho.prototype.zerosLike = function(t) { return po("zerosLike") }, ho.prototype.linspace = function(t, e, n) { return po("linspace") }, ho.prototype.dispose = function() { return po("dispose") }, ho);

        function ho() {}

        function fo(t, e) { this.backend = t, this.dataMover = e, this.data = new WeakMap, this.dataIdsCount = 0 }

        function po(t) { throw new Error("'" + t + "' not yet implemented or not found in the registry. Did you forget to import the kernel?") }

        function vo(t, e) {
            for (var n = t.length, r = [], o = 0; o < n; o++) {
                var i = n - 1 - o,
                    a = t[i] || 1;
                1 < (e[e.length - 1 - o] || 1) && 1 === a && r.unshift(i)
            }
            return r
        }

        function mo(t, e) {
            for (var n = [], r = 0; r < e.length; r++) {
                var o = t[t.length - r - 1],
                    i = e.length - r - 1,
                    a = e[i];
                (null == o || 1 === o && 1 < a) && n.unshift(i)
            }
            return n
        }

        function go(t, e) {
            for (var n = [], r = Math.max(t.length, e.length), o = 0; o < r; o++) {
                var i = t[t.length - o - 1];
                null == i && (i = 1);
                var a = e[e.length - o - 1];
                if (null == a && (a = 1), 1 === i) n.unshift(a);
                else if (1 === a) n.unshift(i);
                else {
                    if (i !== a) throw Error("Operands could not be broadcast together with shapes " + t + " and " + e + ".");
                    n.unshift(i)
                }
            }
            return n
        }

        function yo(t, e, n, r, o, i, a) {
            void 0 === a && (a = "channelsLast");
            var s, u = Eo(e),
                c = u[0],
                l = u[1];
            if ("channelsLast" === a) s = [c, l, t[3], t[3]];
            else {
                if ("channelsFirst" !== a) throw new Error("Unknown dataFormat " + a);
                s = [c, l, t[1], t[1]]
            }
            return bo(t, s, n, r, o, i, !1, a)
        }

        function xo(t, e, n, r, o, i, a) {
            void 0 === a && (a = "NDHWC");
            var s, u, c = _o(e),
                l = c[0],
                h = c[1],
                f = c[2];
            if ("NDHWC" === a) u = "channelsLast", s = [l, h, f, t[4], t[4]];
            else {
                if ("NCDHW" !== a) throw new Error("Unknown dataFormat " + a);
                u = "channelsFirst", s = [l, h, f, t[1], t[1]]
            }
            return wo(t, s, n, r, o, !1, u, i)
        }

        function bo(t, e, n, r, o, m, i, a) {
            void 0 === i && (i = !1), void 0 === a && (a = "channelsLast");
            var s = [-1, -1, -1, -1],
                u = s[0],
                c = s[1],
                l = s[2],
                h = s[3];
            if ("channelsLast" === a) u = t[0], c = t[1], l = t[2], h = t[3];
            else {
                if ("channelsFirst" !== a) throw new Error("Unknown dataFormat " + a);
                u = t[0], h = t[1], c = t[2], l = t[3]
            }
            var f, p = e[0],
                d = e[1],
                v = e[3],
                g = Eo(n),
                y = g[0],
                x = g[1],
                b = Eo(r),
                w = b[0],
                C = b[1],
                E = Io(p, w),
                _ = Io(d, C),
                I = function(t, e, n, r, o, i, a) {
                    var s, u, c;
                    if ("number" == typeof t) {
                        s = { top: t, bottom: t, left: t, right: t, type: 0 === t ? "VALID" : "NUMBER" };
                        var l = function(t, e, n, r, o) {
                            null == r && (r = Co(t, e, n));
                            var i = t[1],
                                a = Ro((t[0] - e + 2 * r) / n + 1, o);
                            P(B(a), function() { return "The output # of rows (" + a + ") must be an integer. Change the stride and/or zero pad parameters" });
                            var s = Ro((i - e + 2 * r) / n + 1, o);
                            return P(B(s), function() { return "The output # of columns (" + s + ") must be an integer. Change the stride and/or zero pad parameters" }), [a, s]
                        }([e, n], i, r, t, m);
                        u = l[0], c = l[1]
                    } else if ("same" === t) {
                        u = Math.ceil(e / r), c = Math.ceil(n / o);
                        var h = Math.max(0, (u - 1) * r + i - e),
                            f = Math.max(0, (c - 1) * o + a - n),
                            p = Math.floor(h / 2),
                            d = h - p,
                            v = Math.floor(f / 2);
                        s = { top: p, bottom: d, left: v, right: f - v, type: "SAME" }
                    } else {
                        if ("valid" !== t) throw Error("Unknown padding parameter: " + t);
                        s = { top: 0, bottom: 0, left: 0, right: 0, type: "VALID" }, u = Math.ceil((e - i + 1) / r), c = Math.ceil((n - a + 1) / o)
                    }
                    return { padInfo: s, outHeight: u, outWidth: c }
                }(o, c, l, y, x, E, _),
                R = I.padInfo,
                k = I.outHeight,
                S = I.outWidth,
                D = i ? v * h : v;
            return "channelsFirst" === a ? f = [u, D, k, S] : "channelsLast" === a && (f = [u, k, S, D]), { batchSize: u, dataFormat: a, inHeight: c, inWidth: l, inChannels: h, outHeight: k, outWidth: S, outChannels: D, padInfo: R, strideHeight: y, strideWidth: x, filterHeight: p, filterWidth: d, effectiveFilterHeight: E, effectiveFilterWidth: _, dilationHeight: w, dilationWidth: C, inShape: t, outShape: f, filterShape: e }
        }

        function wo(t, e, n, r, o, i, a, E) {
            void 0 === i && (i = !1), void 0 === a && (a = "channelsLast");
            var s = [-1, -1, -1, -1, -1],
                u = s[0],
                c = s[1],
                l = s[2],
                h = s[3],
                f = s[4];
            if ("channelsLast" === a) u = t[0], c = t[1], l = t[2], h = t[3], f = t[4];
            else {
                if ("channelsFirst" !== a) throw new Error("Unknown dataFormat " + a);
                u = t[0], f = t[1], c = t[2], l = t[3], h = t[4]
            }
            var p, d = e[0],
                v = e[1],
                m = e[2],
                g = e[4],
                y = _o(n),
                x = y[0],
                b = y[1],
                w = y[2],
                C = _o(r),
                _ = C[0],
                I = C[1],
                R = C[2],
                k = Io(d, _),
                S = Io(v, I),
                D = Io(m, R),
                A = function(t, e, n, r, o, i, a, s, u, c) {
                    var l, h, f, p;
                    if ("number" == typeof t) {
                        l = { top: t, bottom: t, left: t, right: t, front: t, back: t, type: 0 === t ? "VALID" : "NUMBER" };
                        var d = function(t, e, n, r, o, i) {
                            null == o && (o = Co(t, e, r));
                            var a = t[1],
                                s = t[2],
                                u = Ro((t[0] - e + 2 * o) / r + 1, i);
                            P(B(u), function() { return "The output # of depths (" + u + ") must be an integer. Change the stride and/or zero pad parameters" });
                            var c = Ro((a - e + 2 * o) / r + 1, i);
                            P(B(c), function() { return "The output # of rows (" + c + ") must be an integer. Change the stride and/or zero pad parameters" });
                            var l = Ro((s - e + 2 * o) / r + 1, i);
                            return P(B(l), function() { return "The output # of columns (" + l + ") must be an integer. Change the stride and/or zero pad parameters" }), [u, c, l, 1]
                        }([e, n, r, 1], s, 0, o, t, E);
                        h = d[0], f = d[1], p = d[2]
                    } else if ("same" === t) {
                        var v = ((h = Math.ceil(e / o)) - 1) * o + s - e,
                            m = ((f = Math.ceil(n / i)) - 1) * i + u - n,
                            g = ((p = Math.ceil(r / a)) - 1) * a + c - r,
                            y = Math.floor(v / 2),
                            x = v - y,
                            b = Math.floor(m / 2),
                            w = m - b,
                            C = Math.floor(g / 2);
                        l = { top: b, bottom: w, left: C, right: g - C, front: y, back: x, type: "SAME" }
                    } else {
                        if ("valid" !== t) throw Error("Unknown padding parameter: " + t);
                        l = { top: 0, bottom: 0, left: 0, right: 0, front: 0, back: 0, type: "VALID" }, h = Math.ceil((e - s + 1) / o), f = Math.ceil((n - u + 1) / i), p = Math.ceil((r - c + 1) / a)
                    }
                    return { padInfo: l, outDepth: h, outHeight: f, outWidth: p }
                }(o, c, l, h, x, b, w, k, S, D),
                T = A.padInfo,
                N = A.outDepth,
                F = A.outHeight,
                M = A.outWidth,
                O = i ? g * f : g;
            return "channelsFirst" === a ? p = [u, O, N, F, M] : "channelsLast" === a && (p = [u, N, F, M, O]), { batchSize: u, dataFormat: a, inDepth: c, inHeight: l, inWidth: h, inChannels: f, outDepth: N, outHeight: F, outWidth: M, outChannels: O, padInfo: T, strideDepth: x, strideHeight: b, strideWidth: w, filterDepth: d, filterHeight: v, filterWidth: m, effectiveFilterDepth: k, effectiveFilterHeight: S, effectiveFilterWidth: D, dilationDepth: _, dilationHeight: I, dilationWidth: R, inShape: t, outShape: p, filterShape: e }
        }

        function Co(t, e, n, r) { void 0 === r && (r = 1); var o = Io(e, r); return Math.floor((t[0] * (n - 1) - n + o) / 2) }

        function Eo(t) { return "number" == typeof t ? [t, t, t] : 2 === t.length ? [t[0], t[1], 1] : t }

        function _o(t) { return "number" == typeof t ? [t, t, t] : t }

        function Io(t, e) { return e <= 1 ? t : t + (t - 1) * (e - 1) }

        function Ro(t, e) {
            if (!e) return t;
            switch (e) {
                case "round":
                    return Math.round(t);
                case "ceil":
                    return Math.ceil(t);
                case "floor":
                    return Math.floor(t);
                default:
                    throw new Error("Unknown roundingMode " + e)
            }
        }

        function ko(t) {
            var e = Eo(t),
                n = e[0],
                r = e[1],
                o = e[2];
            return 1 === n && 1 === r && 1 === o
        }

        function So(t, e) { return ko(t) || ko(e) }

        function Do(t) { if ("NHWC" === t) return "channelsLast"; if ("NCHW" === t) return "channelsFirst"; throw new Error("Unknown dataFormat " + t) }

        function Ao(t, e, n) {
            if ("complex64" === e) {
                if ("complex64" === t.dtype) return t.clone();
                var r = Pn(t.shape),
                    o = t.toFloat(),
                    i = n.complex(o, r);
                return r.dispose(), o.dispose(), i
            }
            if (!W(t.dtype, e)) return Kt.makeTensorFromDataId(t.dataId, t.shape, e);
            if ("complex64" === t.dtype) { var a = n.real(t); return i = a.cast(e), a.dispose(), i }
            if ("int32" === e) return n.int(t);
            if ("bool" !== e) throw new Error("Error in Cast: failed to cast " + t.dtype + " to " + e);
            var s = kn(0, t.dtype);
            return i = n.notEqual(t, s), s.dispose(), i
        }

        function To(t, e) { return Kt.makeTensorFromDataId(t.dataId, e, t.dtype) }

        function No(t, e, n) {
            var r = (e - t) / (n - 1),
                o = Z(n, "float32");
            o[0] = t;
            for (var i = 1; i < o.length; i++) o[i] = o[i - 1] + r;
            return Sn(o, "float32")
        }
        var Fo = Object.freeze({ castTensor: Ao, reshapeTensor: To, linspaceImpl: No, upcastType: Pt, axesAreInnerMostDims: hn, combineLocations: fn, computeOutAndReduceShapes: pn, expandShapeToKeepDim: dn, assertAxesAreInnerMostDims: vn, getAxesPermutation: mn, getUndoAxesPermutation: gn, getInnerMostAxes: yn, getBroadcastDims: vo, getReductionAxes: mo, assertAndGetBroadcastShape: go, assertParamsConsistent: xn, computeOutShape: bn, computePool2DInfo: yo, computePool3DInfo: xo, computeConv2DInfo: bo, computeConv3DInfo: wo, computeDefaultPad: Co, tupleValuesAreOne: ko, eitherStridesOrDilationsAreOne: So, convertConv2DDataFormat: Do, PARALLELIZE_THRESHOLD: 30, computeOptimalWindowSize: qr });

        function Mo(t, e) { if (t.length !== e.length) throw new Error("Cannot merge real and imag arrays of different lengths. real:" + t.length + ", imag: " + e.length + "."); for (var n = new Float32Array(2 * t.length), r = 0; r < n.length; r += 2) n[r] = t[r / 2], n[r + 1] = e[r / 2]; return n }

        function Oo(t, e) { return { real: t[2 * e