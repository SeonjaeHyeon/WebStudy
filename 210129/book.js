const bookInfos = {
    'HTML5': ['김연서', 30000, randNum()],
    'Java': ['황기태', 33000, randNum()],
    'JavaScript': ['윤인성', 25000, randNum()],
    'OS': ['A. Silberschatz', 39000, 0],  // 테스트를 위해 0으로 설정함
    '웹프로그래밍': ['황기태', 28000, randNum()],
};

function Book(title, author, price, stock) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.stock = stock;
}

Book.prototype.toString = function() {
    return `${this.title} / ${this.author}저 / ${this.price}원`;
}
Book.prototype.getStock = function() {
    return this.stock;
}

function randNum() {
    return Math.floor(Math.random() * 10);
}

window.onload = () => {
    let bookArray = new Array();
    for (let key in bookInfos) {
        let value = bookInfos[key];
        bookArray.push(new Book(key, value[0], value[1], value[2]));
    }
    console.log(bookArray);

    let books = document.getElementById('books');
    for (let item of bookArray) {
        let node = document.createElement('div');
        let text = document.createTextNode(item.toString());
        node.appendChild(text);
        books.appendChild(node);
    }

    let search = document.getElementById('search');
    search.addEventListener('click', () => {
        let input = prompt('재고를 알려드립니다.\n책 제목을 입력하세요!');
        if (input == '' || input === null) {
            return;
        }
        console.log(input);

        let stock = document.getElementById('stock');
        let bookObject = null;
        for (let item of bookArray) {
            if (item.title == input) {
                bookObject = item;
                break;
            }
        }
        console.log(bookObject);

        let result = '';
        if (bookObject === null) {
            result = `죄송합니다. ${input}은/는 없습니다.`
        }
        else {
            result = `${bookObject.getStock() ? `${input}은/는 ${bookObject.getStock()}권 있습니다.` : `죄송합니다. ${input}은/는 재고가 없습니다.`}`;
        }
        stock.textContent = result;
        var count = 1;
        var intervalId = setInterval(() => {
            if (stock.style.visibility == 'hidden') {
                stock.style.visibility = 'visible';
                if (count++ === 2) {
                    clearInterval(intervalId);
                }
            }
            else {
                stock.style.visibility = 'hidden';
            }
        }, 200);
    });
}