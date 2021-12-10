var a = 1
function picChangeButton(n) {
    a = a + n
    if (a < 1) {
        a = 3
    }
    else if (a > 3) {
        a = 1
    }
    picChange(a)
}
function picOffAll() {
    document.getElementById('pic1').style.display = 'none';
    document.getElementById('pic2').style.display = 'none';
    document.getElementById('pic3').style.display = 'none';
}

function picChange(n) {
    var times = n
    if (times == 1) {
        picOffAll()
        document.getElementById('pic1').style.display = 'block';
    }
    else if (times == 2) {
        picOffAll()
        document.getElementById('pic2').style.display = 'block';
    }
    else if (times == 3) {
        picOffAll()
        document.getElementById('pic3').style.display = 'block';
    }
    else if (times > 3) {
        times = 1
    }
    else if (times < 1) {
        times = 3
    }
}
setInterval("picChangeButton(1)",7000);

function imageChangeButtonOn() {
    document.getElementById('before_img').style.display = 'block';
    document.getElementById('next_img').style.display = 'block';
    
}

function imageChangeButtonOff() {
    document.getElementById('before_img').style.display = 'none';
    document.getElementById('next_img').style.display = 'none'
}

function menuDisplay() {
    var x = document.getElementById('menu')
    if (x.style.display == 'block') {x.style.display = 'none';}
    else {x.style.display = 'block';};
}