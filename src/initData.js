    var initTasks = [
    	{
		id: "id0",
		prioritet: "0",
		name: "Страница с таблицей задач",
		desc: "На странице должны быть 3 колонки: 'В очереди', 'В работе', 'Выполнена'. Нужно использовать эффекты и перетаскивание элементов.",
		status: "task",
		color: "#00ff00",
		date1:"02.10.2023",
		date2:"--------",
		subTasks: [
	{
		id: "id10",
		prioritet: "10",
		name: "Каскадные комментарии",
		desc: "Добавить комментарии с возможностью комментирования комментариев с возможностью комментирования комментариев на комментарии и т. д.",
		status: "testing",
		date1:"02102023",
		date2:"--------",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},	
        {
		id: "id2",
		prioritet: "2",
		name: "Возможность редактирования задач",
		desc: "Добавить возможность редактирования задач в модальных окнах",
		status: "testing",
		date1:"02102023",
		date2:"--------",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
	{
		id: "id4",
		prioritet: "4",
		name: "Создание и удаление подзадач",
		desc: "Должна быть возможность создания и удаления подзадач",
		status: "testing",
		date1:"02102023",
		date2:"--------",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
	{
		id: "id3",
		prioritet: "3",
		name: "Поиск",
		desc: "Поиск задачи по номеру и по заголовку",
		status: "queued",
		date1:"02102023",
		date2:"--------",
		comments:[{id:"",author:"",text:"комментировать",comments:[ {"id":0.9253123265426333,"text":"Поиск можно сделать только на серверной части.","author":"author","comments":[]} ] }]
	},
	{
		id: "id5",
		prioritet: "5",
		name: "Мобильные устройства",
		desc: "Должна быть адаптация под мобильные устройства",
		status: "queued",
		date1:"02102023",
		date2:"--------",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
	{
		id: "id6",
		prioritet: "6",
		name: "Анимации",
		desc: "Должна изобиловать плавными анимациями",
		status: "inProgress",
		date1:"02102023",
		date2:"--------",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
	{
		id: "id8",
		prioritet: "8",
		name: "Развернуть приложение",
		desc: "По готовности развернуть приложение на хостинге",
		status: "queued",
		date1:"02102023",
		date2:"--------",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
	{
		id: "id7",
		prioritet: "7",
		name: "Сохранение",
		desc: "Информация должна сохраняться после перезагрузки страницы. Для этого использовать куки или local storage или сохранять информацию на backend",
		status: "testing",
		date1:"02102023",
		date2:"10.11.2023",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	}
    ],
		comments: [
		{
		id:"",
		text:"комментировать",
		author:"",
		comments: [
    {
      id: 1,
      text: "Example комментировать on 0.",
      author: "user1",
      comments: [
        {
          id: 2,
          text: "Another example comment text on1.",
          author: "user2",
          comments: [
            {
              id: 3,
              text: "Another example comment text on2.",
              author: "user3",
              comments: [
                {
                id: 4,
                text: "Another example comment text on3. Another example comment text.",
                author: "user4",
                comments: [
                {
                  id: 7,
                  text: "Another example comment text on4. Another example comment text from user7. id: 7",
                  author: "user7",
                  comments: []
                }
                ]
                }
              ]
            },
              {
                id: 9,
                text: "Yet another example comment text on2. i: 9",
                author: "user9",
                comments: []
              }
            ]
          }
        ]
    },
    {
      id: 5,
      text: "Example комментировать 0.",
      author: "user5",
      comments: [
          {
          id: 6,
          text: "Example комментировать on 5.",
          author: "user6",
          comments: []
          }
      ]
    },
    {
      id: 8,
      text: "Example комментировать on0.",
      author: "user8",
      comments: []
    }
    ]
    }
  ]
},
	{
		id: "id9",
		prioritet: "9",
		name: "Страница с проектами",
		desc: "Создать страницу с проектами",
		status: "task",
		color: "#0000ff",
		date1:"02102023",
		date2:"--------",
		subTasks:[
	{
		id: "id11",
		prioritet: "11",
		name: "name11",
		desc: "description",
		status: "queued",
		date1:"02102023",
		date2:"02102023",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
	{
		id: "id12",
		prioritet: "12",
		name: "name12",
		desc: "description",
		status: "queued",
		date1:"02102023",
		date2:"02102023",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
	{
		id: "id13",
		prioritet: "13",
		name: "name13",
		desc: "description",
		status: "queued",
		date1:"02102023",
		date2:"02102023",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
	{
		id: "id14",
		prioritet: "14",
		name: "name14",
		desc: "description",
		status: "queued",
		date1:"02102023",
		date2:"02102023",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
	{
		id: "id15",
		prioritet: "15",
		name: "name15",
		desc: "description",
		status: "queued",
		date1:"02102023",
		date2:"--------",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
	{
		id: "id16",
		prioritet: "16",
		name: "name16",
		desc: "description",
		status: "queued",
		date1:"02102023",
		date2:"02102023",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
	{
		id: "id17",
		prioritet: "17",
		name: "name17",
		desc: "description",
		status: "queued",
		date1:"02102023",
		date2:"02102023",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
		],
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	},
	{
		id: "id1",
		prioritet: "1",
		name: "SPA приложение на React",
		desc: "Приложение должно иметь две страницы: страницу с проектами и страницу с таблицей задач.",
		status: "task",
		color: "#ff0000",
		date1:"02102023",
		date2:"--------",
		subTasks: [
	{
		id: "id18",
		prioritet: "18",
		name: "name18",
		desc: "description",
		status: "inProgress",
		date1:"02102023",
		date2:"02102023",
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	}
		],
		comments:[{id:"",author:"",text:"комментировать",comments:[]}]
	}

    ];
    export default initTasks
