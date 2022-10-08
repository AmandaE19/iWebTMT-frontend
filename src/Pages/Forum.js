import React, { useEffect, useState } from 'react'

import '../Assets/css/pages/Forum.css'

import People from '../Assets/img/icons/IconPeople.svg'
import Close from '../Assets/img/icons/IconClose.svg'

import Header from '../Components/Header'

import Axios from 'axios';

import { Loading } from '../Components/Loading'

const Forum = () => {

    const [commentList, setCommentList] = useState([]);
    const [commentCode, setCommentCode] = useState("");
    const [comment, setComment] = useState("");
    const [loader, setLoader] = useState(false);

    const handleComment = (e) => { setComment(e.target.value) }


    useEffect(() => {
        deleteComment();
    }, [commentCode])

    useEffect(() => {
        getComments();
    }, [comment])

    const createComment = () => {
        if (comment) {
            const name = localStorage.getItem('Name')
            const userCode = localStorage.getItem('UserCode')
            Axios.post('http://localhost:8000/create_comment', {
                content: comment,
                name: name,
                userCode: userCode
            }).then((response) => {
                if (response) {
                    alert('Comentário enviado')
                    window.location.reload()
                }
                else {
                    alert('Falha ao comentar')
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    const getComments = () => {
        setLoader(true)
        Axios.get('http://localhost:8000/comments_list', {
        }).then((response) => {
            setCommentList(response.data)
        }).catch((err) => {
            console.log(err)
        })
        setLoader(false)
    }

    const deleteComment = () => {
        if (commentCode !== '') {
            const userCode = localStorage.getItem('UserCode')
            Axios.delete(`http://localhost:8000/delete_comment/${commentCode}/${userCode}`).then((response) => {
                console.log(response)
                if (response.data === 'Este comentário pertence a outro usuário') {
                    alert(`Falha ao excluir comentário: ${response.data}`)
                }
                else {
                    window.location.reload()
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <div className='forum'>
            <Header />
            {loader && <Loading />}
            <div className='forum_content'>
                {commentList.length > 0
                    &&
                    commentList.map((comment) => {
                        return (
                            <div className='forum_publications'>
                                <img src={People} alt='imagem do usuário' className='forum_people' />
                                <div className='forum_publication'>
                                    <img src={Close} className='forum_delete' onClick={() => setCommentCode(comment.commentCode)} alt='Excluir' />
                                    <span className='forum_publication_title'>{comment.name}</span>
                                    <span className='forum_publication_text'>{comment.content}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='forum_add_comment'>
                <div className='forum_add_comment_content'>
                    <input type='text' value={comment} onChange={handleComment} className='forum_input' placeholder='Escreva um comentário'></input>
                    <button className='forum_button' onClick={createComment}>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Forum;
