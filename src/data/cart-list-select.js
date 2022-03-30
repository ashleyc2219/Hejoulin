const data = {
  '台灣 (本島地區)': [
    '基隆市',
    '台北市',
    '新北市',
    '宜蘭縣',
    '新竹市',
    '新竹縣',
    '桃園市',
    '苗栗縣',
    '台中市',
    '彰化縣',
    '南投縣',
    '嘉義市',
    '嘉義縣',
    '雲林縣',
    '台南市',
    '高雄市',
    '屏東縣',
    '台東縣',
    '花蓮縣',
  ],
  '台灣 (外島地區)': ['金門縣', '連江縣', '澎湖縣'],
}

export const islands = Object.getOwnPropertyNames(data)
export const townships = islands.map((v, i) => data[v])
