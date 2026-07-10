function wait(ms) {

    return new Promise(resolve => {

        function check() {

            if (game.paused) {

                requestAnimationFrame(check);

                return;

            }

            setTimeout(resolve, ms);

        }

        check();

    });

}