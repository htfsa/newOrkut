
function handleLeft(){
    document.querySelector('.photo').src = "photos/hbt.jpg";
}



const imagens = ['photos/photo1.jpg',
                'photos/photo2.jpg',
                'photos/photo3.jpg',
                'https://i.imgur.com/GoOW8yn.jpeg'
                ];

let photoatual = 0

function pulo(){
    photoatual++;
    if (photoatual>= imagens.length){
        photoatual=0
    }



document.querySelector('#foto').src = imagens[photoatual];
}


