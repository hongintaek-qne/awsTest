import React, { useState } from "react";
import "../css/sub.css";
import { MapContainer } from "../components/Common";

const conItem1 = [
  { id: "conItem1-1", img: "con1-list1.png", title: "System Integration" },
  { id: "conItem1-2", img: "con1-list2.png", title: "Mobile Application" },
  { id: "conItem1-3", img: "con1-list3.png", title: "R&D Business" },
  { id: "conItem1-4", img: "con1-list4.png", title: "Smart Solution" },
];

const conItem4 = [
  { id: "conItem4-1", img: "con4-list1.png", title: "STEP1" },
  { id: "conItem4-2", img: "con4-list2.png", title: "STEP2" },
  { id: "conItem4-3", img: "con4-list3.png", title: "STEP3" },
  { id: "conItem4-4", img: "con4-list4.png", title: "STEP4" },
];

const conItem5 = [
  { id: "conItem5-1", img: "con5-list1.png", title: "기업신용인증서" },
  { id: "conItem5-2", img: "con5-list2.jpg", title: "소프트산업협회 회원" },
  { id: "conItem5-3", img: "con5-list3.jpg", title: "기업부설연구소 인정서" },
  { id: "conItem5-4", img: "con5-list4.jpg", title: "A.Devcare 프로그램" },
];

const topics = [
  {
    id: 1,
    title: "회사소개",
    body: "한걸음 앞서가는 글로벌 비지니스 리더 (주)두베를 소개 합니다.\n두베는 북두칠성의 우두머리 별을 의미합니다.\n 수많은 별들 중에 중심이 되는  별의 우두머리로 여행자에게 가야 할 길을 안내하고\n천체를 연구하는 이에게는 연구의 출발 점이기도 합니다.\n이것은 두베 기업이 제시하는 비전정신입니다.\n 저희 두베는 앞서가는 기술력과 노하우, 고객을 먼저 생각하는 기술을 바탕으로\n고객님들과 더불어 성장해 나갈 것이며 성공적인 비지니스를 위해\n정말로 필요한 것이 무엇인가에 대한 철저한 분석과 충분한 정보 수집으로\n선택의 폭을 넓혀 가겠습니다. 미리 대비하고 충분히 생각하는 자세를 바탕으로\n여러분의 성공비지니스에 한걸음 더 빠르게 다가갈 수 있도록\n모든 역량을 다 할것입니다.",
    con: <ConList topics={conItem1}></ConList>,
  },
  {
    id: 2,
    title: "조직도",
    body: "두베의 조직구성도 입니다.",
    con: [
      <img src={require("../asset/img/con2-img1.png")} alt="" />,
      <img src={require("../asset/img/con2-img2.png")} alt="" />,
      <img src={require("../asset/img/con2-img3.png")} alt="" />,
    ],
  },
  {
    id: 3,
    title: "연혁",
    body: "한걸음 앞서가는 글로벌 비지니스 리더 (주)두베가 걸어온 길입니다.",
    con: [
      <ul className="con-list">
        <li className="history">
          <p>2021</p>
          <ul>
            <li>신한은행 디지털PB시스템 구축(진행중)</li>
            <li>오렌지라이프 통합 모바일창구 구축(진행중)</li>
            <li>공제기금 제도개선 전산개발(진행중)</li>
            <li>신한은행 인도 VKYC구축(진행중)</li>
            <li>KOTRA 온라인전시 플랫픔 고도화(진행중)</li>
            <li>CJ대한통운 웹사이트 리뉴얼</li>
            <li>손해보험협회 외환정보시스템 재구축</li>
            <li>KB카드 KB Pay중심의 통합 앱 서비스</li>
            <li>신한카드 My SHOP Partner 기반 BFM 플랫폼 구축</li>
          </ul>
        </li>
        <li className="history">
          <p>2020</p>
          <ul>
            <li>신한은행 디지털PB시스템 구축(진행중)</li>
            <li>오렌지라이프 통합 모바일창구 구축(진행중)</li>
            <li>공제기금 제도개선 전산개발(진행중)</li>
            <li>신한금융그룹 통합연금 플랫폼 개발</li>
            <li>신한플러스 멤버십 구축</li>
          </ul>
        </li>
      </ul>,
      <ul className="con-list">
        <li className="history">
          <p>2019</p>
          <ul>
            <li>신한은행 디지털PB시스템 구축(진행중)</li>
            <li>오렌지라이프 통합 모바일창구 구축(진행중)</li>
            <li>공제기금 제도개선 전산개발(진행중)</li>
            <li>신한은행 인도 VKYC구축(진행중)</li>
            <li>KOTRA 온라인전시 플랫픔 고도화(진행중)</li>
            <li>CJ대한통운 웹사이트 리뉴얼</li>
          </ul>
        </li>
        <li className="history">
          <p>2018</p>
          <ul>
            <li>신한은행 디지털PB시스템 구축(진행중)</li>
            <li>오렌지라이프 통합 모바일창구 구축(진행중)</li>
            <li>공제기금 제도개선 전산개발(진행중)</li>
            <li>신한금융그룹 통합연금 플랫폼 개발</li>
            <li>신한플러스 멤버십 구축</li>
            <li>KB카드 KB Pay중심의 통합 앱 서비스</li>
            <li>신한카드 My SHOP Partner 기반 BFM 플랫폼 구축</li>
          </ul>
        </li>
      </ul>,
    ],
  },
  {
    id: 4,
    title: "비전",
    body: "한걸음 앞서가는 글로벌 비지니스 리더 (주)두베가 나아 가고자 하는 길입니다.\n최고의 전문인력과 노하우를 바탕으로 고객의 성공 비즈니스를 이끌고\n끊임없는 연구개발로 내일을 준비하는 서비스를 만들겠습니다.",
    con: <ConList topics={conItem4}></ConList>,
  },
  {
    id: 5,
    title: "인증서",
    body: "한걸음 앞서가는 글로벌 비지니스 리더 (주)두베의 인증현황을 보실 수 있습니다.",
    con: <ConList topics={conItem5}></ConList>,
  },
  {
    id: 6,
    title: "오시는 길",
    body: "서울시 영등포구 선유로130, 603호 에이스하이테크시티3차(양평동3가) / TEL: 02-336-5811",
    con: <MapContainer></MapContainer>,
  },
];

