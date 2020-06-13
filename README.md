# suft-telegram-bot [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) 

WebHook 방식으로 변경하여 더 이상 사용하지 않습니다.

수프트 관리를 위해 사용했었던 텔레그램 봇

## 기능
- 수프트 가입신청 시 봇을 통해 알림을 보냅니다.

## Branches
- `production`
    - 실 서비스에 올라간 코드
- `master`
    - 실 서비스에 올라가도 문제가 없는 코드
- `dev` `feature/~`
    - 개발 중인 코드
    
## Environment Variables
- `BOT_TOKEN`
    - 텔레그램 봇 토큰
- `API_TOKEN`
    - 백엔드하고 통신 시 인증을 위한 토큰
- `OWNER_ID`
    - 봇을 이용할 텔레그램 유저 ID
- `ENDPOINT`
    - 백엔드 API 주소