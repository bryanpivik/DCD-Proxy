function FindProxyForURL(url, host) {

    // List of allowed URLs
    var allowed = [
	"http://*.githubusercontent.com/*",
    "https://*.githubusercontent.com/*",
	"http://*.github.com/*",
    "https://*.github.com/*",
    "http://*.spotpos.com/*",
    "https://*.spotpos.com/*",
    "http://*.xplortechnologies.com/*",
    "https://*.xplortechnologies.com/*",
    "http://*.gotoassist.com/*",
    "https://*.gotoassist.com/*",
    "http://*.getgo.com/*",
    "https://*.getgo.com/*",
    "http://*.mydrycleaner.com/*",
    "https://*.mydrycleaner.com/*",
    "http://*.hostedrmm.com/*",
    "https://*.hostedrmm.com/*",
    "http://*.solutionsharmony.com/*",
    "https://*.solutionsharmony.com/*",
    "http://*.windowsupdate.com/*",
    "https://*.windowsupdate.com/*",
    "http://*.microsoft.com/*",
    "https://*.microsoft.com/*",
    "http://*.comodoca.com/*",
    "https://*.comodoca.com/*",
    "http://*.cloudflare.net/*",
    "https://*.cloudflare.net/*",
    "http://*.logmeinrescue.com/*",
    "https://*.logmeinrescue.com/*",
    "http://*.akadns.net/*",
    "https://*.akadns.net/*",
    "http://*.azureedge.net/*",
    "https://*.azureedge.net/*",
    "http://*.v0cdn.net/*",
    "https://*.v0cdn.net/*",
    "http://*.mydrycleaner.com/*",
    "https://*.mydrycleaner.com/*",
    "http://*.logmeinrescue.com/*",
    "https://*.logmeinrescue.com/*",
    "http://*.netsolssl.com/*",
    "https://*.netsolssl.com/*",	
    "http://*.logmein123.com/*",
    "https://*.logmein123.com/*",
    "http://*.goto.com/*",
    "https://*.goto.com/*",
    "http://*.logmein.com/*",
    "https://*.logmein.com/*",
    "http://*.trafficmanager.net/*",
    "https://*.trafficmanager.net/*",
    "http://*.azureedge.net/*",
    "https://*.azureedge.net/*",
    "http://*.a-msedge.net/*",
    "https://*.a-msedge.net/*",
    "http://*.footprint.net/*",
    "https://*.footprint.net/*",
    "http://*.usertrust.com/*",
    "https://*.usertrust.com/*"
    ];

    //*. Check if the URL is in the allowed list
    for (var i = 0; i < allowed.length; i++) {
        if (shExpMatch(url, allowed[i])) {
            return "DIRECT";
        }
    }

    //*. Block all other URLs
    return "PROXY NOACCESS:9999";
}

