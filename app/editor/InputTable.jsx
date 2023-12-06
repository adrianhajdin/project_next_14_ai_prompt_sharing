"use client";
import Press from '@public/assets/icons/actions/input_press.svg';
import Down from '@public/assets/icons/actions/input_Down.svg';
import Up from '@public/assets/icons/actions/input_up.svg';
import Left from '@public/assets/icons/actions/input_left.svg';
import Right from '@public/assets/icons/actions/input_right.svg';


import React, { useState, useEffect, useContext } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { Tag } from 'primereact/tag';
// import { CustomerService } from './CustomerService';
import { DeviceInputs } from './DeviceInputs';
import { Context, SelectedEditorActionContext } from '@components/Provider';
import SearchIcon from '@components/generic/Icons/SearchIcon.jsx';
import { get } from 'mongoose';
import GameAction from '@components/GameAction.tsx'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import LayerTag from '@components/generic/LayerTag';
export default function CustomersDemo({ onInputSelect }) {
    const { data: session } = useSession();

    const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext)
    const profileContext = useContext(Context)

    const [inputs, setInputs] = useState([]);
    const [selectedInputs, setSelectedInputs] = useState([]);
    const [test, setTest] = useState([]);


    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {


        const fetchDeviceProfiles = async () => {

            const response = await fetch("/api/deviceProfiles", {
                method: "POST",
                body: JSON.stringify({
                    userId: session?.user.id
                })
            });

            const data = await response.json();
            // console.log("INPUT VIEWER !!!!!!!!!!!" + JSON.stringify(data[0].deviceProfiles.deviceProfiles.saved["VKB_GLADIATOR_EVO"].buttons["circleSwitch"]?.["top"]));
            // console.log("FETCHED RESPONSE: " + JSON.stringify(data));
            // console.log("!!!!!!!!!!!! FETCHED RESPONSE: " + JSON.stringify(data.deviceProfiles));

            // console.log("PARSED & STRINGED RESPONSE: " + JSON.parse(JSON.stringify(data[0].deviceProfiles.deviceProfiles)));
            // console.log("RAW RESPONSE: " + JSON.stringify(data[0].deviceProfiles.deviceProfiles.saved["VKB_GLADIATOR_EVO"].buttons[selectedButton]?.["top"]));
            // console.log("FETCHED DEVICEPROFILES: " + data);
            // setTop(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["top"]);
            // setbottom(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["bottom"]);
            // setLeft(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["left"]);
            // setRight(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["right"]);
            setTest(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons["circleSwitch"]?.["top"].layers);
        };

        fetchDeviceProfiles();

        DeviceInputs.getCustomersLarge().then((data) => setInputs(getInputs(data)));

        // setInputs(test);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    console.log(inputs);

    const getInputs = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            // <div className="flex flex-wrap gap-2 justify-content-between align-items-center w-full pl-12px">
            //     {/* <h4 className="m-0"></h4> */}
            //     <span className="p-input-icon-left ">
            //         <i className="pi pi-search" />
            //         <SearchIcon/>
            //         <InputText unstyled= "true" className='color-[#cefcff]' value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="START TYPING" />
            //     </span>

            // </div>

            <div className="flex flex-wrap gap-2 justify-content-between align-items-center w-full pl-12px mb-[8px]">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <SearchIcon className="w-[15px] h-auto glow-test"></SearchIcon>
                    <InputText unstyled="true" className='' value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="START TYPING" />

                </span>

            </div>
        );
    };

    const getInputIcon = (slot) => {
        switch (slot) {
            case "top":
                return (
                    <Up />
                )
                break;
            case "press":
                return (
                    <Press />
                )
                break;
            case "bottom":
                return (
                    <Down />
                )
                break;
            case "left":
                return (
                    <Left />
                )
                break;
            case "right":
                return (
                    <Right />
                )
                break;
            default:
                break;
        }
    }

    // const getInputActions = () => {

    //     return (<GameAction action_id={"asd"} input_direction={""}>);
    // }
    const nameBodyTemplate = (rowData) => {
        return (

            <div className='flex flex=row gap-[12px] '>
                <div className="ui-corners square_contain">
                    <div className='square_contain'>
                        {getInputIcon(rowData?.slot)}
                    </div>
                </div>
                <div className="flex flex-col   self-center  ">
                    <span className="text-list-default align-middle justify-center">{rowData.name.toUpperCase()}</span>
                  <LayerTag layerNumber={rowData.layer} input_direction={'left'} />
                    {/* <span className="text-list-sub">{rowData.status}</span> */}
                    {/* <GameAction action_id={rowData.action} input_direction={rowData.slot} layer={rowData.layer} /> */}

                </div>

            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>

            </div>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativeFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <div className="mb-3 font-bold">Agent Picker</div>
                <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
            </React.Fragment>
        );
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false} style={{ height: '6px' }}></ProgressBar>;
    };

    const activityFilterTemplate = (options) => {
        return (
            <>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </>
        );
    };

    // const actionBodyTemplate = () => {
    //     return <Button type="button" icon="pi pi-cog" rounded></Button>;
    // };

    const header = renderHeader();


    // BIND BUTTON STUFF
    // const onRowSelectInput = () => {
    //     setSelectedViewerInput(selectedInputs.name);
    // }
    console.log("SELECTED INPUT:" + selectedInputs.name)


    // useEffect(() => {
    //     setSelectedEditorInput(selectedInputs.name)

    // }, [selectedInputs])

    return (
        <div className="flex w-full flex-col gap-[8px]">
            <p className='text-base'>// SELECT MODIFIER LAYER (OPTIONAL)</p>

            <DataTable
                onRowSelect={() => {
                    // onRowSelectInput()
                }}
                value={inputs} paginator header={header} rows={4}
                rowClassName={"list-bg"}
                className="w-full"
                paginatorTemplate=""
                dataKey="id" selectionMode="single" selection={selectedInputs}
                onSelectionChange={(e) => {
                    setSelectedInputs(e.value)
                    // console.log("E  KEY: " + e.value.key);
                    setSelectedEditorInput(e.value);

                    console.log(e.value);
                }}
                filters={filters} filterDisplay="" globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']}
                emptyMessage="No customers found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                {/* <Column selectionMode="single" headerStyle={{ width: '1rem' }}> </Column> */}
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ maxWidth: '100px' }} body={nameBodyTemplate} />

            </DataTable>






        </div>
    );
}
