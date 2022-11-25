import bounds from "bounds.js";

const boundary = bounds({
    margins: { bottom: 100 }  //watches html element based on this value 
})

/*const h2 = document.querySelector('h2')

boundary.watch(h2,() => {
    //your code when h2 element is in section
    boundary.unWatch(h2)
})
*/
const image = document.querySelectorAll('img')
const imgLazyLoading = (image) => {
    return() => {
    image.src = image.dataset.src
    boundary.unWatch(image)
}
}

image.forEach( img => {
boundary.watch(img,imgLazyLoading(img))
})