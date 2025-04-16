const translations = {
  en: {
    // Hero
    title: "Local Tourism Feedback",
    description: "CHOOSE YOUR PREFERRED LANGUAGE",
    help_us: "Help us improve your tourist experience!",
    // VISITOR INFO
    legend_visitor: "VISITOR INFO",
    name: "Name:",
    lblName: "Name:",
    placeholderName: "Enter your name",
    lblNationality: "Nationality:",
    optLocal: "Local",
    optForeign: "Foreign",
    lblVisitDate: "Visit Date:",
    // EXPERIENCE RATING
    legend_experience: "EXPERIENCE RATING",
    lblAmenities: "Amenities:",
    chkRestrooms: "Restrooms",
    chkParking: "Parking",
    chkGuides: "Guides",
    lblCleanliness: "Cleanliness:",
    lblComments: "Comments:",
    comments: "Add your comments or suggestions...",
    submit: "Submit Feedback",
    team1_info: "Team 1 - Web Development © 2025",
    tac: "Terms and Conditions",
    privacy: "Privacy Policy",
  },
  jpn: {
    // Hero
    title: "地域観光に関するフィードバック",
    description: "ご希望の言語を選択してください",
    help_us: "あなたの観光体験の向上にご協力ください！",
    // VISITOR INFO
    legend_visitor: "訪問者情報",
    name: "名前",
    lblName: "名前：",
    placeholderName: "名前を入力してください",
    lblNationality: "国籍：",
    optLocal: "地元",
    optForeign: "外国",
    lblVisitDate: "訪問日:",
    // EXPERIENCE RATING
    legend_experience: "体験評価",
    lblAmenities: "アメニティ:",
    chkRestrooms: "トイレ",
    chkParking: "駐車場",
    chkGuides: "ガイド",
    lblCleanliness: "清潔さ:",
    lblComments: "コメント:",
    comments: "コメントや提案を追加してください...",
    submit: "フィードバックを送信",
    team1_info: "チーム1 - ウェブ開発 © 2025",
    tac: "利用規約",
    privacy: "プライバシーポリシー",
  },
  kr: {
    // Hero
    title: "지역 관광 피드백",
    description: "선호하는 언어를 선택하세요",
    help_us: "귀하의 관광 경험을 개선하는 데 도움을 주세요!",
    // VISITOR INFO
    legend_visitor: "방문자 정보",
    name: "이름:",
    lblName: "이름:",
    placeholderName: "이름을 입력하세요",
    lblNationality: "국적:",
    optLocal: "현지의",
    optForeign: "외국의",
    lblVisitDate: "방문 날짜:",
    // EXPERIENCE RATING
    legend_experience: "경험 평가",
    lblAmenities: "예의:",
    chkRestrooms: "화장실",
    chkParking: "주차",
    chkGuides: "가이드",
    lblCleanliness: "청결:",
    lblComments: "댓글:",
    comments: "의견이나 제안을 추가하세요...",
    submit: "피드백을 제출하다",
    team1_info: "팀 1 - 웹 개발 © 2025",
    tac: "이용 약관",
    privacy: "개인정보 보호정책",
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  // Hero
  document.getElementById("title").textContent = t.title;
  document.getElementById("description").textContent = t.description;
  document.getElementById("help_us").textContent = t.help_us;
  // VISITOR INFO
  document.getElementById("legend_visitor").textContent = t.legend_visitor;
  document.getElementById("lblName").textContent = t.lblName;
  document.getElementById("name").placeholder = t.placeholderName;
  document.getElementById("lblNationality").textContent = t.lblNationality;
  document.getElementById("optLocal").textContent = t.optLocal;
  document.getElementById("optForeign").textContent = t.optForeign;
  document.getElementById("lblVisitDate").textContent = t.lblVisitDate;
  // EXPERIENCE RATING
  document.getElementById("legend_experience").textContent = t.legend_experience;
  document.getElementById("lblAmenities").textContent = t.lblAmenities;
  document.getElementById("chkRestrooms").textContent = t.chkRestrooms;
  document.getElementById("chkParking").textContent = t.chkParking;
  document.getElementById("chkGuides").textContent = t.chkGuides;
  document.getElementById("lblCleanliness").textContent = t.lblCleanliness;
  document.getElementById("lblComments").textContent = t.lblComments;
  document.getElementById("comments").placeholder = t.comments;
  document.getElementById("submit").textContent = t.submit;
  document.getElementById("team1_info").textContent = t.team1_info;
  document.getElementById("tac").textContent = t.tac;
  document.getElementById("privacy").textContent = t.privacy;
}

// Set default language
setLanguage('en');