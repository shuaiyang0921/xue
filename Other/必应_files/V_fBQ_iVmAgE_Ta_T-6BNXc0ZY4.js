var SsoFrame;
(function(n) {
    function t(n) {
        if (n && n.url && n.sandbox) {
            var t = sj_ce("iframe"),
                i = t.style;
            i.visibility = "hidden";
            i.position = "absolute";
            i.height = "0";
            i.width = "0";
            i.border = "none";
            t.src = decodeURIComponent(n.url);
            t.id = "aadssofr";
            t.setAttribute("sandbox", n.sandbox);
            _d.body.appendChild(t);
            n.currentEpoch && sj_cook.set("SRCHUSR", "T", n.currentEpoch, !0, "/");
            Log && Log.Log && Log.Log("ClientInst", "NoSignInAttempt", "OrgId", !1)
        }
    }

    function i(n) { try { n && n.length === 2 && t(n[1]) } catch (i) {} }
    n.createFrame = t;
    n.ssoFrameEntry = i;
    sj_evt.bind("ssoFrameExists", i, !0, null, !1)
})(SsoFrame || (SsoFrame = {}))