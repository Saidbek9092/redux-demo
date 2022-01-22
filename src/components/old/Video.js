import React, {
    useRef,
    useState,
} from 'react';

import { Editor } from '@tinymce/tinymce-react';
import { Form } from 'react-bootstrap';

const Video = () => {
    const editorRef = useRef( null );
    const [ lessonTitle, setLessonTitle ] = useState( '' );
    console.log('saidbek')

    const addLesson = ( e ) => {
        e.preventDefault();
        if (editorRef.current) {
            const data = {
                title: lessonTitle,
                html: editorRef.current.getContent(),
            };
            console.log( data )
        }
    };

    return (

        <div className="add-course">
            <div className="wrapper d-flex">
                <section className="add-course__section">
                    <div className="add-course__inner">
                        <h1 className="add-course__inner-title">Data Science</h1>

                        <Form
                            className="add-course__inner-form add-course__form"
                            onSubmit={ addLesson }
                        >
                            <Form.Group>
                                <Editor
                                    onInit={ ( evt, editor ) => {
                                        editorRef.current = editor;
                                    } }
                                    init={ {
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste codesample help wordcount code media fullscreen',
                                        ],
                                        toolbar: 'undo redo | formatselect | '
                                            + 'bold italic backcolor | alignleft aligncenter '
                                            + 'alignright alignjustify | bullist numlist outdent indent | '
                                            + 'removeformat | help | codesample media fullscreen',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                    } }
                                />
                                <button type="submit" className="d-flex login__btn btn btn-primary ms-auto mt-3">Submit
                                    form
                                </button>
                            </Form.Group>
                        </Form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Video;
