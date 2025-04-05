import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies, getGenres, getUserLikedMovies } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase.config";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import SelectGenres from "../components/SelectGenres";
import NotAvailable from "../components/NotAvailable";
import Card from "../components/Card";

const UserLiked = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [loading, setLoading] = useState(true); // Track loading state

  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setEmail(currentUser.email);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (email) {
      dispatch(getUserLikedMovies(email)).then(() => {
        setLoading(false); // Set loading to false once the movies are fetched
      });
    }
  }, [email, dispatch]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  if (loading) {
    // Show a loading indicator or a placeholder while movies are being fetched
    return (
      <Container>
        <Navbar isScrolled={isScrolled} />
        <div className="content flex column">
          <h1>My list</h1>
          {/* Loading message or spinner */}
          <p>Loading your liked movies...</p>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />

      <div className="content flex column">
        <h1>My list</h1>

        <div className="grid flex">
          {movies.length === 0 ? (
            <NotAvailable />
          ) : (
            movies.map((movie, index) => (
              <Card
                movieData={movie}
                index={index}
                key={movie.id}
                isLiked={true}
              />
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default UserLiked;

const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;
