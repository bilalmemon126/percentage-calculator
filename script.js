function percentage() {
    let obtained = parseInt(document.querySelector('#obtained').value);
    let total = parseInt(document.querySelector('#total').value);
    let name = document.querySelector('#name').value;
    
    
    switch(true){
        case !obtained || !total || !name.trim():
            alert('Please Fill Fields')
            break;

        case obtained > total:
            alert('Obtained Marks Should Be Less Then Total Marks')
            break;
            
        default:
            calculate = Math.round((obtained / total) * 100);
            document.querySelector('.name').innerHTML = name;
            document.querySelector('#percent').innerHTML = calculate+'%';
            grade = document.querySelector('#grade');

    }

    switch (true) {
        case calculate >= 80 && calculate <= 100:
            grade.innerHTML = 'A1 Grade'
            break;

        case calculate >= 70:
            grade.innerHTML = 'A Grade'
            break;

        case calculate >= 60:
            grade.innerHTML = 'B Grade'
            break;

        case calculate >= 50:
            grade.innerHTML = 'C Grade'
            break;

        case calculate >= 40:
            grade.innerHTML = 'D Grade'
            break;

        case calculate >= 35:
            grade.innerHTML = 'Pass'
            break;

        case calculate < 35:
            grade.innerHTML = 'Fail'
            break;
    }
}