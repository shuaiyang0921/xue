var AutoSuggest, __extends, Bing, sa_inst;
(function(n) {
    var t;
    (function(n) {
        var t, i, r, u, f, e;
        (function(n) { n.User = "SRCHHPGUSR" })(t = n.CookieNames || (n.CookieNames = {})),
        function(n) { n.AutoSuggest = "AS" }(i = n.CrumbNames || (n.CrumbNames = {})),
        function(n) {
            n.CursorPosition = "cp";
            n.ConversationId = "cvid";
            n.SuggestionCount = "sc";
            n.PartialQuery = "pq";
            n.SuggestionPosition = "sp";
            n.SuggestionType = "qs";
            n.PreviewPaneSuggestionType = "qsc";
            n.SkipValue = "sk";
            n.PreviewPaneSkipValue = "skc";
            n.Ghosting = "ghc";
            n.Css = "css";
            n.Count = "count";
            n.DataSet = "ds";
            n.SessionId = "sid";
            n.TimeStamp = "qt";
            n.Query = "q";
            n.ImpressionGuid = "ig";
            n.QFQuery = "qry";
            n.BaseQuery = "bq";
            n.FormCode = "form";
            n.HashedMuid = "nclid";
            n.RequestElToken = "elvr";
            n.ElTokenValue = "elv";
            n.AppId = "appid";
            n.History = "history";
            n.NoHistory = "nohs";
            n.ApiTextDecoration = "textdecorations";
            n.ClientId = "clientid";
            n.Market = "mkt";
            n.Scope = "scope";
            n.CountryCode = "cc";
            n.HomeGeographicRegion = "hgr";
            n.SetLang = "setlang";
            n.ZeroInputSerp = "zis"
        }(r = n.QueryParams || (n.QueryParams = {})),
        function(n) { n.ImpressionGuid = "X-MSEdge-IG" }(u = n.Headers || (n.Headers = {})),
        function(n) {
            n.HitHighlighting = "h";
            n.PopularNow = "p";
            n.Local = "l";
            n.Answers = "a"
        }(f = n.Options || (n.Options = {})),
        function(n) {
            n.Id = "id";
            n.Query = "query";
            n.Url = "url";
            n.Navigation = "nav";
            n.Type = "stype";
            n.Autocomplete = "hc";
            n.InstData = "h";
            n.AriaLabel = "aria-label";
            n.RequestGuid = "rg";
            n.AdQuery = "adq"
        }(e = n.SuggestionAttributes || (n.SuggestionAttributes = {}))
    })(t = n.Service || (n.Service = {}))
})(AutoSuggest || (AutoSuggest = {})),
function(n) {
    var t;
    (function(n) {
        var t;
        (function(n) {
            function s(n) { return n ? n[n[i] !== undefined ? i : u] : undefined }

            function r(n, t) { n && t !== null && t !== undefined && (n[n[i] !== undefined ? i : u] = t) }

            function h(n) { return _w.getComputedStyle ? _w.getComputedStyle(n, null) : n.currentStyle }

            function c(n, t) {
                var r = new RegExp("[?&]{1}" + t + "=([^&]+)"),
                    i = n.match(r);
                return i ? i[1] : null
            }

            function l(n, t, i) {
                if (n.setSelectionRange) n.setSelectionRange(t, i);
                else {
                    var r = n.createTextRange();
                    r.moveEnd("sentence", -1e5);
                    r.moveStart("character", t);
                    r.moveEnd("character", i - t);
                    r.select()
                }
            }

            function a(n, t) { for (var r, i, u = 0; i = t[u]; ++u) r = n.getAttribute(i), r && (n[i] = r) }

            function v(n) { var t = sj_ev(n); return { x: t.clientX, y: t.clientY } }

            function y(n, t) {
                return function(i) {
                    var r = sj_ev(i),
                        u = r.relatedTarget || (r.type == "mouseout" ? r.toElement : r.fromElement);
                    t === u || f(u, t) || n.call(t, r)
                }
            }

            function p(n, t) {
                var i = 0,
                    r = _d.selection;
                if (n.selectionStart != null) i = n.selectionStart;
                else if (r && n.createTextRange) {
                    t && n.focus();
                    var u = n.createTextRange(),
                        f = u.duplicate(),
                        e = r.createRange();
                    t && u.moveToBookmark(e.getBookmark());
                    f.setEndPoint("EndToStart", e);
                    i = f.text.length
                }
                return i
            }

            function w(n, t) { n && (n.className = n.className.replace(t, "")) }

            function b(n, t) {
                var u, i, r, f;
                if (n) {
                    for (u = n.className.split(" "), i = 0, r = u; i < r.length; i++)
                        if (f = r[i], f === t) return;
                    n.className.length > 0 && (n.className += " ");
                    n.className += t
                }
            }

            function k(n, t) { return n ? n.replace(o, function(n, i) { return t[i] }) : n }

            function d(n, t) { var i = t.replace(/\s+$/g, ""); return t[t.length - 1] == " " && n.length > 0 && ut(t, i, n[0]) ? i : t }

            function f(n, t) { if (!n || !t || t === n) return !1; while (n && t !== n) n = n.parentElement; return t == n }

            function g(n, t, i) {
                var u = e.exec(t);
                if (!u || !u[1]) throw new Error("Given text format doesn't contain link markup");
                r(i, u[1]);
                r(n, sa_loc.SearchRemoved);
                n.innerHTML = n.innerHTML.replace("%e" + i.innerHTML + "%E", rt(i))
            }

            function nt(n, t, i, r) { var u, f; return i === void 0 && (i = null), r === void 0 && (r = !1), u = _d.createElement("span"), u.textContent = t, u.style.visibility = "hidden", i && (u.style.fontSize = i), r && (u.style.fontWeight = "bold"), n.appendChild(u), f = u.offsetWidth, n.removeChild(u), f }

            function tt(n, t, i) { try { return n() } catch (r) { return i && i(), t } }

            function it(n) { return n ? "Bearer " + n : "" }

            function rt(n) { var t = sj_ce("div"); return t.appendChild(n), t.innerHTML }

            function ut(n, t, i) { return n == i.substr(0, n.length) || t == i }

            function t(n) { var t = Math.abs(Math.floor(n)); return (t < 10 ? "0" : "") + t }

            function ft() {
                var n = new Date,
                    i = -n.getTimezoneOffset(),
                    r = i >= 0 ? "+" : "-";
                return n.getFullYear() + "-" + t(n.getMonth() + 1) + "-" + t(n.getDate()) + "T" + t(n.getHours()) + ":" + t(n.getMinutes()) + ":" + t(n.getSeconds()) + "." + t(n.getMilliseconds()) + r + t(i / 60) + ":" + t(i % 60)
            }

            function et(t, i, r, u, f) {
                var o, e;
                if (!t || !i || !r) return "";
                o = encodeURIComponent(i);
                e = { triggeringMode: "Explicit", intent: r };
                u && (e.entityId = u);
                f && (e.contentSource = f);
                var h = JSON.stringify(e),
                    c = encodeURIComponent(h),
                    s = n.formatString(t.bfbSearchUrl, [o, c, t.bfbfrmcde]);
                return _G && _G.IG ? s + "&cvid=" + encodeURIComponent(_G.IG) : s
            }

            function ot(n) { var t = "/search"; return n && n.substr(0, t.length) === t ? "/work" + n : n }
            var i = "textContent",
                u = "innerText",
                e = /%e([^%]+)%E/,
                o = /{([0-9]+)}/g;
            n.GetTextContent = s;
            n.SetTextContent = r;
            n.GetComputedStyle = h;
            n.GetQueryStringParam = c;
            n.SetSelectionRange = l;
            n.RewriteAttribsToProps = a;
            n.GetMouseCoords = v;
            n.MouseEnterLeave = y;
            n.getCursorPosition = p;
            n.RemoveClassName = w;
            n.AddClassName = b;
            n.formatString = k;
            n.TrimmedQueryFromSuggestions = d;
            n.isChildOf = f;
            n.SetTextContentWithLink = g;
            n.CalcWidth = nt;
            n.safeExecute = tt;
            n.getBearerTokenHeader = it;
            n.getDateWithTimezone = ft;
            n.buildBfbSearchUrl = et;
            n.getMSBWorkVerticalSearchUrl = ot
        })(t = n.Utils || (n.Utils = {}))
    })(t = n.AS || (n.AS = {}))
}(Bing || (Bing = {})),
function(n) {
    var t;
    (function(n) {
        var i = function() {
                function n() { this._eventRegistry = [] }
                return n.prototype.registerEvents = function(n) { this._eventRegistry.push(n) }, n.prototype.raiseEvent = function(n) { for (var i, r, f, u = [], t = 1; t < arguments.length; t++) u[t - 1] = arguments[t]; for (i = 0, r = this._eventRegistry; i < r.length; i++) f = r[i], f.raise(n, u) }, n.prototype.clearEvents = function() { this._eventRegistry = [] }, n
            }(),
            t;
        n.EventRegisterer = i;
        t = function() {
            function n(n) {
                this._eventParent = n;
                this.events = []
            }
            return n.prototype.add = function(n, t) { this.events[n] = t }, n.prototype.proxy = function(n) {
                for (var i, r, e, u = this, f = [], t = 1; t < arguments.length; t++) f[t - 1] = arguments[t];
                for (i = 0, r = f; i < r.length; i++) e = r[i],
                    function(t) {
                        u.events[t] = function() {
                            for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                            r.splice(0, 0, t);
                            n.apply(u._eventParent, r)
                        }
                    }(e)
            }, n.prototype.raise = function(n, t) {
                var i = this.events[n];
                i && i.apply(this._eventParent, t)
            }, n
        }();
        n.EventRegistration = t
    })(t = n.AS || (n.AS = {}))
}(Bing || (Bing = {}));
__extends = this && this.__extends || function() {
        var n = function(t, i) {
            return n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
        };
        return function(t, i) {
            function r() { this.constructor = t }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }(),
    function(n) {
        var t;
        (function(t) {
            var i, h, s;
            (function(n) {
                n.Web = "Web";
                n.BingAtWork = "BAW";
                n.Substrate = "SSUE";
                n.MicrosoftSearchInBing = "MSB";
                n.MicrosoftSearchInBingCached = "MSBC";
                n.MSBEngagment = "MSBE"
            })(i = t.DataSources || (t.DataSources = {})),
            function(n) {
                n.Bookmarks = "Bookmarks";
                n.People = "People"
            }(h = t.BingAtWorkDataTypes || (t.BingAtWorkDataTypes = {}));
            var r = AutoSuggest.Service.QueryParams,
                e = "ajax.unload",
                c = "msb:qf:rdy",
                u = "NONPROM",
                f = "PROM",
                o = [r.SuggestionPosition, r.Ghosting, ],
                l = o.concat([r.PartialQuery, r.SuggestionCount, r.SuggestionType, r.SkipValue, r.ConversationId, ]);
            t.searchBoxFocusEventId = "SearchBox_Focus";
            s = function(s) {
                function h(n, t, i, r, u, f, e, o, h, c, l) { var a = s.call(this) || this; return a.canvas = n, a._dataProvider = t, a._bingAtWorkDataProvider = i, a._substrateDataProvider = r, a._msbDataProvider = u, a._msbEngagementDataProvider = f, a._instrumentation = e, a._bingAtWorkSuggestionsParser = o, a._substrateSuggestionsParser = h, a._msbSuggestionsParser = c, a._bingAtWorkWebTelemetry = l, a.currentQuery = "", a.data = {}, a.ghostInstValue = 0, a._cursorPosition = 0, a._queryWithCurrentSuggestions = "", a._receivedAtLeastOnceValidResponse = !1, a._isDisposed = !1, a._requestSequence = -1, a._isBawPayloadAdded = !1, a._originalQuery = "", a._previousLocationCache = null, a._emptyWebSuggestionsResponse = "<span><\/span>", a.msbNtpKeyStrokeMaxRetry = 0, a.isMsbCachingBundleReady = !1, a }
                return __extends(h, s), h.prototype.init = function(n, i, r) {
                    var u = this,
                        e, s, c, l, f, a, v, o;
                    for (this._originalQuery = r.value, this.config = n, this._container = i, this.registerAjaxSerpUnloadEvent(), e = 0, s = h.ScopeExtensions; e < s.length; e++) c = s[e], c.init(this);
                    h.ScopeExtensions = [];
                    l = function(n, t, i, r, f) { return u.dataProviderCallbackFunc(n, t, i, r, f) };
                    this._dataProvider.init(n, n.u, l);
                    this.canvas.init(this, n, i, r);
                    f = new t.EventRegistration(this);
                    f.proxy(this.raiseEvent, 10, 12, 11);
                    this._bingAtWorkDataProvider && (a = function(n, t, i, r, f, e) { return u.onBingAtWorkResponseReceived(n, t, i, e) }, this._bingAtWorkDataProvider.init(n, this.config.bingAtWorkUrl, a));
                    this._substrateDataProvider && (v = function(n, t, i) { return u.onSubstrateResponseReceived(n, t, i) }, this._substrateDataProvider.init(n, "", v));
                    this._msbDataProvider && (o = function(n, t, i, r, f) { return u.onSearchBoxFocusWithRetry(1, i, function() { return u.onMsbResponseReceived(n, t, i, r, f) }) }, this._msbDataProvider.init(o));
                    this._msbEngagementDataProvider && (o = function(n, t) { return u.onSearchBoxFocusWithRetry(1, t, function() { return u.onMsbEngagementResponseReceived(n, t) }) }, this._msbEngagementDataProvider.init(o));
                    f.add(4, function(n, t, i) { u.raiseEvent(4, n, t, i) });
                    f.add(20, function(n, t) { t.className.indexOf("as_qb") != -1 && (u.raiseEvent(13, n.query + " ", !1), _w.Log && Log.Log && Log.Log("Select", "QueryBuilder", "Click", !1, "ImpressionGuid", u.data.Inst.IG)) });
                    f.add(25, function(n) {
                        u.raiseEvent(13, n.query + " ", !1);
                        _w.Log && Log.Log && Log.Log("Select", "MobileNextWordSuggestion", "Click", !1, "ImpressionGuid", u.data.Inst.IG)
                    });
                    this.canvas.registerEvents(f);
                    this.raiseEvent(6, this);
                    n.isEdgeNtp && this.isMsbEnabled(n.enabledDataSources) && (this.msbNtpKeyStrokeMaxRetry = n.msbKsTnsTryMax || 0, this.raiseEvent(21));
                    (n.msbqc || this.config.isNtpClientqfEnabled) && this.initMsbQfCaching()
                }, h.prototype.initMsbQfCaching = function() {
                    for (var r = this, t = !1, n = 0; n < this.config.enabledDataSources.length; ++n)
                        if (this.config.enabledDataSources[n] === i.MicrosoftSearchInBing) {
                            this.config.enabledDataSources.splice(n, null, i.MicrosoftSearchInBingCached);
                            t = !0;
                            break
                        }
                    t || this.config.enabledDataSources.push(i.MicrosoftSearchInBingCached);
                    sj_evt.bind(c, function() { return r.isMsbCachingBundleReady = !0 }, !0)
                }, h.prototype.isMsbEnabled = function(n) {
                    var r, t, u, f;
                    if (!n) return !1;
                    for (r = !1, t = 0, u = n; t < u.length; t++)
                        if (f = u[t], f === i.BingAtWork || f === i.MicrosoftSearchInBing) { r = !0; break }
                    return r
                }, h.prototype.raiseUpdateGhostedText = function(n, t, i) { this.raiseEvent(14, n, t, i) }, h.prototype.raiseUpdateTextAndRequery = function(n, t) { this.raiseEvent(13, n, t) }, h.prototype.raiseUpdateText = function(n) { this.raiseEvent(12, n) }, h.prototype.raiseTextChanged = function(n, t) { this.raiseEvent(18, n, t) }, h.prototype.onBfbNavigateCallback = function(n, t, i, r, e) {
                    if (this._bingAtWorkWebTelemetry) {
                        var o = { LogicalId: _G.LogicalId ? _G.LogicalId : "", N: r ? r.length : 0, QTYP: t, TT: i ? f : u };
                        this._bingAtWorkWebTelemetry.logClicked(n, o);
                        this._bingAtWorkWebTelemetry.log3SClickedEvent("QueryFormulation_Click", e)
                    }
                }, h.prototype.onHighConfidencePromoted = function(n) {
                    if (this._bingAtWorkWebTelemetry && this.config.enableQfHcLog) {
                        var t = this._bingAtWorkWebTelemetry.getLogicalId(),
                            i = { LogicalId: t, N: this.currentQuery.length, TT: n ? f : u };
                        this._bingAtWorkWebTelemetry.logShown("", i)
                    }
                }, h.prototype.onBfbSearchBoxAction = function(n) { this._bingAtWorkWebTelemetry && (n === t.searchBoxFocusEventId && this._bingAtWorkWebTelemetry.createAndUpdateConversationId && this._bingAtWorkWebTelemetry.createAndUpdateConversationId(), this._bingAtWorkWebTelemetry.log3SClickedEvent && this._bingAtWorkWebTelemetry.log3SClickedEvent(n)) }, h.prototype.onSubstrateNavigateCallback = function(n) { this._substrateDataProvider && this._substrateDataProvider.instrumentClick(n) }, h.prototype.setData = function(n) { this.data = n }, h.prototype.dataProviderCallbackFunc = function(r, u, f, e, o) {
                    var a, h, c, v, y, l, s, p;
                    (this._previousLocationCache = o || this._previousLocationCache, !this._isDisposed && (this.canvas.searchBoxHasFocus() || this.config.mnw)) && (t.CachedResponseUtils && t.CachedResponseUtils.checkCachedResponseAndLog && (r = t.CachedResponseUtils.checkCachedResponseAndLog(r, e)), this.raiseEvent(8), f == this.currentQuery) && r != null && (this.raiseEvent(9, f, u), this._queryWithCurrentSuggestions = f, this.canvas.render(r, this.currentQuery, u, i.Web), this._receivedAtLeastOnceValidResponse = !0, a = _ge("sa_msbblockheader"), h = _ge("sa_msbblockheaderwithtenantname"), h && a && (c = a, v = n.AS.BingAtWorkTemplateManager.getTenantDisplayName(), v && (y = h.innerHTML.replace("{0}", v), y.length <= 70 && (c = h, c.innerHTML = y)), c.style.display = "block", l = _ge("as_msbblkhdrnew"), s = n.AS.BingAtWorkTemplateManager.getTenantThemeColors(), s && s.length > 2 && (l === null || l === void 0 ? void 0 : l.setAttribute("style", "background-color : #" + s[1] + "; color : #" + s[2] + ";"))), this._instrumentation && (p = this.data && this.data.Inst ? this.data.Inst.IG : null, this._instrumentation.updateImpressionGuid(p, u)))
                }, h.prototype.onSubstrateResponseReceived = function(n, r, u) {
                    var f = this,
                        e, o;
                    !this._isDisposed && this.canvas.searchBoxHasFocus() && u == this.currentQuery && (this.config.handleDuplicateFetch && r < this._requestSequence || (e = sb_gt(), o = function(n, o) {
                        var s = t.BingAtWorkTemplateManager.generateHtml(f.config, n, u);
                        n.length && (f._instrumentation.instrumentResponseReceived(i.Substrate, r, e), f._bingAtWorkWebTelemetry && f._bingAtWorkWebTelemetry.logPerf("SSUESuggestions"));
                        f._instrumentation.instrumentDataSource(i.Substrate, n, r, o);
                        f.config.msbSusR && (f._substrateDataProvider.updateTraceId(o.TraceID), f.canvas.render(s, f.currentQuery, r, i.Substrate), s && (f._instrumentation.updateRendered(r), f._bingAtWorkWebTelemetry && (f._bingAtWorkWebTelemetry.setContext({ traceId: o.TraceID, tenantId: f.config.bawTenantId, uid: f.config.bawUserId }), n.forEach(function(n) { f._bingAtWorkWebTelemetry.logShown(n.id) }))))
                    }, this._substrateSuggestionsParser.parse(u, n, r, o)))
                }, h.prototype.onMsbEngagementResponseReceived = function(n, r) {
                    if (!this._isDisposed && this.canvas.searchBoxHasFocus() && r == this.currentQuery && (!this.config.handleDuplicateFetch || !(n < this._requestSequence))) {
                        var u = t.BingAtWorkTemplateManager.generateMSBEngagementHtml(r, this.config.msbengagementformcode);
                        u && this.canvas.render(u, this.currentQuery, n, i.MSBEngagment)
                    }
                }, h.prototype.onMsbResponseReceived = function(n, r, e, o, s) {
                    var h = this;
                    if (!this._isDisposed && this.canvas.searchBoxHasFocus() && e == this.currentQuery && (!this.config.handleDuplicateFetch || !(r < this._requestSequence))) {
                        var l = sb_gt(),
                            c = o ? i.MicrosoftSearchInBingCached : i.MicrosoftSearchInBing,
                            a = function(n, i, o) {
                                var a, s, v, p, w;
                                if (a = h.config.promoteUserHistoryForAADUser && c === "MSBC" ? t.BingAtWorkTemplateManager.generateMsbHtml(h.config, n, e, h.config.isMsbInline, o === null || o === void 0 ? void 0 : o.LogicalId) : h.config.webMsbQFRanking && c === "MSBC" ? t.BingAtWorkTemplateManager.generateMsbHtml(h.config, n, e, h.config.isMsbInline, o === null || o === void 0 ? void 0 : o.LogicalId) : t.BingAtWorkTemplateManager.generateHtml(h.config, n, e, h.config.isMsbInline), n.length && h._instrumentation.instrumentResponseReceived(c, r, l), h._instrumentation.instrumentDataSource(c, n, r, i), h.canvas.render(a, h.currentQuery, r, c), a && (h.config.isEdgeNtp || h._instrumentation.updateRendered(r), h._bingAtWorkWebTelemetry)) {
                                    h._bingAtWorkWebTelemetry.setContext({ traceId: i ? i.TraceID : "", tenantId: h.config.bawTenantId });
                                    var b = h._bingAtWorkWebTelemetry.getLogicalId(),
                                        k = JSON.stringify(n.map(function(n) { return n.stype })),
                                        y = { LogicalId: b, N: h.currentQuery.length, QTYP: k, TT: u };
                                    if (h.config.isLowConfidenceWeb)
                                        for (s = 0, v = n; s < v.length; s++)
                                            if (p = v[s], p.confidence == "High") { y.TT = f; break }
                                    w = JSON.stringify(n.map(function(n) { return n.id }));
                                    h._bingAtWorkWebTelemetry.logShown(w, y);
                                    h._bingAtWorkWebTelemetry.log3sRenderedEvent(o)
                                }
                            };
                        this._msbSuggestionsParser.parse(n, r, a, s)
                    }
                }, h.prototype.onBingAtWorkResponseReceived = function(n, r, u, f) {
                    var e = this,
                        o, s;
                    !this._isDisposed && this.canvas.searchBoxHasFocus() && u == this.currentQuery && (this.config.handleDuplicateFetch && r < this._requestSequence || (o = sb_gt(), this.config.isEdgeNtp && (this.raiseEvent(8), f == 401 && this.msbNtpKeyStrokeMaxRetry > 0 && (this.msbNtpKeyStrokeMaxRetry--, this.raiseEvent(21))), s = function(n, f) {
                        var s = t.BingAtWorkTemplateManager.generateHtml(e.config, n, u, e.config.isMsbInline);
                        n.length && (e.config.isEdgeNtp ? e.raiseEvent(9, u, r) : (e._instrumentation && e._instrumentation.instrumentResponseReceived(i.BingAtWork, r, o), e._bingAtWorkWebTelemetry && e._bingAtWorkWebTelemetry.logPerf("BAWSuggestions")));
                        e._instrumentation && e._instrumentation.instrumentDataSource(i.BingAtWork, n, r, f);
                        e.canvas.render(s, e.currentQuery, r, i.BingAtWork);
                        s && (!e.config.isEdgeNtp && e._instrumentation && e._instrumentation.updateRendered(r), e._bingAtWorkWebTelemetry && (e._bingAtWorkWebTelemetry.setContext({ traceId: f.TraceID, tenantId: e.config.bawTenantId }), n.forEach(function(n) { e._bingAtWorkWebTelemetry.logShown(n.id) })))
                    }, this._bingAtWorkSuggestionsParser.parse(u, n, r, s)))
                }, h.prototype.getAllSuggestionInstUrl = function(n, t) { for (var u, f, o = this.getInstrumentationKeys(t), i = [], r = 0, e = o; r < e.length; r++) u = e[r], f = this.getSuggestionInstValue(u, !0, n), f !== null && (i = i.concat(["&", u, "=", f])); return i.join("") }, h.prototype.getAllSuggestionInstObject = function(n, t) { for (var r, u, o = this.getInstrumentationKeys(t), f = {}, i = 0, e = o; i < e.length; i++) r = e[i], u = this.getSuggestionInstValue(r, !1, n), u !== null && (f[r] = u); return f }, h.prototype.getInstrumentationKeys = function(n) { return n ? l : o }, h.prototype.getSuggestionInstValue = function(n, t, i) {
                    i = i || this.canvas.selectedSuggestion;
                    switch (n) {
                        case r.SuggestionCount:
                            return this.canvas.currentSuggestionList.length + "-" + this._queryWithCurrentSuggestions.length;
                        case r.PartialQuery:
                            return t ? encodeURIComponent(this._queryWithCurrentSuggestions) : this._queryWithCurrentSuggestions;
                        case r.SuggestionPosition:
                            return this.config.mnw && i && i.ord > this.canvas.mnwSuggestionsCount && (i.ord = i.ord - this.canvas.mnwSuggestionsCount), i ? "" + i.ord : this.config.mnw && this.isMNWSuggestionSelected(this.canvas.clickedMNWSuggestionType) ? this.canvas.clickedMNWSuggestionPosition.toString() : "-1";
                        case r.SuggestionType:
                            return i ? i.src : this.config.mnw && this.isMNWSuggestionSelected(this.canvas.clickedMNWSuggestionType) ? this.canvas.clickedMNWSuggestionType : "n";
                        case r.SkipValue:
                            return i && i.sk ? i.sk : "";
                        case r.Ghosting:
                            return this.ghostInstValue == 0 ? null : this.ghostInstValue.toString();
                        case r.ConversationId:
                            return _G.IG;
                        default:
                            return null
                    }
                }, h.prototype.isMNWSuggestionSelected = function(n) { return n == "MNW" || n == "MNWU" || n == "MNWB" || n == "MNWT" || n == "MNWF" ? !0 : !1 }, h.prototype.setCursorPosition = function(n) { this._cursorPosition = n }, h.prototype.finalizeKeystroke = function() { this._instrumentation && this._requestSequence > -1 && this._instrumentation.finalizeKeystroke(this._requestSequence) }, h.prototype.fetch = function(n) {
                    this.finalizeKeystroke();
                    this._requestSequence++;
                    this._instrumentation && this._instrumentation.beginRequest(this._requestSequence);
                    this.fetchWeb(n, this._requestSequence, !1);
                    (this.config.msbqc || this.config.isNtpClientqfEnabled) && this.isMsbCachingBundleReady ? this.fetchMsb(n, this._requestSequence) : this.config.msbqc || this.fetchBingAtWork(n, this._requestSequence);
                    this.config.msbSusE && this.fetchSubstrate(n, this._requestSequence);
                    this._msbEngagementDataProvider && this._msbEngagementDataProvider.show(n, this._requestSequence)
                }, h.prototype.fetchZeroQF = function() { this.config.enableZeroQfWork && (this.finalizeKeystroke(), this._requestSequence++, this._instrumentation && this._instrumentation.beginRequest(this._requestSequence), this.fetchWeb("", this._requestSequence, !1), (this.config.msbqc || this.config.isNtpClientqfEnabled) && this.isMsbCachingBundleReady && this.fetchZeroQf(this._requestSequence)) }, h.prototype.fetchSubstrate = function(n, i) {
                    if (this._substrateDataProvider && this.currentQuery.length >= this.config.bawminqlen) {
                        var r = t.BingAtWorkTemplateManager.getTenantConfig(this.config);
                        r && r.displayName && this._substrateDataProvider.fetch(n, i, !1)
                    }
                }, h.prototype.fetchBingAtWork = function(n, i) {
                    if (this._bingAtWorkDataProvider && this.currentQuery.length >= this.config.bawminqlen) {
                        var r = t.BingAtWorkTemplateManager.getTenantConfig(this.config);
                        r && r.displayName ? (this.addBawPayload(n), this._bingAtWorkDataProvider.fetch(n, i, !1)) : this.config.isEdgeNtp && this.msbNtpKeyStrokeMaxRetry > 0 && (this.msbNtpKeyStrokeMaxRetry--, this.raiseEvent(21))
                    }
                }, h.prototype.fetchMsb = function(n, i) {
                    var r, u, e, f;
                    ((r = this._bingAtWorkWebTelemetry) === null || r === void 0 ? void 0 : r.isQfLoggerExists) && this._bingAtWorkWebTelemetry.isQfLoggerExists() && (e = this._bingAtWorkWebTelemetry.createQfLoggerContext());
                    this._msbDataProvider && this.currentQuery.length >= this.config.bawminqlen && (f = t.BingAtWorkTemplateManager.getTenantConfig(this.config), f && f.displayName && (((u = this._bingAtWorkWebTelemetry) === null || u === void 0 ? void 0 : u.isQfLoggerExists) && this._bingAtWorkWebTelemetry.isQfLoggerExists() ? this._msbDataProvider.fetch(n, i, e) : this._msbDataProvider.fetch(n, i)))
                }, h.prototype.fetchZeroQf = function(n) {
                    var t, i, r;
                    ((t = this._bingAtWorkWebTelemetry) === null || t === void 0 ? void 0 : t.isQfLoggerExists) && this._bingAtWorkWebTelemetry.isQfLoggerExists() && (r = this._bingAtWorkWebTelemetry.createQfLoggerContext());
                    this._msbDataProvider && this.currentQuery == "" && (((i = this._bingAtWorkWebTelemetry) === null || i === void 0 ? void 0 : i.isQfLoggerExists) && this._bingAtWorkWebTelemetry.isQfLoggerExists() ? this._msbDataProvider.fetchZeroQF(n, r) : this._msbDataProvider.fetchZeroQF(n))
                }, h.prototype.addBawPayload = function(n) {
                    var r = this.config.bawmax,
                        t, i;
                    this._isBawPayloadAdded ? this._bingAtWorkDataProvider.addPostValue("Query", n) : (t = ["Bookmark", "Qna", "Building"], this.config.msbSusR || t.push("Person"), i = { count: r, domains: t, query: n, conversationId: _G.IG }, this._bingAtWorkDataProvider.addBody(i))
                }, h.prototype.onSearchBoxFocusWithRetry = function(n, t, i, r) {
                    var u = this;
                    if (t !== this.currentQuery) { r && r(); return }
                    this.canvas.searchBoxHasFocus() ? i() : n < 5 && sb_st(function() { u.onSearchBoxFocusWithRetry(n + 1, t, i, r) }, 15)
                }, h.prototype.fetchWeb = function(n, t, u) {
                    var f, e;
                    this.config.msbnocons && this._receivedAtLeastOnceValidResponse ? this.canvas.render(this._emptyWebSuggestionsResponse, this.currentQuery, t, i.Web) : (this._dataProvider.addParam(r.CursorPosition, this._cursorPosition.toString()), this._container != null && this._container.parentNode != null && (f = this._container.parentNode.offsetWidth.toString(), this.config.cors ? this._dataProvider.addParam("contentWidth", f) : this._dataProvider.addHeader("X-Autosuggest-ContentWidth", f)), _ge("sidebar_search_experience") && this._dataProvider.addHeader("X-SIDEBAR-SEARCH", "true"), this._receivedAtLeastOnceValidResponse || this._dataProvider.addParam(r.Css, "1"), this.config.ezis && this._originalQuery === n && this._requestSequence == 0 && this._dataProvider.addParam(r.ZeroInputSerp, "1"), this.config.pc && this._dataProvider.addParam("pubcode", this.config.pc), this.config.footnote && this._dataProvider.addParam("footnote", "1"), this.config.adcached && this._adCachedQuery && this._adCachedImpressionGuid && (this._dataProvider.addParam("adq", this._adCachedQuery), this._dataProvider.addParam("adig", this._adCachedImpressionGuid)), this.config.pcov && (e = this.getPartnerCodeOverride(), e && this._dataProvider.addParam("pc", e)), this._msbDataProvider == null && this._bingAtWorkDataProvider == null && this._dataProvider.addParam("msbqf", "false"), this._dataProvider.fetch(n, t, !0), this.raiseEvent(7, this.currentQuery, t), u || sj_evt.fire("AS.RequestSent", this.currentQuery))
                }, h.prototype.registerAjaxSerpUnloadEvent = function() {
                    var n = this,
                        t = function(i) {
                            var r = i && i[1];
                            r && r.isInstantRequest || (n._isDisposed = !0, sj_evt.unbind(e, t), n.raiseEvent(17), n.clearEvents())
                        };
                    sj_evt.bind(e, t, !1)
                }, h.prototype.getPartnerCodeOverride = function() {
                    var n, t = (n = _ge(this.config.f)) === null || n === void 0 ? void 0 : n.querySelector("[name='pc']"),
                        r = t && t.value,
                        u = _d.location.href.indexOf("ntp.msn.com/edge/ntp") >= 0 || _d.location.href.indexOf("ntp.msn.cn/edge/ntp") >= 0,
                        i;
                    return !r && u && (i = "U531"), i
                }, h.prototype.setRawQuery = function(n) { this.canvas.updateRawQuery(n) }, h.prototype.setQuery = function(n) {
                    if (this.currentQuery = n, typeof n == "undefined" || n.length == 0 && !this.config.fetchOnEmpty) { this.fetchZeroQF(); return }
                    this.fetch(n)
                }, h.prototype.pretechQuery = function(n) { this.fetchWeb(n, 0, !0) }, h.prototype.setAdCachedQuery = function(n, t) {
                    this._adCachedQuery = n;
                    this._adCachedImpressionGuid = t
                }, h.ScopeExtensions = [], h
            }(t.EventRegisterer);
            t.WebCore = s
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {}));
__extends = this && this.__extends || function() {
        var n = function(t, i) {
            return n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
        };
        return function(t, i) {
            function r() { this.constructor = t }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }(),
    function(n) {
        var t;
        (function(n) {
            var u = AutoSuggest.Service.QueryParams,
                t = "sa_errorCnt",
                i = function() {
                    function n() {
                        this._callParams = {};
                        this._callHeaders = {};
                        this._callBody = {}
                    }
                    return n.prototype.fetchUrl = function() {}, n.prototype.init = function(n, t, i) {
                        this._config = n;
                        this._baseUrl = t;
                        this._callbackFunc = i
                    }, n.prototype.addParam = function(n, t) { this._callParams[n] = t }, n.prototype.addHeader = function(n, t) {
                        if (this._config.cors) throw "Custom headers are not allowed for cross domain calls";
                        this._callHeaders[n] = t
                    }, n.prototype.addPostValue = function(n, t) { this._callBody[n] = t }, n.prototype.addBody = function(n) { this._callBody = n }, n.prototype.fetch = function(n, t, i) {
                        this._requestSequence = t;
                        var r = this.getFinalFetchUrl(n);
                        this.fetchUrl(r, n, t, i)
                    }, n.prototype.getBaseUrl = function() { return this._baseUrl }, n.prototype.isPostCall = function() { return this._callBody && typeof this._callBody == "object" && Object.keys(this._callBody).length > 0 }, n.prototype.getFinalFetchUrl = function(n) {
                        var i = decodeURIComponent(this.getBaseUrl()) + encodeURIComponent(n),
                            t;
                        this.addParam(u.ConversationId, _G.IG);
                        this._config.adform && this.addParam("form", this._config.adform);
                        for (t in this._callParams) i += "&" + t + "=" + this._callParams[t];
                        return this._callParams = {}, i
                    }, n
                }(),
                r;
            n.DataProviderBase = i;
            r = function(i) {
                function r() { return i !== null && i.apply(this, arguments) || this }
                return __extends(r, i), r.prototype.fetchUrl = function(i, r, u, f) {
                    var o = this,
                        e = sj_gx(),
                        s, h;
                    e.open(this.isPostCall() ? "POST" : "GET", i, !0);
                    for (s in this._callHeaders) e.setRequestHeader(s, this._callHeaders[s]);
                    this._callHeaders = {};
                    e.onreadystatechange = function() {
                        var s, n, h, c, l;
                        if (e.readyState == 4) {
                            if (e.onreadystatechange = function() {}, s = void 0, n = e.status, n == 200 ? s = e.responseText : _w[t] && (n == 0 || (n / 100 | 0) == 4 || (n / 100 | 0) == 5) && (s = _w[t]), h = null, f && (!o._config.cors || o._config.rbhc) && e.getResponseHeader && (h = e.getResponseHeader("X-BingQF-BLIS")), o._config.instHeader && e.getResponseHeader && (c = e.getResponseHeader("X-BingQF-It"), c)) try {
                                l = JSON.parse(c);
                                l.Inst && sa_inst.setData(l)
                            } catch (a) {}
                            o._callbackFunc(s, u, r, i, h, n)
                        }
                    };
                    e.withCredentials !== undefined && (e.withCredentials = !0);
                    this.isPostCall() ? (h = n.Utils.safeExecute(function() { return JSON.stringify(o._callBody) }, ""), e.send(h)) : e.send()
                }, r
            }(i);
            n.DataProvider = r
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {}));
__extends = this && this.__extends || function() {
        var n = function(t, i) {
            return n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
        };
        return function(t, i) {
            function r() { this.constructor = t }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }(),
    function(n) {
        var t;
        (function(n) {
            var o = ["MD", "ADS"],
                s = ["CustomSearch"],
                h = ["previousSibling", "nextSibling"],
                c = ["lastChild", "firstChild"],
                r = "sa_hv",
                u = /(\s|^)sa_hv/g,
                i = "data-sugcont",
                l = "BAWC",
                a = "bw-cn",
                v = ",",
                y = "result",
                f = n.Utils,
                t = AutoSuggest.Service.SuggestionAttributes,
                e = [n.DataSources.BingAtWork, n.DataSources.Substrate, n.DataSources.MicrosoftSearchInBing, n.DataSources.MicrosoftSearchInBingCached],
                p = function(p) {
                    function w() { var n = p.call(this) || this; return n.currentSuggestionList = [], n._ie9orLower = sb_ie && !_w.atob, n._currentRequestSequence = -1, n._suggestionsQueue = {}, n._hasSwitched = !1, n }
                    return __extends(w, p), w.prototype.init = function(t, i, r, u) {
                        this.autoSuggestInstance = t;
                        this.config = i;
                        this.container = r;
                        this._searchBox = u;
                        this._asContainer = _ge(i.c || "sw_as");
                        var f = new n.EventRegistration(this);
                        f.add(17, this.clearEvents);
                        this.autoSuggestInstance.registerEvents(f)
                    }, w.prototype.lastElementBorderCurve = function() {
                        var u, n, i, t, r;
                        if (!this.config.isMobile && _ge("sa_baw") && (u = "sa_ul", _ge(u)) && (n = _ge(u), n.children && n.children.length && n.lastElementChild)) {
                            var f = "0 0 0 0",
                                s = n.lastElementChild,
                                e = document.querySelectorAll("#sw_as #sa_ul > div"),
                                o = e.length;
                            if (o !== 0) {
                                for (i = 0; i < o; i++)
                                    if (t = e[i], t.children && t.children.length) {
                                        if (t === s) {
                                            r = n.children.length;
                                            r > 1 && n.children[r - 2].tagName.toUpperCase() === "LI" && (n.children[r - 2].style.borderRadius = f);
                                            break
                                        }
                                        t.lastElementChild.style.borderRadius = f
                                    }
                                return
                            }
                        }
                    }, w.prototype.render = function(t, i, r, u) {
                        var a, l, y, o, tt, s, w, p, k, it, b, g, rt, d, c, et, nt, ut, ot, ft;
                        for (r > this._currentRequestSequence && (this._suggestionsQueue = {}, this._currentQuery = i, this._currentRequestSequence = r), this._suggestionsQueue[u] = { suggestions: t, rendered: !1, dataSource: u }, a = 0; a < this.config.enabledDataSources.length; a++) {
                            var h = [],
                                v = this.config.enabledDataSources,
                                f = this._suggestionsQueue[v[a]];
                            if (!f) { this.lastElementBorderCurve(); return }
                            if (f.rendered) { a == this.config.enabledDataSources.length - 1 && this.lastElementBorderCurve(); continue }
                            for (l = _ge("sa_baw"), y = null, e.indexOf(f.dataSource) != -1 && (l ? this.config.msbSusR && (y = this.config.bawmax * 2 - l.children.length) : this.config.promoteUserHistoryForAADUser && f.dataSource === "MSBC" ? (o = f.suggestions.split("|||"), f.suggestions = "", o && o.length == 3 && (o[0] != "" && (f.suggestions = '<div data-region="BAWC" id="bawuh" data-sugcont="1" role="none">' + o[0] + "<\/div>"), o[1] != "" && (f.suggestions += "|||" + ('<div data-region="BAWC" id="bawh" data-sugcont="1" role="none">' + o[1] + "<\/div>")), o[2] != "" && (f.suggestions += "|||" + ('<div data-region="BAWC" id="sa_baw" data-sugcont="1" role="none">' + o[2] + "<\/div>")))) : this.config.webMsbQFRanking && f.dataSource === "MSBC" ? (o = f.suggestions.split("|||"), f.suggestions = o[0] != "" ? '<div data-region="BAWC" id="bawh" data-sugcont="1" role="none">' + o[0] + "<\/div>|||" + ('<div data-region="BAWC" id="sa_baw" data-sugcont="1" role="none">' + o[1] + "<\/div>") : '<div data-region="BAWC" id="sa_baw" data-sugcont="1" role="none">' + o[1] + "<\/div>") : f.dataSource !== "MSBE" && (f.suggestions = '<div data-region="BAWC" id="sa_baw" data-sugcont="1" role="none">' + f.suggestions + "<\/div>")), f.dataSource === "MSBE" && (tt = n.BingAtWorkTemplateManager === null || n.BingAtWorkTemplateManager === void 0 ? void 0 : n.BingAtWorkTemplateManager.replaceLocalizedStringsInMSBEHtml(f.suggestions, i), tt && (f.suggestions = tt)), v[0] == f.dataSource && (this.container.innerHTML = "", this.currentSuggestionList = [], this._currentSuggestion = null, this.selectedSuggestion = null, this._hasSwitched = !1, this._currentMsbSuggestionsListSize = 0, this.containsNextWordInWebSuggestions = !1, this._searchBox.removeAttribute("aria-activedescendant")), s = void 0, w = this.container.getElementsByTagName("UL"), p = 0; p < w.length; p++)
                                if (w[p].className.indexOf("sa_drw") != -1) { s = w[p]; break }
                            if (l = _ge("sa_baw"), f.dataSource === "MSBE" || !l || (s = l), this.config.promoteUserHistoryForAADUser && f.dataSource === "MSBC" && f.suggestions.indexOf("|||") != -1)
                                for (b = f.suggestions.split("|||"), k = 0, it = b; k < it.length; k++) d = it[k], c = this.createDivFromAjaxResponse(d), this.insertAjaxResponseDivIntoDom(s ? s : this.container, c, y, f.dataSource), this.buildSuggestions(h);
                            else if (this.config.webMsbQFRanking && f.dataSource === "MSBC" && f.suggestions.indexOf("|||") != -1)
                                for (b = f.suggestions.split("|||"), g = 0, rt = b; g < rt.length; g++) d = rt[g], c = this.createDivFromAjaxResponse(d), this.insertAjaxResponseDivIntoDom(s ? s : this.container, c, y, f.dataSource), this.buildSuggestions(h);
                            else f.dataSource === "MSBE" && this.containsNextWordInWebSuggestions || (c = this.createDivFromAjaxResponse(f.suggestions), this.config.webMsbQFRanking && this.setLowConfidenceWebSignal(c), this.insertAjaxResponseDivIntoDom(s ? s : this.container, c, y, f.dataSource), this.buildSuggestions(h), f.dataSource === "Web" && (this.containsNextWordInWebSuggestions = this.containsNextWord));
                            if (f.rendered = !0, f.dataSource == n.DataSources.Web)
                                if (h.length > 0) this.config.bi && (et = { currentQuery: i, suggestionElements: h, requestSequence: r }, sj_evt.fire("AS.SuggestionsRendered", et));
                                else
                                    for (nt = 0, ut = v; nt < ut.length; nt++)
                                        if (ot = ut[nt], e.indexOf(ot) != -1) {
                                            ft = sj_ce("ul", this.config.slid, "sa_drw");
                                            ft.setAttribute("data-priority", "2");
                                            this.container.appendChild(ft);
                                            break
                                        }
                            h.length > 0 && (sj_evt.fire("AS.Canvas.Show"), this.raiseEvent(10, i, h, r, this.container, f.dataSource));
                            this.currentSuggestionList.length === 0 && (sj_evt.fire("AS.Canvas.Hide"), v[v.length - 1] == f.dataSource ? this.raiseEvent(11, i) : u === n.DataSources.Web && this.raiseEvent(24, i))
                        }
                        this.lastElementBorderCurve()
                    }, w.prototype.updateRawQuery = function(n) { this._rawQuery = n }, w.prototype.buildSuggestions = function(r) {
                        var p, h, u, o, tt, c, e, k, d, s, g;
                        if (this._suggestionsContainer = _ge(this.config.slid), this._nextWordRawQuerySize = null, this._largestSuggestion = 0, this._nextWordRawQuerySize = 1e4, this.containsNextWord = !1, this.mnwSuggestionsCount = 0, this._suggestionsContainer) {
                            var w = this._suggestionsContainer.getElementsByTagName("li"),
                                b = this.currentSuggestionList.length,
                                nt = w.length;
                            for (this.config.webMsbQFRanking && this._hasSwitched && (b = this._currentMsbSuggestionsListSize, this._currentMsbSuggestionsListSize += w.length - this.currentSuggestionList.length, nt = this._currentMsbSuggestionsListSize, this._hasSwitched = !1), h = b; h < nt; ++h)
                                if (u = w[h], o = u.parentNode, o.id === this.config.slid || o.getAttribute(i) || o.className === "sa_mnw_region") {
                                    if (u.className.indexOf("sa_hd") != -1) { u.hd = !0; continue }
                                    if (f.RewriteAttribsToProps(u, [t.Url, t.Query, t.Type, t.Autocomplete, t.RequestGuid, t.AdQuery]), u.stype)
                                        if (u.stype == "HS") e = u.firstElementChild, e && e.setAttribute("aria-hidden", "true");
                                        else if (u.stype != "PN") {
                                        for (tt = ((p = u.children) === null || p === void 0 ? void 0 : p.length) || 0, c = 0; c < tt; c++) e = u.children[c], e && e.setAttribute("aria-hidden", "true");
                                        k = "";
                                        o.getAttribute("data-region") == l && (d = u.getElementsByClassName(a), d.length > 0 && (k = [v, d[0].innerText, u.stype.toLowerCase(), y].join(" ")), this.config.enableMsbQFWorkRedirect && (u.url = n.Utils.getMSBWorkVerticalSearchUrl(u.url), u.setAttribute("url", u.url)));
                                        u.setAttribute("aria-label", u.innerText + k)
                                    }
                                    u.className.indexOf("pp_tile") != -1 && (u.panel = { ot: sb_gt() });
                                    u.stype && this.isSuggestionTypeInstrumentationDisabled(u.stype) || (u.addInst = !0);
                                    u.stype && this.isNavigationalSuggestion(u.stype) && (u.nav = !0);
                                    this.config.mnw && (u.stype == "MNW" || u.stype == "MNWU" || u.stype == "MNWB" || u.stype == "MNWT" || u.stype == "MNWF") && (this.mnwSuggestionsCount += 1);
                                    this.config.eNw && u.stype && u.stype.indexOf("NW") > -1 && (this.containsNextWord = !0, this.config.nwRz && (s = u.textContent || u.innerText, s && (g = u.query.replace(s, ""), s.length > this._largestSuggestion && g.length <= this._nextWordRawQuerySize && (this._largestSuggestion = s.length, this._nextWordRawQuerySize = g.length, this.largestNextWordElement = u))));
                                    this.currentSuggestionList.push(u.query);
                                    this.decorateSuggestion(u, ++b);
                                    r.push(u)
                                }
                        }
                    }, w.prototype.isSuggestionTypeInstrumentationDisabled = function(n) {
                        for (var r, t = 0, i = o; t < i.length; t++)
                            if (r = i[t], r === n) return !0;
                        return !1
                    }, w.prototype.isNavigationalSuggestion = function(n) {
                        for (var r, t = 0, i = s; t < i.length; t++)
                            if (r = i[t], r === n) return !0;
                        return !1
                    }, w.prototype.mouseOverSuggestionHandler = function(t, i) {
                        var u = n.Utils.GetMouseCoords(t);
                        i.url && this._previousMouseCoords && (this._previousMouseCoords.x != u.x || this._previousMouseCoords.y != u.y) ? (this._previousMouseCoords = u, i.className.indexOf(r) == -1 && this.highlightSuggestion(i)) : this._previousMouseCoords = this._previousMouseCoords || u
                    }, w.prototype.decorateSuggestion = function(t, i) {
                        var r = this,
                            u;
                        t.src = t.stype;
                        t.ord = i;
                        sj_be(t, "mousemove", function(n) { return r.mouseOverSuggestionHandler(n, t) });
                        sj_be(t, "mouseover", function(i) {
                            var u = n.Utils.MouseEnterLeave(function(n) { return r.mouseOverSuggestionHandler(n, t) }, t);
                            u(i)
                        });
                        sj_be(t, "mousedown", function(n) { return r.onMouseDownSuggestion(n, t) });
                        sj_be(t, "mouseup", function(n) {
                            r.cancelEventBubbling(n);
                            r.onMouseUpSuggestion(n, t)
                        });
                        u = window.navigator.msPointerEnabled ? "onMSPointerDown" : "ontouchstart";
                        u.toLowerCase() in _w && sj_be(t, u.substr(2), function(n) {
                            if (t.it = "m", n.pointerType) switch (n.pointerType) {
                                case n.MSPOINTER_TYPE_TOUCH:
                                    t.it = "t";
                                    break;
                                case n.MSPOINTER_TYPE_PEN:
                                    t.it = "p"
                            } else t.it = "t"
                        })
                    }, w.prototype.getTargetElement = function(n, t) {
                        var o = h[t],
                            f = c[t],
                            r = n ? n[o] : this._suggestionsContainer[f],
                            e, u;
                        return r ? (e = r.getAttribute(i), e && r.innerHTML ? (r = r[f], this.isSuggestionElement(r) || (r = this.getTargetElement(r, t))) : this.isSuggestionElement(r) || (r = this.getTargetElement(r, t))) : this._currentSuggestion && (u = this._currentSuggestion.parentNode, this.unHighlightSuggestionHandler(), u.getAttribute(i) && (r = this.getTargetElement(u, t))), r
                    }, w.prototype.isSuggestionElement = function(n) { return n.url && n.tagName === "LI" }, w.prototype.selectItem = function(n) {
                        var t = this.getTargetElement(this._currentSuggestion, n),
                            i;
                        t ? (this.setSearchValue(t), this.highlightSuggestion(t)) : this.clearSelectedSuggestion();
                        this.config.bi && (i = { currentQuery: this._currentQuery, suggestionElements: [t], requestSequence: this._currentRequestSequence }, sj_evt.fire("AS.SuggestionSelected", i))
                    }, w.prototype.isClickOnElementWithClass = function(n, t) { var i = n.target; return i && i.className.indexOf(t) > -1 }, w.prototype.cancelEventBubbling = function(n) {
                        n = sj_ev(n);
                        sj_sp(n)
                    }, w.prototype.highlightSuggestion = function(n) {
                        this.unHighlightSuggestionHandler();
                        this._currentSuggestion = n;
                        this.addHighlightClassName(this._currentSuggestion);
                        this._currentSuggestion != n && this.addHighlightClassName(n);
                        this._searchBox.setAttribute("aria-activedescendant", n.id);
                        n.setAttribute("aria-selected", "true")
                    }, w.prototype.unHighlightSuggestionHandler = function() { this._currentSuggestion && (this.removeHighlightClassName(this._currentSuggestion), this._currentSuggestion.removeAttribute("aria-selected"), this._currentSuggestion = null) }, w.prototype.clearSelectedSuggestion = function() {
                        this.setSearchValue();
                        this.unHighlightSuggestionHandler();
                        this._searchBox.removeAttribute("aria-activedescendant")
                    }, w.prototype.addHighlightClassName = function(n) { u.test(n.className) || (n.className += " " + r) }, w.prototype.removeHighlightClassName = function(n) { f.RemoveClassName(n, u) }, w.prototype.onMouseDownSuggestion = function(n, t) {
                        n = sj_ev(n);
                        var i = n.button;
                        i == 2 ? (this.cancelEventBubbling(n), sj_pd(n)) : t.url && (this.clickedSuggestion = t)
                    }, w.prototype.onMouseUpSuggestion = function(n, t) { this.clickedSuggestion && this.clickedSuggestion == t && (n = sj_ev(n), this.config.clickIco && this.isClickOnElementWithClass(n, "as_icon") ? this.raiseEvent(20, t, sj_et(n)) : (this.config.mnw && (t.stype == "MNW" || t.stype == "MNWU" || t.stype == "MNWB" || t.stype == "MNWT" || t.stype == "MNWF") ? (this._currentQuery = this._currentQuery.substring(0, this._currentQuery.lastIndexOf(" ") + 1).concat(this.clickedSuggestion.query), this.clickedSuggestion.query = this._currentQuery, this.clickedMNWSuggestionType = this.clickedSuggestion.stype, this.clickedMNWSuggestionPosition = this.config.mnwbtm ? 90 + this.clickedSuggestion.ord - (this.currentSuggestionList.length - this.mnwSuggestionsCount) : 90 + this.clickedSuggestion.ord, this.highlightSuggestion(this.clickedSuggestion), this.raiseEvent(25, this.clickedSuggestion)) : (this.setSearchValue(this.clickedSuggestion), sj_evt.fire("AS.Navigate", t, "mouseup"), this.raiseEvent(4, t, !1, this.config.linkTarget)), this.clickedSuggestion = null)) }, w.prototype.searchBoxHasFocus = function() { return typeof this._searchBox != "undefined" && typeof this._searchBox.getRootNode == "function" ? this._searchBox.getRootNode().activeElement === this._searchBox : _d.activeElement == this._searchBox }, w.prototype.setSearchValue = function(n) {
                        var t, i;
                        this.raiseEvent(19, this.selectedSuggestion, n);
                        this.selectedSuggestion = n;
                        t = this._currentQuery;
                        this.config.trimwsnr && this._rawQuery && this._rawQuery[this._rawQuery.length - 1] == " " && (t = t + " ");
                        i = "";
                        i = n ? n.rg ? this.autoSuggestInstance.currentQuery : n.query : t;
                        this.raiseEvent(12, i)
                    }, w.prototype.getCssHolder = function() {
                        var n = _ge("ajaxStyles"),
                            t, i;
                        return n || (n = sj_ce("div"), n.id = "ajaxStyles", t = _ge("srchfrm"), i = t != null && typeof t.getRootNode != "undefined" && t.getRootNode(), i && i != _d && t ? t.appendChild(n) : sj_b.insertBefore(n, sj_b.firstChild)), n
                    }, w.prototype.insertScriptIntoDom = function(n) {
                        var r = this,
                            t = sj_ce("script"),
                            i;
                        t.type = n.type;
                        i = n.getAttribute("src");
                        i ? t.setAttribute("src", i) : (t.setAttribute("data-bing-script", "1"), t.text = n.innerHTML);
                        n.parentNode.removeChild(n);
                        this._asContainer.appendChild(t);
                        sb_st(function() { r._asContainer.contains(t) && r._asContainer.removeChild(t) }, 1)
                    }, w.prototype.insertStyleIntoDom = function(t) { this._ie9orLower ? (sj_ic(t.innerHTML), t.parentNode.removeChild(t)) : (t.setAttribute("data-rms", "1"), this.autoSuggestInstance.config.bi && n.Utils.AddClassName(t, "bi_preserve"), this.getCssHolder().appendChild(t)) }, w.prototype.createDivFromAjaxResponse = function(n) { if (!n) return undefined; var t = sj_ce("div"); return t.innerHTML = n, t }, w.prototype.setLowConfidenceWebSignal = function(n) {
                        var t, i;
                        this.config.isLowConfidenceWeb = !1;
                        i = n === null || n === void 0 ? void 0 : n.childNodes[0];
                        ((t = i) === null || t === void 0 ? void 0 : t.hasAttribute("data-lowconfweb")) && (this.config.isLowConfidenceWeb = !0)
                    }, w.prototype.insertAjaxResponseDivIntoDom = function(n, t, i) {
                        var r, e;
                        if (t) {
                            for (var u = _d.createDocumentFragment(), o = t.childNodes, f = !1, s = !1; o.length;) {
                                r = o[0];
                                switch (r.tagName) {
                                    case "SCRIPT":
                                        this.insertScriptIntoDom(r);
                                        break;
                                    case "STYLE":
                                        this.insertStyleIntoDom(r);
                                        break;
                                    default:
                                        i === null || i > 0 ? (r.id === "bawh" && (f = !0), r.id === "bawuh" && (s = !0, this.handleDuplicatesForAADUserHistory(n, r)), u.appendChild(r), i != null && i--) : t.removeChild(r)
                                }
                            }
                            if (s ? (n.insertBefore(u, n.firstChild), this._hasSwitched = !0) : this.config.webMsbQFRanking && f && this.config.isLowConfidenceWeb ? (e = n.firstElementChild, e.id === "bawuh" ? (n.insertBefore(u, e.nextSibling), this._hasSwitched = !0) : (n.insertBefore(u, n.firstChild), this._hasSwitched = !0)) : n.appendChild(u), this._suggestionsQueue.Web && this._suggestionsQueue.Web.rendered && this._suggestionsQueue.MSBC && !this._suggestionsQueue.MSBC.rendered) this.autoSuggestInstance.onHighConfidencePromoted(f && this.config.isLowConfidenceWeb)
                        }
                    }, w.prototype.handleDuplicatesForAADUserHistory = function(n, t) {
                        var f, r, i, u;
                        if (n && t)
                            for (f = t.childNodes, r = n.childNodes, i = 0; i < r.length; i++)
                                for (u = 0; u < f.length; u++) r[i].getAttribute("query") == f[u].getAttribute("query") && (r[i].style.display = "none")
                    }, w
                }(n.EventRegisterer);
            n.Canvas = p
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {})),
    function(n) {
        var t;
        (function(n) {
            var i = "sa_nw",
                r = /(\s|^)sa_nw/g,
                t = 36,
                u = function() {
                    function u(t, i, r) {
                        this.config = t;
                        this._container = i;
                        this._canvas = r;
                        this._isRtl = n.Utils.GetComputedStyle(sj_b).direction == "rtl";
                        this._isRtl && this._container.setAttribute("dir", "rtl");
                        this._searchBoxElem = _ge(t.i);
                        this._outerContainer = sj_ce("div", "", "sa_as");
                        this._outerContainer.setAttribute("data-priority", "2");
                        this.hide();
                        this._container.appendChild(this._outerContainer)
                    }
                    return u.prototype.getSuggestionsDrawer = function() { return this._outerContainer }, u.prototype.show = function() { this._outerContainer.style.display = "block" }, u.prototype.hide = function() { this._outerContainer.style.display = "none" }, u.prototype.setMargin = function(n, i) {
                        var r = 0,
                            u = 0;
                        return this.config.searchBoxSpyglass && (r = this._isRtl ? t : t * -1, u = this._isRtl ? t * -1 : t), n = n + u, i = i + r, [n, i]
                    }, u.prototype.update = function() {
                        var h, t, f, u = n.Utils.GetComputedStyle(this._container.parentNode),
                            c, l, o;
                        if (this.config.eNw && this.config.nwRz && this._canvas.containsNextWord && this._canvas.largestNextWordElement) {
                            this.setMargins(0, 0);
                            c = n.Utils.GetComputedStyle(this._searchBoxElem);
                            sj_evt.fire("AS.Layout.NextWord.Show");
                            n.Utils.AddClassName(this._outerContainer, i);
                            l = this._outerContainer.style.display;
                            this.setCanvasVisibility("hidden", "block");
                            var e = this._canvas.largestNextWordElement,
                                a = n.Utils.GetTextContent(e),
                                s = this.getFirstChild(e),
                                v = e.query.replace(a, ""),
                                y = s && s.innerHTML.indexOf("<strong>") > -1,
                                p = n.Utils.CalcWidth(e, s && s.textContent || a, null, y),
                                w = n.Utils.CalcWidth(e, v, c.fontSize);
                            t = w + 4;
                            f = this._outerContainer.offsetWidth - t - p - this.getNwExtraSz(e) - 4;
                            h = this.setMargin(t, f);
                            t = h[0];
                            f = h[1];
                            this.setCanvasVisibility("", l);
                            this.config.IsBingPrivate && (o = _ge("as_foot"), t != 0 || f != 0 ? o != null && (o.style.display = "none") : o != null && (o.style.display = "list-item"))
                        } else sj_evt.fire("AS.Layout.NextWord.Hide"), n.Utils.RemoveClassName(this._outerContainer, r), this._isRtl ? (f = (this.toFloat(u.paddingRight) + this.toFloat(u.borderRightWidth)) * -1, t = this.toFloat(u.borderLeftWidth) - this.toFloat(u.paddingLeft)) : (t = (this.toFloat(u.paddingLeft) + this.toFloat(u.borderLeftWidth)) * -1, f = this.toFloat(u.borderRightWidth) - this.toFloat(u.paddingRight));
                        this.setMargins(t, f);
                        this._searchBoxElem != null && this._searchBoxElem.dir.length > 0 && (this._outerContainer.dir = this._searchBoxElem.dir)
                    }, u.prototype.toFloat = function(n) { var t = parseFloat(n); return isNaN(t) ? 0 : t }, u.prototype.setCanvasVisibility = function(n, t) {
                        this._outerContainer.style.visibility = n;
                        this._outerContainer.style.display = t
                    }, u.prototype.setMargins = function(n, t) {
                        this._container.style.marginLeft = n + "px";
                        this._container.style.marginRight = t + "px"
                    }, u.prototype.getFirstChild = function(n) { return n && n.childNodes && n.childNodes.length > 0 && n.childNodes[0] }, u.prototype.getNwExtraSz = function(t) {
                        var r = this.getFirstChild(t),
                            i;
                        return r ? (i = n.Utils.GetComputedStyle(r), this.toFloat(i.marginLeft) * 2 + this.toFloat(i.borderLeft) + this.toFloat(i.borderRight)) : 0
                    }, u
                }();
            n.Layout = u
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {}));
__extends = this && this.__extends || function() {
        var n = function(t, i) {
            return n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
        };
        return function(t, i) {
            function r() { this.constructor = t }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }(),
    function(n) {
        var t;
        (function(n) {
            function r(n) { return typeof n == "number" ? n : '"' + n.replace(/"/g, '\\"') + '"' }
            var u = "SRCHHPGUSR",
                f = "AS",
                e = 4,
                t = "AS.CurrentImpressionQuerySelected",
                o = "bawh",
                i = sb_ie && sb_de.style.opacity === undefined,
                s = function(s) {
                    function h(t, i) {
                        var r = s.call(this) || this,
                            u, f, e;
                        for (r.config = t, r.autosuggest = i, r._pollInterval = 0, r._pendingRequestCount = 0, r._bRequeryOnTextChange = !0, r._hiddenFields = [], r._lastQuery = "", r._lastRawQuery = "", r._trimRegex = new RegExp("^\\s*", "g"), r._removeSpacesRegex = new RegExp("\\s+", "g"), r._lastTextChanged = "", r._textChangeSequence = 0, r._isSearchBoxWebComponent = !1, r.searchBoxTouchAction = function() { r.config.handleDuplicateFetch && r._lastClickQuery == r.getCurrentQuery(!0) || (r.autosuggest.canvas.searchBoxHasFocus() || r.searchBox.focus(), r.onSearchBoxClick(), r._lastClickQuery = r.getCurrentQuery(!0)) }, r.searchBoxClickAction = function() {
                                r._lastClickQuery != r.getCurrentQuery(!0) && (r.searchBox.focus(), r.config.handleDuplicateFetch && (r._lastClickQuery = r.getCurrentQuery(!0)), r.onSearchBoxClick());
                                r.config.handleDuplicateFetch || (r._lastClickQuery = null)
                            }, r.onSubmit = function(n) {
                                var i, t;
                                if (r.cancelDefaultHandler(n), r.isEmptyQuery()) {
                                    i = _w._H && _w._H.sbeb;
                                    i && sb_st(function() { return r.hideDropDown(2) }, 5);
                                    return
                                }
                                if (sb_st(function() { return r.hideDropDown(2) }, 5), t = r.autosuggest.canvas.selectedSuggestion, sj_evt.fire("AS.Navigate", t, "submit"), t) r.navigate(t, !0, r.config.linkTarget);
                                else {
                                    r.submitForm(!0);
                                    r.autosuggest.onBfbSearchBoxAction("SearchDone")
                                }
                            }, r.onSearchBoxKeyDown = function(n) {
                                var e = n.keyCode,
                                    i, u, f, t;
                                switch (e) {
                                    case 27:
                                        r.isQueryGhosted() || (r.hideDropDown(1), r.cancelDefaultHandler(n));
                                        break;
                                    case 38:
                                        r._isLayoutVisible && (r.autosuggest.canvas.selectItem(0), r.cancelDefaultHandler(n));
                                        break;
                                    case 40:
                                        r._isLayoutVisible ? r.autosuggest.canvas.selectItem(1) : r.config.fetchOnDownArrowKey && r.fetchForCurrentQuery();
                                        break;
                                    case 9:
                                        if (!r.isQueryGhosted()) {
                                            if (n.shiftKey) { r.hideDropDownOnFocusChange(); break }
                                            if (i = function() {
                                                    var n = !_ge("fbpgdg");
                                                    n && (r.autosuggest.canvas.clearSelectedSuggestion(), r.hideDropDownOnFocusChange(), _ge("sb_form_q").focus())
                                                }, u = function() {
                                                    var t = _ge("sb_fdb");
                                                    if (t && t.style.display != "none") {
                                                        r.autosuggest.canvas.clearSelectedSuggestion();
                                                        t.focus();
                                                        t.onblur = i;
                                                        n.preventDefault();
                                                        return
                                                    }
                                                    r.hideDropDownOnFocusChange()
                                                }, r.config.removeSuggUrl) {
                                                if (f = r.autosuggest.canvas.selectedSuggestion, !f) { r.hideDropDownOnFocusChange(); break }
                                                if (t = r.getSelectedSuggestionRemoveButton(), t) {
                                                    t.tabIndex = 0;
                                                    t.focus();
                                                    t.onblur = i;
                                                    n.preventDefault();
                                                    break
                                                }
                                            }
                                            u()
                                        }
                                }
                            }, r.getSelectedSuggestionRemoveButton = function() {
                                var i = r.autosuggest.canvas.selectedSuggestion,
                                    n, t;
                                return i ? (n = i.firstElementChild, !n) ? null : n.classList && n.classList.contains("as_hr") ? n : (t = n.lastElementChild, t && t.classList && t.classList.contains("sa_rm")) ? t.firstElementChild : null : null
                            }, r.onSearchBoxClick = function() {
                                r._isLayoutVisible || r.fetchForCurrentQuery();
                                r.autosuggest.onBfbSearchBoxAction(n.searchBoxFocusEventId)
                            }, r.hideDropDownOnFocusChange = function(n) { r.hideDropDown(1, n) }, r.onTextInput = function() {
                                var n = r.searchBox.value;
                                r.triggerTextChangedEvent(n)
                            }, r.raiseEvent(5, t), u = 0, f = h.ScopeExtensions; u < f.length; u++) e = f[u], e.init(r);
                        return h.ScopeExtensions = [], r
                    }
                    return __extends(h, s), h.prototype.init = function(t) {
                        var e, u, f, r, o, s, i;
                        (this.config.globalId = t, this.config.slid = "sa_ul", this._bDisabled = this.isDisabled()) || (_w._H && _w._H.ajax ? (e = _ge("serpHeader"), e && (u = e.getElementsByTagName("form"), u && u.length > 0 && (this.searchForm = u[0], f = this.searchForm.getElementsByClassName("b_searchbox"), f && f.length > 0 && (this.searchBox = f[0])))) : (this.searchForm = _ge(this.config.f), this.searchBox = _ge(this.config.i)), this.searchBox && typeof this.searchBox.shadowRoot != "undefined" && (this._isSearchBoxWebComponent = !0), this.searchForm.form && (this.config.fc = this.searchForm.form.value), this._currentImpressionQuery = this.searchBox.value, r = this.getContainer(), sj_be(r, "mousedown", function(n) { return sj_sp(n) }), r.style.display = "block", this.layout = this._layout = new n.Layout(this.config, r, this.autosuggest.canvas), this.layout.update(), this.registerUIElement(r), this.registerUIElement(this.searchBox), o = _ge("sb_form_go"), o && this.registerUIElement(o), this._pollInterval = this.config.d, this._pollThrottlingEnabled = this.config.t, s = this._layout.getSuggestionsDrawer(), this.autosuggest.init(this.config, s, this.searchBox), this._lastQuery = this.getQueryToFetch(), this.searchBox.setAttribute("aria-autocomplete", "both"), this.searchBox.setAttribute("aria-controls", "sw_as"), this.searchForm.setAttribute("aria-live", "polite"), this.searchForm.setAttribute("aria-expanded", "false"), i = new n.EventRegistration(this), i.add(8, this.handleResponseReceived), i.add(11, this.startNoMatchTimeout), i.add(10, this.showDropDown), i.add(12, this.onUpdateText), i.add(13, this.onUpdateTextAndRequery), i.add(14, this.onUpdateGhostedText), i.add(4, this.navigate), i.add(17, this.dispose), this.autosuggest.registerEvents(i), this.bindEvents(sj_be, sj_evt.bind), this.pollForQueryChange(), this.raiseEvent(6, this))
                    }, h.prototype.setData = function(n) { this.autosuggest.setData(n) }, h.prototype.getCurrentImpressionQuery = function() { return this._currentImpressionQuery }, h.prototype.isDisabled = function() { return !this.config.pv && sj_cook.get(u, f) == "0" }, h.prototype.registerUIElement = function(n) {
                        sj_be(n, "touchend", sj_sp);
                        sj_be(n, "click", sj_sp)
                    }, h.prototype.addHiddenField = function(n, t) { var i = sj_ce("input"); return i.id = "sa_" + n, i.name = n, i.value = t, i.type = "hidden", this.searchForm.appendChild(i), this.config.sbt && this._hiddenFields.push(i), i }, h.prototype.cancelDefaultHandler = function(n) {
                        sj_sp(n);
                        sj_pd(n)
                    }, h.prototype.show = function() {
                        this.config.handleDuplicateFetch && this._lastClickQuery != this.getCurrentQuery(!0) && (this._lastClickQuery = this.getCurrentQuery(!0));
                        this.onSearchBoxClick()
                    }, h.prototype.getCursorPosition = function() { return n.Utils.getCursorPosition(this.searchBox, !0) }, h.prototype.makeAutoSuggestGPingCall = function(n) {
                        var t = _ge(n.replace("&", "")),
                            e;
                        if (t && document.images) {
                            var f = t.getAttribute("h"),
                                u = void 0,
                                i = { a: [], add: function(n, t) { this.a.push(r(n) + ":" + r(t)) }, get: function() { return this.a.length ? "&PR={" + this.a.join(",") + "}" : "" } };
                            i.add("i", this.autosuggest.canvas.clickedSuggestion ? t.it || "m" : "k");
                            this.autosuggest.ghostInstValue && i.add("ghc", this.autosuggest.ghostInstValue);
                            t.panel && i.add("et", sb_gt() - t.panel.ot);
                            u = this.autosuggest.data && this.autosuggest.data.Inst ? this.autosuggest.data.Inst.IG : null;
                            u && f && (e = new Image, e.src = this.getGPingUrl() + "IG=" + u + "&" + f + i.get())
                        }
                        return !0
                    }, h.prototype.getGPingUrl = function() { return _w && _w.location && _w.location.host && _w.location.host.indexOf("bing.com") > -1 && _G.gpUrl ? _G.gpUrl : "https://www.bing.com" + _G.gpUrl }, h.prototype.navigate = function(n, t, i) {
                        var u = this,
                            r;
                        sb_st(function() { return u.hideDropDown(2) }, 5);
                        this.makeAutoSuggestGPingCall(n.id);
                        r = n.query;
                        n.rg ? this.updateSearchBoxValue(this.getLastRequestedQuery()) : r != undefined && this.updateSearchBoxValue(r);
                        this.config.logClickOnSuggestion && (t ? typeof Log != "undefined" && Log && Log.Log && Log.Log("Autosuggest", "Suggestion", "EnterClick", !1) : typeof Log != "undefined" && Log && Log.Log && Log.Log("Autosuggest", "Suggestion", "MouseClick", !1));
                        this.config.sbt && n.addInst && !n.nav ? this.submitForm(t, n.url) : this.navigateToUrl(n, t, i)
                    }, h.prototype.submitForm = function(n, i) {
                        var e, c, r, u, s, h, f;
                        if (this.config.sbt) {
                            for (e = void 0; e = this._hiddenFields.shift();) this.searchForm.removeChild(e);
                            this._hiddenFields = []
                        }
                        if (n && (this.raiseEvent(15), this.config.bi && this._currentImpressionQuery === this.searchBox.value)) { sj_evt.fire(t); return }
                        this._instrumentationData = this.autosuggest.getAllSuggestionInstObject(null, n);
                        c = this.getCustomUrlParams(i);
                        r = _ge("sa_ghc");
                        r && r.parentNode.removeChild(r);
                        for (var l = 0, o = void 0, a = [this._instrumentationData, c]; o = a[l++];)
                            for (u in o) r = _ge("sa_" + u), s = o[u], r ? r.value = s : this.addHiddenField(u, s);
                        this.autosuggest.ghostInstValue = 0;
                        n || sj_evt.fire("onSearch", this.searchForm);
                        this.makeSearchboxGPingCall();
                        this.fireEvt ? (h = this.searchForm.getAttribute("action"), i && this.searchForm.setAttribute("action", i), this.searchForm.submit(), this.firePartnerEvents(n), h && this.searchForm.setAttribute("action", h)) : _w._H && _w._H.ajax && _w.sj_isAjax && n || this.searchForm.submit();
                        this.fireEvt && (this.autosuggest.canvas.selectedSuggestion = null, this.autosuggest.ghostInstValue = 0, f = _ge("sa_ghc"), !this._instrumentationData.ghc && f && f.parentNode.removeChild(f))
                    }, h.prototype.makeSearchboxGPingCall = function() {
                        var t = this.searchForm.getAttributeNode("onsubmit"),
                            n;
                        t && _w.si_T && (n = t.value.match(/si_T\('(.*)'\)/), n && n[1] && _w.si_T(n[1]))
                    }, h.prototype.isMsbSuggestion = function(n) { return n == "Bookmark" || n == "Building" || n == "Person" || n == "Qna" || n == "Acronym" || n == "External" || n == "File" || n == "EducationAssignment" || n == "Group" || n == "UserHistory" || n == "External" }, h.prototype.navigateToUrl = function(i, r, u) {
                        var e, s, h = ((e = i.parentElement) === null || e === void 0 ? void 0 : e.id) == o && this.config.isLowConfidenceWeb,
                            c = ((s = i.parentElement) === null || s === void 0 ? void 0 : s.getAttribute("data-region")) == "BAWC",
                            f;
                        if (i.stype == n.BingAtWorkDataTypes.Bookmarks) this.autosuggest.onBfbNavigateCallback(i.id, i.stype, h, i.query, i.getAttribute("logicalId"));
                        else if (i.stype == n.BingAtWorkDataTypes.People)
                            if (this.config.msbSusR) this.autosuggest.onSubstrateNavigateCallback(i.id);
                            else this.autosuggest.onBfbNavigateCallback(i.id, i.stype, h, i.query, i.getAttribute("logicalId"));
                        else if (this.isMsbSuggestion(i.stype)) this.autosuggest.onBfbNavigateCallback(i.id, i.stype, h, i.query, i.getAttribute("logicalId"));
                        if (c && i.getAttribute("menu") === "webSerpMenu") this.autosuggest.onBfbSearchBoxAction("Search_Web_Qf_Click");
                        if (this.searchForm.onsubmit) this.searchForm.onsubmit(null);
                        if (this.firePartnerEvents(r), this.config.bi && this._currentImpressionQuery === i.query) { sj_evt.fire(t); return }
                        f = i.url + (i.addInst ? this.autosuggest.getAllSuggestionInstUrl() : "");
                        f = this.addExtraQueryStrings(f);
                        i.nav && !n.Utils.GetQueryStringParam(f, "form") && (f = this.addFormCode(f));
                        u ? _w.open(f, u) : typeof sj_lc != "undefined" ? sj_lc(f) : _w.location.href = f
                    }, h.prototype.firePartnerEvents = function(n) {!n && this.fireEvt && this.fireEvt(this.searchForm, "ASSugClicked") }, h.prototype.getCustomUrlParams = function(n) {
                        var r = {},
                            t;
                        if (n)
                            for (var i = void 0, f = /\+/g, e = /([^&=]+)=?([^&]*)/g, u = function(n) { return decodeURIComponent(n.replace(f, " ")) }, o = n.substring(n.indexOf("?") + 1); i = e.exec(o);) t = u(i[1]).toLowerCase(), t !== "q" && t !== "form" && (r[t] = u(i[2]));
                        return r
                    }, h.prototype.bindEvents = function(n, t) {
                        var i = this,
                            r;
                        n(sj_b, "click", this.hideDropDownOnFocusChange);
                        n(sj_b, "touchend", this.hideDropDownOnFocusChange);
                        n(this.searchForm, "submit", this.onSubmit);
                        n(this.searchBox, "keydown", this.onSearchBoxKeyDown);
                        "ontouchend" in _w && n(this.searchBox, "touchend", this.searchBoxTouchAction);
                        n(this.searchBox, "click", this.searchBoxClickAction);
                        this.config.expandOnFocus && n(this.searchBox, "focus", this.searchBoxClickAction);
                        this.fireEvt && n(_w, "blur", this.hideDropDownOnFocusChange);
                        r = function() {
                            t("focusChange", function(n) { return i.focusChange(n) });
                            t("hideDrawer", function() { return i.hideDropDown(3) })
                        };
                        r();
                        this.config.bi && t("ajax.load", function(n) {
                            var t = n && n[1];
                            t && t.isInstantRequest && (i._currentImpressionQuery = t.query || i.searchBox.value, i.pollForQueryChange(), r())
                        });
                        "oninput" in this.searchBox && n(this.searchBox, "input", this.onTextInput)
                    }, h.prototype.fetchForCurrentQuery = function() {
                        (this._noResultsTimeout && sb_ct(this._noResultsTimeout), this._bDisabled) || (this._lastQuery = null, this.fetchSuggestions(this.getQueryToFetch(), this.getCurrentQuery(!0)))
                    }, h.prototype.showDropDown = function() {
                        if (this._layout.update(), this.fireEvt) {
                            var n = this.autosuggest.canvas.containsNextWord ? "1" : "0";
                            this.searchForm.setAttribute("SuggMode", n);
                            this.fireEvt(this.searchForm, "autosuggestRendered")
                        }
                        this._isLayoutVisible || (sj_evt.fire("focusChange", this.searchBox), this._layout.show(), this._isLayoutVisible = !0, sb_i6 && sj_evt.fire("autosuggestShown", this.searchBox), sj_evt.fire("onPopTR"), this.fireEvt && this.fireEvt(this.searchForm, "autosuggestShown"), this.searchForm.setAttribute("aria-expanded", "true"), this.searchForm.setAttribute("aria-owns", "sw_as"))
                    }, h.prototype.hideDropDown = function(n, t) {
                        n != 0 && (this._lastClickQuery = null);
                        this._isLayoutVisible && (this.searchForm.setAttribute("aria-expanded", "false"), this._layout.hide(), this._isLayoutVisible = !1, this.searchForm.removeAttribute("aria-owns"), n != 0 && (this._lastQuery = this.getQueryToFetch()), this.raiseEvent(16), this.autosuggest.finalizeKeystroke(), t && this.config.hdm && sj_pd(t), _w._H && sj_evt.fire("ASHide"), this.autosuggest.setQuery(undefined));
                        sj_evt.fire("autosuggestHide", this.searchBox, n);
                        this.fireEvt && (this.searchForm.removeAttribute("SuggMode"), this.fireEvt(this.searchForm, "autosuggestHide"))
                    }, h.prototype.focusChange = function(n) { n[1] !== this.searchBox && this.hideDropDown(1) }, h.prototype.startNoMatchTimeout = function() {
                        var n = this;
                        this._noResultsTimeout = sb_st(function() { return n.hideDropDown(0) }, 50)
                    }, h.prototype.onUpdateText = function(n) {
                        this.getCurrentQuery() != n && (this._bRequeryOnTextChange = !1);
                        this.updateSearchBoxValue(n)
                    }, h.prototype.updateSearchBoxValue = function(t, r) {
                        var u = r ? t + r : t,
                            f;
                        this._autoCompletedPrefixLength = r ? t.length : null;
                        u !== null && (this.searchBox.value = u, i || this.searchBox.setAttribute("value", u), f = u.length, f && this.getCurrentQuery() != t && n.Utils.SetSelectionRange(this.searchBox, f, f), t && t != this._lastTextChanged && this.triggerTextChangedEvent(t))
                    }, h.prototype.onUpdateTextAndRequery = function(t, i) {
                        if (this._bRequeryOnTextChange = !0, this.updateSearchBoxValue(t), !i) {
                            var r = t.length;
                            this.searchBox.focus();
                            n.Utils.SetSelectionRange(this.searchBox, r, r)
                        }
                    }, h.prototype.onUpdateGhostedText = function(n, t, i) {
                        this._bRequeryOnTextChange = i === undefined ? !0 : i;
                        this.updateSearchBoxValue(n, t)
                    }, h.prototype.triggerTextChangedEvent = function(n) {
                        this._lastTextChanged = n;
                        this.autosuggest.raiseTextChanged(n, ++this._textChangeSequence)
                    }, h.prototype.pollForQueryChange = function() {
                        var u = this,
                            n, t, r;
                        this._bDisabled || (n = this.getCurrentQuery(!0), this._lastRawQuery != n && (this.autosuggest.setRawQuery(n), this._lastRawQuery = n, this.config.bi && sj_evt.fire("AS.RawQueryChanged"), t = this.getQueryToFetch(), this._lastQuery == t && this._bRequeryOnTextChange || i || (this.searchBox.setAttribute("value", t), this._isSearchBoxWebComponent && (this.searchBox.value = n)), t != this._lastQuery && (this._bRequeryOnTextChange && !this.suppressRequestForQuery ? this.fetchSuggestions(t, n) : this.suppressRequestForQuery && this.config.eNw && this.config.nwRz && this._bRequeryOnTextChange ? this.hideDropDown(4) : this._bRequeryOnTextChange || (this._bRequeryOnTextChange = !0), this._lastQuery = t)), r = this._pollInterval, this._pollThrottlingEnabled && (r *= 1 << Math.max(0, this._pendingRequestCount - e + 1) / 2), sb_st(function() { return u.pollForQueryChange() }, r))
                    }, h.prototype.fetchSuggestions = function(n, t) {
                        this._noResultsTimeout && sb_ct(this._noResultsTimeout);
                        this.autosuggest.setCursorPosition(this.adjustCursorPositionForModifiedQuery(t, n));
                        this.autosuggest.setQuery(n);
                        n.length != 0 || this.config.fetchOnEmpty || this.config.enableZeroQfWork || this.hideDropDown(0);
                        this._pendingRequestCount++
                    }, h.prototype.adjustCursorPositionForModifiedQuery = function(n, t) {
                        var r = this.getCursorPosition(),
                            i;
                        if (t !== n && t != "")
                            for (i = 0; i < n.length && n[i] != t[0]; i++) r--;
                        return r
                    }, h.prototype.handleResponseReceived = function() { this._pendingRequestCount-- }, h.prototype.getQueryToFetch = function() { var t = this.getCurrentQuery(); return this.config.trimwsnr && (t = n.Utils.TrimmedQueryFromSuggestions(this.autosuggest.canvas.currentSuggestionList, t)), t }, h.prototype.isQueryGhosted = function() { return !!this._autoCompletedPrefixLength }, h.prototype.getCurrentQuery = function(n) { var t = this._autoCompletedPrefixLength ? this.searchBox.value.substr(0, this._autoCompletedPrefixLength) : this.searchBox.value; return n ? t : t.replace(this._trimRegex, "").replace(this._removeSpacesRegex, " ").toLowerCase() }, h.prototype.getPartnerCode = function(n) {
                        var u = "",
                            i = n.indexOf("pc"),
                            f, t, e, r;
                        return i >= 0 && (f = n.indexOf("&", i), r = f >= 0 ? n.substr(i, f - i) : n.substr(i), u += "&" + r), t = n.indexOf("pt"), t >= 0 && (e = n.indexOf("&", t), r = e >= 0 ? n.substr(t, e - t) : n.substr(t), u += "&" + r), u
                    }, h.prototype.checkMonitr = function(n) { var t = n.indexOf("form=monitr"); return t >= 0 ? "&" + n.substr(t, 11) : "" }, h.prototype.getPubcode = function(n) { if (n.indexOf("pubcode=null") !== -1 && n.indexOf("pt=opentetris") !== -1) return "&pubcode=null"; var t = n.indexOf("pubcode"); return "&pubcode=" + n.substr(t + 8, 32) }, h.prototype.addExtraQueryStrings = function(n) { return this.config.pv ? n + this.getPubcode(document.URL) + "&pubexp=1&msbqf=false" + this.getPartnerCode(document.URL) + this.checkMonitr(document.URL) : n }, h.prototype.addFormCode = function(n) { return n + "&form=" + this.searchForm.form.defaultValue }, h.prototype.getLastRequestedQuery = function() { return this._lastQuery }, h.prototype.notifyDeleteHistory = function(n) { this.raiseEvent(22, n) }, h.prototype.dispose = function() {
                        this.clearEvents();
                        this.bindEvents(sj_ue, sj_evt.unbind);
                        sb_ct(this._noResultsTimeout)
                    }, h.prototype.isEmptyQuery = function() { var n = _ge("sb_form_q"); return n && !n.value }, h.prototype.getContainer = function() { return _ge(this.config.c || "sw_as") }, h.ScopeExtensions = [], h
                }(n.EventRegisterer);
            n.SearchForm = s
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {})),
    function(n) {
        var t;
        (function(n) {
            var t = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                i = function() {
                    function i() {
                        this._imeInProgress = !1;
                        this._rerankqfEnabled = !1;
                        this._ghostMsb = !1
                    }
                    return i.prototype.init = function(t) {
                        if (t.config.eHC) {
                            var i = new n.EventRegistration(this);
                            i.add(6, this.onSearchFormInitialized);
                            t.registerEvents(i)
                        }
                        this._instantEnabled = !!t.config.bi;
                        this._rerankqfEnabled = t.config.webMsbQFRanking
                    }, i.prototype.onSearchFormInitialized = function(i) {
                        var r = this,
                            u = i.autosuggest,
                            e;
                        u.ghostInstValue = 0;
                        var c = function() { return u.ghostInstValue = 2 },
                            l = function() { u.ghostInstValue == 0 && (u.ghostInstValue = 1) },
                            f = i.searchBox,
                            s = function(t, i) { return n.Utils.SetSelectionRange(f, t, i) };
                        this.isCursorPositionAtTheEnd = function() { return i.getCursorPosition() == r.getPartialQuery().length };
                        this.getSearchBoxValue = function() { return f.value };
                        this.getPartialQuery = function() { return i.getCurrentQuery(!0) };
                        this.getGhostedQuery = function() { return i.isQueryGhosted() ? r.getSearchBoxValue() : null };
                        this.getCurrentImpressionQuery = i.getCurrentImpressionQuery;
                        this.resetGhosting = function(n, t, i) {
                            if (u.raiseUpdateGhostedText(null, null, n), t) {
                                var f = r.getSearchBoxValue().length;
                                s(f, f)
                            }
                            i && c()
                        };
                        this.removeGhosting = function(n) { n ? u.raiseUpdateTextAndRequery(r.getPartialQuery()) : u.raiseUpdateText(r.getPartialQuery()) };
                        this.setGhostValue = function(n, t) { t ? (u.raiseUpdateGhostedText(n, t), s(n.length, (n + t).length), l()) : u.raiseUpdateTextAndRequery(n) };
                        var a = function(n) { return r.handleSearchBoxKeyPress(n) },
                            v = function(n) { return r.handleSearchBoxKeyDown(n) },
                            y = function() { return r.handleSearchBoxMouseDown() },
                            p = function() { return r.removeGhosting(!1) },
                            w = function() { return r.handleCompositionStart() },
                            b = function() { return function() { return r.handleCompositionEnd() } },
                            k = function(n) { return r.handleSearchBoxKeyUp(n) },
                            h = function(n, i) {
                                n(f, "keypress", a);
                                n(f, "keydown", v);
                                n(f, "mousedown", y);
                                i("onFeedbackStarting", p);
                                t ? (n(f, "compositionstart", w), n(f, "compositionend", b)) : n(f, "keyup", k)
                            },
                            o = new n.EventRegistration(this);
                        o.add(10, this.handleSuggestionsRendered);
                        o.add(17, function() { return h(sj_ue, sj_evt.unbind) });
                        u.registerEvents(o);
                        e = new n.EventRegistration(this);
                        e.add(15, function() { r.getGhostedQuery() && r.resetGhosting(!1, !0, !0) });
                        e.add(16, this.onDropDownHidden);
                        i.registerEvents(e);
                        h(sj_be, sj_evt.bind)
                    }, i.prototype.onDropDownHidden = function() {
                        var n = this.getGhostedQuery();
                        n && (this._instantEnabled ? this.getCurrentImpressionQuery() === n && this.resetGhosting(!1, !0, !0) : this.removeGhosting(!1))
                    }, i.prototype.handleCompositionStart = function() { this._imeInProgress = !0 }, i.prototype.handleCompositionEnd = function() { this._imeInProgress && (this._imeInProgress = !1, this.resetGhosting(!0, !1, !1), this._pendingGhostFirstSuggestion && sb_st(this._pendingGhostFirstSuggestion, 0)) }, i.prototype.ghostFirstSuggestion = function(n, t, i) {
                        var r, f, e, u, o;
                        if ((this._pendingGhostFirstSuggestion = null, n && t == n.toLowerCase()) && this._lastKeyDown != 46 && this._lastKeyDown != 8 && this.isCursorPositionAtTheEnd()) {
                            for (f = 0, e = i; f < e.length; f++)
                                if (u = e[f], this._rerankqfEnabled && this._ghostMsb) { r = u.query; break } else if (u.hc && u.type !== "ADS") { r = u.query; break }
                            r && r.indexOf(t) == 0 && r.length > n.length ? (o = r.slice(n.length), this.setGhostValue(n, o)) : this.getGhostedQuery() && this.removeGhosting(!0)
                        }
                    }, i.prototype.handleSuggestionsRendered = function(t, i, r, u, f) {
                        var a = this,
                            o, s, e = (s = (o = u === null || u === void 0 ? void 0 : u.children) === null || o === void 0 ? void 0 : o.namedItem("sa_ul")) === null || s === void 0 ? void 0 : s.children,
                            h, c, l;
                        (e === null || e === void 0 ? void 0 : e.length) > 0 && (h = e[0].id === "bawh" ? e[0] : null);
                        this._ghostMsb = !1;
                        this._rerankqfEnabled && f == n.DataSources.MicrosoftSearchInBingCached && h && (this.getGhostedQuery() && this.removeGhosting(!0), h.childNodes.length == 1 && (this._ghostMsb = !0, c = this.getPartialQuery(), this._imeInProgress ? this._pendingGhostFirstSuggestion = function() { return a.ghostFirstSuggestion(c, t, i) } : this.ghostFirstSuggestion(c, t, i)));
                        f == n.DataSources.Web && (l = this.getPartialQuery(), this._imeInProgress ? this._pendingGhostFirstSuggestion = function() { return a.ghostFirstSuggestion(l, t, i) } : this.ghostFirstSuggestion(l, t, i))
                    }, i.prototype.handleSearchBoxKeyDown = function(n) {
                        var r = this,
                            i = this._lastKeyDown = n.keyCode,
                            u;
                        if (n.ctrlKey && i == 90) { sj_pd(n); return }(t || this._imeInProgress || i != 229 || this.handleCompositionStart(), !this._imeInProgress && this.getGhostedQuery() && i != 38 && i != 40) && (i == 13 ? this.resetGhosting(!1, !0, !0) : i == 37 || i == 33 || n.shiftKey && i == 39 ? this.resetGhosting(!1, !1, !0) : i == 35 || i == 34 || i == 39 || n.ctrlKey && i == 65 ? this.resetGhosting(!0, !1, !0) : i == 9 ? (this.resetGhosting(!0, !0, !0), sj_pd(n)) : i == 27 || n.ctrlKey && i == 8 ? (this.removeGhosting(!0), sj_pd(n)) : i == 46 || i == 8 || n.ctrlKey && i == 88 ? this.resetGhosting(!0, !1, !1) : n.ctrlKey && i == 86 || n.shiftKey && i == 45 ? this.removeGhosting(!0) : (u = this.getSearchBoxValue().toLowerCase(), sb_st(function() { u != r.getSearchBoxValue().toLowerCase() && r.resetGhosting(!0, !1, !1) }, 0)))
                    }, i.prototype.handleSearchBoxKeyUp = function(n) {
                        var t = n.keyCode;
                        this._imeInProgress && (t == 13 || t == 27 || t == 8 || t == 37 || t == 39) && this.handleCompositionEnd()
                    }, i.prototype.handleSearchBoxKeyPress = function(n) {
                        var t = this.getGhostedQuery();
                        if (t) {
                            var i = n.char ? n.char : String.fromCharCode(n.charCode ? n.charCode : n.keyCode),
                                r = this.getPartialQuery(),
                                u = t.slice(r.length);
                            u.charAt(0) == i.toLowerCase() && (this.setGhostValue(r + i, u.slice(1)), sj_pd(n))
                        }
                    }, i.prototype.handleSearchBoxMouseDown = function() { this.getGhostedQuery() && this.resetGhosting(!1, !1, !0) }, i
                }();
            n.SearchForm.ScopeExtensions.push(new i)
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {})),
    function(n) {
        var t;
        (function(n) {
            var t = function() {
                    function t() {}
                    return t.prototype.getCallbacks = function() { var t = new n.EventRegistration(this); return t.add(11, this.onNoResults), t.add(10, this.onSuggestionsRendered), t }, t.prototype.set = function(n) {
                        this._data = n;
                        this._data.currentQuery.length <= 1 && (this._lastQueryWithNoResults = null)
                    }, t.prototype.match = function() { return this._lastQueryWithNoResults && this._data.currentQuery.substr(0, this._lastQueryWithNoResults.length) == this._lastQueryWithNoResults }, t.prototype.onNoResults = function(n) { this._lastQueryWithNoResults = n }, t.prototype.onSuggestionsRendered = function(t, i, r, u, f) { f == n.DataSources.Web && (this._lastQueryWithNoResults = null) }, t
                }(),
                i = function() {
                    function t(n) {
                        this._searchFormInstance = n;
                        this._exceededNextWordLimit = !1
                    }
                    return t.prototype.getCallbacks = function() { return new n.EventRegistration(this) }, t.prototype.set = function() {
                        var t = this._searchFormInstance.getCurrentQuery(),
                            i = this._searchFormInstance.searchBox.offsetWidth,
                            r = n.Utils.CalcWidth(this._searchFormInstance.searchForm, t),
                            u = r / i;
                        this._exceededNextWordLimit = u > .7
                    }, t.prototype.match = function() { return this._exceededNextWordLimit }, t
                }(),
                r = function() {
                    function r() { this._rules = [] }
                    return r.prototype.init = function(t) {
                        var i = new n.EventRegistration(this);
                        i.add(6, this.onSearchFormInitialized);
                        t.registerEvents(i)
                    }, r.prototype.onSearchFormInitialized = function(n) {
                        this._searchFormInstance = n;
                        this.addRules();
                        this.addCallbacks()
                    }, r.prototype.addRules = function() {
                        var n = this._searchFormInstance.config;
                        n.eNw && n.nwLim && this._rules.push(new i(this._searchFormInstance));
                        n.suppnores && this._rules.push(new t(n))
                    }, r.prototype.addCallbacks = function() {
                        var o = this._rules.length,
                            i, r, t, u, e, f;
                        if (o)
                            for (i = this._searchFormInstance.autosuggest, r = new n.EventRegistration(this), r.add(18, this.onTextChanged), i.registerEvents(r), t = 0, u = this._rules; t < u.length; t++) e = u[t], f = e.getCallbacks(), f && i.registerEvents(f)
                    }, r.prototype.updateDataForRules = function() { var n, t, i; for (this._data = { currentQuery: this._searchFormInstance.getCurrentQuery() }, n = 0, t = this._rules; n < t.length; n++) i = t[n], i.set(this._data) }, r.prototype.getSuppressRequestForQuery = function() {
                        var n, t, i;
                        if (this._data.currentQuery.length > 1)
                            for (n = 0, t = this._rules; n < t.length; n++)
                                if (i = t[n], i.match()) return 1;
                        return 0
                    }, r.prototype.onTextChanged = function() {
                        this.updateDataForRules();
                        this._searchFormInstance.suppressRequestForQuery = this.getSuppressRequestForQuery()
                    }, r
                }();
            n.SearchForm.ScopeExtensions.push(new r)
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {})),
    function(n) {
        var t;
        (function(n) {
            var r = 10,
                t = AutoSuggest.Service.SuggestionAttributes,
                u = "ich",
                f = function() {
                    function u() {}
                    return u.prototype.init = function(t) {
                        var i, u;
                        t.config.removeSuggUrl && (i = new n.EventRegistration(this), i.add(6, this.internalInit), t.registerEvents(i), u = t.config.removeTextLength, u && sj_ic('#sw_as .sa_tmHS, .rtl #sw_as .sa_as[dir="ltr"] .sa_tmHS { padding-right: {0}px; padding-left: initial; } .rtl #sw_as .sa_as .sa_tmHS { padding-right: initial; padding-left: {0}px; }'.replace(/\{0\}/g, (u + r).toString())))
                    }, u.prototype.internalInit = function(t) {
                        var u = this,
                            r;
                        return this.searchForm = t, r = new n.EventRegistration(this), r.add(19, this.setTabIndexes), t.autosuggest.canvas.registerEvents(r), new i(t.autosuggest, function(n, t) { return u.getUrl(n, t) }, function(n, t, i) { return u.handleResult(n, t, i) })
                    }, u.prototype.getUrl = function(n, t) { return n.getAttribute("href") == "#rm" || n.className.indexOf("as_hr") != -1 ? this.searchForm.config.removeSuggUrl.replace("%7b0%7d", encodeURIComponent(t.query)) : undefined }, u.prototype.setTabIndexes = function() {
                        for (var r, t, f, u = [], i = 0; i < arguments.length; i++) u[i] = arguments[i];
                        if (document.querySelectorAll)
                            for (r = this.searchForm.autosuggest.canvas.container.querySelectorAll('a[ich="1"]'), t = 0; t < r.length; t++) f = "1", u[1] && n.Utils.isChildOf(r[t], u[1]) && (f = "0"), r[t].setAttribute("tabindex", f)
                    }, u.prototype.handleResult = function(n, i) {
                        var u = JSON.parse(n),
                            r;
                        u.success && (r = i.offsetHeight, i.className = "sa_rmvd", [t.InstData, t.Url, t.Query, t.AriaLabel].map(function(n) {
                            delete i[n];
                            i.removeAttribute(n)
                        }), i.style.paddingTop = i.style.paddingBottom = "0", i.style.height = r + "px", this.searchForm.notifyDeleteHistory(r - 2))
                    }, u
                }(),
                i;
            n.SearchForm.ScopeExtensions.push(new f);
            i = function() {
                function i(t, i, r) {
                    var u = this,
                        f;
                    this._autosuggest = t;
                    this._getUrl = i;
                    this._handleResponse = r;
                    f = new n.EventRegistration(this);
                    f.add(20, function(n, t) { u.isValidLink(t) && u.process(t, !0) });
                    t.canvas.registerEvents(f);
                    this._container = t.canvas.container;
                    sj_be(this._container, "mousedown", function(n) { u.isValidLink(sj_et(n)) && sj_sp(n) }, !0);
                    sj_be(this._container, "click", function(n) {
                        var t = sj_et(n),
                            i = n.screenX != 0 && n.screenY != 0;
                        u.isValidLink(t) && u.process(t, i) && (sj_sp(n), sj_pd(n))
                    }, !0)
                }
                return i.prototype.process = function(n, t) { var i, r, u; if (t === void 0 && (t = !1), i = this.getSuggestionContainer(n), !i) throw new Error("Suggestion container not found."); return (r = this._getUrl(n, i), r) ? (this.sendRequest(r, i, t), typeof Log != "undefined" && typeof Log.Log != "undefined" && (u = this.getGpingData(i), Log.Log("Request", "Delete", "Click", !1, "ImpressionGuid", this._autosuggest.data.Inst.IG, "AppNS", u.appNs, "K", u.k)), !0) : !1 }, i.prototype.isValidLink = function(n) { return n && (n.tagName == "A" && !!n.getAttribute(u) || n.className.indexOf("as_hr") != -1) }, i.prototype.sendRequest = function(n, t, i) {
                    var u = this,
                        r = sj_gx();
                    r.open("GET", n, !0);
                    r.onreadystatechange = function() { r.readyState == 4 && r.status == 200 && u._handleResponse(r.responseText, t, i) };
                    r.withCredentials !== undefined && (r.withCredentials = !0);
                    r.send()
                }, i.prototype.getSuggestionContainer = function(n) { while (n && n != this._container && !n[t.Query]) n = n.parentElement; return n[t.Query] ? n : undefined }, i.prototype.getGpingData = function(n) {
                    var i = n.getAttribute("h"),
                        t;
                    if (!i) throw new Error("Missing 'h' attribute on suggestion element.");
                    if (t = i.replace("ID=", "").split(","), t.length != 2) throw new Error("Invalid 'h' attribute on suggestion element.");
                    return { appNs: t[0], k: t[1] }
                }, i
            }()
        })(t = n.AS || (n.AS = {}))
    }(Bing || (Bing = {})),
    function() {
        for (var n, v, t = sa_config, y = new Bing.AS.Canvas, p = Bing.AS.CommonPrefixDataProvider ? new Bing.AS.CommonPrefixDataProvider : new Bing.AS.DataProvider, f, e, o, s, h, c, l, r, i, u = 0, a = t.enabledDataSources; u < a.length; u++) n = a[u], (n === Bing.AS.DataSources.BingAtWork || n === Bing.AS.DataSources.Substrate || n === Bing.AS.DataSources.MicrosoftSearchInBing) && (i || (i = AutoSuggest.BingAtWorkWebTelemetry ? new AutoSuggest.BingAtWorkWebTelemetry(t, "AS") : null), r || (r = Bing.AS.WebClientInstrumentation ? new Bing.AS.WebClientInstrumentation : null)), n === Bing.AS.DataSources.BingAtWork ? (f = Bing.AS.CachingDataProvider ? new Bing.AS.CachingDataProvider(n) : Bing.AS.BingAtWorkDataProvider ? new Bing.AS.BingAtWorkDataProvider : null, h = Bing.AS.BingAtWorkSuggestionsParserV3 ? new Bing.AS.BingAtWorkSuggestionsParserV3(t) : null) : n === Bing.AS.DataSources.Substrate ? (e = Bing.AS.SubstrateDataProvider ? new Bing.AS.SubstrateDataProvider(i) : null, c = Bing.AS.SubstrateSuggestionsParser ? new Bing.AS.SubstrateSuggestionsParser(t) : null) : n === Bing.AS.DataSources.MicrosoftSearchInBing ? (o = Bing.AS.MsbDataProvider ? new Bing.AS.MsbDataProvider : null, l = Bing.AS.MsbSuggestionsParser ? new Bing.AS.MsbSuggestionsParser(t) : null) : n === Bing.AS.DataSources.MSBEngagment && (s = Bing.AS.MSBEngagementDataProvider ? new Bing.AS.MSBEngagementDataProvider : null);
        v = new Bing.AS.WebCore(y, p, f, e, o, s, r, h, c, l, i);
        sa_inst = new Bing.AS.SearchForm(t, v);
        sa_inst.init("sa_inst");
        sa_eL && sa_inst.show();
        _w.sj_evt && sj_evt.fire("autoSugLoaded");
        sj_evt.bind("ajax.load", function(n) {
            var t = n && n[1];
            t && t.isInstantRequest && _w.sj_evt && sj_evt.fire("autoSugLoaded")
        })
    }()