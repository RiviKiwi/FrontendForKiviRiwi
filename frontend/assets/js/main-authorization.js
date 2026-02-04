const passwordFields = document.querySelectorAll('.password-field');

passwordFields.forEach(field => {
    const passwordInput = field.querySelector('input');

    const eyeUse = field.querySelector('.eye svg use'); 

    const avatarIcon = document.querySelector('.avatar img'); 

    if (passwordInput && eyeUse) {
        field.querySelector('.eye').addEventListener('click', () => {
            const isHidden = passwordInput.type === 'password';
            passwordInput.type = isHidden ? 'text' : 'password';

            const newIconId = isHidden 
                ? 'assets/images/icons/icons.svg#open-eye-icon' 
                : 'assets/images/icons/icons.svg#closed-eye-icon';
            
            eyeUse.setAttribute('href', newIconId);
            if (avatarIcon) {
                avatarIcon.src = isHidden 
                    ? 'assets/images/icons/bird-open-svg.svg' 
                    : 'assets/images/icons/bird-log.svg';
            }
        });
    }
});
