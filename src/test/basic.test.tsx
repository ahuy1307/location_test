import { expect, test  } from 'vitest'
import { render, screen, fireEvent  } from '@testing-library/react';
import {CustomNode} from "../components/custom_draggable/CustomNode.tsx";
import HomePage from "../pages/HomePage.tsx";
import LocationContextProvider from "../contexts/LocationContextProvider.tsx";
import {BrowserRouter} from "react-router-dom";

test('renders loading text while fetching data', () => {
    render(
        <LocationContextProvider>
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        </LocationContextProvider>
    );
    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
});

test('renders node of tree after data is fetched', async () => {
    render(<CustomNode node={{
        id: '100',
        parent: '0',
        text: '',
        droppable: true,
        data: {
            label: 'Company HQ',
            is_area: true,
            is_remote: false,
            height: 0,
            real_parent_id: 0
        }
    }} depth={0} isOpen={false} onToggle={function (id: string | number): void {
        throw new Error('Function not implemented.');
    }} handleRef={null} />);
    // Wait for data to be fetched
    await screen.findByText('Company HQ');
    const nodeElement = screen.getByText('Company HQ');
    expect(nodeElement).toBeInTheDocument();
});

test('performs drag and drop action correctly', async () => {
    render(
       <>
           <CustomNode node={{
               id: '100',
               parent: '0',
               text: '',
               droppable: true,
               data: {
                   label: 'Company HQ',
                   is_area: true,
                   is_remote: false,
                   height: 0,
                   real_parent_id: 0
               }
           }} depth={0} isOpen={false} onToggle={(id: string | number): void => {
               throw new Error('Function not implemented.');
           }} handleRef={null} />
           <CustomNode node={{
               id: '112',
               parent: '111',
               text: '',
               droppable: false,
               data: {
                   label: 'Anjou Sales Office',
                   is_area: false,
                   is_remote: false,
                   height: 1,
                   real_parent_id: 111
               }
           }} depth={0} isOpen={false} onToggle={function (id: string | number): void {
               throw new Error('Function not implemented.');
           }} handleRef={null} />
       </>
    );
    const dataAfterDragAnDrop = [
        {
            "id": 100,
            "parent": 0,
            "droppable": true,
            "text": "",
            "data": {
                "label": "Company HQ",
                "is_area": true,
                "is_remote": false,
                "height": 0,
                "real_parent_id": 0
            }
        },
        {
            "id": 112,
            "parent": 100,
            "droppable": false,
            "text": "",
            "data": {
                "label": "Anjou Sales Office",
                "is_area": false,
                "is_remote": false,
                "height": 0,
                "real_parent_id": 111
            }
        },
    ]

    const draggableElement = screen.getByText('Anjou Sales Office');
    const droppableElement = screen.getByText('Company HQ');

    // Mô phỏng hành động kéo và thả
    fireEvent.dragStart(draggableElement, {
        dataTransfer: { setData: () => dataAfterDragAnDrop },
    });
    fireEvent.drop(droppableElement);

    //get dragged data and drop target data from tree
    const companyHQData = dataAfterDragAnDrop.find(item => item.data.label === 'Company HQ');
    const anjouSalesOfficeData = dataAfterDragAnDrop.find(item => item.data.label === 'Anjou Sales Office');

    //check id
    expect(companyHQData?.parent).toEqual(0);
    expect(anjouSalesOfficeData?.parent).toEqual(companyHQData?.id);
});
