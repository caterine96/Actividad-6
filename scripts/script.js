

/*$(document).ready(function(){
document.write("el jquery esta cargado")
})*/

$('.titulo').css('color','teal')

$('.deportiva').dblclick(function(){
             $(this).addClass('fondo')
})

$('.deportiva').click(function(){
    $(this).css('color','blue')
})

$('.neurologica').dblclick(function(){
    $(this).addClass('fondo')
})

$('.neurologica').click(function(){
    $(this).css('color','orange')
}) 
$('.pediatrica').dblclick(function(){
    $(this).addClass('fondo')
})
 
$('.pediatrica').click(function(){
    $(this).css('color','red')
}) 

$('.reumatologica').dblclick(function(){
    $(this).addClass('fondo')
})

 $('.reumatologica').click(function(){
    $(this).css('color','yellow')
}) 

$('.geriatrica').dblclick(function(){
    $(this).addClass('fondo')
})

$('.geriatrica').click(function(){
    $(this).css('color','brown')
}) 

$('.ortopedica').dblclick(function(){
    $(this).addClass('fondo')
})

$('.ortopedica').click(function(){
    $(this).css('color','teal')
}) 

$('.cardiovascular').dblclick(function(){
    $(this).addClass('fondo')
})

$('.cardiovascular').click(function(){
    $(this).css('color','silver')
})

$('.respiratoria').dblclick(function(){
    $(this).addClass('fondo')
})

$('.respiratoria').click(function(){
    $(this).css('color','fuchsia')
})

function cambio1() {
    $(this).css('background', 'gray')
}

function cambio2() {
    $(this).css('background', 'violet')
}
$('.parrafo').hover(cambio1,cambio2)



function cambio3() {
    $(this).css('background', 'green')
}
function cambio4() {
    $(this).css('background', 'purple')
}

$('.parrafo1').hover(cambio3,cambio4)

function cambio5() {
    $(this).css('background', 'orange')
}
function cambio6() {
    $(this).css('background', 'gray')
}

$('.parrafo2').hover(cambio5,cambio6)








