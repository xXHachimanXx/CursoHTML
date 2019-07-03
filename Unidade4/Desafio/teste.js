function nT(e)
{
    function t(t)
    {
        function i()
        {
            whileLoopCount <= pElementsCount ? (textItem = t[whileLoopCount], countPauses = (textItem.match(/~/g) || [])
                .length, 0 != countPauses ? makeAnimationLonger = countPauses * e.cursorPause : makeAnimationLonger = 0, s(whileLoopCount), e.whileLoopCount = whileLoopCount++, setTimeout(i, e.animationTime + makeAnimationLonger)) : e.loop && (whileLoopCount = 0, i())
        }
        n(), masterP = document.createElement("p"), parentDiv.appendChild(masterP), textSpan = document.createElement("span"), textSpan.id = "ntjsText", parentDiv.firstChild.appendChild(textSpan), cursorSpan = document.createElement("span"), cursorSpan.id = "ntjsCursor", cursorSpan.innerText = "|", parentDiv.firstChild.appendChild(cursorSpan), pElementsCount = e.pElementsCount = t.length - 1, whileLoopCount = 0, makeAnimationLonger = 0, e.shuffle && c(t), setTimeout(i, e.firstTimeStart), o(), setInterval(o, e.cursorSpeed)
    }

    function n()
    {
        for (; parentDiv.firstChild;) parentDiv.removeChild(parentDiv.firstChild)
    }

    function o()
    {
        l(document.getElementById("ntjsCursor")), setTimeout(function()
        {
            a(document.getElementById("ntjsCursor"))
        }, e.cursorSpeed / 2)
    }

    function a(e)
    {
        e.style.opacity = 0, last = +new Date, tick = function()
        {
            e.style.opacity = +e.style.opacity + (new Date - last) / 100, last = +new Date, +e.style.opacity < 1 && (window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16))
        }, tick()
    }

    function l(e)
    {
        e.style.opacity = 1, last = +new Date, tick = function()
        {
            e.style.opacity = +e.style.opacity - (new Date - last) / 100, last = +new Date, +e.style.opacity > 0 && (window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16))
        }, tick()
    }

    function s()
    {
        "~" == textItem.substr(substrCount, 1) && (textItem = textItem.replace("~", ""), e.extraTime += e.cursorPause), document.getElementById("ntjsText")
            .innerHTML = textItem.substr(0, substrCount++), timeNextLetter = (e.animationTime - e.timeBeforeDeleting - e.timeBeforeNext) / 2 / textItem.length, substrCount < textItem.length + 1 ? (setTimeout(s, timeNextLetter + e.extraTime), e.extraTime = 0) : (e.whileLoopCount != e.pElementsCount || e.loop) && setTimeout(r, e.timeBeforeDeleting)
    }

    function r()
    {
        document.getElementById("ntjsText")
            .innerHTML = textItem.substr(0, substrCount--), timeNextLetter = (e.animationTime - e.timeBeforeDeleting - e.timeBeforeNext) / 2 / textItem.length, substrCount >= 0 ? setTimeout(r, timeNextLetter) : (substrCount = 0, textItem = "")
    }

    function m(e, t)
    {
        return "undefined" == typeof e ? e = t : e
    }

    function c(e)
    {
        for (i = e.length - 1; i > 0; i--) j = Math.floor(Math.random() * (i + 1)), temp = e[i], e[i] = e[j], e[j] = temp;
        return e
    }
    e = m(e, {}), e.div = m(e.div, "ntjs"), e.firstTimeStart = m(e.firstTimeStart, 0), e.timeBeforeDeleting = m(e.timeBeforeDeleting, 2e3), e.timeBeforeNext = m(e.timeBeforeNext, 1e3), e.animationTime = e.timeBeforeDeleting + e.timeBeforeNext + 1 + m(e.animationTime, 2e3), e.cursorSpeed = m(e.cursorSpeed, 1e3), e.shuffle = m(e.shuffle, !1), e.loop = m(e.loop, !1), e.cursorPause = m(e.cursorPause, 1e3), e.extraTime = 0, parentDiv = document.getElementById(e.div), divChildrens = Array.prototype.slice.call(parentDiv.childNodes), childrenCount = divChildrens.length - 1, pElements = [], divChildrens.forEach(function(e, n)
    {
        1 === e.nodeType && pElements.push(e.textContent), childrenCount === n && t(pElements)
    })
}

