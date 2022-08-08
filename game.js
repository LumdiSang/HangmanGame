
const words = ['tiger', 'apple', 'orange', 'thor','lion','grapes','javascript','batman','caba','innovatives'];
const btnText = document.getElementById('btn');
const parent = document.getElementById('inputs');
const p = document.getElementById('success');
const rp = document.querySelector('.rp');
const e = document.querySelector('.options');
let rn = null;
let word = '';
let not = null;
const inpArray = [];
let prrn;

    function start(){

        gover.style.visibility = "hidden";

        p.innerHTML = "";
        if(btnText.innerHTML === 'start'){
            btnText.innerHTML = 'check';
            btnText.setAttribute('onclick', 'check()');
            const exitBtn = document.createElement('button');
            const exitBtnText = document.createTextNode('Exit');
            exitBtn.appendChild(exitBtnText);
            exitBtn.id = 'reset';
            exitBtn.setAttribute('onclick', 'reset()');
            e.appendChild(exitBtn);
        }

        // --- remove any existing input tags.

        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }

        // --- creates inputs for the word.

        let i = words.length;
        rn = Math.floor(Math.random()*i);

        word = words[rn];

        for(let i=0 ; i < word.length ; i++){
            const inp = document.createElement('input');
            inp.setAttribute('maxlength', 1);
            parent.appendChild(inp);
           inpArray[i] = inp;
        }

        // --- displaying only some chars.

        not = word.length/2;
        let num = 0;
        prrn = [];

        if(word.length%2 == 0){
            while(num < not){
                let ranum = Math.floor(Math.random() * word.length);
                    if(prrn.includes(ranum)){
                        continue;
                    }
                prrn.push(ranum);
                inpArray[prrn[num]].value = word[prrn[num]];
                num++;
            }
        }
        else{
            let fOdd = Math.ceil(not);
                while(num < fOdd){
                    let ranum = Math.floor(Math.random() * word.length);
                       if(prrn.includes(ranum)){
                            continue;
                        }
                    prrn.push(ranum);
                    inpArray[prrn[num]].value = word[prrn[num]];
                    num++;
                }
        }
    };

    let score = 0;
    const gover = document.getElementById('gover');

    function check(){

        let ch = '';
        const wordArr = Array.from(parent.childNodes);
        wordArr.forEach((char) => {
            ch += char.value;
        })

        const b = document.createElement('button');
        const next = document.createTextNode('Next');
        const tryA = document.createTextNode('Try Again');
        const numScr = document.getElementById('numScr');

            if(words[rn] == ch){
                p.id = 'success';
                p.innerHTML = 'SUCCESS --- ';
                b.appendChild(next);
                b.setAttribute('onclick', 'start()');
                p.appendChild(b);
                numScr.innerHTML = eval(+score+10);
                score = numScr.innerHTML;
            }
            else{
                p.id = 'wrong';
                p.innerHTML = 'WRONG! --- ';
                b.appendChild(tryA);
                p.appendChild(b);
                numScr.innerHTML = eval(+score-5);
                score = numScr.innerHTML;
                if(score > 0){
                    
                    if(score == 5){
                        numScr.innerHTML += "   --  Last Chance!!";
                    }
                    
                }
                else{
                    reset();
                    gover.style.visibility = "visible";
                }
                
                b.addEventListener('click', () =>{
                    while(parent.firstChild){
                    parent.removeChild(parent.firstChild);
                }
                    for(let i=0 ; i < word.length ; i++){
                        const inp = document.createElement('input');
                        inp.setAttribute('maxlength', 1);
                        parent.appendChild(inp);
                        inpArray[i] = inp;
                    }

                let newNum = 0;

                    if(word.length%2 == 0){
                            while(newNum < not){
                                inpArray[prrn[newNum]].value = word[prrn[newNum]];
                                newNum++;
                            }
                    }
                    else{
                        let fOdd = Math.ceil(not);
                        while(newNum < fOdd){
                            inpArray[prrn[newNum]].value = word[prrn[newNum]];
                            newNum++;
                        }
                        }
                })
            }
    };

    function reset(){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
        while(rp.firstChild){
            rp.removeChild(rp.firstChild);
        }
        parent.innerHTML = 'click start to play!';
        btnText.innerHTML = 'start';
        btnText.setAttribute('onclick', 'start()');
        document.getElementById('reset').remove();
    }

