# 과제 설명서
## T리포트
### pages URL
+ https://kimhyein-93.github.io/chunjae-portfolio/html/index.html
### 작업 파일
+ HTML
  + html/index.html
+ resources
  + css
    + /css/scss/reset.scss
    + /css/scss/index.scss
  + js
    + /js/jquery-3.6.1.min.js
    + /js/swiper-bundle.min.js
    + /js/ui.js
### 핵심 사용기술
+ HTML
+ SCSS
+ JQuery 
### 작업 과정
#### 공통
+ class명은 카멜케이스 표기법 사용
+ font는 CDN link imort
+ font size 및 일부 여백, 요소 size 등을 rem 활용하여 모든 해상도 대응
+ flex 기반의 유동적인 레이아웃 설계
+ 웹표준 준수
#### 프로필
+ lorem picsum에서 제공하는 API를 활용하여 랜덤하게 이미지 표시
#### slider
+ swiper 라이브러리 사용
#### 그래프
+ 그래프 옆의 수치에 따라서 자동으로 % 계산하여 반영하도록 기능추가
  + 100% 기준은 수강시간 800, 수강 강의 수 50으로 계산
