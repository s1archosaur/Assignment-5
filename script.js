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

