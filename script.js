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

let coins = 100;
let callHistory = [];
updateCallHistory();
let callBtns = document.getElementsByClassName('call-btn');
    for (let i = 0; i < callBtns.length; i++) 
        {
        callBtns[i].addEventListener('click', function(event) {
            let card = event.target.parentNode.parentNode.parentNode;
            let number = card.querySelector('.number').innerText;
            let service = card.querySelector('.service').innerText;
            
            if (coins < 20) 
                {
                    alert('যথেষ্ট পরিমাণ কয়েন নেই। কলের জন্য কমপক্ষে ২০টি কয়েন দরকার।');
                    return;
                }
            
            coins = coins - 20;
            document.getElementById('coins').innerText = coins;
            alert(service + ' - এর জন্য ' + number + ' এ কল দেয়া হচ্ছে...');
            addToHistory(service, number);
        });
}


function addToHistory(service, number) {
    let now = new Date();
    let time = now.toLocaleTimeString();
    let newCall = {
        service: service,
        number: number,
        time: time
    };
    callHistory.unshift(newCall);
    updateCallHistory();
}

function updateCallHistory() {
    let list = document.getElementById('call-list');
    if (callHistory.length === 0) {
        list.innerHTML = '<p class="text-gray-500 text-center py-4 text-sm">এখনও কোনো কল করা হয়নি।</p>';
        return;
    }
    
    let html = '';
    for (let i = 0; i < callHistory.length; i++) 
        {
            let call = callHistory[i];
            html += `<div class="bg-gray-100 rounded-lg p-3">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <p class="font-medium text-[#111111] hind-madurai-font text-sm">${call.service}</p>
                                <p class="text-[#5C5C5C] text-xs">${call.number}</p>
                            </div>
                            <span class="text-xs text-[#111111] ml-2">${call.time}</span>
                        </div>
                    </div>`;
    }
    list.innerHTML = html;
}    

let clear = document.getElementById('clear-btn');
clear.addEventListener('click', function() {
    if (callHistory.length === 0) 
        {
            alert('কল হিস্ট্রি খালি!');
            return;
        }
            
let confirmed = confirm('কল হিস্ট্রি মুছতে চান?');
if (confirmed) 
    {
        callHistory = [];
        updateCallHistory();
    }
});