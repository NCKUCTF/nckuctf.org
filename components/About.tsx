import FeatureBox from "./FeatureBox";
import SubTitle from "./SubTitle";
import Title from "./Title";

export default function About() {
  return (
    <>
      <div className="container mx-auto px-4 pt-16" id="about">
        <SubTitle
          className="mt-16 text-center lg:text-xl"
          text="來自成大的資訊安全社團"
        />
        <Title
          className="mt-1 font-bold text-4xl text-center lg:text-3xl lg:mt-3 mb-8"
          text="關於我們"
        />

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <p>
            成大資安社是由社長葉東逸和其他五位夥伴——楊竣鴻、邱昱翔、蔡聿善、佘俊霖、文仁謙於
            <b>2023 年 9 月</b>
            創立的「開源社團」。短短時間內，除了每週線下都有社課和活動外，線上也有直播和
            <b>完整的課程資源供所有人免費觀看</b>。
            <br />
            <br />
            旗下的戰隊「B33F 50UP」更是活躍於各式各樣的資安競賽，並歡迎
            <b>全臺灣不限年齡的駭客</b>
            們加入一起學習，每個月也會定期舉辦<b>讀書會</b>
            分享彼此的研究成果和訓練表達能力。
            <br />
            <br />
            同時成大資安社也聯合臺灣各地大專院校資安社團創立了「臺灣資安社群聯盟」，影響力也從原本成大校內逐漸擴大到了全臺灣，而目前成員數來到了
            <b>17 所大學</b>，並在固定在每年的寒假期間舉辦全國性的 CTF 賽事
            TSCCTF。
          </p>
        </div>
        <div className="container px-4">
          <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-8 w-full mb-16 mt-16">
            <FeatureBox
              targetValue={727}
              imagePath="featurebox1.png"
              unit="名"
              text="Discord 成員"
            />
            <FeatureBox
              targetValue={67}
              imagePath="featurebox2.png"
              unit="名"
              text="戰隊隊員"
            />
            <FeatureBox
              targetValue={15}
              imagePath="featurebox3.png"
              unit="堂"
              text="公開社課紀錄"
            />
            <FeatureBox
              targetValue={16}
              imagePath="featurebox4.png"
              unit="次"
              text="競賽得名"
            />
          </div>
          <div className="text-text-sm text-gray-500gray">
            last update: 2024/08/06
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-16" id="beapart">
        <SubTitle
          className="mt-16 text-center lg:text-xl"
          text="如果想要加入戰隊有什麼要求？"
        />
        <Title
          className="mt-1 font-bold text-4xl text-center lg:text-3xl lg:mt-3 mb-8"
          text="如何加入"
        />
        感謝大家熱情來官方 Discord 開 ticket
        申請加入我們的戰隊。由於申請者眾多，經過管理員們的討論，我們將從 2024
        年五月份開始實施以下新的招募規定。申請加入戰隊的朋友必須符合下列至少一項條件：
        <br />
        <ul>
          <li>
            <b>1.</b> 至少參加過一次 CTF 比賽，並且有過不錯的表現。
          </li>
          <li>
            <b>2.</b>獲得戰隊內部成員的推薦。
          </li>
          <li>
            <b>3.</b>
            提供其他能證明相關能力的特殊經歷。
          </li>
        </ul>
        <br />
        期待各位加入我們的行列！
      </div>
    </>
  );
}
