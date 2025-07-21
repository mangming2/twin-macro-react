import './App.css'
import tw from 'twin.macro'
import styled from '@emotion/styled'

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

const Badge = tw.span`
  bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full
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

export default App