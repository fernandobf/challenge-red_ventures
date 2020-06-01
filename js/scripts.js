let listPlants  = [];
let selectHTML  = null;
let windowHeight= null;
let sunValue    = null;
let sunIcon     = null;
let waterValue  = null;
let waterIcon   = null;
let petsValue   = null;
let petIcon     = null;

window.addEventListener('load', () => {
    let target = document.querySelector('#target');
    let spinner = document.getElementById('spinner'); 
    selectHTML = document.querySelectorAll('select');
    windowHeight = document.documentElement.clientHeight;
    
    document.getElementsByClassName('selection')[0].style.minHeight = windowHeight + "px";

    spinnerControl(false);
    getSelect();
});

async function fetchPlants(e) {
    try {
        if(sunValue && waterValue && petsValue) {
            spinnerControl(true, "flex");
            var url = "https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=" + sunValue + "&water=" + waterValue + "&pets=" + petsValue;
            const res = await fetch(url);
            const json = await res.json();
            listPlants = json.map(plant => {
                const { name, price, url } = plant;
                return {
                    name: name,
                    price: price,
                    img: url,
                }
            })
            renderResults();
            if(document.documentElement.clientWidth <= 600){
                renderSlider();
            } 
        }
    }catch (e){
        error();
    }
}

function renderResults() {
    let plantResultHTML = '<img src="img/decoration-result.png" alt=""><h2>Our picks for you</h2><div class="z-slide-wrap" id="slider"><ul class="box z-slide-content">';

    target.classList.add("page-content", "done");

    listPlants.forEach(person => {
        const { name, price, img } = person;
        const plantItemHTML = `
            <li class="box-item z-slide-item">
                <div>
                    <img src=${img} alt="Picture of the ${name}" title="Picture of the ${name}">
                    <div class="box-content">
                        <h3>${name}</h3>
                        <div class="box-info">
                            <span>$${price}</span>
                            <ul>
                                <li><img src="img/${sunIcon}"></li>
                                <li><img src="img/${waterIcon}"></li>
                                <li><img src="img/${petIcon}"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        `;
        plantResultHTML += plantItemHTML;
    });
    plantResultHTML += '</ul></div><a id="backButton"><img src="img/ico-arrow_up.png">Back to the top</a>';
    target.innerHTML = plantResultHTML;
    let goTopBtn = document.getElementById('backButton');
    goTopBtn.addEventListener('click', backToTop);
    window.scrollBy(0, 0);
    window.scrollBy(0, 0 + windowHeight - 1);
    spinnerControl(false);
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

function spinnerControl(state, display){
    if(state === true){
        spinner.style.display = display;
    }else{
        spinner.style.display = "none";
    }
}

function error(){
    spinner.style.display = "none";
    document.getElementById('errorTitle').textContent = "Sorry...";
    document.getElementById('errorDescription').textContent = "We have no plans for you. :(";
}

function setSelect(selectId, selectValue){
    switch(selectId){
        case 'sun':
            sunValue = selectValue;
            if(selectValue == "high"){
                sunIcon = "ico-sun_01.svg";
            }else if(selectValue == "low"){
                sunIcon = "ico-sun_02.svg";
            }else{
                sunIcon = "ico-sun_03.svg";
            }
            break;
        case 'water':
            waterValue = selectValue;
            if(selectValue == "daily"){
                waterIcon = "ico-water_01.svg";
            }else if(selectValue == "regularly"){
                waterIcon = "ico-water_02.svg";
            }else{
                waterIcon = "ico-water_03.svg";
            }
            break;
        case 'pets':
            petsValue = selectValue;
            selectValue == "true" ? petIcon = "ico-pets_01.svg" : petIcon = "ico-pets_02.svg" 
            break;
    }
    fetchPlants();
}

function getSelect(){
    for(var item of selectHTML){
        item.addEventListener('change', function(){
            let selectId = this.getAttribute('id');
            let selectValue = this.options[this.selectedIndex].value;
            setSelect(selectId, selectValue);
        })
    }
}

function renderSlider(){
    slider = document.getElementById('slider');
    slider = new Slider(slider, '.z-slide-item', {
        'autoplay': false,
    })
}

// Scripts of the Slider
!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.Slider=e()}(this,function(){var t={current:0,duration:.8,minPercentToSlide:null,autoplay:!0,direction:"left",interval:5},e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},n=function(t){var n=["-moz-","-webkit-","-o-","-ms-"],i=["Moz","Webkit","O","ms"],r=n.length;return function(o,a,s){var u=function(o){if(o in t)return{prop:o,prefix:n[1]};var a,s;o=e(o);for(var u=0;u<r;u++)if((a=i[u]+o)in t){s=n[u];break}return{prop:a,prefix:s}}(a);o.style[u.prop]=s,s&&(o.style[u.prop]=u.prefix+s)}}(document.body.style),i=function(t,e,n){var i;return(i=document.createEvent("Event")).initEvent(t,e,n),i},r=function(t,e,i,r,o,a){void 0===r&&(r=""),void 0===o&&(o=r),void 0===a&&(a=o),n(t,"transition",r),n(e,"transition",o),n(i,"transition",a)},o=function(t,e,i,r,o){n(e,"transform","translate3d("+r+"px, 0, 0)"),n(t,"transform","translate3d("+(r-o)+"px, 0, 0)"),n(i,"transform","translate3d("+(r+o)+"px, 0, 0)")},a=function(t,e,i,r,o,a){var s,u,c,d,l=r;for(2===r&&(c=i[0].cloneNode(!0),e.appendChild(c),i.push(c),c=i[1].cloneNode(!0),e.appendChild(c),i.push(c),r=4),(o>(s=r-1)||o<0)&&(o=0),0!==o&&(i=i.splice(o,r-o).concat(i)),i[0].uuid=0,i[s].uuid=s,n(i[0],"transform","translate3d(0, 0, 0)"),n(i[s],"transform","translate3d(-"+a+"px, 0, 0)"),d=1;d<s;d++)(u=i[d]).uuid=d,n(u,"transform","translate3d("+a+"px, 0, 0)");t.container=e,t.list=i,t.realCount=l,t.count=r,t.current=o},s=function(t,e){e.options.autoplay&&clearTimeout(e.timeId)},u=function(t,e,n){var i=e.list,a=i[0],s=i[i.length-1],u=i[1];r(s,a,u,""),o(s,a,u,n,e.width)},c=function(t,e,n){var i;i=Math.abs(n)<e.compareDistance?"restore":n<0?"left":"right",e.slide(i,n),e.options.autoplay&&e.autoplay()},d=function(t,e,n,r){var o,a,s,u,c,d,l,p,h,f,m,v,y=t.container;function E(t,e){return/touch/.test(t.type)?(t.originalEvent||t).changedTouches[0]["page"+e]:t["page"+e]}function T(n){!p&&function(t){if("touchstart"===t.type)l=!0;else if(l)return l=!1,!1;return!0}(n)&&(p=!0,o=E(n,"X"),a=E(n,"Y"),c=0,d=0,v=setTimeout(function(){f=!0},200),e(n,t),this.dispatchEvent(i("swipestart",!0,!0)),"mousedown"===n.type&&(n.preventDefault(),document.addEventListener("mousemove",b,!1),document.addEventListener("mouseup",g,!1)))}function b(e){var r;p&&(s=E(e,"X"),u=E(e,"Y"),c=s-o,d=u-a,f||m||h||(Math.abs(d)>10?(h=!0,r=i("touchend",!0,!0),this.dispatchEvent(r)):Math.abs(c)>7&&(m=!0)),m&&(e.preventDefault(),n(e,t,c),(r=i("swipe",!0,!0)).movement={diffX:c,diffY:d},y.dispatchEvent(r)),f&&(e.preventDefault(),r=i("sort",!0,!0),y.dispatchEvent(r)),(Math.abs(c)>5||Math.abs(d)>5)&&clearTimeout(v))}function g(e){var n;p&&(p=!1,m?(r(e,t,c),(n=i("swipeend",!0,!0)).customData={diffX:c,diffY:d},y.dispatchEvent(n)):f?(n=i("sortend",!0,!0),y.dispatchEvent(n)):!h&&Math.abs(c)<5&&Math.abs(d)<5&&(e.type,n=i("tap",!0,!0),y.dispatchEvent(n)),m=!1,f=!1,h=!1,clearTimeout(v),"mouseup"===e.type&&(document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",g)))}y.addEventListener("mousedown",T,!1),y.addEventListener("touchstart",T,!1),y.addEventListener("touchmove",b,!1),y.addEventListener("touchend",g,!1),y.addEventListener("touchcancel",g,!1)},l=function(t){t.options.autoplay&&null!==t.timeId&&(clearTimeout(t.timeId),t.timeId=null),t.resizeTimeId&&clearTimeout(t.resizeTimeId),t.resizeTimeId=setTimeout(function(){t.width=t.container.clientWidth,t.options.minPercentToSlide&&(t.compareDistance=t.width*t.options.minPercentToSlide),function(t){var e,i=t.count-1,r=t.width,o=t.list;for(n(o[i],"transform","translate3d(-"+r+"px, 0, 0)"),e=1;e<i;e++)n(o[e],"transform","translate3d("+r+"px, 0, 0)")}(t),t.options.autoplay&&t.autoplay()},200)};function p(e,n,i){var r,o,p,h,f;if(!e||!n)return console.error("Slider: arguments error."),this;if(!(r="string"==typeof e?document.querySelector(e):e))return console.error("Slider: cannot find container."),this;if(!(o="string"==typeof n?r.querySelectorAll(n):n)||!o.length)return console.error("Slider: no item inside container."),this;for(var m in f=this,i=i||{},t)void 0===i[m]&&(i[m]=t[m]);1!==(p=(o=Array.prototype.slice.call(o)).length)&&(h=r.clientWidth-55,this.options=i,this.compareDistance=0,this.timeId=null,this.width=h,i.minPercentToSlide&&(this.compareDistance=h*i.minPercentToSlide),a(this,r,o,p,i.current,h),d(this,s,u,c),window.addEventListener("resize",function(){l(f)},!1),i.autoplay&&(this.interval=Math.max(2e3,1e3*i.interval),this.autoplay()))}return p.version="0.0.1",p.defaults=t,p.prototype.autoplay=function(){var t=this.interval,e=this;this.timeId=setTimeout(function(){e.slide(),e.autoplay()},t)},p.prototype.slide=function(t,e){var n,a,s,u,c,d=this.list,l=this.current,p=this.count,h=this.width,f=this.options.duration;e=e||0,"left"===(t=t||this.options.direction)?(d.push(d.shift()),this.current=(l+1)%p,f*=1-Math.abs(e)/h):"right"===t?(d.unshift(d.pop()),this.current=(l-1+p)%p,f*=1-Math.abs(e)/h):f*=Math.abs(e)/h,a=d[0],s=d[p-1],u=d[1],n="transform "+f+"s linear","left"===t||"restore"===t&&e>0?r(s,a,u,n,n,""):("right"===t||"restore"===t&&e<0)&&r(s,a,u,"",n,n),o(s,a,u,0,h),(c=i("slideend",!0,!0)).slider=this,c.currentItem=a,this.container.dispatchEvent(c)},p});