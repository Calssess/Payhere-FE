
## How to build

빌드 환경:

```sh
node -v 
v16.16.0
npm -v
8.11.0
```
로컬 빌드:

```sh
npm ci
npm run dev
```

페이지 라우터 목록:
```sh
// Repository 검색 페이지
http://localhost:3001/search

// 등록된 Repository 페이지
http://localhost:3001/repo

// 등록된 Repository의 Issue 모음 페이지
http://localhost:3001/issue
```

## 과제 설명
- ### 공통 부분
  - Redux-saga 를 통한 상태관리 구현
  - Mui, emotion 을 통한 UI/UX 구현
  - 로딩 구현
    - 클릭 가능한 버튼들 비활성화
    - 원형 로딩바 구현
    
  
- ### search
  - 검색할 repository 명 입력 후 검색 버튼 클릭 or Enter
  - My_Repository에 등록하기/등록 해제 가능
  - 우측 하단의 Floating 버튼을 통해 현재 My_Repository에 몇개가 등록되어있는지 확인 가능
- ### repo
  - 등록한 repository 확인 가능
  - 등록해제 가능
- ### issue
  - 상단 Chip 버튼으로 등록된 repository 구현
    - 클릭시 12개씩 페이지네이션 처리된 이슈 리스트 노출
    - 우측 X 버튼으로 등록해제 가능
  - issue 카드 클릭시 해당 github issue 페이지로 이동
  - open, close에 따른 카드 구분 가능