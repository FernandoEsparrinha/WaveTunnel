function drawLine(x1, y1, x2, y2){
    beginShape();
    vertex(x1,y1);
    vertex(x2,y2);  
    endShape();
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};