import { Container, LogOut, Profile, Search } from "./styles";
import { Link } from "react-router-dom";

import { Input } from "./../Input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceHolder from "../../assests/images/avatar_placeholder.svg";

export function Header({ setSearch }) {
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder;

  return (
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Profile>
        <div>
          <Link to="/profile">
            <strong>{user.name}</strong>
          </Link>
          <LogOut onClick={signOut}>sair</LogOut>
        </div>

        <Link to="/profile">
          <img src={avatarURL} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  );
}
