import SubTitle from "../SubTitle"

const Header = () => {
  return (
    <header className="flex text-center justify-center flex-col">
      <h1 className="text-2xl">Guess the player</h1>
      <SubTitle text="Sweden World Cup 2026" />
    </header>
  )
}

export default Header