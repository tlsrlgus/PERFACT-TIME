const button = document.getElementById('button');
const timerDisplay = document.getElementById('timer');
let timerInterval;
let timerSeconds = 0;
let timerMilliseconds = 0;

button.addEventListener('click', function() {
    if (button.textContent === '클릭') {
        button.textContent = '지금!';
        startTimer();
    } else {
        clearInterval(timerInterval);
        const timeString = `${timerSeconds}:${timerMilliseconds.toString().padStart(3, '0')}`;
        
        let timerTimeForResult = ((timerSeconds*1000 + timerMilliseconds) - 5000)
        if (timerTimeForResult < 0) {
            timerTimeForResult = timerTimeForResult*-1
        }
        const timeToScore = 10000 - timerTimeForResult



        if (timerDisplay.textContent === '05:000' || timeString === '5:000' || timeToScore >= 9995) {

	        timerDisplay.textContent = '05:000';

            setTimeout(function() {
                alert('축하합니다! \n 점수: 10000\n확인을 눌러 자신의 닉네임을 기록하세요!');
                masters()
                resetTimer();
            }, 100);

            
            



        } else {

            alert(`점수: ${timeToScore}\n만약 정확하게 5:000초가 맞는데 이 메시지가 표시된다면 관리자에게 말하세요`);
            resetTimer();
        }
        
    }
});






function startTimer() {
    const startTime = Date.now();
    timerInterval = setInterval(function() {
        const elapsedTime = Date.now() - startTime;
        updateTimerDisplay(elapsedTime);
    }, 10); // 매 밀리초마다 업데이트
}

function updateTimerDisplay(elapsedTime) {
    timerSeconds = Math.floor(elapsedTime / 1000);
    timerMilliseconds = elapsedTime % 1000;

    const formattedSeconds = timerSeconds.toString().padStart(2, '0');
    const formattedMilliseconds = timerMilliseconds.toString().padStart(3, '0');
    timerDisplay.textContent = `${formattedSeconds}:${formattedMilliseconds}`;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerSeconds = 0;
    timerMilliseconds = 0;

    timerDisplay.textContent = '0:000';
    button.textContent = '클릭';
}




function mastersDisplay() {

    if (localStorage.getItem("PerfectTimeMaster1") === null) {
        document.getElementById("first").innerText = "1st Master: TBD";
    } else {
        document.getElementById("first").innerText = `1st Master: ${localStorage.getItem("PerfectTimeMaster1")}`
    }

    if (localStorage.getItem("PerfectTimeMaster2") === null) {
        document.getElementById("second").innerText = "2nd Master: TBD";
    } else {
        document.getElementById("second").innerText = `2nd Master: ${localStorage.getItem("PerfectTimeMaster2")}`
    }

    if (localStorage.getItem("PerfectTimeMaster3") === null) {
        document.getElementById("third").innerText = "3rd Master: TBD";
    } else {
        document.getElementById("third").innerText = `3rd Master: ${localStorage.getItem("PerfectTimeMaster3")}`
    }

    if (localStorage.getItem("PerfectTimeMaster4") === null) {
        document.getElementById("fourth").innerText = "4th Master: TBD";
    } else {
        document.getElementById("fourth").innerText = `4th Master: ${localStorage.getItem("PerfectTimeMaster4")}`
    }

    if (localStorage.getItem("PerfectTimeMaster5") === null) {
        document.getElementById("fifth").innerText = "5th Master: TBD";
    } else {
        document.getElementById("fifth").innerText = `5th Master: ${localStorage.getItem("PerfectTimeMaster5")}`
    }

    if (localStorage.getItem("PerfectTimeMaster6") === null) {
        document.getElementById("sixth").innerText = "6th Master: TBD";
    } else {
        document.getElementById("sixth").innerText = `6th Master: ${localStorage.getItem("PerfectTimeMaster6")}`
    }

    if (localStorage.getItem("PerfectTimeMaster7") === null) {
        document.getElementById("seventh").innerText = "7th Master: TBD";
    } else {
        document.getElementById("seventh").innerText = `7th Master: ${localStorage.getItem("PerfectTimeMaster7")}`
    }

    if (localStorage.getItem("PerfectTimeMaster8") === null) {
        document.getElementById("eighth").innerText = "8th Master: TBD";
    } else {
        document.getElementById("eighth").innerText = `8th Master: ${localStorage.getItem("PerfectTimeMaster8")}`
    }

    if (localStorage.getItem("PerfectTimeMaster9") === null) {
        document.getElementById("ninth").innerText = "9th Master: TBD";
    } else {
        document.getElementById("ninth").innerText = `9th Master: ${localStorage.getItem("PerfectTimeMaster9")}`
    }

    if (localStorage.getItem("PerfectTimeMaster10") === null) {
        document.getElementById("tenth").innerText = "10th Master: TBD";
    } else {
        document.getElementById("tenth").innerText = `10th Master: ${localStorage.getItem("PerfectTimeMaster10")}`
    }
}







function masters() {

    // numOfMaster가 있는지 확인
    if (localStorage.getItem("numOfMaster") !== null) {
        // numOfMaster가 이미 존재하는 경우, 현재 값에 1을 더하여 저장
        var currentNum = parseInt(localStorage.getItem("numOfMaster"));
        localStorage.setItem("numOfMaster", currentNum + 1);
    } else {
        // numOfMaster가 없는 경우, 새로 생성하고 값은 1으로 지정
        localStorage.setItem("numOfMaster", 1);
    }

    var MastersNickname = prompt(`당신은 ${localStorage.getItem("numOfMaster")}번째 Perfect Timer Master입니다 \n기록에 사용될 닉네임을 입력해주세요 \n(실명을 권장합니다, 자랑해야죠 ㅋㅋ)`);
    localStorage.setItem(`PerfectTimeMaster${localStorage.getItem("numOfMaster")}`, MastersNickname);
    mastersDisplay()
    

}




mastersDisplay()
