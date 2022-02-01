import React, {
    useEffect,
    useRef,
    useState,
} from 'react';

import { Editor } from '@tinymce/tinymce-react';
import { Form, Col } from 'react-bootstrap';
import { findByDisplayValue } from "@testing-library/react";

const Video = () => {
    const quizList = [ {id: 1,
        question: 'What is React', options:
            [ {id: 1, name: 'programming language'}, {id: 2,name:'style'}, {id: 3,name:'framework'}]
    },
        {id:2,
            question: 'What is HTML', options:
                [ {id: 4,name: 'library'}, {id: 2,name: 'oop'}, { id: 3,name: 'ruby'}]
        } ]
    const [ choice, setChoice ] = useState({})
    const onChoice = data => {
        const {answer, question} = data
        setChoice({...choice, [answer.target.name]: answer.target.value})
    }
    console.log(choice)
    return (
        <Form>
            <Form.Group className="mb-3">
                { quizList.map( ( quiz, index ) => (
                        <>
                            <Form.Label as="legend" column sm={ 2 }>
                                {quiz.question}
                            </Form.Label>
                            {quiz.options.map((option, index) => (
                                <Form.Check
                                    onClick={(e)=> onChoice( {answer: e, question: quiz.question})}
                                    type="radio"
                                    label={option.name}
                                    name={`answer${quiz.id}`}
                                    id="formHorizontalRadios1"
                                    value={option.name}
                                />
                            ))}
                        </>
                    )
                ) }

            </Form.Group>
        </Form>
    )
    // const editorRef = useRef( null );
    // const [ lessonTitle, setLessonTitle ] = useState( '' );
    // console.log('saidbek')
    //
    // const addLesson = ( e ) => {
    //     e.preventDefault();
    //     if (editorRef.current) {
    //         const data = {
    //             title: lessonTitle,
    //             html: editorRef.current.getContent(),
    //         };
    //         console.log( data )
    //     }
    // };
    // const [ number, setNumber ] = useState( 0 )
    // useEffect(()=> {
    //     console.log('useEffect')
    // }, [number])
    // console.log('test')
    // return (
    //
    //
    //     <div className="add-course">
    //         <div className="wrapper d-flex">
    //             <section className="add-course__section">
    //                 <div className="add-course__inner">
    //                     <h1 className="add-course__inner-title">Data Science</h1>
    //
    //                     <Form
    //                         className="add-course__inner-form add-course__form"
    //                         onSubmit={ addLesson }
    //                     >
    //                         <Form.Group>
    //                             <Editor
    //                                 onInit={ ( evt, editor ) => {
    //                                     editorRef.current = editor;
    //                                 } }
    //                                 init={ {
    //                                     height: 500,
    //                                     menubar: false,
    //                                     plugins: [
    //                                         'advlist autolink lists link image charmap print preview anchor',
    //                                         'searchreplace visualblocks code fullscreen',
    //                                         'insertdatetime media table paste codesample help wordcount code media fullscreen',
    //                                     ],
    //                                     toolbar: 'undo redo | formatselect | '
    //                                         + 'bold italic backcolor | alignleft aligncenter '
    //                                         + 'alignright alignjustify | bullist numlist outdent indent | '
    //                                         + 'removeformat | help | codesample media fullscreen',
    //                                     content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    //                                 } }
    //                             />
    //                             <button type="submit" className="d-flex login__btn btn btn-primary ms-auto mt-3">Submit
    //                                 form
    //                             </button>
    //                         </Form.Group>
    //                     </Form>
    //                 </div>
    //             </section>
    //         </div>
    //     </div>
    // );
};

export default Video;