function mf()
{
    for (var e = 0; e < document.getElementsByClassName("img-glr")
        .length; e++) document.getElementsByClassName("img-glr")[e].children[0].children[0].src ? "" : document.getElementsByClassName("img-glr")[e].children[0].children[0].src = document.getElementsByClassName("img-glr")[e].children[0].children[0].dataset.src
}

function d(e, t)
{
    var n = document.createElement("script");
    n.type = "text/javascript", n.readyState ? n.onreadystatechange = function()
    {
        "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null, t())
    } : n.onload = function()
    {
        t()
    }, n.src = e, document.getElementsByTagName("body")[0].appendChild(n)
}

function e(e, t)
{
    var n = document.createElement("link");
    n.rel = "stylesheet", n.readyState ? n.onreadystatechange = function()
    {
        "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null, t())
    } : n.onload = function()
    {
        t()
    }, n.href = e, document.getElementsByTagName("head")[0].appendChild(n)
}

function c(e)
{
    function t()
    {
        d("./node_modules/owl.carousel/node_modules/jquery/dist/jquery.min.js", function()
        {
            n()
        })
    }

    function n()
    {
        d("./node_modules/owl.carousel/dist/owl.carousel.min.js", function()
        {
            i()
        })
    }

    function i()
    {
        d("./node_modules/photoswipe/dist/photoswipe.min.js", function()
        {
            o()
        })
    }

    function o()
    {
        d("./node_modules/photoswipe/dist/photoswipe-ui-default.min.js", function()
        {
            j(), k(), y(), z()
        })
    }
    t()
}

function b()
{
    function t()
    {
        e("./node_modules/owl.carousel/dist/assets/owl.carousel.min.css", function()
        {
            n()
        })
    }

    function n()
    {
        e("./node_modules/owl.carousel/dist/assets/owl.theme.green.min.css", function()
        {
            i()
        })
    }

    function i()
    {
        e("./node_modules/photoswipe/dist/photoswipe.min.css", function()
        {
            o()
        })
    }

    function o()
    {
        e("./node_modules/photoswipe/dist/default-skin/default-skin.min.css", function() {})
    }
    t()
}

function p()
{
    $("html, body")
        .animate(
        {
            scrollTop: $("body > article:nth-child(3)")
                .offset()
                .top + 1
        }, 1500)
}

