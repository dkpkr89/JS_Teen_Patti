
class Output{
    constructor(number) {
        this.number_of_player = number;
        this.playing_area = document.getElementById("playing_area");
        this.player_screen = document.getElementById("player_screen");
        //explore following link
        //https://stackoverflow.com/questions/2637696/how-to-place-div-side-by-side
        for (var i =0; i<number; i++){
            var temp = document.createElement("tr");
            temp.id=i;
            temp.style.position = "absolute;"
            document.getElementById("player_screen").append(temp);
        }
        this.count = 0;
    }
    //setup the room to denote number of player
    room_set_up(names){
        for(var i =0; i<this.number_of_player; i++){
            var div=document.createElement('div');
            var name_player = document.createElement('div');
            name_player.innerHTML=names[i].name;
            name_player.style.position = "absolute";
            name_player.style.left = "75px";
            name_player.style.top = "35px";
            div.append(name_player); 
            div.id=('div'+i);
            div.style.border = 'solid';
            div.style.width = '200px';
            div.style.height = '100px';
            div.style.position = 'absolute';

            if(i==0){
                div.style.top = "8px";
                div.style.left = "16px";
            }
            else if(i ==1){
                div.style.bottom = "8px";
                div.style.right = "16px";
            }
            else if(i==2){
                div.style.bottom = "8px";
                div.style.left = "16px";
            }
            else if (i ==3){
                div.style.top = "8px";
                div.style.right = "16px";
            }
            this.playing_area.append(div);
        }
    }
    //Distributes card animation
    distribute_card(){
        for(var i =0; i<this.number_of_player; i++){

        }
    }
    //Displays the card received by player
    show_card_to_player(card, number){
        //give an id and store all ids 
        var add_to = document.getElementById(number);
        add_to.position = 'absolute';

        if(number==0){
            add_to.style.top = "8px";
            add_to.style.left = "16px";
        }
        else if(number ==1){
            add_to.style.bottom = "8px";
            add_to.style.right = "16px";
        }
        else if(number==2){
            add_to.style.bottom = "8px";
            add_to.style.left = "16px";
        }
        else if (number ==3){
            add_to.style.top = "8px";
            add_to.style.right = "16px";
        }

        var new_card = document.createElement('td');
        
        new_card.style.border = "solid";
        new_card.style.height = '150px';
        new_card.style.width = "70px";
        new_card.innerHTML=card;
        new_card.id = ('user'+number+this.count.toString());
        this.count ++;
        add_to.appendChild(new_card);
    }
    //Show cards of every player
    show_all_cards(){
        for(var i =0; i<this.number_of_player; i++){
            
        }
    }
    delete_all(){
        this.player_screen.removeChild();
    }
}