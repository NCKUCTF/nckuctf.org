#!/bin/bash

# 定義壓縮的目標質量，數值範圍是 0-100，數值越小壓縮率越高，質量越低
quality=75

# 搜尋目前目錄下的所有 PNG 圖片檔案
for file in *.png; do
    # 檢查檔案是否存在
    if [[ -f "$file" ]]; then
        # 使用 convert 命令調整圖片質量來壓縮圖片
        convert "$file" -quality $quality "${file%.*}.png"
    fi
done

echo "Compression complete."
