import { Container, UserInfo, Movie } from "./styles";
import { Stars } from "../../components/Stars";
import { useNavigate, useParams } from "react-router-dom";

import { FiClock, FiArrowLeft } from "react-icons/fi";
import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

import { api } from "../../services/api";
import { useState, useEffect } from "react";

export function MoviePreview() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  
  const avatarURL = user.avatar
  ? `${api.defaults.baseURL}/files/${user.avatar}`
  : avatarPlaceHolder;

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <Section title="">
          <header>
            <button type="button" onClick={handleBack}>
              <FiArrowLeft />
              Voltar
            </button>

            <Movie>
              <h1>{data.title} </h1>
              <Stars rating={data.rating} />
            </Movie>

            <UserInfo>
              <div>
                <span>Por {data.user_id}</span>

                <img src={avatarURL} />
              </div>

              <div>
                <FiClock />
                <span>{data.updated_at}</span>
              </div>
            </UserInfo>

            <section className="tags">
              {data.tags && (
                <div>
                  {data.tags.map((tag) => (
                    <Tag title={tag.name} key={tag.id} />
                  ))}
                </div>
              )}
            </section>
          </header>

          {data.description}
        </Section>
      )}
    </Container>
  );
}
