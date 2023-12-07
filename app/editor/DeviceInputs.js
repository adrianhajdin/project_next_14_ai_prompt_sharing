import { Context, SelectedEditorActionContext } from '@components/Provider';

export const DeviceInputs = {


    getData() {
        return [
            
            {
                id: "1000",
                button: "circleSwitch",

                device:'VKB_GLADIATOR_EVO',
                name: 'Circle Switch Up',
                slot: 'top',
                action: 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                layer: 0
            },
            {
                id: "1001",

                button: "circleSwitch",
                device:'VKB_GLADIATOR_EVO',
                name: 'Circle Switch Press',
                slot: 'press',
                action: 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                layer: 1
            },
            {
                id: "1002",

                button: "circleSwitch",
                device:'VKB_GLADIATOR_EVO',
                name: 'Circle Switch Left',
                slot: 'left',
                action: 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                layer: 2
            },
            {
                id: "1004",

                button: "circleSwitch",
                device:'VKB_GLADIATOR_EVO',
                name: 'Circle Switch Right',
                slot: 'right',
                action: 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                layer: 0
            },
             {
                id: "1005",
                button: "hatSwitch",

                device:'VKB_GLADIATOR_EVO',
                name: 'Hat Switch Down',
                slot: 'bottom',
                action: 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                layer: 0
            },
            {
                id: "1006",

                button: "hatSwitch",
                device:'VKB_GLADIATOR_EVO',
                name: 'Hat Switch Press',
                slot: 'press',
                action: 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                layer: 1
            },
            {
                id: "1007",

                button: "hatSwitch",
                device:'VKB_GLADIATOR_EVO',
                name: 'Hat Switch Left',
                slot: 'left',
                action: 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                layer: 2
            },
            {
                id: "1008",

                button: "hatSwitch",
                device:'VKB_GLADIATOR_EVO',
                name: 'Hat Switch Right',
                slot: 'right',
                action: 'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                layer: 0
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
