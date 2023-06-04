//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;

//Тоглогчийн цуглуусан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) +1;

//Програм эхлэхэд бэлтгэе
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector('.dice');
diceDom.style.display = "none";
//Шоог шидэх event listener
document.querySelector(".btn-roll").addEventListener('click', function (){
    //1-6 дотор санамсаргүй тоог гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) +1;

    //Шооны зургийг веб дээр гаргаж ирнэ.
    diceDom.style.display = "block"; //block нь харагддаг болгоно

    //Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ.
    diceDom.src = 'dice-' + diceNumber + '.png';

    //ТБуусан тоо нэгээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if(diceNumber !== 1){
        //1-с ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
        roundScore+=diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{
        //1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

        //Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
        //Хэрэв идэвхитэй тоглогч нь 0 байвал идэвхитэй тоглогчийг 1 болго.
        //Үгүй бол идэвхитэй тоглогчийг 0 болго.
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;

        //Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        //Улаан цэгийг шилжүүлэх.
        document.querySelector('.player-0-panel').classList.toggle('active');//toggle - байвал устгана байхгүй бол нэмнэ
        document.querySelector('.player-1-panel').classList.toggle('active');

        //Шоог түр алга болгоно.
        diceDom.style.display = "none";
        
       
    }
});