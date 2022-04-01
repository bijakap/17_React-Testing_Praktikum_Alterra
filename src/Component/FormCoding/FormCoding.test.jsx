import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import NameForm from "./FormCoding";

describe('NameForm', () => {
    test('render NameForm component', () => {
        render(<NameForm/>)
        screen.debug()

        expect(screen.getByText('Pendaftaran Peserta Coding Bootcamp')).toBeInTheDocument();
        expect(screen.getByLabelText('Nama Lengkap:')).toBeInTheDocument();
        expect(screen.getByLabelText('Email:')).toBeInTheDocument();
        expect(screen.getByLabelText('No Handphone:')).toBeInTheDocument();
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Foto Surat Kesungguhan:/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toBeInTheDocument();
    }),

    test('Input text in NameForm component', () => {
        render(<NameForm/>)

        fireEvent.input(
            screen.getByRole("textbox", {name: /Nama Lengkap:/}), 
            {target: {value: "Harry Style"} }
        )

        fireEvent.input(
            screen.getByRole("textbox", {name: /Email:/}), 
            {target: {value: "test@gmail.com"} }
        )


        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue('Harry Style')
        expect(screen.getByLabelText(/Email:/)).toHaveValue('test@gmail.com')
    })
})