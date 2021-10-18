function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

 function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}

function equal() {
    var exp = document.form.textview.value;
    if(exp) {
    document.form.textview.value = eval(exp);
    }
}

function procent() {
    document.form.textview.value = eval( document.form.textview.value) / 100;
}

function sin() {
    document.form.textview.value = Math.sin(eval(document.form.textview.value)).toFixed(8);
}
   
function cos() {
    document.form.textview.value =Math.cos(eval(document.form.textview.value)).toFixed(8);
}

function tan() {
    document.form.textview.value =Math.tan(eval(document.form.textview.value)).toFixed(8);
}

function ctg() {
    document.form.textview.value =1/Math.tan(eval(document.form.textview.value)).toFixed(8);
}

function cor() {
    document.form.textview.value =Math.sqrt(eval(document.form.textview.value)).toFixed(8);

}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function fact() {
    document.form.textview.value = factorial(+eval(document.form.textview.value))
}

function log() {
    document.form.textview.value = Math.log10(eval(document.form.textview.value)).toFixed(8);
}
function toggle() {
    let toggler = document.getElementById("toggler");
    let scientific = document.getElementById("scientific");

    toggler.classList.toggle("toggler_on");
    if(scientific.classList.contains('hidden_block')) {
        scientific.classList.remove('hidden_block');
        scientific.classList.add('visible_block');
    }
    else if(scientific.classList.contains('visible_block')) {
        scientific.classList.remove('visible_block');
        scientific.classList.add('hidden_block');
    }
}

