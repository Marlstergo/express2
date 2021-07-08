import * as React from "react";
import "twin.macro";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";

export default function Reference() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    className:
      "mx-auto grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:max-w-5xl lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6 text-red-800",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,

          // initialSlide: 2
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div tw="bg-white" id="references">
      <div tw="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-4 lg:py-16">
        <div tw="space-y-8 sm:space-y-12">
          <div tw="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 tw="text-2xl leading-9 font-bold text-black md:font-extrabold tracking-tight sm:text-3xl md:text-4xl">
              UND DAS SAGEN UNSERE KUNDEN…
            </h2>
          </div>

          <Slider {...settings} tw="w-full">
            {/* 1 */}
            <ul tw="mx-auto grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:max-w-5xl lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6 ">
              <li>
                <div tw="space-y-4 px-4">
                  <StaticImage
                    tw="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src="../../images/Kunde_KH-2.jpg"
                    alt=""
                  />
                  <div tw="space-y-2 ">
                    <div tw="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                      <h4 tw="text-primary font-black text-3xl">
                        Kathrin & Ralf Meier
                      </h4>
                      <p tw=" text-primary  text-base font-medium my-10">
                        Das Küchenhaus
                      </p>
                      <p tw=" text-black text-base">
                        „Es gibt keine vergleichbare Agentur auf dem Markt. Der
                        für die Küchenbranche neue Marketing-Mix hat uns
                        begeistert. Wir können uns voll und ganz auf unser
                        Kerngeschäft konzentrieren.”
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* 2 */}
            <ul tw="mx-auto grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:max-w-5xl lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6 ">
              <li>
                <div tw="space-y-4 px-4">
                  <StaticImage
                    tw="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src="../../images/Kunde_RK_Wallenhorst-1.jpg"
                    alt=""
                  />
                  <div tw="space-y-2 ">
                    <div tw="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                      <h4 tw="text-primary font-black text-3xl">
                        Volkan Yildirim
                      </h4>
                      <p tw=" text-primary  text-base font-medium my-10">
                        Reddy Küchen
                      </p>
                      <p tw=" text-black text-base">
                        „Wir treffen unsere Zielgruppe mit dem Social Network.
                        Kampagnen werden nach individuellen Wünschen auf die
                        Zielgruppe ausgerichtet erstellt und umgesetzt.
                        Ausserdem haben wir uns mit #reddybackt einen Vorsprung
                        auf unsere Mitbewerber im Osnabrücker Raum erarbeitet.”{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* 3 */}
            <ul tw="mx-auto grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:max-w-5xl lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6 ">
              <li>
                <div tw="space-y-4 px-4">
                  <StaticImage
                    tw="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src="../../images/Kunde_Alex.jpg"
                    alt=""
                  />
                  <div tw="space-y-2 ">
                    <div tw="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                      <h4 tw="text-primary font-black text-3xl">
                        Alexander Nürenberg
                      </h4>
                      <p tw=" text-primary  text-base font-medium my-10">
                        Ravensberg Küchen
                      </p>
                      <p tw=" text-black text-base">
                        „Wir sind seit 10 Jahren mit dem Service sehr zufrieden.
                        Die Agentur bietet organische und digitale Marketing
                        Lösungen für alles Bereiche an. Unser modernes
                        Küchenhaus Konzept, muss vorweg gehen und neue Trends
                        setzen”{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* 4 */}
            <ul tw="mx-auto grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:max-w-5xl lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6 ">
              <li>
                <div tw="space-y-4 px-4">
                  <StaticImage
                    tw="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src="../../images/Kunde_MuD-1.jpg"
                    alt=""
                  />
                  <div tw="space-y-2 ">
                    <div tw="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                      <h4 tw="text-primary font-black text-3xl">
                        Dirk Brinkman
                      </h4>
                      <p tw=" text-primary  text-base font-medium my-10">
                        M&D Kreativ Küchen
                      </p>
                      <p tw=" text-black text-base">
                        „Kochkurse, Backen, Social Network, Druck und Fotografie
                        mit nur einer Agentur. Aktuell haben wir alle Bereiche
                        des für uns relevanten Marketings abgedeckt.”{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* 5 */}
            <ul tw="mx-auto grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:max-w-5xl lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6 ">
              <li>
                <div tw="space-y-4 px-4">
                  <StaticImage
                    tw="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src="../../images/Kunde_RK_Bielefeld-1.jpg"
                    alt=""
                  />
                  <div tw="space-y-2 ">
                    <div tw="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                      <h4 tw="text-primary font-black text-3xl">
                        Claus Kammeier
                      </h4>
                      <p tw=" text-primary  text-base font-medium my-10">
                        Reddy Küchen
                      </p>
                      <p tw=" text-black text-base">
                        „Rundumbetreuung in exakt den Marketingbereichen, für
                        die ich kaum Zeit und Muße hatte. Die Frequenz wurde
                        spürbar erhöht, darum ging es mir im Endeffekt.”
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* 6 */}
            <ul tw="mx-auto grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:max-w-5xl lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6 ">
              <li>
                <div tw="space-y-4 px-4">
                  <StaticImage
                    tw="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src="../../images/Kunde_RK_Kassel-1.jpg"
                    alt=""
                  />
                  <div tw="space-y-2 ">
                    <div tw="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                      <h4 tw="text-primary font-black text-3xl">
                        Mike Siegmann
                      </h4>
                      <p tw=" text-primary  text-base font-medium my-10">
                        Reddy Küchen
                      </p>
                      <p tw=" text-black text-base">
                        „Die Agentur begleitet uns bei der Digitalisierung
                        unseres Werbeauftritts. Das Backen und Kochen in unserem
                        Hause kommt noch oben drauf. Diesen Service bietet keine
                        weitere Agentur. Herr Hermann und sein Team sind ohne
                        Einschränkungen zu empfehlen.”{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* 7 */}
            <ul tw="mx-auto grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:max-w-5xl lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6 ">
              <li>
                <div tw="space-y-4 px-4">
                  <StaticImage
                    tw="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src="../../images/Kunde_Grigoleit.jpg"
                    alt=""
                  />
                  <div tw="space-y-2 ">
                    <div tw="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                      <h4 tw="text-primary font-black text-3xl">
                        Dieter Grigoleit
                      </h4>
                      <p tw=" text-primary  text-base font-medium my-10">
                        Teuto Küchen
                      </p>
                      <p tw=" text-black text-base">
                        „Bei der Digitalisierung unserer Marke hat die Agentur
                        sehr gute Arbeit geleistet. Ich bin besonders mit der
                        persönlichen Arbeit vor Ort sehr zufrieden. Wirklich
                        unkompliziert und professionell, 100% Empfehlung!!!“{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* 68 */}
            <ul tw="mx-auto grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:max-w-5xl lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6 ">
              <li>
                <div tw="space-y-4 px-4">
                  <StaticImage
                    tw="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src="../../images/Kunde_Knaup.jpg"
                    alt=""
                  />
                  <div tw="space-y-2 ">
                    <div tw="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                      <h4 tw="text-primary font-black text-3xl">Irene Knaup</h4>
                      <p tw=" text-primary  text-base font-medium my-10">
                        Knaup Wohnen
                      </p>
                      <p tw=" text-black text-base">
                        „Eine äusserst motivierende, freundliche Zusammenarbeit,
                        in der nach fachkundiger Beratung, meine
                        Designvorstellungen sehr gut verstanden und umgesetzt
                        wurden.“{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* 9 */}
            <ul tw="mx-auto grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:max-w-5xl lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6 ">
              <li>
                <div tw="space-y-4 px-4">
                  <StaticImage
                    tw="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src="../../images/Kunde_KH_Minden.jpg"
                    alt=""
                  />
                  <div tw="space-y-2 ">
                    <div tw="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                      <h4 tw="text-primary font-black text-3xl">
                        Dennis Thulke
                      </h4>
                      <p tw=" text-primary  text-base font-medium my-10">
                        Küchenhaus Thulke GmbH
                      </p>
                      <p tw=" text-black text-base">
                        „Die Agentur ist auf die Küchenbranche spezialisiert,
                        daher musste ich meine Produkte und die Marktüblichen
                        Abläufe nicht erklären, dass hat mir eine Menge Arbeit
                        und Zeit erspart. Danke für die erstklassige
                        Zusammenarbeit!“{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </Slider>
        </div>
      </div>
    </div>
  );
}
