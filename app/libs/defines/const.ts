export const ProblemType = [
  {
    type: 'MC',
    desc: '객관식 문제입니다.\n현재 행의 단어 이름 또는 텍스트가 문제로 제시됩니다.\n보기에 다른 행의 값과 섞인 이 행의 텍스트를 찾으면 정답입니다.'
  },
  {
    type: 'FO',
    desc: '순서 찾기 문제입니다.\nDescription 컬럼에 1, 2, 3.. 으로 쓰여진 텍스트를 랜덤하게 섞은 보기를 제공합니다.\n옳은 순서대로 나열된 보기를 찾으면 정답입니다.'
  },
  {
    type: 'EA',
    desc: 'Description 컬럼에 주요 키워드를 찾아 []를 씌워주세요.\n[] 괄호에 감싼 키워드를 모두 입력하면 정답입니다.'
  },
  {
    type: 'MC',
    desc: '객관식 문제입니다.\n현재 행의 단어 이름 또는 텍스트가 문제로 제시됩니다.\n보기에 다른 행의 값과 섞인 이 행의 텍스트를 찾으면 정답입니다.'
  },
]

export const MenuList = [
  {
    menuName: '공부하기',
    menuRoute: '/study'
  },
  {
    menuName: '시험보기',
    menuRoute: '/test'
  },
  {
    menuName: '시험내역',
    menuRoute: '/history'
  },
  {
    menuName: '오답노트',
    menuRoute: '/review'
  },
]

export const ProblemCount = [10, 20, 30, 50, 100]

export const ExcelTemplateLink = 'https://docs.google.com/spreadsheets/d/1UrgfscOIe1Joq9HbnqNHfnFWY2TYlFFjetXOx_uxpDs/edit?usp=sharing'