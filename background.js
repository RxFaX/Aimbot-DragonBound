var titleGenerated2 = Math.random().toString(36).substr(2, Math.round(Math.random()*20+4));
//var titleGenerated2 = "DragonBound - HTML5 Multiplayer Free Online Game";
var manifestData = chrome.app.getDetails();
var BOT_ENABLED = false;

function callAjax(url, callback){
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

setTimeout(function(){
	BOT_ENABLED = true;
	go.call(window);
},200);



callAjax(chrome.extension.getURL("assets/DragonBound.js") +"?" + Date.now(), function(data){
    var curhash = /myhash\s*=\s*(\d+)/g.exec(data), current_hashnum;
    console.log("curhash",curhash);
	if(curhash && (current_hashnum = +curhash[1])){

		callAjax("https://dragonbound.net/static/dragon.appcache" +"?" + Date.now(), function(manifest){
			var scripturl;
			if(scripturl = /js\/[^.]+.js/.exec(manifest)){
				callAjax("https://dragonbound.net/static/"+scripturl[0]+"?" + Date.now(), function(script){
					console.log("len",script.length);
					var hash = /myhash\s*=\s*(\d+)/g.exec(script), hashnum;
					console.log("hash",hash, "https://dragonbound.net/static/"+scripturl[0]+"?" + Date.now());
					if(hash && (hashnum = +hash[1])){
						if(current_hashnum == hashnum){
							BOT_ENABLED = true;
							go.call(window);
							alert("Puedes abrir DragonBound...");
						}else{
							alert("Aimbot desactivado por seguridad, revisa actualización");
							chrome.management.getSelf(function(extension){
								chrome.management.setEnabled(extension.id, false);
							});
						}
					}
				});
			}
		});

	}
});


chrome.runtime.onMessage.addListener(request => {
	let power = parseFloat(request.tts);

	if(!isNaN(power)){
		const texto = String(power/100).replace(".", " punto ");

		chrome.tts.speak(texto, {  rate: 1.5, pitch: 0, onEvent: function(event) {}}, function() {});
	}
});


	chrome.webRequest.onBeforeSendHeaders.addListener(
	  function(details) {

	  	if(!BOT_ENABLED) return true;

		for (var i = 0; i < details.requestHeaders.length; i++) {
			var name = details.requestHeaders[i].name.toLowerCase();
		  if (name === 'cookie' || name === 'referer') {
			details.requestHeaders.splice(i, 1);
			i--;
		  }
		}


		details.requestHeaders.push({
		  name: 'referer',
		  value: 'https://dragonbound.net/'
		});

		return {requestHeaders: details.requestHeaders};
	  },
	  {
		urls: ['*://*.dragonbound.net/*']
	  },
	  ['blocking', 'requestHeaders', "extraHeaders"]
	);

function go() {

	var titleGenerated = "DragonBound - HTML5 Multiplayer Free Online Game";

	function e(e) {
		var n = {};
		try {
			n = new URL(e)
		} catch (t) {}
		return n
	}
	function n(e) {
		var n = new XMLHttpRequest;
		n.open("GET", chrome.extension.getURL("/dragonbound.html"), !0), n.onreadystatechange = function() {
			if (4 == n.readyState) {
				var t = i.web_accessible_resources,
					o = titleGenerated;
				t = t.map(function(e) {
					return chrome.extension.getURL(e)
				});
				var c = [];
				c.push(chrome.extension.getURL("")), c.push(t), c.push(o), c.push(n.responseText), e("(" + function(e, n, t, o) {
					var i = function(e, n) {
							var t = document.createElement("script");
							e ? t.src = e : n && (t.innerHTML = n), t.addEventListener("load", function() {
								t.parentNode.removeChild(t)
							}, !1), document.getElementsByTagName("head")[0].appendChild(t)
						},
						c = function(e) {
							var n = document.createElement("link");
							n.rel = "stylesheet", n.href = e, document.getElementsByTagName("head")[0].appendChild(n)
						};
					"complete" == document.readyState && (i(!1, 'window.__PATH__ = "' + e + '";'), document.documentElement.innerHTML = o, document.title = t, setTimeout(function() {
						n.forEach(function(e) {
							switch (e.split(".").pop()) {
								case "js":
									i(e);
									break;
								case "css":
									c(e)
							}
						})
					}, 100))
				}.toString() + ").apply(window, " + JSON.stringify(c) + ");")
			}
		}, n.send()
	}

	function t(e) {
		var n = [];
		n.push(c), e("(" + function(e) {
			document.body.innerText.match("Not Found") && (window.location = e)
		}.toString() + ").apply(window, " + JSON.stringify(n) + ");")
	}

	function o(n, o, i) {
		chrome.tabs.get(n, function(r) {
			if(chrome.runtime.lastError){
				return;
			}else{
				var u = e(r.url);
				if ("dragonbound.net" == u.hostname) {
					if (["/", "/anticheat"].indexOf(u.pathname) >= 0) return chrome.tabs.update(n, {
						url: c + "/" + a + "/"
					}), !1;
					["/" + a, "/" + a + "/"].indexOf(u.pathname) >= 0 && "complete" == r.status ? r.title.indexOf(titleGenerated) >= 0 && t(function() {
						o = arguments[0]
					}) : o = "", o && chrome.tabs.executeScript(r.id, {
						runAt: "document_end",
						code: o
					}, i || function(r) {
						if(chrome.runtime.lastError)
						{
							return;
						}
					})
				}
			}
		});
	}
var i = chrome['runtime']['getManifest']()
		c = "https://dragonbound.net",
		r = i['version'];;
	      //var time = new Date().getTime();
	      var d = "/static/images/arrow.png"; //funcionalidad de la extension 
          var a = d;

  chrome.browserAction.onClicked.addListener(function() {
		chrome.tabs.create({
			url: c + "/"+time
		}, function() {})
	});
	n(function(e) {
		chrome.windows.getAll(function(n) {
			(n || []).forEach(function(n) {
				chrome.tabs.getAllInWindow(n.id, function(n) {
					(n || []).forEach(function(n) {
						o(n.id, e)
					})
				})
			})
		}), chrome.tabs.onUpdated.addListener(function(n, z) {
			z.status == 'complete' && o(n, e)
		}), chrome.tabs.onCreated.addListener(function(n) {
			o(n.id, e)
		})
	})
};
