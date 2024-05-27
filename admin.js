// 비밀번호를 입력받는 함수



function getPassword() {
    // prompt 함수를 사용하여 비밀번호를 입력받음
    var password = prompt("admin:");

    // 입력받은 비밀번호가 "올바른비밀번호"와 일치하면 실행될 함수
    if (password === "070214") {
        masters()
    } 

}



var adminButton = document.getElementById("adminButton");

// 버튼 클릭 시 getPassword 함수 호출
adminButton.addEventListener("click", function() {
    getPassword();
});