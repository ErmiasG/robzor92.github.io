window.addEventListener("DOMContentLoaded", function() {

var hopsworksVersion = window.location.pathname.split("/")[1];

if(new RegExp("^(\\d+[.]\\d+)$").test(hopsworksVersion)) {

    document.getElementById("hopsworks_api_link").href="https://docs.hopsworks.ai/hopsworks-api/" + hopsworksVersion;

    document.getElementById("hsfs_api_link").href="https://docs.hopsworks.ai/feature-store-api/" + hopsworksVersion;

    document.getElementById("hsml_api_link").href="https://docs.hopsworks.ai/machine-learning-api/" + hopsworksVersion;

};

});
