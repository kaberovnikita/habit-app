import ButtonMenu from "./shared/ui/ButtonMenu/ButtonMenu"
import IconBottle from "./shared/ui/IconBottle/IconBottle"
import IconFood from "./shared/ui/IconFood/IconFood"
import IconSport from "./shared/ui/IconSport/IconSport"

function App() {
  return (
    <>
      <ButtonMenu>
        {color => <IconFood color={color} />}
      </ButtonMenu >
      <ButtonMenu>
        {color => <IconBottle color={color} />}
      </ButtonMenu >
      <ButtonMenu>
        {color => <IconSport color={color} />}
      </ButtonMenu >
    </>
  )
}

export default App
