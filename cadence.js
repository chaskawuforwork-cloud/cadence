function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  if (current === 'dark') { html.setAttribute('data-theme', 'light'); localStorage.setItem('theme', 'light'); }
  else { html.setAttribute('data-theme', 'dark'); localStorage.setItem('theme', 'dark'); }
}
(function() { const saved = localStorage.getItem('theme'); if (saved) document.documentElement.setAttribute('data-theme', saved); })();
function copyPrompt(buttonElement, targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  const text = target.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const originalText = buttonElement.textContent;
    buttonElement.textContent = '已複製 ✓';
    buttonElement.classList.add('copied');
    showToast('Prompt 已複製到剪貼簿');
    setTimeout(() => { buttonElement.textContent = originalText; buttonElement.classList.remove('copied'); }, 2000);
  }).catch(() => { showToast('複製失敗，請手動框選'); });
}
function showToast(message) {
  let toast = document.getElementById('cadence-toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'cadence-toast'; toast.className = 'toast'; document.body.appendChild(toast); }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
function toggleLang() { showToast('英文版即將上線'); }
function handleSubscribe(form) {
  const email = form.email.value;
  if (!email || !email.includes('@')) { showToast('請輸入有效的 Email'); return false; }
  showToast('訂閱成功，歡迎加入 Cadence');
  form.reset();
  return false;
}
function toggleBookmark(button) { const isBookmarked = button.classList.toggle('bookmarked'); showToast(isBookmarked ? '已加入我的招式集' : '已從招式集移除'); }