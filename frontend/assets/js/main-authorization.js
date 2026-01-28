const passwordFields = document.querySelectorAll('.password-field');

passwordFields.forEach(field => {
  const passwordInput = field.querySelector('input');
  const eyeIcon = field.querySelector('.eye img');
  const avatarIcon = document.querySelector('.avatar img');
  if (passwordInput && eyeIcon) {
    eyeIcon.addEventListener('click', () => {
      const isHidden = passwordInput.type === 'password';
      
      passwordInput.type = isHidden ? 'text' : 'password';
      eyeIcon.src = isHidden
        ? 'assets/images/icons/opened-eye.svg'
        : 'assets/images/icons/closed-eye.svg';
      avatarIcon.src = isHidden
        ? 'assets/images/icons/bird-open-svg.svg'
        : 'assets/images/icons/bird-log.svg';
    });
  }
});

const form = document.getElementById('password-change-form');
const modal = document.getElementById('success-modal');

if (form && modal) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    modal.classList.add('active');
    setTimeout(() => {
      window.location.href = 'self-profile.html';
    }, 2000);
  });
}
