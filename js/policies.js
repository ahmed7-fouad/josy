// policies page 

let policiesSections= document.querySelectorAll('.policy-section');
let policiesLinks = document.querySelectorAll('.policies-links li a');


console.log(policiesLinks)
window.onscroll=function(){
    let currentScrollPosition=document.documentElement.scrollTop;

    policiesSections.forEach(function(section){
        if(currentScrollPosition > (section.offsetTop - 200) && currentScrollPosition < (section.offsetTop + section.offsetHeight)){
            policiesLinks.forEach(function(link){
                link.classList.remove(`active-policy`);        
            })   
            let activelnk=document.querySelector(`.policies-links li a[href="#${section.id}"]`);
             activelnk.classList.add('active-policy'); 
        }
    })

}

   