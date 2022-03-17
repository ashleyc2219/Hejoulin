import React from 'react'
import './../styles/Sakeintro/Sakeintro.css'

const SakeIntro = () => {
  return (
    <>
      <div className="sake-intro">
        <div className="img-box"></div>

        <div className="container sake-intro-container">
          <div className="sakeintro-content">
            <div className="word-box">
              <p>
                很多人都認為，清酒要從最貴的開始品飲。因為貴的清酒口感上會比較柔和，也比較好入口。還有人對於清酒的印象停留在「長輩才喝的酒」或「酒精濃度高」，這樣的誤解，也可能是清酒少有被推薦的其中一個原因。我們不妨通過傳遞清酒知識，解開迷思，引導酒友進入清酒的世界。
              </p>
            </div>
            <div className="big-title">
              <h1>認識清酒</h1>
            </div>
          </div>
          <div className="sakeintro-title1">
            <h2>產地</h2>
            <p>產地對於清酒而言，就是各式不同的組成元素代表。</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SakeIntro
