// 로그인 폼 제출 처리
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = 'welcome.html';
            } else {
                alert('로그인 실패');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('로그인 중 오류가 발생했습니다.');
        });
});

// 회원가입 폼 제출 처리
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('회원가입 완료');
                window.location.href = 'index.html';
            } else {
                alert('회원가입 실패');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('회원가입 중 오류가 발생했습니다.');
        });
});

// ID 중복 확인
function checkUsername() {
    const username = document.getElementById('username').value;

    fetch('/api/auth/check-username', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    })
        .then(response => response.json())
        .then(data => {
            alert(data.available ? 'ID 사용 가능' : 'ID 사용 불가');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('ID 중복 확인 중 오류가 발생했습니다.');
        });
}

// 로그아웃 처리
function logout() {
    fetch('/api/auth/logout', {
        method: 'POST',
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = 'index.html';
            } else {
                alert('로그아웃 실패');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('로그아웃 중 오류가 발생했습니다.');
        });
}

// 환영 메시지 표시
document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        fetch('/api/user/welcome')
            .then(response => response.text())
            .then(data => {
                welcomeMessage.textContent = data;
            })
            .catch(error => {
                console.error('Error:', error);
                welcomeMessage.textContent = '환영합니다!';
            });
    }
});