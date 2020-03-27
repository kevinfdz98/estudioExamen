function navigationEvent(){
    let navigationElements = document.getElementsByClassName( 'menu' );

    for ( let i = 0; i < navigationElements.length; i ++ ){
        navigationElements[i].addEventListener( 'click', ( event ) => {
            
            let selectedSection = document.querySelector( '.selectedSection' );
            selectedSection.classList.add( 'hidden' );
            selectedSection.classList.remove( 'selectedSection' );
            
            let currentElement = event.target.id;
            console.log( `.${currentElement}Section` );
            let elementToShow = document.querySelector( `.${currentElement}Section` );

            elementToShow.classList.remove( 'hidden' );
            elementToShow.classList.add( 'selectedSection' );
        });
    }
}

function activeSection(){
    let navigationList = document.getElementsByClassName('menu'); 

    for(let i = 0; i<navigationList.length; i++){
        navigationList[i].addEventListener('click', (event) => {

            let selectedSection = document.querySelector('.activeOption'); 
            console.log("Here i have the .activeOption");
            console.log(selectedSection); 
            selectedSection.classList.remove('activeOption');
            console.log("after deleting activeOption");
            console.log(selectedSection); 


            let currElement = event.target.id; 
            console.log("here i am");
            console.log(`.${currElement} this is the id`);

            let newSection = document.getElementById(`${currElement}`);
            newSection.classList.add( 'activeOption' );
        })
    }
}

function init(){
    navigationEvent();
    activeSection(); 
}

init();