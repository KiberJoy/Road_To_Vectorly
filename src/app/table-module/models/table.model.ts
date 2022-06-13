//TopicName - может быть, а может и не быть?
//скорее всего отдельное поле в конфиге таблицы
//конфиг состоит из двух полей Хед и Бади - оба объекта, в хеде все что касается головы таблицы, в бади - тела
// Хед является массивом объектов, каждый объект будет настройкой каждой отдельной ячейчки - тайтл и стили

export interface Table {
  head: TablePart;
  body: TablePart;
}

interface TablePart {
  rows: TableRow[];
}

export interface TableRow {
  columns: TableColumn[];
}

export interface TableColumn {
  value: any;
  type: TableColumnTypes;
}

export enum TableColumnTypes {
  flag = 'flag',
  status = 'status',
  any = 'any',
}

export const MOCK_TABLE: Table = {
  head: {
    rows: [
      {
        columns: [
          {
            value: 'OKR Title',
            type: TableColumnTypes.flag,
          },
          {
            value: 'Status',
            type: TableColumnTypes.status,
          },
          {
            value: 'Else',
            type: TableColumnTypes.any,
          },
        ],
      },
    ],
  },
  body: {
    rows: [
      {
        columns: [
          {
            value: 'Reduce churn to <5% annually through customer success',
            type: TableColumnTypes.flag,
          },
          {
            value: 'On track',
            type: TableColumnTypes.status,
          },
          {
            value: '1',
            type: TableColumnTypes.any,
          },
        ],
      },
      {
        columns: [
          {
            value:
              'Increase positive feedback items and praise from 5 to 15 per quarter',
            type: TableColumnTypes.flag,
          },
          {
            value: 'On track',
            type: TableColumnTypes.status,
          },
          {
            value: '2',
            type: TableColumnTypes.any,
          },
        ],
      },
      {
        columns: [
          {
            value: 'Create & launch new mentorship program by the end of Q3',
            type: TableColumnTypes.flag,
          },
          {
            value: 'On track',
            type: TableColumnTypes.status,
          },
          {
            value: '3',
            type: TableColumnTypes.any,
          },
        ],
      },
      {
        columns: [
          {
            value: 'Win 1,000 deals worth $10M in bookings by 12/31/17',
            type: TableColumnTypes.flag,
          },
          {
            value: 'Need help',
            type: TableColumnTypes.status,
          },
          {
            value: '4',
            type: TableColumnTypes.any,
          },
        ],
      },
      {
        columns: [
          {
            value: 'Exceed Net Promoter Score (NPS) of over 8.0',
            type: TableColumnTypes.flag,
          },
          {
            value: 'Need help',
            type: TableColumnTypes.status,
          },
          {
            value: '5',
            type: TableColumnTypes.any,
          },
        ],
      },
      {
        columns: [
          {
            value: 'Interview 20 customers per month and get feedback',
            type: TableColumnTypes.flag,
          },
          {
            value: 'Off track',
            type: TableColumnTypes.status,
          },
          {
            value: '6',
            type: TableColumnTypes.any,
          },
        ],
      },
      {
        columns: [
          {
            value: 'Get 1000 survey responses to annual satisfaction survey',
            type: TableColumnTypes.flag,
          },
          {
            value: 'Off track',
            type: TableColumnTypes.status,
          },
          {
            value: '7',
            type: TableColumnTypes.any,
          },
        ],
      },
      {
        columns: [
          {
            value:
              'Set budget for design software, online presence accounts (like Dribbble), and premium resources that make no sense to create ourselves (mockup templates, wireframe kits, stock photos and illustrations)',
            type: TableColumnTypes.flag,
          },
          {
            value: 'On track',
            type: TableColumnTypes.status,
          },
          {
            value: '8',
            type: TableColumnTypes.any,
          },
        ],
      },
    ],
  },
};