const lisTxtItem = [
  {
    item: [
      "금융 최신 기술 적용 컨설팅",
      "현장 개발 및 유지보수 업무 지원",
      "고객업무 서비스 환경 분석",
      "최적 시스템 H/W, S/W 설계",
      "개발을 위한 최적 인력 구성",
    ],
  },
  {
    item: [
      "대 고객 서비스 용 어플리케이션",
      "Smart Brochure for Android",
      "GPS 를 이용한 위치정보 제공",
      "애자일 기반 프로젝트 관리 솔루션",
    ],
  },
  {
    item: [
      "비대면 본인인증 솔루션",
      "동영상 차량번호 추출 시스템 & 보안 조회 시스템",
      "대용량 클라우드 관리 시스템",
      "개발을 위한 최적 인력 구성",
      "사후 유지보수 및 개선안 제안",
    ],
  },
  {
    item: [
      "블록체인 메인넷 연구개발",
      "블록체인 기반 포인트 관리 시스템",
      "실시간 고화질 동영상 전송 솔루션 TWIG CAM",
      "Smart Chart Solution",
      "PMS (Push Message Service)",
    ],
  },
];

function Visual() {
  return (
    <div className="visual about">
      <div className="contents">
        <p className="title">Business Info</p>
        <p className="txt">
          고객을 먼저 생각하는 기술을 바탕으로 여러분의 성공비지니스에 <br />
          한걸음 더 빠르게 다가갈 수 있도록 모든 역량을 다 할 것입니다.
        </p>
      </div>
    </div>
  );
}

