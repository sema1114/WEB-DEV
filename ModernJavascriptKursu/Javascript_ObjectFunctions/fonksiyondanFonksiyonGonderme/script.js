//Functioun That return function

function Question(hobby) {

    switch (hobby) {
        case 'car':
            return function (name) {
                console.log(name + 'do you have a car?');
            }
            break;
        case 'book':
            return function (name) {
                console.log(name + 'What is your favorite book?');
            }
            break;
        case 'software':
            return function (name,type) {
                console.log(name + 'are you interested in'+type);
            }
            break;

        default:
            return function (name) {
                console.log(name + 'How are you?');
            }
    }

}


var carQuestion = Question('car');
carQuestion('Sema');

var bookQuestion= Question('book');
bookQuestion('Batu');
bookQuestion('Moco');

var softQuestion= Question('software');
softQuestion('Batu ',' Java');