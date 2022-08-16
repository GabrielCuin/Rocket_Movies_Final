import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NewItem } from "../../components/NewItem";
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    if (!title) {
      alert("Informe o título do filme");
    }

    if (newTag) {
      return alert("Você criou uma nova tag, mas não a adicionou.");
    }

    await api.post("/movies", {
      title,
      description,
      rating,
      tags,
    });

    alert("Nota criada com sucesso!");
    navigate("/");
  }

  function handleRemoveMovie() {
    const ensure = window.confirm("Tem certeza que deseja excluir esse filme?");

    if (ensure) {
      setTitle("");
      setDescription("");
      setRating(0);
      setTags([]);
    }
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>

            <h1>Novo Filme</h1>
          </header>

          <div className="two-inputs">
            <div>
              <Input
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <Input
                placeholder="Sua nota (de 0 a 5)"
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>

          <TextArea
            placeholder="Observações"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <section>
            <p>Tags</p>
            <div className="tags">
              {tags.map((tag, id) => (
                <NewItem
                  value={tag}
                  key={String(id)}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NewItem
                isNew
                placeholder="Nova Tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </section>

          <div className="two-inputs">
            <Button reverse title="Excluir Filme" onClick={handleRemoveMovie} />
            <Button title="Salvar Filme" onClick={handleNewMovie} />
          </div>
        </Form>
      </main>
    </Container>
  );
}
