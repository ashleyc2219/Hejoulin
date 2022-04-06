import React from 'react'
import './../styles/Sakeintro/Sakeintro.scss'
import GuideButton from '../compenents/SakeGuide/Guide'

const SakeIntro = () => {
  return (
    <>
      <div className="sake-intro">
        <div className="img-box"></div>
        <div className="container">
          <GuideButton />
          <div className="sake-intro-container">
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
          </div>
          {/* 產地 */}
          <div className="sakeintro-title">
            <h2>產地</h2>
            <p>產地對於清酒而言，就是各式不同的組成元素代表。</p>
          </div>
          {/* 產地內容 origin-content */}
          <div className="origin-content">
            <div className="ori-card weather col-md-4 col-sm-12">
              <div className="pic"></div>
              <div className="title">
                <h3>氣候</h3>
              </div>
              <p>
                氣候的影響如北海道的十分寒冷釀造清酒的過程較為緩慢，能讓酒慢慢地醞釀出香氣與鮮度，環境條件相當適合釀酒。北海道的清酒經過長時間自然發酵而熟成，總體來說，酒質清爽且柔和。
              </p>
              <div className="card-bg">
                <div className="front"></div>
                <div className="back"></div>
              </div>
            </div>

            <div className="ori-card water col-md-4 col-sm-12">
              <div className="pic"></div>
              <div className="title">
                <h3>水質</h3>
              </div>
              <p>
                水質的影響如宮城縣的墨迺江酒造在江戶時代曾流淌著北上川的支流——墨迺江川。該酒造以北上川的伏流水（也叫潛水，水質大體介於地下水和地表水之間）與宮城縣酵母釀造上等佳釀，釀出的清酒帶有低調的果實香氣，回味清爽，透明清澈。
              </p>
              <div className="card-bg">
                <div className="front"></div>
                <div className="back"></div>
              </div>
            </div>

            <div className="ori-card rice col-md-4 col-sm-12">
              <div className="pic"></div>
              <div className="title">
                <h3>酒米</h3>
              </div>
              <p>
                酒米的影響如亀の尾這款過往因為太難種植而接近絕跡的米種，近代農業科技的進步讓它重出江湖。用這種酒米釀造出的清酒，口味的複雜性遠高於其他品種的酒米;口感豐醇但餘韻酸澀。
              </p>
              <div className="card-bg">
                <div className="front"></div>
                <div className="back"></div>
              </div>
            </div>
          </div>
          {/* 等級 */}
          <div className="sakeintro-title">
            <h2>等級</h2>
            <p>
              分級標準有二第一樣是<b>「釀造酒精」</b>，而第二樣是
              <b>「精米步合」。</b>
            </p>
          </div>
          {/* 等級內容 level-container*/}
          <div className="level-container">
            <div className="level-box-l">
              <div className="L1-1"></div>
              <div className="L2-1 up">
                <p>釀造酒精</p>
              </div>

              <div className="L3-1 ball">
                <p>米・米麴</p>
              </div>
              <div className="L3-1 ball up">
                <p>米・米麴</p>
                <p>＋</p>
                <p>釀造酒精</p>
              </div>
            </div>
            <div className="level-box-r">
              <div className="L1">
                <div className="L1-2">
                  <img src="Sakeintro/mi-1.svg" alt="" />
                </div>
                <div className="L1-2">
                  <img src="Sakeintro/mi-2.svg" alt="" />
                </div>
                <div className="L1-2">
                  <img src="Sakeintro/mi-3.svg" alt="" />
                </div>
                <div className="L1-2">
                  <img src="Sakeintro/mi-4.svg" alt="" />
                </div>
              </div>
              <div className="L2">
                <div className="L2-2">
                  <p>50%</p>
                </div>
                <div className="L2-2">
                  <p>60%</p>
                </div>
                <div className="L2-2">
                  <p>70%</p>
                </div>
                <div className="L2-2">
                  <p>無規定</p>
                </div>
              </div>
              <div className="L0 up">
                <p>精米步合</p>
              </div>
              <div className="L3">
                <div className="L3-2 ball">
                  <p>純米大吟釀</p>
                </div>
                <div className="L3-2 ball">
                  <p>純米吟釀</p>
                </div>
                <div className="L3-3">
                  <p>純米酒</p>
                </div>
              </div>
              <div className="L4">
                <div className="L4-2 ball">
                  <p>大吟釀</p>
                </div>
                <div className="L4-2 ball">
                  <p>吟釀</p>
                </div>
                <div className="L4-2 ball">
                  <p>本釀造</p>
                </div>
                <div className="L4-3 ball">
                  <p>普通酒</p>
                </div>
              </div>
            </div>
          </div>
          {/* 釀造製成 */}
          <div className="sakeintro-title">
            <h2>釀造製成</h2>
            <p>
              日本酒,葡萄酒和啤酒同屬於釀造酒，其中我們的主角日本酒又有其獨特的發酵作業，現在就讓我們來一步步了解這個國粹的誕生。
            </p>
          </div>
          {/* 釀造製成內容 brew-container */}
          <div className="brew-container">
            {/* 第一層 */}
            <div className="brew-column">
              {/* 1 */}
              <div className="brew-box">
                <div className="item-title">
                  <div className="rice"></div>
                  <div className="title">
                    <h3>精米</h3>
                  </div>
                </div>
                <div className="item-img">
                  <img src="Sakeintro/it_1.svg" alt="" />
                </div>
                <div className="item-word">
                  <p>
                    米本身含有蛋白質、脂質或一些雜質，會產生影響日本酒的香氣，而這些成份大多分佈在米的外圍，所以釀製時會先把米粒外圍研磨並去除，這過程就是
                    “ 精米 ”，而剩下米粒的百分比，就是 “ 精米步合
                    ”，例如去除了米粒 35% 而剩下 65%，就是精米步合 65%
                  </p>
                </div>
              </div>
              {/* ar */}
              <div className="arr-box">
                <img src="Sakeintro/ar01.svg" alt="" />
              </div>
              {/* 2 */}
              <div className="brew-box">
                <div className="item-title">
                  <div className="rice"></div>
                  <div className="title">
                    <h3>蒸米</h3>
                  </div>
                </div>
                <div className="item-img">
                  <img src="Sakeintro/it_2.svg" alt="" />
                </div>
                <div className="item-word">
                  <p>
                    以蒸氣方式蒸煮大約 40 ~ 60
                    分鐘，讓米粒能達到外硬內軟、成為具有彈性的熟米
                  </p>
                </div>
              </div>
              {/* ar */}
              <div className="arr-box">
                <img src="Sakeintro/ar02.svg" alt="" />
              </div>
            </div>
            {/* 第二層 */}
            <div className="brew-column brew_2">
              {/* 3 */}
              <div className="brew-box">
                <div className="item-title">
                  <div className="rice"></div>
                  <div className="title">
                    <h3>製麴</h3>
                  </div>
                </div>
                <div className="item-img">
                  <img src="Sakeintro/it_3.svg" alt="" />
                </div>
                <div className="item-word">
                  <p>
                    米本身沒有糖，需要透過 “ 麴菌 ”
                    將澱粉轉為糖才能發酵。麴菌附著在米粒後菌絲往中心延伸，將澱粉轉為糖的過程就是
                    “ 製麴 ”。而麴菌繁殖在米粒上則稱為 “ 麴米 ”
                  </p>
                </div>
              </div>
              {/* ar */}
              <div className="arr-box">
                <img src="Sakeintro/ar03.svg" alt="" />
              </div>
              {/* 4 */}
              <div className="brew-box">
                <div className="item-title">
                  <div className="rice"></div>
                  <div className="title">
                    <h3>製作酵母</h3>
                  </div>
                </div>
                <div className="item-img">
                  <img src="Sakeintro/it_4.svg" alt="" />
                </div>
                <div className="item-word">
                  <p>
                    這個過程是要培養出強壯且大量的酵母，過程是添加麴米、掛米 (
                    蒸熟的米
                    )、水、酵母、乳酸，有健康的酵母對於接下來的發酵才能順利完成
                  </p>
                </div>
              </div>
              {/* ar */}
              <div className="arr-box">
                <img src="Sakeintro/ar03.svg" alt="" />
              </div>
              {/* 5 */}
              <div className="brew-box">
                <div className="item-title">
                  <div className="rice"></div>
                  <div className="title">
                    <h3>製膠</h3>
                  </div>
                </div>
                <div className="item-img">
                  <img src="Sakeintro/it_5.svg" alt="" />
                </div>
                <div className="item-word">
                  <p>
                    為了酵母的健康，利用酵母耐酸的特性，於轉換酒精的過程中會保持酸度以避免其他微生物影響酵母。一開始會先以酒母在桶內為基底
                    ( 大約佔 6 %
                    )，接下來會投入麴米、掛米、水，為了不讓酸度下降，大多會用四天分三次投入，讓轉換酒精的發酵過程能順利
                  </p>
                </div>
              </div>
            </div>
            {/* 第三層 */}

            <div className="brew-column">
              {/* ar */}
              <div className="arr-box arr_1 ">
                <img src="Sakeintro/ar04.svg" alt="" />
              </div>
              {/* 6 */}
              <div className="brew-box">
                <div className="item-title">
                  <div className="rice"></div>
                  <div className="title">
                    <h3>上槽（搾酒）</h3>
                  </div>
                </div>
                <div className="item-img">
                  <img src="Sakeintro/it_6.svg" alt="" />
                </div>
                <div className="item-word">
                  <p>
                    發酵完後，將桶內液體及米糊裝入棉質的酒袋進行壓搾，出來的液體就是清酒，而米糊壓搾後稱為
                    “ 酒粕 ”
                  </p>
                </div>
              </div>
              {/* ar */}
              <div className="arr-box">
                <img src="Sakeintro/ar05.svg" alt="" />
              </div>
              {/* 7 */}
              <div className="brew-box">
                <div className="item-title">
                  <div className="rice"></div>
                  <div className="title">
                    <h3>過濾</h3>
                  </div>
                </div>
                <div className="item-img">
                  <img src="Sakeintro/it_8.svg" alt="" />
                </div>
                <div className="item-word">
                  <p>過濾：主要為了脫色，或是做香氣調整，去除異味</p>
                </div>
              </div>
              {/* ar */}
              <div className="arr-box">
                <img src="Sakeintro/ar05.svg" alt="" />
              </div>
              {/* 8 */}
              <div className="brew-box">
                <div className="item-title">
                  <div className="rice"></div>
                  <div className="title">
                    <h3>入火（第一次）</h3>
                  </div>
                </div>
                <div className="item-img">
                  <img src="Sakeintro/it_9.svg" alt="" />
                </div>
                <div className="item-word">
                  <p>
                    火入 ( 第一次 )：由於酒中還有酵母及微生物在活動，所以用60 ~
                    65 度左右的熱水，停止酵母的活動。
                  </p>
                </div>
              </div>
            </div>
            {/* 第四層 */}

            <div className="brew-column brew_2">
              {/* ar */}
              <div className="arr-box arr_1 ">
                <img src="Sakeintro/ar06.svg" alt="" />
              </div>
              {/* 9 */}
              <div className="brew-box">
                <div className="item-title">
                  <div className="rice"></div>
                  <div className="title">
                    <h3>貯藏</h3>
                  </div>
                </div>
                <div className="item-img">
                  <img src="Sakeintro/it_10.svg" alt="" />
                </div>
                <div className="item-word">
                  <p>
                    貯藏：分為槽儲藏或瓶儲藏，目的是為了酒與水能完美融合，讓酒質更為圓滑
                  </p>
                </div>
              </div>
              {/* ar */}
              <div className="arr-box">
                <img src="Sakeintro/ar07.svg" alt="" />
              </div>
              {/* 10 */}
              <div className="brew-box">
                <div className="item-title">
                  <div className="rice"></div>
                  <div className="title">
                    <h3>裝瓶</h3>
                  </div>
                </div>
                <div className="item-img">
                  <img src="Sakeintro/it_11.svg" alt="" />
                </div>
                <div className="item-word">
                  <p>裝瓶：將酒裝入瓶中</p>
                </div>
              </div>
              {/* ar */}
              <div className="arr-box">
                <img src="Sakeintro/ar07.svg" alt="" />
              </div>
              {/* 11 */}
              <div className="brew-box">
                <div className="item-title">
                  <div className="rice"></div>
                  <div className="title">
                    <h3>入火（第二次）</h3>
                  </div>
                </div>
                <div className="item-img">
                  <img src="Sakeintro/it_12.svg" alt="" />
                </div>
                <div className="item-word">
                  <p>
                    火入（第二次
                    ）：目的是為了讓酵母或微生物完全停止活動，可在裝瓶前或裝瓶後進行。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sakeintro-title">
            <p>
              上述流程為傳統上做法，在市面上看到的日本酒不一定完全一致的執行每一步驟，而讓酒質中出現了許多不同特色，但我們能夠確定的是，每支日本酒都是經過漫長的過程和製作者小心呵護之下產出的藝術品。
            </p>
          </div>

          <div className="sakeintro-title">
            <h2>日本酒度酸度</h2>
            <div className="box">
              <div className="box">
                <p>
                  當你要選購琳琅滿目的清酒，一定曾滿腦問號：到底哪瓶清酒才好呢？現在介紹兩種方法，看看能否幫到你。
                  首先，可從酒標上所列的日本酒度及酸度理解酒釀。日本酒度是指酒所含的糖量，較多糖量的會以負值「-」表示，為甘口型，甘即甜的意思，而負值愈大，糖量愈高；較少糖量的會以正值「+」表示，為辛口型，而正值愈大，糖量愈少，「辛」這字，聽上去較難明白，或可以葡萄酒「乾型（Dry）」或香檳的乾型「Brut」的概念理解。
                  同一時間，要考慮的是其酸度，因酸度結合日本酒度，才會真正反映酒釀風格。酸度的基準數為「1.5〜1.7」，若數值高於此，即酸度高，為濃醇型；若數值低於此，即酸度低，為淡麗型。所以，日本清酒常會聽到如「淡麗‧辛口」的形容，意即為酒度低，而含糖少。以來福大吟釀
                  「雫」為例，日本酒度 : +2，即為辛口，酸度 : 1.1，即為淡麗。
                </p>
              </div>

              <img src="Sakeintro/fl.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SakeIntro
