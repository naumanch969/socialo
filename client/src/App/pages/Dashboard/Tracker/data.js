export const data = {
    schema: {
        'prayer': {
            type: 'number',
            detail: 'Saying pray 5 times a day',
            target: { number: '5', unit: 'times' },
            weightage: '20',
            punishment: '100 times durood shareef + complete the prayer ',
            chunks: { fajr: 20, zohar: 20, asar: 20, maghrib: 20, isha: 20 },
        },
        'coding': {
            type: 'number',
            punishment: '100 times durood sharif',
            detail: '4 hours python, 5 hours MERN, 1 hour cms',
            target: { number: '10', unit: 'hour' },
            weightage: '40',
            chunks: { 'python': 40, 'mern stack': 50, 'cms': 10 }
        },
        'no graphics': {
            type: 'boolean',
            detail: 'no fuzool video, song etc..',
            target: { number: 'no', unit: '' },
            weightage: '10',
            punishment: '100 times durrod sharif',
            chunks: { 'no graphical content': 100 }
        },
        '5am': {
            type: 'boolean',
            detail: 'getting up at 5 am and sleeping at 10am ',
            target: { number: 'yes', unit: '' },
            weightage: '10',
            punishment: '80 pushups',
            chunks: { '5am': 100 }
        },
        '10pm': {
            type: 'boolean',
            detail: 'getting up at 5 am and sleeping at 10am ',
            target: { number: 'yes', unit: '' },
            weightage: '10',
            punishment: '80 pushups',
            chunks: { '10pm': 100 }
        },
        'pushups': {
            type: 'number',
            detail: 'Having 200 pushups in a whole day ',
            weightage: '10',
            target: { number: '5', unit: 'times' },
            punishment: '80 pushups',
            chunks: { '6am': 20, '10am': 20, '2pm': 20, '6pm': 20, '10pm': 20, }
        },
        'reading': {
            type: 'number',
            detail: 'be a one hour student at least',
            weightage: '10',
            target: { number: '2', unit: 'hours' },
            punishment: '20 pages more read',
            chunks: { '3pm-4pm': 50, '6:15pm-7:15pm': 50, }
        }
    },
    activities: [
        {
            'prayer': {
                type:'number',
                chunks: { fajr: true, zohar: true, asar: false, maghrib: true, isha: true },
                description: ''
            },
            'coding': {
                type:'number',
                chunks: { 'python': true, 'mern stack': false, 'cms': true },
                description: ''
            },
            'no graphics': {
                type:'boolean',
                chunks: { 'no graphical content': true },
                description: ''
            },
            '5am': {
                type:'boolean',
                chunks: { '5am': false },
                description: ''
            },
            '10pm': {
                type:'boolean',
                chunks: { '10pm': true },
                description: ''
            },
            'pushups': {
                type:'number',
                chunks: { '6am': true, '10am': false, '2pm': true, '6pm': false, '10pm': true },
                description: ''
            },
            'reading': {
                type:'number',
                chunks: { '3pm-4pm': false, '6:15pm-7:15pm': true },
                description: ''
            },
        },

    ]
}


