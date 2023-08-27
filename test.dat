function FindroxyForURL(url, host) {

    var allowed = [
        "*githubusercontent.com/*",
        "*github.com/*",
        "*spotpos.com/*",
        "*xplortechnologies.com/*",
        "*gotoassist.com/*",
        "*getgo.com/*",
        "*mydrycleaner.com/*",
        "*hostedrmm.com/*",
        "*solutionsharmony.com/*",
        "*windowsupdate.com/*",
        "*microsoft.com/*",
        "*comodoca.com/*",
        "*cloudflare.net/*",
        "*logmeinrescue.com/*",
        "*akadns.net/*",
        "*azureedge.net/*",
        "*v0cdn.net/*",
        "*mydrycleaner.com/*",
        "*logmeinrescue.com/*",
        "*netsolssl.com/*",
        "*logmein123.com/*",
        "*goto.com/*",
        "*logmein.com/*",
        "*trafficmanager.net/*",
        "*azureedge.net/*",
        "*a-msedge.net/*",
        "*footprint.net/*",
        "*usertrust.co/*m"
    ];

    for (var i = 0; i < allowed.length; i++) {
        if (shExpMatch(url, allowed[i])) {
            return "DIRECT";
        }
    }

    return "PROXY NOACCESS:9999";
}