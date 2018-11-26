let bubble = (array) => {
    //Повторяем пока не отсартируем массив
    let not_sorted = true;
    let temp = [];

    while (not_sorted) {
        //Предполагаем что неправильных пар нет
        not_sorted = false;

        //ищем смежные элементы массива стоящие в неправильном порядке
        for (let i = 0; i < array.length; i++) {
            //Проверяем стоят ли элементы i и i - 1 в правильном порядке
            if (array[i] < array[i-1]) {
                //Меняем их местами
                temp = array[i];
                array[i] = array[i-1];
                array[i-1] = temp;

                // массив еще не отсортирован
                not_sorted = true;
            }
            
        }
        
    }

    return not_sorted;
}

let arr = [0, 1, 2, 4, 5, 6, 3, 7, 9, 8];

if (bubble(arr) === false) {
    for (let j = 0; j < arr.length; j++){
        document.write(arr[j]);
    }
}