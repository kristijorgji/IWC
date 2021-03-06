//https://github.com/slimjack/IWC
var SJ = SJ || {};
SJ.ns = function createNameSpace(namespace) {
    var nsparts = namespace.split(".");
    var parent = SJ;
    if (nsparts[0] === "SJ") {
        nsparts = nsparts.slice(1);
    }
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];
        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }
        parent = parent[partname];
    }
    return parent;
};