function ChangeRemove() {
  const classOn = document.querySelectorAll(".on");
  classOn.forEach((remove) => {
    remove.classList.remove("on");
  });
}

function Lnb(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    let classOn = null;
    if (i === 0) {
      classOn = "on";
    }
    lis.push(
      <li
        key={t.id}
        id={t.id}
        className={classOn}
        onClick={(event) => {
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
          ChangeRemove();
          event.target.classList.add("on");
        }}
      >
        {t.title}
      </li>
    );
  }
  return <ul className="lnb">{lis}</ul>;
}

function ConList(props) {
  const lis = [];
  if (props.topics === conItem1) {
    for (let i = 0; i < props.topics.length; i++) {
      const lisTxt = [];
      const lti = lisTxtItem[i];
      for (let j = 0; j < lti.item.length; j++) {
        let lt = lti.item[j];
        lisTxt.push(<li>{lt}</li>);
      }
      let c = props.topics[i];
      lis.push(
        <li className="con-list-item">
          <div className="con-list-img">
            <img
              key={c.id}
              id={c.id}
              src={require(`../asset/img/${c.img}`)}
              alt=""
            />
          </div>
          <p className="con-list-tit">{c.title}</p>
          <ul className="con-list-txt">{lisTxt}</ul>
        </li>
      );
    }
  } else if (props.topics === conItem4) {
    for (let i = 0; i < props.topics.length; i++) {
      const lisTxt = [];
      const lti = [
        "IT 최고의 기술분야라 할 수 있는 금융 및 통신 서비스 분야에서 검증된 최고의 개발 기술인력을 확보하고 있습니다.",
        "많은 사업수행 경험을 바탕으로 고객의 성공적인 비즈니스를 위한 솔루션과 노하우를 보유하고 있습니다",
        "지속적인 R&D와 개발경험을 바탕으로 자체적인 솔루션과 미래를 대비하는 개발력 확보에 주력하고 있습니다",
        "보유 기술력과 노하우를 바탕으로 다양한 응용 서비스를 개발하여 내일을 준비하고 있습니다",
      ];
      let lt = lti[i];
      lisTxt.push(<p className="con-list-txt">{lt}</p>);
      let c = props.topics[i];
      lis.push(
        <li className="con-list-item vision">
          <img
            key={c.id}
            id={c.id}
            src={require(`../asset/img/${c.img}`)}
            alt=""
          />
          <p className="con-list-tit">{c.title}</p>
          {lisTxt}
        </li>
      );
    }
  } else if (props.topics === conItem5) {
    for (let i = 0; i < props.topics.length; i++) {
      let c = props.topics[i];
      lis.push(
        <li className="con-list-item certify">
          <img
            key={c.id}
            id={c.id}
            src={require(`../asset/img/${c.img}`)}
            alt=""
            width={200}
          />
          <p className="con-list-tit">{c.title}</p>
        </li>
      );
    }
  }
  return <ul className="con-list">{lis}</ul>;
}

function Contents(props) {
  return (
    <div className="contents">
      <p className="title">{props.title}</p>
      <p className="txt">{props.body}</p>
      <div className="con">{props.con}</div>
    </div>
  );
}

function Container(props) {
  const [mode, setMode] = useState("DEFAULT");
  const [id, setId] = useState(null);
  let content = null;

  let title,
    body,
    con = null;
  if (mode === "DEFAULT") {
    content = (
      <Contents
        id={topics[0].id}
        title={topics[0].title}
        body={topics[0].body}
        con={topics[0].con}
      ></Contents>
    );
  } else if (mode === "OTHER") {
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
        con = topics[i].con;
      }
    }
    content = <Contents title={title} body={body} con={con}></Contents>;
  }
  return (
    <div className="container">
      <Lnb
        topics={topics}
        onChangeMode={(_id) => {
          setMode("OTHER");
          setId(_id);
        }}
      ></Lnb>
      {content}
    </div>
  );
}

function Business() {
  return (
    <>
      <Visual></Visual>
      <Container></Container>
    </>
  );
}

export default Business;
