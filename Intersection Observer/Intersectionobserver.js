const sectionone = document.querySelectorAll('.container-1')
const allSections = document.querySelectorAll('section')
const options = {
    root: null, //viewport
    threshold: 0.25, //observer works when 25% of page is in vp.
};
const callback = ((entries, observer) => {
    console.log(entries,"entries man")
    entries.forEach(entry => {
        console.log(entry);
        //Just Target
        console.log(entry.target);

    });
})
const observer = new IntersectionObserver(callback, options);

// observer.observe(sectionone);
allSections.forEach(section => {
    observer.observe(section);
})