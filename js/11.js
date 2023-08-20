$(document).ready(function() {
    tf.setBackend("webgl");
    let n = 0,
        i = 0,
        o = 0,
        a = [1, 2, 3],
        l = void 0,
        d = void 0,
        s = void 0;
    document.getElementById("form");
    let m = document.getElementById("step"),
        c = document.getElementById("passed"),
        f = document.getElementById("fail"),
        t = document.getElementById("modal-error"),
        r = document.getElementById("modal-error-title"),
        u = document.getElementById("modal-error-text");
    var e = document.getElementById("fotoSelfie"),
        p = document.getElementById("imageSelfie"),
        g = document.getElementById("canvasSelfie"),
        v = document.getElementById("modalSelfie"),
        h = document.getElementById("videoSelfie"),
        b = document.getElementById("canvasFaceSelfie");
    let y = document.getElementById("frame-selfie");
    var k = document.getElementById("selectCameraSelfie");
    let S = document.getElementById("btnTakeSelfie");
    var I = document.getElementById("btnOpenSelfie");
    let E = document.getElementById("box-detect-face");
    var B = { fotoSelfie: e, imageSelfie: p, canvasSelfie: g, modal: v, video: h, canvas: b, frame: y, camera: k, btn_capture: S, field: "fotoSelfie", environment: "user" };
    $(I).click(function() { U() ? C() ? ($(B.modal).modal("hide"), V("Mohon Maaf", "Anda telah mencapai batas percobaan validasi data. Anda dapat mencoba kembali besok atau datang ke kantor cabang BNI terdekat.")) : (_(), F(B), $(B.modal).modal("show")) : V("Mohon Maaf", "Media device tidak didukung oleh browser anda") }), $(B.modal).on("hide.bs.modal", function() { J() }), $(B.camera).change(function() { J(), _(), F(B) });
    e = document.getElementById("videoSelfieKtp"), p = document.getElementById("canvasSelfieKtp"), g = document.getElementById("canvasVideoSelfieKtp"), v = document.getElementById("frame-ktp-selfie"), h = document.getElementById("fotoSelfieKtp"), b = document.getElementById("imageSelfieKtp"), k = document.getElementById("btnOpenSelfieKtp");
    let M = document.getElementById("btnTakeSelfieKtp");
    var I = document.getElementById("selectCameraSelfieKtp"),
        w = document.getElementById("modalSelfieKtp"),
        K = { video: e, canvas: p, canvasVideoSelfie: g, frame: v, fotoSelfie: h, imageSelfie: b, btnOpenSelfie: k, btnTakeSelfie: M, camera: I, modalSelfie: w, field: "fotoSelfieKtp", cameraOption: "user" };
    $(k).click(function() { U() ? C() ? ($(K.modal).modal("hide"), V("Mohon Maaf", "Anda telah mencapai batas percobaan validasi data. Anda dapat mencoba kembali besok atau datang ke kantor cabang BNI terdekat.")) : $(K.modalSelfie).modal("show") : V("Mohon Maaf", "Media device tidak didukung oleh browser anda") }), $(M).click(function() { A(K), $(w).modal("hide") }), $(w).on("show.bs.modal", function() { F(K) }), $(w).on("hidden.bs.modal", function() { J() }), $(K.camera).change(function() { J(), F(K) });
    e = document.getElementById("videoKtp"), p = document.getElementById("canvasKtp"), g = document.getElementById("canvasVideoKtp"), v = document.getElementById("frame-ktp"), h = document.getElementById("fotoKtp"), b = document.getElementById("imageKtp"), I = document.getElementById("btnOpenKtp");
    let x = document.getElementById("btnTakeKtp");
    var k = document.getElementById("selectCameraKtp"),
        T = document.getElementById("modalKtp"),
        O = { video: e, canvas: p, canvasVideoSelfie: g, frame: v, fotoSelfie: h, imageSelfie: b, btnOpenSelfie: I, btnTakeSelfie: x, camera: k, modalSelfie: T, field: "fotoKtp", cameraOption: "environment" };

    function _() { n = 0, i = 0, o = 0, a = [1, 2, 3], l = void 0, d = void 0, s = void 0, S.disabled = !0, $(E).html($("<span>Tunggu sebentar<br/><i class='fas fa-spinner fa-lg fa-spin color-orange mt-0'></i></span>")), $(E).css("visibility", "visible") }
    $(I).click(function() { U() ? C() ? ($(O.modal).modal("hide"), V("Mohon Maaf", "Anda telah mencapai batas percobaan validasi data. Anda dapat mencoba kembali besok atau datang ke kantor cabang BNI terdekat.")) : $(O.modalSelfie).modal("show") : V("Mohon Maaf", "Media device tidak didukung oleh browser anda") }), $(x).click(function() { A(O), $(T).modal("hide") }), $(T).on("show.bs.modal", function() { F(O) }), $(T).on("hidden.bs.modal", function() { J() }), $(O.camera).change(function() { J(), F(O) });
    async function F(a) {
        let e = { width: 720, height: 720 };
        "" != a.camera.value && (e.deviceId = { exact: a.camera.value }), await navigator.mediaDevices.getUserMedia({ video: e }).then(async function(e) {
            e ? (d = e, a.video.srcObject = d, async function(n) {
                await navigator.mediaDevices.enumerateDevices().then(function(e) {
                    option = document.createElement("option"), option.value = "", option.innerText = "Pilih Kamera", n.camera.innerHTML = "", n.camera.appendChild(option);
                    let t = 0;
                    e.forEach(e => {
                        if ("videoinput" == e.kind) {
                            const a = document.createElement("option");
                            a.value = e.deviceId;
                            e = e.label || "Camera " + t++, e = document.createTextNode(e);
                            a.appendChild(e), n.camera.appendChild(a)
                        }
                    })
                })
            }(a), a.video.play(), a.video.onloadedmetadata = () => { a.frame.width = a.video.offsetWidth, a.frame.height = a.video.offsetHeight, a.canvas.width = a.video.videoWidth, a.canvas.height = a.video.videoHeight }, s = a, setTimeout(async function() { "fotoSelfie" == s.field ? ("5" == $(m).val() ? s.frame.style.visibility = "hidden" : s.frame.style.visibility = "visible", await faceapi.nets.tinyFaceDetector.loadFromUri("files/liveness/faceapi/model"), await faceapi.nets.faceExpressionNet.loadFromUri("files/liveness/faceapi/model"), l = await facemesh.load(), N()) : s.frame.style.visibility = "visible" }, 100)) : alerts("Mohon Maaf", "Tidak dapat mengakses kamera. Pastikan anda telah memberikan izin aplikasi untuk mengakses kamera.")
        })
    }
    $(B.btn_capture).click(function() { S.disabled = !0, n = 1 }), $(K.btn_capture).click(function() { M.disabled = !0, A(K) }), $(O.btn_capture).click(function() { x.disabled = !0, A(O) });
    async function N() {
        if (null != d) {
            var a = await l.estimateFaces(s.video);
            if ("0" == i)
                if (1 == a.length) {
                    let e = s.canvas.getContext("2d");
                    e.drawImage(s.video, 0, 0);
                    var t = s.canvas.toDataURL("image/jpeg", 1);
                    null != a && 1 <= a[0].faceInViewConfidence ? "1" == $(m).val() || "2" == $(m).val() || "3" == $(m).val() ? (0 == o && (o = D()), W(o), (a = await faceapi.detectSingleFace(s.video, new faceapi.TinyFaceDetectorOptions).withFaceExpressions()) && ("1" == o && .99 < a.expressions.neutral && (i = 1, await j(o, t, function(e) {
                        e = JSON.parse(e);
                        e.status ? (o = D(), W(o), $(m).val(e.live_step), i = 0) : ($(s.modal).modal("hide"), V("Mohon Maaf", e.message))
                    })), "2" == o && .99 < a.expressions.happy && (i = 1, await j(o, t, function(e) {
                        e = JSON.parse(e);
                        e.status ? (o = D(), W(o), $(m).val(e.live_step), i = 0) : ($(s.modal).modal("hide"), V("Mohon Maaf", e.message))
                    })), "3" == o && .99 < a.expressions.surprised && (i = 1, await j(o, t, function(e) {
                        e = JSON.parse(e);
                        e.status ? (o = D(), W(o), $(m).val(e.live_step), i = 0) : ($(s.modal).modal("hide"), V("Mohon Maaf", e.message))
                    })))) : "4" == $(m).val() ? ($(E).html($("<span>Tunggu sebentar, foto anda sedang diproses<br/><i class='fas fa-spinner fa-lg fa-spin color-orange mt-0'></i></span>")), i = 1, await j("4", "", function(e) {
                        e = JSON.parse(e);
                        e.status ? ($(m).val(e.live_step), $(c).val(e.live_passed), $(f).val(e.live_fail), i = 0) : ($(m).val(e.live_step), $(c).val(e.live_passed), $(f).val(e.live_fail), $(s.fotoSelfie).val("").trigger("change"), s.imageSelfie.src = "", $(s.modal).modal("hide"), V("Mohon Maaf", e.message))
                    })) : "5" == $(m).val() && "1" == $(c).val() ? 1 == n ? (i = 1, S.disabled = !0, y.style.visibility = "visible", A(s)) : (S.disabled = !1, y.style.visibility = "visible", $(E).html($("<span>Ambil foto selfie dengan ktp pada area yang ditentukan.</span>"))) : ($(s.modal).modal("hide"), V("Mohon Maaf", "Silakan mengulangi proses pengambilan Foto Selfie.")) : (S.disabled = !0, $(E).html($("<span>Wajah tidak terdeteksi, pastikan anda menghadap kamera dengan pencahayaan yang cukup.</span>")))
                } else S.disabled = !0, $(E).html($("<span>Wajah tidak terdeteksi, pastikan anda menghadap kamera dengan pencahayaan yang cukup.</span>"));
            requestAnimationFrame(N)
        }
    }
    async function j(e, a, t) { $.ajax({ type: "POST", url: "", data: { input: "foto_liveness", live_expression: e, live_foto: a }, dataType: "text", success: function(e) { t(e) }, error: function(e) { $(s.modal).modal("hide"), V("Mohon Maaf", "Ada Kesalahan " + e.status + "<br/>Silakan mengulangi proses pengambilan Foto Selfie.") } }) }
    async function A(a) {
        let e = a.canvas.getContext("2d");
        e.drawImage(a.video, 0, 0);
        var t = a.canvas.toDataURL("image/jpeg", 1);
        let n = void 0;
        "fotoSelfie" == a.field && (n = { input: a.field, getFotoSelfie: t }), "fotoSelfieKtp" == a.field && (n = { input: a.field, getFotoSelfieKtp: t }), "fotoKtp" == a.field && (n = { input: a.field, getFotoKtp: t }), $.ajax({
            type: "POST",
            url: "",
            data: n,
            dataType: "text",
            success: function(e) {
                e = JSON.parse(e);
                e.status ? ($(a.fotoSelfie).attr("value", t).trigger("change"), a.imageSelfie.src = t, a.imageSelfie.width = a.canvas.width, $(a.modal).modal("hide")) : ($(a.fotoSelfie).attr("value", "").trigger("change"), a.imageSelfie.src = "", $(a.modal).modal("hide"), V("Mohon Maaf", e.message))
            },
            error: function(e) { $(a.fotoSelfie).attr("value", ""), a.imageSelfie.src = "", $(a.modal).modal("hide"), V("Mohon Maaf", "Ada Kesalahan " + e.status + "<br/>Silakan mengulangi proses pengambilan foto") }
        })
    }

    function C() { let e = !1; return e = !($(f).val() < 3), e }

    function D() { var e = Math.floor(Math.random() * a.length); return a.splice(e, 1)[0] }

    function W(e) { 1 == e && $(E).html($('<span>Ikuti Instruksi Wajah</span><br/><i class="far fa-meh fa-3x"></i><br/><span>Netral</span>')), 2 == e && $(E).html($('<span>Ikuti Instruksi Wajah</span><br/><i class="far fa-laugh-beam fa-3x"></i><br/><span>Senyum</span>')), 3 == e && $(E).html($('<span>Ikuti Instruksi Wajah</span><br/><i class="far fa-surprise fa-3x"></i><br/><span>Kaget</span>')) }

    function U() { return "mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices }

    function J() { void 0 !== d && (d.getTracks().forEach(function(e) { e.stop() }), d = void 0) }

    function V(e, a) { $(r).html($("<h3><b>" + e + "</b></h3>")), $(u).html($("<p>" + a + "</p>")), $(t).modal("show") }
});