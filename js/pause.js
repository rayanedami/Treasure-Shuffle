function pauseGame(){

    gamePaused = true;

    showPanel(

        "PAUSED",

        "The treasure awaits...",

        [

            {

                text:"Resume",

                action:()=>{

                    gamePaused=false;

                    hidePanel();

                }

            },

            {

                text:"Restart",

                action:()=>{

                    location.reload();

                }

            }

        ]

    );

}

document.addEventListener("keydown",event=>{

    if(event.key==="Escape"){

        if(!gamePaused){

            pauseGame();

        }

    }

});