console.clear();
const answer = window.confirm(`需要先按下F12，然後選擇主控台。才能看到結果。\n\n如果沒有輸出連結，請重新整理頁面，然後再試一次；\n如果仍無法使用，則可能不支援此筆記或方法失效\n\n本書籤開源於: github.com/iambjlu/XiaoHongShu-dl-Bookmark`);
if (answer) {
    let indexp1 = 0;
    console.clear();
    const slides = document.querySelectorAll('div.swiper-slide');
    const indexes = new Set();
    const imageUrls = new Map();
    for (const slide of slides) {
        const index = slide.getAttribute('data-swiper-slide-index');
        const backgroundImage = slide.style.backgroundImage;
        const url = backgroundImage.substring(5, backgroundImage.length - 2);
        imageUrls.set(index, url);
        indexes.add(index);
    }
    const sortedIndexes = [...indexes].sort((a, b) => a - b);
    for (const index of sortedIndexes) {
        indexp1 += 1;
        console.log(`第${indexp1}張圖片: ${imageUrls.get(index)}`);
    }
}