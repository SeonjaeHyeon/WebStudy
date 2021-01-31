// window.onload : document의 모든 컨텐츠들이 로드되었을 때 발생하는 이벤트이다.
// dom tree가 형성이 다 된 이후에 호출되므로, 코드 실행 시점을 조절할 수 있다.
// 또는 html의 <script> 태그 속성으로 defer를 주어 html 파싱이 끝나고 해당 js 코드가 실행되도록 설정할 수 있다.
window.onload = function() {
    // console.log : 콘솔창에 로그를 출력하는 메서드이다.
    // document를 콘솔창에 출력한다.
    console.log(document);
    
    // 변수 선언 방식에는 3가지가 있다.(ES6+) : var, let, const
    /*
    var : 변수를 재선언이 가능하다.

    ex)
    var a = '123';
    console.log(a);  // 123

    var a = 'abc';
    console.log(a)  // abc

    let : 변수를 재선언할 때 에러가 발생한다. 재할당은 가능하다.

    ex)
    let a = '123';
    console.log(a);  // 123

    let a = 'abc';
    // Uncaught SyntaxError: Identifier 'a' has already been declared
    console.log(a);

    a = 'ABC';
    console.log(a);  // ABC

    const : 변수를 재선언할 수도, 재할당할 수도 없다.

    ex)
    const a = '123';
    console.log(a);  // 123

    const a = 'abc';
    // Uncaught SyntaxError: Identifier 'a' has already been declared
    console.log(a);

    a = 'ABC';
    // Uncaught TypeError: Assignment to constant variable.
    console.log(a);
    */

    /*
    for...in : 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성한다.
    for...of : 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복한다. (Symbol로 키가 지정된 속성은 무시한다.)

    쉽게 말하면 for...in은 index 값을 가져오고(다만 숫자 타입이 아니고 문자열 타입이다. 객체가 key-value 형태일 경우 key값을 가져온다.), for...of는 element를 가져온다.(다만 객체가 [Symbol.iterator] 속성을 가지고 있어야 한다.)
    */

    // document.querySelector() : 주어진 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 요소를 반환하는 메서드. 없다면 null 반환

    // document.getElementById() : 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환하는 메서드. 없다면 null 반환
    let test_1 = document.getElementById('id-1');
    console.log(test_1);

    // document.getElementsByClassName() : 주어진 클래스를 가진 모든 자식 요소를 찾고, 이를 나타내는 HTMLCollection (유사 배열) 객체를 반환하는 메서드. 없다면 빈 객체 반환
    let test_2 = document.getElementsByClassName('testClass');
    // return type array
    for (let item of test_2) {
        console.log(item);
    }

    // document.getElementsByTagName() : 주어진 태그명과 일치하는 모든 요소를 찾고, 이를 나타내는 태그명을 포함하는 HTMLCollection 객체와 반환하는 메서드. 없다면 빈 객체 반환
    let test_3 = document.getElementsByTagName('div');
    for (let i = 0; i < test_3.length; i++) {
        console.log(i);
    }

    let num = document.getElementsByTagName('span');
    for (let item of num) {
        item.innerText += 1;
    }

    // Node.innerText : 요소와 그 자손의 렌더링 된 텍스트 콘텐츠를 나타낸다.
    // Node.textContent : 노드와 그 자손의 텍스트 콘텐츠를 표현한다. 원시 텍스트 (raw text)를 가져오기 때문에 여백, 줄바꿈 등의 의도적인 스타일을 그대로 가져온다.
    // Element.innerHTML: 요소 내에 포함된 HTML 또는 XML 마크업을 가져오거나 설정한다.
    console.log(test_1.innerText);
    console.log(test_1.textContent);
    console.log(test_1.innerHTML);

    test_1.innerHTML = 'text - 1';
    console.log(test_1.innerHTML);
    console.log(test_1.innerText);
    test_1.innerHTML = 'text - 2';
    console.log(test_1.innerText);
};
// html download -> dom tree 변환 -> rendering
// js download -> 실행 (시점 조절이 필요하다.)

