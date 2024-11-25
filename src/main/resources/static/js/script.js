// 로그인 폼 제출 처리
document.getElementById('loginForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            window.location.href = 'welcome.html';
        } else {
            alert('로그인 실패');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('로그인 중 오류가 발생했습니다.');
    }
});

// 회원가입 폼 제출 처리
document.getElementById('signupForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
        });
        const data = await response.json();
        if (data.success) {
            alert('회원가입 완료');
            window.location.href = 'index.html';
        } else {
            alert('회원가입 실패: ' + data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('회원가입 중 오류가 발생했습니다.');
    }
});

// ID 중복 확인
async function checkUsername() {
    const username = document.getElementById('username').value;

    try {
        const response = await fetch('/api/auth/check-username', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        });
        const data = await response.json();
        alert(data.available ? 'ID 사용 가능' : 'ID 사용 불가');
    } catch (error) {
        console.error('Error:', error);
        alert('ID 중복 확인 중 오류가 발생했습니다.');
    }
}

// 로그아웃 처리
async function logout() {
    try {
        const response = await fetch('/api/auth/logout', {
            method: 'POST',
        });
        if (response.ok) {
            window.location.href = 'index.html';
        } else {
            alert('로그아웃 실패');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('로그아웃 중 오류가 발생했습니다.');
    }
}

// 환영 메시지 표시
document.addEventListener('DOMContentLoaded', async function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        try {
            const response = await fetch('/api/user/welcome');
            const data = await response.text();
            welcomeMessage.textContent = data;
        } catch (error) {
            console.error('Error:', error);
            welcomeMessage.textContent = '환영합니다!';
        }
    }
});