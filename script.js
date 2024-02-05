function calculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1==="" || name2 ===""){
        alert("Please enter both names.")
    }else{
        const lovePer = Math.floor(Math.random() * 101);

        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2} 's Love Percentage: ${lovePer}%`;

        if(lovePer<30){
            result.innerHTML += "<br> Not a Great Match. Keeping Looking"
        }else if(lovePer >=30 && lovePer < 70){
            result.innerHTML += "<br> There is potential. Give it a try!"
        }else{
            result.innerHTML += "<br> Great Match! Love is in the Air!"
        }
    }
}