function VexUtils() {}
var Markdown;
if (Markdown = "object" == typeof exports && "function" == typeof require ? exports: {},
        function() {
            function e(e) {
                return e
            }
            function t() {
                return ! 1
            }
            function r() {}
            function n() {}
            r.prototype = {
                chain: function(t, r) {
                    var n = this[t];
                    if (!n) throw new Error("unknown hook " + t);
                    this[t] = n === e ? r: function(e) {
                            return r(n(e))
                        }
                },
                set: function(e, t) {
                    if (!this[e]) throw new Error("unknown hook " + e);
                    this[e] = t
                },
                addNoop: function(t) {
                    this[t] = e
                },
                addFalse: function(e) {
                    this[e] = t
                }
            },
                Markdown.HookCollection = r,
                n.prototype = {
                    set: function(e, t) {
                        this["s_" + e] = t
                    },
                    get: function(e) {
                        return this["s_" + e]
                    }
                },
                Markdown.Converter = function() {
                    function e(e) {
                        return e = e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,
                            function(e, t, r, n, o, i) {
                                return t = t.toLowerCase(),
                                    N.set(t, _(r)),
                                    o ? n: (i && U.set(t, i.replace(/"/g, "&quot;")), "")
                            })
                    }
                    function t(e) {
                        return e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, o),
                            e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm, o),
                            e = e.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, o),
                            e = e.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g, o),
                            e = e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, o)
                    }
                    function o(e, t) {
                        var r = t;
                        return r = r.replace(/^\n+/, ""),
                            r = r.replace(/\n+$/g, ""),
                            r = "\n\n~K" + ($.push(r) - 1) + "K\n\n"
                    }
                    function i(e, r) {
                        e = h(e);
                        var n = "<hr />\n";
                        return e = e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, n),
                            e = e.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm, n),
                            e = e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, n),
                            e = f(e),
                            e = m(e),
                            e = w(e),
                            e = t(e),
                            e = S(e, r)
                    }
                    function a(e) {
                        return e = A(e),
                            e = s(e),
                            e = b(e),
                            e = u(e),
                            e = l(e),
                            e = M(e),
                            e = e.replace(/~P/g, "://"),
                            e = _(e),
                            e = y(e),
                            e = e.replace(/  +\n/g, " <br>\n")
                    }
                    function s(e) {
                        var t = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;
                        return e = e.replace(t,
                            function(e) {
                                var t = e.replace(/(.)<\/?code>(?=.)/g, "$1`");
                                return t = C(t, "!" == e.charAt(1) ? "\\`*_/": "\\`*_")
                            })
                    }
                    function l(e) {
                        return e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, c),
                            e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, c),
                            e = e.replace(/(\[([^\[\]]+)\])()()()()()/g, c)
                    }
                    function c(e, t, r, n, o, i, a, s) {
                        void 0 == s && (s = "");
                        var l = t,
                            c = r.replace(/:\/\//g, "~P"),
                            u = n.toLowerCase(),
                            d = o,
                            h = s;
                        if ("" == d) if ("" == u && (u = c.toLowerCase().replace(/ ?\n/g, " ")), d = "#" + u, void 0 != N.get(u)) d = N.get(u),
                        void 0 != U.get(u) && (h = U.get(u));
                        else {
                            if (! (l.search(/\(\s*\)$/m) > -1)) return l;
                            d = ""
                        }
                        d = k(d),
                            d = C(d, "*_");
                        var f = '<a href="' + d + '"';
                        return "" != h && (h = p(h), h = C(h, "*_"), f += ' title="' + h + '"'),
                            f += ">" + c + "</a>"
                    }
                    function u(e) {
                        return e = e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, d),
                            e = e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, d)
                    }
                    function p(e) {
                        return e.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
                    }
                    function d(e, t, r, n, o, i, a, s) {
                        var l = t,
                            c = r,
                            u = n.toLowerCase(),
                            d = o,
                            h = s;
                        if (h || (h = ""), "" == d) {
                            if ("" == u && (u = c.toLowerCase().replace(/ ?\n/g, " ")), d = "#" + u, void 0 == N.get(u)) return l;
                            d = N.get(u),
                            void 0 != U.get(u) && (h = U.get(u))
                        }
                        c = C(p(c), "*_[]()"),
                            d = C(d, "*_");
                        var f = '<img src="' + d + '" alt="' + c + '"';
                        return h = p(h),
                            h = C(h, "*_"),
                            f += ' title="' + h + '"',
                            f += " />"
                    }
                    function h(e) {
                        return e = e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,
                            function(e, t) {
                                return "<h1>" + a(t) + "</h1>\n\n"
                            }),
                            e = e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,
                                function(e, t) {
                                    return "<h2>" + a(t) + "</h2>\n\n"
                                }),
                            e = e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,
                                function(e, t, r) {
                                    var n = t.length;
                                    return "<h" + n + ">" + a(r) + "</h" + n + ">\n\n"
                                })
                    }
                    function f(e) {
                        e += "~0";
                        var t = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
                        return O ? e = e.replace(t,
                                function(e, t, r) {
                                    var n = t,
                                        o = r.search(/[*+-]/g) > -1 ? "ul": "ol",
                                        i = g(n, o);
                                    return i = i.replace(/\s+$/, ""),
                                        i = "<" + o + ">" + i + "</" + o + ">\n"
                                }) : (t = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g, e = e.replace(t,
                                function(e, t, r, n) {
                                    var o = t,
                                        i = r,
                                        a = n.search(/[*+-]/g) > -1 ? "ul": "ol",
                                        s = g(i, a);
                                    return s = o + "<" + a + ">\n" + s + "</" + a + ">\n"
                                })),
                            e = e.replace(/~0/, "")
                    }
                    function g(e, t) {
                        O++,
                            e = e.replace(/\n{2,}$/, "\n"),
                            e += "~0";
                        var r = E[t],
                            n = new RegExp("(^[ \\t]*)(" + r + ")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1(" + r + ")[ \\t]+))", "gm"),
                            o = !1;
                        return e = e.replace(n,
                            function(e, t, r, n) {
                                var s = n,
                                    l = /\n\n$/.test(s),
                                    c = l || s.search(/\n{2,}/) > -1;
                                return c || o ? s = i(D(s), !0) : (s = f(D(s)), s = s.replace(/\n$/, ""), s = a(s)),
                                    o = l,
                                "<li>" + s + "</li>\n"
                            }),
                            e = e.replace(/~0/g, ""),
                            O--,
                            e
                    }
                    function m(e) {
                        return e += "~0",
                            e = e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,
                                function(e, t, r) {
                                    function n(e) {
                                        for (var t = "",
                                                 r = 1; r < e.length; ++r) t += e[r] + "\n";
                                        return t
                                    }
                                    var o = t,
                                        i = r;
                                    o = I(D(o)),
                                        o = q(o),
                                        o = o.replace(/^\n+/g, ""),
                                        o = o.replace(/\n+$/g, "");
                                    var a = o.split(/\n/),
                                        s = n(a);
                                    if (a[0].match(/^vextab/)) o = "<div class='vex-tabdiv visible-on-load' width=750 scale=0.9 show-errors='true' editor='false' style='display:none;'>" + s + "\n</div>";
                                    else if (a[0].match(/^chord/)) o = "<div class='vex-chords'>" + s + "\n</div>";
                                    else if (a[0].match(/^fretboard/)) o = "<div class='vex-fretboard visible-on-load'>" + s + "\n</div>";
                                    else if (a[0].match(/^video/)) {
                                        var l = a[1];
                                        l && (l.replace(/\s+/g, ""), o = "<div class='vex-video'>" + l + "\n</div>")
                                    } else o = "<pre><code>" + o + "\n</code></pre>";
                                    return "\n\n" + o + "\n\n" + i
                                }),
                            e = e.replace(/~0/, "")
                    }
                    function v(e) {
                        return e = e.replace(/(^\n+|\n+$)/g, ""),
                        "\n\n~K" + ($.push(e) - 1) + "K\n\n"
                    }
                    function A(e) {
                        return e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
                            function(e, t, r, n) {
                                var o = n;
                                return o = o.replace(/^([ \t]*)/g, ""),
                                    o = o.replace(/[ \t]*$/g, ""),
                                    o = I(o),
                                    o = o.replace(/:\/\//g, "~P"),
                                t + "<code>" + o + "</code>"
                            })
                    }
                    function I(e) {
                        return e = e.replace(/&/g, "&amp;"),
                            e = e.replace(/</g, "&lt;"),
                            e = e.replace(/>/g, "&gt;"),
                            e = C(e, "*_{}[]\\", !1)
                    }
                    function y(e) {
                        return e = e.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g, "$1<strong>$3</strong>$4"),
                            e = e.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g, "$1<em>$3</em>$4")
                    }
                    function w(e) {
                        return e = e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,
                            function(e, t) {
                                var r = t;
                                return r = r.replace(/^[ \t]*>[ \t]?/gm, "~0"),
                                    r = r.replace(/~0/g, ""),
                                    r = r.replace(/^[ \t]+$/gm, ""),
                                    r = i(r),
                                    r = r.replace(/(^|\n)/g, "$1  "),
                                    r = r.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,
                                        function(e, t) {
                                            var r = t;
                                            return r = r.replace(/^  /gm, "~0"),
                                                r = r.replace(/~0/g, "")
                                        }),
                                    v("<blockquote>\n" + r + "\n</blockquote>")
                            })
                    }
                    function S(e, t) {
                        e = e.replace(/^\n+/g, ""),
                            e = e.replace(/\n+$/g, "");
                        for (var r = e.split(/\n{2,}/g), n = [], o = /~K(\d+)K/, i = r.length, s = 0; i > s; s++) {
                            var l = r[s];
                            o.test(l) ? n.push(l) : /\S/.test(l) && (l = a(l), l = l.replace(/^([ \t]*)/g, "<p>"), l += "</p>", n.push(l))
                        }
                        if (!t) {
                            i = n.length;
                            for (var s = 0; i > s; s++) for (var c = !0; c;) c = !1,
                                n[s] = n[s].replace(/~K(\d+)K/g,
                                    function(e, t) {
                                        return c = !0,
                                            $[t]
                                    })
                        }
                        return n.join("\n\n")
                    }
                    function _(e) {
                        return e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"),
                            e = e.replace(/<(?![a-z\/?\$!])/gi, "&lt;")
                    }
                    function b(e) {
                        return e = e.replace(/\\(\\)/g, F),
                            e = e.replace(/\\([`*_{}\[\]()>#+-.!])/g, F)
                    }
                    function M(e) {
                        e = e.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi, "$1<$2$3>$4");
                        var t = function(e, t) {
                            return '<a href="' + t + '">' + T.plainLinkText(t) + "</a>"
                        };
                        return e = e.replace(/<((https?|ftp):[^'">\s]+)>/gi, t)
                    }
                    function x(e) {
                        return e = e.replace(/~E(\d+)E/g,
                            function(e, t) {
                                var r = parseInt(t);
                                return String.fromCharCode(r)
                            })
                    }
                    function D(e) {
                        return e = e.replace(/^(\t|[ ]{1,4})/gm, "~0"),
                            e = e.replace(/~0/g, "")
                    }
                    function q(e) {
                        if (!/\t/.test(e)) return e;
                        var t, r = ["    ", "   ", "  ", " "],
                            n = 0;
                        return e.replace(/[\n\t]/g,
                            function(e, o) {
                                return "\n" === e ? (n = o + 1, e) : (t = (o - n) % 4, n = o + 1, r[t])
                            })
                    }
                    function k(e) {
                        if (!e) return "";
                        var t = e.length;
                        return e.replace(P,
                            function(r, n) {
                                return "~D" == r ? "%24": ":" != r || n != t - 1 && !/[0-9\/]/.test(e.charAt(n + 1)) ? "%" + r.charCodeAt(0).toString(16) : ":"
                            })
                    }
                    function C(e, t, r) {
                        var n = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
                        r && (n = "\\\\" + n);
                        var o = new RegExp(n, "g");
                        return e = e.replace(o, F)
                    }
                    function F(e, t) {
                        var r = t.charCodeAt(0);
                        return "~E" + r + "E"
                    }
                    var T = this.hooks = new r;
                    T.addNoop("plainLinkText"),
                        T.addNoop("preConversion"),
                        T.addNoop("postConversion");
                    var N, U, $, O;
                    this.makeHtml = function(r) {
                        if (N) throw new Error("Recursive call to converter.makeHtml");
                        return N = new n,
                            U = new n,
                            $ = [],
                            O = 0,
                            r = T.preConversion(r),
                            r = r.replace(/~/g, "~T"),
                            r = r.replace(/\$/g, "~D"),
                            r = r.replace(/\r\n/g, "\n"),
                            r = r.replace(/\r/g, "\n"),
                            r = "\n\n" + r + "\n\n",
                            r = q(r),
                            r = r.replace(/^[ \t]+$/gm, ""),
                            r = t(r),
                            r = e(r),
                            r = i(r),
                            r = x(r),
                            r = r.replace(/~D/g, "$$"),
                            r = r.replace(/~T/g, "~"),
                            r = T.postConversion(r),
                            $ = U = N = null,
                            r
                    };
                    var E = {
                            ol: "\\d+[.]",
                            ul: "[*+-]"
                        },
                        P = /(?:["'*()[\]:]|~D)/g
                }
        } (),
        function() {
            function e(e) {
                return e.replace(/<[^>]*>?/gi, t)
            }
            function t(e) {
                return e.match(i) || e.match(a) || e.match(s) ? e: e.match(/^<div class='vex-/) || e.match(/^<\/div>/) ? e: ""
            }
            function r(e) {
                if ("" == e) return "";
                var t = /<\/?\w+[^>]*(\s|$|>)/g,
                    r = e.toLowerCase().match(t),
                    n = (r || []).length;
                if (0 == n) return e;
                for (var o, i, a, s = "<p><img><br><li><hr>",
                         l = [], c = [], u = !1, p = 0; n > p; p++) if (o = r[p].replace(/<\/?(\w+).*/, "$1"), "div" != o && !(l[p] || s.search("<" + o + ">") > -1)) {
                    if (i = r[p], a = -1, !/^<\//.test(i)) for (var d = p + 1; n > d; d++) if (!l[d] && r[d] == "</" + o + ">") {
                        a = d;
                        break
                    } - 1 == a ? u = c[p] = !0 : l[a] = !0
                }
                if (!u) return e;
                var p = 0;
                return e = e.replace(t,
                    function(e) {
                        var t = c[p] ? "": e;
                        return p++,
                            t
                    })
            }
            var n, o;
            "object" == typeof exports && "function" == typeof require ? (n = exports, o = require("./Markdown.Converter").Converter) : (n = window.Markdown, o = n.Converter),
                n.getSanitizingConverter = function() {
                    var t = new o;
                    return t.hooks.chain("postConversion", e),
                        t.hooks.chain("postConversion", r),
                        t
                };
            var i = /^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol|p|pre|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i,
                a = /^(<a\shref="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i,
                s = /^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i
        } (), "undefined" == typeof MIDI) var MIDI = {};
if (function() {
        var e = {},
            t = function(t) {
                var r = new Audio,
                    n = t.split(";")[0];
                r.id = "audio",
                    r.setAttribute("preload", "auto"),
                    r.setAttribute("audiobuffer", !0),
                    r.addEventListener("canplaythrough",
                        function() {
                            e[n] = !0
                        },
                        !1),
                    r.src = "data:" + t,
                    document.body.appendChild(r)
            };
        MIDI.audioDetect = function(r) {
            if ("undefined" == typeof Audio) return r({});
            var n = new Audio;
            if ("undefined" == typeof n.canPlayType) return r(e);
            var o = n.canPlayType('audio/ogg; codecs="vorbis"'),
                o = "probably" === o || "maybe" === o,
                n = n.canPlayType("audio/mpeg"),
                n = "probably" === n || "maybe" === n;
            if (o || n) {
                o && t("audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA="),
                n && t("audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
                var i = (new Date).getTime(),
                    a = window.setInterval(function() {
                            for (var t in e);
                            var n = 5e3 < (new Date).getTime() - i; (t || n) && (window.clearInterval(a), r(e))
                        },
                        1)
            } else r(e)
        }
    } (), "undefined" == typeof MIDI && (MIDI = {}), "undefined" == typeof MIDI.Soundfont && (MIDI.Soundfont = {}),
        function() {
            MIDI.loadPlugin = function(r) {
                "function" == typeof r && (r = {
                    callback: r
                });
                var n = r.instruments || r.instrument || "acoustic_grand_piano";
                "object" != typeof n && (n = [n]),
                    n.map(function(e) {
                        return "number" == typeof e && (e = MIDI.GeneralMIDI.byId[e]),
                            e
                    }),
                    MIDI.soundfontUrl = r.soundfontUrl || MIDI.soundfontUrl || "./soundfont/",
                    MIDI.audioDetect(function(o) {
                        var i = "";
                        "undefined" == typeof i && (i = t[window.location.hash] ? window.location.hash.substr(1) : ""),
                        "" === i && (i = navigator.requestMIDIAccess ? "webmidi": window.webkitAudioContext ? "webaudio": window.Audio ? "audiotag": "flash"),
                        e[i] && e[i](o["audio/ogg"] ? "ogg": "mp3", n, r.callback)
                    })
            };
            var e = {
                    webmidi: function(e, t, r) {
                        MIDI.loader && MIDI.loader.message("Web MIDI API..."),
                            MIDI.WebMIDI.connect(r)
                    },
                    flash: function(e, t, r) {
                        MIDI.loader && MIDI.loader.message("Flash API..."),
                            DOMLoader.script.add({
                                src: "./inc/SoundManager2/script/soundmanager2.js",
                                verify: "SoundManager",
                                callback: function() {
                                    MIDI.Flash.connect(r)
                                }
                            })
                    },
                    audiotag: function(e, t, n) {
                        MIDI.loader && MIDI.loader.message("HTML5 Audio API...");
                        var o = r({
                            items: t,
                            getNext: function(t) {
                                DOMLoader.script.add({
                                    src: MIDI.soundfontUrl + t + "-" + e + ".js",
                                    verify: "MIDI.Soundfont." + t,
                                    callback: function() {
                                        MIDI.loader && MIDI.loader.update(null, "Downloading...", 100),
                                            o.getNext()
                                    }
                                })
                            },
                            onComplete: function() {
                                MIDI.AudioTag.connect(n)
                            }
                        })
                    },
                    webaudio: function(e, t, n) {
                        MIDI.loader && MIDI.loader.message("Web Audio API...");
                        var o = r({
                            items: t,
                            getNext: function(t) {
                                DOMLoader.script.add({
                                    src: MIDI.soundfontUrl + t + "-" + e + ".js",
                                    verify: "MIDI.Soundfont." + t,
                                    callback: function() {
                                        MIDI.loader && MIDI.loader.update(null, "Downloading...", 100),
                                            o.getNext()
                                    }
                                })
                            },
                            onComplete: function() {
                                MIDI.WebAudioAPI.connect(n)
                            }
                        })
                    }
                },
                t = {
                    "#webmidi": !0,
                    "#webaudio": !0,
                    "#audiotag": !0,
                    "#flash": !0
                },
                r = function(e) {
                    var t, r = {
                        queue: []
                    };
                    for (t in e.items) r.queue.push(e.items[t]);
                    return r.getNext = function() {
                        return r.queue.length ? void e.getNext(r.queue.shift()) : e.onComplete()
                    },
                        setTimeout(r.getNext, 1),
                        r
                }
        } (), "undefined" == typeof MIDI && (MIDI = {}), "undefined" == typeof MIDI.Player && (MIDI.Player = {}),
        function() {
            var e = MIDI.Player;
            e.callback = void 0,
                e.currentTime = 0,
                e.endTime = 0,
                e.restart = 0,
                e.playing = !1,
                e.timeWarp = 1,
                e.start = e.resume = function() { - 1 > e.currentTime && (e.currentTime = -1),
                    c(e.currentTime)
                },
                e.pause = function() {
                    var t = e.restart;
                    u(),
                        e.restart = t
                },
                e.stop = function() {
                    u(),
                        e.restart = 0,
                        e.currentTime = 0
                },
                e.addListener = function(e) {
                    i = e
                },
                e.removeListener = function() {
                    i = void 0
                },
                e.clearAnimation = function() {
                    e.interval && window.clearInterval(e.interval)
                },
                e.setAnimation = function(t) {
                    var r = "function" == typeof t ? t: t.callback,
                        t = t.interval || 30,
                        n = 0,
                        i = 0,
                        a = 0;
                    e.clearAnimation(),
                        e.interval = window.setInterval(function() {
                                if (0 !== e.endTime) {
                                    e.playing ? (n = a === e.currentTime ? i - (new Date).getTime() : 0, n = 0 === e.currentTime ? 0 : e.currentTime - n, a !== e.currentTime && (i = (new Date).getTime(), a = e.currentTime)) : n = e.currentTime;
                                    var t = n / 1e3,
                                        s = t / 60,
                                        t = 60 * s + (t - 60 * s),
                                        s = e.endTime / 1e3; - 1 > s - t || r({
                                        now: t,
                                        end: s,
                                        events: o
                                    })
                                }
                            },
                            t)
                },
                e.loadMidiFile = function() {
                    e.replayer = new Replayer(MidiFile(e.currentData), e.timeWarp),
                        e.data = e.replayer.getData(),
                        e.endTime = l()
                },
                e.loadFile = function(t, r) {
                    if (e.stop(), -1 !== t.indexOf("base64,")) {
                        var n = window.atob(t.split(",")[1]);
                        e.currentData = n,
                            e.loadMidiFile(),
                        r && r(n)
                    } else n = t.split(" - ")[1] || t,
                        document.getElementById("playback-title").innerHTML = n.replace(".mid", ""),
                        n = new XMLHttpRequest,
                        n.open("GET", t),
                        n.overrideMimeType("text/plain; charset=x-user-defined"),
                        n.onreadystatechange = function() {
                            if (4 === this.readyState && 200 === this.status) {
                                for (var t = this.responseText || "",
                                         n = [], o = t.length, i = String.fromCharCode, a = 0; o > a; a++) n[a] = i(255 & t.charCodeAt(a));
                                t = n.join(""),
                                    e.currentData = t,
                                    e.loadMidiFile(),
                                r && r(t)
                            }
                        },
                        n.send()
                };
            var t, r = [],
                n = 0,
                o = {},
                i = void 0,
                a = function(r, n, a, s, l, u) {
                    return window.setTimeout(function() {
                            var s = {
                                channel: r,
                                note: n,
                                now: a,
                                end: e.endTime,
                                message: l,
                                velocity: u
                            };
                            128 === l ? delete o[n] : o[n] = s,
                            i && i(s),
                                e.currentTime = a,
                            e.currentTime === t && t < e.endTime && c(t, !0)
                        },
                        a - s)
                },
                s = function() {
                    return "WebAudioAPI" === MIDI.lang ? MIDI.Player.ctx: (e.ctx || (e.ctx = {
                            currentTime: 0
                        }), e.ctx)
                },
                l = function() {
                    for (var t = e.data,
                             r = t.length,
                             n = .5,
                             o = 0; r > o; o++) n += t[o][1];
                    return n
                },
                c = function(o, i) {
                    if (e.replayer) {
                        i || ("undefined" == typeof o && (o = e.restart), e.playing && u(), e.playing = !0, e.data = e.replayer.getData(), e.endTime = l());
                        var c, p = 0,
                            d = 0,
                            h = e.data,
                            f = s(),
                            g = h.length;
                        t = .5,
                            n = f.currentTime;
                        for (var m = 0; g > m && 100 > d; m++) if (t += h[m][1], o > t) p = t;
                        else {
                            var o = t - p,
                                v = h[m][0].event;
                            if ("channel" === v.type) {
                                var A = v.channel;
                                switch (v.subtype) {
                                    case "noteOn":
                                        if (MIDI.channels[A].mute) break;
                                        c = v.noteNumber - (e.MIDIOffset || 0),
                                            r.push({
                                                event: v,
                                                source: MIDI.noteOn(A, v.noteNumber, v.velocity, o / 1e3 + f.currentTime),
                                                interval: a(A, c, t, p, 144, v.velocity)
                                            }),
                                            d++;
                                        break;
                                    case "noteOff":
                                        if (MIDI.channels[A].mute) break;
                                        c = v.noteNumber - (e.MIDIOffset || 0),
                                            r.push({
                                                event: v,
                                                source: MIDI.noteOff(A, v.noteNumber, o / 1e3 + f.currentTime),
                                                interval: a(A, c, t, p, 128)
                                            })
                                }
                            }
                        }
                    }
                },
                u = function() {
                    var t = s();
                    for (e.playing = !1, e.restart += 1e3 * (t.currentTime - n); r.length;) t = r.pop(),
                        window.clearInterval(t.interval),
                    t.source && ("number" == typeof t.source ? window.clearTimeout(t.source) : (t = t.source, t.disconnect(0), t.stop(0)));
                    for (var a in o) t = o[a],
                    144 === o[a].message && i && i({
                        channel: t.channel,
                        note: t.note,
                        now: t.now,
                        end: t.end,
                        message: 128,
                        velocity: t.velocity
                    });
                    o = {}
                }
        } (), "undefined" == typeof MIDI && (MIDI = {}),
        function() {
            var e = null,
                t = null,
                r = MIDI.WebMIDI = {};
            if (r.setVolume = function(e, r) {
                    t.send([176 + e, 7, r])
                },
                    r.programChange = function(e, r) {
                        t.send([192 + e, r])
                    },
                    r.noteOn = function(e, r, n, o) {
                        t.send([144 + e, r, n], 1e3 * o)
                    },
                    r.noteOff = function(e, r, n) {
                        t.send([128 + e, r], 1e3 * n)
                    },
                    r.chordOn = function(e, r, n, o) {
                        for (var i = 0; i < r.length; i++) t.send([144 + e, r[i], n], 1e3 * o)
                    },
                    r.chordOff = function(e, r, n) {
                        for (var o = 0; o < r.length; o++) t.send([128, e, r[o], velocity], 1e3 * n)
                    },
                    r.stopAllNotes = function() {
                        for (var e = 0; 16 > e; e++) t.send([176 + e, 123, 0])
                    },
                    r.getInput = function() {
                        return e.getInputs()
                    },
                    r.getOutputs = function() {
                        return e.getOutputs()
                    },
                    r.connect = function(n) {
                        MIDI.technology = "Web MIDI API",
                            MIDI.setVolume = r.setVolume,
                            MIDI.programChange = r.programChange,
                            MIDI.noteOn = r.noteOn,
                            MIDI.noteOff = r.noteOff,
                            MIDI.chordOn = r.chordOn,
                            MIDI.chordOff = r.chordOff,
                            MIDI.stopAllNotes = r.stopAllNotes,
                            MIDI.getInput = r.getInput,
                            MIDI.getOutputs = r.getOutputs,
                            navigator.requestMIDIAccess(function(r) {
                                    e = r,
                                        t = e.getOutput(0),
                                    n && n()
                                },
                                function(e) {
                                    console.log("uh-oh! Something went wrong!  Error code: " + e.code)
                                })
                    },
                "undefined" == typeof MIDI.WebAudioAPI && (MIDI.WebAudioAPI = {}), window.AudioContext || window.webkitAudioContext) {
                var n, o = window.AudioContext || window.webkitAudioContext,
                    i = MIDI.WebAudioAPI,
                    a = {},
                    s = 1,
                    l = {},
                    c = function(e, t, r, o, i) {
                        var a = MIDI.GeneralMIDI.byName[e],
                            s = a.number,
                            c = t[r],
                            u = MIDI.Soundfont[e][c].split(",")[1],
                            u = Base64Binary.decodeArrayBuffer(u);
                        n.decodeAudioData(u,
                            function(n) {
                                for (var u = c; 3 > u.length;) u += "&nbsp;";
                                if ("undefined" != typeof MIDI.loader && MIDI.loader.update(null, a.instrument + "<br>Processing: " + (100 * (r / 87) >> 0) + "%<br>" + u), n.id = c, o[r] = n, o.length === t.length) {
                                    for (; o.length;)(n = o.pop()) && (l[s + "" + MIDI.keyToNote[n.id]] = n);
                                    i(e)
                                }
                            })
                    };
                i.setVolume = function(e) {
                    s = e
                },
                    i.programChange = function(e, t) {
                        MIDI.channels[e].instrument = t
                    },
                    i.noteOn = function(e, t, r, o) {
                        if (MIDI.channels[e]) {
                            var i = MIDI.channels[e].instrument;
                            if (l[i + "" + t]) {
                                o < n.currentTime && (o += n.currentTime);
                                var c = n.createBufferSource();
                                return a[e + "" + t] = c,
                                    c.buffer = l[i + "" + t],
                                    c.connect(n.destination),
                                    e = n.createGain(),
                                    r = 2 * r / 100 * s - 1,
                                    e.connect(n.destination),
                                    e.gain.value = Math.max( - 1, r),
                                    c.connect(e),
                                    c.start(o || 0),
                                    c
                            }
                        }
                    },
                    i.noteOff = function(e, t, r) {
                        return r = r || 0,
                        r < n.currentTime && (r += n.currentTime),
                            e == a[e + "" + t] ? (e.gain.linearRampToValueAtTime(1, r), e.gain.linearRampToValueAtTime(0, r + .2), e.stop(r + .3), e) : void 0
                    },
                    i.chordOn = function(e, t, r, n) {
                        for (var o, a = {},
                                 s = 0,
                                 l = t.length; l > s; s++) a[o = t[s]] = i.noteOn(e, o, r, n);
                        return a
                    },
                    i.chordOff = function(e, t, r) {
                        for (var n, o = {},
                                 a = 0,
                                 s = t.length; s > a; a++) o[n = t[a]] = i.noteOff(e, n, r);
                        return o
                    },
                    i.connect = function(e) {
                        MIDI.technology = "Web Audio API",
                            MIDI.setVolume = i.setVolume,
                            MIDI.programChange = i.programChange,
                            MIDI.noteOn = i.noteOn,
                            MIDI.noteOff = i.noteOff,
                            MIDI.chordOn = i.chordOn,
                            MIDI.chordOff = i.chordOff,
                            MIDI.Player.ctx = n = new o;
                        var t, r = [],
                            a = MIDI.keyToNote;
                        for (t in a) r.push(t);
                        var a = [],
                            s = {};
                        t = function(t) {
                            delete s[t];
                            for (var r in s) break;
                            r || e()
                        };
                        for (var l in MIDI.Soundfont) {
                            s[l] = !0;
                            for (var u = 0; u < r.length; u++) c(l, r, u, a, t)
                        }
                    }
            }
            if (window.Audio) {
                for (var u = MIDI.AudioTag = {},
                         p = {},
                         d = 1,
                         h = -1,
                         f = [], g = {},
                         m = 0; 12 > m; m++) f[m] = new Audio;
                var v = function(e, t) {
                    if (MIDI.channels[e]) {
                        var r = MIDI.GeneralMIDI.byId[MIDI.channels[e].instrument].id;
                        if (t = g[t]) {
                            var n = (h + 1) % f.length; (new Date).getTime();
                            var o = f[n];
                            o.src = MIDI.Soundfont[r][t.id],
                                o.volume = d,
                                o.play(),
                                h = n
                        }
                    }
                };
                u.programChange = function(e, t) {
                    MIDI.channels[e].instrument = t
                },
                    u.setVolume = function(e) {
                        d = e
                    },
                    u.noteOn = function(e, t, r, n) {
                        var o = p[t];
                        if (g[o]) {
                            if (n) return window.setTimeout(function() {
                                    v(e, o)
                                },
                                1e3 * n);
                            v(e, o)
                        }
                    },
                    u.noteOff = function() {},
                    u.chordOn = function(e, t) {
                        for (var r in t) {
                            var n = p[t[r]];
                            g[n] && v(e, n)
                        }
                    },
                    u.chordOff = function() {},
                    u.stopAllNotes = function() {
                        for (var e = 0,
                                 t = f.length; t > e; e++) f[e].pause()
                    },
                    u.connect = function(e) {
                        for (var t in MIDI.keyToNote) p[MIDI.keyToNote[t]] = t,
                            g[t] = {
                                id: t
                            };
                        MIDI.technology = "HTML Audio Tag",
                            MIDI.setVolume = u.setVolume,
                            MIDI.programChange = u.programChange,
                            MIDI.noteOn = u.noteOn,
                            MIDI.noteOff = u.noteOff,
                            MIDI.chordOn = u.chordOn,
                            MIDI.chordOff = u.chordOff,
                        e && e()
                    }
            }
            var A = MIDI.Flash = {},
                I = {},
                y = {};
            A.programChange = function(e, t) {
                MIDI.channels[e].instrument = t
            },
                A.setVolume = function() {},
                A.noteOn = function(e, t, r, n) {
                    if (MIDI.channels[e] && (t = MIDI.GeneralMIDI.byId[MIDI.channels[e].instrument].number + "" + I[t], y[t])) {
                        if (n) return window.setTimeout(function() {
                                y[t].play({
                                    volume: 2 * r
                                })
                            },
                            1e3 * n);
                        y[t].play({
                            volume: 2 * r
                        })
                    }
                },
                A.noteOff = function() {},
                A.chordOn = function(e, t, r) {
                    if (MIDI.channels[e]) {
                        var n, e = MIDI.GeneralMIDI.byId[MIDI.channels[e].instrument].number;
                        for (n in t) {
                            var o = e + "" + I[t[n]];
                            y[o] && y[o].play({
                                volume: 2 * r
                            })
                        }
                    }
                },
                A.chordOff = function() {},
                A.stopAllNotes = function() {},
                A.connect = function(e) {
                    soundManager.flashVersion = 9,
                        soundManager.useHTML5Audio = !0,
                        soundManager.url = "../inc/SoundManager2/swf/",
                        soundManager.useHighPerformance = !0,
                        soundManager.wmode = "transparent",
                        soundManager.flashPollingInterval = 1,
                        soundManager.debugMode = !1,
                        soundManager.onload = function() {
                            for (var t in MIDI.Soundfont) for (var r = [], n = function() {
                                    r.push(this.sID),
                                    "undefined" != typeof MIDI.loader && MIDI.loader.update(null, "Processing: " + this.sID)
                                },
                                                                   o = 0; 88 > o; o++) {
                                var i = I[o + 21];
                                y[MIDI.GeneralMIDI.byName[t].number + "" + i] = soundManager.createSound({
                                    id: i,
                                    url: MIDI.soundfontUrl + t + "-mp3/" + i + ".mp3",
                                    multiShot: !0,
                                    autoLoad: !0,
                                    onload: n
                                })
                            }
                            MIDI.technology = "Flash",
                                MIDI.setVolume = A.setVolume,
                                MIDI.programChange = A.programChange,
                                MIDI.noteOn = A.noteOn,
                                MIDI.noteOff = A.noteOff,
                                MIDI.chordOn = A.chordOn,
                                MIDI.chordOff = A.chordOff;
                            var a = window.setInterval(function() {
                                    88 === r.length && (window.clearInterval(a), e && e())
                                },
                                25)
                        },
                        soundManager.onerror = function() {};
                    for (var t in MIDI.keyToNote) I[MIDI.keyToNote[t]] = t
                };
            var w, m = MIDI,
                S = {
                    Piano: "1 Acoustic Grand Piano;2 Bright Acoustic Piano;3 Electric Grand Piano;4 Honky-tonk Piano;5 Electric Piano 1;6 Electric Piano 2;7 Harpsichord;8 Clavinet".split(";"),
                    "Chromatic Percussion": "9 Celesta;10 Glockenspiel;11 Music Box;12 Vibraphone;13 Marimba;14 Xylophone;15 Tubular Bells;16 Dulcimer".split(";"),
                    Organ: "17 Drawbar Organ;18 Percussive Organ;19 Rock Organ;20 Church Organ;21 Reed Organ;22 Accordion;23 Harmonica;24 Tango Accordion".split(";"),
                    Guitar: "25 Acoustic Guitar (nylon);26 Acoustic Guitar (steel);27 Electric Guitar (jazz);28 Electric Guitar (clean);29 Electric Guitar (muted);30 Overdriven Guitar;31 Distortion Guitar;32 Guitar Harmonics".split(";"),
                    Bass: "33 Acoustic Bass;34 Electric Bass (finger);35 Electric Bass (pick);36 Fretless Bass;37 Slap Bass 1;38 Slap Bass 2;39 Synth Bass 1;40 Synth Bass 2".split(";"),
                    Strings: "41 Violin;42 Viola;43 Cello;44 Contrabass;45 Tremolo Strings;46 Pizzicato Strings;47 Orchestral Harp;48 Timpani".split(";"),
                    Ensemble: "49 String Ensemble 1;50 String Ensemble 2;51 Synth Strings 1;52 Synth Strings 2;53 Choir Aahs;54 Voice Oohs;55 Synth Choir;56 Orchestra Hit".split(";"),
                    Brass: "57 Trumpet;58 Trombone;59 Tuba;60 Muted Trumpet;61 French Horn;62 Brass Section;63 Synth Brass 1;64 Synth Brass 2".split(";"),
                    Reed: "65 Soprano Sax;66 Alto Sax;67 Tenor Sax;68 Baritone Sax;69 Oboe;70 English Horn;71 Bassoon;72 Clarinet".split(";"),
                    Pipe: "73 Piccolo;74 Flute;75 Recorder;76 Pan Flute;77 Blown Bottle;78 Shakuhachi;79 Whistle;80 Ocarina".split(";"),
                    "Synth Lead": "81 Lead 1 (square);82 Lead 2 (sawtooth);83 Lead 3 (calliope);84 Lead 4 (chiff);85 Lead 5 (charang);86 Lead 6 (voice);87 Lead 7 (fifths);88 Lead 8 (bass + lead)".split(";"),
                    "Synth Pad": "89 Pad 1 (new age);90 Pad 2 (warm);91 Pad 3 (polysynth);92 Pad 4 (choir);93 Pad 5 (bowed);94 Pad 6 (metallic);95 Pad 7 (halo);96 Pad 8 (sweep)".split(";"),
                    "Synth Effects": "97 FX 1 (rain);98 FX 2 (soundtrack);99 FX 3 (crystal);100 FX 4 (atmosphere);101 FX 5 (brightness);102 FX 6 (goblins);103 FX 7 (echoes);104 FX 8 (sci-fi)".split(";"),
                    Ethnic: "105 Sitar;106 Banjo;107 Shamisen;108 Koto;109 Kalimba;110 Bagpipe;111 Fiddle;112 Shanai".split(";"),
                    Percussive: "113 Tinkle Bell;114 Agogo;115 Steel Drums;116 Woodblock;117 Taiko Drum;118 Melodic Tom;119 Synth Drum".split(";"),
                    "Sound effects": "120 Reverse Cymbal;121 Guitar Fret Noise;122 Breath Noise;123 Seashore;124 Bird Tweet;125 Telephone Ring;126 Helicopter;127 Applause;128 Gunshot".split(";")
                },
                _ = function(e) {
                    return e.replace(/[^a-z0-9 ]/gi, "").replace(/[ ]/g, "_").toLowerCase()
                },
                b = {
                    byName: {},
                    byId: {},
                    byCategory: {}
                };
            for (w in S) for (var M = S[w], x = 0, D = M.length; D > x; x++) {
                var q = M[x];
                if (q) {
                    var k = parseInt(q.substr(0, q.indexOf(" ")), 10),
                        q = q.replace(k + " ", "");
                    b.byId[--k] = b.byName[_(q)] = b.byCategory[_(w)] = {
                        id: _(q),
                        instrument: q,
                        number: k,
                        category: w
                    }
                }
            }
            for (m.GeneralMIDI = b, w = MIDI, m = {},
                     S = 0; 16 > S; S++) m[S] = {
                instrument: 0,
                mute: !1,
                mono: !1,
                omni: !1,
                solo: !1
            };
            for (w.channels = m, MIDI.pianoKeyOffset = 21, MIDI.keyToNote = {},
                     MIDI.noteToKey = {},
                     w = "C Db D Eb E F Gb G Ab A Bb B".split(" "), m = 21; 108 >= m; m++) S = w[m % 12] + ((m - 12) / 12 >> 0),
                MIDI.keyToNote[S] = m,
                MIDI.noteToKey[m] = S
        } (), "undefined" == typeof DOMLoader) var DOMLoader = {};
if ("undefined" == typeof XMLHttpRequest) {
    var XMLHttpRequest; !
        function() {
            for (var e = [function() {
                return new ActiveXObject("Msxml2.XMLHTTP")
            },
                function() {
                    return new ActiveXObject("Msxml3.XMLHTTP")
                },
                function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                }], t = 0; t < e.length; t++) {
                try {
                    e[t]()
                } catch(r) {
                    continue
                }
                break
            }
            XMLHttpRequest = e[t]
        } ()
}
if ("undefined" == typeof(new XMLHttpRequest).responseText) {
    var IEBinaryToArray_ByteStr_Script = "<!-- IEBinaryToArray_ByteStr -->\r\n<script type='text/vbscript'>\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr = CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex = LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last = \"\"\r\n   End If\r\nEnd Function\r\n</script>\r\n";
    document.write(IEBinaryToArray_ByteStr_Script),
        DOMLoader.sendRequest = function(e) {
            var t = XMLHttpRequest();
            return t.open("GET", e.url, !0),
            e.responseType && (t.responseType = e.responseType),
            e.onerror && (t.onerror = e.onerror),
            e.onprogress && (t.onprogress = e.onprogress),
                t.onreadystatechange = function() {
                    if (4 === t.readyState) {
                        if (200 === t.status) {
                            var r, n = t;
                            r = t.responseBody;
                            for (var o = {},
                                     i = 0; 256 > i; i++) for (var a = 0; 256 > a; a++) o[String.fromCharCode(i + 256 * a)] = String.fromCharCode(i) + String.fromCharCode(a);
                            i = IEBinaryToArray_ByteStr(r),
                                r = IEBinaryToArray_ByteStr_Last(r),
                                r = i.replace(/[\s\S]/g,
                                        function(e) {
                                            return o[e]
                                        }) + r,
                                n.responseText = r
                        } else t = !1;
                        e.onload && e.onload(t)
                    }
                },
                t.setRequestHeader("Accept-Charset", "x-user-defined"),
                t.send(null),
                t
        }
} else DOMLoader.sendRequest = function(e) {
    var t = new XMLHttpRequest;
    return t.open(e.data ? "POST": "GET", e.url, !0),
    t.overrideMimeType && t.overrideMimeType("text/plain; charset=x-user-defined"),
    e.data && t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    e.responseType && (t.responseType = e.responseType),
    e.onerror && (t.onerror = e.onerror),
    e.onprogress && (t.onprogress = e.onprogress),
        t.onreadystatechange = function(r) {
            4 === t.readyState && (200 !== t.status && 304 != t.status ? e.onerror && e.onerror(r, !1) : e.onload && e.onload(t))
        },
        t.send(e.data),
        t
};
"undefined" == typeof DOMLoader && (DOMLoader = {}),
    function() {
        DOMLoader.script = function() {
            return this.loaded = {},
                this.loading = {},
                this
        },
            DOMLoader.script.prototype.add = function(e) {
                var t = this;
                "string" == typeof e && (e = {
                    src: e
                });
                var r = e.srcs;
                "undefined" == typeof r && (r = [{
                    src: e.src,
                    verify: e.verify
                }]);
                var n = document.getElementsByTagName("head")[0],
                    o = function(e, r) {
                        t.loaded[e.src] || r && "undefined" == typeof window[r] || (t.loaded[e.src] = !0, t.loading[e.src] && t.loading[e.src](), delete t.loading[e.src], e.callback && e.callback(), "undefined" != typeof c && c())
                    },
                    i = [],
                    a = function(r) {
                        if ("string" == typeof r && (r = {
                                src: r,
                                verify: e.verify
                            }), /([\w\d.])$/.test(r.verify)) if (r.test = r.verify, "object" == typeof r.test) for (var a in r.test) i.push(r.test[a]);
                        else i.push(r.test);
                        t.loaded[r.src] || (a = document.createElement("script"), a.onreadystatechange = function() {
                            "loaded" !== this.readyState && "complete" !== this.readyState || o(r)
                        },
                            a.onload = function() {
                                o(r)
                            },
                            a.onerror = function() {},
                            a.setAttribute("type", "text/javascript"), a.setAttribute("src", r.src), n.appendChild(a), t.loading[r.src] = function() {})
                    },
                    s = function(t) {
                        if (t) o(t, t.test);
                        else for (var n = 0; n < r.length; n++) o(r[n], r[n].test);
                        for (var a = !0,
                                 n = 0; n < i.length; n++) {
                            var l = i[n];
                            if (l && -1 !== l.indexOf(".")) {
                                var l = l.split("."),
                                    c = window[l[0]];
                                "undefined" != typeof c && (2 === l.length ? "undefined" == typeof c[l[1]] && (a = !1) : 3 === l.length && "undefined" == typeof c[l[1]][l[2]] && (a = !1))
                            } else "undefined" == typeof window[l] && (a = !1)
                        } ! e.strictOrder && a ? e.callback && e.callback() : setTimeout(function() {
                                    s(t)
                                },
                                10)
                    };
                if (e.strictOrder) {
                    var l = -1,
                        c = function() {
                            if (l++, r[l]) {
                                var n = r[l],
                                    o = n.src;
                                t.loading[o] ? t.loading[o] = function() {
                                        n.callback && n.callback(),
                                            c()
                                    }: t.loaded[o] ? c() : (a(n), s(n))
                            } else e.callback && e.callback()
                        };
                    c()
                } else {
                    for (l = 0; l < r.length; l++) a(r[l]);
                    s()
                }
            },
            DOMLoader.script = new DOMLoader.script
    } (),
    function(e) {
        e.btoa || (e.btoa = function(e) {
            var t, r, n, o, e = escape(e),
                i = "",
                a = "",
                s = "",
                l = 0;
            do t = e.charCodeAt(l++),
                r = e.charCodeAt(l++),
                a = e.charCodeAt(l++),
                n = t >> 2,
                t = (3 & t) << 4 | r >> 4,
                o = (15 & r) << 2 | a >> 6,
                s = 63 & a,
                isNaN(r) ? o = s = 64 : isNaN(a) && (s = 64),
                i = i + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(o) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(s);
            while (l < e.length);
            return i
        }),
        e.atob || (e.atob = function(e) {
            var t, r, n, o = "",
                i = "",
                a = "",
                s = 0;
            /[^A-Za-z0-9\+\/\=]/g.exec(e) && alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),
                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            do t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(s++)),
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(s++)),
                n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(s++)),
                a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(s++)),
                t = t << 2 | r >> 4,
                r = (15 & r) << 4 | n >> 2,
                i = (3 & n) << 6 | a,
                o += String.fromCharCode(t),
            64 != n && (o += String.fromCharCode(r)),
            64 != a && (o += String.fromCharCode(i));
            while (s < e.length);
            return unescape(o)
        })
    } (this);
var Base64Binary = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    decodeArrayBuffer: function(e) {
        var t = Math.ceil(3 * e.length / 4),
            t = new ArrayBuffer(t);
        return this.decode(e, t),
            t
    },
    decode: function(e, t) {
        var r = this._keyStr.indexOf(e.charAt(e.length - 1)),
            n = this._keyStr.indexOf(e.charAt(e.length - 1)),
            o = Math.ceil(3 * e.length / 4);
        64 == r && o--,
        64 == n && o--;
        for (var i, a, s, l, c = 0,
                 u = 0,
                 r = new Uint8Array(t ? t: o), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""), c = 0; o > c; c += 3) i = this._keyStr.indexOf(e.charAt(u++)),
            a = this._keyStr.indexOf(e.charAt(u++)),
            n = this._keyStr.indexOf(e.charAt(u++)),
            l = this._keyStr.indexOf(e.charAt(u++)),
            i = i << 2 | a >> 4,
            a = (15 & a) << 4 | n >> 2,
            s = (3 & n) << 6 | l,
            r[c] = i,
        64 != n && (r[c + 1] = a),
        64 != l && (r[c + 2] = s);
        return r
    }
}; (function() {
    var e = [].slice,
        t = [].indexOf ||
            function(e) {
                for (var t = 0,
                         r = this.length; r > t; t++) if (t in this && this[t] === e) return t;
                return - 1
            };
    Vex.Flow.Fretboard = function() {
        function r(e, t) {
            this.paper = e,
                n("constructor: options=", t),
                this.options = {
                    strings: 6,
                    start_fret: 1,
                    end_fret: 22,
                    tuning: "standard",
                    color: "black",
                    marker_color: "#aaa",
                    x: 10,
                    y: 20,
                    width: this.paper.view.size.width - 20,
                    height: this.paper.view.size.height - 40,
                    marker_radius: 4,
                    font_face: "Arial",
                    font_size: 12,
                    font_color: "black",
                    nut_color: "#aaa",
                    start_fret_text: null
                },
                _.extend(this.options, t),
                this.reset()
        }
        var n, o;
        return r.DEBUG = !1,
            n = function() {
                var t;
                return t = 1 <= arguments.length ? e.call(arguments, 0) : [],
                    Vex.Flow.Fretboard.DEBUG && "undefined" != typeof console && null !== console ? console.log.apply(console, ["(Vex.Flow.Fretboard)"].concat(e.call(t))) : void 0
            },
            o = function(e) {
                return new Vex.RERR("FretboardError", e)
            },
            r.prototype.reset = function() {
                if (n("reset()"), this.options.strings < 2) throw o("Too few strings: " + this.options.strings);
                if (this.options.end_fret - this.options.start_fret < 3) throw o("Too few frets: " + this.options.end_fret);
                if (this.x = this.options.x, this.y = this.options.y, this.width = this.options.width, this.nut_width = 10, this.start_fret = parseInt(this.options.start_fret, 10), this.end_fret = parseInt(this.options.end_fret, 10), this.total_frets = this.end_fret - this.start_fret, this.end_fret <= this.start_fret) throw o("Start fret number must be lower than end fret number: " + this.start_fret + " >= " + this.end_fret);
                return this.start_fret_text = null != this.options.start_fret_text ? this.options.start_fret_text: this.start_fret,
                    this.height = this.options.height - (0 === this.start_fret ? 0 : 10),
                    this.string_spacing = this.height / (this.options.strings - 1),
                    this.fret_spacing = (this.width - this.nut_width) / (this.total_frets - 1),
                    this.light_radius = this.string_spacing / 2 - 1,
                    this.calculateFretPositions()
            },
            r.prototype.calculateFretPositions = function() {
                var e, t, r, o, i, a, s;
                for (n("calculateFretPositions: width=" + this.width), o = this.width - this.nut_width, this.bridge_to_fret = [o], this.fretXs = [0], e = 1.05946, t = a = 1, s = this.total_frets; s >= 1 ? s >= a: a >= s; t = s >= 1 ? ++a: --a) this.bridge_to_fret[t] = o / Math.pow(e, t),
                    this.fretXs[t] = o - this.bridge_to_fret[t];
                return r = function(e) {
                    return function(t) {
                        return t / e.fretXs[e.total_frets] * o
                    }
                } (this),
                    this.fretXs = function() {
                        var e, t, n, o;
                        for (n = this.fretXs, o = [], e = 0, t = n.length; t > e; e++) i = n[e],
                            o.push(r(i));
                        return o
                    }.call(this)
            },
            r.prototype.hasFret = function(e) {
                var r, n;
                return t.call(function() {
                        n = [];
                        for (var e = r = this.start_fret - 1,
                                 t = this.end_fret; t >= r ? t >= e: e >= t; t >= r ? e++:e--) n.push(e);
                        return n
                    }.apply(this), e) >= 0
            },
            r.prototype.hasString = function(e) {
                var r;
                return t.call(function() {
                        r = [];
                        for (var e = 1,
                                 t = this.options.strings; t >= 1 ? t >= e: e >= t; t >= 1 ? e++:e--) r.push(e);
                        return r
                    }.apply(this), e) >= 0
            },
            r.prototype.getFretX = function(e) {
                return this.fretXs[e - (this.start_fret - 1)] + (this.start_fret > 1 ? 3 : this.nut_width)
            },
            r.prototype.getStringY = function(e) {
                return this.y + (e - 1) * this.string_spacing
            },
            r.prototype.getFretCenter = function(e, t) {
                var r, n, i, a;
                if (n = this.options.start_fret, r = this.options.end_fret, !this.hasFret(e)) throw o("Invalid fret: " + e);
                if (!this.hasString(t)) throw o("Invalid string: " + t);
                return i = 0,
                    i = 0 === e ? this.getFretX(0) + this.nut_width / 2 : (this.getFretX(e) + this.getFretX(e - 1)) / 2,
                    a = this.getStringY(t),
                    new this.paper.Point(i, a)
            },
            r.prototype.drawNut = function() {
                var e;
                return n("drawNut()"),
                    e = new this.paper.Path.RoundRectangle(this.x, this.y - 5, this.nut_width, this.height + 10),
                    e.strokeColor = this.options.nut_color,
                    e.fillColor = this.options.nut_color
            },
            r.prototype.showStartFret = function() {
                var e;
                return n("showStartFret()"),
                    e = this.getFretCenter(this.start_fret, 1),
                    n("Center: ", e),
                    this.renderText(new this.paper.Point(e.x, this.y + this.height + 20), this.start_fret_text)
            },
            r.prototype.drawString = function(e) {
                var t, r, n;
                return t = new this.paper.Path,
                    t.strokeColor = this.options.color,
                    n = this.getStringY(e),
                    r = new this.paper.Point(this.x, n),
                    t.moveTo(r),
                    t.lineTo(r.add([this.width, 0]))
            },
            r.prototype.drawFret = function(e) {
                var t, r, n;
                return t = new this.paper.Path,
                    t.strokeColor = this.options.color,
                    n = this.getFretX(e),
                    r = new this.paper.Point(n, this.y),
                    t.moveTo(r),
                    t.lineTo(r.add([0, this.height]))
            },
            r.prototype.drawDot = function(e, t, r, n) {
                var o;
                return null == r && (r = "red"),
                null == n && (n = 2),
                    o = new this.paper.Path.Circle(new this.paper.Point(e, t), n),
                    o.strokeColor = r,
                    o.fillColor = r
            },
            r.prototype.drawMarkers = function() {
                var e, t, r, o, i, a, s, l, c, u, p, d, h, f;
                for (n("drawMarkers"), r = 3, a = 4, e = 2, 4 === parseInt(this.options.strings, 10) && (r = 2, a = 3, e = 1), t = function(e) {
                    return function(t) {
                        var r;
                        return r = new e.paper.Path.Circle(t, e.options.marker_radius),
                            r.strokeColor = e.options.marker_color,
                            r.fillColor = e.options.marker_color
                    }
                } (this), s = this.string_spacing / 2, d = [3, 5, 7, 9, 15, 17, 19, 21], l = 0, u = d.length; u > l; l++) o = d[l],
                this.hasFret(o) && (i = this.getFretCenter(o, r).add([0, s]), t(i));
                for (h = [12, 24], f = [], c = 0, p = h.length; p > c; c++) o = h[c],
                    this.hasFret(o) ? (i = this.getFretCenter(o, e).add([0, s]), t(i), i = this.getFretCenter(o, a).add([0, s]), f.push(t(i))) : f.push(void 0);
                return f
            },
            r.prototype.renderText = function(e, t, r, n) {
                var o;
                return null == r && (r = this.options.font_color),
                null == n && (n = this.options.font_size),
                    o = new this.paper.PointText(e),
                    o.justification = "center",
                    o.characterStyle = {
                        font: this.options.font_face,
                        fontSize: n,
                        fillColor: r
                    },
                    o.content = t
            },
            r.prototype.drawFretNumbers = function() {
                var e, t, r, n, o, i;
                o = {
                    5 : "V",
                    12 : "XII",
                    19 : "XIX"
                },
                    i = [];
                for (r in o) n = o[r],
                    e = parseInt(r, 10),
                    this.hasFret(e) ? (t = this.getFretCenter(e, 6), t.y = this.getStringY(this.options.strings + 1), i.push(this.renderText(t, n))) : i.push(void 0);
                return i
            },
            r.prototype.lightText = function(e) {
                var t, r, o, i;
                return t = {
                    color: "white",
                    fillColor: "#666"
                },
                    _.extend(t, e),
                    n("lightUp: ", t),
                    o = this.getFretCenter(t.fret, t.string),
                    r = new this.paper.Path.Circle(o, this.light_radius),
                    r.strokeColor = t.color,
                    r.fillColor = t.fillColor,
                    i = this.string_spacing / 5,
                    o.y += i,
                null != t.text && this.renderText(o, t.text, t.color),
                    this.paper.view.draw()
            },
            r.prototype.lightUp = function(e) {
                var t, r;
                return null == e.color && (e.color = "#666"),
                null == e.fillColor && (e.fillColor = e.color),
                    n("lightUp: ", e),
                    r = this.getFretCenter(e.fret, e.string),
                    t = new this.paper.Path.Circle(r, this.light_radius - 2),
                    t.strokeColor = e.color,
                    t.fillColor = e.fillColor,
                    this.paper.view.draw()
            },
            r.prototype.draw = function() {
                var e, t, r, o, i, a;
                for (n("draw()"), e = t = 1, o = this.options.strings; o >= 1 ? o >= t: t >= o; e = o >= 1 ? ++t: --t) this.drawString(e);
                for (e = r = i = this.start_fret, a = this.end_fret; a >= i ? a >= r: r >= a; e = a >= i ? ++r: --r) this.drawFret(e);
                return 1 === this.start_fret ? this.drawNut() : this.showStartFret(),
                    this.drawMarkers(),
                    this.paper.view.draw()
            },
            r
    } (),
        Vex.Flow.FretboardDiv = function() {
            function r(e, t) {
                if (this.sel = e, this.id = t, this.options = {
                        width: 700,
                        height: 150,
                        strings: 6,
                        frets: 17,
                        start: 1,
                        "start-text": null,
                        tuning: "standard"
                    },
                    null != this.sel && 0 === $(this.sel).length) throw o("Invalid selector: " + this.sel);
                null == this.id && (this.id = $(this.sel).attr("id")),
                    this.lights = []
            }
            var n, o, i, a, s, l;
            return r.DEBUG = !1,
                n = function() {
                    var t;
                    return t = 1 <= arguments.length ? e.call(arguments, 0) : [],
                        Vex.Flow.FretboardDiv.DEBUG && "undefined" != typeof console && null !== console ? console.log.apply(console, ["(Vex.Flow.FretboardDiv)"].concat(e.call(t))) : void 0
                },
                o = function(e) {
                    return new Vex.RERR("FretboardError", e)
                },
                r.prototype.setOption = function(e, r) {
                    if (t.call(_.keys(this.options), e) >= 0) return n("Option: " + e + "=" + r),
                        this.options[e] = r;
                    throw o("Invalid option: " + e)
                },
                l = function(e) {
                    var t, r, n;
                    t = {};
                    for (r in e) switch (n = e[r], r) {
                        case "width":
                        case "height":
                            continue;
                        case "strings":
                            t.strings = n;
                            break;
                        case "frets":
                            t.end_fret = n;
                            break;
                        case "tuning":
                            t.tuning = n;
                            break;
                        case "start":
                            t.start_fret = n;
                            break;
                        case "start-text":
                            t.start_fret_text = n;
                            break;
                        default:
                            throw o("Invalid option: " + r)
                    }
                    return t
                },
                r.prototype.show = function(e) {
                    var r, i, a, s, l, c, u, p;
                    for (a = e.split(/\s+/), s = {},
                             l = ["fret", "frets", "string", "strings", "text", "color", "note", "notes", "fill-color"], c = 0, u = a.length; u > c; c++) {
                        if (i = a[c], r = i.match(/^(\S+)\s*=\s*(\S+)/), p = r[1], t.call(l, p) < 0) throw o("Invalid 'show' option: " + r[1]);
                        null != r && (s[r[1]] = r[2])
                    }
                    return n("Show: ", s),
                        this.lights.push(s)
                },
                r.prototype.parse = function(e) {
                    var t, r, o, i, a;
                    for (n("Parsing: " + e), r = e.split(/\n/), i = 0, a = r.length; a > i; i++) t = r[i],
                        t.trim(),
                        o = t.match(/^\s*option\s+(\S+)\s*=\s*(\S+)/),
                    null != o && this.setOption(o[1], o[2]),
                        o = t.match(/^\s*show\s+(.+)/),
                    null != o && this.show(o[1]);
                    return ! 0
                },
                s = function(e) {
                    return n("ExtractNumbers: ", e),
                        e.trim(),
                        e.split(/\s*,\s*/)
                },
                a = function(e) {
                    var t, r, i, a, s, l;
                    for (n("ExtractNotes: ", e), e.trim(), i = e.split(/\s*,\s*/), t = [], s = 0, l = i.length; l > s; s++) {
                        if (r = i[s], a = r.match(/(\d+)\/(\d+)/), null == a) throw o("Invalid note: " + r);
                        t.push({
                            fret: parseInt(a[1], 10),
                            string: parseInt(a[2], 10)
                        })
                    }
                    return t
                },
                i = function(e) {
                    var t, r, n, i, l, c, u, p, d, h, f, g, m;
                    if (null != e.fret && (r = s(e.fret)), null != e.frets && (r = s(e.frets)), null != e.string && (u = s(e.string)), null != e.strings && (u = s(e.strings)), null != e.note && (l = a(e.note)), null != e.notes && (l = a(e.notes)), (null == r || null == u) && null == l) throw o("No frets or strings specified on line");
                    if (n = [], null != r && null != u) for (p = 0, f = r.length; f > p; p++) for (t = r[p], d = 0, g = u.length; g > d; d++) c = u[d],
                        n.push({
                            fret: parseInt(t, 10),
                            string: parseInt(c, 10)
                        });
                    if (null != l) for (h = 0, m = l.length; m > h; h++) i = l[h],
                        n.push(i);
                    return n
                },
                r.prototype.lightsCameraAction = function() {
                    var e, t, r, o, a, s, l;
                    for (n(this.lights), s = this.lights, l = [], o = 0, a = s.length; a > o; o++) e = s[o],
                        r = i(e),
                        l.push(function() {
                            var o, i, a;
                            for (a = [], o = 0, i = r.length; i > o; o++) t = r[o],
                            null != e.color && (t.color = e.color),
                            null != e["fill-color"] && (t.fillColor = e["fill-color"]),
                                n("Lighting up: ", t),
                                null != e.text ? (t.text = e.text, a.push(this.fretboard.lightText(t))) : a.push(this.fretboard.lightUp(t));
                            return a
                        }.call(this));
                    return l
                },
                r.prototype.build = function(e) {
                    var t, r;
                    return null == e && (e = null),
                        n("Creating canvas id=" + this.id + " " + this.options.width + "x" + this.options.height),
                    null == e && (e = $(this.sel).text()),
                        this.parse(e),
                        t = $("<canvas id=" + this.id + ">").attr("width", this.options.width).attr("height", this.options.height).attr("id", this.id).width(this.options.width),
                        $(this.sel).replaceWith(t),
                        r = new paper.PaperScope,
                        r.setup(document.getElementById(this.id)),
                        this.fretboard = new Vex.Flow.Fretboard(r, l(this.options)),
                        this.fretboard.draw(),
                        this.lightsCameraAction()
                },
                r
        } ()
}).call(this),
    function() {
        var e = [].slice,
            t = [].indexOf ||
                function(e) {
                    for (var t = 0,
                             r = this.length; r > t; t++) if (t in this && this[t] === e) return t;
                    return - 1
                };
        Vex.Flow.Player = function() {
            function r(e, t) {
                this.artist = e,
                    i("Initializing player: ", t),
                    this.options = {
                        instrument: "acoustic_grand_piano",
                        tempo: 120,
                        show_controls: !0,
                        soundfont_url: "../soundfont/",
                        overlay_class: "vextab-player"
                    },
                null != t && _.extend(this.options, t),
                    i("Using soundfonts in: " + this.options.soundfont_url),
                    this.interval_id = null,
                    this.paper = null,
                    this.reset()
            }
            var n, o, i, a, s, l, c;
            return r.DEBUG = !1,
                r.INSTRUMENTS_LOADED = {},
                i = function() {
                    var t;
                    return t = 1 <= arguments.length ? e.call(arguments, 0) : [],
                        Vex.Flow.Player.DEBUG && "undefined" != typeof console && null !== console ? console.log.apply(console, ["(Vex.Flow.Player)"].concat(e.call(t))) : void 0
                },
                n = Vex.Flow.Fraction,
                a = Vex.Flow.RESOLUTION,
                c = Vex.Flow.Music.noteValues,
                s = Vex.drawDot,
                o = {
                    acoustic_grand_piano: 0,
                    acoustic_guitar_nylon: 24,
                    acoustic_guitar_steel: 25,
                    electric_guitar_jazz: 26,
                    distortion_guitar: 30,
                    electric_bass_finger: 33,
                    electric_bass_pick: 34,
                    trumpet: 56,
                    brass_section: 61,
                    soprano_sax: 64,
                    alto_sax: 65,
                    tenor_sax: 66,
                    baritone_sax: 67,
                    flute: 73,
                    synth_drum: 118
                },
                r.prototype.setArtist = function(e) {
                    return this.artist = e,
                        this.reset()
                },
                r.prototype.setTempo = function(e) {
                    return i("New tempo: ", e),
                        this.options.tempo = e,
                        this.reset()
                },
                r.prototype.setInstrument = function(e) {
                    if (i("New instrument: ", e), t.call(_.keys(o), e) < 0) throw new Vex.RERR("PlayerError", "Invalid instrument: " + e);
                    return this.options.instrument = e,
                        this.reset()
                },
                r.prototype.reset = function() {
                    return this.artist.attachPlayer(this),
                        this.tick_notes = {},
                        this.all_ticks = [],
                        this.tpm = this.options.tempo * (a / 4),
                        this.refresh_rate = 25,
                        this.ticks_per_refresh = this.tpm / (60 * (1e3 / this.refresh_rate)),
                        this.total_ticks = 0,
                    null != this.marker && (this.marker.remove(), this.marker = null),
                        this.stop()
                },
                l = function(e, t, r) {
                    var n, o, i, a, s, l;
                    return n = e.canvas,
                        i = n.height,
                        l = n.width,
                        a = $("<canvas>"),
                        a.css("position", "absolute"),
                        a.css("left", 0),
                        a.css("top", 0),
                        a.addClass(r),
                        $(n).after(a),
                        o = Vex.Flow.Renderer.getCanvasContext(a.get(0), l, i),
                        o.scale(t, t),
                        s = new paper.PaperScope,
                        s.setup(a.get(0)),
                        {
                            paper: s,
                            canvas: a.get(0)
                        }
                },
                r.prototype.removeControls = function() {
                    return null != this.play_button && this.play_button.remove(),
                    null != this.stop_button && this.stop_button.remove(),
                        null != this.paper ? this.paper.view.draw() : void 0
                },
                r.prototype.render = function() {
                    var e, t, r, o, a, s, c, u, p, d, h, f, g, m, v, A, I, y, w;
                    for (this.reset(), t = this.artist.getPlayerData(), this.scale = t.scale, this.paper || (c = l(t.context, t.scale, this.options.overlay_class), this.paper = c.paper), this.marker = new this.paper.Path.Rectangle(0, 0, 13, 85), this.loading_message = new this.paper.PointText(35, 12), this.options.show_controls && (this.play_button = new this.paper.Path.RegularPolygon(new this.paper.Point(25, 10), 3, 7, 7), this.play_button.fillColor = "#396", this.play_button.opacity = .8, this.play_button.rotate(90), this.play_button.onMouseUp = function(e) {
                        return function() {
                            return e.play()
                        }
                    } (this), this.stop_button = new this.paper.Path.Rectangle(3, 3, 10, 10), this.stop_button.fillColor = "#396", this.stop_button.opacity = .8, this.stop_button.onMouseUp = function(e) {
                        return function() {
                            return e.stop()
                        }
                    } (this)), this.paper.view.draw(), u = t.voices, p = new n(0, 1), g = 0, A = u.length; A > g; g++) {
                        for (f = u[g], a = new n(0, 1), r = m = 0, I = f.length; I > m; r = ++m) {
                            for (h = f[r], d = new n(0, 1), w = h.getTickables(), v = 0, y = w.length; y > v; v++) s = w[v],
                            s.shouldIgnoreTicks() || (e = p.clone(), e.add(d), e.simplify(), o = e.toString(), _.has(this.tick_notes, o) ? this.tick_notes[o].notes.push(s) : this.tick_notes[o] = {
                                    tick: e,
                                    value: e.value(),
                                    notes: [s]
                                },
                                d.add(s.getTicks()));
                            d.value() > a.value() && a.copy(d)
                        }
                        p.add(a)
                    }
                    return this.all_ticks = _.sortBy(_.values(this.tick_notes),
                        function(e) {
                            return e.value
                        }),
                        this.total_ticks = _.last(this.all_ticks),
                        i(this.all_ticks)
                },
                r.prototype.updateMarker = function(e, t) {
                    return this.marker.fillColor = "#369",
                        this.marker.opacity = .2,
                        this.marker.setPosition(new this.paper.Point(e * this.scale, t * this.scale)),
                        this.paper.view.draw()
                },
                r.prototype.playNote = function(e) {
                    var t, r, n, o, a, s, l, u, p, d, h, f;
                    for (i("(" + this.current_ticks + ") playNote: ", e), f = [], d = 0, h = e.length; h > d; d++) a = e[d],
                        u = a.getAbsoluteX() + 4,
                        p = a.getStave().getYForLine(2),
                    null != this.paper && this.updateMarker(u, p),
                    a.isRest() || (n = a.getPlayNote(), t = a.getTicks().value() / (this.tpm / 60), f.push(function() {
                        var e, i, u, p;
                        for (p = [], e = 0, i = n.length; i > e; e++) r = n[e],
                            u = r.split("/"),
                            a = u[0],
                            l = u[1],
                            a = a.trim().toLowerCase(),
                            s = c[a],
                        null != s && (o = 24 + 12 * l + c[a].int_val, MIDI.noteOn(0, o, 127, 0), p.push(MIDI.noteOff(0, o, t)));
                        return p
                    } ()));
                    return f
                },
                r.prototype.refresh = function() {
                    return this.done ? void this.stop() : (this.current_ticks += this.ticks_per_refresh, this.current_ticks >= this.next_event_tick ? (this.playNote(this.all_ticks[this.next_index].notes), this.next_index++, this.next_index >= this.all_ticks.length ? this.done = !0 : this.next_event_tick = this.all_ticks[this.next_index].tick.value()) : void 0)
                },
                r.prototype.stop = function() {
                    return i("Stop"),
                    null != this.interval_id && window.clearInterval(this.interval_id),
                    null != this.play_button && (this.play_button.fillColor = "#396"),
                    null != this.paper && this.paper.view.draw(),
                        this.interval_id = null,
                        this.current_ticks = 0,
                        this.next_event_tick = 0,
                        this.next_index = 0,
                        this.done = !1
                },
                r.prototype.start = function() {
                    return this.stop(),
                        i("Start"),
                    null != this.play_button && (this.play_button.fillColor = "#a36"),
                        MIDI.programChange(0, o[this.options.instrument]),
                        this.interval_id = window.setInterval(function(e) {
                            return function() {
                                return e.refresh()
                            }
                        } (this), this.refresh_rate)
                },
                r.prototype.play = function() {
                    return i("Play: ", this.refresh_rate, this.ticks_per_refresh),
                        Vex.Flow.Player.INSTRUMENTS_LOADED[this.options.instrument] && !this.loading ? this.start() : (i("Loading instruments..."), this.loading_message.content = "Loading instruments...", this.loading_message.fillColor = "green", this.loading = !0, this.paper.view.draw(), MIDI.loadPlugin({
                                soundfontUrl: this.options.soundfont_url,
                                instruments: [this.options.instrument],
                                callback: function(e) {
                                    return function() {
                                        return Vex.Flow.Player.INSTRUMENTS_LOADED[e.options.instrument] = !0,
                                            e.loading = !1,
                                            e.loading_message.content = "",
                                            e.start()
                                    }
                                } (this)
                            }))
                },
                r
        } ()
    }.call(this),
    VexUtils.FlashAlert = function(e, t) {
        alertify.error(t ? e: "Oh Snap! " + e)
    },
    VexUtils.FlashMessage = function(e) {
        alertify.success(e)
    },
    VexUtils.Param = function(e) {
        return decodeURIComponent((new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || null
    },
    VexUtils.Ajax = function(e, t, r, n) {
        L("API call to: " + e),
            L(t);
        var o = "POST";
        n && (o = n),
            $.ajax({
                type: o,
                url: e,
                data: t,
                dataType: "json",
                success: function(e, t, n) {
                    return e ? void(e.success ? r(!0, e, t, n, null) : (L("API Error: " + e.message), VexUtils.FlashAlert(e.message), r(!1, e, "apierror", n, null))) : (L("Server Error: " + t + " in " + n), VexUtils.FlashAlert("Unexpected server error. Please try again later."), void r(!1, null, "servererror", n, null))
                },
                error: function(e, t, n) {
                    L("Server Error: " + t),
                        VexUtils.FlashAlert("(Server Error) " + t),
                        r(!1, null, t, e, n)
                }
            })
    },
    NoteSpace = {},
    NoteSpace.can_log = !0,
    NoteSpace.mode = "UNKNOWN",
    NoteSpace.api = null,
    NoteSpace.log = function(e) {
        NoteSpace.can_log && console.log(e)
    },
    L = NoteSpace.log,
    NoteSpace.setup_ajax_loader = function(e) {
        $(e).hide(),
            $(e).ajaxStart(function() {
                $(e).show()
            }),
            $(e).ajaxStop(function() {
                $(e).hide()
            })
    },
    NoteSpace.API = function(e, t) {
        this.url = "",
        e && (this.url = e),
            this.logged_in = !1,
            this.user = {
                id: null,
                email: "",
                name: "",
                handle: "",
                admin: !1
            },
            this.handlers = _.extend({
                    login_handler: null,
                    register_user_handler: null,
                    logout_handler: null,
                    update_user_handler: null,
                    ping_handler: null,
                    create_article_handler: null,
                    delete_article_handler: null,
                    update_article_handler: null
                },
                t)
    },
    NoteSpace.API.prototype.setHandlers = function(e) {
        _.extend(this.handlers, e)
    },
    NoteSpace.API.prototype.getUser = function() {
        return this.user
    },
    NoteSpace.API.prototype.setUser = function(e) {
        this.logged_in = !0,
            this.user.id = e.id,
            this.user.email = e.email,
            this.user.name = e.name,
            this.user.handle = e.handle,
            this.user.admin = e.admin
    },
    NoteSpace.API.prototype.isLoggedIn = function() {
        return this.logged_in
    },
    NoteSpace.API.prototype.login = function(e, t, r) {
        r || (r = this.handlers.login_handler);
        var n = this;
        VexUtils.Ajax(this.url + "/login", {
                login: e,
                password: t
            },
            function(e, t) {
                e && (n.setUser(t.data), r(n.user.handle))
            })
    },
    NoteSpace.API.prototype.logout = function(e) {
        e || (e = this.handlers.logout_handler);
        var t = this;
        VexUtils.Ajax(this.url + "/logout", {},
            function(r) {
                r && (t.logged_in = !1, t.user.id = null, t.user.email = "", t.user.handle = "", t.user.admin = !1, e())
            })
    },
    NoteSpace.API.prototype.register_user = function(e, t, r, n, o) {
        o || (o = this.handlers.register_user_handler);
        var i = this,
            a = {
                email: e,
                handle: t,
                name: r,
                password: n
            };
        VexUtils.Ajax(this.url + "/users/new", a,
            function(a) {
                a && (i.user.email = e, i.user.handle = t, i.user.name = r, i.user.password = n, o(i.user))
            })
    },
    NoteSpace.API.prototype.update_user = function(e, t, r, n) {
        n || (n = this.handlers.update_user_handler);
        var o = this,
            i = {
                email: e,
                name: t
            };
        r && "" != r && (i.password = r),
            VexUtils.Ajax(this.url + "/users/update", i,
                function(r) {
                    r && (o.user.email = e, o.user.name = t, n(o.user))
                })
    },
    NoteSpace.API.prototype.ping = function(e) {
        e || (e = this.handlers.ping_handler);
        var t = this;
        VexUtils.Ajax(this.url + "/ping", {},
            function(r, n) {
                r && (n.data.email ? (t.setUser(n.data), e(t.user.handle)) : e(null))
            })
    },
    NoteSpace.API.prototype.create_article = function(e, t) {
        t || (t = this.handlers.create_article_handler),
            VexUtils.Ajax(this.url + "/articles/new", {
                    title: e
                },
                function(e, r) {
                    e && t(r.data.id)
                })
    },
    NoteSpace.API.prototype.update_article = function(e, t, r) {
        r || (r = this.handlers.update_article_handler),
            VexUtils.Ajax(this.url + "/articles/update/" + e, t,
                function(e) {
                    r(e, t)
                })
    },
    NoteSpace.API.prototype.delete_article = function(e, t) {
        t || (t = this.handlers.delete_article_handler),
            VexUtils.Ajax(this.url + "/articles/delete/" + e, {},
                function(e) {
                    e && t()
                })
    },
    NoteSpace.Article = function(e) {
        this.api = e,
            this.converter = new Markdown.getSanitizingConverter,
            this.has_editor = !1,
            this.article_saved = !0,
            this.api.setHandlers({
                create_article_handler: NoteSpace.Article.on_create,
                delete_article_handler: NoteSpace.Article.on_delete
            }),
            window.onbeforeunload = NoteSpace.Article.on_leave
    },
    NoteSpace.Article.getCurrentAuthor = function() {
        return $("#article-body").attr("article-author-handle")
    },
    NoteSpace.Article.on_save = function() {
        $("a#update-article").hide(),
            $("a#update-article").data("saved", !0),
            $("a#article-updated").hide()
    },
    NoteSpace.Article.on_create = function(e) {
        window.location.href = "/articles/" + e + "?tab=edit"
    },
    NoteSpace.Article.on_delete = function() {
        $("a#update-article").data("saved", !0),
            window.location.href = "/me"
    },
    NoteSpace.Article.on_leave = function() {
        return 0 == $("a#update-article").data("saved") ? "You haven't saved your changes yet.": void 0
    },
    NoteSpace.Article.sanitizeVideo = function(e) {
        var t = null,
            r = e.match(/^http:\/\/(www\.)?youtube\.com\/(.*)v=([^&]+)/);
        return r && (t = r[3]),
            r = e.match(/^http:\/\/(www\.)?youtube\.com\/embed\/([^&]+)$/),
        r && (t = r[2]),
            r = e.match(/^http:\/\/(www\.)?youtu\.be\/([^&]+)$/),
        r && (t = r[2]),
            null != t ? "http://www.youtube.com/embed/" + t: null
    },
    NoteSpace.Article.update_embed_help_text = function() {
        _.defer(function() {
            $("code#embed-code").text('<iframe src="http://static.vexflow.com/embed/articles/' + $("#article-body").attr("article-id") + '" width="100%" height="' + ($("div#wmd-preview").height() + 26) + '" frameborder="0" scrolling="no"></iframe>')
        })
    },
    NoteSpace.Article.prototype.render = function(e) {
        var t = this.converter.makeHtml(e);
        $("#wmd-preview").html(t),
            NoteSpace.Article.update_embed_help_text(),
            Vex.Flow.TabDiv.NOLOGO = !0,
            Vex.Flow.TabDiv.HEIGHT_ADJUSTMENT = -20,
            $(Vex.Flow.TabDiv.SEL).each(function() {
                $(this).data("vex-tabdiv", new Vex.Flow.TabDiv(this, {
                    soundfont_url: "/soundfont/"
                }))
            }),
            $(".vex-tabdiv").show(),
            $(".vex-video").each(function() {
                var e = $(this).text(),
                    t = NoteSpace.Article.sanitizeVideo(e);
                null != t ? (L("Creating video iframe: " + t), $(this).replaceWith($("<iframe>").attr("width", 420).attr("height", 315).attr("src", t).attr("frameborder", 0).attr("allowfullscreen", !0))) : (L("Invalid video URL: " + e), $(this).css("color", "red"), $(this).text("Unsupported video: " + e + ". See help for more information."))
            }),
            $(".vex-fretboard").each(function(e) {
                var t = "notespace-fretboard-" + e;
                try {
                    new Vex.Flow.FretboardDiv(this, t).build()
                } catch(r) {
                    L(r),
                        $(this).css("color", "red"),
                        $(this).text("Fretboard error: " + r.message)
                }
            }),
            $("a#article-updated").hide()
    },
    NoteSpace.Article.prototype.setupEditor = function() {
        var e = this;
        if (this.has_editor) return void L("Editor already setup.");
        var t = $("#editor").text();
        L("Initializing editor...");
        var r = ace.edit("editor");
        r.getSession().setUseWorker(!1),
            r.getSession().setUseWrapMode(!0),
            r.setShowPrintMargin(!1),
            r.setValue(t),
            r.gotoLine(1),
            r.setTheme("ace/theme/github"),
            r.getSession().setMode("ace/mode/markdown"),
            r.getSession().setUseSoftTabs(!0),
            r.renderer.setShowGutter(!1),
            L("Loading help text..."),
            $("#tab3").load("/snippets/help",
                function() {
                    NoteSpace.Article.update_embed_help_text()
                }),
            $("a#article-updated").click(function() {
                $('#edit-menu a[href="#tab1"]').tab("show")
            }),
            $("#preview-tab").on("shown",
                function() {
                    L("Rendering article...");
                    var t = r.getValue();
                    e.render(t)
                }),
            $("a#update-article").data("saved", !0),
            $("#update-article").click(function() {
                L("Saving article..."),
                    e.api.update_article($("#article-body").attr("article-id"), {
                            content: r.getValue()
                        },
                        NoteSpace.Article.on_save)
            }),
            r.getSession().on("change",
                function() {
                    $("a#article-updated").show(),
                    $("#article-body").attr("article-author-handle") == e.api.getUser().handle && ($("a#update-article").show(), $("a#update-article").data("saved", !1))
                }),
            $("#editor-tab").on("shown",
                function() {
                    _.defer(function() {
                        r.focus()
                    })
                }),
            $("#edit-menu").show(),
        "edit" == VexUtils.Param("tab") && $('#edit-menu a[href="#tab2"]').tab("show"),
            this.has_editor = !0
    },
    NoteSpace.Article.prototype.maybeSetupNewPage = function() {
        $("#editor").length > 0 && (L("Rendering static article..."), this.render($("#editor").text()))
    },
    NoteSpace.Article.prototype.maybeSetupEditor = function() { (NoteSpace.Article.getCurrentAuthor() == this.api.getUser().handle || "enabled" == VexUtils.Param("source")) && (L("Article author setup."), NoteSpace.article.setupEditor())
    },
    NoteSpace.Article.prototype.maybeSetupArticleList = function() {
        var e = this;
        0 != $("a.private-article").length && ($("#article-title-heading").tooltip(), $("#article-title-heading").editable({
            url: function(t) {
                var r = $(this).attr("article-id"),
                    n = new $.Deferred;
                return e.api.update_article(r, {
                        title: t.value
                    },
                    function(e) {
                        e ? (n.resolve(), $("#article-body").attr("article-title", t.value), $("#navbar-article-title").text(t.value)) : n.reject("")
                    }),
                    n
            }
        }), $("a.private-article").tooltip(), $("a.private-article").click(function() {
            var t = $(this).attr("article-id"),
                r = $(this).hasClass("icon-gray"),
                n = this;
            e.api.update_article(t, {
                    private_article: r
                },
                function(e) {
                    e && $(n).toggleClass("icon-gray", !r)
                })
        }), $("a.unlisted-article").tooltip(), $("a.unlisted-article").click(function() {
            var t = $(this).attr("article-id"),
                r = $(this).hasClass("icon-gray"),
                n = this;
            e.api.update_article(t, {
                    unlisted: r
                },
                function(e) {
                    e && $(n).toggleClass("icon-gray", !r)
                })
        }), $("a.delete-article").tooltip(), $("a.delete-article").click(function() {
            var t = $(this).attr("article-id");
            alertify.set({
                labels: {
                    ok: "Kill It!",
                    cancel: "Cancel"
                }
            }),
                alertify.confirm("Delete this article?",
                    function(r) {
                        r && e.api.delete_article(t)
                    })
        }))
    },
    NoteSpace.UserForms = function(e) {
        this.api = e
    },
    NoteSpace.UserForms.validateUser = function(e, t, r, n, o) {
        var i = VexUtils.FlashAlert;
        if (e.length < 2 || e.length > 40) return i("Name too strange."),
            !1;
        if (r.length < 4 || r.length > 20 || r.match(/[^0-9a-z]/i)) return i("Handle must be at least 4 characters (numbers and letters only)."),
            !1;
        if (t.length < 4 || t.length > 60 || !t.match(/\S+@\S+/)) return i("Weird e-mail address."),
            !1;
        if (null != n) {
            if (n.length < 6) return i("Password must be at least 6 characters."),
                !1;
            if (n != o) return i("Passwords don't match."),
                !1
        }
        return ! 0
    },
    NoteSpace.UserForms.validateRegistrationForm = function() {
        var e = $("#register-name").val(),
            t = $("#register-email").val(),
            r = $("#register-handle").val(),
            n = $("#register-password").val(),
            o = $("#register-retype-password").val();
        return NoteSpace.UserForms.validateUser(e, t, r, n, o)
    },
    NoteSpace.UserForms.validateUserPrefsForm = function() {
        var e = $("#prefs-name").val(),
            t = $("#prefs-email").val(),
            r = $("#prefs-password").val(),
            n = $("#prefs-retype-password").val();
        return r && "" != r || (r = null),
            NoteSpace.UserForms.validateUser(e, t, "nohandlerequired", r, n)
    },
    NoteSpace.UserForms.validateNewArticleForm = function() {
        var e = $("#new-article-title").val();
        return e.length < 2 || e.length > 60 ? (VexUtils.FlashAlert("Title must be between 2 and 60 characters long."), !1) : !0
    },
    NoteSpace.UserForms.prototype.setup = function() {
        var e = this;
        $("#login-form-div").on("shown",
            function() {
                $("#login-email").focus()
            }),
            $("#login-form").submit(function() {
                return e.api.login($("#login-email").val(), $("#login-password").val()),
                    $("#login-form-div").modal("hide"),
                    !1
            }),
            $("#registration-form-div").on("shown",
                function() {
                    $("#register-name").focus()
                }),
            $("#registration-form").submit(function() {
                return NoteSpace.UserForms.validateRegistrationForm() && ($("#registration-form-div").modal("hide"), e.api.register_user($("#register-email").val(), $("#register-handle").val(), $("#register-name").val(), $("#register-password").val())),
                    !1
            }),
            $("#new-article-form-div").on("shown",
                function() {
                    $("#new-article-title").focus()
                }),
            $("#new-article-form").submit(function() {
                return NoteSpace.UserForms.validateNewArticleForm() && ($("#new-article-form-div").modal("hide"), e.api.create_article($("#new-article-title").val())),
                    !1
            }),
            $("#prefs-form-div").on("shown",
                function() {
                    if (e.api.isLoggedIn()) {
                        var t = e.api.getUser();
                        $("#prefs-name").val(t.name),
                            $("#prefs-email").val(t.email)
                    }
                    $("#prefs-name").focus()
                }),
            $("#prefs-form").submit(function() {
                return NoteSpace.UserForms.validateUserPrefsForm() && ($("#prefs-form-div").modal("hide"), e.api.update_user($("#prefs-email").val(), $("#prefs-name").val(), $("#prefs-password").val())),
                    !1
            }),
            $("#logout").click(function() {
                e.api.logout()
            })
    };