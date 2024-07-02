// チェックボックスのチェックを外す関数。HTMLファイルで設定した関数名と一致させる
function checkCLEAR()
{
   // labelがblank1〜blank6までのチェックボックスを、for文で回して全てチェックを外す。
   // 「6」は、blankの数に合わせて適宜設定
    for (i=0; i<=1000; i++) {
        var checkbox = document.getElementById("blank" + i);
        if (checkbox !== null && checkbox !== undefined) {
            checkbox.checked = false;
        }
    }
}
/* 更新日の取得 */
const last = new Date(document.lastModified);
const year = last.getFullYear();
const month = last.getMonth() + 1;
const date = last.getDate();
/* 日付を書き換える */
const target = document.getElementById('modify');
target.textContent = year + '-' + month + '-' + date;

// チェックボックスのチェックをする関数。HTMLファイルで設定した関数名と一致させる
function checkALL()
{

    for (i=0; i<=1000; i++) {
        var checkbox = document.getElementById("blank" + i);
        if (checkbox !== null && checkbox !== undefined) {
            checkbox.checked = true;
        }
    }
}

function clickBtn(buttonId, imageId) {
    const targetElement = document.getElementById(imageId);
    targetElement.classList.toggle("hidden");
}

function grayOutContainer(containerId, answerId) {
    var container = document.getElementById(containerId);
    var answer = document.getElementById(answerId);
    if (container) {
        container.classList.toggle('gray-out');
        if (!answer.checked) {
            answer.checked = true;
        }
    }
}

function toggleExplanation(event, explanationId) {
    event.preventDefault();  // デフォルト動作を防ぐ
    var explanation = document.getElementById(explanationId);
    if (explanation) {
        if (explanation.style.display === 'none' || explanation.style.display === '') {
            explanation.style.display = 'block';
        } else {
            explanation.style.display = 'none';
        }
    }
}

function resetAll() {
    var containers = document.getElementsByClassName('container');
    for (var i = 0; i < containers.length; i++) {
        containers[i].classList.remove('gray-out');
    }

    // Reset all checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    // Hide all explanations
    var explanations = document.getElementsByClassName('explanation');
    for (var i = 0; i < explanations.length; i++) {
        explanations[i].style.display = 'none';
    }
}

function copyCode() {
    const code = document.getElementById('python-code').innerText;
    navigator.clipboard.writeText(code).then(function() {
        alert('コードがコピーされました!');
    }, function(err) {
        alert('コピーに失敗しました: ', err);
    });
}