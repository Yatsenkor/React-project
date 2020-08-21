import React from 'react';
import './post-add-form.css';

const PostAddForm = () =>{
    return (
        <form className="bottom-panel d-flex">
            <input
                 type="text"
                 className="form-control new-post-label"
                 placeholder="О чем ты думаешь сейчас"
            />
             <button 
                    type="submit"
                    className="btn btn-outline-secondary">
                        Добаить
                </button>
        </form>
    )
}
export default PostAddForm;