function a()
{
    var e = document.getElementsByTagName("header")[0].style.backgroundImage,
        t = e.match(/\((.*?)\)/)[1].replace(/('|")/g, ""),
        n = new Image;
    n.onload = function()
    {
        document.getElementsByTagName("header")[0].style.opacity = "1", document.getElementById("logo")
            .classList.add("logo"), setTimeout(function()
            {
                document.getElementById("skillFixed")
                    .style.visibility = "visible", document.getElementById("ntjsCursor")
                    .style.visibility = "visible"
            }, 1200), nT(
            {
                div: "skillsRandom",
                firstTimeStart: 1200,
                animationTime: 1500,
                timeBeforeDeleting: 1200,
                cursorSpeed: 500,
                loop: !0
            })
    }, n.src = t, n.complete && n.onload()
}

function k()
{
    (function(e)
    {
        var t, n, i, o = function(e)
            {
                var t, n, i, o, a, l = e.childNodes,
                    s = l.length,
                    r = [];
                for (a = 0; a < s; a++) t = l[a], 1 === t.nodeType && (n = t.children[0], i = n.getAttribute("data-size")
                    .split("x"), o = {
                        src: n.getAttribute("href"),
                        w: parseInt(i[0], 10),
                        h: parseInt(i[1], 10)
                    }, t.children.length > 1 && (o.title = t.children[1].innerHTML), n.children.length > 0 && (o.msrc = n.children[0].getAttribute("src")), o.el = t, r.push(o));
                return r
            },
            a = function e(t, n)
            {
                return t && (n(t) ? t : e(t.parentNode, n))
            },
            l = function(e)
            {
                var t, n, i, o, l, s, m, c;
                if (e = e || window.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1, t = e.target || e.srcElement, n = a(t, function(e)
                    {
                        return e.tagName && "FIGURE" === e.tagName.toUpperCase()
                    }))
                {
                    for (i = n.parentNode, o = n.parentNode.childNodes, l = o.length, s = 0, c = 0; c < l; c++)
                        if (1 === o[c].nodeType)
                        {
                            if (o[c] === n)
                            {
                                m = s;
                                break
                            }
                            s++
                        } return m >= 0 && r(m, i), !1
                }
            },
            s = function()
            {
                var e, t, n, i = window.location.hash.substring(1),
                    o = {};
                if (i.length < 5) return o;
                for (e = i.split("&"), t = 0; t < e.length; t++) e[t] && (n = e[t].split("="), n.length < 2 || (o[n[0]] = n[1]));
                return o.gid && (o.gid = parseInt(o.gid, 10)), o
            },
            r = function(e, t, n, i)
            {
                var a, l, s = document.querySelectorAll(".pswp")[0],
                    r = o(t),
                    m = {
                        galleryUID: t.getAttribute("data-pswp-uid"),
                        getThumbBoundsFn: function(e)
                        {
                            var t = r[e].el.getElementsByTagName("img")[0],
                                n = window.pageYOffset || document.documentElement.scrollTop,
                                i = t.getBoundingClientRect();
                            return {
                                x: i.left,
                                y: i.top + n,
                                w: i.width
                            }
                        }
                    };
                if (i)
                    if (m.galleryPIDs)
                    {
                        for (l = 0; l < r.length; l++)
                            if (r[l].pid == e)
                            {
                                m.index = l;
                                break
                            }
                    }
                else m.index = parseInt(e, 10) - 1;
                else m.index = parseInt(e, 10);
                isNaN(m.index) || (n && (m.showAnimationDuration = 0), a = new PhotoSwipe(s, PhotoSwipeUI_Default, r, m), a.init())
            },
            m = document.querySelectorAll(e);
        for (t = 0, n = m.length; t < n; t++) m[t].setAttribute("data-pswp-uid", t + 1), m[t].onclick = l;
        i = s(), i.pid && i.gid && r(i.pid, m[i.gid - 1], !0, !0)
    })(".my-gallery")
}

function j()
{
    $(".owl-carousel")
        .owlCarousel(
        {
            items: 3,
            lazyLoad: !0,
            loop: !0,
            margin: 15,
            responsiveClass: !0,
            responsive:
            {
                0:
                {
                    items: 1
                },
                600:
                {
                    items: 3
                }
            }
        })
}

function y()
{
    document.getElementById("qs")
        .addEventListener("click", function(e)
        {
            var t = document.createElement("div");
            t.classList.add("content"), t.innerHTML = '<div class="modal-header"><h3>Quero um site novo!</h3></div><label for="nome" style="margin-top: 71.13px;">Nome</label><input id="nome" class="fc" type="text"><label for="email">Email</label><input id="email" class="fc" type="email"><label for="tel">Telefone</label><input id="tel" class="fc" type="tel"><label for="msg">Mensagem</label><textarea id="msg" class="fc"></textarea><div id="enviar" class="modal-footer"><button class="btn">Enviar</button></div>', document.getElementsByClassName("modal-content")[0].appendChild(t), document.getElementById("overlay")
                .classList.remove("is-hidden"), document.getElementById("enviar")
                .addEventListener("click", function(e)
                {
                    return $("#nome")
                        .val() ? $("#email")
                        .val() ? void $.ajax(
                        {
                            type: "POST",
                            url: "./p/f.php",
                            async: !0,
                            data: "&nome=" + $("#nome")
                                .val() + "&email=" + $("#email")
                                .val() + "&tel=" + $("#tel")
                                .val() + "&mensagem=" + $("#msg")
                                .val(),
                            success: function()
                            {
                                alert("E-mail enviado com sucesso!"), document.getElementById("overlay")
                                    .classList.add("is-hidden"), document.getElementsByClassName("content")[0].remove(), $("html, body")
                                    .animate(
                                    {
                                        scrollTop: $("body > article:nth-child(3)")
                                            .offset()
                                            .top + 1
                                    }, 2e3)
                            },
                            error: function()
                            {
                                alert("Aconteceu algum problema no envio! :(\n\nEntre em contato pelo email contato@douglasmofet.com.br que responderei o mais rápido possível!\n\n")
                            }
                        }) : (alert("E-mail inválido!"), $("#email")
                            .focus(), !1) : (alert("Nome inválido!"), $("#nome")
                            .focus(), !1)
                })
        }), document.getElementById("button-close")
        .addEventListener("click", function(e)
        {
            document.getElementById("overlay")
                .classList.add("is-hidden"), document.getElementsByClassName("content")[0].remove()
        })
}

function z()
{
    var e, t, n = new Array;
    n.push('<figure><a href="img/t/ds.jpg" data-size="800x1838"><img src="img/t/ds_m.jpg" alt="Daiana Andrade" /></a><figcaption>Daiana Andrade<br/><small>Projeto: Blog e identidade visual</small></figcaption></figure>', '<figure><a href="img/t/cs.jpg" data-size="800x1286"><img src="img/t/cs_m.jpg" alt="Check-up - Gestão empresarial" /></a><figcaption>Check-up - Gestão empresarial<br/><small>Projeto: Site e identidade visual</small></figcaption></figure>', '<figure><a href="img/t/hf.jpg" data-size="525x800"><img src="img/t/hf_m.jpg" alt="HADSOU - Manutenção e serviços" /></a><figcaption>HADSOU - Manutenção e serviços<br/><small>Projeto: Flyer e identidade visual</small></figcaption></figure>', '<figure><a href="img/t/rs.jpg" data-size="800x2704"><img src="img/t/rs_m.jpg" alt="Refrigeração Pampulha" /></a><figcaption>Refrigeração Pampulha<br/><small>Projeto: Site e identidade visual</small></figcaption></figure>', '<figure><a href="img/t/rl.jpg" data-size="800x800"><img src="img/t/rl_m.jpg" alt="Rick Rock Cultura Bar" /></a><figcaption>Rick Rock Cultura Bar<br/><small>Projeto: Identidade visual</small></figcaption></figure>', '<figure><a href="img/t/ml.jpg" data-size="800x800"><img src="img/t/ml_m.jpg" alt="Márcio Aranha e a Têia" /></a><figcaption>Márcio Aranha e a Têia<br/><small>Projeto: Capa do álbum e identidade visual</small></figcaption></figure>', '<figure><a href="img/t/pc.jpg" data-size="800x960"><img src="img/t/pc_m.jpg" alt="Pimenta Rosa - Centro de beleza e estética" /></a><figcaption>Pimenta Rosa - Centro de beleza e estética<br/><small>Projeto: Identidade visual</small></figcaption></figure>'), e = 0, t = setInterval(function()
    {
        $("#my-gallery .column")
            .append(n[e]), e++, e === n.length && clearInterval(t)
    }, 500)
}

function w()
{
    if (window.innerWidth > 550)
        for (var e = 0; e < document.getElementsByClassName("icon-box")
            .length; e++) document.getElementsByClassName("icon-box")[e].children[0].src ? "" : document.getElementsByClassName("icon-box")[e].children[0].src = document.getElementsByClassName("icon-box")[e].children[0].dataset.src
}
document.getElementsByTagName("header")[0].style.backgroundImage = "url('././img/glx1.jpg')",
    function(e, t, n, i, o, a, l)
    {
        e.GoogleAnalyticsObject = o, e[o] = e[o] || function()
        {
            (e[o].q = e[o].q || [])
            .push(arguments)
        }, e[o].l = 1 * new Date, a = t.createElement(n), l = t.getElementsByTagName(n)[0], a.async = 1, a.src = i, l.parentNode.insertBefore(a, l)
    }(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-90457826-1", "auto"), ga("send", "pageview");
var substrCount = 0,
    textItem = "";
document.addEventListener("DOMContentLoaded", function(e)
{
    a(), b(), c(), document.querySelector(".down")
        .addEventListener("click", p, !1), mf(), w()
}), window.onresize = function()
{
    w()
};
