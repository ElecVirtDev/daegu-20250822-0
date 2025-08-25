// API 서버 주소 (환경에 맞게 수정)
const API_BASE_URL = "https://your-api-server.com";

document.getElementById("sumbitBtn").addEventListener("click", async () => {
  //const userId = document.getElementById("userId").value.trim();
  const userName = document.getElementById("userName").value.trim();
  const userBirth = document.getElementById("userBirth").value.trim();
  const userTel = document.getElementById("userTel").value.trim();
  const userEmail = document.getElementById("userEmail").value.trim();
  const userSchool = document.getElementById("userSchool").value.trim();
  const userMajor = document.getElementById("userMajor").value.trim();
  const userGradu = document.getElementById("userGradu").value.trim();
  const userCompany = document.getElementById("userCompany").value.trim();
  const userDuty = document.getElementById("userDuty").value.trim();
  const userDutyDate = document.getElementById("userDutyDate").value.trim();
  const userTechStack = document.getElementById("userTechStack").value.trim();
  const userIntro = document.getElementById("userIntro").value.trim();

  const checkNum = /^-?\d+$/;
  const checkDate = /^\d{4}-\d{4}$/;

  console.log(userDutyDate);
  console.log(checkNum.test(userDutyDate));

  if (userName.length == 0) {
    showToast("이름을 입력하세요.", "warning");
  }

  if (userBirth.length != 10) {
    showToast("생년월일을 입력하세요.", "warning");
  }

  if (userTel.length != 11 || !checkNum.test(userTel)) {
    showToast("올바른 전화번호 11자를 입력하세요.", "warning");
  }

  if (
    userEmail.length == 0 ||
    !userEmail.includes("@") ||
    !userEmail.includes(".")
  ) {
    showToast("올바른 이메일 주소를 입력하세요. (예: abc@xyz.com)", "warning");
  }

  if (userSchool.length == 0) {
    showToast("학교명을 입력하세요.", "warning");
  }

  if (userMajor.length == 0) {
    showToast("전공을 입력하세요.", "warning");
  }

  if (userGradu.length != 4 || !checkNum.test(userGradu)) {
    showToast("졸업년도를 입력하세요. (예: 2025)", "warning");
  }

  if (userCompany.length == 0) {
    showToast("회사명을 입력하세요.", "warning");
  }

  if (userDuty.length == 0) {
    showToast("직무를 입력하세요.", "warning");
  }

  if (userDutyDate.length < 4 || !checkDate.test(userDutyDate)) {
    showToast("올바른 근무 기간을 입력하세요.", "warning");
  }

  if (userTechStack.length == 0) {
    showToast("기술 스택을 입력하세요.", "warning");
  }

  if (userIntro.length < 50) {
    showToast("자기 소개를 입력하세요. (최소 50자)", "warning");
  }

  //console.log("userId -- " + userId.length);

  // if (userId.length > 8) {
  //   showToast("아이디는 8글자 이하 입니다.", "warning");
  //   showToast("영문으로만 하세요", "warning");
  // }

  // console.log("password -- " + password);
});

// showToast('저장되었습니다!', 'success');
// showToast('오류가 발생했습니다!', 'error');
function showToast(message, type = "info", duration = 3000) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");

  // Tailwind 색상 매핑
  const typeClasses = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white",
  };

  toast.className = `toast px-4 py-2 rounded shadow-lg transition 
                     transform duration-300 ease-in-out 
                     ${typeClasses[type] || typeClasses.info}`;
  toast.textContent = message;

  container.appendChild(toast);

  // 일정 시간 후 fade-out
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-20px)";
    setTimeout(() => container.removeChild(toast), 300);
  }, duration);
}
