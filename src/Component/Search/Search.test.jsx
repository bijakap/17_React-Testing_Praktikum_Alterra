import React from "react";
import axios from "axios";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search";
import { act } from "react-dom/test-utils";

jest.mock('axios');

describe('Search', () => {
    test('Fetch Data from API', async() => {
        const stories = [
           {ObjectID : '1', title : 'hello'},
           {ObjectID : '2', title : 'hello'},
        ]

        axios.get.mockImplementationOnce(() => 
            Promise.resolve({data : {hits: stories}})
        );

        render(<Search/>)
        await act(async () => {
            await userEvent.click(screen.getByRole('button'))
        })

        const items = await screen.findAllByRole('listitem')

        expect(items).toHaveLength(2);

    });

    test('Fetch Data from API and fails', async() => {
        axios.get.mockImplementationOnce(() => 
            Promise.reject(new Error())
        );

        render(<Search/>)
        
        await act(async () => {
            await userEvent.click(screen.getByRole('button'))
        })

        const items = await screen.findByText("Ada yang error ...")

        expect(items).toBeInTheDocument()
    });
})