const src = document.querySelector("video").getAttribute("src");
const answer = window.confirm(`按下 [確定] 開啟本篇筆記的影片連結\n\n${src}\n\n如果點完沒有動作，請重新整理頁面，然後再試一次\n如果仍無法使用，則可能不支援此筆記或方法失效\n\n本書籤開源於: github.com/iambjlu/XiaoHongShu-dl-Bookmark`);
if (answer) {
    window.open(src);
}