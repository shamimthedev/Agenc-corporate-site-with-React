import Button from "./components/Button";
import Container from "./components/Container";
import Flex from "./components/Flex";
import Heading from "./components/Heading";
import Image from "./components/Image";
import Menu from "./components/Menu";
import Logo from "./assets/images/logo.png";
import Anchor from "./components/Anchor";
import Text from "./components/Text";
import webDesign from "./assets/images/web-design-icon.svg";
import uXDesign from "./assets/images/ux-design-icon.svg";
import webDevelopment from "./assets/images/web-dev-icon.svg";
import motionGraphics from "./assets/images/motion-graphics-icon.svg";
import animation from "./assets/images/3d-animation-icon.svg";
import digitalMarketing from "./assets/images/digital-markteting-icon.svg";
import taskManagement from "./assets/images/task-management-app.jpg";
import whyChoose from "./assets/images/why-choose-us-image.jpg";
import innovativeIdeas from "./assets/images/innovatetive-ideas-icon.png";
import dedicatedSupport from "./assets/images/dedicated-support-icon.png";
import { BiSolidQuoteLeft } from "react-icons/bi";
import {
  MdOutlineStar,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Reviewer from "./assets/images/reviewer.png";
import fLogo from "./assets/images/footer-logo.png";

function App() {
  return (
    <>
      {/* Header Section Start */}
      <div
        id="headerSection"
        className={
          "pt-12 font-primary text-lg text-white fixed top-0 left-0 w-full z-10"
        }
      >
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="nav_logo">
              <Image imgSrc={Logo} imgAlt={"Logo"} />
            </div>
            <div className="nav_links">
              <Flex className={"space-x-12 items-center"}>
                <Menu mText={"Home"} />
                <Menu mText={"About"} />
                <Menu mText={"Service"} />
                <Menu mText={"Careers"} />
                <Menu mText={"Contact"} />
              </Flex>
            </div>
            <div className="nav_btn">
              <Anchor
                aText={"Contact"}
                className={
                  "px-10 py-4 bg-primaryColor rounded-[10px] font-semibold text-[20px]"
                }
              />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Section End */}

      {/* Hero Section Start */}
      <div
        id="heroSection"
        className={
          "mb-36 font-primary bg-heroBackground bg-cover bg-center bg-no-repeat text-white text-center"
        }
      >
        <div className="hero_overlay pt-80 pb-44 bg-heroOverlay">
          <Container>
            <div className="hero_content mx-auto max-w-4xl">
              <Heading
                as={"h1"}
                text={"We Help brands with high quality services"}
                className={"mb-12 font-bold text-7xl leading-[120%]"}
              />
              <Text
                as={"p"}
                text={
                  "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
                }
                className={"max-w-2xl mb-10 mx-auto leading-6"}
              />
              <Button
                bText={"Get Started"}
                className={
                  "px-10 py-4 bg-primaryColor rounded-[10px] font-semibold text-[20px]"
                }
              />
            </div>
          </Container>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Counter Section Start */}
      <div
        id="counterSection"
        className={"mb-32 font-primary font-medium text-xl"}
      >
        <Container>
          <div
            className={
              "counter_content py-20 px-12 rounded-[20px] bg-counterBg"
            }
          >
            <Flex className={"justify-between items-center"}>
              <div className="counter_first_part">
                <Text
                  as={"p"}
                  text={"Our Success"}
                  className={"mb-4 text-primaryColor text-2xl"}
                />
                <Heading
                  as={"h3"}
                  text={"West cost Brand makers-Global Edge"}
                  className={"max-w-sm font-semibold text-1515 text-4xl"}
                />
              </div>
              <div className="counter_sec_part">
                <Heading
                  as={"h3"}
                  text={"200+"}
                  className={"mb-5 font-bold text-1515 text-5xl"}
                />
                <Text as={"p"} text={"Our Success"} className={"text-7373"} />
              </div>
              <div className="counter_third_part">
                <Heading
                  as={"h3"}
                  text={"4.5"}
                  className={"mb-5 font-bold text-1515 text-5xl"}
                />
                <Text
                  as={"p"}
                  text={"200+ Avg rating"}
                  className={"text-7373"}
                />
              </div>
              <div className="counter_fourth_part">
                <Heading
                  as={"h3"}
                  text={"351+"}
                  className={"mb-5 font-bold text-1515 text-5xl"}
                />
                <Text
                  as={"p"}
                  text={"Project Delivered"}
                  className={"text-7373"}
                />
              </div>
            </Flex>
          </div>
        </Container>
      </div>
      {/* Counter Section End */}

      {/* Service Section Start */}
      <div id="serviceSection" className={"mb-24 font-primary"}>
        <Container>
          <div className="service_heading text-center">
            <Heading
              as={"h2"}
              text={"Our Provided Services"}
              className={"mb-5 font-bold text-1515 text-[44px]"}
            />
            <Text
              as={"p"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."
              }
              className={"max-w-xl mx-auto mb-12 text-7373 leading-6"}
            />
          </div>
          <div className="service_item_wrapper">
            <Flex className={"flex-wrap gap-3"}>
              <div className="service_item group">
                <div className="service_item_content pt-20 pb-12 px-12 rounded-[20px] text-7373 text-center  group-hover:shadow-3xl">
                  <Image
                    imgSrc={webDesign}
                    imgAlt={"Web design icon"}
                    className={"mx-auto mb-10"}
                  />
                  <Heading
                    as={"h4"}
                    text={"Web Design"}
                    className={"mb-5 font-bold text-1515 text-2xl"}
                  />
                  <Text
                    as={"p"}
                    text={
                      "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
                    }
                    className={"max-w-xs mx-auto leading-6"}
                  />
                </div>
              </div>
              <div className="service_item group">
                <div className="service_item_content pt-20 pb-12 px-12 rounded-[20px] text-7373 text-center  group-hover:shadow-3xl">
                  <Image
                    imgSrc={uXDesign}
                    imgAlt={"UI/UX design icon"}
                    className={"mx-auto mb-10"}
                  />
                  <Heading
                    as={"h4"}
                    text={"UI/UX Design"}
                    className={"mb-5 font-bold text-1515 text-2xl"}
                  />
                  <Text
                    as={"p"}
                    text={
                      "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
                    }
                    className={"max-w-xs mx-auto leading-6"}
                  />
                </div>
              </div>
              <div className="service_item group">
                <div className="service_item_content pt-20 pb-12 px-12 rounded-[20px] text-7373 text-center  group-hover:shadow-3xl">
                  <Image
                    imgSrc={webDevelopment}
                    imgAlt={"Web Development icon"}
                    className={"mx-auto mb-10"}
                  />
                  <Heading
                    as={"h4"}
                    text={"Web Development"}
                    className={"mb-5 font-bold text-1515 text-2xl"}
                  />
                  <Text
                    as={"p"}
                    text={
                      "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
                    }
                    className={"max-w-xs mx-auto leading-6"}
                  />
                </div>
              </div>
              <div className="service_item group">
                <div className="service_item_content pt-20 pb-12 px-12 rounded-[20px] text-7373 text-center  group-hover:shadow-3xl">
                  <Image
                    imgSrc={motionGraphics}
                    imgAlt={"Motion Graphics icon"}
                    className={"mx-auto mb-10"}
                  />
                  <Heading
                    as={"h4"}
                    text={"Motion Graphics"}
                    className={"mb-5 font-bold text-1515 text-2xl"}
                  />
                  <Text
                    as={"p"}
                    text={
                      "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
                    }
                    className={"max-w-xs mx-auto leading-6"}
                  />
                </div>
              </div>
              <div className="service_item group">
                <div className="service_item_content pt-20 pb-12 px-12 rounded-[20px] text-7373 text-center  group-hover:shadow-3xl">
                  <Image
                    imgSrc={animation}
                    imgAlt={"3D Animation icon"}
                    className={"mx-auto mb-10"}
                  />
                  <Heading
                    as={"h4"}
                    text={"3D Animation"}
                    className={"mb-5 font-bold text-1515 text-2xl"}
                  />
                  <Text
                    as={"p"}
                    text={
                      "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
                    }
                    className={"max-w-xs mx-auto leading-6"}
                  />
                </div>
              </div>
              <div className="service_item group">
                <div className="service_item_content pt-20 pb-12 px-12 rounded-[20px] text-7373 text-center  group-hover:shadow-3xl">
                  <Image
                    imgSrc={digitalMarketing}
                    imgAlt={"Digital Marketing icon"}
                    className={"mx-auto mb-10"}
                  />
                  <Heading
                    as={"h4"}
                    text={"Digital Marketing"}
                    className={"mb-5 font-bold text-1515 text-2xl"}
                  />
                  <Text
                    as={"p"}
                    text={
                      "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
                    }
                    className={"max-w-xs mx-auto leading-6"}
                  />
                </div>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
      {/* Service Section End */}

      {/* Recent Work Section Start */}
      <div id="recentWorkSection" className={"bg-F3F3 font-primary"}>
        <Container>
          <div className="recent_work_heading pt-32 text-center">
            <Heading
              as={"h2"}
              text={"Our Recent Work"}
              className={"mb-5 font-bold text-1515 text-[44px]"}
            />
            <Text
              as={"p"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."
              }
              className={"max-w-xl mx-auto mb-24 text-7373 leading-6"}
            />
          </div>
          <div className="recent_works_wrapper pb-36">
            <Flex className={"flex-wrap justify-between gap-6"}>
              <div className="recent_item max-w-[400px] bg-white rounded-[20px] text-7373 text-center overflow-hidden">
                <Image
                  imgSrc={taskManagement}
                  imgAlt={"Task Management App"}
                  className={""}
                />
                <div className="recent_item_details py-8 px-10 bg-white">
                  <Heading
                    as={"h5"}
                    text={"Task Management App"}
                    className={"mb-3 font-bold text-1515 text-xl"}
                  />
                  <Text
                    as={"p"}
                    text={
                      "This is a task management application that can help you be more."
                    }
                    className={"max-w-xs mx-auto leading-6"}
                  />
                </div>
              </div>
              <div className="recent_item max-w-[400px] bg-white rounded-[20px] text-7373 text-center overflow-hidden">
                <Image
                  imgSrc={taskManagement}
                  imgAlt={"Task Management App"}
                  className={""}
                />
                <div className="recent_item_details py-8 px-10 bg-white">
                  <Heading
                    as={"h5"}
                    text={"Task Management App"}
                    className={"mb-3 font-bold text-1515 text-xl"}
                  />
                  <Text
                    as={"p"}
                    text={
                      "This is a task management application that can help you be more."
                    }
                    className={"max-w-xs mx-auto leading-6"}
                  />
                </div>
              </div>
              <div className="recent_item max-w-[400px] bg-white rounded-[20px] text-7373 text-center overflow-hidden">
                <Image
                  imgSrc={taskManagement}
                  imgAlt={"Task Management App"}
                  className={""}
                />
                <div className="recent_item_details py-8 px-10 bg-white">
                  <Heading
                    as={"h5"}
                    text={"Task Management App"}
                    className={"mb-3 font-bold text-1515 text-xl"}
                  />
                  <Text
                    as={"p"}
                    text={
                      "This is a task management application that can help you be more."
                    }
                    className={"max-w-xs mx-auto leading-6"}
                  />
                </div>
              </div>
              <div className="recent_item max-w-[400px] bg-white rounded-[20px] text-7373 text-center overflow-hidden">
                <Image
                  imgSrc={taskManagement}
                  imgAlt={"Task Management App"}
                  className={""}
                />
                <div className="recent_item_details py-8 px-10 bg-white">
                  <Heading
                    as={"h5"}
                    text={"Task Management App"}
                    className={"mb-3 font-bold text-1515 text-xl"}
                  />
                  <Text
                    as={"p"}
                    text={
                      "This is a task management application that can help you be more."
                    }
                    className={"max-w-xs mx-auto leading-6"}
                  />
                </div>
              </div>
              <div className="recent_item max-w-[400px] bg-white rounded-[20px] text-7373 text-center overflow-hidden">
                <Image
                  imgSrc={taskManagement}
                  imgAlt={"Task Management App"}
                  className={""}
                />
                <div className="recent_item_details py-8 px-10 bg-white">
                  <Heading
                    as={"h5"}
                    text={"Task Management App"}
                    className={"mb-3 font-bold text-1515 text-xl"}
                  />
                  <Text
                    as={"p"}
                    text={
                      "This is a task management application that can help you be more."
                    }
                    className={"max-w-xs mx-auto leading-6"}
                  />
                </div>
              </div>
              <div className="recent_item max-w-[400px] bg-white rounded-[20px] text-7373 text-center overflow-hidden">
                <Image
                  imgSrc={taskManagement}
                  imgAlt={"Task Management App"}
                  className={""}
                />
                <div className="recent_item_details py-8 px-10 bg-white">
                  <Heading
                    as={"h5"}
                    text={"Task Management App"}
                    className={"mb-3 font-bold text-1515 text-xl"}
                  />
                  <Text
                    as={"p"}
                    text={
                      "This is a task management application that can help you be more."
                    }
                    className={"max-w-xs mx-auto leading-6"}
                  />
                </div>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
      {/* Recent Work Section End */}

      {/* Why You Should Choose Section Start */}
      <div id="whyChooseSection" className={"font-primary"}>
        <Container>
          <div className="why_choose_heading pt-36 mb-32 text-center">
            <Heading
              as={"h2"}
              text={"Why You Should Choose Agenc"}
              className={
                "max-w-md mx-auto mb-5 font-bold text-1515 text-[44px] leading-normal"
              }
            />
            <Text
              as={"p"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
              }
              className={"max-w-3xl mx-auto mb-12 text-7373 leading-6"}
            />
          </div>
          <div className="why_part_content mb-24">
            <Flex className={"justify-between items-center space-x-24"}>
              <div className="why_part_left w-[60%]">
                <Flex className={"flex-wrap gap-16"}>
                  <div className="recent_item text-7373">
                    <Image
                      imgSrc={innovativeIdeas}
                      imgAlt={"Innovative Ideas"}
                      className={"mb-5"}
                    />
                    <Heading
                      as={"h5"}
                      text={"Innovative Ideas"}
                      className={"mb-3 font-bold text-1515 text-xl"}
                    />
                    <Text
                      as={"p"}
                      text={
                        "Because each project is different, we adapt to your business model."
                      }
                      className={"max-w-xs mx-auto leading-6"}
                    />
                  </div>
                  <div className="recent_item text-7373">
                    <Image
                      imgSrc={innovativeIdeas}
                      imgAlt={"Innovative Ideas"}
                      className={"mb-5"}
                    />
                    <Heading
                      as={"h5"}
                      text={"Innovative Ideas"}
                      className={"mb-3 font-bold text-1515 text-xl"}
                    />
                    <Text
                      as={"p"}
                      text={
                        "Because each project is different, we adapt to your business model."
                      }
                      className={"max-w-xs mx-auto leading-6"}
                    />
                  </div>
                  <div className="recent_item text-7373">
                    <Image
                      imgSrc={dedicatedSupport}
                      imgAlt={"Dedicated Support"}
                      className={"mb-5"}
                    />
                    <Heading
                      as={"h5"}
                      text={"Dedicated Support"}
                      className={"mb-3 font-bold text-1515 text-xl"}
                    />
                    <Text
                      as={"p"}
                      text={
                        "We provide 24/7 support for all our clients and serve them professionally."
                      }
                      className={"max-w-xs mx-auto leading-6"}
                    />
                  </div>
                  <div className="recent_item text-7373">
                    <Image
                      imgSrc={dedicatedSupport}
                      imgAlt={"Dedicated Support"}
                      className={"mb-5"}
                    />
                    <Heading
                      as={"h5"}
                      text={"Dedicated Support"}
                      className={"mb-3 font-bold text-1515 text-xl"}
                    />
                    <Text
                      as={"p"}
                      text={
                        "We provide 24/7 support for all our clients and serve them professionally."
                      }
                      className={"max-w-xs mx-auto leading-6"}
                    />
                  </div>
                </Flex>
              </div>
              <div className="why_part_right w-[40%]">
                <Image
                  imgSrc={whyChoose}
                  imgAlt={"Why choose us promotional image"}
                  className={"w-full"}
                />
              </div>
            </Flex>
          </div>
        </Container>
      </div>
      {/* Why You Should Choose Section End */}

      {/* Review Section Start */}
      <div id="reviewSection" className={"mb-24 font-primary"}>
        <Container>
          <div className="review_heading pt-3 mb-32 text-center">
            <Heading
              as={"h2"}
              text={"Some Client Reviews"}
              className={"mb-5 font-bold text-1515 text-[44px] leading-normal"}
            />
            <Text
              as={"p"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."
              }
              className={"max-w-2xl mx-auto mb-12 text-7373 leading-6"}
            />
          </div>
          <div className="review_wrap">
            <Flex className={"justify-between items-center space-x-6"}>
              <div className="left_arrow w-10 h-10 rounded-full bg-[#4756DF] shrink-0 text-white text-2xl text-center flex justify-center items-center">
                <MdKeyboardArrowLeft />
              </div>
              <div className="review_item_box group">
                <div className="review_item p-14 rounded-[30px] group-hover:bg-reviewHoverColor">
                  <BiSolidQuoteLeft
                    className={"text-quoteIconColor text-4xl"}
                  />
                  <Heading
                    as={"p"}
                    text={
                      "I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."
                    }
                    className={"max-w-xs my-5 text-B7B7"}
                  />
                  <div className="review_icons mb-8 text-iconColor text-xl flex ">
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                  </div>
                  <div className="reviewer flex items-center space-x-5">
                    <Image imgSrc={Reviewer} />
                    <div className="reviewer_details">
                      <Heading
                        as={"p"}
                        text={"Eric Drake"}
                        className={"text-2323 font-semibold text-[20px]"}
                      />
                      <Heading
                        as={"p"}
                        text={"Digital Marketer"}
                        className={"text-B7B7"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="review_item_box group">
                <div className="review_item p-14 rounded-[30px] group-hover:bg-reviewHoverColor">
                  <BiSolidQuoteLeft
                    className={"text-quoteIconColor text-4xl"}
                  />
                  <Heading
                    as={"p"}
                    text={
                      "I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."
                    }
                    className={"max-w-xs my-5 text-B7B7"}
                  />
                  <div className="review_icons mb-8 text-iconColor text-xl flex ">
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                  </div>
                  <div className="reviewer flex items-center space-x-5">
                    <Image imgSrc={Reviewer} />
                    <div className="reviewer_details">
                      <Heading
                        as={"p"}
                        text={"Eric Drake"}
                        className={"text-2323 font-semibold text-[20px]"}
                      />
                      <Heading
                        as={"p"}
                        text={"Digital Marketer"}
                        className={"text-B7B7"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="review_item_box group">
                <div className="review_item p-14 rounded-[30px] group-hover:bg-reviewHoverColor">
                  <BiSolidQuoteLeft
                    className={"text-quoteIconColor text-4xl"}
                  />
                  <Heading
                    as={"p"}
                    text={
                      "I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."
                    }
                    className={"max-w-xs my-5 text-B7B7"}
                  />
                  <div className="review_icons mb-8 text-iconColor text-xl flex ">
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                  </div>
                  <div className="reviewer flex items-center space-x-5">
                    <Image imgSrc={Reviewer} />
                    <div className="reviewer_details">
                      <Heading
                        as={"p"}
                        text={"Eric Drake"}
                        className={"text-2323 font-semibold text-[20px]"}
                      />
                      <Heading
                        as={"p"}
                        text={"Digital Marketer"}
                        className={"text-B7B7"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_arrow w-10 h-10 rounded-full bg-[#4756DF] shrink-0 text-white text-2xl text-center flex justify-center items-center">
                <MdKeyboardArrowRight />
              </div>
            </Flex>
          </div>
        </Container>
      </div>
      {/* Review Section End */}

      {/* Contact Section Start */}
      <div id="contactSection" className={"py-32 bg-[#DCDCDC] font-primary"}>
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="contact_left w-[40%]">
              <Heading
                as={"h3"}
                text={"We Do design, Code & Development"}
                className={"max-w-md mb-5 font-bold text-1515 text-[45px]"}
              />
              <Text
                as={"p"}
                text={
                  "I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."
                }
                className={"max-w-lg mb-3 text-B7B7 leading-6"}
              />
              <Text
                as={"p"}
                text={
                  "There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form."
                }
                className={"max-w-lg text-B7B7 leading-6"}
              />
            </div>
            <div className="contact_right w-[40%] py-8 px-10 rounded-[20px] bg-white">
              <Heading
                as={"h6"}
                text={"Get a free quote now"}
                className={"mb-7 font-bold text-1515 text-center text-[30px]"}
              />
              <div className="input_item mb-5">
                <Text
                  as={"p"}
                  text={"Name"}
                  className={"mb-[10px] text-1515 font-medium"}
                />
                <div className="input_field rounded-[10px] border border-[#E8E8E8]">
                  <Text
                    as={"p"}
                    text={"Enter your name"}
                    className={
                      "py-5 px-6 text-[#D0D0D0] font-primary font-medium"
                    }
                  />
                </div>
              </div>
              <div className="input_item mb-5">
                <Text
                  as={"p"}
                  text={"Email"}
                  className={"mb-[10px] text-1515 font-medium"}
                />
                <div className="input_field rounded-[10px] border border-[#E8E8E8]">
                  <Text
                    as={"p"}
                    text={"Enter your email"}
                    className={
                      "py-5 px-6 text-[#D0D0D0] font-primary font-medium"
                    }
                  />
                </div>
              </div>
              <div className="input_item mb-8">
                <Text
                  as={"p"}
                  text={"Phone"}
                  className={"mb-[10px] text-1515 font-medium"}
                />
                <div className="input_field rounded-[10px] border border-[#E8E8E8]">
                  <Text
                    as={"p"}
                    text={"Enter your number"}
                    className={
                      "py-5 px-6 text-[#D0D0D0] font-primary font-medium"
                    }
                  />
                </div>
              </div>
              <Button
                bText={"Get free quote"}
                className={
                  "py-5 w-full mb-12 font-semibold text-[20px] bg-primaryColor text-white rounded-[10px]"
                }
              />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Contact Section End */}

      {/* Footer Section Start */}
      <div id="footerSection" className={"pt-36 font-primary"}>
        <Container>
          <Flex className={"mb-32 justify-between"}>
            <div className="footer_logo">
              <Image imgSrc={fLogo} className={"mb-8"} />
              <Text
                as={"p"}
                text={
                  "I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."
                }
                className={"max-w-xs mb-[10px] text-B7B7 font-medium"}
              />
            </div>
            <div className="footer_about">
              <Text
                as={"h5"}
                text={"About"}
                className={"mb-8 text-1515 font-semibold text-[20px]"}
              />
              <Menu mText={"About us"} className={"mb-4 text-B7B7"} />
              <Menu mText={"Features"} className={"mb-4 text-B7B7"} />
              <Menu mText={"News"} className={"mb-4 text-B7B7"} />
              <Menu mText={"Careers"} className={"text-B7B7"} />
            </div>
            <div className="footer_company">
              <Text
                as={"h5"}
                text={"Company"}
                className={"mb-8 text-1515 font-semibold text-[20px]"}
              />
              <Menu mText={"Our Team"} className={"mb-4 text-B7B7"} />
              <Menu mText={"Partner With Us"} className={"mb-4 text-B7B7"} />
              <Menu mText={"FAQ"} className={"mb-4 text-B7B7"} />
              <Menu mText={"Blog"} className={"text-B7B7"} />
            </div>
            <div className="footer_support">
              <Text
                as={"h5"}
                text={"Support"}
                className={"mb-8 text-1515 font-semibold text-[20px]"}
              />
              <Menu mText={"Contact Us"} className={"mb-4 text-B7B7"} />
              <Menu mText={"Support Center"} className={"mb-4 text-B7B7"} />
              <Menu mText={"Feedback"} className={"mb-4 text-B7B7"} />
              <Menu mText={"Accesbility"} className={"text-B7B7"} />
            </div>
            <div className="footer_getInTouch">
              <Text
                as={"h5"}
                text={"Get in touch"}
                className={"mb-8 text-1515 font-semibold text-[20px]"}
              />
              <Menu mText={"info@gmail.com"} className={"mb-4 text-B7B7"} />
              <Menu mText={"+88 0121 0212"} className={"mb-4 text-B7B7"} />
            </div>
          </Flex>
          <div className="footer_divider mb-8 h-[1px] w-full bg-[#E8E8E8]"></div>
          <Text
            as={"p"}
            text={"All credit goes to @agence.com"}
            className={"mb-8 text-center text-[#D0D0D0] font-medium"}
          />
        </Container>
      </div>
      {/* Footer Section End */}
    </>
  );
}

export default App;
