import { useEffect,useRef } from "react";
import Layout from "../common/Layout";

export default function Location() {

    const {kakao} = window;
    //윈도우 객체에 등록되어있는 카카오키를 변수명으로 비구조화할당을 한 것.
    //윈도우 객체가 카카오 객체를 사용할 수 있도록 하는 코드.
    //const kakao = (window).kakao;


    //var container = document.getElementById('map');
    //리얼돔에서 참조하는 방법으로 해당 방법은 가상돔인 리액트를 사용할 수 없다.
    //그래서 리액트에서는 useRef라는 훅을 이용해서 가상으로 생성된 DOM을 참조할 수 있다.
    const container = useRef(null);
    //useRef를 이용해서 가상돔을 참조할 변수로 컨테이너를 생성한 뒤, null 값으로 빈 구역으로 만들어둠.

    const option = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 //지도의 확대레벨
    };
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    //마커거 표시될 위치 지정
    const imageSrc = `${process.env.PUBLIC_URL}/img/marker1.png`;
    const imageSize = new kakao.maps.Size(232, 99);
    const imageOption = { offset: new kakao.maps.Point(116, 99) };
    //마커 이미지 변경에 필요한 정보 값 3개를 등록
}