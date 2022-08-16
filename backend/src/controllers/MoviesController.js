const knex = require("../database/knex");
const AppError = require('../utils/AppError');

class MoviesController {
  async create(req, res) {
    const { title, description, rating, tags } = req.body;
    const user_id = req.user.id;

    const rate = rating >= 1 && rating <= 5;

    if (!rate) {
      throw new AppError ("O filme deve ser avaliado. Entre 1 e 5.")
    }

    const movie_id = await knex("movies").insert({
      title,
      description,
      rating,
      user_id,
    });

    const tagsInsert = tags.map((name) => {
      return {
        movie_id,
        name,
        user_id,
      };
    });

    await knex("tags").insert(tagsInsert);

    res.json();
  }

  async show(req, res) {
    const { id } = req.params;

    const movie = await knex("movies").where({ id }).first();
    const tags = await knex("tags").where({ movie_id: id }).orderBy("name");

    return res.json({
      ...movie,
      tags,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    await knex("movies").where({ id }).delete();

    return res.json();
  }

  async index(req, res) {
    const { title, tags } = req.query;
    const user_id = req.user.id;

    let movies;

    if (tags) {
      const filterTags = tags.split(",").map((tag) => tag.trim());

      movies = await knex("tags")
        .select(["movies.id", "movies.title", "movies.user_id"])
        .where("movies.user_id", user_id)
        .whereLike("movies.title", `%${title}%`)
        .whereIn("name", filterTags)
        .innerJoin("movies", "movies.id", "movies.note_id")
        .groupBy("movies.id")
        .orderBy("movies.title");
      } else {
        movies = await knex("movies")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const userTags = await knex("tags").where({ user_id });
    const notesWithTags = movies.map((movie) => {
      const noteTags = userTags.filter((tag) => tag.note_id === movie.id);

      return {
        ...movie,
        tags: noteTags,
      };
    });

    return res.json(notesWithTags);
  }
}

module.exports = MoviesController;