// document.createElement() : 지정한 태그명의 HTML 요소를 만들어 반환한다.
let newDiv = document.createElement('div');
newDiv.innerText = '새로 생성된 div';
// Element.getAttribute() : 해당 요소에 지정된 값을 반환 한다. 만약 주어진 속성이 없다면 null 또는 "" (빈 문자열) 반환
// Element.setAttribute() : 지정한 요소에 대한 속성 값을 설정한다.
newDiv.setAttribute('id', 'newDiv');
// Element.style : 요소의 인라인 스타일에 접근하거나 설정할 때 사용할 수 있다.
newDiv.style.backgroundColor = 'green';

let div = document.getElementById('add');  // null return
console.log(div);
// Node.insertBefore() : 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입한다.
// 만약 주어진 자식 노드가 document에 존재하는 노드를 참조한다면, 그 자식 노드를 현재 위치에서 새로운 위치로 옮긴다.
// Node.appendChild() : 지정된 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙인다.
// 만약 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면 그 노드를 현재 위치에서 새로운 위치로 이동시킨다.
div.appendChild(newDiv);  // Uncaught TypeError: Cannot read property 'appendChild' of null
// 위 코드에서 에러가 발생했기 때문에 여기서 멈추고 아래 코드들은 실행되지 않는다.

let click = document.getElementById('click');  // 될 수도 있고 안 될수도 있음. dom tree 형성이 다 되기 전에 이 부분이 실행될 수도 있기 때문
console.log(click);
click.setAttribute('href', 'www.naver.com');
click.style.backgroundColor = 'red';
// GlobalEventHandlers.onclick : 주어진 요소의 click 이벤트를 처리하기 위한 EventHandler이다.
click.onclick = function(event) {
    // event.preventDefault() : 이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지 않고 그 이벤트를 취소한다.
    event.preventDefault();
    
    // Window.alert() : 확인 버튼을 가지며 메시지를 지정할 수 있는 경고 대화 상자를 띄운다.
    let a = alert('클릭하지 말라고 했습니다.');  // null return
    // Window.confirm() : 확인과 취소 두 버튼을 가지며 메시지를 지정할 수 있는 모달 대화 상자를 띄운다.
    let b = returnBool = confirm('실행하시겠습니까?');  // true / false return
    // Window.prompt() : 사용자가 텍스트를 입력할 수 있도록 안내하는 선택적 메세지를 갖고 있는 대화 상자를 띄운다.
    let name = prompt('이름을 입력해주세요.');

    console.log(a);
    console.log(b);
    console.log(name);
};

// this : 지금 동작하고 있는 코드를 가지고 있는 객체를 가리킨다.

// document.write() : document.open()에 의해 열린 문서 스팀에 텍스트 스트링을 적는다. html 태그를 포함할 수 있다.
// document.open()를 명시적으로 호출하지 않아도 document.write()를 호출함으로써 document.open()이 먼저 자동으로 호출된다.
// document.close()는 자동으로 호출되지 않으므로 document.write()를 더 이상 호출할 필요가 없을 때 document.close()를 호출해주는 것이 좋다.
// document.writeln() : <pre> 태그 안에서 자동 줄바꿈을 해준다. 나머지는 document.write()과 같다.

// 동기: 현재 호출한 코드가 끝나면 다음 코드로 넘어감.
// 변수 a 선언 -> a 출력

// 비동기: 현재 호출한 코드가 끝나지 않아도 다음 코드로 넘어감.
// 검색어를 입력하여 검색 결과를 가져오는 중에 검색과 관련 없는 다른 작업이 가능함.

// 검색 결과에 따른 코드들은 같이 비동기처리함.
// 검색 결과와 상관없는 코드들은 검색 결과를 기다리지 않고 바로 실행해도 상관 없음.
