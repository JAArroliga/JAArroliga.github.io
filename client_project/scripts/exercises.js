document.addEventListener("DOMContentLoaded", () => {
    
    console.log("Code is running");

    const content = {
        1: `<div class="content">
                <strong>Bicep Curl</strong>
                
                <figure>
                    <img src="images/bicep_curl.jpeg" alt="Holding Barbell in the upwards position" style="width: auto" />
                    <figcaption>Holding Barbell in the upwards position</figcaption>
                </figure>
            
                Hold the barbell with both hands facing up so the wrists, elbows, and shoulders are in a straight line about shoulder-width apart. 
                Lift the barbell toward the shoulders while bending the elbows and keeping them next to the middle of the body. 
                Slowly lower the weight to return to the starting position. Keep chest still, using just the arms for the movement.
            </div>`,
        2: `<div>
                <strong>Chest Press</strong>
                
                <figure>
                    <img src="images/chest_press.jpeg" alt="" style="width: auto" />
                    <figcaption>Holding Chest Press close to body. </figcaption>
                </figure>

                Lie face up on a flat bench, and grip a barbell with the hands slightly wider than shoulder-width.
                Press the feet into the ground and the hips into the bench while lifting the bar off the rack. 
                Slowly lower the bar to the chest by allowing the elbows to bend out to the side. 
                Stop when the elbows are just below the bench, and press feet into the floor to press the weight straight up to return to the starting position.
            </div>`,
        3: `test`
    };
    
    const mainContent= document.getElementById("main-content");
    const items = document.getElementsByClassName("sidebar-item");
    
    Array.from(items).forEach((item) => {
        item.addEventListener("click", () => {
            const id = item.dataset.id;
            mainContent.innerHTML = content[id]
        });
    });

});