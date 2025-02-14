import React from 'react';

const news = [
  { id: 1, title: 'Новая серия сварочных аппаратов SNR-FS-60x уже на складе', date: '18 апреля 2024 г.' },
  { id: 2, title: 'Читайте статью: Что такое PoE и для чего он нужен?', date: '29 марта 2024 г.' }
];

const projects = [{ id: 1, title: 'Snr.systems' }, { id: 2, title: 'Конфигураторы' }];

const works = [
  { id: 1, title: 'Способы оплаты' },
  { id: 2, title: 'Условия доставки' }
];

const Sidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md rounded-2xl p-4 border-b-blue-600 border-b-4">
        <h2 className="text-lg font-bold mb-3">Новости</h2>
        {news.map(item => (
          <div key={item.id} className="mb-2">
            <p className="text-sm text-gray-800">{item.title}</p>
            <p className="text-xs text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
      <div className="bg-white shadow-md mt-6 rounded-2xl p-4 border-b-blue-600 border-b-4">
        <h2 className="text-lg font-bold mb-3">Наши проекты</h2>
        <ul className="list-disc ml-5">
          {projects.map(item => (
            <li key={item.id} className="text-sm hover:text-blue-600">
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
