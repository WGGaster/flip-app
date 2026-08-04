import { faker } from "@faker-js/faker"

const CITIES = [
  'Москва',
  'Санкт-Петербург',
  'Новосибирск',
  'Екатеринбург',
  'Казань',
  'Сочи',
  'Краснодар',
  'Ростов-на-Дону',
];

const INTERESTS = [
  'Путешествия', 'Фотография', 'Готовка', 'Спорт',
  'Йога', 'Медитация', 'Чтение', 'Искусство',
  'Музыка', 'Кино', 'Театр', 'Танцы',
  'Волонтерство', 'Программирование', 'Дизайн',
  'Рисование', 'Писательство', 'Садоводство',
  'Виноделие', 'Серфинг', 'Сноубординг', 'Велоспорт',
  'Бег', 'Плавание', 'Настольные игры', 'Видеоигры'
];

const JOBS = [
  'Разработчик', 'Дизайнер', 'Менеджер', 'Преподаватель',
  'Врач', 'Архитектор', 'Журналист', 'Психолог',
  'Фотограф', 'Маркетолог', 'Аналитик', 'Переводчик'
];

const STATUS = [
    'Ищу серьёзные отношения', 'Ищу дружеские отношения', 'Ищу свободные отношения'
]

const generateProfile = () => {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();

    return {
        id: faker.string.uuid(),
        name: `${firstname} ${lastname}`,
        age: faker.number.int({'min': 18, 'max': 40}),
        gender: faker.helpers.arrayElement(['male', 'female']),
        city: faker.helpers.arrayElement(CITIES),
        status: faker.helpers.arrayElement(STATUS),
        distance: faker.number.int({'min': 1, 'max': 50}),
        photo: `https://i.pravatar.cc/400?img=${faker.number.int({ min: 1, max: 70 })}`,
        interests: faker.helpers.arrayElements(INTERESTS, faker.number.int({ min: 3, max: 6 })),
        verified: faker.datatype.boolean(0.7), // 70% верифицированы
        online: faker.datatype.boolean(0.4),
        lastActive: faker.date.recent({ days: 7 }).toISOString(),
        height: faker.number.int({ min: 155, max: 195 }),
        job: faker.helpers.arrayElement(JOBS)
    }
}

export default generateProfile
