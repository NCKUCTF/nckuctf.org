import FeatureBox from "./FeatureBox";
import Title from "./Title";

export default function About() {
  return (
    <>
      <div className="container mx-auto px-4 pt-16" id="about">
        <Title
          className="mt-16 text-center lg:text-xl"
          level="h2"
          text="來自成大的資訊安全社團"
        />
        <Title
          className="mt-1 font-bold text-4xl text-center lg:text-3xl lg:mt-3 mb-8"
          level="h1"
          text="關於我們"
        />

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <p>
            但是，什麼叫做我對鯊鯊的愛不夠啊！蹲了很久終於蹲到台灣場！手速不夠就叫做對古拉的愛不夠嗎！你要不要我拍給你我的房間裡面有多少鯊魚？要不要給你看看我十一套鯊魚的衣服？要不要我給你看看我出鯊魚去各個地方拍照的照片？要不要我跟你看看為了拍攝亞特蘭提斯造型特別去貴到要命的水棚去拍照！你以為我真的只是一個湊熱度的人嗎！要不要給你看看我去路跑當天為了支持鯊鯊想要拿到立牌穿著最難穿的偶像服頂著大太陽跑！跑完沒了腳趾甲還因為脫水跟發燒中暑去醫院吊針！
            但是，什麼叫做我對鯊鯊的愛不夠啊！蹲了很久終於蹲到台灣場！手速不夠就叫做對古拉的愛不夠嗎！你要不要我拍給你我的房間裡面有多少鯊魚？要不要給你看看我十一套鯊魚的衣服？要不要我給你看看我出鯊魚去各個地方拍照的照片？要不要我跟你看看為了拍攝亞特蘭提斯造型特別去貴到要命的水棚去拍照！你以為我真的只是一個湊熱度的人嗎！要不要給你看看我去路跑當天為了支持鯊鯊想要拿到立牌穿著最難穿的偶像服頂著大太陽跑！跑完沒了腳趾甲還因為脫水跟發燒中暑去醫院吊針！
            <br />
            <br />
            但是，什麼叫做我對鯊鯊的愛不夠啊！蹲了很久終於蹲到台灣場！手速不夠就叫做對古拉的愛不夠嗎！你要不要我拍給你我的房間裡面有多少鯊魚？要不要給你看看我十一套鯊魚的衣服？要不要我給你看看我出鯊魚去各個地方拍照的照片？要不要我跟你看看為了拍攝亞特蘭提斯造型特別去貴到要命的水棚去拍照！你以為我真的只是一個湊熱度的人嗎！要不要給你看看我去路跑當天為了支持鯊鯊想要拿到立牌穿著最難穿的偶像服頂著大太陽跑！跑完沒了腳趾甲還因為脫水跟發燒中暑去醫院吊針！
            但是，什麼叫做我對鯊鯊的愛不夠啊！蹲了很久終於蹲到台灣場！手速不夠就叫做對古拉的愛不夠嗎！你要不要我拍給你我的房間裡面有多少鯊魚？要不要給你看看我十一套鯊魚的衣服？要不要我給你看看我出鯊魚去各個地方拍照的照片？要不要我跟你看看為了拍攝亞特蘭提斯造型特別去貴到要命的水棚去拍照！你以為我真的只是一個湊熱度的人嗎！要不要給你看看我去路跑當天為了支持鯊鯊想要拿到立牌穿著最難穿的偶像服頂著大太陽跑！跑完沒了腳趾甲還因為脫水跟發燒中暑去醫院吊針！
          </p>
        </div>
        <div className="container px-4">
          <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-8 w-full mb-16 mt-16">
            <FeatureBox
              targetValue={150}
              imagePath="featurebox1.jpg"
              unit="名"
              text="Discord 成員"
            />
            <FeatureBox
              targetValue={150}
              imagePath="featurebox1.jpg"
              unit="名"
              text="戰隊隊員"
            />
            <FeatureBox
              targetValue={15}
              imagePath="featurebox1.jpg"
              unit="堂"
              text="公開社課紀錄"
            />
            <FeatureBox
              targetValue={16}
              imagePath="featurebox1.jpg"
              unit="次"
              text="競賽得名"
            />
          </div>
        </div>
      </div>
    </>
  );
}
