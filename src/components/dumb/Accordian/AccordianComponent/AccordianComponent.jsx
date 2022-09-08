import React, { useState } from "react";
import SubscribeWrapper from "../../Forms/Subscribe/SubscribeWrapper";
import SubscribeEmail from "../../Forms/Subscribe/SubscribeEmail";
import SubscribeButton from "../../Forms/Subscribe/SubscribeButton";
import AccordianItem from "../AccordianItem/AccordianItem";
import AccordianText from "../AccordianText/AccordianText";
import AccordianTitle from "../AccordianTitle/AccordianTitle";
import "./AccordianComponent.css";

function AccordianComponent({ children, ...rest }) {
  const data = [
    {
      id: 1,
      title: "What is Netflix?",
      text:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices." +
        "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      id: 2,
      title: "How much does Netflix cost?",
      text: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      title: "Where can I watch?",
      text:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles." +
        "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: 4,
      title: "How do I cancel?",
      text: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 5,
      title: "How can I watch on Netflix?",
      text: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 6,
      title: "Is Netflix good for kids?",
      text:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space." +
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];
  const [accordianState, setAccordianState] = useState(data.map(() => false));
  return (
    <div className="accordian-component" {...rest}>
      <h1 className="h1-component">Frequently Asked Questions</h1>
      {data.map((item, index) => {
        return (
          <AccordianItem key={item.id}>
            <AccordianTitle
              isOpen={accordianState[index]}
              handleClick={() => {
                let currentValue = accordianState[index];
                let newValue = !currentValue;
                let newAccordianState = [...accordianState];
                for (let i = 0; i < accordianState.length; i++) {
                  newAccordianState[i] = false;
                }
                newAccordianState[index] = newValue;
                setAccordianState(newAccordianState);
              }}
            >
              {item.title}
            </AccordianTitle>
            <AccordianText isOpen={accordianState[index]}>
              {item.text}
            </AccordianText>
          </AccordianItem>
        );
      })}
      {children}
      <div className="subscribe-accordian">
        <SubscribeWrapper>
          <SubscribeEmail type="email" placeholder="Email address" />
          <SubscribeButton>Get Started &gt;</SubscribeButton>
        </SubscribeWrapper>
      </div>
    </div>
  );
}

export default AccordianComponent;
