import './App.css'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

function App() {
  const isActive = true
  const variant = 'primary'

  return (
    <Wrapper>
        {/* 기본적인 스타일링 */}
        <StyledDiv>
          기본적인 스타일링 
        </StyledDiv>

        {/* 조건부 스타일링 */}
        <ConditionalDiv isActive={isActive}>
          조건부 스타일링 (활성화됨)
        </ConditionalDiv>

        {/* 반응형 디자인 */}
        <ResponsiveCard>
            <div>화면 크기에 따라 레이아웃이 자동으로 조정됩니다.</div>
            <div>모바일에서는 세로로, 데스크톱에서는 가로로 배치됩니다.</div>
        </ResponsiveCard>

        {/* 호버 효과와 애니메이션 */}
        <HoverButton>
          호버해보세요! 🎯
        </HoverButton>

        {/* 복합 스타일링 */}
        <ComplexCard variant={variant}>
          <div>
            <div>복합 스타일링</div>
            <div>New</div>
          </div>
          <div>
            twin.macro를 사용하면 복잡한 스타일링도 깔끔하게 관리할 수 있습니다.
          </div>
          <div>
            <ActionButton>확인</ActionButton>
            <ActionButton variant="secondary">취소</ActionButton>
          </div>
        </ComplexCard>

        {/* 그리드 레이아웃 */}
        <GridContainer>
          <GridItem>아이템 1</GridItem>
          <GridItem>아이템 2</GridItem>
          <GridItem>아이템 3</GridItem>
          <GridItem>아이템 4</GridItem>
        </GridContainer>

        {/* 커스텀 스타일링 */}
        <CustomStyledDiv>
          <span tw="text-2xl font-bold text-blue-600">🎨</span>
          <span tw="ml-2">커스텀 스타일링 예제</span>
        </CustomStyledDiv>

        {/* CSS와 Tailwind 혼합 사용 */}
        <CssMixedCard>
          <div tw="text-lg font-bold mb-2">CSS + Tailwind 혼합</div>
          <div>이 카드는 CSS와 Tailwind 클래스를 함께 사용합니다.</div>
        </CssMixedCard>

        {/* CSS 키프레임 애니메이션 */}
        <AnimatedBox>
          <span>CSS 애니메이션</span>
        </AnimatedBox>

        {/* CSS 변수 사용 */}
        <CssVariablesCard>
          <div>CSS 변수를 사용한 스타일링</div>
          <div>동적으로 색상과 크기를 조절할 수 있습니다.</div>
        </CssVariablesCard>

        {/* CSS 미디어 쿼리 */}
        <MediaQueryCard>
          <div>CSS 미디어 쿼리 예제</div>
          <div>화면 크기에 따라 다른 스타일이 적용됩니다.</div>
        </MediaQueryCard>

        {/* CSS 그라디언트와 필터 */}
        <GradientFilterCard>
          <div>CSS 그라디언트 + 필터</div>
          <div>복잡한 시각적 효과를 CSS로 구현</div>
        </GradientFilterCard>
    </Wrapper>
  )
}
const Wrapper = tw.div`flex flex-col items-center justify-center gap-4 bg-gray-100 p-8`
// 기본 스타일링
const StyledDiv = tw.div`bg-red-500 text-white p-4 rounded-lg shadow-md`

// 조건부 스타일링 - styled 사용
const ConditionalDiv = styled.div<{ isActive: boolean }>`
  ${tw`p-4 rounded-lg transition-all duration-300`}
  ${props => props.isActive 
    ? tw`bg-green-500 text-white shadow-lg transform scale-105` 
    : tw`bg-gray-300 text-gray-600`
  }
`

// 반응형 디자인
const ResponsiveCard = tw.div`
  bg-white p-6 rounded-xl shadow-md
  flex flex-col md:flex-row md:items-center md:space-x-4
  hover:shadow-xl transition-shadow duration-300
`

// 호버 효과와 애니메이션
const HoverButton = tw.button`
  bg-gradient-to-r from-purple-500 to-pink-500
  text-white font-bold py-3 px-6 rounded-full
  transform hover:scale-110 hover:rotate-2
  transition-all duration-300 ease-in-out
  shadow-lg hover:shadow-2xl
  focus:outline-none focus:ring-4 focus:ring-purple-300
`

// 복합 스타일링 - styled 사용
const ComplexCard = styled.div<{ variant: string }>`
  ${tw`bg-white p-6 rounded-xl shadow-md border-l-4 hover:shadow-xl transition-all duration-300`}
  ${props => props.variant === 'primary' 
    ? tw`border-blue-500` 
    : tw`border-green-500`
  }
`



