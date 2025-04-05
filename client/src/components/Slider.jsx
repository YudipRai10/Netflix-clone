import SliderCard from "./SliderCard";

const Slider = ({ movies }) => {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <div>
      <SliderCard title="Trending Now" data={getMoviesFromRange(0, 9)} />
      <SliderCard title="New Releases" data={getMoviesFromRange(10, 19)} />
      <SliderCard
        title="Blockbuster Movies"
        data={getMoviesFromRange(20, 29)}
      />
      <SliderCard
        title="Popular on Netflix"
        data={getMoviesFromRange(30, 39)}
      />
      <SliderCard title="Action Movies" data={getMoviesFromRange(40, 49)} />
      <SliderCard title="Epics" data={getMoviesFromRange(50, 59)} />
    </div>
  );
};

export default Slider;
