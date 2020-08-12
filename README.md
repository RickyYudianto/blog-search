# Blog Search

### 달리는 방법
- npm install
- npm run start
- localhost:3000 엽니다

### API에 제한이 있습니다
1. 50 페이지 이상의 데이터를 요청할 수 없습니다
2. 검색 값은 비워 둘 수 없습니다
3. 검색 값이 특정 문자 인 경우 API가 응답을 반환 할 수 없습니다. ( , . %)

### 즐겨찾기 기능
- Redux 만 사용했기때문에 페이지를 새로 고침하면 북마크 목록이 빈 상태로 재설정됩니다.

### 참조
- [API](https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide)
- [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate-cra-template)
