import SocialMedia from "./SocialMedia";
import Title from "./Title";
export default function Contact() {
  return (
    <>
      <div className="container mx-auto px-4 pt-16" id="contact">
        <Title
          className="mt-16 text-center lg:text-xl"
          level="h2"
          text="要怎樣才能聯絡到我們呢？"
        />
        <Title
          className="mt-1 font-bold text-4xl text-center lg:text-3xl lg:mt-3 mb-8"
          level="h1"
          text="聯絡資訊"
        />

        <SocialMedia />
      </div>
    </>
  );
}
