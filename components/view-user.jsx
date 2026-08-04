import generateProfile from "../utils/mock-users";
import TinderCard from 'react-tinder-card';
import { useState, useRef } from 'react';
import '../css/view-user.css'

const db = Array.from({length: 10}, () => generateProfile());

const FlipCard = () => {
    const [users, setUsers] = useState(db);
    const [isThisCardOpen, setIsProfileOpen] = useState(false);
    const childRefs = useRef([]);

    const onSwipe = (direction, name_user) => {
        console.log(`Карточка ${name_user} улетела в ${direction}`)
    }

    const onCardLeftScreen = (id) => {
        setUsers(prev => prev.filter(user => user.id !== id));
    }

    const swiped = (direction, id) => {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            childRefs.current[index].swipe(direction);
        }
    }

    const openProfile = (id) => {
        setIsProfileOpen(true);
    };

    const closeProfile = () => {
        setIsProfileOpen(false);
    };

    return (
        <>
            <header className="header">
                <div className="container flip-header"></div>
            </header>
            <main className="main">
                <section className="app-flip">
                    <div className="container card-stack">
                        {users.map((user, index) => {
                            
                            return (
                                <div key={user.id} className="card-wrapper">
                                    <TinderCard
                                        ref={el => childRefs.current[index] = el}
                                        onSwipe={(dir) => onSwipe(dir, user.name)}
                                        onCardLeftScreen={() => onCardLeftScreen(user.id)}
                                        preventSwipe={isThisCardOpen ? ['left', 'right', 'up', 'down'] : ['up', 'down']}
                                        className={`swipe-card ${isThisCardOpen ? 'frozen' : ''}`}
                                        swipeRequirementType="position" 
                                        swipeThreshold={100}
                                    >
                                        <img 
                                            src={user.photo} 
                                            alt={user.name} 
                                            className="card-image" 
                                            draggable='false'
                                            onError={(e) => { e.target.src = 'https://via.placeholder.com/400x600?text=No+Image'; }}
                                        />
                                        <div className="card-footer">
                                            <div className="card-footer-top">
                                                <span className='card-user-name'>
                                                    {user.name}
                                                </span>
                                                <button 
                                                    className="btn btn-info"
                                                    onClick={() => isThisCardOpen ? closeProfile() : openProfile(user.id)}
                                                >
                                                    { isThisCardOpen ? "▼" : "▲" }
                                                </button>
                                            </div>
                                            <div className="card-footer-bottom">
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
                                        </div>  
                                    </TinderCard>
                                
                                    <div className={`profile-bottom-sheet ${isThisCardOpen ? 'open' : ''}`}>
                                        <div className="sheet-handle"></div>
                                        <div className="sheet-content">
                                            <button className="btn btn-close-sheet" onClick={closeProfile}>
                                                ▼
                                            </button>
                                            <h2 className="sheet-name">{user.name}</h2>
                                            <div className="sheet-section">
                                                <h3>Информация</h3>
                                                <div className="tags-row">
                                                    <span className="tag">Возраст: {user.age}</span>
                                                    <span className="tag">Пол: {user.gender}</span>
                                                    <span className="tag">Город: {user.city}</span>
                                                    <span className="tag">Статус: {user.status}</span>
                                                    <span className="tag">Расстояние: {user.distance}</span>
                                                    <span className="tag">Интерес: {user.interest}</span>
                                                    <span className="tag">Онлайн: {user.online}</span>
                                                    <span className="tag">Последняя активность: {user.lastActive}</span>
                                                    <span className="tag">Высота: {user.height}</span>
                                                    <span className="tag">Работа: {user.job}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
            <footer className="footer"></footer>
        </>
    )
}

export default FlipCard;