import getFilmPage from '../../templates/main/filmPage/filmPage';
import getBigElement from '../../templates/main/films/bigElement';

export const films = [{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '1',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
  'id': '1',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '2',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
  'id': '2',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '3',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
  'id': '3',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '4',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
  'id': '4',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '5',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
  'id': '5',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '6',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
  'id': '6',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '7',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
  'id': '7',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '8',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
  'id': '8',
},
];

//заменить на передачу колбеков в один контроллер
//добавить случай ненайденных в базе фильмов(ну вдруг)
export const filmPageController = (id: string): void => {
  const main = document.querySelector('main');
  if (!main) {
    throw new Error('main is not found');
  }

  films.forEach(elem => {
    if (elem.id === id) {
      const filmPage = getFilmPage(id);

      main.append(filmPage);
    }
  });
};

export const mainPageController = (main: HTMLElement): void => {
  films.forEach(elem => {
    const film = getBigElement(elem.path, elem.title, elem.titleEng, elem.rating, elem.note, elem.id);
    main.append(film);
  });
};
