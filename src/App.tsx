import "./App.css";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel";

function App() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>SIphone 14</CarouselItem>
        <CarouselItem>SIphone 15</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default App;
