import { StudioMain, BackgroundDiv } from "../components/PagesStyle"
import { HomeOverlay } from './HomeOverlay'

export function HomePage() {
  const imageUrl = process.env.PUBLIC_URL + '/res/room.jpg'; // Replace with your image URL
  return (
    <StudioMain>
      <BackgroundDiv imageUrl={imageUrl}>
        <HomeOverlay />
      </BackgroundDiv>
    </StudioMain>
  );
}










