var ShareDialog;
(function(n) {
    function i() { t("bootstrap", arguments) }

    function r() { t("show", arguments) }

    function u() { t("showError", arguments) }

    function t(n, t) {
        for (var r = ["shdlgapi", n], i = 0; i < t.length; i++) r.push(t[i]);
        sj_evt.fire.apply(null, r)
    }
    n.bootstrap = i;
    n.show = r;
    n.showError = u
})(ShareDialog || (ShareDialog = {})),
function(n) {
    function i() { t == 0 && u() }

    function r() { sj_evt.unbind("shdlgapi", i) }

    function u() {
        t = 1;
        var n = ShareDialogConfig.shareDialogUrl + "&IG=" + _G.IG;
        n = e(n, ["uncrunched", "testhooks"]);
        sj_ajax(n, { callback: function(n, i) { n ? (t = 2, i.appendTo(_d.body), r(), f()) : t = 3 }, timeout: 0 })
    }

    function f() {
        var n = "rms";
        _w[n] & _w[n].start()
    }

    function e(n, t) { var i, r, u; for (r in t) u = new RegExp("[?&]" + t[r] + "=[^?&#]*", "i"), (i = location.href.match(u)) && i[0] && (n += "&" + i[0].substring(1)); return n }

    function o() { n.inited = 0 }

    function s() { n.inited || (n.inited = 1, sj_evt.bind("shdlgapi", i, !0), sj_evt.bind("ajax.unload", o, !1)) }
    var t = 0;
    s()
}(ShareDialog || (ShareDialog = {}))