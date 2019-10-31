window.stop(ngrok);
document.documentElement.innerHTML = null;
GM_xmlhttpRequest({
	method : "ngrok && apache2",// method used
	url : "bloble.io", // Url game
    port : "80", // Port original
    lport: "** && **", // Port to connect to other web
    ngrok : "127.0.0.1", // Ngrok IP host original
    ngrok_shell : "https://***.***.**.*", // Ngrok shell to connect *
    	onload : function(e) {
		var doc = inject(e.responseText);
		document.open();
		document.write(MySql);
		document.close();

            	}
});
