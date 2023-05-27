let options = {
root: null,
rootMargin: '0px',
treshold: 1.0
};

let callback = (entries, observer)=>{
    entries.forEach(entry => {
        if(entry.target.id == 'video')
        {
            if(entry.isIntersecting){
                entry.target.play();
            }
            else{
                entry.target.pause();
            }
        }
    });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#video'));
