import './loginButton.scss';

export function initializeLoginButton(onClick){
    const button = document.getElementById('login-button');
    if(onClick){
        button.onclick = onClick;
    }
}

export LoginButton from './loginButton.html';
