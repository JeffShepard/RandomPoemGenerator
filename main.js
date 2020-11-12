
let poem = 

`I once knew a man who lived in a jar.
For a stranger sight you'd have to go far.
I asked him once why he lived in a jar.
He grimaced and said, how bizarre you are.`


document.getElementById('poem').innerText = poem;

generateButton = document.getElementById('generate');
generateButton.addEventListener('click', () => {
    const man = ['dream', 'popcicle', 'porcupine', 'cloud'];
let manNum = Math.floor((Math.random()*2)+1);
const jar = ['stuffed bird', 'model airplane', 'Victorian novel', 'suspension bridge'];
let jarNum = Math.floor(Math.random()*3);;
const goFar = ['fly far', 'break dance all night long', 'run a marathon', 'bake cookies all day long'];
let goNum = Math.floor(Math.random()*3);;
const bizarre = ['blinded by love', 'devoid of reason', 'lacking in squashed pumpkins', 'squid-like'];
let bizNum = Math.floor(Math.random()*3);;

poem = 
`I once knew a man who lived in a ${jar[jarNum]}.
For a stranger sight you'd have to ${goFar[goNum]}.
I asked him once why he lived in a ${jar[jarNum]}.
He grimaced and said, how ${bizarre[bizNum]} you are.`;

document.getElementById('poem').innerText = poem;
});
