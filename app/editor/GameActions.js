export const GameActions = {
    getData() {
        return [
            {
                id: 1801,
                name: 'FIRE WEAPON GROUP 1',
                category: 'Ship Combat'
            },
            {
                id: 1501,
                name: 'FIRE WEAPON GROUP 2',
                category: 'Ship Combat'
            },
            {
                id: 1011,
                name: 'TOGGLE POWER ON/OFF',
                category: 'Power Management'
            },
            {
                id: 1000,
                name: 'STRAFE UP',
                category: 'Flight Movement'
            },
         
            {
                id: 1001,
                name: 'STRAFE DOWN',
                category: 'Flight Movement'

            },
            {
                id: 1002,
                name: 'STRAFE LEFT',
                category: 'Flight Movement'

            },
            {
                id: 10011,
                name: 'STRAFE RIGHT',
                category: 'Flight Movement'

            },
            {
                id: 10111,
                name: 'STRAFE FORWARDS',
                category: 'Flight Movement'

            },
            {
                id: 10301,
                name: 'SELF DESTRUCT',
                category: 'Flight Movement'
            },  
          
        ];
    },

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    },

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    },

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    },

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    },

    getCustomers(params) {
        const queryParams = params
            ? Object.keys(params)
                  .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                  .join('&')
            : '';

        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) => res.json());
    }
};
