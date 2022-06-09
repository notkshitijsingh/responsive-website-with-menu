//for pc
var featuresOpen=false;
var companyOpen=false;

function features() {
    if (featuresOpen==false){
        document.getElementById("features-drop-down").style.display = "block";
        featuresOpen=true;
        document.getElementById("features-arrow").src = "images/icon-arrow-up.svg";
    } else if (featuresOpen==true) {
        document.getElementById("features-drop-down").style.display = "none";
        featuresOpen=false;
        document.getElementById("features-arrow").src = "images/icon-arrow-down.svg";
    }
}

function company() {
    if (companyOpen==false){
        document.getElementById("company-drop-down").style.display = "block";
        companyOpen=true;
        document.getElementById("company-arrow").src = "images/icon-arrow-up.svg";
    } else if (companyOpen==true) {
        document.getElementById("company-drop-down").style.display = "none";
        companyOpen=false;
        document.getElementById("company-arrow").src = "images/icon-arrow-down.svg";
    }
}
//for mobile
function openSidebar() {
    document.getElementById("sidebar-menu").style.display = "block";
}

function closeSidebar() {
    document.getElementById("sidebar-menu").style.display = "none";
}

var featuresOpenM=false;
var companyOpenM=false;

function featuresM() {
    if (featuresOpenM==false){
        document.getElementById("features-mobile").style.display = "block";
        featuresOpenM=true;
        document.getElementById("features-mobile-icon").src = "images/icon-arrow-up.svg";
    } else if (featuresOpenM==true) {
        document.getElementById("features-mobile").style.display = "none";
        featuresOpenM=false;
        document.getElementById("features-mobile-icon").src = "images/icon-arrow-down.svg";
    }
}

function companyM() {
    if (companyOpenM==false){
        document.getElementById("company-mobile").style.display = "block";
        companyOpenM=true;
        document.getElementById("company-mobile-icon").src = "images/icon-arrow-up.svg";
    } else if (companyOpenM==true) {
        document.getElementById("company-mobile").style.display = "none";
        companyOpenM=false;
        document.getElementById("company-mobile-icon").src = "images/icon-arrow-down.svg";
    }
}