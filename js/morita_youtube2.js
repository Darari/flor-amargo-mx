document.addEventListener("DOMContentLoaded",
    function() {
        var v01 = document.getElementsByClassName("youtube-player-01");
        var div01 = document.createElement("div");

        div01.setAttribute("data-id", v01[0].dataset.id);
        div01.innerHTML = labnolThumb(v01[0].dataset.id);
        div01.onclick = labnolIframe;
        v01[0].appendChild(div01);

        var v02 = document.getElementsByClassName("youtube-player-02");
        var div02 = document.createElement("div");

        div02.setAttribute("data-id", v02[0].dataset.id);
        div02.innerHTML = labnolThumb(v02[0].dataset.id);
        div02.onclick = labnolIframe;
        v02[0].appendChild(div02);

        /*
        var v03 = document.getElementsByClassName("youtube-player-03");
        var div03 = document.createElement("div");

        div03.setAttribute("data-id", v03[0].dataset.id);
        div03.innerHTML = labnolThumb(v03[0].dataset.id);
        div03.onclick = labnolIframe;
        v03[0].appendChild(div03);

        var v04 = document.getElementsByClassName("youtube-player-04");
        var div04 = document.createElement("div");

        div04.setAttribute("data-id", v04[0].dataset.id);
        div04.innerHTML = labnolThumb(v04[0].dataset.id);
        div04.onclick = labnolIframe;
        v04[0].appendChild(div04);
        */

    });

    function labnolThumb(id) {
        var thumb = '<img src="https://graph.facebook.com/ID/picture" class="fb_thumb">';
        return thumb.replace("ID", id);
    }

    function labnolIframe() {
        var iframe = document.createElement("iframe");
        var embed = "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/floramargo/videos/ID/";
        iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        iframe.setAttribute("class", "mañanera_vid");
        this.parentNode.replaceChild(iframe, this);
    }