import { FiPlus } from "react-icons/fi";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Content, NewMovie } from "./styles.js";
import { Header } from "../../components/Header";
import { Section } from "./../../components/Section";
import { Card } from "./../../components/Card";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handlePreview(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);

      setMovies(response.data);
    }

    fetchMovies();
    console.log(search);
  }, [search]);

  return (
    <Container>
      <Header setSearch={setSearch} />

      <Content>
        <Section title="Meus filmes">
          <NewMovie to="/new">
            <FiPlus />
            Adicionar filme
          </NewMovie>
        </Section>

        <Section>
          {movies.map((movie) => (
            <Card
              key={String(movie.id)}
              data={movie}
              onClick={() => handlePreview(movie.id)}
            />
          ))}
        </Section>
      </Content>
    </Container>
  );
}
