//IGNORE THIS,, WEIRD SCRIPT I MADE,,
rainbowArray = [];

function rainbow_function(num_of_colors){
    var red = 255;
    var blue = 0;
    var green = 0;
    
    var incrementation = 255 / num_of_colors;
    
    max_num_hit = 0;
    current_color = 3;
    
    while(max_num_hit < num_of_colors){
        
        if(current_color === 1){
                if(max_num_hit % 2 === 0){
                    rainbowArray.push("rgb("+ red +"," + green + ","+ blue + ")")
                    red += incrementation;
                }else{
                    rainbowArray.push("rgb("+ red +"," + green + ","+ blue + ")")
                    red -= incrementation
                }
                
                if(red === 255){
                    max_num_hit++
                    current_color++
                }else if(red == 0){
                    max_num_hit++
                    current_color++
                }
                
        }else if(current_color === 2){
                if(max_num_hit % 2 === 0){
                    rainbowArray.push("rgb("+ red +"," + green + ","+ blue + ")")
                    green += incrementation
                }else{
                    rainbowArray.push("rgb("+ red +"," + green + ","+ blue + ")")
                    green -= incrementation
                }
                
                if(green === 255){
                    max_num_hit++
                    current_color++
                }else if(green == 0){
                    max_num_hit++
                    current_color++
                }
                
        }else if(current_color === 3){
                if(max_num_hit % 2 === 0){
                    console.log("start")
                    rainbowArray.push("rgb("+ red +"," + green + ","+ blue + ")")
                    blue += incrementation
                }else{
                    rainbowArray.push("rgb("+ red +"," + green + ","+ blue + ")")
                    blue -= incrementation
                }
                
                if(blue === 255){
                    max_num_hit++
                    current_color -= 2
                }else if(blue === 0){
                    max_num_hit++
                    current_color -= 2
                }
        }
        
        
    }
}

rainbow_function(6);
console.log(rainbowArray)