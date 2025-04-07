const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

//console.log(estilosBody)

console.log(backgroundColorBody)

for (let i of ps) {
    //console.log(ps)
    //document.getElementById(ps).style.color = backgroundColorBody;
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = 'white';
    //console.log(i)

    

}

