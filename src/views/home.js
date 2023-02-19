import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Helpa template</title>
        <meta property="og:title" content="Helpa template" />
      </Helmet>
      <section className="home-hero">
        <div className="home-main">
          <div className="home-content">
            <header data-thq="thq-navbar" className="home-navbar-interactive">
              <h1>Clips</h1>
              <div
                data-thq="thq-navbar-nav"
                data-role="Nav"
                className="home-desktop-menu"
              >
                <div className="home-links">
                  <Link to="/" className="home-link navLink">
                    特徴
                  </Link>
                  <Link to="/" className="home-link01 navLink">
                    詳しいやり方
                  </Link>
                  <Link to="/" className="home-link02 navLink">
                    最新情報
                  </Link>
                  <Link to="/" className="home-link03 navLink">
                    お問い合わせ
                  </Link>
                </div>
              </div>
              <div data-thq="thq-burger-menu" className="home-burger-menu">
                <button className="button">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </button>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav"
                >
                  <div className="home-container01">
                    <div data-thq="thq-close-menu" className="home-menu-close">
                      <svg viewBox="0 0 1024 1024" className="home-icon02">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="home-links1">
                    <Link to="/" className="home-link04 navLink">
                      Mission
                    </Link>
                    <Link to="/" className="home-link05 navLink">
                      Take Action
                    </Link>
                    <Link to="/" className="home-link06 navLink">
                      News
                    </Link>
                    <Link to="/" className="home-link07 navLink">
                      Contact
                    </Link>
                  </div>
                  <div className="home-icon-group">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon04"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon08"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </header>
            <div className="home-hero-section">
              <div className="home-header">
                <h1 className="home-heading">
                  <span>みんなできる、</span>
                  <br></br>
                  <span>YouTubeの</span>
                  <br></br>
                  <span>切り取り機能。</span>
                  <br></br>
                </h1>
                <p className="home-caption">
                  <span className="home-text07">
                    YouTubeの「クリップ」という機能を使うと、動画の一部を簡単に切り取れます。そのクリップを共有できるのが「Clips」というサイトです。
                  </span>
                  <br></br>
                </p>
              </div>
              <div className="home-buttons">
                <button className="home-button01 button">
                  <span>
                    <span>サイト</span>
                    <span className="home-text11">へ行く</span>
                  </span>
                </button>
                <button className="home-button02 button">
                  <span>Join our newsletter</span>
                </button>
              </div>
            </div>
          </div>
          <div className="home-image">
            <button className="home-button03 button">サイトへ行く</button>
            <div className="home-container02">
              <img
                alt="image"
                src="/playground_assets/mainvisual-400w.png"
                className="home-image1"
              />
            </div>
          </div>
        </div>
        <div className="home-details-container"></div>
      </section>
      <div className="home-steps">
        <h1 className="home-text13">クリップでできること</h1>
        <div className="home-container03">
          <div className="home-container04">
            <div className="home-step">
              <h1 className="home-text14">
                <span>1</span>
              </h1>
              <h1 className="home-text16">結論だけを共有</h1>
              <span className="home-text17">
                <span>動画の重要なところだけを共有することができます。</span>
                <br></br>
              </span>
            </div>
            <div className="home-step1">
              <h1 className="home-text20">
                <span>2</span>
              </h1>
              <h1 className="home-text22">面白い瞬間を共有</h1>
              <span className="home-text23">
                <span>
                  思わず笑っちゃった瞬間をほかの人にも見てもらう事ができます。
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container05">
            <div className="home-step2">
              <h1 className="home-text26">
                <span>3</span>
              </h1>
              <h1 className="home-text28">見返したい瞬間を保存</h1>
              <span className="home-text29">
                <span>
                  後でまたみたい瞬間をカテゴリで分けて保存して置けます。
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-step3">
              <h1 className="home-text32">
                <span>4</span>
              </h1>
              <h1 className="home-text34">ためになるところ共有</h1>
              <span className="home-text35">
                <span>
                  YouTubeを見ていてためになったところをほかの人に共有できます。
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="home-mission">
        <div className="home-content01">
          <div className="home-container06">
            <span className="home-title">CLIPの特徴</span>
          </div>
          <div className="home-main1">
            <div className="home-header01">
              <h2 className="home-heading01">今までの共有とは違う。</h2>
              <p className="home-caption01">
                「ほかの人にも見てほしい」と思ったその瞬間をピンポイントで切り取れます。Clips
                を使えば他が人切り取ったクリップを見られます。
              </p>
            </div>
          </div>
          <div className="home-highlights">
            <div className="home-highlight">
              <h3 className="home-title1">
                <span>編集</span>
                <span className="home-text39">なし</span>
              </h3>
              <p className="home-description">
                せっかく共有したい場面があっても編集するとなると、大変ですよね。
              </p>
            </div>
            <div className="home-highlight1">
              <h3 className="home-title2">アップロードなし</h3>
              <p className="home-description1">
                クリップすると表示されるiframeタグ貼り付けるだけ。
              </p>
            </div>
          </div>
        </div>
        <div className="home-container07">
          <img
            alt="image"
            src="/playground_assets/980_color-300h.png"
            className="home-image2"
          />
        </div>
      </section>
      <div className="home-details">
        <div className="home-category">
          <img
            alt="image"
            src="/playground_assets/details-1.svg"
            className="home-image3"
          />
          <p className="home-text40">
            学びがあった瞬間を他の人にも共有できる。
          </p>
        </div>
        <div className="home-category1">
          <img
            alt="image"
            src="/playground_assets/details-2.svg"
            className="home-image4"
          />
          <p className="home-text41">自分のクリップを整理する。</p>
        </div>
        <div className="home-category2">
          <img
            alt="image"
            src="/playground_assets/details-3.svg"
            className="home-image5"
          />
          <p className="home-text42">
            あらゆることを、短時間の動画で素早く学べる。
          </p>
        </div>
      </div>
      <section className="home-petitions">
        <div className="home-container08">
          <div className="home-container09">
            <iframe
              src="https://www.youtube.com/embed/A63imEmP_-I?start=65"
              className="home-iframe"
            ></iframe>
          </div>
        </div>
        <div className="home-content02">
          <div className="home-main2">
            <div className="home-header02">
              <h2 className="home-heading02">
                メニューにある「クリップ」ボタンを押すだけ。
              </h2>
              <p className="home-caption02">
                動画タイトルの右下のところに、メニューがあると思います。そのメニューの中から、ハサミのマークが書かれている項目を選択します。
              </p>
            </div>
          </div>
          <div className="home-button04">
            <button className="home-button05 button">
              <span>クリップを共有ページへ</span>
            </button>
          </div>
        </div>
      </section>
      <section className="home-steps1">
        <div className="home-content03">
          <div className="home-information">
            <div className="home-main3">
              <div className="home-header03">
                <h2 className="home-heading03">
                  クリップを共有することのメリット
                </h2>
                <p className="home-caption03">
                  普通の共有にない、クリップならではのいいところたくさんがあります。
                </p>
              </div>
            </div>
            <div className="home-button06">
              <button className="home-button07 button">
                <span>クリップ共有ページへ</span>
              </button>
            </div>
          </div>
          <div className="home-steps-list">
            <div className="home-list">
              <div className="home-section">
                <div className="home-number number">
                  <span className="home-text45">1</span>
                </div>
                <span className="home-caption04">
                  動画の重要なところだけを共有
                </span>
              </div>
              <div className="home-divider"></div>
              <div className="home-section1">
                <div className="home-number1 number">
                  <span className="home-text46">2</span>
                </div>
                <span className="home-caption05">動画の面白い瞬間を共有</span>
              </div>
              <div className="home-divider1"></div>
              <div className="home-section2">
                <div className="home-number2 number">
                  <span className="home-text47">3</span>
                </div>
                <span className="home-caption06">後で見返したい瞬間を保存</span>
              </div>
              <div className="home-divider2"></div>
              <div className="home-section3">
                <div className="home-number3 number">
                  <span className="home-text48">4</span>
                </div>
                <span className="home-caption07">
                  Sed ut perspiciatis unde omnis
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-help">
        <div className="home-help-content">
          <div className="home-header04">
            <h2 className="home-heading04">使い方その１</h2>
            <p className="home-caption08">
              結論だけを共有
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
        </div>
        <div className="home-content04">
          <p className="home-caption09">
            <span className="home-text49">
              映像にはたくさんの情報が含まれています。文字で読むよりも理解しやすいことが多いと思います。でも、飛ばし読みがしにくいのが動画の難点。知りたいことをすぐ知れるように、YouTube上の動画のクリップを作って共有してみましょう。きっと、その情報を必要している人がほかにもいるはずです。
            </span>
            <br></br>
          </p>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
