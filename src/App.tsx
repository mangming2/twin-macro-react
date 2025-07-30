import './App.css'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

function App() {
  const isActive = true
  return (
    <Wrapper>
        {/* 기본적인 스타일링 */}
        <StyledDiv>
          기본적인 스타일링 
        </StyledDiv>

        {/* 조건부 스타일링 */}
        <ConditionalDiv isActive={isActive}>
          조건부 스타일링 (활성화됨) <br/>
          tw태그는 정적변환만 가능하므로
          정적 스타일링은 tw , 동적/조건부 스타일링은 styled를 사용하는 것이 권장패턴턴
        </ConditionalDiv>

        {/* 반응형 디자인 */}
        <ResponsiveCard>
            <div>화면 크기에 따라 레이아웃이 자동으로 조정됩니다.</div>
            <div>모바일에서는 세로로, 데스크톱에서는 가로로 배치됩니다.</div>
            <div>Tailwind의 기본 반응형 브레이크포인트를 사용 가능합니다.</div>
        </ResponsiveCard>

        {/* 호버 효과와 애니메이션 */}
        <HoverButton>
          호버해보세요! 🎯
        </HoverButton>

        {/* 그리드 레이아웃 */}
        <GridContainer>
          <GridItem>아이템 1</GridItem>
          <GridItem>아이템 2</GridItem>
          <GridItem>아이템 3</GridItem>
          <GridItem>아이템 4</GridItem>
        </GridContainer>

        {/* 커스텀 색상 팔레트 예제 */}
        <CustomColorPalette>
            <ColorPrimary />
            <ColorSecondary />
            <ColorBrand />
            <ColorSuccess />

            <div tw="text-center mt-4">
            <h3 tw="text-lg font-display font-bold text-primary-700">커스텀 색상</h3>
            <p tw="text-primary-600 text-sm">tailwind.config.js에서 정의한 색상들</p>
          </div>
        </CustomColorPalette>

        {/* 커스텀 애니메이션 예제 */}
        <CustomAnimationCard>
          <div tw="flex items-center justify-center space-x-4">
            <CustomAnimationBounceSlow>🎯</CustomAnimationBounceSlow>
            <CustomAnimationPulseFast>⚡</CustomAnimationPulseFast>
            <CustomAnimationWiggle>🎪</CustomAnimationWiggle>
            <CustomAnimationFloat>🦋</CustomAnimationFloat>
          </div>
          <div tw="text-center mt-4">
            <h3 tw="text-lg font-display font-bold text-primary-700">커스텀 애니메이션</h3>
            <p tw="text-primary-600 text-sm">config에서 정의한 애니메이션들</p>
          </div>
        </CustomAnimationCard>

        {/* CSS와 Tailwind 혼합 사용 */}
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
// 커스텀 색상 팔레트
const CustomColorPalette = tw.div`
  bg-white p-6 rounded-2xl shadow-soft
  border border-primary-100
`

const ColorPrimary = tw.div`
  w-12 h-12 rounded-lg mx-auto mb-2 shadow-inner-glow bg-primary-500
`

const ColorSecondary = tw.div`  
  w-12 h-12 rounded-lg mx-auto mb-2 shadow-inner-glow bg-secondary-500
`

const ColorBrand = tw.div`
  w-12 h-12 rounded-lg mx-auto mb-2 shadow-inner-glow bg-brand
`

const ColorSuccess = tw.div`
  w-12 h-12 rounded-lg mx-auto mb-2 shadow-inner-glow bg-success
`

// 커스텀 애니메이션 카드
const CustomAnimationCard = tw.div`
  bg-gradient-sunset text-white p-6 rounded-2xl shadow-soft
  border border-secondary-200
` 

const CustomAnimationBounceSlow = tw.div`
  bg-gradient-sunset text-white p-6 rounded-2xl shadow-soft
  border border-secondary-200 animate-bounce-slow
`

const CustomAnimationPulseFast = tw.div`
  bg-gradient-sunset text-white p-6 rounded-2xl shadow-soft
  border border-secondary-200 animate-pulse-fast
` 

const CustomAnimationWiggle = tw.div`
  bg-gradient-sunset text-white p-6 rounded-2xl shadow-soft
  border border-secondary-200 animate-wiggle
`
const CustomAnimationFloat = tw.div`
  bg-gradient-sunset text-white p-6 rounded-2xl shadow-soft
  border border-secondary-200 animate-float
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