// 조건부 버튼 스타일링 - styled 사용
const ActionButton = styled.button<{ variant?: string }>`
  ${tw`px-4 py-2 rounded-lg font-medium transition-colors duration-200`}
  ${props => props.variant === 'secondary'
    ? tw`bg-gray-200 text-gray-800 hover:bg-gray-300`
    : tw`bg-blue-500 text-white hover:bg-blue-600`
  }
`

// 그리드 레이아웃
const GridContainer = tw.div`
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
`

const GridItem = tw.div`
  bg-white p-4 rounded-lg shadow-md
  hover:bg-blue-50 hover:shadow-lg
  transition-all duration-200
  text-center font-medium
`

// 커스텀 스타일링
const CustomStyledDiv = tw.div`
  bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500
  text-white p-6 rounded-2xl shadow-xl
  flex items-center justify-center
  transform hover:rotate-1 hover:scale-105
  transition-all duration-500 ease-out
  cursor-pointer
`

// CSS와 Tailwind 혼합 사용
const CssMixedCard = styled.div`
  ${tw`bg-white p-6 rounded-xl shadow-md`}
  ${css`
    /* CSS로 추가 스타일링 */
    border: 2px solid #e5e7eb;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
      border-radius: 1rem;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    &:hover::before {
      opacity: 1;
    }
    
    /* CSS로 복잡한 선택자 처리 */
    & > div:first-child {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `}
`

// CSS 키프레임 애니메이션
const AnimatedBox = styled.div`
  ${tw`bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-6 rounded-xl shadow-lg flex items-center justify-center cursor-pointer`}
  ${css`
    animation: bounce 2s infinite;
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
    
    &:hover {
      animation: pulse 1s infinite;
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
  `}
`

// CSS 변수 사용
const CssVariablesCard = styled.div`
  ${tw`p-6 rounded-xl shadow-md`}
  ${css`
    --primary-color: #3b82f6;
    --secondary-color: #10b981;
    --card-padding: 1.5rem;
    --border-radius: 0.75rem;
    
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: var(--card-padding);
    border-radius: var(--border-radius);
    
    /* CSS 변수를 동적으로 변경할 수 있음 */
    &:hover {
      --primary-color: #1d4ed8;
      --secondary-color: #059669;
      transform: translateY(-2px);
      transition: all 0.3s ease;
    }
    
    /* CSS로 복잡한 레이아웃 */
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    
    & > div {
      padding: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 0.5rem;
      backdrop-filter: blur(10px);
    }
  `}
`

// CSS 미디어 쿼리
const MediaQueryCard = styled.div`
  ${tw`bg-white p-4 rounded-lg shadow-md`}
  ${css`
    /* 기본 스타일 (모바일) */
    font-size: 14px;
    text-align: center;
    
    /* 태블릿 */
    @media (min-width: 768px) {
      font-size: 16px;
      text-align: left;
      padding: 1.5rem;
    }
    
    /* 데스크톱 */
    @media (min-width: 1024px) {
      font-size: 18px;
      padding: 2rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    /* 대형 화면 */
    @media (min-width: 1280px) {
      font-size: 20px;
      padding: 2.5rem;
    }
    
    /* 다크 모드 지원 */
    @media (prefers-color-scheme: dark) {
      background: #1f2937;
      color: #f9fafb;
    }
    
    /* 인쇄 스타일 */
    @media print {
      background: white !important;
      color: black !important;
      box-shadow: none !important;
    }
  `}
`

// CSS 그라디언트와 필터
const GradientFilterCard = styled.div`
  ${tw`p-6 rounded-xl shadow-xl flex flex-col items-center justify-center text-white`}
  ${css`
    background: linear-gradient(
      45deg,
      #ff6b6b,
      #4ecdc4,
      #45b7d1,
      #96ceb4,
      #feca57
    );
    background-size: 400% 400%;
    animation: gradientShift 3s ease infinite;
    
    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    
    /* CSS 필터 효과 */
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
    
    &:hover {
      filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4)) 
              brightness(1.1) 
              contrast(1.1);
      transform: scale(1.02);
      transition: all 0.3s ease;
    }
    
    /* CSS로 텍스트 효과 */
    & > div:first-child {
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      letter-spacing: 1px;
    }
    
    & > div:last-child {
      font-size: 0.9em;
      opacity: 0.9;
      margin-top: 0.5rem;
    }
    
    /* CSS로 복잡한 배경 패턴 */
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(255, 255, 255, 0.1) 10px,
        rgba(255, 255, 255, 0.1) 20px
      );
      animation: patternMove 20s linear infinite;
      z-index: 0;
    }
    
    & > div {
      position: relative;
      z-index: 1;
    }
    
    @keyframes patternMove {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(50px, 50px);
      }
    }
  `}
`

export default App