document.getElementById("individual").addEventListener("click", function() {
  document.getElementById("individuals-content").style.display = "flex";
  document.getElementById("companies-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("company").classList.remove("switch-active");
});
document.getElementById("company").addEventListener("click", function() {
  document.getElementById("companies-content").style.display = "flex";
  document.getElementById("individuals-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("individual").classList.remove("switch-active");
});
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <section className="home-help1">
        <div className="home-help-content1">
          <div className="home-header05">
            <h2 className="home-heading05">使い方その２</h2>
            <p className="home-caption10">面白い瞬間を共有</p>
          </div>
        </div>
        <div className="home-content05">
          <p className="home-caption11">
            <span className="home-text51">
              YouTubeを見ていて、笑っちゃう瞬間ってありませんか？「このシーンほかの人にも見てもらいたい！」そんな風に思うはずです。クリップを使えば、編集ソフトも必要ないので気軽にあなたの面白いを共有できます。
            </span>
            <br></br>
          </p>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
document.getElementById("individual").addEventListener("click", function() {
  document.getElementById("individuals-content").style.display = "flex";
  document.getElementById("companies-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("company").classList.remove("switch-active");
});
document.getElementById("company").addEventListener("click", function() {
  document.getElementById("companies-content").style.display = "flex";
  document.getElementById("individuals-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("individual").classList.remove("switch-active");
});
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <section className="home-help2">
        <div className="home-help-content2">
          <div className="home-header06">
            <h2 className="home-heading06">使い方その３</h2>
            <p className="home-caption12">
              見返したい瞬間を保存
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
        </div>
        <div className="home-content06">
          <p className="home-caption13">
            このシーンまたみたいと思ったときにはクリップ機能を使いましょう。せっかく見つけたお気に入りの瞬間。その瞬間をまた見ることができます。Clipsに共有すれば、クリップにタグを付けられます。後で探すときに見つけやすくなるはずです。
          </p>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
document.getElementById("individual").addEventListener("click", function() {
  document.getElementById("individuals-content").style.display = "flex";
  document.getElementById("companies-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("company").classList.remove("switch-active");
});
document.getElementById("company").addEventListener("click", function() {
  document.getElementById("companies-content").style.display = "flex";
  document.getElementById("individuals-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("individual").classList.remove("switch-active");
});
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <section className="home-quote-one"></section>
      <section className="home-quote-two">
        <div className="home-content07">
          <div className="home-video">
            <video
              src
              poster="/playground_assets/video-1400w.png"
              className="home-video1"
            ></video>
            <div className="home-play">
              <div className="home-button08">
                <svg
                  viewBox="0 0 808.5942857142857 1024"
                  className="home-icon10"
                >
                  <path d="M790.857 529.714l-758.857 421.714c-17.714 9.714-32 1.143-32-18.857v-841.143c0-20 14.286-28.571 32-18.857l758.857 421.714c17.714 9.714 17.714 25.714 0 35.429z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="home-quote-content">
            <h2 className="home-quote">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </h2>
            <div className="home-quoted">
              <p className="home-caption14">Andrew Gonzalez</p>
              <p className="home-caption15">@ihelpyou</p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-donate">
        <div className="home-content08">
          <div className="home-header07">
            <span className="home-heading07">
              Donate now and help us help animals
            </span>
            <span className="home-caption16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
          </div>
          <div className="home-amount">
            <div className="home-row">
              <button className="home-button09 button">$5</button>
              <button className="home-button10 button">$10</button>
            </div>
            <div className="home-row1">
              <button className="home-button11 button">$20</button>
              <button className="home-button12 button">$40</button>
            </div>
          </div>
        </div>
      </div>
      <section className="home-donation-use">
        <div className="home-header08">
          <h2 className="home-heading08">
            Your donations will be used to help animals.
          </h2>
          <p className="home-caption17">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="home-accordion">
          <div
            data-role="accordion-container"
            className="accordion-element home-element"
          >
            <div className="home-header09">
              <h3 className="home-text53">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text54">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="accordion-element home-element1"
          >
            <div className="home-header10">
              <h3 className="home-text55">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text56">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="accordion-element home-element2"
          >
            <div className="home-header11">
              <h3 className="home-text57">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text58">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="accordion-element home-element3"
          >
            <div className="home-header12">
              <h3 className="home-text59">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="accordion-element home-element4"
          >
            <div className="home-header13">
              <h3 className="home-text61">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text62">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div>
            <DangerousHTML
              html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
            ></DangerousHTML>
          </div>
        </div>
      </section>
      <section className="home-updates">
        <div className="home-content14">
          <div className="home-details1">
            <div className="home-header14">
              <h2 className="home-heading09">
                Get updates and action alerts from Helpa by joining our
                newsletter
              </h2>
              <p className="home-caption18">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="home-action">
              <div className="home-input">
                <input
                  type="text"
                  placeholder="Email address"
                  className="home-textinput input"
                />
                <button className="button home-button13">Subscribe</button>
              </div>
              <div className="home-agreement">
                <div className="home-states">
                  <div id="tos" className="home-checkbox"></div>
                  <div id="tos-active" className="home-checkbox1">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className="home-caption19">
                  <label htmlFor="tos" className="home-normal">
                    I agree to the
                  </label>
                  <label htmlFor="tos" className="home-bold">
                    Terms and Conditions
                  </label>
                </div>
                <div>
                  <DangerousHTML
                    html={`<script>
// Create a boolean to represent the state of the toggle
let tosToggle = false;

// Add event listeners to the divs and labels
document.getElementById("tos").addEventListener("click", toggleTos);
document.getElementById("tos-active").addEventListener("click", toggleTos);
document.querySelectorAll("label[for=tos]").forEach(label => label.addEventListener("click", toggleTos));

// Define the toggleTos function to hide/show the elements based on the state of the toggle
function toggleTos() {
  if (tosToggle) {
    document.getElementById("tos").style.display = "flex";
    document.getElementById("tos-active").style.display = "none";
  } else {
    document.getElementById("tos").style.display = "none";
    document.getElementById("tos-active").style.display = "flex";
  }
  tosToggle = !tosToggle;
}
</script>`}
                  ></DangerousHTML>
                </div>
              </div>
            </div>
          </div>
          <div className="home-slider">
            <div className="home-slides">
              <div className="slide-active slide">
                <img
                  alt="image"
                  src="/playground_assets/slide-1-1400w.png"
                  className="home-image6"
                />
                <span className="home-text63">
                  WFH One year on. Here’s what we’ve learned.
                </span>
              </div>
              <div className="slide">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1670991761566-534b07539db5?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="home-image7"
                />
                <span className="home-text64">
                  <span>This is a test slide</span>
                  <br></br>
                </span>
              </div>
              <div className="slide">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1670087670280-7a3e71a7efa6?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="home-image8"
                />
                <span className="home-text67">
                  <span>This one also!</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-buttons-container">
              <div className="home-buttons1">
                <button id="previous-slide" className="home-previous button">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M32 512l480 480v-288h512v-384h-512v-288z"></path>
                  </svg>
                </button>
                <button id="next-slide" className="home-next button">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M992 512l-480-480v288h-512v384h512v288z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <nav className="home-navigation-links">
            <Link to="/" className="home-link08 navLink">
              Mission
            </Link>
            <Link to="/" className="home-link09 navLink">
              Take Action
            </Link>
            <Link to="/" className="home-link10 navLink">
              News
            </Link>
            <Link to="/" className="home-link11 navLink">
              Contact
            </Link>
          </nav>
        </div>
        <div className="home-middle">
          <span className="home-text70">
            メールアドレス:　konsuki.bussiness@gail.com
          </span>
          <span className="home-text71">
            <span>ブログ:</span>
            <br></br>
            <span>https://konsuki.com</span>
          </span>
        </div>
        <div className="home-bottom">
          <span className="home-copyright">© Copyright Company – 2022</span>
        </div>
      </footer>
      <div>
        <DangerousHTML
          html={`<script>
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('slide-active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('slide-active');
}

const previousSlideButton = document.querySelector('#previous-slide');
previousSlideButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

const nextSlideButton = document.querySelector('#next-slide');
nextSlideButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});
</script>`}
        ></DangerousHTML>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
function setCookie(name, value, days) {
  // Set the cookie with the given name, value, and expiration time (in days)
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  // Get the value of the cookie with the given name
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function removeCookie(name) {
  // Remove the cookie with the given name
  setCookie(name, "", -1); // Set the cookie with an expiration time of -1 days
}

document.getElementById("close").addEventListener("click", function(){
  // Get the persistence value
  let persistence = document.getElementById("banner").getAttribute("data-persistence");
  if (persistence === "true") {
    // If persistence is enabled, set a cookie to remember that the banner is closed
    setCookie("bannerClosed", "true", 1); // Set the cookie with an expiration time of 1 day
  } else {
    removeCookie("bannerClosed")
  }
  document.getElementById("banner").style.display = "none"; // Hide the banner
});

window.addEventListener("load", function() {
  // Check if the banner should be displayed or not
  let bannerClosed = getCookie("bannerClosed");
  if (bannerClosed === "true") {
    // If the bannerClosed cookie is set, hide the banner
    document.getElementById("banner").style.display = "none";
  }
});
</script>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home
