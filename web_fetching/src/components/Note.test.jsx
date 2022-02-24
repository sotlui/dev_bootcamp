import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Note  from './Note';


test('renders content', () => {
    const note = {
        content: 'This is a test',
        important: true
    }
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component=render(<Note note={note}/>);
    //console.log(component.getByText=['This is a test']);
    //component.getByText('This is a test');
    //component.getByText('make not important');
    //Otra forma
    const {debug}=component;
    expect(component.container).toHaveTextContent('This is a test')
    expect(component.container).toHaveTextContent(note.content);
    debug();
    
})