import createElement from '../../../helpers/createElement';
import getBigElement from './bigElement';



const films = [{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '1',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '2',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '3',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '4',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '5',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '6',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '7',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
},
{ 'path': './assets/losMisteriosDeLaura.jpg',
  'title': '8',
  'titleEng': 'Los Misterios De Laura',
  'rating': 3,
  'note': 'film about Laura',
},
];

const getMainContent = (): HTMLElement => {
  const mainContent = createElement('section', { class: 'films' });

  films.forEach(elem => {
    const film = getBigElement(elem.path, elem.title, elem.titleEng, elem.rating, elem.note);
    mainContent.append(film);
  });
  return mainContent;
};
export default getMainContent;
