import generateProfile from "../utils/mock-users";
import TinderCard from 'react-tinder-card';
import { useState, useRef } from 'react';
import '../css/view-user.css'



const db = Array.from({length: 5}, () => generateProfile());

const FlipCard = () => {
    const [users, setUsers] = useState(db);
    const childRefs = useRef([]);
    const startX = useRef(0);
    const startY = useRef(0);
    const isDragging = useRef(false);

    const onSwipe = (direction, name_user) => {
        console.log(`Карточка ${name_user} улетела в ${direction}`)
    }

    const onCardLeftScreen = (id) => {
        setUsers(prev => prev.filter(user => user.id !== id))
    }

    const swiped = (direction, id) => {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            childRefs.current[index].swipe(direction);
        }
    }

    return (
        <>
            <header className="header">
                <div className="container flip-header">

                </div>
            </header>
            <main className="main">
                <section className="app-flip">
                    <div className="container card-stack">
                        {users.map((user, index) => (
                            <TinderCard
                                ref={el => childRefs.current[index] = el}
                                key={user.id}
                                onSwipe={(dir) => onSwipe(dir, user.name)}
                                onCardLeftScreen={() => onCardLeftScreen(user.id)}
                                preventSwipe={['up', 'down']}
                                className="swipe-card"
                                swipeRequirementType="position" 
                                swipeThreshold={100}
                            >
                                <img 
                                    src={user.photo} 
                                    alt={user.name} 
                                    className="card-image" 
                                    draggable='false'
                                />
                                <div className="swipe-card-bottom">
                                    <span className='card-user-name'>
                                        {user.name}
                                    </span>
                                    <p className='card-user-status'>
                                        {user.status}
                                    </p>
                                    <div className="buttons-container">
                                        <button 
                                            className="btn btn-nope" 
                                            onClick={() => swiped('left', user.id)}
                                        >
                                            ✕
                                        </button>
                                        <button 
                                            className="btn btn-like" 
                                            onClick={() => swiped('right', user.id)}
                                        >
                                            ♥
                                        </button>
                                    </div>
                                </div>  
                            </TinderCard>
                        ))}
                    </div>
                </section>
            </main>
            <footer className="footer">
            </footer>
            
        </>
    )
}

export default FlipCard;