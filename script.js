let hearts = 0;

let totalHearts = document.getElementsByClassName('heart-icon');
    for (let i = 0; i < totalHearts.length; i++) 
        {
        totalHearts[i].addEventListener('click', function(event) {
            if (!event.target.classList.contains('fa-solid')) 
                {
                    event.target.classList.remove('fa-regular', 'text-[#5C5C5C]');
                    event.target.classList.add('fa-solid', 'text-red-600');
                    hearts++;
                } 
            else 
                {
                    event.target.classList.remove('fa-solid', 'text-red-600');
                    event.target.classList.add('fa-regular', 'text-[#5C5C5C]');
                    hearts--;
                }
            document.getElementById('hearts').innerText = hearts;
        });
}

let copy = 0;    

    let copyBtns = document.getElementsByClassName('copy-btn');
    for (let i = 0; i < copyBtns.length; i++) 
        {
        copyBtns[i].addEventListener('click', async function(event) {
            let card = event.target.parentNode.parentNode.parentNode;
            let number = card.querySelector('.number').innerText;
            let service = card.querySelector('.service').innerText;
            if (await clipboardCopy(number)) 
                {
                    copy++;
                    document.getElementById('copy').innerText = copy;
                    alert(service + ' - এর নাম্বারটি (' + number + ') কপি করা হয়েছে।');
                }
        });
}

async function clipboardCopy(text) {
    try {
            await navigator.clipboard.writeText(text);
            return true;
        } 
    catch {
            return false;
        }
}

