
var i=1


function next(){
    i++
    if (i==2) {
        document.getElementById('image').src='https://image.shutterstock.com/image-vector/happy-independence-day-pakistan-vector-260nw-1933272974.jpg'
        document.getElementById('pre').removeAttribute('disabled')
    }
    if (i==3) {
        document.getElementById('image').src='https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/292500/292588.3.jpg'
    }
    if (i==4) {
        document.getElementById('image').src='https://cdn.britannica.com/w:400,h:300,c:crop/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg'
     
    }
    if (i==5) {
        document.getElementById('image').src='https://static.toiimg.com/thumb/msid-82006618,imgsize-119117,width-400,resizemode-4/82006618.jpg'
        document.getElementById('next').setAttribute('disabled',true)
        
    }

}
function pre(){
    i--
    if (i==1) {
        document.getElementById('image').src='https://image.shutterstock.com/image-photo/flag-pakistan-on-military-uniforms-260nw-1250190367.jpg'
        document.getElementById('pre').setAttribute('disabled',true)
    }
    if (i==2) {
        document.getElementById('image').src='https://image.shutterstock.com/image-vector/happy-independence-day-pakistan-vector-260nw-1933272974.jpg'

    }
    if (i==3) {
        document.getElementById('image').src='https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/292500/292588.3.jpg'
     
    }
    if (i==4) {
        document.getElementById('image').src='https://cdn.britannica.com/w:400,h:300,c:crop/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg'
        document.getElementById('next').removeAttribute('disabled')
    }
    if (i==5) {
        document.getElementById('image').src='https://static.toiimg.com/thumb/msid-82006618,imgsize-119117,width-400,resizemode-4/82006618.jpg'
        
     
    }
   
}