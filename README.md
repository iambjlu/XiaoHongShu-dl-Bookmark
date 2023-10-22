# XiaoHongShu-dl-Bookmark
使用書籤輕鬆下載小紅書筆記的圖片與影片<br>
沒有小紅書浮水印
<br><br>

## 注意
1. 此程式僅支援 Mac 或 PC 上，以 Chromium 為基礎打造的瀏覽器，例如:
- Google Chrome
- Microsoft Edge (版本79以上)
- Brave
2. 本程式隨時可能隨著小紅書官方更新網頁設計而失效，不擔保一定有用
3. 請務必遵守所有相關法律規範，僅供下載自己有權下載的筆記。

<br>
<hr>
<br>


## 下載圖片

### 初始設置
1. 拷貝下列程式碼，然後將游標移到書籤列，按右鍵貼上
```javascript
javascript:console.clear();const answer = window.confirm(`需要先按下F12，然後選擇主控台。才能看到結果。\n\n如果沒有輸出連結，請重新整理頁面，然後再試一次；\n如果仍無法使用，則可能不支援此筆記或方法失效\n\n本書籤開源於: github.com/iambjlu/XiaoHongShu-dl-Bookmark`); if (answer) {let indexp1=0;console.clear(); const slides = document.querySelectorAll('div.swiper-slide'); const indexes = new Set(); const imageUrls = new Map(); for (const slide of slides) { const index = slide.getAttribute('data-swiper-slide-index'); const backgroundImage = slide.style.backgroundImage; const url = backgroundImage.substring(5, backgroundImage.length - 2); imageUrls.set(index, url); indexes.add(index); } const sortedIndexes = [...indexes].sort((a, b) => a - b); for (const index of sortedIndexes) { indexp1+=1;console.log(`第${indexp1}張圖片: ${imageUrls.get(index)}`); } }
```
2. 對新增的`javascript: const src...`書籤按右鍵，然後按下[編輯]，取一個喜歡的名字，例如[小紅書載圖片]

### 使用說明
1. 打開想要下載的筆記，等待頁面載入完成
2. 按下[F12] (部分電腦需要[Fn]+[F12])
3. 點選[主控台] (Console)
4. 按下前述製作好的書籤
5. 點擊超連結可以在新分頁打開圖片
6. 在圖片按右鍵，選擇[另存圖片]即可

- 注意，如果使用過這個書籤腳本，需要重新整理頁面後才能再次使用

<br>
<hr>
<br>

## 下載影片

### 初始設置
1. 拷貝下列程式碼，然後將游標移到書籤列，按右鍵貼上
```javascript
javascript:const src = document.querySelector("video").getAttribute("src"); const answer = window.confirm(`按下 [確定] 開啟本篇筆記的影片連結\n\n${src}\n\n如果點完沒有動作，請重新整理頁面，然後再試一次\n如果仍無法使用，則可能不支援此筆記或方法失效\n\n本書籤開源於: github.com/iambjlu/XiaoHongShu-dl-Bookmark`); if (answer) { window.open(src); }
```
2. 對新增的`javascript: const src...`書籤按右鍵，然後按下[編輯]，取一個喜歡的名字，例如[小紅書載影片]

### 使用說明
1. 打開想要下載的筆記，等待頁面載入完成
2. 按下前述製作好的書籤
3. 按下[確定]可以在新分頁打開影片
4. 在影片按右鍵，選擇[另存影片]即可

- 注意，如果使用過這個書籤腳本，需要重新整理頁面後才能再次使用
